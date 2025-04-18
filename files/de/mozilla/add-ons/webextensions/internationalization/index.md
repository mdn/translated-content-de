---
title: Internationalisierung
slug: Mozilla/Add-ons/WebExtensions/Internationalization
l10n:
  sourceCommit: dfdfa015f9f2e47186021d5f40a8cf06b1fe20d2
---

{{AddonSidebar}}

Die [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) API stellt ein sehr nützliches Modul für die Internationalisierung von Erweiterungen zur Verfügung — [i18n](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n). In diesem Artikel werden wir seine Funktionen erkunden und ein praktisches Beispiel vorstellen, wie es funktioniert. Das i18n-System für Erweiterungen, die mit WebExtension-APIs erstellt wurden, ist ähnlich wie gängige JavaScript-Bibliotheken für i18n wie [i18n.js](http://i18njs.com/).

> [!NOTE]
> Die Beispielerweiterung in diesem Artikel — [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) — ist auf GitHub verfügbar. Folgen Sie dem Quellcode, während Sie die folgenden Abschnitte durchgehen.

## Anatomie einer internationalisierten Erweiterung

Eine internationalisierte Erweiterung kann dieselben Funktionen enthalten wie jede andere Erweiterung — [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts), [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) usw. — aber sie hat auch einige zusätzliche Teile, um zwischen verschiedenen Sprachversionen wechseln zu können. Diese sind im folgenden Verzeichnisbaum zusammengefasst:

- extension-root-directory/

  - \_locales

    - en

      - messages.json

        - Englische Nachrichten (Strings)

    - de

      - messages.json

        - Deutsche Nachrichten (Strings)

    - usw.

  - manifest.json

    - sprachenabhängige Metadaten

  - myJavascript.js

    - JavaScript zur Abfrage der Browsersprache, sprachspezifische Nachrichten usw.

  - myStyles.css

    - sprachenabhängiges CSS

Lassen Sie uns nun jede der neuen Funktionen im Detail betrachten — jeder der unten aufgeführten Abschnitte stellt einen Schritt dar, dem Sie bei der Internationalisierung Ihrer Erweiterung folgen sollten.

## Bereitstellung lokalisierter Strings in \_locales

> [!NOTE]
> Sie können Sprachunterteile mit dem _Finden_ Werkzeug auf der [Language subtag lookup page](https://r12a.github.io/app-subtags/) nachschlagen. Beachten Sie, dass Sie nach dem englischen Namen der Sprache suchen müssen.

Jedes i18n-System erfordert die Bereitstellung von Strings, die in alle verschiedenen von Ihnen unterstützten Sprachversionen übersetzt wurden. In Erweiterungen sind diese in einem Verzeichnis namens `_locales` enthalten, das sich im Stammverzeichnis der Erweiterung befindet. Jede einzelne Sprachversion hat ihre Strings (als Nachrichten bezeichnet) in einer Datei mit dem Namen `messages.json`, die sich in einem Unterverzeichnis von `_locales` befindet, das mit dem Sprachunterteil für die Sprache dieser Sprachversion benannt ist.

Beachten Sie, dass wenn der Unterteil eine Basissprache plus eine regionale Variante enthält, dann Sprache und Variante konventionell durch einen Bindestrich getrennt werden: zum Beispiel „en-US“. In den Verzeichnissen unter `_locales` **muss der Trenner jedoch ein Unterstrich sein**: „en_US“.

In [unserem Beispiel](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n/_locales) haben wir Verzeichnisse für „en“ (Englisch), „de“ (Deutsch), „nl“ (Niederländisch) und „ja“ (Japanisch). Jedes von ihnen hat eine `messages.json` Datei.

Schauen wir uns nun den Aufbau einer dieser Dateien an ([\_locales/en/messages.json](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/_locales/en/messages.json)):

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

Diese Datei ist standardmäßiges JSON — jedes ihrer Mitglieder ist ein Objekt mit einem Namen, welches eine `message` und eine `description` enthält. Alle diese Einträge sind Strings; `$URL$` ist ein Platzhalter, der durch einen Teilstring ersetzt wird, wenn das `notificationContent` Mitglied von der Erweiterung aufgerufen wird. Sie lernen, wie das in dem Abschnitt [Nachrichtenstrings aus JavaScript abrufen](#nachrichtenstrings_aus_javascript_abrufen) gemacht wird.

> [!NOTE]
> Sie finden wesentlich mehr Informationen über den Inhalt von `messages.json` Dateien in unserem [Locale-Specific Message reference](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference).

## Internationalisierung von manifest.json

Es gibt ein paar verschiedene Aufgaben, die zur Internationalisierung Ihrer manifest.json durchgeführt werden müssen.

### Lokalisierte Strings in Manifests abrufen

Ihre [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/manifest.json) enthält Strings, die dem Benutzer angezeigt werden, wie der Name und die Beschreibung der Erweiterung. Wenn Sie diese Strings internationalisieren und die entsprechenden Übersetzungen davon in messages.json einfügen, wird dem Benutzer basierend auf der aktuellen Sprachversion die korrekte Übersetzung des Strings angezeigt.

Um Strings zu internationalisieren, geben Sie sie wie folgt an:

```json
"name": "__MSG_extensionName__",
"description": "__MSG_extensionDescription__",
```

Hier rufen wir Nachrichten-Strings abhängig von der Browsersprache ab, anstatt nur statische Strings einzufügen.

Um einen Nachrichten-String so aufzurufen, müssen Sie ihn folgendermaßen angeben:

1. Zwei Unterstriche, gefolgt von
2. dem String "MSG", gefolgt von
3. einem Unterstrich, gefolgt von
4. dem Namen der Nachricht, die Sie aufrufen möchten, wie in `messages.json` definiert, gefolgt von
5. zwei Unterstrichen

```plain
__MSG_ + messageName + __
```

### Festlegen einer Standardsprache

Ein weiteres Feld, das Sie in Ihrer manifest.json angeben sollten, ist [default_locale](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale):

```json
"default_locale": "en"
```

Dies legt eine Standardsprache fest, die verwendet wird, wenn die Erweiterung keinen lokalisierten String für die aktuelle Sprache des Browsers enthält. Alle Nachrichten-Strings, die in der Browsersprache nicht verfügbar sind, werden stattdessen aus der Standardsprache übernommen. Es gibt einige weitere Details, die in Bezug darauf, wie der Browser Strings auswählt, zu beachten sind — siehe [Localized string selection](#lokalisierte_string-auswahl).

## Sprachabhängiges CSS

Beachten Sie, dass Sie auch lokalisierte Strings aus CSS-Dateien in der Erweiterung abrufen können. Zum Beispiel könnten Sie ein sprachabhängiges CSS-Regelwerk wie dieses erstellen:

```css
header {
  background-image: url(../images/__MSG_extensionName__/header.png);
}
```

Dies ist nützlich, obwohl Sie eine solche Situation möglicherweise besser mit [vordefinierten Nachrichten](#vordefinierte_nachrichten) behandeln.

## Nachrichtenstrings aus JavaScript abrufen

Nachdem Sie Ihre Nachrichten-Strings eingerichtet und Ihr Manifest erstellt haben, müssen Sie nur noch Ihre Nachrichten-Strings aus JavaScript aufrufen, damit Ihre Erweiterung die richtige Sprache sprechen kann, soweit wie möglich. Die eigentliche [i18n API](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n) ist ziemlich einfach und enthält nur vier Hauptmethoden:

- Sie werden wahrscheinlich am häufigsten {{WebExtAPIRef("i18n.getMessage()")}} verwenden — dies ist die Methode, die Sie verwenden, um einen bestimmten Sprachstring abzurufen, wie oben erwähnt. Unten werden wir spezifische Anwendungsbeispiele dafür sehen.
- Die Methoden {{WebExtAPIRef("i18n.getAcceptLanguages()")}} und {{WebExtAPIRef("i18n.getUILanguage()")}} könnten verwendet werden, wenn Sie die Benutzeroberfläche abhängig von der Sprache anpassen müssen — vielleicht möchten Sie Präferenzen, die spezifisch für die bevorzugten Sprachen der Benutzer sind, weiter oben in einer Einstellliste anzeigen, kulturelle Informationen anzeigen, die nur für eine bestimmte Sprache relevant sind, oder angezeigte Daten gemäß der Browsersprache formatieren.
- Die Methode {{WebExtAPIRef("i18n.detectLanguage()")}} könnte verwendet werden, um die Sprache von benutzerübermittelt Inhalten zu erkennen und sie entsprechend zu formatieren.

In unserem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel enthält das [Hintergrundskript](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/background-script.js) die folgenden Zeilen:

```js
let title = browser.i18n.getMessage("notificationTitle");
let content = browser.i18n.getMessage("notificationContent", message.url);
```

Die erste Zeile ruft einfach das `notificationTitle message` Feld aus der für die aktuelle Browsersprache am besten geeigneten `messages.json` Datei ab. Die zweite Zeile ist ähnlich, aber es wird eine URL als zweiter Parameter übergeben. Was bedeutet das? So geben Sie den Inhalt an, der den `$URL$` Platzhalter ersetzt, den wir im `notificationContent message` Feld sehen:

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

Das `"placeholders"` Mitglied definiert alle Platzhalter und wo sie abgerufen werden. Der `"url"` Platzhalter gibt an, dass sein Inhalt von `$1` abgeleitet wird, was der erste Wert ist, der innerhalb des zweiten Parameters von `getMessage()` angegeben wird. Da der Platzhalter `"url"` genannt wird, verwenden wir `$URL$`, um ihn innerhalb des tatsächlichen Nachrichten-Strings aufzurufen (also für `"name"` würden Sie `$NAME$` verwenden, usw.) Falls Sie mehrere Platzhalter haben, können Sie sie innerhalb eines Arrays bereitstellen, das als zweiter Parameter an {{WebExtAPIRef("i18n.getMessage()")}} übergeben wird — `[a, b, c]` wird als `$1`, `$2` und `$3` in `messages.json` verfügbar sein.

Lassen Sie uns ein Beispiel durchgehen: der ursprüngliche `notificationContent` Nachrichten-String in der `en/messages.json` Datei ist

```plain
You clicked $URL$.
```

Angenommen, der angeklickte Link verweist auf `https://developer.mozilla.org`. Nach dem {{WebExtAPIRef("i18n.getMessage()")}} Aufruf wird der Inhalt des zweiten Parameters in `messages.json` als `$1` verfügbar gemacht, was den `$URL$` Platzhalter ersetzt, wie im `"url"` Platzhalter definiert. Der endgültige Nachrichten-String lautet

```plain
You clicked https://developer.mozilla.org.
```

### Direkte Verwendung von Platzhaltern

Es ist möglich, Ihre Variablen (`$1`, `$2`, `$3`, usw.) direkt in die Nachrichten-Strings einzufügen, zum Beispiel könnten wir das oben erwähnte `"notificationContent"` Mitglied so umschreiben:

```json
"notificationContent": {
  "message": "You clicked $1.",
  "description": "Tells the user which link they clicked."
}
```

Dies mag schneller und weniger komplex erscheinen, aber die andere Methode (Verwendung von `"placeholders"`) wird als Best Practice angesehen. Dies liegt daran, dass der Platzhaltername (z.B. `"url"`) und das Beispiel Ihnen helfen, sich zu merken, wofür der Platzhalter gedacht ist — eine Woche nachdem Sie Ihren Code geschrieben haben, werden Sie wahrscheinlich vergessen, wofür `$1` – `$8` stehen, aber Sie werden eher wissen, worauf sich Ihre Platzhalternamen beziehen.

### Hardcodierte Substitution

Es ist auch möglich, hartcodierte Strings in Platzhaltern einzuschließen, so dass derselbe Wert jedes Mal verwendet wird, anstatt den Wert aus einer Variablen in Ihrem Code zu holen. Zum Beispiel:

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

In diesem Fall kodieren wir den Platzhalterinhalt einfach hart, anstatt ihn aus einem Variablenwert wie `$1` zu beziehen. Dies kann manchmal nützlich sein, wenn Ihre Nachrichtendatei sehr komplex ist und Sie verschiedene Werte aufteilen möchten, um die Strings in der Datei lesbarer zu machen, außerdem könnten diese Werte programmgesteuert zugänglich gemacht werden.

Darüber hinaus können Sie solche Substitutionen verwenden, um Teile des Strings anzugeben, die Sie nicht übersetzen möchten, wie z.B. Personen- oder Firmennamen.

## Lokalisierte String-Auswahl

Sprachversionen können mithilfe eines Sprachcodes angegeben werden, wie z.B. `fr` oder `en`, oder mit einem Skript- und Regionscode qualifiziert werden, wie `en-US` oder `zh-Hans-CN`. Wenn Ihre Erweiterung das i18n-System um einen String bittet, wählt es einen String mit diesem Algorithmus aus:

1. Geben Sie den String zurück, wenn es eine `messages.json` Datei für die vom Benutzer eingestellte Browsersprache gibt, die den String enthält. Zum Beispiel, wenn der Benutzer seinen Browser auf `en-US` eingestellt hat und die Erweiterung die `_locales/en_US/messages.json` Datei bereitstellt.
2. Andernfalls, wenn die Browsersprache mit einem Skript oder einer Region qualifiziert ist (z.B. `en-US` oder `zh-Hans-CN`) und es eine `messages.json` Datei für die regions- und skriptlose Version dieser Sprachversion gibt und diese Datei den String enthält, geben Sie ihn zurück. Zum Beispiel, wenn der Benutzer seinen Browser auf `zh-Hans-CN` eingestellt hat (und es keine `_locales/zh_Hans_CN/messages.json` Datei gibt), sucht das i18n-System nach einem String in `zh-Hans`, und wenn dieser nicht verfügbar ist, `zh.`
3. Andernfalls, wenn es eine `messages.json` Datei für die in der `manifest.json` definierte `default_locale` gibt und diese den String enthält, geben Sie diesen zurück.
4. Andernfalls geben Sie einen leeren String zurück.

Nehmen Sie dieses Beispiel:

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

Angenommen, `default_locale` ist auf `fr` gesetzt.

- Wenn die Browsersprache `en-GB` ist, wird bei Aufruf von `getMessage("colorLocalized")` "colour" zurückgegeben, weil `_locales/en_GB/messages.json` die `colorLocalized` Nachricht enthält.
- Wenn die Browsersprache `en-US` ist, wird bei Aufruf von `getMessage("colorLocalized")` "color" zurückgegeben, weil es auf die Nachricht in `_locales/en/messages.json` zurückfällt.
- Wenn die Browsersprache `zh-Hans-CN` ist, wird bei Aufruf von `getMessage("colorLocalized")` "couleur" zurückgegeben, weil es keine Sprach-, Skript- oder Regionsübereinstimmung mit der Sprachversion `zh-Hans-CN` gibt.

## Vordefinierte Nachrichten

Das i18n-Modul liefert uns einige vordefinierte Nachrichten, die wir auf dieselbe Weise aufrufen können, wie wir es zuvor bei [Retrieving localized strings in manifests](#lokalisierte_strings_in_manifests_abrufen) und [Locale-dependent CSS](#sprachabhängiges_css) gesehen haben. Zum Beispiel:

```plain
__MSG_extensionName__
```

Vordefinierte Nachrichten verwenden genau dieselbe Syntax, außer dass `@@` vor dem Nachrichtenname steht, zum Beispiel

```plain
__MSG_@@ui_locale__
```

Die folgende Tabelle zeigt die verschiedenen verfügbaren vordefinierten Nachrichten:

<table>
  <thead>
    <tr>
      <th scope="col">Name der Nachricht</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>@@extension_id</code></td>
      <td>
        <p>
          Die intern generierte UUID der Erweiterung. Sie könnten diesen String verwenden, um URLs für Ressourcen innerhalb der Erweiterung zu erstellen. Auch nicht lokalisierte Erweiterungen können diese Nachricht verwenden.
        </p>
        <p>Sie können diese Nachricht nicht in einer Manifest-Datei verwenden.</p>
        <p>
          Beachten Sie außerdem, dass diese ID <em>nicht</em> die Add-on-ID ist, die von {{WebExtAPIRef("runtime.id")}} zurückgegeben wird, und dass sie mit
          dem
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
            >browser_specific_settings</a
          >
          Schlüssel in der manifest.json festgelegt werden kann. Es ist die generierte UUID, die in der URL des Add-ons erscheint. Dies bedeutet, dass Sie diesen Wert nicht als
          <code>extensionId</code> Parameter für
          {{WebExtAPIRef("runtime.sendMessage()")}} verwenden können und ihn nicht zur Überprüfung gegen die <code>id</code> Eigenschaft eines
          {{WebExtAPIRef("runtime.MessageSender")}} Objekts verwenden können.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>@@ui_locale</code></td>
      <td>
        Die aktuelle Sprache; Sie könnten diesen String verwenden, um
        sprachspezifische URLs zu konstruieren.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_dir</code></td>
      <td>
        Die Textausrichtung für die aktuelle Sprache, entweder "ltr" für
        linkshändig geschriebene Sprachen wie Englisch oder "rtl" für rechts-
        händig geschriebene Sprachen wie Arabisch.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_reversed_dir</code></td>
      <td>
        Wenn das <code>@@bidi_dir</code> "ltr" ist, dann ist dies "rtl"; ansonsten,
        ist es "ltr".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_start_edge</code></td>
      <td>
        Wenn das <code>@@bidi_dir</code> "ltr" ist, dann ist dies "left"; ansonsten,
        ist es "right".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_end_edge</code></td>
      <td>
        Wenn das <code>@@bidi_dir</code> "ltr" ist, dann ist dies "right"; ansonsten,
        ist es "left".
      </td>
    </tr>
  </tbody>
</table>

Gehen wir zurück zu unserem früheren Beispiel, es würde mehr Sinn machen, es so zu schreiben:

```css
header {
  background-image: url(../images/__MSG_@@ui_locale__/header.png);
}
```

Jetzt können wir einfach unsere lokalen spezifischen Bilder in Verzeichnissen speichern, die den verschiedenen von uns unterstützten Sprachversionen entsprechen — en, de, usw. — was viel mehr Sinn macht.

Schauen wir uns ein Beispiel für die Verwendung von `@@bidi_*` Nachrichten in einer CSS-Datei an:

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

Für linksläufige Sprachen wie Englisch würden sich die CSS-Deklarationen, die die vordefinierten Nachrichten oben verwenden, in die folgenden endgültigen Codezeilen übersetzen:

```css
direction: ltr;
padding-left: 0;
padding-right: 1.5em;
```

Für eine rechtsläufige Sprache wie Arabisch erhalten Sie:

```css
direction: rtl;
padding-right: 0;
padding-left: 1.5em;
```

## Testen Ihrer Erweiterung

Um die Lokalisierung Ihrer Erweiterung zu testen, verwenden Sie [Firefox](https://www.mozilla.org/en-US/firefox/new/) oder [Firefox Beta](https://www.mozilla.org/en-US/firefox/channel/desktop/), die Firefox-Versionen, in denen Sie Sprachpakete installieren können.

Dann, für jede Sprache, die in der Erweiterung unterstützt wird, die Sie testen möchten, folgen Sie den Anweisungen, um [Use Firefox in another language](https://support.mozilla.org/en-US/kb/use-firefox-another-language) zu nutzen, um die Sprache der Firefox-UI zu wechseln. (Wenn Sie sich in den Einstellungen auskennen, verwenden Sie unter Sprache die Option Alternativen festlegen.)

Wenn Firefox in Ihrer Testsprache läuft, installieren oder laden Sie die Erweiterung über `about:debugging` erneut, wenn sie bereits installiert ist. Nach der Installation oder dem erneuten Laden Ihrer Erweiterung, wenn Sie Ihre Erweiterung richtig eingerichtet haben, wird sie mit ihrem Symbol, Namen und ihrer Beschreibung in der gewählten Sprache aufgelistet. Sie können auch die lokalisierten Erweiterungsdetails in `about:addons` sehen. Testen Sie nun die Funktionen der Erweiterung, um sicherzustellen, dass die Übersetzungen vorhanden sind.

Wenn Sie diesen Prozess ausprobieren möchten, können Sie die [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Erweiterung verwenden. Richten Sie Firefox so ein, dass eine der in diesem Beispiel unterstützten Sprachen (Deutsch, Niederländisch oder Japanisch) angezeigt wird. Laden Sie die Erweiterung und gehen Sie auf eine Website. Klicken Sie auf einen Link, um die übersetzte Version der Benachrichtigung zu sehen, die die URL des Links meldet.
