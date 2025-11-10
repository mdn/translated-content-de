---
title: Buchdetailseite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

Die _Buchdetailseite_ soll die Informationen für ein spezifisches `Book` anzeigen (identifiziert durch den automatisch generierten Wert des `_id` Feldes), zusammen mit Informationen über jede verknüpfte Kopie in der Bibliothek (`BookInstance`). Wo immer wir einen Autor, ein Genre oder eine Buchinstanz anzeigen, sollten diese mit der zugehörigen Detailseite für diesen Artikel verlinkt sein.

## Controller

Öffnen Sie **/controllers/bookController.js**. Finden Sie die exportierte `book_detail()` Controller-Methode und ersetzen Sie sie mit dem folgenden Code.

```js
// Display detail page for a specific book.
exports.book_detail = async (req, res, next) => {
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
};
```

> [!NOTE]
> In diesem Schritt müssen wir keine zusätzlichen Module einbinden, da wir die Abhängigkeiten bereits importiert haben, als wir den Controller für die Startseite implementiert haben.

Die Vorgehensweise ist exakt die gleiche wie beschrieben auf der [Genre-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page).
Die Routen-Controller-Funktion verwendet `Promise.all()`, um das spezifizierte `Book` und dessen zugehörige Kopien (`BookInstance`) parallel abzufragen.
Wenn kein passendes Buch gefunden wird, wird ein `Error`-Objekt mit einem "404: Not Found"-Fehler zurückgegeben.
Wird das Buch gefunden, werden die abgerufenen Datenbankinformationen mit dem "book_detail"-Template gerendert.
Da der Schlüssel 'title' verwendet wird, um der Webseite einen Namen zu geben (wie im Header in 'layout.pug' definiert), übergeben wir diesmal `results.book.title`, während wir die Webseite rendern.

## Ansicht

Erstellen Sie **/views/book_detail.pug** und fügen Sie den folgenden Text hinzu.

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

Beachten Sie das vorausgehende `!` in `!{book.title}` und `!{book.summary}`, das sicherstellt, dass Werte bei der Darstellung nicht maskiert werden.
Das wird gemacht, weil wir die Daten, die wir anzeigen, bereits programmgesteuert bereinigt haben, und eine erneute Bereinigung würde unser "bereinigtes Markup" anstelle der sicheren Version des Originaltexts anzeigen.
Wir haben uns entschieden, dies nicht für Autor, Genre usw. zu tun (obwohl wir könnten), da wir nicht erwarten, dass diese potenziell "gefährliche" Zeichen enthalten, die eine Bereinigung erfordern.

Fast alles andere in diesem Template wurde in vorherigen Abschnitten demonstriert.

> [!NOTE]
> Die Liste der mit dem Buch verbundenen Genres wird im Template wie unten implementiert. Dies fügt nach jedem mit dem Buch verbundenen Genre ein Komma und ein geschütztes Leerzeichen hinzu, außer nach dem letzten.
>
> ```pug
>   p #[strong Genre: ]
>     each val, index in book.genre
>       a(href=val.url) #{val.name}
>       if index < book.genre.length - 1
>         |,&nbsp;
> ```

## Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie den Link _Alle Bücher_, dann wählen Sie eines der Bücher. Wenn alles richtig eingerichtet ist, sollte Ihre Seite etwa wie der folgende Screenshot aussehen.

![Buchdetailseite - Express Local Library Seite](locallibary_express_book_detail.png)

## Nächste Schritte

- Zurück zu [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Gehen Sie zum nächsten Unterartikel von Teil 5: [Autor-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_detail_page).
