---
title: downloads.acceptDanger()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/acceptDanger
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Funktion **`acceptDanger()`** der {{WebExtAPIRef("downloads")}} API fordert den Benutzer auf, entweder einen potenziell gefährlichen Download zu akzeptieren oder abzulehnen.

Diese Funktion kann nicht von Hintergrundskripten aufgerufen werden, sondern nur in Skripten, die in einem sichtbaren Fenster ausgeführt werden (z. B. das Popup einer Browseraktion oder Seitenaktion).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let prompting = browser.downloads.acceptDanger(
  downloadId      // integer
)
```

### Parameter

- `downloadId`
  - : Ein `integer`, der die `id` des betreffenden {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} darstellt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn der Dialog geschlossen wird, wird das Promise ohne Argumente erfüllt.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-acceptDanger) API.
