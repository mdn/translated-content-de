---
title: declarativeNetRequest.getDynamicRules()
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/getDynamicRules
l10n:
  sourceCommit: 5137b45128dcf07ac636da68184f00aab30ec1cc
---

Gibt die Menge der dynamischen Regeln für die Erweiterung zurück.

## Syntax

```js-nolint
let gettingDynamicRules = await browser.declarativeNetRequest.getDynamicRules();
```

### Parameter

- `filter` {{optional_inline}}
  - : Ein Objekt, mit dem die Liste der zurückgegebenen Regeln gefiltert wird.
    - `ruleIds` {{optional_inline}}
      - : Ein Array von `integer`-Werten. Die IDs der zurückzugebenden Regeln.

### Rückgabewert

Eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), die mit einem Array von {{WebExtAPIRef("declarativeNetRequest.Rule")}}-Objekten erfüllt wird. Jedes dieser Objekte repräsentiert eine Regel der Erweiterung. Wenn keine Regeln aktiv sind, ist das Array leer. Schlägt die Anfrage fehl, wird die Promise mit einer Fehlermeldung zurückgewiesen.

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
