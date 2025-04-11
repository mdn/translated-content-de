---
title: "Express Tutorial Teil 6: Arbeiten mit Formularen"
short-title: "6: Arbeiten mit Formularen"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Express unter Verwendung von Pug arbeiten. Insbesondere werden wir besprechen, wie man Formulare schreibt, um Dokumente in der Datenbank der Website zu erstellen, zu aktualisieren und zu löschen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data">Express Tutorial Teil 5: Anzeigen von Bücherei-Daten</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verständnis, wie man Formulare schreibt, um Daten von Benutzern abzurufen und die Datenbank mit diesen Daten zu aktualisieren.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Ein [HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms) ist eine Gruppe von einem oder mehreren Feldern/Widgets auf einer Webseite, die zur Sammlung von Informationen von Nutzern zur Einreichung an einen Server verwendet werden können. Formulare sind ein flexibler Mechanismus zur Sammlung von Benutzereingaben, da es geeignete Formulareingaben für viele verschiedene Datentypen gibt—Textfelder, Kontrollkästchen, Optionsfelder, Datumsauswahlen etc. Formulare sind auch eine relativ sichere Methode, um Daten mit dem Server zu teilen, da sie es ermöglichen, Daten in `POST`-Anfragen mit Schutz vor Cross-Site-Request-Forgery zu senden.

Arbeiten mit Formularen kann kompliziert sein! Entwickler müssen HTML für das Formular schreiben, eingegebene Daten auf dem Server (und möglicherweise auch im Browser) validieren und ordnungsgemäß bereinigen, das Formular mit Fehlermeldungen erneut senden, um Benutzer auf ungültige Felder hinzuweisen, die Daten verarbeiten, wenn diese erfolgreich übermittelt wurden, und schließlich dem Benutzer auf irgendeine Weise antworten, um den Erfolg anzuzeigen.

In diesem Tutorial zeigen wir, wie die oben genannten Operationen in _Express_ durchgeführt werden können. Unterwegs werden wir die Website _LocalLibrary_ erweitern, um Benutzern das Erstellen, Bearbeiten und Löschen von Elementen aus der Bibliothek zu ermöglichen.

> [!NOTE]
> Wir haben noch nicht besprochen, wie bestimmte Routen auf authentifizierte oder autorisierte Benutzer beschränkt werden können, sodass zu diesem Zeitpunkt jeder Benutzer Änderungen an der Datenbank vornehmen kann.

### HTML-Formulare

Zuerst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms). Betrachten Sie ein einfaches HTML-Formular, mit einem einzigen Textfeld zur Eingabe des Namens eines Teams und dem zugehörigen Label:

![Einfaches Namensfeld im HTML-Formular](form_example_name_field.png)

Das Formular wird in HTML als Sammlung von Elementen innerhalb der `<form>…</form>`-Tags definiert und enthält mindestens ein `input`-Element vom Typ `submit`.

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

Während wir hier nur ein (Text-)Feld zur Eingabe des Teamnamens eingefügt haben, kann ein Formular beliebig viele andere Eingabeelemente und ihre zugehörigen Labels enthalten. Das `type`-Attribut des Feldes definiert, welche Art von Widget angezeigt wird. Der `name` und `id` des Feldes werden verwendet, um das Feld in JavaScript/CSS/HTML zu identifizieren, während `value` den Anfangswert für das Feld beim ersten Anzeigen definiert. Das entsprechende Team-Label wird mit dem `label`-Tag spezifiziert (siehe „Namen eingeben“ oben), mit einem `for`-Feld, das den `id`-Wert des zugehörigen `input` enthält.

