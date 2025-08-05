---
title: Internationalisierung
slug: Mozilla/Add-ons/WebExtensions/Internationalization
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Die [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) API bietet ein sehr praktisches Modul zur Internationalisierung von Erweiterungen — [i18n](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n). In diesem Artikel werden wir die Funktionen erkunden und ein praktisches Beispiel dafür geben, wie es funktioniert.

> [!NOTE]
> Die im Artikel vorgestellte Beispielerweiterung — [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) — ist auf GitHub verfügbar. Folgen Sie dem Quellcode, während Sie die unten stehenden Abschnitte durchgehen.

## Aufbau einer internationalisierten Erweiterung

Eine internationalisierte Erweiterung kann dieselben Funktionen wie jede andere Erweiterung enthalten — [background scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts), [content scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) usw. — sie hat aber auch zusätzliche Komponenten, um den Wechsel zwischen verschiedenen locales zu ermöglichen. Diese werden in der folgenden Verzeichnisstruktur zusammengefasst:

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
    - localiabhängige Metadaten

  - myJavascript.js
    - JavaScript zum Abrufen der Browser-Locale, localiabhängige Nachrichten usw.

  - myStyles.css
    - localiabhängige CSS

Lassen Sie uns jede der neuen Funktionen nacheinander erkunden — jeder der folgenden Abschnitte stellt einen Schritt dar, den Sie befolgen sollten, wenn Sie Ihre Erweiterung internationalisieren.

## Bereitstellung lokalisierter Strings in \_locales

