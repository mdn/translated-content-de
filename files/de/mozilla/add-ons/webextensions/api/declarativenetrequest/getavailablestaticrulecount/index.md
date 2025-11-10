---
title: declarativeNetRequest.getAvailableStaticRuleCount
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/getAvailableStaticRuleCount
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Gibt die Anzahl der statischen Regeln zurück, die aktiviert werden können, bevor das globale Limit für statische Regeln erreicht wird. Weitere Informationen zu den Grenzwerten für statische Regelsätze und Regeln finden Sie unter [Grenzwerte für statische Regelsätze](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#static_ruleset_limits).

## Syntax

```js-nolint
let count = await browser.declarativeNetRequest.getAvailableStaticRuleCount();
```

### Parameter

Diese Funktion benötigt keine Parameter.

### Rückgabewert

Ein mit einem [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) erfülltes Versprechen, das eine Zahl zurückgibt, die angibt, wie viele statische Regeln aktiviert werden können, bevor das globale Limit für statische Regeln erreicht ist. Wenn die Anfrage fehlschlägt, wird das Versprechen mit einer Fehlermeldung zurückgewiesen.

## Beispiele

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

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
