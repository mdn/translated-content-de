---
title: "Express Tutorial Teil 6: Arbeiten mit Formularen"
short-title: "6: Arbeiten mit Formularen"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Express unter Verwendung von Pug arbeiten. Insbesondere werden wir besprechen, wie man Formulare schreibt, um Dokumente in der Datenbank der Website zu erstellen, zu aktualisieren und zu löschen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Alle vorherigen Tutorials abschließen, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data">Express Tutorial Teil 5: Anzeigedaten der Bibliothek</a>
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

Ein [HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms) ist eine Gruppe von einem oder mehreren Feldern/Widgets auf einer Webseite, die verwendet werden können, um Informationen von Benutzern zur Übermittlung an einen Server zu sammeln. Formulare sind ein flexibles Mittel zur Erfassung von Benutzereingaben, da es geeignete Formulareingaben für die Eingabe vieler verschiedener Datentypen gibt—Textfelder, Kontrollkästchen, Optionsfelder, Datumswähler usw. Formulare sind auch eine relativ sichere Möglichkeit, Daten mit dem Server zu teilen, da sie es uns erlauben, Daten in `POST`-Anfragen mit Schutz vor Cross-Site-Request-Forgery zu senden.

Mit Formularen zu arbeiten kann kompliziert sein! Entwickler müssen HTML für das Formular schreiben, eingegebene Daten auf dem Server (und möglicherweise auch im Browser) validieren und ordnungsgemäß bereinigen, das Formular mit Fehlermeldungen neu übermitteln, um Benutzer über ungültige Felder zu informieren, die Daten verarbeiten, wenn sie erfolgreich übermittelt wurden, und schließlich auf eine Weise auf den Benutzer antworten, um Erfolg anzuzeigen.

In diesem Tutorial zeigen wir Ihnen, wie die obigen Operationen in _Express_ durchgeführt werden können. Unterwegs werden wir die _LocalLibrary_-Website erweitern, um Benutzern zu ermöglichen, Elemente in der Bibliothek zu erstellen, zu bearbeiten und zu löschen.

> [!NOTE]
> Wir haben uns noch nicht damit befasst, wie bestimmte Routen auf authentifizierte oder autorisierte Benutzer beschränkt werden können, sodass zu diesem Zeitpunkt jeder Benutzer Änderungen an der Datenbank vornehmen kann.

### HTML-Formulare

Zunächst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms). Betrachten Sie ein einfaches HTML-Formular mit einem einzigen Textfeld zum Eingeben des Namens eines "Teams" und dem zugehörigen Label:

![Einfaches Namensfeld-Beispiel in einem HTML-Formular](form_example_name_field.png)

Das Formular wird in HTML als Sammlung von Elementen innerhalb `<form>…</form>`-Tags definiert, die mindestens ein `input`-Element vom Typ `type="submit"` enthalten.

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

Während hier nur ein (Text-)Feld zum Eingeben des Teamnamens enthalten ist, kann ein Formular _beliebig viele_ andere Eingabeelemente und deren zugehörige Labels enthalten. Das `type`-Attribut des Feldes definiert, welche Art von Widget angezeigt wird. Der `name` und `id` des Feldes werden verwendet, um das Feld in JavaScript/CSS/HTML zu identifizieren, während `value` den Anfangswert für das Feld beim ersten Anzeigen definiert. Das passende Team-Label wird mit dem `label`-Tag angegeben (siehe "Name eingeben" oben), wobei ein `for`-Feld den `id`-Wert des zugehörigen `input` enthält.

