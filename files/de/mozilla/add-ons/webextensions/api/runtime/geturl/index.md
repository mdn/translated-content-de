---
title: runtime.getURL()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getURL
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Angenommen, ein relativer Pfad von der [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) zu einer mit der Erweiterung verpackten Ressource wird übergeben, gibt die Funktion eine vollqualifizierte URL zurück.

Diese Funktion prüft _nicht_, ob die Ressource tatsächlich unter dieser URL existiert.

## Syntax

```js-nolint
browser.runtime.getURL(
  path // string
)
```

### Parameter

- `path`
  - : `string`. Ein relativer Pfad von der [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) zu einer mit der Erweiterung verpackten Ressource.

### Rückgabewert

`string`. Die vollqualifizierte URL zur Ressource innerhalb der Erweiterung.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Angenommen, eine mit der Erweiterung verpackte Datei befindet sich unter "beasts/frog.html", erhalten Sie die vollständige URL wie folgt:

```js
let fullURL = browser.runtime.getURL("beasts/frog.html");
console.log(fullURL);
// Gibt etwas zurück wie:
// moz-extension://2c127fa4-62c7-7e4f-90e5-472b45eecfdc/beasts/frog.html
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-getURL) API von Chromium. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
