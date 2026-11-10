---
title: Autorendetailseite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_detail_page
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data")}}

Die Autorendetailseite muss Informationen über den angegebenen `Author` anzeigen, der anhand des Werts seines (automatisch generierten) Felds `_id` identifiziert wird. Außerdem muss sie eine Liste aller `Book`-Objekte anzeigen, die diesem `Author` zugeordnet sind.

## Controller

Öffnen Sie **controllers/authorController.js**.

Fügen Sie am Anfang der Datei die folgenden Zeilen ein, um das für die Autorendetailseite benötigte `Book`-Modul zu importieren.

```js
import Book from "../models/book.js";
```

Suchen Sie die exportierte Controller-Methode `authorDetail()` und ersetzen Sie sie durch den folgenden Code.

```js
// Display detail page for a specific Author.
export const authorDetail = async (req, res, next) => {
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
    author,
    author_books: allBooksByAuthor,
  });
};
```

Die Vorgehensweise entspricht genau der für die [Genre-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page) beschriebenen.
Die Route-Controller-Funktion verwendet `Promise.all()`, um den angegebenen `Author` und die zugehörigen `Book`-Instanzen parallel abzufragen.
Wenn kein passender Autor gefunden wird, wird ein `Error`-Objekt an die Middleware zur Fehlerbehandlung von Express übergeben.
Wird der Autor gefunden, werden die abgerufenen Datenbankinformationen mithilfe der Vorlage „author_detail“ dargestellt.

## Ansicht

Erstellen Sie **views/author_detail.pug** und fügen Sie den folgenden Text ein.

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

Alles in dieser Vorlage wurde bereits in den vorherigen Abschnitten gezeigt.

## Wie sieht das Ergebnis aus?

Starten Sie die Anwendung und öffnen Sie `http://localhost:3000/` in Ihrem Browser. Wählen Sie den Link _All Authors_ und anschließend einen der Autoren aus. Wenn alles korrekt eingerichtet ist, sollte Ihre Website ungefähr wie im folgenden Screenshot aussehen.

![Autorendetailseite der Express-Website „Local Library“](locallibary_express_author_detail.png)

> [!NOTE]
> Die Darstellung der Daten zur _Lebenszeit_ des Autors ist unschön! Darum kümmern wir uns in der abschließenden Aufgabe dieses Artikels.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data")}}
