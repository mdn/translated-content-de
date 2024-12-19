---
title: Ihre erste Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{AddonSidebar}}

> [!NOTE]
> Wenn Sie mit den grundlegenden Konzepten von Browser-Erweiterungen vertraut sind, überspringen Sie diesen Abschnitt und gehen Sie direkt zu [Wie die Erweiterungsdateien zusammengestellt werden](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension). Verwenden Sie dann die [Referenzdokumentation](/de/docs/Mozilla/Add-ons/WebExtensions#reference), um mit dem Erstellen Ihrer Erweiterung zu beginnen. Besuchen Sie den [Firefox Extension Workshop](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension), um mehr über den Arbeitsablauf für das Testen, Veröffentlichen und die Erweiterungen für Firefox zu erfahren.

Dieser Artikel zeigt Schritt für Schritt, wie Sie eine Erweiterung für Firefox erstellen können. Die Erweiterung fügt eine rote Umrandung zu allen Seiten hinzu, die von "`mozilla.org`" oder einem der Subdomains geladen werden.

Der Quellcode für dieses Beispiel befindet sich auf GitHub: <https://github.com/mdn/webextensions-examples/tree/main/borderify>.

## Die Erweiterung schreiben

Erstellen Sie an einem geeigneten Ort, z.B. im `Dokuments`-Verzeichnis, ein neues Verzeichnis namens `borderify` und navigieren Sie dorthin. Sie können dies über den Dateiexplorer Ihres Computers oder [das Befehlszeilen-Terminal](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) tun. Zu wissen, wie man das Befehlszeilen-Terminal benutzt, ist eine nützliche Fähigkeit, da es Ihnen bei der fortgeschritteneren Entwicklung von Erweiterungen hilft. Über das Terminal erstellen Sie das Verzeichnis wie folgt:

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
- [`description`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) ist optional, aber empfehlenswert: Sie wird im Add-ons-Verwalter angezeigt.
- [`icons`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) ist optional, aber empfehlenswert: Es ermöglicht Ihnen, ein Symbol für die Erweiterung anzugeben, das im Add-ons-Verwalter angezeigt wird.

Der interessanteste Schlüssel hier ist [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts), der Firefox anweist, ein Skript in Webseiten zu laden, deren URL einem bestimmten Muster entspricht. In diesem Fall bitten wir Firefox, ein Skript namens "borderify.js" in alle HTTP- oder HTTPS-Seiten zu laden, die von "mozilla.org" oder einem seiner Subdomains bedient werden.

- [Erfahren Sie mehr über Content-Skripte.](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Erfahren Sie mehr über Abgleichmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns).

> **Warnung:** [In einigen Situationen müssen Sie eine ID für Ihre Erweiterung angeben](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/#when_do_you_need_an_add-on_id). Wenn Sie eine Add-on-ID angeben müssen, fügen Sie den Schlüssel [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) in `manifest.json` ein und setzen Sie seine `gecko.id`-Eigenschaft:
>
> ```json
> "browser_specific_settings": {
>   "gecko": {
>     "id": "borderify@example.com"
>   }
> }
> ```

### icons/border-48.png

Die Erweiterung sollte ein Symbol haben. Dieses wird neben dem Eintrag der Erweiterung im Add-ons-Verwalter angezeigt. Unser manifest.json versprach, dass wir ein Symbol unter "icons/border-48.png" haben würden.

Erstellen Sie das "icons"-Verzeichnis direkt im "borderify"-Verzeichnis. Speichern Sie dort ein Symbol mit dem Namen "border-48.png". Sie können [das aus unserem Beispiel](https://raw.githubusercontent.com/mdn/webextensions-examples/main/borderify/icons/border-48.png) verwenden, das aus dem Google Material Design Iconset stammt und unter den Bedingungen der [Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz verwendet wird.

Wenn Sie sich entscheiden, Ihr eigenes Symbol bereitzustellen, sollte es 48x48 Pixel groß sein. Sie könnten auch ein 96x96-Pixel-Symbol für hochauflösende Displays bereitstellen. Wenn Sie dies tun, wird es als `96`-Eigenschaft des `icons`-Objekts in manifest.json angegeben:

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

Alternativ könnten Sie hier eine SVG-Datei bereitstellen, und sie wird korrekt skaliert. (Wenn Sie SVG verwenden und Ihr Symbol Text enthält, möchten Sie möglicherweise das "zum Pfad konvertieren"-Werkzeug Ihres SVG-Editors verwenden, um den Text zu vereinfachen, sodass er mit einer konsistenten Größe/Position skaliert wird.)

- [Erfahren Sie mehr über das Angeben von Symbolen.](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

Erstellen Sie schließlich eine Datei namens "borderify.js" direkt im "borderify"-Verzeichnis. Geben Sie ihr diesen Inhalt:

```js
document.body.style.border = "5px solid red";
```

Dieses Skript wird in die Seiten geladen, die dem im `content_scripts` manifest.json-Schlüssel angegebenen Muster entsprechen. Das Skript hat direkten Zugriff auf das Dokument, genau wie Skripte, die von der Seite selbst geladen werden.

- [Erfahren Sie mehr über Content-Skripte.](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)

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

In Firefox: Öffnen Sie die Seite [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html), klicken Sie auf die Option „Dieses Firefox“, klicken Sie auf die Schaltfläche „Vorübergehendes Add-on laden“ und wählen Sie dann eine Datei im Verzeichnis Ihrer Erweiterung aus.

Die Erweiterung wird nun installiert und bleibt installiert, bis Sie Firefox neu starten.

Alternativ können Sie die Erweiterung über die Befehlszeile mit dem [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) Tool ausführen.

### Testen

> [!NOTE]
> Standardmäßig [funktionieren Erweiterungen nicht im privaten Modus](https://support.mozilla.org/de/kb/erweiterungen-im-privaten-modus). Wenn Sie diese Erweiterung im privaten Modus testen möchten, öffnen Sie "`about:addons`", klicken Sie auf die Erweiterung und wählen Sie die Option „Erlauben“ für „Ausführung in Privaten Fenstern“.

Besuchen Sie nun eine Seite unter "`https://www.mozilla.org/en-US/`", und Sie sollten die rote Umrandung um die Seite sehen.

![Rand wird auf mozilla.org angezeigt](border_on_mozilla_org.png)

> [!NOTE]
> Probieren Sie es jedoch nicht auf "`addons.mozilla.org`" aus! Content-Skripte sind derzeit auf dieser Domain blockiert.

Versuchen Sie ein wenig zu experimentieren. Bearbeiten Sie das Inhaltsskript, um die Farbe des Rahmens zu ändern oder etwas anderes am Seiteninhalt vorzunehmen. Speichern Sie das Inhaltsskript und laden Sie dann die Dateien der Erweiterung durch Klicken auf die Schaltfläche „Neu laden“ in "`about:debugging`" neu. Sie können die Änderungen sofort sehen.

- [Erfahren Sie mehr über das Laden von Erweiterungen](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/).

## Verpackung und Veröffentlichung

Damit andere Leute Ihre Erweiterung verwenden können, müssen Sie sie verpacken und zur Signierung an Mozilla übermitteln. Um mehr darüber zu erfahren, lesen Sie ["Veröffentlichung Ihrer Erweiterung"](https://extensionworkshop.com/documentation/publish/package-your-extension/).

## Was kommt als nächstes?

Jetzt haben Sie eine Einführung in den Prozess der Entwicklung einer WebExtension für Firefox gehabt:

- [Schreiben Sie eine komplexere Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension)
- [Lesen Sie mehr über den Aufbau einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [Erkunden Sie die Erweiterungsbeispiele](/de/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [Finden Sie heraus, was Sie zum Entwickeln, Testen und Veröffentlichen Ihrer Erweiterung benötigen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [Setzen Sie Ihr Lernen fort](/de/docs/Mozilla/Add-ons/WebExtensions/What_next#continue_your_learning_experience).
