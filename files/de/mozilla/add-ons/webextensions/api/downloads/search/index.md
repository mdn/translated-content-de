---
title: downloads.search()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/search
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die **`search()`** Funktion der {{WebExtAPIRef("downloads")}} API durchsucht die im Download-Manager des Browsers verfügbaren {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} und gibt diejenigen zurück, die den angegebenen Suchkriterien entsprechen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let searching = browser.downloads.search(query);
```

### Parameter

- `query`
  - : Ein {{WebExtAPIRef('downloads.DownloadQuery')}} Objekt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Das Promise wird mit einem `Array` von `{{WebExtAPIRef('downloads.DownloadItem')}}` Objekten erfüllt, die den angegebenen Kriterien entsprechen.

## Kompatibilität mit Browsern

{{Compat}}

## Beispiele

Im Allgemeinen schränken Sie die abgerufenen Elemente mit dem Parameter `query` ein.

### Downloads abrufen, die "query" entsprechen

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

Um ein bestimmtes {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} zu erhalten, ist es am einfachsten, nur das Feld `id` zu setzen, wie im folgenden Schnipsel zu sehen:

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

Wenn Sie alle {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} zurückgeben möchten, setzen Sie `query` auf ein leeres Objekt.

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

Den neuesten Download können Sie erhalten, indem Sie die folgenden Suchparameter angeben:

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

Sie können diesen Code in unserem [latest-download](https://github.com/mdn/webextensions-examples/blob/main/latest-download/popup/latest_download.js) Beispiel in Aktion sehen.

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-search) API.
