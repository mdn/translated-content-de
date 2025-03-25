---
title: Buchliste-Seite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page
l10n:
  sourceCommit: 275a3c70abe52b86dd11c743bc37e0933a658072
---

{{LearnSidebar}}

Im nächsten Schritt implementieren wir unsere Buchliste-Seite. Diese Seite muss eine Liste aller Bücher in der Datenbank zusammen mit ihrem Autor anzeigen, wobei jeder Buchtitel ein Hyperlink zur zugehörigen Buchdetailseite sein soll.

## Controller

Die Controller-Funktion für die Buchliste muss eine Liste aller `Book`-Objekte in der Datenbank abrufen, diese sortieren und dann an das Template zur Darstellung übergeben.

Öffnen Sie **/controllers/bookController.js**. Finden Sie die exportierte `book_list()`-Methodenfunktion und ersetzen Sie sie durch den folgenden Code.

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

Der Routen-Handler ruft die `find()`-Funktion auf dem `Book`-Modell auf, um nur `title` und `author` zurückzugeben, da wir die anderen Felder nicht benötigen (es werden auch `_id` und virtuelle Felder zurückgegeben), und sortiert die Ergebnisse alphabetisch nach Titel mit der `sort()`-Methode.
Wir rufen außerdem `populate()` auf `Book` auf und geben das `author`-Feld an—dies wird die gespeicherte Buchautoren-ID durch die vollständigen Autorendetails ersetzen.
`exec()` wird dann an das Ende gekettet, um die Abfrage auszuführen und ein Versprechen zurückzugeben.

Der Routen-Handler verwendet `await`, um auf das Versprechen zu warten, und pausiert die Ausführung, bis es erfüllt ist.
Wenn das Versprechen erfüllt wird, werden die Ergebnisse der Abfrage in der Variable `allBooks` gespeichert und der Handler setzt die Ausführung fort.

Der letzte Teil des Routen-Handlers ruft `render()` auf, um das **book_list** (.pug)-Template zu spezifizieren und Werte für den `title` und `book_list` in das Template zu übergeben.

## Ansicht

Erstellen Sie **/views/book_list.pug** und kopieren Sie den unten stehenden Text hinein.

```pug
extends layout

block content
  h1= title
  if book_list.length
    ul
      each book in book_list
        li
          a(href=book.url) !{book.title}
          |  (#{book.author.name})

  else
    p There are no books.
```

Die Ansicht erweitert das **layout.pug** Basistemplate und überschreibt den `block` namens '**content**'. Es zeigt den `title`, den wir vom Controller über die `render()`-Methode übergeben haben, und iteriert über die Variable `book_list` mit der `each`-`in`-Syntax. Für jedes Buch wird ein Listenelement erstellt, das den Buchtitel als Link zur Buchdetailseite und den Namen des Autors anzeigt.
Wenn es keine Bücher in der `book_list` gibt, wird die `else`-Klausel ausgeführt und der Text 'Es gibt keine Bücher' wird angezeigt.

> [!NOTE]
> Wir verwenden `book.url`, um den Link zum Detaildatensatz für jedes Buch bereitzustellen (wir haben diese Route bereits implementiert, aber noch nicht die Seite). Dies ist eine virtuelle Eigenschaft des `Book`-Modells, die das `_id`-Feld der Modellinstanz verwendet, um einen eindeutigen URL-Pfad zu erzeugen.

Besonders interessant ist hier, dass jedes Buch als zwei Zeilen definiert wird, wobei die zweite Zeile den Pipe-Operator verwendet. Dieser Ansatz ist notwendig, weil der Autorenname Teil des Hyperlinks wäre, wenn er in der vorherigen Zeile stünde.

## Wie sieht es aus?

Starten Sie die Anwendung (siehe [Testen der Routen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle) und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie dann den _Alle Bücher_-Link. Wenn alles richtig eingerichtet ist, sollte Ihre Seite etwa so aussehen wie im folgenden Screenshot.

![Buchliste-Seite - Express Local Library Seite](new_book_list.png)

## Nächste Schritte

- Zurück zu [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Weiter zum nächsten Unterartikel von Teil 5: [BookInstance-Liste-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page).
