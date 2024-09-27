---
title: downloads.DoubleDelta
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DoubleDelta
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der `DoubleDelta`-Typ der {{WebExtAPIRef("downloads")}} API repräsentiert die Differenz zwischen zwei `doubles`.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `current` {{optional_inline}}
  - : Eine `number`, die den aktuellen `double`-Wert darstellt.
- `previous` {{optional_inline}}
  - : Eine `number`, die den vorherigen `double`-Wert darstellt.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-DoubleDelta) API.
