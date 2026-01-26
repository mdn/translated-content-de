---
title: Ihre erste Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

> [!NOTE]
> Wenn Sie mit den grundlegenden Konzepten von Browser-Erweiterungen vertraut sind, überspringen Sie diesen Abschnitt und sehen Sie sich [an, wie Erweiterungsdateien zusammengefügt werden](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension). Verwenden Sie dann die [Referenzdokumentation](/de/docs/Mozilla/Add-ons/WebExtensions#reference), um mit der Erstellung Ihrer Erweiterung zu beginnen. Besuchen Sie den [Firefox Extension Workshop](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension), um mehr über den Workflow für das Testen, Veröffentlichen und die Erweiterungen für Firefox zu erfahren.

Dieser Artikel führt Sie durch die Erstellung einer Erweiterung für Firefox von Anfang bis Ende. Die Erweiterung fügt allen Seiten, die von `mozilla.org` oder seinen Subdomains geladen werden, einen roten Rahmen hinzu.

Der Quellcode für dieses Beispiel befindet sich auf GitHub: <https://github.com/mdn/webextensions-examples/tree/main/borderify>.

## Die Erweiterung schreiben

Erstellen Sie an einem geeigneten Ort, zum Beispiel im Verzeichnis `Documents`, ein neues Verzeichnis namens `borderify` und navigieren Sie dorthin. Sie können dies mit dem Datei-Explorer Ihres Computers oder einem [Befehlszeilen-Terminal](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) tun. Das Verständnis, wie man das Befehlszeilen-Terminal verwendet, ist eine nützliche Fähigkeit, da es Ihnen bei der fortgeschrittenen Erweiterungsentwicklung hilft. Verwenden Sie das Terminal, um das Verzeichnis so zu erstellen:

```bash
mkdir borderify
cd borderify
```

### manifest.json

Verwenden Sie einen geeigneten [Texteditor](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors), um eine neue Datei namens "manifest.json" direkt unter dem Verzeichnis "borderify" zu erstellen. Geben Sie ihr den folgenden Inhalt:

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

- Die ersten drei Schlüssel: [`manifest_version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) und [`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version), sind zwingend erforderlich und enthalten grundlegende Metadaten für die Erweiterung.
- [`description`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) ist optional, aber empfohlen: Es wird im Add-on-Manager angezeigt.
- [`icons`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) ist optional, aber empfohlen: Es erlaubt Ihnen, ein Symbol für die Erweiterung anzugeben, das im Add-on-Manager angezeigt wird.

Der interessanteste Schlüssel hier ist [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts), der Firefox anweist, ein Skript in Webseiten zu laden, deren URL einem bestimmten Muster entspricht. In diesem Fall bitten wir Firefox, ein Skript namens "borderify.js" auf alle HTTP- oder HTTPS-Seiten zu laden, die von "mozilla.org" oder seinen Subdomains bereitgestellt werden.

- [Erfahren Sie mehr über Inhalts-Skripte.](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Erfahren Sie mehr über Musterabgleich](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).

> [!WARNING]
> [In einigen Situationen müssen Sie eine ID für Ihre Erweiterung angeben](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/#when_do_you_need_an_add-on_id). Wenn Sie eine Add-on-ID angeben müssen, fügen Sie den Schlüssel [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) in `manifest.json` ein und setzen Sie seine `gecko.id`-Eigenschaft:
>
> ```json
> "browser_specific_settings": {
>   "gecko": {
>     "id": "borderify@example.com"
>   }
> }
> ```

### icons/border-48.png

Die Erweiterung sollte ein Symbol haben. Dieses wird neben der Auflistung der Erweiterung im Add-on-Manager angezeigt. Unsere manifest.json hat versprochen, dass wir ein Symbol unter "icons/border-48.png" haben würden.

Erstellen Sie das Verzeichnis "icons" direkt unter dem Verzeichnis "borderify". Speichern Sie dort ein Symbol namens "border-48.png". Sie können [das aus unserem Beispiel](https://raw.githubusercontent.com/mdn/webextensions-examples/main/borderify/icons/border-48.png) verwenden, das aus dem Google Material Design Icon-Set stammt und unter den Bedingungen der [Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/)-Lizenz verwendet wird.

Wenn Sie sich dafür entscheiden, Ihr eigenes Symbol bereitzustellen, sollte es eine Größe von 48x48 Pixeln haben. Sie könnten auch ein 96x96-Pixel-Symbol für hochauflösende Bildschirme bereitstellen, und wenn Sie dies tun, wird es als `96`-Eigenschaft des `icons`-Objekts in manifest.json angegeben:

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

Alternativ könnten Sie eine SVG-Datei bereitstellen, und sie wird korrekt skaliert. (Wenn Sie SVG verwenden und Ihr Symbol Text enthält, möchten Sie möglicherweise das Werkzeug "Umwandeln in Pfad" Ihres SVG-Editors verwenden, um den Text abzuflachen, sodass er mit einer konsistenten Größe/Position skaliert wird.)

- [Erfahren Sie mehr über das Angeben von Symbolen.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

Erstellen Sie schließlich eine Datei namens "borderify.js" direkt unter dem Verzeichnis "borderify". Geben Sie ihr diesen Inhalt:

```js
document.body.style.border = "5px solid red";
```

Dieses Skript wird in die Seiten geladen, die dem im `content_scripts`-Schlüssel von manifest.json angegebenen Muster entsprechen. Das Skript hat direkten Zugriff auf die Webseite, genau wie von der Seite selbst geladene Skripte.

- [Erfahren Sie mehr über Inhalts-Skripte.](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)

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

In Firefox: Öffnen Sie die Seite [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html), klicken Sie auf die Option This Firefox, klicken Sie auf die Schaltfläche Temporäres Add-on laden und wählen Sie dann eine beliebige Datei in Ihrem Erweiterungsverzeichnis aus.

Die Erweiterung wird nun installiert und bleibt installiert, bis Sie Firefox neu starten.

Alternativ können Sie die Erweiterung mit dem [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)-Tool von der Befehlszeile ausführen.

### Testen

> [!NOTE]
> Standardmäßig [funktionieren Erweiterungen im privaten Modus nicht](https://support.mozilla.org/en-US/kb/extensions-private-browsing). Wenn Sie diese Erweiterung im privaten Modus testen möchten, öffnen Sie `about:addons`, klicken Sie auf die Erweiterung und wählen Sie die Option Lauf in privaten Fenstern zulassen.

Besuchen Sie nun eine Seite unter `https://www.mozilla.org/en-US/`, und Sie sollten den roten Rahmen um die Seite sehen.

![Rahmen auf mozilla.org angezeigt](border_on_mozilla_org.png)

> [!NOTE]
> Versuchen Sie es jedoch nicht auf `addons.mozilla.org`! Inhalts-Skripte sind derzeit auf dieser Domain blockiert.

Experimentieren Sie ein wenig. Bearbeiten Sie das Inhalts-Skript, um die Farbe des Rahmens zu ändern, oder um etwas anderes mit dem Seiteninhalt zu machen. Speichern Sie das Inhalts-Skript und laden Sie dann die Dateien der Erweiterung, indem Sie auf die Schaltfläche Laden in `about:debugging` klicken. Sie können die Änderungen sofort sehen.

- [Erfahren Sie mehr über das Laden von Erweiterungen](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

## Verpackung und Veröffentlichung

Damit andere Ihre Erweiterung nutzen können, müssen Sie sie verpacken und bei Mozilla zur Signierung einreichen. Um mehr darüber zu erfahren, sehen Sie sich ["Ihre Erweiterung veröffentlichen"](https://extensionworkshop.com/documentation/publish/package-your-extension/) an.

## Was kommt als nächstes?

Jetzt haben Sie eine Einführung in den Prozess der Entwicklung einer WebExtension für Firefox erhalten:

- [schreiben Sie eine komplexere Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension)
- [lesen Sie mehr über den Aufbau einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [erforschen Sie die Erweiterungsbeispiele](/de/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [finden Sie heraus, was Sie benötigen, um Ihre Erweiterung zu entwickeln, zu testen und zu veröffentlichen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [vertiefen Sie Ihre Lernerfahrung](/de/docs/Mozilla/Add-ons/WebExtensions/What_next#continue_your_learning_experience).
