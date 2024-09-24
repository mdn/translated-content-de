---
title: extensionTypes
slug: Mozilla/Add-ons/WebExtensions/API/extensionTypes
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
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
  - : Der früheste Zeitpunkt, zu dem JavaScript oder CSS in den Tab eingefügt wird.
- `extensionTypes.CSSOrigin`
  - : Gibt an, ob ein mit [`tabs.insertCSS`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) eingefügtes CSS-Stylesheet als "author" oder "user" Stylesheet behandelt werden soll.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.extensionTypes`](https://developer.chrome.com/docs/extensions/reference/api/extensionTypes) API. Diese Dokumentation ist abgeleitet von [`extension_types.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/extension_types.json) im Chromium-Code.
