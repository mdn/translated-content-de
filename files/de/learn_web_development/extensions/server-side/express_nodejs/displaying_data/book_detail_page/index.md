---
title: Buchdetailseite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

Die _Buchdetailseite_ muss die Informationen für ein bestimmtes `Book` anzeigen (identifiziert durch den automatisch generierten `_id` Feldwert), zusammen mit Informationen über jede zugehörige Kopie in der Bibliothek (`BookInstance`). Wo immer wir einen Autor, ein Genre oder eine Buchkopie anzeigen, sollten diese mit der entsprechenden Detailseite für dieses Element verlinkt werden.

## Controller

Öffnen Sie **/controllers/bookController.js**. Finden Sie die exportierte `book_detail()` Kontrollermethode und ersetzen Sie diese durch den folgenden Code.

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
    book,
    book_instances: bookInstances,
  });
});
```

> [!NOTE]
> Wir müssen in diesem Schritt keine zusätzlichen Module erfordern, da wir die Abhängigkeiten bereits beim Erstellen des Home-Page-Controllers importiert haben.

Der Ansatz entspricht genau dem, der für die [Genre-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page) beschrieben wurde. Die Routen-Kontrollerfunktion verwendet `Promise.all()`, um das angegebene `Book` und die zugehörigen Kopien (`BookInstance`) parallel abzufragen. Wenn kein passendes Buch gefunden wird, wird ein Fehlerobjekt mit einem "404: Nicht gefunden"-Fehler zurückgegeben. Wenn das Buch gefunden wird, werden die abgerufenen Datenbankeninformationen mithilfe der "book_detail"-Vorlage gerendert. Da der Schlüssel 'title' verwendet wird, um der Webseite einen Namen zu geben (wie in der Kopfzeile in 'layout.pug' definiert), übergeben wir dieses Mal `results.book.title`, während die Webseite gerendert wird.

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

Beachten Sie das vorausgehende `!` in `!{book.title}` und `!{book.summary}`, das sicherstellt, dass Werte nicht zur Anzeige maskiert werden. Das wird gemacht, weil wir die Daten, die wir programmatisch anzeigen, bereits bereinigt haben, und eine erneute Bereinigung würde unser "bereinigtes Markup" anzeigen, anstatt die sichere Version des Originaltextes. Wir haben uns entschieden, dies nicht für Autor, Genre und so weiter zu tun (obwohl wir könnten), da wir nicht erwarten, dass sie "gefährliche" Zeichen enthalten, die eine Bereinigung erfordern.

Fast alles andere in dieser Vorlage wurde in vorherigen Abschnitten demonstriert.

> [!NOTE]
> Die Liste der Genres, die mit dem Buch assoziiert sind, wird in der Vorlage wie unten implementiert. Dies fügt ein Komma und ein geschütztes Leerzeichen nach jedem Genre hinzu, das mit dem Buch verbunden ist, außer dem letzten.
>
> ```pug
>   p #[strong Genre: ]
>     each val, index in book.genre
>       a(href=val.url) #{val.name}
>       if index < book.genre.length - 1
>         |,&nbsp;
> ```

## Wie sieht es aus?

Starten Sie die Anwendung und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie den _Alle Bücher_-Link und dann eines der Bücher. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite wie der folgende Screenshot aussehen.

![Buchdetailseite - Express Local Library Seite](locallibary_express_book_detail.png)

## Nächste Schritte

- Zurück zum [Express Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Weiter zum nächsten Unterartikel von Teil 5: [Autorendetailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_detail_page).
