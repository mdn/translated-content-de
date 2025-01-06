---
title: "Express Tutorial Teil 6: Arbeiten mit Formularen"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Express mit Pug arbeiten. Insbesondere besprechen wir, wie Sie Formulare schreiben, um Dokumente in der Datenbank der Website zu erstellen, zu aktualisieren und zu löschen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data">Express Tutorial Teil 5: Anzeigendaten der Bibliothek</a>
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

Ein [HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms) ist eine Gruppe von einem oder mehreren Feldern/Widgets auf einer Webseite, die verwendet werden können, um Informationen von Benutzern zu sammeln und an einen Server zu übermitteln. Formulare sind ein flexibler Mechanismus zur Sammlung von Benutzereingaben, da es geeignete Formulareingaben für viele verschiedene Datentypen gibt—Textfelder, Kontrollkästchen, Optionsfelder, Datumswähler usw. Formulare sind auch ein relativ sicherer Weg, um Daten mit dem Server zu teilen, da sie es erlauben, Daten in `POST`-Anfragen mit einem Schutz vor Cross-Site-Request-Forgery zu senden.

Die Arbeit mit Formularen kann kompliziert sein! Entwickler müssen HTML für das Formular schreiben, eingegebene Daten auf dem Server (und möglicherweise auch im Browser) validieren und richtig bereinigen, das Formular mit Fehlermeldungen erneut veröffentlichen, um Benutzer über ungültige Felder zu informieren, die Daten verarbeiten, wenn sie erfolgreich übermittelt wurden, und schließlich in irgendeiner Weise auf den Benutzer reagieren, um den Erfolg anzuzeigen.

In diesem Tutorial zeigen wir Ihnen, wie die oben genannten Vorgänge in _Express_ ausgeführt werden können. Auf dem Weg dorthin erweitern wir die _LocalLibrary_-Website, um es Benutzern zu ermöglichen, Elemente der Bibliothek zu erstellen, zu bearbeiten und zu löschen.

> [!NOTE]
> Wir haben uns noch nicht angesehen, wie bestimmte Routen auf authentifizierte oder autorisierte Benutzer beschränkt werden können, sodass an diesem Punkt jeder Benutzer Änderungen an der Datenbank vornehmen kann.

### HTML-Formulare

Zunächst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms). Betrachten Sie ein einfaches HTML-Formular mit einem einzigen Textfeld zur Eingabe des Namens eines "Teams" und dessen zugehörigen Label:

![Einfaches Namensfeld-Beispiel in HTML-Formular](form_example_name_field.png)

Das Formular wird in HTML als Sammlung von Elementen innerhalb von `<form>…</form>` Tags definiert, die mindestens ein `input`-Element vom Typ `type="submit"` enthalten.

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

Während wir hier nur ein (Text-)Feld zur Eingabe des Teamnamens eingefügt haben, kann ein Formular \_beliebig viele andere Eingabeelemente und die dazugehörigen Labels enthalten. Der `type`-Attribut des Feldes definiert, welche Art von Widget angezeigt wird. Der `name` und `id` des Feldes werden zur Identifizierung des Feldes in JavaScript/CSS/HTML verwendet, während `value` den Anfangswert für das Feld definiert, wenn es zum ersten Mal angezeigt wird. Das passende Team-Label wird mit dem `label` Tag angegeben (siehe "Enter name" oben), mit einem `for`-Feld, das den `id`-Wert des zugehörigen `input` enthält.

