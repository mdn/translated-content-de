---
title: extension.getURL()
slug: Mozilla/Add-ons/WebExtensions/API/extension/getURL
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

> [!WARNING]
> Diese Funktion ist veraltet. Bitte verwenden Sie [`runtime.getURL`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL).

Konvertiert einen relativen Pfad innerhalb des Installationsverzeichnisses einer Erweiterung in eine vollqualifizierte URL.

## Syntax

```js-nolint
browser.extension.getURL(
  path // string
)
```

### Parameter

- `path`
  - : `string`. Ein Pfad zu einer Ressource innerhalb einer Erweiterung, der relativ zu ihrem Installationsverzeichnis ausgedrückt wird.

### Rückgabewert

`string`. Die vollqualifizierte URL zur Ressource.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Angenommen, eine Datei, die mit dem Add-on verpackt ist, befindet sich unter "beasts/frog.html", um die vollständige URL wie folgt zu erhalten:

```js
let fullURL = browser.extension.getURL("beasts/frog.html");

// -> something like:
// moz-extension://2c127fa4-62c7-7e4f-90e5-472b45eecfdc/beasts/frog.html
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/api/extension#method-getURL) API von Chromium. Diese Dokumentation ist abgeleitet von [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) im Chromium-Code.
