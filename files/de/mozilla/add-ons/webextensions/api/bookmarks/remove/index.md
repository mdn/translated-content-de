---
title: bookmarks.remove()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/remove
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die Methode **`bookmarks.remove()`** entfernt ein einzelnes Lesezeichen oder einen leeren Lesezeichenordner.

> [!WARNING]
> Wenn Ihre Erweiterung versucht, ein Lesezeichen aus dem Stammknoten des Lesezeichenbaums zu entfernen, wird ein Fehler mit der Meldung "The bookmark root cannot be modified" ausgelöst und das Lesezeichen wird nicht entfernt.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removingBookmark = browser.bookmarks.remove(
  id                 // string
)
```

### Parameter

- `id`
  - : Eine {{jsxref("string")}}, die die ID des zu entfernenden Lesezeichens oder des leeren Ordners angibt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird.

Wenn der Knoten, der dem `id`-Parameter entspricht, nicht gefunden werden kann oder ein nicht-leerer Ordner war, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

```js
function onRemoved() {
  console.log("Removed!");
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

let bookmarkId = "abcdefghijkl";

let removingBookmark = browser.bookmarks.remove(bookmarkId);
removingBookmark.then(onRemoved, onRejected);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-remove) API von Chromium. Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

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
