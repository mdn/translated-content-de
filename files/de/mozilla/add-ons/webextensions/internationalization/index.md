---
title: Internationalisierung
slug: Mozilla/Add-ons/WebExtensions/Internationalization
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{AddonSidebar}}

Die [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) API bietet ein nützliches Modul zur Internationalisierung von Erweiterungen — [i18n](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n). In diesem Artikel erkunden wir die Funktionen und zeigen ein praktisches Beispiel, wie es funktioniert. Das i18n-System für Erweiterungen, die mit WebExtension-APIs erstellt wurden, ähnelt gängigen JavaScript-Bibliotheken für i18n wie [i18n.js](http://i18njs.com/).

> [!NOTE]
> Die in diesem Artikel behandelte Beispielerweiterung — [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) — ist auf GitHub verfügbar. Folgen Sie dem Quellcode, während Sie die folgenden Abschnitte durchgehen.

## Aufbau einer internationalisierten Erweiterung

Eine internationalisierte Erweiterung kann dieselben Funktionen wie jede andere Erweiterung enthalten — [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts), [Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) usw. — sie enthält jedoch auch einige zusätzliche Teile, um zwischen verschiedenen Gebietsschemas wechseln zu können. Diese sind im folgenden Verzeichnisbaum zusammengefasst:

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

    - Gebietsschema-abhängige Metadaten

  - myJavascript.js

    - JavaScript zum Abrufen des Browser-Gebietsschemas, gebietsschema-spezifische Nachrichten usw.

  - myStyles.css

    - Gebietsschema-abhängige CSS

Lassen Sie uns jeden der neuen Funktionen der Reihe nach kennenlernen — jeder der untenstehenden Abschnitte stellt einen Schritt dar, den Sie befolgen sollten, um Ihre Erweiterung zu internationalisieren.

## Bereitstellung lokalisierter Strings in \_locales

> [!NOTE]
> Sie können Sprach-Subtags mit dem _Find_-Werkzeug auf der [Language subtag lookup page](https://r12a.github.io/app-subtags/) nachschlagen. Beachten Sie, dass Sie nach dem englischen Namen der Sprache suchen müssen.

Jedes i18n-System erfordert die Bereitstellung von Strings, die in alle verschiedenen unterstützten Gebietsschemas übersetzt wurden. In Erweiterungen befinden sich diese in einem Verzeichnis namens `_locales`, das im Stammverzeichnis der Erweiterung platziert wird. Jedes einzelne Gebietsschema hat seine Strings (auch als Nachrichten bezeichnet), die sich in einer Datei namens `messages.json` befinden, welche in einem Unterverzeichnis von `_locales` abgelegt ist, das mit dem Sprach-Subtag der entsprechenden Sprache benannt ist.

Beachten Sie, dass wenn der Subtag eine Basissprache plus eine regionale Variante enthält, dann die Sprache und die Variante konventionell mit einem Bindestrich getrennt werden: zum Beispiel "en-US". In den Verzeichnissen unter `_locales` **muss der Separator jedoch ein Unterstrich sein**: "en_US".

So haben wir [zum Beispiel in unserer Beispiel-App](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n/_locales) Verzeichnisse für "en" (Englisch), "de" (Deutsch), "nl" (Niederländisch) und "ja" (Japanisch). Jedes von diesen hat eine `messages.json`-Datei darin.

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

Diese Datei ist ein standardmäßiges JSON — jedes ihrer Mitglieder ist ein Objekt mit einem Namen, der ein `message` und eine `description` enthält. Alle diese Elemente sind Strings; `$URL$` ist ein Platzhalter, der durch ein Substring ersetzt wird, wenn das `notificationContent`-Mitglied von der Erweiterung aufgerufen wird. Wie das funktioniert, lernen Sie im Abschnitt [Abrufen von Nachrichten-Strings aus JavaScript](#abrufen_von_nachrichten-strings_aus_javascript).

> [!NOTE]
> Mehr Informationen über die Inhalte von `messages.json`-Dateien finden Sie in unserem [Gebietsspezifische Nachrichten-Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference).

## Internationalisierung von manifest.json

Es gibt einige verschiedene Aufgaben, die Sie zur Internationalisierung Ihrer manifest.json durchführen müssen.

### Abrufen lokalisierter Strings in Manifesten

Ihre [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/manifest.json) enthält Strings, die dem Nutzer angezeigt werden, wie der Name und die Beschreibung der Erweiterung. Wenn Sie diese Strings internationalisieren und die entsprechenden Übersetzungen davon in `messages.json` ablegen, wird dem Nutzer die korrekte Übersetzung des Strings angezeigt, basierend auf dem aktuellen Gebietsschema.

Um Strings zu internationalisieren, spezifizieren Sie sie folgendermaßen:

```json
"name": "__MSG_extensionName__",
"description": "__MSG_extensionDescription__",
```

Hier rufen wir Nachrichten-Strings ab, die vom Browser-Gebietsschema abhängen, anstatt nur statische Strings einzufügen.

Um einen Nachrichten-String so zu rufen, müssen Sie ihn folgendermaßen spezifizieren:

1. Zwei Unterstriche, gefolgt von
2. dem String "MSG", gefolgt von
3. einem Unterstrich, gefolgt von
4. dem Namen der Nachricht, die Sie wie in `messages.json` definiert aufrufen möchten, gefolgt von
5. zwei Unterstrichen

```plain
__MSG_ + messageName + __
```

### Festlegung eines Standard-Gebietsschemas

Ein weiteres Feld, das Sie in Ihrer manifest.json spezifizieren sollten, ist [default_locale](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale):

```json
"default_locale": "en"
```

Dieses legt ein Standard-Gebietsschema fest, das verwendet wird, wenn die Erweiterung keinen lokalisierten String für das aktuelle Browser-Gebietsschema enthält. Alle Nachrichten-Strings, die im Browser-Gebietsschema nicht verfügbar sind, werden stattdessen aus dem Standard-Gebietsschema genommen. Es gibt einige weitere Details darüber, wie der Browser Strings auswählt — siehe [Auswahl lokalisierter Strings](#auswahl_lokalisierter_strings).

## Gebietsschema-abhängige CSS

Beachten Sie, dass Sie auch lokalisierten Strings aus CSS-Dateien in der Erweiterung abrufen können. Sie könnten beispielsweise eine gebietsschema-abhängige CSS-Regel konstruieren, wie diese:

```css
header {
  background-image: url(../images/__MSG_extensionName__/header.png);
}
```

Dies ist nützlich, obwohl Sie solch eine Situation besser mit [Vordefinierten Nachrichten](#vordefinierte_nachrichten) handhaben könnten.

## Abrufen von Nachrichten-Strings aus JavaScript

Nun, da Sie Ihre Nachrichten-Strings eingerichtet und Ihr Manifest konfiguriert haben, müssen Sie nur noch beginnen, Ihre Nachrichten-Strings aus JavaScript aufzurufen, damit Ihre Erweiterung so weit wie möglich die richtige Sprache sprechen kann. Die eigentliche [i18n API](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n) ist ziemlich einfach und enthält nur vier Hauptmethoden:

- Sie werden wahrscheinlich {{WebExtAPIRef("i18n.getMessage()")}} am häufigsten verwenden — dies ist die Methode, mit der Sie einen bestimmten Sprach-String abrufen, wie oben erwähnt. Wir werden spezifische Anwendungsbeispiele dafür unten sehen.
- Die Methoden {{WebExtAPIRef("i18n.getAcceptLanguages()")}} und {{WebExtAPIRef("i18n.getUILanguage()")}} könnten verwendet werden, wenn Sie die Benutzeroberfläche an das Gebietsschema anpassen müssen — vielleicht möchten Sie spezifische Präferenzen der bevorzugten Sprachen der Nutzer höher in einer Präferenzliste anzeigen, kulturelle Informationen, die nur für eine bestimmte Sprache von Belang sind, oder angezeigt Daten entsprechend dem Browser-Gebietsschema korrekt formatieren.
- Die Methode {{WebExtAPIRef("i18n.detectLanguage()")}} könnte verwendet werden, um die Sprache von nutzereingereichten Inhalten zu erkennen und sie entsprechend zu formatieren.

In unserem Beispiel [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) enthält das [Hintergrundskript](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/background-script.js) die folgenden Zeilen:

```js
let title = browser.i18n.getMessage("notificationTitle");
let content = browser.i18n.getMessage("notificationContent", message.url);
```

Die erste Zeile ruft einfach das `notificationTitle message`-Feld aus der `messages.json`-Datei ab, die für das aktuelle Gebietsschema des Browsers am besten geeignet ist. Die zweite ist ähnlich, aber es wird eine URL als zweiter Parameter übergeben. Was steckt dahinter? So geben Sie den Inhalt an, der den `$URL$` -Platzhalter ersetzt, den wir im `notificationContent message`-Feld sehen:

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

Das `"placeholders"`-Mitglied definiert alle Platzhalter und wo sie herkommen. Der `"url"`-Platzhalter gibt an, dass der Inhalt aus `$1` genommen wird, was der erste Wert ist, der im zweiten Parameter von `getMessage()` gegeben wird. Da der Platzhalter `"url"` genannt wird, verwenden wir `$URL$`, um ihn im eigentlichen Nachrichten-String aufzurufen (für `"name"` würden Sie `$NAME$` verwenden usw.) Wenn Sie mehrere Platzhalter haben, können Sie sie innerhalb eines Arrays bereitstellen, das {{WebExtAPIRef("i18n.getMessage()")}} als zweiter Parameter übergeben wird — `[a, b, c]` wird als `$1`, `$2` und `$3` verfügbar sein und so weiter, innerhalb von `messages.json`.

Gehen wir ein Beispiel durch: Der ursprüngliche `notificationContent`-Nachrichten-String in der `en/messages.json`-Datei ist

```plain
You clicked $URL$.
```

Angenommen, der geklickte Link zeigt auf `https://developer.mozilla.org`. Nach dem {{WebExtAPIRef("i18n.getMessage()")}}-Aufruf werden die Inhalte des zweiten Parameters in messages.json als `$1` verfügbar gemacht, die den `$URL$`-Platzhalter ersetzen, wie im `"url"`-Platzhalter definiert. So ist der endgültige Nachrichten-String

```plain
You clicked https://developer.mozilla.org.
```

### Direkte Verwendung von Platzhaltern

Es ist möglich, Ihre Variablen (`$1`, `$2`, `$3`, usw.) direkt in die Nachrichten-Strings einzufügen, zum Beispiel könnten wir das obige `"notificationContent"`-Mitglied so umschreiben:

```json
"notificationContent": {
  "message": "You clicked $1.",
  "description": "Tells the user which link they clicked."
}
```

Dies mag schneller und weniger komplex erscheinen, aber die andere Methode (die `"placeholders"` verwendet) gilt als Best Practice. Dies liegt daran, dass der Platzhaltername (z.B. `"url"`) und Beispiel helfen, sich zu merken, wofür der Platzhalter vorgesehen ist — eine Woche nach dem Schreiben Ihres Codes werden Sie wahrscheinlich vergessen haben, was `$1` – `$8` bedeuten, aber Sie werden eher wissen, was Ihre Platzhalternamen bedeuten.

### Festselectionsersetzung

Es ist auch möglich, fest codierte Strings in Platzhaltern einzuschließen, so dass jedes Mal derselbe Wert verwendet wird, anstatt den Wert aus einer Variablen in Ihrem Code zu erhalten. Zum Beispiel:

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

In diesem Fall kodieren wir einfach den Platzhalterinhalt fest, anstatt ihn aus einem Variablenwert wie `$1` zu erhalten. Dies kann nützlich sein, wenn Ihre Nachrichten-Datei sehr komplex ist und Sie verschiedene Werte aufteilen möchten, um die Strings in der Datei besser lesbar zu machen. Diese Werte könnten dann programmatisch abgerufen werden.

Außerdem können Sie solche Substitutionen verwenden, um Teile des Strings anzugeben, die nicht übersetzt werden sollen, wie z.B. Personen- oder Firmennamen.

## Auswahl lokalisierter Strings

Gebietsschemas können mit einem Sprachcode angegeben werden, wie `fr` oder `en` oder qualifiziert mit einem Skript- und Regionscode wie `en-US` oder `zh-Hans-CN`. Wenn Ihre Erweiterung das i18n-System nach einem String fragt, wählt es einen String mit diesem Algorithmus aus:

1. Gibt den String zurück, wenn eine `messages.json`-Datei für das im Browser des Nutzers eingestellte Gebietsschema den String enthält. Zum Beispiel, wenn der Benutzer seinen Browser auf `en-US` eingestellt hat und die Erweiterung die `_locales/en_US/messages.json`-Datei bereitstellt.
2. Andernfalls, wenn das Browser-Gebietsschema mit einem Skript oder einer Region qualifiziert ist (z.B. `en-US` oder `zh-Hans-CN`) und eine `messages.json`-Datei für die regionale Version und, wenn das nicht verfügbar ist, für die skriptlose Version dieses Gebietsschemas existiert und diese Datei den String enthält, geben Sie diesen zurück. Zum Beispiel, wenn der Benutzer seinen Browser auf `zh-Hans-CN` eingestellt hat (und es keine `_locales/zh_Hans_CN/messages.json`-Datei gibt), sucht das i18n-System nach einem String in `zh-Hans`, und wenn dieser nicht verfügbar ist, `zh`.
3. Andernfalls, wenn es eine `messages.json`-Datei für das `default_locale` definiert in `manifest.json` gibt und diese den String enthält, geben Sie ihn zurück.
4. Andernfalls geben Sie einen leeren String zurück.

Beispiel:

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

Angenommen, `default_locale` ist auf `fr` gesetzt.

- Wenn das Browser-Gebietsschema `en-GB` ist, wird beim Aufrufen von `getMessage("colorLocalized")` durch die Erweiterung "colour" zurückgegeben, weil `_locales/en_GB/messages.json` die `colorLocalized`-Nachricht enthält.
- Wenn das Browser-Gebietsschema `en-US` ist, wird bei `getMessage("colorLocalized")` "color" zurückgegeben, weil es auf die Nachricht in `_locales/en/messages.json` zurückfällt.
- Wenn das Browser-Gebietsschema `zh-Hans-CN` ist, wird bei `getMessage("colorLocalized")` "couleur" zurückgegeben, weil es keine Übereinstimmung in Sprache, Skript oder Region mit dem `zh-Hans-CN`-Gebietsschema gibt.

## Vordefinierte Nachrichten

Das i18n-Modul stellt uns einige vordefinierte Nachrichten zur Verfügung, die wir auf die gleiche Weise aufrufen können, wie wir es früher bei [Abrufen lokalisierter Strings in Manifesten](#abrufen_lokalisierter_strings_in_manifesten) und [Gebietsschema-abhängige CSS](#gebietsschema-abhängige_css) gesehen haben. Beispiel:

```plain
__MSG_extensionName__
```

Vordefinierte Nachrichten verwenden genau die gleiche Syntax, außer mit `@@` vor dem Nachrichten-Namen, beispielsweise

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
          Beachten Sie auch, dass diese ID <em>nicht</em> die Add-on-ID ist, die
          durch {{WebExtAPIRef("runtime.id")}} zurückgegeben wird und die mit
          dem
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
            >browser_specific_settings</a
          >
          Schlüssel in manifest.json festgelegt werden kann. Es ist die
          generierte UUID, die in der URL des Add-ons angezeigt wird. Das
          bedeutet, dass Sie diesen Wert nicht als
          <code>extensionId</code>-Parameter für
          {{WebExtAPIRef("runtime.sendMessage()")}} verwenden können und ihn
          nicht mit der <code>id</code>-Eigenschaft eines
          {{WebExtAPIRef("runtime.MessageSender")}}-Objekts vergleichen können.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>@@ui_locale</code></td>
      <td>
        Das aktuelle Gebietsschema; Sie könnten diesen String verwenden, um
        gebietsspezifische URLs zu konstruieren.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_dir</code></td>
      <td>
        Die Textausrichtung für das aktuelle Gebietsschema, entweder "ltr" für
        Sprachen von links nach rechts wie Englisch oder "rtl" für Sprachen von
        rechts nach links wie Arabisch.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_reversed_dir</code></td>
      <td>
        Wenn der <code>@@bidi_dir</code> "ltr" ist, dann ist dies "rtl";
        andernfalls ist es "ltr".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_start_edge</code></td>
      <td>
        Wenn der <code>@@bidi_dir</code> "ltr" ist, dann ist dies "left";
        andernfalls ist es "right".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_end_edge</code></td>
      <td>
        Wenn der <code>@@bidi_dir</code> "ltr" ist, dann ist dies "right";
        andernfalls ist es "left".
      </td>
    </tr>
  </tbody>
</table>

Zurück zu unserem vorherigen Beispiel, es wäre sinnvoller, es so zu schreiben:

```css
header {
  background-image: url(../images/__MSG_@@ui_locale__/header.png);
}
```

Jetzt können wir einfach unsere gebietsspezifischen Bilder in Verzeichnissen speichern, die den verschiedenen unterstützten Gebietsschemas entsprechen — en, de, usw. — was viel sinnvoller ist.

Lassen Sie uns ein Beispiel für die Verwendung von `@@bidi_*`-Nachrichten in einer CSS-Datei betrachten:

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

Für Sprachen von links nach rechts wie Englisch würden die CSS-Erklärungen, die die oben genannten vordefinierten Nachrichten beinhalten, in die folgenden endgültigen Codezeilen übersetzt:

```css
direction: ltr;
padding-left: 0;
padding-right: 1.5em;
```

Für eine Sprache von rechts nach links wie Arabisch, würden Sie bekommen:

```css
direction: rtl;
padding-right: 0;
padding-left: 1.5em;
```

## Testen Ihrer Erweiterung

Um die Lokalisierung Ihrer Erweiterung zu testen, verwenden Sie [Firefox](https://www.mozilla.org/de/firefox/new/) oder [Firefox Beta](https://www.mozilla.org/de/firefox/channel/desktop/), die Firefox-Builds, in denen Sie Sprachpakete installieren können.

Dann, für jedes Gebietsschema, das in der Erweiterung unterstützt wird, die Sie testen möchten, folgen Sie den Anweisungen unter [Verwenden von Firefox in einer anderen Sprache](https://support.mozilla.org/de/kb/use-firefox-another-language), um die Sprache der Firefox-Benutzeroberfläche zu ändern. (Wenn Sie sich in Einstellungen auskennen, verwenden Sie Set Alternatives unter Sprache.)

Wenn Firefox in Ihrer Testsprache läuft, installieren Sie die Erweiterung vorübergehend von `about:debugging` aus [Installationsanleitung für Erweiterungen in Firefox](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) oder laden Sie sie neu, wenn sie bereits installiert ist. Nach der Installation oder dem erneuten Laden Ihrer Erweiterung sehen Sie, wenn Sie Ihre Erweiterung korrekt eingerichtet haben, die Erweiterung mit ihrem Symbol, Namen und ihrer Beschreibung in der gewählten Sprache aufgelistet. Sie können auch die lokalisierten Erweiterungsdetails in `about:addons` sehen. Testen Sie nun die Funktionen der Erweiterung, um sicherzustellen, dass die Übersetzungen vorhanden sind.

Wenn Sie diesen Prozess ausprobieren möchten, können Sie die [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Erweiterung verwenden. Richten Sie Firefox so ein, dass eine der in diesem Beispiel unterstützten Sprachen (Deutsch, Niederländisch oder Japanisch) angezeigt wird. Laden Sie die Erweiterung und gehen Sie zu einer Website. Klicken Sie auf einen Link, um die übersetzte Version der Benachrichtigung, die die URL des Links meldet, zu sehen.
