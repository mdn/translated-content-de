---
title: Ihre erste Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

> [!NOTE]
> Wenn Sie mit den grundlegenden Konzepten von Browser-Erweiterungen vertraut sind, können Sie diesen Abschnitt überspringen und sich [anschauen, wie Erweiterungsdateien zusammengefügt werden](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension). Verwenden Sie dann die [Referenzdokumentation](/de/docs/Mozilla/Add-ons/WebExtensions#reference), um mit dem Bau Ihrer Erweiterung zu beginnen. Besuchen Sie den [Firefox Extension Workshop](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension), um mehr über den Arbeitsablauf für das Testen, Veröffentlichen und Erweiterungen für Firefox zu erfahren.

Dieser Artikel führt Sie durch die Erstellung einer Erweiterung für Firefox, von Anfang bis Ende. Die Erweiterung fügt allen Seiten, die von `mozilla.org` oder einem seiner Subdomains geladen werden, einen roten Rahmen hinzu.

Der Quellcode für dieses Beispiel befindet sich auf GitHub: <https://github.com/mdn/webextensions-examples/tree/main/borderify>.

## Schreiben der Erweiterung

Erstellen Sie an einem geeigneten Ort, z. B. im `Documents`-Verzeichnis, ein neues Verzeichnis namens `borderify` und navigieren Sie dorthin. Dies können Sie mit dem Dateimanager Ihres Computers oder einem [Kommandozeilen-Terminal](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) tun. Das Beherrschen eines Kommandozeilen-Terminals ist eine nützliche Fähigkeit, da es Ihnen bei der weiterführenden Entwicklung von Erweiterungen hilft. Mit dem Terminal erstellen Sie das Verzeichnis folgendermaßen:

```bash
mkdir borderify
cd borderify
```

### manifest.json

Verwenden Sie einen geeigneten [Texteditor](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors), um eine neue Datei namens "manifest.json" direkt im "borderify"-Verzeichnis zu erstellen. Geben Sie ihr den folgenden Inhalt:

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
- [`description`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) ist optional, aber empfehlenswert: Es wird im Add-on Manager angezeigt.
- [`icons`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) ist optional, aber empfehlenswert: Es ermöglicht Ihnen, ein Symbol für die Erweiterung anzugeben, das im Add-on Manager angezeigt wird.

Der interessanteste Schlüssel hier ist [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts), der Firefox anweist, ein Skript in Webseiten zu laden, deren URL einem bestimmten Muster entspricht. In diesem Fall bitten wir Firefox, ein Skript namens "borderify.js" in alle HTTP- oder HTTPS-Seiten zu laden, die von "mozilla.org" oder einem seiner Subdomains bereitgestellt werden.

- [Mehr über Inhaltsskripte erfahren.](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Mehr über Mustermatching erfahren](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).

> [!WARNING]
> [In einigen Situationen müssen Sie eine ID für Ihre Erweiterung angeben](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/#when_do_you_need_an_add-on_id). Wenn Sie eine Add-on-ID angeben müssen, fügen Sie den Schlüssel [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) in `manifest.json` ein und setzen dessen `gecko.id`-Eigenschaft:
>
> ```json
> "browser_specific_settings": {
>   "gecko": {
>     "id": "borderify@example.com"
>   }
> }
> ```

### icons/border-48.png

Die Erweiterung sollte ein Symbol haben. Dieses wird neben dem Eintrag der Erweiterung im Add-ons Manager angezeigt. Unser manifest.json hat versprochen, dass wir ein Symbol unter "icons/border-48.png" haben würden.

Erstellen Sie das Verzeichnis "icons" direkt unter dem "borderify"-Verzeichnis. Speichern Sie dort ein Symbol mit dem Namen "border-48.png". Sie könnten [das aus unserem Beispiel verwenden](https://raw.githubusercontent.com/mdn/webextensions-examples/main/borderify/icons/border-48.png), welches aus dem Google Material Design Iconset stammt und unter den Bedingungen der [Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz verwendet wird.

Sollten Sie Ihr eigenes Symbol bereitstellen, sollte es 48x48 Pixel groß sein. Sie könnten auch ein 96x96 Pixel großes Symbol für hochauflösende Bildschirme bereitstellen, und wenn Sie dies tun, wird es als `96`-Eigenschaft des `icons`-Objekts in manifest.json angegeben:

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

Alternativ könnten Sie hier eine SVG-Datei bereitstellen, und sie wird korrekt skaliert. (Wenn Sie jedoch SVG verwenden und Ihr Symbol Text enthält, möchten Sie möglicherweise das Werkzeug "In Pfad umwandeln" Ihres SVG-Editors verwenden, um den Text zu glätten, sodass er konsistent groß/positioniert skaliert wird.)

- [Mehr über das Angeben von Symbolen erfahren.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

Erstellen Sie schließlich eine Datei namens "borderify.js" direkt im "borderify"-Verzeichnis. Geben Sie ihr diesen Inhalt:

```js
document.body.style.border = "5px solid red";
```

Dieses Skript wird in die Seiten geladen, die den im `content_scripts` manifest.json-Schlüssel angegebenen Muster entsprechen. Das Skript hat direkten Zugriff auf das Dokument, genau wie Skripte, die von der Seite selbst geladen werden.

- [Mehr über Inhaltsskripte erfahren.](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)

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

In Firefox: Öffnen Sie die Seite [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html), klicken Sie auf die Option This Firefox, klicken Sie auf die Schaltfläche Load Temporary Add-on und wählen Sie dann eine beliebige Datei im Verzeichnis Ihrer Erweiterung aus.

Die Erweiterung wird jetzt installiert und bleibt installiert, bis Sie Firefox neu starten.

Alternativ können Sie die Erweiterung auch über die Befehlszeile mit dem [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) Tool starten.

### Testen

> [!NOTE]
> Standardmäßig [funktionieren Erweiterungen nicht im privaten Modus](https://support.mozilla.org/en-US/kb/extensions-private-browsing). Wenn Sie diese Erweiterung im privaten Modus testen möchten, öffnen Sie `about:addons`, klicken Sie auf die Erweiterung und wählen Sie die Radio-Schaltfläche Erlauben für Im privaten Fenster ausführen aus.

Besuchen Sie nun eine Seite unter `https://www.mozilla.org/en-US/`, und Sie sollten den roten Rahmen um die Seite sehen.

![Rahmen auf mozilla.org angezeigt](border_on_mozilla_org.png)

> [!NOTE]
> Versuchen Sie es nicht auf `addons.mozilla.org`, jedoch! Inhaltsskripte sind derzeit auf dieser Domain blockiert.

Experimentieren Sie ein wenig. Bearbeiten Sie das Inhaltsskript, um die Farbe des Rahmens zu ändern oder etwas anderes am Seiteninhalt zu tun. Speichern Sie das Inhaltsskript und laden Sie dann die Erweiterungsdateien, indem Sie in `about:debugging` auf die Schaltfläche Reload klicken. Sie können die Änderungen sofort sehen.

- [Mehr über das Laden von Erweiterungen erfahren](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

## Verpacken und Veröffentlichen

Damit andere Menschen Ihre Erweiterung verwenden können, müssen Sie sie verpacken und zur Signierung bei Mozilla einreichen. Um mehr darüber zu erfahren, lesen Sie ["Veröffentlichen Ihrer Erweiterung"](https://extensionworkshop.com/documentation/publish/package-your-extension/).

## Was kommt als Nächstes?

Jetzt haben Sie eine Einführung in den Prozess der Entwicklung einer WebExtension für Firefox erhalten:

- [schreiben Sie eine komplexere Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension)
- [lesen Sie mehr über den Aufbau einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [erkunden Sie die Erweiterungsbeispiele](/de/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [finden Sie heraus, was Sie benötigen, um Ihre Erweiterung zu entwickeln, zu testen und zu veröffentlichen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [vertiefen Sie Ihr Lernen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next#continue_your_learning_experience).
