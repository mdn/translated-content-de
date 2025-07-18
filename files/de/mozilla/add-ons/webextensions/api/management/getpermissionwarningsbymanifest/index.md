---
title: management.getPermissionWarningsByManifest()
slug: Mozilla/Add-ons/WebExtensions/API/management/getPermissionWarningsByManifest
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wenn der Benutzer ein Add-on installiert oder aktualisiert, kann der Browser den Benutzer über besonders leistungsstarke [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) warnen, die das Add-on angefordert hat. Nicht alle Berechtigungen führen zu Warnungen, und dieses Verhalten ist nicht in allen Browsern standardisiert.

Basierend auf dem Text einer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei gibt diese Funktion die Berechtigungswarnungen zurück, die für das resultierende Add-on gegeben würden, als ein Array von Zeichenketten.

Diese API erfordert _nicht_ die "management" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingWarnings = browser.management.getPermissionWarningsByManifest(
  manifestString      // string
)
```

### Parameter

- `manifestString`
  - : `string`. Zeichenkette, die die Manifest-Datei enthält. Das muss ein gültiges Manifest sein: Zum Beispiel muss es alle obligatorischen Manifest-Schlüssel enthalten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von Zeichenketten erfüllt wird, von denen jede den Text einer Berechtigungswarnung enthält.

## Beispiele

Protokollieren Sie die Berechtigungswarnungen für die gegebene Manifest-Datei:

```js
let manifest = {
  manifest_version: 2,
  name: "test",
  version: "1.0",
  permissions: ["management", "<all_urls>"],
};

let manifestString = JSON.stringify(manifest);

function gotWarnings(warnings) {
  console.log(warnings);
}

function gotError(error) {
  console.log(`Error: ${error}`);
}

let gettingWarnings =
  browser.management.getPermissionWarningsByManifest(manifestString);
gettingWarnings.then(gotWarnings, gotError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management#method-getPermissionWarningsByManifest) API. Diese Dokumentation ist aus [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) im Chromium-Code abgeleitet.

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
