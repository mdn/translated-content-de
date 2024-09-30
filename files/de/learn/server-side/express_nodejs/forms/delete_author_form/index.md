---
title: Löschen Sie das Formular für Author
slug: Learn/Server-side/Express_Nodejs/forms/Delete_author_form
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Dieser Unterartikel zeigt, wie man eine Seite definiert, um `Author`-Objekte zu löschen.

Wie im Abschnitt [Formulardesign](/de/docs/Learn/Server-side/Express_Nodejs/forms#form_design) besprochen, wird unsere Strategie darin bestehen, nur die Löschung von Objekten zuzulassen, die nicht von anderen Objekten referenziert werden (in diesem Fall bedeutet das, dass wir das Löschen eines `Author` nicht zulassen, wenn er von einem `Book` referenziert wird). In Bezug auf die Implementierung bedeutet dies, dass das Formular bestätigen muss, dass keine zugehörigen Bücher vorhanden sind, bevor der Autor gelöscht wird. Wenn zugehörige Bücher vorhanden sind, sollten diese angezeigt und darauf hingewiesen werden, dass sie gelöscht werden müssen, bevor das `Author`-Objekt gelöscht werden kann.

## Controller—GET Route

Öffnen Sie **/controllers/authorController.js**. Suchen Sie die exportierte Methode `author_delete_get()` des Controllers und ersetzen Sie diese durch den folgenden Code.

```js
// Display Author delete form on GET.
exports.author_delete_get = asyncHandler(async (req, res, next) => {
  // Get details of author and all their books (in parallel)
  const [author, allBooksByAuthor] = await Promise.all([
    Author.findById(req.params.id).exec(),
    Book.find({ author: req.params.id }, "title summary").exec(),
  ]);

  if (author === null) {
    // No results.
    res.redirect("/catalog/authors");
  }

  res.render("author_delete", {
    title: "Delete Author",
    author: author,
    author_books: allBooksByAuthor,
  });
});
```

Der Controller erhält die ID der `Author`-Instanz, die gelöscht werden soll, aus dem URL-Parameter (`req.params.id`). Er verwendet `await` für das Versprechen, das von `Promise.all()` zurückgegeben wird, um asynchron auf die angegebene Autorenaufzeichnung und alle zugehörigen Bücher (parallel) zu warten. Wenn beide Operationen abgeschlossen sind, rendert es die Ansicht **author_delete.pug** und übergibt Variablen für den `title`, den `author` und die `author_books`.

> [!NOTE]
> Wenn `findById()` keine Ergebnisse liefert, ist der Autor nicht in der Datenbank.
> In diesem Fall gibt es nichts zu löschen, also leiten wir sofort zur Liste aller Autoren um.
>
> ```js
> if (author === null) {
>   // Keine Ergebnisse.
>   res.redirect("/catalog/authors");
> }
> ```

## Controller—POST Route

Suchen Sie die exportierte Methode `author_delete_post()` des Controllers und ersetzen Sie diese durch den folgenden Code.

```js
// Handle Author delete on POST.
exports.author_delete_post = asyncHandler(async (req, res, next) => {
  // Get details of author and all their books (in parallel)
  const [author, allBooksByAuthor] = await Promise.all([
    Author.findById(req.params.id).exec(),
    Book.find({ author: req.params.id }, "title summary").exec(),
  ]);

  if (allBooksByAuthor.length > 0) {
    // Author has books. Render in same way as for GET route.
    res.render("author_delete", {
      title: "Delete Author",
      author: author,
      author_books: allBooksByAuthor,
    });
    return;
  } else {
    // Author has no books. Delete object and redirect to the list of authors.
    await Author.findByIdAndDelete(req.body.authorid);
    res.redirect("/catalog/authors");
  }
});
```

Zuerst prüfen wir, ob eine ID angegeben wurde (dies wird über die Formularbody-Parameter gesendet, anstatt die Version in der URL zu verwenden). Dann holen wir den Autor und die zugehörigen Bücher auf die gleiche Weise wie bei der `GET`-Route. Wenn keine Bücher vorhanden sind, löschen wir das Autorenobjekt und leiten zur Liste aller Autoren um. Wenn noch Bücher vorhanden sind, rendern wir einfach das Formular erneut und übergeben den Autor und die Liste der Bücher, die gelöscht werden sollen.

> [!NOTE]
> Wir könnten überprüfen, ob der Aufruf zu `findById()` ein Ergebnis zurückgibt, und falls nicht, sofort die Liste aller Autoren rendern.
> Wir haben den Code aus Gründen der Kürze so belassen (er wird die Liste der Autoren zurückgeben, wenn die ID nicht gefunden wird, aber das geschieht nach `findByIdAndDelete()`).

## Ansicht

Erstellen Sie **/views/author_delete.pug** und kopieren Sie den untenstehenden Text hinein.

```pug
extends layout

block content

  h1 #{title}: #{author.name}
  p= author.lifespan

  if author_books.length

    p #[strong Delete the following books before attempting to delete this author.]
    div(style='margin-left:20px;margin-top:20px')
      h4 Books
      dl
        each book in author_books
          dt
            a(href=book.url) #{book.title}
          dd #{book.summary}

  else
    p Do you really want to delete this Author?

    form(method='POST')
      div.form-group
        input#authorid.form-control(type='hidden', name='authorid', value=author._id )

      button.btn.btn-primary(type='submit') Delete
```

Die Ansicht erweitert die Layout-Vorlage, indem sie den Block namens `content` überschreibt. Oben werden die Autorendetails angezeigt. Sie enthält dann eine bedingte Anweisung basierend auf der Anzahl von **`author_books`** (die `if`- und `else`-Klauseln).

- Wenn Bücher mit dem Autor verbunden sind, listet die Seite die Bücher auf und gibt an, dass diese gelöscht werden müssen, bevor dieser `Author` gelöscht werden kann.
- Wenn keine Bücher vorhanden sind, zeigt die Seite eine Bestätigungsaufforderung an.
- Wenn die **Löschen**-Schaltfläche geklickt wird, wird die Autoren-ID in einer `POST`-Anfrage an den Server gesendet und der Datensatz des Autors wird gelöscht.

## Eine Löschsteuerung hinzufügen

Als Nächstes fügen wir der _Detailseite des Autors_ eine **Löschen**-Steuerung hinzu (die Detailseite ist ein guter Ort, um einen Datensatz zu löschen).

> [!NOTE]
> In einer vollständigen Implementierung würde die Steuerung nur autorisierten Benutzern sichtbar gemacht.
> Allerdings haben wir zu diesem Zeitpunkt noch kein Autorisierungssystem!

Öffnen Sie die Ansicht **author_detail.pug** und fügen Sie die folgenden Zeilen am Ende hinzu.

```pug
hr
p
  a(href=author.url+'/delete') Delete author
```

Die Steuerung sollte nun als Link erscheinen, wie unten auf der _Author Detail_-Seite angezeigt.

![Der Autorendetails-Bereich der lokalen Bibliotheksanwendung. Die linke Spalte hat eine vertikale Navigationsleiste. Der rechte Abschnitt enthält die Autorendetails mit einer Überschrift, die den Namen des Autors gefolgt von den Lebensdaten des Autors enthält und darunter die vom Autor geschriebenen Bücher auflistet. Am Ende befindet sich eine Schaltfläche mit der Aufschrift 'Löschen Sie den Author'.](locallibary_express_author_detail_delete.png)

## Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie dann den Link _Alle Autoren_ und anschließend einen bestimmten Autor. Wählen Sie schließlich den Link _Löschen Sie den Author_.

Wenn der Autor keine Bücher hat, wird Ihnen eine Seite wie diese angezeigt. Nach dem Drücken von Löschen wird der Autor vom Server gelöscht und zur Autorenliste umgeleitet.

![Der Abschnitt "Löschen Sie den Author" der lokalen Bibliotheksanwendung eines Autors, der keine Bücher hat. Die linke Spalte hat eine vertikale Navigationsleiste. Der rechte Abschnitt enthält den Namen des Autors und die Lebensdaten. Es gibt die Frage „Möchten Sie diesen Autor wirklich löschen?“ mit einem Button mit der Aufschrift 'Löschen'.](locallibary_express_author_delete_nobooks.png)

Wenn der Autor Bücher hat, wird Ihnen eine Ansicht wie die folgende angezeigt. Sie können dann die Bücher von ihren Detailseiten löschen (sobald dieser Code implementiert ist!).

![Der Abschnitt "Löschen Sie den Author" der lokalen Bibliotheksanwendung eines Autors, der Bücher unter seinem Namen hat. Der Abschnitt enthält den Namen des Autors und die Lebensdaten des Autors. Es gibt eine Aussage, die besagt "Löschen Sie die folgenden Bücher, bevor Sie versuchen, diesen Autor zu löschen", gefolgt von den Büchern des Autors. Die Liste enthält die Titel jedes Buches, als Links, gefolgt von einer kurzen Beschreibung im Klartext.](locallibary_express_author_delete_withbooks.png)

> [!NOTE]
> Die anderen Seiten zum Löschen von Objekten können auf ähnliche Weise implementiert werden.
> Wir haben das als Herausforderung gelassen.

## Nächste Schritte

- Kehren Sie zurück zu [Express-Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Express_Nodejs/forms).
- Fahren Sie fort mit dem letzten Unterartikel von Teil 6: [Update Book form](/de/docs/Learn/Server-side/Express_Nodejs/forms/Update_Book_form).
