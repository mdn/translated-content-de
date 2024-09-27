---
title: downloads.resume()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/resume
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Funktion **`resume()`** der {{WebExtAPIRef("downloads")}} API setzt einen pausierten Download fort. Wenn die Anfrage erfolgreich war, wird der Download fortgesetzt und der Fortschritt wird wieder aufgenommen. Der Aufruf von `resume()` schlägt fehl, wenn der Download nicht aktiv ist: zum Beispiel, weil der Download abgeschlossen ist.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let resuming = browser.downloads.resume(
  downloadId      // integer
)
```

### Parameter

- `downloadId`
  - : Ein `integer`, der die `id` des Downloads darstellt, der fortgesetzt werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anfrage erfolgreich war, wird das Versprechen ohne Argumente erfüllt. Wenn die Anfrage fehlgeschlagen ist, wird das Versprechen mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

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

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-resume) API von Chromium.
