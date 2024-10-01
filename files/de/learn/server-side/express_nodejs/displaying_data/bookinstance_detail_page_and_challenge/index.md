---
title: Detailseite der BookInstance und Herausforderung
slug: Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

## Detailseite der BookInstance

Die Detailseite der `BookInstance` muss die Informationen für jede `BookInstance` anzeigen, identifiziert durch ihren (automatisch generierten) `_id` Feldwert. Dies umfasst den `Book`-Namen (als Link zur _Buch-Detailseite_) zusammen mit weiteren Informationen im Datensatz.

### Controller

Öffnen Sie **/controllers/bookinstanceController.js**.
Finden Sie die exportierte Methode `bookinstance_detail()` des Controllers und ersetzen Sie sie mit dem folgenden Code.

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

Die Implementierung ist sehr ähnlich zu der, die für die anderen Modeldetalseiten verwendet wird. Die Routen-Controller-Funktion ruft `BookInstance.findById()` mit der ID einer bestimmten Bücherinstanz auf, die aus der URL extrahiert wird (unter Verwendung der Route) und innerhalb des Controllers über die Anforderungsparameter zugänglich ist: `req.params.id`.
Anschließend wird `populate()` aufgerufen, um die Details des zugehörigen `Book` zu erhalten.
Wenn keine entsprechende `BookInstance` gefunden wird, wird ein Fehler an die Express-Middleware gesendet.
Andernfalls werden die zurückgegebenen Daten unter Verwendung der Ansicht **bookinstance_detail.pug** gerendert.

### Ansicht

Erstellen Sie **/views/bookinstance_detail.pug** und kopieren Sie den Inhalt unten hinein.

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

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie den Link _Alle Bücherinstanzen_ und dann einen der Einträge aus. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite etwa wie der folgende Screenshot aussehen.

![Detailseite der BookInstance - Express Local Library Webseite](locallibary_express_bookinstance_detail.png)

## Herausforderung

Derzeit werden die meisten _Daten_, die auf der Website angezeigt werden, im Standard-JavaScript-Format dargestellt (z.B. _Di Okt 06 2020 15:49:58 GMT+1100 (AUS Eastern Daylight Time)). Die Herausforderung für diesen Artikel besteht darin, das Erscheinungsbild der Datumsanzeige für Informationen zur Lebensdauer von `Author` (Todes-/Geburtsdatum) und für \_BookInstance-Detailseiten_ zu verbessern, um das Format: 6. Okt. 2016 zu verwenden.

> [!NOTE]
> Sie können denselben Ansatz verwenden, den wir für die _Buchinstanzliste_ verwendet haben (indem Sie die virtuelle Eigenschaft für die Lebensspanne zum `Author`-Modell hinzufügen und [luxon](https://www.npmjs.com/package/luxon) verwenden, um die Datumszeichenfolgen zu formatieren).

Um diese Herausforderung abzuschließen, müssen Sie:

1. Die Variable `due_back` auf der _BookInstance-Detailseite_ durch `due_back_formatted` ersetzen.
2. Das `Author`-Modell aktualisieren, um eine virtuelle Eigenschaft für die Lebensspanne hinzuzufügen. Die Lebensspanne sollte wie folgt aussehen: _date_of_birth - date_of_death_, wobei beide Werte dasselbe Datumsformat wie `BookInstance.due_back_formatted` haben.
3. `Author.lifespan` in allen Ansichten verwenden, in denen Sie derzeit explizit `date_of_birth` und `date_of_death` verwenden.

## Nächste Schritte

- Zurückkehren zum [Express Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data#displaying_library_data_tutorial_subarticles).
