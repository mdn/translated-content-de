---
title: downloads.BooleanDelta
slug: Mozilla/Add-ons/WebExtensions/API/downloads/BooleanDelta
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Typ `BooleanDelta` der {{WebExtAPIRef("downloads")}} API repräsentiert den Unterschied zwischen zwei Booleans.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `current` {{optional_inline}}
  - : Ein `boolean`, der den aktuellen booleschen Wert darstellt.
- `previous` {{optional_inline}}
  - : Ein `boolean`, der den vorherigen booleschen Wert darstellt.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der `chrome.downloads`-API von Chromium [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-BooleanDelta).
