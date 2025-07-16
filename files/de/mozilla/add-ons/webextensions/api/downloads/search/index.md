---
title: downloads.search()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/search
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Die Funktion **`search()`** der {{WebExtAPIRef("downloads")}} API durchsucht die im Download-Manager des Browsers verfügbaren {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} und gibt diejenigen zurück, die den angegebenen Suchkriterien entsprechen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let searching = browser.downloads.search(query);
```

### Parameter

- `query`
  - : Ein {{WebExtAPIRef('downloads.DownloadQuery')}} Objekt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Das Promise wird mit einem `array` von {{WebExtAPIRef('downloads.DownloadItem')}} Objekten erfüllt, die den angegebenen Kriterien entsprechen.

## Beispiele

Im Allgemeinen schränken Sie die abgerufenen Elemente durch den `query`-Parameter ein.

### Downloads finden, die "query" entsprechen

```js
function logDownloads(downloads) {
  for (const download of downloads) {
    console.log(download.id);
    console.log(download.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.downloads
  .search({
    query: ["imgur"],
  })
  .then(logDownloads, onError);
```

### Ein bestimmtes Element abrufen

Um ein bestimmtes {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} abzurufen, ist es am einfachsten, nur das `id`-Feld zu setzen, wie im folgenden Beispiel gezeigt:

```js
function logDownloads(downloads) {
  for (const download of downloads) {
    console.log(download.id);
    console.log(download.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

const id = 13;

browser.downloads.search({ id }).then(logDownloads, onError);
```

### Alle Downloads abrufen

Möchten Sie alle {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} zurückgeben, setzen Sie `query` auf ein leeres Objekt.

```js
function logDownloads(downloads) {
  for (const download of downloads) {
    console.log(download.id);
    console.log(download.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.downloads.search({}).then(logDownloads, onError);
```

### Den neuesten Download abrufen

Den neuesten Download können Sie abrufen, indem Sie die folgenden Suchparameter angeben:

```js
function logDownloads(downloads) {
  for (const download of downloads) {
    console.log(download.id);
    console.log(download.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.downloads
  .search({
    limit: 1,
    orderBy: ["-startTime"],
  })
  .then(logDownloads, onError);
```

Dieses Beispiel können Sie in unserem [latest-download](https://github.com/mdn/webextensions-examples/blob/main/latest-download/popup/latest_download.js) Beispiel sehen.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-search) API von Chromium.
