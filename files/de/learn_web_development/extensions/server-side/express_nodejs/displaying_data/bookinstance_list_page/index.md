---
title: Seite zur Liste der Buchinstanzen
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

Als Nächstes implementieren wir unsere Liste aller Buchkopien (`BookInstance`) in der Bibliothek. Diese Seite muss den Titel des mit jeder `BookInstance` verknüpften `Book` (verlinkt mit seiner Detailseite) sowie weitere Informationen im `BookInstance` Modell enthalten, einschließlich des Status, des Druckvermerks und der eindeutigen ID jeder Kopie. Der Text der eindeutigen ID sollte mit der Detailseite der `BookInstance` verlinkt sein.

## Controller

Die `BookInstance` Listen-Controller-Funktion muss eine Liste aller Buchinstanzen abrufen, die zugehörigen Buchinformationen einfügen und dann die Liste zur Template-Renderung übergeben.

Öffnen Sie `/controllers/bookinstanceController.js`.
Suchen Sie die exportierte `bookinstance_list()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

```js
// Display list of all BookInstances.
exports.bookinstance_list = async (req, res, next) => {
  const allBookInstances = await BookInstance.find().populate("book").exec();

  res.render("bookinstance_list", {
    title: "Book Instance List",
    bookinstance_list: allBookInstances,
  });
};
```

Der Routinen-Handler ruft die `find()` Funktion auf dem `BookInstance` Modell auf und reiht danach einen Aufruf von `populate()` mit dem `book` Feld ein—dies wird die im `BookInstance` gespeicherte Buch-ID durch ein vollständiges `Book` Dokument ersetzen.
`exec()` wird dann am Ende angehängt, um die Abfrage auszuführen und ein Versprechen zurückzugeben.

Der Routinen-Handler verwendet `await`, um auf das Versprechen zu warten und die Ausführung zu pausieren, bis es erfüllt ist.
Wenn das Versprechen erfüllt wird, werden die Ergebnisse der Abfrage in der Variablen `allBookInstances` gespeichert, und der Routinen-Handler setzt die Ausführung fort.

Der letzte Teil des Codes ruft `render()` auf, spezifiziert das **bookinstance_list** (.pug) Template und übergibt Werte für `title` und `bookinstance_list` in das Template.

## Ansicht

Erstellen Sie **/views/bookinstance_list.pug** und kopieren Sie den unten stehenden Text hinein.

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

Diese Ansicht ist fast wie alle anderen. Sie erweitert das Layout, ersetzt den _content_ Block, zeigt den vom Controller übernommenen `title` an und iteriert durch alle Buchkopien in `bookinstance_list`. Für jede Kopie zeigen wir ihren Status (farblich kodiert) und, wenn das Buch nicht verfügbar ist, das erwartete Rückgabedatum an. Eine neue Funktion wird eingeführt—wir können nach einem Tag Punktnotation verwenden, um eine Klasse zuzuweisen. So wird `span.text-success` zu `<span class="text-success">` kompiliert (und könnte in Pug auch als `span(class="text-success")` geschrieben werden).

## Wie sieht es aus?

Starten Sie die Anwendung, öffnen Sie Ihren Browser unter `http://localhost:3000/` und wählen Sie den Link _All book-instances_. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite in etwa wie der folgende Screenshot aussehen.

![BookInstance List Page - Express Local Library site](locallibary_express_bookinstance_list.png)

## Nächste Schritte

- Zurück zu [Express Tutorial Part 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Datumsformatierung mit luxon](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment).
