---
title: management.uninstall()
slug: Mozilla/Add-ons/WebExtensions/API/management/uninstall
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Deinstalliert ein Add-on anhand seiner ID.

Diese API erfordert die "management" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let uninstalling = browser.management.uninstall(
  id,                  // string
  options              // object
)
```

### Parameter

- `id`
  - : `string`. ID des zu deinstallierenden Add-ons.
- `options` {{optional_inline}}
  - : `object`. Objekt, das eine einzige Eigenschaft enthalten kann, `showConfirmDialog`. Wenn `showConfirmDialog` `true` ist, zeigt der Browser einen Dialog an, in dem der Benutzer gefragt wird, ob das Add-on deinstalliert werden soll.

<!---->

- Wenn `id` die ID des aufrufenden Add-ons ist, wird `showConfirmDialog` standardmäßig auf `false` gesetzt.
- Wenn `id` die ID eines anderen Add-ons ist, wird die Option `showConfirmDialog` ignoriert und der Bestätigungsdialog wird immer angezeigt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer Fehlermeldung abgelehnt wird, wenn der Benutzer die Deinstallation abgebrochen hat.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Deinstallieren Sie das Add-on, dessen ID "my-addon-id" ist, und fragen Sie den Benutzer um Bestätigung. Überprüfen Sie im Callback, ob der Benutzer die Deinstallation abgebrochen hat.

Beachten Sie, dass wir keinen Erfüllungshandler übergeben haben, da, wenn die Deinstallation erfolgreich ist, das Add-on nicht mehr vorhanden ist, um es zu verarbeiten.

```js
let id = "my-addon-id";

function onCanceled(error) {
  console.log(`Uninstall canceled: ${error}`);
}

let uninstalling = browser.management.uninstall(id);
uninstalling.then(null, onCanceled);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management#method-uninstall) API von Chromium. Diese Dokumentation stammt aus [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) im Chromium-Code.

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
