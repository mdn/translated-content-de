---
title: Detailseite der BookInstance und Herausforderung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

## Detailseite der BookInstance

Die `BookInstance`-Detailseite muss die Informationen für jede `BookInstance` anzeigen, identifiziert über ihren (automatisch generierten) `_id`-Feldwert. Dies enthält den `Book`-Namen (als Link zur _Buch-Detailseite_) zusammen mit anderen Informationen in dem Datensatz.

### Controller

Öffnen Sie **/controllers/bookinstanceController.js**.
Finden Sie die exportierte `bookinstance_detail()` Controller-Methode und ersetzen Sie sie mit dem folgenden Code.

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

Die Implementierung ist sehr ähnlich zu der, die für die anderen Modell-Detailseiten verwendet wird.
Die Routen-Controller-Funktion ruft `BookInstance.findById()` mit der ID einer bestimmten Buchinstanz auf, die aus der URL extrahiert wird (unter Verwendung der Route) und innerhalb des Controllers über die Anforderungsparameter zugänglich ist: `req.params.id`.
Anschließend wird `populate()` aufgerufen, um die Details des zugehörigen `Book` zu erhalten.
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

### Wie sieht das aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie den Link _Alle Buchinstanzen_, und wählen Sie dann einen der Einträge aus. Wenn alles richtig eingerichtet ist, sollte Ihre Seite ungefähr wie im folgenden Screenshot aussehen.

![BookInstance Detailseite - Express Local Library Site](locallibary_express_bookinstance_detail.png)

## Herausforderung

Derzeit verwenden die meisten auf der Seite angezeigten _Daten_ das Standard-JavaScript-Format (z.B., _Tue Oct 06 2020 15:49:58 GMT+1100 (AUS Eastern Daylight Time)_). Die Herausforderung für diesen Artikel besteht darin, das Erscheinungsbild der Datumsanzeige für die Lebensspanne eines `Authors` (Geburts-/Sterbedatum) und für _BookInstance-Detail_ Seiten zu verbessern, um das Format: Oct 6th, 2016 zu verwenden.

> [!NOTE]
> Sie können denselben Ansatz verwenden, den wir für die _Book Instance List_ verwendet haben (Hinzufügen der virtuellen Eigenschaft für die Lebensspanne zum `Author`-Modell und [luxon](https://www.npmjs.com/package/luxon) verwenden, um die Datumszeichenfolgen zu formatieren).

Um diese Herausforderung abzuschließen, müssen Sie:

1. Ersetzen Sie die Variable `due_back` durch `due_back_formatted` auf der _BookInstance-Detail_ Seite.
2. Aktualisieren Sie das `Author`-Modell, um eine virtuelle Eigenschaft für die Lebensspanne hinzuzufügen. Die Lebensspanne sollte wie folgt aussehen: _date_of_birth - date_of_death_, wobei beide Werte dasselbe Datumsformat wie `BookInstance.due_back_formatted` haben.
3. Verwenden Sie `Author.lifespan` in allen Ansichten, in denen Sie derzeit explizit `date_of_birth` und `date_of_death` verwenden.

## Nächste Schritte

- Kehren Sie zurück zum [Express Tutorial Teil 5: Anzeigendaten der Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data#displaying_library_data_tutorial_subarticles).
