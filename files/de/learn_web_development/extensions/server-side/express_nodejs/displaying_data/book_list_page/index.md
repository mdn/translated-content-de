---
title: Buchlisten-Seite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Als Nächstes implementieren wir unsere Buchlisten-Seite. Diese Seite muss eine Liste aller Bücher in der Datenbank zusammen mit ihren Autoren anzeigen, wobei jeder Buchtitel ein Hyperlink zu seiner zugehörigen Buchdetailseite ist.

## Controller

Die Buchlisten-Controller-Funktion muss eine Liste aller `Book`-Objekte in der Datenbank abrufen, sie sortieren und dann an das Template zur Darstellung übergeben.

Öffnen Sie **/controllers/bookController.js**. Finden Sie die exportierte `book_list()` Controller-Methode und ersetzen Sie diese mit dem folgenden Code.

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

Der Routen-Handler ruft die `find()`-Funktion auf dem `Book`-Modell auf und wählt nur `title` und `author` aus, da wir die anderen Felder nicht benötigen (es wird auch das `_id`- und virtuelle Felder zurückgeben), und sortiert die Ergebnisse alphabetisch nach dem Titel mit der `sort()`-Methode.
Wir rufen auch `populate()` auf `Book` auf und geben das Feld `author` an – dies wird die gespeicherte Autoren-ID des Buches durch die vollständigen Autorendetails ersetzen.
`exec()` wird dann angefügt, um die Abfrage auszuführen und ein Versprechen zurückzugeben.

Der Routen-Handler verwendet `await`, um auf das Versprechen zu warten und die Ausführung zu pausieren, bis es erfüllt ist.
Wenn das Versprechen erfüllt wird, werden die Ergebnisse der Abfrage in der Variable `allBooks` gespeichert und der Handler setzt die Ausführung fort.

Der letzte Teil des Routen-Handlers ruft `render()` auf, spezifiziert das **book_list** (.pug)-Template und übergibt Werte für den `title` und `book_list` an das Template.

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

Die Ansicht erweitert das **layout.pug** Basistemplate und überschreibt den `block` namens '**content**'. Es zeigt den `title`, den wir aus dem Controller über die `render()`-Methode übergeben haben, an und iteriert durch die `book_list`-Variable, indem es die `each`-`in`-Syntax verwendet. Ein Listenelement wird für jedes Buch erstellt, das den Buchtitel als Link zur Detailseite des Buches zusammen mit dem Namen des Autors anzeigt.
Wenn keine Bücher in der `book_list` vorhanden sind, wird der `else`-Abschnitt ausgeführt und zeigt den Text "There are no books" an.

> [!NOTE]
> Wir verwenden `book.url`, um den Link zum Detaildatensatz für jedes Buch bereitzustellen (wir haben diese Route implementiert, aber die Seite noch nicht). Dies ist eine virtuelle Eigenschaft des `Book`-Modells, die das `_id`-Feld der Modellinstanz verwendet, um einen eindeutigen URL-Pfad zu erzeugen.

Interessant ist hier, dass jedes Buch als zwei Zeilen definiert ist, wobei für die zweite Zeile der Pipe-Operator verwendet wird. Diese Herangehensweise ist notwendig, da der Autorenname auf der vorherigen Zeile Teil des Hyperlinks wäre.

## Wie sieht es aus?

Führen Sie die Anwendung aus (siehe [Testen der Routen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die relevanten Befehle) und öffnen Sie Ihren Browser auf `http://localhost:3000/`. Wählen Sie dann den _All books_ Link aus. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite in etwa wie der folgende Screenshot aussehen.

![Buchlisten-Seite - Express Local Library Seite](new_book_list.png)

## Nächste Schritte

- Zurück zu [Express Tutorial Teil 5: Anzeigend Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [BookInstance Listen-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page).
