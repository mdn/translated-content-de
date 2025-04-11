---
title: Seite mit der Liste der Buchinstanzen
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Als Nächstes implementieren wir unsere Liste aller Buchkopien (`BookInstance`) in der Bibliothek. Diese Seite muss den Titel des `Book`, der mit jeder `BookInstance` verbunden ist (verlinkt zu seiner Detailseite), zusammen mit anderen Informationen im `BookInstance`-Modell beinhalten, einschließlich des Status, der Prägung und der eindeutigen ID jeder Kopie. Der Text der eindeutigen ID sollte mit der Detailseite der `BookInstance` verlinkt sein.

## Controller

Die Controller-Funktion für die Liste der `BookInstance` muss eine Liste aller Buchinstanzen abrufen, die dazugehörigen Buchinformationen einfügen und dann die Liste an die Vorlage zur Darstellung übergeben.

Öffnen Sie `/controllers/bookinstanceController.js`.
Suchen Sie die exportierte `bookinstance_list()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

```js
// Display list of all BookInstances.
exports.bookinstance_list = asyncHandler(async (req, res, next) => {
  const allBookInstances = await BookInstance.find().populate("book").exec();

  res.render("bookinstance_list", {
    title: "Book Instance List",
    bookinstance_list: allBookInstances,
  });
});
```

Der Routen-Handler ruft die `find()` Funktion auf dem `BookInstance`-Modell auf und reiht dann einen Aufruf von `populate()` mit dem `book`-Feld ein – dies ersetzt die gespeicherte Buch-ID für jede `BookInstance` durch ein vollständiges `Book` Dokument.
`exec()` wird dann an das Ende angehängt, um die Abfrage auszuführen und ein Versprechen zurückzugeben.

Der Routen-Handler verwendet `await`, um auf das Versprechen zu warten und die Ausführung anzuhalten, bis es erfüllt ist.
Wenn das Versprechen erfüllt wird, werden die Ergebnisse der Abfrage in der Variablen `allBookInstances` gespeichert, und der Routen-Handler setzt die Ausführung fort.

Der letzte Teil des Codes ruft `render()` auf, spezifiziert die **bookinstance_list** (.pug) Vorlage und übergibt Werte für `title` und `bookinstance_list` in die Vorlage.

## Ansicht

Erstellen Sie **/views/bookinstance_list.pug** und kopieren Sie den folgenden Text hinein.

```pug
extends layout

block content
  h1= title

  if bookinstance_list.length
    ul
      each val in bookinstance_list
        li
          a(href=val.url) #{val.book.title} : #{val.imprint} -&nbsp;
          if val.status=='Available'
            span.text-success #{val.status}
          else if val.status=='Maintenance'
            span.text-danger #{val.status}
          else
            span.text-warning #{val.status}
          if val.status!='Available'
            span  (Due: #{val.due_back} )

  else
    p There are no book copies in this library.
```

Diese Ansicht ist ganz ähnlich wie alle anderen. Sie erweitert das Layout, ersetzt den _content_-Block, zeigt den aus dem Controller übergebenen `title` an und iteriert durch alle Buchkopien in der `bookinstance_list`. Für jede Kopie zeigen wir ihren Status (farblich gekennzeichnet) und, falls das Buch nicht verfügbar ist, das erwartete Rückgabedatum an. Ein neues Feature wird eingeführt – wir können nach einem Tag Punktnotation verwenden, um eine Klasse zuzuweisen. Also wird `span.text-success` zu `<span class="text-success">` kompiliert (und könnte in Pug auch als `span(class="text-success")` geschrieben werden).

## Wie sieht es aus?

Starten Sie die Anwendung, öffnen Sie Ihren Browser unter `http://localhost:3000/`, und wählen Sie dann den Link _All book-instances_ aus. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite etwa wie der folgende Screenshot aussehen.

![BookInstance List Page - Express Local Library site](locallibary_express_bookinstance_list.png)

## Nächste Schritte

- Kehren Sie zurück zum [Express Tutorial Part 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Datumsformatierung mit luxon](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment).
