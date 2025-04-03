---
title: "Express Tutorial Teil 6: Arbeiten mit Formularen"
short-title: "6: Arbeiten mit Formularen"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Express unter Verwendung von Pug arbeiten. Insbesondere werden wir besprechen, wie man Formulare schreibt, um Dokumente in der Datenbank der Seite zu erstellen, zu aktualisieren und zu löschen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data">Express Tutorial Teil 5: Bibliotheksdaten anzeigen</a>
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

## Übersicht

Ein [HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms) ist eine Gruppe von einem oder mehreren Feldern/Widgets auf einer Webseite, die dazu verwendet werden können, Informationen von Benutzern zur Übermittlung an einen Server zu sammeln. Formulare sind ein flexibler Mechanismus zur Erfassung von Benutzereingaben, da es geeignete Formulareingaben für viele verschiedene Datentypen gibt—Textfelder, Kontrollkästchen, Optionsfelder, Datumsauswahlen usw. Formulare sind auch eine relativ sichere Methode, um Daten mit dem Server zu teilen, da sie ermöglichen, Daten in `POST`-Anfragen mit Schutz gegen Cross-Site-Request-Forgery zu senden.

Die Arbeit mit Formularen kann kompliziert sein! Entwickler müssen HTML für das Formular schreiben, die eingegebenen Daten auf dem Server (und möglicherweise auch im Browser) validieren und ordnungsgemäß bereinigen, das Formular mit Fehlermeldungen erneut absenden, um Benutzer über ungültige Felder zu informieren, die Daten verarbeiten, wenn sie erfolgreich übermittelt wurden, und schließlich in irgendeiner Weise auf den Benutzer reagieren, um Erfolg anzuzeigen.

In diesem Tutorial zeigen wir Ihnen, wie die oben genannten Operationen in _Express_ durchgeführt werden können. Im Laufe der Zeit werden wir die _LocalLibrary_-Website erweitern, um Benutzern zu ermöglichen, Elemente in der Bibliothek zu erstellen, zu bearbeiten und zu löschen.

> [!NOTE]
> Wir haben uns noch nicht damit befasst, wie bestimmte Routen auf authentifizierte oder autorisierte Benutzer beschränkt werden können, sodass zu diesem Zeitpunkt jeder Benutzer Änderungen an der Datenbank vornehmen kann.

### HTML-Formulare

Zunächst eine kurze Übersicht über [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms). Betrachten Sie ein einfaches HTML-Formular mit einem einzigen Textfeld zur Eingabe des Namens eines "Teams" und dem dazugehörigen Label:

![Einfaches Namensfeld-Beispiel in HTML-Formular](form_example_name_field.png)

Das Formular wird in HTML als eine Sammlung von Elementen innerhalb der `<form>…</form>`-Tags definiert und enthält mindestens ein `input`-Element vom Typ `type="submit"`.

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

Während wir hier nur ein (Text-)Feld zur Eingabe des Teamnamens eingefügt haben, kann ein Formular _beliebig viele_ andere Eingabeelemente und die zugehörigen Labels enthalten. Das `type`-Attribut des Feldes definiert, welche Art von Widget angezeigt wird. Der `name` und die `id` des Feldes werden verwendet, um das Feld in JavaScript/CSS/HTML zu identifizieren, während `value` den Anfangswert für das Feld definiert, wenn es zuerst angezeigt wird. Das passende Team-Label wird mit dem `label`-Tag angegeben (siehe "Name eingeben" oben), mit einem `for`-Feld, das den `id`-Wert des zugehörigen `input`-Elements enthält.

