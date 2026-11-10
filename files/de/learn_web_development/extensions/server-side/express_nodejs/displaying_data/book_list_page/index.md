---
title: Buchlisten-Seite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data")}}

Als Nächstes implementieren wir die Buchlisten-Seite. Sie soll alle Bücher in der Datenbank zusammen mit ihren Autoren auflisten. Jeder Buchtitel soll ein Link zur zugehörigen Buchdetailseite sein.

## Controller

Die Controller-Funktion für die Buchliste muss alle `Book`-Objekte aus der Datenbank abrufen, sortieren und zur Darstellung an das Template übergeben.

Öffnen Sie **controllers/bookController.js**. Suchen Sie die exportierte Controller-Methode `bookList()` und ersetzen Sie sie durch den folgenden Code.

```js
// Display list of all books.
export const bookList = async (req, res, next) => {
  const allBooks = await Book.find({}, "title author")
    .sort({ title: 1 })
    .populate("author")
    .exec();

  res.render("book_list", { title: "Book List", book_list: allBooks });
};
```

Der Route-Handler ruft die Funktion `find()` des `Book`-Modells auf. Dabei wählt er nur `title` und `author` aus, da wir die anderen Felder nicht benötigen (auch `_id` und virtuelle Felder werden zurückgegeben). Anschließend sortiert er die Ergebnisse mit der Methode `sort()` alphabetisch nach Titel.
Außerdem rufen wir `populate()` für `Book` auf und geben das Feld `author` an. Dadurch wird die gespeicherte ID des Buchautors durch die vollständigen Angaben zum Autor ersetzt.
Zum Schluss wird `exec()` angehängt, um die Abfrage auszuführen und ein Promise zurückzugeben.

Der Route-Handler verwendet `await`, um auf das Promise zu warten. Die Ausführung wird angehalten, bis das Promise abgeschlossen ist.
Wenn das Promise erfüllt wird, werden die Abfrageergebnisse in der Variablen `allBooks` gespeichert und der Handler setzt seine Ausführung fort.

Im letzten Teil ruft der Route-Handler `render()` auf. Dabei gibt er das Template **book_list** (.pug) an und übergibt die Werte für `title` und `book_list` an das Template.

## Ansicht

Erstellen Sie **views/book_list.pug** und fügen Sie den folgenden Text ein.

```pug
extends layout

block content
  h1= title
  if book_list.length
    ul
      each book in book_list
        li
          a(href=book.url) !{book.title}
          |  (#{book.author.name})

  else
    p There are no books.
```

Die Ansicht erweitert das Basistemplate **layout.pug** und überschreibt den `block` namens '**content**'. Sie zeigt den vom Controller übergebenen `title` an (über die Methode `render()`) und durchläuft die Variable `book_list` mit der `each`-`in`-Syntax. Für jedes Buch wird ein Listeneintrag erstellt, der den Buchtitel als Link zur Buchdetailseite und danach den Namen des Autors anzeigt.
Wenn `book_list` keine Bücher enthält, wird die `else`-Klausel ausgeführt und der Text „Es sind keine Bücher vorhanden“ angezeigt.

> [!NOTE]
> Wir verwenden `book.url` als Link zum Detaileintrag jedes Buchs (die Route haben wir bereits implementiert, die Seite jedoch noch nicht). Dies ist eine virtuelle Eigenschaft des `Book`-Modells, die aus dem Feld `_id` der Modellinstanz einen eindeutigen URL-Pfad erzeugt.

Bemerkenswert ist, dass jedes Buch auf zwei Zeilen definiert ist und für die zweite Zeile ein Pipe-Zeichen verwendet wird. Das ist nötig, weil der Name des Autors sonst in der vorherigen Zeile stehen und damit Teil des Links sein würde.

## Wie sieht das Ergebnis aus?

Starten Sie die Anwendung (die entsprechenden Befehle finden Sie unter [Routen testen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes)) und öffnen Sie `http://localhost:3000/` in Ihrem Browser. Wählen Sie dann den Link _All books_ aus. Wenn alles richtig eingerichtet ist, sollte Ihre Website ungefähr wie im folgenden Screenshot aussehen.

![Buchlisten-Seite der Express Local Library](new_book_list.png)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data")}}
