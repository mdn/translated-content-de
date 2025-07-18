---
title: bookmarks.get()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/get
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Angenommen Sie haben die ID eines {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}} oder ein Array solcher IDs, die Methode **`bookmarks.get()`** ruft die übereinstimmenden Knoten ab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getBookmarks = browser.bookmarks.get(
  idOrIdList                // string or string array
)
```

### Parameter

- `idOrIdList`
  - : Ein {{jsxref("string")}} oder {{jsxref("array")}} von Strings, die die IDs eines oder mehrerer {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} Objekte angeben, die abgerufen werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von [`BookmarkTreeNode`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) erfüllt wird, eines für jeden übereinstimmenden Knoten. Separatoren sind nicht in den Ergebnissen enthalten. Wenn keine Knoten gefunden werden können, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel versucht, das Lesezeichen abzurufen, dessen ID `bookmarkAAAA` ist. Falls kein Lesezeichen mit dieser ID existiert, wird `onRejected` aufgerufen:

```js
function onFulfilled(bookmarks) {
  console.log(bookmarks);
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

let gettingBookmarks = browser.bookmarks.get("bookmarkAAAA");
gettingBookmarks.then(onFulfilled, onRejected);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-get) API von Chromium. Diese Dokumentation stammt von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

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
