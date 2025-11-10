---
title: downloads.pause()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/pause
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die **`pause()`**-Funktion der {{WebExtAPIRef("downloads")}} API pausiert einen Download.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let pausing = browser.downloads.pause(
  downloadId      // integer
)
```

### Parameter

- `downloadId`
  - : Ein `integer`, der die `id` des zu pausierenden Downloads darstellt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn der Aufruf erfolgreich war, wird der Download in einen pausierten Zustand versetzt, und das Promise wird ohne Argumente erfüllt. Wenn der Aufruf fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt. Der Aufruf schlägt fehl, wenn der Download nicht aktiv ist: zum Beispiel, weil er das Herunterladen abgeschlossen hat.

## Beispiele

```js
function onPaused() {
  console.log(`Paused download`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let pausing = browser.downloads.pause(downloadId);
pausing.then(onPaused, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-pause)-API von Chromium.
