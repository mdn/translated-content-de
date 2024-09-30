---
title: extension.getURL()
slug: Mozilla/Add-ons/WebExtensions/API/extension/getURL
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

> [!WARNING]
> Diese Funktion ist veraltet. Bitte verwenden Sie [`runtime.getURL`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL).

Konvertiert einen relativen Pfad innerhalb des Installationsverzeichnisses einer Erweiterung in eine vollständig qualifizierte URL.

## Syntax

```js-nolint
browser.extension.getURL(
  path // string
)
```

### Parameter

- `path`
  - : `string`. Ein Pfad zu einer Ressource innerhalb einer Erweiterung, ausgedrückt relativ zu ihrem Installationsverzeichnis.

### Rückgabewert

`string`. Die vollständig qualifizierte URL zur Ressource.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Angenommen, eine Datei ist mit dem Add-on unter "beasts/frog.html" verpackt, erhalten Sie die vollständige URL wie folgt:

```js
let fullURL = browser.extension.getURL("beasts/frog.html");

// -> something like:
// moz-extension://2c127fa4-62c7-7e4f-90e5-472b45eecfdc/beasts/frog.html
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/api/extension#method-getURL). Diese Dokumentation stammt aus [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) im Chromium-Code.
