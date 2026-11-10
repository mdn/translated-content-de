---
title: "Express-Tutorial Teil 6: Arbeiten mit Formularen"
short-title: "6: Arbeiten mit Formularen"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/forms
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Express unter Verwendung von Pug arbeiten. Insbesondere erfahren Sie, wie Sie Formulare erstellen, mit denen sich Dokumente in der Datenbank der Website anlegen, aktualisieren und löschen lassen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bearbeiten Sie alle vorherigen Teile des Tutorials, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data">Express-Tutorial Teil 5: Bibliotheksdaten anzeigen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Sie Formulare erstellen, um Daten von Benutzern zu erhalten und damit die Datenbank zu aktualisieren.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Ein [HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms) ist eine Gruppe aus einem oder mehreren Feldern beziehungsweise Steuerelementen auf einer Webseite, mit denen Informationen von Benutzern erfasst und an einen Server übermittelt werden können. Formulare bieten eine flexible Möglichkeit, Benutzereingaben zu erfassen: Für viele verschiedene Datentypen stehen passende Eingabeelemente zur Verfügung, etwa Textfelder, Kontrollkästchen, Optionsfelder und Datumsauswahlfelder. Formulare ermöglichen außerdem eine vergleichsweise sichere Datenübertragung an den Server, da sie das Senden von Daten über `POST`-Anfragen mit Schutz vor Cross-Site Request Forgery erlauben.

Die Arbeit mit Formularen kann kompliziert sein! Entwickler müssen den HTML-Code für das Formular schreiben, eingegebene Daten auf dem Server validieren und ordnungsgemäß bereinigen (möglicherweise auch im Browser), das Formular bei Fehlern mit Fehlermeldungen erneut anzeigen, erfolgreich übermittelte Daten verarbeiten und den Benutzern schließlich eine Rückmeldung über den Erfolg geben.

In diesem Tutorial zeigen wir Ihnen, wie sich diese Schritte in _Express_ umsetzen lassen. Dabei erweitern wir die Website _LocalLibrary_, sodass Benutzer Bibliothekseinträge erstellen, bearbeiten und löschen können.

> [!NOTE]
> Wir haben noch nicht behandelt, wie bestimmte Routen auf authentifizierte oder autorisierte Benutzer beschränkt werden. Daher kann derzeit jeder Benutzer Änderungen an der Datenbank vornehmen.

### HTML-Formulare

Zunächst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms). Betrachten wir ein einfaches HTML-Formular mit einem einzelnen Textfeld zur Eingabe des Namens eines „Teams“ und der zugehörigen Beschriftung:

![Beispiel für ein einfaches Namensfeld in einem HTML-Formular](form_example_name_field.png)

Das Formular wird in HTML als Sammlung von Elementen innerhalb der Tags `<form>…</form>` definiert und enthält mindestens ein `input`-Element mit `type="submit"`.

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

Hier haben wir nur ein Textfeld zur Eingabe des Teamnamens eingefügt. Ein Formular _kann_ jedoch beliebig viele weitere Eingabeelemente und zugehörige Beschriftungen enthalten. Das Attribut `type` eines Feldes bestimmt, welche Art von Steuerelement angezeigt wird. `name` und `id` dienen dazu, das Feld in JavaScript, CSS und HTML zu identifizieren. `value` legt den Anfangswert des Feldes fest, wenn es zum ersten Mal angezeigt wird. Die zugehörige Beschriftung für das Team wird mit dem Tag `label` angegeben (siehe „Enter name“ oben). Dessen Attribut `for` enthält den `id`-Wert des zugehörigen `input`-Elements.

Das `submit`-Eingabeelement wird standardmäßig als Schaltfläche angezeigt. Benutzer können darauf klicken, um die Daten der anderen Eingabeelemente an den Server zu senden – in diesem Fall nur `team_name`. Die Formularattribute legen fest, welche HTTP-`method` zum Senden der Daten verwendet wird und an welches Ziel auf dem Server die Daten gesendet werden (`action`):

