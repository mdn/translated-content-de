---
title: downloads.DoubleDelta
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DoubleDelta
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der `DoubleDelta`-Typ der {{WebExtAPIRef("downloads")}} API repräsentiert den Unterschied zwischen zwei Double-Werten.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `current` {{optional_inline}}
  - : Eine `number`, die den aktuellen Double-Wert darstellt.
- `previous` {{optional_inline}}
  - : Eine `number`, die den vorherigen Double-Wert darstellt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-DoubleDelta) API von Chromium.
