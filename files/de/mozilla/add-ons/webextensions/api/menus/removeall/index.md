---
title: menus.removeAll()
slug: Mozilla/Add-ons/WebExtensions/API/menus/removeAll
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Entfernt alle vom Erweiterung hinzugefügten Menüeinträge.

Zur Kompatibilität mit anderen Browsern macht Firefox diese Methode sowohl über den `contextMenus`-Namespace als auch über den `menus`-Namespace verfügbar.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.menus.removeAll()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das erfüllt wird, ohne Argumente, wenn alle Einträge entfernt wurden.

## Beispiele

Dieses Beispiel fügt zwei Menüeinträge hinzu. Wenn der Benutzer auf den Eintrag mit der Bezeichnung "Remove all!" klickt, entfernt die Erweiterung beide Einträge mit `removeAll()`.

```js
function onRemoved() {
  console.log("items removed successfully");
}

browser.menus.create({
  id: "click-me",
  title: "Click me!",
  contexts: ["all"],
});

browser.menus.create({
  id: "remove-all",
  title: "Remove all!",
  contexts: ["all"],
});

browser.menus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "remove-all") {
    let removing = browser.menus.removeAll();
    removing.then(onRemoved);
  }
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#method-removeAll) API. Diese Dokumentation wird aus [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code abgeleitet.

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
