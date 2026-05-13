---
title: Internationalisierung
slug: Mozilla/Add-ons/WebExtensions/Internationalization
l10n:
  sourceCommit: 19337ada99ac76020b6d16fbc979056cd4d3f117
---

Die [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) API bietet ein ziemlich nützliches Modul zur Internationalisierung von Erweiterungen — [i18n](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n). In diesem Artikel werden wir seine Funktionen erkunden und ein praktisches Beispiel dafür geben, wie es funktioniert.

> [!NOTE]
> Die Erweiterung, die in diesem Artikel vorgestellt wird — [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) — ist auf GitHub verfügbar. Folgen Sie dem Quellcode, während Sie die folgenden Abschnitte durchgehen.

## Aufbau einer internationalisierten Erweiterung

Eine internationalisierte Erweiterung kann dieselben Funktionen wie jede andere Erweiterung enthalten — [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts), [Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) usw. — sie hat jedoch auch einige zusätzliche Teile, die es ihr ermöglichen, zwischen verschiedenen Lokalisierungen zu wechseln. Diese sind in folgendem Verzeichnisbaum zusammengefasst:

- Erweiterungs-Root-Verzeichnis/
  - \_locales
    - en
      - messages.json
        - Englische Nachrichten (Zeichenfolgen)

    - de
      - messages.json
        - Deutsche Nachrichten (Zeichenfolgen)

    - etc.

  - manifest.json
    - Lokalisierungsabhängige Metadaten

  - myJavascript.js
    - JavaScript zum Abrufen des Browser-Locale, locale-spezifische Nachrichten usw.

  - myStyles.css
    - Locale-abhängige CSS

Lassen Sie uns jede dieser neuen Funktionen der Reihe nach erkunden — jeder der untenstehenden Abschnitte stellt einen Schritt dar, den Sie befolgen sollten, wenn Sie Ihre Erweiterung internationalisieren.

## Bereitstellung lokalisierter Zeichenfolgen in \_locales

