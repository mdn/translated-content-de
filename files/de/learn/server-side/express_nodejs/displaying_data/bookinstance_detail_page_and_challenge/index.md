---
title: BookInstance-Detailseite und Herausforderung
slug: Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

## BookInstance-Detailseite

Die `BookInstance`-Detailseite muss die Informationen für jede `BookInstance` anzeigen, identifiziert durch den (automatisch generierten) Wert des `_id`-Felds. Dies umfasst den `Book`-Namen (als Link zur _Book-Detailseite_) zusammen mit anderen Informationen im Datensatz.

### Controller

Öffnen Sie **/controllers/bookinstanceController.js**.
Finden Sie die exportierte `bookinstance_detail()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

```js
// Display detail page for a specific BookInstance.
exports.bookinstance_detail = asyncHandler(async (req, res, next) => {
  const bookInstance = await BookInstance.findById(req.params.id)
    .populate("book")
    .exec();

  if (bookInstance === null) {
    // No results.
    const err = new Error("Book copy not found");
    err.status = 404;
    return next(err);
  }

  res.render("bookinstance_detail", {
    title: "Book:",
    bookinstance: bookInstance,
  });
});
```

Die Implementierung ist der für die anderen Modells-Detailseiten verwendeten Implementierung sehr ähnlich.
Die Routen-Controller-Funktion ruft `BookInstance.findById()` mit der ID einer bestimmten Buchinstanz auf, die aus der URL extrahiert wird (mithilfe der Route) und innerhalb des Controllers über die Anforderungsparameter zugegriffen wird: `req.params.id`.
Anschließend wird `populate()` aufgerufen, um die Details des zugehörigen `Book` zu erhalten.
Wenn keine passende `BookInstance` gefunden wird, wird ein Fehler an die Express-Middleware gesendet.
Andernfalls werden die zurückgegebenen Daten mit der **bookinstance_detail.pug**-Ansicht gerendert.

### Ansicht

Erstellen Sie **/views/bookinstance_detail.pug** und kopieren Sie den folgenden Inhalt hinein.

```pug
extends layout

block content

  h1 ID: #{bookinstance._id}

  p #[strong Title: ]
    a(href=bookinstance.book.url) #{bookinstance.book.title}
  p #[strong Imprint:] #{bookinstance.imprint}

  p #[strong Status: ]
    if bookinstance.status=='Available'
      span.text-success #{bookinstance.status}
    else if bookinstance.status=='Maintenance'
      span.text-danger #{bookinstance.status}
    else
      span.text-warning #{bookinstance.status}

  if bookinstance.status!='Available'
    p #[strong Due back:] #{bookinstance.due_back}
```

Alles in dieser Vorlage wurde in den vorherigen Abschnitten demonstriert.

### Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser auf `http://localhost:3000/`. Wählen Sie den Link _Alle Buchinstanzen_, dann wählen Sie eines der Elemente aus. Wenn alles richtig eingerichtet ist, sollte Ihre Seite wie der folgende Screenshot aussehen.

![BookInstance-Detailseite - Express Local Library site](locallibary_express_bookinstance_detail.png)

## Herausforderung

Derzeit verwenden die meisten _Daten_, die auf der Website angezeigt werden, das Standard-JavaScript-Format (z.B. _Tue Oct 06 2020 15:49:58 GMT+1100 (AUS Eastern Daylight Time))_. Die Herausforderung für diesen Artikel besteht darin, das Erscheinungsbild der Datumsanzeige für `Author`-Lebensspanne-Informationen (Geburts-/Todesdatum) und für _BookInstance-Detail_ Seiten zu verbessern, um das Format "Oct 6th, 2016" zu verwenden.

> [!NOTE]
> Sie können den gleichen Ansatz wie beim _Buchinstanzenliste_ verwenden (Hinzufügen der virtuellen Eigenschaft für die Lebensspanne zum `Author`-Modell und Verwenden von [luxon](https://www.npmjs.com/package/luxon), um die Datumszeichenfolgen zu formatieren).

Um diese Herausforderung zu meistern, müssen Sie:

1. Ersetzen Sie die Variable `due_back` durch `due_back_formatted` auf der _BookInstance-Detail_ Seite.
2. Aktualisieren Sie das `Author`-Modell, um eine virtuelle Eigenschaft für die Lebensspanne hinzuzufügen. Die Lebensspanne sollte folgendermaßen aussehen: _date_of_birth - date_of_death_, wobei beide Werte das gleiche Datumsformat wie `BookInstance.due_back_formatted` haben.
3. Verwenden Sie `Author.lifespan` in allen Ansichten, in denen Sie derzeit explizit `date_of_birth` und `date_of_death` verwenden.

## Nächste Schritte

- Kehren Sie zu [Express Tutorial Teil 5: Anzeige von Bibliotheksdaten](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data#displaying_library_data_tutorial_subarticles) zurück.
