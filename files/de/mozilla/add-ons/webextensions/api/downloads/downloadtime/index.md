---
title: downloads.DownloadTime
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadTime
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der `DownloadTime`-Typ des {{WebExtAPIRef("downloads")}}-APIs repräsentiert die Zeit, die ein Download zum Abschluss benötigte.

## Typ

Ein `DownloadTime` kann einer von drei verschiedenen Typen sein:

- ein JavaScript [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Objekt.
- ein String:

  - Enthält dieser nur Ziffern, wird er als die Anzahl der Millisekunden seit dem UNIX-Epoch interpretiert.
  - Andernfalls wird er als ein [ISO 8601](https://de.wikipedia.org/wiki/ISO_8601)-String interpretiert.

- eine Zahl: Diese wird als die Anzahl der Millisekunden seit dem UNIX-Epoch interpretiert.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Dieses API basiert auf dem [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-DownloadTime)-API von Chromium.