> [!NOTE]
> Sie können Sprachuntertags mithilfe des _Find_-Werkzeugs auf der [Language subtag lookup page](https://r12a.github.io/app-subtags/) nachschlagen. Beachten Sie, dass Sie nach dem englischen Namen der Sprache suchen müssen.

Jedes i18n-System erfordert die Bereitstellung von Zeichenfolgen, die in alle verschiedenen Lokalisierungen übersetzt werden, die Sie unterstützen möchten. In Erweiterungen sind diese in einem Verzeichnis namens `_locales` enthalten, das im Erweiterungs-Root platziert ist. Jede einzelne Lokalisierung hat ihre Zeichenfolgen (als Nachrichten bezeichnet), die in einer Datei namens `messages.json` enthalten sind, die sich in einem Unterverzeichnis von `_locales` befindet. Dieses Unterverzeichnis ist mit dem Sprachuntertag der entsprechenden Sprache benannt.

Beachten Sie, dass wenn der Untertag eine grundlegende Sprache sowie eine regionale Variante enthält, die Sprache und die Variante konventionell durch einen Bindestrich getrennt werden: zum Beispiel "en-US". In den Verzeichnissen unter `_locales` muss **der Trennstrich jedoch ein Unterstrich** sein: "en_US".

In unserem Beispielanwendung [haben wir Verzeichnisse für "en" (Englisch), "de" (Deutsch), "nl" (Niederländisch) und "ja" (Japanisch)](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n/_locales). Jedes dieser Verzeichnisse enthält eine `messages.json`-Datei.

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

Diese Datei ist ein standardmäßiges JSON — jeder ihrer Mitglieder ist ein Objekt mit einem Namen, das eine `message` und eine `description` enthält. Alle diese Elemente sind Zeichenfolgen; `$URL$` ist ein Platzhalter, der mit einem Unterzeichen ersetzt wird, wenn das `notificationContent`-Mitglied von der Erweiterung aufgerufen wird. Sie lernen, wie man dies im Abschnitt [Abrufen von Nachrichtenstrings aus JavaScript](#abrufen_von_nachrichtensignalen_aus_javascript) macht.

> [!NOTE]
> Sie finden viele weitere Informationen zu den Inhalten von `messages.json`-Dateien in unserer [Verweis für speziesspezifische Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference).

## Internationalisierung von manifest.json

Es gibt ein paar verschiedene Aufgaben, um Ihre manifest.json zu internationalisieren.

### Abrufen lokalisierter Zeichenfolgen in Manifests

Ihre [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/manifest.json) enthält Zeichenfolgen, die dem Benutzer angezeigt werden, wie z.B. der Name und die Beschreibung der Erweiterung. Wenn Sie diese Zeichenfolgen internationalisieren und die entsprechenden Übersetzungen in `messages.json` einfügen, wird dem Benutzer die korrekte Übersetzung der Zeichenfolge basierend auf der aktuellen Lokalisierung angezeigt.

So internationalisieren Sie Zeichenfolgen, geben Sie sie wie folgt an:

```json
"name": "__MSG_extensionName__",
"description": "__MSG_extensionDescription__",
```

Hier rufen wir Nachrichtenstrings abhängig von der Lokalisierung des Browsers ab, anstatt einfach statische Zeichenfolgen einzufügen.

Um eine Nachricht zu einer Zeichenfolge wie folgt aufzurufen, müssen Sie sie so angeben:

1. Zwei Unterstriche folgen,
2. Der String "MSG", gefolgt von
3. Einem Unterstrich, gefolgt von
4. Dem Namen der Nachricht, die Sie in `messages.json` aufrufen möchten, gefolgt von
5. Zwei Unterstrichen

```plain
__MSG_ + messageName + __
```

### Festlegen einer Standardlokalisierung

Ein weiteres Feld, das Sie in Ihrem manifest.json angeben sollten, ist [default_locale](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale):

```json
"default_locale": "en"
```

Dies legt eine Standardlokalisierung fest, die verwendet wird, wenn die Erweiterung keine lokalisierte Zeichenfolge für die aktuelle Lokalisierung des Browsers enthält. Alle Nachrichtenstrings, die nicht in der Browsersprache verfügbar sind, werden stattdessen aus der Standardlokalisierung übernommen. Es gibt einige weitere Details, die in Bezug auf die Art und Weise, wie der Browser Zeichenfolgen auswählt, zu beachten sind — siehe [Auswahl lokalisierter Zeichenfolgen](#auswählen_lokalisierter_zeichenfolgen).

## Lokalisierungsabhängige CSS

Beachten Sie, dass Sie auch lokalisierte Zeichenfolgen aus CSS-Dateien in der Erweiterung abrufen können. Beispielsweise könnten Sie eine lokalisierungsabhängige CSS-Regel konstruieren, wie diese:

```css
header {
  background-image: url("../images/__MSG_extensionName__/header.png");
}
```

Dies ist nützlich, obwohl es möglicherweise sinnvoller wäre, eine solche Situation mithilfe von [vordefinierten Nachrichten](#vordefinierte_nachrichten) zu handhaben.

## Abrufen von Nachrichtensignalen aus JavaScript

Nun, da Sie Ihre Nachrichtensignale eingerichtet und Ihr Manifest erstellt haben. Jetzt müssen Sie nur noch Ihre Nachrichtensignale aus JavaScript aufrufen, sodass Ihre Erweiterung die richtige Sprache sprechen kann, so weit wie möglich. Die eigentliche [i18n API](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n) ist ziemlich einfach gehalten, mit nur vier Hauptmethoden:

- Sie werden wahrscheinlich {{WebExtAPIRef("i18n.getMessage()")}} am häufigsten verwenden — dies ist die Methode, die Sie verwenden, um eine bestimmte Sprachzeichenfolge abzurufen, wie oben erwähnt. Wir werden spezifische Anwendungsbeispiele dafür weiter unten sehen.
- Die Methoden {{WebExtAPIRef("i18n.getAcceptLanguages()")}} und {{WebExtAPIRef("i18n.getUILanguage()")}} könnten verwendet werden, wenn Sie die Benutzeroberfläche basierend auf der Lokalisierung anpassen müssten — vielleicht möchten Sie spezifische Präferenzen der Benutzer an höheren Stellen in einer Präferenzliste anzeigen oder kulturelle Informationen anzeigen, die nur für eine bestimmte Sprache relevant sind oder angezeigte Daten entsprechend der Lokalisierung des Browsers formatieren.
- Die Methode {{WebExtAPIRef("i18n.detectLanguage()")}} könnte verwendet werden, um die Sprache von vom Benutzer bereitgestellten Inhalten zu erkennen und sie entsprechend zu formatieren.

In unserem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel enthält das [Hintergrundskript](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/background-script.js) die folgenden Zeilen:

```js
let title = browser.i18n.getMessage("notificationTitle");
let content = browser.i18n.getMessage("notificationContent", message.url);
```

Die erste ruft einfach das `notificationTitle`-Nachrichtenfeld aus der verfügbaren `messages.json`-Datei ab, die am geeignetsten für die aktuelle Lokalisierung des Browsers ist. Die zweite ist ähnlich, aber sie wird als zweiter Parameter eine URL übergeben. Warum? Dies ist, wie Sie den Inhalt zum Ersetzen des `$URL$`-Platzhalters, den wir im `notificationContent` Nachrichtenfeld sehen, angeben:

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

Das `"placeholders"`-Element definiert alle Platzhalter und von wo sie abgerufen werden. Der `"url"`-Platzhalter gibt an, dass sein Inhalt von `$1` kommt, was der erste Wert ist, der in dem zweiten Parameter von `getMessage()` übergeben wird. Da der Platzhalter `"url"` genannt wird, wird `$URL$` verwendet, um ihn innerhalb der tatsächlichen Nachrichtenzeichenfolge aufzurufen (also für `"name"` würden Sie `$NAME$` verwenden, usw.). Wenn Sie mehrere Platzhalter haben, können Sie sie in einem Array bereitstellen, das als zweiter Parameter an {{WebExtAPIRef("i18n.getMessage()")}} übergeben wird — `[a, b, c]` wird als `$1$, `$2$, und `$3$` verfügbar gemacht, und so weiter, innerhalb von `messages.json`.

Gehen wir ein Beispiel durch: die ursprüngliche `notificationContent`-Nachrichtenzeichenfolge in der `en/messages.json`-Datei ist

```plain
You clicked $URL$.
```

Angenommen, der angeklickte Link verweist auf `https://developer.mozilla.org`. Nach dem {{WebExtAPIRef("i18n.getMessage()")}}-Aufruf werden die Inhalte des zweiten Parameters in `messages.json` als `$1` verfügbar gemacht, was den `$URL$`-Platzhalter ersetzt, wie im `"url"`-Platzhalter definiert. Somit ist die endgültige Nachrichtenzeichenfolge

```plain
You clicked https://developer.mozilla.org.
```

### Direkte Platzhalterverwendung

Es ist möglich, Ihre Variablen (`$1`, `$2`, `$3`, usw.) direkt in die Nachrichtenzeichenfolgen einzufügen, zum Beispiel könnten wir das oben genannte `"notificationContent"`-Mitglied so umschreiben:

```json
"notificationContent": {
  "message": "You clicked $1.",
  "description": "Tells the user which link they clicked."
}
```

Dies mag schneller und weniger komplex erscheinen, aber die andere Methode (mithilfe von `"placeholders"`) wird als beste Praxis angesehen. Der Grund dafür ist, dass das Vorhandensein des Platzhalternamens (z.B. `"url"`) und eines Beispiels Ihnen hilft, sich zu erinnern, wofür der Platzhalter steht — eine Woche, nachdem Sie Ihren Code geschrieben haben, werden Sie wahrscheinlich vergessen haben, was `$1` – `$8` darstellen, aber Sie werden eher wissen, wofür Ihre Platzhalternamen stehen.

### Harcodierte Substitution

Es ist auch möglich, fest codierte Zeichenfolgen in Platzhalter einzufügen, sodass dasselbe Wert jedes Mal verwendet wird, anstatt den Wert aus einer Variablen in Ihrem Code zu erhalten. Zum Beispiel:

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

In diesem Fall codieren wir einfach den Platzhalterinhalt, anstatt ihn aus einem Variablenwert wie `$1` zu beziehen. Dies kann manchmal nützlich sein, wenn Ihre Nachrichtendatei sehr komplex ist und Sie unterschiedliche Werte aufteilen möchten, um die Zeichenfolgen im Datei besser lesbar zu machen. Auch könnten diese Werte dann programmgesteuert zugegriffen werden.

Zusätzlich können Sie solche Substitutionen verwenden, um Teile der Zeichenkette anzugeben, die nicht übersetzt werden sollen, wie Personen- oder Firmennamen.

## Auswählen lokalisierter Zeichenfolgen

Lokalisierungen werden unter Verwendung eines Sprachcodes spezifiziert, z.B. `fr` oder `en`, der mit einem Skript- und Regionscode qualifiziert werden kann, z.B. `en-US` oder `zh-Hans-CN`. Wenn Ihre Erweiterung um eine lokalisierte Zeichenfolge bittet, gibt das i18n-System die Zeichenfolge aus den `messages.json`-Dateien in dieser Prioritätsreihenfolge zurück:

1. Die Datei für das Locale des Benutzerbrowsers, z.B. `zh-Hans-CN`.
2. Wenn das Browser-Locale mit einem Skript oder einer Region qualifiziert ist, die Datei für die regionenlose Version, z.B. `zh-Hans`.
3. Wenn das Browser-Locale mit einem Skript oder regionalen Codiert ist, die datei für die skriptlose Version, z.B. `zh`.
4. Die Datei für die `default_locale`, die in der `manifest.json`-Datei definiert ist.

Wenn die angeforderte Zeichenfolge in keiner dieser Dateien vorhanden ist, wird eine leere Zeichenfolge zurückgegeben.

Sehen Sie sich dieses Beispiel an:

- Erweiterungs-Root-Verzeichnis/
  - \_locales
    - en_GB
      - messages.json
        - `{ "colorLocalized": { "message": "colour", "description": "Color." }, /* … */ }`

      en
      - messages.json
        - `{ "colorLocalized": { "message": "color", "description": "Color." }, /* … */ }`
        - `{ "colorBlue": { "message": "Blue", "description": "Blue." }, /* … */ }`

    - fr
      - messages.json
        - `{ "colorLocalized": { "message": "couleur", "description": "Color." }, /* … */}`
        - `{ "colorBlue": { "message": "Bleu", "description": "Blue." }, /* … */ }`

Mit der `default_locale`, die auf `fr` gesetzt ist.

- Wenn das Locale des Browsers `en-GB` ist:
  - `getMessage("colorLocalized")` gibt "colour" zurück, da `_locales/en_GB/messages.json` die `colorLocalized`-Nachricht enthält.
  - `getMessage("colorBlue")`, gibt "blue" zurück, weil eine Rückfallebene zur `colorBlue`-Nachricht in `_locales/en/messages.json` erfolgt.
- Wenn das Locale des Browsers `en-US` ist:
  - `getMessage("colorLocalized")` gibt "color" zurück, weil es keine `_locales/en_US/messages.json`-Datei gibt, also der Rückgriff auf die Nachricht in `_locales/en/messages.json` erfolgt.
  - `getMessage("colorBlue")` gibt "blue" zurück, weil es zur `colorBlue`-Nachricht in `_locales/en/messages.json` zurückfällt.
- Wenn das Browser-Locale `zh-Hans-CN` ist:
  - `getMessage("colorLocalized")` gibt "couleur" zurück, weil es keinen Regionen-, Skript- oder Sprachabgleich für das `zh-Hans-CN`-Locale gibt (d.h. keine `messages.json`-Datei in einem `zh-Hans-CN`, `zh-Hans` oder`zh` Ordner).
  - `getMessage("colorBlue")` gibt "bleu" zurück, weil es keinen Regionen-, Skript- oder Sprachabgleich für das `zh-Hans-CN`-Locale gibt.

Wenn die Erweiterung `getMessage("colorRed")` aufrufen würde, wird sie eine leere Zeichenfolge zurückgegeben, da es keine Eigenschaft für `"colorRed"` in einer der Sprachdateien gibt.

## Vordefinierte Nachrichten

Das i18n-Modul stellt uns einige vordefinierte Nachrichten zur Verfügung, die wir in derselben Weise aufrufen können wie zuvor in [Abrufen lokalisierter Zeichenfolgen in Manifests](#abrufen_lokalisierter_zeichenfolgen_in_manifests) und [Lokalisierungsabhängige CSS](#lokalisierungsabhängige_css) gesehen. Zum Beispiel:

```plain
__MSG_extensionName__
```

Vordefinierte Nachrichten verwenden genau die gleiche Syntax, außer mit `@@` vor dem Nachrichtennamen, zum Beispiel

```plain
__MSG_@@ui_locale__
```

Die folgende Tabelle zeigt die unterschiedlichen verfügbaren vordefinierten Nachrichten:

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
          Die intern generierte UUID der Erweiterung. Sie könnten diese Zeichenfolge verwenden, um URLs für Ressourcen innerhalb der Erweiterung zu konstruieren. Auch nicht lokalisierte Erweiterungen können diese Nachricht verwenden.
        </p>
        <p>Sie können diese Nachricht nicht in einer Manifestdatei verwenden.</p>
        <p>
          Beachten Sie auch, dass diese ID <em>nicht</em> die Add-on-ID ist, die durch {{WebExtAPIRef("runtime.id")}} zurückgegeben wird, und dass sie über die
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
            >browser_specific_settings</a
          >
          in manifest.json festgelegt werden kann. Es ist die generierte UUID, die in der URL des Add-ons erscheint. Dies bedeutet, dass Sie diesen Wert nicht als `extensionId`-Parameter zu {{WebExtAPIRef("runtime.sendMessage()")}} verwenden können, und ihn nicht zum Vergleich gegen die `id`-Eigenschaft eines {{WebExtAPIRef("runtime.MessageSender")}}-Objekts verwenden können.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>@@ui_locale</code></td>
      <td>
        Die aktuelle Lokalisierung; Sie könnten diese Zeichenfolge verwenden, um lokalisierungsspezifische URLs zu konstruieren.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_dir</code></td>
      <td>
        Die Textrichtung für die aktuelle Lokalisierung, entweder "ltr" für Links-zu-Rechts-Sprachen wie Englisch oder "rtl" für Rechts-zu-Links-Sprachen wie Arabisch.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_reversed_dir</code></td>
      <td>
        Wenn `@@bidi_dir` "ltr" ist, dann ist dies "rtl"; andernfalls ist es "ltr".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_start_edge</code></td>
      <td>
        Wenn `@@bidi_dir` "ltr" ist, dann ist dies "left"; andernfalls ist es "right".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_end_edge</code></td>
      <td>
        Wenn `@@bidi_dir` "ltr" ist, dann ist dies "right"; andernfalls ist es "left".
      </td>
    </tr>
  </tbody>
</table>

Zurück zu unserem früheren Beispiel, es würde mehr Sinn machen, es so zu schreiben:

```css
header {
  background-image: url("../images/__MSG_@@ui_locale__/header.png");
}
```

Jetzt können wir unsere lokalspezifischen Bilder in Verzeichnissen speichern, die den verschiedenen Lokalisierungen, die wir unterstützen — en, de, etc. — entsprechen, was viel mehr Sinn ergibt.

Lassen Sie uns ein Beispiel zur Verwendung von `@@bidi_*` Nachrichten in einer CSS-Datei ansehen:

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

Für Sprachen, die von links nach rechts gelesen werden, wie Englisch, würden die CSS-Anweisungen unter Verwendung der vordefinierten Nachrichten oben zu den folgenden endgültigen Codezeilen übersetzt werden:

```css
direction: ltr;
padding-left: 0;
padding-right: 1.5em;
```

Für eine Rechts-nach-Links-Sprache wie Arabisch, würden Sie erhalten:

```css
direction: rtl;
padding-right: 0;
padding-left: 1.5em;
```

## Testen Ihrer Erweiterung

Für Informationen zu den Werkzeugen und Verfahren zum Testen Ihrer Lokalisierungen siehe:

- Firefox: [Testen von Lokalisierungen](https://extensionworkshop.com/documentation/develop/test-localizations/) im Erweiterungs-Workshop
- Chrome: [Einstellung der Browsersprache](https://developer.chrome.com/docs/extensions/reference/api/i18n#how-to-set-browsers-locale)
