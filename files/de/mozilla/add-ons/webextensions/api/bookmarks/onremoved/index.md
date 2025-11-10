---
title: bookmarks.onRemoved
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onRemoved
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn ein Lesezeichen oder Ordner entfernt wird. Wenn ein Ordner rekursiv entfernt wird, wird eine einzelne Benachrichtigung für den Ordner ausgelöst und keine für dessen Inhalte.

## Syntax

```js-nolint
browser.bookmarks.onRemoved.addListener(listener)
browser.bookmarks.onRemoved.removeListener(listener)
browser.bookmarks.onRemoved.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
    - `id`
      - : `string`. ID des Elements, das entfernt wurde.
    - `removeInfo`
      - : `object`. Weitere Details zu dem entfernten Element. Siehe den Abschnitt [removeInfo](#removeinfo_2) für mehr Details.

## Zusätzliche Objekte

### removeInfo

- `parentId`
  - : `string`. ID des übergeordneten Elements im Baum.
- `index`
  - : `integer`. Null-basierter Index der Position dieses Elements bei seinem übergeordneten Element.
- `node`
  - : {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}}. Detaillierte Informationen über das entfernte Element.

## Beispiele

```js
function handleRemoved(id, removeInfo) {
  console.log(`Item: ${id} removed`);
  console.log(`Title: ${removeInfo.node.title}`);
  console.log(`URL: ${removeInfo.node.url}`);
}

function handleClick() {
  browser.bookmarks.onRemoved.addListener(handleRemoved);
}

browser.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#event-onRemoved) API. Diese Dokumentation stammt aus [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

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
