---
title: browsingData.removeLocalStorage()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeLocalStorage
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Löscht jeglichen von Websites erstellten [lokalen Speicher](/de/docs/Web/API/Window/localStorage).

Sie können den Parameter `removalOptions` verwenden, der ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt ist, um:

- nur lokale Speicherobjekte zu löschen, die nach einem bestimmten Zeitpunkt erstellt wurden
- zu steuern, ob nur lokale Speicherobjekte von normalen Webseiten gelöscht werden sollen oder ob auch Objekte von gehosteten Apps und Erweiterungen gelöscht werden sollen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.browsingData.removeLocalStorage(
  removalOptions            // RemovalOptions object
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt, welches verwendet werden kann, um nur lokale Speicherobjekte zu löschen, die von normalen Webseiten erstellt wurden oder um Objekte, die von gehosteten Apps und Erweiterungen erstellt wurden, ebenfalls zu löschen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Entfernen abgeschlossen ist. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Alle lokalen Speicher entfernen:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removeLocalStorage({}).then(onRemoved, onError);
```

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API.

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