Das `submit`-Eingabefeld wird standardmäßig als Schaltfläche angezeigt—dies kann vom Benutzer gedrückt werden, um die von den anderen Eingabeelementen enthaltenen Daten an den Server hochzuladen (in diesem Fall nur `team_name`). Die Formulareigenschaften definieren die HTTP-`method`, die zum Senden der Daten verwendet wird, und das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource/URL, an die Daten zur Bearbeitung gesendet werden sollen, wenn das Formular gesendet wird. Wenn dies nicht festgelegt ist (oder auf einen leeren String gesetzt ist), wird das Formular an die aktuelle Seiten-URL zurückgesendet.
- `method`: Die HTTP-Methode, die zum Senden der Daten verwendet wird: `POST` oder `GET`.
  - Die `POST`-Methode sollte immer verwendet werden, wenn die Daten zu einer Änderung in der Datenbank des Servers führen, da dies widerstandsfähiger gegen Cross-Site-Forgery-Anfragen gemacht werden kann.
  - Die `GET`-Methode sollte nur für Formulare verwendet werden, die Benutzerdaten nicht ändern (z. B. ein Suchformular). Es wird empfohlen, wenn Sie die URL speichern oder teilen möchten.

### Prozess der Formularbearbeitung

Die Formularbearbeitung verwendet alle Techniken, die wir zum Anzeigen von Informationen über unsere Modelle gelernt haben: Die Route sendet unsere Anfrage an eine Controller-Funktion, die alle erforderlichen Datenbankaktionen ausführt, einschließlich des Lesens von Daten aus den Modellen, und dann eine HTML-Seite generiert und zurückgibt. Was die Dinge komplizierter macht, ist, dass der Server auch in der Lage sein muss, die vom Benutzer bereitgestellten Daten zu verarbeiten und das Formular mit Fehlerinformationen erneut anzuzeigen, wenn es Probleme gibt.

Ein Prozessablaufdiagramm zur Verarbeitung von Formularanfragen ist unten dargestellt, beginnend mit einer Anfrage nach einer Seite mit einem Formular (angezeigt in Grün):

![Flussdiagramm zur Formularanforderungsverarbeitung eines Webservers. Browser-Anforderungen für die Seite, die das Formular enthält, indem eine HTTP-GET-Anforderung gesendet wird. Der Server erstellt ein leeres Standardformular und sendet es an den Benutzer zurück. Der Benutzer füllt oder aktualisiert das Formular, indem es über HTTP POST mit Formulardaten übermittelt wird. Der Server validiert die empfangenen Formulardaten. Wenn die vom Benutzer bereitgestellten Daten ungültig sind, erstellt der Server das Formular mit den vom Benutzer eingegebenen Daten und Fehlermeldungen neu und sendet es zurück an den Benutzer, damit dieser es aktualisiert und über HTTP Post erneut übermittelt, und validiert erneut. Wenn die Daten gültig sind, führt der Server Aktionen mit den gültigen Daten aus und leitet den Benutzer zur Erfolgs-URL um.](web_server_form_handling.png)

Wie im Diagramm oben gezeigt, muss der Formularbearbeitungscode hauptsächlich Folgendes tun:

1. Das Standardformular beim ersten Anfordern vom Benutzer anzeigen.

   - Das Formular kann leere Felder enthalten (z. B. wenn Sie einen neuen Datensatz erstellen) oder es kann mit Anfangswerten vorab ausgefüllt sein (z. B. wenn Sie einen Datensatz ändern oder nützliche Standardanfangswerte haben).

2. Daten empfangen, die vom Benutzer übermittelt wurden, normalerweise in einer HTTP-`POST`-Anfrage.
3. Die Daten validieren und bereinigen.
4. Wenn Daten ungültig sind, das Formular erneut anzeigen—diesmal mit den vom Benutzer ausgefüllten Werten und Fehlermeldungen für problematische Felder.
5. Wenn alle Daten gültig sind, erforderliche Aktionen ausführen (z. B. die Daten in der Datenbank speichern, eine Benachrichtigungs-E-Mail senden, das Ergebnis einer Suche zurückgeben, eine Datei hochladen usw.)
6. Sobald alle Aktionen abgeschlossen sind, den Benutzer auf eine andere Seite umleiten.

Häufig wird der Formularbearbeitungscode mit einer `GET`-Route für die erste Anzeige des Formulars und einer `POST`-Route zum gleichen Pfad für die Validierung und Bearbeitung der Formulardaten implementiert. Dies ist der Ansatz, der in diesem Tutorial verwendet wird.

