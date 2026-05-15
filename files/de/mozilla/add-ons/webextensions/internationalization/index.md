---
title: Internationalisierung
slug: Mozilla/Add-ons/WebExtensions/Internationalization
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

Die [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) API bietet ein sehr nützliches Modul zur Internationalisierung von Erweiterungen — [i18n](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n). In diesem Artikel werden wir seine Funktionen untersuchen und ein praktisches Beispiel dafür geben, wie es funktioniert.

> [!NOTE]
> Die in diesem Artikel vorgestellte Beispiel-Erweiterung — [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) — ist auf GitHub verfügbar. Folgen Sie dem Quellcode, während Sie die Abschnitte unten durchgehen.

## Aufbau einer internationalisierten Erweiterung

Eine internationalisierte Erweiterung kann dieselben Funktionen wie jede andere Erweiterung enthalten — [background scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts), [content scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) usw. — besitzt jedoch auch einige zusätzliche Teile, die es ermöglichen, zwischen verschiedenen Lokalen zu wechseln. Diese sind in der folgenden Verzeichnisstruktur zusammengefasst:

- extension-root-directory/
  - \_locales
    - en
      - messages.json
        - Englische Nachrichten (Zeichenfolgen)

    - de
      - messages.json
        - Deutsche Nachrichten (Zeichenfolgen)

    - usw.

  - manifest.json
    - von der Sprache abhängige Metadaten

  - myJavascript.js
    - JavaScript für das Abrufen des Browser-Lokals, lokalspezifische Nachrichten usw.

  - myStyles.css
    - von der Sprache abhängige CSS

Lassen Sie uns nun jede der neuen Funktionen der Reihe nach erkunden — jeder der folgenden Abschnitte stellt einen Schritt zur Internationalisierung Ihrer Erweiterung dar.

## Bereitstellung lokalisierter Zeichenfolgen in \_locales

