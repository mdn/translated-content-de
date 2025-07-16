---
title: downloads.erase()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/erase
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Die **`erase()`**-Funktion der {{WebExtAPIRef("downloads")}} API löscht passende {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} aus dem Download-Verlauf des Browsers, ohne die heruntergeladenen Dateien von der Festplatte zu löschen.

Um die Dateien von der Festplatte zu entfernen, müssen Sie {{WebExtAPIRef("downloads.removeFile()")}} verwenden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

> [!NOTE]
> Wenn Sie eine heruntergeladene Datei von der Festplatte entfernen _und_ aus dem Verlauf löschen möchten, müssen Sie {{WebExtAPIRef("downloads.removeFile()")}} aufrufen, bevor Sie `erase()` aufrufen. Wenn Sie es umgekehrt versuchen, erhalten Sie einen Fehler beim Aufruf von {{WebExtAPIRef("downloads.removeFile()")}}, da es laut dem Browser nicht mehr existiert.

## Syntax

```js-nolint
let erasing = browser.downloads.erase(
  query                    // DownloadQuery
)
```

### Parameter

- `query`
  - : Ein Objekt vom Typ {{WebExtAPIRef('downloads.DownloadQuery')}}.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn der Aufruf erfolgreich war, wird das Promise mit einem Array von ganzen Zahlen erfüllt, die die IDs der gelöschten {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} darstellen. Wenn keine Elemente gefunden wurden, die dem Abfrageparameter entsprechen, wird das Array leer sein. Wenn der Aufruf fehlschlug, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Den letzten Download löschen:

```js
function onErased(ids) {
  console.log(`Erased: ${ids}`);
}

function onError(error) {
  console.log(`Error erasing item: ${error}`);
}

let erasing = browser.downloads.erase({
  limit: 1,
  orderBy: ["-startTime"],
});

erasing.then(onErased, onError);
```

Alles löschen:

```js
function onErased(ids) {
  console.log(`Erased: ${ids}`);
}

function onError(error) {
  console.log(`Error erasing item: ${error}`);
}

let erasing = browser.downloads.erase({});
erasing.then(onErased, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-erase) API von Chromium.

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
