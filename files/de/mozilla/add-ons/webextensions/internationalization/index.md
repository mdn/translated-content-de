---
title: Internationalisierung
slug: Mozilla/Add-ons/WebExtensions/Internationalization
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

Die [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) API bietet ein sehr nützliches Modul zur Internationalisierung von Erweiterungen — [i18n](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n). In diesem Artikel werden wir die Funktionen erkunden und ein praktisches Beispiel dafür zur Verfügung stellen, wie es funktioniert.

> [!NOTE]
> Die in diesem Artikel vorgestellte Beispielerweiterung — [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) — ist auf GitHub verfügbar. Folgen Sie dem Quellcode, während Sie die untenstehenden Abschnitte durchgehen.

## Anatomie einer internationalisierten Erweiterung

Eine internationalisierte Erweiterung kann die gleichen Funktionen wie jede andere Erweiterung enthalten — [Hintergrundskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts), [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) etc. — sie hat jedoch einige zusätzliche Bestandteile, die es ermöglichen, zwischen verschiedenen Gebietsschemas zu wechseln. Diese werden in folgendem Verzeichnisbaum zusammengefasst:

- Erweiterungs-Root-Verzeichnis/
  - \_locales
    - en
      - messages.json
        - Englische Nachrichten (Strings)

    - de
      - messages.json
        - Deutsche Nachrichten (Strings)

    - usw.

  - manifest.json
    - gebietsschemaabhängige Metadaten

  - myJavascript.js
    - JavaScript zum Abrufen des Browser-Gebietsschemas, gebietsschemaspezifischer Nachrichten, etc.

  - myStyles.css
    - gebietsschemaabhängige CSS

Lassen Sie uns nun jede der neuen Funktionen der Reihe nach erkunden — jeder der unten stehenden Abschnitte stellt einen Schritt dar, den Sie beim Internationalisieren Ihrer Erweiterung befolgen sollten.

## Bereitstellung lokalisierter Zeichenfolgen in \_locales

