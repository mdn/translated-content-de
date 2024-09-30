---
title: Autorlisten- und Genreliste-Seiten Herausforderung
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Die Autorlistenseite muss eine Liste aller Autoren in der Datenbank anzeigen, wobei jeder Autorenname mit seiner zugehörigen Autorendetailseite verlinkt ist. Das Geburts- und Sterbedatum sollte nach dem Namen in derselben Zeile aufgeführt sein.

## Controller

Die Controller-Funktion für die Autorliste muss eine Liste aller `Author`-Instanzen abrufen und diese dann für die Ausgabe an die Vorlage übergeben.

Öffnen Sie **/controllers/authorController.js**. Finden Sie die exportierte `author_list()` Controller-Methode in der Nähe des Anfangs der Datei und ersetzen Sie sie durch den folgenden Code.

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

Die Routen-Controller-Funktion folgt demselben Muster wie die anderen Listenseiten.
Es definiert eine Abfrage am `Author`-Modell, indem es die `find()` Funktion verwendet, um alle Autoren zu erhalten, und die `sort()` Methode, um diese alphabetisch nach `family_name` zu sortieren.
`exec()` wird am Ende angehängt, um die Abfrage auszuführen und ein Versprechen zurückzugeben, das die Funktion `awaiten` kann.

Sobald das Versprechen erfüllt ist, rendert der Routen-Handler die **author_list**(.pug) Vorlage und übergibt den Seiten `title` und die Liste der Autoren (`allAuthors`) mit Hilfe von Vorlagen-Schlüsseln.

## Ansicht

Erstellen Sie **/views/author_list.pug** und ersetzen Sie den Inhalt durch den folgenden Text.

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

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie dann den Link _All authors_. Wenn alles korrekt eingerichtet ist, sollte die Seite ungefähr wie der folgende Screenshot aussehen.

![Author List Page - Express Local Library site](locallibary_express_author_list.png)

> [!NOTE]
> Das Erscheinungsbild der Autor _lebensspannen_ Daten ist nicht ansehnlich! Sie können dies verbessern, indem Sie denselben [Ansatz](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment) verwenden, den wir für die `BookInstance` Liste verwendet haben (Hinzufügen der virtuellen Eigenschaft für die Lebensdauer zum `Author`-Modell).
>
> Da der Autor jedoch möglicherweise nicht verstorben ist oder Geburtstodesdaten fehlen, müssen wir in diesem Fall fehlende Daten oder Verweise auf nicht vorhandene Eigenschaften ignorieren. Eine Möglichkeit, dies zu handhaben, besteht darin, entweder ein formatiertes Datum oder einen leeren String zurückzugeben, je nachdem, ob die Eigenschaft definiert ist. Zum Beispiel:
>
> `return this.date_of_birth ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED) : '';`

## Genreliste-Seite—Herausforderung!

In diesem Abschnitt sollten Sie Ihre eigene Genreliste-Seite implementieren. Die Seite sollte eine Liste aller Genres in der Datenbank anzeigen, wobei jedes Genre mit seiner zugehörigen Detailseite verlinkt ist. Ein Screenshot des erwarteten Ergebnisses wird unten gezeigt.

![Genre List - Express Local Library site](locallibary_express_genre_list.png)

Die Controller-Funktion der Genreliste muss eine Liste aller `Genre`-Instanzen abrufen und diese dann für die Ausgabe an die Vorlage übergeben.

1. Sie müssen `genre_list()` in **/controllers/genreController.js** bearbeiten.
2. Die Implementierung ist nahezu identisch mit der `author_list()` Controller.

   - Sortieren Sie die Ergebnisse nach Name, in aufsteigender Reihenfolge.

3. Die zu rendernde Vorlage sollte **genre_list.pug** benannt werden.
4. Der Vorlage sollten die Variablen `title` („Genre List“) und `genre_list` (die Liste der Genres, die von Ihrem `Genre.find()` Rückruf zurückgegeben wird) übergeben werden.
5. Die Ansicht sollte dem Screenshot/den Anforderungen oben entsprechen (sie sollte eine sehr ähnliche Struktur/Format wie die Autorlistenansicht haben, mit der Ausnahme, dass Genres keine Daten haben).

## Nächste Schritte

Kehren Sie zurück zum [Express Tutorial Teil 5: Anzeige von Bibliotheksdaten](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).

Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Genre Detailseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page).
