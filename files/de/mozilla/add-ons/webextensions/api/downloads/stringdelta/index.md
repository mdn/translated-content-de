---
title: downloads.StringDelta
slug: Mozilla/Add-ons/WebExtensions/API/downloads/StringDelta
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Typ `StringDelta` der {{WebExtAPIRef("downloads")}} API repräsentiert den Unterschied zwischen zwei Zeichenfolgen.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `current` {{optional_inline}}
  - : Eine `string`, die den aktuellen Zeichenfolgenwert darstellt.
- `previous` {{optional_inline}}
  - : Eine `string`, die den vorherigen Zeichenfolgenwert darstellt.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-StringDelta) API von Chromium.
