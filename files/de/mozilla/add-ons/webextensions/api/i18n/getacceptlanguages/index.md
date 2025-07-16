---
title: i18n.getAcceptLanguages()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/getAcceptLanguages
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ermittelt die [Accept-Languages](/de/docs/Web/HTTP/Guides/Content_negotiation#the_accept-language_header) des Browsers. Dies unterscheidet sich von der vom Browser verwendeten Sprache. Um die Sprache zu ermitteln, verwenden Sie {{WebExtAPIRef('i18n.getUILanguage')}}.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

Siehe die [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization)-Seite für einen Leitfaden zur Verwendung dieser Funktion.

## Syntax

```js-nolint
let gettingAcceptLanguages = browser.i18n.getAcceptLanguages()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `Array` von {{WebExtAPIRef('i18n.LanguageCode')}}-Objekten erfüllt wird.

## Beispiele

```js
function onGot(languages) {
  console.log(languages);
  // e.g. Array [ "en-US", "en" ]
}

let gettingAcceptLanguages = browser.i18n.getAcceptLanguages();
gettingAcceptLanguages.then(onGot);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.i18n`](https://developer.chrome.com/docs/extensions/reference/api/i18n#method-getAcceptLanguages) API. Diese Dokumentation leitet sich von [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/extensions/common/api/i18n.json) im Chromium-Code ab.

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
