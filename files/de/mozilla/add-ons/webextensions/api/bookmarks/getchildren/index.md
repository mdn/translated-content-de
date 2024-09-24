---
title: bookmarks.getChildren()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/getChildren
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

**`bookmarks.getChildren()`** ruft alle unmittelbaren Kinder eines Lesezeichenordners ab, der als {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}-ID identifiziert wird.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingChildren = browser.bookmarks.getChildren(
  id                     // string
)
```

### Parameter

- `id`
  - : Ein {{jsxref("string")}}, das die ID des Ordners angibt, dessen Kinder abgerufen werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von [`BookmarkTreeNode`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode)-Objekten erfüllt wird. Jeder Eintrag repräsentiert einen Knoten als Kind. Die Liste ist in der gleichen Reihenfolge wie die Lesezeichen in der Benutzeroberfläche angeordnet. Trennzeichen sind in den Ergebnissen enthalten. Die Liste beinhaltet Unterordner, jedoch keine Kinder in den Unterordnern.

Wenn der angegebene Knoten keine Kinder hat, ist das Array leer.

Wenn der durch `id` identifizierte Knoten nicht gefunden wird, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

```js
function onFulfilled(children) {
  for (child of children) {
    console.log(child.id);
  }
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

let gettingChildren = browser.bookmarks.getChildren("unfiled_____");
gettingChildren.then(onFulfilled, onRejected);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-getChildren) API von Chromium. Diese Dokumentation stammt von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

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
