---
title: ExtensionInfo
slug: Mozilla/Add-ons/WebExtensions/API/management/ExtensionInfo
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ein `ExtensionInfo`-Objekt enthält Informationen über ein Add-on.

## Typ

Es ist ein Objekt mit den folgenden Eigenschaften:

- `description`
  - : `string`. Die Beschreibung des Add-ons, entnommen aus dem `manifest.json`-Schlüssel [description](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description).
- `disabledReason`
  - : `string`. Wenn das Add-on deaktiviert ist, der Grund, warum es deaktiviert wurde. Einer von "unknown" oder "permissions_increase".
- `enabled`
  - : `boolean`. Ob das Add-on momentan aktiviert ist oder nicht.
- `homepageUrl`
  - : `string`. Die Homepage-URL des Add-ons, entnommen aus dem `manifest.json`-Schlüssel [homepage_url](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url).
- `hostPermissions`
  - : `array` von `string`. Die [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) des Add-ons.
- `icons`

  - : `array` von `object`. Informationen über die Symbole des Add-ons. Ein Array von Objekten, eines für jedes Symbol. Jedes Objekt enthält zwei Eigenschaften:

    - `size`: ein Integer, der die Breite und Höhe des Symbols in Pixeln darstellt.
    - `url`: ein String, der eine relative URL zum Symbol enthält, beginnend am Root des Add-ons.

- `id`
  - : `string`. Die ID des Add-ons.
- `installType`

  - : `string`. String, der beschreibt, wie das Add-on installiert wurde. Einer der folgenden:

    - "admin": Das Add-on wurde aufgrund einer administrativen Richtlinie installiert.
    - "development": Das Add-on wurde entpackt von der Festplatte installiert.
    - "normal": Das Add-on wurde normal aus einem Installationspaket installiert.
    - "sideload": Das Add-on wurde von einer anderen Software auf dem Computer des Nutzers installiert.
    - "other": Das Add-on wurde auf eine andere Weise installiert.

- `mayDisable`
  - : `boolean`. Ob dieses Add-on vom Benutzer deaktiviert oder deinstalliert werden kann.
- `name`
  - : `string`. Der Name des Add-ons, entnommen aus dem `manifest.json`-Schlüssel [name](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name).
- `offlineEnabled`
  - : `boolean`. Ob das Add-on behauptet, offline unterstützt zu werden.
- `optionsUrl`
  - : `string`. URL für die [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) des Elements, falls vorhanden. Dies ist eine relative URL, beginnend am Root des Add-ons.
- `permissions`
  - : `array` von `string`. Die [API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) des Add-ons.
- `shortName`
  - : `string`. Eine Kurzversion des Namens des Add-ons, entnommen aus dem `manifest.json`-Schlüssel [short_name](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/short_name).
- `type`

  - : `string`. String, der den Typ des Add-ons beschreibt. Wird verwendet, um Erweiterungen von Apps und Themes zu unterscheiden. Kann einen der folgenden Werte annehmen:

    - "extension": häufigster Add-on-Typ.
    - "hosted_app"
    - "packaged_app"
    - "legacy_packaged_app"
    - "theme"

- `updateUrl`
  - : `string`. URL für Updates zu diesem Add-on, entnommen aus dem `manifest.json`-Schlüssel [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings).
- `version`
  - : `string`. Version dieses Add-ons, entnommen aus dem `manifest.json`-Schlüssel [version](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version).
- `versionName`
  - : `string`. Beschreibender Name für die Version dieses Add-ons, entnommen aus dem `manifest.json`-Schlüssel [version_name](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version_name).

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management#type-ExtensionInfo) API. Diese Dokumentation ist abgeleitet von [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) aus dem Chromium-Code.
