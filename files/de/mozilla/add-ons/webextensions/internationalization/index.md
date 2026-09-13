---
title: Internationalisierung
slug: Mozilla/Add-ons/WebExtensions/Internationalization
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

Die [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) API bietet ein sehr praktisches Modul zur Internationalisierung von Erweiterungen — [i18n](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n). In diesem Artikel werden wir seine Funktionen erkunden und ein praktisches Beispiel zeigen, wie es funktioniert.

> [!NOTE]
> Die in diesem Artikel vorgestellte Beispielerweiterung — [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) — ist auf GitHub verfügbar. Folgen Sie dem Quellcode, während Sie die nachstehenden Abschnitte durchgehen.

## Anatomie einer internationalisierten Erweiterung

Eine internationalisierte Erweiterung kann die gleichen Funktionen enthalten wie jede andere Erweiterung — [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts), [Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) usw. — aber sie enthält auch einige zusätzliche Teile, die es ermöglichen, zwischen verschiedenen Gebietsschemata zu wechseln. Diese werden im folgenden Verzeichnisbaum zusammengefasst:

- Verzeichnis-Wurzelverzeichnis/
  - \_locales
    - en
      - messages.json
        - Englische Nachrichten (Zeichenketten)

    - de
      - messages.json
        - Deutsche Nachrichten (Zeichenketten)

    - usw.

  - manifest.json
    - gebietsschemataabhängige Metadaten

  - myJavascript.js
    - JavaScript zum Abrufen des Browser-Gebietsschemas, gebietsschemataabhängige Nachrichten usw.

  - myStyles.css
    - gebietsschemataabhängiges CSS

Lassen Sie uns jede der neuen Funktionen der Reihe nach erkunden — jeder der untenstehenden Abschnitte stellt einen Schritt dar, den Sie befolgen sollten, wenn Sie Ihre Erweiterung internationalisieren.

## Bereitstellen lokalisierter Zeichenketten in \_locales

