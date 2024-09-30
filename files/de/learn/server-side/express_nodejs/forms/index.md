---
title: "Express Tutorial Teil 6: Arbeiten mit Formularen"
slug: Learn/Server-side/Express_Nodejs/forms
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Displaying_data", "Learn/Server-side/Express_Nodejs/deployment", "Learn/Server-side/Express_Nodejs")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Express unter Verwendung von Pug arbeiten. Insbesondere besprechen wir, wie man Formulare schreibt, um Dokumente in der Datenbank der Website zu erstellen, zu aktualisieren und zu löschen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Alle vorherigen Tutorialthemen abschließen, einschließlich <a href="/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data">Express Tutorial Teil 5: Anzeigen von Bibliotheksdaten</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie man Formulare schreibt, um Daten von Benutzern zu erhalten und die Datenbank mit diesen Daten zu aktualisieren.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Ein [HTML-Formular](/de/docs/Learn/Forms) ist eine Gruppe von einem oder mehreren Feldern/Widgets auf einer Webseite, die verwendet werden können, um Informationen von Benutzern zur Übertragung an einen Server zu sammeln. Formulare sind ein flexibler Mechanismus zur Erfassung von Benutzereingaben, da es geeignete Formulareingaben für viele verschiedene Datentypen gibt—Textfelder, Kontrollkästchen, Auswahlknöpfe, Datumswähler usw. Formulare sind auch eine relativ sichere Methode zum Teilen von Daten mit dem Server, da sie uns erlauben, Daten in `POST`-Anfragen mit Schutz gegen Cross-Site-Request-Forgery zu senden.

Die Arbeit mit Formularen kann kompliziert sein! Entwickler müssen HTML für das Formular schreiben, eingegebene Daten auf dem Server (und möglicherweise auch im Browser) validieren und richtig bereinigen, das Formular mit Fehlermeldungen erneut senden, um Benutzer über ungültige Felder zu informieren, die Daten verarbeiten, wenn sie erfolgreich übermittelt wurden, und schließlich auf eine Weise antworten, die dem Benutzer Erfolg signalisiert.

In diesem Tutorial werden wir Ihnen zeigen, wie die oben genannten Operationen in _Express_ durchgeführt werden können. Auf dem Weg werden wir die _LocalLibrary_-Website erweitern, um Benutzern das Erstellen, Bearbeiten und Löschen von Elementen aus der Bibliothek zu ermöglichen.

> [!NOTE]
> Wir haben uns noch nicht angeschaut, wie man bestimmte Routen für authentifizierte oder autorisierte Benutzer einschränkt, sodass zu diesem Zeitpunkt jeder Benutzer Änderungen an der Datenbank vornehmen kann.

### HTML-Formulare

Zuerst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn/Forms). Betrachten Sie ein einfaches HTML-Formular mit einem einzelnen Textfeld zum Eingeben des Namens eines "Teams" und seinem zugehörigen Label:

![Einfaches Namensfeldbeispiel in HTML-Formularen](form_example_name_field.png)

Das Formular wird in HTML als Sammlung von Elementen innerhalb von `<form>…</form>`-Tags definiert und enthält mindestens ein `input`-Element des Typs `submit`.

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

Während wir hier nur ein (Text-) Feld zum Eingeben des Teamnamens eingefügt haben, kann ein Formular _beliebig_ viele andere Eingabeelemente und ihre zugehörigen Labels enthalten. Das `type`-Attribut des Feldes definiert, welche Art von Widget angezeigt wird. Der `name` und die `id` des Feldes werden verwendet, um das Feld in JavaScript/CSS/HTML zu identifizieren, während `value` den Anfangswert für das Feld definiert, wenn es erstmals angezeigt wird. Das passende Teamlabel wird mit dem `label`-Tag angegeben (siehe "Enter name" oben) mit einem `for`-Feld, das den `id`-Wert des zugehörigen `input` enthält.

