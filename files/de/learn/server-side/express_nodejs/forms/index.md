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
        Vervollständigen Sie alle vorherigen Tutorial-Themen, einschließlich <a href="/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data">Express-Tutorial Teil 5: Bibliotheksdaten anzeigen</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie man Formulare schreibt, um Daten von Benutzern zu erfassen und die Datenbank mit diesen Daten zu aktualisieren.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Ein [HTML-Formular](/de/docs/Learn/Forms) ist eine Gruppe von einem oder mehreren Feldern/Widgets auf einer Webseite, die verwendet werden können, um Informationen von Benutzern zu sammeln und an einen Server zu senden. Formulare sind ein flexibler Mechanismus zur Erfassung von Benutzereingaben, da es geeignete Formulareingaben für viele verschiedene Datentypen gibt—Textfelder, Kontrollkästchen, Optionsfelder, Datumsauswahl usw. Formulare sind auch eine relativ sichere Möglichkeit, Daten mit dem Server zu teilen, da sie es ermöglichen, Daten in `POST`-Anfragen mit Schutz gegen Cross-Site-Request-Forgery zu senden.

Die Arbeit mit Formularen kann kompliziert sein! Entwickler müssen HTML für das Formular schreiben, eingegebene Daten auf dem Server (und möglicherweise auch im Browser) validieren und ordnungsgemäß bereinigen, das Formular mit Fehlermeldungen erneut senden, um Benutzer über ungültige Felder zu informieren, die Daten verarbeiten, wenn sie erfolgreich eingereicht wurden, und schließlich irgendwie dem Benutzer zurückmelden, dass die Operation erfolgreich war.

In diesem Tutorial zeigen wir Ihnen, wie die obigen Operationen in _Express_ ausgeführt werden können. Auf dem Weg dorthin werden wir die Website _LocalLibrary_ erweitern, um Benutzern das Erstellen, Bearbeiten und Löschen von Elementen aus der Bibliothek zu ermöglichen.

> [!NOTE]
> Wir haben noch nicht besprochen, wie bestimmte Routen für authentifizierte oder autorisierte Benutzer eingeschränkt werden können, daher kann zu diesem Zeitpunkt jeder Benutzer Änderungen an der Datenbank vornehmen.

### HTML-Formulare

Zunächst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn/Forms). Betrachten Sie ein einfaches HTML-Formular mit einem einzigen Textfeld zum Eingeben des Namens eines "Teams" und seinem zugehörigen Label:

![Beispiel für ein einfaches Namensfeld in HTML-Formular](form_example_name_field.png)

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

Obwohl wir hier nur ein (Text-)Feld zum Eingeben des Teamnamens eingefügt haben, kann ein Formular _beliebig viele_ andere Eingabeelemente und deren zugehörige Labels enthalten. Der `type`-Attribut des Feldes definiert, welche Art von Widget angezeigt wird. Der `name` und `id` des Feldes werden verwendet, um das Feld in JavaScript/CSS/HTML zu identifizieren, während `value` den Anfangswert für das Feld definiert, wenn es erstmals angezeigt wird. Das passende Team-Label wird mit dem `label`-Tag festgelegt (siehe "Enter name" oben), mit einem `for`-Feld, das den `id`-Wert des zugehörigen `input` enthält.

Das `submit`-Input wird standardmäßig als Schaltfläche angezeigt—dies kann vom Benutzer gedrückt werden, um die von den anderen Eingabeelementen enthaltenen Daten an den Server hochzuladen (in diesem Fall nur den `team_name`). Die Formulareigenschaften definieren die HTTP-`method`, die verwendet wird, um die Daten zu senden, und das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource/URL, an die die Daten zur Verarbeitung gesendet werden sollen, wenn das Formular eingereicht wird. Wenn dies nicht festgelegt ist (oder auf einen leeren String gesetzt ist), wird das Formular zurück an die aktuelle Seiten-URL eingereicht.
- `method`: Die HTTP-Methode, die zum Senden der Daten verwendet wird: `POST` oder `GET`.

  - Die `POST`-Methode sollte immer verwendet werden, wenn die Daten zu einer Änderung in der Datenbank des Servers führen, da dies resistenter gegen Cross-Site-Forgery-Request-Angriffe gemacht werden kann.
  - Die `GET`-Methode sollte nur für Formulare verwendet werden, die keine Benutzerdaten ändern (z.B. ein Suchformular). Sie wird empfohlen, wenn Sie die URL bookmarken oder teilen möchten.

