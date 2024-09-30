---
title: Buchinstanz-Liste Seite
slug: Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Als nächstes implementieren wir unsere Liste aller Buchkopien (`BookInstance`) in der Bibliothek. Diese Seite muss den Titel des mit jeder `BookInstance` verknüpften `Book` (verlinkt mit seiner Detailseite) zusammen mit weiteren Informationen im `BookInstance`-Modell enthalten, einschließlich des Status, des Impressums und der eindeutigen ID jeder Kopie. Der Text der eindeutigen ID sollte mit der Detailseite der `BookInstance` verlinkt sein.

## Controller

Die `BookInstance`-Listencontroller-Funktion muss eine Liste aller Buchinstanzen abrufen, die zugehörigen Buchinformationen einfügen und dann die Liste an das Template zur Darstellung übergeben.

Öffnen Sie `/controllers/bookinstanceController.js`.
Suchen Sie die exportierte `bookinstance_list()`-Controllermethode und ersetzen Sie sie durch den folgenden Code.

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

Der Routen-Handler ruft die `find()`-Funktion auf dem `BookInstance`-Modell auf und daisy-chained dann einen Aufruf an `populate()` mit dem `book`-Feld—dies wird die Buch-ID, die für jede `BookInstance` gespeichert ist, durch ein vollständiges `Book`-Dokument ersetzen.
`exec()` wird dann am Ende hinzugefügt, um die Abfrage auszuführen und ein Versprechen zurückzugeben.

Der Routen-Handler verwendet `await`, um auf das Versprechen zu warten und die Ausführung zu pausieren, bis es abgeschlossen ist.
Wenn das Versprechen erfüllt ist, werden die Ergebnisse der Abfrage in der Variablen `allBookInstances` gespeichert und der Routen-Handler setzt die Ausführung fort.

Der letzte Teil des Codes ruft `render()` auf, spezifiziert das **bookinstance_list** (.pug) Template und übergibt Werte für das `title` und `bookinstance_list` an das Template.

## Ansicht

Erstellen Sie **/views/bookinstance_list.pug** und kopieren Sie den untenstehenden Text hinein.

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

Diese Ansicht ist fast wie alle anderen. Sie erweitert das Layout, ersetzt den _content_-Block, zeigt den vom Controller übergebenen `title` an und durchläuft alle Buchkopien in `bookinstance_list`. Für jede Kopie zeigen wir ihren Status (farblich gekennzeichnet) und, falls das Buch nicht verfügbar ist, das erwartete Rückgabedatum an. Ein neues Feature wird eingeführt—wir können die Punktnotation nach einem Tag verwenden, um eine Klasse zuzuweisen. So wird `span.text-success` zu `<span class="text-success">` kompiliert (und könnte auch in Pug als `span(class="text-success")` geschrieben werden).

## Wie sieht es aus?

Starten Sie die Anwendung, öffnen Sie Ihren Browser auf `http://localhost:3000/`, und wählen Sie dann den _Alle Buchinstanzen_ Link. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite etwa wie der folgende Screenshot aussehen.

![Buchinstanz-Liste Seite - Express Local Library Seite](locallibary_express_bookinstance_list.png)

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie fort mit dem nächsten Unterartikel von Teil 5: [Datumsformatierung mit luxon](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment).
