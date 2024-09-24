---
title: Autorenlisten-Seite und Genrelisten-Seite Herausforderung
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Die Autorenlisten-Seite muss eine Liste aller Autoren in der Datenbank anzeigen, wobei jeder Autorenname mit der zugehörigen Autorendetailseite verlinkt ist. Das Geburts- und Sterbedatum sollte nach dem Namen in derselben Zeile aufgeführt werden.

## Controller

Die Autorenlisten-Controller-Funktion muss eine Liste aller `Author`-Instanzen abrufen und diese dann an das Template zur Darstellung weitergeben.

Öffnen Sie **/controllers/authorController.js**. Finden Sie die exportierte `author_list()` Controller-Methode nahe dem Anfang der Datei und ersetzen Sie sie durch den folgenden Code.

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

Die Routencontroller-Funktion folgt demselben Muster wie für die anderen Listen-Seiten. Sie definiert eine Abfrage für das `Author`-Modell, verwendet die Funktion `find()`, um alle Autoren zu erhalten, und die Methode `sort()`, um sie alphabetisch nach `family_name` zu sortieren. `exec()` wird am Ende verkettet, um die Abfrage auszuführen und ein Versprechen zurückzugeben, das die Funktion `await`-en kann.

Sobald das Versprechen erfüllt ist, rendert der Routen-Handler das **author_list**(.pug) Template und übergibt den Seiten-`title` und die Liste der Autoren (`allAuthors`) unter Verwendung von Template-Schlüsseln.

## View

Erstellen Sie **/views/author_list.pug** und ersetzen Sie den Inhalt durch den untenstehenden Text.

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
    p Es gibt keine Autoren.
```

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie dann den Link _Alle Autoren_. Wenn alles korrekt eingerichtet ist, sollte die Seite in etwa wie der folgende Screenshot aussehen.

![Author List Page - Express Local Library site](locallibary_express_author_list.png)

> [!NOTE]
> Das Erscheinungsbild der Autor-_Lebensspanne_-Daten ist unschön! Sie können dies verbessern, indem Sie denselben [Ansatz](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment) verwenden, den wir für die `BookInstance`-Liste verwendet haben (Hinzufügen der virtuellen Eigenschaft für die Lebensspanne zum `Author`-Modell).
>
> Da der Autor jedoch möglicherweise nicht verstorben ist oder Geburts-/Sterbedaten fehlen, müssen in diesem Fall fehlende Daten oder Verweise auf nicht vorhandene Eigenschaften ignoriert werden. Eine Möglichkeit, damit umzugehen, besteht darin, entweder ein formatiertes Datum oder einen leeren String zurückzugeben, abhängig davon, ob die Eigenschaft definiert ist. Beispielsweise:
>
> `return this.date_of_birth ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED) : '';`

## Genrelisten-Seite—Herausforderung!

In diesem Abschnitt sollten Sie Ihre eigene Genrelisten-Seite implementieren. Die Seite sollte eine Liste aller Genres in der Datenbank anzeigen, wobei jedes Genre mit der zugehörigen Detailseite verlinkt ist. Ein Screenshot des erwarteten Ergebnisses ist unten dargestellt.

![Genre List - Express Local Library site](locallibary_express_genre_list.png)

Die Genrelisten-Controller-Funktion muss eine Liste aller `Genre`-Instanzen abrufen und diese dann an das Template zur Darstellung weitergeben.

1. Sie müssen `genre_list()` in **/controllers/genreController.js** bearbeiten.
2. Die Implementierung ist fast genau dieselbe wie die `author_list()`-Controller.

   - Sortieren Sie die Ergebnisse nach Name in aufsteigender Reihenfolge.

3. Das zu rendierende Template sollte **genre_list.pug** heißen.
4. Das zu rendierende Template sollte die Variablen `title` ('Genre List') und `genre_list` (die Liste der Genres, die aus Ihrem `Genre.find()`-Callback zurückgegeben wird) enthalten.
5. Die Ansicht sollte dem Screenshot/den Anforderungen oben entsprechen (diese sollte eine sehr ähnliche Struktur/Format wie die Autorenlistenansicht haben, mit der Ausnahme, dass Genres keine Daten haben).

## Nächste Schritte

Kehren Sie zum [Express-Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data) zurück.

Gehen Sie zum nächsten Unterartikel von Teil 5: [Genre-Detailseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page).
