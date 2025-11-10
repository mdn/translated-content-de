---
title: management.get()
slug: Mozilla/Add-ons/WebExtensions/API/management/get
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ruft ein {{WebExtAPIRef("management.ExtensionInfo", "ExtensionInfo")}}-Objekt ab, das Informationen über das angegebene Add-on enthält.

Diese API erfordert die "management" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingInfo = browser.management.get(
  id                  // string
)
```

### Parameter

- `id`
  - : `string`. ID des Add-ons, dessen Informationen Sie abrufen möchten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("management.ExtensionInfo", "ExtensionInfo")}}-Objekt erfüllt wird, das Informationen über das Add-on enthält. Das Versprechen wird abgelehnt, wenn keine Erweiterung mit der angegebenen ID installiert ist oder die Erweiterung vom Aufrufer nicht zugänglich ist.

## Beispiele

Protokollieren Sie den Namen des Add-ons, dessen ID "my-add-on" ist:

```js
let id = "my-add-on";

function got(info) {
  console.log(info.name);
}

let getting = browser.management.get(id);
getting.then(got);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management#method-get) API. Diese Dokumentation stammt aus [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) im Chromium-Code.

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
