---
title: Formular Autor löschen
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Delete_author_form
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

Dieser Unterartikel zeigt, wie eine Seite zum Löschen von `Author`-Objekten definiert wird.

Wie im Abschnitt [Formulardesign](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms#form_design) besprochen, wird unsere Strategie darin bestehen, nur das Löschen von Objekten zu erlauben, die nicht von anderen Objekten referenziert werden (in diesem Fall bedeutet das, dass wir nicht zulassen, dass ein `Author` gelöscht wird, wenn er von einem `Book` referenziert wird). In Bezug auf die Implementierung bedeutet dies, dass das Formular bestätigen muss, dass keine zugehörigen Bücher vorhanden sind, bevor der Autor gelöscht wird. Wenn es zugehörige Bücher gibt, sollte es diese anzeigen und angeben, dass sie gelöscht werden müssen, bevor das `Author`-Objekt gelöscht werden kann.

## Controller—Get-Route

Öffnen Sie **/controllers/authorController.js**. Finden Sie die exportierte `author_delete_get()`-Controller-Methode und ersetzen Sie diese mit dem folgenden Code.

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

Der Controller erhält die ID der zu löschenden `Author`-Instanz aus dem URL-Parameter (`req.params.id`). Er verwendet `await` für das auf `Promise.all()` zurückgegebene Versprechen, um asynchron auf den angegebenen Autorendatensatz und alle zugehörigen Bücher (parallel) zu warten. Wenn beide Operationen abgeschlossen sind, rendert er die **author_delete.pug**-Ansicht und übergibt Variablen für den `title`, `author` und `author_books`.

> [!NOTE]
> Wenn `findById()` keine Ergebnisse zurückgibt, ist der Autor nicht in der Datenbank. In diesem Fall gibt es nichts zu löschen, also leiten wir sofort zur Liste aller Autoren weiter.
>
> ```js
> if (author === null) {
>   // Keine Ergebnisse.
>   res.redirect("/catalog/authors");
> }
> ```

## Controller—Post-Route

Finden Sie die exportierte `author_delete_post()`-Controller-Methode und ersetzen Sie diese mit dem folgenden Code.

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
  }
  // Author has no books. Delete object and redirect to the list of authors.
  await Author.findByIdAndDelete(req.body.authorid);
  res.redirect("/catalog/authors");
});
```

Zuerst validieren wir, dass eine ID angegeben wurde (dies wird über die Formularkörperparameter gesendet und nicht über die Version in der URL verwendet). Dann holen wir den Autor und seine zugehörigen Bücher auf dieselbe Weise wie für die `GET`-Route. Wenn es keine Bücher gibt, löschen wir das Autorobjekt und leiten zur Liste aller Autoren weiter. Wenn es noch Bücher gibt, rendern wir einfach das Formular neu und übergeben den Autor und die Liste der zu löschenden Bücher.

> [!NOTE]
> Wir könnten prüfen, ob der Aufruf von `findById()` ein Ergebnis liefert, und falls nicht, sofort die Liste aller Autoren rendern. Wir haben den Code der Kürze halber gelassen (es wird immer noch die Liste der Autoren zurückgeben, wenn die ID nicht gefunden wird, aber das passiert nach `findByIdAndDelete()`).

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

Die Ansicht erweitert die Layoutvorlage und überschreibt den Block namens `content`. Oben werden die Autorendetails angezeigt. Dann beinhaltet sie eine bedingte Anweisung basierend auf der Anzahl von **`author_books`** (die `if`- und `else`-Klauseln).

- Wenn _Bücher_ mit dem Autor verbunden sind, dann listet die Seite die Bücher auf und gibt an, dass diese gelöscht werden müssen, bevor dieser `Author` gelöscht werden kann.
- Wenn _keine_ Bücher vorhanden sind, dann zeigt die Seite eine Bestätigungsaufforderung an.
- Wenn die **Delete**-Schaltfläche angeklickt wird, wird die Autoren-ID in einer `POST`-Anfrage an den Server gesendet und der Datensatz dieses Autors wird gelöscht.

## Löschkontrolle hinzufügen

Als nächstes fügen wir eine **Delete**-Kontrolle zur _Autordetail_-Ansicht hinzu (die Detailseite ist ein guter Ort, um einen Datensatz zu löschen).

> [!NOTE]
> In einer vollständigen Implementierung würde die Kontrolle nur autorisierten Nutzern sichtbar sein. Aber an dieser Stelle haben wir noch kein Autorisierungssystem implementiert!

Öffnen Sie die **author_detail.pug**-Ansicht und fügen Sie die folgenden Zeilen am unteren Ende hinzu.

```pug
hr
p
  a(href=author.url+'/delete') Delete author
```

Die Kontrolle sollte nun als Link erscheinen, wie unten auf der _Autordetail_-Seite gezeigt.

![Der Abschnitt Autordetails der Local-Bibliothek-Anwendung. Die linke Spalte hat eine vertikale Navigationsleiste. Der rechte Abschnitt enthält die Autorendetails mit einer Überschrift, die den Namen des Autors, gefolgt von den Lebensdaten des Autors, und die Bücher, die der Autor geschrieben hat, darunter auflistet. Unten befindet sich eine Schaltfläche mit der Aufschrift 'Delete Author'.](locallibary_express_author_detail_delete.png)

## Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`. Wählen Sie dann den Link _Alle Autoren_ und dann einen bestimmten Autor. Wählen Sie schließlich den Link _Delete author_.

Wenn der Autor keine Bücher hat, wird Ihnen eine Seite wie diese angezeigt. Nach dem Drücken von delete wird der Server den Autor löschen und zur Autorenliste weiterleiten.

![Der Abschnitt Autor löschen der Lokalen Bibliothek Anwendung eines Autors, der keine Bücher hat. Die linke Spalte hat eine vertikale Navigationsleiste. Der rechte Abschnitt enthält den Namen des Autors und die Lebensdaten. Es gibt die Frage "Möchten Sie diesen Autor wirklich löschen" mit einer Schaltfläche mit der Aufschrift 'Löschen'.](locallibary_express_author_delete_nobooks.png)

Wenn der Autor Bücher hat, wird Ihnen eine Ansicht wie die folgende angezeigt. Sie können dann die Bücher von ihren Detailseiten löschen (sobald dieser Code implementiert ist!).

![Der Abschnitt Autor löschen der Lokalen Bibliothek Anwendung eines Autors, der Bücher unter seinem Namen hat. Der Abschnitt enthält den Namen des Autors und Lebensdaten des Autors. Es gibt eine Aussage, die "Löschen Sie die folgenden Bücher, bevor Sie versuchen, diesen Autor zu löschen" lautet, gefolgt von den Büchern des Autors. Die Liste enthält die Titel jedes Buches als Links, gefolgt von einer kurzen Beschreibung in einfachem Text.](locallibary_express_author_delete_withbooks.png)

> [!NOTE]
> Die anderen Seiten zum Löschen von Objekten können auf die gleiche Weise implementiert werden. Das haben wir als Herausforderung überlassen.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms).
- Gehen Sie zum letzten Unterartikel von Teil 6: [Buchaktualisierungsformular](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form).
