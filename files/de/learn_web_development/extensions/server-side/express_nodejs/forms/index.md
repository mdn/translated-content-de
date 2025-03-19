---
title: "Express Tutorial Teil 6: Arbeiten mit Formularen"
short-title: "6: Arbeiten mit Formularen"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Express unter Verwendung von Pug arbeiten. Insbesondere werden wir besprechen, wie Sie Formulare schreiben können, um Dokumente auf der Website-Datenbank zu erstellen, zu aktualisieren und zu löschen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Alle vorherigen Tutorial-Themen abschließen, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data">Express-Tutorial Teil 5: Anzeigedaten der Bibliothek</a>
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

Ein [HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms) ist eine Gruppe von einem oder mehreren Feldern/Widgets auf einer Webseite, die verwendet werden können, um Informationen von Benutzern zur Übermittlung an einen Server zu sammeln. Formulare sind ein flexibler Mechanismus zur Erfassung von Benutzereingaben, da es geeignete Formulareingaben für viele verschiedene Datentypen gibt—Textfelder, Kontrollkästchen, Optionsfelder, Datumsauswahler usw. Formulare bieten auch eine relativ sichere Möglichkeit, Daten mit dem Server zu teilen, da wir Daten in `POST`-Anfragen mit Schutz vor Cross-Site-Anfragenfälschungen senden können.

Die Arbeit mit Formularen kann kompliziert sein! Entwickler müssen HTML für das Formular schreiben, eingegebene Daten auf dem Server validieren und richtig bereinigen (und möglicherweise auch im Browser), das Formular mit Fehlermeldungen erneut senden, um Benutzer über ungültige Felder zu informieren, die Daten verarbeiten, wenn sie erfolgreich übermittelt wurden, und schließlich auf irgendeine Weise auf den Benutzer reagieren, um den Erfolg anzuzeigen.

In diesem Tutorial zeigen wir Ihnen, wie die obigen Operationen in _Express_ durchgeführt werden können. Dabei erweitern wir die _LocalLibrary_-Website, um Benutzern das Erstellen, Bearbeiten und Löschen von Elementen in der Bibliothek zu ermöglichen.

> [!NOTE]
> Wir haben noch nicht besprochen, wie bestimmte Routen auf authentifizierte oder autorisierte Benutzer beschränkt werden, daher kann jede*r Benutzer*in derzeit Änderungen an der Datenbank vornehmen.

### HTML-Formulare

Zuerst eine kurze Übersicht über [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms). Betrachten Sie ein einfaches HTML-Formular mit einem einzigen Textfeld zum Eingeben des Namens eines "Teams" und seinem zugehörigen Beschriftungstext:

![Einfaches Namensfeldbeispiel in HTML-Formular](form_example_name_field.png)

Das Formular wird in HTML als Sammlung von Elementen innerhalb der `<form>…</form>`-Tags definiert, die mindestens ein `input`-Element vom Typ `submit` enthalten muss.

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

Während wir hier nur ein (Text-)Feld für die Eingabe des Teamnamens eingetragen haben, kann ein Formular _jede Zahl_ anderer Eingabeelemente und deren zugehörige Beschriftungstexte enthalten. Das `type`-Attribut des Feldes definiert, welcher Art von Widget angezeigt wird. Der `name` und `id` des Feldes werden verwendet, um das Feld in JavaScript/CSS/HTML zu identifizieren, während `value` den Anfangswert für das Feld definiert, wenn es das erste Mal angezeigt wird. Die passende Teambeschriftung wird mit dem `label`-Tag angegeben (siehe "Namen eingeben" oben), wobei ein `for`-Feld den `id`-Wert des zugehörigen `input` enthält.

