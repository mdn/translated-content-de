---
title: extension.onRequest
slug: Mozilla/Add-ons/WebExtensions/API/extension/onRequest
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

> [!WARNING]
> Dies ist nicht in Firefox implementiert, da es seit Chrome 33 veraltet ist. Bitte verwenden Sie stattdessen [runtime.onMessage](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage).

Wird ausgelöst, wenn eine Anfrage entweder von einem Erweiterungsprozess oder einem Inhaltsskript gesendet wird.

## Syntax

```js-nolint
chrome.extension.onRequest.addListener(function(
  request,         // optional any
  sender,          // runtime.MessageSender
  () => {/* … */}  // function
) {/* … */})
chrome.extension.onRequest.removeListener(listener)
chrome.extension.onRequest.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:
    - `request`
      - : `any`. Die Anfrage, die vom aufrufenden Skript gesendet wird.
    - `sender`
      - : {{WebExtAPIRef('runtime.MessageSender')}}.
    - `sendResponse`
      - : `function`. Funktion, die (höchstens einmal) aufgerufen wird, wenn Sie eine Antwort haben. Das Argument sollte ein beliebiges JSON-fähiges Objekt sein oder undefiniert, wenn es keine Antwort gibt. Wenn Sie mehr als einen `onRequest`-Listener im selben Dokument haben, darf nur einer eine Antwort senden.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/api/extension#event-onRequest) API von Chromium. Diese Dokumentation ist aus [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) im Chromium-Code abgeleitet.

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
