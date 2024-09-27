---
title: Autor-Liste-Seite und Genre-Liste-Seite Herausforderung
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Die Autor-Liste-Seite muss eine Liste aller Autoren in der Datenbank anzeigen, wobei jeder Autorenname mit der zugehörigen Detailseite des Autors verlinkt sein sollte. Das Geburts- und Sterbedatum sollte nach dem Namen in derselben Zeile aufgeführt werden.

## Controller

Die Controller-Funktion für die Autor-Liste muss eine Liste aller `Author`-Instanzen abrufen und diese dann an die Vorlage zur Darstellung übergeben.

Öffnen Sie **/controllers/authorController.js**. Finden Sie die exportierte `author_list()` Controller-Methode oben in der Datei und ersetzen Sie diese mit dem folgenden Code.

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

Die Routen-Controller-Funktion folgt demselben Muster wie bei den anderen Listen-Seiten. Sie definiert eine Abfrage auf dem `Author`-Modell, indem die Funktion `find()` verwendet wird, um alle Autoren zu erhalten, und die Methode `sort()`, um sie alphabetisch nach `family_name` zu sortieren. `exec()` wird angehängt, um die Abfrage auszuführen und ein Versprechen zurückzugeben, auf das die Funktion `await` aufrufen kann.

Sobald das Versprechen erfüllt ist, rendert der Routen-Handler die **author_list**(.pug)-Vorlage und übergibt den Seiten`title` und die Liste der Autoren (`allAuthors`) mithilfe von Vorlagenschlüsseln.

## Ansicht

Erstellen Sie **/views/author_list.pug** und ersetzen Sie den Inhalt mit dem untenstehenden Text.

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

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser auf `http://localhost:3000/`. Wählen Sie dann den Link _Alle Autoren_. Wenn alles richtig eingerichtet ist, sollte die Seite ungefähr wie der folgende Screenshot aussehen.

![Autor-Liste-Seite - Express Local Library Website](locallibary_express_author_list.png)

> [!NOTE]
> Das Erscheinungsbild der Daten des Autoren _Lebensspanne_ ist unschön! Sie können dies verbessern, indem Sie den [gleichen Ansatz](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment) verwenden, den wir für die `BookInstance`-Liste verwendet haben (Hinzufügen der virtuellen Eigenschaft für die Lebensspanne zum `Author`-Modell).
>
> Da der Autor jedoch möglicherweise nicht verstorben ist oder Geburts-/Sterbedaten fehlen, müssen wir in diesem Fall fehlende Daten oder Referenzen auf nicht vorhandene Eigenschaften ignorieren. Eine Möglichkeit, damit umzugehen, besteht darin, entweder ein formatiertes Datum oder eine leere Zeichenkette zurückzugeben, abhängig davon, ob die Eigenschaft definiert ist. Zum Beispiel:
>
> `return this.date_of_birth ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED) : '';`

## Genre-Liste-Seite—Herausforderung!

In diesem Abschnitt sollten Sie Ihre eigene Genre-Liste-Seite implementieren. Die Seite sollte eine Liste aller Genres in der Datenbank anzeigen, wobei jedes Genre mit der zugehörigen Detailseite verlinkt ist. Ein Screenshot des erwarteten Ergebnisses wird unten gezeigt.

![Genre-Liste - Express Local Library Website](locallibary_express_genre_list.png)

Die Controller-Funktion für die Genre-Liste muss eine Liste aller `Genre`-Instanzen abrufen und diese dann an die Vorlage zur Darstellung übergeben.

1. Sie müssen `genre_list()` in **/controllers/genreController.js** bearbeiten.
2. Die Implementierung ist fast genau die gleiche wie bei der `author_list()` Controller.

   - Sortieren Sie die Ergebnisse nach Name, in aufsteigender Reihenfolge.

3. Die zu rendernde Vorlage sollte **genre_list.pug** heißen.
4. Der Vorlage sollten die Variablen `title` ('Genre List') und `genre_list` (die Liste der Genres, die von Ihrem `Genre.find()`-Callback zurückgegeben wird) übergeben werden.
5. Die Ansicht sollte mit dem Screenshot/den Anforderungen oben übereinstimmen (sie sollte eine sehr ähnliche Struktur/Format wie die Autor-Liste-Ansicht haben, außer dass Genres keine Daten enthalten).

## Nächste Schritte

Kehren Sie zurück zum [Express Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).

Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Genre-Detailseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page).
