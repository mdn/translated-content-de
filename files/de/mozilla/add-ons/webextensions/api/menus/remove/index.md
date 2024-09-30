---
title: menus.remove()
slug: Mozilla/Add-ons/WebExtensions/API/menus/remove
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Entfernt ein Menüelement.

Um die Kompatibilität mit anderen Browsern zu gewährleisten, stellt Firefox diese Methode sowohl über den Namespace `contextMenus` als auch über den Namespace `menus` bereit.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.menus.remove(
  menuItemId      // integer or string
)
```

### Parameter

- `menuItemId`
  - : `integer` oder `string`. Die ID des zu entfernenden Menüelements.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn die Entfernung erfolgreich war, oder mit einer Fehlermeldung abgelehnt, wenn die Entfernung fehlschlug (zum Beispiel, weil das Element nicht gefunden werden konnte).

## Beispiele

Diese Erweiterung fügt ein Menüelement mit der Beschriftung "Remove me!" hinzu. Wenn Sie auf das Element klicken, entfernt die Erweiterung es.

```js
function onRemoved() {
  console.log("item removed successfully");
}

function onError() {
  console.log("error removing item:", browser.runtime.lastError);
}

browser.menus.create({
  id: "remove-me",
  title: "Remove me!",
  contexts: ["all"],
});

browser.menus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "remove-me") {
    let removing = browser.menus.remove(info.menuItemId);
    removing.then(onRemoved, onError);
  }
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#method-remove) API. Diese Dokumentation stammt aus [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.

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
