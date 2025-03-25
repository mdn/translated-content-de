---
title: downloads.search()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/search
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
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
  - : Ein {{WebExtAPIRef('downloads.DownloadQuery')}}-Objekt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Das Promise wird mit einem `array` von {{WebExtAPIRef('downloads.DownloadItem')}}-Objekten erfüllt, die den gegebenen Kriterien entsprechen.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Im Allgemeinen schränken Sie die abgerufenen Elemente mit dem `query`-Parameter ein.

### Downloads abrufen, die mit "query" übereinstimmen

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

Um ein bestimmtes {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} abzurufen, ist der einfachste Weg, nur das `id`-Feld festzulegen, wie im folgenden Beispiel zu sehen:

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

### Den aktuellsten Download abrufen

Sie können den aktuellsten Download abrufen, indem Sie die folgenden Suchparameter angeben:

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

Sie können dieses Codebeispiel in unserem [latest-download](https://github.com/mdn/webextensions-examples/blob/main/latest-download/popup/latest_download.js)-Beispiel sehen.

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-search).

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
