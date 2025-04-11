---
title: Buchdetailseite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Die _Buchdetailseite_ muss die Informationen für ein spezifisches `Buch` anzeigen (identifiziert mithilfe des automatisch generierten Werts des `_id`-Felds), zusammen mit Informationen über jedes zugehörige Exemplar in der Bibliothek (`BookInstance`). Überall dort, wo ein Autor, Genre oder Buchexemplar angezeigt wird, sollten diese mit der zugehörigen Detailseite des Elements verlinkt sein.

## Controller

Öffnen Sie **/controllers/bookController.js**. Suchen Sie die exportierte `book_detail()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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
> In diesem Schritt müssen keine zusätzlichen Module importiert werden, da wir die Abhängigkeiten bereits beim Implementieren des Home-Page-Controllers importiert haben.

Der Ansatz ist genau derselbe wie im [Genre-Detailseite-Leitfaden](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page) beschrieben. Die Routen-Controller-Funktion verwendet `Promise.all()`, um das angegebene `Buch` und seine zugehörigen Exemplare (`BookInstance`) parallel abzufragen. Wenn kein passendes Buch gefunden wird, wird ein Error-Objekt mit einem "404: Not Found"-Fehler zurückgegeben. Wenn das Buch gefunden wird, werden die abgerufenen Datenbankinformationen mit der "book_detail"-Vorlage gerendert. Da der Schlüssel 'title' verwendet wird, um der Webseite einen Namen zu geben (wie im Header in 'layout.pug' definiert), übergeben wir diesmal `results.book.title` beim Rendern der Webseite.

## Ansicht

Erstellen Sie **/views/book_detail.pug** und fügen Sie den untenstehenden Text hinzu.

```pug
extends layout

block content
  h1 Title: !{book.title}

  p #[strong Author: ]
    a(href=book.author.url) #{book.author.name}
  p #[strong Summary:] !{book.summary}
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

Beachten Sie das vorangestellte `!` in `!{book.title}` und `!{book.summary}`, das sicherstellt, dass Werte beim Anzeigen nicht maskiert werden. Das geschieht, weil wir die Daten, die wir anzeigen, bereits programmgesteuert bereinigt haben, und eine erneute Bereinigung würde unser "bereinigtes Markup" statt der sicheren Version des Originaltextes anzeigen. Wir haben uns entschieden, dies nicht bei Autor, Genre und so weiter zu tun (obwohl wir es könnten), da wir nicht erwarten, dass sie „gefährliche“ Zeichen enthalten, die eine Bereinigung erfordern.

Fast alles andere in dieser Vorlage wurde in früheren Abschnitten demonstriert.

> [!NOTE]
> Die Liste der mit dem Buch verbundenen Genres wird in der Vorlage wie folgt implementiert. Dies fügt nach jedem mit dem Buch verbundenen Genre ein Komma und ein geschütztes Leerzeichen hinzu, außer nach dem letzten.
>
> ```pug
>   p #[strong Genre: ]
>     each val, index in book.genre
>       a(href=val.url) #{val.name}
>       if index < book.genre.length - 1
>         |,&nbsp;
> ```

## Wie sieht das aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie den Link _Alle Bücher_ aus, und wählen Sie dann eines der Bücher aus. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite dem folgenden Screenshot ähneln.

![Buchdetailseite - Express Local Library Seite](locallibary_express_book_detail.png)

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Anzeige von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Autordetailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_detail_page).
