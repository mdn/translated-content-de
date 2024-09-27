---
title: Buchliste-Seite
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Als Nächstes implementieren wir unsere Buchliste-Seite. Diese Seite muss eine Liste aller Bücher in der Datenbank zusammen mit ihrem Autor anzeigen, wobei jeder Buchtitel ein Hyperlink zu seiner zugehörigen Buchdetailseite sein soll.

## Controller

Die Controllerfunktion der Buchliste muss eine Liste aller `Book`-Objekte in der Datenbank abrufen, diese sortieren und dann an das Template zur Darstellung übergeben.

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

Der Routen-Handler ruft die `find()`-Funktion auf dem `Book`-Modell auf und wählt dabei nur `title` und `author` zur Rückgabe aus, da wir die anderen Felder nicht benötigen (es werden auch die Felder `_id` und virtuelle Felder zurückgegeben) und sortiert die Ergebnisse alphabetisch nach dem Titel mittels der `sort()`-Methode.
Wir rufen auch `populate()` auf `Book` auf und geben das `author`-Feld an—dies ersetzt die gespeicherte Autoren-ID des Buches mit den vollständigen Autoreninformationen.
`exec()` wird dann am Ende verkettet, um die Anfrage auszuführen und ein Versprechen zurückzugeben.

Der Routen-Handler verwendet `await`, um auf das Versprechen zu warten und die Ausführung zu pausieren, bis es erfüllt ist.
Wenn das Versprechen erfüllt ist, werden die Ergebnisse der Anfrage in der Variablen `allBooks` gespeichert und der Handler setzt die Ausführung fort.

Der letzte Teil des Routen-Handlers ruft `render()` auf, gibt das **book_list** (.pug)-Template an und übergibt Werte für `title` und `book_list` an das Template.

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

Die Ansicht erweitert das **layout.pug** Basistemplate und überschreibt den `block`, der '**content**' genannt wird. Sie zeigt den `title`, den wir vom Controller (über die `render()`-Methode) übergeben haben, und iteriert durch die `book_list`-Variable mithilfe der `each`-`in`-Syntax. Für jedes Buch wird ein Listenelement erstellt, das den Buchtitel als Link zur Buchdetailseite gefolgt vom Autorennamen anzeigt.
Wenn keine Bücher in der `book_list` vorhanden sind, wird die `else`-Anweisung ausgeführt und der Text 'There are no books' angezeigt.

> [!NOTE]
> Wir verwenden `book.url`, um den Link zum Detaildatensatz für jedes Buch bereitzustellen (wir haben diese Route implementiert, aber nicht die Seite). Dies ist eine virtuelle Eigenschaft des `Book`-Modells, die das `_id`-Feld der Modellinstanz verwendet, um einen eindeutigen URL-Pfad zu erzeugen.

Interessant ist hier, dass jedes Buch als zwei Zeilen definiert ist, wobei die zweite Zeile das Pipe-Zeichen verwendet. Dieser Ansatz ist notwendig, weil der Name des Autors, wenn er in der vorherigen Zeile stünde, Teil des Hyperlinks wäre.

## Wie sieht es aus?

Führen Sie die Anwendung aus (siehe [Testen der Routen](/de/docs/Learn/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle) und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie dann den _Alle Bücher_-Link. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite dem folgenden Screenshot ähneln.

![Buchliste-Seite - Express Local Library Seite](new_book_list.png)

## Nächste Schritte

- Zurück zu [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Fortfahren mit dem nächsten Unterartikel von Teil 5: [BookInstance-Liste-Seite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page).
