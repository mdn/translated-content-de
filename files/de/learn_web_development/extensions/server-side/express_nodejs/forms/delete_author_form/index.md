---
title: Formular zum Löschen eines Autors
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Delete_author_form
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

Dieser Unterartikel zeigt, wie Sie eine Seite definieren, um `Author`-Objekte zu löschen.

Wie im Abschnitt [Formular-Design](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms#form_design) besprochen, besteht unsere Strategie darin, nur das Löschen von Objekten zuzulassen, die nicht von anderen Objekten referenziert werden (in diesem Fall bedeutet das, dass wir das Löschen eines `Author` nicht zulassen, wenn er von einem `Book` referenziert wird).
In der Umsetzung bedeutet dies, dass das Formular bestätigen muss, dass keine zugehörigen Bücher vorhanden sind, bevor der Autor gelöscht wird.
Falls es zugehörige Bücher gibt, sollte es diese anzeigen und angeben, dass sie gelöscht werden müssen, bevor das `Author`-Objekt gelöscht werden kann.

## Controller—GET-Route

Öffnen Sie **/controllers/authorController.js**. Finden Sie die exportierte Methode `author_delete_get()` des Controllers und ersetzen Sie sie durch den folgenden Code.

```js
// Display Author delete form on GET.
exports.author_delete_get = async (req, res, next) => {
  // Get details of author and all their books (in parallel)
  const [author, allBooksByAuthor] = await Promise.all([
    Author.findById(req.params.id).exec(),
    Book.find({ author: req.params.id }, "title summary").exec(),
  ]);

  if (author === null) {
    // No results.
    res.redirect("/catalog/authors");
    return;
  }

  res.render("author_delete", {
    title: "Delete Author",
    author,
    author_books: allBooksByAuthor,
  });
};
```

Der Controller erhält die ID der zu löschenden `Author`-Instanz aus dem URL-Parameter (`req.params.id`).
Er verwendet `await` für das von `Promise.all()` zurückgegebene Versprechen, um asynchron auf den angeforderten Datensatz des Autors und alle zugehörigen Bücher (parallel) zu warten.
Wenn beide Operationen abgeschlossen sind, rendert er die Ansicht **author_delete.pug** und übergibt Variablen für den `title`, `author` und `author_books`.

> [!NOTE]
> Wenn `findById()` keine Ergebnisse liefert, ist der Autor nicht in der Datenbank.
> In diesem Fall gibt es nichts zu löschen, daher leiten wir sofort zur Liste aller Autoren weiter.
>
> ```js
> if (author === null) {
>   // Keine Ergebnisse.
>   res.redirect("/catalog/authors");
>   return;
> }
> ```

## Controller—POST-Route

Finden Sie die exportierte Methode `author_delete_post()` des Controllers und ersetzen Sie sie durch den folgenden Code.

```js
// Handle Author delete on POST.
exports.author_delete_post = async (req, res, next) => {
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
};
```

Zuerst validieren wir, dass eine ID bereitgestellt wurde (dies wird über die Parameter des Formularbodys gesendet, anstatt die Version in der URL zu verwenden).
Dann erhalten wir den Autor und die zugehörigen Bücher auf die gleiche Weise wie bei der `GET`-Route.
Wenn es keine Bücher gibt, löschen wir das Autor-Objekt und leiten zur Liste aller Autoren weiter.
Wenn es noch Bücher gibt, rendern wir einfach das Formular erneut und übergeben den Autor und die Liste der zu löschenden Bücher.

> [!NOTE]
> Wir könnten prüfen, ob der Aufruf von `findById()` ein Ergebnis liefert und, wenn nicht, sofort die Liste aller Autoren rendern.
> Wir haben den Code aus Gründen der Kürze so belassen, wie er oben ist (er wird immer noch die Liste der Autoren zurückgeben, wenn die ID nicht gefunden wird, aber dies geschieht nach `findByIdAndDelete()`).

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

Die Ansicht erweitert das Layout-Template und überschreibt den Block namens `content`. Oben zeigt sie die Author-Details an.
Sie enthält dann eine bedingte Anweisung basierend auf der Anzahl der **`author_books`** (die `if`- und `else`-Klauseln).

- Wenn es _Bücher_ gibt, die mit dem Autor in Verbindung stehen, listet die Seite die Bücher auf und gibt an, dass diese gelöscht werden müssen, bevor dieser `Author` gelöscht werden kann.
- Wenn _keine_ Bücher vorhanden sind, zeigt die Seite eine Bestätigungsaufforderung an.
- Wenn die **Delete**-Schaltfläche geklickt wird, wird die Autoren-ID in einer `POST`-Anfrage an den Server gesendet und der Datensatz dieses Autors wird gelöscht.

## Hinzufügen eines Lösch-Steuerelements

Als nächstes fügen wir ein **Delete**-Steuerelement zur _Author Detail_ Ansicht hinzu (die Detailseite ist ein guter Ort, um einen Datensatz zu löschen).

> [!NOTE]
> In einer vollständigen Implementierung würde das Steuerelement nur autorisierten Benutzern angezeigt.
> Allerdings haben wir zu diesem Zeitpunkt noch kein Autorisierungssystem implementiert!

Öffnen Sie die Ansicht **author_detail.pug** und fügen Sie am unteren Rand die folgenden Zeilen hinzu.

```pug
hr
p
  a(href=author.url+'/delete') Delete author
```

Das Steuerelement sollte jetzt als Link erscheinen, wie unten auf der _Author Detail_ Seite gezeigt.

![Der Abschnitt Author Details der Local Library-Anwendung. Die linke Spalte hat eine vertikale Navigationsleiste. Der rechte Abschnitt enthält die Author-Details mit einer Überschrift, die den Namen des Autors enthält, gefolgt von den Lebensdaten des Autors und listet die vom Autor geschriebenen Bücher darunter auf. Unten befindet sich eine Schaltfläche mit der Aufschrift 'Delete Author'.](locallibary_express_author_detail_delete.png)

## Wie sieht es aus?

Führen Sie die Anwendung aus und öffnen Sie Ihren Browser unter `http://localhost:3000/`.
Wählen Sie dann den Link _All authors_ und anschließend einen bestimmten Autor aus. Schließlich wählen Sie den Link _Delete author_.

Wenn der Autor keine Bücher hat, wird Ihnen eine Seite wie diese präsentiert.
Nach dem Drücken von Löschen wird der Server den Autor löschen und zur Autorenliste weiterleiten.

![Der Abschnitt Delete Author der Local Library-Anwendung eines Autors, der keine Bücher hat. Die linke Spalte hat eine vertikale Navigationsleiste. Der rechte Abschnitt enthält den Namen und die Lebensdaten des Autors. Es gibt die Frage "Do you really want to delete this author" mit einer Schaltfläche mit der Aufschrift 'Delete'.](locallibary_express_author_delete_nobooks.png)

Wenn der Autor Bücher hat, wird Ihnen eine Ansicht wie die folgende präsentiert.
Sie können dann die Bücher von ihren Detailseiten löschen (sobald dieser Code implementiert ist!).

![Der Abschnitt Delete Author der Local Library-Anwendung eines Autors, der Bücher unter seinem Namen hat. Der Abschnitt enthält den Namen und die Lebensdaten des Autors. Es gibt eine Aussage, die "Löschen Sie die folgenden Bücher, bevor Sie versuchen, diesen Autor zu löschen" liest, gefolgt von den Büchern des Autors. Die Liste enthält die Titel jedes Buches als Links, gefolgt von einer kurzen Beschreibung im Klartext.](locallibary_express_author_delete_withbooks.png)

> [!NOTE]
> Die anderen Seiten zum Löschen von Objekten können auf ähnliche Weise implementiert werden.
> Wir haben das als Herausforderung belassen.

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms).
- Fahren Sie mit dem letzten Unterartikel von Teil 6 fort: [Update Book form](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form).
