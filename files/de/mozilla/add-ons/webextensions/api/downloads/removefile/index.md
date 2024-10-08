---
title: downloads.removeFile()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/removeFile
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Funktion **`removeFile()`** der {{WebExtAPIRef("downloads")}} API entfernt eine heruntergeladene Datei von der Festplatte.

Diese API entfernt die Datei von der Festplatte, jedoch nicht aus der Download-Historie des Browsers. Daher wird ein Aufruf von {{WebExtAPIRef("downloads.search()")}} das Element immer noch als {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} zurückliefern, aber sein `exists`-Attribut wird `false` sein.

Um eine Datei aus der Download-Historie zu entfernen, müssen Sie {{WebExtAPIRef("downloads.erase()")}} verwenden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

> [!NOTE]
> Wenn Sie eine heruntergeladene Datei sowohl von der Festplatte entfernen als auch aus der Historie löschen möchten, müssen Sie `removeFile()` vor {{WebExtAPIRef("downloads.erase()")}} aufrufen. Wenn Sie es andersherum versuchen, erhalten Sie einen Fehler beim Aufruf von `removeFile()`, da der Browser keinen Eintrag des Downloads mehr hat.

## Syntax

```js-nolint
let removing = browser.downloads.removeFile(
  downloadId      // integer
)
```

### Parameter

- `downloadId`
  - : Ein `integer`, der die ID des {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} repräsentiert, das Sie von der Festplatte löschen möchten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anforderung erfolgreich war, wird das Promise ohne Argumente erfüllt. Wenn die Anforderung fehlschlug, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Die zuletzt heruntergeladene Datei entfernen:

```js
function onRemoved() {
  console.log(`Removed item`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function remove(downloadItems) {
  if (downloadItems.length > 0) {
    let removing = browser.downloads.removeFile(downloadItems[0].id);
    removing.then(onRemoved, onError);
  }
}

let searching = browser.downloads.search({
  limit: 1,
  orderBy: ["-startTime"],
});

searching.then(remove, onError);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-removeFile)-API von Chromium.

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
