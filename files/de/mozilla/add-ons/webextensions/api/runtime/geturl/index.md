---
title: runtime.getURL()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getURL
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Angenommen, es gibt einen relativen Pfad von der [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) zu einer mit der Erweiterung verpackten Ressource, wird eine vollständig qualifizierte URL zurückgegeben.

Diese Funktion überprüft _nicht_, ob die Ressource tatsächlich unter dieser URL existiert.

## Syntax

```js-nolint
browser.runtime.getURL(
  path // string
)
```

### Parameter

- `path`
  - : `string`. Ein relativer Pfad von der [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) zu einer mit der Erweiterung verpackten Ressource.

### Rückgabewert

`string`. Die vollständig qualifizierte URL zur Ressource innerhalb der Erweiterung.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Angenommen, eine mit der Erweiterung verpackte Datei befindet sich unter "beasts/frog.html", erhalten Sie die vollständige URL wie folgt:

```js
let fullURL = browser.runtime.getURL("beasts/frog.html");
console.log(fullURL);
// Returns something like:
// moz-extension://2c127fa4-62c7-7e4f-90e5-472b45eecfdc/beasts/frog.html
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-getURL). Diese Dokumentation leitet sich von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code ab.

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