Das `submit`-Eingabeelement wird standardmäßig als Schaltfläche angezeigt—diese kann vom Benutzer gedrückt werden, um die von den anderen Eingabeelementen enthaltenen Daten an den Server zu übertragen (in diesem Fall nur das `team_name`). Die Formularattribute definieren die HTTP-`method`, die verwendet wird, um die Daten zu senden, und das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource/URL, wohin Daten zur Verarbeitung gesendet werden sollen, wenn das Formular übermittelt wird. Wenn dies nicht festgelegt (oder auf eine leere Zeichenkette gesetzt) wird, wird das Formular an die aktuelle Seiten-URL zurückgesendet.
- `method`: Die HTTP-Methode, mit der die Daten gesendet werden: `POST` oder `GET`.

  - Die `POST`-Methode sollte immer dann verwendet werden, wenn die Daten zu einer Änderung der Serverdatenbank führen, da dies gegenüber Angriffen durch Cross-Site-Fälschungsanforderungen resistenter gemacht werden kann.
  - Die `GET`-Methode sollte nur für Formulare verwendet werden, die keine Benutzerdaten ändern (z. B. ein Suchformular). Sie wird empfohlen, wenn Sie die URL bookmarken oder teilen möchten.

### Formularverarbeitungsprozess

Die Formularverarbeitung verwendet alle Techniken, die wir zur Anzeige von Informationen über unsere Modelle gelernt haben: die Route sendet unsere Anfrage an eine Controller-Funktion, die alle erforderlichen Datenbankaktionen ausführt, einschließlich des Lesens von Daten aus den Modellen, dann eine HTML-Seite generiert und zurückgibt. Was die Dinge komplizierter macht, ist, dass der Server auch in der Lage sein muss, die vom Benutzer bereitgestellten Daten zu verarbeiten und das Formular mit Fehlerinformationen erneut anzuzeigen, wenn Probleme auftreten.

Ein Prozessflussdiagramm zur Verarbeitung von Formulardatenanforderungen ist unten dargestellt, beginnend mit einer Anforderung für eine Seite, die ein Formular enthält (im Diagramm grün dargestellt):

![Webserver-Formularanforderungsverarbeitungsflussdiagramm. Der Browser fordert die Seite an, die das Formular enthält, indem er eine HTTP-GET-Anfrage sendet. Der Server erstellt ein leeres Standardformular und gibt es an den Benutzer zurück. Der Benutzer füllt das Formular aus oder aktualisiert es und übermittelt es per HTTP-POST mit Formulardaten. Der Server validiert die empfangenen Formulardaten. Sind die vom Benutzer bereitgestellten Daten ungültig, erstellt der Server das Formular mit den Benutzerdaten und Fehlermeldungen neu und sendet es an den Benutzer zurück, damit dieser es aktualisieren und über HTTP-Post erneut absenden kann. Wenn die Daten gültig sind, führt der Server die Aktionen auf den gültigen Daten aus und leitet den Benutzer zur Erfolgs-URL weiter.](web_server_form_handling.png)

Wie im Diagramm oben gezeigt, sind die wichtigsten Aufgaben, die der Formularverarbeitungscode ausführen muss:

1. Anzeige des Standardformulars, das erste Mal, wenn es vom Benutzer angefordert wird.

   - Das Formular kann leere Felder enthalten (z.B. wenn Sie einen neuen Datensatz erstellen) oder es kann mit Anfangswerten vorausgefüllt sein (z.B. wenn Sie einen Datensatz ändern oder nützliche Standardwerte haben).

2. Empfang von Daten, die vom Benutzer übermittelt wurden, normalerweise in einer HTTP-`POST`-Anfrage.
3. Validieren und Bereinigen der Daten.
4. Falls irgendwelche Daten ungültig sind, erneute Anzeige des Formulars—diesmal mit allen vom Benutzer ausgefüllten Werten und Fehlermeldungen für die Problemfelder.
5. Wenn alle Daten gültig sind, die erforderlichen Aktionen ausführen (z.B. die Daten in der Datenbank speichern, eine Benachrichtigungs-E-Mail senden, das Ergebnis einer Suche zurückgeben, eine Datei hochladen, usw.)
6. Sobald alle Aktionen abgeschlossen sind, den Benutzer auf eine andere Seite weiterleiten.

Formularverarbeitungscode wird oft unter Verwendung einer `GET`-Route für die anfängliche Anzeige des Formulars und einer `POST`-Route zum gleichen Pfad für die Validierung und Verarbeitung der Formulardaten implementiert. Dies ist der Ansatz, der in diesem Tutorial verwendet wird.

