---
title: extension.sendRequest()
slug: Mozilla/Add-ons/WebExtensions/API/extension/sendRequest
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

{{Deprecated_Header}}

> [!WARNING]
> Diese Methode ist veraltet. Verwenden Sie stattdessen {{WebExtAPIRef("runtime.sendMessage")}}.

Sendet eine Anfrage an andere Listener innerhalb der Erweiterung. Ähnlich wie {{WebExtAPIRef('runtime.connect')}}, aber sendet nur eine Anfrage mit einer optionalen Antwort. Das {{WebExtAPIRef('extension.onRequest')}}-Ereignis wird auf jeder Seite der Erweiterung ausgelöst.

## Syntax

```js-nolint
chrome.extension.sendRequest(
  extensionId,             // optional string
  request,                 // any
  (response) => {/* … */}  // optional function
)
```

Diese API ist auch als `browser.extension.sendRequest()` in einer Version verfügbar, die ein Promise zurückgibt.

### Parameter

- `extensionId` {{optional_inline}}
  - : `string`. Die ID der Erweiterung, zu der Sie eine Verbindung herstellen möchten. Wenn weggelassen, ist die Standarderweiterung Ihre eigene.
- `request`
  - : `any`.
- `responseCallback` {{optional_inline}}
  - : `function`. Der Funktion werden diese Argumente übergeben:
    - `response`
      - : `any`. Das JSON-Antwortobjekt, das vom Handler der Anfrage gesendet wird. Wenn ein Fehler bei der Verbindung zur Erweiterung auftritt, wird der Callback ohne Argumente aufgerufen und {{WebExtAPIRef('runtime.lastError')}} wird auf die Fehlermeldung gesetzt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/api/extension#method-sendRequest) API. Diese Dokumentation stammt aus [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) im Chromium-Code.

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
