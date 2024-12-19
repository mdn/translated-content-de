---
title: Detailseite für BookInstance und Herausforderung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

## BookInstance Detailseite

Die `BookInstance`-Detailseite muss die Informationen für jede `BookInstance` anzeigen, die durch den (automatisch generierten) `_id`-Feldwert identifiziert wird. Dies umfasst den `Book`-Namen (als Link zur _Book-Detailseite_) zusammen mit anderen Informationen in dem Datensatz.

### Controller

Öffnen Sie **/controllers/bookinstanceController.js**.
Finden Sie die exportierte `bookinstance_detail()` Controllermethode und ersetzen Sie sie durch den folgenden Code.

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

Die Implementierung ist derjenigen ähnlich, die für die anderen Modelldetailseiten verwendet wird.
Die Routen-Controller-Funktion ruft `BookInstance.findById()` mit der ID einer bestimmten Buchinstanz auf, die aus der URL (mithilfe der Route) extrahiert und über die Anfrageparameter innerhalb des Controllers aufgerufen wird: `req.params.id`.
Anschließend wird `populate()` aufgerufen, um die Details des zugehörigen `Book` abzurufen.
Falls keine übereinstimmende `BookInstance` gefunden wird, wird ein Fehler an die Express-Middleware gesendet.
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

Alles in dieser Vorlage wurde in vorherigen Abschnitten demonstriert.

### Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie den Link _Alle Buch-Instanzen_, und wählen Sie dann eines der Elemente aus. Wenn alles richtig eingerichtet ist, sollte Ihre Seite etwa wie der folgende Screenshot aussehen.

![Detail-Seite der Buchinstanz - Lokale Bibliothekswebsite mit Express](locallibary_express_bookinstance_detail.png)

## Herausforderung

Derzeit verwenden die meisten _Datumsangaben_ auf der Website das Standard-JavaScript-Format (z.B. _Di Okt 06 2020 15:49:58 GMT+1100 (AUS Eastern Daylight Time))_. Die Herausforderung in diesem Artikel besteht darin, das Erscheinungsbild der Datumsausgabe für `Author`-Lebenszeitinformationen (Geburts-/Todesdatum) und für _BookInstance-Detail_Seiten zu verbessern, um das Format: 6. Okt. 2016 zu verwenden.

> [!NOTE]
> Sie können denselben Ansatz verwenden, den wir für die _Buch-Instanzliste_ verwendeten (Hinzufügen der virtuellen Eigenschaft für die Lebensspanne zum `Author`-Modell und Verwenden von [luxon](https://www.npmjs.com/package/luxon), um die Datumszeichenfolgen zu formatieren).

Um diese Herausforderung abzuschließen, müssen Sie:

1. Ersetzen Sie die Variable `due_back` durch `due_back_formatted` auf der _BookInstance-Detailseite.
2. Aktualisieren Sie das `Author`-Modell, um eine virtuelle Lebensspanne-Eigenschaft hinzuzufügen. Die Lebensspanne sollte aussehen wie: _date_of_birth - date_of_death_, wobei beide Werte dasselbe Datumsformat wie `BookInstance.due_back_formatted` haben.
3. Verwenden Sie `Author.lifespan` in allen Ansichten, in denen Sie derzeit explizit `date_of_birth` und `date_of_death` verwenden.

## Nächste Schritte

- Kehren Sie zurück zum [Express Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data#displaying_library_data_tutorial_subarticles).