Das `submit`-Eingabeelement wird standardmäßig als Schaltfläche angezeigt—diese kann vom Benutzer gedrückt werden, um die von den anderen Eingabeelementen enthaltenen Daten an den Server hochzuladen (in diesem Fall nur `team_name`). Die Formulareigenschaften definieren die HTTP-Methode `method`, die zur Übertragung der Daten verwendet wird, und das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource/URL, an die die Daten zur Verarbeitung gesendet werden, wenn das Formular übermittelt wird. Wenn dies nicht festgelegt (oder auf einen leeren String gesetzt) ist, wird das Formular an die aktuelle Seiten-URL zurückgesendet.
- `method`: Die HTTP-Methode, die zum Senden der Daten verwendet wird: `POST` oder `GET`.

  - Die `POST`-Methode sollte immer dann verwendet werden, wenn die Daten zu einer Änderung der Datenbank des Servers führen, da sie resistenter gegen Angriffe durch Cross-Site-Forgery-Anfragen gemacht werden kann.
  - Die `GET`-Methode sollte nur für Formulare verwendet werden, die keine Benutzerdaten ändern (z.B. ein Suchformular). Sie wird empfohlen, wenn Sie die URL speichern oder teilen möchten.

### Formularverarbeitungsprozess

Die Formularverarbeitung verwendet alle Techniken, die wir gelernt haben, um Informationen über unsere Modelle anzuzeigen: die Route sendet unsere Anfrage an eine Controller-Funktion, die alle erforderlichen Datenbankaktionen durchführt, einschließlich des Lesens von Daten aus den Modellen, und dann eine HTML-Seite generiert und zurückgibt. Was die Sache komplizierter macht, ist, dass der Server auch in der Lage sein muss, die vom Benutzer bereitgestellten Daten zu verarbeiten und das Formular erneut mit Fehlermeldungen anzuzeigen, wenn es Probleme gibt.

Ein Prozessdiagramm zur Verarbeitung von Formularanfragen ist unten dargestellt, beginnend mit einer Anfrage für eine Seite, die ein Formular enthält (angezeigt in grün):

![Web-Server-Formularanforderungsverarbeitungs-Flussdiagramm. Browseranfragen für die Seite, die das Formular durch Senden einer HTTP-GET-Anfrage enthält. Der Server erstellt ein leeres Standardformular und gibt es an den Benutzer zurück. Der Benutzer füllt das Formular aus oder aktualisiert es und sendet es über HTTP-POST mit Formulardaten. Der Server validiert die empfangenen Formulardaten. Wenn die vom Benutzer bereitgestellten Daten ungültig sind, erstellt der Server das Formular mit den vom Benutzer eingegebenen Daten und Fehlermeldungen neu und sendet es an den Benutzer zurück, damit der Benutzer es aktualisiert und über HTTP-Post erneut einreicht und erneut validiert. Wenn die Daten gültig sind, führt der Server Aktionen zu den gültigen Daten aus und leitet den Benutzer zur Erfolgs-URL um.](web_server_form_handling.png)

Wie im obigen Diagramm gezeigt, müssen die Hauptaufgaben, die der Formularverarbeitungscode erledigen muss, Folgendes umfassen:

1. Anzeige des Standardformulars beim ersten Mal, wenn es vom Benutzer angefordert wird.

   - Das Formular kann leere Felder enthalten (z.B. wenn Sie einen neuen Datensatz erstellen), oder es kann mit Anfangswerten vorab gefüllt sein (z.B. wenn Sie einen Datensatz ändern oder nützliche Standardanfangswerte haben).

2. Empfang von Daten, die vom Benutzer übermittelt wurden, normalerweise in einer HTTP-`POST`-Anfrage.
3. Validieren und Bereinigen der Daten.
4. Wenn Daten ungültig sind, das Formular erneut anzeigen—in diesem Fall mit allen vom Benutzer ausgefüllten Werten und Fehlermeldungen für die Problemfelder.
5. Wenn alle Daten gültig sind, erforderliche Aktionen durchführen (z.B. Daten in der Datenbank speichern, eine Benachrichtigungs-E-Mail senden, das Ergebnis einer Suche zurückgeben, eine Datei hochladen usw.)
6. Sobald alle Aktionen abgeschlossen sind, den Benutzer auf eine andere Seite umleiten.

Häufig wird der Formularverarbeitungscode mit einer `GET`-Route für die anfängliche Anzeige des Formulars und einer `POST`-Route zum gleichen Pfad implementiert, um die Validierung und Verarbeitung von Formulardaten zu behandeln. Dies ist der Ansatz, der in diesem Tutorial verwendet wird.

