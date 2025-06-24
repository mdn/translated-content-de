---
title: Internationalisierung
slug: Mozilla/Add-ons/WebExtensions/Internationalization
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Die [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions)-API bietet ein nützliches Modul zur Internationalisierung von Erweiterungen — [i18n](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n). In diesem Artikel werden wir seine Funktionen erkunden und ein praktisches Beispiel geben, wie es funktioniert. Das i18n-System für Erweiterungen, die mit WebExtension-APIs gebaut wurden, ähnelt gängigen JavaScript-Bibliotheken für i18n, wie [i18n.js](http://i18njs.com/).

> [!NOTE]
> Die Beispielerweiterung, die in diesem Artikel vorgestellt wird — [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) — ist auf GitHub verfügbar. Folgen Sie dem Quellcode, während Sie die untenstehenden Abschnitte durchgehen.

## Anatomie einer internationalisierten Erweiterung

Eine internationalisierte Erweiterung kann die gleichen Funktionen wie jede andere Erweiterung enthalten — [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts), [Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) usw. — aber sie hat auch einige zusätzliche Teile, die es ihr ermöglichen, zwischen verschiedenen Sprachversionen zu wechseln. Diese sind im folgenden Verzeichnisbaum zusammengefasst:

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

    - sprachabhängige Metadaten

  - myJavascript.js

    - JavaScript zur Abfrage der Browser-Sprachversion, sprachspezifische Nachrichten usw.

  - myStyles.css
    - sprachabhängiges CSS

Lassen Sie uns nun jeden der neuen Funktionen im Einzelnen erkunden — jeder der unten stehenden Abschnitte repräsentiert einen Schritt, dem Sie folgen müssen, wenn Sie Ihre Erweiterung internationalisieren.

## Bereitstellung lokalisierter Strings in \_locales

> [!NOTE]
> Sie können Sprachuntertags mit dem _Find_ Werkzeug auf der [Language subtag lookup page](https://r12a.github.io/app-subtags/) nachschlagen. Beachten Sie, dass Sie nach dem englischen Namen der Sprache suchen müssen.

Jedes i18n-System erfordert die Bereitstellung von Strings, die in alle verschiedenen Sprachversionen übersetzt sind, die Sie unterstützen möchten. In Erweiterungen sind diese in einem Verzeichnis namens `_locales` enthalten, das sich im Stammverzeichnis der Erweiterung befindet. Jede einzelne Sprachversion hat ihre Strings (in Form von Nachrichten) in einer Datei namens `messages.json`, die sich innerhalb eines Unterverzeichnisses von `_locales` befindet, das mit dem Sprachuntertag für die Sprache dieser Sprachversion benannt ist.

Beachten Sie, dass, wenn der Untertag eine Grundsprache plus eine regionale Variante enthält, dann Sprache und Variante konventionell durch einen Bindestrich getrennt werden: zum Beispiel "en-US". In den Verzeichnissen unter `_locales` **muss der Trennstrich jedoch ein Unterstrich sein**: "en_US".

So haben wir [zum Beispiel in unserer Beispielapplikation](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n/_locales) Verzeichnisse für "en" (Englisch), "de" (Deutsch), "nl" (Niederländisch) und "ja" (Japanisch). Jedes dieser Verzeichnisse enthält eine `messages.json`-Datei.

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

Diese Datei ist Standard-JSON — jedes ihrer Mitglieder ist ein Objekt mit einem Namen, das eine `message` und eine `description` enthält. Alle diese Elemente sind Strings; `$URL$` ist ein Platzhalter, der durch einen Teilstring ersetzt wird, wenn das `notificationContent`-Mitglied von der Erweiterung aufgerufen wird. Sie erfahren, wie das geht, im Abschnitt [Nachrichten-Strings aus JavaScript abrufen](#abrufen_von_nachrichten-strings_aus_javascript).

> [!NOTE]
> Sie finden viele weitere Informationen über den Inhalt von `messages.json`-Dateien in unserer [Lokalisierungs-Nachricht Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference).

## Internationalisierung von manifest.json

Es gibt ein paar verschiedene Aufgaben, die durchgeführt werden müssen, um Ihr manifest.json zu internationalisieren.

### Abrufen lokalisierter Strings in Manifests

Ihre [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/manifest.json) enthält Strings, die dem Benutzer angezeigt werden, wie der Name und die Beschreibung der Erweiterung. Wenn Sie diese Strings internationalisieren und die entsprechenden Übersetzungen in messages.json einfügen, wird dem Benutzer die korrekte Übersetzung des Strings basierend auf der aktuellen Sprachversion angezeigt, wie folgt.

Um Strings zu internationalisieren, geben Sie sie wie folgt an:

```json
"name": "__MSG_extensionName__",
"description": "__MSG_extensionDescription__",
```

Hier rufen wir Nachrichten-Strings ab, die von der Sprachversion des Browsers abhängen, anstatt einfach statische Strings einzufügen.

Um einen Nachrichten-String so zu rufen, müssen Sie es so angeben:

1. Zwei Unterstriche, gefolgt von
2. dem String "MSG", gefolgt von
3. einem Unterstrich, gefolgt von
4. dem Namen der Nachricht, die Sie aufrufen möchten, wie in `messages.json` definiert, gefolgt von
5. zwei Unterstrichen

```plain
__MSG_ + messageName + __
```

### Festlegen einer Standard-Sprachversion

Ein weiteres Feld, das Sie in Ihrer manifest.json festlegen sollten, ist [default_locale](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale):

```json
"default_locale": "en"
```

Dies legt eine Standard-Sprachversion fest, falls die Erweiterung keinen lokalisierten String für die aktuelle Sprachversion des Browsers enthält. Nachrichten-Strings, die in der Browser-Sprachversion nicht verfügbar sind, werden stattdessen aus der Standard-Sprachversion genommen. Es gibt einige weitere Details, die Sie beachten sollten, wie der Browser Strings auswählt – siehe [Lokalisierte Stringauswahl](#lokalisierte_stringauswahl).

## Sprachabhängiges CSS

Beachten Sie, dass Sie auch lokalisierte Strings aus CSS-Dateien in der Erweiterung abrufen können. Beispielsweise möchten Sie vielleicht eine sprachabhängige CSS-Regel erstellen, wie diese:

```css
header {
  background-image: url(../images/__MSG_extensionName__/header.png);
}
```

Dies ist nützlich, obwohl Sie eine solche Situation möglicherweise besser mit [Vordefinierten Nachrichten](#vordefinierte_nachrichten) handhaben.

## Abrufen von Nachrichten-Strings aus JavaScript

Nun haben Sie Ihre Nachrichten-Strings eingerichtet und Ihr Manifest. Jetzt müssen Sie nur noch Ihre Nachrichten-Strings aus JavaScript aufrufen, damit Ihre Erweiterung so weit wie möglich in der richtigen Sprache kommuniziert. Die tatsächliche [i18n-API](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n) ist ziemlich einfach und enthält nur vier Hauptmethoden:

- Am häufigsten verwenden Sie vermutlich {{WebExtAPIRef("i18n.getMessage()")}} — dies ist die Methode, mit der Sie einen bestimmten Sprachstring abrufen, wie oben erwähnt. Wir werden spezifische Anwendungsbeispiele weiter unten sehen.
- Die Methoden {{WebExtAPIRef("i18n.getAcceptLanguages()")}} und {{WebExtAPIRef("i18n.getUILanguage()")}} könnten verwendet werden, wenn Sie die Benutzeroberfläche je nach Sprachversion anpassen müssen — vielleicht möchten Sie bevorzugte Sprachen der Benutzer in einer Auswahlliste höher anzeigen, kulturelle Informationen anzeigen, die nur für eine bestimmte Sprache relevant sind, oder angezeigte Daten passend zur Browser-Sprachversion formatieren.
- Die Methode {{WebExtAPIRef("i18n.detectLanguage()")}} könnte verwendet werden, um die Sprache von benutzerübermittelten Inhalten zu erkennen und entsprechend zu formatieren.

In unserem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n)-Beispiel enthält das [Hintergrundskript](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/background-script.js) die folgenden Zeilen:

```js
let title = browser.i18n.getMessage("notificationTitle");
let content = browser.i18n.getMessage("notificationContent", message.url);
```

Die erste Zeile ruft einfach das `notificationTitle`-Feld aus der verfügbaren `messages.json`-Datei ab, die am besten zur aktuellen Sprachversion des Browsers passt. Die zweite Zeile ist ähnlich, bekommt aber eine URL als zweiten Parameter übergeben. Was hat es damit auf sich? So geben Sie den Inhalt an, der den `$URL$`-Platzhalter ersetzt, den wir im `notificationContent`-Feld sehen:

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

Das `"placeholders"`-Mitglied definiert alle Platzhalter und woher sie abgerufen werden. Der `"url"`-Platzhalter gibt an, dass sein Inhalt von `$1` genommen wird, was der erste Wert ist, der als zweiter Parameter von `getMessage()` übergeben wird. Da der Platzhalter `"url"` genannt wird, verwenden wir `$URL$`, um ihn innerhalb des tatsächlichen Nachrichten-Strings anzurufen (also bei `"name"` würden Sie `$NAME$` verwenden usw.). Wenn Sie mehrere Platzhalter haben, können Sie sie innerhalb eines Arrays bereitstellen, das als zweiter Parameter an {{WebExtAPIRef("i18n.getMessage()")}} übergeben wird — `[a, b, c]` wird als `$1`, `$2` und `$3` verfügbar sein und so weiter in `messages.json`.

Schauen wir uns ein Beispiel an: der ursprüngliche `notificationContent`-Nachrichten-String in der Datei `en/messages.json` ist

```plain
You clicked $URL$.
```

Nehmen wir an, der angeklickte Link verweist auf `https://developer.mozilla.org`. Nachdem der Aufruf von {{WebExtAPIRef("i18n.getMessage()")}} erfolgt ist, sind die Inhalte des zweiten Parameters in messages.json als `$1` verfügbar, welcher den `$URL$`-Platzhalter ersetzt, wie im `"url"`-Platzhalter definiert. Der endgültige Nachrichten-String lautet dann

```plain
You clicked https://developer.mozilla.org.
```

### Direkte Platzhalterverwendung

Es ist möglich, Ihre Variablen (`$1`, `$2`, `$3` usw.) direkt in die Nachrichten-Strings einzufügen, z. B. könnten wir das obige `"notificationContent"`-Mitglied wie folgt umschreiben:

```json
"notificationContent": {
  "message": "You clicked $1.",
  "description": "Tells the user which link they clicked."
}
```

Dies mag schneller und weniger komplex erscheinen, aber die andere Möglichkeit (Verwendung von `"placeholders"`) wird als beste Praxis angesehen. Der Grund dafür ist, dass der Platzhaltername (z. B. `"url"`) und ein Beispiel Ihnen dabei helfen, sich zu merken, wofür der Platzhalter steht — eine Woche nachdem Sie Ihren Code geschrieben haben, haben Sie wahrscheinlich vergessen, worauf sich `$1` – `$8` beziehen, werden sich jedoch eher an die Bedeutung Ihrer Platzhalternamen erinnern.

### Harte Kodierung von Ersetzungen

Es ist auch möglich, hartcodierte Strings in Platzhaltern aufzunehmen, sodass derselbe Wert jedes Mal verwendet wird, anstatt den Wert von einer Variablen in Ihrem Code zu beziehen. Zum Beispiel:

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

In diesem Fall kodieren wir einfach den Platzhalterinhalt, anstatt ihn von einem Variablenwert wie `$1` zu erhalten. Dies kann manchmal nützlich sein, wenn Ihre Nachrichten-Datei sehr komplex ist und Sie die verschiedenen Werte aufteilen möchten, um die Strings im Datei lesbarer zu machen, außerdem könnten diese Werte dann programmgesteuert abgerufen werden.

Darüber hinaus können Sie solche Ersetzungen verwenden, um Teile des Strings anzugeben, die nicht übersetzt werden sollen, wie z.B. Personen- oder Firmennamen.

## Lokalisierte Stringauswahl

Sprachversionen können mit einem Sprachcode angegeben werden, wie `fr` oder `en`, oder mit einem Skript- und Regionscode, wie `en-US` oder `zh-Hans-CN`, qualifiziert werden. Wenn Ihre Erweiterung das i18n-System nach einem String fragt, wählt es einen String mit diesem Algorithmus:

1. Geben Sie den String zurück, wenn es eine `messages.json`-Datei für die im Browser eingestellte Sprachversion des Benutzers gibt, die den String enthält. Zum Beispiel, wenn der Benutzer seinen Browser auf `en-US` eingestellt hat und die Erweiterung die Datei `_locales/en_US/messages.json` bereitstellt.
2. Andernfalls, wenn die Browser-Sprachversion mit einem Skript oder einer Region qualifiziert ist (z. B. `en-US` oder `zh-Hans-CN`) und es eine `messages.json`-Datei für die regionenlose Version und scheitert daran die skriptlose Version dieser Sprachversion gibt und diese Datei den String enthält, geben Sie ihn zurück. Zum Beispiel, wenn der Benutzer seinen Browser auf `zh-Hans-CN` eingestellt hat (und es keine Datei `_locales/zh_Hans_CN/messages.json` gibt) sucht das i18n-System nach einem String in `zh-Hans`, und wenn dieser nicht verfügbar ist, `zh`.
3. Andernfalls, wenn es eine `messages.json`-Datei für die `default_locale`` in der `manifest.json` definiert ist und diese den String enthält, geben Sie ihn zurück.
4. Andernfalls geben Sie einen leeren String zurück.

Nehmen wir dieses Beispiel:

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

Angenommen die `default_locale` ist auf `fr` gesetzt.

- Wenn die Sprachversion des Browsers `en-GB` ist, wenn die Erweiterung `getMessage("colorLocalized")` aufruft, wird "colour" zurückgegeben, da `_locales/en_GB/messages.json` die `colorLocalized`-Nachricht enthält.
- Wenn die Sprachversion des Browsers `en-US` ist, wenn die Erweiterung `getMessage("colorLocalized")` aufruft, wird "color" zurückgegeben, weil auf die in `_locales/en/messages.json` enthaltene Nachricht zurückgegriffen wird.
- Wenn die Sprachversion des Browsers `zh-Hans-CN` ist, wenn die Erweiterung `getMessage("colorLocalized")` aufruft, wird "couleur" zurückgegeben, weil es keine Sprach-, Skript- oder Regionsübereinstimmung mit der `zh-Hans-CN` Sprachversion gibt.

## Vordefinierte Nachrichten

Das i18n-Modul bietet uns einige vordefinierte Nachrichten, die wir auf die gleiche Weise aufrufen können wie wir es früher bei [Abrufen lokalisierter Strings in Manifests](#abrufen_lokalisierter_strings_in_manifests) und [Sprachabhängiges CSS](#sprachabhängiges_css) gesehen haben. Zum Beispiel:

```plain
__MSG_extensionName__
```

Vordefinierte Nachrichten verwenden genau die gleiche Syntax, außer dass `@@` vor dem Nachrichtenamen steht, zum Beispiel

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
          verwenden, um URLs für Ressourcen innerhalb der Erweiterung zu konstruieren. Selbst unlokalisierte
          Erweiterungen können diese Nachricht verwenden.
        </p>
        <p>Sie können diese Nachricht nicht in einer Manifest-Datei verwenden.</p>
        <p>
          Beachten Sie auch, dass diese ID <em>nicht</em> die Add-On-ID ist, die durch
          {{WebExtAPIRef("runtime.id")}} zurückgegeben wird, und die durch
          den
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
            >browser_specific_settings</a
          >
          Schlüssel in der manifest.json gesetzt werden kann. Es ist die generierte
          UUID, die in der URL des Add-Ons erscheint. Das bedeutet, dass Sie diesen Wert nicht als
          <code>extensionId</code>-Parameter für
          {{WebExtAPIRef("runtime.sendMessage()")}} verwenden können und
          ihn nicht mit der <code>id</code>-Eigenschaft eines
          {{WebExtAPIRef("runtime.MessageSender")}}-Objekts vergleichen können.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>@@ui_locale</code></td>
      <td>
        Die aktuelle Sprachversion; Sie könnten diesen String verwenden, um
        sprachabhängige URLs zu konstruieren.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_dir</code></td>
      <td>
        Die Textrichtung für die aktuelle Sprachversion, entweder "ltr" für
        von links nach rechts lesbare Sprachen wie Englisch oder "rtl" für
        von rechts nach links lesbare Sprachen wie Arabisch.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_reversed_dir</code></td>
      <td>
        Wenn das <code>@@bidi_dir</code> "ltr" ist, dann ist es "rtl"; andernfalls
        ist es "ltr".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_start_edge</code></td>
      <td>
        Wenn das <code>@@bidi_dir</code> "ltr" ist, dann ist es "links"; andernfalls
        ist es "rechts".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_end_edge</code></td>
      <td>
        Wenn das <code>@@bidi_dir</code> "ltr" ist, dann ist es "rechts";
        andernfalls ist es "links".
      </td>
    </tr>
  </tbody>
</table>

Zurück zu unserem vorherigen Beispiel, es würde mehr Sinn machen, es so zu schreiben:

```css
header {
  background-image: url(../images/__MSG_@@ui_locale__/header.png);
}
```

Nun können wir unsere lokalen spezifischen Bilder einfach in Verzeichnissen speichern, die mit den verschiedenen Sprachversionen übereinstimmen, die wir unterstützen — en, de, usw. — was viel mehr Sinn ergibt.

Schauen wir uns ein Beispiel zur Verwendung von `@@bidi_*`-Nachrichten in einer CSS-Datei an:

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

Für von links nach rechts lesbare Sprachen wie Englisch würden die CSS-Deklarationen, die die vordefinierten Nachrichten beinhalten, sich in die folgenden endgültigen Codezeilen übersetzen:

```css
direction: ltr;
padding-left: 0;
padding-right: 1.5em;
```

Für eine von rechts nach links lesbare Sprache wie Arabisch, würden Sie erhalten:

```css
direction: rtl;
padding-right: 0;
padding-left: 1.5em;
```

## Testen Ihrer Erweiterung

Um die Lokalisierung Ihrer Erweiterung zu testen, verwenden Sie [Firefox](https://www.mozilla.org/en-US/firefox/new/) oder [Firefox Beta](https://www.mozilla.org/en-US/firefox/channel/desktop/), die Firefox-Versionen, in denen Sie Sprachpakete installieren können.

Dann befolgen Sie für jede Sprachversion, die in der Erweiterung unterstützt wird, die Anweisungen, um [Firefox in einer anderen Sprache nutzen](https://support.mozilla.org/en-US/kb/use-firefox-another-language), um die Firefox-Benutzeroberflächensprache zu wechseln. (Wenn Sie sich in den Einstellungen auskennen, verwenden Sie unter "Sprache" die Option "Alternativen festlegen".)

Wenn Firefox in Ihrer Testsprache ausgeführt wird, installieren oder laden Sie die Erweiterung von `about:debugging` [vorübergehend erneut](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) oder laden Sie sie neu, falls sie bereits installiert ist. Nach der Installation oder dem Neuladen Ihrer Erweiterung, wenn Sie Ihre Erweiterung korrekt eingerichtet haben, sehen Sie die Erweiterung mit ihrem Symbol, Namen und der Beschreibung in der gewählten Sprache aufgelistet. Sie können auch die lokalisierten Erweiterungsdetails in `about:addons` sehen. Testen Sie jetzt die Funktionen der Erweiterung, um sicherzustellen, dass die Übersetzungen vorhanden sind.

Wenn Sie diesen Prozess ausprobieren möchten, können Sie die [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Erweiterung verwenden. Richten Sie Firefox so ein, dass eine der in diesem Beispiel unterstützten Sprachen (Deutsch, Niederländisch oder Japanisch) angezeigt wird. Laden Sie die Erweiterung und gehen Sie zu einer Website. Klicken Sie auf einen Link, um die übersetzte Version der Benachrichtigung zu sehen, die die URL des Links meldet.
