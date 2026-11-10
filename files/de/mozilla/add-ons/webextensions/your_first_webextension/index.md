---
title: Ihre erste Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

Dieser Artikel führt Sie Schritt für Schritt durch die Erstellung einer Erweiterung für Firefox. Die Erweiterung fügt allen Seiten, die von `mozilla.org` oder einer seiner Subdomains geladen werden, einen roten Rahmen hinzu.

Der [Quellcode für dieses Beispiel ist auf GitHub verfügbar](https://github.com/mdn/webextensions-examples/tree/main/borderify).

## Die Erweiterung erstellen

Erstellen Sie an einem geeigneten Ort, beispielsweise im Verzeichnis `Documents`, ein Verzeichnis namens `borderify` und wechseln Sie dorthin. Dazu können Sie den Dateimanager Ihres Computers oder ein Kommandozeilenterminal verwenden.

Der Umgang mit dem Kommandozeilenterminal ist eine nützliche Fähigkeit bei der Softwareentwicklung. Wenn Sie Hilfe beim Einstieg benötigen, lesen Sie den [Schnelleinstieg in die Kommandozeile](/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).

Im Terminal erstellen Sie das Verzeichnis wie folgt:

```bash
mkdir borderify
cd borderify
```

### manifest.json

Erstellen Sie mit einem geeigneten [Code-Editor](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) im Verzeichnis „borderify“ eine Datei namens „manifest.json“. Geben Sie ihr folgenden Inhalt:

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
- [`description`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) ist in Safari erforderlich, andernfalls optional. Es empfiehlt sich jedoch, diese Eigenschaft festzulegen, da sie im Erweiterungsmanager des Browsers angezeigt wird (beispielsweise unter `about:addons` in Firefox).
- [`icons`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) ist optional, aber empfehlenswert: Damit können Sie ein Symbol für die Erweiterung festlegen.
- [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) ist für Firefox erforderlich.
  - Die Eigenschaft `gecko` stellt addons.mozilla.org und Firefox zusätzliche Konfigurationsinformationen zur Erweiterung bereit.
    - [`id`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#id) legt eine eindeutige Kennung für die Erweiterung fest. Diese Eigenschaft muss angegeben werden, um die Erweiterung auf addons.mozilla.org (AMO) zu veröffentlichen.
    - [`data_collection_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#data_collection_permissions) gibt an, ob die Erweiterung personenbezogene Daten erfasst und überträgt. Diese Eigenschaft muss angegeben werden, um die Erweiterung auf addons.mozilla.org (AMO) zu veröffentlichen. Dieses Beispiel erfasst oder überträgt keine Daten.

Bisher liefern diese Schlüssel in `manifest.json` Informationen über die Erweiterung. Der nächste Schlüssel, [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts), beginnt, die Funktionalität der Erweiterung festzulegen. Er weist Firefox an, ein Skript in Webseiten zu laden, deren URL einem bestimmten Muster entspricht. In diesem Fall soll Firefox ein Skript namens „borderify.js“ in alle über HTTP oder HTTPS bereitgestellten Seiten von „mozilla.org“ oder einer seiner Subdomains laden.

- [Weitere Informationen zu Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Weitere Informationen zu Match Patterns](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)

### icons/border-48.png

Firefox kennzeichnet Erweiterungen an verschiedenen Stellen seiner Benutzeroberfläche durch ein Symbol, beispielsweise in der Symbolleiste und im Add-ons-Manager (`about:addons`). Wenn Sie kein eigenes Symbol bereitstellen, verwendet Firefox ein Standardsymbol. Bei der Veröffentlichung einer Erweiterung hilft ein eigenes Symbol den Nutzern, Ihre Erweiterung wiederzuerkennen.

Die Datei manifest.json des Beispiels teilt Firefox mit, dass sich ein Symbol unter „icons/border-48.png“ befindet.

Erstellen Sie im Verzeichnis „borderify“ das Verzeichnis „icons“. Speichern Sie dort ein Symbol namens „border-48.png“. Sie können [das Symbol aus dem Beispiel](https://raw.githubusercontent.com/mdn/webextensions-examples/main/borderify/icons/border-48.png) verwenden. Es stammt aus dem Google-Material-Design-Icon-Set und wird gemäß den Bedingungen der Lizenz [Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/) verwendet.

Wenn Sie ein Symbol bereitstellen, sollte es 48 × 48 Pixel groß sein. Für hochauflösende Bildschirme können Sie zusätzlich ein Symbol mit 96 × 96 Pixeln bereitstellen. Geben Sie dieses dann als Eigenschaft `96` des Objekts `icons` in manifest.json an:

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

Alternativ können Sie eine SVG-Datei bereitstellen, die Firefox bei Bedarf automatisch skaliert. (Tipp: Wenn Sie SVG verwenden und Ihr Symbol Text enthält, wandeln Sie den Text mit der Funktion „In Pfad umwandeln“ Ihres SVG-Editors in Pfade um. So bleiben Größe und Position beim Skalieren konsistent.)

[Weitere Informationen zum Festlegen von Symbolen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

Erstellen Sie abschließend im Verzeichnis „borderify“ eine Datei namens „borderify.js“. Geben Sie ihr folgenden Inhalt:

```js
document.body.style.border = "5px solid red";
```

Firefox lädt dieses Skript in Seiten, die dem im Schlüssel `content_scripts` von manifest.json angegebenen Muster entsprechen. Das Skript hat direkten Zugriff auf das Dokument, genau wie Skripte, die von der Seite selbst geladen werden.

[Weitere Informationen zu Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)

## Die Erweiterung ausprobieren

Prüfen Sie zunächst, ob sich die richtigen Dateien an den richtigen Stellen befinden:

```plain
borderify/
    icons/
        border-48.png
    borderify.js
    manifest.json
```

### Installieren

Öffnen Sie in Firefox die Seite [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html), klicken Sie auf **Dieser Firefox**, dann auf **Temporäres Add-on laden** und wählen Sie eine beliebige Datei im Verzeichnis Ihrer Erweiterung aus.

Die Erweiterung wird nun installiert und bleibt bis zum nächsten Neustart von Firefox installiert.

Alternativ können Sie die Erweiterung über die Kommandozeile mit dem Tool [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) ausführen.

### Testen

> [!NOTE]
> Standardmäßig funktionieren [Erweiterungen nicht beim privaten Surfen](https://support.mozilla.org/en-US/kb/extensions-private-browsing). Wenn Sie diese Erweiterung beim privaten Surfen testen möchten, öffnen Sie `about:addons`, klicken Sie auf die Erweiterung und wählen Sie unter „In privaten Fenstern ausführen“ die Option **Erlauben**.

Rufen Sie nun eine Seite unter `https://www.mozilla.org/en-US/` auf. Um die Seite wird ein roter Rahmen angezeigt.

![Roter Rahmen um mozilla.org in Firefox](border_on_mozilla_org.png)

> [!NOTE]
> Auf `addons.mozilla.org` funktioniert die Erweiterung allerdings nicht, da diese Domain Content Scripts blockiert.

Experimentieren Sie: Ändern Sie im Content Script die Rahmenfarbe oder nehmen Sie eine andere Änderung am Seiteninhalt vor. Speichern Sie das Content Script und laden Sie anschließend die Dateien der Erweiterung neu, indem Sie unter `about:debugging` auf **Neu laden** klicken. Die Änderungen werden sofort angezeigt.

[Weitere Informationen zum Laden von Erweiterungen](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

## Paketieren und veröffentlichen

Damit andere Ihre Erweiterung verwenden können, müssen Sie sie paketieren und zur Signierung bei Mozilla einreichen. Weitere Informationen finden Sie unter [„Ihre Erweiterung veröffentlichen“](https://extensionworkshop.com/documentation/publish/package-your-extension/).

## Wie geht es weiter?

Sie haben nun eine Einführung in die Entwicklung einer Erweiterung für Firefox erhalten:

- [Eine komplexere Erweiterung schreiben](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension)
- [Mehr über den Aufbau einer Erweiterung erfahren](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [Beispiele für Erweiterungen erkunden](/de/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [Erfahren, was Sie zum Entwickeln, Testen und Veröffentlichen Ihrer Erweiterung benötigen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [Ihre Kenntnisse vertiefen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next#continue_your_learning_experience)