Express selbst bietet keine Unterstützung speziell für Formularverarbeitungsoperationen, aber es kann Middleware verwenden, um `POST` und `GET`-Parameter aus dem Formular zu verarbeiten und deren Werte zu validieren/bereinigen.

### Validierung und Bereinigung

Bevor die Daten aus einem Formular gespeichert werden, müssen sie validiert und bereinigt werden:

- Validierung überprüft, ob eingegebene Werte für jedes Feld angemessen sind (im richtigen Bereich, Format usw.) und dass Werte für alle erforderlichen Felder bereitgestellt wurden.
- Bereinigung entfernt/ersetzt Zeichen in den Daten, die potenziell verwendet werden könnten, um bösartige Inhalte an den Server zu senden.

Für dieses Tutorial werden wir das beliebte [express-validator](https://www.npmjs.com/package/express-validator)-Modul verwenden, um sowohl die Validierung als auch die Bereinigung unserer Formulardaten durchzuführen.

#### Installation

Installieren Sie das Modul, indem Sie den folgenden Befehl im Stammverzeichnis des Projekts ausführen.

```bash
npm install express-validator
```

#### Verwendung von express-validator

> [!NOTE]
> Der [express-validator](https://express-validator.github.io/docs/#basic-guide) Leitfaden auf GitHub bietet einen guten Überblick über die API. Wir empfehlen Ihnen, diesen zu lesen, um eine Vorstellung von all seinen Möglichkeiten zu bekommen (einschließlich der Verwendung von [Schema-Validierung](https://express-validator.github.io/docs/guides/schema-validation/) und der [Erstellung benutzerdefinierter Validatoren](https://express-validator.github.io/docs/guides/customizing/#custom-validators-and-sanitizers)). Unten behandeln wir nur einen Teilbereich, der für die _LocalLibrary_ nützlich ist.

Um den Validator in unseren Controllern zu verwenden, spezifizieren wir die bestimmten Funktionen, die wir aus dem [express-validator](https://www.npmjs.com/package/express-validator)-Modul importieren möchten, wie unten gezeigt:

```js
const { body, validationResult } = require("express-validator");
```

Es gibt viele verfügbare Funktionen, die Ihnen erlauben, Daten aus Anforderungsparametern, Body, Headern, Cookies usw. oder alle gleichzeitig zu überprüfen und zu bereinigen. Für dieses Tutorial werden wir hauptsächlich `body` und `validationResult` verwenden (wie "erforderlich" oben).

Die Funktionen sind wie folgt definiert:

- [`body(fields, message)`](https://express-validator.github.io/docs/api/check/#body): Gibt eine Reihe von Feldern im Anforderungsrumpf an (ein `POST`-Parameter), die validiert und/oder bereinigt werden sollen, zusammen mit einer optionalen Fehlermeldung, die angezeigt werden kann, wenn es die Tests nicht besteht. Die Validierungs- und Bereinigungskriterien werden der `body()`-Methode angekettet.

  Zum Beispiel, die folgende Zeile definiert zuerst, dass wir das "name"-Feld überprüfen und dass ein Validierungsfehler eine Fehlermeldung "Empty name" setzt. Dann rufen wir die Bereinigungsmethode `trim()` auf, um Leerzeichen vom Anfang und Ende der Zeichenkette zu entfernen, und anschließend `isLength()`, um zu überprüfen, dass die resultierende Zeichenkette nicht leer ist. Schließlich rufen wir `escape()` auf, um HTML-Zeichen aus der Variablen zu entfernen, die in JavaScript Cross-Site-Scripting-Angriffen verwendet werden könnten.

  ```js
  [
    // …
    body("name", "Empty name").trim().isLength({ min: 1 }).escape(),
    // …
  ];
  ```

  Dieser Test überprüft, ob das Altersfeld ein gültiges Datum ist, und verwendet `optional()`, um anzugeben, dass Null- und leere Zeichenfolgen die Validierung nicht fehl schlagen lassen.

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

  Sie können auch verschiedene Validatoren hintereinander ausführen und Nachrichten hinzufügen, die angezeigt werden, wenn die vorausgehenden Validatoren falsch sind.

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

- [`validationResult(req)`](https://express-validator.github.io/docs/api/validation-result/#validationresult): Führt die Validierung aus und macht Fehler in Form eines `validation` Ergebnisobjekts verfügbar. Dies wird in einem separaten Callback aufgerufen, wie unten gezeigt:

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

  Wir verwenden die `isEmpty()`-Methode des Validierungsergebnisses, um zu prüfen, ob es Fehler gab, und die `array()`-Methode, um die Menge der Fehlermeldungen zu erhalten. Siehe den [Abschnitt zur Handhabung der Validierung](https://express-validator.github.io/docs/guides/getting-started/#handling-validation-errors) für weitere Informationen.

Die Validierungs- und Bereinigungsketten sind Middleware, die an den Express-Routen-Handler übergeben werden sollten (wir tun dies indirekt über den Controller). Wenn die Middleware ausgeführt wird, wird jeder Validator/Bereiniger in der angegebenen Reihenfolge ausgeführt.

Wir werden einige echte Beispiele behandeln, wenn wir die _LocalLibrary_-Formulare unten umsetzen.

### Formulardesign

Viele der Modelle in der Bibliothek sind miteinander verbunden/abhängig—zum Beispiel erfordert ein `Book` einen `Author` und kann auch ein oder mehrere `Genres` haben. Dies wirft die Frage auf, wie wir den Fall handhaben sollten, wenn ein Benutzer wünscht:

- Ein Objekt zu erstellen, wenn seine verwandten Objekte noch nicht existieren (zum Beispiel ein Buch, bei dem das Autorenobjekt noch nicht definiert ist).
- Ein Objekt zu löschen, das noch von einem anderen Objekt verwendet wird (zum Beispiel ein `Genre`, das noch von einem `Book` verwendet wird).

Für dieses Projekt werden wir die Implementierung vereinfachen, indem wir sagen, dass ein Formular nur:

- Ein Objekt mit bereits vorhandenen Objekten erstellen kann (so müssen Benutzer alle erforderlichen `Author`- und `Genre`-Instanzen erstellen, bevor sie versuchen, `Book`-Objekte zu erstellen).
- Ein Objekt löschen kann, wenn es nicht von anderen Objekten referenziert wird (zum Beispiel können Sie ein `Book` nicht löschen, bis alle zugeordneten `BookInstance`-Objekte gelöscht wurden).

> [!NOTE]
> Eine flexiblere Implementierung könnte es Ihnen erlauben, die abhängigen Objekte zu erstellen, wenn Sie ein neues Objekt erstellen, und jedes Objekt jederzeit zu löschen (zum Beispiel durch Löschen abhängiger Objekte oder durch Entfernen von Verweisen auf das gelöschte Objekt aus der Datenbank).

### Routen

Um unseren Formularverarbeitungscode zu implementieren, benötigen wir zwei Routen, die dasselbe URL-Muster haben. Die erste (`GET`) Route wird verwendet, um ein neues leeres Formular zur Erstellung des Objekts anzuzeigen. Die zweite Route (`POST`) wird verwendet, um die vom Benutzer eingegebenen Daten zu validieren und dann die Informationen zu speichern und auf die Detailseite umzuleiten (wenn die Daten gültig sind) oder das Formular mit Fehlern erneut anzuzeigen (wenn die Daten ungültig sind).

Wir haben bereits die Routen für alle Erstellseiten unseres Modells in **/routes/catalog.js** erstellt (in einem [vorherigen Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes)). Zum Beispiel, die Genre-Routen sind unten gezeigt:

```js
// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", genre_controller.genre_create_get);

// POST request for creating Genre.
router.post("/genre/create", genre_controller.genre_create_post);
```

## Express Formulare Unterartikel

Die folgenden Unterartikel führen uns durch den Prozess des Hinzufügens der erforderlichen Formulare zu unserer Beispielanwendung. Sie müssen jeden der Artikel nacheinander lesen und durcharbeiten, bevor Sie zum nächsten übergehen.

1. [Genre-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form) — Eine Seite zur Erstellung von `Genre`-Objekten definieren.
2. [Autor-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form) — Eine Seite zur Erstellung von `Author`-Objekten definieren.
3. [Buch-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form) — Eine Seite/Formular zur Erstellung von `Book`-Objekten definieren.
4. [BookInstance-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_BookInstance_form) — Eine Seite/Formular zur Erstellung von `BookInstance`-Objekten definieren.
5. [Autor-Formular löschen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Delete_author_form) — Eine Seite zur Löschung von `Author`-Objekten definieren.
6. [Buch-Formular aktualisieren](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form) — Eine Seite zur Aktualisierung von `Book`-Objekten definieren.

## Fordern Sie sich heraus

Implementieren Sie die Löschseiten für die `Book`, `BookInstance` und `Genre`-Modelle, indem Sie sie von den zugehörigen Detailseiten auf dieselbe Weise wie unsere _Author Delete_-Seite verlinken. Die Seiten sollten dem gleichen Designansatz folgen:

- Wenn von anderen Objekten auf das Objekt verwiesen wird, sollten diese anderen Objekte zusammen mit einem Hinweis angezeigt werden, dass dieser Datensatz nicht gelöscht werden kann, bis die aufgelisteten Objekte gelöscht wurden.
- Wenn es keine weiteren Verweise auf das Objekt gibt, sollte die Ansicht zum Löschen auffordern. Wenn der Benutzer die **Löschen**-Schaltfläche drückt, sollte der Datensatz gelöscht werden.

Einige Tipps:

- Das Löschen eines `Genre` ist genau wie das Löschen eines `Author`, da beide Objekte Abhängigkeiten von `Book` sind (in beiden Fällen können Sie das Objekt nur löschen, wenn die zugehörigen Bücher gelöscht werden).
- Das Löschen eines `Book` ist ebenfalls ähnlich, da Sie zuerst überprüfen müssen, dass keine zugehörigen `BookInstances` vorhanden sind.
- Das Löschen eines `BookInstance` ist am einfachsten, da es keine abhängigen Objekte gibt. In diesem Fall können Sie einfach den zugehörigen Datensatz finden und löschen.

Implementieren Sie die Aktualisierungsseiten für die `BookInstance`, `Author` und `Genre`-Modelle, indem Sie sie von den zugehörigen Detailseiten auf dieselbe Weise wie unsere _Book Update_-Seite verlinken.

Einige Tipps:

- Die _Buchaktualisierungsseite_, die wir gerade implementiert haben, ist die schwierigste! Die gleichen Muster können für die Aktualisierungsseiten der anderen Objekte verwendet werden.
- Die `Author`-Geburts- und Sterbedatumfelder sowie das `BookInstance`-Due-Date-Feld haben das falsche Format, um in das Datumseingabefeld im Formular eingegeben zu werden (es erfordert Daten im Format "JJJJ-MM-TT"). Der einfachste Weg, dies zu umgehen, ist, eine neue virtuelle Eigenschaft für die Daten zu definieren, die die Daten richtig formatiert, und dann dieses Feld in den zugehörigen Sichtvorlagen zu verwenden.
- Wenn Sie stecken bleiben, gibt es Beispiele für die Aktualisierungsseiten im [Beispiel hier](https://github.com/mdn/express-locallibrary-tutorial).

## Zusammenfassung

_Express_, Node und Drittanbieter-Pakete auf npm bieten alles, was Sie benötigen, um Formulare zu Ihrer Website hinzuzufügen. In diesem Artikel haben Sie gelernt, wie man mit _Pug_ Formulare erstellt, Eingaben mit _express-validator_ validiert und bereinigt und Datensätze in der Datenbank hinzufügt, löscht und verändert.

Sie sollten nun verstehen, wie man grundlegende Formulare und Formularverarbeitungscode zu Ihren eigenen Node-Websites hinzufügt!

## Siehe auch

- [express-validator](https://www.npmjs.com/package/express-validator) (npm-Dokumentation).

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
