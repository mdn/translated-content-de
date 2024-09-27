---
title: downloads.show()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/show
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die **`show()`** Funktion der {{WebExtAPIRef("downloads")}} API zeigt die heruntergeladene Datei im zugrunde liegenden Datei-Manager des Plattform in ihrem enthaltenen Ordner an.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let showing = browser.downloads.show(
  downloadId             // integer
)
```

### Parameter

- `downloadId`
  - : Eine `integer`, die die ID des {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} darstellt, der angezeigt werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anfrage erfolgreich ist, wird das Promise mit einem boolean erfüllt, der angibt, ob die Anfrage erfolgreich war. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

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

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-show) API von Chromium.
