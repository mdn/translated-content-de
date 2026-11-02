---
title: Ihre erste Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
l10n:
  sourceCommit: d50a52075711e21da27bce5ee24f6334b56cf0f3
---

Dieser Artikel führt Sie Schritt für Schritt durch die Erstellung einer Erweiterung für Firefox. Die Erweiterung fügt allen Seiten, die von `mozilla.org` oder einer seiner Subdomains geladen werden, einen roten Rahmen hinzu.

Der [Quellcode für dieses Beispiel ist auf GitHub verfügbar](https://github.com/mdn/webextensions-examples/tree/main/borderify).

## Die Erweiterung schreiben

Erstellen Sie an einem geeigneten Ort, beispielsweise im Verzeichnis `Documents`, ein Verzeichnis namens `borderify` und wechseln Sie dorthin. Dazu können Sie den Dateimanager Ihres Computers oder ein Kommandozeilenterminal verwenden.

Der Umgang mit dem Kommandozeilenterminal ist eine nützliche Fähigkeit für die Softwareentwicklung. Wenn Sie Hilfe bei den ersten Schritten benötigen, lesen Sie den [Schnelleinstieg in die Kommandozeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

Im Terminal erstellen Sie das Verzeichnis so:

```bash
mkdir borderify
cd borderify
```

### manifest.json

Erstellen Sie mit einem geeigneten [Code-Editor](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) im Verzeichnis „borderify“ eine Datei namens „manifest.json“ mit folgendem Inhalt:

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

- Die ersten drei Schlüssel ([`manifest_version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) und [`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)) sind erforderlich und enthalten grundlegende Metadaten zur Erweiterung.
- [`description`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) ist in Safari erforderlich, ansonsten optional. Es empfiehlt sich jedoch, diese Eigenschaft festzulegen, da sie im Erweiterungsmanager des Browsers angezeigt wird (beispielsweise unter `about:addons` in Firefox).
- [`icons`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) ist optional, wird aber empfohlen: Damit können Sie ein Symbol für die Erweiterung angeben.
- [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) ist für Firefox erforderlich.
  - Die Eigenschaft `gecko` stellt addons.mozilla.org und Firefox zusätzliche Konfigurationsinformationen zur Erweiterung bereit.
    - [`id`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#id) definiert eine eindeutige Kennung für die Erweiterung. Diese Eigenschaft muss angegeben werden, damit die Erweiterung auf addons.mozilla.org (AMO) veröffentlicht werden kann.
    - [`data_collection_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#data_collection_permissions) gibt an, ob die Erweiterung personenbezogene Daten erfasst und übermittelt. Diese Eigenschaft muss angegeben werden, damit die Erweiterung auf addons.mozilla.org (AMO) veröffentlicht werden kann. Dieses Beispiel erfasst oder übermittelt keine Daten.

Bisher haben diese Schlüssel in `manifest.json` Informationen über die Erweiterung bereitgestellt. Der nächste Schlüssel, [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts), legt die Funktionalität der Erweiterung fest. Er weist Firefox an, ein Skript in Webseiten zu laden, deren URL einem bestimmten Muster entspricht. In diesem Fall soll Firefox ein Skript namens „borderify.js“ in alle über HTTP oder HTTPS bereitgestellten Seiten von „mozilla.org“ und seinen Subdomains laden.

- [Mehr über Content-Skripte erfahren](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Mehr über Übereinstimmungsmuster erfahren](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)

### icons/border-48.png

Firefox kennzeichnet Erweiterungen an verschiedenen Stellen seiner Benutzeroberfläche durch ein Symbol, etwa in der Symbolleiste und im Add-ons-Manager (`about:addons`). Wenn Sie kein eigenes Symbol bereitstellen, verwendet Firefox ein Standardsymbol. Bei der Veröffentlichung einer Erweiterung hilft ein eigenes Symbol Nutzern dabei, Ihre Erweiterung wiederzuerkennen.

Die Datei „manifest.json“ des Beispiels teilt Firefox mit, dass sich unter „icons/border-48.png“ ein Symbol befindet.

Erstellen Sie im Verzeichnis „borderify“ das Verzeichnis „icons“. Speichern Sie darin ein Symbol namens „border-48.png“. Sie können [das Symbol aus dem Beispiel](https://raw.githubusercontent.com/mdn/webextensions-examples/main/borderify/icons/border-48.png) verwenden. Es stammt aus dem Google-Material-Design-Icon-Set und wird unter den Bedingungen der Lizenz [Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/) verwendet.

Wenn Sie ein Symbol bereitstellen, sollte es 48 × 48 Pixel groß sein. Für hochauflösende Bildschirme können Sie zusätzlich ein Symbol mit 96 × 96 Pixeln bereitstellen. Geben Sie es in diesem Fall als Eigenschaft `96` des Objekts `icons` in manifest.json an:

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

Alternativ können Sie eine SVG-Datei bereitstellen, die Firefox bei Bedarf automatisch skaliert. (Tipp: Wenn Sie SVG verwenden und Ihr Symbol Text enthält, wandeln Sie den Text mit der Funktion „In Pfad umwandeln“ Ihres SVG-Editors in Pfade um. So behält er beim Skalieren eine einheitliche Größe und Position.)

[Mehr über die Angabe von Symbolen erfahren](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

Erstellen Sie abschließend im Verzeichnis „borderify“ eine Datei namens „borderify.js“ mit folgendem Inhalt:

```js
document.body.style.border = "5px solid red";
```

Firefox lädt dieses Skript in Seiten, die dem im Schlüssel `content_scripts` von manifest.json angegebenen Muster entsprechen. Das Skript hat direkten Zugriff auf das Dokument, genau wie Skripte, die von der Seite selbst geladen werden.

[Mehr über Content-Skripte erfahren](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)

## Die Erweiterung ausprobieren

Überprüfen Sie zunächst, ob sich die richtigen Dateien an den richtigen Stellen befinden:

```plain
borderify/
    icons/
        border-48.png
    borderify.js
    manifest.json
```

### Installation

Öffnen Sie in Firefox die Seite [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html), klicken Sie auf **Dieser Firefox** und dann auf **Temporäres Add-on laden**. Wählen Sie anschließend eine beliebige Datei im Verzeichnis Ihrer Erweiterung aus.

Die Erweiterung wird nun installiert und bleibt bis zum Neustart von Firefox installiert.

Alternativ können Sie die Erweiterung mit dem Tool [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) über die Kommandozeile ausführen.

### Testen

> [!NOTE]
> Standardmäßig [funktionieren Erweiterungen nicht im privaten Modus](https://support.mozilla.org/en-US/kb/extensions-private-browsing). Wenn Sie diese Erweiterung im privaten Modus testen möchten, öffnen Sie `about:addons`, klicken Sie auf die Erweiterung und wählen Sie unter „In privaten Fenstern ausführen“ die Option **Erlauben**.

Rufen Sie nun eine Seite unter `https://www.mozilla.org/en-US/` auf. Sie sehen einen roten Rahmen um die Seite.

![Roter Rahmen auf mozilla.org](border_on_mozilla_org.png)

> [!NOTE]
> Auf `addons.mozilla.org` funktioniert die Erweiterung allerdings nicht, da diese Domain Content-Skripte blockiert.

Experimentieren Sie: Ändern Sie das Content-Skript, um die Rahmenfarbe anzupassen oder den Seiteninhalt auf andere Weise zu verändern. Speichern Sie das Content-Skript und laden Sie dann die Dateien der Erweiterung neu, indem Sie unter `about:debugging` auf **Neu laden** klicken. Die Änderungen sind sofort sichtbar.

[Mehr über das Laden von Erweiterungen erfahren](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

## Paketieren und veröffentlichen

Damit andere Ihre Erweiterung verwenden können, müssen Sie sie paketieren und zur Signierung bei Mozilla einreichen. Weitere Informationen finden Sie unter [„Ihre Erweiterung veröffentlichen“](https://extensionworkshop.com/documentation/publish/package-your-extension/).

## Wie geht es weiter?

Sie haben nun einen ersten Einblick in die Entwicklung einer Erweiterung für Firefox erhalten:

- [Eine komplexere Erweiterung schreiben](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension)
- [Mehr über den Aufbau einer Erweiterung lesen](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [Beispiele für Erweiterungen erkunden](/de/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [Erfahren, was Sie zum Entwickeln, Testen und Veröffentlichen Ihrer Erweiterung benötigen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [Ihr Wissen vertiefen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next#continue_your_learning_experience)
