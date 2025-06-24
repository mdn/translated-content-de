---
title: Autorenlisten-Seite und Genrelisten-Seite Herausforderung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_list_page
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Die Autorenlisten-Seite muss eine Liste aller Autoren in der Datenbank anzeigen, wobei jeder Autorenname mit seiner zugehörigen Autorendetailseite verlinkt ist. Das Geburts- und Sterbedatum sollte nach dem Namen in derselben Zeile aufgeführt sein.

## Controller

Die Controller-Funktion der Autorenliste muss eine Liste aller `Author`-Instanzen abrufen und diese dann zur Darstellung an das Template übergeben.

Öffnen Sie **/controllers/authorController.js**. Suchen Sie die exportierte `author_list()` Controller-Methode am Anfang der Datei und ersetzen Sie sie durch den folgenden Code.

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

Die Routencontroller-Funktion folgt demselben Muster wie die anderen Listenseiten. Sie definiert eine Abfrage am `Author`-Modell, wobei die `find()`-Funktion verwendet wird, um alle Autoren zu erhalten, und die `sort()`-Methode, um sie alphabetisch nach `family_name` zu sortieren. `exec()` wird am Ende verkettet, um die Abfrage auszuführen und ein Versprechen zurückzugeben, das die Funktion `await` kann.

Sobald das Versprechen erfüllt ist, rendert der Routenhandler das **author_list**(.pug) Template, wobei der Seitentitel `title` und die Liste der Autoren (`allAuthors`) mit Hilfe von Template-Schlüsseln übergeben werden.

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
    p There are no authors.
```

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie dann den Link _All authors_. Wenn alles korrekt eingerichtet ist, sollte die Seite etwa wie der folgende Screenshot aussehen.

![Author List Page - Express Local Library site](locallibary_express_author_list.png)

> [!NOTE]
> Das Erscheinungsbild der _Lebensspanne_-Daten des Autors ist unschön! Sie können dies verbessern, indem Sie den [gleichen Ansatz](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment) verwenden, den wir für die `BookInstance`-Liste genutzt haben (indem Sie die virtuelle Eigenschaft für die Lebensspanne zum `Author`-Modell hinzufügen).
>
> Da der Autor jedoch möglicherweise nicht verstorben ist oder fehlende Geburts-/Sterbedaten hat, müssen wir in diesem Fall fehlende Daten oder Bezüge zu nicht existierenden Eigenschaften ignorieren. Eine Möglichkeit, damit umzugehen, besteht darin, entweder ein formatiertes Datum oder einen leeren String zurückzugeben, je nachdem, ob die Eigenschaft definiert ist. Zum Beispiel:
>
> `return this.date_of_birth ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED) : '';`

## Genrelisten-Seite—Herausforderung!

In diesem Abschnitt sollten Sie Ihre eigene Genrelisten-Seite implementieren. Die Seite sollte eine Liste aller Genres in der Datenbank anzeigen, wobei jedes Genre mit seiner zugehörigen Detailseite verlinkt ist. Ein Screenshot des erwarteten Ergebnisses wird unten gezeigt.

![Genre List - Express Local Library site](locallibary_express_genre_list.png)

Die Controller-Funktion der Genrelisten muss eine Liste aller `Genre`-Instanzen abrufen und diese dann zur Darstellung an das Template übergeben.

1. Sie müssen `genre_list()` in **/controllers/genreController.js** bearbeiten.
2. Die Implementierung ist fast identisch mit dem `author_list()` Controller.

   - Sortieren Sie die Ergebnisse nach Name in aufsteigender Reihenfolge.

3. Das zu rendernde Template sollte **genre_list.pug** heißen.
4. Das zu rendernde Template sollte die Variablen `title` ('Genre List') und `genre_list` (die Liste der Genres, die von Ihrem `Genre.find()` Callback zurückgegeben wird) erhalten.
5. Die Ansicht sollte mit dem obigen Screenshot/den Anforderungen übereinstimmen (diese sollte eine sehr ähnliche Struktur/Format wie die Autorenlistenansicht haben, außer dass Genres keine Daten haben).

## Nächste Schritte

Kehren Sie zurück zu [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).

Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Genre Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page).
