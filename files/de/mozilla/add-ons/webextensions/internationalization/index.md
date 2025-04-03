---
title: Internationalisierung
slug: Mozilla/Add-ons/WebExtensions/Internationalization
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{AddonSidebar}}

Die [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions)-API bietet ein sehr nützliches Modul zur Internationalisierung von Erweiterungen — [i18n](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n). In diesem Artikel werden wir seine Funktionen untersuchen und ein praktisches Beispiel für seine Funktionsweise bereitstellen. Das i18n-System für Erweiterungen, die mit WebExtension-APIs erstellt wurden, ist ähnlich wie gängige JavaScript-Bibliotheken für i18n, wie [i18n.js](http://i18njs.com/).

> [!NOTE]
> Die in diesem Artikel vorgestellte Beispielerweiterung — [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) — ist auf GitHub verfügbar. Verfolgen Sie den Quellcode, während Sie die untenstehenden Abschnitte durchgehen.

## Aufbau einer internationalisierten Erweiterung

Eine internationalisierte Erweiterung kann dieselben Funktionen wie jede andere Erweiterung enthalten — [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts), [Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) usw. — jedoch enthält sie auch einige zusätzliche Teile, die es ihr ermöglichen, zwischen verschiedenen Gebietsschemas zu wechseln. Diese sind im folgenden Verzeichnisbaum zusammengefasst:

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

    - gebietsschemaspezifische Metadaten

  - myJavascript.js

    - JavaScript zum Abrufen des Browser-Gebietsschemas, gebietsschemaspezifische Nachrichten usw.

  - myStyles.css

    - gebietsschemaspezifisches CSS

Lassen Sie uns jede der neuen Funktionen der Reihe nach erkunden — jeder der folgenden Abschnitte beschreibt einen Schritt, dem Sie folgen sollten, wenn Sie Ihre Erweiterung internationalisieren.

## Bereitstellen lokalisierter Strings in \_locales

> [!NOTE]
> Sie können Sprachuntertags mit dem _Find_-Werkzeug auf der [Language subtag lookup page](https://r12a.github.io/app-subtags/) nachschlagen. Beachten Sie, dass Sie nach dem englischen Namen der Sprache suchen müssen.

Jedes i18n-System erfordert die Bereitstellung von Strings, die in alle verschiedenen Gebietsschemas übersetzt wurden, die Sie unterstützen möchten. In Erweiterungen sind diese in einem Verzeichnis namens `_locales` enthalten, das in das Erweiterungsstammverzeichnis eingefügt wird. Jedes einzelne Gebietsschema hat seine Strings (als Nachrichten bezeichnet) in einer Datei namens `messages.json` enthalten, die in einem Unterverzeichnis von `_locales` platziert ist, benannt unter Verwendung des Sprachuntertags für die Sprache dieses Gebietsschemas.

Beachten Sie, dass, wenn der Untertag eine grundlegende Sprache plus eine regionale Variante umfasst, die Sprache und die Variante konventionell durch einen Bindestrich getrennt werden: zum Beispiel "en-US". In den Verzeichnissen unter `_locales` **muss der Trennstrich jedoch ein Unterstrich sein**: "en_US".

So haben wir [zum Beispiel in unserer Beispiel-App](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n/_locales) Verzeichnisse für "en" (Englisch), "de" (Deutsch), "nl" (Niederländisch) und "ja" (Japanisch). Jedes dieser Verzeichnisse hat eine `messages.json`-Datei darin.

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

Diese Datei ist Standard-JSON — jedes ihrer Mitglieder ist ein Objekt mit einem Namen, das eine `message` und eine `description` enthält. Alle diese Elemente sind Strings; `$URL$` ist ein Platzhalter, der durch ein Unterzeichenfolgen ersetzt wird, wenn das `notificationContent`-Mitglied von der Erweiterung aufgerufen wird. Sie lernen, wie man dies im Abschnitt [Nachrichten-Strings aus JavaScript abrufen](#nachrichten-strings_aus_javascript_abrufen) macht.

> [!NOTE]
> Sie finden viel mehr Informationen über den Inhalt von `messages.json`-Dateien in unserer [Gebietsschemaspezifische Nachrichten-Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference).

## Internationalisierung von manifest.json

Es gibt einige verschiedene Aufgaben zu erledigen, um Ihre manifest.json zu internationalisieren.

### Lokalisierte Strings in Manifesten abrufen

Ihr [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/manifest.json) enthält Strings, die dem Benutzer angezeigt werden, wie der Name und die Beschreibung der Erweiterung. Wenn Sie diese Strings internationalisieren und die entsprechenden Übersetzungen davon in `messages.json` einfügen, wird die korrekte Übersetzung des Strings basierend auf dem aktuellen Gebietsschema dem Benutzer angezeigt.

Um Strings zu internationalisieren, geben Sie sie wie folgt an:

```json
"name": "__MSG_extensionName__",
"description": "__MSG_extensionDescription__",
```

Hier rufen wir Nachrichten-Strings abhängig vom Gebietsschema des Browsers ab, anstatt statische Strings einzuschließen.

Um einen Nachrichten-String so aufzurufen, müssen Sie ihn wie folgt angeben:

1. Zwei Unterstriche, gefolgt von
2. Dem String "MSG", gefolgt von
3. Einem Unterstrich, gefolgt von
4. Dem Namen der Nachricht, die Sie aufrufen möchten, wie in `messages.json` definiert, gefolgt von
5. Zwei Unterstrichen

```plain
__MSG_ + messageName + __
```

### Ein Standard-Gebietsschema angeben

Ein weiteres Feld, das Sie in Ihrer manifest.json angeben sollten, ist [default_locale](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale):

```json
"default_locale": "en"
```

Dies gibt ein Standardgebietsschema an, das verwendet wird, wenn die Erweiterung keinen lokalisierten String für das aktuelle Gebietsschema des Browsers enthält. Alle Nachrichten-Strings, die im Browser-Gebietsschema nicht verfügbar sind, werden stattdessen aus dem Standard-Gebietsschema übernommen. Es gibt noch mehr Details, die zu beachten sind, wie der Browser Strings auswählt — siehe [Lokalisierte String-Auswahl](#lokalisierte_string-auswahl).

## Gebietsschemaspezifisches CSS

Beachten Sie, dass Sie auch lokalisierte Strings aus CSS-Dateien in der Erweiterung abrufen können. Zum Beispiel könnten Sie eine gebietsschemaspezifische CSS-Regel konstruieren wollen, wie diese:

```css
header {
  background-image: url(../images/__MSG_extensionName__/header.png);
}
```

Dies ist nützlich, obwohl Sie eine solche Situation möglicherweise besser mit [vordefinierten Nachrichten](#vordefinierte_nachrichten) handhaben könnten.

## Nachrichten-Strings aus JavaScript abrufen

Sie haben Ihre Nachrichten-Strings eingerichtet und Ihr Manifest. Jetzt müssen Sie nur noch beginnen, Ihre Nachrichten-Strings aus JavaScript aufzurufen, damit Ihre Erweiterung so gut wie möglich die richtige Sprache spricht. Die eigentliche [i18n-API](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n) ist ziemlich einfach und enthält nur vier Hauptmethoden:

- Sie werden wahrscheinlich am häufigsten {{WebExtAPIRef("i18n.getMessage()")}} verwenden — dies ist die Methode, die Sie verwenden, um einen spezifischen Sprachstring abzurufen, wie oben erwähnt. Wir werden unten spezifische Nutzungsbeispiele dafür sehen.
- Die Methoden {{WebExtAPIRef("i18n.getAcceptLanguages()")}} und {{WebExtAPIRef("i18n.getUILanguage()")}} könnten verwendet werden, wenn Sie die Benutzeroberfläche je nach Gebietsschema anpassen müssten — vielleicht möchten Sie Präferenzen anzeigen, die für die bevorzugten Sprachen der Benutzer spezifisch sind, höher in einer Präferenzliste, kulturelle Informationen anzeigen, die nur für eine bestimmte Sprache relevant sind, oder angezeigte Daten gemäß dem Browser-Gebietsschema entsprechend formatieren.
- Die Methode {{WebExtAPIRef("i18n.detectLanguage()")}} könnte verwendet werden, um die Sprache von benutzereingereichten Inhalten zu erkennen und entsprechend zu formatieren.

In unserem [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n)-Beispiel enthält das [Hintergrundskript](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/background-script.js) die folgenden Zeilen:

```js
let title = browser.i18n.getMessage("notificationTitle");
let content = browser.i18n.getMessage("notificationContent", message.url);
```

Die erste Zeile ruft einfach das `notificationTitle message`-Feld aus der verfügbaren `messages.json`-Datei ab, die am besten zum aktuellen Gebietsschema des Browsers passt. Die zweite Zeile ist ähnlich, aber sie wird mit einer URL als zweitem Parameter aufgerufen. Was hat das zu bedeuten? So geben Sie den Inhalt an, der den `$URL$`-Platzhalter ersetzt, den wir im `notificationContent message`-Feld sehen:

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

Das `"placeholders"`-Element definiert alle Platzhalter und wo sie abgerufen werden. Der `"url"`-Platzhalter gibt an, dass sein Inhalt von `$1` stammt, was der erste Wert ist, der im zweiten Parameter von `getMessage()` angegeben ist. Da der Platzhalter `"url"` genannt wird, verwenden wir `$URL$`, um ihn im eigentlichen Nachrichten-String aufzurufen (also für `"name"` würden Sie `$NAME$` verwenden, usw.). Wenn Sie mehrere Platzhalter haben, können Sie sie in einem Array bereitstellen, das {{WebExtAPIRef("i18n.getMessage()")}} als der zweite Parameter übergeben wird — `[a, b, c]` wird in `messages.json` als `$1`, `$2` und `$3` verfügbar sein, und so weiter.

Lassen Sie uns ein Beispiel durchgehen: Der ursprüngliche `notificationContent`-Nachrichten-String in der `en/messages.json`-Datei ist

```plain
You clicked $URL$.
```

Angenommen, der angeklickte Link zeigt auf `https://developer.mozilla.org`. Nach dem {{WebExtAPIRef("i18n.getMessage()")}}-Aufruf werden die Inhalte des zweiten Parameters in `messages.json` als `$1` verfügbar gemacht, was den `$URL$`-Platzhalter ersetzt, wie im `"url"`-Platzhalter definiert. Der endgültige Nachrichten-String ist also

```plain
You clicked https://developer.mozilla.org.
```

### Direkte Verwendung von Platzhaltern

Es ist möglich, Ihre Variablen (`$1`, `$2`, `$3`, usw.) direkt in die Nachrichten-Strings einzufügen, zum Beispiel könnten wir das oben genannte `"notificationContent"`-Mitglied wie folgt umschreiben:

```json
"notificationContent": {
  "message": "You clicked $1.",
  "description": "Tells the user which link they clicked."
}
```

Dies mag schneller und weniger komplex erscheinen, aber die andere Methode (Verwendung von `"placeholders"`) wird als beste Praxis angesehen. Der Grund dafür ist, dass der Platzhaltername (z.B. `"url"`) und das Beispiel Ihnen helfen, sich zu merken, wofür der Platzhalter gedacht ist — eine Woche, nachdem Sie Ihren Code geschrieben haben, werden Sie wahrscheinlich vergessen haben, wofür `$1` – `$8` stehen, aber Sie werden sich eher daran erinnern, wofür Ihre Platzhalternamen stehen.

### Hardcodierte Substitution

Es ist auch möglich, hardcodierte Strings in Platzhaltern einzufügen, sodass jedes Mal derselbe Wert verwendet wird, anstatt ihn aus einer Variablen in Ihrem Code zu beziehen. Zum Beispiel:

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

In diesem Fall hardcoden wir einfach den Platzhalterinhalt, anstatt ihn aus einem Variablenwert wie `$1` zu beziehen. Dies kann manchmal nützlich sein, wenn Ihre Nachrichten-Datei sehr komplex ist und Sie verschiedene Werte aufteilen möchten, um die Strings in der Datei lesbarer zu machen, zudem könnten diese Werte dann programmatisch abgerufen werden.

Darüber hinaus können Sie solche Substitutionen verwenden, um Teile des Strings anzugeben, die nicht übersetzt werden sollen, wie Personen- oder Firmennamen.

## Lokalisierte String-Auswahl

Gebietsschemas können nur mit einem Sprachcode angegeben werden, wie `fr` oder `en`, oder sie können weiter mit einem Regionscode, wie `en_US` oder `en_GB`, qualifiziert werden, der eine regionale Variante der gleichen Grundsprache beschreibt. Wenn Sie das i18n-System nach einem String fragen, wird es einen String anhand des folgenden Algorithmus auswählen:

1. Wenn es eine `messages.json`-Datei für das exakte aktuelle Gebietsschema gibt und sie den String enthält, geben Sie ihn zurück.
2. Andernfalls, wenn das aktuelle Gebietsschema mit einer Region qualifiziert ist (z.B. `en_US`) und es eine `messages.json`-Datei für die regionslose Version dieses Gebietsschemas (z.B. `en`) gibt und diese Datei den String enthält, geben Sie ihn zurück.
3. Andernfalls, wenn es eine `messages.json`-Datei für das in `manifest.json` definierte `default_locale` gibt und sie den String enthält, geben Sie ihn zurück.
4. Andernfalls geben Sie einen leeren String zurück.

Nehmen wir folgendes Beispiel an:

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

Angenommen, das `default_locale` ist auf `fr` gesetzt und das aktuelle Gebietsschema des Browsers ist `en_GB`:

- Wenn die Erweiterung `getMessage("colorLocalized")` aufruft, gibt sie "colour" zurück.
- Wenn "colorLocalized" nicht in `en_GB` vorhanden wäre, würde `getMessage("colorLocalized")` "color" zurückgeben, nicht "couleur".

## Vordefinierte Nachrichten

Das i18n-Modul bietet uns einige vordefinierte Nachrichten, die wir auf die gleiche Weise wie zuvor gesehen aufrufen können, in [Lokalisierte Strings in Manifesten abrufen](#lokalisierte_strings_in_manifesten_abrufen) und [Gebietsschemaspezifisches CSS](#gebietsschemaspezifisches_css). Zum Beispiel:

```plain
__MSG_extensionName__
```

Vordefinierte Nachrichten verwenden genau dieselbe Syntax, außer dass `@@` vor dem Nachrichtennamen steht, zum Beispiel

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
          konstruieren. Selbst nicht-lokalisierte Erweiterungen können diese
          Nachricht verwenden.
        </p>
        <p>Sie können diese Nachricht nicht in einer Manifestdatei verwenden.</p>
        <p>
          Beachten Sie auch, dass diese ID <em>nicht</em> die Add-on-ID ist, die von
          {{WebExtAPIRef("runtime.id")}} zurückgegeben wird und die
          mithilfe des
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
            >browser_specific_settings</a
          >
          Schlüssels in manifest.json festgelegt werden kann. Es ist die generierte
          UUID, die in der URL des Add-ons erscheint. Das bedeutet, dass Sie diesen
          Wert nicht als <code>extensionId</code>-Parameter an
          {{WebExtAPIRef("runtime.sendMessage()")}} übergeben können und
          ihn nicht verwenden können, um gegen die <code>id</code>-Eigenschaft eines
          {{WebExtAPIRef("runtime.MessageSender")}}-Objekts zu prüfen.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>@@ui_locale</code></td>
      <td>
        Das aktuelle Gebietsschema; Sie könnten diesen String verwenden, um
        gebietsschemaspezifische URLs zu konstruieren.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_dir</code></td>
      <td>
        Die Textrichtung für das aktuelle Gebietsschema, entweder "ltr" für
        von links nach rechts lesbare Sprachen wie Englisch oder "rtl" für von
        rechts nach links lesbare Sprachen wie Arabisch.
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_reversed_dir</code></td>
      <td>
        Wenn <code>@@bidi_dir</code> "ltr" ist, ist dies "rtl"; andernfalls ist es
        "ltr".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_start_edge</code></td>
      <td>
        Wenn <code>@@bidi_dir</code> "ltr" ist, ist dies "links"; andernfalls ist es
        "rechts".
      </td>
    </tr>
    <tr>
      <td><code>@@bidi_end_edge</code></td>
      <td>
        Wenn <code>@@bidi_dir</code> "ltr" ist, ist dies "rechts"; andernfalls ist
        es "links".
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

Nun können wir unsere lokalen spezifischen Bilder einfach in Verzeichnissen speichern, die den verschiedenen unterstützten Gebietsschemas entsprechen — en, de, etc. — was viel sinnvoller ist.

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

Für von links nach rechts lesbare Sprachen wie Englisch würden die CSS-Deklarationen mit den vordefinierten Nachrichten oben folgendermaßen in den endgültigen Codezeilen übersetzt werden:

```css
direction: ltr;
padding-left: 0;
padding-right: 1.5em;
```

Für eine von rechts nach links lesbare Sprache wie Arabisch erhalten Sie:

```css
direction: rtl;
padding-right: 0;
padding-left: 1.5em;
```

## Testen Ihrer Erweiterung

Um die Lokalisierung Ihrer Erweiterung zu testen, verwenden Sie [Firefox](https://www.mozilla.org/en-US/firefox/new/) oder [Firefox Beta](https://www.mozilla.org/en-US/firefox/channel/desktop/), die Firefox-Builds, in denen Sie Sprachpakete installieren können.

Dann folgen Sie für jede in der Erweiterung unterstützte Sprache, die Sie testen möchten, den Anweisungen, um [Firefox in einer anderen Sprache verwenden](https://support.mozilla.org/en-US/kb/use-firefox-another-language), um die Sprache der Firefox-Benutzeroberfläche zu wechseln. (Wenn Sie sich in den Einstellungen auskennen, verwenden Sie unter Sprache die Alternative festlegen.)

Wenn Firefox in Ihrer Testsprache läuft, installieren Sie von `about:debugging` aus die Erweiterung [vorübergehend](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) oder laden Sie sie erneut, wenn sie bereits installiert ist. Nachdem Sie Ihre Erweiterung installiert oder neu geladen haben, sehen Sie, wenn Sie Ihre Erweiterung korrekt eingerichtet haben, die Erweiterung mit ihrem Symbol, ihrem Namen und ihrer Beschreibung in der gewählten Sprache aufgelistet. Sie können auch die lokalisierten Erweiterungsdetails in `about:addons` sehen. Jetzt sollten Sie die Funktionen der Erweiterung nutzen, um sicherzustellen, dass die Übersetzungen vorhanden sind.

Wenn Sie diesen Prozess ausprobieren möchten, können Sie die [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n)-Erweiterung verwenden. Richten Sie Firefox so ein, dass eine der in diesem Beispiel unterstützten Sprachen (Deutsch, Niederländisch oder Japanisch) angezeigt wird. Laden Sie die Erweiterung und gehen Sie auf eine Website. Klicken Sie auf einen Link, um die übersetzte Version der Benachrichtigung zu sehen, die die URL des Links meldet.
