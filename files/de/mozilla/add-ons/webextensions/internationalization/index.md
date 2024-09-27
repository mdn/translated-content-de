---
title: Internationalisierung
slug: Mozilla/Add-ons/WebExtensions/Internationalization
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Die [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) API bietet ein recht praktisches Modul zur Internationalisierung von Erweiterungen – [i18n](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n). In diesem Artikel werden wir die Funktionen erkunden und ein praktisches Beispiel geben, wie es funktioniert. Das i18n-System für Erweiterungen, die mit den WebExtension-APIs erstellt werden, ist ähnlich wie gängige JavaScript-Bibliotheken für i18n, wie zum Beispiel [i18n.js](http://i18njs.com/).

> [!NOTE]
> Die in diesem Artikel vorgestellte Beispielerweiterung — [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) — ist auf GitHub verfügbar. Folgen Sie dem Quellcode, während Sie die folgenden Abschnitte durchgehen.

## Aufbau einer internationalisierten Erweiterung

Eine internationalisierte Erweiterung kann dieselben Funktionen haben wie jede andere Erweiterung — [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts), [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts), usw. — sie enthält aber auch einige zusätzliche Teile, um zwischen verschiedenen Sprachversionen wechseln zu können. Diese sind in der folgenden Verzeichnisstruktur zusammengefasst:

- extension-root-directory/

  - \_locales

    - en

      - messages.json

        - Englische Nachrichten (Strings)

    - de

      - messages.json

        - Deutsche Nachrichten (Strings)

    - etc.

  - manifest.json

    - sprachabhängige Metadaten

  - myJavascript.js

    - JavaScript zum Abrufen der Browser-Sprache, sprachspezifische Nachrichten, etc.

  - myStyles.css

    - sprachabhängiges CSS

Lassen Sie uns nun jede der neuen Funktionen im Einzelnen erkunden – jeder der untenstehenden Abschnitte stellt einen Schritt dar, den Sie befolgen sollten, wenn Sie Ihre Erweiterung internationalisieren.

## Bereitstellung lokalisierter Strings in \_locales

> [!NOTE]
> Sie können Sprachuntertags mit dem _Find_-Tool auf der [Language subtag lookup page](https://r12a.github.io/app-subtags/) nachschlagen. Beachten Sie, dass Sie nach dem englischen Namen der Sprache suchen müssen.

Jedes i18n-System erfordert die Bereitstellung von Strings, die in alle verschiedenen gewünschten Sprachversionen übersetzt wurden. In Erweiterungen sind sie in einem Verzeichnis namens `_locales` enthalten, das im Stammverzeichnis der Erweiterung angelegt wird. Jede einzelne Sprachversion hat ihre Strings (als Nachrichten bezeichnet) in einer Datei namens `messages.json`, die in einem Unterverzeichnis von `_locales` untergebracht ist, das mit dem Sprachuntertag für die Sprache der Sprachversion benannt ist.

Beachten Sie, dass, wenn der Subtag eine Basissprache plus eine regionale Variante enthält, die Sprache und die Variante konventionell mit einem Bindestrich getrennt werden: z.B. "en-US". In den Verzeichnissen unter `_locales` muss **der Separator jedoch ein Unterstrich** sein: "en_US".

So haben wir [zum Beispiel in unserer Beispielanwendung](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n/_locales) Verzeichnisse für "en" (Englisch), "de" (Deutsch), "nl" (Niederländisch) und "ja" (Japanisch). Jedes dieser Verzeichnisse enthält eine `messages.json`-Datei.

Sehen wir uns nun die Struktur einer dieser Dateien an ([\_locales/en/messages.json](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/_locales/en/messages.json)):

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

Diese Datei ist ein Standard-JSON — jedes ihrer Mitglieder ist ein Objekt mit einem Namen, das ein `message` und eine `description` enthält. Alle diese Elemente sind Strings; `$URL$` ist ein Platzhalter, der durch einen Teilstring ersetzt wird, wenn das Mitglied `notificationContent` von der Erweiterung aufgerufen wird. Wie Sie dies tun, lernen Sie im Abschnitt [Abrufen von Nachrichtentexten aus JavaScript](#abrufen_von_nachrichtentexten_aus_javascript).

> [!NOTE]
> Sie finden viel mehr Informationen über den Inhalt von `messages.json`-Dateien in unserer [Referenz zur sprachspezifischen Nachricht](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference).

## Internationalisierung von manifest.json

Es gibt ein paar verschiedene Aufgaben, die durchgeführt werden müssen, um Ihre `manifest.json` zu internationalisieren.

### Abrufen lokalisierter Strings in Manifests

Ihr [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/manifest.json) enthält Strings, die dem Benutzer angezeigt werden, wie z.B. den Namen und die Beschreibung der Erweiterung. Wenn Sie diese Strings internationalisieren und die entsprechenden Übersetzungen davon in `messages.json` platzieren, wird dem Benutzer die richtige Übersetzung der Zeichenfolge angezeigt, basierend auf der aktuellen Sprache, so.

Um Strings zu internationalisieren, geben Sie sie folgendermaßen an:

```json
"name": "__MSG_extensionName__",
"description": "__MSG_extensionDescription__",
```

Hier rufen wir nachrichtenabhängige Strings abhängig von der Sprache des Browsers ab, anstatt nur statische Strings einzufügen.

Um eine Nachrichtenzeichenfolge wie diese aufzurufen, müssen Sie sie folgendermaßen angeben:

1. Zwei Unterstriche, gefolgt von
2. Dem String "MSG", gefolgt von
3. Einem Unterstrich, gefolgt von
4. Dem Namen der Nachricht, die Sie aufrufen möchten, wie in `messages.json` definiert, gefolgt von
5. Zwei Unterstrichen

```plain
__MSG_ + messageName + __
```

### Festlegen einer Standardsprachversion

Ein weiteres Feld, das Sie in Ihre `manifest.json` aufnehmen sollten, ist [default_locale](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale):

```json
"default_locale": "en"
```

Dies gibt eine Standardsprachversion an, die verwendet wird, wenn die Erweiterung keine lokalisierte Zeichenfolge für die aktuelle Sprachversion des Browsers enthält. Alle Nachrichtenzeichenfolgen, die in der Browsersprache nicht verfügbar sind, werden stattdessen aus der Standardsprache übernommen. Es gibt einige weitere Details, die beachtet werden müssen, wie der Browser Zeichenfolgen auswählt – siehe [Auswahl lokalisierter Zeichenfolgen](#auswahl_lokalisierter_zeichenfolgen).

## Sprachabhängiges CSS

Beachten Sie, dass Sie auch lokalisierte Zeichenfolgen aus CSS-Dateien in der Erweiterung abrufen können. Zum Beispiel möchten Sie vielleicht eine sprachabhängige CSS-Regel erstellen, wie diese:

```css
header {
  background-image: url(../images/__MSG_extensionName__/header.png);
}
```

Dies ist nützlich, obwohl Sie eine solche Situation möglicherweise besser mit [vordefinierten Nachrichten](#vordefinierte_nachrichten) handhaben.

## Abrufen von Nachrichtentexten aus JavaScript

Nun haben Sie Ihre Nachrichtentexte eingerichtet und Ihr Manifest. Jetzt müssen Sie nur noch Ihre Nachrichtentexte aus JavaScript abrufen, damit Ihre Erweiterung so oft wie möglich die richtige Sprache spricht. Die eigentliche [i18n API](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n) ist ziemlich einfach und enthält nur vier Hauptmethoden:

- Sie werden vermutlich {{WebExtAPIRef("i18n.getMessage()")}} am häufigsten verwenden – dies ist die Methode, die Sie verwenden, um eine spezifische Sprachzeichenfolge abzurufen, wie oben erwähnt. Unten werden wir spezifische Anwendungsbeispiele dafür sehen.
- Die Methoden {{WebExtAPIRef("i18n.getAcceptLanguages()")}} und {{WebExtAPIRef("i18n.getUILanguage()")}} könnten verwendet werden, wenn Sie das UI an die Sprachversion anpassen müssen – vielleicht möchten Sie anwendungsspezifische Einstellungsmöglichkeiten basierend auf den bevorzugten Sprachen des Benutzers höher in einer Einstellliste anzeigen oder kulturelle Informationen einblenden, die nur für eine bestimmte Sprache relevant sind, oder angezeigte Daten entsprechend der Browsersprache entsprechend formatieren.
- Die Methode {{WebExtAPIRef("i18n.detectLanguage()")}} könnte verwendet werden, um die Sprache von benutzerübermitteltem Inhalt zu erkennen und ihn entsprechend zu formatieren.

In unserem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel enthält das [Hintergrundskript](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/background-script.js) folgende Zeilen:

```js
let title = browser.i18n.getMessage("notificationTitle");
let content = browser.i18n.getMessage("notificationContent", message.url);
```

Die erste Zeile ruft einfach das `notificationTitle message`-Feld aus der am besten geeigneten `messages.json`-Datei für die aktuelle Sprache des Browsers ab. Die zweite Zeile ist ähnlich, aber es wird eine URL als zweiter Parameter übergeben. Warum? So legen Sie den zu ersetzenden Inhalt für den `$URL$`-Platzhalter fest, den wir im `notificationContent message`-Feld sehen:

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

Das `"placeholders"`-Mitglied definiert alle Platzhalter und wo sie abgerufen werden. Der `"url"`-Platzhalter gibt an, dass sein Inhalt aus `$1` genommen wird, was der erste Wert innerhalb des zweiten Parameters von `getMessage()` ist. Da der Platzhalter `"url"` genannt wird, verwenden wir `$URL$`, um ihn innerhalb des eigentlichen Nachrichtenstrings aufzurufen (also für `"name"` würden Sie `$NAME$` verwenden, usw.). Wenn Sie mehrere Platzhalter haben, können Sie sie innerhalb eines Arrays bereitstellen, das als zweiter Parameter an {{WebExtAPIRef("i18n.getMessage()")}} übergeben wird — `[a, b, c]` wird als `$1`, `$2` und `$3` und so weiter in `messages.json` verfügbar sein.

Lassen Sie uns ein Beispiel durchgehen: der ursprüngliche `notificationContent`-Nachrichtenstring in der `en/messages.json`-Datei ist

```plain
You clicked $URL$.
```

Angenommen, der angeklickte Link zeigt auf `https://developer.mozilla.org`. Nach dem {{WebExtAPIRef("i18n.getMessage()")}} Aufruf werden die Inhalte des zweiten Parameters in `messages.json` als `$1` verfügbar gemacht, das den `$URL$`-Platzhalter ersetzt, wie im `"url"`-Platzhalter definiert. Der endgültige Nachrichtenstring ist also

```plain
You clicked https://developer.mozilla.org.
```

### Direkte Platzhalternutzung

Es ist möglich, Ihre Variablen (`$1`, `$2`, `$3`, usw.) direkt in die Nachrichtenzeichenfolgen einzufügen, wir könnten z. B. das obige `"notificationContent"`-Mitglied so umschreiben:

```json
"notificationContent": {
  "message": "You clicked $1.",
  "description": "Tells the user which link they clicked."
}
```

Dies mag schneller und weniger komplex erscheinen, aber die andere Methode (unter Verwendung von `"placeholders"`) wird als Best-Practice angesehen. Der Grund dafür ist, dass der Platzhaltername (z. B. `"url"`) und das Beispiel Ihnen helfen, sich daran zu erinnern, wofür der Platzhalter ist — eine Woche nachdem Sie Ihren Code geschrieben haben, werden Sie wahrscheinlich vergessen, wofür `$1` – `$8` stehen, aber Sie werden eher wissen, wofür Ihre Platzhalternamen stehen.

### Hartcodierte Substitution

Es ist auch möglich, hartcodierte Zeichenfolgen in Platzhalter einzufügen, so dass derselbe Wert jedes Mal verwendet wird, anstatt den Wert von einer Variablen in Ihrem Code zu beziehen. Beispielsweise:

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

In diesem Fall kodieren wir einfach den Platzhalterinhalt hart, anstatt ihn aus einem Variablenwert wie `$1` zu bekommen. Dies kann manchmal nützlich sein, wenn Ihre Nachrichten-Datei sehr komplex ist und Sie die verschiedenen Werte aufteilen möchten, um die Zeichenfolgen besser lesbar in der Datei zu machen, und dann könnten diese Werte programmgesteuert abgerufen werden.

Darüber hinaus können Sie solche Ersetzungen verwenden, um Teile der Zeichenfolge zu spezifizieren, die nicht übersetzt werden sollen, wie Personen- oder Firmennamen.

## Auswahl lokalisierter Zeichenfolgen

Sprachversionen können nur mit einem Sprachcode angegeben werden, wie `fr` oder `en`, oder sie können mit einem Regionscode weiter qualifiziert werden, wie `en_US` oder `en_GB`, der eine regionale Variante derselben Grundsprache beschreibt. Wenn Sie das i18n-System nach einer Zeichenfolge fragen, wählt es eine Zeichenfolge mit dem folgenden Algorithmus aus:

1. Wenn es eine `messages.json`-Datei für die genau aktuelle Sprachversion gibt und sie die Zeichenfolge enthält, geben Sie sie zurück.
2. Andernfalls, wenn die aktuelle Sprachversion mit einer Region qualifiziert ist (z.B. `en_US`) und es eine `messages.json`-Datei für die regionenlose Version dieser Sprachversion (z.B. `en`) gibt und diese Datei die Zeichenfolge enthält, geben Sie sie zurück.
3. Andernfalls, wenn es eine `messages.json`-Datei für die in der `manifest.json` definierte `default_locale` gibt und sie die Zeichenfolge enthält, geben Sie sie zurück.
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

Angenommen, die `default_locale` ist auf `fr` gesetzt und die aktuelle Sprachversion des Browsers ist `en_GB`:

- Wenn die Erweiterung `getMessage("colorLocalized")` aufruft, wird sie "colour" zurückgeben.
- Wenn "colorLocalized" nicht in `en_GB` vorhanden wäre, dann würde `getMessage("colorLocalized")` "color" zurückgeben, nicht "couleur".

## Vordefinierte Nachrichten

Das i18n-Modul bietet uns einige vordefinierte Nachrichten, die wir auf die gleiche Weise aufrufen können, wie wir es zuvor bei [Abrufen lokalisierter Zeichenfolgen in Manifests](#abrufen_lokalisierter_strings_in_manifests) und [Sprachabhängiges CSS](#sprachabhängiges_css) gesehen haben. Zum Beispiel:

```plain
__MSG_extensionName__
```

Vordefinierte Nachrichten verwenden genau dieselbe Syntax, außer mit `@@` vor dem Nachrichtennamen, zum Beispiel

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
          verwenden, um URLs für Ressourcen innerhalb der Erweiterung zu
          konstruieren. Auch nicht lokalisierte Erweiterungen können diese
          Nachricht verwenden.
        </p>
        <p>Sie können diese Nachricht nicht in einer Manifest-Datei verwenden.</p>
        <p>
          Beachten Sie außerdem, dass diese ID <em>nicht</em> die Add-on-ID ist,
          die von {{WebExtAPIRef("runtime.id")}} zurückgegeben wird und
          die mit dem
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
            >browser_specific_settings</a
          >
          Schlüssel in manifest.json festgelegt werden kann. Es ist die generierte
          UUID, die in der URL des Add-ons erscheint. Das bedeutet, dass Sie diesen
          Wert nicht als <code>extensionId</code>-Parameter für
          {{WebExtAPIRef("runtime.sendMessage()")}} verwenden können und
          ihn nicht verwenden können, um gegen die <code>id</code>-Eigenschaft eines
          {{WebExtAPIRef("runtime.MessageSender")}}-Objekts zu prüfen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>@@ui_locale</code></td>
      <td>
        Die aktuelle Sprachversion; Sie könnten diesen String verwenden, um
        sprachspezifische URLs zu konstruieren.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_dir</code></td>
      <td>
        Die Textausrichtung für die aktuelle Sprachversion, entweder "ltr" für
        von links nach rechts verlaufende Sprachen wie Englisch oder "rtl" für
        von rechts nach links verlaufende Sprachen wie Arabisch.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_reversed_dir</code></td>
      <td>
        Wenn <code>@@bidi_dir</code> "ltr" ist, dann ist dies "rtl"; andererseits
        ist es "ltr".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_start_edge</code></td>
      <td>
        Wenn <code>@@bidi_dir</code> "ltr" ist, dann ist dies "left"; andererseits
        ist es "right".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_end_edge</code></td>
      <td>
        Wenn <code>@@bidi_dir</code> "ltr" ist, dann ist dies "right"; andernfalls
        ist es "left".
      </td>
    </tr>
  </tbody>
</table>

Zurück zu unserem früheren Beispiel: Es würde mehr Sinn machen, es so zu schreiben:

```css
header {
  background-image: url(../images/__MSG_@@ui_locale__/header.png);
}
```

Jetzt können wir einfach unsere lokal spezifischen Bilder in Verzeichnissen speichern, die den von uns unterstützten Sprachversionen entsprechen — en, de, etc. — was viel sinnvoller ist.

Sehen wir uns ein Beispiel für die Verwendung von `@@bidi_*`-Nachrichten in einer CSS-Datei an:

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

Bei von links nach rechts verlaufenden Sprachen wie Englisch, würden die CSS-Deklarationen, die die oben genannten vordefinierten Nachrichten beinhalten, den folgenden endgültigen Codezeilen entsprechen:

```css
direction: ltr;
padding-left: 0;
padding-right: 1.5em;
```

Für eine von rechts nach links verlaufende Sprache wie Arabisch, würden Sie erhalten:

```css
direction: rtl;
padding-right: 0;
padding-left: 1.5em;
```

## Testen Ihrer Erweiterung

Um die Lokalisierung Ihrer Erweiterung zu testen, verwenden Sie [Firefox](https://www.mozilla.org/en-US/firefox/new/) oder [Firefox Beta](https://www.mozilla.org/en-US/firefox/channel/desktop/), die Firefox-Builds, in denen Sie Sprachpakete installieren können.

Für jede in der Erweiterung unterstützte Sprachversion, die Sie testen möchten, folgen Sie den Anweisungen zur [Verwendung von Firefox in einer anderen Sprache](https://support.mozilla.org/en-US/kb/use-firefox-another-language), um die Sprache der Firefox-Benutzeroberfläche zu ändern. (Wenn Sie sich in den Einstellungen auskennen, können Sie unter Sprache Alternativen festlegen.)

Sobald Firefox in Ihrer Testsprache ausgeführt wird, [installieren Sie die Erweiterung vorübergehend](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/). Nach der Installation Ihrer Erweiterung, sehen Sie unter `about:debugging`, wenn Sie Ihre Erweiterung korrekt eingerichtet haben, die Erweiterung mit ihrem Symbol, Namen und Beschreibung in der gewählten Sprache aufgelistet. Sie können die lokalisierten Erweiterungsdetails auch unter `about:addons` sehen. Jetzt testen Sie die Funktionen der Erweiterung, um sicherzustellen, dass die benötigten Übersetzungen vorhanden sind.

Wenn Sie diesen Prozess ausprobieren möchten, können Sie die [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Erweiterung verwenden. Richten Sie Firefox ein, um eine der in diesem Beispiel unterstützten Sprachen anzuzeigen (Deutsch, Niederländisch oder Japanisch). Laden Sie die Erweiterung und gehen Sie zu einer Website. Klicken Sie auf einen Link, um die übersetzte Version der Mitteilung zu sehen, die die URL des Links angibt.
