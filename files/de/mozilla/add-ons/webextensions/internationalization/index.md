---
title: Internationalisierung
slug: Mozilla/Add-ons/WebExtensions/Internationalization
l10n:
  sourceCommit: 32fb8af49e13e90ffd14e16972f499d440962ac1
---

Die [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions)-API bietet ein nützliches Modul zur Internationalisierung von Erweiterungen — [i18n](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n). In diesem Artikel erkunden wir die Funktionen und geben ein praktisches Beispiel, wie sie funktioniert.

> [!NOTE]
> Die in diesem Artikel vorgestellte Beispielerweiterung — [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) — ist auf GitHub verfügbar. Folgen Sie dem Quellcode, während Sie die unten stehenden Abschnitte durchgehen.

## Aufbau einer internationalisierten Erweiterung

Eine internationalisierte Erweiterung kann dieselben Funktionen wie jede andere Erweiterung enthalten — [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts), [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts), etc. — aber sie hat auch einige zusätzliche Teile, um zwischen verschiedenen Lokalen wechseln zu können. Diese sind im folgenden Verzeichnisbaum zusammengefasst:

- Erweiterungs-Stammverzeichnis/
  - \_locales
    - en
      - messages.json
        - Englische Nachrichten (Strings)

    - de
      - messages.json
        - Deutsche Nachrichten (Strings)

    - etc.

  - manifest.json
    - lokalabhängige Metadaten

  - myJavascript.js
    - JavaScript zum Abrufen der Browser-Lokale, Lokalspezifische Nachrichten, etc.

  - myStyles.css
    - lokalabhängiges CSS

Lassen Sie uns jede der neuen Funktionen im Einzelnen erkunden — jeder der untenstehenden Abschnitte stellt einen Schritt dar, dem man folgen muss, wenn man seine Erweiterung internationalisieren möchte.

## Bereitstellen lokalisierter Strings in \_locales

