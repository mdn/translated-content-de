---
title: Löschen von Autor-Formular
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Delete_author_form
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

Dieser Unterartikel zeigt, wie eine Seite definiert wird, um `Author`-Objekte zu löschen.

Wie im Abschnitt [Formularentwurf](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms#form_design) besprochen, besteht unsere Strategie darin, das Löschen von Objekten nur zuzulassen, wenn sie nicht von anderen Objekten referenziert werden (in diesem Fall bedeutet das, dass wir nicht zulassen, dass ein `Author` gelöscht wird, wenn er von einem `Book` referenziert wird).
In Bezug auf die Implementierung bedeutet dies, dass das Formular bestätigen muss, dass keine zugehörigen Bücher vorhanden sind, bevor der Autor gelöscht wird.
Wenn zugehörige Bücher vorhanden sind, sollten sie angezeigt werden, und es sollte angegeben werden, dass sie gelöscht werden müssen, bevor das `Author`-Objekt gelöscht werden kann.

## Controller—GET-Route

Öffnen Sie **/controllers/authorController.js**. Suchen Sie die exportierte `author_delete_get()` Controller-Methode und ersetzen Sie sie mit dem folgenden Code.

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
    author,
    author_books: allBooksByAuthor,
  });
});
```

Der Controller erhält die ID der `Author`-Instanz, die gelöscht werden soll, aus dem URL-Parameter (`req.params.id`).
Er verwendet `await` für das von `Promise.all()` zurückgegebene Versprechen, um asynchron auf den angegebenen Autoren-Datensatz und alle zugehörigen Bücher zu warten (parallel).
Wenn beide Operationen abgeschlossen sind, rendert er die **author_delete.pug** Ansicht und übergibt Variablen für den `title`, `author` und `author_books`.

> [!NOTE]
> Wenn `findById()` keine Ergebnisse zurückgibt, ist der Autor nicht in der Datenbank enthalten.
> In diesem Fall gibt es nichts zu löschen, daher leiten wir sofort zur Liste aller Autoren weiter.
>
> ```js
> if (author === null) {
>   // Keine Ergebnisse.
>   res.redirect("/catalog/authors");
> }
> ```

## Controller—POST-Route

Suchen Sie die exportierte `author_delete_post()` Controller-Methode und ersetzen Sie sie mit dem folgenden Code.

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
      author,
      author_books: allBooksByAuthor,
    });
    return;
  }
  // Author has no books. Delete object and redirect to the list of authors.
  await Author.findByIdAndDelete(req.body.authorid);
  res.redirect("/catalog/authors");
});
```

Zuerst validieren wir, dass eine ID bereitgestellt wurde (dies wird über die Formular-Körperparameter gesendet, anstatt die Version in der URL zu verwenden).
Dann holen wir den Autor und seine zugehörigen Bücher auf die gleiche Weise wie bei der `GET`-Route.
Wenn es keine Bücher gibt, löschen wir das Autorenobjekt und leiten zur Liste aller Autoren weiter.
Wenn es noch Bücher gibt, rendern wir einfach das Formular erneut und übergeben den Autor und die Liste der zu löschenden Bücher.

> [!NOTE]
> Wir könnten prüfen, ob der Aufruf von `findById()` ein Ergebnis liefert, und wenn nicht, sofort die Liste aller Autoren rendern.
> Wir haben den Code aus Gründen der Kürze so belassen (es wird trotzdem die Liste der Autoren zurückgegeben, wenn die ID nicht gefunden wird, aber dies wird nach `findByIdAndDelete()` geschehen).

## Ansicht

Erstellen Sie **/views/author_delete.pug** und kopieren Sie den unten stehenden Text hinein.

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

Die Ansicht erweitert die Layoutvorlage und überschreibt den Block namens `content`. Am Anfang werden die Autorendetails angezeigt.
Es enthält dann eine bedingte Anweisung basierend auf der Anzahl der **`author_books`** (die `if`- und `else`-Klauseln).

- Wenn Bücher mit dem Autor verbunden sind, listet die Seite diese Bücher auf und gibt an, dass sie gelöscht werden müssen, bevor dieser `Author` gelöscht werden kann.
- Wenn keine Bücher vorhanden sind, zeigt die Seite eine Bestätigungsaufforderung an.
- Wenn die **Löschen**-Schaltfläche gedrückt wird, wird die Autoren-ID in einer `POST`-Anfrage an den Server gesendet, und der Datensatz des Autors wird gelöscht.

## Löschsteuerung hinzufügen

Als nächstes fügen wir eine **Löschen**-Steuerung zur _Author detail_ Ansicht hinzu (die Detailseite ist ein guter Ort, um einen Datensatz zu löschen).

> [!NOTE]
> In einer vollständigen Implementierung würde das Steuerelement nur berechtigten Benutzern angezeigt werden.
> Allerdings haben wir zu diesem Zeitpunkt noch kein Berechtigungssystem implementiert!

Öffnen Sie die **author_detail.pug** Ansicht und fügen Sie am Ende die folgenden Zeilen hinzu.

```pug
hr
p
  a(href=author.url+'/delete') Delete author
```

Die Steuerung sollte jetzt als Link erscheinen, wie unten auf der _Author detail_-Seite gezeigt.

![Der Abschnitt Autorendetails der Anwendung Local Library. Die linke Spalte hat eine vertikale Navigationsleiste. Der rechte Abschnitt enthält die Autorendetails mit einer Überschrift, die den Namen des Autors gefolgt von den Lebensdaten des Autors hat und die vom Autor geschriebenen Bücher darunter auflistet. Unten befindet sich eine Schaltfläche mit der Bezeichnung "Autor löschen".](locallibary_express_author_detail_delete.png)

## Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`.
Wählen Sie dann den Link _Alle Autoren_ und dann einen bestimmten Autor. Klicken Sie schließlich auf den Link _Autor löschen_.

Wenn der Autor keine Bücher hat, wird Ihnen eine Seite wie diese angezeigt.
Nach dem Drücken von Löschen, wird der Server den Autor löschen und zur Liste der Autoren weiterleiten.

![Der Abschnitt Autor löschen der Anwendung Local Library für einen Autor, der keine Bücher hat. Die linke Spalte hat eine vertikale Navigationsleiste. Der rechte Abschnitt enthält den Namen des Autors und die Lebensdaten. Es gibt die Frage "Möchten Sie diesen Autor wirklich löschen?" mit einer Schaltfläche mit der Bezeichnung 'Löschen'.](locallibary_express_author_delete_nobooks.png)

Wenn der Autor Bücher hat, wird Ihnen eine Ansicht wie die folgende angezeigt.
Sie können dann die Bücher von ihren Detailseiten löschen (sobald dieser Code implementiert ist!).

![Der Abschnitt Autor löschen der Anwendung Local Library für einen Autor, der Bücher unter seinem Namen hat. Der Abschnitt enthält den Namen des Autors und die Lebensdaten des Autors. Es gibt eine Aussage, die lautet "Löschen Sie die folgenden Bücher, bevor Sie versuchen, diesen Autor zu löschen", gefolgt von den Büchern des Autors. Die Liste enthält die Titel jedes Buches als Links, gefolgt von einer kurzen Beschreibung im Klartext.](locallibary_express_author_delete_withbooks.png)

> [!NOTE]
> Die anderen Seiten zum Löschen von Objekten können auf ähnliche Weise implementiert werden.
> Wir haben das als Herausforderung belassen.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms).
- Fahren Sie fort mit dem letzten Unterartikel von Teil 6: [Buchformular aktualisieren](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form).
