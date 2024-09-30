---
title: Ihre erste Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

> [!NOTE]
> Wenn Sie mit den grundlegenden Konzepten von Browser-Erweiterungen vertraut sind, können Sie diesen Abschnitt überspringen und [sehen, wie Erweiterungsdateien zusammengefügt werden](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension). Dann verwenden Sie die [Referenzdokumentation](/de/docs/Mozilla/Add-ons/WebExtensions#reference), um mit dem Bau Ihrer Erweiterung zu beginnen. Besuchen Sie den [Firefox Extension Workshop](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension), um mehr über den Arbeitsablauf für das Testen, Veröffentlichen und die Erweiterungen für Firefox zu erfahren.

Dieser Artikel führt Sie Schritt für Schritt durch die Erstellung einer Erweiterung für Firefox. Die Erweiterung fügt eine rote Umrandung zu allen Seiten hinzu, die von "`mozilla.org`" oder deren Subdomains geladen werden.

Der Quellcode für dieses Beispiel ist auf GitHub verfügbar: <https://github.com/mdn/webextensions-examples/tree/main/borderify>.

## Schreiben der Erweiterung

Erstellen Sie an einem geeigneten Ort, beispielsweise im Verzeichnis `Documents`, ein neues Verzeichnis namens `borderify` und navigieren Sie dorthin. Sie können dies mit dem Dateiexplorer Ihres Computers oder einem [Befehlszeilenterminal](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line) tun. Das Verständnis, wie man das Befehlszeilenterminal nutzt, ist eine nützliche Fähigkeit, die Ihnen bei der Entwicklung fortgeschrittenerer Erweiterungen hilft. Verwenden Sie das Terminal, um das Verzeichnis folgendermaßen zu erstellen:

```bash
mkdir borderify
cd borderify
```

### manifest.json

Verwenden Sie einen geeigneten [Texteditor](/de/docs/Learn/Common_questions/Tools_and_setup/Available_text_editors), um eine neue Datei namens "manifest.json" direkt im "borderify"-Verzeichnis zu erstellen. Geben Sie ihr den folgenden Inhalt:

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

- Die ersten drei Schlüssel: [`manifest_version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) und [`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) sind obligatorisch und enthalten grundlegende Metadaten für die Erweiterung.
- [`description`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) ist optional, aber empfohlen: Es wird im Add-ons-Manager angezeigt.
- [`icons`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) ist optional, aber empfohlen: Es erlaubt Ihnen, ein Symbol für die Erweiterung anzugeben, das im Add-ons-Manager angezeigt wird.

Der interessanteste Schlüssel hier ist [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts), der Firefox anweist, ein Skript in Webseiten zu laden, deren URL einem bestimmten Muster entspricht. In diesem Fall bitten wir Firefox, ein Skript namens "borderify.js" in alle HTTP- oder HTTPS-Seiten zu laden, die von "mozilla.org" oder einer seiner Subdomains bereitgestellt werden.

- [Erfahren Sie mehr über Inhalts-Skripte.](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Erfahren Sie mehr über Übereinstimmungsmuster.](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).

> **Warning:** [In einigen Situationen müssen Sie eine ID für Ihre Erweiterung angeben](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/#when_do_you_need_an_add-on_id). Wenn Sie eine Add-on-ID angeben müssen, fügen Sie den Schlüssel [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) in die `manifest.json` ein und setzen Sie seine `gecko.id` Eigenschaft:
>
> ```json
> "browser_specific_settings": {
>   "gecko": {
>     "id": "borderify@example.com"
>   }
> }
> ```

### icons/border-48.png

Die Erweiterung sollte ein Symbol haben. Dieses wird neben dem Eintrag der Erweiterung im Add-ons-Manager angezeigt. Unsere manifest.json hat versprochen, dass wir ein Symbol bei "icons/border-48.png" haben würden.

Erstellen Sie das "icons"-Verzeichnis direkt im "borderify"-Verzeichnis. Speichern Sie dort ein Symbol namens "border-48.png". Sie können [das aus unserem Beispiel verwenden](https://raw.githubusercontent.com/mdn/webextensions-examples/main/borderify/icons/border-48.png), das aus dem Google Material Design Iconset stammt und unter den Bedingungen der [Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz verwendet wird.

Wenn Sie Ihr eigenes Symbol bereitstellen möchten, sollte es 48x48 Pixel groß sein. Sie könnten auch ein 96x96 Pixel großes Symbol für hochauflösende Anzeigen bereitstellen, und wenn Sie dies tun, wird es als die `96` Eigenschaft des `icons`-Objekts in manifest.json angegeben:

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

Alternativ könnten Sie hier eine SVG-Datei bereitstellen, und sie wird korrekt skaliert. (Allerdings: Wenn Sie SVG verwenden und Ihr Symbol Text enthält, möchten Sie möglicherweise das "In Pfad umwandeln"-Werkzeug Ihres SVG-Editors verwenden, um den Text zu glätten, damit er mit einer konsistenten Größe / Position skaliert wird.)

- [Erfahren Sie mehr über das Angeben von Symbolen.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

Erstellen Sie schließlich eine Datei namens "borderify.js" direkt im "borderify"-Verzeichnis. Geben Sie ihr diesen Inhalt:

```js
document.body.style.border = "5px solid red";
```

Dieses Skript wird in die Seiten geladen, die dem im `content_scripts` manifest.json Schlüssel angegebenen Muster entsprechen. Das Skript hat direkten Zugriff auf das Dokument, genau wie Skripte, die von der Seite selbst geladen werden.

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

In Firefox: Öffnen Sie die Seite [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html), klicken Sie auf die Option This Firefox, klicken Sie auf die Schaltfläche Temporäres Add-on laden und wählen Sie dann eine Datei im Verzeichnis Ihrer Erweiterung aus.

Die Erweiterung wird jetzt installiert und bleibt bis zum Neustart von Firefox installiert.

Alternativ können Sie die Erweiterung von der Befehlszeile aus mit dem [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) Tool ausführen.

### Testen

> [!NOTE]
> Standardmäßig [funktionieren Erweiterungen nicht im privaten Modus](https://support.mozilla.org/en-US/kb/extensions-private-browsing). Wenn Sie diese Erweiterung im privaten Modus testen möchten, öffnen Sie "`about:addons`", klicken Sie auf die Erweiterung und wählen Sie die Option Erlauben für Ausführung in privaten Fenstern.

Besuchen Sie nun eine Seite unter "`https://www.mozilla.org/en-US/`", und Sie sollten die rote Umrandung um die Seite sehen.

![Umrandung auf mozilla.org angezeigt](border_on_mozilla_org.png)

> [!NOTE]
> Probieren Sie es aber nicht auf "`addons.mozilla.org`" aus! Inhalts-Skripte sind derzeit auf dieser Domain blockiert.

Versuchen Sie ein wenig zu experimentieren. Bearbeiten Sie das Inhalts-Skript, um die Farbe der Umrandung zu ändern, oder machen Sie etwas anderes mit dem Seiteninhalt. Speichern Sie das Inhalts-Skript und laden Sie die Dateien der Erweiterung neu, indem Sie die Schaltfläche Neu laden in "`about:debugging`" klicken. Sie können die Änderungen sofort sehen.

- [Erfahren Sie mehr über das Laden von Erweiterungen](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

## Verpacken und Veröffentlichen

Damit andere Personen Ihre Erweiterung verwenden können, müssen Sie sie verpacken und zur Unterzeichnung bei Mozilla einreichen. Um mehr darüber zu erfahren, sehen Sie ["Veröffentlichen Ihrer Erweiterung"](https://extensionworkshop.com/documentation/publish/package-your-extension/).

## Was kommt als Nächstes?

Jetzt haben Sie eine Einführung in den Prozess der Entwicklung einer WebExtension für Firefox erhalten:

- [schreiben Sie eine komplexere Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension)
- [lesen Sie mehr über die Anatomie einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [erkunden Sie die Erweiterungsbeispiele](/de/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [finden Sie heraus, was Sie benötigen, um Ihre Erweiterung zu entwickeln, zu testen und zu veröffentlichen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [vertiefen Sie Ihr Lernen weiter](/de/docs/Mozilla/Add-ons/WebExtensions/What_next#continue_your_learning_experience).
