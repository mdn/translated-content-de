---
title: Buchliste Seite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Als nächstes implementieren wir unsere Buchliste-Seite. Diese Seite muss eine Liste aller Bücher in der Datenbank zusammen mit ihrem Autor anzeigen, wobei jeder Buchtitel ein Hyperlink zu seiner zugehörigen Buchdetailseite ist.

## Controller

Die Buchlisten-Controller-Funktion muss eine Liste aller `Book`-Objekte in der Datenbank abrufen, diese sortieren und dann an das Template zur Darstellung übergeben.

Öffnen Sie **/controllers/bookController.js**. Finden Sie die exportierte `book_list()`-Controller-Methode und ersetzen Sie diese durch den folgenden Code.

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

Der Routen-Handler ruft die `find()`-Funktion auf dem `Book`-Modell auf und wählt, nur `title` und `author` zurückzugeben, da wir die anderen Felder nicht benötigen (es werden auch `_id` und virtuelle Felder zurückgegeben) und sortiert die Ergebnisse alphabetisch nach dem Titel mit der `sort()`-Methode.
Wir rufen auch `populate()` auf `Book` auf und geben das `author`-Feld an – dieses wird die gespeicherte Autoren-ID des Buches durch die vollständigen Autorinformationen ersetzen.
`exec()` wird dann angehängt, um die Abfrage auszuführen und ein Versprechen zurückzugeben.

Der Routen-Handler verwendet `await`, um auf das Versprechen zu warten und die Ausführung zu pausieren, bis es erfüllt ist.
Wird das Versprechen erfüllt, werden die Ergebnisse der Abfrage in der Variablen `allBooks` gespeichert und der Handler setzt die Ausführung fort.

Der letzte Teil des Routen-Handlers ruft `render()` auf und gibt das **book_list** (.pug) Template an und übergibt Werte für `title` und `book_list` in das Template.

## Ansicht

Erstellen Sie **/views/book_list.pug** und kopieren Sie den untenstehenden Text hinein.

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

Die Ansicht erweitert das **layout.pug** Basistemplate und überschreibt den `block` namens '**content**'. Es zeigt den `title` an, den wir vom Controller über die `render()`-Methode übergeben haben, und iteriert durch die `book_list`-Variable mit der `each`-`in`-Syntax. Ein Listenelement wird für jedes Buch erstellt, das den Buchtitel als Link zur Detailseite des Buches und den Autorennamen anzeigt.
Wenn keine Bücher in der `book_list` vorhanden sind, wird der `else`-Abschnitt ausgeführt und der Text 'Es gibt keine Bücher' angezeigt.

> [!NOTE]
> Wir verwenden `book.url`, um den Link zum Detaildatensatz für jedes Buch bereitzustellen (wir haben diese Route implementiert, aber noch nicht die Seite). Dies ist eine virtuelle Eigenschaft des `Book`-Modells, die das `_id`-Feld der Modellinstanz verwendet, um einen eindeutigen URL-Pfad zu erzeugen.

Interessant ist, dass jedes Buch in zwei Zeilen definiert ist, wobei in der zweiten Zeile ein Pipe verwendet wird. Dieser Ansatz ist notwendig, weil der Autorenname, wenn er in der vorherigen Zeile wäre, Teil des Hyperlinks wäre.

## Wie sieht es aus?

Führen Sie die Anwendung aus (siehe [Testen der Routen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die entsprechenden Befehle) und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie dann den Link _Alle Bücher_ aus. Wenn alles korrekt eingerichtet ist, sollte Ihre Website in etwa wie der folgende Screenshot aussehen.

![Buchliste Seite - Express Lokale Bibliothek Website](new_book_list.png)

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Anzeigedaten der Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [BookInstance-Liste Seite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page).
