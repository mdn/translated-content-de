---
title: Autor-Detailseite
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Author_detail_page
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Die Autor-Detailseite muss die Informationen über den angegebenen `Author` anzeigen, identifiziert durch ihr (automatisch generiertes) `_id` Feld, zusammen mit einer Liste aller `Book` Objekte, die mit diesem `Author` verbunden sind.

## Controller

Öffnen Sie **/controllers/authorController.js**.

Fügen Sie die folgenden Zeilen am Anfang der Datei hinzu, um das `Book` Modul zu `require()`, das von der Autor-Detailseite benötigt wird (andere Module wie "express-async-handler" sollten bereits vorhanden sein).

```js
const Book = require("../models/book");
```

Suchen Sie die exportierte `author_detail()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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

Das Vorgehen ist genau das gleiche wie für die [Genre-Detailseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page) beschrieben. Die Routencontrollerfunktion verwendet `Promise.all()`, um den angegebenen `Author` und ihre zugehörigen `Book` Instanzen parallel abzufragen. Wenn kein passender Autor gefunden wird, wird ein Fehlerobjekt an die Express-Fehlerbehandlungsmiddleware gesendet. Wird der Autor gefunden, werden die abgerufenen Datenbankinformationen mithilfe des "author_detail" Templates gerendert.

## View

Erstellen Sie **/views/author_detail.pug** und kopieren Sie den folgenden Text hinein.

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

Alles in diesem Template wurde in den vorherigen Abschnitten demonstriert.

## Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie den Link _Alle Autoren_, dann wählen Sie einen der Autoren aus. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite etwa wie der folgende Screenshot aussehen.

![Autor-Detailseite - Express Local Library Seite](locallibary_express_author_detail.png)

> [!NOTE]
> Das Erscheinungsbild der Lebenszeit-Daten des Autors ist unschön! Wir werden das in der letzten Herausforderung in diesem Artikel angehen.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie fort mit dem letzten Unterartikel von Teil 5: [BookInstance-Detailseite und Herausforderung](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge).
