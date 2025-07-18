---
title: Autorliste-Seite und Genre-Liste-Seiten-Herausforderung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_list_page
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

Die Autorliste-Seite muss eine Liste aller Autoren in der Datenbank anzeigen, wobei jeder Autorenname mit seiner zugehörigen Autorendetailseite verlinkt ist. Das Geburts- und Todesdatum sollte nach dem Namen in derselben Zeile angezeigt werden.

## Controller

Die Controller-Funktion der Autorenliste muss eine Liste aller `Author`-Instanzen abrufen und diese dann zur Darstellung an das Template übergeben.

Öffnen Sie **/controllers/authorController.js**. Finden Sie die exportierte `author_list()`-Controller-Methode nahe dem Anfang der Datei und ersetzen Sie sie durch den folgenden Code.

```js
// Display list of all Authors.
exports.author_list = async (req, res, next) => {
  const allAuthors = await Author.find().sort({ family_name: 1 }).exec();
  res.render("author_list", {
    title: "Author List",
    author_list: allAuthors,
  });
};
```

Die Routen-Controller-Funktion folgt demselben Muster wie bei den anderen Listenseiten. Sie definiert eine Abfrage für das `Author`-Modell und verwendet die `find()`-Funktion, um alle Autoren abzurufen, sowie die `sort()`-Methode, um sie alphabetisch nach `family_name` zu sortieren. `exec()` wird angehängt, um die Abfrage auszuführen und ein Versprechen zurückzugeben, auf dessen Erfüllung die Funktion `await`en kann.

Sobald das Versprechen erfüllt ist, rendert der Routen-Handler das **author_list**(.pug)-Template und übergibt den Seitentitel (`title`) und die Liste der Autoren (`allAuthors`) unter Verwendung von Template-Schlüsseln.

## Ansicht

Erstellen Sie **/views/author_list.pug** und ersetzen Sie dessen Inhalt durch den unten stehenden Text.

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

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie dann den Link _Alle Autoren_. Wenn alles korrekt eingerichtet ist, sollte die Seite ungefähr wie im folgenden Screenshot aussehen.

![Author List Page - Express Local Library site](locallibary_express_author_list.png)

> [!NOTE]
> Das Erscheinungsbild der _Lebensdauer_-Daten des Autors ist unschön! Sie können dies mit demselben [Ansatz](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment) verbessern, den wir für die `BookInstance`-Liste verwendet haben (Hinzufügen der virtuellen Eigenschaft für die Lebensdauer zum `Author`-Modell).
>
> Da der Autor jedoch möglicherweise nicht verstorben ist oder Geburts-/Todesdaten fehlen, müssen wir in diesem Fall fehlende Daten oder Verweise auf nicht vorhandene Eigenschaften ignorieren. Eine Möglichkeit, dies zu handhaben, besteht darin, entweder ein formatiertes Datum oder eine leere Zeichenkette zurückzugeben, je nachdem, ob die Eigenschaft definiert ist. Zum Beispiel:
>
> `return this.date_of_birth ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED) : '';`

## Genre-Liste-Seite—Herausforderung!

In diesem Abschnitt sollen Sie Ihre eigene Genre-Liste-Seite implementieren. Die Seite sollte eine Liste aller Genres in der Datenbank anzeigen, wobei jedes Genre mit seiner zugehörigen Detailseite verlinkt ist. Ein Screenshot des erwarteten Ergebnisses ist unten gezeigt.

![Genre List - Express Local Library site](locallibary_express_genre_list.png)

Die Genre-Listen-Controller-Funktion muss eine Liste aller `Genre`-Instanzen abrufen und diese dann zur Darstellung an das Template übergeben.

1. Sie müssen `genre_list()` in **/controllers/genreController.js** bearbeiten.
2. Die Implementierung ist fast genau dieselbe wie die `author_list()`-Controller.
   - Sortieren Sie die Ergebnisse aufsteigend nach Name.

3. Das zu rendernde Template sollte **genre_list.pug** heißen.
4. Das zu rendernde Template sollte die Variablen `title` ('Genre List') und `genre_list` (die Liste der aus `Genre.find()` zurückgegebenen Genres) erhalten.
5. Die Ansicht sollte dem Screenshot/den Anforderungen oben entsprechen (sie sollte eine sehr ähnliche Struktur/Format wie die Autorlistenansicht haben, außer dass Genres keine Daten haben).

## Nächste Schritte

Kehren Sie zurück zu [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).

Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Genre-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page).
