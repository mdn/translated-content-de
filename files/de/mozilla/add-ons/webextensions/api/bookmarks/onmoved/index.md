---
title: bookmarks.onMoved
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onMoved
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Lesezeichen oder ein Ordner in einen anderen übergeordneten Ordner oder an eine andere Position innerhalb eines Ordners verschoben wird.

> [!NOTE]
> Wenn Sie mehrere Lesezeichen verschieben, kann aufgrund der asynchronen Natur dieser API die Reihenfolge der Bearbeitung der Verschiebungen beliebig sein. Folglich kann sich der Wert des Indexes jedes Lesezeichens ändern oder unbekannt sein, bis alle Verschiebevorgänge abgeschlossen sind. Wenn der Index in Zusammenhang mit einem Lesezeichen für Ihre Erweiterung wichtig ist, sollte die Erweiterung – beim Verschieben mehrerer Lesezeichen – auf den Abschluss jedes `bookmarks.move`-Aufrufs warten, bevor das nächste Lesezeichen verschoben wird. Das Warten stellt sicher, dass der Index, der jedem Lesezeichen zugeordnet ist, nicht von einer gleichzeitig ausgeführten Verschiebung betroffen ist, während der ursprüngliche Aufruf noch in Bearbeitung ist.

## Syntax

```js-nolint
browser.bookmarks.onMoved.addListener(listener)
browser.bookmarks.onMoved.removeListener(listener)
browser.bookmarks.onMoved.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören dieses Ereignisses. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `id`
      - : `string`. ID des verschobenen Elements.
    - `moveInfo`
      - : `object`. Objekt mit weiteren Details zur Verschiebung. Weitere Informationen finden Sie im Abschnitt [moveInfo](#moveinfo_2).

## Zusätzliche Objekte

### moveInfo

- `parentId`
  - : `string`. Der neue übergeordnete Ordner.
- `index`
  - : `integer`. Der neue Index dieses Elements im übergeordneten Ordner.
- `oldParentId`
  - : `string`. Der alte übergeordnete Ordner.
- `oldIndex`
  - : `integer`. Der alte Index des Elements im übergeordneten Ordner.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
function handleMoved(id, moveInfo) {
  console.log(`Item: ${id} moved`);
  console.log(`Old index: ${moveInfo.oldIndex}`);
  console.log(`New index: ${moveInfo.index}`);
  console.log(`Old folder: ${moveInfo.oldParentId}`);
  console.log(`New folder: ${moveInfo.parentId}`);
}

function handleClick() {
  browser.bookmarks.onMoved.addListener(handleMoved);
}

browser.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#event-onMoved) API von Chromium. Diese Dokumentation ist aus [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code abgeleitet.

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
