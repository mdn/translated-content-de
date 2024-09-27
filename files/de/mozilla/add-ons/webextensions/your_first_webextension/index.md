---
title: Ihre erste Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

> [!NOTE]
> Wenn Sie mit den grundlegenden Konzepten von Browser-Erweiterungen vertraut sind, überspringen Sie diesen Abschnitt und [sehen Sie, wie Erweiterungsdateien zusammengestellt werden](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension). Verwenden Sie dann die [Referenzdokumentation](/de/docs/Mozilla/Add-ons/WebExtensions#reference), um mit der Entwicklung Ihrer Erweiterung zu beginnen. Besuchen Sie den [Firefox Extension Workshop](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension), um mehr über den Workflow für das Testen, Veröffentlichen und Erweiterungen für Firefox zu erfahren.

Dieser Artikel führt Sie Schritt für Schritt durch die Erstellung einer Erweiterung für Firefox. Die Erweiterung fügt jeder Seite, die von "`mozilla.org`" oder einer ihrer Subdomains geladen wird, einen roten Rahmen hinzu.

Der Quellcode für dieses Beispiel befindet sich auf GitHub: <https://github.com/mdn/webextensions-examples/tree/main/borderify>.

## Schreiben der Erweiterung

Erstellen Sie an einem geeigneten Ort, z.B. im `Dokumente`-Verzeichnis, ein neues Verzeichnis namens `borderify` und navigieren Sie dorthin. Sie können dies mit dem Dateiexplorer Ihres Computers oder einem [Kommandozeilen-Terminal](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line) tun. Das Verständnis, wie man das Kommandozeilen-Terminal verwendet, ist eine nützliche Fähigkeit, da es Ihnen bei der fortgeschritteneren Entwicklung von Erweiterungen hilft. Mit dem Terminal erstellen Sie das Verzeichnis folgendermaßen:

```bash
mkdir borderify
cd borderify
```

### manifest.json

Verwenden Sie einen geeigneten [Texteditor](/de/docs/Learn/Common_questions/Tools_and_setup/Available_text_editors), um eine neue Datei namens "manifest.json" direkt im "borderify"-Verzeichnis zu erstellen. Geben Sie ihm folgenden Inhalt:

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
- [`description`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) ist optional, aber empfehlenswert: Es wird im Add-ons-Manager angezeigt.
- [`icons`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) ist optional, aber empfehlenswert: damit können Sie ein Symbol für die Erweiterung angeben, das im Add-ons-Manager angezeigt wird.

Der interessanteste Schlüssel hier ist [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts), der Firefox anweist, ein Skript in Webseiten zu laden, deren URL einem bestimmten Muster entspricht. In diesem Fall bitten wir Firefox, ein Skript namens "borderify.js" in alle HTTP- oder HTTPS-Seiten zu laden, die von "mozilla.org" oder irgendeiner ihrer Subdomains bedient werden.

- [Mehr über Inhalts-Skripte erfahren.](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Mehr über Übereinstimmungsmuster erfahren](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).

> **Warnung:** [In einigen Situationen müssen Sie eine ID für Ihre Erweiterung angeben](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/#when_do_you_need_an_add-on_id). Wenn Sie eine Add-on-ID angeben müssen, fügen Sie den Schlüssel [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) in `manifest.json` hinzu und setzen Sie seine `gecko.id`-Eigenschaft:
>
> ```json
> "browser_specific_settings": {
>   "gecko": {
>     "id": "borderify@example.com"
>   }
> }
> ```

### icons/border-48.png

Die Erweiterung sollte ein Symbol haben. Dieses wird neben der Auflistung der Erweiterung im Add-ons-Manager angezeigt. Unser manifest.json hat versprochen, dass wir ein Symbol unter "icons/border-48.png" haben würden.

Erstellen Sie das "icons"-Verzeichnis direkt im "borderify"-Verzeichnis. Speichern Sie dort ein Symbol mit dem Namen "border-48.png". Sie könnten [das aus unserem Beispiel](https://raw.githubusercontent.com/mdn/webextensions-examples/main/borderify/icons/border-48.png) verwenden, das aus dem Google Material Design Ikonset stammt und unter den Bedingungen der [Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz verwendet wird.

Wenn Sie sich entscheiden, Ihr eigenes Symbol zu liefern, sollte es 48x48 Pixel groß sein. Sie könnten auch ein 96x96 Pixel großes Symbol für hochauflösende Anzeigen zusätzlich anbieten, und wenn Sie dies tun, wird es in manifest.json als `96`-Eigenschaft des `icons`-Objekts angegeben:

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

Alternativ könnten Sie hier eine SVG-Datei bereitstellen, die korrekt skaliert wird. (Allerdings: Wenn Sie SVG verwenden und Ihr Symbol Text enthält, sollten Sie das Tool "In Pfad umwandeln" Ihres SVG-Editors verwenden, um den Text zu flatten, damit er mit einer konsistenten Größe/Position skaliert wird.)

- [Mehr über die Angabe von Symbolen erfahren.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

Erstellen Sie schließlich eine Datei namens "borderify.js" direkt im "borderify"-Verzeichnis. Geben Sie ihr diesen Inhalt:

```js
document.body.style.border = "5px solid red";
```

Dieses Skript wird auf die Seiten geladen, die dem im Schlüssel `content_scripts` von manifest.json aufgeführten Muster entsprechen. Das Skript hat direkten Zugriff auf das Dokument, genau wie Skripte, die von der Seite selbst geladen werden.

- [Mehr über Inhalts-Skripte erfahren.](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)

## Ausprobieren

Überprüfen Sie zunächst, ob Sie die richtigen Dateien an den richtigen Stellen haben:

```plain
borderify/
    icons/
        border-48.png
    borderify.js
    manifest.json
```

### Installation

In Firefox: Öffnen Sie die Seite [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html), klicken Sie auf die "This Firefox"-Option, klicken Sie auf die Schaltfläche "Load Temporary Add-on" und wählen Sie dann eine Datei im Verzeichnis Ihrer Erweiterung aus.

Die Erweiterung wird jetzt installiert und bleibt installiert, bis Sie Firefox neu starten.

Alternativ können Sie die Erweiterung mit dem [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)-Tool von der Kommandozeile ausführen.

### Testen

> [!NOTE]
> Standardmäßig [funktionieren Erweiterungen nicht im privaten Modus](https://support.mozilla.org/en-US/kb/extensions-private-browsing). Wenn Sie diese Erweiterung im privaten Modus testen möchten, öffnen Sie "`about:addons`", klicken Sie auf die Erweiterung und wählen Sie die Radio-Schaltfläche "Erlauben" für "Im privaten Fenster ausführen".

Besuchen Sie nun eine Seite unter "`https://www.mozilla.org/en-US/`", und Sie sollten den roten Rahmen um die Seite sehen.

![Rahmen auf mozilla.org angezeigt](border_on_mozilla_org.png)

> [!NOTE]
> Versuchen Sie es jedoch nicht auf "`addons.mozilla.org`"! Dort sind Inhaltsskripte derzeit blockiert.

Versuchen Sie ein wenig zu experimentieren. Ändern Sie das Inhaltsskript, um die Farbe des Rahmens zu ändern, oder tun Sie etwas anderes mit dem Seiteninhalt. Speichern Sie das Inhaltsskript und laden Sie dann die Dateien der Erweiterung neu, indem Sie die Schaltfläche "Reload" in "`about:debugging`" anklicken. Sie können die Änderungen sofort sehen.

- [Mehr über das Laden von Erweiterungen erfahren](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

## Verpacken und Veröffentlichen

Damit andere Ihre Erweiterung verwenden können, müssen Sie sie verpacken und zur Signierung an Mozilla übermitteln. Um mehr darüber zu erfahren, sehen Sie ["Veröffentlichen Ihrer Erweiterung"](https://extensionworkshop.com/documentation/publish/package-your-extension/).

## Was kommt als nächstes?

Nun haben Sie eine Einführung in den Prozess der Entwicklung einer WebExtension für Firefox gehabt:

- [schreiben Sie eine komplexere Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension)
- [lesen Sie mehr über den Aufbau einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [erkunden Sie die Erweiterungsbeispiele](/de/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [finden Sie heraus, was Sie benötigen, um Ihre Erweiterung zu entwickeln, zu testen und zu veröffentlichen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [vertiefen Sie Ihr Lernen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next#continue_your_learning_experience).