### Formularbearbeitungsprozess

Die Formularbearbeitung verwendet alle Techniken, die wir zum Anzeigen von Informationen über unsere Modelle gelernt haben: Die Route sendet unsere Anfrage an eine Controller-Funktion, die alle erforderlichen Datenbankaktionen ausführt, einschließlich des Lesens von Daten aus den Modellen, und dann eine HTML-Seite generiert und zurückgibt. Was die Sache komplizierter macht, ist, dass der Server auch in der Lage sein muss, die vom Benutzer bereitgestellten Daten zu verarbeiten und das Formular mit Fehlermeldungen zurückzugeben, wenn es Probleme gibt.

Ein Prozessablaufdiagramm für die Verarbeitung von Formularanfragen ist unten gezeigt, beginnend mit einer Anfrage für eine Seite, die ein Formular enthält (in grün dargestellt):

![Flowchart zur Formularanfrageverarbeitung des Webservers. Der Browser fordert die Seite mit dem Formular durch Senden einer HTTP-GET-Anfrage an. Der Server erstellt ein leeres Standardformular und sendet es an den Benutzer zurück. Der Benutzer füllt das Formular aus oder aktualisiert es und sendet es per HTTP-POST mit Formulardaten. Der Server validiert die erhaltenen Formulardaten. Wenn die vom Benutzer bereitgestellten Daten ungültig sind, erstellt der Server das Formular mit den vom Benutzer eingegebenen Daten und Fehlermeldungen erneut und sendet es an den Benutzer zurück, damit dieser es überarbeitet und erneut per HTTP-Post einreicht, und es wird erneut validiert. Wenn die Daten gültig sind, führt der Server Aktionen mit den gültigen Daten aus und leitet den Benutzer zur Erfolgs-URL weiter.](web_server_form_handling.png)

Wie im Diagramm oben gezeigt, sind die Hauptaufgaben, die der Formularbearbeitungscode erledigen muss:

1. Das Standardformular anzeigen, wenn es das erste Mal vom Benutzer angefordert wird.

   - Das Formular kann leere Felder enthalten (z.B. wenn Sie einen neuen Datensatz erstellen), oder es kann mit Anfangswerten vorausgefüllt sein (z.B. wenn Sie einen Datensatz ändern oder nützliche anfängliche Standardwerte haben).

2. Daten erhalten, die vom Benutzer übermittelt wurden, normalerweise in einer HTTP-`POST`-Anfrage.
3. Die Daten validieren und bereinigen.
4. Wenn irgendwelche Daten ungültig sind, das Formular erneut anzeigen—dieses Mal mit allen vom Benutzer ausgefüllten Werten und Fehlermeldungen für die Problemfelder.
5. Wenn alle Daten gültig sind, erforderliche Aktionen ausführen (z.B. die Daten in der Datenbank speichern, eine Benachrichtigungs-E-Mail senden, das Ergebnis einer Suche zurückgeben, eine Datei hochladen usw.)
6. Sobald alle Aktionen abgeschlossen sind, den Benutzer auf eine andere Seite umleiten.

Oft wird der Formularbearbeitungscode mithilfe einer `GET`-Route für die anfängliche Anzeige des Formulars und einer `POST`-Route zum gleichen Pfad zur Validierung und Verarbeitung der Formulardaten implementiert. Dies ist der Ansatz, der in diesem Tutorial verwendet wird.

Express selbst bietet keine spezielle Unterstützung für Formularbearbeitungsoperationen, aber es kann Middleware verwenden, um `POST`- und `GET`-Parameter aus dem Formular zu verarbeiten und deren Werte zu validieren/bereinigen.

### Validierung und Bereinigung

Bevor die Daten aus einem Formular gespeichert werden, müssen sie validiert und bereinigt werden:

