---
title: downloads.DownloadTime
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadTime
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der `DownloadTime` Typ der {{WebExtAPIRef("downloads")}} API stellt die Zeit dar, die ein Download benötigt hat, um abgeschlossen zu werden.

## Typ

Ein `DownloadTime` kann einer von drei verschiedenen Typen sein:

- ein JavaScript [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt.
- ein String:
  - wenn dieser nur Ziffern enthält, wird er als Anzahl der Millisekunden seit dem UNIX-Epoch interpretiert.
  - andernfalls wird er als ein [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) String interpretiert.

- eine Zahl: Diese wird als die Anzahl der Millisekunden seit dem UNIX-Epoch interpretiert.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-DownloadTime) API.
