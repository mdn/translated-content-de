---
title: bookmarks.onChildrenReordered
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onChildrenReordered
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Wird ausgelöst, wenn sich die Reihenfolge der Kinder eines Ordners geändert hat, weil die Reihenfolge in der Benutzeroberfläche sortiert wurde. Dies wird nicht durch einen Aufruf von {{WebExtAPIRef("bookmarks.move()")}} oder eine Drag & Drop-Operation in der Benutzeroberfläche ausgelöst.

## Syntax

```js-nolint
browser.bookmarks.onChildrenReordered.addListener(listener)
browser.bookmarks.onChildrenReordered.removeListener(listener)
browser.bookmarks.onChildrenReordered.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, dieses Ereignis zu überwachen. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüfen Sie, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, ansonsten `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
    - `id`
      - : `string`. ID des Ordners, dessen Kinder neu geordnet wurden.
    - `reorderInfo`
      - : `object`. Objekt, das zusätzliche Objekte enthält. Siehe den Abschnitt [reorderInfo](#reorderinfo_2) für weitere Details.

## Zusätzliche Objekte

### reorderInfo

- `childIds`
  - : `array` von `string`. Array, das die IDs aller Lesezeichenobjekte in diesem Ordner in der Reihenfolge enthält, in der sie jetzt in der Benutzeroberfläche angezeigt werden.

## Beispiele

```js
function handleChildrenReordered(id, reorderInfo) {
  console.log(`Item: ${id} children reordered`);
  console.log(`Children: ${reorderInfo.childIds}`);
}

function handleClick() {
  browser.bookmarks.onChildrenReordered.addListener(handleChildrenReordered);
}

browser.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#event-onChildrenReordered) API von Chromium. Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

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