- `action`: Die Ressource beziehungsweise URL, an die die Daten beim Absenden des Formulars zur Verarbeitung gesendet werden. Ist dieses Attribut nicht gesetzt oder enthält es eine leere Zeichenfolge, wird das Formular an die URL der aktuellen Seite gesendet.
- `method`: Die HTTP-Methode, mit der die Daten gesendet werden: `POST` oder `GET`.
  - Die Methode `POST` sollte immer verwendet werden, wenn die Daten zu einer Änderung der Serverdatenbank führen, da sich solche Anfragen besser gegen Cross-Site-Request-Forgery-Angriffe absichern lassen.
  - Die Methode `GET` sollte nur für Formulare verwendet werden, die keine Benutzerdaten ändern, beispielsweise ein Suchformular. Sie empfiehlt sich, wenn die URL als Lesezeichen gespeichert oder geteilt werden soll.

### Ablauf der Formularverarbeitung

Bei der Formularverarbeitung kommen dieselben Techniken zum Einsatz, die wir bereits für die Anzeige von Informationen über unsere Modelle kennengelernt haben: Die Route leitet die Anfrage an eine Controller-Funktion weiter. Diese führt die erforderlichen Datenbankoperationen aus, darunter das Lesen von Daten aus den Modellen, und erzeugt anschließend eine HTML-Seite, die sie zurückgibt. Komplizierter wird es dadurch, dass der Server auch die vom Benutzer eingegebenen Daten verarbeiten und bei Problemen das Formular mit Fehlerinformationen erneut anzeigen muss.

Das folgende Ablaufdiagramm zeigt die Verarbeitung von Formularanfragen. Sie beginnt mit der Anfrage nach einer Seite, die ein Formular enthält (grün dargestellt):

![Ablaufdiagramm zur Verarbeitung von Formularanfragen auf einem Webserver. Der Browser fordert die Seite mit dem Formular über eine HTTP-GET-Anfrage an. Der Server erstellt ein leeres Standardformular und sendet es an den Benutzer zurück. Der Benutzer füllt das Formular aus oder aktualisiert es und sendet es mit den Formulardaten über HTTP POST ab. Der Server validiert die empfangenen Formulardaten. Sind die eingegebenen Daten ungültig, erstellt der Server das Formular erneut mit den Benutzereingaben und Fehlermeldungen und sendet es zurück. Der Benutzer korrigiert es und sendet es erneut über HTTP POST ab; anschließend wird es erneut validiert. Sind die Daten gültig, führt der Server die entsprechenden Aktionen aus und leitet den Benutzer zur Erfolgs-URL weiter.](web_server_form_handling.png)

Wie das Diagramm zeigt, muss der Code zur Formularverarbeitung vor allem Folgendes tun:

1. Das Standardformular anzeigen, wenn der Benutzer es zum ersten Mal aufruft.
   - Die Felder können leer sein, etwa beim Erstellen eines neuen Datensatzes. Sie können aber auch mit Anfangswerten vorbelegt sein, beispielsweise beim Ändern eines Datensatzes oder wenn sinnvolle Standardwerte vorhanden sind.

2. Die vom Benutzer übermittelten Daten empfangen, üblicherweise in einer HTTP-`POST`-Anfrage.
3. Die Daten validieren und bereinigen.
4. Falls Daten ungültig sind, das Formular erneut anzeigen – diesmal mit den eingegebenen Werten und Fehlermeldungen für die betroffenen Felder.
5. Falls alle Daten gültig sind, die erforderlichen Aktionen ausführen, beispielsweise die Daten in der Datenbank speichern, eine Benachrichtigungs-E-Mail senden, Suchergebnisse zurückgeben oder eine Datei hochladen.
6. Nach Abschluss aller Aktionen den Benutzer auf eine andere Seite weiterleiten.

Häufig wird die Formularverarbeitung mit einer `GET`-Route für die erstmalige Anzeige des Formulars und einer `POST`-Route für denselben Pfad zur Validierung und Verarbeitung der Formulardaten umgesetzt. Diesen Ansatz verwenden wir auch in diesem Tutorial.

