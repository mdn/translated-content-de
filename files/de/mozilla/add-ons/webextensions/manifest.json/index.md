---
title: manifest.json
slug: Mozilla/Add-ons/WebExtensions/manifest.json
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{AddonSidebar}}

> [!NOTE]
> Dieser Artikel beschreibt die `manifest.json` für Web-Erweiterungen. Wenn Sie Informationen über die `manifest.json` in PWAs suchen, lesen Sie den Artikel zum [Web App Manifest](/de/docs/Web/Progressive_web_apps/Manifest).

Die `manifest.json`-Datei ist die einzige Datei, die jede Erweiterung, die die WebExtension-APIs verwendet, enthalten muss.

Mit `manifest.json` geben Sie grundlegende Metadaten zu Ihrer Erweiterung an, wie zum Beispiel den Namen und die Version, und können auch Aspekte der Funktionalität Ihrer Erweiterung spezifizieren (zum Beispiel Hintergrundskripte, Inhalts-Skripte und Browser-Aktionen).

Es ist eine {{Glossary("JSON", "JSON")}}-formatierte Datei, mit einer Ausnahme: es ist erlaubt, "`//`"-Stil Kommentare zu enthalten.

## Liste der manifest.json-Schlüssel

Dies sind die `manifest.json`-Schlüssel; diese Schlüssel sind in Manifest V2 und höher verfügbar, sofern nicht anders angegeben:

- [action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) (Manifest V3 und höher)
- [author](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author)
- [background](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background)
- [browser_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) (Nur Manifest V2)
- [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)
- [chrome_settings_overrides](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- [chrome_url_overrides](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides)
- [commands](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)
- [content_scripts](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)
- [content_security_policy](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)
- [declarative_net_request](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request)
- [default_locale](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale)
- [description](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description)
- [developer](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer)
- [devtools_page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page)
- [dictionaries](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/dictionaries)
- [externally_connectable](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable)
- [homepage_url](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url)
- [host_permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) (Manifest V3 und höher)
- [icons](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons)
- [incognito](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito)
- [manifest_version](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version)
- [name](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name)
- [offline_enabled](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/offline_enabled)
- [omnibox](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox)
- [optional_host_permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) (Manifest V3 und höher)
- [optional_permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)
- [options_page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page)
- [options_ui](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)
- [page_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) (Nur Manifest V2 in Chrome)
- [permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)
- [protocol_handlers](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers)
- [short_name](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/short_name)
- [sidebar_action](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [storage](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/storage)
- [theme](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)
- [theme_experiment](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment)
- [user_scripts](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) (Nur Manifest V2)
- [version](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)
- [version_name](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version_name)
- [web_accessible_resources](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources)

### Hinweise zu manifest.json-Schlüsseln

- `"manifest_version"`, `"version"` und `"name"` sind die einzigen obligatorischen Schlüssel.
- `"default_locale"` muss vorhanden sein, wenn das "`_locales`"-Verzeichnis vorhanden ist und muss ansonsten fehlen.
- `"browser_specific_settings"` wird in Google Chrome nicht unterstützt.

### Zugriff auf manifest.json-Schlüssel zur Laufzeit

Sie können auf das Manifest Ihrer Erweiterung über das JavaScript der Erweiterung mithilfe der Funktion {{WebExtAPIRef("runtime.getManifest()")}} zugreifen:

```js
browser.runtime.getManifest().version;
```

## Beispiel

Der folgende Block zeigt die grundlegende Syntax für einige allgemeine Manifest-Schlüssel.

> [!NOTE]
> Dies soll nicht als kopierfertiges Beispiel verwendet werden. Die Auswahl der benötigten Schlüssel hängt von der Erweiterung ab, die Sie entwickeln.

Für vollständige Beispiel-Erweiterungen siehe [Beispiel-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples).

```json
{
  "browser_specific_settings": {
    "gecko": {
      "id": "addon@example.com",
      "strict_min_version": "42.0"
    }
  },

  "background": {
    "scripts": ["jquery.js", "my-background.js"]
  },

  "browser_action": {
    "default_icon": {
      "19": "button/geo-19.png",
      "38": "button/geo-38.png"
    },
    "default_title": "Whereami?",
    "default_popup": "popup/geo.html"
  },

  "commands": {
    "toggle-feature": {
      "suggested_key": {
        "default": "Ctrl+Shift+Y",
        "linux": "Ctrl+Shift+U"
      },
      "description": "Send a 'toggle-feature' event"
    }
  },

  "content_security_policy": "script-src 'self' https://example.com; object-src 'self'",

  "content_scripts": [
    {
      "exclude_matches": ["*://developer.mozilla.org/*"],
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ],

  "default_locale": "en",

  "description": "…",

  "icons": {
    "48": "icon.png",
    "96": "icon@2x.png"
  },

  "manifest_version": 2,

  "name": "…",

  "page_action": {
    "default_icon": {
      "19": "button/geo-19.png",
      "38": "button/geo-38.png"
    },
    "default_title": "Whereami?",
    "default_popup": "popup/geo.html"
  },

  "permissions": ["webNavigation"],

  "version": "0.1",

  "user_scripts": {
    "api_script": "apiscript.js"
  },

  "web_accessible_resources": ["images/my-image.png"]
}
```

## Browser-Kompatibilität

Für einen vollständigen Überblick über alle Manifest-Schlüssel und deren Unter-Schlüssel siehe die [vollständige manifest.json-Browser-Kompatibilitätstabelle](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json).

{{Compat}}

## Siehe auch

{{WebExtAPIRef("permissions")}} JavaScript API