> [!NOTE]
> Sie können Sprach-Subtags mit dem _Find_-Tool auf der [Language subtag lookup page](https://r12a.github.io/app-subtags/) nachschlagen. Beachten Sie, dass Sie nach dem englischen Namen der Sprache suchen müssen.

Jedes i18n-System erfordert die Bereitstellung von Strings, die in alle verschiedenen locales übersetzt werden sollen, die Sie unterstützen möchten. In Erweiterungen sind diese in einem Verzeichnis namens `_locales` enthalten, das sich im Root-Verzeichnis der Erweiterung befindet. Jede einzelne locale hat ihre Strings (als Nachrichten bezeichnet) in einer Datei namens `messages.json`, die sich in einem Unterverzeichnis von `_locales` befindet, das mit dem Sprach-Subtag der jeweiligen locale benannt ist.

Beachten Sie, dass wenn der Subtag eine Grundsprache plus eine regionale Variante enthält, die Sprache und die Variante konventionell mit einem Bindestrich getrennt werden: zum Beispiel "en-US". In den Verzeichnissen unter `_locales` **muss der Separator jedoch ein Unterstrich sein**: "en_US".

So haben wir [zum Beispiel in unserer Beispiel-App](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n/_locales) Verzeichnisse für "en" (Englisch), "de" (Deutsch), "nl" (Niederländisch) und "ja" (Japanisch). Jedes dieser Verzeichnisse enthält eine `messages.json` Datei.

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

Diese Datei ist standardmäßiges JSON — jedes ihrer Mitglieder ist ein Objekt mit einem Namen, das eine `message` und eine `description` enthält. Alle diese Elemente sind Strings; `$URL$` ist ein Platzhalter, der durch einen Substring ersetzt wird, wenn das `notificationContent`-Mitglied von der Erweiterung aufgerufen wird. Wie Sie dies tun können, erfahren Sie im Abschnitt [Nachrichten-Strings aus JavaScript abrufen](#nachrichten-strings_aus_javascript_abrufen).

> [!NOTE]
> Sie können viel mehr Informationen über den Inhalt von `messages.json` Dateien in unserem [Locale-Specific Message reference](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference) finden.

## Internationalisierung von manifest.json

Es gibt ein paar verschiedene Aufgaben, die Sie ausführen müssen, um Ihre manifest.json zu internationalisieren.

### Abrufen lokalisierter Strings in Manifesten

Ihre [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/manifest.json) enthält Strings, die dem Benutzer angezeigt werden, wie zum Beispiel den Namen und die Beschreibung der Erweiterung. Wenn Sie diese Strings internationalisieren und die passenden Übersetzungen davon in messages.json einfügen, wird dem Benutzer die korrekte Übersetzung des Strings basierend auf dem aktuellen Locale angezeigt, so:

Um Strings zu internationalisieren, geben Sie sie folgendermaßen an:

```json
"name": "__MSG_extensionName__",
"description": "__MSG_extensionDescription__",
```

Hier rufen wir Nachrichten-Strings ab, die von der Locale des Browsers abhängen, anstatt nur statische Strings einzuschließen.

Um einen Nachrichten-String so aufzurufen, müssen Sie ihn folgendermaßen angeben:

1. Zwei Unterstriche, gefolgt von
2. Dem String "MSG", gefolgt von
3. Einem Unterstrich, gefolgt von
4. Dem Namen der Nachricht, die Sie aufrufen möchten, wie sie in `messages.json` definiert ist, gefolgt von
5. Zwei Unterstrichen

```plain
__MSG_ + messageName + __
```

### Festlegen eines Standard-Locale

Ein weiteres Feld, das Sie in Ihrer manifest.json angeben sollten, ist [default_locale](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale):

```json
"default_locale": "en"
```

Dies legt ein Standard-Locale fest, das verwendet wird, wenn die Erweiterung keinen lokalisierten String für das aktuelle Locale des Browsers enthält. Alle Nachrichten-Strings, die im Browser-Locale nicht vorhanden sind, werden stattdessen aus dem Standard-Locale übernommen. Weitere Details dazu, wie der Browser Strings auswählt, finden Sie unter [Localized string selection](#auswahl_lokalisierter_strings).

## Locale-abhängige CSS

Beachten Sie, dass Sie auch lokalisierte Strings aus CSS-Dateien in der Erweiterung abrufen können. Beispielsweise möchten Sie möglicherweise eine Locale-abhängige CSS-Regel konstruieren, wie folgt:

```css
header {
  background-image: url("../images/__MSG_extensionName__/header.png");
}
```

Dies ist nützlich, obwohl Sie eine solche Situation möglicherweise besser mit [vordefinierten Nachrichten](#vordefinierte_nachrichten) behandeln.

## Nachrichten-Strings aus JavaScript abrufen

Sie haben Ihre Nachrichten-Strings eingerichtet und Ihr Manifest. Jetzt müssen Sie nur noch damit beginnen, Ihre Nachrichten-Strings aus JavaScript aufzurufen, damit Ihre Erweiterung möglichst viele Sprachen unterstützen kann. Die eigentliche [i18n API](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n) ist ziemlich einfach und enthält nur vier Hauptmethoden:

- Sie werden wahrscheinlich {{WebExtAPIRef("i18n.getMessage()")}} am häufigsten verwenden — dies ist die Methode, mit der Sie einen bestimmten Sprach-String abrufen, wie oben erwähnt. Wir werden unten spezifische Anwendungsbeispiele sehen.
- Die Methoden {{WebExtAPIRef("i18n.getAcceptLanguages()")}} und {{WebExtAPIRef("i18n.getUILanguage()")}} könnten verwendet werden, wenn Sie die Benutzeroberfläche je nach Locale anpassen müssen — vielleicht möchten Sie Präferenzen spezifischer Sprachen der Benutzer höher in einer Präferenzliste anzeigen oder kulturelle Informationen anzeigen, die nur für eine bestimmte Sprache relevant sind, oder angezeigte Daten entsprechend dem Browser-Locale formatieren.
- Die Methode {{WebExtAPIRef("i18n.detectLanguage()")}} könnte verwendet werden, um die Sprache von benutzerübermittelten Inhalten zu erkennen und entsprechend zu formatieren.

In unserem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel enthält das [Background-Skript](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/background-script.js) die folgenden Zeilen:

```js
let title = browser.i18n.getMessage("notificationTitle");
let content = browser.i18n.getMessage("notificationContent", message.url);
```

Die erste Zeile ruft einfach das `notificationTitle` Nachrichtenfeld aus der verfügbaren `messages.json` Datei ab, die am besten für das aktuelle Locale des Browsers geeignet ist. Die zweite Zeile ist ähnlich, es wird jedoch eine URL als zweiter Parameter übergeben. Was steckt dahinter? Auf diese Weise geben Sie den Inhalt an, der den `$URL$` Platzhalter ersetzt, den wir im `notificationContent` Nachrichtenfeld sehen:

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

Das `"placeholders"` Mitglied definiert alle Platzhalter und wo sie abgerufen werden. Der `"url"` Platzhalter gibt an, dass sein Inhalt von `$1` stammt, was der erste Wert ist, der im zweiten Parameter von `getMessage()` übergeben wird. Da der Platzhalter `"url"` genannt wird, verwenden wir `$URL$`, um ihn im eigentlichen Nachrichten-String aufzurufen (also für `"name"` würden Sie `$NAME$` verwenden usw.). Wenn Sie mehrere Platzhalter haben, können Sie diese innerhalb eines Arrays angeben, das {{WebExtAPIRef("i18n.getMessage()")}} als zweiter Parameter übergeben wird — `[a, b, c]` wird als `$1`, `$2` und `$3` verfügbar sein, und so weiter, in `messages.json`.

Lassen Sie uns ein Beispiel durchgehen: der ursprüngliche `notificationContent` Nachrichten-String in der `en/messages.json` Datei lautet

```plain
You clicked $URL$.
```

Angenommen, der geklickte Link verweist auf `https://developer.mozilla.org`. Nach dem {{WebExtAPIRef("i18n.getMessage()")}} Aufruf sind die Inhalte des zweiten Parameters in messages.json als `$1` verfügbar, die den `$URL$` Platzhalter ersetzen, wie im `"url"` Platzhalter definiert. Der endgültige Nachrichten-String lautet also

```plain
You clicked https://developer.mozilla.org.
```

### Direkte Nutzung von Platzhaltern

Es ist möglich, Variablen (`$1`, `$2`, `$3` usw.) direkt in die Nachrichten-Strings einzufügen, zum Beispiel könnten wir das oben `"notificationContent"` Mitglied so umschreiben:

```json
"notificationContent": {
  "message": "You clicked $1.",
  "description": "Tells the user which link they clicked."
}
```

Dies scheint schneller und weniger komplex zu sein, aber die andere Methode (unter Verwendung von `"placeholders"`) wird als Best Practice angesehen. Denn durch den Platzhalternamen (z.B. `"url"`) und ein Beispiel können Sie sich daran erinnern, was der Platzhalter bedeutet — eine Woche nachdem Sie Ihren Code geschrieben haben, werden Sie sich wahrscheinlich nicht mehr daran erinnern, wofür `$1` – `$8` stehen, aber Sie werden eher wissen, was Ihre Platzhalternamen bedeuten.

### Hardcodierte Substitution

Es ist auch möglich, hardcodierte Strings in Platzhaltern einzuschließen, sodass derselbe Wert jedes Mal verwendet wird, anstatt den Wert aus einer Variablen in Ihrem Code zu beziehen. Zum Beispiel:

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

In diesem Fall hardcoden wir einfach den Inhalt des Platzhalters, anstatt ihn aus einem Variablenwert wie `$1` zu beziehen. Dies kann manchmal nützlich sein, wenn Ihre Nachrichten-Datei sehr komplex ist und Sie verschiedene Werte aufteilen möchten, um die Strings in der Datei lesbarer zu machen. Außerdem können diese Werte dann programmatisch abgerufen werden.

Außerdem können Sie solche Substitutionen nutzen, um Teile des Strings zu definieren, die nicht übersetzt werden sollen, wie zum Beispiel Personen- oder Firmennamen.

## Auswahl lokalisierter Strings

Locales können mit einem Sprachcode angegeben werden, wie `fr` oder `en`, oder mit einem Skript- und Regionscode qualifiziert werden, wie `en-US` oder `zh-Hans-CN`. Wenn Ihre Erweiterung das i18n-System nach einem String fragt, wählt es einen String mit folgendem Algorithmus aus:

1. Gibt den String zurück, wenn es eine `messages.json` Datei für das vom Benutzer eingestellte Browser-Locale gibt, die den String enthält. Zum Beispiel, wenn der Benutzer seinen Browser auf `en-US` eingestellt hat und die Erweiterung die `_locales/en_US/messages.json` Datei bereitstellt.
2. Andernfalls, wenn das Browser-Locale mit einem Skript oder Region qualifiziert ist (z. B. `en-US` oder `zh-Hans-CN`) und es gibt eine `messages.json` Datei für die regionslose Version und dieser Datei enthält den String, gibt es ihn zurück. Zum Beispiel, wenn der Benutzer seinen Browser auf `zh-Hans-CN` eingestellt hat (und es gibt keine `_locales/zh_Hans_CN/messages.json` Datei), sucht das i18n-System nach einem String in `zh-Hans` und, wenn er nicht verfügbar ist, `zh`.
3. Andernfalls, wenn es eine `messages.json` Datei für das `default_locale` gibt, das in der `manifest.json` definiert ist und sie den String enthält, gibt es diesen zurück.
4. Andernfalls gibt es einen leeren String zurück.

Nehmen wir dieses Beispiel:

- extension-root-directory/
  - \_locales
    - en_GB
      - messages.json
        - `{ "colorLocalized": { "message": "colour", "description": "Farbe." }, /* … */ }`

      en
      - messages.json
        - `{ "colorLocalized": { "message": "color", "description": "Farbe." }, /* … */ }`

    - fr
      - messages.json
        - `{ "colorLocalized": { "message": "couleur", "description": "Farbe." }, /* … */}`

Angenommen, das `default_locale` ist auf `fr` gesetzt.

- Wenn das Browser-Locale `en-GB` ist, wenn die Erweiterung `getMessage("colorLocalized")` aufruft, wird "colour" zurückgegeben, da `_locales/en_GB/messages.json` die `colorLocalized` Nachricht enthält.
- Wenn das Browser-Locale `en-US` ist, wenn die Erweiterung `getMessage("colorLocalized")` aufruft, wird "color" zurückgegeben, da auf die Nachricht in `_locales/en/messages.json` zurückgegriffen wird.
- Wenn das Browser-Locale `zh-Hans-CN` ist, wenn die Erweiterung `getMessage("colorLocalized")` aufruft, wird "couleur" zurückgegeben, da es keine Sprach-, Skript- oder Regionsübereinstimmung mit dem `zh-Hans-CN` Locale gibt.

## Vordefinierte Nachrichten

Das i18n-Modul stellt uns einige vordefinierte Nachrichten zur Verfügung, die wir auf die gleiche Weise aufrufen können, wie wir es zuvor bei [Abrufen lokalisierter Strings in Manifesten](#abrufen_lokalisierter_strings_in_manifesten) und [Locale-abhängiges CSS](#locale-abhängige_css) gesehen haben. Zum Beispiel:

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
          um URLs für Ressourcen innerhalb der Erweiterung zu konstruieren. Auch nicht
          lokalisierte Erweiterungen können diese Nachricht verwenden.
        </p>
        <p>Sie können diese Nachricht nicht in einer Manifestdatei verwenden.</p>
        <p>
          Beachten Sie auch, dass diese ID <em>nicht</em> die Add-On-ID ist, die von
          {{WebExtAPIRef("runtime.id")}} zurückgegeben wird, und dass sie unter Verwendung des
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
            >browser_specific_settings</a
          >
          Schlüssels in manifest.json festgelegt werden kann. Es ist die generierte UUID, die in der
          URL des Add-Ons erscheint. Das bedeutet, dass Sie diesen Wert nicht als den
          <code>extensionId</code> Parameter für
          {{WebExtAPIRef("runtime.sendMessage()")}} verwenden können und nicht mit der
          <code>id</code> Eigenschaft eines
          {{WebExtAPIRef("runtime.MessageSender")}} Objekts vergleichen können.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>@@ui_locale</code></td>
      <td>
        Das aktuelle Locale; Sie könnten diesen String verwenden, um
        lokale-spezifische URLs zu erstellen.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_dir</code></td>
      <td>
        Die Textausrichtung für das aktuelle Locale, entweder "ltr" für
        von links nach rechts verlaufende Sprachen wie Englisch oder "rtl" für
        von rechts nach links verlaufende Sprachen wie Arabisch.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_reversed_dir</code></td>
      <td>
        Wenn das <code>@@bidi_dir</code> "ltr" ist, dann ist dies "rtl"; ansonsten
        ist es "ltr".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_start_edge</code></td>
      <td>
        Wenn das <code>@@bidi_dir</code> "ltr" ist, dann ist dies "left"; ansonsten
        ist es "right".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_end_edge</code></td>
      <td>
        Wenn das <code>@@bidi_dir</code> "ltr" ist, dann ist dies "right";
        ansonsten ist es "left".
      </td>
    </tr>
  </tbody>
</table>

Zurück zu unserem früheren Beispiel, es würde mehr Sinn ergeben, es so zu schreiben:

```css
header {
  background-image: url("../images/__MSG_@@ui_locale__/header.png");
}
```

Jetzt können wir einfach unsere lokalen spezifischen Bilder in Verzeichnissen speichern, die den verschiedenen von uns unterstützten Locales entsprechen — en, de, etc. — was viel sinnvoller ist.

Schauen wir uns ein Beispiel für die Verwendung der `@@bidi_*` Nachrichten in einer CSS-Datei an:

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

Für von links nach rechts verlaufende Sprachen wie Englisch würden sich die CSS-Deklarationen, die die vordefinierten Nachrichten oben involvieren, zu den folgenden endgültigen Codezeilen übersetzen:

```css
direction: ltr;
padding-left: 0;
padding-right: 1.5em;
```

Für eine von rechts nach links verlaufende Sprache wie Arabisch, würde man erhalten:

```css
direction: rtl;
padding-right: 0;
padding-left: 1.5em;
```

## Testen Ihrer Erweiterung

Um die Lokalisierung Ihrer Erweiterung zu testen, verwenden Sie [Firefox](https://www.firefox.com/en-US/) oder [Firefox Beta](https://www.firefox.com/en-US/channel/desktop/), die Firefox-Versionen, in denen Sie Sprachpakete installieren können.

Dann folgen Sie für jedes in der Erweiterung unterstützte Locale, das Sie testen möchten, den Anweisungen zum [Verwenden von Firefox in einer anderen Sprache](https://support.mozilla.org/en-US/kb/use-firefox-another-language), um die Sprache der Firefox-Oberfläche zu wechseln. (Wenn Sie sich in Einstellungen auskennen, verwenden Sie unter Sprache "Alternativen setzen".)

Wenn Firefox in Ihrer Testsprache ausgeführt wird, installieren oder laden Sie die Erweiterung von `about:debugging` [vorübergehend](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) neu, wenn sie bereits installiert ist. Nach der Installation oder dem Neuladen Ihrer Erweiterung, wenn Sie Ihre Erweiterung korrekt eingerichtet haben, sehen Sie die Erweiterung mit ihrem Icon, Namen und Beschreibung in der gewählten Sprache. Sie können auch die lokalisierten Erweiterungsdetails in `about:addons` sehen. Testen Sie nun die Funktionen der Erweiterung, um sicherzustellen, dass die Übersetzungen vorhanden sind.

Wenn Sie diesen Vorgang ausprobieren möchten, können Sie die [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Erweiterung verwenden. Richten Sie Firefox so ein, dass eine der in diesem Beispiel unterstützten Sprachen (Deutsch, Niederländisch oder Japanisch) angezeigt wird. Laden Sie die Erweiterung und gehen Sie auf eine Website. Klicken Sie auf einen Link, um die übersetzte Version der Benachrichtigung zu sehen, die die URL des Links meldet.
