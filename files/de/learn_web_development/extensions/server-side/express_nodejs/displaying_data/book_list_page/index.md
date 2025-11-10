---
title: Buchliste-Seite
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

Als Nächstes implementieren wir unsere Buchliste-Seite. Diese Seite muss eine Liste aller Bücher in der Datenbank zusammen mit ihrem Autor anzeigen, wobei jeder Buchtitel als Hyperlink auf die zugehörige Buchdetailseite dient.

## Controller

Die `book_list()`-Controller-Funktion muss eine Liste aller `Book`-Objekte in der Datenbank abrufen, diese sortieren und dann zur Darstellung an das Template übergeben.

Öffnen Sie **/controllers/bookController.js**. Finden Sie die exportierte Controller-Methode `book_list()` und ersetzen Sie sie durch den folgenden Code.

```js
// Display list of all books.
exports.book_list = async (req, res, next) => {
  const allBooks = await Book.find({}, "title author")
    .sort({ title: 1 })
    .populate("author")
    .exec();

  res.render("book_list", { title: "Book List", book_list: allBooks });
};
```

Der Routen-Handler ruft die `find()`-Funktion am `Book`-Modell auf und wählt, nur `title` und `author` zurückzugeben, da wir die anderen Felder nicht benötigen (es werden auch `_id` und virtuelle Felder zurückgegeben), und sortiert die Ergebnisse alphabetisch nach dem Titel mit der Methode `sort()`.
Wir rufen auch `populate()` auf `Book` auf und geben das Feld `author` an - dies ersetzt die gespeicherte Buchautoren-ID durch die vollständigen Autordetails.
`exec()` wird dann am Ende angehängt, um die Abfrage auszuführen und ein Versprechen zurückzugeben.

Der Routen-Handler verwendet `await`, um auf das Versprechen zu warten und die Ausführung anzuhalten, bis es abgeschlossen ist.
Wenn das Versprechen erfüllt ist, werden die Ergebnisse der Abfrage in der Variablen `allBooks` gespeichert und der Handler führt die Ausführung fort.

Der letzte Teil des Routen-Handlers ruft `render()` auf, gibt das **book_list** (.pug)-Template an und übergibt Werte für `title` und `book_list` in das Template.

## View

Erstellen Sie **/views/book_list.pug** und kopieren Sie den folgenden Text hinein.

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

Die Ansicht erweitert das Basistemplate **layout.pug** und überschreibt den `block` namens '**content**'. Es zeigt den `title` an, den wir vom Controller über die Methode `render()` übergeben haben, und iteriert durch die Variable `book_list` mit der `each`-`in`-Syntax. Ein Listenelement wird für jedes Buch erstellt, das den Buchtitel als Link zur Buchdetailseite zusammen mit dem Autorennamen anzeigt.
Wenn es keine Bücher in der `book_list` gibt, wird die `else`-Klausel ausgeführt und der Text 'Es gibt keine Bücher' angezeigt.

> [!NOTE]
> Wir verwenden `book.url`, um den Link zu dem Detaildatensatz für jedes Buch bereitzustellen (diese Route haben wir implementiert, aber die Seite noch nicht). Dies ist eine virtuelle Eigenschaft des `Book`-Modells, die das `_id`-Feld der Modellinstanz verwendet, um einen eindeutigen URL-Pfad zu erzeugen.

Interessant ist hier, dass jedes Buch als zwei Zeilen definiert ist, wobei die Pipe für die zweite Zeile verwendet wird. Dieser Ansatz ist nötig, weil der Autorenname sonst Teil des Hyperlinks wäre, wenn er in der vorherigen Zeile stünde.

## Wie sieht es aus?

Führen Sie die Anwendung aus (siehe [Testen der Routen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes#testing_the_routes) für die entsprechenden Befehle) und öffnen Sie Ihren Browser auf `http://localhost:3000/`. Wählen Sie dann den Link _All books_ aus. Wenn alles richtig eingerichtet ist, sollte Ihre Seite in etwa so aussehen wie der folgende Screenshot.

![Buchliste-Seite - Express Local Library Website](new_book_list.png)

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [BuchInstanz-Liste-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page).
