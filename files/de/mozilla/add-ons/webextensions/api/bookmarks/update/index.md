---
title: bookmarks.update()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/update
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

**`bookmarks.update()`** aktualisiert den Titel und/oder die URL eines Lesezeichens oder den Namen eines Lesezeichenordners.

> [!WARNING]
> Wenn Ihre Erweiterung versucht, ein Lesezeichen im Wurzelknoten des Lesezeichenbaums zu aktualisieren, wird ein Fehler mit der Nachricht: "Der Lesezeichenstamm kann nicht geändert werden" ausgelöst, und das Lesezeichen wird nicht aktualisiert.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let updating = browser.bookmarks.update(
  id,                    // string
  changes                // object
)
```

### Parameter

- `id`
  - : Ein {{jsxref("string")}}, das die ID des Lesezeichens oder des Lesezeichenordners angibt, das bzw. der aktualisiert werden soll.
- `changes`
  - : Ein {{jsxref("object")}}, das die anzuwendenden Änderungen angibt, mit einer Kombination der folgenden Felder. Alle nicht angegebenen Elemente werden im referenzierten Lesezeichen oder Ordner nicht geändert:
    - `title` {{optional_inline}}
      - : Ein {{jsxref("string")}}, das den neuen Titel des Lesezeichens enthält oder den neuen Namen des Ordners, falls `id` sich auf einen Ordner bezieht.
    - `url` {{optional_inline}}
      - : Ein {{jsxref("string")}}, das eine neue URL für das Lesezeichen bereitstellt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem einzigen [`bookmarks.BookmarkTreeNode`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode)-Objekt erfüllt wird, das das aktualisierte Lesezeichen darstellt. Wenn das Lesezeichenelement, das dem `id`-Parameter entspricht, nicht gefunden werden kann, wird das Promise abgelehnt.

## Beispiele

Dieses Beispiel benennt alle Ordner mit dem Namen "MDN" in "Mozilla Developer Network (MDN)" um.

```js
function onFulfilled(bookmarkItem) {
  console.log(bookmarkItem.title);
}

function onRejected(error) {
  console.error(`Error: ${error}`);
}

function updateFolders(items) {
  for (const item of items) {
    // only folders, so skip items with a `url`
    if (!item.url) {
      browser.bookmarks
        .update(item.id, {
          title: "Mozilla Developer Network (MDN)",
        })
        .then(onFulfilled, onRejected);
    }
  }
}

browser.bookmarks.search({ title: "MDN" }).then(updateFolders, onRejected);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-update)-API von Chromium. Diese Dokumentation stammt aus [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

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
