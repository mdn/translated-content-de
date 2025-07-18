---
title: "Express Tutorial Teil 6: Arbeiten mit Formularen"
short-title: "6: Arbeiten mit Formularen"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Express unter Verwendung von Pug arbeiten. Insbesondere besprechen wir, wie man Formulare schreibt, um Dokumente in der Datenbank der Website zu erstellen, zu aktualisieren und zu löschen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Abschließen aller vorherigen Tutorial-Themen, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data">Express Tutorial Teil 5: Anzeigedaten der Bibliothek</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Verstehen, wie man Formulare schreibt, um Daten von Benutzern zu erhalten und die Datenbank mit diesen Daten zu aktualisieren.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Ein [HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms) ist eine Gruppe von einem oder mehreren Feldern/Widgets auf einer Webseite, die verwendet werden können, um Informationen von Benutzern zu sammeln und an einen Server zu übermitteln. Formulare sind ein flexibler Mechanismus zur Sammlung von Benutzereingaben, da es geeignete Formulareingaben für viele verschiedene Datentypen gibt—Textfelder, Kontrollkästchen, Optionsfelder, Datumsauswahlfelder usw. Formulare sind auch eine relativ sichere Methode, Daten mit dem Server zu teilen, da sie es uns ermöglichen, Daten in `POST`-Anfragen mit Schutz vor Cross-Site-Request-Forgery zu senden.

Die Arbeit mit Formularen kann kompliziert sein! Entwickler müssen HTML für das Formular schreiben, die eingegebenen Daten auf dem Server (und möglicherweise auch im Browser) validieren und richtig bereinigen, das Formular mit Fehlermeldungen erneut senden, um Benutzer über ungültige Felder zu informieren, die Daten bei erfolgreicher Übermittlung behandeln und schließlich dem Benutzer auf irgendeine Weise mitteilen, dass die Operation erfolgreich war.

In diesem Tutorial zeigen wir Ihnen, wie die oben genannten Vorgänge in _Express_ durchgeführt werden können. Gleichzeitig erweitern wir die _LocalLibrary_ Website, um Benutzern zu ermöglichen, Elemente in der Bibliothek zu erstellen, zu bearbeiten und zu löschen.

> [!NOTE]
> Wir haben noch nicht untersucht, wie bestimmte Routen auf authentifizierte oder autorisierte Benutzer beschränkt werden können, sodass zu diesem Zeitpunkt jeder Benutzer Änderungen an der Datenbank vornehmen kann.

### HTML-Formulare

Zunächst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms). Betrachten Sie ein einfaches HTML-Formular mit einem einzigen Textfeld zum Eingeben des Namens eines "Teams" und des zugehörigen Labels:

![Einfaches Namensfeld-Beispiel in einem HTML-Formular](form_example_name_field.png)

Das Formular wird in HTML als Sammlung von Elementen innerhalb von `<form>…</form>`-Tags definiert, die mindestens ein `input`-Element vom Typ `submit` enthalten.

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

Hier haben wir nur ein (Text-)Feld zum Eingeben des Teamnamens aufgenommen, ein Formular _kann_ jedoch eine beliebige Anzahl anderer Eingabeelemente und der zugehörigen Labels enthalten. Das Attribut `type` des Feldes definiert, welche Art von Widget angezeigt wird. Der `name` und die `id` des Feldes werden verwendet, um das Feld in JavaScript/CSS/HTML zu identifizieren, während `value` den Anfangswert für das Feld definiert, wenn es zuerst angezeigt wird. Das passende Team-Label wird mit dem `label`-Tag spezifiziert (siehe "Enter name" oben), wobei ein `for`-Feld den `id`-Wert des zugehörigen `input` enthält.

