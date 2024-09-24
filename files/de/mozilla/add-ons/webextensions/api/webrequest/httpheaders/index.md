---
title: webRequest.HttpHeaders
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/HttpHeaders
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ein Array von HTTP-Headern. Jeder Header wird als ein Objekt mit zwei Eigenschaften dargestellt: `name` und entweder `value` oder `binaryValue`.

## Typ

Ein `array` von `object`s. Jedes Objekt hat die folgenden Eigenschaften:

- `name`
  - : `string`. Name des HTTP-Headers.
- `value` {{optional_inline}}
  - : `string`. Wert des HTTP-Headers, wenn er als UTF-8 dargestellt werden kann. Entweder diese Eigenschaft oder `binaryValue` muss vorhanden sein.
- `binaryValue` {{optional_inline}}
  - : `array` von `integer`. Wert des HTTP-Headers, wenn er nicht durch UTF-8 dargestellt werden kann, dargestellt als Bytes (0..255). Entweder diese Eigenschaft oder `value` muss vorhanden sein.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#type-HttpHeaders) API. Diese Dokumentation ist von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code abgeleitet.
