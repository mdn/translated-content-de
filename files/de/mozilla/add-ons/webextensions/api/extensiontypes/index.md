---
title: extensionTypes
slug: Mozilla/Add-ons/WebExtensions/API/extensionTypes
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Einige allgemeine Typen, die in anderen WebExtension-APIs verwendet werden.

## Typen

- {{WebExtAPIRef("extensionTypes.ImageDetails")}}
  - : Details über das Format und die Qualität eines Bildes.
- {{WebExtAPIRef("extensionTypes.ImageFormat")}}
  - : Das Format eines Bildes.
- {{WebExtAPIRef("extensionTypes.InjectDetails")}}
  - : Fügt Details in eine Seite ein.
- {{WebExtAPIRef("extensionTypes.RunAt")}}
  - : Der frühestmögliche Zeitpunkt, zu dem das JavaScript oder CSS in den Tab eingefügt wird.
- `extensionTypes.CSSOrigin`
  - : Gibt an, ob ein durch [`tabs.insertCSS`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) eingefügtes CSS-Stylesheet als "author" oder "user" Stylesheet behandelt werden soll.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.extensionTypes`](https://developer.chrome.com/docs/extensions/reference/api/extensionTypes) API von Chromium. Diese Dokumentation ist abgeleitet von [`extension_types.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/extension_types.json) im Chromium-Code.
