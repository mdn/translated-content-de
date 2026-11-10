---
title: Formular zum Löschen eines Authors
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Delete_author_form
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_BookInstance_form", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms")}}

Dieser Unterartikel zeigt, wie Sie eine Seite zum Löschen von `Author`-Objekten definieren.

Wie im Abschnitt [Formulargestaltung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms#form_design) erläutert, erlauben wir das Löschen nur bei Objekten, auf die keine anderen Objekte verweisen. In diesem Fall bedeutet das: Ein `Author` kann nicht gelöscht werden, wenn ein `Book` auf ihn verweist.
Daher muss vor dem Löschen geprüft werden, ob dem Author noch Bücher zugeordnet sind.
Falls ja, sollen diese angezeigt werden, zusammen mit dem Hinweis, dass sie vor dem `Author`-Objekt gelöscht werden müssen.

## Controller – GET-Route

Öffnen Sie **controllers/authorController.js**. Suchen Sie die exportierte Controller-Methode `authorDeleteGet()` und ersetzen Sie sie durch den folgenden Code.

```js
// Display Author delete form on GET.
export const authorDeleteGet = async (req, res, next) => {
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

Der Controller liest die ID der zu löschenden `Author`-Instanz aus dem URL-Parameter (`req.params.id`).
Mit `await` wartet er auf das von `Promise.all()` zurückgegebene Promise. So werden der angegebene Author-Datensatz und alle zugehörigen Bücher parallel abgerufen.
Nachdem beide Vorgänge abgeschlossen sind, rendert er die Ansicht **author_delete.pug** und übergibt die Variablen `title`, `author` und `author_books`.

> [!NOTE]
> Wenn `findById()` kein Ergebnis zurückgibt, befindet sich der Author nicht in der Datenbank.
> In diesem Fall gibt es nichts zu löschen, daher leiten wir sofort zur Liste aller Authors weiter.
>
> ```js
> if (author === null) {
>   // No results.
>   res.redirect("/catalog/authors");
>   return;
> }
> ```

## Controller – POST-Route

Suchen Sie die exportierte Controller-Methode `authorDeletePost()` und ersetzen Sie sie durch den folgenden Code.

```js
// Handle Author delete on POST.
export const authorDeletePost = async (req, res, next) => {
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
  await Author.findByIdAndDelete(req.params.id);
  res.redirect("/catalog/authors");
};
```

Zunächst rufen wir den Author und die zugehörigen Bücher wie bei der `GET`-Route anhand der ID aus der URL ab.
Wenn keine Bücher vorhanden sind, löschen wir das Author-Objekt und leiten zur Liste aller Authors weiter.
Wenn noch Bücher vorhanden sind, rendern wir das Formular erneut und übergeben den Author sowie die Liste der Bücher, die zuerst gelöscht werden müssen.

> [!NOTE]
> Wir könnten prüfen, ob der Aufruf von `findById()` ein Ergebnis zurückgibt, und andernfalls sofort die Liste aller Authors anzeigen.
> Der Kürze halber haben wir den Code jedoch wie oben belassen. Wenn die ID nicht gefunden wird, wird die Liste aller Authors weiterhin angezeigt, allerdings erst nach `findByIdAndDelete()`.

## Ansicht

Erstellen Sie **views/author_delete.pug** und fügen Sie den folgenden Text ein.

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
      button.btn.btn-primary(type='submit') Delete
```

Die Ansicht erweitert das Layout-Template und überschreibt den Block `content`. Oben zeigt sie die Angaben zum Author an.
Anschließend folgt eine bedingte Anweisung, die von der Anzahl der **`author_books`** abhängt (mit einem `if`- und einem `else`-Zweig).

- Wenn dem Author Bücher zugeordnet _sind_, werden diese aufgelistet. Außerdem wird darauf hingewiesen, dass sie gelöscht werden müssen, bevor dieser `Author` gelöscht werden kann.
- Wenn dem Author _keine_ Bücher zugeordnet sind, zeigt die Seite eine Bestätigungsfrage an.
- Wenn auf die Schaltfläche **Löschen** geklickt wird, sendet das Formular eine `POST`-Anfrage an dieselbe URL. Diese enthält die Author-ID; der entsprechende Author-Datensatz wird daraufhin gelöscht.

## Steuerelement zum Löschen hinzufügen

Als Nächstes fügen wir der Ansicht _Author-Details_ ein Steuerelement zum **Löschen** hinzu. Die Detailseite eignet sich gut, um von dort aus einen Datensatz zu löschen.

> [!NOTE]
> In einer vollständigen Implementierung wäre das Steuerelement nur für autorisierte Benutzer sichtbar.
> Derzeit haben wir jedoch noch kein Autorisierungssystem eingerichtet!

Öffnen Sie die Ansicht **author_detail.pug** und fügen Sie die folgenden Zeilen am Ende von `block content` hinzu. Sie sind wie der übrige Block um zwei Leerzeichen eingerückt.

```pug
  hr
  p
    a(href=author.url+'/delete') Delete author
```

Das Steuerelement sollte nun auf der Seite _Author-Details_ als Link erscheinen, wie unten gezeigt.

![Der Bereich mit den Author-Details der Anwendung Local Library. Links befindet sich eine vertikale Navigationsleiste. Rechts stehen die Angaben zum Author: eine Überschrift mit dem Namen und den Lebensdaten sowie darunter eine Liste der Bücher, die der Author geschrieben hat. Unten befindet sich ein Link mit der Beschriftung „Delete author“.](locallibary_express_author_detail_delete.png)

## Wie sieht das aus?

Starten Sie die Anwendung und öffnen Sie `http://localhost:3000/` in Ihrem Browser.
Wählen Sie dann den Link _All authors_ und anschließend einen bestimmten Author aus. Wählen Sie zuletzt den Link _Delete author_.

Wenn dem Author keine Bücher zugeordnet sind, wird eine Seite wie die folgende angezeigt.
Nachdem Sie auf „Delete“ geklickt haben, löscht der Server den Author und leitet zur Author-Liste weiter.

![Der Bereich „Delete Author“ der Anwendung Local Library für einen Author ohne Bücher. Links befindet sich eine vertikale Navigationsleiste. Rechts stehen der Name und die Lebensdaten des Authors. Darunter steht die Frage „Do you really want to delete this author“ und eine Schaltfläche mit der Beschriftung „Delete“.](locallibary_express_author_delete_nobooks.png)

Wenn dem Author Bücher zugeordnet sind, wird stattdessen eine Ansicht wie die folgende angezeigt.
Sie können die Bücher dann auf ihren jeweiligen Detailseiten löschen, sobald der entsprechende Code implementiert ist.

![Der Bereich „Delete Author“ der Anwendung Local Library für einen Author, dem Bücher zugeordnet sind. Er zeigt den Namen und die Lebensdaten des Authors. Darunter steht der Hinweis „Delete the following books before attempting to delete this author“, gefolgt von einer Liste seiner Bücher. Jedes Buch wird mit seinem Titel als Link und einer kurzen Beschreibung als Klartext angezeigt.](locallibary_express_author_delete_withbooks.png)

> [!NOTE]
> Die Seiten zum Löschen anderer Objekte können weitgehend auf dieselbe Weise implementiert werden.
> Das überlassen wir Ihnen als Übung.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_BookInstance_form", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms")}}
