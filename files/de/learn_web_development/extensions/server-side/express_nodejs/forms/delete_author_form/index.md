---
title: Formular zum Löschen eines Autors
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Delete_author_form
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Dieser Unterartikel zeigt, wie Sie eine Seite definieren, um `Author`-Objekte zu löschen.

Wie im [Formulardesign](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms#form_design) Abschnitt besprochen, besteht unsere Strategie darin, nur das Löschen von Objekten zuzulassen, die nicht von anderen Objekten referenziert werden (in diesem Fall bedeutet das, dass wir nicht zulassen, dass ein `Author` gelöscht wird, wenn er von einem `Book` referenziert wird).
In Bezug auf die Implementierung bedeutet dies, dass das Formular bestätigen muss, dass keine zugehörigen Bücher vorhanden sind, bevor der Autor gelöscht wird.
Falls zugehörige Bücher vorhanden sind, sollte es diese anzeigen und darauf hinweisen, dass sie gelöscht werden müssen, bevor das `Author`-Objekt gelöscht werden kann.

## Controller—GET-Route

Öffnen Sie **/controllers/authorController.js**. Finden Sie die exportierte `author_delete_get()` Controller-Methode und ersetzen Sie sie mit dem folgenden Code.

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

Der Controller erhält die ID der `Author`-Instanz, die gelöscht werden soll, aus dem URL-Parameter (`req.params.id`).
Er verwendet `await` bei dem von `Promise.all()` zurückgegebenen Versprechen, um asynchron auf den angegebenen Autoren-Datensatz und alle zugehörigen Bücher (parallel) zu warten.
Wenn beide Operationen abgeschlossen sind, rendert er die **author_delete.pug** Ansicht und übergibt Variablen für den `title`, `author` und die `author_books`.

> [!NOTE]
> Wenn `findById()` keine Ergebnisse zurückgibt, ist der Autor nicht in der Datenbank.
> In diesem Fall gibt es nichts zu löschen, also leiten wir sofort zur Liste aller Autoren um.
>
> ```js
> if (author === null) {
>   // Keine Ergebnisse.
>   res.redirect("/catalog/authors");
> }
> ```

## Controller—POST-Route

Finden Sie die exportierte `author_delete_post()` Controller-Methode und ersetzen Sie sie mit dem folgenden Code.

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

Zuerst validieren wir, dass eine ID bereitgestellt wurde (diese wird über die Formular-Body-Parameter gesendet, statt die Version in der URL zu verwenden).
Dann holen wir den Autor und seine zugehörigen Bücher auf die gleiche Weise wie bei der `GET`-Route.
Wenn keine Bücher vorhanden sind, löschen wir das Autorenobjekt und leiten zur Liste aller Autoren um.
Wenn noch Bücher vorhanden sind, rendern wir einfach das Formular neu und übergeben den Autor und die Liste der zu löschenden Bücher.

> [!NOTE]
> Wir könnten überprüfen, ob der Aufruf von `findById()` ein Ergebnis liefert und, wenn nicht, direkt die Liste aller Autoren rendern.
> Wir haben den Code zur Kürze so belassen (er wird die Liste der Autoren zurückgeben, wenn die ID nicht gefunden wird, aber das wird nach `findByIdAndDelete()` geschehen).

## Ansicht

Erstellen Sie **/views/author_delete.pug** und kopieren Sie den unten stehenden Text ein.

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

Die Ansicht erweitert das Layout-Template und überschreibt den Block namens `content`. Oben zeigt sie die Details des Autors an.
Dann beinhaltet sie eine bedingte Aussage basierend auf der Anzahl der **`author_books`** (die `if` und `else` Klauseln).

- Wenn Bücher mit dem Autor assoziiert sind, listet die Seite die Bücher auf und gibt an, dass diese gelöscht werden müssen, bevor dieser `Author` gelöscht werden kann.
- Wenn keine Bücher vorhanden sind, zeigt die Seite eine Bestätigungsaufforderung an.
- Wenn der **Delete**-Button geklickt wird, wird die Autoren-ID in einer `POST`-Anfrage an den Server gesendet und der Datensatz dieses Autors wird gelöscht.

## Hinzufügen einer Löschsteuerung

Als Nächstes fügen wir eine **Delete**-Steuerung in die _Autor Detail_ Ansicht ein (die Detailseite ist ein guter Ort, um einen Datensatz zu löschen).

> [!NOTE]
> In einer vollständigen Implementierung würde die Steuerung nur autorisierten Benutzern sichtbar gemacht.
> Allerdings haben wir zu diesem Zeitpunkt noch kein Autorisierungssystem implementiert!

Öffnen Sie die **author_detail.pug** Ansicht und fügen Sie die folgenden Zeilen am Ende hinzu.

```pug
hr
p
  a(href=author.url+'/delete') Delete author
```

Die Steuerung sollte nun als Link erscheinen, wie unten auf der _Autor Detail_ Seite gezeigt.

![Der Abschnitt mit den Autorendetails der lokalen Bibliotheksanwendung. Die linke Spalte hat eine vertikale Navigationsleiste. Der rechte Abschnitt enthält die Autorendetails mit einer Überschrift, die den Namen des Autors und die Lebensdaten des Autors enthält und die unten die vom Autor geschriebenen Bücher auflistet. Unten befindet sich ein Button mit der Aufschrift 'Autor löschen'.](locallibary_express_author_detail_delete.png)

## Wie sieht das aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser mit `http://localhost:3000/`.
Wählen Sie dann den Link _Alle Autoren_ und anschließend einen bestimmten Autor aus. Wählen Sie schließlich den Link _Autor löschen_.

Wenn der Autor keine Bücher hat, wird Ihnen eine Seite wie diese präsentiert.
Nach dem Löschen wird der Server den Autor löschen und zur Autorenliste umleiten.

![Der Abschnitt Autor löschen der lokalen Bibliotheksanwendung eines Autors, der keine Bücher hat. Die linke Spalte hat eine vertikale Navigationsleiste. Der rechte Abschnitt enthält den Namen und die Lebensdaten des Autors. Es gibt die Frage "Möchten Sie diesen Autor wirklich löschen" mit einem Button, der mit 'Delete' beschriftet ist.](locallibary_express_author_delete_nobooks.png)

Wenn der Autor Bücher hat, wird Ihnen eine Ansicht wie die folgende präsentiert.
Sie können dann die Bücher von deren Detailseiten löschen (sobald dieser Code implementiert ist!).

![Der Abschnitt Autor löschen der lokalen Bibliotheksanwendung eines Autors, der Bücher unter seinem Namen hat. Der Abschnitt enthält den Namen und die Lebensdaten des Autors. Es gibt eine Aussage, die besagt: "Löschen Sie die folgenden Bücher, bevor Sie versuchen, diesen Autor zu löschen", gefolgt von den Büchern des Autors. Die Liste enthält die Titel jedes Buches als Links, gefolgt von einer kurzen Beschreibung im Klartext.](locallibary_express_author_delete_withbooks.png)

> [!NOTE]
> Die anderen Seiten zum Löschen von Objekten können auf die gleiche Weise implementiert werden.
> Wir haben das als Herausforderung belassen.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms).
- Gehen Sie zum letzten Unterartikel von Teil 6: [Buchaktualisierungsformular](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form).
