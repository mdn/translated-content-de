---
title: downloads.show()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/show
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die **`show()`** Funktion der {{WebExtAPIRef("downloads")}} API zeigt die heruntergeladene Datei im entsprechenden Ordner im Dateimanager der zugrunde liegenden Plattform an.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let showing = browser.downloads.show(
  downloadId             // integer
)
```

### Parameter

- `downloadId`
  - : Ein `integer`, der die ID des {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} darstellt, das angezeigt werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anfrage erfolgreich ist, wird das Promise mit einem boolean erfüllt, der angibt, ob die Anfrage erfolgreich war. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel zeigt das zuletzt heruntergeladene Element:

```js
function onShowing(success) {
  console.log(`Showing download item: ${success}`);
}

function onError(error) {
  console.log(`Error opening item: ${error}`);
}

function openDownload(downloadItems) {
  if (downloadItems.length > 0) {
    latestDownloadId = downloadItems[0].id;
    let showing = browser.downloads.show(latestDownloadId);
    showing.then(onShowing, onError);
  }
}

let searching = browser.downloads.search({
  limit: 1,
  orderBy: ["-startTime"],
});

searching.then(openDownload, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-show) API.
