---
title: bookmarks.getTree()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/getTree
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

**`bookmarks.getTree()`** gibt ein Array zurück, das die Wurzel des Lesezeichenbaums als {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}}-Objekt enthält.

Sie können den gesamten Baum rekursiv über seine `children`-Eigenschaft und die `children`-Eigenschaft seiner Nachkommen durchsuchen, wenn diese selbst Ordner sind.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingTree = browser.bookmarks.getTree()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array erfüllt wird, das ein Objekt enthält, ein [`bookmarks.BookmarkTreeNode`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode)-Objekt, das den Wurzelknoten darstellt.

## Beispiele

Dieses Beispiel gibt den gesamten Lesezeichenbaum aus:

```js
function makeIndent(indentLength) {
  return ".".repeat(indentLength);
}

function logItems(bookmarkItem, indent) {
  if (bookmarkItem.url) {
    console.log(makeIndent(indent) + bookmarkItem.url);
  } else {
    console.log(`${makeIndent(indent)}Folder`);
    indent++;
  }
  if (bookmarkItem.children) {
    for (const child of bookmarkItem.children) {
      logItems(child, indent);
    }
  }
  indent--;
}

function logTree(bookmarkItems) {
  logItems(bookmarkItems[0], 0);
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

let gettingTree = browser.bookmarks.getTree();
gettingTree.then(logTree, onRejected);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-getTree) API. Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

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
