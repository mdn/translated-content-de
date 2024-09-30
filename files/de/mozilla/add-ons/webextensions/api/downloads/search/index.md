---
title: downloads.search()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/search
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die **`search()`** Funktion der {{WebExtAPIRef("downloads")}} API fragt die im Download-Manager des Browsers verfügbaren {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ab und gibt diejenigen zurück, die den angegebenen Suchkriterien entsprechen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let searching = browser.downloads.search(query);
```

### Parameter

- `query`
  - : Ein {{WebExtAPIRef('downloads.DownloadQuery')}} Objekt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Das Promise wird mit einem `array` von `{{WebExtAPIRef('downloads.DownloadItem')}}` Objekten erfüllt, die den angegebenen Kriterien entsprechen.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Im Allgemeinen beschränken Sie die abgerufenen Elemente unter Verwendung des `query` Parameters.

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

### Ein spezifisches Element abrufen

Um einen bestimmten {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} zu erhalten, ist es am einfachsten, nur das Feld `id` zu setzen, wie im folgenden Beispiel gezeigt:

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

Sie können den neuesten Download abrufen, indem Sie die folgenden Suchparameter angeben:

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
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-search) API von Chromium.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
