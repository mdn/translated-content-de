---
title: Buch-Detailseite
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Book_detail_page
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Die _Buch-Detailseite_ soll die Informationen für ein spezifisches `Book` anzeigen (identifiziert durch den automatisch generierten `_id` Feldwert), zusammen mit Informationen zu jedem zugehörigen Exemplar in der Bibliothek (`BookInstance`). Wo immer wir einen Autor, ein Genre oder ein Buchexemplar anzeigen, sollten diese mit der zugehörigen Detailseite verlinkt werden.

## Controller

Öffnen Sie **/controllers/bookController.js**. Finden Sie die exportierte Methode `book_detail()` im Controller und ersetzen Sie sie durch den folgenden Code.

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
> In diesem Schritt müssen keine zusätzlichen Module angefordert werden, da wir die Abhängigkeiten bereits importiert haben, als wir den Controller für die Startseite implementiert haben.

Der Ansatz ist genau derselbe wie für die [Genre-Detailseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page) beschrieben. Die Routen-Controller-Funktion verwendet `Promise.all()`, um das angegebene `Book` und dessen zugehörige Exemplare (`BookInstance`) parallel abzufragen. Wenn kein passendes Buch gefunden wird, wird ein Fehlerobjekt mit einem "404: Not Found"-Fehler zurückgegeben. Wenn das Buch gefunden wird, werden die abgerufenen Datenbankeninformationen mithilfe der "book_detail"-Vorlage gerendert. Da der Schlüssel 'title' verwendet wird, um der Webseite (wie in der Kopfzeile in 'layout.pug' definiert) einen Namen zu geben, geben wir diesmal `results.book.title` beim Rendern der Webseite an.

## Ansicht

Erstellen Sie **/views/book_detail.pug** und fügen Sie den folgenden Text hinzu.

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

Fast alles in dieser Vorlage wurde in vorherigen Abschnitten demonstriert.

> [!NOTE]
> Die Liste der mit dem Buch verbundenen Genres wird in der Vorlage wie unten implementiert. Dies fügt ein Komma und ein geschütztes Leerzeichen nach jedem mit dem Buch verbundenen Genre hinzu, außer nach dem letzten.
>
> ```pug
>   p #[strong Genre: ]
>     each val, index in book.genre
>       a(href=val.url) #{val.name}
>       if index < book.genre.length - 1
>         |,&nbsp;
> ```

## Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie den Link _All books_, und wählen Sie dann eines der Bücher aus. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite ungefähr wie der folgende Screenshot aussehen.

![Buch-Detailseite - Express Local Library Website](locallibary_express_book_detail.png)

## Nächste Schritte

- Zurück zu [Express Tutorial Teil 5: Anzeige von Bibliotheksdaten](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Autoren-Detailseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_detail_page).
