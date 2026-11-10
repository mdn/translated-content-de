---
title: Autorenseite und Genreseite – Übung
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_list_page
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data")}}

Die Autorenseite soll alle Autoren in der Datenbank auflisten. Jeder Autorenname soll mit der zugehörigen Detailseite verlinkt sein. Geburts- und Sterbedatum sollen hinter dem Namen in derselben Zeile stehen.

## Controller

Die Controller-Funktion für die Autorenliste muss eine Liste aller `Author`-Instanzen abrufen und sie zum Rendern an das Template übergeben.

Öffnen Sie **controllers/authorController.js**. Suchen Sie die exportierte Controller-Methode `authorList()` am Anfang der Datei und ersetzen Sie sie durch den folgenden Code.

```js
// Display list of all Authors.
export const authorList = async (req, res, next) => {
  const allAuthors = await Author.find().sort({ family_name: 1 }).exec();
  res.render("author_list", {
    title: "Author List",
    author_list: allAuthors,
  });
};
```

Die Route-Controller-Funktion folgt demselben Muster wie bei den anderen Listenseiten. Sie definiert eine Abfrage für das Modell `Author`, verwendet die Funktion `find()`, um alle Autoren abzurufen, und sortiert sie mit der Methode `sort()` anhand von `family_name` in alphabetischer Reihenfolge. Am Ende der Methodenkette wird `exec()` aufgerufen, um die Abfrage auszuführen und ein Promise zurückzugeben, auf das die Funktion mit `await` warten kann.

Sobald das Promise erfüllt ist, rendert der Route-Handler das Template **author_list**(.pug) und übergibt dabei den Seitentitel als `title` sowie die Autorenliste als `allAuthors` über Template-Schlüssel.

## Ansicht

Erstellen Sie **views/author_list.pug** und fügen Sie den folgenden Text als Inhalt ein.

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

Starten Sie die Anwendung und öffnen Sie `http://localhost:3000/` in Ihrem Browser. Wählen Sie dann den Link _All authors_ aus. Wenn alles korrekt eingerichtet ist, sollte die Seite ungefähr wie im folgenden Screenshot aussehen.

![Autorenseite der Express Local Library](locallibary_express_author_list.png)

> [!NOTE]
> Die Darstellung der Datumsangaben zur _Lebenszeit_ der Autoren ist unschön! Sie können sie mit [demselben Ansatz](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page#formatting_the_dates) verbessern, den wir für die `BookInstance`-Liste verwendet haben: Fügen Sie dem Modell `Author` eine virtuelle Eigenschaft für die Lebenszeit hinzu.
>
> Da ein Autor jedoch noch leben kann oder Geburts- beziehungsweise Sterbedaten fehlen können, müssen wir in diesem Fall fehlende Datumsangaben oder Verweise auf nicht vorhandene Eigenschaften berücksichtigen. Eine Möglichkeit besteht darin, je nachdem, ob die Eigenschaft definiert ist, entweder ein formatiertes Datum oder eine leere Zeichenfolge zurückzugeben. Zum Beispiel:
>
> ```js
> return this.date_of_birth ? dateFormatter.format(this.date_of_birth) : "";
> ```

## Genreseite – Übung!

In diesem Abschnitt sollen Sie selbst eine Genreseite implementieren. Die Seite soll alle Genres in der Datenbank auflisten, wobei jedes Genre mit der zugehörigen Detailseite verlinkt ist. Ein Screenshot des erwarteten Ergebnisses ist unten zu sehen.

![Genreseite der Express Local Library](locallibary_express_genre_list.png)

Die Controller-Funktion für die Genreliste muss eine Liste aller `Genre`-Instanzen abrufen und sie zum Rendern an das Template übergeben.

1. Bearbeiten Sie `genreList()` in **controllers/genreController.js**.
2. Die Implementierung entspricht nahezu der des Controllers `authorList()`. Sortieren Sie die Ergebnisse aufsteigend nach Namen.
3. Das zu rendernde Template soll **genre_list.pug** heißen.
4. Übergeben Sie dem Template die Variablen `title` ('Genre List') und `genre_list` (die von `Genre.find()` zurückgegebene Genreliste).
5. Die Ansicht soll dem Screenshot und den Anforderungen oben entsprechen. Ihre Struktur und Formatierung sollten der Autorenliste sehr ähnlich sein, allerdings haben Genres keine Datumsangaben.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data")}}
