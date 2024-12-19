---
title: Buchdetailseite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Die _Buchdetailseite_ muss die Informationen für ein spezifisches `Book` (identifiziert durch den automatisch generierten `_id` Feldwert) anzeigen, zusammen mit Informationen über jede zugehörige Kopie in der Bibliothek (`BookInstance`). Wo immer wir einen Autor, ein Genre oder eine Buchinstanz anzeigen, sollten diese mit der zugehörigen Detailseite für diesen Gegenstand verlinkt sein.

## Controller

Öffnen Sie **/controllers/bookController.js**. Finden Sie die exportierte `book_detail()` Controller-Methode und ersetzen Sie sie mit dem folgenden Code.

```js
// Display detail page for a specific book.
exports.book_detail = asyncHandler(async (req, res, next) => {
  // Get details of books, book instances for specific book
  const [book, bookInstances] = await Promise.all([
    Book.findById(req.params.id).populate("author").populate("genre").exec(),
    BookInstance.find({ book: req.params.id }).exec(),
  ]);

  if (book === null) {
    // No results.
    const err = new Error("Book not found");
    err.status = 404;
    return next(err);
  }

  res.render("book_detail", {
    title: book.title,
    book: book,
    book_instances: bookInstances,
  });
});
```

> [!NOTE]
> Wir müssen in diesem Schritt keine zusätzlichen Module anfordern, da wir die Abhängigkeiten bereits beim Implementieren des Home-Page-Controllers importiert haben.

Der Ansatz ist genau derselbe wie im [Genre-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page) beschrieben.
Die Routen-Controller-Funktion verwendet `Promise.all()`, um das spezifizierte `Book` und seine zugehörigen Kopien (`BookInstance`) parallel abzufragen.
Wenn kein passendes Buch gefunden wird, wird ein Error-Objekt mit einem "404: Not Found"-Fehler zurückgegeben.
Wird das Buch gefunden, werden die abgerufenen Daten aus der Datenbank mithilfe des "book_detail"-Templates gerendert.
Da der Schlüssel 'title' verwendet wird, um der Webseite (wie im Header in 'layout.pug' definiert) einen Namen zu geben, übergeben wir diesmal `results.book.title` beim Rendern der Webseite.

## Ansicht

Erstellen Sie **/views/book_detail.pug** und fügen Sie den untenstehenden Text hinzu.

```pug
extends layout

block content
  h1 Title: #{book.title}

  p #[strong Author: ]
    a(href=book.author.url) #{book.author.name}
  p #[strong Summary:] #{book.summary}
  p #[strong ISBN:] #{book.isbn}
  p #[strong Genre: ]
    each val, index in book.genre
      a(href=val.url) #{val.name}
      if index < book.genre.length - 1
        |,&nbsp;

  div(style='margin-left:20px;margin-top:20px')
    h2(style='font-size: 1.5rem;') Copies

    each val in book_instances
      hr
      if val.status=='Available'
        p.text-success #{val.status}
      else if val.status=='Maintenance'
        p.text-danger #{val.status}
      else
        p.text-warning #{val.status}
      p #[strong Imprint:] #{val.imprint}
      if val.status!='Available'
        p #[strong Due back:] #{val.due_back}
      p #[strong Id: ]
        a(href=val.url) #{val._id}

    else
      p There are no copies of this book in the library.
```

Fast alles in diesem Template wurde in den vorherigen Abschnitten demonstriert.

> [!NOTE]
> Die Liste der mit dem Buch assoziierten Genres wird im Template wie folgt implementiert. Dies fügt ein Komma und ein geschütztes Leerzeichen nach jedem mit dem Buch assoziierten Genre, außer dem letzten, hinzu.
>
> ```pug
>   p #[strong Genre: ]
>     each val, index in book.genre
>       a(href=val.url) #{val.name}
>       if index < book.genre.length - 1
>         |,&nbsp;
> ```

## Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie den Link _Alle Bücher_, dann wählen Sie eines der Bücher. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite ungefähr wie der folgende Screenshot aussehen.

![Buchdetailseite - Express Local Library Seite](locallibary_express_book_detail.png)

## Nächste Schritte

- Zurück zu [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Autoren-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_detail_page).
