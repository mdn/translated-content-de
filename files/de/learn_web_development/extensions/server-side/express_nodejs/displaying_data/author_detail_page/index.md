---
title: Autor-Detailseite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_detail_page
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Die Autor-Detailseite muss die Informationen über den angegebenen `Author` anzeigen, identifiziert anhand ihres (automatisch generierten) `_id` Feldwertes, zusammen mit einer Liste aller `Book` Objekte, die mit diesem `Author` verbunden sind.

## Controller

Öffnen Sie **/controllers/authorController.js**.

Fügen Sie die folgenden Zeilen oben in die Datei ein, um das `Book`-Modul einzubinden, das von der Autor-Detailseite benötigt wird (andere Module wie "express-async-handler" sollten bereits vorhanden sein).

```js
const Book = require("../models/book");
```

Finden Sie die exportierte `author_detail()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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

Der Ansatz ist genau der gleiche wie auf der [Genre-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page) beschrieben.
Die Routen-Controller-Funktion verwendet `Promise.all()`, um den angegebenen `Author` und die zugehörigen `Book`-Instanzen parallel abzufragen.
Wenn kein passender Autor gefunden wird, wird ein Fehlerobjekt an die Express-Fehlerbehandlungsmiddleware gesendet.
Wenn der Autor gefunden wird, werden die abgerufenen Datenbankinformationen mit der "author_detail"-Vorlage gerendert.

## Ansicht

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

Alles in dieser Vorlage wurde in vorherigen Abschnitten demonstriert.

## Wie sieht das aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie den Link _All Authors_ aus, und wählen Sie dann einen der Autoren aus. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite ungefähr so aussehen wie der folgende Screenshot.

![Autor-Detailseite - Express Local Library Site](locallibary_express_author_detail.png)

> [!NOTE]
> Das Erscheinungsbild der _Lebensspannen_-Daten des Autors ist unschön! Wir werden das in der letzten Herausforderung dieses Artikels ansprechen.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Anzeigung von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie fort mit dem letzten Teilartikel von Teil 5: [BookInstance Detailseite und Herausforderung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge).
