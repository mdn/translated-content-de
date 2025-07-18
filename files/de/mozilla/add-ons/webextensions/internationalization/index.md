---
title: Internationalisierung
slug: Mozilla/Add-ons/WebExtensions/Internationalization
l10n:
  sourceCommit: 03d5115691a7a9fa3df3b6ebd20a0c7eed213252
---

Die [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) API bietet ein recht praktisches Modul zur Internationalisierung von Erweiterungen an — [i18n](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n). In diesem Artikel werden wir seine Funktionen erkunden und ein praktisches Beispiel dafür geben, wie es funktioniert.

> [!NOTE]
> Die Beispielerweiterung, die in diesem Artikel vorgestellt wird — [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) — ist auf GitHub verfügbar. Folgen Sie dem Quellcode, während Sie die untenstehenden Abschnitte durchgehen.

## Aufbau einer internationalisierten Erweiterung

Eine internationalisierte Erweiterung kann dieselben Funktionen wie jede andere Erweiterung enthalten — [background scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts), [content scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) usw. — aber sie hat auch einige zusätzliche Teile, die es ermöglichen, zwischen verschiedenen Sprachen zu wechseln. Diese sind in folgendem Verzeichnisbaum zusammengefasst:

- Erweiterung-Hauptverzeichnis/
  - \_locales
    - en
      - messages.json
        - Englische Nachrichten (Strings)

    - de
      - messages.json
        - Deutsche Nachrichten (Strings)

    - usw.

  - manifest.json
    - regionsabhängige Metadaten

  - myJavascript.js
    - JavaScript zum Abrufen der Browsersprache, regionsspezifische Nachrichten usw.

  - myStyles.css
    - regionsabhängige CSS

Lassen Sie uns nun jede dieser neuen Funktionen im Einzelnen erkunden – jeder der untenstehenden Abschnitte stellt einen Schritt dar, dem Sie folgen sollten, wenn Sie Ihre Erweiterung internationalisieren.

## Bereitstellung lokalisierter Strings in \_locales