Express selbst bietet keine spezielle Unterstützung für Formbearbeitungsoperationen, kann jedoch Middleware verwenden, um `POST`- und `GET`-Parameter aus dem Formular zu verarbeiten und ihre Werte zu validieren/bereinigen.

### Validierung und Bereinigung

Bevor die Daten aus einem Formular gespeichert werden, müssen sie validiert und bereinigt werden:

- Die Validierung überprüft, ob die eingegebenen Werte für jedes Feld geeignet sind (im richtigen Bereich, Format usw.) und dass für alle erforderlichen Felder Werte bereitgestellt wurden.
- Die Bereinigung entfernt/ersetzt Zeichen in den Daten, die möglicherweise verwendet werden könnten, um schädlichen Inhalt an den Server zu senden.

Für dieses Tutorial werden wir das beliebte [express-validator](https://www.npmjs.com/package/express-validator)-Modul verwenden, um sowohl die Validierung als auch die Bereinigung unserer Formulardaten durchzuführen.

#### Installation

Installieren Sie das Modul, indem Sie den folgenden Befehl im Stammverzeichnis des Projekts ausführen.

```bash
npm install express-validator
```

#### Verwendung von express-validator

> [!NOTE]
> Der [express-validator](https://express-validator.github.io/docs/#basic-guide) Leitfaden auf GitHub bietet einen guten Überblick über die API. Wir empfehlen, dass Sie diesen lesen, um eine Vorstellung von seinen Fähigkeiten zu erhalten (einschließlich der Verwendung von [Schema-Validation](https://express-validator.github.io/docs/guides/schema-validation/) und [Erstellung benutzerdefinierter Validatoren](https://express-validator.github.io/docs/guides/customizing/#custom-validators-and-sanitizers)). Unten behandeln wir nur einen Teil, der für die _LocalLibrary_ nützlich ist.

Um den Validator in unseren Controllern zu verwenden, geben wir die speziellen Funktionen an, die wir aus dem [express-validator](https://www.npmjs.com/package/express-validator)-Modul importieren möchten, wie unten gezeigt:

```js
const { body, validationResult } = require("express-validator");
```

Es gibt viele verfügbare Funktionen, die es Ihnen ermöglichen, Daten aus Anfrageparametern, Körper, Headern, Cookies usw. oder alle auf einmal zu überprüfen und zu bereinigen. Für dieses Tutorial werden wir hauptsächlich `body` und `validationResult` verwenden (wie oben "erforderlich").

Die Funktionen werden wie folgt definiert:

- [`body(fields, message)`](https://express-validator.github.io/docs/api/check/#body): Gibt eine Menge von Feldern im Anforderungskörper (ein `POST`-Parameter) an, die validiert und/oder bereinigt werden sollen, zusammen mit einer optionalen Fehlermeldung, die angezeigt werden kann, wenn es die Tests nicht besteht. Die Validierungs- und bereinigen-Kriterien werden an die `body()`-Methode angehängt.

  Zum Beispiel definiert die Zeile unten zuerst, dass wir das "name"-Feld überprüfen und dass ein Validierungsfehler eine Fehlermeldung "Leername" festlegen wird. Dann rufen wir die Bereinigungsmethode `trim()` auf, um Leerzeichen vom Anfang und Ende der Zeichenkette zu entfernen, und dann `isLength()`, um zu überprüfen, ob die resultierende Zeichenkette nicht leer ist. Schließlich rufen wir `escape()` auf, um HTML-Zeichen aus der Variablen zu entfernen, die in JavaScript-Cross-Site-Scripting-Angriffen verwendet werden könnten.

  ```js
  [
    // …
    body("name", "Empty name").trim().isLength({ min: 1 }).escape(),
    // …
  ];
  ```

  Dieser Test überprüft, ob das Altersfeld ein gültiges Datum ist und verwendet `optional()`, um anzugeben, dass null und leere Zeichenfolgen die Validierung nicht fehlschlagen werden.

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

  Sie können auch verschiedene Validatoren verketteln und Nachrichten hinzufügen, die angezeigt werden, wenn die vorhergehenden Validatoren false sind.

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

  Wir verwenden die Methode `isEmpty()` des Validierungsergebnisses, um zu überprüfen, ob es Fehler gab, und seine Methode `array()`, um die Menge der Fehlermeldungen zu erhalten. Weitere Informationen finden Sie im Abschnitt [Handhabung von Validierungsfehlern](https://express-validator.github.io/docs/guides/getting-started/#handling-validation-errors).

Die Validierungs- und Bereinigungsketten sind Middleware, die an den Express-Routen-Handler übergeben werden sollten (wir tun dies indirekt über den Controller). Wenn die Middleware ausgeführt wird, wird jeder Validator/Bereinigungsmechanismus in der angegebenen Reihenfolge ausgeführt.

Wir werden einige reale Beispiele behandeln, wenn wir die _LocalLibrary_-Formulare unten implementieren.

### Formulardesign

Viele der Modelle in der Bibliothek sind miteinander verknüpft/abhängig—zum Beispiel erfordert ein `Book` einen `Author` und kann auch ein oder mehrere `Genres` haben. Dies wirft die Frage auf, wie wir den Fall behandeln sollen, in dem ein Benutzer:

- Ein Objekt erstellen möchte, wenn seine verwandten Objekte noch nicht existieren (zum Beispiel ein Buch, bei dem das Autorenobjekt noch nicht definiert ist).
- Ein Objekt löschen möchte, das weiterhin von einem anderen Objekt verwendet wird (also zum Beispiel ein `Genre` löschen, das weiterhin von einem `Book` verwendet wird).

Für dieses Projekt werden wir die Implementierung vereinfachen, indem wir festlegen, dass ein Formular nur:

- Ein Objekt unter Verwendung bereits bestehender Objekte erstellen kann (also müssen Benutzer alle erforderlichen `Author`- und `Genre`-Instanzen erstellen, bevor sie versuchen, `Book`-Objekte zu erstellen).
- Ein Objekt löschen kann, wenn es nicht von anderen Objekten referenziert wird (also zum Beispiel können Sie ein `Book` erst dann löschen, wenn alle zugehörigen `BookInstance`-Objekte gelöscht wurden).

> [!NOTE]
> Eine flexiblere Implementierung könnte es Ihnen ermöglichen, die abhängigen Objekte beim Erstellen eines neuen Objekts zu erstellen und zu jeder Zeit ein beliebiges Objekt zu löschen (zum Beispiel durch Löschen abhängiger Objekte oder durch Entfernen von Referenzen zum gelöschten Objekt aus der Datenbank).

### Routen

Um unseren Formularbearbeitungscode zu implementieren, benötigen wir zwei Routen, die dasselbe URL-Muster haben. Die erste (`GET`) Route wird verwendet, um ein neues leeres Formular zum Erstellen des Objekts anzuzeigen. Die zweite Route (`POST`) wird zur Validierung der vom Benutzer eingegebenen Daten verwendet und dann zur Speicherung der Informationen und Weiterleitung zur Detailseite (wenn die Daten gültig sind) oder zur erneuten Anzeige des Formulars mit Fehlern (wenn die Daten ungültig sind).

Wir haben die Routen für alle Modell-Erstellungsseiten bereits in **/routes/catalog.js** (in einem [vorherigen Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes)) erstellt. Zum Beispiel sind die Genre-Routen unten gezeigt:

```js
// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", genre_controller.genre_create_get);

// POST request for creating Genre.
router.post("/genre/create", genre_controller.genre_create_post);
```

## Unterartikel zu Express-Formularen

Die folgenden Unterartikel führen uns durch den Prozess des Hinzufügens der erforderlichen Formulare zu unserer Beispielanwendung. Sie müssen jeden in der angegebenen Reihenfolge lesen und durcharbeiten, bevor Sie zum nächsten übergehen.

1. [Genre-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form) — Definition einer Seite zum Erstellen von `Genre`-Objekten.
2. [Autor-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form) — Definition einer Seite zum Erstellen von `Author`-Objekten.
3. [Buch-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form) — Definition einer Seite/eines Formulars zum Erstellen von `Book`-Objekten.
4. [BookInstance-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_BookInstance_form) — Definition einer Seite/eines Formulars zum Erstellen von `BookInstance`-Objekten.
5. [Autor-Formular löschen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Delete_author_form) — Definition einer Seite zum Löschen von `Author`-Objekten.
6. [Buch-Formular aktualisieren](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form) — Definition einer Seite zur Aktualisierung von `Book`-Objekten.

## Fordern Sie sich selbst heraus

Implementieren Sie die Löschseiten für die Modelle `Book`, `BookInstance` und `Genre`, indem Sie sie in den zugehörigen Detailseiten auf die gleiche Weise wie unsere _Author delete_ Seite verlinken. Die Seiten sollten dem gleichen Designansatz folgen:

- Wenn es Verweise auf das Objekt von anderen Objekten gibt, sollten diese anderen Objekte zusammen mit einem Hinweis angezeigt werden, dass dieser Datensatz nicht gelöscht werden kann, bis die aufgelisteten Objekte gelöscht wurden.
- Wenn es keine anderen Verweise auf das Objekt gibt, sollte die Ansicht dazu auffordern, es zu löschen. Wenn der Benutzer die **Löschen**-Schaltfläche drückt, sollte der Datensatz dann gelöscht werden.

Ein paar Tipps:

- Das Löschen eines `Genre` ist genauso wie das Löschen eines `Author`, da beide Objekte Abhängigkeiten von `Book` sind (sodass in beiden Fällen das Objekt nur gelöscht werden kann, wenn die zugehörigen Bücher gelöscht wurden).
- Das Löschen eines `Book` ist auch ähnlich, da Sie zuerst sicherstellen müssen, dass keine zugehörigen `BookInstances` vorhanden sind.
- Das Löschen eines `BookInstance` ist am einfachsten, da es keine abhängigen Objekte gibt. In diesem Fall finden Sie einfach den zugehörigen Datensatz und löschen diesen.

Implementieren Sie die Aktualisierungsseiten für die Modelle `BookInstance`, `Author` und `Genre`, indem Sie sie in den zugehörigen Detailseiten auf die gleiche Weise wie unsere _Book update_ Seite verlinken.

Ein paar Tipps:

- Die _Book update page_, die wir gerade implementiert haben, ist die schwierigste! Die gleichen Muster können für die Update-Seiten der anderen Objekte verwendet werden.
- Die Felder `Date of Death` und `Date of Birth` des Autors und das `Due_date`-Feld des `BookInstance` haben das falsche Format, um sie im Datums-Eingabefeld auf dem Formular einzugeben (es erfordert Daten im Format "JJJJ-MM-TT"). Der einfachste Weg, dies zu umgehen, besteht darin, eine neue virtuelle Eigenschaft für die Daten zu definieren, die die Daten passend formatiert, und dann dieses Feld in den zugehörigen Vorlagen zu verwenden.
- Wenn Sie nicht weiterkommen, gibt es Beispiele für die Update-Seiten [im Beispiel hier](https://github.com/mdn/express-locallibrary-tutorial).

## Zusammenfassung

_Express_, Node und Drittanbieterpakete auf npm bieten alles, was Sie benötigen, um Formulare zu Ihrer Website hinzuzufügen. In diesem Artikel haben Sie gelernt, wie man Formulare mit _Pug_ erstellt, Eingaben mit _express-validator_ validiert und bereinigt und Datensätze in der Datenbank hinzufügt, löscht und ändert.

Sie sollten jetzt verstehen, wie Sie grundlegende Formulare und Formularbearbeitungscode zu Ihren eigenen Node-Websites hinzufügen!

## Siehe auch

- [express-validator](https://www.npmjs.com/package/express-validator) (npm-Dokumentation).

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