Das `submit`-Eingabefeld wird standardmäßig als Schaltfläche angezeigt — dies kann vom Benutzer gedrückt werden, um die von den anderen Eingabeelementen enthaltenen Daten an den Server hochzuladen (in diesem Fall nur den `team_name`). Die Formulareigenschaften definieren die HTTP-`method`, die zum Senden der Daten verwendet wird, und das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource/URL, an die Daten zur Verarbeitung gesendet werden sollen, wenn das Formular abgeschickt wird. Wenn dies nicht gesetzt ist (oder auf eine leere Zeichenfolge gesetzt ist), wird das Formular zurück an die aktuelle Seiten-URL gesendet.
- `method`: Die HTTP-Methode, die zum Senden der Daten verwendet wird: `POST` oder `GET`.

  - Die `POST`-Methode sollte immer verwendet werden, wenn die Daten zu einer Änderung in der Datenbank des Servers führen, da dies widerstandsfähiger gegen Cross-Site-Forgery-Request-Angriffe gemacht werden kann.
  - Die `GET`-Methode sollte nur für Formulare verwendet werden, die keine Benutzerdaten ändern (z.B. ein Suchformular). Sie wird empfohlen, wenn Sie die URL als Lesezeichen speichern oder teilen möchten.

### Formularverarbeitungsprozess

Die Formularverarbeitung nutzt alle Techniken, die wir zum Anzeigen von Informationen über unsere Modelle gelernt haben: Die Route sendet unsere Anfrage an eine Controller-Funktion, die alle erforderlichen Datenbankaktionen durchführt, einschließlich des Lesens von Daten aus den Modellen, und dann eine HTML-Seite generiert und zurückgibt. Was die Dinge komplizierter macht, ist, dass der Server auch in der Lage sein muss, die vom Benutzer bereitgestellten Daten zu verarbeiten und das Formular mit den Fehlermeldungen erneut anzuzeigen, falls Probleme auftreten.

Ein Prozessablaufdiagramm für die Verarbeitung von Formularanfragen ist unten gezeigt, beginnend mit einer Anfrage für eine Seite, die ein Formular enthält (in Grün dargestellt):

![Ablaufdiagramm zur Webserver-Formularanforderungsverarbeitung. Browser fordert die Seite mit dem Formular an, indem ein HTTP-GET-Request gesendet wird. Der Server erstellt ein leeres Standardformular und gibt es an den Benutzer zurück. Der Benutzer füllt das Formular aus oder aktualisiert es und sendet es über HTTP-POST mit Formulardaten ab. Der Server validiert die empfangenen Formulardaten. Wenn die vom Benutzer bereitgestellten Daten ungültig sind, erstellt der Server das Formular mit den benutzer eingegebenen Daten und Fehlermeldungen neu und sendet es zurück für eine Aktualisierung und erneute Übermittlung via HTTP-POST an den Benutzer. Wenn die Daten gültig sind, führt der Server Aktionen mit den gültigen Daten durch und leitet den Benutzer zur Erfolgs-URL um.](web_server_form_handling.png)

Wie im Diagramm oben gezeigt, müssen Formularcodes hauptsächlich folgende Aufgaben erledigen:

1. Das Standardformular anzeigen, wenn es zum ersten Mal vom Benutzer angefordert wird.

   - Das Formular kann leere Felder enthalten (z.B. wenn Sie einen neuen Datensatz erstellen), oder es kann mit Initialwerten vorausgefüllt sein (z.B. wenn Sie einen Datensatz ändern oder nützliche Standardinitialwerte haben).

2. Daten empfangen, die vom Benutzer eingereicht werden, normalerweise in einer HTTP-`POST`-Anfrage.
3. Die Daten validieren und bereinigen.
4. Falls einige Daten ungültig sind, das Formular erneut anzeigen—diesmal mit allen vom Benutzer ausgefüllten Werten und Fehlermeldungen für die problematischen Felder.
5. Wenn alle Daten gültig sind, erforderliche Aktionen durchführen (z.B. die Daten in der Datenbank speichern, eine Benachrichtigungs-E-Mail senden, das Ergebnis einer Suche zurückgeben, eine Datei hochladen usw.)
6. Sobald alle Aktionen abgeschlossen sind, den Benutzer auf eine andere Seite umleiten.

Oft wird der Formularcode mit einer `GET`-Route für die anfängliche Anzeige des Formulars und einer `POST`-Route zum selben Pfad für die Validierung und Verarbeitung von Formulardaten implementiert. Dies ist der Ansatz, der in diesem Tutorial verwendet wird.