Das `submit`-Input wird standardmäßig als Button angezeigt—dieser kann vom Benutzer gedrückt werden, um die von den anderen Eingabeelementen enthaltenen Daten an den Server hochzuladen (in diesem Fall nur das `team_name`). Die Form Attribute definieren die HTTP-`Methode`, die zum Senden der Daten verwendet wird, und das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource/URL, wohin Daten zur Verarbeitung gesendet werden, wenn das Formular übermittelt wird. Wenn dies nicht gesetzt ist (oder auf einen leeren String gesetzt ist), wird das Formular zurück an die aktuelle Seite-URL gesendet.
- `method`: Die HTTP-Methode, die zum Senden der Daten verwendet wird: `POST` oder `GET`.
  - Die `POST`-Methode sollte immer verwendet werden, wenn die Daten zu einer Änderung in der Datenbank des Servers führen, da dies gegen Cross-Site-Forgery-Request-Angriffe widerstandsfähiger gemacht werden kann.
  - Die `GET`-Methode sollte nur für Formulare verwendet werden, die keine Benutzerdaten ändern (z.B. ein Suchformular). Sie wird empfohlen, wenn Sie die URL bookmarken oder teilen möchten.

### Formularbearbeitungsprozess

Die Formularbearbeitung verwendet alle Techniken, die wir gelernt haben, um Informationen über unsere Modelle anzuzeigen: die Route sendet unsere Anfrage an eine Controller-Funktion, die erforderliche Datenbankaktionen ausführt, einschließlich des Lesens von Daten aus den Modellen, dann eine HTML-Seite generiert und zurückgibt. Was die Dinge komplizierter macht, ist, dass der Server auch in der Lage sein muss, die vom Benutzer bereitgestellten Daten zu verarbeiten und das Formular mit Fehlerinformationen erneut anzuzeigen, wenn es Probleme gibt.

Ein Prozessablaufdiagramm für die Verarbeitung von Formularanfragen ist unten dargestellt, beginnend mit einer Anfrage nach einer Seite, die ein Formular enthält (in grün dargestellt):

![Webserver-Formularanfrage-Verarbeitungsflussdiagramm. Browseranfragen für die Seite, die das Formular enthält, indem eine HTTP-GET-Anfrage gesendet wird. Der Server erstellt ein leeres Standardformular und sendet es an den Benutzer. Der Benutzer füllt oder aktualisiert das Formular, übermittelt es per HTTP-POST mit Formulardaten. Der Server validiert die empfangenen Formulardaten. Wenn die vom Benutzer bereitgestellten Daten ungültig sind, erstellt der Server das Formular mit den vom Benutzer eingegebenen Daten und Fehlermeldungen neu und sendet es zur Aktualisierung zurück an den Benutzer, und dieser übermittelt es erneut per HTTP-POST, und es wird erneut validiert. Wenn die Daten gültig sind, führt der Server Aktionen auf den gültigen Daten aus und leitet den Benutzer zur Erfolgs-URL weiter.](web_server_form_handling.png)

Wie im Diagramm oben gezeigt, müssen die Hauptpunkte, die der Formularkode erledigen muss, folgende sein:

1. Zeigen Sie das Standardformular an, wenn es vom Benutzer zum ersten Mal angefordert wird.
   - Das Formular kann leere Felder (z.B. wenn Sie einen neuen Datensatz erstellen) enthalten, oder es kann mit anfänglichen Werten vorab ausgefüllt sein (z.B. wenn Sie einen Datensatz ändern oder nützliche Standardanfangswerte haben).

2. Empfangen der vom Benutzer übermittelten Daten, normalerweise in einer HTTP-`POST`-Anfrage.
3. Validieren und Bereinigen der Daten.
4. Wenn Daten ungültig sind, zeigen Sie das Formular erneut an—diesmal mit jeglichen vom Benutzer ausgefüllten Werten und Fehlermeldungen für die Problemfelder.
5. Wenn alle Daten gültig sind, führen Sie die erforderlichen Aktionen aus (z.B. Daten in der Datenbank speichern, Benachrichtigungs-E-Mail senden, das Ergebnis einer Suche zurückgeben, eine Datei hochladen, usw.)
6. Nachdem alle Aktionen abgeschlossen sind, leiten Sie den Benutzer auf eine andere Seite weiter.

Häufig wird der Formularkode mit einer `GET`-Route für die anfängliche Anzeige des Formulars und einer `POST`-Route zum gleichen Pfad für die Validierung und Verarbeitung der Formulardaten implementiert. Dies ist der Ansatz, der in diesem Tutorial verwendet wird.

