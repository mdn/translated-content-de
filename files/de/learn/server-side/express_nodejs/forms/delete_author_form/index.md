---
title: Autor Löschformular
slug: Learn/Server-side/Express_Nodejs/forms/Delete_author_form
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Dieser Unterartikel zeigt, wie Sie eine Seite zum Löschen von `Author`-Objekten definieren.

Wie im Abschnitt [Formular-Design](/de/docs/Learn/Server-side/Express_Nodejs/forms#form_design) besprochen, ist unsere Strategie, nur das Löschen von Objekten zuzulassen, die nicht von anderen Objekten referenziert werden (in diesem Fall bedeutet das, dass wir das Löschen eines `Autors` nicht zulassen, wenn er von einem `Buch` referenziert wird).
In Bezug auf die Implementierung bedeutet dies, dass das Formular bestätigen muss, dass keine zugehörigen Bücher vorhanden sind, bevor der Autor gelöscht wird.
Wenn es zugehörige Bücher gibt, sollten diese angezeigt werden und darauf hingewiesen werden, dass sie gelöscht werden müssen, bevor das `Author`-Objekt gelöscht werden kann.

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

Der Controller holt die ID der zu löschenden `Author`-Instanz aus dem URL-Parameter (`req.params.id`).
Er verwendet `await` auf dem von `Promise.all()` zurückgegebenen Versprechen, um asynchron auf den angegebenen Autor-Datensatz und alle zugehörigen Bücher (parallel) zu warten.
Wenn beide Vorgänge abgeschlossen sind, rendert er die **author_delete.pug**-Ansicht und übergibt Variablen für den `title`, den `author` und die `author_books`.

> [!NOTE]
> Wenn `findById()` keine Ergebnisse zurückgibt, ist der Autor nicht in der Datenbank.
> In diesem Fall gibt es nichts zu löschen, also leiten wir sofort zur Liste aller Autoren weiter.
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

Zuerst validieren wir, dass eine ID angegeben wurde (diese wird über die Formularkörperparameter gesendet, anstatt die Version in der URL zu verwenden).
Dann holen wir den Autor und ihre zugehörigen Bücher auf die gleiche Weise wie für die `GET`-Route.
Wenn keine Bücher vorhanden sind, löschen wir das Author-Objekt und leiten zur Liste aller Autoren weiter.
Wenn noch Bücher vorhanden sind, rendern wir einfach das Formular neu und übergeben den Autor und die Liste der zu löschenden Bücher.

> [!NOTE]
> Wir könnten überprüfen, ob der Aufruf von `findById()` ein Ergebnis liefert, und falls nicht, sofort die Liste aller Autoren rendern.
> Wir haben den Code der Kürze halber so gelassen, wie er oben ist (er wird trotzdem die Liste der Autoren zurückgeben, wenn die ID nicht gefunden wird, aber das passiert nach `findByIdAndDelete()`).

## Ansicht

Erstellen Sie **/views/author_delete.pug** und kopieren Sie den nachstehenden Text hinein.

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

Die Ansicht erweitert die Layout-Vorlage und überschreibt den Block namens `content`. Ganz oben werden die Autorendetails angezeigt.
Dann wird eine bedingte Anweisung basierend auf der Anzahl der **`author_books`** eingefügt (die `if` und `else` Klauseln).

- Wenn dem Autor _Bücher zugeordnet_ sind, listet die Seite die Bücher auf und gibt an, dass diese gelöscht werden müssen, bevor dieser `Autor` gelöscht werden kann.
- Wenn _keine_ Bücher vorhanden sind, zeigt die Seite eine Bestätigungsaufforderung an.
- Wenn die **Löschen**-Schaltfläche angeklickt wird, wird die Autoren-ID an den Server in einer `POST`-Anfrage gesendet und der Datensatz dieses Autors wird gelöscht.

## Hinzufügen eines Löschsteuerungselements

Als nächstes fügen wir ein **Löschen**-Steuerungselement für die _Autor-Detailansicht_ hinzu (die Detailseite ist ein guter Ort, um einen Datensatz zu löschen).

> [!NOTE]
> In einer vollständigen Implementierung würde das Steuerungselement nur autorisierten Benutzern sichtbar gemacht.
> Aber an diesem Punkt haben wir noch kein Autorisierungssystem implementiert!

Öffnen Sie die **author_detail.pug**-Ansicht und fügen Sie am Ende die folgenden Zeilen hinzu.

```pug
hr
p
  a(href=author.url+'/delete') Delete author
```

Das Steuerungselement sollte jetzt als Link erscheinen, wie unten auf der _Autor-Detailseite_ gezeigt.

![Der Autorendetails-Abschnitt der Local Library-Anwendung. Die linke Spalte hat eine vertikale Navigationsleiste. Der rechte Abschnitt enthält die Autorendetails mit einer Überschrift, die den Namen des Autors gefolgt von den Lebensdaten des Autors zeigt und die vom Autor geschriebenen Bücher darunter auflistet. Unten befindet sich eine Schaltfläche mit der Aufschrift 'Autor löschen'.](locallibary_express_author_detail_delete.png)

## Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`.
Wählen Sie dann den Link _Alle Autoren_ aus und anschließend einen bestimmten Autor. Wählen Sie schließlich den Link _Autor löschen_ aus.

Wenn der Autor keine Bücher hat, wird Ihnen eine Seite wie diese angezeigt.
Nach dem Drücken von Löschen, wird der Server den Autor löschen und zur Autorenliste weiterleiten.

![Der Autor löschen-Abschnitt der Local Library-Anwendung eines Autors, der keine Bücher hat. Die linke Spalte hat eine vertikale Navigationsleiste. Der rechte Abschnitt enthält den Namen und die Lebensdaten des Autors. Die Frage "Möchten Sie diesen Autor wirklich löschen?" erscheint mit einer Schaltfläche mit der Aufschrift 'Löschen'.](locallibary_express_author_delete_nobooks.png)

Wenn der Autor Bücher hat, wird Ihnen eine Ansicht wie die folgende angezeigt.
Sie können dann die Bücher von ihren Detailseiten löschen (sobald dieser Code implementiert ist!).

![Der Autor löschen-Abschnitt der Local Library-Anwendung eines Autors, der Bücher unter seinem Namen hat. Der Abschnitt enthält den Namen des Autors und die Lebensdaten des Autors. Es gibt eine Aussage, die besagt "Löschen Sie die folgenden Bücher, bevor Sie versuchen, diesen Autor zu löschen", gefolgt von den Büchern des Autors. Die Liste enthält die Titel der einzelnen Bücher als Links, gefolgt von einer kurzen Beschreibung im Klartext.](locallibary_express_author_delete_withbooks.png)

> [!NOTE]
> Die anderen Seiten zum Löschen von Objekten können auf die gleiche Weise implementiert werden.
> Wir haben das als Herausforderung offengelassen.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Express_Nodejs/forms).
- Fahren Sie mit dem letzten Unterartikel von Teil 6 fort: [Update Book form](/de/docs/Learn/Server-side/Express_Nodejs/forms/Update_Book_form).
