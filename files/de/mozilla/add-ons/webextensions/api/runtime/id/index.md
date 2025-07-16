---
title: runtime.id
slug: Mozilla/Add-ons/WebExtensions/API/runtime/id
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Die ID der Erweiterung.

## Syntax

```js-nolint
let myAddonId = browser.runtime.id;
```

### Wert

Ein `string`, der die Add-on-ID darstellt. Wenn die Erweiterung in ihrem `manifest.json`-Schlüssel [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) eine ID angibt, enthält `runtime.id` diesen Wert. Andernfalls enthält `runtime.id` die für die Erweiterung generierte ID.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#property-id) API von Chromium. Diese Dokumentation ist von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code abgeleitet.
