---
title: Ihre erste Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
l10n:
  sourceCommit: e13b6ffe7c9cb05c6a89fcb3c8fcbc987eb05211
---

{{AddonSidebar}}

> [!NOTE]
> Wenn Sie mit den grundlegenden Konzepten von Browser-Erweiterungen vertraut sind, überspringen Sie diesen Abschnitt, um [zu sehen, wie Erweiterungsdateien zusammengefügt werden](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension). Verwenden Sie dann die [Referenzdokumentation](/de/docs/Mozilla/Add-ons/WebExtensions#reference), um mit dem Erstellen Ihrer Erweiterung zu beginnen. Besuchen Sie den [Firefox Extension Workshop](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension), um mehr über den Arbeitsablauf für das Testen, Veröffentlichen und Erweiterungen für Firefox zu erfahren.

Dieser Artikel führt Sie Schritt für Schritt durch die Erstellung einer Erweiterung für Firefox. Die Erweiterung fügt allen Seiten, die von `mozilla.org` oder einem seiner Subdomains geladen werden, einen roten Rand hinzu.

Der Quellcode für dieses Beispiel befindet sich auf GitHub: <https://github.com/mdn/webextensions-examples/tree/main/borderify>.

## Die Erweiterung schreiben

Erstellen Sie an einem geeigneten Ort, z.B. im `Documents` Verzeichnis, ein neues Verzeichnis mit dem Namen `borderify` und navigieren Sie dorthin. Sie können dies mit dem Dateiexplorer Ihres Computers oder dem [Befehlszeilen-Terminal](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) tun. Das Verständnis, wie man das Befehlszeilen-Terminal benutzt, ist eine nützliche Fähigkeit, da es Ihnen bei der fortgeschritteneren Erweiterungsentwicklung hilft. Mit dem Terminal erstellen Sie das Verzeichnis so:

```bash
mkdir borderify
cd borderify
```

### manifest.json

Verwenden Sie einen geeigneten [Texteditor](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors), um eine neue Datei namens "manifest.json" direkt im "borderify"-Verzeichnis zu erstellen. Geben Sie ihr folgenden Inhalt:

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
- [`description`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) ist optional, aber empfohlen: Sie wird im Add-ons Manager angezeigt.
- [`icons`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) ist optional, aber empfohlen: Es erlaubt Ihnen, ein Symbol für die Erweiterung festzulegen, das im Add-ons Manager angezeigt wird.

Der interessanteste Schlüssel hier ist [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts), der Firefox anweist, ein Skript in Webseiten zu laden, deren URL einem bestimmten Muster entspricht. In diesem Fall bitten wir Firefox, ein Skript namens "borderify.js" in alle HTTP- oder HTTPS-Seiten zu laden, die von "mozilla.org" oder einem seiner Subdomains bereitgestellt werden.

- [Erfahren Sie mehr über Content-Skripte.](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Erfahren Sie mehr über Muster zur Übereinstimmung](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).

> **Warnung:** [In einigen Situationen müssen Sie eine ID für Ihre Erweiterung angeben](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/#when_do_you_need_an_add-on_id). Wenn Sie eine Add-on-ID angeben müssen, fügen Sie den Schlüssel [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) zu `manifest.json` hinzu und setzen Sie seine `gecko.id` Eigenschaft:
>
> ```json
> "browser_specific_settings": {
>   "gecko": {
>     "id": "borderify@example.com"
>   }
> }
> ```

### icons/border-48.png

Die Erweiterung sollte ein Symbol haben. Dies wird neben dem Eintrag der Erweiterung im Add-ons Manager angezeigt. Unser manifest.json versprach, ein Symbol unter "icons/border-48.png" zu haben.

Erstellen Sie das "icons"-Verzeichnis direkt unter dem "borderify"-Verzeichnis. Speichern Sie ein Symbol dort mit dem Namen "border-48.png". Sie können [das aus unserem Beispiel](https://raw.githubusercontent.com/mdn/webextensions-examples/main/borderify/icons/border-48.png) verwenden, das aus dem Google Material Design Iconset stammt und unter den Bedingungen der [Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz verwendet wird.

Wenn Sie sich entscheiden, Ihr eigenes Symbol bereitzustellen, sollte es 48x48 Pixel haben. Sie könnten auch ein 96x96 Pixel großes Symbol für hochauflösende Displays bereitstellen, und wenn Sie dies tun, wird es als `96`-Eigenschaft des `icons`-Objekts in manifest.json angegeben:

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

Alternativ könnten Sie hier eine SVG-Datei bereitstellen, und sie wird korrekt skaliert. (Allerdings: Wenn Sie SVG verwenden und Ihr Symbol Text enthält, möchten Sie möglicherweise das "in Pfad umwandeln"-Werkzeug Ihres SVG-Editors verwenden, um den Text zu plätten, damit er mit einer konsistenten Größe/Position skaliert.)

- [Erfahren Sie mehr über das Festlegen von Symbolen.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

Erstellen Sie schließlich eine Datei namens "borderify.js" direkt im "borderify"-Verzeichnis. Geben Sie ihr diesen Inhalt:

```js
document.body.style.border = "5px solid red";
```

Dieses Skript wird in die Seiten geladen, die dem im `content_scripts` manifest.json Schlüssel angegebenen Muster entsprechen. Das Skript hat direkten Zugriff auf das Dokument, genau wie Skripte, die von der Seite selbst geladen wurden.

- [Erfahren Sie mehr über Content-Skripte.](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)

## Ausprobieren

Überprüfen Sie zuerst, dass Sie die richtigen Dateien an den richtigen Stellen haben:

```plain
borderify/
    icons/
        border-48.png
    borderify.js
    manifest.json
```

### Installation

In Firefox: Öffnen Sie die [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) Seite, klicken Sie auf die Option "This Firefox", klicken Sie auf die Schaltfläche "Load Temporary Add-on" und wählen Sie dann eine beliebige Datei im Verzeichnis Ihrer Erweiterung aus.

Die Erweiterung wird jetzt installiert und bleibt installiert, bis Sie Firefox neu starten.

Alternativ können Sie die Erweiterung mit dem [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) Tool von der Befehlszeile ausführen.

### Testen

> [!NOTE]
> Standardmäßig [funktionieren Erweiterungen im privaten Modus nicht](https://support.mozilla.org/en-US/kb/extensions-private-browsing). Wenn Sie diese Erweiterung im privaten Modus testen möchten, öffnen Sie `about:addons`, klicken Sie auf die Erweiterung und wählen Sie die Option "Erlauben" unter "Im privatem Fenster ausführen".

Besuchen Sie nun eine Seite unter `https://www.mozilla.org/en-US/`, und Sie sollten den roten Rand um die Seite sehen.

![Rand angezeigt auf mozilla.org](border_on_mozilla_org.png)

> [!NOTE]
> Versuchen Sie es jedoch nicht auf `addons.mozilla.org`! Content-Skripte sind derzeit auf dieser Domain blockiert.

Experimentieren Sie ein wenig. Bearbeiten Sie das Content-Skript, um die Farbe des Randes zu ändern oder etwas anderes am Seiteninhalt zu tun. Speichern Sie das Content-Skript und laden Sie die Dateien der Erweiterung neu, indem Sie die Schaltfläche "Reload" in `about:debugging` klicken. Sie können die Änderungen sofort sehen.

- [Erfahren Sie mehr über das Laden von Erweiterungen](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

## Verpacken und Veröffentlichen

Damit andere Personen Ihre Erweiterung verwenden können, müssen Sie sie verpacken und zur Signierung bei Mozilla einreichen. Um mehr darüber zu erfahren, lesen Sie ["Ihre Erweiterung veröffentlichen"](https://extensionworkshop.com/documentation/publish/package-your-extension/).

## Was kommt als nächstes?

Jetzt haben Sie eine Einführung in den Prozess der Entwicklung einer WebExtension für Firefox erhalten:

- [schreiben Sie eine komplexere Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension)
- [lesen Sie mehr über den Aufbau einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [erkunden Sie die Erweiterungsbeispiele](/de/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [finden Sie heraus, was Sie benötigen, um Ihre Erweiterung zu entwickeln, zu testen und zu veröffentlichen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [vertiefen Sie Ihr Lernen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next#continue_your_learning_experience).