Die `submit`-Eingabe wird standardmäßig als Button angezeigt—diese kann vom Benutzer gedrückt werden, um die von den anderen Eingabeelementen enthaltenen Daten an den Server hochzuladen (in diesem Fall nur der `team_name`). Die Formularattribute definieren die HTTP-`Methode`, die verwendet wird, um die Daten zu senden, und das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource/URL, an die Daten zur Verarbeitung gesendet werden sollen, wenn das Formular abgeschickt wird. Wenn dies nicht gesetzt ist (oder auf eine leere Zeichenfolge gesetzt ist), wird das Formular zurück an die aktuelle Seite-URL eingereicht.
- `method`: Die HTTP-Methode, die verwendet wird, um die Daten zu senden: `POST` oder `GET`.

  - Die `POST`-Methode sollte immer verwendet werden, wenn die Daten eine Änderung an der Datenbank des Servers zur Folge haben, da dies widerstandsfähiger gegen Cross-Site-Request-Forgery-Angriffe gemacht werden kann.
  - Die `GET`-Methode sollte nur für Formulare verwendet werden, die keine Benutzerdaten ändern (z.B. ein Suchformular). Sie wird empfohlen, wenn Sie die URL mit einem Lesezeichen versehen oder teilen möchten.

### Formularverarbeitungsprozess

Die Formularverarbeitung verwendet alle Techniken, die wir gelernt haben, um Informationen über unsere Modelle anzuzeigen: Die Route sendet unsere Anfrage an eine Controller-Funktion, die alle erforderlichen Datenbankaktionen durchführt, einschließlich das Lesen von Daten aus den Modellen, und erzeugt und gibt dann eine HTML-Seite zurück. Was die Sache komplizierter macht, ist, dass der Server auch in der Lage sein muss, die vom Benutzer bereitgestellten Daten zu verarbeiten und das Formular mit Fehlerinformationen erneut anzuzeigen, falls es Probleme gibt.

Ein Prozessflussdiagramm zur Verarbeitung von Formularanfragen ist unten dargestellt, beginnend mit einer Anfrage für eine Seite, die ein Formular beinhaltet (im Diagramm in grün dargestellt):

![Webserver-Formularanfrage-Verarbeitungsflussdiagramm. Browseranfragen für die Seite, die das Formular enthält, indem eine HTTP-GET-Anfrage gesendet wird. Der Server erstellt ein leeres Standardformular und gibt es an den Benutzer zurück. Der Benutzer füllt das Formular aus oder aktualisiert es und schickt es über HTTP POST mit Formulardaten. Der Server validiert die empfangenen Formulardaten. Wenn die vom Benutzer bereitgestellten Daten ungültig sind, erstellt der Server das Formular mit den Benutzereingaben und Fehlermeldungen neu und sendet es zur Aktualisierung zurück an den Benutzer, der es per HTTP POST erneut sendet und erneut validiert. Wenn die Daten gültig sind, führt der Server Aktionen auf den gültigen Daten durch und leitet den Benutzer zu der Erfolgs-URL weiter.](web_server_form_handling.png)

Wie im obenstehenden Diagramm gezeigt, muss der Formularverarbeitungscode folgende Hauptaufgaben bewältigen:

1. Anzeigen des Standardformulars das erste Mal, wenn es vom Benutzer angefordert wird.

   - Das Formular kann leere Felder enthalten (z.B. wenn Sie einen neuen Datensatz erstellen), oder es kann mit Anfangswerten vorgefüllt sein (z.B. wenn Sie einen Datensatz ändern oder nützliche Standardanfangswerte haben).

2. Daten empfangen, die vom Benutzer übermittelt wurden, normalerweise in einer HTTP-`POST`-Anfrage.
3. Validieren und Bereinigen der Daten.
4. Wenn Daten ungültig sind, das Formular erneut anzeigen—diesmal mit allen vom Benutzer ausgefüllten Werten und Fehlermeldungen für die Problemfelder.
5. Wenn alle Daten gültig sind, führen Sie die erforderlichen Aktionen aus (z.B. speichern Sie die Daten in der Datenbank, senden Sie eine Benachrichtigungs-E-Mail, geben Sie das Ergebnis einer Suche zurück, laden Sie eine Datei hoch usw.)
6. Sobald alle Aktionen abgeschlossen sind, leiten Sie den Benutzer auf eine andere Seite weiter.

Oft wird der Formularverarbeitungscode mit einem `GET`-Route für die erste Anzeige des Formulars und einer `POST`-Route zum selben Pfad implementiert, um die Validierung und Verarbeitung von Formulardaten zu handhaben. Dies ist der Ansatz, den wir in diesem Tutorial verwenden werden.

