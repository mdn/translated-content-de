---
title: runtime.onBrowserUpdateAvailable
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onBrowserUpdateAvailable
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

{{Deprecated_header}}

Ausgelöst, wenn ein Update für den Browser verfügbar ist, aber nicht sofort installiert wird, da ein Neustart des Browsers erforderlich ist.

## Syntax

```js-nolint
browser.runtime.onBrowserUpdateAvailable.addListener(listener)
browser.runtime.onBrowserUpdateAvailable.removeListener(listener)
browser.runtime.onBrowserUpdateAvailable.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt dieses Ereignis einem Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `function`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt.

## Beispiele

Hören Sie auf dieses Ereignis:

```js
function handleBrowserUpdateAvailable() {
  // handle event
}

browser.runtime.onBrowserUpdateAvailable.addListener(
  handleBrowserUpdateAvailable,
);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onBrowserUpdateAvailable) API von Chromium. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

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
