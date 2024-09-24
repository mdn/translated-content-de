---
title: Liste der Buchinstanzen
slug: Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Als nächstes werden wir unsere Liste aller Buchkopien (`BookInstance`) in der Bibliothek implementieren. Diese Seite muss den Titel des mit jeder `BookInstance` verknüpften `Book` enthalten (verlinkt auf die Detailseite) sowie weitere Informationen im `BookInstance`-Modell, einschließlich des Status, Druckvermerks und der eindeutigen ID jeder Kopie. Der Text der eindeutigen ID sollte mit der Detailseite der `BookInstance` verlinkt sein.

## Controller

Die `BookInstance`-Listencontroller-Funktion muss eine Liste aller Buchinstanzen abrufen, die zugehörigen Buchinformationen füllen und die Liste dann an die Vorlage zur Darstellung übergeben.

Öffnen Sie `/controllers/bookinstanceController.js`.
Suchen Sie die exportierte `bookinstance_list()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

```js
// Liste aller Buchinstanzen anzeigen.
exports.bookinstance_list = asyncHandler(async (req, res, next) => {
  const allBookInstances = await BookInstance.find().populate("book").exec();

  res.render("bookinstance_list", {
    title: "Book Instance List",
    bookinstance_list: allBookInstances,
  });
});
```

Der Routen-Handler ruft die `find()`-Funktion des `BookInstance`-Modells auf und verknüpft dann einen Aufruf von `populate()` mit dem `book`-Feld—dies wird die Buch-ID ersetzen, die für jede `BookInstance` gespeichert ist, durch ein vollständiges `Book`-Dokument.
`exec()` wird anschließend zur Ausführung der Abfrage und Rückgabe eines Versprechens verkettet.

Der Routen-Handler verwendet `await`, um auf das Versprechen zu warten und die Ausführung zu pausieren, bis es abgeschlossen ist.
Wenn das Versprechen erfüllt ist, werden die Ergebnisse der Abfrage in der Variablen `allBookInstances` gespeichert, und der Routen-Handler setzt die Ausführung fort.

Der letzte Teil des Codes ruft `render()` auf und gibt die **bookinstance_list** (.pug) Vorlage an, wobei Werte für `title` und `bookinstance_list` an die Vorlage übergeben werden.

## View

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
    p Es gibt keine Buchkopien in dieser Bibliothek.
```

Diese Ansicht ist ähnlich wie alle anderen. Sie erweitert das Layout, ersetzt den _content_ Block, zeigt den im Controller übergebenen `title` an und iteriert über alle Buchkopien in `bookinstance_list`. Für jede Kopie wird ihr Status (farblich gekennzeichnet) angezeigt und, wenn das Buch nicht verfügbar ist, das erwartete Rückgabedatum. Ein neues Feature wird eingeführt: Wir können die Punktnotation nach einem Tag verwenden, um eine Klasse zuzuweisen. So wird `span.text-success` zu `<span class="text-success">` kompiliert (und könnte in Pug auch als `span(class="text-success")` geschrieben werden).

## Wie sieht es aus?

Führen Sie die Anwendung aus, öffnen Sie Ihren Browser unter `http://localhost:3000/` und wählen Sie dann den Link _Alle Buchinstanzen_ aus. Wenn alles korrekt eingerichtet ist, sollte Ihre Seite wie der folgende Screenshot aussehen.

![BookInstance List Page - Express Local Library site](locallibary_express_bookinstance_list.png)

## Nächste Schritte

- Zurück zum [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Datumsformatierung mit luxon](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment).
