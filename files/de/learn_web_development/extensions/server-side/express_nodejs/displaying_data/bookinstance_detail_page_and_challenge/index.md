---
title: BookInstance-Detailseite und Übungsaufgabe
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_detail_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data")}}

## BookInstance-Detailseite

Die `BookInstance`-Detailseite muss die Informationen zu jeder `BookInstance` anzeigen, die anhand des Werts ihres (automatisch generierten) `_id`-Felds identifiziert wird. Dazu gehören der Name des `Book` (als Link zur _Book-Detailseite_) sowie weitere Informationen aus dem Datensatz.

### Controller

Öffnen Sie **controllers/bookinstanceController.js**. Suchen Sie die exportierte Controller-Methode `bookInstanceDetail()` und ersetzen Sie sie durch den folgenden Code.

```js
// Display detail page for a specific BookInstance.
export const bookInstanceDetail = async (req, res, next) => {
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

Die Implementierung ähnelt stark derjenigen für die anderen Model-Detailseiten. Die Route-Controller-Funktion ruft `BookInstance.findById()` mit der ID einer bestimmten Buchinstanz auf. Diese ID wird aus der URL (über die Route) extrahiert und ist im Controller über die Request-Parameter zugänglich: `req.params.id`. Anschließend ruft die Funktion `populate()` auf, um die Details des zugehörigen `Book` abzurufen. Wenn keine passende `BookInstance` gefunden wird, wird ein Fehler an die Express-Middleware weitergegeben. Andernfalls werden die zurückgegebenen Daten mit der Ansicht **bookinstance_detail.pug** gerendert.

### Ansicht

Erstellen Sie **views/bookinstance_detail.pug** und fügen Sie den folgenden Inhalt ein.

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

Alles in diesem Template wurde bereits in den vorherigen Abschnitten gezeigt.

### Wie sieht das Ergebnis aus?

Starten Sie die Anwendung und öffnen Sie `http://localhost:3000/` in Ihrem Browser. Wählen Sie den Link _Alle Buchinstanzen_ und anschließend einen der Einträge aus. Wenn alles richtig eingerichtet ist, sollte Ihre Website ungefähr wie im folgenden Screenshot aussehen.

![BookInstance-Detailseite der Express-Website „Local Library“](locallibary_express_bookinstance_detail.png)

## Übungsaufgabe

Derzeit werden die meisten _Datumsangaben_ auf der Website im JavaScript-Standardformat angezeigt (z. B. _Tue Oct 06 2020 15:49:58 GMT+1100 (AUS Eastern Daylight Time))_. In dieser Übungsaufgabe sollen Sie die Darstellung der Lebensdaten von `Author` (Geburts- und Sterbedatum) sowie der Datumsangaben auf den _BookInstance-Detailseiten_ verbessern. Verwenden Sie dafür das Format: Oct 6, 2016.

> [!NOTE]
> Sie können denselben Ansatz wie für die _Buchinstanzenliste_ verwenden: Fügen Sie dem `Author`-Modell eine virtuelle Eigenschaft für die Lebensdaten hinzu und formatieren Sie die Datumszeichenfolgen mit {{jsxref("Intl")}}.

So lösen Sie die Aufgabe:

1. Ersetzen Sie auf der _BookInstance-Detailseite_ die Variable `due_back` durch `due_back_formatted`.
2. Ergänzen Sie das `Author`-Modell um eine virtuelle Eigenschaft für die Lebensdaten. Diese sollen wie folgt aussehen: _date_of_birth - date_of_death_. Beide Werte sollen dasselbe Datumsformat wie `BookInstance.due_back_formatted` haben.
3. Verwenden Sie `Author.lifespan` in allen Ansichten, in denen Sie derzeit `date_of_birth` und `date_of_death` ausdrücklich verwenden.

{{PreviousMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_detail_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data")}}