Das `submit`-Element wird standardmäßig als Schaltfläche dargestellt—dieses kann vom Benutzer gedrückt werden, um die Daten, die von den anderen Eingabeelementen enthalten sind, an den Server zu senden (in diesem Fall nur der `team_name`). Die Formulareigenschaften definieren die HTTP-`Methode`, die zum Übertragen der Daten verwendet wird, sowie das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource/URL, wohin die Daten zur Verarbeitung gesendet werden sollen, wenn das Formular eingereicht wird. Wenn dies nicht gesetzt ist (oder auf eine leere Zeichenkette eingestellt ist), wird das Formular zurück an die aktuelle Seiten-URL gesendet.
- `method`: Die HTTP-Methode, die zum Senden der Daten verwendet wird: `POST` oder `GET`.

  - Die `POST`-Methode sollte immer verwendet werden, wenn die Daten zu einer Änderung der Serverdatenbank führen, da dies gegen Cross-Site-Scripting-Angriffe widerstandsfähiger gemacht werden kann.
  - Die `GET`-Methode sollte nur für Formulare verwendet werden, die keine Benutzerdaten ändern (z. B. ein Suchformular). Es wird empfohlen, wenn Sie die URL als Lesezeichen speichern oder teilen möchten.

### Formularbearbeitungsprozess

Der Umgang mit Formularen nutzt alle gleichen Techniken, die wir zum Anzeigen von Informationen über unsere Modelle gelernt haben: Die Route sendet unsere Anfrage an eine Controller-Funktion, die alle erforderlichen Datenbankaktionen durchführt, einschließlich Lesen von Daten aus den Modellen, und dann eine HTML-Seite generiert und zurückgibt. Was die Sache komplizierter macht, ist, dass der Server auch in der Lage sein muss, die vom Benutzer bereitgestellten Daten zu verarbeiten und das Formular mit Fehlerinformationen erneut anzuzeigen, wenn Probleme bestehen.

Ein Prozessablaufdiagramm zur Verarbeitung von Formularanforderungen wird unten gezeigt, beginnend mit einer Anfrage für eine Seite, die ein Formular enthält (im Grün):

![Web-Server-Formularanforderungsverarbeitung Ablaufdiagramm. Browser-Anfragen für die Seite, die das Formular enthalten, senden eine HTTP-GET-Anfrage. Der Server erstellt ein leeres Standardformular und gibt es dem Benutzer zurück. Der Benutzer füllt das Formular aus oder aktualisiert es, reicht es über HTTP POST mit Formulardaten ein. Der Server validiert die empfangenen Formulardaten. Wenn die vom Benutzer bereitgestellten Daten ungültig sind, erstellt der Server das Formular mit den Benutzer eingegebenen Daten und Fehlermeldungen neu und sendet es an den Benutzer zurück, damit der Benutzer es aktualisiert und es über HTTP Post erneut einreicht und erneut validiert. Wenn die Daten gültig sind, führt der Server Aktionen mit den gültigen Daten aus und leitet den Benutzer auf die Erfolgs-URL um.](web_server_form_handling.png)

Wie im Diagramm oben gezeigt, sind die Hauptaufgaben, die der Code zur Formularbearbeitung ausführen muss:

1. Das Standardformular anzeigen, wenn es vom Benutzer das erste Mal angefordert wird.

   - Das Formular kann leere Felder enthalten (z.B. wenn Sie einen neuen Datensatz erstellen), oder es kann mit Anfangswerten vorkonfiguriert sein (z.B. wenn Sie einen Datensatz ändern oder nützliche Standardanfangswerte haben).

2. Daten empfangen, die vom Benutzer übermittelt wurden, in der Regel in einer HTTP-`POST`-Anfrage.
3. Die Daten validieren und bereinigen.
4. Bei ungültigen Daten das Formular erneut anzeigen—diesmal mit allen vom Benutzer ausgefüllten Werten und Fehlermeldungen für die problematischen Felder.
5. Wenn alle Daten gültig sind, die erforderlichen Aktionen ausführen (z.B. die Daten in der Datenbank speichern, eine Benachrichtigungs-E-Mail senden, das Ergebnis einer Suche zurückgeben, eine Datei hochladen usw.).
6. Sobald alle Aktionen abgeschlossen sind, den Benutzer auf eine andere Seite umleiten.

Häufig wird der Formularbearbeitungscode mit einer `GET`-Route für die anfängliche Anzeige des Formulars und einer `POST`-Route für denselben Pfad zur Validierung und Verarbeitung der Formulardaten implementiert. Dies ist der Ansatz, der in diesem Tutorial verwendet wird.

