---
title: downloads.open()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/open
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Die **`open()`** Funktion der {{WebExtAPIRef("downloads")}} API öffnet die heruntergeladene Datei mit der zugehörigen Anwendung. Ein {{WebExtAPIRef("downloads.onChanged")}} Ereignis wird ausgelöst, wenn das Element zum ersten Mal geöffnet wird.

Um diese Funktion in Ihrer Erweiterung zu verwenden, müssen Sie um die "downloads.open" [Manifest-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) sowie die "downloads" Berechtigung bitten. Zudem können Sie diese Funktion nur innerhalb des Handlers für eine [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) aufrufen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let opening = browser.downloads.open(
  downloadId      // integer
)
```

### Parameter

- `downloadId`
  - : Ein `integer`, der die `id` des {{WebExtAPIRef("downloads.DownloadItem")}} darstellt, den Sie öffnen möchten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anfrage erfolgreich ist, wird das Promise ohne Argumente erfüllt. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel öffnet das zuletzt heruntergeladene Element:

```js
function onOpened() {
  console.log(`Opened download item`);
}

function onError(error) {
  console.log(`Error opening item: ${error}`);
}

function openDownload(downloadItems) {
  if (downloadItems.length > 0) {
    let opening = browser.downloads.open(downloadItems[0].id);
    opening.then(onOpened, onError);
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
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-open) API von Chromium.
