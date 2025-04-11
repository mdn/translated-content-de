---
title: Autorenliste-Seite und Genre-Liste-Seite Herausforderung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_list_page
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Die Autorenliste-Seite soll eine Liste aller Autoren in der Datenbank anzeigen, wobei jeder Autorenname mit der zugehörigen Autoren-Detailseite verlinkt sein soll. Das Geburts- und Sterbedatum sollte nach dem Namen in derselben Zeile aufgelistet werden.

## Controller

Die Autorenlisten-Controller-Funktion muss eine Liste aller `Author`-Instanzen abrufen und diese dann an das Template zur Darstellung übergeben.

Öffnen Sie **/controllers/authorController.js**. Finden Sie die exportierte `author_list()`-Kontrollermethode gleich oben in der Datei und ersetzen Sie sie durch den folgenden Code.

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

Die Routen-Controller-Funktion folgt demselben Muster wie bei den anderen Listenseiten.
Es definiert eine Abfrage für das `Author`-Modell, indem die `find()`-Funktion verwendet wird, um alle Autoren abzurufen, und die `sort()`-Methode, um sie alphabetisch nach `family_name` zu sortieren.
`exec()` wird angehängt, um die Abfrage auszuführen und ein Versprechen zurückzugeben, das die Funktion `await` kann.

Sobald das Versprechen erfüllt ist, rendert der Routen-Handler das **author_list**(.pug)-Template, wobei der Seitentitel `title` und die Liste der Autoren (`allAuthors`) unter Verwendung von Template-Schlüsseln übergeben werden.

## View

Erstellen Sie **/views/author_list.pug** und ersetzen Sie den Inhalt mit dem folgenden Text.

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

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie dann den Link _Alle Autoren_. Wenn alles korrekt eingerichtet ist, sollte die Seite in etwa wie der folgende Screenshot aussehen.

![Autorenliste-Seite - Express Local Library-Seite](locallibary_express_author_list.png)

> [!NOTE]
> Das Aussehen der Autorenlebensspanne-Daten ist unschön! Sie können dies verbessern, indem Sie [dieselbe Herangehensweise](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment) wie bei der `BookInstance`-Liste verwenden (Hinzufügen der virtuellen Eigenschaft für die Lebensspanne zum `Author`-Modell).
>
> Da der Autor jedoch möglicherweise nicht gestorben ist oder Geburts-/Sterbedaten fehlen, müssen in diesem Fall fehlende Daten oder Verweise auf nicht vorhandene Eigenschaften ignoriert werden. Eine Möglichkeit, damit umzugehen, besteht darin, entweder ein formatiertes Datum oder einen leeren String zurückzugeben, je nachdem, ob die Eigenschaft definiert ist. Zum Beispiel:
>
> `return this.date_of_birth ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED) : '';`

## Genre-Liste-Seite—Herausforderung!

In diesem Abschnitt sollten Sie Ihre eigene Genre-Liste-Seite implementieren. Die Seite sollte eine Liste aller Genres in der Datenbank anzeigen, wobei jedes Genre mit seiner zugehörigen Detailseite verlinkt sein sollte. Ein Screenshot des erwarteten Ergebnisses ist unten zu sehen.

![Genre-Liste - Express Local Library-Seite](locallibary_express_genre_list.png)

Die Genre-Listen-Controller-Funktion muss eine Liste aller `Genre`-Instanzen abrufen und diese dann an das Template zur Darstellung übergeben.

1. Sie müssen `genre_list()` in **/controllers/genreController.js** bearbeiten.
2. Die Implementierung ist fast genau wie die der `author_list()`-Steuerung.

   - Die Ergebnisse nach Name in aufsteigender Reihenfolge sortieren.

3. Das zu rendernde Template sollte **genre_list.pug** genannt werden.
4. Dem zu rendernden Template sollten die Variablen `title` ('Genre List') und `genre_list` (die Liste der Genres, die von Ihrem `Genre.find()`-Callback zurückgegeben wurde) übergeben werden.
5. Die Ansicht sollte dem Screenshot/den Anforderungen oben entsprechen (dies sollte eine sehr ähnliche Struktur/Form wie die Autorenlistenansicht haben, mit dem Unterschied, dass Genres keine Daten haben).

## Nächste Schritte

Kehren Sie zurück zum [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).

Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Genre-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page).