- Validierung überprüft, ob eingegebene Werte für jedes Feld geeignet sind (sich im richtigen Bereich, Format usw. befinden) und dass Werte für alle erforderlichen Felder bereitgestellt wurden.
- Bereinigung entfernt/ersetzt Zeichen in den Daten, die möglicherweise für das Senden von bösartigem Inhalt zum Server verwendet werden könnten.

Für dieses Tutorial verwenden wir das beliebte Modul [express-validator](https://www.npmjs.com/package/express-validator), um sowohl die Validierung als auch die Bereinigung unserer Formulardaten durchzuführen.

#### Installation

Installieren Sie das Modul, indem Sie den folgenden Befehl im Stammverzeichnis des Projekts ausführen.

```bash
npm install express-validator
```

#### Verwendung von express-validator

> [!NOTE]
> Der [express-validator](https://express-validator.github.io/docs/#basic-guide)-Leitfaden auf GitHub bietet einen guten Überblick über die API. Wir empfehlen Ihnen, diesen zu lesen, um eine Vorstellung von all seinen Möglichkeiten zu bekommen (einschließlich der Verwendung von [Schema-Validierung](https://express-validator.github.io/docs/guides/schema-validation/) und [Erstellen benutzerdefinierter Validatoren](https://express-validator.github.io/docs/guides/customizing/#custom-validators-and-sanitizers)). Unten behandeln wir nur einen Ausschnitt, der für die _LocalLibrary_ nützlich ist.

Um den Validator in unseren Controllern zu verwenden, geben wir die besonderen Funktionen an, die wir aus dem Modul [express-validator](https://www.npmjs.com/package/express-validator) importieren möchten, wie unten gezeigt:

```js
const { body, validationResult } = require("express-validator");
```

Es stehen viele Funktionen zur Verfügung, die es ermöglichen, Daten aus Anfrageparametern, dem Body, Headers, Cookies usw. oder alle auf einmal zu überprüfen und zu bereinigen. In diesem Tutorial werden wir hauptsächlich `body` und `validationResult` verwenden (wie oben "erforderlich").

Die Funktionen sind wie folgt definiert:

- [`body(fields, message)`](https://express-validator.github.io/docs/api/check/#body): Spezifiziert eine Reihe von Feldern im Anfragetext (einem `POST`-Parameter) zur Validierung und/oder Bereinigung zusammen mit einer optionalen Fehlermeldung, die angezeigt werden kann, wenn sie die Tests nicht besteht. Die Validierungs- und Bereinigungskriterien werden an die `body()`-Methode angekettet.

  Zum Beispiel definiert die Zeile unten zuerst, dass wir das Feld "name" überprüfen und dass ein Validierungsfehler eine Fehlermeldung "Empty name" ausgeben wird. Wir rufen dann die Bereinigungsmethode `trim()` auf, um Leerzeichen am Anfang und Ende der Zeichenfolge zu entfernen, und dann `isLength()`, um zu überprüfen, ob die resultierende Zeichenfolge nicht leer ist. Schließlich rufen wir `escape()` auf, um HTML-Zeichen aus der Variablen zu entfernen, die in JavaScript-Cross-Site-Scripting-Angriffen verwendet werden könnten.

  ```js
  [
    // …
    body("name", "Empty name").trim().isLength({ min: 1 }).escape(),
    // …
  ];
  ```

  Dieser Test überprüft, ob das Altersfeld ein gültiges Datum ist und verwendet `optional()`, um anzugeben, dass null und leere Zeichenfolgen die Validierung nicht scheitern lassen.

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

  Sie können auch verschiedene Validatoren aneinanderreihen und Nachrichten hinzufügen, die angezeigt werden, wenn die vorherigen Validatoren falsch sind.

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
    // Extrahieren der Validierungsfehler aus einer Anfrage.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // Es gibt Fehler. Formular erneut mit bereinigten Werten/Fehlermeldungen rendern.
      // Fehlermeldungen können in einem Array mit `errors.array()` zurückgegeben werden.
    } else {
      // Daten aus dem Formular sind gültig.
    }
  });
  ```

  Wir verwenden die `isEmpty()`-Methode des Validierungsergebnisses, um zu überprüfen, ob es Fehler gab, und die `array()`-Methode, um die Menge der Fehlermeldungen zu erhalten. Siehe den Abschnitt [Umgang mit Validierungsfehlern](https://express-validator.github.io/docs/guides/getting-started/#handling-validation-errors) für weitere Informationen.

Die Validierungs- und Bereinigungsketten sind Middleware, die dem Express-Routen-Handler übergeben werden sollten (wir tun dies indirekt über den Controller). Wenn die Middleware ausgeführt wird, wird jeder Validator/Bereiniger in der angegebenen Reihenfolge ausgeführt.

Wir werden einige reale Beispiele behandeln, wenn wir die _LocalLibrary_-Formulare unten implementieren.

### Formularentwurf

Viele der Modelle in der Bibliothek sind miteinander verbunden/abhängig—zum Beispiel erfordert ein `Book` einen `Author` und kann auch ein oder mehrere `Genres` haben. Dies wirft die Frage auf, wie wir den Fall handhaben sollten, dass ein Benutzer:

- Ein Objekt erstellen möchte, wenn seine verwandten Objekte noch nicht existieren (zum Beispiel ein Buch, bei dem das Autorenobjekt noch nicht definiert wurde).
- Ein Objekt löschen möchte, das noch von einem anderen Objekt verwendet wird (zum Beispiel das Löschen eines `Genre`, das noch von einem `Book` verwendet wird).

Für dieses Projekt werden wir die Implementierung vereinfachen, indem wir angeben, dass ein Formular nur:

- Ein Objekt unter Verwendung bereits existierender Objekte erstellen kann (Benutzer müssen also alle erforderlichen `Author`- und `Genre`-Instanzen erstellen, bevor sie versuchen, `Book`-Objekte zu erstellen).
- Ein Objekt löschen kann, wenn es nicht von anderen Objekten referenziert wird (Sie können also z. B. kein `Book` löschen, bis alle zugehörigen `BookInstance`-Objekte gelöscht wurden).

> [!NOTE]
> Eine flexibelere Implementierung könnte es dem Benutzer ermöglichen, die abhängigen Objekte beim Erstellen eines neuen Objekts zu erstellen und jedes Objekt jederzeit zu löschen (z. B. durch Löschen abhängiger Objekte oder Entfernen von Verweisen auf das gelöschte Objekt aus der Datenbank).

### Routen

Um unser Formularbearbeitungscode zu implementieren, benötigen wir zwei Routen, die dasselbe URL-Muster haben. Die erste (`GET`) Route wird verwendet, um ein neues leeres Formular zum Erstellen des Objekts anzuzeigen. Die zweite Route (`POST`) wird verwendet, um die vom Benutzer eingegebenen Daten zu validieren und dann die Informationen zu speichern und auf die Detailseite umzuleiten (wenn die Daten gültig sind) oder das Formular mit Fehlern erneut anzuzeigen (wenn die Daten ungültig sind).

Wir haben die Routen für alle unsere Modell-Erstellungsseiten bereits in **/routes/catalog.js** erstellt (in einem [vorherigen Tutorial](/de/docs/Learn/Server-side/Express_Nodejs/routes)). Zum Beispiel sind die Genre-Routen unten gezeigt:

```js
// GET-Anfrage zum Erstellen eines Genres. HINWEIS Dies muss vor der Route kommen, die Genres anzeigt (verwendet id).
router.get("/genre/create", genre_controller.genre_create_get);

// POST-Anfrage zum Erstellen eines Genres.
router.post("/genre/create", genre_controller.genre_create_post);
```

## Express-Formular-Unterartikel

Die folgenden Unterartikel führen uns durch den Prozess des Hinzufügens der erforderlichen Formulare zu unserer Beispielanwendung. Sie müssen jeden Artikel in der angegebenen Reihenfolge lesen und durcharbeiten, bevor Sie zum nächsten übergehen.

1. [Genre-Formular erstellen](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_genre_form) — Definieren einer Seite zum Erstellen von `Genre`-Objekten.
2. [Author-Formular erstellen](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_author_form) — Definieren einer Seite zum Erstellen von `Author`-Objekten.
3. [Book-Formular erstellen](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_book_form) — Definieren einer Seite/eines Formulars zum Erstellen von `Book`-Objekten.
4. [BookInstance-Formular erstellen](/de/docs/Learn/Server-side/Express_Nodejs/forms/Create_BookInstance_form) — Definieren einer Seite/eines Formulars zum Erstellen von `BookInstance`-Objekten.
5. [Author-Formular löschen](/de/docs/Learn/Server-side/Express_Nodejs/forms/Delete_author_form) — Definieren einer Seite zum Löschen von `Author`-Objekten.
6. [Book-Formular aktualisieren](/de/docs/Learn/Server-side/Express_Nodejs/forms/Update_Book_form) — Definieren einer Seite zum Aktualisieren von `Book`-Objekten.

## Fordern Sie sich heraus

Implementieren Sie die Löschseiten für die Modelle `Book`, `BookInstance` und `Genre` und verlinken Sie sie von den zugehörigen Detailseiten auf die gleiche Weise wie unsere _Author-Lösch_-Seite. Die Seiten sollten dem gleichen Designansatz folgen:

- Wenn es Verweise auf das Objekt von anderen Objekten gibt, sollten diese anderen Objekte angezeigt werden, zusammen mit einer Notiz, dass dieser Datensatz nicht gelöscht werden kann, bis die aufgelisteten Objekte gelöscht wurden.
- Wenn es keine anderen Verweise auf das Objekt gibt, sollte die Ansicht auffordern, es zu löschen. Wenn der Benutzer die **Löschen**-Schaltfläche drückt, sollte der Datensatz dann gelöscht werden.

Einige Tipps:

- Das Löschen eines `Genre` ist wie das Löschen eines `Author`, da beide Objekte Abhängigkeiten von `Book` sind (in beiden Fällen können Sie das Objekt nur löschen, wenn die zugehörigen Bücher gelöscht wurden).
- Das Löschen eines `Book` ist ebenfalls ähnlich, da Sie zuerst überprüfen müssen, dass keine zugehörigen `BookInstances` vorhanden sind.
- Das Löschen einer `BookInstance` ist am einfachsten, da es keine abhängigen Objekte gibt. In diesem Fall können Sie einfach den zugehörigen Datensatz finden und löschen.

Implementieren Sie die Aktualisierungsseiten für die Modelle `BookInstance`, `Author` und `Genre` und verlinken Sie sie von den zugehörigen Detailseiten auf die gleiche Weise wie unsere _Book-Aktualisierung_-Seite.

Einige Tipps:

- Die _Book-Aktualisierungsseite_, die wir gerade implementiert haben, ist die schwierigste! Die gleichen Muster können für die Aktualisierungsseiten der anderen Objekte verwendet werden.
- Die `Author`-Geburts- und Todesdatenfelder sowie das `BookInstance`-Fälligkeitsdatumfeld haben das falsche Format, um in das Datum-Eingabefeld im Formular einzugeben (es erfordert Daten im Format "YYYY-MM-DD"). Der einfachste Weg, dies zu umgehen, besteht darin, eine neue virtuelle Eigenschaft für die Daten zu definieren, die die Daten entsprechend formatiert, und dieses Feld dann in den zugehörigen Vorlagendateien zu verwenden.
- Wenn Sie nicht weiterkommen, gibt es Beispiele für die Aktualisierungsseiten in [dem Beispiel hier](https://github.com/mdn/express-locallibrary-tutorial).

## Zusammenfassung

_Express_, Node und Drittanbieter-Pakete auf npm bieten alles, was Sie benötigen, um Formulare zu Ihrer Website hinzuzufügen. In diesem Artikel haben Sie gelernt, wie man mit _Pug_ Formulare erstellt, Eingaben mithilfe von _express-validator_ validiert und bereinigt sowie Datensätze in der Datenbank hinzufügt, löscht und ändert.

Sie sollten jetzt verstehen, wie Sie grundlegende Formulare und Formularbearbeitungscode zu Ihren eigenen Node-Websites hinzufügen können!

## Siehe auch

- [express-validator](https://www.npmjs.com/package/express-validator) (npm-Dokumentation).

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/Displaying_data", "Learn/Server-side/Express_Nodejs/deployment", "Learn/Server-side/Express_Nodejs")}}
