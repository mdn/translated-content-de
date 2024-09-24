---
title: Buchlisten-Seite
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Als nächstes implementieren wir unsere Buchlisten-Seite. Diese Seite muss eine Liste aller Bücher in der Datenbank zusammen mit ihren Autoren anzeigen, wobei jeder Buchtitel ein Hyperlink zur zugehörigen Buchdetailseite sein soll.

## Controller

Die Buchlisten-Controllerfunktion muss eine Liste aller `Book`-Objekte in der Datenbank abrufen, sie sortieren und dann zur Vorlage zur Darstellung übergeben.

Öffnen Sie **/controllers/bookController.js**. Suchen Sie die exportierte `book_list()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

```js
// Display list of all books.
exports.book_list = asyncHandler(async (req, res, next) => {
  const allBooks = await Book.find({}, "title author")
    .sort({ title: 1 })
    .populate("author")
    .exec();

  res.render("book_list", { title: "Book List", book_list: allBooks });
});
```

Der Routen-Handler ruft die Funktion `find()` auf dem `Book`-Modell auf, wobei nur `title` und `author` zurückgegeben werden, da wir die anderen Felder nicht benötigen (es wird auch `_id` und virtuelle Felder zurückgeben) und die Ergebnisse alphabetisch nach Titel mit der Methode `sort()` sortieren.
Wir rufen auch `populate()` auf `Book` auf und spezifizieren das `author`-Feld — dies wird die gespeicherte Buchautoren-ID mit den vollständigen Autorendetails ersetzen.
`exec()` wird dann an das Ende angehängt, um die Abfrage auszuführen und ein Versprechen zurückzugeben.

Der Routen-Handler verwendet `await`, um auf das Versprechen zu warten und die Ausführung zu pausieren, bis es erfüllt ist.
Wenn das Versprechen erfüllt wird, werden die Ergebnisse der Abfrage in der Variablen `allBooks` gespeichert und der Handler setzt die Ausführung fort.

Der letzte Teil des Routen-Handlers ruft `render()` auf, spezifiziert die **book_list** (.pug) Vorlage und übergibt Werte für den `title` und die `book_list` an die Vorlage.

## View

Erstellen Sie **/views/book_list.pug** und kopieren Sie den folgenden Text hinein.

```pug
extends layout

block content
  h1= title
  if book_list.length
    ul
      each book in book_list
        li
          a(href=book.url) #{book.title}
          |  (#{book.author.name})

  else
    p There are no books.
```

Die Ansicht erweitert die Basistemplate **layout.pug** und überschreibt den `block` namens '**content**'. Sie zeigt den `title` an, den wir vom Controller über die Methode `render()` übergeben haben, und iteriert durch die Variable `book_list` mit der `each`-`in` Syntax. Ein Listenelement wird für jedes Buch erstellt, das den Buchtitel als Link zur Detailseite des Buches sowie den Autorennamen anzeigt.
Wenn es keine Bücher in der `book_list` gibt, wird die `else`-Klausel ausgeführt und der Text "There are no books" angezeigt.

> [!NOTE]
> Wir nutzen `book.url`, um den Link zum Detaildatensatz für jedes Buch bereitzustellen (wir haben diese Route implementiert, aber die Seite noch nicht). Dies ist eine virtuelle Eigenschaft des `Book`-Modells, die das `_id`-Feld der Modellinstanz verwendet, um einen eindeutigen URL-Pfad zu erstellen.

Interessant ist hier, dass jedes Buch als zwei Zeilen definiert ist, wobei das Rohr für die zweite Zeile verwendet wird. Dieser Ansatz ist notwendig, da der Autorenname Teil des Hyperlinks wäre, wenn er in der vorherigen Zeile stünde.

## Wie sieht das aus?

Führen Sie die Anwendung aus (siehe [Testen der Routen](/de/docs/Learn/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle) und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie dann den Link _Alle Bücher_ aus. Wenn alles richtig eingerichtet ist, sollte Ihre Seite ähnlich wie der folgende Screenshot aussehen.

![Buchlisten-Seite - Express-Lokale-Bibliothek-Seite](new_book_list.png)

## Nächste Schritte

- Kehren Sie zurück zum [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie fort mit dem nächsten Unterartikel von Teil 5: [BookInstance-Listen-Seite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page).
