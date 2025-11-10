---
title: downloads.BooleanDelta
slug: Mozilla/Add-ons/WebExtensions/API/downloads/BooleanDelta
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der `BooleanDelta`-Typ der {{WebExtAPIRef("downloads")}} API repräsentiert den Unterschied zwischen zwei Booleans.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `current` {{optional_inline}}
  - : Ein `boolean`, das den aktuellen Boolean-Wert darstellt.
- `previous` {{optional_inline}}
  - : Ein `boolean`, das den vorherigen Boolean-Wert darstellt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-BooleanDelta) API von Chromium.
