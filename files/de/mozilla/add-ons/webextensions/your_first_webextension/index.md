---
title: Ihre erste Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

> [!NOTE]
> Wenn Sie mit den grundlegenden Konzepten von Browsererweiterungen vertraut sind, überspringen Sie diesen Abschnitt und [sehen Sie, wie Erweiterungsdateien zusammengefügt werden](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension). Verwenden Sie dann die [Referenzdokumentation](/de/docs/Mozilla/Add-ons/WebExtensions#reference), um mit der Erstellung Ihrer Erweiterung zu beginnen. Besuchen Sie [Firefox Extension Workshop](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension), um mehr über den Workflow für das Testen, Veröffentlichen und für Erweiterungen für Firefox zu erfahren.

Dieser Artikel führt Sie Schritt für Schritt durch die Erstellung einer Erweiterung für Firefox. Die Erweiterung fügt jede Seite, die von "`mozilla.org`" oder einer ihrer Subdomains geladen wird, einen roten Rand hinzu.

Der Quellcode für dieses Beispiel befindet sich auf GitHub: <https://github.com/mdn/webextensions-examples/tree/main/borderify>.

## Schreiben der Erweiterung

Erstellen Sie an einem geeigneten Ort, z. B. im Verzeichnis `Documents`, ein neues Verzeichnis mit dem Namen `borderify` und navigieren Sie dorthin. Dies können Sie mit dem Dateiexplorer Ihres Computers oder dem [Kommandozeilen-Terminal](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line) tun. Zu lernen, wie man das Kommandozeilen-Terminal benutzt, ist eine nützliche Fähigkeit, die Ihnen bei der fortgeschritteneren Erweiterungsentwicklung hilft. Mit dem Terminal erstellen Sie das Verzeichnis so:

```bash
mkdir borderify
cd borderify
```

### manifest.json

Erstellen Sie mit einem geeigneten [Texteditor](/de/docs/Learn/Common_questions/Tools_and_setup/Available_text_editors) eine neue Datei namens "manifest.json" direkt im "borderify"-Verzeichnis. Geben Sie ihr folgenden Inhalt:

```json
{
  "manifest_version": 2,
  "name": "Borderify",
  "version": "1.0",

  "description": "Adds a red border to all webpages matching mozilla.org.",

  "icons": {
    "48": "icons/border-48.png"
  },

  "content_scripts": [
    {
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ]
}
```

- Die ersten drei Schlüssel: [`manifest_version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) und [`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version), sind obligatorisch und enthalten grundlegende Metadaten für die Erweiterung.
- [`description`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) ist optional, aber empfohlen: Sie wird im Add-ons-Manager angezeigt.
- [`icons`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) ist optional, aber empfohlen: Sie ermöglicht es, ein Symbol für die Erweiterung anzugeben, das im Add-ons-Manager angezeigt wird.

Der interessanteste Schlüssel hier ist [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts), der Firefox anweist, ein Skript in Webseiten zu laden, deren URL einem bestimmten Muster entspricht. In diesem Fall bitten wir Firefox, ein Skript namens "borderify.js" in alle HTTP- oder HTTPS-Seiten zu laden, die von "mozilla.org" oder einer ihrer Subdomains bereitgestellt werden.

- [Erfahren Sie mehr über Content-Skripte.](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Erfahren Sie mehr über Matching-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).

> **Warning:** [In manchen Situationen müssen Sie für Ihre Erweiterung eine ID angeben](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/#when_do_you_need_an_add-on_id). Wenn Sie eine Add-on-ID angeben müssen, fügen Sie den Schlüssel [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) in `manifest.json` ein und setzen Sie seine `gecko.id`-Eigenschaft:
>
> ```json
> "browser_specific_settings": {
>   "gecko": {
>     "id": "borderify@example.com"
>   }
> }
> ```

### icons/border-48.png

Die Erweiterung sollte ein Symbol haben. Dies wird neben der Auflistung der Erweiterung im Add-ons-Manager angezeigt. Unser manifest.json versprach, dass wir ein Symbol bei "icons/border-48.png" haben würden.

Erstellen Sie das Verzeichnis "icons" direkt unter dem Verzeichnis "borderify". Speichern Sie dort ein Symbol mit dem Namen "border-48.png". Sie können das [Symbol aus unserem Beispiel](https://raw.githubusercontent.com/mdn/webextensions-examples/main/borderify/icons/border-48.png) verwenden, das aus dem Google Material Design Iconset stammt und unter den Bedingungen der [Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz verwendet wird.

Wenn Sie Ihr eigenes Symbol verwenden möchten, sollte es 48x48 Pixel groß sein. Sie könnten auch ein 96x96 Pixel großes Symbol für hochauflösende Bildschirme bereitstellen, und wenn Sie dies tun, wird es als die `96`-Eigenschaft des `icons`-Objekts in manifest.json angegeben:

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

Alternativ können Sie hier eine SVG-Datei bereitstellen, die dann korrekt skaliert wird. (Beachten Sie: Wenn Sie SVG verwenden und Ihr Symbol Text enthält, sollten Sie das „In Pfad umwandeln“-Werkzeug Ihres SVG-Editors verwenden, um den Text zu glätten, sodass er mit gleichbleibender Größe/Position skaliert wird.)

- [Erfahren Sie mehr über das Festlegen von Symbolen.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

Erstellen Sie schließlich eine Datei namens "borderify.js" direkt im Verzeichnis "borderify". Versehen Sie sie mit diesem Inhalt:

```js
document.body.style.border = "5px solid red";
```

Dieses Skript wird in die Seiten geladen, die dem im Schlüssel `content_scripts` in manifest.json angegebenen Muster entsprechen. Das Skript hat direkten Zugriff auf das Dokument, genau wie Skripte, die von der Seite selbst geladen werden.

- [Erfahren Sie mehr über Content-Skripte.](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)

## Es ausprobieren

Überprüfen Sie zunächst, ob Sie die richtigen Dateien an den richtigen Stellen haben:

```plain
borderify/
    icons/
        border-48.png
    borderify.js
    manifest.json
```

### Installation

In Firefox: Öffnen Sie die Seite [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html), klicken Sie auf die Option This Firefox, klicken Sie auf die Schaltfläche Temporäres Add-on laden, und wählen Sie dann eine beliebige Datei im Verzeichnis Ihrer Erweiterung aus.

Die Erweiterung wird nun installiert und bleibt installiert, bis Sie Firefox neu starten.

Alternativ können Sie die Erweiterung über die Kommandozeile mit dem [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) Tool ausführen.

### Testen

> [!NOTE]
> Standardmäßig [funktionieren Erweiterungen nicht im privaten Modus](https://support.mozilla.org/en-US/kb/extensions-private-browsing). Wenn Sie diese Erweiterung im privaten Modus testen möchten, öffnen Sie "`about:addons`", klicken Sie auf die Erweiterung und wählen Sie die Option Erlauben für Im privaten Fenster ausführen.

Besuchen Sie nun eine Seite unter "`https://www.mozilla.org/en-US/`", und Sie sollten den roten Rand um die Seite sehen.

![Rand auf mozilla.org angezeigt](border_on_mozilla_org.png)

> [!NOTE]
> Versuchen Sie es nicht auf "`addons.mozilla.org`", da hier derzeit Content-Skripte blockiert sind.

Versuchen Sie ein wenig zu experimentieren. Bearbeiten Sie das Content-Skript, um die Farbe des Randes zu ändern, oder ändern Sie etwas anderes am Seiteninhalt. Speichern Sie das Content-Skript und laden Sie dann die Dateien der Erweiterung neu, indem Sie auf die Schaltfläche Neu laden in "`about:debugging`" klicken. Sie können die Änderungen sofort sehen.

- [Erfahren Sie mehr über das Laden von Erweiterungen](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

## Verpacken und Veröffentlichen

Damit andere Ihre Erweiterung nutzen können, müssen Sie sie verpacken und zur Signierung bei Mozilla einreichen. Um mehr darüber zu erfahren, siehe ["Veröffentlichen Ihrer Erweiterung"](https://extensionworkshop.com/documentation/publish/package-your-extension/).

## Was kommt als nächstes?

Jetzt haben Sie eine Einführung in den Prozess der Entwicklung einer WebExtension für Firefox erhalten:

- [schreiben Sie eine komplexere Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension)
- [lesen Sie mehr über den Aufbau einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [erkunden Sie die Erweiterungsbeispiele](/de/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [finden Sie heraus, was Sie benötigen, um Ihre Erweiterung zu entwickeln, zu testen und zu veröffentlichen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [führen Sie Ihr Lernen weiter fort](/de/docs/Mozilla/Add-ons/WebExtensions/What_next#continue_your_learning_experience).
