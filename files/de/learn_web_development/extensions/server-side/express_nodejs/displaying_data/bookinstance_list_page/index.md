---
title: Liste der Buchexemplare
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_list_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data")}}

Als Nächstes implementieren wir die Liste aller Buchexemplare (`BookInstance`) in der Bibliothek. Die Seite soll für jedes Exemplar den Titel des zugehörigen `Book` (mit einem Link zu dessen Detailseite) sowie weitere Informationen aus dem `BookInstance`-Modell anzeigen: Status, Impressum und eindeutige ID. Die eindeutige ID soll mit der Detailseite der jeweiligen `BookInstance` verlinkt sein.

## Controller

Die Controller-Funktion für die `BookInstance`-Liste muss alle Buchexemplare abrufen, die zugehörigen Buchinformationen laden und die Liste zur Darstellung an das Template übergeben.

Öffnen Sie **controllers/bookinstanceController.js**. Suchen Sie die exportierte Controller-Methode `bookInstanceList()` und ersetzen Sie sie durch den folgenden Code.

```js
// Display list of all BookInstances.
export const bookInstanceList = async (req, res, next) => {
  const allBookInstances = await BookInstance.find().populate("book").exec();

  res.render("bookinstance_list", {
    title: "Book Instance List",
    bookinstance_list: allBookInstances,
  });
};
```

Der Route-Handler ruft `find()` für das `BookInstance`-Modell auf und verkettet anschließend einen Aufruf von `populate()` für das Feld `book`. Dadurch wird die für jede `BookInstance` gespeicherte Buch-ID durch ein vollständiges `Book`-Dokument ersetzt. Abschließend wird `exec()` angehängt, um die Abfrage auszuführen und ein Promise zurückzugeben.

Der Route-Handler wartet mit `await`, bis das Promise erfüllt oder abgelehnt wurde, und hält bis dahin die Ausführung an. Wenn das Promise erfüllt wird, werden die Abfrageergebnisse in der Variablen `allBookInstances` gespeichert und der Route-Handler setzt die Ausführung fort.

Im letzten Teil des Codes wird `render()` aufgerufen. Dabei wird das Template **bookinstance_list** (.pug) angegeben und es werden Werte für `title` und `bookinstance_list` an das Template übergeben.

## View

Erstellen Sie **views/bookinstance_list.pug** und fügen Sie den folgenden Text ein.

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
            span  (Due: #{val.due_back})

  else
    p There are no book copies in this library.
```

Diese View ähnelt den anderen. Sie erweitert das Layout, ersetzt den Block _content_, zeigt den vom Controller übergebenen `title` an und durchläuft alle Buchexemplare in `bookinstance_list`. Für jedes Exemplar zeigen wir den Status farblich hervorgehoben an und, falls das Buch nicht verfügbar ist, das voraussichtliche Rückgabedatum. Neu ist, dass wir einem Tag mit der Punktnotation eine Klasse zuweisen können. `span.text-success` wird beispielsweise zu `<span class="text-success">` kompiliert (und könnte in Pug auch als `span(class="text-success")` geschrieben werden).

## Datumsangaben formatieren

Die standardmäßige Darstellung von Datumsangaben aus unseren Modellen ist wenig ansprechend: _Mon Apr 10 2020 15:49:58 GMT+1100 (AUS Eastern Daylight Time)_. In diesem Abschnitt zeigen wir, wie Sie die Seite mit der _BookInstance-Liste_ aus dem vorherigen Abschnitt so aktualisieren, dass das Feld `due_back` in einem lesefreundlicheren Format angezeigt wird: _Apr 10, 2020_.

Dazu erstellen wir in unserem `BookInstance`-Modell eine virtuelle Eigenschaft, die das formatierte Datum zurückgibt. Für die Formatierung verwenden wir {{jsxref("Intl")}}.

> [!NOTE]
> Sie könnten die Zeichenfolgen auch direkt in den Pug-Templates oder an einer anderen Stelle formatieren. Mit einer virtuellen Eigenschaft können wir das formatierte Datum jedoch genauso abrufen wie bisher `due_back`.

Öffnen Sie **models/bookinstance.js**. Fügen Sie die virtuelle Eigenschaft `due_back_formatted` direkt nach der URL-Eigenschaft hinzu.

```js
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

BookInstanceSchema.virtual("due_back_formatted").get(function () {
  return dateFormatter.format(this.due_back);
});
```

Datumsangaben im Format `YYYY-MM-DD` (wie sie später von unseren Formularen eingegeben werden) werden als Mitternacht in UTC gespeichert. Deshalb setzen wir die Option `timeZone` auf `"UTC"`. Andernfalls würden diese Daten in der lokalen Zeitzone des Servers angezeigt und auf Servern westlich von UTC um einen Tag zu früh erscheinen.

Öffnen Sie **views/bookinstance_list.pug** und ersetzen Sie `due_back` durch `due_back_formatted`.

```pug
      if val.status != 'Available'
        //span  (Due: #{val.due_back})
        span  (Due: #{val.due_back_formatted})
```

Das war's. Wenn Sie in der Seitenleiste _All book-instances_ auswählen, sollten die Rückgabedaten nun deutlich ansprechender aussehen!

## Wie sieht das Ergebnis aus?

Starten Sie die Anwendung, öffnen Sie `http://localhost:3000/` in Ihrem Browser und wählen Sie den Link _All book-instances_. Wenn alles richtig eingerichtet ist, sollte Ihre Website ungefähr wie auf dem folgenden Screenshot aussehen.

![Listenseite der Buchexemplare – Express Local Library](locallibary_express_bookinstance_list.png)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_list_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data")}}