Express selbst bietet keine spezielle Unterstützung für die Formularverarbeitung. Es kann jedoch Middleware verwenden, um `POST`- und `GET`-Parameter aus dem Formular zu verarbeiten und deren Werte zu validieren und zu bereinigen.

### Validierung und Bereinigung

Bevor Formulardaten gespeichert werden, müssen sie validiert und bereinigt werden:

- Bei der Validierung wird geprüft, ob die eingegebenen Werte für die jeweiligen Felder geeignet sind – etwa hinsichtlich Wertebereich und Format – und ob alle Pflichtfelder ausgefüllt wurden.
- Bei der Bereinigung werden Zeichen in den Daten entfernt oder ersetzt, die möglicherweise dazu verwendet werden könnten, schädliche Inhalte an den Server zu senden.

In diesem Tutorial verwenden wir das beliebte Modul [express-validator](https://www.npmjs.com/package/express-validator), um unsere Formulardaten zu validieren und zu bereinigen.

#### Installation

Installieren Sie das Modul, indem Sie den folgenden Befehl im Stammverzeichnis des Projekts ausführen.

```bash
npm install express-validator
```

#### express-validator verwenden

> [!NOTE]
> Der [express-validator-Leitfaden](https://express-validator.github.io/docs/#basic-guide) auf GitHub bietet einen guten Überblick über die API. Wir empfehlen Ihnen, ihn zu lesen, um die Möglichkeiten des Moduls kennenzulernen, darunter die [schemabasierte Validierung](https://express-validator.github.io/docs/guides/schema-validation/) und das [Erstellen benutzerdefinierter Validatoren](https://express-validator.github.io/docs/guides/customizing/#custom-validators-and-sanitizers). Im Folgenden behandeln wir nur einen Teil der Funktionen, die für _LocalLibrary_ nützlich sind.

Um den Validator in unseren Controllern zu verwenden, geben wir an, welche Funktionen wir aus dem Modul [express-validator](https://www.npmjs.com/package/express-validator) importieren möchten:

```js
import { body, validationResult } from "express-validator";
```

Es stehen viele Funktionen zur Verfügung, mit denen Sie Daten aus Anfrageparametern, dem Request-Body, Headern, Cookies und weiteren Quellen – oder aus allen gleichzeitig – prüfen und bereinigen können. In diesem Tutorial verwenden wir hauptsächlich die gerade importierten Funktionen `body` und `validationResult`.

Die Funktionen sind wie folgt definiert:

- [`body(fields, message)`](https://express-validator.github.io/docs/api/check/#body): Gibt eine Gruppe von Feldern im Request-Body (einem `POST`-Parameter) an, die validiert und/oder bereinigt werden sollen. Optional kann eine Fehlermeldung angegeben werden, die bei einem fehlgeschlagenen Test angezeigt wird. Die Kriterien für Validierung und Bereinigung werden durch Methodenverkettung an `body()` angehängt.

  In der folgenden Zeile legen wir beispielsweise zuerst fest, dass das Feld „name“ geprüft wird und bei einem Validierungsfehler die Meldung „Empty name“ ausgegeben werden soll. Anschließend rufen wir die Bereinigungsmethode `trim()` auf, um Leerzeichen am Anfang und Ende der Zeichenfolge zu entfernen. Mit `isLength()` prüfen wir dann, ob die resultierende Zeichenfolge nicht leer ist. Abschließend rufen wir `escape()` auf, um HTML-Zeichen aus dem Wert zu entfernen, die für Cross-Site-Scripting-Angriffe mit JavaScript verwendet werden könnten.

  ```js
  [
    // …
    body("name", "Empty name").trim().isLength({ min: 1 }).escape(),
    // …
  ];
  ```

  Der folgende Test prüft, ob das Altersfeld ein gültiges Datum enthält. Mit `optional()` wird festgelegt, dass `null` und leere Zeichenfolgen bei der Validierung keinen Fehler auslösen.

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

  Sie können auch verschiedene Validatoren verketten und Meldungen hinzufügen, die angezeigt werden, wenn der jeweils vorangehende Validator fehlschlägt.

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

- [`validationResult(req)`](https://express-validator.github.io/docs/api/validation-result/#validationresult): Führt die Validierung aus und stellt Fehler als `validation`-Ergebnisobjekt bereit. Die Funktion wird in einem separaten Callback aufgerufen, wie unten gezeigt:

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

  Mit der Methode `isEmpty()` des Validierungsergebnisses prüfen wir, ob Fehler aufgetreten sind. Die Methode `array()` liefert die Fehlermeldungen. Weitere Informationen finden Sie im Abschnitt [Umgang mit Validierungsfehlern](https://express-validator.github.io/docs/guides/getting-started/#handling-validation-errors).

Die Validierungs- und Bereinigungsketten sind Middleware, die an den Express-Route-Handler übergeben werden sollte. Wir tun dies indirekt über den Controller. Bei der Ausführung der Middleware werden die einzelnen Validatoren und Bereinigungsfunktionen in der angegebenen Reihenfolge ausgeführt.

Konkrete Beispiele sehen wir bei der Implementierung der _LocalLibrary_-Formulare weiter unten.

### Gestaltung der Formulare

Viele Modelle der Bibliothek stehen miteinander in Beziehung oder sind voneinander abhängig. Ein `Book` _benötigt_ beispielsweise einen `Author` und _kann_ außerdem ein oder mehrere `Genres` haben. Daraus ergibt sich die Frage, wie wir mit folgenden Fällen umgehen:

- Ein Benutzer möchte ein Objekt erstellen, obwohl die zugehörigen Objekte noch nicht existieren, etwa ein Buch, dessen Autor-Objekt noch nicht angelegt wurde.
- Ein Benutzer möchte ein Objekt löschen, das noch von einem anderen Objekt verwendet wird, beispielsweise ein `Genre`, das noch einem `Book` zugeordnet ist.

Für dieses Projekt vereinfachen wir die Implementierung durch folgende Regeln: Ein Formular kann ein Objekt nur dann:

- erstellen, wenn die dafür benötigten Objekte bereits existieren. Benutzer müssen also alle erforderlichen `Author`- und `Genre`-Instanzen erstellen, bevor sie ein `Book`-Objekt erstellen;
- löschen, wenn keine anderen Objekte darauf verweisen. Beispielsweise können Sie ein `Book` erst löschen, nachdem alle zugehörigen `BookInstance`-Objekte gelöscht wurden.

> [!NOTE]
> Eine flexiblere Implementierung könnte es ermöglichen, abhängige Objekte beim Erstellen eines neuen Objekts ebenfalls anzulegen und jedes Objekt jederzeit zu löschen – etwa indem abhängige Objekte gelöscht oder Verweise auf das gelöschte Objekt aus der Datenbank entfernt werden.

### Routen

Für die Formularverarbeitung benötigen wir zwei Routen mit demselben URL-Muster. Die erste Route (`GET`) zeigt ein neues, leeres Formular zum Erstellen des Objekts an. Die zweite Route (`POST`) validiert die eingegebenen Daten und speichert anschließend die Informationen und leitet zur Detailseite weiter (wenn die Daten gültig sind) oder zeigt das Formular mit Fehlermeldungen erneut an (wenn die Daten ungültig sind).

Die Routen für die Erstellungsseiten aller unserer Modelle haben wir bereits in **routes/catalog.js** angelegt (in einem [früheren Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes)). Die Routen für Genres sehen beispielsweise so aus:

```js
// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", genreController.genreCreateGet);

// POST request for creating Genre.
router.post("/genre/create", genreController.genreCreatePost);
```

## Unterartikel zu Formularen in Express

Die folgenden Unterartikel führen Sie durch die Erstellung der benötigten Formulare für unsere Beispielanwendung. Lesen und bearbeiten Sie sie der Reihe nach, bevor Sie mit dem jeweils nächsten Artikel fortfahren.

1. [Formular zum Erstellen eines Genre](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form) – Eine Seite zum Erstellen von `Genre`-Objekten definieren.
2. [Formular zum Erstellen eines Author](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form) – Eine Seite zum Erstellen von `Author`-Objekten definieren.
3. [Formular zum Erstellen eines Book](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form) – Eine Seite und ein Formular zum Erstellen von `Book`-Objekten definieren.
4. [Formular zum Erstellen einer BookInstance](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_BookInstance_form) – Eine Seite und ein Formular zum Erstellen von `BookInstance`-Objekten definieren.
5. [Formular zum Löschen eines Author](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Delete_author_form) – Eine Seite zum Löschen von `Author`-Objekten definieren.
6. [Formular zum Aktualisieren eines Book](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form) – Eine Seite zum Aktualisieren von `Book`-Objekten definieren.

## Probieren Sie es selbst aus

Implementieren Sie Seiten zum Löschen von Objekten der Modelle `Book`, `BookInstance` und `Genre`. Verlinken Sie diese von den jeweiligen Detailseiten aus, wie bei unserer Seite zum Löschen von _Author_. Die Seiten sollten demselben Gestaltungsansatz folgen:

- Wenn andere Objekte auf das betreffende Objekt verweisen, sollen diese Objekte zusammen mit einem Hinweis angezeigt werden, dass der Datensatz erst gelöscht werden kann, nachdem die aufgelisteten Objekte gelöscht wurden.
- Wenn keine anderen Objekte darauf verweisen, soll die Ansicht zum Löschen auffordern. Klickt der Benutzer auf die Schaltfläche **Löschen**, soll der Datensatz gelöscht werden.

Einige Tipps:

- Das Löschen eines `Genre` funktioniert genauso wie das Löschen eines `Author`, da beide Objekte Abhängigkeiten von `Book` sind. In beiden Fällen können Sie das Objekt erst löschen, wenn die zugehörigen Bücher gelöscht wurden.
- Das Löschen eines `Book` ist ähnlich: Zunächst müssen Sie prüfen, ob noch zugehörige `BookInstances` vorhanden sind.
- Das Löschen einer `BookInstance` ist am einfachsten, da keine Objekte von ihr abhängen. Sie können den zugehörigen Datensatz einfach suchen und löschen.

Implementieren Sie Seiten zum Aktualisieren von Objekten der Modelle `BookInstance`, `Author` und `Genre`. Verlinken Sie diese von den jeweiligen Detailseiten aus, wie bei unserer Seite zum Aktualisieren von _Book_.

Einige Tipps:

- Die gerade implementierte Seite zum Aktualisieren von _Book_ ist die schwierigste! Für die Aktualisierungsseiten der anderen Objekte können Sie dieselben Muster verwenden.
- Die Felder für Todes- und Geburtsdatum von `Author` sowie das Feld `due_back` von `BookInstance` haben nicht das richtige Format für das Datumseingabefeld des Formulars. Dieses erwartet Daten im Format „YYYY-MM-DD“. Am einfachsten lösen Sie das Problem, indem Sie für die Datumsangaben eine neue virtuelle Eigenschaft definieren, die sie entsprechend formatiert, und diese Eigenschaft dann in den zugehörigen Ansichtsvorlagen verwenden.
- Falls Sie nicht weiterkommen, finden Sie [hier Beispielimplementierungen der Aktualisierungsseiten](https://github.com/mdn/express-locallibrary-tutorial).

## Zusammenfassung

_Express_, Node und Pakete von Drittanbietern auf npm bieten alles, was Sie benötigen, um Formulare zu Ihrer Website hinzuzufügen. In diesem Artikel haben Sie gelernt, wie Sie mit _Pug_ Formulare erstellen, Eingaben mit _express-validator_ validieren und bereinigen sowie Datensätze in der Datenbank hinzufügen, löschen und ändern.

Sie sollten jetzt verstehen, wie Sie Ihren eigenen Node-Websites einfache Formulare und Code zur Formularverarbeitung hinzufügen können!

## Siehe auch

- [express-validator](https://www.npmjs.com/package/express-validator) (npm-Dokumentation).

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data", "Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
