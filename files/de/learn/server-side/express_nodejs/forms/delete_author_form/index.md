---
title: Formular zum Löschen eines Autors
slug: Learn/Server-side/Express_Nodejs/forms/Delete_author_form
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Dieser Unterartikel zeigt, wie Sie eine Seite zum Löschen von `Author`-Objekten definieren.

Wie im Abschnitt [Formulardesign](/de/docs/Learn/Server-side/Express_Nodejs/forms#form_design) besprochen, besteht unsere Strategie darin, nur das Löschen von Objekten zuzulassen, die nicht von anderen Objekten referenziert werden (in diesem Fall bedeutet das, dass wir nicht zulassen, dass ein `Author` gelöscht wird, wenn er von einem `Book` referenziert wird). In Bezug auf die Implementierung bedeutet dies, dass das Formular bestätigen muss, dass keine Bücher zugeordnet sind, bevor der Autor gelöscht wird. Wenn zugeordnete Bücher vorhanden sind, sollte das Formular diese anzeigen und angeben, dass sie gelöscht werden müssen, bevor das `Author`-Objekt gelöscht werden kann.

## Controller—GET-Route

Öffnen Sie **/controllers/authorController.js**. Finden Sie die exportierte `author_delete_get()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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

Der Controller erhält die ID der zu löschenden `Author`-Instanz aus dem URL-Parameter (`req.params.id`). Er verwendet `await` für die von `Promise.all()` zurückgegebene Promise, um asynchron auf den angegebenen Autoren-Datensatz und alle zugehörigen Bücher (parallel) zu warten. Wenn beide Operationen abgeschlossen sind, rendert er die **author_delete.pug**-Ansicht und übergibt Variablen für den `title`, `author` und `author_books`.

> [!NOTE]
> Wenn `findById()` keine Ergebnisse liefert, ist der Autor nicht in der Datenbank. In diesem Fall gibt es nichts zu löschen, und wir leiten sofort zur Liste aller Autoren weiter.
>
> ```js
> if (author === null) {
>   // No results.
>   res.redirect("/catalog/authors");
> }
> ```

## Controller—POST-Route

Finden Sie die exportierte `author_delete_post()` Controller-Methode und ersetzen Sie sie durch den folgenden Code.

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

Zuerst validieren wir, dass eine ID bereitgestellt wurde (diese wird über die Formularkörperparameter gesendet, anstatt die Version in der URL zu verwenden). Dann erhalten wir den Autor und seine zugehörigen Bücher auf die gleiche Weise wie für die `GET`-Route. Wenn keine Bücher vorhanden sind, löschen wir das Autoren-Objekt und leiten zur Liste aller Autoren weiter. Wenn noch Bücher vorhanden sind, rendern wir einfach das Formular erneut und übergeben den Autor und die Liste der zu löschenden Bücher.

> [!NOTE]
> Wir könnten überprüfen, ob der Aufruf von `findById()` ein Ergebnis liefert, und wenn nicht, sofort die Liste aller Autoren rendern. Wir haben den Code aus Gründen der Kürze so belassen, wie er oben ist (er wird trotzdem die Liste der Autoren zurückgeben, wenn die ID nicht gefunden wird, aber dies geschieht nach `findByIdAndDelete()`).

## Ansicht

Erstellen Sie **/views/author_delete.pug** und kopieren Sie den folgenden Text hinein.

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

Die Ansicht erweitert die Layoutvorlage und überschreibt den Block namens `content`. Am oberen Rand werden die Author-Details angezeigt. Anschließend folgt eine bedingte Anweisung basierend auf der Anzahl der **`author_books`** (die `if` und `else` Klauseln).

- Wenn _Bücher_ mit dem Autor verbunden sind, listet die Seite die Bücher auf und gibt an, dass diese gelöscht werden müssen, bevor dieser `Author` gelöscht werden kann.
- Wenn _keine_ Bücher vorhanden sind, zeigt die Seite eine Bestätigungsaufforderung an.
- Wenn die Schaltfläche **Delete** geklickt wird, wird die Autoren-ID in einem `POST`-Request an den Server gesendet und der Datensatz dieses Autors wird gelöscht.

## Hinzufügen eines Lösch-Controls

Als nächstes fügen wir ein **Delete**-Control zur _Author detail_ Ansicht hinzu (die Detailseite ist ein guter Ort, um einen Datensatz zu löschen).

> [!NOTE]
> In einer vollständigen Implementierung würde das Control nur autorisierten Benutzern sichtbar gemacht werden. Allerdings haben wir zu diesem Zeitpunkt noch kein Autorisierungssystem implementiert!

Öffnen Sie die **author_detail.pug** Ansicht und fügen Sie am Ende die folgenden Zeilen hinzu.

```pug
hr
p
  a(href=author.url+'/delete') Delete author
```

Das Control sollte jetzt als Link erscheinen, wie unten auf der _Author detail_ Seite gezeigt.

![Der Autordetail-Bereich der lokalen Bibliotheksanwendung. Die linke Spalte hat eine vertikale Navigationsleiste. Der rechte Bereich enthält die Angaben zum Autor mit einer Überschrift, die den Autorennamen und die Lebensdaten des Autors enthält, und listet die vom Autor geschriebenen Bücher darunter auf. Unten befindet sich eine Schaltfläche mit der Aufschrift 'Delete Author'.](locallibary_express_author_detail_delete.png)

## Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser mit `http://localhost:3000/`. Wählen Sie dann den Link _Alle Autoren_, und wählen Sie dann einen bestimmten Autor aus. Wählen Sie schließlich den Link _Delete author_.

Wenn der Autor keine Bücher hat, wird Ihnen eine Seite wie diese angezeigt. Nach dem Drücken von Delete löscht der Server den Autor und leitet zur Liste der Autoren weiter.

![Der Abschnitt "Delete Author" der lokalen Bibliotheksanwendung eines Autors, der keine Bücher hat. Die linke Spalte hat eine vertikale Navigationsleiste. Der rechte Bereich enthält den Namen des Autors und die Lebensdaten. Es wird die Frage "Do you really want to delete this author" mit einer Schaltfläche mit der Aufschrift 'Delete' angezeigt.](locallibary_express_author_delete_nobooks.png)

Wenn der Autor Bücher besitzt, wird Ihnen eine Ansicht wie die folgende angezeigt. Sie können dann die Bücher von ihren Detailseiten löschen (sobald dieser Code implementiert ist!).

![Der Abschnitt "Delete Author" der lokalen Bibliotheksanwendung eines Autors, der Bücher unter seinem Namen hat. Der Bereich enthält den Namen und die Lebensdaten des Autors. Es gibt eine Aussage, die lautet "Delete the following books before attempting to delete this author", gefolgt von den Büchern des Autors. Die Liste enthält die Titel jedes Buches als Links gefolgt von einer kurzen Beschreibung als Klartext.](locallibary_express_author_delete_withbooks.png)

> [!NOTE]
> Die anderen Seiten zum Löschen von Objekten können auf ähnliche Weise implementiert werden. Wir haben dies als Herausforderung belassen.

## Nächste Schritte

- Kehren Sie zurück zum [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Express_Nodejs/forms).
- Gehen Sie zum letzten Unterartikel von Teil 6: [Buchformular aktualisieren](/de/docs/Learn/Server-side/Express_Nodejs/forms/Update_Book_form).
