---
title: downloads.cancel()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/cancel
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Die **`cancel()`**-Funktion der {{WebExtAPIRef("downloads")}} API bricht einen Download ab. Der Aufruf wird fehlschlagen, wenn der Download nicht aktiv ist: zum Beispiel, weil er bereits abgeschlossen wurde.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let canceling = browser.downloads.cancel(
  downloadId      // integer
)
```

### Parameter

- `downloadId`
  - : `integer`. Die ID des abzubrechenden Downloads.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anforderung erfolgreich war, wird das Promise ohne Argumente erfüllt. Wenn die Anforderung fehlschlug, wird das Promise mit einer Fehlermeldung abgelehnt.

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
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-cancel) API von Chromium.
