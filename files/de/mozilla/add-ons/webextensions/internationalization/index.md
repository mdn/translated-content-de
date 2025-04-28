---
title: Internationalisierung
slug: Mozilla/Add-ons/WebExtensions/Internationalization
l10n:
  sourceCommit: 7c0cd9f9b667fe9be0887e8902d09f0013290930
---

{{AddonSidebar}}

Die [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) API verfügt über ein nützliches Modul zur Internationalisierung von Erweiterungen — [i18n](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n). In diesem Artikel werden wir die Funktionen erkunden und ein praktisches Beispiel zeigen, wie es funktioniert. Das i18n-System für Erweiterungen, die mit WebExtension APIs erstellt wurden, ist ähnlich wie gängige JavaScript-Bibliotheken für i18n, wie z.B. [i18n.js](http://i18njs.com/).

> [!NOTE]
> Die in diesem Artikel vorgestellte Beispielerweiterung — [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) — ist auf GitHub verfügbar. Folgen Sie dem Quellcode, während Sie die untenstehenden Abschnitte durchgehen.

## Anatomie einer internationalisierten Erweiterung

Eine internationalisierte Erweiterung kann dieselben Funktionen enthalten wie jede andere Erweiterung — [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts), [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts), usw. — aber sie hat auch einige zusätzliche Teile, um zwischen verschiedenen Lokalitäten wechseln zu können. Diese werden im folgenden Verzeichnisbaum zusammengefasst:

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

    - lokalabhängige Metadaten

  - myJavascript.js

    - JavaScript zum Abrufen der Browser-Lokale, lokalspezifischer Nachrichten, etc.

  - myStyles.css

    - lokalabhängige CSS

Lassen Sie uns jede der neuen Funktionen der Reihe nach erkunden — jeder der folgenden Abschnitte stellt einen Schritt dar, den Sie beim Internationalisieren Ihrer Erweiterung befolgen sollten.

## Bereitstellen lokalisierter Strings in \_locales

> [!NOTE]
> Sie können Sprachuntercodes mit dem _Find_ Tool auf der [Language subtag lookup page](https://r12a.github.io/app-subtags/) nachschlagen. Beachten Sie, dass Sie nach dem englischen Namen der Sprache suchen müssen.

Jedes i18n-System erfordert die Bereitstellung von Strings, die in alle verschiedenen Lokalitäten, die Sie unterstützen möchten, übersetzt sind. In Erweiterungen sind diese in einem Verzeichnis namens `_locales` enthalten, das sich im Stammverzeichnis der Erweiterung befindet. Jede einzelne Locale hat ihre Strings (als Nachrichten bezeichnet), die in einer Datei namens `messages.json` enthalten sind, die sich in einem Unterverzeichnis von `_locales` befindet, das mit dem Sprachuntercode für die Sprache dieser Locale benannt ist.

Bitte beachten Sie, dass, wenn der Untercode aus einer grundlegenden Sprache plus einer regionalen Variante besteht, Sprache und Variante konventionell durch einen Bindestrich getrennt werden: zum Beispiel "en-US". Unter den Verzeichnissen in `_locales` **muss der Trenner jedoch ein Unterstrich sein**: "en_US".

So haben wir [zum Beispiel in unserer Beispiel-App](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n/_locales) Verzeichnisse für "en" (Englisch), "de" (Deutsch), "nl" (Niederländisch) und "ja" (Japanisch). Jedes dieser Verzeichnisse hat eine `messages.json` Datei darin.

Werfen wir nun einen Blick auf die Struktur einer dieser Dateien ([\_locales/en/messages.json](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/_locales/en/messages.json)):

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

Diese Datei ist standardmäßiges JSON — jedes ihrer Mitglieder ist ein Objekt mit einem Namen, das eine `message` und eine `description` enthält. Alle diese Elemente sind Strings; `$URL$` ist ein Platzhalter, der durch einen Teilstring ersetzt wird, wenn das `notificationContent`-Mitglied von der Erweiterung aufgerufen wird. Sie erfahren, wie das im Abschnitt [Abrufen von Nachrichtenstrings aus JavaScript](#abrufen_von_nachrichtenstrings_aus_javascript) funktioniert.

> [!NOTE]
> Sie können viel mehr Informationen über den Inhalt von `messages.json` Dateien in unserem [verzeichnis-spezifische Nachrichtenreferenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference) finden.

## Internationalisieren von manifest.json

Es gibt ein paar verschiedene Aufgaben, die Sie durchführen sollten, um Ihre manifest.json zu internationalisieren.

### Abrufen lokalisierter Strings in Manifests

Ihre [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/manifest.json) enthält Strings, die dem Benutzer angezeigt werden, wie z.B. den Namen und die Beschreibung der Erweiterung. Wenn Sie diese Strings internationalisieren und die entsprechenden Übersetzungen davon in messages.json setzen, wird dem Benutzer die richtige Übersetzung des Strings basierend auf der aktuellen Locale angezeigt, wie folgt.

Um Strings zu internationalisieren, spezifizieren Sie sie so:

```json
"name": "__MSG_extensionName__",
"description": "__MSG_extensionDescription__",
```

Hierbei rufen wir nachrichtenabhängige Strings ab, abhängig von der Locale des Browsers anstatt nur statische Strings einzufügen.

Um einen Nachrichtenstring so aufzurufen, müssen Sie ihn so angeben:

1. Zwei Unterstriche, gefolgt von
2. Dem String "MSG", gefolgt von
3. Einem Unterstrich, gefolgt von
4. Dem Namen der Nachricht, die Sie aufrufen möchten, wie in `messages.json` definiert, gefolgt von
5. Zwei Unterstriche

```plain
__MSG_ + messageName + __
```

### Spezifikation einer Standardlocale

Ein weiteres Feld, das Sie in Ihrer manifest.json spezifizieren sollten, ist [default_locale](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale):

```json
"default_locale": "en"
```

Dies spezifiziert eine Standardlocale, die verwendet wird, wenn die Erweiterung keinen lokalisierten String für die aktuelle Locale des Browsers enthält. Alle Nachrichtenstrings, die nicht in der Browser-Locale verfügbar sind, werden stattdessen aus der Standardlocale bezogen. Es gibt einige weitere Details, die in Bezug darauf, wie der Browser Strings auswählt, zu beachten sind — siehe [Lokalisierte String-Auswahl](#lokalisierte_string-auswahl).

## Lokalspezifische CSS

Beachten Sie, dass Sie auch lokalisierte Strings aus CSS-Dateien in der Erweiterung abrufen können. Zum Beispiel möchten Sie möglicherweise eine lokalspezifische CSS-Regel wie diese erstellen:

```css
header {
  background-image: url(../images/__MSG_extensionName__/header.png);
}
```

Dies ist nützlich, obwohl Sie in einer solchen Situation besser mit [vordefinierten Nachrichten](#vordefinierte_nachrichten) umgehen.

## Abrufen von Nachrichtenstrings aus JavaScript

Also, Sie haben Ihre Nachrichtenstrings eingerichtet und Ihr Manifest. Jetzt müssen Sie nur noch beginnen, Ihre Nachrichtenstrings aus JavaScript aufzurufen, sodass Ihre Erweiterung möglichst die richtige Sprache verwendet. Die tatsächliche [i18n API](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n) ist ziemlich einfach und enthält nur vier Hauptmethoden:

- Sie werden vermutlich {{WebExtAPIRef("i18n.getMessage()")}} am häufigsten verwenden — dies ist die Methode, die Sie zur Abrufung eines spezifischen Sprachstrings verwenden, wie oben erwähnt. Beispiele für die spezifische Nutzung werden unten gezeigt.
- Die Methoden {{WebExtAPIRef("i18n.getAcceptLanguages()")}} und {{WebExtAPIRef("i18n.getUILanguage()")}} können verwendet werden, wenn Sie die Benutzeroberfläche je nach Locale anpassen möchten — möglicherweise möchten Sie Präferenzen, die spezifisch für die bevorzugten Sprachen der Benutzer sind, weiter oben in einer Präferenzliste anzeigen oder kulturelle Informationen anzeigen, die nur für eine bestimmte Sprache relevant sind, oder angezeigte Daten gemäß der Browser-Local formatieren.
- Die Methode {{WebExtAPIRef("i18n.detectLanguage()")}} könnte verwendet werden, um die Sprache von benutzerübermitteltem Inhalt zu erkennen und sie entsprechend zu formatieren.

In unserem Beispiel [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) enthält das [Hintergrundskript](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/background-script.js) die folgenden Zeilen:

```js
let title = browser.i18n.getMessage("notificationTitle");
let content = browser.i18n.getMessage("notificationContent", message.url);
```

Die erste Zeile ruft einfach das `notificationTitle message` Feld aus der verfügbaren `messages.json` Datei ab, die am besten zur aktuellen Locale des Browsers passt. Die zweite ist ähnlich, aber es wird eine URL als zweiter Parameter übergeben. Was steckt dahinter? So geben Sie den Inhalt an, um den `$URL$` Platzhalter zu ersetzen, den wir im `notificationContent message` Feld sehen:

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

Das `"placeholders"`-Mitglied definiert alle Platzhalter, und woher sie abgerufen werden. Der `"url"` Platzhalter spezifiziert, dass sein Inhalt von `$1` abgerufen wird, das der erste Wert innerhalb des zweiten Parameters von `getMessage()` ist. Da der Platzhalter `"url"` genannt wird, verwenden wir `$URL$`, um ihn innerhalb des eigentlichen Nachrichtenstrings aufzurufen (für `"name"` würden Sie `$NAME$` verwenden, usw.). Wenn Sie mehrere Platzhalter haben, können Sie sie in einem Array angeben, das als zweiter Parameter an {{WebExtAPIRef("i18n.getMessage()")}} übergeben wird — `[a, b, c]` werden als `$1`, `$2` und `$3` verfügbar sein, und so weiter, innerhalb von `messages.json`.

Lassen Sie uns ein Beispiel durchgehen: der ursprüngliche `notificationContent` Nachrichtenstring in der `en/messages.json` Datei ist

```plain
You clicked $URL$.
```

Angenommen, der angeklickte Link zeigt auf `https://developer.mozilla.org`. Nach dem Aufruf von {{WebExtAPIRef("i18n.getMessage()")}}, werden die Inhalte des zweiten Parameters in messages.json als `$1` verfügbar gemacht, das den `$URL$`-Platzhalter ersetzt, wie im `"url"` Platzhalter definiert. Der endgültige Nachrichtenstring ist dann

```plain
You clicked https://developer.mozilla.org.
```

### Direkte Platzhalterverwendung

Es ist möglich, Ihre Variablen (`$1`, `$2`, `$3`, usw.) direkt in den Nachrichtenstrings einzufügen, zum Beispiel könnten wir das oben aufgeführte `"notificationContent"`-Mitglied so umschreiben:

```json
"notificationContent": {
  "message": "You clicked $1.",
  "description": "Tells the user which link they clicked."
}
```

Dies mag schneller und weniger komplex erscheinen, aber die andere Methode (die Verwendung von `"placeholders"`) wird als Best Practice angesehen. Der Grund dafür ist, dass der Platzhaltername (z.B. `"url"`) und das Beispiel Ihnen helfen, sich zu merken, wofür der Platzhalter gedacht ist — eine Woche nachdem Sie Ihren Code geschrieben haben, werden Sie wahrscheinlich vergessen haben, worum es sich bei `$1` – `$8$ handelt, aber Sie werden eher wissen, auf was sich Ihre Platzhalternamen beziehen.

### Harte Kodierung von Ersetzungen

Es ist auch möglich, in Platzhaltern fest kodierte Strings zu verwenden, so dass jedes Mal derselbe Wert verwendet wird, anstatt den Wert von einer Variable in Ihrem Code zu erhalten. Zum Beispiel:

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

In diesem Fall kodieren wir den Platzhalterinhalt einfach fest, anstatt ihn von einem Variablenwert wie `$1` abzurufen. Dies kann manchmal nützlich sein, wenn Ihre Nachrichten-Datei sehr komplex ist, und Sie möchten, dass verschiedene Werte aufgeteilt werden, um die Strings in der Datei lesbarer zu machen, außerdem könnten diese Werte dann programmatisch abgerufen werden.

Darüber hinaus können Sie solche Ersetzungen verwenden, um Teile des Strings zu spezifizieren, die nicht übersetzt werden sollen, wie Personen- oder Firmennamen.

## Lokalisierte String-Auswahl

Locales können unter Verwendung eines Sprachcodes wie `fr` oder `en` oder mit einem Skript- und Region-Code wie `en-US` oder `zh-Hans-CN` angegeben werden. Wenn Ihre Erweiterung das i18n-System nach einem String fragt, wählt es einen String mithilfe dieses Algorithmus aus:

1. Gibt den String zurück, wenn es eine `messages.json` Datei für die Locale des Browsers des Benutzers gibt, die den String enthält. Zum Beispiel, wenn der Benutzer seinen Browser auf `en-US` eingestellt hat und die Erweiterung die `_locales/en_US/messages.json` Datei bereitstellt.
2. Andernfalls, wenn die Browser-Local mit einem Script oder einer Region qualifiziert ist (z.B. `en-US` oder `zh-Hans-CN`) und es eine `messages.json`-Datei für die regionenlose Version und ohne das Skript dieser Locale gibt und diese Datei den String enthält, dann geben Sie ihn zurück. Zum Beispiel, wenn der Benutzer seinen Browser auf `zh-Hans-CN` eingestellt hat (und es keine `_locales/zh_Hans_CN/messages.json` Datei gibt), sucht das i18n-System nach einem String in `zh-Hans`, und wenn das nicht verfügbar ist, in `zh.`
3. Falls dies nicht der Fall ist, ob es eine `messages.json` Datei für die `default_locale` gibt, die in `manifest.json` definiert ist, und sie den String enthält, dann geben Sie ihn zurück.
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

Angenommen, die `default_locale` ist auf `fr` gesetzt.

- Wenn die Browser-Local `en-GB` ist, wenn die Erweiterung `getMessage("colorLocalized")` aufruft, wird "colour" zurückgegeben, weil `_locales/en_GB/messages.json` die `colorLocalized`-Nachricht enthält.
- Wenn die Browser-Local `en-US` ist, wenn die Erweiterung `getMessage("colorLocalized")` aufruft, wird "color" zurückgegeben, weil sie auf die Nachricht in `_locales/en/messages.json` zurückgreift.
- Wenn die Browser-Local `zh-Hans-CN` ist, wenn die Erweiterung `getMessage("colorLocalized")` aufruft, wird "couleur" zurückgegeben, da es keine Sprache, kein Skript oder keine regionale Übereinstimmung mit der `zh-Hans-CN`-Locale gibt.

## Vordefinierte Nachrichten

Das i18n-Modul bietet uns einige vordefinierte Nachrichten, die wir auf die gleiche Weise aufrufen können wie wir es zuvor in [Abrufen lokalisierter Strings in Manifesten](#abrufen_lokalisierter_strings_in_manifests) und [Durch Locale beeinflusste CSS](#lokalspezifische_css) gesehen haben. Zum Beispiel:

```plain
__MSG_extensionName__
```

Vordefinierte Nachrichten verwenden genau die gleiche Syntax, außer mit `@@` vor dem Nachrichtennamen, zum Beispiel

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
          Die intern generierte UUID der Erweiterung. Sie könnten diesen String verwenden,
          um URLs für Ressourcen innerhalb der Erweiterung zu konstruieren. Auch nicht lokalisierte
          Erweiterungen können diese Nachricht verwenden.
        </p>
        <p>Sie können diese Nachricht nicht in einer Manifestdatei verwenden.</p>
        <p>
          Beachten Sie auch, dass diese ID <em>nicht</em> die Add-on-ID ist, die durch
          {{WebExtAPIRef("runtime.id")}} zurückgegeben wird, und dass kann durch
          den
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
            >browser_specific_settings</a
          >
          Schlüssel in manifest.json festgelegt werden. Es ist die generierte UUID, die im
          URL des Add-ons erscheint. Das bedeutet, dass Sie diesen Wert nicht als
          <code>extensionId</code> Parameter verwenden können für
          {{WebExtAPIRef("runtime.sendMessage()")}}, und Sie können
          ihn nicht verwenden, um ihn gegen die <code>id</code> Eigenschaft eines
          {{WebExtAPIRef("runtime.MessageSender")}} Objekts zu prüfen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>@@ui_locale</code></td>
      <td>
        Die aktuelle Lokalisierung; Sie könnten diesen String verwenden, um
        lokalspezifische URLs zu konstruieren.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_dir</code></td>
      <td>
        Die Textrichtung für die aktuelle Lokalisierung, entweder "ltr" für
        von links nach rechts gerichtete Sprachen wie Englisch oder "rtl" für von rechts nach links
        gerichtete Sprachen wie Arabisch.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_reversed_dir</code></td>
      <td>
        Wenn das <code>@@bidi_dir</code> "ltr" ist, dann ist es "rtl"; ansonsten
        ist es "ltr".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_start_edge</code></td>
      <td>
        Wenn das <code>@@bidi_dir</code> "ltr" ist, dann ist es "left"; ansonsten
        ist es "right".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_end_edge</code></td>
      <td>
        Wenn das <code>@@bidi_dir</code> "ltr" ist, dann ist es "right";
        ansonsten ist es "left".
      </td>
    </tr>
  </tbody>
</table>

Zurück zu unserem früheren Beispiel wäre es sinnvoller, es so zu schreiben:

```css
header {
  background-image: url(../images/__MSG_@@ui_locale__/header.png);
}
```

Nun können wir unsere lokalspezifischen Bilder einfach in Verzeichnissen speichern, die den verschiedenen unterstützten Lokalitäten entsprechen — en, de, etc. — was viel mehr Sinn macht.

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

Für von links nach rechts gerichtete Sprachen wie Englisch, würden die CSS-Erklärungen, die die oben genannten vordefinierten Nachrichten verwenden, zu den folgenden endgültigen Codezeilen übersetzt:

```css
direction: ltr;
padding-left: 0;
padding-right: 1.5em;
```

Für eine von rechts nach links gerichtete Sprache wie Arabisch, würden Sie erhalten:

```css
direction: rtl;
padding-right: 0;
padding-left: 1.5em;
```

## Testen Ihrer Erweiterung

Um die Lokalisierung Ihrer Erweiterung zu testen, verwenden Sie [Firefox](https://www.mozilla.org/en-US/firefox/new/) oder [Firefox Beta](https://www.mozilla.org/en-US/firefox/channel/desktop/), die Firefox-Builds, in denen Sie Sprachpakete installieren können.

Dann, für jede in der Erweiterung unterstützte Locale, die Sie testen möchten, folgen Sie den Anweisungen zur [Verwendung von Firefox in einer anderen Sprache](https://support.mozilla.org/en-US/kb/use-firefox-another-language), um die Firefox-UI-Sprache zu wechseln. (Wenn Sie sich in den Einstellungen auskennen, verwenden Sie unter Sprache die Option Alternativen festlegen.)

Wenn Firefox in Ihrer Testsprache ausgeführt wird, installieren Sie von `about:debugging` aus die Erweiterung vorübergehend oder laden Sie sie neu, wenn sie bereits installiert ist. Nach der Installation oder dem Neuladen Ihrer Erweiterung, wenn Sie Ihre Erweiterung korrekt eingerichtet haben, sehen Sie die Erweiterung mit ihrem Symbol, ihrem Namen und ihrer Beschreibung in der gewählten Sprache aufgelistet. Sie können auch die lokalisierten Erweiterungsdetails unter `about:addons` sehen. Üben Sie die Funktionen der Erweiterung aus, um sicherzustellen, dass die Übersetzungen vorhanden sind.

Wenn Sie diesen Prozess ausprobieren möchten, können Sie die [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Erweiterung verwenden. Richten Sie Firefox so ein, dass eine der in diesem Beispiel unterstützten Sprachen (Deutsch, Niederländisch oder Japanisch) angezeigt wird. Laden Sie die Erweiterung und gehen Sie auf eine Website. Klicken Sie auf einen Link, um die übersetzte Version der Benachrichtigung zu sehen, die die URL des Links angibt.
