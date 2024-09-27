---
title: Autorendetailseite
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Author_detail_page
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Die Autorendetailseite muss die Informationen über den angegebenen `Author` anzeigen, identifiziert durch ihren (automatisch generierten) `_id` Feldwert, zusammen mit einer Liste aller `Book` Objekte, die mit diesem `Author` verbunden sind.

## Controller

Öffnen Sie **/controllers/authorController.js**.

Fügen Sie die folgenden Zeilen am Anfang der Datei hinzu, um das `Book` Modul einzubinden (`require()`), welches von der Autorendetailseite benötigt wird (andere Module wie "express-async-handler" sollten bereits vorhanden sein).

```js
const Book = require("../models/book");
```

Suchen Sie die exportierte `author_detail()` Controller-Methode und ersetzen Sie diese durch den folgenden Code.

```js
// Display detail page for a specific Author.
exports.author_detail = asyncHandler(async (req, res, next) => {
  // Get details of author and all their books (in parallel)
  const [author, allBooksByAuthor] = await Promise.all([
    Author.findById(req.params.id).exec(),
    Book.find({ author: req.params.id }, "title summary").exec(),
  ]);

  if (author === null) {
    // No results.
    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }

  res.render("author_detail", {
    title: "Author Detail",
    author: author,
    author_books: allBooksByAuthor,
  });
});
```

Der Ansatz ist genau derselbe wie im [Genre-Detailseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page) beschrieben.
Die Routenkontrollerfunktion verwendet `Promise.all()`, um den angegebenen `Author` und die zugehörigen `Book` Instanzen parallel abzufragen.
Wenn kein passender Autor gefunden wird, wird ein Error-Objekt an die Express-Fehlerbehandlungsmiddleware gesendet.
Wenn der Autor gefunden wird, werden die abgerufenen Datenbankinformationen mit der Vorlage "author_detail" gerendert.

## View

Erstellen Sie **/views/author_detail.pug** und kopieren Sie folgenden Text hinein.

```pug
extends layout

block content

  h1 Author: #{author.name}
  p #{author.date_of_birth} - #{author.date_of_death}

  div(style='margin-left:20px;margin-top:20px')

    h2(style='font-size: 1.5rem;') Books
    if author_books.length
      dl
        each book in author_books
          dt
            a(href=book.url) #{book.title}
          dd #{book.summary}
    else
      p This author has no books.
```

Alles in dieser Vorlage wurde in den vorherigen Abschnitten demonstriert.

## Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie den Link _All Authors_, dann wählen Sie einen der Autoren aus. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite ähnlich dem folgenden Screenshot aussehen.

![Author Detail Page - Express Local Library site](locallibary_express_author_detail.png)

> [!NOTE]
> Die Darstellung der _Lebensspanne_ des Autors ist unansehnlich! Wir werden dieses Problem in der letzten Herausforderung in diesem Artikel angehen.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie fort mit dem letzten Unterartikel von Teil 5: [BookInstance-Detailseite und Herausforderung](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge).
