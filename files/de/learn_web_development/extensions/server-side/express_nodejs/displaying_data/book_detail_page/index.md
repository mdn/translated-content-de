---
title: Buchdetailseite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_detail_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data")}}

Die _Buchdetailseite_ muss Informationen zu einem bestimmten `Book` anzeigen (identifiziert anhand des Werts seines automatisch generierten Felds `_id`). Außerdem muss sie Informationen zu jedem zugehörigen Exemplar in der Bibliothek (`BookInstance`) enthalten. Überall, wo ein Autor, ein Genre oder ein Buchexemplar angezeigt wird, sollte ein Link zur jeweiligen Detailseite vorhanden sein.

## Controller

Öffnen Sie **controllers/bookController.js**. Suchen Sie die exportierte Controller-Methode `bookDetail()` und ersetzen Sie sie durch den folgenden Code.

```js
// Display detail page for a specific book.
export const bookDetail = async (req, res, next) => {
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
> In diesem Schritt müssen wir keine zusätzlichen Module importieren, da wir die Abhängigkeiten bereits bei der Implementierung des Controllers für die Startseite importiert haben.

Der Ansatz entspricht genau dem für die [Genre-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page) beschriebenen Vorgehen.
Die Route-Controller-Funktion verwendet `Promise.all()`, um das angegebene `Book` und die zugehörigen Exemplare (`BookInstance`) parallel abzufragen.
Wenn kein passendes Buch gefunden wird, wird ein `Error`-Objekt mit dem Fehler „404: Not Found“ zurückgegeben.
Wird das Buch gefunden, werden die abgerufenen Datenbankinformationen mithilfe des Templates „book_detail“ dargestellt.
Da der Schlüssel 'title' für den Namen der Webseite verwendet wird (wie im Header von 'layout.pug' definiert), übergeben wir beim Darstellen der Webseite diesmal `results.book.title`.

## View

Erstellen Sie **views/book_detail.pug** und fügen Sie den folgenden Text ein.

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

Beachten Sie das vorangestellte `!` in `!{book.title}` und `!{book.summary}`. Es sorgt dafür, dass die Werte bei der Anzeige nicht escaped werden.
Das ist möglich, weil wir die angezeigten Daten bereits programmatisch bereinigt haben. Eine erneute Bereinigung würde unser „bereinigtes Markup“ statt der sicheren Version des ursprünglichen Textes anzeigen.
Bei Autor, Genre und anderen Angaben haben wir uns dagegen entschieden (obwohl es möglich wäre), weil wir dort keine „gefährlichen“ Zeichen erwarten, die eine Bereinigung erfordern.

Fast alles andere in diesem Template wurde bereits in vorherigen Abschnitten gezeigt.

> [!NOTE]
> Die Liste der mit dem Buch verknüpften Genres wird im Template wie unten gezeigt umgesetzt. Dabei werden nach jedem Genre außer dem letzten ein Komma und ein geschütztes Leerzeichen eingefügt.
>
> ```pug
>   p #[strong Genre: ]
>     each val, index in book.genre
>       a(href=val.url) #{val.name}
>       if index < book.genre.length - 1
>         |,&nbsp;
> ```

## Wie sieht das Ergebnis aus?

Starten Sie die Anwendung und öffnen Sie `http://localhost:3000/` in Ihrem Browser. Wählen Sie den Link _All books_ und anschließend eines der Bücher aus. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite ungefähr wie im folgenden Screenshot aussehen.

![Buchdetailseite der Express-Website „Local Library“](locallibary_express_book_detail.png)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_detail_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data")}}
