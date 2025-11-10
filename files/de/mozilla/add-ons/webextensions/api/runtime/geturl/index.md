---
title: runtime.getURL()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getURL
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Gibt für einen relativen Pfad von der [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) zu einer mit der Erweiterung gepackten Ressource eine vollqualifizierte URL zurück.

Diese Funktion überprüft _nicht_, ob die Ressource tatsächlich unter dieser URL existiert.

## Syntax

```js-nolint
browser.runtime.getURL(
  path // string
)
```

### Parameter

- `path`
  - : `string`. Ein relativer Pfad von der [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) zu einer mit der Erweiterung gepackten Ressource.

### Rückgabewert

`string`. Die vollqualifizierte URL zur Ressource innerhalb der Erweiterung.

## Beispiele

Angenommen, eine Datei ist mit der Erweiterung unter "beasts/frog.html" gepackt, erhalten Sie die vollständige URL wie folgt:

```js
let fullURL = browser.runtime.getURL("beasts/frog.html");
console.log(fullURL);
// Returns something like:
// moz-extension://2c127fa4-62c7-7e4f-90e5-472b45eecfdc/beasts/frog.html
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-getURL) API von Chromium. Diese Dokumentation basiert auf [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