Express selbst bietet keine spezifische Unterstützung für Formulareoperationen, kann jedoch Middleware verwenden, um `POST`- und `GET`-Parameter aus dem Formular zu verarbeiten und deren Werte zu validieren/bereinigen.

### Validierung und Bereinigung

Bevor die Daten aus einem Formular gespeichert werden, müssen sie validiert und bereinigt werden:

- Validierung überprüft, ob die eingegebenen Werte für jedes Feld angemessen sind (im richtigen Bereich, Format, usw.) und dass für alle erforderlichen Felder Werte angegeben wurden.
- Bereinigung entfernt/ersetzt Zeichen in den Daten, die möglicherweise zum Senden von schädlichem Inhalt an den Server verwendet werden könnten.

Für dieses Tutorial verwenden wir das beliebte [express-validator](https://www.npmjs.com/package/express-validator)-Modul, um sowohl die Validierung als auch die Bereinigung unserer Formulardaten durchzuführen.

#### Installation

Installieren Sie das Modul, indem Sie den folgenden Befehl im Stammverzeichnis des Projekts ausführen.

```bash
npm install express-validator
```

#### Verwendung von express-validator

> [!NOTE]
> Der [express-validator](https://express-validator.github.io/docs/#basic-guide)-Leitfaden auf GitHub bietet eine gute Übersicht über die API. Wir empfehlen, diesen zu lesen, um einen Überblick über alle Funktionen zu erhalten (einschließlich der Verwendung von [Schema-Validierung](https://express-validator.github.io/docs/guides/schema-validation/) und dem Erstellen benutzerdefinierter Validatoren](https://express-validator.github.io/docs/guides/customizing/#custom-validators-and-sanitizers)). Im Folgenden behandeln wir nur einen Teil, der für die _LocalLibrary_ nützlich ist.

Um den Validator in unseren Controllern zu verwenden, geben wir die speziellen Funktionen an, die wir aus dem [express-validator](https://www.npmjs.com/package/express-validator)-Modul importieren möchten, wie unten gezeigt:

```js
const { body, validationResult } = require("express-validator");
```

Es gibt viele verfügbare Funktionen, die es erlauben, Daten aus Anfrageparametern, -körpern, -headern, -cookies, usw. oder alle auf einmal zu überprüfen und zu bereinigen. Für dieses Tutorial verwenden wir hauptsächlich `body` und `validationResult` (wie oben in "required" gezeigt).

Die Funktionen sind wie folgt definiert:

- [`body(fields, message)`](https://express-validator.github.io/docs/api/check/#body): Gibt eine Reihe von Feldern im Anforderungstext (ein `POST`-Parameter) zur Validierung und/oder Bereinigung zusammen mit einer optionalen Fehlermeldung an, die angezeigt werden kann, wenn die Tests fehlschlagen. Die Validierungs- und Bereinigungskriterien werden als Verkettung an die `body()`-Methode angehängt.

  Zum Beispiel definiert die folgende Zeile, dass wir das "name"-Feld überprüfen und dass ein Validierungsfehler eine Fehlermeldung "Empty name" auslösen wird. Danach rufen wir die Bereinigungsmethode `trim()` auf, um Leerzeichen am Anfang und Ende des Strings zu entfernen, und dann `isLength()`, um sicherzustellen, dass der resultierende String nicht leer ist. Schließlich rufen wir `escape()` auf, um HTML-Zeichen aus der Variablen zu entfernen, die in JavaScript Cross-Site-Scripting-Angriffen verwendet werden könnten.

  ```js
  [
    // …
    body("name", "Empty name").trim().isLength({ min: 1 }).escape(),
    // …
  ];
  ```

  Dieser Test überprüft, ob das Altersfeld ein gültiges Datum ist, und verwendet `optional()`, um anzugeben, dass `null` und leere Strings die Validierung nicht fehlschlagen lassen.

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

  Sie können auch verschiedene Validatoren verändern und Meldungen hinzufügen, die angezeigt werden, wenn die vorhergehenden Validatoren falsch sind.

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

- [`validationResult(req)`](https://express-validator.github.io/docs/api/validation-result/#validationresult): Führt die Validierung durch, indem Fehler in Form eines `validation`-Ergebnisobjekts verfügbar gemacht werden. Dies wird in einem separaten Callback aufgerufen, wie unten gezeigt:

  ```js
  async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/errors messages.
      // Error messages can be returned in an array using `errors.array()`.
    } else {
      // Data from form is valid.
    }
  };
  ```

  Wir verwenden die Methode `isEmpty()` des Validierungsergebnisses, um zu prüfen, ob es Fehler gab, und die Methode `array()`, um die Fehlermeldungen abzurufen. Weitere Informationen finden Sie im Abschnitt [Fehlerbehandlung bei der Validierung](https://express-validator.github.io/docs/guides/getting-started/#handling-validation-errors).

Die Validierungs- und Bereinigungsketten sind Middleware, die an den Express-Route-Handler übergeben werden sollten (wir tun dies indirekt über den Controller). Wenn die Middleware ausgeführt wird, wird jeder Validator/Bereinigung in der angegebenen Reihenfolge ausgeführt.

Wir werden einige reale Beispiele sehen, wenn wir die _LocalLibrary_-Formulare unten umsetzen.

### Formulardesign

Viele der Modelle in der Bibliothek sind miteinander verbunden/abhängig—zum Beispiel erfordert ein `Book` einen `Author` und kann auch eines oder mehrere `Genres` haben. Dies wirft die Frage auf, wie wir mit dem Fall umgehen sollten, in dem ein Benutzer:

- Ein Objekt erstellen möchte, wenn seine verwandten Objekte noch nicht existieren (zum Beispiel ein Buch, bei dem das Autorobjekt noch nicht definiert wurde).
- Ein Objekt löschen möchte, das noch von einem anderen Objekt verwendet wird (zum Beispiel das Löschen eines `Genre`, das noch von einem `Book` verwendet wird).

Für dieses Projekt werden wir die Implementierung vereinfachen, indem wir festlegen, dass ein Formular nur:

- Ein Objekt unter Verwendung von Objekten erstellen kann, die bereits existieren (Benutzer müssen also alle erforderlichen `Author`- und `Genre`-Instanzen erstellen, bevor sie versuchen, `Book`-Objekte zu erstellen).
- Ein Objekt löschen kann, wenn es nicht von anderen Objekten referenziert wird (Beispiel: Sie können ein `Book` erst dann löschen, wenn alle zugehörigen `BookInstance`-Objekte gelöscht wurden).

> [!NOTE]
> Eine flexiblere Implementierung könnte es ermöglichen, die abhängigen Objekte beim Erstellen eines neuen Objekts zu erstellen und ein Objekt jederzeit zu löschen (z.B. durch Löschen abhängiger Objekte oder Entfernen von Verweisen auf das gelöschte Objekt aus der Datenbank).

### Routen

Um unseren Formulareverarbeitungscode zu implementieren, benötigen wir zwei Routen mit demselben URL-Muster. Die erste (`GET`)-Route wird verwendet, um ein neues leeres Formular zum Erstellen des Objekts anzuzeigen. Die zweite Route (`POST`) wird verwendet, um die vom Benutzer eingegebenen Daten zu validieren und dann die Informationen zu speichern und zur Detailseite weiterzuleiten (wenn die Daten gültig sind) oder das Formular mit Fehlern anzuzeigen (wenn die Daten ungültig sind).

Wir haben bereits die Routen für alle Erstellungsseiten unseres Modells in **/routes/catalog.js** (in einem [vorherigen Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes)) erstellt. Zum Beispiel sind die Genre-Routen unten gezeigt:

```js
// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", genre_controller.genre_create_get);

// POST request for creating Genre.
router.post("/genre/create", genre_controller.genre_create_post);
```

## Express-Formular-Unterartikel

Die folgenden Unterartikel führen uns durch den Prozess des Hinzufügens der erforderlichen Formulare zu unserer Beispielanwendung. Sie müssen jeden Artikel lesen und durcharbeiten, bevor Sie zum nächsten übergehen.

1. [Genre-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form) — Eine Seite zum Erstellen von `Genre`-Objekten definieren.
2. [Author-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form) — Eine Seite zum Erstellen von `Author`-Objekten definieren.
3. [Book-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form) — Eine Seite/Formular zum Erstellen von `Book`-Objekten definieren.
4. [BookInstance-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_BookInstance_form) — Eine Seite/Formular zum Erstellen von `BookInstance`-Objekten definieren.
5. [Author-Formular löschen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Delete_author_form) — Eine Seite zum Löschen von `Author`-Objekten definieren.
6. [Book-Formular aktualisieren](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form) — Eine Seite zum Aktualisieren von `Book`-Objekten definieren.

## Fordern Sie sich heraus

Implementieren Sie die Löschen-Seiten für die Modelle `Book`, `BookInstance` und `Genre` und verlinken Sie sie wie bei unserer _Author delete_-Seite von den zugehörigen Detailseiten. Die Seiten sollten dem gleichen Designansatz folgen:

- Wenn es Verweise von anderen Objekten auf das Objekt gibt, sollten diese anderen Objekte zusammen mit einem Hinweis darauf angezeigt werden, dass dieser Datensatz nicht gelöscht werden kann, bis die aufgelisteten Objekte gelöscht wurden.
- Wenn es keine anderen Verweise auf das Objekt gibt, sollte die Ansicht zum Löschen auffordern. Wenn der Benutzer die **Löschen**-Taste drückt, sollte der Datensatz dann gelöscht werden.

Einige Tipps:

- Das Löschen eines `Genre` ist genau wie das Löschen eines `Author`, da beide Objekte Abhängigkeiten von `Book` sind (in beiden Fällen können Sie das Objekt nur löschen, wenn die zugehörigen Bücher gelöscht sind).
- Das Löschen eines `Book` ist ebenfalls ähnlich, da Sie zuerst überprüfen müssen, ob keine zugehörigen `BookInstances` vorhanden sind.
- Das Löschen eines `BookInstance` ist am einfachsten von allem, da es keine abhängigen Objekte gibt. In diesem Fall können Sie einfach den zugehörigen Datensatz finden und löschen.

Implementieren Sie die Update-Seiten für die Modelle `BookInstance`, `Author` und `Genre` und verlinken Sie sie von den zugehörigen Detailseiten wie bei unserer _Book update_-Seite.

Einige Tipps:

- Die _Book update-Seite_, die wir gerade implementiert haben, ist die schwierigste! Die gleichen Muster können für die Update-Seiten der anderen Objekte verwendet werden.
- Die `Author`-Geburts- und Todesfelder und das `BookInstance`-Fälligkeitsdatum-Feld sind im falschen Format, um in das Dateneingabefeld auf dem Formular eingegeben zu werden (es erfordert Daten im Format "YYYY-MM-DD"). Die einfachste Möglichkeit, dies zu umgehen, besteht darin, eine neue virtuelle Eigenschaft für die Daten zu definieren, die die Daten entsprechend formatiert, und dann dieses Feld in den zugehörigen Ansichts-Vorlagen zu verwenden.
- Wenn Sie stecken bleiben, gibt es in [dem Beispiel hier](https://github.com/mdn/express-locallibrary-tutorial) Beispiele für die Update-Seiten.

## Zusammenfassung

_Express_, Node und Drittanbieter-Pakete auf npm bieten alles, was Sie benötigen, um Formulare zu Ihrer Website hinzuzufügen. In diesem Artikel haben Sie gelernt, wie Sie Formulare mit _Pug_ erstellen, Eingaben mit _express-validator_ validieren und bereinigen und Datensätze in der Datenbank hinzufügen, löschen und ändern.

Sie sollten jetzt verstehen, wie Sie grundlegende Formulare und Formularbearbeitungscode zu Ihren eigenen Node-Websites hinzufügen können!

## Siehe auch

- [express-validator](https://www.npmjs.com/package/express-validator) (npm-Dokumentation).

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
