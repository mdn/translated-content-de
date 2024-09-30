---
title: downloads.open()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/open
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Funktion **`open()`** der {{WebExtAPIRef("downloads")}} API öffnet die heruntergeladene Datei mit der zugeordneten Anwendung. Ein {{WebExtAPIRef("downloads.onChanged")}}-Ereignis wird ausgelöst, wenn das Element zum ersten Mal geöffnet wird.

Um diese Funktion in Ihrer Erweiterung zu verwenden, müssen Sie die "downloads.open" [Manifest-Erlaubnis](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) sowie die "downloads"-Erlaubnis anfordern. Außerdem können Sie diese Funktion nur innerhalb des Handlers für eine [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) aufrufen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let opening = browser.downloads.open(
  downloadId      // integer
)
```

### Parameter

- `downloadId`  
  - : Ein `integer`, der die `id` des {{WebExtAPIRef("downloads.DownloadItem")}} darstellt, das Sie öffnen möchten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anfrage erfolgreich ist, wird das Promise ohne Argumente erfüllt. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

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

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-open) API von Chromium.

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
