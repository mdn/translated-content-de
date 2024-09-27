---
title: "Express-Tutorial Teil 6: Arbeiten mit Formularen"
slug: Learn/Server-side/Express_Nodejs/forms
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Displaying_data", "Learn/Server-side/Express_Nodejs/deployment", "Learn/Server-side/Express_Nodejs")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Express unter Verwendung von Pug arbeiten. Insbesondere werden wir besprechen, wie man Formulare schreibt, um Dokumente in der Datenbank der Website zu erstellen, zu aktualisieren und zu löschen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich <a href="/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data">Express-Tutorial Teil 5: Anzeigen von Bibliotheksdaten</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie man Formulare schreibt, um Daten von Benutzern zu erhalten und die Datenbank mit diesen Daten zu aktualisieren.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Ein [HTML-Formular](/de/docs/Learn/Forms) ist eine Gruppe von einem oder mehreren Feldern/Widgets auf einer Webseite, die verwendet werden können, um Informationen von Benutzern zur Übermittlung an einen Server zu sammeln. Formulare sind ein flexibler Mechanismus zur Erfassung von Benutzereingaben, da es geeignete Formulareingaben für viele verschiedene Datentypen gibt—Textfelder, Kontrollkästchen, Optionsfelder, Datumsauswahl, etc. Formulare sind auch ein relativ sicherer Weg, um Daten mit dem Server zu teilen, da sie uns ermöglichen, Daten in `POST`-Anfragen mit Schutz vor Cross-Site-Request-Forgery zu senden.

Die Arbeit mit Formularen kann kompliziert sein! Entwickler müssen das HTML für das Formular schreiben, die eingegebenen Daten auf dem Server (und möglicherweise auch im Browser) validieren und ordnungsgemäß bereinigen, das Formular mit Fehlermeldungen neu abschicken, um Benutzer über ungültige Felder zu informieren, die Daten verarbeiten, wenn sie erfolgreich übermittelt wurden, und schließlich dem Benutzer auf irgendeine Weise antworten, um Erfolg anzuzeigen.

In diesem Tutorial zeigen wir Ihnen, wie die oben genannten Operationen in _Express_ durchgeführt werden können. Dabei erweitern wir die _LocalLibrary_-Website, um Benutzern das Erstellen, Bearbeiten und Löschen von Einträgen in der Bibliothek zu ermöglichen.

> [!NOTE]
> Wir haben noch nicht besprochen, wie bestimmte Routen auf authentifizierte oder autorisierte Benutzer beschränkt werden, sodass an diesem Punkt jeder Benutzer in der Lage sein wird, Änderungen an der Datenbank vorzunehmen.

### HTML-Formulare

Zuerst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn/Forms). Betrachten Sie ein einfaches HTML-Formular, mit einem einzigen Textfeld zum Eingeben des Namens eines "Teams" und dem zugehörigen Label:

![Einfaches Namensfeld-Beispiel in HTML-Formular](form_example_name_field.png)

Das Formular wird in HTML als eine Sammlung von Elementen innerhalb von `<form>…</form>`-Tags definiert, das mindestens ein `input`-Element vom `type="submit"` enthalten muss.

```html
<form action="/team_name_url/" method="post">
  <label for="team_name">Enter name: </label>
  <input
    id="team_name"
    type="text"
    name="name_field"
    value="Default name for team." />
  <input type="submit" value="OK" />
</form>
```

Während wir hier nur ein (Text-)Feld zum Eingeben des Teamnamens eingefügt haben, kann ein Formular _beliebig viele_ andere Eingabelemente und die zugehörigen Labels enthalten. Das `type`-Attribut des Feldes definiert, welche Art von Widget angezeigt wird. Der `name` und `id` des Feldes werden verwendet, um das Feld in JavaScript/CSS/HTML zu identifizieren, während `value` den anfänglichen Wert für das Feld bei seiner ersten Anzeige definiert. Das passende Team-Label wird mit dem `label`-Tag spezifiziert (siehe "Name eingeben" oben), mit einem `for`-Feld, das den `id`-Wert des zugehörigen `input` enthält.

