---
title: Internationalisierung
slug: Mozilla/Add-ons/WebExtensions/Internationalization
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Die [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) API bietet ein praktisches Modul zur Internationalisierung von Erweiterungen — [i18n](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n). In diesem Artikel werden wir seine Funktionen erkunden und ein praktisches Beispiel vorstellen, um zu zeigen, wie es funktioniert. Das i18n-System für Erweiterungen, die mit WebExtension-APIs erstellt wurden, ähnelt gängigen JavaScript-Bibliotheken für i18n wie [i18n.js](http://i18njs.com/).

> [!NOTE]
> Die in diesem Artikel vorgestellte Beispielerweiterung — [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) — ist auf GitHub verfügbar. Begleiten Sie das Quellcodebeispiel, während Sie die folgenden Abschnitte durchgehen.

## Anatomie einer internationalisierten Erweiterung

Eine internationalisierte Erweiterung kann dieselben Funktionen wie jede andere Erweiterung enthalten — [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts), [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) usw. — sie besitzt jedoch auch einige zusätzliche Teile, die es ermöglichen, zwischen verschiedenen Sprachversionen zu wechseln. Diese sind im folgenden Verzeichnisbaum zusammengefasst:

- Erweiterungs-Wurzelverzeichnis/

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

    - JavaScript zum Abrufen der Browser-Sprache, sprachspezifische Nachrichten, usw.

  - myStyles.css

    - sprachabhängiges CSS

Lassen Sie uns nun jede der neuen Funktionen erkunden — jeder der untenstehenden Abschnitte stellt einen Schritt dar, den Sie bei der Internationalisierung Ihrer Erweiterung befolgen sollten.

## Bereitstellung lokalisierter Strings in \_locales

> [!NOTE]
> Sie können Sprachuntertags mit dem _Find_-Tool auf der [Language subtag lookup page](https://r12a.github.io/app-subtags/) nachschlagen. Beachten Sie, dass Sie nach dem englischen Namen der Sprache suchen müssen.

Jedes i18n-System erfordert die Bereitstellung von Strings, die in alle verschiedenen Sprachversionen übersetzt werden sollen, die Sie unterstützen möchten. In Erweiterungen sind diese in einem Verzeichnis namens `_locales` enthalten, das in das Wurzelverzeichnis der Erweiterung platziert wird. Jede einzelne Sprachversion hat ihre Strings (Nachrichten genannt) in einer Datei namens `messages.json`, die sich in einem Unterverzeichnis von `_locales` befindet. Dieses Unterverzeichnis wird mit dem Sprachuntertag der Sprache der Sprachversion benannt.

Beachten Sie, dass wenn der Untertag eine Standardsprache plus eine regionale Variante umfasst, dann werden die Sprache und die Variante konventionell mit einem Bindestrich getrennt: zum Beispiel "en-US". In den Verzeichnissen unter `_locales` **muss der Trenner jedoch ein Unterstrich sein**: "en_US".

So [zum Beispiel, in unserer Beispiel-App](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n/_locales) haben wir Verzeichnisse für "en" (Englisch), "de" (Deutsch), "nl" (Niederländisch) und "ja" (Japanisch). Jedes davon hat eine `messages.json` Datei darin.

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

Diese Datei ist ein standardmäßiges JSON — jedes ihrer Mitglieder ist ein Objekt mit einem Namen, das einen `message` und eine `description` enthält. Alle diese Elemente sind Strings; `$URL$` ist ein Platzhalter, der mit einem Teilstring ersetzt wird, wenn das `notificationContent`-Mitglied von der Erweiterung aufgerufen wird. Sie lernen, wie Sie dies im Abschnitt [Abrufen von Nachrichten-Strings von JavaScript](#abrufen_von_nachrichten-strings_von_javascript) tun.

> [!NOTE]
> Sie finden viel mehr Informationen über den Inhalt von `messages.json` Dateien in unserem [Locale-Specific Message reference](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference).

## Internationalisierung von manifest.json

Es gibt ein paar verschiedene Aufgaben, die ausgeführt werden müssen, um Ihre manifest.json zu internationalisieren.

### Abrufen lokalisierter Strings in Manifests

Ihre [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/manifest.json) enthält Strings, die dem Benutzer angezeigt werden, wie zum Beispiel der Name und die Beschreibung der Erweiterung. Wenn Sie diese Strings internationalisieren und die entsprechenden Übersetzungen in `messages.json` einfügen, dann wird die korrekte Übersetzung des Strings dem Benutzer basierend auf der aktuellen Sprachversion wie folgt angezeigt.

Um Strings zu internationalisieren, geben Sie sie wie folgt an:

```json
"name": "__MSG_extensionName__",
"description": "__MSG_extensionDescription__",
```

Hier rufen wir Nachricht-Strings ab, die von der Sprache des Browsers abhängen, anstatt nur statische Strings einzufügen.

Um eine Nachricht-String wie diese aufzurufen, müssen Sie sie so spezifizieren:

1. Zwei Unterstriche, gefolgt von
2. Dem String "MSG", gefolgt von
3. Einem Unterstrich, gefolgt von
4. Dem Namen der Nachricht, die Sie wie in `messages.json` definiert, aufrufen möchten, gefolgt von
5. Zwei Unterstrichen

```plain
__MSG_ + messageName + __
```

### Festlegen einer Standardsprache

Ein weiteres Feld, das Sie in Ihrer manifest.json angeben sollten, ist [default_locale](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale):

```json
"default_locale": "en"
```

Dies legt eine Standardsprache fest, die verwendet wird, wenn die Erweiterung keinen lokalisierten String für die aktuelle Sprachversion des Browsers enthält. Alle Nachricht-Strings, die nicht in der Browsersprache verfügbar sind, werden stattdessen aus der Standardsprache entnommen. Es gibt noch einige weitere Details in Bezug darauf, wie der Browser Strings auswählt — siehe [Localized string selection](#lokalisierte_stringauswahl).

## Sprachabhängiges CSS

Beachten Sie, dass Sie auch lokalisierte Strings aus CSS-Dateien in der Erweiterung abrufen können. Zum Beispiel möchten Sie vielleicht eine sprachabhängige CSS-Regel konstruieren, wie diese:

```css
header {
  background-image: url(../images/__MSG_extensionName__/header.png);
}
```

Das ist nützlich, obwohl Sie eine solche Situation besser mit [Predefined messages](#vordefinierte_nachrichten) handhaben könnten.

## Abrufen von Nachrichten-Strings von JavaScript

Sie haben Ihre Nachrichten-Strings eingerichtet und Ihr Manifest. Jetzt müssen Sie nur noch Ihre Nachrichten-Strings von JavaScript aus aufrufen, damit Ihre Erweiterung so weit wie möglich die richtige Sprache sprechen kann. Die eigentliche [i18n API](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n) ist ziemlich einfach und enthält nur vier Hauptmethoden:

- Sie werden wahrscheinlich {{WebExtAPIRef("i18n.getMessage()")}} am häufigsten verwenden — dies ist die Methode, die Sie verwenden, um einen bestimmten Sprach-String abzurufen, wie oben erwähnt. Unten sehen wir spezifische Anwendungsbeispiele.
- Die Methoden {{WebExtAPIRef("i18n.getAcceptLanguages()")}} und {{WebExtAPIRef("i18n.getUILanguage()")}} könnten verwendet werden, wenn Sie die Benutzeroberfläche abhängig von der Sprachversion anpassen müssen — vielleicht möchten Sie Voreinstellungen, die spezifisch für die bevorzugten Sprachen der Benutzer sind, höher in einer Einstellungslisten anzeigen oder kulturelle Informationen, die nur für eine bestimmte Sprache relevant sind, anzeigen oder angezeigte Daten entsprechend der Browsersprache formatieren.
- Die Methode {{WebExtAPIRef("i18n.detectLanguage()")}} könnte verwendet werden, um die Sprache von benutzergenerierten Inhalten zu erkennen und sie entsprechend zu formatieren.

In unserem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel enthält das [Hintergrundskript](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/background-script.js) die folgenden Zeilen:

```js
let title = browser.i18n.getMessage("notificationTitle");
let content = browser.i18n.getMessage("notificationContent", message.url);
```

Die erste Zeile ruft einfach das `notificationTitle message` Feld aus der verfügbaren `messages.json` Datei ab, die am besten zur aktuellen Sprachversion des Browsers passt. Die zweite Zeile ist ähnlich, aber es wird eine URL als zweiter Parameter übergeben. Was bedeutet das? So geben Sie den Inhalt an, der den `$URL$` Platzhalter ersetzt, den wir im `notificationContent message`-Feld sehen:

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

Das `"placeholders"` Mitglied definiert alle Platzhalter und wo sie abgerufen werden. Der `"url"` Platzhalter gibt an, dass sein Inhalt von `$1` genommen wird, welches der erste Wert ist, der im zweiten Parameter von `getMessage()` gegeben wird. Da der Platzhalter `"url"` genannt wird, verwenden wir `$URL$`, um ihn im tatsächlichen Nachricht-String abzurufen (also für `"name"` würden Sie `$NAME$` verwenden, usw.) Wenn Sie mehrere Platzhalter haben, können Sie sie innerhalb eines Arrays geben, das {{WebExtAPIRef("i18n.getMessage()")}} als zweiten Parameter übergeben wird — `[a, b, c]` wird verfügbar gemacht als `$1`, `$2`, und `$3`, und so weiter, innerhalb von `messages.json`.

Lassen Sie uns ein Beispiel durchgehen: Der ursprüngliche `notificationContent` Nachricht-String in der `en/messages.json` Datei ist

```plain
You clicked $URL$.
```

Sagen wir, der angeklickte Link zeigt auf `https://developer.mozilla.org`. Nach dem {{WebExtAPIRef("i18n.getMessage()")}} Aufruf, werden die Inhalte des zweiten Parameters in messages.json als `$1` verfügbar gemacht, welches den `$URL$` Platzhalter ersetzt, wie im `"url"` Platzhalter definiert. Der endgültige Nachricht-String ist also

```plain
You clicked https://developer.mozilla.org.
```

### Direkte Platzhalterverwendung

Es ist möglich, Ihre Variablen (`$1`, `$2`, `$3`, etc.) direkt in die Nachricht-Strings einzufügen, zum Beispiel könnten wir das oben genannte `"notificationContent"` Mitglied so umschreiben:

```json
"notificationContent": {
  "message": "You clicked $1.",
  "description": "Tells the user which link they clicked."
}
```

Dies mag schneller und weniger komplex erscheinen, aber die andere Methode (mithilfe von `"placeholders"`) gilt als bewährte Praxis. Der Grund ist, dass der Name des Platzhalters (z.B. `"url"`) und das Beispiel Ihnen hilft, sich daran zu erinnern, wofür der Platzhalter ist — eine Woche nachdem Sie Ihren Code geschrieben haben, werden Sie wahrscheinlich vergessen, wofür `$1` – `$8` steht, aber Sie werden sich eher daran erinnern, wofür Ihre Platzhalternamen stehen.

### Festcodierte Ersetzung

Es ist auch möglich, festcodierte Strings in Platzhaltern einzuschließen, sodass derselbe Wert jedes Mal verwendet wird, anstatt den Wert aus einer Variablen in Ihrem Code abzurufen. Zum Beispiel:

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

In diesem Fall kodieren wir einfach den Platzhalterinhalt, anstatt ihn aus einem Variablenwert wie `$1` zu übernehmen. Dies kann manchmal nützlich sein, wenn Ihre Nachrichtendatei sehr komplex ist und Sie verschiedene Werte aufteilen möchten, um die Strings in der Datei lesbarer zu machen, und dann könnten diese Werte programmatisch abgerufen werden.

Zusätzlich können Sie solche Ersetzungen verwenden, um Teile des Strings festzulegen, die nicht übersetzt werden sollen, wie zum Beispiel Personen- oder Firmennamen.

## Lokalisierte Stringauswahl

Sprachversionen können nur mit einem Sprachcode festgelegt werden, wie `fr` oder `en`, oder sie können weiter qualifiziert mit einem Regionscode wie `en_US` oder `en_GB` sein, der eine regionale Variante derselben Grundsprache beschreibt. Wenn Sie das i18n-System nach einem String fragen, wird es einen String mit dem folgenden Algorithmus auswählen:

1. Wenn es eine `messages.json` Datei für die genaue aktuelle Sprachversion gibt und diese den String enthält, geben Sie ihn zurück.
2. Andernfalls, wenn die aktuelle Sprachversion mit einer Region qualifiziert ist (z.B. `en_US`) und es eine `messages.json` Datei für die regionenlose Version dieser Sprachversion gibt (z.B. `en`) und diese Datei den String enthält, geben Sie ihn zurück.
3. Andernfalls, wenn es eine `messages.json` Datei für die `default_locale` gibt, die im `manifest.json` festgelegt ist, und diese den String enthält, geben Sie ihn zurück.
4. Andernfalls geben Sie einen leeren String zurück.

Nehmen Sie das folgende Beispiel:

- Erweiterungs-Wurzelverzeichnis/

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

Angenommen, die `default_locale` ist auf `fr` gesetzt, und die aktuelle Sprachversion des Browsers ist `en_GB`:

- Wenn die Erweiterung `getMessage("colorLocalized")` aufruft, wird sie "colour" zurückgeben.
- Wenn "colorLocalized" nicht in `en_GB` vorhanden wäre, würde `getMessage("colorLocalized")`, "color" zurückgeben, nicht "couleur".

## Vordefinierte Nachrichten

Das i18n-Modul bietet uns einige vordefinierte Nachrichten, die wir auf dieselbe Weise wie zuvor in [Abrufen lokalisierter Strings in Manifests](#abrufen_lokalisierter_strings_in_manifests) und [Sprachabhängiges CSS](#sprachabhängiges_css) gesehen haben, aufrufen können. Zum Beispiel:

```plain
__MSG_extensionName__
```

Vordefinierte Nachrichten verwenden genau dieselbe Syntax, außer dass `@@` vor dem Namen der Nachricht steht, zum Beispiel

```plain
__MSG_@@ui_locale__
```

Die folgende Tabelle zeigt die unterschiedlichen verfügbaren vordefinierten Nachrichten:

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
          erstellen. Selbst nicht-lokalisierte Erweiterungen können diese
          Nachricht verwenden.
        </p>
        <p>Diese Nachricht kann nicht in einer Manifestdatei verwendet werden.</p>
        <p>
          Beachten Sie auch, dass diese ID <em>nicht</em> die Add-on-ID ist, die
          von {{WebExtAPIRef("runtime.id")}} zurückgegeben wird, und
          die mit dem
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
            >browser_specific_settings</a
          >
          Schlüssel in manifest.json festgelegt werden kann. Es ist die
          generierte UUID, die in der URL des Add-ons erscheint. Dies bedeutet,
          dass Sie diesen Wert nicht als
          <code>extensionId</code> Parameter für
          {{WebExtAPIRef("runtime.sendMessage()")}} verwenden können und ihn
          nicht verwenden können, um ihn mit der <code>id</code> Eigenschaft
          eines {{WebExtAPIRef("runtime.MessageSender")}} Objekts zu
          überprüfen.
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
        Die Textrichtung für die aktuelle Sprachversion, entweder "ltr" für
        von-links-nach-rechts-Sprachen wie Englisch oder "rtl" für
        von-rechts-nach-links-Sprachen wie Arabisch.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_reversed_dir</code></td>
      <td>
        Wenn der <code>@@bidi_dir</code> "ltr" ist, dann ist dies "rtl"; ansonsten
        ist es "ltr".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_start_edge</code></td>
      <td>
        Wenn der <code>@@bidi_dir</code> "ltr" ist, dann ist dies "links"; ansonsten
        ist es "rechts".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_end_edge</code></td>
      <td>
        Wenn der <code>@@bidi_dir</code> "ltr" ist, dann ist dies "rechts";
        ansonsten ist es "links".
      </td>
    </tr>
  </tbody>
</table>

Zurück zu unserem früheren Beispiel würde es mehr Sinn machen, es so zu schreiben:

```css
header {
  background-image: url(../images/__MSG_@@ui_locale__/header.png);
}
```

Nun können wir einfach unsere lokal spezifischen Bilder in Verzeichnissen speichern, die zu den verschiedenen Sprachversionen passen, die wir unterstützen — en, de, usw. — was wesentlich mehr Sinn macht.

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

Für von-links-nach-rechts-Sprachen wie Englisch würden die CSS-Deklarationen, die die oben genannten vordefinierten Nachrichten verwenden, zu den folgenden endgültigen Codezeilen übersetzt:

```css
direction: ltr;
padding-left: 0;
padding-right: 1.5em;
```

Für eine von-rechts-nach-links-Sprache wie Arabisch würden Sie erhalten:

```css
direction: rtl;
padding-right: 0;
padding-left: 1.5em;
```

## Testen Ihrer Erweiterung

Um die Lokalisierung Ihrer Erweiterung zu testen, verwenden Sie [Firefox](https://www.mozilla.org/en-US/firefox/new/) oder [Firefox Beta](https://www.mozilla.org/en-US/firefox/channel/desktop/), die Firefox-Builds, in denen Sie Sprachpakete installieren können.

Dann folgen Sie für jede Sprachversion, die in der Erweiterung unterstützt wird, die Sie testen möchten, den Anweisungen, um [Firefox in einer anderen Sprache zu verwenden](https://support.mozilla.org/en-US/kb/use-firefox-another-language), um die Firefox-Benutzeroberflächensprache zu wechseln. (Wenn Sie sich mit den Einstellungen auskennen, verwenden Sie unter Sprache die Funktion Alternativen festlegen.)

Sobald Firefox in Ihrer Testsprache läuft, [installieren Sie die Erweiterung vorübergehend](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/). Nach der Installation Ihrer Erweiterung, in `about:debugging`, wenn Sie Ihre Erweiterung korrekt eingerichtet haben, sehen Sie die Erweiterung in der Liste mit ihrem Icon, Namen und Beschreibung in der gewählten Sprache. Sie können auch die lokalisierten Erweiterungsdetails in `about:addons` sehen. Üben Sie nun die Funktionen der Erweiterung, um sicherzustellen, dass die Übersetzungen, die Sie benötigen, vorhanden sind.

Wenn Sie diesen Prozess ausprobieren möchten, können Sie die [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Erweiterung verwenden. Richten Sie Firefox so ein, dass eine der in diesem Beispiel unterstützten Sprachen angezeigt wird (Deutsch, Niederländisch oder Japanisch). Laden Sie die Erweiterung und besuchen Sie eine Website. Klicken Sie auf einen Link, um die übersetzte Version der Benachrichtigung anzuzeigen, die die URL des Links meldet.
