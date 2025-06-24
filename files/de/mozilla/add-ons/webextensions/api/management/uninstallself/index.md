---
title: management.uninstallSelf()
slug: Mozilla/Add-ons/WebExtensions/API/management/uninstallSelf
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Deinstalliert das aufrufende Add-on.

Diese API _erfordert nicht_ die Berechtigung "management" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

Diese Funktion ist asynchron und gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück.

## Syntax

```js-nolint
let uninstallingSelf = browser.management.uninstallSelf(
  options              // object
)
```

### Parameter

- `options` {{optional_inline}}
  - : `object`. Objekt, das zwei Eigenschaften haben kann, beide optional:
    - `showConfirmDialog` {{optional_inline}}
      - : Boolean. Wenn `showConfirmDialog` `true` ist, zeigt der Browser einen Dialog an, der den Benutzer bittet zu bestätigen, dass das Add-on deinstalliert werden soll. Standardwert ist `false`.
    - `dialogMessage` {{optional_inline}}
      - : String. Eine zusätzliche Nachricht, die im Bestätigungsdialog angezeigt wird.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer Fehlermeldung abgelehnt wird, wenn der Benutzer die Deinstallation abgebrochen hat.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Deinstallieren Sie das Add-on, wobei der Benutzer um Bestätigung gebeten wird. Im Callback überprüfen Sie, ob der Benutzer die Deinstallation abgebrochen hat.

Beachten Sie, dass wir keinen Fulfillment-Handler übergeben haben, da das Add-on, wenn die Deinstallation erfolgreich ist, nicht mehr vorhanden ist, um es zu bearbeiten.

```js
function onCanceled(error) {
  console.log(`Canceled: ${error}`);
}

let uninstalling = browser.management.uninstallSelf({
  showConfirmDialog: true,
});

uninstalling.then(null, onCanceled);
```

Das Gleiche, aber mit einer benutzerdefinierten Nachricht im Dialog:

```js
function onCanceled(error) {
  console.log(`Canceled: ${error}`);
}

let uninstalling = browser.management.uninstallSelf({
  showConfirmDialog: true,
  dialogMessage: "Testing self-uninstall",
});

uninstalling.then(null, onCanceled);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management#method-uninstallSelf) API. Diese Dokumentation stammt von [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) im Chromium-Code.

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
