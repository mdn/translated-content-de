---
title: Seite mit der Liste der Buchkopien
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Als Nächstes werden wir unsere Liste aller Buchkopien (`BookInstance`) in der Bibliothek implementieren. Diese Seite muss den Titel des mit jeder `BookInstance` verbundenen `Book` enthalten (verlinkt auf die Detailseite) sowie weitere Informationen im `BookInstance`-Modell, einschließlich des Status, des Impressums und der eindeutigen ID jeder Kopie. Der Text der eindeutigen ID sollte mit der Detailseite der `BookInstance` verlinkt sein.

## Controller

Die Controller-Funktion für die `BookInstance`-Liste muss eine Liste aller Buchinstanzen abrufen, die zugehörigen Buchinformationen einfügen und dann die Liste an das Template zum Rendern übergeben.

Öffnen Sie `/controllers/bookinstanceController.js`.
Suchen Sie die exportierte `bookinstance_list()`-Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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

Der Routenhandler ruft die Funktion `find()` auf dem Modell `BookInstance` auf und fügt dann eine verkettete Aufruf zur `populate()`-Funktion mit dem `book`-Feld hinzu—dies ersetzt die Buch-ID, die für jede `BookInstance` gespeichert ist, mit einem vollständigen `Book`-Dokument.
`exec()` wird dann am Ende verkettet, um die Abfrage auszuführen und ein Versprechen zurückzugeben.

Der Routenhandler verwendet `await`, um auf das Versprechen zu warten und die Ausführung zu pausieren, bis es erfüllt ist.
Wenn das Versprechen erfüllt ist, werden die Ergebnisse der Abfrage in der Variablen `allBookInstances` gespeichert, und der Routenhandler setzt die Ausführung fort.

Der letzte Teil des Codes ruft `render()` auf, gibt das **bookinstance_list** (.pug)-Template an und übergibt Werte für den `title` und `bookinstance_list` an das Template.

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

Diese Ansicht ähnelt allen anderen. Sie erweitert das Layout, ersetzt den _content_-Block, zeigt den `title` an, der aus dem Controller übergeben wird, und iteriert über alle Buchkopien in `bookinstance_list`. Für jede Kopie zeigen wir den Status (farblich gekennzeichnet) an und, falls das Buch nicht verfügbar ist, das voraussichtliche Rückgabedatum. Eine neue Funktion wird eingeführt: Wir können die Punktnotation nach einem Tag verwenden, um eine Klasse zuzuweisen. So wird `span.text-success` zu `<span class="text-success">` kompiliert (und könnte in Pug auch als `span(class="text-success")` geschrieben werden).

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/`, und wählen Sie den Link _All book-instances_. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite in etwa wie der folgende Screenshot aussehen.

![Buchkopien-Liste - Express Local Library-Website](locallibary_express_bookinstance_list.png)

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Gehen Sie zum nächsten Unterartikel von Teil 5: [Datumsformatierung mit Luxon](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment).
