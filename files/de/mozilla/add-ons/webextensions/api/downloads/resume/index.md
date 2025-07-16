---
title: downloads.resume()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/resume
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Die **`resume()`** Funktion der {{WebExtAPIRef("downloads")}} API setzt einen angehaltenen Download fort. Wenn die Anforderung erfolgreich war, wird der Download fortgesetzt und der Fortschritt geht weiter. Der Aufruf von `resume()` schlägt fehl, wenn der Download nicht aktiv ist: Zum Beispiel, weil er bereits abgeschlossen ist.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let resuming = browser.downloads.resume(
  downloadId      // integer
)
```

### Parameter

- `downloadId`
  - : Ein `integer`, der die `id` des fortzusetzenden Downloads darstellt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anfrage erfolgreich war, wird das Promise ohne Argumente erfüllt. Wenn die Anfrage fehlgeschlagen ist, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

```js
let downloadId = 2;

function onResumed() {
  console.log(`Resumed download`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let resuming = browser.downloads.resume(downloadId);
resuming.then(onResumed, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-resume) API.
