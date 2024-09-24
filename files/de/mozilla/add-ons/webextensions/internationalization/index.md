---
title: Internationalisierung
slug: Mozilla/Add-ons/WebExtensions/Internationalization
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Die [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) API stellt ein nützliches Modul zur Verfügung, um Erweiterungen zu internationalisieren — [i18n](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n). In diesem Artikel werden wir seine Funktionen erkunden und ein praktisches Beispiel dafür geben, wie es funktioniert. Das i18n-System für Erweiterungen, die mit den WebExtension-APIs erstellt wurden, ähnelt gängigen JavaScript-Bibliotheken für i18n wie [i18n.js](http://i18njs.com/).

> [!NOTE]
> Die in diesem Artikel vorgestellte Beispielerweiterung — [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) — ist auf GitHub verfügbar. Folgen Sie dem Quellcode, während Sie die unten stehenden Abschnitte durchgehen.

## Aufbau einer internationalisierten Erweiterung

Eine internationalisierte Erweiterung kann dieselben Funktionen enthalten wie jede andere Erweiterung — [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts), [Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) usw. — aber sie hat auch einige zusätzliche Teile, um zwischen verschiedenen Sprachvarianten zu wechseln. Diese sind in der folgenden Verzeichnisstruktur zusammengefasst:

- extension-root-directory/

  - \_locales

    - en

      - messages.json

        - Englische Nachrichten (Zeichenfolgen)

    - de

      - messages.json

        - Deutsche Nachrichten (Zeichenfolgen)

    - etc.

  - manifest.json

    - sprachabhängige Metadaten

  - myJavascript.js

    - JavaScript zur Abfrage der Browsersprache, sprachspezifische Nachrichten usw.

  - myStyles.css

    - sprachabhängiges CSS

Lassen Sie uns nacheinander jede der neuen Funktionen erkunden — jeder der folgenden Abschnitte stellt einen Schritt dar, der beim Internationalisieren Ihrer Erweiterung zu befolgen ist.

## Bereitstellung von lokalisierten Zeichenfolgen in \_locales

> [!NOTE]
> Sie können Sprachuntertags mit dem _Suchen_-Werkzeug auf der [Language subtag lookup page](https://r12a.github.io/app-subtags/) nachschlagen. Beachten Sie, dass Sie nach dem englischen Namen der Sprache suchen müssen.

Jedes i18n-System erfordert, dass Zeichenfolgen in alle verschiedenen Sprachvarianten übersetzt werden, die Sie unterstützen möchten. In Erweiterungen sind diese in einem Verzeichnis namens `_locales` enthalten, das sich im Hauptverzeichnis der Erweiterung befindet. Jede einzelne Sprachvariante hat ihre Zeichenfolgen (als Nachrichten bezeichnet) in einer Datei namens `messages.json`, die sich in einem Unterverzeichnis von `_locales` befindet, das mit dem Sprachuntertag für die Sprache dieser Sprachvariante benannt ist.

Beachten Sie, dass, wenn der Untertag eine Grundsprache plus eine regionale Variante enthält, die Sprache und die Variante konventionell mit einem Bindestrich getrennt werden: zum Beispiel "en-US". In den Verzeichnissen unter `_locales` **muss der Separator jedoch ein Unterstrich sein**: "en_US".

So haben wir [zum Beispiel in unserer Beispiel-App](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n/_locales) Verzeichnisse für "en" (Englisch), "de" (Deutsch), "nl" (Niederländisch) und "ja" (Japanisch). Jedes dieser Verzeichnisse hat eine `messages.json` Datei darin.

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

Diese Datei ist ein standardmäßiges JSON — jedes Mitglied ist ein Objekt mit einem Namen, das ein `message` und eine `description` enthält. Alle diese Elemente sind Zeichenfolgen; `$URL$` ist ein Platzhalter, der zu dem Zeitpunkt durch einen Teilstring ersetzt wird, an dem das Mitglied `notificationContent` von der Erweiterung aufgerufen wird. Sie werden lernen, dies im Abschnitt [Abrufen von Nachrichtzeichenfolgen aus JavaScript](#abrufen_von_nachrichtzeichenfolgen_aus_javascript) zu tun.

> [!NOTE]
> Sie finden viel mehr Informationen über den Inhalt von `messages.json` Dateien in unserer [referenz für sprachspezifische Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference).

## Internationalisieren von manifest.json

Es gibt ein paar Aufgaben, die Sie durchführen müssen, um Ihr manifest.json zu internationalisieren.

### Abrufen von lokalisierten Zeichenfolgen in Manifests

Ihr [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/manifest.json) enthält Zeichenfolgen, die dem Nutzer angezeigt werden, wie der Name und die Beschreibung der Erweiterung. Wenn Sie diese Zeichenfolgen internationalisieren und die entsprechenden Übersetzungen davon in messages.json legen, wird dem Nutzer die korrekte Übersetzung basierend auf der aktuellen Sprachvariante angezeigt, so wie folgt.

Um Zeichenfolgen zu internationalisieren, geben Sie sie so an:

```json
"name": "__MSG_extensionName__",
"description": "__MSG_extensionDescription__",
```

Hier rufen wir abhängig von der Browsersprache Nachrichtzeichenfolgen ab, anstatt einfach statische Zeichenfolgen einzufügen.

Um eine Nachrichtzeichenfolge auf diese Weise aufzurufen, müssen Sie sie so angeben:

1. Zwei Unterstriche, gefolgt von
2. dem Zeichenfolgen "MSG", gefolgt von
3. einem Unterstrich, gefolgt von
4. dem Namen der Nachricht, die Sie aufrufen möchten, wie in `messages.json` definiert, gefolgt von
5. Zwei Unterstrichen

```plain
__MSG_ + messageName + __
```

### Angabe einer Standardsprache

Ein weiteres Feld, das Sie in Ihrem manifest.json angeben sollten, ist [default_locale](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale):

```json
"default_locale": "en"
```

Dies gibt eine Standardsprache an, die verwendet wird, wenn die Erweiterung keine lokalisierte Zeichenfolge für die aktuelle Sprache des Browsers enthält. Alle Nachrichtzeichenfolgen, die in der Browsersprache nicht verfügbar sind, werden stattdessen aus der Standardsprache entnommen. Es gibt einige weitere Details, über die man sich im Klaren sein muss, wie der Browser Zeichenfolgen auswählt — siehe [Auswahl lokalisierter Zeichenfolgen](#auswahl_lokalisierter_zeichenfolgen).

## Sprachabhängiges CSS

Beachten Sie, dass Sie auch lokalisierte Zeichenfolgen aus CSS-Dateien in der Erweiterung abrufen können. Zum Beispiel könnten Sie eine sprachabhängige CSS-Regel konstruieren, wie diese:

```css
header {
  background-image: url(../images/__MSG_extensionName__/header.png);
}
```

Dies ist nützlich, obwohl Sie so eine Situation möglicherweise besser mit [Vordefinierten Nachrichten](#vordefinierte_nachrichten) handhaben.

## Abrufen von Nachrichtzeichenfolgen aus JavaScript

Also, Sie haben Ihre Nachrichtzeichenfolgen eingerichtet und Ihr Manifest. Jetzt müssen Sie nur noch damit beginnen, Ihre Nachrichtzeichenfolgen aus JavaScript abzurufen, damit Ihre Erweiterung so weit wie möglich in der richtigen Sprache kommunizieren kann. Die tatsächliche [i18n API](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n) ist recht einfach und enthält nur vier Hauptmethoden:

- Sie werden wahrscheinlich {{WebExtAPIRef("i18n.getMessage()")}} am häufigsten verwenden — dies ist die Methode, die Sie verwenden, um eine spezifische Sprachzeichenfolge abzurufen, wie oben erwähnt. Wir werden im Folgenden spezifische Anwendungsbeispiele dafür sehen.
- Die Methoden {{WebExtAPIRef("i18n.getAcceptLanguages()")}} und {{WebExtAPIRef("i18n.getUILanguage()")}} könnten verwendet werden, wenn Sie die Benutzeroberfläche je nach Sprachvariante anpassen müssen — vielleicht möchten Sie die Präferenzen der bevorzugten Sprachen der Nutzer höher in einer Präferenzliste anzeigen oder kulturelle Informationen darstellen, die nur für eine bestimmte Sprache relevant sind, oder angezeigte Daten entsprechend der Browsersprache formatieren.
- Die Methode {{WebExtAPIRef("i18n.detectLanguage()")}} könnte verwendet werden, um die Sprache von nutzergenerierten Inhalten zu erkennen und sie entsprechend zu formatieren.

In unserem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel enthält das [Hintergrundskript](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/background-script.js) die folgenden Zeilen:

```js
let title = browser.i18n.getMessage("notificationTitle");
let content = browser.i18n.getMessage("notificationContent", message.url);
```

Die erste Zeile ruft einfach das `notificationTitle message` Feld aus der verfügbaren `messages.json` Datei ab, die für die aktuelle Sprachvariante des Browsers am passendsten ist. Die zweite ist ähnlich, wird jedoch eine URL als zweiter Parameter übergeben. Was bedeutet das? So geben Sie den Inhalt an, der den `$URL$` Platzhalter ersetzt, den wir im `notificationContent message` Feld sehen:

```json
"notificationContent": {
  "message": "You clicked $URL$.",
  "description": "Tells the user which link they clicked.",
  "placeholders": {
    "url" : {
      "content" : "$1",
      "example": "https://developer.mozilla.org"
    }
  }
}
```

Das `"placeholders"` Mitglied definiert alle Platzhalter und wo sie abgerufen werden. Der `"url"` Platzhalter gibt an, dass sein Inhalt von `$1` übernommen wird, was der erste Wert ist, der innerhalb des zweiten Parameters von `getMessage()` angegeben wird. Da der Platzhalter `"url"` genannt wird, verwenden wir `$URL$`, um ihn innerhalb der tatsächlichen Nachrichtzeichenfolge aufzurufen (also für `"name"` würden Sie `$NAME$` verwenden, usw.) Wenn Sie mehrere Platzhalter haben, können Sie sie innerhalb eines Arrays bereitstellen, das {{WebExtAPIRef("i18n.getMessage()")}} als zweiter Parameter übergeben wird — `[a, b, c]` wird verfügbar als `$1`, `$2`, und `$3`, und so weiter, innerhalb von `messages.json`.

Nehmen wir ein Beispiel: die ursprüngliche `notificationContent` Nachrichtzeichenfolge in der `en/messages.json` Datei ist

```plain
You clicked $URL$.
```

Angenommen, der angeklickte Link verweist auf `https://developer.mozilla.org`. Nach dem {{WebExtAPIRef("i18n.getMessage()")}} Aufruf werden die Inhalte des zweiten Parameters in messages.json als `$1` verfügbar gemacht, welches den `$URL$` Platzhalter ersetzt, wie im `"url"` Platzhalter definiert. Also ist die endgültige Nachrichtzeichenfolge

```plain
You clicked https://developer.mozilla.org.
```

### Direkte Platzhalternutzung

Es ist möglich, Ihre Variablen (`$1`, `$2`, `$3`, usw.) direkt in die Nachrichtzeichenfolgen einzufügen, zum Beispiel könnten wir das oben erwähntes `"notificationContent"` Mitglied so umschreiben:

```json
"notificationContent": {
  "message": "You clicked $1.",
  "description": "Tells the user which link they clicked."
}
```

Dies mag schneller und weniger komplex erscheinen, aber die andere Methode (unter Verwendung von `"placeholders"`) wird als beste Praxis angesehen. Dies liegt daran, dass der Name des Platzhalters (z.B. `"url"`) und das Beispiel Ihnen helfen, sich zu merken, wofür der Platzhalter da ist — eine Woche nach dem Schreiben Ihres Codes vergessen Sie wahrscheinlich, wofür `$1` bis `$8` stehen, aber Sie wissen eher, was Ihre Platzhalternamen bedeuten.

### Fest codierte Ersetzung

Es ist auch möglich, fest codierte Zeichenfolgen in Platzhaltern zu verwenden, sodass jedes Mal derselbe Wert verwendet wird, anstatt den Wert aus einer Variablen in Ihrem Code zu erhalten. Zum Beispiel:

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

In diesem Fall kodieren wir den Platzhalterinhalt einfach, anstatt ihn aus einem Variablenwert wie `$1` zu nehmen. Dies kann manchmal nützlich sein, wenn Ihre Nachrichtendatei sehr komplex ist und Sie verschiedene Werte aufteilen möchten, um die Zeichenfolgen in der Datei besser lesbar zu machen, und dann könnten diese Werte programmatisch abgerufen werden.

Außerdem können Sie solche Ersetzungen verwenden, um Teile der Zeichenfolge anzugeben, die nicht übersetzt werden sollen, wie Personen- oder Unternehmensnamen.

## Auswahl lokalisierter Zeichenfolgen

Sprachvarianten können mithilfe eines Sprachcodes wie `fr` oder `en` angegeben werden, oder sie können weiter mit einem Regionalkod qualifiziert werden, wie `en_US` oder `en_GB`, der eine regionale Variante derselben Grundsprache beschreibt. Wenn Sie das i18n-System nach einer Zeichenfolge fragen, wählt es eine Zeichenfolge gemäß folgendem Algorithmus aus:

1. Wenn es eine `messages.json` Datei für die genaue aktuelle Sprachvariante gibt und diese die Zeichenfolge enthält, geben Sie sie zurück.
2. Andernfalls, wenn die aktuelle Sprachvariante mit einer Region qualifiziert ist (z.B. `en_US`) und es eine `messages.json` Datei für die regionenlose Version dieser Sprachvariante gibt (z.B. `en`) und diese Datei die Zeichenfolge enthält, geben Sie sie zurück.
3. Andernfalls, wenn es eine `messages.json` Datei für die in der `manifest.json` definierten `default_locale` gibt und diese die Zeichenfolge enthält, geben Sie sie zurück.
4. Andernfalls geben Sie eine leere Zeichenfolge zurück.

Nehmen wir das folgende Beispiel:

- extension-root-directory/

  - \_locales

    - en_GB

      - messages.json

        - `{ "colorLocalized": { "message": "colour", "description": "Color." }, /* … */ }`

      en

      - messages.json

        - `{ "colorLocalized": { "message": "color", "description": "Color." }, /* … */ }`

    - fr

      - messages.json

        - `{ "colorLocalized": { "message": "couleur", "description": "Color." }, /* … */}`

Angenommen, die `default_locale` ist auf `fr` gesetzt und die aktuelle Sprachvariante des Browsers ist `en_GB`:

- Wenn die Erweiterung `getMessage("colorLocalized")` aufruft, gibt sie "colour" zurück.
- Wenn "colorLocalized" in `en_GB` nicht vorhanden wäre, würde `getMessage("colorLocalized")` "color" zurückgeben, nicht "couleur".

## Vordefinierte Nachrichten

Das i18n-Modul stellt uns einige vordefinierte Nachrichten zur Verfügung, die wir genauso aufrufen können, wie wir es zuvor in [Abrufen von lokalisierten Zeichenfolgen in Manifests](#abrufen_von_lokalisierten_zeichenfolgen_in_manifests) und [Sprachabhängiges CSS](#sprachabhängiges_css) gesehen haben. Zum Beispiel:

```plain
__MSG_extensionName__
```

Vordefinierte Nachrichten verwenden genau dieselbe Syntax, außer mit `@@` vor dem Nachrichtenamen, zum Beispiel

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
          Die intern generierte UUID der Erweiterung. Sie könnten diese Zeichenfolge verwenden, um URLs für Ressourcen innerhalb der Erweiterung zu konstruieren. Auch nicht-lokalisierte Erweiterungen können diese Nachricht verwenden.
        </p>
        <p>Sie können diese Nachricht nicht in einer Manifestdatei verwenden.</p>
        <p>
          Beachten Sie außerdem, dass diese ID <em>nicht</em> die von {{WebExtAPIRef("runtime.id")}} zurückgegebene Add-on-ID ist, die mit dem Schlüssel <a href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings">browser_specific_settings</a> in manifest.json festgelegt werden kann. Es ist die generierte UUID, die in der URL des Add-ons erscheint. Dies bedeutet, dass Sie diesen Wert nicht als <code>extensionId</code>-Parameter für {{WebExtAPIRef("runtime.sendMessage()")}} verwenden können und ihn nicht verwenden können, um die <code>id</code>-Eigenschaft eines {{WebExtAPIRef("runtime.MessageSender")}} Objekts zu überprüfen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>@@ui_locale</code></td>
      <td>
        Die aktuelle Sprachvariante; Sie könnten diese Zeichenfolge verwenden, um sprachspezifische URLs zu konstruieren.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_dir</code></td>
      <td>
        Die Textrichtung für die aktuelle Sprachvariante, entweder "ltr" für von links nach rechts lesbare Sprachen wie Englisch oder "rtl" für von rechts nach links lesbare Sprachen wie Arabisch.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_reversed_dir</code></td>
      <td>
        Wenn der <code>@@bidi_dir</code> "ltr" ist, dann ist dies "rtl"; andernfalls ist es "ltr".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_start_edge</code></td>
      <td>
        Wenn der <code>@@bidi_dir</code> "ltr" ist, dann ist dies "left"; andernfalls ist es "right".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_end_edge</code></td>
      <td>
        Wenn der <code>@@bidi_dir</code> "ltr" ist, dann ist dies "right"; andernfalls ist es "left".
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

Jetzt können wir unsere lokal spezifischen Bilder einfach in Verzeichnissen speichern, die den verschiedenen Sprachvarianten entsprechen, die wir unterstützen — en, de, usw. — was viel logischer ist.

Sehen wir uns ein Beispiel für die Verwendung von `@@bidi_*` Nachrichten in einer CSS-Datei an:

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

Für von links nach rechts lesbare Sprachen wie Englisch würden sich die CSS-Deklarationen mit den oben erwähnten vordefinierten Nachrichten zu folgenden endgültigen Codezeilen übersetzen:

```css
direction: ltr;
padding-left: 0;
padding-right: 1.5em;
```

Für eine von rechts nach links lesbare Sprache wie Arabisch würden Sie bekommen:

```css
direction: rtl;
padding-right: 0;
padding-left: 1.5em;
```

## Testen Ihrer Erweiterung

Um die Lokalisierung Ihrer Erweiterung zu testen, verwenden Sie [Firefox](https://www.mozilla.org/en-US/firefox/new/) oder [Firefox Beta](https://www.mozilla.org/en-US/firefox/channel/desktop/), die Firefox-Versionen, in die Sie Sprachpakete installieren können.

Dann folgen Sie für jede Sprachvariante, die in der zu testenden Erweiterung unterstützt wird, den Anweisungen, um [Firefox in einer anderen Sprache zu verwenden](https://support.mozilla.org/en-US/kb/use-firefox-another-language), um die Sprache der Firefox-Benutzeroberfläche zu wechseln. (Wenn Sie sich in den Einstellungen auskennen, verwenden Sie unter Sprache die Option Alternativen festlegen.)

Sobald Firefox in Ihren Testsprache läuft, [installieren Sie die Erweiterung vorübergehend](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/). Nach der Installation Ihrer Erweiterung, wenn Sie Ihre Erweiterung richtig eingestellt haben, sehen Sie die Erweiterung mit ihrem Icon, Namen und Beschreibung in der gewählten Sprache in `about:debugging` aufgelistet. Sie können auch die lokalisierten Erweiterungsdetails in `about:addons` sehen. Testen Sie nun die Funktionen der Erweiterung, um sicherzustellen, dass die benötigten Übersetzungen vorhanden sind.

Wenn Sie diesen Prozess ausprobieren möchten, können Sie die [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Erweiterung verwenden. Richten Sie Firefox so ein, dass er eine der in diesem Beispiel unterstützten Sprachen anzeigt (Deutsch, Niederländisch oder Japanisch). Laden Sie die Erweiterung und gehen Sie zu einer Website. Klicken Sie auf einen Link, um die übersetzte Version der Benachrichtigung zu sehen, die die URL des Links angibt.
