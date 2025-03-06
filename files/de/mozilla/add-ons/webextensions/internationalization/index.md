---
title: Internationalisierung
slug: Mozilla/Add-ons/WebExtensions/Internationalization
l10n:
  sourceCommit: 5f50e55f9c64273f69bd01ed16698fe32f1c20c2
---

{{AddonSidebar}}

Die [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) API bietet ein hilfreiches Modul zur Internationalisierung von Erweiterungen — [i18n](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n). In diesem Artikel werden wir seine Funktionen erkunden und ein praktisches Beispiel dafür geben, wie es funktioniert. Das i18n-System für Erweiterungen, die mit WebExtension-APIs erstellt wurden, ist vergleichbar mit gängigen JavaScript-Bibliotheken für i18n, wie [i18n.js](http://i18njs.com/).

> [!NOTE]
> Die in diesem Artikel vorgestellte Beispielerweiterung — [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) — ist auf GitHub verfügbar. Folgen Sie dem Quellcode, während Sie die Abschnitte unten durchgehen.

## Anatomie einer internationalisierten Erweiterung

Eine internationalisierte Erweiterung kann die gleichen Funktionen wie jede andere Erweiterung enthalten — [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts), [Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) usw. — enthält jedoch auch einige zusätzliche Teile, die es ermöglichen, zwischen verschiedenen Gebieten zu wechseln. Diese sind im folgenden Verzeichnisbaum zusammengefasst:

- Erweiterungs-Stammverzeichnis/

  - \_locales

    - en

      - messages.json

        - Englische Nachrichten (Strings)

    - de

      - messages.json

        - Deutsche Nachrichten (Strings)

    - usw.

  - manifest.json

    - lokalenabhängige Metadaten

  - myJavascript.js

    - JavaScript zum Abrufen der Browsersprache, lokalabhängige Nachrichten, usw.

  - myStyles.css

    - lokalenabhängiges CSS

Lassen Sie uns nun jede der neuen Funktionen der Reihe nach erkunden — jeder der untenstehenden Abschnitte entspricht einem Schritt, den Sie befolgen sollten, wenn Sie Ihre Erweiterung internationalisieren.

## Bereitstellen lokalisierter Strings in \_locales

> [!NOTE]
> Sie können Sprach-Subtags mit dem _Find_-Werkzeug auf der [Language subtag lookup page](https://r12a.github.io/app-subtags/) nachschlagen. Beachten Sie, dass Sie nach dem englischen Namen der Sprache suchen müssen.

Jedes i18n-System erfordert die Bereitstellung von Strings, die in alle unterstützten Gebiete übersetzt wurden. In Erweiterungen sind diese in einem Verzeichnis namens `_locales` enthalten, das sich im Stammverzeichnis der Erweiterung befindet. Jede individuelle Locale hat ihre Strings (Nachrichten genannt) in einer Datei namens `messages.json`, die sich in einem Unterverzeichnis von `_locales` befindet, das mit dem Sprach-Subtag der betreffenden Sprache benannt ist.

Beachten Sie, dass, wenn das Subtag eine einfache Sprache plus eine regionale Variante umfasst, dann Sprache und Variante konventionell mit einem Bindestrich getrennt werden: zum Beispiel, "en-US". Allerdings muss in den Verzeichnissen unter `_locales` **der Separator ein Unterstrich** sein: "en_US".

So haben [wir in unserer Beispiel-App](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n/_locales) Verzeichnisse für "en" (Englisch), "de" (Deutsch), "nl" (Niederländisch) und "ja" (Japanisch). Jedes dieser Verzeichnisse enthält eine `messages.json`-Datei.

Schauen wir uns nun die Struktur einer dieser Dateien an ([\_locales/en/messages.json](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/_locales/en/messages.json)):

```json
{
  "extensionName": {
    "message": "Notify link clicks i18n",
    "description": "Name of the extension."
  },

  "extensionDescription": {
    "message": "Shows a notification when the user clicks on links.",
    "description": "Description of the extension."
  },

  "notificationTitle": {
    "message": "Click notification",
    "description": "Title of the click notification."
  },

  "notificationContent": {
    "message": "You clicked $URL$.",
    "description": "Tells the user which link they clicked.",
    "placeholders": {
      "url": {
        "content": "$1",
        "example": "https://developer.mozilla.org"
      }
    }
  }
}
```

Diese Datei ist standardmäßiges JSON — jedes ihrer Mitglieder ist ein Objekt mit einem Namen, das ein `message` und eine `description` enthält. Alle diese Elemente sind Strings; `$URL$` ist ein Platzhalter, der beim Aufruf des `notificationContent`-Mitglieds durch die Erweiterung durch einen Teilstring ersetzt wird. Sie werden lernen, wie man dies im Abschnitt [Nachrichtstrings aus JavaScript abrufen](#nachrichtstrings_aus_javascript_abrufen) durchführt.

> [!NOTE]
> Sie können viel mehr Informationen über den Inhalt von `messages.json`-Dateien in unserem [Lokalspezifische Nachricht-Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference) finden.

## Internationalisierung der manifest.json

Es gibt ein paar verschiedene Aufgaben, die erledigt werden müssen, um Ihre manifest.json zu internationalisieren.

### Abrufen lokalisierter Strings in Manifests

Ihre [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/manifest.json) enthält Strings, die dem Benutzer angezeigt werden, wie der Name und die Beschreibung der Erweiterung. Wenn Sie diese Strings internationalisieren und die entsprechenden Übersetzungen in messages.json platzieren, dann wird dem Benutzer basierend auf der aktuellen Locale die korrekte Übersetzung des Strings angezeigt.

Um Strings zu internationalisieren, spezifizieren Sie sie wie folgt:

```json
"name": "__MSG_extensionName__",
"description": "__MSG_extensionDescription__",
```

Hierbei rufen wir nachrichtenabhängige Strings abhängig von der Browsersprache ab, anstatt nur statische Strings zu inkludieren.

Um einen Nachrichten-String so aufzurufen, müssen Sie ihn folgendermaßen spezifizieren:

1. Zwei Unterstriche, gefolgt von
2. Dem String "MSG", gefolgt von
3. Einem Unterstrich, gefolgt von
4. Dem Namen der Nachricht, die Sie wie in `messages.json` definiert aufrufen möchten, gefolgt von
5. Zwei Unterstrichen

```plain
__MSG_ + messageName + __
```

### Angabe einer Standard-Locale

Ein weiteres Feld, das Sie in Ihrer manifest.json angeben sollten, ist [default_locale](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale):

```json
"default_locale": "en"
```

Dies spezifiziert eine Standard-Locale, die verwendet werden soll, wenn die Erweiterung keinen lokalisierten String für die aktuelle Browsersprache enthält. Alle Nachrichten-Strings, die in der Browsersprache nicht verfügbar sind, werden stattdessen aus der Standard-Locale entnommen. Es gibt einige weitere Details, die man im Hinblick darauf beachten sollte, wie der Browser Strings auswählt — sehen Sie [Lokalisierten String auswählen](#auswahl_lokalisierten_strings).

## Lokalenabhängiges CSS

Beachten Sie, dass Sie auch lokalisierte Strings aus CSS-Dateien in der Erweiterung abrufen können. Zum Beispiel könnten Sie eine lokalenabhängige CSS-Regel konstruieren wollen, wie diese:

```css
header {
  background-image: url(../images/__MSG_extensionName__/header.png);
}
```

Dies ist nützlich, obwohl Sie eine solche Situation vielleicht besser mithilfe von [Vordefinierten Nachrichten](#vordefinierte_nachrichten) handhaben könnten.

## Nachrichtstrings aus JavaScript abrufen

Wenn Sie nun Ihre Nachrichtstrings eingerichtet und Ihr Manifest erstellt haben, müssen Sie nur noch beginnen, Ihre Nachrichtstrings aus JavaScript aufzurufen, damit Ihre Erweiterung soweit wie möglich in der richtigen Sprache "sprechen" kann. Die eigentliche [i18n API](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n) ist ziemlich einfach und enthält nur vier Hauptmethoden:

- {{WebExtAPIRef("i18n.getMessage()")}} werden Sie wahrscheinlich am häufigsten verwenden — dies ist die Methode, mit der Sie einen spezifischen Sprachstring abrufen, wie oben erwähnt. Weiter unten werden wir spezifische Anwendungsbeispiele hierfür sehen.
- Die Methoden {{WebExtAPIRef("i18n.getAcceptLanguages()")}} und {{WebExtAPIRef("i18n.getUILanguage()")}} könnten verwendet werden, wenn Sie die Benutzeroberfläche abhängig von der Locale anpassen müssen — vielleicht möchten Sie bevorzugte Sprachen der Benutzer weiter oben in einer Präferenzenliste anzeigen oder kulturelle Informationen einblenden, die nur für eine bestimmte Sprache relevant sind, oder angezeigte Daten entsprechend der Browsersprache formatieren.
- Die Methode {{WebExtAPIRef("i18n.detectLanguage()")}} könnte verwendet werden, um die Sprache von Benutzerinhalten zu erkennen und diese entsprechend zu formatieren.

In unserem Beispiel [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) enthält das [Hintergrundskript](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/background-script.js) die folgenden Zeilen:

```js
let title = browser.i18n.getMessage("notificationTitle");
let content = browser.i18n.getMessage("notificationContent", message.url);
```

Die erste Zeile ruft einfach das `notificationTitle` Nachrichtenfeld aus der verfügbaren `messages.json`-Datei ab, die für die aktuelle Browsersprache am passendsten ist. Die zweite Zeile ist ähnlich, wird jedoch als zweiter Parameter eine URL übergeben. Warum? So geben Sie den Inhalt an, der den `$URL$`-Platzhalter ersetzt, den wir im `notificationContent`-Nachrichtenfeld sehen:

```json
"notificationContent": {
  "message": "You clicked $URL$.",
  "description": "Tells the user which link they clicked.",
  "placeholders": {
    "url" : {
      "content" : "$1",
      "example" : "https://developer.mozilla.org"
    }
  }
}
```

Das `"placeholders"`-Mitglied definiert alle Platzhalter und woher sie abgerufen werden. Der `"url"`-Platzhalter gibt an, dass dessen Inhalt aus `$1` entnommen wird, welches der erste Wert ist, der im zweiten Parameter von `getMessage()` gegeben wird. Da der Platzhalter `"url"` genannt wird, verwenden wir `$URL$`, um ihn im tatsächlichen Nachrichtenstring aufzurufen (also für `"name"` würden Sie `$NAME$` verwenden, usw.). Wenn Sie mehrere Platzhalter haben, können Sie diese innerhalb eines Arrays angeben, das als zweiter Parameter an {{WebExtAPIRef("i18n.getMessage()")}} übergeben wird — `[a, b, c]` wird verfügbar als `$1`, `$2` und `$3` und so weiter, innerhalb von `messages.json`.

Gehen wir ein Beispiel durch: Der ursprüngliche `notificationContent`-Nachrichtenstring in der `en/messages.json`-Datei lautet

```plain
You clicked $URL$.
```

Nehmen wir an, der angeklickte Link verweist auf `https://developer.mozilla.org`. Nach dem {{WebExtAPIRef("i18n.getMessage()")}}-Aufruf werden die Inhalte des zweiten Parameters in messages.json als `$1` verfügbar gemacht, welches den `$URL$`-Platzhalter ersetzt, wie im `"url"`-Platzhalter definiert. Der endgültige Nachrichtenstring ist also

```plain
You clicked https://developer.mozilla.org.
```

### Direkte Platzhalterverwendung

Es ist möglich, Variablen (`$1`, `$2`, `$3`, etc.) direkt in die Nachrichtenstrings einzufügen, zum Beispiel könnten wir den obigen `"notificationContent"`-Teilnehmer so neu schreiben:

```json
"notificationContent": {
  "message": "You clicked $1.",
  "description": "Tells the user which link they clicked."
}
```

Dies mag schneller und weniger komplex erscheinen, aber die andere Methode (durch Verwendung von `"placeholders"`) wird als Best Practice angesehen. Dies liegt daran, dass der Platzhaltername (z.B. `"url"`) und das Beispiel Ihnen helfen, sich daran zu erinnern, wofür der Platzhalter steht — eine Woche nachdem Sie Ihren Code geschrieben haben, werden Sie wahrscheinlich vergessen haben, was `$1` – `$8` bedeutet, aber Sie werden eher wissen, wofür Ihre Platzhalternamen stehen.

### Harte Kodierung der Ersetzung

Es ist ebenfalls möglich, hartkodierte Strings in Platzhaltern einzuschließen, sodass derselbe Wert jedes Mal verwendet wird, anstatt den Wert aus einer Variablen in Ihrem Code zu erhalten. Zum Beispiel:

```json
"mdn_banner": {
  "message": "For more information on web technologies, go to $MDN$.",
  "description": "Tell the user about MDN",
  "placeholders": {
    "mdn": {
      "content": "https://developer.mozilla.org/"
    }
  }
}
```

In diesem Fall kodieren wir einfach den Platzhalterinhalt fest, anstatt ihn aus einem Variablenwert wie `$1` zu erhalten. Dies kann manchmal nützlich sein, wenn Ihre Nachrichtendatei sehr komplex ist und Sie verschiedene Werte aufteilen möchten, um die Strings in der Datei lesbarer zu machen, zudem können diese Werte dann programmatisch abgerufen werden.

Zusätzlich können Sie solche Ersetzungen verwenden, um Teile des Strings anzugeben, die nicht übersetzt werden sollen, wie Personen- oder Firmennamen.

## Auswahl lokalisierten Strings

Gebiete können nur mit einem Sprachcode wie `fr` oder `en` festgelegt werden, oder sie können weiter mit einem Regionscode wie `en_US` oder `en_GB` qualifiziert werden, welches eine regionale Variante derselben Grundsprache beschreibt. Wenn Sie das i18n-System um einen String bitten, wird es einen String gemäß dem folgenden Algorithmus auswählen:

1. wenn es eine `messages.json`-Datei für die genaue aktuelle Locale gibt und diese den String enthält, wird dieser zurückgegeben.
2. Andernfalls, wenn die aktuelle Sprache mit einer Region qualifiziert ist (z.B. `en_US`) und es eine `messages.json`-Datei für die sprachübergreifende Version dieser Sprache gibt (z.B. `en`), und diese Datei den String enthält, wird dieser zurückgegeben.
3. Andernfalls, wenn es eine `messages.json`-Datei für die im `manifest.json` definierte `default_locale` gibt und diese den String enthält, wird dieser zurückgegeben.
4. Andernfalls wird ein Leerstring zurückgegeben.

Nehmen wir das folgende Beispiel:

- Erweiterungs-Stammverzeichnis/

  - \_locales

    - en_GB

      - messages.json

        - `{ "colorLocalized": { "message": "colour", "description": "Farbe." }, /* … */ }`

      en

      - messages.json

        - `{ "colorLocalized": { "message": "color", "description": "Farbe." }, /* … */ }`

    - fr

      - messages.json

        - `{ "colorLocalized": { "message": "couleur", "description": "Farbe." }, /* … */}`

Angenommen, die `default_locale` ist auf `fr` gesetzt und die aktuelle Browsersprache ist `en_GB`:

- Wenn die Erweiterung `getMessage("colorLocalized")` aufruft, wird "colour" zurückgegeben.
- Wenn "colorLocalized" nicht in `en_GB` vorhanden wäre, dann würde `getMessage("colorLocalized")` "color" zurückgeben, nicht "couleur".

## Vordefinierte Nachrichten

Das i18n-Modul stellt uns einige vordefinierte Nachrichten zur Verfügung, die wir auf die gleiche Weise aufrufen können wie wir es zuvor bei [Abrufen lokalisierter Strings in Manifests](#abrufen_lokalisierter_strings_in_manifests) und [Lokalenabhängiges CSS](#lokalenabhängiges_css) gesehen haben. Zum Beispiel:

```plain
__MSG_extensionName__
```

Vordefinierte Nachrichten verwenden exakt dieselbe Syntax, außer dass `@@` vor dem Nachrichtenname steht, zum Beispiel

```plain
__MSG_@@ui_locale__
```

Die folgende Tabelle zeigt die verschiedenen verfügbaren vordefinierten Nachrichten:

<table>
  <thead>
    <tr>
      <th scope="col">Nachrichtenname</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>@@extension_id</code></td>
      <td>
        <p>
          Die intern generierte UUID der Erweiterung. Sie könnten diesen String
          verwenden, um URLs für Ressourcen innerhalb der Erweiterung zu konstruieren. Selbst unlokalisierte
          Erweiterungen können diese Nachricht verwenden.
        </p>
        <p>Sie können diese Nachricht nicht in einer Manifestdatei verwenden.</p>
        <p>
          Beachten Sie auch, dass diese ID <em>nicht</em> die Add-on-ID ist, die von
          {{WebExtAPIRef("runtime.id")}} zurückgegeben wird, und die mit Hilfe des
          <a href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
            >browser_specific_settings</a
          >
          Schlüssels in manifest.json festgelegt werden kann. Es handelt sich um die generierte UUID, die in der
          URL des Add-ons erscheint. Das bedeutet, dass Sie diesen Wert nicht als
          <code>extensionId</code>-Parameter in
          {{WebExtAPIRef("runtime.sendMessage()")}}
          verwenden können und ihn nicht verwenden können, um ihn gegen die <code>id</code>-Eigenschaft eines
          {{WebExtAPIRef("runtime.MessageSender")}}-Objekts zu prüfen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>@@ui_locale</code></td>
      <td>
        Die aktuelle Sprache; Sie könnten diesen String verwenden, um
        lokalenspezifische URLs zu konstruieren.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_dir</code></td>
      <td>
        Die Textrichtung der aktuellen Sprache, entweder "ltr" für
        Links-nach-Rechts-Sprachen wie Englisch oder "rtl" für Rechts-nach-Links
        Sprachen wie Arabisch.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_reversed_dir</code></td>
      <td>
        Wenn das <code>@@bidi_dir</code> "ltr" ist, dann ist dies "rtl"; andernfalls,
        ist es "ltr".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_start_edge</code></td>
      <td>
        Wenn das <code>@@bidi_dir</code> "ltr" ist, dann ist dies "left"; andernfalls,
        ist es "right".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_end_edge</code></td>
      <td>
        Wenn das <code>@@bidi_dir</code> "ltr" ist, dann ist dies "right";
        andernfalls, ist es "left".
      </td>
    </tr>
  </tbody>
</table>

Zurück zu unserem früheren Beispiel, wäre es sinnvoller, es so zu schreiben:

```css
header {
  background-image: url(../images/__MSG_@@ui_locale__/header.png);
}
```

Jetzt können wir einfach unsere lokalen spezifischen Bilder in Verzeichnissen speichern, die den verschiedenen unterstütztendallen i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n).

Lassen Sie uns ein Beispiel für die Verwendung von `@@bidi_*`-Nachrichten in einer CSS-Datei ansehen:

```css
body {
  direction: __MSG_@@bidi_dir__;
}

div#header {
  margin-bottom: 1.05em;
  overflow: hidden;
  padding-bottom: 1.5em;
  padding-__MSG_@@bidi_start_edge__: 0;
  padding-__MSG_@@bidi_end_edge__: 1.5em;
  position: relative;
}
```

Für Links-nach-Rechts-Sprachen wie Englisch würden die CSS-Deklarationen, die die vordefinierten Nachrichten oben enthalten, in die folgenden endgültigen Codezeilen übersetzt:

```css
direction: ltr;
padding-left: 0;
padding-right: 1.5em;
```

Für eine Rechts-nach-Links-Sprache wie Arabisch wäre es:

```css
direction: rtl;
padding-right: 0;
padding-left: 1.5em;
```

## Testen Ihrer Erweiterung

Um die Lokalisierung Ihrer Erweiterung zu testen, verwenden Sie [Firefox](https://www.mozilla.org/en-US/firefox/new/) oder [Firefox Beta](https://www.mozilla.org/en-US/firefox/channel/desktop/), die Firefox-Builds, in denen Sie Sprachpakete installieren können.

Wechseln Sie dann für jede in der Erweiterung unterstützte Locale, die Sie testen möchten, gemäß den Anweisungen auf [Firefox in einer anderen Sprache verwenden](https://support.mozilla.org/de/kb/firefox-in-einer-anderen-sprache-verwenden), um die Firefox-Benutzeroberflächensprache zu ändern. (Wenn Sie sich gut mit den Einstellungen auskennen, verwenden Sie unter Sprache die Option Alternativen festlegen.)

Wenn Firefox in Ihrer Testsprache läuft, installieren oder laden Sie die Erweiterung von `about:debugging`[vorübergehend](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) oder laden Sie sie erneut, wenn sie bereits installiert ist. Nach der Installation oder beim erneuten Laden Ihrer Erweiterung sollte, wenn Sie Ihre Erweiterung korrekt eingerichtet haben, die Erweiterung mit ihrem Symbol, Namen und ihrer Beschreibung in der gewählten Sprache aufgeführt sein. Sie können auch die lokalisierten Erweiterungsdetails in `about:addons` sehen. Testen Sie nun die Funktionen der Erweiterung, um sicherzustellen, dass die Übersetzungen vorhanden sind.

Wenn Sie dies einmal ausprobieren möchten, können Sie die [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n)-Erweiterung verwenden. Richten Sie Firefox so ein, dass eine der in diesem Beispiel unterstützten Sprachen (Deutsch, Niederländisch oder Japanisch) angezeigt wird. Laden Sie die Erweiterung und gehen Sie zu einer Website. Klicken Sie auf einen Link, um die übersetzte Version der Benachrichtigung zu sehen, die die URL des Links meldet.
