---
title: bookmarks.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ausgelöst, wenn es eine Änderung gibt bei:

- dem Titel oder der URL eines Lesezeichens
- dem Namen eines Ordners.

## Syntax

```js-nolint
browser.bookmarks.onChanged.addListener(listener)
browser.bookmarks.onChanged.removeListener(listener)
browser.bookmarks.onChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, auf dieses Ereignis zu hören. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `id`
      - : `string`. ID des Elements, das sich geändert hat.
    - `changeInfo`
      - : [`object`](#changeinfo). Objekt, das zwei Eigenschaften enthält: `title`, ein String, der den Titel des Elements enthält, und `url`, ein String, der die URL des Elements enthält. Wenn das Element ein Ordner ist, wird `url` weggelassen.

> [!NOTE]
> Mehrere Ereignisse können auftreten, wenn ein Lesezeichen sich ändert, und dieses changeInfo-Objekt kann nur die Daten enthalten, die sich geändert haben, anstatt aller Daten für das Lesezeichen. Mit anderen Worten, wenn sich die `url` eines Lesezeichens ändert, kann das changeInfo nur die neuen `url`-Informationen enthalten.

## Beispiele

```js
function handleChanged(id, changeInfo) {
  console.log(`Item: ${id} changed`);
  console.log(`Title: ${changeInfo.title}`);
  console.log(`Url: ${changeInfo.url}`);
}

function handleClick() {
  browser.bookmarks.onChanged.addListener(handleChanged);
}

browser.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#event-onChanged) API. Diese Dokumentation ist abgeleitet von [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) im Chromium-Code.

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