Express selbst bietet keine spezifische Unterstützung für Formularverarbeitungsoperationen, aber es kann Middleware verwenden, um `POST`- und `GET`-Parameter aus dem Formular zu verarbeiten und deren Werte zu validieren/bereinigen.

### Validierung und Bereinigung

Bevor die Daten aus einem Formular gespeichert werden, müssen sie validiert und bereinigt werden:

- Die Validierung überprüft, ob die eingegebenen Werte für jedes Feld geeignet sind (im richtigen Bereich, Format usw.) und ob Werte für alle erforderlichen Felder bereitgestellt wurden.
- Die Bereinigung entfernt/ersetzt Zeichen in den Daten, die potenziell verwendet werden könnten, um schädliche Inhalte an den Server zu senden.

Für dieses Tutorial werden wir das beliebte [express-validator](https://www.npmjs.com/package/express-validator)-Modul verwenden, um sowohl die Validierung als auch die Bereinigung unserer Formulardaten auszuführen.

#### Installation

Installieren Sie das Modul, indem Sie den folgenden Befehl im Stammverzeichnis des Projekts ausführen.

```bash
npm install express-validator
```

#### Verwendung von express-validator

> [!NOTE]
> Der [express-validator](https://express-validator.github.io/docs/#basic-guide)-Leitfaden auf GitHub bietet einen guten Überblick über die API. Wir empfehlen, diesen zu lesen, um einen Überblick über alle Möglichkeiten zu erhalten (einschließlich der Verwendung von [Schema-Validierung](https://express-validator.github.io/docs/guides/schema-validation/) und [Erstellung benutzerdefinierter Validatoren](https://express-validator.github.io/docs/guides/customizing/#custom-validators-and-sanitizers)). Unten behandeln wir nur eine Teilmenge, die für die _LocalLibrary_ nützlich ist.

Um den Validator in unseren Controllern zu verwenden, geben wir die speziellen Funktionen an, die wir aus dem [express-validator](https://www.npmjs.com/package/express-validator)-Modul importieren möchten, wie unten gezeigt:

```js
const { body, validationResult } = require("express-validator");
```

Es gibt viele verfügbare Funktionen, die es Ihnen ermöglichen, Daten aus Anfrageparametern, -körpern, -headern, -cookies usw. oder allen auf einmal zu überprüfen und zu bereinigen. In diesem Tutorial werden wir hauptsächlich `body` und `validationResult` verwenden (wie oben als „erforderlich“ angegeben).

Die Funktionen sind wie folgt definiert:

- [`body(fields, message)`](https://express-validator.github.io/docs/api/check/#body): Gibt eine Reihe von Feldern im Anforderungskörper (ein `POST`-Parameter) an, die validiert und/oder bereinigt werden sollen, zusammen mit einer optionalen Fehlermeldung, die angezeigt werden kann, wenn der Test fehlschlägt. Die Validierungs- und Bereinigungskriterien sind der Methode `body()` angekettet.

  Zum Beispiel definiert die folgende Zeile zunächst, dass wir das "name"-Feld überprüfen und dass ein Validierungsfehler eine Fehlermeldung "Leerer Name" festlegt. Wir rufen dann die Bereinigungsmethode `trim()` auf, um Leerzeichen vom Anfang und Ende der Zeichenkette zu entfernen, und dann `isLength()`, um zu überprüfen, dass die resultierende Zeichenkette nicht leer ist. Schließlich rufen wir `escape()` auf, um HTML-Zeichen aus der Variablen zu entfernen, die in JavaScript-Cross-Site-Scripting-Angriffen verwendet werden könnten.

  ```js
  [
    // …
    body("name", "Empty name").trim().isLength({ min: 1 }).escape(),
    // …
  ];
  ```

  Dieser Test überprüft, ob das Altersfeld ein gültiges Datum ist, und verwendet `optional()`, um anzugeben, dass null und leere Zeichenfolgen die Validierung nicht fehlschlagen lassen.

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

  Sie können auch verschiedene Validatoren aneinanderketten und Nachrichten hinzufügen, die angezeigt werden, wenn die vorherigen Validatoren false sind.

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

- [`validationResult(req)`](https://express-validator.github.io/docs/api/validation-result/#validationresult): Führt die Validierung aus und macht Fehler in Form eines `validation`-Ergebnisobjekts verfügbar. Dies wird in einem separaten Callback aufgerufen, wie unten gezeigt:

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

  Wir verwenden die Methode `isEmpty()` des Validierungsergebnisses, um zu überprüfen, ob es Fehler gab, und die Methode `array()`, um die Menge der Fehlermeldungen zu erhalten. Weitere Informationen finden Sie im Abschnitt [Handling validation section](https://express-validator.github.io/docs/guides/getting-started/#handling-validation-errors).

Die Validierungs- und Bereinigungsketten sind Middleware, die an den Express-Routen-Handler übergeben werden sollten (wir tun dies indirekt, über den Controller). Wenn die Middleware ausgeführt wird, wird jeder Validator/Bereiniger in der angegebenen Reihenfolge ausgeführt.

Wir werden einige echte Beispiele behandeln, wenn wir die _LocalLibrary_-Formulare unten implementieren.

### Formularentwurf

Viele der Modelle in der Bibliothek sind miteinander verbunden/abhängig—zum Beispiel erfordert ein `Book` einen `Author` und kann auch ein oder mehrere `Genres` haben. Dies wirft die Frage auf, wie wir den Fall handhaben sollten, dass ein Benutzer Folgendes wünscht:

- Ein Objekt erstellen, wenn seine zugehörigen Objekte noch nicht existieren (zum Beispiel ein Buch, bei dem das Autorenobjekt nicht definiert ist).
- Ein Objekt löschen, das noch von einem anderen Objekt verwendet wird (so zum Beispiel das Löschen eines `Genre`, das noch von einem `Book` verwendet wird).

Für dieses Projekt vereinfachen wir die Implementierung, indem wir festlegen, dass ein Formular nur:

- Ein Objekt mit vorhandenen Objekten erstellen kann (Benutzer müssen also alle erforderlichen `Author`- und `Genre`-Instanzen erstellen, bevor sie versuchen, `Book`-Objekte zu erstellen).
- Ein Objekt gelöscht werden kann, wenn es nicht von anderen Objekten referenziert wird (Sie können also beispielsweise kein `Book` löschen, bevor alle zugehörigen `BookInstance`-Objekte gelöscht wurden).

> [!NOTE]
> Eine flexiblere Implementierung könnte es Ihnen ermöglichen, die abhängigen Objekte bei der Erstellung eines neuen Objekts zu erstellen und jedes Objekt jederzeit zu löschen (zum Beispiel durch Löschen abhängiger Objekte oder Entfernen von Verweisen auf das gelöschte Objekt aus der Datenbank).

### Routen

Um unseren Formularverarbeitungscode zu implementieren, benötigen wir zwei Routen, die dasselbe URL-Muster haben. Die erste (`GET`)-Route wird verwendet, um ein neues leeres Formular zum Erstellen des Objekts anzuzeigen. Die zweite Route (`POST`) wird verwendet, um die vom Benutzer eingegebenen Daten zu validieren und dann die Informationen zu speichern und auf die Detailseite umzuleiten (wenn die Daten gültig sind) oder das Formular mit Fehlern erneut anzuzeigen (wenn die Daten ungültig sind).

Wir haben die Routen für alle Erstellungsseiten unseres Modells bereits in **/routes/catalog.js** (in einem [früheren Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes)) erstellt. Zum Beispiel sind die Genre-Routen unten gezeigt:

```js
// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", genre_controller.genre_create_get);

// POST request for creating Genre.
router.post("/genre/create", genre_controller.genre_create_post);
```

## Express Formulare Unterartikel

Die folgenden Unterartikel führen uns durch den Prozess des Hinzufügens der erforderlichen Formulare zu unserer Beispielanwendung. Sie müssen jeden in der Reihenfolge lesen und durcharbeiten, bevor Sie zum nächsten übergehen.

1. [Create Genre form](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form) — Definieren einer Seite zur Erstellung von `Genre`-Objekten.
2. [Create Author form](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form) — Definieren einer Seite zur Erstellung von `Author`-Objekten.
3. [Create Book form](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form) — Definieren einer Seite/eines Formulars zur Erstellung von `Book`-Objekten.
4. [Create BookInstance form](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_BookInstance_form) — Definieren einer Seite/eines Formulars zur Erstellung von `BookInstance`-Objekten.
5. [Delete Author form](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Delete_author_form) — Definieren einer Seite zum Löschen von `Author`-Objekten.
6. [Update Book form](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form) — Definieren einer Seite zur Aktualisierung von `Book`-Objekten.

## Fordern Sie sich selbst heraus

Implementieren Sie die Löschseiten für die Modelle `Book`, `BookInstance` und `Genre`, und verlinken Sie sie von den zugehörigen Detailseiten genauso wie unsere _Author delete_-Seite. Die Seiten sollten demselben Designansatz folgen:

- Wenn es Verweise auf das Objekt von anderen Objekten gibt, sollten diese anderen Objekte zusammen mit einem Hinweis angezeigt werden, dass dieser Datensatz nicht gelöscht werden kann, bis die aufgelisteten Objekte gelöscht wurden.
- Wenn es keine weiteren Verweise auf das Objekt gibt, sollte die Ansicht auffordern, es zu löschen. Wenn der Benutzer die **Delete**-Schaltfläche drückt, sollte der Datensatz gelöscht werden.

Einige Tipps:

- Das Löschen eines `Genre` ist wie das Löschen eines `Author`, da beide Objekte Abhängigkeiten von `Book` sind (in beiden Fällen können Sie das Objekt nur löschen, wenn die zugehörigen Bücher gelöscht sind).
- Das Löschen eines `Book` ist ebenfalls ähnlich, da Sie zuerst überprüfen müssen, ob es keine zugehörigen `BookInstances` gibt.
- Das Löschen eines `BookInstance` ist am einfachsten, weil es keine abhängigen Objekte gibt. In diesem Fall können Sie einfach den zugehörigen Datensatz finden und löschen.

Implementieren Sie die Aktualisierungsseiten für die Modelle `BookInstance`, `Author` und `Genre` und verlinken Sie sie von den zugehörigen Detailseiten genauso wie unsere _Book update_-Seite.

Einige Tipps:

- Die _Book update page_, die wir gerade implementiert haben, ist die schwierigste! Dieselben Muster können für die Aktualisierungsseiten der anderen Objekte verwendet werden.
- Die Felder `Author` Geburtsdatum und Todesdatum sowie das `BookInstance` due_date-Feld haben das falsche Format, um in das Datums-Eingabefeld im Formular eingegeben zu werden (es erfordert Daten im Format "YYYY-MM-DD"). Der einfachste Weg, dies zu umgehen, ist die Definition einer neuen virtuellen Eigenschaft für die Daten, die die Daten entsprechend formatiert, und anschließend die Verwendung dieses Felds in den zugehörigen View-Templates.
- Wenn Sie steckenbleiben, gibt es Beispiele für die Aktualisierungsseiten [im Beispiel hier](https://github.com/mdn/express-locallibrary-tutorial).

## Zusammenfassung

_Express_, node und Drittanbieterpakete auf npm bieten alles, was Sie benötigen, um Ihrer Website Formulare hinzuzufügen. In diesem Artikel haben Sie gelernt, wie Sie Formulare mit _Pug_ erstellen, Eingaben mit _express-validator_ validieren und bereinigen und Datensätze in der Datenbank hinzufügen, löschen und ändern.

Sie sollten jetzt verstehen, wie man grundlegende Formulare und Formularverarbeitungscode zu Ihren eigenen Node-Websites hinzufügt!

## Siehe auch

- [express-validator](https://www.npmjs.com/package/express-validator) (npm-Dokumentation).

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