Das `submit`-Eingabefeld wird standardmäßig als Schaltfläche angezeigt—diese kann vom Benutzer gedrückt werden, um die von den anderen Eingabeelementen enthaltenen Daten an den Server hochzuladen (in diesem Fall nur der `team_name`). Die Formularattribute definieren die HTTP-`method`, die zum Senden der Daten verwendet wird, und das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource/URL, an die die Daten zur Verarbeitung gesendet werden sollen, wenn das Formular übermittelt wird. Wenn dies nicht festgelegt ist (oder auf einen leeren String gesetzt ist), wird das Formular zurück zur aktuellen Seiten-URL übermittelt.
- `method`: Die verwendete HTTP-Methode zum Senden der Daten: `POST` oder `GET`.

  - Die `POST`-Methode sollte immer verwendet werden, wenn durch die Daten eine Änderung an der Datenbank des Servers entsteht, da dies widerstandsfähiger gegen Angriffe durch Cross-Site Forgery-Requests gemacht werden kann.
  - Die `GET`-Methode sollte nur für Formulare verwendet werden, die keine Benutzerdaten ändern (z.B. ein Suchformular). Es wird empfohlen, wenn Sie die URL bookmarken oder teilen möchten.

### Formularverarbeitungsprozess

Die Formularverarbeitung verwendet alle Techniken, die wir beim Anzeigen von Informationen über unsere Modelle gelernt haben: Die Route sendet unsere Anfrage an eine Controller-Funktion, die alle erforderlichen Datenbankaktionen durchführt, einschließlich des Lesens von Daten aus den Modellen, und dann eine HTML-Seite generiert und zurückgibt. Was die Dinge komplizierter macht, ist, dass der Server auch in der Lage sein muss, die Daten zu verarbeiten, die vom Benutzer bereitgestellt wurden, und das Formular mit Fehlermeldungen neu anzuzeigen, wenn es Probleme gibt.

Ein Prozessablaufdiagramm für die Verarbeitung von Formularanfragen ist unten dargestellt, beginnend mit einer Anforderung für eine Seite, die ein Formular enthält (in grün dargestellt):

![Webserver-Formularanforderungsverarbeitungs-Flussdiagramm. Browser-Anfragen für die Seite, die das Formular enthält, indem eine HTTP GET-Anfrage gesendet wird. Der Server erstellt ein leeres Standardformular und gibt es an den Benutzer zurück. Der Benutzer füllt oder aktualisiert das Formular, übermittelt es über HTTP POST mit Formulardaten. Der Server validiert die empfangenen Formulardaten. Wenn die vom Benutzer bereitgestellten Daten ungültig sind, erstellt der Server das Formular mit den vom Benutzer eingegebenen Daten und Fehlermeldungen neu und sendet es zurück an den Benutzer, das Formular wird aktualisiert und über HTTP Post erneut gesendet, und es wird erneut validiert. Wenn die Daten gültig sind, führt der Server Aktionen mit den gültigen Daten aus und leitet den Benutzer zur Erfolgs-URL weiter.](web_server_form_handling.png)

Wie im Diagramm oben gezeigt, sind die Hauptaufgaben des Formularverarbeitungscodes:

1. Das Standardformular anzeigen, wenn es vom Benutzer zum ersten Mal angefordert wird.

   - Das Formular kann leere Felder enthalten (z.B. wenn Sie einen neuen Datensatz erstellen), oder es kann mit Anfangswerten vorab gefüllt werden (z.B. wenn Sie einen Datensatz ändern oder nützliche Standardanfangswerte haben).

2. Die vom Benutzer übermittelten Daten empfangen, gewöhnlich in einer HTTP-`POST`-Anfrage.
3. Die Daten validieren und bereinigen.
4. Wenn Daten ungültig sind, das Formular erneut anzeigen—diesmal mit allen vom Benutzer ausgefüllten Werten und Fehlermeldungen für die Problemfelder.
5. Wenn alle Daten gültig sind, die erforderlichen Aktionen ausführen (z.B. die Daten in der Datenbank speichern, eine Benachrichtigungs-E-Mail senden, das Ergebnis einer Suche zurückgeben, eine Datei hochladen, etc.)
6. Sobald alle Aktionen abgeschlossen sind, den Benutzer auf eine andere Seite umleiten.

Oft wird der Formularverarbeitungscode mit einer `GET`-Route für die anfängliche Anzeige des Formulars und einer `POST`-Route zum gleichen Pfad für die Validierung und Verarbeitung der Formulardaten implementiert. Dies ist der Ansatz, der in diesem Tutorial verwendet wird.

