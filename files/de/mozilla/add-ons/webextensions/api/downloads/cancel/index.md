---
title: downloads.cancel()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/cancel
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die **`cancel()`** Funktion der {{WebExtAPIRef("downloads")}} API bricht einen Download ab. Der Aufruf schlägt fehl, wenn der Download nicht aktiv ist: zum Beispiel, weil er bereits abgeschlossen ist.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let canceling = browser.downloads.cancel(
  downloadId      // integer
)
```

### Parameter

- `downloadId`
  - : `integer`. Die ID des Downloads, der abgebrochen werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anfrage erfolgreich war, wird das Promise ohne Argumente erfüllt. Wenn die Anfrage fehlschlug, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

```js
let downloadId = 13;

function onCanceled() {
  console.log(`Canceled download`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let canceling = browser.downloads.cancel(downloadId);
canceling.then(onCanceled, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-cancel) API.
