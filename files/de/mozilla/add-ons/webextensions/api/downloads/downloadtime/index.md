---
title: downloads.DownloadTime
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadTime
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Der `DownloadTime`-Typ der {{WebExtAPIRef("downloads")}} API repräsentiert die Zeit, die ein Download benötigt hat, um abgeschlossen zu werden.

## Typ

Ein `DownloadTime` kann einer von drei verschiedenen Typen sein:

- ein JavaScript-Objekt vom Typ [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date).
- ein String:

  - Wenn dieser nur Ziffern enthält, wird er als die Anzahl der Millisekunden seit dem UNIX-Epoch interpretiert.
  - Andernfalls wird er als [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-String interpretiert.

- eine Zahl: Diese wird als die Anzahl der Millisekunden seit dem UNIX-Epoch interpretiert.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-DownloadTime) API.