> [!NOTE]
> Sie können Sprachuntertags mit dem _Finden_-Tool auf der [Language subtag lookup page](https://r12a.github.io/app-subtags/) nachschlagen. Beachten Sie, dass Sie nach dem englischen Namen der Sprache suchen müssen.

Jedes i18n-System erfordert die Bereitstellung von Zeichenfolgen, die in alle verschiedenen unterstützten Gebietsschemas übersetzt sind. In Erweiterungen befinden sich diese in einem Verzeichnis, das `_locales` heißt und im Root der Erweiterung platziert ist. Jedes einzelne Gebietsschema enthält seine Zeichenfolgen (als Nachrichten bezeichnet) in einer Datei namens `messages.json`, die in einem `\_locales`-Unterverzeichnis platziert ist und mit dem Sprachuntertag für die Sprache des Gebietsschemas benannt ist.

Beachten Sie, dass wenn das Untertag eine Grundsprache plus eine regionale Variante enthält, dann die Sprache und die Variante konventionell mit einem Bindestrich getrennt werden: zum Beispiel "en-US". In den Verzeichnissen unter `_locales` **muss der Trennzeichen jedoch ein Unterstrich sein**: "en_US".

So haben wir [zum Beispiel in unserer Beispiel-App](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n/_locales) Verzeichnisse für "en" (Englisch), "de" (Deutsch), "nl" (Niederländisch) und "ja" (Japanisch). Jedes dieser Verzeichnisse enthält eine `messages.json`-Datei.

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

Diese Datei ist standardmäßiges JSON — jedes ihrer Mitglieder ist ein Objekt mit einem Namen, das eine `message` und eine `description` enthält. Alle diese Elemente sind Zeichenfolgen; `$URL$` ist ein Platzhalter, der durch einen Unterstring ersetzt wird, wenn das `notificationContent`-Mitglied von der Erweiterung aufgerufen wird. Sie erfahren, wie das funktioniert, im Abschnitt [Abfragen von Nachrichtenstrings aus JavaScript](#abrufen_von_nachrichtenstrings_aus_javascript).

> [!NOTE]
> Sie finden viel mehr Informationen über den Inhalt von `messages.json`-Dateien in unserer [gebietspezifischen Nachrichten-Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference).

## Internationalisierung von manifest.json

Es gibt einige verschiedene Aufgaben, um Ihre manifest.json zu internationalisieren.

### Abrufen von lokalisierten Strings in Manifests

Ihre [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/manifest.json) enthält Strings, die dem Benutzer angezeigt werden, wie zum Beispiel den Namen und die Beschreibung der Erweiterung. Wenn Sie diese Strings internationalisieren und die entsprechenden Übersetzungen in `messages.json` einfügen, wird die korrekte Übersetzung des Strings dem Benutzer basierend auf dem aktuellen Gebietsschema angezeigt.

Um Strings zu internationalisieren, geben Sie sie so an:

```json
"name": "__MSG_extensionName__",
"description": "__MSG_extensionDescription__",
```

Hier rufen wir nachrichtenabhängige Strings ab, die vom Browser-Gebietsschema abhängen, anstatt einfach nur statische Strings einzufügen.

Um einen Nachrichtenstring so aufzurufen, müssen Sie ihn so angeben:

1. Zwei Unterstriche, gefolgt von
2. Dem String "MSG", gefolgt von
3. Einem Unterstrich, gefolgt von
4. Dem Namen der Nachricht, die Sie wie in `messages.json` definiert aufrufen möchten, gefolgt von
5. Zwei Unterstrichen

```plain
__MSG_ + messageName + __
```

### Angabe eines Standardgebietsschemas

Ein weiteres Feld, das Sie in Ihrer manifest.json angeben sollten, ist [default_locale](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale):

```json
"default_locale": "en"
```

Dies gibt ein Standardgebietsschema an, das verwendet wird, wenn die Erweiterung keinen lokalisierten String für das aktuelle Browser-Gebietsschema enthält. Alle Nachrichtenstrings, die im Browser-Gebietsschema nicht verfügbar sind, werden stattdessen aus dem Standardgebietsschema übernommen. Es gibt weitere Details dazu, wie der Browser Zeichenfolgen auswählt — siehe [Lokalisierte Zeichenfolgenauswahl](#lokalisierte_zeichenfolgenauswahl).

## Gebietsschemaabhängige CSS

Beachten Sie, dass Sie auch lokalisierten Strings aus CSS-Dateien in der Erweiterung abrufen können. Zum Beispiel könnten Sie eine gebietsschemaabhängige CSS-Regel erstellen, so:

```css
header {
  background-image: url(../images/__MSG_extensionName__/header.png);
}
```

Das ist nützlich, obwohl Sie eine solche Situation vielleicht besser mit [vordefinierten Nachrichten](#vordefinierte_nachrichten) handhaben sollten.

## Abrufen von Nachrichtenstrings aus JavaScript

Nun, da Sie Ihre Nachrichtenstrings und Ihr Manifest eingerichtet haben, müssen Sie nur noch anfangen, Ihre Nachrichtenstrings aus JavaScript aufzurufen, damit Ihre Erweiterung so gut wie möglich in der richtigen Sprache spricht. Die tatsächliche [i18n API](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n) ist ziemlich einfach und enthält nur vier Hauptmethoden:

- Sie werden wahrscheinlich {{WebExtAPIRef("i18n.getMessage()")}} am häufigsten verwenden — dies ist die Methode, die Sie verwenden, um einen spezifischen Sprachstring abzurufen, wie oben erwähnt. Wir werden unten spezifische Anwendungsbeispiele dafür sehen.
- Die Methoden {{WebExtAPIRef("i18n.getAcceptLanguages()")}} und {{WebExtAPIRef("i18n.getUILanguage()")}} könnten genutzt werden, wenn Sie die Benutzeroberfläche je nach Gebietsschema anpassen müssen — vielleicht möchten Sie Präferenzen, die den bevorzugten Sprachen der Benutzer spezifisch sind, höher in einer Präferenzliste anzeigen, kulturelle Informationen zeigen, die nur für eine bestimmte Sprache relevant sind, oder angezeigte Daten entsprechend dem Browser-Gebietsschema formatieren.
- Die Methode {{WebExtAPIRef("i18n.detectLanguage()")}} könnte verwendet werden, um die Sprache von nutzergenerierten Inhalten zu erkennen und sie entsprechend zu formatieren.

In unserem Beispiel [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) enthält das [Hintergrundskript](https://github.com/mdn/webextensions-examples/blob/main/notify-link-clicks-i18n/background-script.js) folgende Zeilen:

```js
let title = browser.i18n.getMessage("notificationTitle");
let content = browser.i18n.getMessage("notificationContent", message.url);
```

Die erste Zeile ruft einfach das `notificationTitle message`-Feld von der am besten geeigneten `messages.json`-Datei für das aktuelle Browser-Gebietsschema ab. Die zweite ist ähnlich, es wird jedoch eine URL als zweiter Parameter übergeben. Was ergibt das? So spezifizieren Sie den Inhalt, der den `$URL$`-Platzhalter im `notificationContent message`-Feld ersetzt:

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

Das `"placeholders"`-Mitglied definiert alle Platzhalter und von wo sie abgerufen werden. Der `"url"`-Platzhalter spezifiziert, dass sein Inhalt von `$1` stammt, welches der erste Wert ist, der im zweiten Parameter von `getMessage()` gegeben wird. Da der Platzhalter `"url"` genannt wird, verwenden wir `$URL$`, um ihn innerhalb des tatsächlichen Nachrichtenstrings aufzurufen (für `"name"` würden Sie `$NAME$` verwenden, etc.). Wenn Sie mehrere Platzhalter haben, können Sie diese innerhalb eines Arrays bereitstellen, das als zweiter Parameter an {{WebExtAPIRef("i18n.getMessage()")}} gegeben wird — `[a, b, c]` wird verfügbar als `$1`, `$2` und `$3`, und so weiter, innerhalb von `messages.json`.

Durchlaufen wir ein Beispiel: Der ursprüngliche `notificationContent`-Nachrichtenstring in der `en/messages.json`-Datei ist

```plain
You clicked $URL$.
```

Nehmen wir an, der angeklickte Link zeigt auf `https://developer.mozilla.org`. Nach dem {{WebExtAPIRef("i18n.getMessage()")}}-Aufruf werden die Inhalte des zweiten Parameters in messages.json als `$1` verfügbar gemacht, was den `$URL$`-Platzhalter wie im `"url"`-Platzhalter definiert ersetzt. So ist der endgültige Nachrichtenstring

```plain
You clicked https://developer.mozilla.org.
```

### Direkte Platzhalternutzung

Es ist möglich, Ihre Variablen (`$1`, `$2`, `$3`, etc.) direkt in die Nachrichtenstrings einzufügen, zum Beispiel könnten wir das obige `"notificationContent"`-Mitglied so umschreiben:

```json
"notificationContent": {
  "message": "You clicked $1.",
  "description": "Tells the user which link they clicked."
}
```

Dies mag schneller und weniger komplex erscheinen, aber die andere Methode (unter Verwendung von `"placeholders"`) wird als Best-Practice angesehen. Dies liegt daran, dass der Platzhaltername (z.B. `"url"`) und das Beispiel Ihnen helfen, sich daran zu erinnern, wofür der Platzhalter gedacht ist — eine Woche nachdem Sie Ihren Code geschrieben haben, werden Sie wahrscheinlich vergessen haben, wofür `$1` – `$8` stehen, aber Sie werden eher wissen, wofür Ihre Platzhalternamen stehen.

### Feste Ersetzung

Es ist auch möglich, hartkodierte Strings in Platzhaltern zu verwenden, so dass derselbe Wert jedes Mal verwendet wird, anstatt den Wert aus einer Variablen in Ihrem Code zu beziehen. Zum Beispiel:

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

In diesem Fall kodieren wir einfach den Platzhalterinhalt fest, anstatt ihn von einem Variablenwert wie `$1` abzuleiten. Das kann manchmal nützlich sein, wenn Ihre Nachrichtendatei sehr komplex ist und Sie verschiedene Werte aufteilen möchten, um die Strings in der Datei lesbarer zu machen, plus dann könnten diese Werte programmatisch abgerufen werden.

Sie können solche Ersetzungen auch verwenden, um Teile des Strings anzugeben, die nicht übersetzt werden sollen, wie Personen- oder Firmennamen.

## Lokalisierte Zeichenfolgenauswahl

Gebietsschemas können mit einem Sprachcode angegeben werden, wie `fr` oder `en`, oder mit einem Skript und Regioncode qualifiziert werden, wie `en-US` oder `zh-Hans-CN`. Wenn Ihre Erweiterung das i18n-System nach einem String fragt, wird dieser mit folgendem Algorithmus ausgewählt:

1. Gibt die Zeichenfolge zurück, wenn es eine `messages.json`-Datei für das im Benutzer-Browser eingestellte Gebietsschema gibt, die die Zeichenfolge enthält. Zum Beispiel, wenn der Benutzer seinen Browser auf `en-US` eingestellt hat und die Erweiterung die Datei `_locales/en_US/messages.json` bereitstellt.
2. Andernfalls, wenn das Browser-Gebietsschema mit einem Skript oder einer Region qualifiziert ist (z.B. `en-US` oder `zh-Hans-CN`) und es eine `messages.json`-Datei für die regionlose Version und, falls diese nicht verfügbar ist, die skriptlose Version dieses Gebietsschemas gibt und diese Datei die Zeichenfolge enthält, dann gebe sie zurück. Zum Beispiel, wenn der Benutzer seinen Browser auf `zh-Hans-CN` eingestellt hat (und es keine `_locales/zh_Hans_CN/messages.json`-Datei gibt), sucht das i18n-System nach einem String in `zh-Hans`, und wenn dieser nicht verfügbar ist, `zh`.
3. Andernfalls, wenn es eine `messages.json`-Datei für das `default_locale`, das in der `manifest.json` definiert ist, gibt und sie die Zeichenfolge enthält, gebe sie zurück.
4. Andernfalls gebe einen leeren String zurück.

Nehmen wir dieses Beispiel:

- Erweiterungs-Root-Verzeichnis/
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

- Wenn das Browser-Gebietsschema `en-GB` ist und die Erweiterung `getMessage("colorLocalized")` aufruft, wird "colour" zurückgegeben, weil `_locales/en_GB/messages.json` die `colorLocalized`-Nachricht enthält.
- Wenn das Browser-Gebietsschema `en-US` ist und die Erweiterung `getMessage("colorLocalized")` aufruft, wird "color" zurückgegeben, weil es auf die Nachricht in `_locales/en/messages.json` zurückfällt.
- Wenn das Browser-Gebietsschema `zh-Hans-CN` ist und die Erweiterung `getMessage("colorLocalized")` aufruft, wird "couleur" zurückgegeben, da es keine Übereinstimmung in Sprache, Skript oder Region zum `zh-Hans-CN`-Gebietsschema gibt.

## Vordefinierte Nachrichten

Das i18n-Modul bietet uns einige vordefinierte Nachrichten, die wir auf dieselbe Weise aufrufen können, wie wir es zuvor in [Abrufen lokalisierter Strings in Manifests](#abrufen_von_lokalisierten_strings_in_manifests) und [Gebietsschemaabhängige CSS](#gebietsschemaabhängige_css) gesehen haben. Zum Beispiel:

```plain
__MSG_extensionName__
```

Vordefinierte Nachrichten verwenden exakt dieselbe Syntax, nur mit `@@` vor dem Nachrichtennamen, zum Beispiel

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
          Die intern generierte UUID der Erweiterung. Sie könnten diese Zeichenfolge
          verwenden, um URLs für Ressourcen innerhalb der Erweiterung zu erstellen. Selbst nicht lokalisierte
          Erweiterungen können diese Nachricht verwenden.
        </p>
        <p>Sie können diese Nachricht nicht in einer Manifestdatei verwenden.</p>
        <p>
          Beachten Sie auch, dass diese ID <em>nicht</em> die Add-On-ID ist, die
          von {{WebExtAPIRef("runtime.id")}} zurückgegeben wird, und dass diese mit
          dem
          <a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings"
            >browser_specific_settings</a
          >
          Schlüssel in manifest.json gesetzt werden kann. Es ist die generierte UUID, die in der
          URL des Add-Ons erscheint. Das bedeutet, dass Sie diesen Wert nicht als
          <code>extensionId</code>-Parameter an
          {{WebExtAPIRef("runtime.sendMessage()")}}
          nutzen können, und auch nicht, um gegen die <code>id</code>-Eigenschaft eines
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
        Links-nach-Rechts-Sprachen wie Englisch oder "rtl" für Rechts-nach-Links-
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

Zurück zu unserem früheren Beispiel würde es mehr Sinn machen, es so zu schreiben:

```css
header {
  background-image: url(../images/__MSG_@@ui_locale__/header.png);
}
```

Nun können wir unsere lokalen spezifischen Bilder einfach in Verzeichnissen speichern, die den verschiedenen unterstützten Gebietsschemas entsprechen — en, de, etc. — was viel mehr Sinn ergibt.

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

Für Links-nach-Rechts-Sprachen wie Englisch, würden die CSS-Erklärungen, die die oben genannten vordefinierten Nachrichten betreffen, in die folgenden endgültigen Codezeilen übersetzt:

```css
direction: ltr;
padding-left: 0;
padding-right: 1.5em;
```

Für eine Rechts-nach-Links-Sprache wie Arabisch, würde man erhalten:

```css
direction: rtl;
padding-right: 0;
padding-left: 1.5em;
```

## Testen Ihrer Erweiterung

Um die Lokalisierung Ihrer Erweiterung zu testen, verwenden Sie [Firefox](https://www.firefox.com/en-US/) oder [Firefox Beta](https://www.firefox.com/en-US/channel/desktop/), die Firefox-Versionen, in denen Sie Sprachpakete installieren können.

Dann, für jedes von der Erweiterung unterstützte Gebietsschema, das Sie testen möchten, befolgen Sie die Anweisungen, um [Firefox in einer anderen Sprache zu verwenden](https://support.mozilla.org/en-US/kb/use-firefox-another-language), um die Firefox-Benutzeroberflächensprache zu wechseln. (Wenn Sie sich mit den Einstellungen auskennen, verwenden Sie unter Sprache "Alternativen festlegen".)

Wenn Firefox in Ihrer Testsprache läuft, installieren Sie von `about:debugging` [die Erweiterung vorübergehend](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) oder laden Sie sie neu, wenn sie bereits installiert ist. Nach der Installation oder dem erneuten Laden Ihrer Erweiterung, werden die Erweiterung mit ihrem Icon, Namen und Beschreibung in der gewählten Sprache aufgelistet, wenn Sie Ihre Erweiterung korrekt eingerichtet haben. Sie können auch die lokalisierten Erweiterungsdetails in `about:addons` sehen. Probieren Sie die Funktionen der Erweiterung aus, um sicherzustellen, dass die Übersetzungen vorhanden sind.

Wenn Sie diesen Prozess ausprobieren möchten, können Sie die [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Erweiterung verwenden. Richten Sie Firefox so ein, dass es eine der in diesem Beispiel unterstützten Sprachen anzeigt (Deutsch, Niederländisch oder Japanisch). Laden Sie die Erweiterung und gehen Sie zu einer Website. Klicken Sie auf einen Link, um die übersetzte Version der Benachrichtigung zu sehen, die die URL des Links meldet.