Express selbst bietet keine spezielle Unterstützung für Formularverarbeitungsoperationen, es kann jedoch Middleware verwenden, um `POST`- und `GET`-Parameter aus dem Formular zu verarbeiten und ihre Werte zu validieren/bereinigen.

### Validierung und Bereinigung

Bevor die Daten aus einem Formular gespeichert werden, müssen sie validiert und bereinigt werden:

- Die Validierung überprüft, ob die eingegebenen Werte für jedes Feld geeignet sind (innerhalb des richtigen Bereichs, Formats, etc.) und dass für alle erforderlichen Felder Werte angegeben wurden.
- Bereinigung entfernt/ersetzt Zeichen in den Daten, die möglicherweise dazu verwendet werden könnten, bösartigen Inhalt an den Server zu senden.

Für dieses Tutorial werden wir das beliebte Modul [express-validator](https://www.npmjs.com/package/express-validator) verwenden, um sowohl die Validierung als auch die Bereinigung unserer Formulardaten durchzuführen.

#### Installation

Installieren Sie das Modul, indem Sie den folgenden Befehl im Stammverzeichnis des Projekts ausführen.

```bash
npm install express-validator
```

#### Verwendung von express-validator

> [!NOTE]
> Der [express-validator](https://express-validator.github.io/docs/#basic-guide)-Leitfaden auf GitHub bietet einen guten Überblick über die API. Wir empfehlen Ihnen, diesen zu lesen, um einen Eindruck von allen Möglichkeiten zu bekommen (einschließlich der Verwendung von [Schema-Validierung](https://express-validator.github.io/docs/guides/schema-validation/) und [Erstellung benutzerdefinierter Validatoren](https://express-validator.github.io/docs/guides/customizing/#custom-validators-and-sanitizers)). Nachfolgend decken wir nur einen Teil ab, der für die _LocalLibrary_ nützlich ist.

Um den Validator in unseren Controllern zu verwenden, spezifizieren wir die bestimmten Funktionen, die wir aus dem Modul [express-validator](https://www.npmjs.com/package/express-validator) importieren möchten, wie unten gezeigt:

```js
const { body, validationResult } = require("express-validator");
```

Es gibt viele verfügbare Funktionen, die es Ihnen ermöglichen, Daten aus Anfrageparametern, Body, Kopfzeilen, Cookies, etc. zu überprüfen und zu bereinigen, oder alle auf einmal. Für dieses Tutorial verwenden wir hauptsächlich `body` und `validationResult` (wie oben als "erforderlich" angegeben).

Die Funktionen sind wie folgt definiert:

- [`body(fields, message)`](https://express-validator.github.io/docs/api/check/#body): Gibt eine Reihe von Feldern im Anforderungstext (ein `POST`-Parameter) an, die validiert und/oder bereinigt werden sollen, zusammen mit einer optionalen Fehlermeldung, die angezeigt werden kann, wenn die Tests fehlschlagen. Die Validierungs- und Bereinigungskriterien werden dem `body()`-Methode angehängt.

  Zum Beispiel definiert die Zeile unten zuerst, dass wir das Feld "name" überprüfen und dass ein Validierungsfehler eine Fehlermeldung "Empty name" festlegen wird. Wir rufen dann die Bereinigungsmethode `trim()` auf, um Leerzeichen vom Anfang und Ende des Strings zu entfernen, und dann `isLength()`, um zu überprüfen, ob der resultierende String nicht leer ist. Schließlich rufen wir `escape()` auf, um HTML-Zeichen aus der Variablen zu entfernen, die in JavaScript-Cross-Site-Scripting-Angriffen verwendet werden könnten.

  ```js
  [
    // …
    body("name", "Empty name").trim().isLength({ min: 1 }).escape(),
    // …
  ];
  ```

  Dieser Test überprüft, ob das Altersfeld ein gültiges Datum ist, und verwendet `optional()`, um anzugeben, dass Null- und leere Strings die Validierung nicht fehlschlagen lassen.

  ```js
  [
    // …
    body("age", "Invalid age")
      .optional({ values: "falsy" })
      .isISO8601()
      .toDate(),
    // …
  ];
  ```

  Sie können auch verschiedene Validatoren verketten und Nachrichten hinzufügen, die angezeigt werden, wenn die vorhergehenden Validatoren falsch sind.

  ```js
  [
    // …
    body("name")
      .trim()
      .isLength({ min: 1 })
      .withMessage("Name empty.")
      .isAlpha()
      .withMessage("Name must be alphabet letters."),
    // …
  ];
  ```

- [`validationResult(req)`](https://express-validator.github.io/docs/api/validation-result/#validationresult): Führt die Validierung durch und macht die Fehler in Form eines `validation`-Ergebnisobjekts verfügbar. Dies wird in einem separaten Callback aufgerufen, wie unten gezeigt:

  ```js
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/errors messages.
      // Error messages can be returned in an array using `errors.array()`.
    } else {
      // Data from form is valid.
    }
  });
  ```

  Wir verwenden die `isEmpty()`-Methode des Validationsergebnisses, um zu überprüfen, ob Fehler aufgetreten sind, und die `array()`-Methode, um das Set von Fehlermeldungen zu erhalten. Siehe den Abschnitt [Fehlerbehandlung bei der Validierung](https://express-validator.github.io/docs/guides/getting-started/#handling-validation-errors) für weitere Informationen.

Die Validierungs- und Bereinigungsketten sind Middleware, die dem Express-Routenhandler übergeben werden sollten (wir tun dies indirekt über den Controller). Wenn die Middleware ausgeführt wird, wird jeder Validator/Bereiniger in der angegebenen Reihenfolge ausgeführt.

Wir werden einige reale Beispiele behandeln, wenn wir die _LocalLibrary_-Formulare unten implementieren.

### Formulargestaltung

Viele der Modelle in der Bibliothek sind miteinander verbunden/abhängig—zum Beispiel benötigt ein `Book` ein `Author`, und kann auch ein oder mehrere `Genres` haben. Dies wirft die Frage auf, wie wir den Fall behandeln sollten, wenn ein Benutzer:

- Ein Objekt erstellt, wenn seine verwandten Objekte noch nicht existieren (zum Beispiel ein Buch, bei dem das Autorenobjekt noch nicht definiert wurde).
- Ein Objekt löscht, das noch von einem anderen Objekt verwendet wird (zum Beispiel, ein `Genre`, das noch von einem `Book` verwendet wird, löschen).

Für dieses Projekt werden wir die Implementierung vereinfachen, indem wir festlegen, dass ein Formular nur:

- Ein Objekt mit Objekten erstellen kann, die bereits existieren (also müssen Benutzer alle erforderlichen `Author`- und `Genre`-Instanzen erstellen, bevor sie `Book`-Objekte erstellen können).
- Ein Objekt löschen kann, wenn es nicht von anderen Objekten referenziert wird (also können Sie z.B. ein `Book` erst löschen, wenn alle zugehörigen `BookInstance`-Objekte gelöscht wurden).

> [!NOTE]
> Eine flexiblere Implementierung könnte es Ihnen erlauben, die abhängigen Objekte beim Erstellen eines neuen Objekts zu erstellen und jedes Objekt jederzeit zu löschen (zum Beispiel, indem abhängige Objekte gelöscht oder Referenzen auf das gelöschte Objekt aus der Datenbank entfernt werden).

### Routen

Um unseren Formularverarbeitungscode zu implementieren, benötigen wir zwei Routen, die dasselbe URL-Muster haben. Die erste (`GET`)-Route wird verwendet, um ein neues leeres Formular zum Erstellen des Objekts anzuzeigen. Die zweite Route (`POST`) wird verwendet, um die vom Benutzer eingegebenen Daten zu validieren und dann die Informationen zu speichern und zur Detailseite weiterzuleiten (wenn die Daten gültig sind) oder das Formular mit Fehlern neu anzuzeigen (wenn die Daten ungültig sind).

Wir haben die Routen für alle Erstellungsseiten unserer Modelle bereits in **/routes/catalog.js** erstellt (in einem [vorherigen Tutorial](/de/docs/Learn/Server-side/Express_Nodejs/routes)). Zum Beispiel sind die Genrerouten unten gezeigt:

```js
// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", genre_controller.genre_create_get);

// POST request for creating Genre.
router.post("/genre/create", genre_controller.genre_create_post);
```

## Express-Formular-Unterartikel

Die folgenden Unterartikel führen uns durch den Prozess des Hinzufügens der erforderlichen Formulare zu unserer Beispielanwendung. Sie müssen jeden nacheinander lesen und durcharbeiten, bevor Sie zum nächsten übergehen.

1. [Create Genre form](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_genre_form) — Definieren einer Seite zur Erstellung von `Genre`-Objekten.
2. [Create Author form](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_author_form) — Definieren einer Seite zur Erstellung von `Author`-Objekten.
3. [Create Book form](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_book_form) — Definieren einer Seite/ eines Formulars zur Erstellung von `Book`-Objekten.
4. [Create BookInstance form](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_BookInstance_form) — Definieren einer Seite/ eines Formulars zur Erstellung von `BookInstance`-Objekten.
5. [Delete Author form](/de/docs/Learn/Server-side/Express_Nodejs/forms/Delete_author_form) — Definieren einer Seite zum Löschen von `Author`-Objekten.
6. [Update Book form](/de/docs/Learn/Server-side/Express_Nodejs/forms/Update_Book_form) — Definieren einer Seite zur Aktualisierung von `Book`-Objekten.

## Fordern Sie sich heraus

Implementieren Sie die Löschseiten für die Modelle `Book`, `BookInstance` und `Genre` und verlinken Sie sie von den zugehörigen Detailseiten aus auf die gleiche Weise wie unsere _Author delete_-Seite. Die Seiten sollten dem gleichen Designansatz folgen:

- Wenn es Verweise auf das Objekt von anderen Objekten gibt, sollten diese anderen Objekte zusammen mit einem Hinweis angezeigt werden, dass dieser Datensatz erst gelöscht werden kann, wenn die aufgeführten Objekte gelöscht wurden.
- Wenn es keine weiteren Verweise auf das Objekt gibt, sollte die Ansicht zum Löschen auffordern. Wenn der Benutzer die Schaltfläche **Löschen** drückt, sollte der Datensatz gelöscht werden.

Einige Tipps:

- Das Löschen eines `Genre` ist genauso wie das Löschen eines `Author`, da beide Objekte Abhängigkeiten von `Book` sind (sodass in beiden Fällen das Objekt nur gelöscht werden kann, wenn die zugehörigen Bücher gelöscht sind).
- Das Löschen eines `Book` ist ebenfalls ähnlich, da Sie zuerst überprüfen müssen, dass keine zugehörigen `BookInstances` vorhanden sind.
- Das Löschen eines `BookInstance` ist das einfachste von allem, da es keine abhängigen Objekte gibt. In diesem Fall können Sie den zugehörigen Datensatz einfach finden und löschen.

Implementieren Sie die Aktualisierungsseiten für die Modelle `BookInstance`, `Author` und `Genre` und verlinken Sie sie von den zugehörigen Detailseiten auf die gleiche Weise wie unsere _Book update_-Seite.

Einige Tipps:

- Die _Book update page_, die wir gerade implementiert haben, ist die schwierigste! Die gleichen Muster können für die Aktualisierungsseiten der anderen Objekte verwendet werden.
- Die `Author`-Geburts- und Todesdatumsfelder und das `BookInstance`-Fälligkeitsdatumsfeld sind im falschen Format, um sie in das Datumseingabefeld im Formular einzugeben (es erfordert Daten im Format "YYYY-MM-DD"). Der einfachste Weg, dies zu umgehen, ist die Definition einer neuen virtuellen Eigenschaft für die Daten, die die Daten entsprechend formatiert, und dann dieses Feld in den zugehörigen Ansichts-Templates zu verwenden.
- Wenn Sie stecken bleiben, gibt es Beispiele für die Aktualisierungsseiten im [Beispiel hier](https://github.com/mdn/express-locallibrary-tutorial).

## Zusammenfassung

_Express_, Node und Drittanbieterpakete auf npm bieten alles, was Sie brauchen, um Formulare zu Ihrer Website hinzuzufügen. In diesem Artikel haben Sie gelernt, wie man Formulare mit _Pug_ erstellt, Eingaben mit _express-validator_ validiert und bereinigt und Datensätze in der Datenbank hinzufügt, löscht und ändert.

Sie sollten jetzt verstehen, wie Sie grundlegende Formulare und Formularbearbeitungscode zu Ihren eigenen Node-Websites hinzufügen können!

## Siehe auch

- [express-validator](https://www.npmjs.com/package/express-validator) (npm-Dokumentation).

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Displaying_data", "Learn/Server-side/Express_Nodejs/deployment", "Learn/Server-side/Express_Nodejs")}}