Express selbst bietet keine spezielle Unterstützung für Formularbearbeitungsoperationen, aber es kann Middleware verwenden, um `POST`- und `GET`-Parameter aus dem Formular zu verarbeiten und deren Werte zu validieren/bereinigen.

### Validierung und Bereinigung

Bevor die Daten aus einem Formular gespeichert werden, müssen sie validiert und bereinigt werden:

- Validierung überprüft, ob eingegebene Werte für jedes Feld geeignet sind (sich im richtigen Bereich befinden, das richtige Format haben, usw.) und ob für alle erforderlichen Felder Werte bereitgestellt wurden.
- Bereinigung entfernt/ersetzt Zeichen in den Daten, die möglicherweise verwendet werden könnten, um bösartigen Inhalt an den Server zu senden.

Für dieses Tutorial werden wir das beliebte [express-validator](https://www.npmjs.com/package/express-validator) Modul verwenden, um sowohl die Validierung als auch die Bereinigung unserer Formulardaten durchzuführen.

#### Installation

Installieren Sie das Modul, indem Sie den folgenden Befehl im Stammverzeichnis des Projekts ausführen.

```bash
npm install express-validator
```

#### Verwendung von express-validator

> [!NOTE]
> Der [express-validator](https://express-validator.github.io/docs/#basic-guide) Leitfaden auf GitHub bietet einen guten Überblick über die API. Wir empfehlen Ihnen, diesen zu lesen, um eine Vorstellung über alle seine Möglichkeiten zu erhalten (einschließlich der Verwendung von [Schema-Validierung](https://express-validator.github.io/docs/guides/schema-validation/) und [Erstellen benutzerdefinierter Validatoren](https://express-validator.github.io/docs/guides/customizing/#custom-validators-and-sanitizers)). Im Folgenden behandeln wir nur einen Unterbereich, der für die _LocalLibrary_ nützlich ist.

Um den Validator in unseren Controllern zu verwenden, geben wir die speziellen Funktionen an, die wir aus dem [express-validator](https://www.npmjs.com/package/express-validator) Modul importieren möchten, wie unten gezeigt:

```js
const { body, validationResult } = require("express-validator");
```

Es gibt viele verfügbare Funktionen, mit denen Sie Daten aus Anforderungsparametern, Body, Headern, Cookies usw. überprüfen und bereinigen können, oder alle auf einmal. Für dieses Tutorial werden wir hauptsächlich `body` und `validationResult` verwenden (wie "erforderlich" oben).

Die Funktionen sind wie folgt definiert:

- [`body(fields, message)`](https://express-validator.github.io/docs/api/check/#body): Gibt eine Gruppe von Feldern im Anforderungskörper (einem `POST`-Parameter) zur Validierung und/oder Bereinigung zusammen mit einer optionalen Fehlermeldung an, die angezeigt werden kann, wenn die Tests fehlschlagen. Die Validierungs- und Bereinigungskriterien werden zur `body()`-Methode verkettet.

  Beispielsweise definiert die folgende Zeile zuerst, dass wir das Feld "name" überprüfen und dass ein Validierungsfehler eine Fehlermeldung "Empty name" festlegen wird. Dann rufen wir die Bereinigungsmethode `trim()` auf, um Leerzeichen vom Anfang und Ende des Strings zu entfernen, und dann `isLength()`, um zu überprüfen, dass der resultierende String nicht leer ist. Schließlich rufen wir `escape()` auf, um HTML-Zeichen aus der Variablen zu entfernen, die möglicherweise in JavaScript Cross-Site Scripting-Angriffen verwendet werden.

  ```js
  [
    // …
    body("name", "Empty name").trim().isLength({ min: 1 }).escape(),
    // …
  ];
  ```

  Dieser Test überprüft, ob das Altersfeld ein gültiges Datum ist und verwendet `optional()`, um anzugeben, dass Null und leere Strings die Validierung nicht zum Scheitern bringen werden.

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

  Sie können auch verschiedene Validatoren verketten und Nachrichten hinzufügen, die angezeigt werden, wenn die vorhergehenden Validatoren fehlschlagen.

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

- [`validationResult(req)`](https://express-validator.github.io/docs/api/validation-result/#validationresult): Führt die Validierung durch und macht Fehler in Form eines `validation`-Ergebnisobjekts verfügbar. Dies wird in einem separaten Callback wie folgt aufgerufen:

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

  Wir verwenden die `isEmpty()`-Methode des Validierungsergebnisses, um zu überprüfen, ob es Fehler gab, und die `array()`-Methode, um die Menge der Fehlermeldungen zu erhalten. Weitere Informationen finden Sie im [Abschnitt zur Fehlerbehandlung](https://express-validator.github.io/docs/guides/getting-started/#handling-validation-errors).

Die Validierungs- und Bereinigungsketten sind Middleware, die an den Express-Routen-Handler übergeben werden sollten (wir machen das indirekt über den Controller). Wenn die Middleware ausgeführt wird, wird jeder Validator/Bereiniger in der angegebenen Reihenfolge ausgeführt.

Wir werden einige echte Beispiele behandeln, wenn wir die _LocalLibrary_-Formulare unten implementieren.

### Formular-Design

Viele der Modelle in der Bibliothek sind miteinander verbunden/abhängig—zum Beispiel erfordert ein `Book` einen `Author` und kann auch ein oder mehrere `Genres` haben. Dies wirft die Frage auf, wie wir den Fall handhaben sollten, wenn ein Benutzer:

- Ein Objekt erstellen möchte, wenn seine zugehörigen Objekte noch nicht existieren (zum Beispiel ein Buch, bei dem das Autor-Objekt noch nicht definiert wurde).
- Ein Objekt löschen möchte, das noch von einem anderen Objekt verwendet wird (zum Beispiel ein `Genre`, das noch von einem `Book` verwendet wird).

Für dieses Projekt vereinfachen wir die Implementierung, indem wir festlegen, dass ein Formular nur:

- Ein Objekt unter Verwendung bereits vorhandener Objekte erstellen kann (Benutzer müssen also alle erforderlichen `Author`- und `Genre`-Instanzen erstellen, bevor sie versuchen, ein `Book`-Objekt zu erstellen).
- Ein Objekt löschen kann, wenn es nicht von anderen Objekten referenziert wird (also können Sie zum Beispiel kein `Book` löschen, bis alle zugehörigen `BookInstance`-Objekte gelöscht wurden).

> [!NOTE]
> Eine flexiblere Implementierung könnte es ermöglichen, abhängige Objekte beim Erstellen eines neuen Objekts zu erstellen und jedes Objekt jederzeit zu löschen (zum Beispiel durch Löschen abhängiger Objekte oder durch Entfernen von Referenzen auf das gelöschte Objekt aus der Datenbank).

### Routen

Um unseren Formularverarbeitungscode zu implementieren, benötigen wir zwei Routen, die dasselbe URL-Muster haben. Die erste (`GET`)-Route wird verwendet, um ein neues leeres Formular zur Erstellung des Objekts anzuzeigen. Die zweite Route (`POST`) wird zur Validierung der vom Benutzer eingegebenen Daten und zum Speichern der Informationen sowie zum Weiterleiten zur Detailseite (bei gültigen Daten) oder zur erneuten Anzeige des Formulars mit Fehlern (bei ungültigen Daten) verwendet.

Wir haben die Routen für die Erstellungsseiten aller unserer Modelle bereits in **/routes/catalog.js** erstellt (im [vorherigen Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes)). Zum Beispiel sind die Genre-Routen unten gezeigt:

```js
// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", genre_controller.genre_create_get);

// POST request for creating Genre.
router.post("/genre/create", genre_controller.genre_create_post);
```

## Express Formulare Unterartikel

Die folgenden Unterartikel führen uns durch den Prozess des Hinzufügens der erforderlichen Formulare zu unserer Beispielanwendung. Sie müssen jeden der Artikel lesen und durcharbeiten, bevor Sie zum nächsten übergehen.

1. [Genre-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form) — Definition einer Seite zur Erstellung von `Genre`-Objekten.
2. [Author-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form) — Definition einer Seite zur Erstellung von `Author`-Objekten.
3. [Buch-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form) — Definition einer Seite/eines Formulars zur Erstellung von `Book`-Objekten.
4. [Buchinstanz-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_BookInstance_form) — Definition einer Seite/eines Formulars zur Erstellung von `BookInstance`-Objekten.
5. [Author-Formular löschen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Delete_author_form) — Definition einer Seite zum Löschen von `Author`-Objekten.
6. [Buch-Formular aktualisieren](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form) — Definition einer Seite zur Aktualisierung von `Book`-Objekten.

## Stellen Sie sich der Herausforderung

Implementieren Sie die Löschseiten für die `Book`, `BookInstance` und `Genre` Modelle, indem Sie sie von den zugehörigen Detailseiten genauso verlinken wie unsere _Author delete_ Seite. Die Seiten sollten dem gleichen Designansatz folgen:

- Falls es Referenzen auf das Objekt von anderen Objekten gibt, sollten diese anderen Objekte zusammen mit einem Hinweis angezeigt werden, dass dieser Datensatz nicht gelöscht werden kann, bis die aufgelisteten Objekte gelöscht wurden.
- Wenn es keine weiteren Referenzen auf das Objekt gibt, sollte die Ansicht auffordern, es zu löschen. Wenn der Benutzer die **Löschen**-Schaltfläche drückt, sollte der Datensatz gelöscht werden.

Einige Tipps:

- Das Löschen eines `Genre` ist genau wie das Löschen eines `Author`, da beide Objekte Abhängigkeiten von `Book` sind (Sie können das Objekt also nur löschen, wenn die zugehörigen Bücher gelöscht werden).
- Das Löschen eines `Book` ist ähnlich, da Sie zuerst sicherstellen müssen, dass keine zugehörigen `BookInstance`-Objekte vorhanden sind.
- Das Löschen eines `BookInstance` ist am einfachsten, da es keine abhängigen Objekte gibt. In diesem Fall können Sie einfach den zugehörigen Datensatz finden und löschen.

Implementieren Sie die Aktualisierungsseiten für die `BookInstance`, `Author` und `Genre` Modelle, indem Sie sie von den zugehörigen Detailseiten genauso verlinken wie unsere _Book update_ Seite.

Einige Tipps:

- Die _Book update page_, die wir gerade implementiert haben, ist die schwierigste! Die gleichen Muster können für die Aktualisierungsseiten der anderen Objekte verwendet werden.
- Die Felder für das Geburtsdatum und Todesdatum des `Author` und das Fälligkeitsdatum des `BookInstance` haben nicht das richtige Format, um in das Dateneingabefeld auf dem Formular eingetragen zu werden (es erfordert Daten im Format "YYYY-MM-DD"). Die einfachste Möglichkeit, dies zu umgehen, ist die Definition einer neuen virtuellen Eigenschaft für die Daten, die die Daten entsprechend formatiert, und dann dieses Feld in den zugehörigen Ansichts-Templates zu verwenden.
- Wenn Sie stecken bleiben, gibt es Beispiele für die Aktualisierungsseiten im [Beispiel hier](https://github.com/mdn/express-locallibrary-tutorial).

## Zusammenfassung

_Express_, node und Drittanbieter-Pakete auf npm bieten alles, was Sie benötigen, um Formulare zu Ihrer Website hinzuzufügen. In diesem Artikel haben Sie gelernt, wie Sie Formulare mit _Pug_ erstellen, Eingaben mit _express-validator_ validieren und bereinigen und Datensätze in der Datenbank hinzufügen, löschen und ändern.

Sie sollten nun verstehen, wie Sie grundlegende Formulare und Formularbearbeitungscode zu Ihren eigenen node-Websites hinzufügen können!

## Siehe auch

- [express-validator](https://www.npmjs.com/package/express-validator) (npm docs).

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