> [!NOTE]
> Sie können Sprachuntertags mit dem _Find_ Tool auf der [Language subtag lookup page](https://r12a.github.io/app-subtags/) nachschlagen. Beachten Sie, dass Sie nach dem englischen Namen der Sprache suchen müssen.

Jedes i18n-System erfordert die Bereitstellung von Strings, die in alle verschiedenen Sprachen übersetzt sind, die Sie unterstützen möchten. In Erweiterungen sind sie in einem Verzeichnis namens `_locales` enthalten, das sich im Stammverzeichnis der Erweiterung befindet. Jede einzelne Sprache hat ihre Strings (als Nachrichten bezeichnet) in einer Datei namens `messages.json`, die in einem Unterverzeichnis von `_locales` platziert ist, das nach dem Sprachuntertag dieser Sprache benannt ist.

Beachten Sie, dass wenn der Untertag eine grundlegende Sprache plus eine regionale Variante enthält, die Sprache und die Variante konventionell mit einem Bindestrich getrennt werden: zum Beispiel, "en-US". In den Verzeichnissen unter `_locales` **muss der Separator jedoch ein Unterstrich sein**: "en_US".

So [zum Beispiel, in unserer Beispielanwendung](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n/_locales) haben wir Verzeichnisse für "en" (Englisch), "de" (Deutsch), "nl" (Niederländisch) und "ja" (Japanisch). Jedes davon hat eine `messages.json` Datei darin.

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

Diese Datei ist ein standardmäßiges JSON — jedes ihrer Mitglieder ist ein Objekt mit einem Namen, der ein `message` und eine `description` enthält. Alle diese Elemente sind Strings; `$URL$` ist ein Platzhalter, der durch einen Unterstring ersetzt wird, wenn das `notificationContent` Mitglied von der Erweiterung aufgerufen wird. Sie erfahren, wie Sie dies im Abschnitt [Abrufen von Nachrichten-Strings aus JavaScript](#abrufen_von_nachrichten-strings_aus_javascript) tun.

> [!NOTE]
> Sie können viele weitere Informationen über den Inhalt von `messages.json` Dateien in unserem [Loale-spezifische Nachricht Reference](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference) finden.

## Internationalisierung von manifest.json

Es gibt einige verschiedene Aufgaben, die erledigt werden müssen, um Ihre manifest.json zu internationalisieren.

### Abrufen lokalisierter Strings in Manifests

Ihre [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/manifest.json) enthält Strings, die dem Benutzer angezeigt werden, wie z.B. den Namen und die Beschreibung der Erweiterung. Wenn Sie diese Strings internationalisieren und die entsprechenden Übersetzungen davon in messages.json unterbringen, wird die korrekte Übersetzung des Strings dem Benutzer, basierend auf der aktuellen Sprache, angezeigt.

Um Strings zu internationalisieren, geben Sie sie folgendermaßen an:

```json
"name": "__MSG_extensionName__",
"description": "__MSG_extensionDescription__",
```

Hierbei rufen wir Nachrichten-Strings ab, die von der Sprache des Browsers abhängig sind, anstatt nur statische Strings einzufügen.

Um einen Nachrichten-String auf diese Weise aufzurufen, müssen Sie ihn so angeben:

1. Zwei Unterstriche, gefolgt von
2. Dem String "MSG", gefolgt von
3. Einem Unterstrich, gefolgt von
4. Dem Namen der Nachricht, die Sie aus `messages.json` aufrufen möchten, gefolgt von
5. Zwei Unterstrichen

```plain
__MSG_ + messageName + __
```

### Festlegung einer Standard-Sprache

Ein weiteres Feld, das Sie in Ihrer manifest.json festlegen sollten, ist [default_locale](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale):

```json
"default_locale": "en"
```

Dies legt eine Standardsprache fest, die verwendet wird, wenn die Erweiterung keinen lokalisierten String für die aktuelle Sprache des Browsers enthält. Alle Nachrichten-Strings, die in der Sprache des Browsers nicht verfügbar sind, werden stattdessen aus der Standardsprache genommen. Es gibt einige weitere Details, die hinsichtlich der Auswahl von Strings durch den Browser zu beachten sind — siehe [Auswahl lokalisierter Strings](#auswahl_lokalisierten_strings).

## Sprachabhängige CSS

Beachten Sie, dass Sie auch lokalisierte Strings aus CSS-Dateien in der Erweiterung abrufen können. Beispielsweise möchten Sie möglicherweise eine sprachabhängige CSS-Regel konstruieren, wie diese:

```css
header {
  background-image: url(../images/__MSG_extensionName__/header.png);
}
```

Dies ist nützlich, obwohl Sie möglicherweise eine solche Situation besser mit [Vordefinierte Nachrichten](#vordefinierte_nachrichten) behandeln.

## Abrufen von Nachrichten-Strings aus JavaScript

Sie haben also Ihre Nachrichten-Strings eingerichtet und Ihr Manifest. Jetzt müssen Sie nur noch beginnen, Ihre Nachrichten-Strings aus JavaScript abzurufen, damit Ihre Erweiterung so weit wie möglich die richtige Sprache sprechen kann. Die eigentliche [i18n API](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n) ist ziemlich einfach, da sie nur vier Hauptmethoden enthält:

- Sie werden wahrscheinlich {{WebExtAPIRef("i18n.getMessage()")}} am häufigsten verwenden — dies ist die Methode, mit der Sie einen spezifischen Sprachstring abrufen, wie oben erwähnt. Wir werden spezifische Anwendungsbeispiele dafür weiter unten sehen.
- Die {{WebExtAPIRef("i18n.getAcceptLanguages()")}} und {{WebExtAPIRef("i18n.getUILanguage()")}} Methoden könnten verwendet werden, wenn Sie die Benutzeroberfläche je nach Sprache anpassen müssen — vielleicht möchten Sie Einstellungen, die spezifisch für die bevorzugten Sprachen des Benutzers sind, weiter oben in einer Liste anzeigen, oder kulturelle Informationen darstellen, die nur für eine bestimmte Sprache relevant sind, oder angezeigte Daten gemäß der Sprache des Browsers angemessen formatieren.
- Die {{WebExtAPIRef("i18n.detectLanguage()")}} Methode könnte verwendet werden, um die Sprache von benutzereingereichten Inhalten zu erkennen und diese entsprechend zu formatieren.

In unserem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel enthält das [Background-Skript](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/background-script.js) die folgenden Zeilen:

```js
let title = browser.i18n.getMessage("notificationTitle");
let content = browser.i18n.getMessage("notificationContent", message.url);
```

Die erste Zeile ruft einfach das `notificationTitle` Nachrichtenfeld aus der verfügbaren `messages.json`-Datei ab, die am besten zur aktuellen Sprache des Browsers passt. Die zweite Zeile ist ähnlich, erhält aber eine URL als zweiten Parameter. Was hat es damit auf sich? So geben Sie den Inhalt an, der den `$URL$` Platzhalter ersetzt, den wir im `notificationContent` Nachrichtenfeld sehen:

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

Das `"placeholders"`-Mitglied definiert alle Platzhalter und wo sie abgerufen werden. Der `"url"`-Platzhalter gibt an, dass sein Inhalt von `$1` genommen wird, was der erste angegeben Wert im zweiten Parameter von `getMessage()` ist. Da der Platzhalter `"url"` genannt wird, verwenden wir `$URL$`, um ihn im tatsächlichen Nachrichten-String aufzurufen (also für `"name"` würden Sie `$NAME$` verwenden etc.). Wenn Sie mehrere Platzhalter haben, können Sie diese in einem Array angeben, das als zweiter Parameter an {{WebExtAPIRef("i18n.getMessage()")}} übergeben wird — `[a, b, c]` wird als `$1`, `$2` und `$3` in `messages.json` verfügbar gemacht.

Lassen Sie uns ein Beispiel durchgehen: der ursprüngliche `notificationContent` Nachrichten-String in der `en/messages.json` Datei ist:

```plain
You clicked $URL$.
```

Angenommen, der angeklickte Link zeigt auf `https://developer.mozilla.org`. Nach dem {{WebExtAPIRef("i18n.getMessage()")}} Aufruf werden die Inhalte des zweiten Parameters in `messages.json` als `$1` verfügbar gemacht, das den `$URL$`-Platzhalter gemäß dem `"url"`-Platzhalter ersetzt. Also ist der endgültige Nachrichten-String:

```plain
You clicked https://developer.mozilla.org.
```

### Direkte Verwendung von Platzhaltern

Es ist möglich, Ihre Variablen (`$1`, `$2`, `$3` usw.) direkt in die Nachrichten-Strings einzufügen. Beispielsweise könnten wir das oben genannte `"notificationContent"` Mitglied so umschreiben:

```json
"notificationContent": {
  "message": "You clicked $1.",
  "description": "Tells the user which link they clicked."
}
```

Dies mag schneller und weniger komplex erscheinen, aber die andere Methode (Verwendung von `"placeholders"`) wird als Best Practice betrachtet. Dies liegt daran, dass das Platzhalternamen (z. B. `"url"`) und Beispiel Ihnen hilft zu erinnern, wofür der Platzhalter steht — eine Woche nach dem Schreiben Ihres Codes werden Sie wahrscheinlich vergessen, wofür `$1` – `$8` stehen, aber Sie werden eher wissen, wofür Ihre Platzhalternamen stehen.

### Harte Codierung von Substitutionen

Es ist auch möglich, festcodierte Strings in Platzhalter einzufügen, sodass derselbe Wert jedes Mal verwendet wird, anstatt den Wert aus einer Variablen in Ihrem Code zu erhalten. Zum Beispiel:

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

In diesem Fall sind wir einfach fest verankern des Platzhalterinhalts, anstatt ihn aus einem Variablenwert wie `$1` zu holen. Dies kann manchmal nützlich sein, wenn Ihre Nachrichtendatei sehr komplex ist und Sie verschiedene Werte aufteilen möchten, um die Strings in der Datei leichter lesbar zu machen. Darüber hinaus können diese Werte programmgesteuert abgerufen werden.

Darüber hinaus können Sie solche Substitutionen verwenden, um Teile des Strings zu spezifizieren, die nicht übersetzt werden sollen, wie z.B. Personen- oder Firmennamen.

## Auswahl lokalisierten Strings

Sprachen können mit einem Sprachcode angegeben werden, wie z.B. `fr` oder `en` oder qualifiziert mit einem Skript- und Regionscode, wie `en-US` oder `zh-Hans-CN`. Wenn Ihre Erweiterung das i18n-System nach einem String fragt, wählt es einen String mit diesem Algorithmus aus:

1. Den String zurückgeben, wenn es eine `messages.json`-Datei für die benutzerdefinierte Browsersprache gibt, die den String enthält. Zum Beispiel, wenn der Benutzer seinen Browser auf `en-US` eingestellt hat und die Erweiterung die `_locales/en_US/messages.json`-Datei bereitstellt.
2. Andernfalls, wenn die Browsersprache mit einem Skript oder einer Region qualifiziert ist (z.B. `en-US` oder `zh-Hans-CN`) und es eine `messages.json`-Datei für die regionale Version und im nächsten Schritt die skriptlose Version dieser Sprache gibt und diese Datei den String enthält, geben Sie ihn zurück. Zum Beispiel, wenn der Benutzer seinen Browser auf `zh-Hans-CN` gesetzt hat (und es keine `_locales/zh_Hans_CN/messages.json`-Datei gibt) sucht das i18n-System nach einem String in `zh-Hans`, und wenn das nicht verfügbar ist, `zh`.
3. Andernfalls, wenn es eine `messages.json`-Datei für die `default_locale` in `manifest.json` definiert gibt und sie den String enthält, geben Sie ihn zurück.
4. Andernfalls geben Sie einen leeren String zurück.

Nehmen Sie dieses Beispiel:

- Erweiterung-Hauptverzeichnis/
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

Angenommen, die `default_locale` ist auf `fr` gesetzt.

- Wenn die Browsersprache `en-GB` ist, wenn die Erweiterung `getMessage("colorLocalized")` aufruft, wird "colour" zurückgegeben, weil `_locales/en_GB/messages.json` die `colorLocalized`-Nachricht enthält.
- Wenn die Browsersprache `en-US` ist, wenn die Erweiterung `getMessage("colorLocalized")` aufruft, wird "color" zurückgegeben, weil sie auf die Nachricht in `_locales/en/messages.json` zurückfällt.
- Wenn die Browsersprache `zh-Hans-CN` ist, wenn die Erweiterung `getMessage("colorLocalized")` aufruft, wird "couleur" zurückgegeben, weil es keine Sprache, kein Skript oder keine Regionsübereinstimmung für die `zh-Hans-CN`-Sprache gibt.

## Vordefinierte Nachrichten

Das i18n-Modul bietet uns einige vordefinierte Nachrichten, die wir auf die gleiche Weise aufrufen können, wie wir es zuvor in [Abrufen lokalisierter Strings in Manifests](#abrufen_lokalisierter_strings_in_manifests) und [Sprachabhängige CSS](#sprachabhängige_css) gesehen haben. Zum Beispiel:

```plain
__MSG_extensionName__
```

Vordefinierte Nachrichten verwenden genau die gleiche Syntax, außer mit `@@` vor dem Nachrichtennamen, zum Beispiel

```plain
__MSG_@@ui_locale__
```

In der folgenden Tabelle sind die verschiedenen verfügbaren vordefinierten Nachrichten aufgeführt:

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
          erstellen. Auch nicht lokalisierte
          Erweiterungen können diese Nachricht verwenden.
        </p>
        <p>Sie können diese Nachricht nicht in einer Manifest-Datei verwenden.</p>
        <p>
          Beachten Sie auch, dass diese ID <em>nicht</em> die Add-on-ID ist, die von
          {{WebExtAPIRef("runtime.id")}} zurückgegeben wird und die
          mithilfe des <a href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"> browser_specific_settings</a> Schlüssels in manifest.json festgelegt werden kann. Es ist die generierte UUID, die in der
          URL des Add-ons erscheint. Das bedeutet, dass Sie diesen Wert nicht als
          <code>extensionId</code>-Parameter für {{WebExtAPIRef("runtime.sendMessage()")}} verwenden können, und nicht verwenden können, um mit der <code>id</code>-Eigenschaft eines {{WebExtAPIRef("runtime.MessageSender")}}-Objekts zu prüfen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>@@ui_locale</code></td>
      <td>
        Die aktuelle Sprache; möglicherweise verwenden Sie diesen String, um
        sprachspezifische URLs zu erstellen.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_dir</code></td>
      <td>
        Die Textausrichtung für die aktuelle Sprache, entweder "ltr" für
        links-nach-rechts-Sprachen wie Englisch oder "rtl" für rechts-nach-links
        Sprachen wie Arabisch.
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
        Wenn das <code>@@bidi_dir</code> "ltr" ist, dann ist dies "right";
        ansonsten, ist es "left".
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

Jetzt können wir einfach unsere sprachspezifischen Bilder in Verzeichnissen speichern, die den verschiedenen von uns unterstützten Sprachen entsprechen — en, de, usw. — was viel mehr Sinn ergibt.

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

Für von links nach rechts Sprachen wie Englisch würden die CSS-Erklärungen, die die vordefinierten Nachrichten oben betreffen, die folgenden endgültigen Codezeilen übersetzen:

```css
direction: ltr;
padding-left: 0;
padding-right: 1.5em;
```

Für eine von rechts nach links Sprache wie Arabisch, würden Sie erhalten:

```css
direction: rtl;
padding-right: 0;
padding-left: 1.5em;
```

## Testen Ihrer Erweiterung

Um die Lokalisierung Ihrer Erweiterung zu testen, verwenden Sie [Firefox](https://www.mozilla.org/en-US/firefox/new/) oder [Firefox Beta](https://www.mozilla.org/en-US/firefox/channel/desktop/), die Firefox-Versionen, in denen Sie Sprachpakete installieren können.

Dann, für jede Sprache, die in der Erweiterung unterstützt wird, die Sie testen möchten, folgen Sie den Anweisungen unter [Verwenden Sie Firefox in einer anderen Sprache](https://support.mozilla.org/en-US/kb/use-firefox-another-language), um die Sprache der Benutzeroberfläche von Firefox zu ändern. (Wenn Sie sich in den Einstellungen auskennen, verwenden Sie unter Sprache die Option Alternativen festlegen.)

Wenn Firefox in Ihrer Testsprache ausgeführt wird, installieren Sie von `about:debugging` aus die Erweiterung [temporär](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) oder laden Sie sie neu, falls bereits installiert. Nach dem Installieren oder Neuladen Ihrer Erweiterung, wenn Sie Ihre Erweiterung richtig eingerichtet haben, sehen Sie die Erweiterung mit ihrem Symbol, Namen und ihrer Beschreibung in der gewählten Sprache. Sie können auch die lokalisierten Erweiterungsdetails in `about:addons` sehen. Üben Sie nun die Funktionen der Erweiterung, um sicherzustellen, dass die Übersetzungen vorhanden sind.

Wenn Sie diesen Vorgang ausprobieren möchten, können Sie die [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Erweiterung verwenden. Richten Sie Firefox so ein, dass er eine der in diesem Beispiel unterstützten Sprachen (Deutsch, Niederländisch oder Japanisch) anzeigt. Laden Sie die Erweiterung und gehen Sie zu einer Website. Klicken Sie auf einen Link, um die übersetzte Version der Benachrichtigung anzuzeigen, die die URL des Links meldet.
