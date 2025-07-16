---
title: downloads.acceptDanger()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/acceptDanger
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Die **`acceptDanger()`**-Funktion des {{WebExtAPIRef("downloads")}} API fordert den Benutzer auf, entweder einen potenziell gefährlichen Download zu akzeptieren oder abzulehnen.

Diese Funktion kann nicht von Hintergrundskripten aufgerufen werden, sondern nur in Skripten, die in einem sichtbaren Fenster ausgeführt werden (wie zum Beispiel ein Popup einer Browser- oder Seitenaktion).

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

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Dieses API basiert auf dem [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-acceptDanger) API von Chromium.
