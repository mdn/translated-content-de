---
title: Ihre erste Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
l10n:
  sourceCommit: c09f7c12c1c39924c492b63e5c284f64c2380b4a
---

Dieser Artikel führt Sie von Anfang bis Ende durch die Erstellung einer Erweiterung für Firefox. Die Erweiterung fügt allen Seiten, die von `mozilla.org` oder einer ihrer Subdomains geladen werden, einen roten Rahmen hinzu.

[Der Quellcode für dieses Beispiel ist auf GitHub verfügbar](https://github.com/mdn/webextensions-examples/tree/main/borderify).

## Schreiben der Erweiterung

Erstellen Sie an einem geeigneten Ort, wie dem `Documents`-Verzeichnis, ein Verzeichnis namens `borderify` und gehen Sie dann dorthin. Sie können dies mit dem Dateimanager Ihres Computers oder dem Kommandozeilen-Terminal tun.

Zu wissen, wie man das Kommandozeilen-Terminal benutzt, ist eine nützliche Fähigkeit für die Softwareentwicklung. Wenn Sie Unterstützung beim Einstieg in das Terminal benötigen, sehen Sie sich den [Kommandozeilen-Crashkurs](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) an.

Erstellen Sie das Verzeichnis mit dem Terminal wie folgt:

```bash
mkdir borderify
cd borderify
```

### manifest.json

Erstellen Sie mit einem geeigneten [Texteditor](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) eine Datei namens "manifest.json" im "borderify"-Verzeichnis. Geben Sie ihm diesen Inhalt:

```json
{
  "manifest_version": 3,
  "name": "Borderify",
  "version": "1.0",

  "description": "Adds a red border to all webpages matching mozilla.org.",

  "icons": {
    "48": "icons/border-48.png"
  },

  "browser_specific_settings": {
    "gecko": {
      "id": "borderify@mozilla.org",
      "data_collection_permissions": {
        "required": ["none"]
      }
    }
  },

  "content_scripts": [
    {
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ]
}
```

- Die ersten drei Schlüssel ([`manifest_version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) und [`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)) sind obligatorisch und enthalten grundlegende Metadaten für die Erweiterung.
- [`description`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) ist in Safari erforderlich, andernfalls ist es optional. Es ist jedoch eine gute Idee, diese Eigenschaft festzulegen, da sie im Erweiterungsmanager des Browsers angezeigt wird (zum Beispiel `about:addons` in Firefox).
- [`icons`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) ist optional, wird jedoch empfohlen: Es ermöglicht Ihnen, ein Symbol für die Erweiterung festzulegen.
- [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) wird von Firefox benötigt.
  - Die `gecko`-Eigenschaft bietet addons.mozilla.org und Firefox zusätzliche Konfigurationsinformationen über die Erweiterung.
    - [`id`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#id) definiert eine eindeutige Kennung für die Erweiterung. Diese Eigenschaft muss angegeben werden, um die Erweiterung auf addons.mozilla.org (AMO) zu veröffentlichen.
    - [`data_collection_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#data_collection_permissions) informiert darüber, ob die Erweiterung persönlich identifizierbare Informationen sammelt und überträgt. Diese Eigenschaft muss angegeben werden, um die Erweiterung auf addons.mozilla.org (AMO) zu veröffentlichen. Dieses Beispiel sammelt oder überträgt keine Daten.

Bisher haben diese `manifest.json`-Schlüssel Informationen über die Erweiterung bereitgestellt. Der nächste Schlüssel, [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts), beginnt, die Funktionalität der Erweiterung zu definieren. Dieser Schlüssel weist Firefox an, ein Skript in Webseiten zu laden, deren URL einem bestimmten Muster entspricht. In diesem Fall fordert die Erweiterung Firefox auf, ein Skript namens "borderify.js" in alle HTTP- oder HTTPS-Seiten zu laden, die von "mozilla.org" oder einer ihrer Subdomains bereitgestellt werden.

- [Erfahren Sie mehr über Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Erfahren Sie mehr über Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)

### icons/border-48.png

Firefox identifiziert Erweiterungen durch ein Symbol in verschiedenen Teilen seiner Benutzeroberfläche, wie der Symbolleiste und dem Add-ons-Manager (`about:addons`). Firefox verwendet ein Standardsymbol, es sei denn, Sie stellen eines bereit. Wenn Sie zur Veröffentlichung von Erweiterungen übergehen, ist ein Symbol eine hilfreiche Möglichkeit für Benutzer, Ihre Erweiterung zu identifizieren.

Die manifest.json des Beispiels teilt Firefox mit, dass ein Symbol unter "icons/border-48.png" vorhanden ist.

Erstellen Sie das Verzeichnis "icons" im Verzeichnis "borderify". Speichern Sie dort ein Symbol mit dem Namen "border-48.png". Sie könnten [das aus dem Beispiel verwenden](https://raw.githubusercontent.com/mdn/webextensions-examples/main/borderify/icons/border-48.png), das aus dem Google Material Design-Symbolsatz stammt und unter den Bedingungen der [Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/) Lizenz verwendet wird.

Falls Sie ein Symbol bereitstellen, sollte es 48x48 Pixel groß sein. Sie könnten auch ein 96x96 Pixel großes Symbol für hochauflösende Displays bereitstellen. Wenn Sie dies tun, geben Sie es als `96`-Eigenschaft des `icons`-Objekts in manifest.json an, wie folgt:

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

Alternativ können Sie eine SVG-Datei bereitstellen, die Firefox automatisch nach Bedarf skaliert. (Tipp: Wenn Sie SVG verwenden und Ihr Symbol Text enthält, verwenden Sie das Werkzeug "In Pfad umwandeln" Ihres SVG-Editors, um den Text zu glätten, sodass er mit einer konsistenten Größe und Position skaliert wird.)

[Erfahren Sie mehr über das Festlegen von Symbolen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

Erstellen Sie schließlich eine Datei namens "borderify.js" im Verzeichnis "borderify". Geben Sie ihr diesen Inhalt:

```js
document.body.style.border = "5px solid red";
```

Firefox lädt dieses Skript in die Seiten, die dem im `content_scripts`-Schlüssel von manifest.json angegebenen Muster entsprechen. Das Skript hat direkten Zugriff auf das Dokument, genau wie Skripte, die von der Seite selbst geladen werden.

[Erfahren Sie mehr über Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)

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

Öffnen Sie in Firefox die Seite [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html), klicken Sie auf **Dieser Firefox**, dann auf **Temporäres Add-on laden** und wählen Sie eine beliebige Datei aus dem Verzeichnis Ihrer Erweiterung aus.

Die Erweiterung wird nun installiert und bleibt installiert, bis Sie Firefox neu starten.

Alternativ können Sie die Erweiterung von der Kommandozeile aus mit dem [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) Tool ausführen.

### Testen

> [!NOTE]
> Standardmäßig [funktionieren Erweiterungen nicht im privaten Modus](https://support.mozilla.org/en-US/kb/extensions-private-browsing). Wenn Sie diese Erweiterung im privaten Modus testen möchten, öffnen Sie `about:addons`, klicken Sie auf die Erweiterung und wählen Sie **Zulassen** unter Im privaten Modus ausführen.

Besuchen Sie nun eine Seite unter `https://www.mozilla.org/en-US/`, und Sie sehen einen roten Rahmen um die Seite.

![Rahmen angezeigt auf mozilla.org](border_on_mozilla_org.png)

> [!NOTE]
> Es funktioniert jedoch nicht auf `addons.mozilla.org`, da diese Domain Content-Skripte blockiert.

Versuchen Sie zu experimentieren: Bearbeiten Sie das Content-Skript, um die Farbe des Rahmens zu ändern, oder machen Sie etwas anderes mit dem Seiteninhalt. Speichern Sie das Content-Skript, und laden Sie dann die Dateien der Erweiterung neu, indem Sie auf **Neu laden** in `about:debugging` klicken. Sie sehen die Änderungen sofort.

[Erfahren Sie mehr über das Laden von Erweiterungen](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

## Verpacken und Veröffentlichen

Damit andere Leute Ihre Erweiterung verwenden können, müssen Sie sie verpacken und bei Mozilla zur Signierung einreichen. Um mehr darüber zu erfahren, lesen Sie ["Veröffentlichen Ihrer Erweiterung"](https://extensionworkshop.com/documentation/publish/package-your-extension/).

## Was kommt als Nächstes?

Nun haben Sie eine Einführung in den Prozess der Entwicklung einer Erweiterung für Firefox erhalten:

- [Schreiben Sie eine komplexere Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension)
- [Lesen Sie mehr über den Aufbau einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [Erkunden Sie die Erweiterungsbeispiele](/de/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [Finden Sie heraus, was Sie benötigen, um Ihre Erweiterung zu entwickeln, zu testen und zu veröffentlichen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [Vertiefen Sie Ihr Wissen weiter](/de/docs/Mozilla/Add-ons/WebExtensions/What_next#continue_your_learning_experience)
