---
title: Buchinstanz-Liste
slug: Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Als Nächstes implementieren wir unsere Liste aller Buchkopien (`BookInstance`) in der Bibliothek. Diese Seite muss den Titel des mit jeder `BookInstance` verknüpften `Book` (verlinkt zu dessen Detailseite) zusammen mit anderen Informationen im `BookInstance`-Modell enthalten, einschließlich des Status, des Impressums und der eindeutigen ID jeder Kopie. Der Text der eindeutigen ID sollte mit der Detailseite der `BookInstance` verlinkt sein.

## Controller

Die `BookInstance`-Listen-Controller-Funktion muss eine Liste aller Buchinstanzen abrufen, die zugehörigen Buchinformationen belegen und dann die Liste an das Template zum Rendering übergeben.

Öffnen Sie `/controllers/bookinstanceController.js`.
Finden Sie die exportierte `bookinstance_list()`-Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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

Der Routen-Handler ruft die `find()`-Funktion auf dem `BookInstance`-Modell auf und verkettet dann einen Aufruf an `populate()` mit dem `book`-Feld—dadurch wird die Buch-ID, die für jede `BookInstance` gespeichert ist, durch ein vollständiges `Book`-Dokument ersetzt.
`exec()` wird dann am Ende angehängt, um die Abfrage auszuführen und ein Versprechen zurückzugeben.

Der Routen-Handler verwendet `await`, um auf das Versprechen zu warten und die Ausführung zu pausieren, bis es erfüllt ist.
Wenn das Versprechen erfüllt wird, werden die Ergebnisse der Abfrage in der Variablen `allBookInstances` gespeichert und der Routen-Handler setzt die Ausführung fort.

Der letzte Teil des Codes ruft `render()` auf, gibt das **bookinstance_list** (.pug) Template an und übergibt Werte für den `title` und die `bookinstance_list` an das Template.

## View

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

Diese Ansicht ist weitgehend wie alle anderen. Sie erweitert das Layout und ersetzt den _content_-Block, zeigt den vom Controller übergebenen `title` an und durchläuft alle Buchkopien in `bookinstance_list`. Für jede Kopie zeigen wir ihren Status (farblich gekennzeichnet) und, wenn das Buch nicht verfügbar ist, das erwartete Rückgabedatum an. Ein neues Feature wird eingeführt—wir können die Punktnotation nach einem Tag verwenden, um eine Klasse zuzuweisen. So wird `span.text-success` zu `<span class="text-success">` kompiliert (und könnte in Pug auch als `span(class="text-success")` geschrieben werden).

## Wie sieht das aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/`, und wählen Sie dann den Link _Alle Buchinstanzen_. Wenn alles richtig eingerichtet ist, sollte Ihre Seite in etwa wie der folgende Screenshot aussehen.

![Buchinstanz-Liste - Express Local Library Seite](locallibary_express_bookinstance_list.png)

## Nächste Schritte

- Gehen Sie zurück zu [Express Tutorial Teil 5: Anzeige von Bibliotheksdaten](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Datumsformatierung mit Luxon](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment).