> [!NOTE]
> Sie können Sprach-Subtags mit dem _Find_-Tool auf der [Language subtag lookup page](https://r12a.github.io/app-subtags/) nachschlagen. Beachten Sie, dass Sie den englischen Namen der Sprache suchen müssen.

Jedes i18n-System erfordert die Bereitstellung von Zeichenfolgen, die in alle unterstützten lokalen Sprachen übersetzt sind. In Erweiterungen sind diese innerhalb eines Verzeichnisses namens `_locales` enthalten, das sich im Stammverzeichnis der Erweiterung befindet. Jedes individuelle Lokal hat seine Zeichenfolgen (als Nachrichten bezeichnet) innerhalb einer Datei namens `messages.json`, die in einem Unterverzeichnis von `_locales` abgelegt ist, welches den Sprach-Subtag der jeweiligen Sprache trägt.

Beachten Sie, dass, wenn der Subtag eine grundlegende Sprache plus eine regionale Variante einschließt, die Sprache und Variante üblicherweise durch einen Bindestrich getrennt werden: zum Beispiel "en-US". In den Verzeichnissen unter `_locales` muss der Trennstrich jedoch durch einen Unterstrich ersetzt werden: "en_US".

Zum Beispiel haben wir in unserer [Beispielanwendung](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n/_locales) Verzeichnisse für "en" (Englisch), "de" (Deutsch), "nl" (Niederländisch) und "ja" (Japanisch). Jedes dieser Verzeichnisse enthält eine `messages.json`-Datei.

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

Diese Datei ist standardmäßiges JSON — jedes ihrer Mitglieder ist ein Objekt mit einem Namen, das eine `message` und eine `description` enthält. All diese Elemente sind Zeichenfolgen; `$URL$` ist ein Platzhalter, der zur Laufzeit durch einen Teilstring ersetzt wird, wenn das `notificationContent`-Feld von der Erweiterung aufgerufen wird. Wie das funktioniert, erfahren Sie im Abschnitt [Abrufen von Nachrichtentexten aus JavaScript](#abrufen_von_nachrichtenzeichenfolgen_aus_javascript).

> [!NOTE]
> Sie finden viel mehr Informationen über den Inhalt von `messages.json`-Dateien in unserem [Referenz zu Lokalspezifischen Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference).

## Internationalisierung von manifest.json

Es gibt einige verschiedene Aufgaben, die Sie durchführen müssen, um Ihre manifest.json zu internationalisieren.

### Abrufen lokalisierter Zeichenfolgen in Manifests

Ihre [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/manifest.json) enthält Zeichenfolgen, die dem Benutzer angezeigt werden, wie z. B. den Namen und die Beschreibung der Erweiterung. Wenn Sie diese Zeichenfolgen internationalisieren und die entsprechenden Übersetzungen in messages.json ablegen, wird die korrekte Übersetzung der Zeichenfolge basierend auf dem aktuellen Lokal des Nutzers angezeigt.

Um Zeichenfolgen zu internationalisieren, geben Sie sie folgendermaßen an:

```json
"name": "__MSG_extensionName__",
"description": "__MSG_extensionDescription__",
```

Hierbei rufen wir Nachrichtenzeichenfolgen ab, die vom Lokal des Browsers abhängen, anstatt nur statische Zeichenfolgen einzubinden.

Um eine Nachrichtenzeichenfolge auf diese Weise aufzurufen, müssen Sie sie folgendermaßen angeben:

1. Zwei Unterstriche, gefolgt von
2. Der Zeichenfolge "MSG", gefolgt von
3. Einem Unterstrich, gefolgt von
4. Dem Namen der Nachricht, die Sie aufrufen möchten, wie in `messages.json` definiert, gefolgt von
5. Zwei Unterstrichen

```plain
__MSG_ + messageName + __
```

### Festlegen eines Standardlokals

Ein weiteres Feld, das Sie in Ihrer manifest.json angeben sollten, ist [default_locale](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale):

```json
"default_locale": "en"
```

Dies gibt ein Standardlokal an, das verwendet wird, falls die Erweiterung keine lokalisierte Zeichenfolge für das aktuelle Browser-Lokal enthält. Alle Nachrichtenzeichenfolgen, die im Browser-Lokal nicht verfügbar sind, werden stattdessen aus dem Standardlokal entnommen. Es gibt einige weitere Details darüber, wie der Browser Zeichenfolgen auswählt — siehe [Localized string selection](#auswahl_lokalisierter_zeichenfolgen).

## Von der Sprache abhängige CSS

Beachten Sie, dass Sie auch lokalisierte Zeichenfolgen aus CSS-Dateien in der Erweiterung abrufen können. Zum Beispiel möchten Sie möglicherweise eine lokalabhängige CSS-Regel konstruieren, wie diese:

```css
header {
  background-image: url("../images/__MSG_extensionName__/header.png");
}
```

Dies ist nützlich, obwohl es möglicherweise besser ist, eine solche Situation mit [Predefinierten Nachrichten](#vordefinierte_nachrichten) zu handhaben.

## Abrufen von Nachrichtenzeichenfolgen aus JavaScript

Sie haben also Ihre Nachrichtenzeichenfolgen eingerichtet und Ihr Manifest. Jetzt müssen Sie nur noch beginnen, Ihre Nachrichtenzeichenfolgen aus JavaScript aufzurufen, damit Ihre Erweiterung so gut wie möglich die richtige Sprache spricht. Die eigentliche [i18n API](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n) ist ziemlich einfach und enthält nur vier Hauptmethoden:

- Sie werden wahrscheinlich am häufigsten {{WebExtAPIRef("i18n.getMessage()")}} verwenden — dies ist die Methode, mit der Sie eine bestimmte Sprachzeichenfolge abrufen, wie oben erwähnt. Wir werden unten spezifische Anwendungsbeispiele dafür sehen.
- Die Methoden {{WebExtAPIRef("i18n.getAcceptLanguages()")}} und {{WebExtAPIRef("i18n.getUILanguage()")}} könnten verwendet werden, wenn Sie die Benutzeroberfläche je nach Lokal anpassen müssen — möglicherweise möchten Sie spezifische Präferenzen für die bevorzugten Sprachen der Benutzer höher in einer Präferenzliste anzeigen oder kulturelle Informationen anzeigen, die nur für eine bestimmte Sprache relevant sind, oder angezeigte Daten gemäß dem Browser-Lokal formatieren.
- Die Methode {{WebExtAPIRef("i18n.detectLanguage()")}} könnte verwendet werden, um die Sprache von benutzereingereichten Inhalten zu erkennen und sie entsprechend zu formatieren.

In unserem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel enthält das [background script](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/background-script.js) die folgenden Zeilen:

```js
let title = browser.i18n.getMessage("notificationTitle");
let content = browser.i18n.getMessage("notificationContent", message.url);
```

Die erste Zeile ruft einfach das `notificationTitle message`-Feld aus der am besten geeigneten `messages.json`-Datei für das aktuelle Browser-Lokal ab. Die zweite Zeile ist ähnlich, aber es wird eine URL als zweiter Parameter übergeben. Was ist hier los? So geben Sie den Inhalt an, der den `$URL$`-Platzhalter ersetzt, den wir im `notificationContent message`-Feld sehen:

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

Das `"placeholders"`-Element definiert alle Platzhalter und woher sie abgerufen werden. Der `"url"`-Platzhalter gibt an, dass sein Inhalt von `$1` stammt, welches der erste Wert ist, der im zweiten Parameter von `getMessage()` angegeben wird. Da der Platzhalter `"url"` genannt wird, verwenden wir `$URL$`, um ihn innerhalb der tatsächlichen Nachrichtenzeichenfolge aufzurufen (für `"name"` würden Sie `$NAME$` verwenden, usw.). Wenn Sie mehrere Platzhalter haben, können Sie sie in einem Array angeben, das dem zweiten Parameter von {{WebExtAPIRef("i18n.getMessage()")}} zugeordnet wird — `[a, b, c]` stehen als `$1`, `$2` und `$3` zur Verfügung und so weiter, innerhalb von `messages.json`.

Lassen Sie uns ein Beispiel durchgehen: Die ursprüngliche `notificationContent`-Nachrichtenzeichenfolge in der `en/messages.json` Datei ist

```plain
You clicked $URL$.
```

Angenommen, der geklickte Link verweist auf `https://developer.mozilla.org`. Nach dem {{WebExtAPIRef("i18n.getMessage()")}}-Aufruf sind die Inhalte des zweiten Parameters in `messages.json` als `$1` verfügbar, welches den `$URL$`-Platzhalter ersetzt, wie im `"url"`-Platzhalter definiert. Also lautet die endgültige Nachrichtenzeichenfolge

```plain
You clicked https://developer.mozilla.org.
```

### Direkte Platzhalterverwendung

Es ist möglich, Ihre Variablen (`$1`, `$2`, `$3`, usw.) direkt in die Nachrichtenzeichenfolgen einzufügen, zum Beispiel könnten wir das oben genannte `"notificationContent"`-Element folgendermaßen umschreiben:

```json
"notificationContent": {
  "message": "You clicked $1.",
  "description": "Tells the user which link they clicked."
}
```

Dies mag schneller und weniger komplex erscheinen, aber die andere Methode (unter Verwendung von `"placeholders"`) wird als Best Practice angesehen. Dies liegt daran, dass der Platzhaltername (z. B. `"url"`) und das Beispiel helfen, sich zu erinnern, wofür der Platzhalter ist - eine Woche nach dem Schreiben Ihres Codes werden Sie wahrscheinlich vergessen, wofür `$1` – `$8` stehen, aber Sie werden eher wissen, wofür Ihre Platzhalternamen stehen.

### Hartkodierte Substitution

Es ist auch möglich, hartkodierte Zeichenfolgen in Platzhaltern einzubeziehen, sodass der gleiche Wert jedes Mal verwendet wird, anstatt den Wert aus einer Variablen in Ihrem Code zu erhalten. Zum Beispiel:

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

In diesem Fall hartkodieren wir einfach den Platzhalterinhalt, anstatt ihn aus einem Variablenwert wie `$1` zu holen. Dies kann manchmal nützlich sein, wenn Ihre Nachrichten-Datei sehr komplex ist und Sie verschiedene Werte aufteilen möchten, um die Zeichenfolgen in der Datei lesbarer zu machen, außerdem können diese Werte dann programmgesteuert abgerufen werden.

Zusätzlich können Sie solche Ersetzungen verwenden, um Teile der Zeichenfolge zu definieren, die nicht übersetzt werden sollen, wie etwa Personen- oder Firmennamen.

## Auswahl lokalisierter Zeichenfolgen

Lokale werden mit einem Sprachcode, wie `fr` oder `en`, angegeben, der mit einem Skript- und einem Regionscode qualifiziert werden kann, z.B. `en-US` oder `zh-Hans-CN`. Wenn Ihre Erweiterung nach einer lokalisierten Zeichenfolge fragt, gibt das i18n-System die Zeichenfolge aus den `messages.json`-Dateien in dieser Prioritätsreihenfolge zurück:

1. Die Datei für das Benutzer-Browser-Lokal, z.B. `zh-Hans-CN`.
2. Wenn das Browser-Lokal mit einem Skript oder einer Region qualifiziert ist, die Datei für die regionslose Version, z.B. `zh-Hans`.
3. Wenn das Browser-Lokal mit einem Skript oder einer Region qualifiziert ist, die Datei für die skriptlose Version, z.B. `zh`.
4. Die Datei für das in der `manifest.json`-Datei definierte `default_locale`.

Wenn die angeforderte Zeichenfolge in keiner dieser Dateien vorhanden ist, wird eine leere Zeichenfolge zurückgegeben.

Nehmen wir dieses Beispiel:

- extension-root-directory/
  - \_locales
    - en_GB
      - messages.json
        - `{ "colorLocalized": { "message": "colour", "description": "Farbe." }, /* … */ }`

      en
      - messages.json
        - `{ "colorLocalized": { "message": "color", "description": "Farbe." }, /* … */ }`
        - `{ "colorBlue": { "message": "Blue", "description": "Blau." }, /* … */ }`

    - fr
      - messages.json
        - `{ "colorLocalized": { "message": "couleur", "description": "Farbe." }, /* … */}`
        - `{ "colorBlue": { "message": "Bleu", "description": "Blau." }, /* … */ }`

Mit dem `default_locale` auf `fr` festgelegt.

- Wenn das Browser-Lokal `en-GB` ist:
  - `getMessage("colorLocalized")` gibt "colour" zurück, weil `_locales/en_GB/messages.json` die `colorLocalized`-Nachricht enthält.
  - `getMessage("colorBlue")`, gibt "blue" zurück, weil es auf die `colorBlue`-Nachricht in `_locales/en/messages.json` zurückfällt.
- Wenn das Browser-Lokal `en-US` ist:
  - `getMessage("colorLocalized")` gibt "color" zurück, weil es keine `_locales/en_US/messages.json`-Datei gibt, sodass es auf die Nachricht in `_locales/en/messages.json` zurückfällt.
  - `getMessage("colorBlue")` gibt "blue" zurück, weil es auf die `colorBlue`-Nachricht in `_locales/en/messages.json` zurückfällt.
- Wenn das Browser-Lokal `zh-Hans-CN` ist:
  - `getMessage("colorLocalized")` gibt "couleur" zurück, weil es keinen Regions-, Skript- oder Sprach-Match zum `zh-Hans-CN`-Lokal gibt (d.h. keine `messages.json`-Datei in einem `zh-Hans-CN`, `zh-Hans` oder `zh`-Verzeichnis).
  - `getMessage("colorBlue")` gibt "bleu" zurück, weil es keinen Regions-, Skript- oder Sprach-Match zum `zh-Hans-CN`-Lokal gibt.

Wenn die Erweiterung `getMessage("colorRed")` aufruft, wird eine leere Zeichenfolge zurückgegeben, da es in keiner der Sprachdateien eine Eigenschaft für `"colorRed"` gibt.

## Vordefinierte Nachrichten

Das i18n-Modul stellt uns einige vordefinierte Nachrichten zur Verfügung, die wir auf die gleiche Weise aufrufen können, wie wir es früher bei [Abrufen lokalisierter Zeichenfolgen in Manifests](#abrufen_lokalisierter_zeichenfolgen_in_manifests) und [Von der Sprache abhängige CSS](#von_der_sprache_abhängige_css) gesehen haben. Zum Beispiel:

```plain
__MSG_extensionName__
```

Vordefinierte Nachrichten verwenden genau die gleiche Syntax, außer mit `@@` vor dem Nachrichtenamen, zum Beispiel

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
          Die intern generierte UUID der Erweiterung. Sie könnten diese Zeichenfolge verwenden,
          um URLs für Ressourcen innerhalb der Erweiterung zu konstruieren. Auch nicht lokalisierte
          Erweiterungen können diese Nachricht verwenden.
        </p>
        <p>Sie können diese Nachricht nicht in einer Manifestdatei verwenden.</p>
        <p>
          Beachten Sie auch, dass diese ID <em>nicht</em> die Add-on-ID ist, die von
          {{WebExtAPIRef("runtime.id")}} zurückgegeben wird, und die mit dem
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
            >browser_specific_settings</a
          >
          Schlüssel in manifest.json gesetzt werden kann. Es ist die generierte UUID, die in der
          URL des Add-ons erscheint. Das bedeutet, dass Sie diesen Wert nicht als
          <code>extensionId</code>-Parameter von
          {{WebExtAPIRef("runtime.sendMessage()")}} verwenden können, und
          ihn nicht mit der <code>id</code>-Eigenschaft eines
          {{WebExtAPIRef("runtime.MessageSender")}}-Objekts abgleichen können.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>@@ui_locale</code></td>
      <td>
        Das aktuelle Locale; Sie könnten diese Zeichenfolge verwenden, um
        lokalspezifische URLs zu konstruieren.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_dir</code></td>
      <td>
        Die Textausrichtung für das aktuelle Locale, entweder "ltr" für
        von links nach rechts Sprachen wie Englisch oder "rtl" für
        von rechts nach links Sprachen wie Arabisch.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_reversed_dir</code></td>
      <td>
        Wenn das <code>@@bidi_dir</code> "ltr" ist, dann ist dies "rtl"; andernfalls
        ist es "ltr".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_start_edge</code></td>
      <td>
        Wenn das <code>@@bidi_dir</code> "ltr" ist, dann ist dies "left"; andernfalls
        ist es "right".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_end_edge</code></td>
      <td>
        Wenn das <code>@@bidi_dir</code> "ltr" ist, dann ist dies "right";
        andernfalls ist es "left".
      </td>
    </tr>
  </tbody>
</table>

Zurück zu unserem früheren Beispiel: Es wäre sinnvoller, es so zu schreiben:

```css
header {
  background-image: url("../images/__MSG_@@ui_locale__/header.png");
}
```

Jetzt können wir einfach unsere lokalspezifischen Bilder in Verzeichnissen speichern, die zu den verschiedenen von uns unterstützten Lokalen passen — en, de, usw. — was viel mehr Sinn ergibt.

Schauen wir uns ein Beispiel für die Verwendung von `@@bidi_*`-Nachrichten in einer CSS-Datei an:

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

Für von links nach rechts Sprachen wie Englisch würden die CSS-Deklarationen, die die vordefinierten Nachrichten oben beinhalten, in die folgenden endgültigen Codezeilen übersetzt:

```css
direction: ltr;
padding-left: 0;
padding-right: 1.5em;
```

Für eine von rechts nach links Sprache wie Arabisch würden Sie erhalten:

```css
direction: rtl;
padding-right: 0;
padding-left: 1.5em;
```

## Testen Ihrer Erweiterung

Für Informationen zu den Werkzeugen und Prozessen zum Testen Ihrer Lokalisierungen siehe:

- Firefox: [Testen von Lokalisierungen](https://extensionworkshop.com/documentation/develop/test-localizations/) im Extension Workshop
- Chrome: [Festlegen des Browser-Lokals](https://developer.chrome.com/docs/extensions/reference/api/i18n#how-to-set-browsers-locale)
