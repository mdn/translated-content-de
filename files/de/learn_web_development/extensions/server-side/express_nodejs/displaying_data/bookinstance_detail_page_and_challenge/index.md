---
title: Detailseite für BookInstance und Herausforderung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

## Detailseite für BookInstance

Die Detailseite für `BookInstance` muss die Informationen für jede `BookInstance` anzeigen, die mithilfe ihres (automatisch generierten) `_id`-Feldwertes identifiziert wird. Dies schließt den `Book`-Namen (als Link zur _Buch-Detailseite_) zusammen mit anderen Informationen im Datensatz ein.

### Controller

Öffnen Sie **/controllers/bookinstanceController.js**.
Finden Sie die exportierte `bookinstance_detail()`-Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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

Die Implementierung ist derjenigen für die anderen Modelldetailseiten sehr ähnlich.
Die Routen-Controller-Funktion ruft `BookInstance.findById()` mit der ID einer bestimmten Buchinstanz auf, die aus der URL extrahiert wird (unter Verwendung der Route) und im Controller über die Anfrageparameter `req.params.id` zugegriffen wird.
Anschließend wird `populate()` aufgerufen, um die Details des zugehörigen `Book` abzurufen.
Wenn keine passende `BookInstance` gefunden wird, wird ein Fehler an die Express-Middleware gesendet.
Andernfalls werden die zurückgegebenen Daten mit der **bookinstance_detail.pug**-Ansicht gerendert.

### Ansicht

Erstellen Sie **/views/bookinstance_detail.pug** und kopieren Sie den untenstehenden Inhalt hinein.

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

Alles in dieser Vorlage wurde in früheren Abschnitten demonstriert.

### Wie sieht es aus?

Starten Sie die Anwendung und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie den Link _Alle Buchinstanzen_ aus und wählen Sie dann eines der Elemente aus. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite wie im folgenden Screenshot aussehen.

![BookInstance Detail Seite - Express Local Library Website](locallibary_express_bookinstance_detail.png)

## Herausforderung

Derzeit verwenden die meisten auf der Website angezeigten _Daten_ das Standard-JavaScript-Format (z. B. _Di Okt 06 2020 15:49:58 GMT+1100 (AUS Eastern Daylight Time))_. Die Herausforderung für diesen Artikel besteht darin, das Erscheinungsbild der Datumsanzeige für die Lebensspanne von `Author` (Geburts-/Todesdatum) und für _BookInstance-Detailseiten_ im Format zu verbessern: 6. Okt, 2016.

> [!NOTE]
> Sie können denselben Ansatz verwenden wie bei der _Buchinstanzliste_ (indem Sie die virtuelle Eigenschaft für die Lebensspanne zum `Author`-Modell hinzufügen und [luxon](https://www.npmjs.com/package/luxon) verwenden, um die Datumszeichenfolgen zu formatieren).

Um diese Herausforderung abzuschließen, müssen Sie:

1. Ersetzen Sie die Variable `due_back` durch `due_back_formatted` auf der _BookInstance-Detailseite_.
2. Aktualisieren Sie das `Author`-Modell, um eine virtuelle Eigenschaft für die Lebensspanne hinzuzufügen. Die Lebensspanne sollte wie folgt aussehen: _date_of_birth - date_of_death_, wobei beide Werte dasselbe Datumsformat wie `BookInstance.due_back_formatted` haben.
3. Verwenden Sie `Author.lifespan` in allen Ansichten, in denen Sie derzeit explizit `date_of_birth` und `date_of_death` verwenden.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Anzeige von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data#displaying_library_data_tutorial_subarticles).
