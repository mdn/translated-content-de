---
title: Buchdetailseite
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Book_detail_page
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Die _Buchdetailseite_ muss die Informationen zu einem bestimmten `Book` anzeigen (identifiziert anhand des automatisch generierten `_id`-Feldwertes), zusammen mit Informationen über jedes zugehörige Exemplar in der Bibliothek (`BookInstance`). Überall dort, wo wir einen Autor, ein Genre oder ein Buch-Exemplar anzeigen, sollten diese mit der zugehörigen Detailseite für dieses Element verlinkt sein.

## Controller

Öffnen Sie **/controllers/bookController.js**. Finden Sie die exportierte `book_detail()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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
> In diesem Schritt müssen wir keine zusätzlichen Module einbinden, da wir die Abhängigkeiten bereits beim Implementieren des Home-Page-Controllers importiert haben.

Der Ansatz ist genau derselbe wie beim [Genre-Detailseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page) beschrieben.
Die Routen-Controller-Funktion verwendet `Promise.all()`, um das angegebene `Book` und seine zugehörigen Exemplare (`BookInstance`) parallel abzufragen.
Wird kein passendes Buch gefunden, wird ein Fehlerobjekt mit einem "404: Not Found"-Fehler zurückgegeben.
Wenn das Buch gefunden wird, werden die abgerufenen Datenbankinformationen mit der "book_detail"-Vorlage gerendert.
Da der Schlüssel 'title' verwendet wird, um der Webseite einen Namen zu geben (wie im Header in 'layout.pug' definiert), übergeben wir diesmal `results.book.title`, während wir die Webseite rendern.

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

Fast alles in dieser Vorlage wurde in den vorherigen Abschnitten demonstriert.

> [!NOTE]
> Die Liste der mit dem Buch verknüpften Genres wird in der Vorlage wie unten implementiert. Dies fügt ein Komma und ein geschütztes Leerzeichen nach jedem Genre hinzu, das mit dem Buch verknüpft ist, außer dem letzten.
>
> ```pug
>   p #[strong Genre: ]
>     each val, index in book.genre
>       a(href=val.url) #{val.name}
>       if index < book.genre.length - 1
>         |,&nbsp;
> ```

## Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie den Link _Alle Bücher_ aus und dann eines der Bücher. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite etwa wie der folgende Screenshot aussehen.

![Buchdetailseite - Express Local Library Seite](locallibary_express_book_detail.png)

## Nächste Schritte

- Zurück zu [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Weiter zum nächsten Unterartikel von Teil 5: [Autorendetailseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_detail_page).
