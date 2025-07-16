---
title: downloads.BooleanDelta
slug: Mozilla/Add-ons/WebExtensions/API/downloads/BooleanDelta
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Der `BooleanDelta` Typ der {{WebExtAPIRef("downloads")}} API repräsentiert den Unterschied zwischen zwei Booleschen Werten.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `current` {{optional_inline}}
  - : Ein `boolean`, der den aktuellen Booleschen Wert darstellt.
- `previous` {{optional_inline}}
  - : Ein `boolean`, der den vorherigen Booleschen Wert darstellt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-BooleanDelta) API von Chromium.