Express selbst bietet keine spezifische Unterstützung für Formularhandhabungsoperationen, aber es kann Middleware verwenden, um `POST`- und `GET`-Parameter aus dem Formular zu verarbeiten und um ihre Werte zu validieren/bereinigen.

### Validierung und Bereinigung

Bevor die Daten aus einem Formular gespeichert werden, müssen sie validiert und bereinigt werden:

- Die Validierung überprüft, ob eingegebene Werte für jedes Feld geeignet sind (ob sie im richtigen Bereich, Format usw. liegen) und dass für alle erforderlichen Felder Werte angegeben wurden.
- Die Bereinigung entfernt/ersetzt Zeichen in den Daten, die möglicherweise verwendet werden könnten, um bösartige Inhalte an den Server zu senden.

Für dieses Tutorial werden wir das beliebte Modul [express-validator](https://www.npmjs.com/package/express-validator) verwenden, um sowohl die Validierung als auch die Bereinigung unserer Formulardaten durchzuführen.

#### Installation

Installieren Sie das Modul, indem Sie den folgenden Befehl im Stammverzeichnis des Projekts ausführen.

```bash
npm install express-validator
```

#### Verwendung von express-validator

> [!NOTE]
> Die [express-validator](https://express-validator.github.io/docs/#basic-guide)-Anleitung auf GitHub bietet einen guten Überblick über die API. Wir empfehlen, diese zu lesen, um einen Eindruck von all ihren Fähigkeiten zu bekommen (einschließlich der Verwendung von [Schema-Validierung](https://express-validator.github.io/docs/guides/schema-validation/) und [Erstellen benutzerdefinierter Validatoren](https://express-validator.github.io/docs/guides/customizing/#custom-validators-and-sanitizers)). Unten decken wir nur einen Teil ab, der für die _LocalLibrary_ nützlich ist.

Um den Validator in unseren Controllern zu verwenden, geben wir die spezifischen Funktionen an, die wir aus dem Modul [express-validator](https://www.npmjs.com/package/express-validator) importieren möchten, wie unten gezeigt:

```js
const { body, validationResult } = require("express-validator");
```

Es gibt viele Funktionen, die es Ihnen erlauben, Daten aus Anfrageparametern, dem Body, Headern, Cookies usw. oder allen auf einmal zu überprüfen und zu bereinigen. Für dieses Tutorial werden wir hauptsächlich `body` und `validationResult` verwenden (wie oben als "erforderlich" angegeben).

Die Funktionen sind folgendermaßen definiert:

- [`body(fields, message)`](https://express-validator.github.io/docs/api/check/#body): Gibt eine Menge von Feldern im Anfragenkörper (einem `POST`-Parameter) an, die validiert und/oder bereinigt werden sollen, zusammen mit einer optionalen Fehlermeldung, die angezeigt werden kann, wenn sie die Tests nicht besteht. Die Validierungs- und Bereinigungskriterien werden der `body()`-Methode verkettet.

  Zum Beispiel wird in der unteren Zeile zuerst definiert, dass wir das "name" Feld überprüfen und dass ein Validierungsfehler eine Fehlermeldung "Empty name" setzt. Danach rufen wir die Bereinigungsmethode `trim()` auf, um Leerzeichen am Anfang und Ende der Zeichenfolge zu entfernen, und dann `isLength()`, um zu überprüfen, dass die resultierende Zeichenfolge nicht leer ist. Schließlich rufen wir `escape()` auf, um HTML-Zeichen aus der Variablen zu entfernen, die in JavaScript-Cross-Site-Scripting-Angriffen verwendet werden könnten.

  ```js
  [
    // …
    body("name", "Empty name").trim().isLength({ min: 1 }).escape(),
    // …
  ];
  ```

  Dieser Test überprüft, dass das Altersfeld ein gültiges Datum ist und verwendet `optional()`, um anzugeben, dass Null und leere Zeichenfolgen die Validierung nicht fehlschlagen lassen.

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

- [`validationResult(req)`](https://express-validator.github.io/docs/api/validation-result/#validationresult): Führt die Validierung aus und macht Fehler in Form eines `validation` Ergebnisobjekts verfügbar. Dieser wird in einem separaten Callback aufgerufen, wie unten gezeigt:

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

  Wir verwenden die `isEmpty()`-Methode des Validierungsergebnisses, um zu überprüfen, ob es Fehler gab, und die `array()`-Methode, um die Menge der Fehlermeldungen zu erhalten. Sehen Sie sich den [Abschnitt zur Handhabung von Validierungen](https://express-validator.github.io/docs/guides/getting-started/#handling-validation-errors) für mehr Informationen an.

Die Validierungs- und Bereinigungsketten sind Middleware, die an den Express-Routenhandler übergeben werden sollten (wir tun dies indirekt über den Controller). Wenn die Middleware ausgeführt wird, wird jeder Validator/Bereinigungsprogramm in der angegebenen Reihenfolge ausgeführt.

Wir werden einige echte Beispiele behandeln, wenn wir die _LocalLibrary_-Formulare unten implementieren.

### Formulargestaltung

Viele der Modelle in der Bibliothek sind miteinander verwandt/abhängig — zum Beispiel erfordert ein `Book` einen `Author` und kann auch ein oder mehrere `Genres` haben. Dies wirft die Frage auf, wie wir den Fall behandeln sollten, wenn ein Benutzer Folgendes tun möchte:

- Ein Objekt erstellen, wenn seine zugehörigen Objekte noch nicht existieren (z.B. ein Buch, bei dem das Autorobjekt noch nicht definiert wurde).
- Ein Objekt löschen, das weiterhin von einem anderen Objekt verwendet wird (z.B. ein `Genre` löschen, das noch von einem `Book` verwendet wird).

Für dieses Projekt werden wir die Implementierung vereinfachen, indem wir festlegen, dass ein Formular nur:

- Ein Objekt mit bereits existierenden Objekten erstellen kann (sodass Benutzer alle erforderlichen `Author`- und `Genre`-Instanzen erstellen müssen, bevor sie versuchen, `Book`-Objekte zu erstellen).
- Ein Objekt löschen kann, wenn es nicht von anderen Objekten referenziert wird (sodass Sie beispielsweise ein `Book` erst löschen können, wenn alle zugehörigen `BookInstance`-Objekte gelöscht wurden).

> [!NOTE]
> Eine flexiblere Implementierung könnte es erlauben, abhängige Objekte beim Erstellen eines neuen Objekts zu erstellen und jedes Objekt jederzeit zu löschen (z.B. durch Löschen abhängiger Objekte oder durch Entfernen von Verweisen auf das gelöschte Objekt aus der Datenbank).

### Routen

Um unseren Formularcode zu implementieren, benötigen wir zwei Routen mit demselben URL-Muster. Die erste (`GET`)-Route wird verwendet, um ein neues leeres Formular zum Erstellen des Objekts anzuzeigen. Die zweite Route (`POST`) wird verwendet, um von Benutzern eingegebene Daten zu validieren und anschließend die Informationen zu speichern und zur Detailseite umzuleiten (wenn die Daten gültig sind) oder das Formular mit Fehlern erneut anzuzeigen (wenn die Daten ungültig sind).

Wir haben die Routen für alle unsere Modell-Erstellungsseiten bereits in **/routes/catalog.js** erstellt (in einem [vorherigen Tutorial](/de/docs/Learn/Server-side/Express_Nodejs/routes)). Zum Beispiel werden die Genre-Routen unten angezeigt:

```js
// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", genre_controller.genre_create_get);

// POST request for creating Genre.
router.post("/genre/create", genre_controller.genre_create_post);
```

## Express-Formularunterartikel

Die folgenden Unterartikel werden uns durch den Prozess führen, die erforderlichen Formulare zu unserer Beispielanwendung hinzuzufügen. Sie müssen jeden in der angegebenen Reihenfolge lesen und durcharbeiten, bevor Sie mit dem nächsten fortfahren.

1. [Genre erstellen Formular](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_genre_form) — Definieren einer Seite zur Erstellung von `Genre`-Objekten.
2. [Autor erstellen Formular](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_author_form) — Definieren einer Seite zur Erstellung von `Author`-Objekten.
3. [Buch erstellen Formular](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_book_form) — Definieren einer Seite/ eines Formulars zur Erstellung von `Book`-Objekten.
4. [BookInstance erstellen Formular](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_BookInstance_form) — Definieren einer Seite/ eines Formulars zur Erstellung von `BookInstance`-Objekten.
5. [Autor löschen Formular](/de/docs/Learn/Server-side/Express_Nodejs/forms/Delete_author_form) — Definieren einer Seite zum Löschen von `Author`-Objekten.
6. [Buch aktualisieren Formular](/de/docs/Learn/Server-side/Express_Nodejs/forms/Update_Book_form) — Definieren einer Seite zum Aktualisieren von `Book`-Objekten.

## Fordern Sie sich heraus

Implementieren Sie die Löschseiten für die `Book`-, `BookInstance`- und `Genre`-Modelle, indem Sie sie von den zugehörigen Detailseiten auf dieselbe Weise wie unsere _Löschen Autor_-Seite verlinken. Die Seiten sollten dem gleichen Designansatz folgen:

- Wenn es Verweise auf das Objekt von anderen Objekten gibt, sollten diese anderen Objekte angezeigt werden, zusammen mit einer Notiz, dass dieser Datensatz nicht gelöscht werden kann, bis die aufgelisteten Objekte gelöscht wurden.
- Wenn es keine anderen Verweise auf das Objekt gibt, sollte die Ansicht zur Löschung auffordern. Wenn der Benutzer die Schaltfläche **Löschen** drückt, sollte der Datensatz gelöscht werden.

Einige Tipps:

- Das Löschen eines `Genre` ist genauso wie das Löschen eines `Author`, da beide Objekte Abhängigkeiten von `Book` sind (sodass Sie in beiden Fällen das Objekt nur löschen können, wenn die zugehörigen Bücher gelöscht sind).
- Das Löschen eines `Book` ist auch ähnlich, da Sie zuerst überprüfen müssen, ob es keine zugehörigen `BookInstances` gibt.
- Das Löschen eines `BookInstance` ist am einfachsten, da es keine abhängigen Objekte gibt. In diesem Fall können Sie einfach den zugehörigen Datensatz finden und löschen.

Implementieren Sie die Aktualisierungsseiten für die `BookInstance`-, `Author`- und `Genre`-Modelle, indem Sie sie von den zugehörigen Detailseiten auf dieselbe Weise wie unsere _Buch aktualisieren_-Seite verlinken.

Einige Tipps:

- Die _Buch aktualisieren Seite_, die wir gerade implementiert haben, ist die schwierigste! Die gleichen Muster können für die Aktualisierungsseiten der anderen Objekte verwendet werden.
- Das `Author`-Geburtsdatum und -Todestagsfelder sowie das `BookInstance`-Fälligkeitsdatum-Feld haben das falsche Format, um in das Datumeingabefeld des Formulars eingegeben zu werden (es erfordert Daten im Format "YYYY-MM-DD"). Der einfachste Weg, dies zu umgehen, ist, ein neues virtuelles Attribut für die Daten zu definieren, das die Daten entsprechend formatiert, und dann dieses Feld in den zugehörigen Ansichts-Templates zu verwenden.
- Wenn Sie nicht weiterkommen, gibt es Beispiele für die Aktualisierungsseiten im [Beispiel hier](https://github.com/mdn/express-locallibrary-tutorial).

## Zusammenfassung

_Express_, Node und Drittanbieter-Pakete auf npm bieten alles, was Sie brauchen, um Formulare zu Ihrer Website hinzuzufügen. In diesem Artikel haben Sie gelernt, wie man Formulare mit _Pug_ erstellt, Eingaben mit _express-validator_ validiert und bereinigt sowie Datensätze in der Datenbank hinzufügt, löscht und verändert.

Sie sollten nun verstehen, wie man grundlegende Formulare und Formularbearbeitungscode zu Ihren eigenen Node-Websites hinzufügt!

## Siehe auch

- [express-validator](https://www.npmjs.com/package/express-validator) (npm-Dokumentation).

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Displaying_data", "Learn/Server-side/Express_Nodejs/deployment", "Learn/Server-side/Express_Nodejs")}}
