---
title: downloads.StringDelta
slug: Mozilla/Add-ons/WebExtensions/API/downloads/StringDelta
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Der `StringDelta`-Typ der {{WebExtAPIRef("downloads")}} API stellt den Unterschied zwischen zwei Zeichenfolgen dar.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `current` {{optional_inline}}
  - : Ein `string`, der den aktuellen Zeichenfolgenwert darstellt.
- `previous` {{optional_inline}}
  - : Ein `string`, der den vorherigen Zeichenfolgenwert darstellt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-StringDelta) API von Chromium.
