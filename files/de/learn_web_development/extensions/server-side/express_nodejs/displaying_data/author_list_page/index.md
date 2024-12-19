---
title: Autorenliste-Seite und Genre-Liste-Seite Herausforderung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_list_page
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Die Autorenliste-Seite muss eine Liste aller Autoren in der Datenbank anzeigen, wobei jeder Autorenname mit der zugehörigen Detailseite des Autors verlinkt sein sollte. Das Geburts- und Sterbedatum sollte nach dem Namen in derselben Zeile aufgelistet werden.

## Controller

Die Controller-Funktion der Autorenliste muss eine Liste aller `Author` Instanzen abrufen und diese dann zur Vorlage für die Darstellung weiterleiten.

Öffnen Sie **/controllers/authorController.js**. Suchen Sie die exportierte `author_list()` Controller-Methode oben in der Datei und ersetzen Sie sie durch den folgenden Code.

```js
// Display list of all Authors.
exports.author_list = asyncHandler(async (req, res, next) => {
  const allAuthors = await Author.find().sort({ family_name: 1 }).exec();
  res.render("author_list", {
    title: "Author List",
    author_list: allAuthors,
  });
});
```

Die Route-Controller-Funktion folgt demselben Muster wie für die anderen Listen-Seiten. Sie definiert eine Abfrage auf dem `Author` Modell, verwendet die Funktion `find()`, um alle Autoren abzurufen, und die Methode `sort()`, um sie alphabetisch nach `family_name` zu sortieren. `exec()` wird am Ende angehängt, um die Abfrage auszuführen und ein Versprechen zurückzugeben, das die Funktion `await` kann.

Sobald das Versprechen erfüllt ist, rendert der Routenhandler die **author_list**(.pug) Vorlage und übergibt den Seiten-`title` und die Liste der Autoren (`allAuthors`) unter Verwendung von Vorlagenschlüsseln.

## Ansicht

Erstellen Sie **/views/author_list.pug** und ersetzen Sie dessen Inhalt durch den untenstehenden Text.

```pug
extends layout

block content
  h1= title

  if author_list.length
    ul
      each author in author_list
        li
          a(href=author.url) #{author.name}
          |  (#{author.date_of_birth} - #{author.date_of_death})
  else
    p There are no authors.
```

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie dann den Link _Alle Autoren_. Wenn alles korrekt eingerichtet ist, sollte die Seite ungefähr wie der folgende Screenshot aussehen.

![Author List Page - Express Local Library site](locallibary_express_author_list.png)

> [!NOTE]
> Das Erscheinungsbild der Autor _Lebensspanne_ Daten ist unschön! Sie können dies verbessern, indem Sie denselben [Ansatz](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment) verwenden wie in der `BookInstance` Liste (durch Hinzufügen der virtuellen Eigenschaft für die Lebensspanne zum `Author` Modell).
>
> Da der Autor jedoch möglicherweise nicht tot ist oder Geburts-/Todesdaten fehlen, müssen wir in diesem Fall fehlende Daten oder Verweise auf nicht vorhandene Eigenschaften ignorieren. Eine Möglichkeit, damit umzugehen, besteht darin, entweder ein formatiertes Datum oder eine leere Zeichenfolge zurückzugeben, je nachdem, ob die Eigenschaft definiert ist. Zum Beispiel:
>
> `return this.date_of_birth ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED) : '';`

## Genre-Liste-Seite—Herausforderung!

In diesem Abschnitt sollten Sie Ihre eigene Genre-Liste-Seite implementieren. Die Seite sollte eine Liste aller Genres in der Datenbank anzeigen, wobei jedes Genre mit seiner zugehörigen Detailseite verlinkt sein sollte. Ein Screenshot des erwarteten Ergebnisses wird unten gezeigt.

![Genre List - Express Local Library site](locallibary_express_genre_list.png)

Die Controller-Funktion der Genre-Liste muss eine Liste aller `Genre` Instanzen abrufen und diese dann zur Vorlage für die Darstellung weiterleiten.

1. Sie müssen `genre_list()` in **/controllers/genreController.js** bearbeiten.
2. Die Implementierung ist fast genau dieselbe wie die der `author_list()` Controller.

   - Sortieren Sie die Ergebnisse nach Name, in aufsteigender Reihenfolge.

3. Die zu rendernde Vorlage sollte **genre_list.pug** heißen.
4. Der Vorlage sollten die Variablen `title` ('Genre List') und `genre_list` (die Liste der Genres, die von Ihrem `Genre.find()` Rückruf zurückgegeben wird) übergeben werden.
5. Die Ansicht sollte dem Screenshot/Anforderungen oben entsprechen (sie sollte eine sehr ähnliche Struktur/Format wie die Autorenlistenansicht haben, mit dem Unterschied, dass Genres keine Daten haben).

## Nächste Schritte

Kehren Sie zurück zum [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).

Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Genre-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page).
