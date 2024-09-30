---
title: Buchlisten-Seite
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Als Nächstes implementieren wir unsere Buchlisten-Seite. Diese Seite soll eine Liste aller Bücher in der Datenbank zusammen mit ihrem Autor anzeigen, wobei jeder Buchtitel ein Hyperlink zur zugehörigen Buchdetailseite ist.

## Controller

Die Controller-Funktion für die Buchliste muss eine Liste aller `Book`-Objekte in der Datenbank abrufen, diese sortieren und dann an die Vorlage zur Darstellung übergeben.

Öffnen Sie **/controllers/bookController.js**. Finden Sie die exportierte `book_list()`-Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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

Der Routen-Handler ruft die `find()`-Funktion auf dem `Book`-Modell auf, um nur `title` und `author` zurückzugeben, da wir die anderen Felder nicht benötigen (es werden auch die Felder `_id` und virtuelle Felder zurückgegeben), und sortiert die Ergebnisse alphabetisch nach dem Titel mit der `sort()`-Methode. Wir rufen auch `populate()` auf `Book` auf und spezifizieren das `author`-Feld—dies wird die gespeicherte Buchautoren-ID durch die vollständigen Autorendetails ersetzen.
`exec()` wird dann angehängt, um die Abfrage auszuführen und ein Versprechen zurückzugeben.

Der Routen-Handler verwendet `await`, um auf das Versprechen zu warten, und pausiert die Ausführung, bis es erfüllt wird. Wenn das Versprechen erfüllt ist, werden die Ergebnisse der Abfrage in der Variablen `allBooks` gespeichert und der Handler setzt die Ausführung fort.

Der letzte Teil des Routen-Handlers ruft `render()` auf, spezifiziert die **book_list** (.pug) Vorlage und übergibt Werte für `title` und `book_list` in die Vorlage.

## Ansicht

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

Die Ansicht erweitert die **layout.pug**-Basisvorlage und überschreibt den `block` namens '**content**'. Sie zeigt den `title` an, den wir vom Controller über die `render()`-Methode übergeben haben, und durchläuft die `book_list`-Variable mit der `each`-`in`-Syntax. Ein Listenelement wird für jedes Buch erstellt, das den Buchtitel als Link zur Buchdetailseite anzeigt, gefolgt vom Autorennamen. Falls keine Bücher in der `book_list` vorhanden sind, wird der `else`-Abschnitt ausgeführt und zeigt den Text 'Es gibt keine Bücher' an.

> [!NOTE]
> Wir verwenden `book.url`, um den Link zum Detaildatensatz für jedes Buch bereitzustellen (wir haben diese Route implementiert, aber die Seite noch nicht). Dies ist eine virtuelle Eigenschaft des `Book`-Modells, die das `_id`-Feld der Modellinstanz verwendet, um einen eindeutigen URL-Pfad zu erzeugen.

Interessant ist hier, dass jedes Buch als zwei Zeilen definiert ist, wobei für die zweite Zeile die Pipe verwendet wird. Diese Vorgehensweise ist notwendig, weil der Autorenname Teil des Hyperlinks wäre, wenn er in der vorherigen Zeile stünde.

## Wie sieht das aus?

Führen Sie die Anwendung aus (siehe [Testen der Routen](/de/docs/Learn/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle) und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie dann den _Alle Bücher_-Link aus. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite etwa wie der folgende Screenshot aussehen.

![Buchlisten-Seite - Express Local Library Seite](new_book_list.png)

## Nächste Schritte

- Zurück zu [Express Tutorial Teil 5: Anzeige von Bibliotheksdaten](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie fort mit dem nächsten Unterartikel von Teil 5: [BookInstance-Listen-Seite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page).
