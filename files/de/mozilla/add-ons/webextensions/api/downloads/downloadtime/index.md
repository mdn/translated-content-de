---
title: downloads.DownloadTime
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadTime
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der `DownloadTime`-Typ der {{WebExtAPIRef("downloads")}} API repräsentiert die Zeit, die ein Download benötigt hat, um abgeschlossen zu werden.

## Typ

Ein `DownloadTime` kann einer von drei verschiedenen Typen sein:

- ein JavaScript [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Objekt.
- ein String:

  - wenn dieser nur Ziffern enthält, wird er als Anzahl der Millisekunden seit dem UNIX-Epoch interpretiert.
  - andernfalls wird er als ein [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-String interpretiert.

- eine Zahl: Diese wird als die Anzahl der Millisekunden seit dem UNIX-Epoch interpretiert.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-DownloadTime) API von Chromium.