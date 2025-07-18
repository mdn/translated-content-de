---
title: management.setEnabled()
slug: Mozilla/Add-ons/WebExtensions/API/management/setEnabled
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Aktiviert oder deaktiviert das angegebene Add-on.

Diese Funktion muss normalerweise im Kontext einer Benutzeraktion aufgerufen werden, beispielsweise im Klick-Handler eines Buttons. Der Browser kann den Benutzer zudem bitten, die Änderung zu bestätigen.

Diese API erfordert die "management" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

Es handelt sich um eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

Die Funktion ermöglicht das Aktivieren/Deaktivieren von Themen-Add-ons, wird jedoch einen Fehler zurückgeben, wenn sie zum Aktivieren oder Deaktivieren anderer Arten von Web-Erweiterungen verwendet wird.

## Syntax

```js-nolint
let settingEnabled = browser.management.setEnabled(
  id,              // string
  enabled         // boolean
)
```

### Parameter

- `id`
  - : `string`. ID des zu aktivierenden/deaktivierenden Add-ons.
- `enabled`
  - : `boolean`. Gibt an, ob das Add-on aktiviert oder deaktiviert werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Add-on aktiviert oder deaktiviert wurde.

## Beispiele

Aktivieren/Deaktivieren des Add-ons mit der ID "my-add-on":

```js
let id = "my-add-on";

function toggleEnabled(id) {
  let getting = browser.management.get(id);
  getting.then((info) => {
    browser.management.setEnabled(id, !info.enabled);
  });
}

toggleEnabled(id);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management#method-setEnabled) API von Chromium. Diese Dokumentation ist abgeleitet von [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) im Chromium-Code.

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
