---
title: bookmarks.move()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/move
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Methode **`bookmarks.move()`** verschiebt den angegebenen {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} an das angegebene Ziel innerhalb des Lesezeichenbaums. Damit können Sie ein Lesezeichen in einen neuen Ordner und/oder an eine neue Position innerhalb des Ordners verschieben.

> [!WARNING]
> Wenn Ihre Erweiterung versucht, ein Lesezeichen in den Wurzelknoten des Lesezeichenbaums zu verschieben, wird ein Fehler mit der Meldung ausgelöst: "_The bookmark root cannot be modified_" und die Verschiebung wird nicht abgeschlossen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let movingBookmark = browser.bookmarks.move(
  id,                    // string
  destination           // object
)
```

### Parameter

- `id`
  - : Ein {{jsxref("string")}}, das die ID des zu verschiebenden Lesezeichens oder Ordners enthält.
- `destination`

  - : Ein {{jsxref("object")}}, welches das Ziel für das Lesezeichen angibt. Dieses Objekt muss eines oder beide der folgenden Felder enthalten:

    - `parentId` {{optional_inline}}
      - : Ein {{jsxref("string")}}, das die ID des Zielordners angibt. Wenn dieser Wert weggelassen wird, wird das Lesezeichen an einen neuen Ort innerhalb seines aktuellen Ordners verschoben.
    - `index` {{optional_inline}}
      - : Ein 0-basierter Index, der die Position innerhalb des Ordners angibt, an die das Lesezeichen verschoben werden soll. Ein Wert von 0 verschiebt das Lesezeichen an den Anfang des Ordners. Wenn dieser Wert ausgelassen wird, wird das Lesezeichen am Ende des neuen übergeordneten Ordners platziert.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem einzigen [`bookmarks.BookmarkTreeNode`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) Objekt erfüllt wird, das den verschobenen Knoten beschreibt.

Wenn der Knoten, der dem `id`-Parameter entspricht, nicht gefunden werden kann, wird das Promise mit einer Fehlermeldung abgelehnt.

> [!NOTE]
> Wenn Sie mehrere Lesezeichen verschieben, kann aufgrund dieser asynchronen API die Reihenfolge der Verschiebeoperationen beliebig verarbeitet werden. Folglich kann sich der Wert des Indexes jedes Lesezeichens, der in {{WebExtAPIRef('bookmarks.BookmarkTreeNode', 'BookmarkTreeNode')}} zurückgegeben wird, ändern oder unbekannt sein, bis alle Verschiebeoperationen abgeschlossen sind. Wenn der Index, der einem Lesezeichen zugeordnet ist, für Ihre Erweiterung wichtig ist, sollte – wenn mehrere Lesezeichen verschoben werden – die Erweiterung darauf warten, dass jeder `bookmarks.move`-Aufruf abgeschlossen ist, bevor das nächste Lesezeichen verschoben wird. Das Warten stellt sicher, dass der mit jedem Lesezeichen verbundene Index nicht von einer gleichzeitig ausgeführten Verschiebeoperation beeinflusst wird, während der ursprüngliche Aufruf noch in Bearbeitung ist.

## Beispiele

Dieses Beispiel verschiebt ein Lesezeichen, sodass es das erste Lesezeichen in seinem aktuellen Ordner ist.

```js
function onMoved(bookmarkItem) {
  console.log(bookmarkItem.index);
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

let bookmarkId = "abcdefghijkl";

let movingBookmark = browser.bookmarks.move(bookmarkId, { index: 0 });
movingBookmark.then(onMoved, onRejected);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-move) API von Chromium. Diese Dokumentation stammt von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

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