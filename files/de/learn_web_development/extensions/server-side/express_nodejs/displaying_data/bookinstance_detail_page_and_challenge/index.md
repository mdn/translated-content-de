---
title: BookInstance-Detailseite und Herausforderung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

## BookInstance-Detailseite

Die `BookInstance`-Detailseite muss die Informationen für jede `BookInstance` anzeigen, die anhand ihres (automatisch generierten) `_id`-Feldwerts identifiziert wird. Dazu gehören der `Book`-Name (als Link zur _Buch-Detailseite_) sowie andere Informationen im Datensatz.

### Controller

Öffnen Sie **/controllers/bookinstanceController.js**.
Finden Sie die exportierte `bookinstance_detail()`-Controllermethode und ersetzen Sie sie durch den folgenden Code.

```js
// Display detail page for a specific BookInstance.
exports.bookinstance_detail = async (req, res, next) => {
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
};
```

Die Implementierung ist sehr ähnlich zu der, die für die anderen Modelldetailseiten verwendet wird.
Die Routen-Controller-Funktion ruft `BookInstance.findById()` mit der ID einer spezifischen Buchinstanz auf, die aus der URL extrahiert wird (mittels der Route) und im Controller über die Anforderungsparameter `req.params.id` zugegriffen wird.
Anschließend wird `populate()` aufgerufen, um die Details des zugehörigen `Book` zu erhalten.
Wenn keine übereinstimmende `BookInstance` gefunden wird, wird ein Fehler an die Express-Middleware gesendet.
Andernfalls werden die zurückgegebenen Daten mit der **bookinstance_detail.pug**-Ansicht gerendert.

### Ansicht

Erstellen Sie **/views/bookinstance_detail.pug** und kopieren Sie den unten stehenden Inhalt hinein.

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

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie den Link _Alle Buchinstanzen_, und wählen Sie dann einen der Einträge aus. Wenn alles richtig eingerichtet ist, sollte Ihre Seite ungefähr wie der folgende Screenshot aussehen.

![BookInstance Detailseite - Express Local Library Seite](locallibary_express_bookinstance_detail.png)

## Herausforderung

Derzeit verwenden die meisten auf der Website angezeigten _Daten_ das Standardformat von JavaScript (z. B. _Tue Oct 06 2020 15:49:58 GMT+1100 (AUS Eastern Daylight Time))_. Die Herausforderung für diesen Artikel besteht darin, das Erscheinungsbild der Datumsanzeige für die Lebensspanne eines `Author` (Geburts- und Sterbedatum) und für _BookInstance-Detailseiten_ zu verbessern, um das Format zu verwenden: Oct 6th, 2016.

> [!NOTE]
> Sie können denselben Ansatz verwenden, den wir für die _Book Instance List_ verwendet haben (Hinzufügen der virtuellen Eigenschaft für die Lebensspanne zum `Author`-Modell und Verwendung von [luxon](https://www.npmjs.com/package/luxon) zur Formatierung der Datumszeichenfolgen).

Um diese Herausforderung abzuschließen, müssen Sie:

1. Ersetzen Sie die Variable `due_back` durch `due_back_formatted` auf der _BookInstance-Detailseite_.
2. Aktualisieren Sie das `Author`-Modell, um eine virtuelle Lebenserwartungs-Eigenschaft hinzuzufügen. Die Lebensspanne sollte folgendermaßen aussehen: _date_of_birth - date_of_death_, wobei beide Werte dasselbe Datumsformat wie `BookInstance.due_back_formatted` haben.
3. Verwenden Sie `Author.lifespan` in allen Ansichten, in denen Sie derzeit explizit `date_of_birth` und `date_of_death` verwenden.

## Nächste Schritte

- Zurückkehren zu [Express Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data#displaying_library_data_tutorial_subarticles).
