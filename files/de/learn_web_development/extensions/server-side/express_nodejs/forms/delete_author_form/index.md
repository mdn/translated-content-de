---
title: Formular zum Löschen von Autoren
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Delete_author_form
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Dieser Unterartikel zeigt, wie man eine Seite definiert, um `Author`-Objekte zu löschen.

Wie im Abschnitt zum [Formulardesign](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms#form_design) besprochen, ist unsere Strategie, nur die Löschung von Objekten zuzulassen, die nicht von anderen Objekten referenziert werden (in diesem Fall bedeutet das, dass wir nicht zulassen, dass ein `Author` gelöscht wird, wenn er von einem `Book` referenziert wird).
In der Umsetzung bedeutet dies, dass das Formular bestätigen muss, dass keine zugehörigen Bücher existieren, bevor der Autor gelöscht wird.
Falls es zugehörige Bücher gibt, sollten diese angezeigt werden und darauf hingewiesen werden, dass sie gelöscht werden müssen, bevor das `Author`-Objekt gelöscht werden kann.

## Controller—GET-Route

Öffnen Sie **/controllers/authorController.js**. Finden Sie die exportierte Methode `author_delete_get()` und ersetzen Sie sie durch den folgenden Code.

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

Der Controller erhält die ID der zu löschenden `Author`-Instanz aus dem URL-Parameter (`req.params.id`).
Er verwendet `await` für das zurückgegebene Promise von `Promise.all()`, um asynchron auf den angegebenen Autorendatensatz und alle zugehörigen Bücher (parallel) zu warten.
Wenn beide Operationen abgeschlossen sind, rendert er die **author_delete.pug**-Ansicht und übergibt Variablen für den `title`, `author` und `author_books`.

> [!NOTE]
> Wenn `findById()` keine Ergebnisse zurückgibt, ist der Autor nicht in der Datenbank vorhanden.
> In diesem Fall gibt es nichts zu löschen, also leiten wir sofort zur Liste aller Autoren um.
>
> ```js
> if (author === null) {
>   // Keine Ergebnisse.
>   res.redirect("/catalog/authors");
> }
> ```

## Controller—POST-Route

Finden Sie die exportierte Methode `author_delete_post()` und ersetzen Sie sie durch den folgenden Code.

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
Dann holen wir den Autor und seine zugehörigen Bücher auf die gleiche Weise wie für die `GET`-Route.
Gibt es keine Bücher, löschen wir das Autor-Objekt und leiten zur Liste aller Autoren um.
Gibt es dennoch Bücher, rendern wir das Formular erneut und übergeben den Autor und die Liste der zu löschenden Bücher.

> [!NOTE]
> Wir könnten überprüfen, ob der Aufruf von `findById()` irgendein Ergebnis liefert, und falls nicht, sofort die Liste aller Autoren rendern.
> Wir haben den Code oben zur Vereinfachung so gelassen (er wird trotzdem die Liste der Autoren zurückgeben, wenn die ID nicht gefunden wird, aber das geschieht nach `findByIdAndDelete()`).

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

Die Ansicht erweitert die Layoutvorlage und überschreibt den Block mit dem Namen `content`. Oben werden die Autorendetails angezeigt.
Es enthält dann eine bedingte Anweisung basierend auf der Anzahl der **`author_books`** (die `if`- und `else`-Klauseln).

- Wenn es _Bücher_ gibt, die dem Autor zugeordnet sind, listet die Seite die Bücher auf und erklärt, dass diese gelöscht werden müssen, bevor dieser `Author` gelöscht werden kann.
- Wenn es _keine_ Bücher gibt, zeigt die Seite eine Bestätigungsaufforderung an.
- Wenn der **Löschen**-Button geklickt wird, wird die Autoren-ID in einer `POST`-Anfrage an den Server gesendet und der Datensatz dieses Autors wird gelöscht.

## Hinzufügen eines Löschsteuerfelds

Als nächstes fügen wir der _Author Detail_-Ansicht ein **Löschsteuerfeld** hinzu (die Detailseite ist ein guter Ort, um einen Datensatz zu löschen).

> [!NOTE]
> In einer vollständigen Implementierung wäre das Steuerfeld nur für autorisierte Benutzer sichtbar.
> Zu diesem Zeitpunkt haben wir jedoch noch kein Autorisierungssystem implementiert!

Öffnen Sie die **author_detail.pug**-Ansicht und fügen Sie unten die folgenden Zeilen hinzu.

```pug
hr
p
  a(href=author.url+'/delete') Delete author
```

Das Steuerfeld sollte jetzt als Link erscheinen, wie unten auf der _Author Detail_-Seite gezeigt.

![Der Abschnitt "Autoren-Details" der Bibliothek-App. Die linke Spalte hat eine vertikale Navigationsleiste. Der rechte Bereich enthält die Autorendaten mit einer Überschrift, die den Namen des Autors gefolgt von den Lebensdaten des Autors anzeigt und die vom Autor geschriebenen Bücher darunter auflistet. Am unteren Rand befindet sich ein Button mit der Aufschrift 'Autor löschen'.](locallibary_express_author_detail_delete.png)

## Wie sieht das aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`.
Wählen Sie dann den Link _Alle Autoren_ und dann einen bestimmten Autor. Wählen Sie schließlich den Link _Autor löschen_.

Wenn der Autor keine Bücher hat, wird Ihnen eine Seite wie diese präsentiert.
Nach dem Drücken von "Löschen" wird der Server den Autor löschen und zur Autorenliste umleiten.

![Der Abschnitt "Autor löschen" der Bibliothek-App eines Autors, der keine Bücher hat. Die linke Spalte hat eine vertikale Navigationsleiste. Der rechte Bereich enthält den Namen und die Lebensdaten des Autors. Es gibt die Frage "Möchten Sie diesen Autor wirklich löschen" mit einem Button mit der Aufschrift 'Löschen'.](locallibary_express_author_delete_nobooks.png)

Wenn der Autor Bücher hat, wird Ihnen eine Ansicht wie die folgende präsentiert.
Sie können dann die Bücher von ihren Detailseiten löschen (sobald dieser Code implementiert ist!).

![Der Abschnitt "Autor löschen" der Bibliothek-App eines Autors, der Bücher unter seinem Namen hat. Der Bereich enthält den Namen des Autors und die Lebensdaten des Autors. Es gibt eine Erklärung, die besagt: "Löschen Sie die folgenden Bücher, bevor Sie versuchen, diesen Autor zu löschen", gefolgt von den Büchern des Autors. Die Liste enthält die Titel jedes Buches, als Links, gefolgt von einer kurzen Beschreibung im Klartext.](locallibary_express_author_delete_withbooks.png)

> [!NOTE]
> Die anderen Seiten zum Löschen von Objekten können auf ähnliche Weise implementiert werden.
> Das haben wir als Herausforderung gelassen.

## Nächste Schritte

- Rückkehr zu [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms).
- Fahren Sie fort zum letzten Unterartikel von Teil 6: [Book-Update-Formular](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form).