> [!NOTE]
> Sie können Sprachsubtags mit dem _Finden_-Tool auf der [Language subtag lookup-Seite](https://r12a.github.io/app-subtags/) nachschlagen. Beachten Sie, dass Sie nach dem englischen Namen der Sprache suchen müssen.

Jedes i18n-System erfordert die Bereitstellung von Zeichenketten, die in alle verschiedenen unterstützten Gebietsschemas übersetzt wurden. In Erweiterungen werden diese in einem Verzeichnis namens `_locales` enthalten, das im Erweiterungsstamm platziert ist. Jedes einzelne Gebietsschema hat seine Zeichenketten (genannt Nachrichten) in einer Datei namens `messages.json`, die in einem Unterverzeichnis von `_locales` abgelegt wird, das mit dem Sprachsubtag für die Sprache dieses Gebietsschemas benannt ist.

Beachten Sie, dass, wenn der Subtag eine grundlegende Sprache plus eine regionale Variante umfasst, Sprache und Variante konventionell durch einen Bindestrich getrennt werden: zum Beispiel "en-US". Im Verzeichnis unter `_locales` **muss der Trenner jedoch ein Unterstrich sein**: "en_US".

So haben wir [zum Beispiel in unserer Beispiel-App](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n/_locales) Verzeichnisse für "en" (Englisch), "de" (Deutsch), "nl" (Niederländisch) und "ja" (Japanisch). Jedes hat eine `messages.json` Datei darin.

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

Diese Datei ist ein standardmäßiges JSON — jedes ihrer Mitglieder ist ein Objekt mit einem Namen, das ein `message` und eine `description` enthält. Alle diese Elemente sind Zeichenketten; `$URL$` ist ein Platzhalter, der durch eine Teilzeichenkette ersetzt wird, wenn das `notificationContent`-Mitglied von der Erweiterung aufgerufen wird. Sie erfahren, wie man dies im Abschnitt [Abrufen von Nachrichtenzeichenketten aus JavaScript](#abrufen_von_nachrichtenzeichenketten_aus_javascript) macht.

> [!NOTE]
> Weitere Informationen über den Inhalt von `messages.json`-Dateien finden Sie in unserem [Gebietsschema-spezifischen Nachrichtenreferenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference).

## Internationalisieren von manifest.json

Es gibt einige verschiedene Aufgaben, die ausgeführt werden müssen, um Ihre manifest.json zu internationalisieren.

### Abrufen lokalisierter Zeichenketten in Manifesten

Ihre [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/manifest.json) enthält Zeichenketten, die dem Benutzer angezeigt werden, wie der Name und die Beschreibung der Erweiterung. Wenn Sie diese Zeichenketten internationalisieren und die entsprechenden Übersetzungen in `messages.json` ablegen, wird die korrekte Übersetzung der Zeichenkette basierend auf dem aktuellen Gebietsschema des Benutzers angezeigt.

Um Zeichenketten zu internationalisieren, geben Sie sie folgendermaßen an:

```json
"name": "__MSG_extensionName__",
"description": "__MSG_extensionDescription__",
```

Hier rufen wir nachrichtenspezifische Zeichenketten ab, die vom Gebietsschema des Browsers abhängen, anstatt einfach statische Zeichenketten einzufügen.

Um eine Nachrichtenzeichenkette wie diese aufzurufen, müssen Sie sie folgendermaßen angeben:

1. Zwei Unterstriche, gefolgt von
2. Der Zeichenkette "MSG", gefolgt von
3. Einem Unterstrich, gefolgt von
4. Dem Namen der Nachricht, die Sie aufrufen möchten, wie in `messages.json` definiert, gefolgt von
5. Zwei Unterstrichen

```plain
__MSG_ + messageName + __
```

### Spezifizieren eines Standardgebietsschemas

Ein weiteres Feld, das Sie in ihrer manifest.json angeben sollten, ist [default_locale](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale):

```json
"default_locale": "en"
```

Dies gibt ein Standardgebietsschema an, das verwendet wird, wenn die Erweiterung keine lokalisierte Zeichenkette für das aktuelle Browser-Gebietsschema enthält. Alle Nachrichtenzeichenketten, die im Browser-Gebietsschema nicht verfügbar sind, werden stattdessen aus dem Standardgebietsschema genommen. Es gibt einige weitere Details, die zu beachten sind, wie der Browser Zeichenketten auswählt — siehe [Auswahl lokalisierter Zeichenketten](#auswahl_lokalisierter_zeichenketten).

## Gebietsschemataabhängiges CSS

Beachten Sie, dass Sie auch lokalisierte Zeichenketten aus CSS-Dateien in der Erweiterung abrufen können. Zum Beispiel könnten Sie eine gebietsschemataabhängige CSS-Regel konstruieren, wie diese:

```css
header {
  background-image: url("../images/__MSG_extensionName__/header.png");
}
```

Dies ist nützlich, obwohl es besser wäre, eine solche Situation mit [vordefinierten Nachrichten](#vordefinierte_nachrichten) zu handhaben.

## Abrufen von Nachrichtenzeichenketten aus JavaScript

Jetzt, wo Sie Ihre Nachrichtenzeichenketten eingerichtet haben und Ihr Manifest vorbereitet ist, müssen Sie nur noch beginnen, Ihre Nachrichtenzeichenketten aus JavaScript abzurufen, damit Ihre Erweiterung möglichst die richtige Sprache spricht. Die eigentliche [i18n API](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n) ist ziemlich einfach und enthält nur vier Hauptmethoden:

- Sie werden wahrscheinlich am häufigsten {{WebExtAPIRef("i18n.getMessage()")}} verwenden — dies ist die Methode, die Sie verwenden, um eine spezifische Sprachzeichenkette abzurufen, wie oben erwähnt. Unten werden wir spezifische Anwendungsbeispiele dafür sehen.
- Die Methoden {{WebExtAPIRef("i18n.getAcceptLanguages()")}} und {{WebExtAPIRef("i18n.getUILanguage()")}} könnten verwendet werden, wenn Sie die Benutzeroberfläche je nach Gebietsschema anpassen müssen — vielleicht möchten Sie spezifische Benutzerpräferenzsprachen höher in einer Liste anzeigen, kulturell spezifische Informationen nur für eine bestimmte Sprache anzeigen oder angezeigte Daten entsprechend dem Browser-Gebietsschema formatieren.
- Die Methode {{WebExtAPIRef("i18n.detectLanguage()")}} könnte verwendet werden, um die Sprache von benutzereingereichten Inhalten zu erkennen und sie entsprechend zu formatieren.

In unserem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel enthält das [Hintergrundskript](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/background-script.js) die folgenden Zeilen:

```js
let title = browser.i18n.getMessage("notificationTitle");
let content = browser.i18n.getMessage("notificationContent", message.url);
```

Die erste Zeile ruft einfach das `notificationTitle message` Feld aus der verfügbaren `messages.json` Datei ab, die für das aktuelle Gebietsschema des Browsers am geeignetsten ist. Die zweite ist ähnlich, aber es wird eine URL als zweiter Parameter übergeben. Wieso das? So geben Sie den Inhalt an, der den `$URL$` Platzhalter ersetzt, den wir im `notificationContent message` Feld sehen:

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

Das `"placeholders"` Element definiert alle Platzhalter und von wo sie abgerufen werden. Der `"url"` Platzhalter gibt an, dass sein Inhalt von `$1` genommen wird, das der erste Wert ist, der im zweiten Parameter von `getMessage()` gegeben wird. Da der Platzhalter `"url"` genannt wird, verwenden wir `$URL$`, um ihn in der eigentlichen Nachrichtenzeichenkette aufzurufen (für `"name"` würden Sie `$NAME$` verwenden, usw.). Wenn Sie mehrere Platzhalter haben, können Sie sie in einem Array bereitstellen, das als zweiter Parameter an {{WebExtAPIRef("i18n.getMessage()")}} gegeben wird — `[a, b, c]` wird in `messages.json` als `$1`, `$2` und `$3`, usw., verfügbar sein.

Betrachten wir ein Beispiel: Die ursprüngliche `notificationContent` Nachrichtenzeichenkette in der `en/messages.json` Datei ist

```plain
You clicked $URL$.
```

Angenommen, der angeklickte Link zeigt auf `https://developer.mozilla.org`. Nach dem {{WebExtAPIRef("i18n.getMessage()")}} Aufruf sind die Inhalte des zweiten Parameters in `messages.json` als `$1` verfügbar, der den `$URL$` Platzhalter gemäß dem `"url"` Platzhalter ersetzt. Also lautet die endgültige Nachrichtenzeichenkette

```plain
You clicked https://developer.mozilla.org.
```

### Direkte Verwendung von Platzhaltern

Es ist möglich, Variablen (`$1`, `$2`, `$3`, usw.) direkt in den Nachrichtenzeichenketten einzusetzen. Zum Beispiel könnten wir das oben `"notificationContent"`-Mitglied umschreiben, wie folgt:

```json
"notificationContent": {
  "message": "You clicked $1.",
  "description": "Tells the user which link they clicked."
}
```

Dies mag schneller und weniger komplex erscheinen, aber die andere Methode (die `"placeholders"` verwendet) wird als Best Practice angesehen. Dies liegt daran, dass der Platzhaltername (z. B. `"url"`) und das Beispiel Ihnen helfen, sich daran zu erinnern, wofür der Platzhalter gedacht ist — eine Woche, nachdem Sie Ihren Code geschrieben haben, erinnern Sie sich wahrscheinlich nicht mehr genau, was `$1`–`$8` bedeutet, aber Sie werden wahrscheinlich wissen, worauf sich Ihre Platzhalternamen beziehen.

### Harcodierte Ersetzung

Es ist auch möglich, festverdrahtete Zeichenketten in Platzhaltern zu verwenden, so dass der gleiche Wert jedes Mal verwendet wird, anstatt den Wert aus einer Variablen in Ihrem Code zu nehmen. Zum Beispiel:

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

In diesem Fall platzieren wir einfach den festen Inhalt für den Platzhalter fest, anstatt ihn aus einem Variablenwert wie `$1` zu nehmen. Dies kann nützlich sein, wenn Ihre Nachrichtendatei sehr komplex ist, und Sie verschiedene Werte aufteilen möchten, um die Zeichenketten in der Datei lesbarer zu machen; diese Werte könnten dann auch programmatisch abgerufen werden.

Zusätzlich können Sie solche Ersetzungen verwenden, um Teile der Zeichenkette anzugeben, die nicht übersetzt werden sollen, wie z. B. Personen- oder Firmennamen.

## Auswahl lokalisierter Zeichenketten

Gebietsschemata werden mit einem Sprachcode spezifiziert, wie `fr` oder `en`, der mit einem Skript- und Regionscode qualifiziert werden kann, wie `en-US` oder `zh-Hans-CN`. Wenn Ihre Erweiterung eine lokalisierte Zeichenkette anfordert, gibt das i18n-System die Zeichenkette aus den `messages.json`-Dateien in dieser Prioritätsreihenfolge zurück:

1. Die Datei für das Browser-Gebietsschema des Benutzers, z.B. `zh-Hans-CN`.
2. Wenn das Browser-Gebietsschema mit einem Skript oder einer Region qualifiziert ist, die Datei für die skriptholde Version, z.B. `zh-Hans`.
3. Wenn das Browser-Gebietsschema mit einem Skript oder einer Region qualifiziert ist, die Datei für die skriptlose Version, z.B. `zh`.
4. Die Datei für das `default_locale`, wie im `manifest.json`-File definiert.

Wenn die angeforderte Zeichenkette in keiner dieser Dateien vorhanden ist, wird eine leere Zeichenkette zurückgegeben.

Betrachten Sie dieses Beispiel:

- Erweiterungs-Wurzelverzeichnis/
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

Mit dem `default_locale` auf `fr` gesetzt.

- Ist das Browser-Gebietsschema `en-GB`:
  - `getMessage("colorLocalized")` gibt "colour" zurück, weil `_locales/en_GB/messages.json` die `colorLocalized` Nachricht enthält.
  - `getMessage("colorBlue")`, gibt "blue" zurück, weil es auf die `colorBlue` Nachricht in `_locales/en/messages.json` zurückgreift.
- Ist das Browser-Gebietsschema `en-US`:
  - `getMessage("colorLocalized")` gibt "color" zurück, weil es keine `_locales/en_US/messages.json` Datei gibt, also auf die Nachricht in `_locales/en/messages.json` zurückgegriffen wird.
  - `getMessage("colorBlue")` gibt "blue" zurück, weil es auf die `colorBlue` Nachricht in `_locales/en/messages.json` zurückgreift.
- Ist das Browser-Gebietsschema `zh-Hans-CN`:
  - `getMessage("colorLocalized")` gibt "couleur" zurück, weil es kein Regionen-, Skript- oder Sprachmatch für das `zh-Hans-CN`-Gebietsschema gibt (d.h. keine `messages.json`-Datei in einem `zh-Hans-CN`, `zh-Hans`, oder `zh`-Ordner).
  - `getMessage("colorBlue")` gibt "bleu" zurück, weil es kein Regionen-, Skript- oder Sprachmatch für das `zh-Hans-CN`-Gebietsschema gibt.

Wenn die Erweiterung `getMessage("colorRed")` aufruft, wird eine leere Zeichenkette zurückgegeben, da es in keiner der Sprachdateien eine Eigenschaft für `"colorRed"` gibt.

## Vordefinierte Nachrichten

Das i18n-Modul bietet uns einige vordefinierte Nachrichten, die wir auf die gleiche Weise aufrufen können, wie wir es früher in den Abschnitten [Abrufen lokalisierter Zeichenketten in Manifesten](#abrufen_lokalisierter_zeichenketten_in_manifesten) und [Gebietsschemataabhängiges CSS](#gebietsschemataabhängiges_css) gesehen haben. Zum Beispiel:

```plain
__MSG_extensionName__
```

Vordefinierte Nachrichten verwenden genau die gleiche Syntax, außer dass sie `@@` vor dem Nachrichtennamen haben, beispielsweise

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
          Die intern generierte UUID der Erweiterung. Sie könnten diese Zeichenkette verwenden, um URLs für Ressourcen innerhalb der Erweiterung zu konstruieren. Auch nicht lokalisierte Erweiterungen können diese Nachricht verwenden.
        </p>
        <p>Sie können diese Nachricht nicht in einer Manifestdatei verwenden.</p>
        <p>
          Beachten Sie auch, dass diese ID <em>nicht</em> die Add-on-ID ist, die von {{WebExtAPIRef("runtime.id")}} zurückgegeben wird und die gesetzt werden kann, indem man den
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
            >browser_specific_settings</a
          >
          Schlüssel in der manifest.json-Datei verwendet. Es ist die generierte UUID, die in der URL des Add-ons erscheint. Das bedeutet, dass Sie diesen Wert nicht als <code>extensionId</code>-Parameter für {{WebExtAPIRef("runtime.sendMessage()")}} verwenden können und ihn nicht verwenden können, um die Übereinstimmung mit der <code>id</code>-Eigenschaft eines {{WebExtAPIRef("runtime.MessageSender")}}-Objekts zu überprüfen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>@@ui_locale</code></td>
      <td>
        Das aktuelle Gebietsschema; Sie könnten diese Zeichenkette verwenden, um gebietsschemata-spezifische URLs zu konstruieren.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_dir</code></td>
      <td>
        Die Textrichtung für das aktuelle Gebietsschema, entweder "ltr" für von links nach rechts lesende Sprachen wie Englisch oder "rtl" für von rechts nach links lesende Sprachen wie Arabisch.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_reversed_dir</code></td>
      <td>
        Wenn das <code>@@bidi_dir</code> "ltr" ist, dann ist dies "rtl"; andernfalls ist es "ltr".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_start_edge</code></td>
      <td>
        Wenn das <code>@@bidi_dir</code> "ltr" ist, dann ist dies "left"; andernfalls ist es "right".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_end_edge</code></td>
      <td>
        Wenn das <code>@@bidi_dir</code> "ltr" ist, dann ist dies "right"; andernfalls ist es "left".
      </td>
    </tr>
  </tbody>
</table>

Zurück zu unserem früheren Beispiel: Es würde mehr Sinn machen, es so zu schreiben:

```css
header {
  background-image: url("../images/__MSG_@@ui_locale__/header.png");
}
```

Jetzt können wir einfach unsere lokal spezifischen Bilder in Verzeichnissen speichern, die den verschiedenen von uns unterstützten Gebietsschemata entsprechen — en, de, usw. — was viel sinnvoller ist.

Lassen Sie uns ein Beispiel für die Verwendung von `@@bidi_*` Nachrichten in einer CSS-Datei ansehen:

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

Für von links nach rechts lesende Sprachen wie Englisch würden sich die CSS-Erklärungen, die die oben genannten vordefinierten Nachrichten betreffen, in die folgenden endgültigen Codezeilen übersetzen:

```css
direction: ltr;
padding-left: 0;
padding-right: 1.5em;
```

Für eine von rechts nach links lesende Sprache wie Arabisch erhalten Sie:

```css
direction: rtl;
padding-right: 0;
padding-left: 1.5em;
```

## Testen Ihrer Erweiterung

Für Informationen zu den Werkzeugen und dem Prozess des Testens Ihrer Lokalisierungen, siehe:

- Firefox: [Testen von Lokalisierungen](https://extensionworkshop.com/documentation/develop/test-localizations/) im Extension Workshop
- Chrome: [Gebietsschema des Browsers festlegen](https://developer.chrome.com/docs/extensions/reference/api/i18n#how-to-set-browsers-locale)