Express bietet selbst keine spezifische Unterstützung für Formularbearbeitungsoperationen, kann jedoch Middleware verwenden, um `POST`- und `GET`-Parameter aus dem Formular zu verarbeiten und deren Werte zu validieren/bereinigen.

### Validierung und Bereinigung

Bevor die Daten aus einem Formular gespeichert werden, müssen sie validiert und bereinigt werden:

- Bei der Validierung wird überprüft, ob die eingegebenen Werte für jedes Feld geeignet sind (sich im richtigen Bereich befinden, das richtige Format haben usw.) und ob Werte für alle erforderlichen Felder bereitgestellt wurden.
- Die Bereinigung entfernt/ersetzt Zeichen in den Daten, die möglicherweise verwendet werden könnten, um bösartigen Inhalt auf den Server zu senden.

Für dieses Tutorial verwenden wir das beliebte [express-validator](https://www.npmjs.com/package/express-validator)-Modul, um sowohl die Validierung als auch die Bereinigung unserer Formulardaten durchzuführen.

#### Installation

Installieren Sie das Modul, indem Sie den folgenden Befehl im Stammverzeichnis des Projekts ausführen.

```bash
npm install express-validator
```

#### Verwendung von express-validator

> [!NOTE]
> Der [express-validator](https://express-validator.github.io/docs/#basic-guide)-Leitfaden auf GitHub bietet einen guten Überblick über die API. Wir empfehlen Ihnen, diesen zu lesen, um eine Vorstellung von all seinen Fähigkeiten zu bekommen (einschließlich der Verwendung von [Schema-Validierung](https://express-validator.github.io/docs/guides/schema-validation/) und [Erstellen benutzerdefinierter Validatoren](https://express-validator.github.io/docs/guides/customizing/#custom-validators-and-sanitizers)). Unten behandeln wir nur eine Teilmenge, die für die _LocalLibrary_ nützlich ist.

Um den Validator in unseren Controllern zu verwenden, geben wir an, welche Funktionen wir aus dem [express-validator](https://www.npmjs.com/package/express-validator)-Modul importieren möchten, wie unten gezeigt:

```js
const { body, validationResult } = require("express-validator");
```

Es gibt viele verfügbare Funktionen, mit denen Sie Daten aus Anfrageparametern, Anfragenkörper, Headern, Cookies usw. überprüfen und bereinigen können, oder alle auf einmal. Für dieses Tutorial verwenden wir hauptsächlich `body` und `validationResult` (wie "benötigt" oben).

Die Funktionen sind wie folgt definiert:

- [`body(fields, message)`](https://express-validator.github.io/docs/api/check/#body): Gibt ein Set von Feldern im Anfragenkörper an (ein `POST`-Parameter), das validiert und/oder bereinigt werden soll, zusammen mit einer optionalen Fehlermeldung, die angezeigt werden kann, wenn es die Tests nicht besteht. Die Validierungs- und Bereinigungskriterien werden an die `body()`-Methode angehängt.

  Zum Beispiel definiert die folgende Zeile zuerst, dass wir das „name“-Feld überprüfen und dass ein Validierungsfehler eine Fehlermeldung "Leerer Name" setzen wird. Wir rufen dann die Bereinigungsmethode `trim()` auf, um Leerzeichen am Anfang und Ende der Zeichenfolge zu entfernen, und dann `isLength()`, um zu überprüfen, ob die resultierende Zeichenfolge nicht leer ist. Schließlich rufen wir `escape()` auf, um HTML-Zeichen aus der Variablen zu entfernen, die möglicherweise in JavaScript-Cross-Site-Scripting-Angriffen verwendet werden könnten.

  ```js
  [
    // …
    body("name", "Empty name").trim().isLength({ min: 1 }).escape(),
    // …
  ];
  ```

  Dieser Test überprüft, ob das Altersfeld ein gültiges Datum ist, und verwendet `optional()`, um anzugeben, dass Null- und leere Zeichenfolgen die Validierung nicht fehlschlagen.

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

- [`validationResult(req)`](https://express-validator.github.io/docs/api/validation-result/#validationresult): Führt die Validierung durch, wobei Fehler in Form eines `validation`-Ergebnisobjekts verfügbar gemacht werden. Dies wird in einem separaten Callback aufgerufen, wie unten gezeigt:

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

  Wir verwenden die `isEmpty()`-Methode des Validationsergebnisses, um zu überprüfen, ob es Fehler gab, und deren `array()`-Methode, um das Set von Fehlermeldungen zu erhalten. Weitere Informationen finden Sie im [Abschnitt zur Handhabung von Validierungsfehlern](https://express-validator.github.io/docs/guides/getting-started/#handling-validation-errors).

Die Validierungs- und Bereinigungsketten sind Middleware, die an den Express-Routenhandler übergeben werden sollte (dies tun wir indirekt über den Controller). Wenn die Middleware ausgeführt wird, wird jeder Validator/Bereiniger in der angegebenen Reihenfolge ausgeführt.

Wir werden einige reale Beispiele behandeln, wenn wir die _LocalLibrary_-Formulare unten implementieren.

### Formulargestaltung

Viele der Modelle in der Bibliothek sind miteinander verbunden/abhängig—zum Beispiel erfordert ein `Book` einen `Author` und kann auch ein oder mehrere `Genres` haben. Dies wirft die Frage auf, wie wir den Fall behandeln sollten, in dem ein Benutzer wünscht:

- Ein Objekt zu erstellen, wenn seine verwandten Objekte noch nicht existieren (zum Beispiel ein Buch, bei dem das Autorenobjekt noch nicht definiert wurde).
- Ein Objekt zu löschen, das noch von einem anderen Objekt verwendet wird (also zum Beispiel ein `Genre` zu löschen, das noch von einem `Book` verwendet wird).

Für dieses Projekt werden wir die Implementierung vereinfachen, indem wir festlegen, dass ein Formular nur:

- Ein Objekt unter Verwendung von bereits vorhandenen Objekten erstellen kann (Benutzer müssen also alle erforderlichen `Author`- und `Genre`-Instanzen erstellen, bevor sie versuchen, `Book`-Objekte zu erstellen).
- Ein Objekt löschen kann, wenn es nicht von anderen Objekten referenziert wird (also z.B. können Sie ein `Book` erst löschen, wenn alle zugehörigen `BookInstance`-Objekte gelöscht wurden).

> [!NOTE]
> Eine flexiblere Implementierung könnte es ermöglichen, die abhängigen Objekte beim Erstellen eines neuen Objekts zu erstellen und jedes Objekt jederzeit zu löschen (zum Beispiel durch Löschen abhängiger Objekte oder durch Entfernen von Verweisen auf das gelöschte Objekt in der Datenbank).

### Routen

Um unseren Code zur Verarbeitung von Formularen zu implementieren, benötigen wir zwei Routen, die dasselbe URL-Muster aufweisen. Die erste (`GET`-Route) wird verwendet, um ein neues leeres Formular zur Erstellung des Objekts anzuzeigen. Die zweite Route (`POST`) wird zur Validierung der vom Benutzer eingegebenen Daten sowie zum Speichern der Informationen und Umleiten zur Detailseite (wenn die Daten gültig sind) oder zur erneuten Anzeige des Formulars mit Fehlern (wenn die Daten ungültig sind) verwendet.

Wir haben die Routen für alle unsere Model-Serie bereits in **/routes/catalog.js** erstellt (in einem [früheren Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes)). Zum Beispiel werden die Genres-Routen unten gezeigt:

```js
// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", genre_controller.genre_create_get);

// POST request for creating Genre.
router.post("/genre/create", genre_controller.genre_create_post);
```

## Express-Formulare Unterartikel

Die folgenden Unterartikel führen uns durch den Prozess, die erforderlichen Formulare zu unserer Beispielanwendung hinzuzufügen. Sie müssen jeden einzelnen in der Reihenfolge lesen und durcharbeiten, bevor Sie zum nächsten gehen.

1. [Genre-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form) — Eine Seite zum Erstellen von `Genre`-Objekten definieren.
2. [Autor-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form) — Eine Seite zum Erstellen von `Author`-Objekten definieren.
3. [Buch-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form) — Eine Seite/Ein Formular zum Erstellen von `Book`-Objekten definieren.
4. [Buchinstanz-Formular erstellen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_BookInstance_form) — Eine Seite/Ein Formular zum Erstellen von `BookInstance`-Objekten definieren.
5. [Autor-Formular löschen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Delete_author_form) — Eine Seite zum Löschen von `Author`-Objekten definieren.
6. [Buch-Formular aktualisieren](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form) — Eine Seite zur Aktualisierung von `Book`-Objekten definieren.

## Fordern Sie sich selbst heraus

Implementieren Sie die Löschseiten für die `Book`, `BookInstance` und `Genre`-Modelle, indem Sie sie in der gleichen Weise wie unsere _Author delete_ Seite von den zugehörigen Detailseiten aus verlinken. Die Seiten sollten dem gleichen Designansatz folgen:

- Wenn es Verweise von anderen Objekten auf das Objekt gibt, dann sollten diese anderen Objekte angezeigt werden, zusammen mit einem Hinweis, dass dieser Eintrag nicht gelöscht werden kann, bis die aufgelisteten Objekte gelöscht wurden.
- Wenn es keine anderen Verweise auf das Objekt gibt, sollte die Ansicht zum Löschen auffordern. Wenn der Benutzer die **Löschen**-Schaltfläche drückt, sollte der Datensatz gelöscht werden.

Einige Tipps:

- Das Löschen eines `Genre` ist genau wie das Löschen eines `Author`, da beide Objekte Abhängigkeiten von `Book` sind (in beiden Fällen können Sie das Objekt nur löschen, wenn die zugehörigen Bücher gelöscht wurden).
- Das Löschen eines `Book` ist ebenfalls ähnlich, da Sie zuerst überprüfen müssen, dass es keine zugehörigen `BookInstances` gibt.
- Das Löschen einer `BookInstance` ist am einfachsten, da es keine abhängigen Objekte gibt. In diesem Fall können Sie einfach den zugehörigen Eintrag finden und löschen.

Implementieren Sie die Aktualisierungsseiten für die `BookInstance`, `Author` und `Genre`-Modelle, indem Sie sie in der gleichen Weise wie unsere _Book update_ Seite von den zugehörigen Detailseiten aus verlinken.

Einige Tipps:

- Die _Buchaktualisierungsseite_, die wir gerade implementiert haben, ist die schwierigste! Die gleichen Muster können für die Aktualisierungsseiten der anderen Objekte verwendet werden.
- Die `Author`-Geburts- und Todesdatumsfelder sowie das `BookInstance`-Fälligkeitsdatumfeld sind im falschen Format, um in das Datums-Eingabefeld im Formular eingegeben zu werden (es erfordert Daten im Format "YYYY-MM-DD"). Der einfachste Weg, dies zu umgehen, besteht darin, eine neue virtuelle Eigenschaft für die Daten zu definieren, die die Daten entsprechend formatiert, und dieses Feld dann in den zugehörigen Ansichtsvorlagen zu verwenden.
- Wenn Sie nicht weiterkommen, finden Sie Beispiele für die Aktualisierungsseiten im [Beispiel hier](https://github.com/mdn/express-locallibrary-tutorial).

## Zusammenfassung

_Express_, Node und Drittanbieterpakete auf npm bieten alles, was Sie benötigen, um Formulare zu Ihrer Website hinzuzufügen. In diesem Artikel haben Sie gelernt, wie man Formulare mit _Pug_ erstellt, Eingaben mit _express-validator_ validiert und bereinigt und wie man Datensätze in der Datenbank hinzufügt, löscht und ändert.

Sie sollten jetzt verstehen, wie Sie grundlegende Formulare und Formularbearbeitungscode zu Ihren eigenen Node-Websites hinzufügen können!

## Siehe auch

- [express-validator](https://www.npmjs.com/package/express-validator) (npm-Dokumentation).

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