> [!NOTE]
> Sie können Sprach-Tags mithilfe des _Find_-Tools auf der [Language subtag lookup page](https://r12a.github.io/app-subtags/) nachschlagen. Beachten Sie, dass Sie nach dem englischen Namen der Sprache suchen müssen.

Jedes i18n-System erfordert die Bereitstellung von Strings, die in alle gewünschten unterstützten Lokale übersetzt wurden. In Erweiterungen sind diese innerhalb eines Verzeichnisses namens `_locales` enthalten, das sich im Stammverzeichnis der Erweiterung befindet. Jedes einzelne Locale hat seine Strings (als Nachrichten bezeichnet) in einer Datei namens `messages.json`, die sich in einem Unterverzeichnis von `_locales` befindet, das mit dem Sprach-Tag für die Sprache dieses Locales benannt ist.

Beachten Sie, dass wenn das Sprach-Tag eine Grundsprache plus eine regionale Variante enthält, dann werden Sprache und Variante konventionell durch einen Bindestrich getrennt: zum Beispiel "en-US". In den Verzeichnissen unter `_locales` **muss der Separator jedoch ein Unterstrich sein**: "en_US".

So haben [zum Beispiel in unserer Beispielanwendung](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n/_locales) Verzeichnisse für "en" (Englisch), "de" (Deutsch), "nl" (Niederländisch) und "ja" (Japanisch). Jedes dieser Verzeichnisse enthält eine `messages.json`-Datei.

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

Diese Datei ist Standard-JSON — jedes ihrer Mitglieder ist ein Objekt mit einem Namen, das eine `message` und eine `description` enthält. Alle diese Elemente sind Strings; `$URL$` ist ein Platzhalter, der zur Laufzeit durch einen Teilstring ersetzt wird, wenn das `notificationContent`-Mitglied von der Erweiterung aufgerufen wird. Sie lernen, wie das im Abschnitt [Nachrichten-Strings aus JavaScript abrufen](#nachrichten-strings_aus_javascript_abrufen) funktioniert.

> [!NOTE]
> Weitere Informationen über die Inhalte von `messages.json`-Dateien finden Sie in unserer [Referenz für lokalspezifische Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference).

## Internationalisierung von manifest.json

Es gibt einige Aufgaben, die durchgeführt werden müssen, um Ihre manifest.json zu internationalisieren.

### Abrufen lokalisierter Strings in Manifeste

Ihr [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/manifest.json) enthält Strings, die dem Benutzer angezeigt werden, wie zum Beispiel der Name und die Beschreibung der Erweiterung. Wenn Sie diese Strings internationalisieren und geeignete Übersetzungen davon in messages.json einfügen, wird dem Benutzer die richtige Übersetzung des Strings basierend auf dem aktuellen Locale angezeigt.

Um Strings zu internationalisieren, geben Sie sie wie folgt an:

```json
"name": "__MSG_extensionName__",
"description": "__MSG_extensionDescription__",
```

Hier rufen wir Nachrichten-Strings, die vom Locale des Browsers abhängen, ab, anstatt nur statische Strings einzufügen.

Um solch einen Nachrichten-String aufzurufen, müssen Sie ihn wie folgt angeben:

1. Zwei Unterstriche, gefolgt von
2. Dem String "MSG", gefolgt von
3. Einem Unterstrich, gefolgt von
4. Dem Namen der Nachricht, die Sie aufrufen möchten, wie in `messages.json` definiert, gefolgt von
5. Zwei Unterstrichen

```plain
__MSG_ + messageName + __
```

### Angabe eines Standard-Locale

Ein weiteres Feld, das Sie in Ihrem manifest.json angeben sollten, ist [default_locale](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale):

```json
"default_locale": "en"
```

Dieses gibt ein Standard-Locale an, das verwendet wird, wenn die Erweiterung keinen lokalisierten String für das aktuelle Locale des Browsers enthält. Alle Nachrichten-Strings, die im Browser-Locale nicht verfügbar sind, werden stattdessen aus dem Standard-Locale übernommen. Es gibt einige weitere Details, die in Bezug darauf beachtet werden müssen, wie der Browser Strings auswählt — siehe [Auswahl lokalisierter Strings](#auswahl_lokalisierter_strings).

## Lokalspezifisches CSS

Beachten Sie, dass Sie auch lokalisierte Strings aus CSS-Dateien in der Erweiterung abrufen können. Zum Beispiel könnten Sie eine lokalspezifische CSS-Regel konstruieren wollen, wie diese:

```css
header {
  background-image: url("../images/__MSG_extensionName__/header.png");
}
```

Das ist nützlich, obwohl Sie eine solche Situation vielleicht besser mit [Vordefinierten Nachrichten](#vordefinierte_nachrichten) handhaben sollten.

## Nachrichten-Strings aus JavaScript abrufen

Jetzt, da Sie Ihre Nachrichten-Strings eingerichtet und Ihr Manifest vorbereitet haben, müssen Sie nur noch anfangen, Ihre Nachrichten-Strings aus JavaScript aufzurufen, damit Ihre Erweiterung so viel wie möglich die richtige Sprache spricht. Die eigentliche [i18n API](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n) ist ziemlich einfach und enthält nur vier Hauptmethoden:

- Sie werden wahrscheinlich {{WebExtAPIRef("i18n.getMessage()")}} am häufigsten verwenden — dies ist die Methode, die Sie verwenden, um einen spezifischen Sprachstring abzurufen, wie oben erwähnt. Wir werden konkrete Nutzungsbeispiele unten sehen.
- Die Methoden {{WebExtAPIRef("i18n.getAcceptLanguages()")}} und {{WebExtAPIRef("i18n.getUILanguage()")}} könnten verwendet werden, wenn Sie die Benutzeroberfläche abhängig vom Locale anpassen müssen — vielleicht möchten Sie Präferenzen, die spezifisch für die bevorzugten Sprachen der Benutzer sind, weiter oben in einer Präferenzliste anzeigen oder kulturell relevante Informationen nur für eine bestimmte Sprache darstellen oder angezeigte Daten gemäß dem Browser-Locale passend formatieren.
- Die Methode {{WebExtAPIRef("i18n.detectLanguage()")}} könnte verwendet werden, um die Sprache von nutzergenerierten Inhalten zu erkennen und sie entsprechend zu formatieren.

In unserem Beispiel [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) enthält das [Hintergrundskript](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/background-script.js) die folgenden Zeilen:

```js
let title = browser.i18n.getMessage("notificationTitle");
let content = browser.i18n.getMessage("notificationContent", message.url);
```

Die erste Zeile ruft einfach das `notificationTitle message`-Feld aus der verfügbaren `messages.json`-Datei ab, die am besten zum aktuellen Locale des Browsers passt. Die zweite Zeile ist ähnlich, aber es wird eine URL als zweiter Parameter übergeben. Was hat das zu bedeuten? Dies ist, wie Sie den Inhalt angeben, um den `$URL$`-Platzhalter zu ersetzen, den wir im `notificationContent message`-Feld sehen:

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

Der `"placeholders"`-Eintrag definiert alle Platzhalter und woher sie abgerufen werden. Der `"url"`-Platzhalter gibt an, dass sein Inhalt von `$1` genommen wird, das der erste Wert ist, der im zweiten Parameter von `getMessage()` gegeben wird. Da der Platzhalter `"url"` genannt wird, verwenden wir `$URL$`, um ihn im tatsächlichen Nachrichten-String zu generieren (also für `"name"` würden Sie `$NAME$` verwenden, etc.). Wenn Sie mehrere Platzhalter haben, können Sie sie in einem Array bereitstellen, das als zweiter Parameter an {{WebExtAPIRef("i18n.getMessage()")}} übergeben wird — `[a, b, c]` steht in `messages.json` als `$1`, `$2` und `$3` zur Verfügung.

Lassen Sie uns ein Beispiel durchgehen: Der ursprüngliche `notificationContent` Nachrichten-String in der `en/messages.json`-Datei ist

```plain
You clicked $URL$.
```

Angenommen, der geklickte Link verweist auf `https://developer.mozilla.org`. Nach dem Aufruf von {{WebExtAPIRef("i18n.getMessage()")}} wird der Inhalt des zweiten Parameters in `messages.json` als `$1` verfügbar gemacht, was den `$URL$`-Platzhalter ersetzt, wie im `"url"`-Platzhalter definiert. Also ist der endgültige Nachrichten-String

```plain
You clicked https://developer.mozilla.org.
```

### Direkte Verwendung von Platzhaltern

Es ist möglich, Ihre Variablen (`$1`, `$2`, `$3`, etc.) direkt in die Nachrichten-Strings einzufügen. Zum Beispiel könnten wir das obenstehende `"notificationContent"`-Element wie folgt umschreiben:

```json
"notificationContent": {
  "message": "You clicked $1.",
  "description": "Tells the user which link they clicked."
}
```

Dies mag schneller und weniger komplex erscheinen, aber die andere Methode (die `"placeholders"` verwendet) wird als Best Practice angesehen. Dies liegt daran, dass der Platzhaltername (z.B. `"url"`) und das Beispiel Ihnen helfen, sich daran zu erinnern, wofür der Platzhalter gedacht ist — eine Woche, nachdem Sie Ihren Code geschrieben haben, haben Sie wahrscheinlich vergessen, was `$1` – `$8` bedeuten, aber Sie werden sich eher daran erinnern, was Ihre Platzhalternamen bedeuten.

### Feste Substitution

Es ist auch möglich, fest eingestellte Strings in Platzhaltern einzufügen, sodass derselbe Wert jedes Mal verwendet wird, anstatt den Wert aus einer Variablen in Ihrem Code zu nehmen. Zum Beispiel:

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

In diesem Fall setzen wir den Platzhalterinhalt einfach fest, anstatt ihn aus einem Variablenwert wie `$1` zu beziehen. Dies kann nützlich sein, wenn Ihre Nachrichtendatei sehr komplex ist und Sie unterschiedliche Werte aufteilen möchten, um die Strings in der Datei lesbarer zu machen, und außerdem könnten dann diese Werte programmatisch abgerufen werden.

Zusätzlich können Sie solche Substitutionen verwenden, um Teile des Strings zu spezifizieren, die nicht übersetzt werden sollen, wie Personen- oder Firmennamen.

## Auswahl lokalisierter Strings

Lokale können mit einem Sprachcode spezifiziert werden, wie `fr` oder `en`, oder kombiniert mit einem Skript- und Regionencode, wie `en-US` oder `zh-Hans-CN`. Wenn Ihre Erweiterung das i18n-System um einen String bittet, wählt es einen String mit diesem Algorithmus aus:

1. Gibt den String zurück, wenn es eine `messages.json`-Datei für das Locale des benutzerdefinierten Browsers gibt, die den String enthält. Zum Beispiel, wenn der Benutzer seinen Browser auf `en-US` eingestellt hat und die Erweiterung die Datei `_locales/en_US/messages.json` bereitstellt.
2. Andernfalls, wenn das Browser-Locale mit einem Skript oder einer Region qualifiziert ist (z.B. `en-US` oder `zh-Hans-CN`) und es eine `messages.json`-Datei für die nicht-regionale Version und dann die nicht-skriptierte Version dieses Locales gibt und diese Datei den String enthält, wird er zurückgegeben. Zum Beispiel, wenn der Benutzer seinen Browser auf `zh-Hans-CN` eingestellt hat (und es keine `_locales/zh_Hans_CN/messages.json` gibt), sucht das i18n-System nach einem String in `zh-Hans`, und wenn dieser nicht verfügbar ist, `zh`.
3. Andernfalls, wenn es eine `messages.json`-Datei für das in `manifest.json` definierte `default_locale` gibt und sie den String enthält, wird dieser zurückgegeben.
4. Andernfalls wird ein leerer String zurückgegeben.

Betrachten Sie dieses Beispiel:

- Erweiterungs-Stammverzeichnis/
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

Angenommen, das `default_locale` ist auf `fr` gesetzt.

- Wenn das Locale des Browsers `en-GB` ist, wird bei einem Aufruf von `getMessage("colorLocalized")` "colour" zurückgegeben, da `_locales/en_GB/messages.json` die `colorLocalized`-Nachricht enthält.
- Wenn das Locale des Browsers `en-US` ist, wird bei einem Aufruf von `getMessage("colorLocalized")` "color" zurückgegeben, da auf die Nachricht in `_locales/en/messages.json` zurückgegriffen wird.
- Wenn das Locale des Browsers `zh-Hans-CN` ist, wird bei einem Aufruf von `getMessage("colorLocalized")` "couleur" zurückgegeben, da keine Sprache, kein Skript oder keine Region dem `zh-Hans-CN`-Locale entspricht.

## Vordefinierte Nachrichten

Das i18n-Modul bietet uns einige vordefinierte Nachrichten, die wir auf die gleiche Weise aufrufen können, wie wir es oben in [Lokalisierte Strings in Manifeste abrufen](#abrufen_lokalisierter_strings_in_manifeste) und [Lokalspezifisches CSS](#lokalspezifisches_css) gesehen haben. Zum Beispiel:

```plain
__MSG_extensionName__
```

Vordefinierte Nachrichten verwenden genau die gleiche Syntax, außer dass `@@` vor dem Nachrichtennamen steht, zum Beispiel

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
          Die intern generierte UUID der Erweiterung. Sie könnten diese Zeichenkette verwenden, um URLs für Ressourcen innerhalb der Erweiterung zu erstellen. Sogar nicht lokalisierte Erweiterungen können diese Nachricht verwenden.
        </p>
        <p>Sie können diese Nachricht nicht in einer Manifestdatei verwenden.</p>
        <p>
          Beachten Sie auch, dass diese ID <em>nicht</em> die Add-on-ID ist, die durch
          {{WebExtAPIRef("runtime.id")}} zurückgegeben wird und die mithilfe
          des
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
            >browser_specific_settings</a
          >
          Schlüssels in manifest.json gesetzt werden kann. Es ist die generierte UUID, die in der URL des Add-ons erscheint. Das bedeutet, dass Sie diesen Wert nicht als
          <code>extensionId</code>-Parameter zu
          {{WebExtAPIRef("runtime.sendMessage()")}} verwenden können und
          ihn nicht zum Abgleich mit der <code>id</code>-Eigenschaft eines
          {{WebExtAPIRef("runtime.MessageSender")}}-Objekts verwenden können.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>@@ui_locale</code></td>
      <td>
        Das aktuelle Locale; Sie könnten diese Zeichenkette verwenden, um
        lokalabhängige URLs zu erstellen.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_dir</code></td>
      <td>
        Die Textausrichtung für das aktuelle Locale, entweder "ltr" für
        von links nach rechts geschriebene Sprachen wie Englisch oder "rtl" für
        von rechts nach links geschriebene Sprachen wie Arabisch.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_reversed_dir</code></td>
      <td>
        Wenn <code>@@bidi_dir</code> "ltr" ist, dann ist dies "rtl"; andernfalls
        ist es "ltr".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_start_edge</code></td>
      <td>
        Wenn <code>@@bidi_dir</code> "ltr" ist, dann ist dies "left"; andernfalls
        ist es "right".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_end_edge</code></td>
      <td>
        Wenn <code>@@bidi_dir</code> "ltr" ist, dann ist dies "right";
        andernfalls ist es "left".
      </td>
    </tr>
  </tbody>
</table>

Um auf unser vorheriges Beispiel zurückzukommen, wäre es sinnvoller, es so zu schreiben:

```css
header {
  background-image: url("../images/__MSG_@@ui_locale__/header.png");
}
```

Jetzt können wir unsere lokalspezifischen Bilder einfach in Verzeichnissen ablegen, die den verschiedenen von uns unterstützten Lokalitäten entsprechen — en, de, etc. — was viel sinnvoller ist.

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

Für von links nach rechts geschriebene Sprachen wie Englisch würden die CSS-Deklarationen, die die vordefinierten Nachrichten verwenden, auf die folgenden endgültigen Codezeilen übersetzt:

```css
direction: ltr;
padding-left: 0;
padding-right: 1.5em;
```

Für eine von rechts nach links geschriebene Sprache wie Arabisch erhielten Sie:

```css
direction: rtl;
padding-right: 0;
padding-left: 1.5em;
```

## Testen Ihrer Erweiterung

Für Informationen zu den Tools und zum Prozess zum Testen Ihrer Lokalisierungen siehe:

- Firefox: [Testen von Lokalisierungen](https://extensionworkshop.com/documentation/develop/test-localizations/) im Extension Workshop
- Chrome: [Setzen Sie das Locale Ihres Browsers](https://developer.chrome.com/docs/extensions/reference/api/i18n#how-to-set-browsers-locale)
