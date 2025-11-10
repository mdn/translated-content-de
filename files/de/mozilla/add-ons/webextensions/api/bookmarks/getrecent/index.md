---
title: bookmarks.getRecent()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/getRecent
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die Methode `bookmarks.getRecent()` ruft eine spezifizierte Anzahl der zuletzt hinzugefügten Lesezeichen als ein Array von {{WebExtAPIRef('bookmarks.BookmarkTreeNode', 'BookmarkTreeNode')}}-Objekten ab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingRecent = browser.bookmarks.getRecent(
  numberOfItems          // integer
)
```

### Parameter

- `numberOfItems`
  - : Eine Zahl, die die maximale Anzahl der zurückzugebenden Elemente darstellt. Die zurückgegebene Liste wird bis zu so viele der zuletzt hinzugefügten Elemente enthalten. Der minimal erlaubte Wert hier ist 1. Wenn Sie 0 oder weniger übergeben, wird die Funktion einen Fehler auslösen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von [`BookmarkTreeNode`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode)-Objekten erfüllt wird.

## Beispiele

Dieses Beispiel protokolliert die URL des zuletzt hinzugefügten Lesezeichens:

```js
function onFulfilled(bookmarks) {
  for (const bookmark of bookmarks) {
    console.log(bookmark.url);
  }
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

browser.bookmarks.getRecent(1).then(onFulfilled, onRejected);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-getRecent)-API von Chromium. Diese Dokumentation ist von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code abgeleitet.

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
