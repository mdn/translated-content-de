---
title: Buchdetailseite
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Book_detail_page
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Die _Buchdetailseite_ muss die Informationen für ein bestimmtes `Buch` (identifiziert durch seinen automatisch generierten `_id`-Feldwert) anzeigen, sowie Informationen über jede damit verbundene Kopie in der Bibliothek (`BookInstance`). Wenn wir einen Autor, ein Genre oder eine Buchinstanz anzeigen, sollten diese mit der zugehörigen Detailseite des jeweiligen Elements verlinkt sein.

## Controller

Öffnen Sie **/controllers/bookController.js**. Finden Sie die exportierte `book_detail()`-Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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
> Wir müssen in diesem Schritt keine zusätzlichen Module einbinden, da wir die Abhängigkeiten bereits beim Implementieren des Home-Page-Controllers importiert haben.

Der Ansatz ist genau der gleiche wie für die [Genre-Detailseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page) beschrieben.
Die Routen-Controller-Funktion verwendet `Promise.all()`, um das angegebene `Buch` und seine zugehörigen Kopien (`BookInstance`) parallel abzufragen.
Wenn kein übereinstimmendes Buch gefunden wird, wird ein Error-Objekt mit einem "404: Not Found"-Fehler zurückgegeben.
Wenn das Buch gefunden wird, werden die abgerufenen Datenbankinformationen mit der "book_detail"-Vorlage gerendert.
Da der Schlüssel 'title' verwendet wird, um der Webseite einen Namen zu geben (wie im Header in 'layout.pug' definiert), übergeben wir diesmal `results.book.title`, während die Webseite gerendert wird.

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
> Die Liste der Genres, die mit dem Buch verbunden sind, wird in der Vorlage wie folgt implementiert. Dies fügt nach jedem mit dem Buch verknüpften Genre ein Komma und ein geschütztes Leerzeichen hinzu, mit Ausnahme des letzten Genres.
>
> ```pug
>   p #[strong Genre: ]
>     each val, index in book.genre
>       a(href=val.url) #{val.name}
>       if index < book.genre.length - 1
>         |,&nbsp;
> ```

## Wie sieht das aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie den Link _Alle Bücher_, und wählen Sie dann eines der Bücher aus. Wenn alles richtig eingerichtet ist, sollte Ihre Seite in etwa wie der folgende Screenshot aussehen.

![Buchdetailseite - Express Local Library Seite](locallibary_express_book_detail.png)

## Nächste Schritte

- Zurück zu [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Autorendetailseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_detail_page).
