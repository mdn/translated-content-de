---
title: declarativeNetRequest.getDisabledRuleIds()
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/getDisabledRuleIds
l10n:
  sourceCommit: 5137b45128dcf07ac636da68184f00aab30ec1cc
---

Gibt die IDs der deaktivierten Regeln in einem statischen Regelsatz zurück. Die Anzahl der deaktivierten Regeln in einem Regelsatz ist auf den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES","MAX_NUMBER_OF_DISABLED_STATIC_RULES")}} begrenzt.

## Syntax

```js-nolint
let ruleIds = await browser.declarativeNetRequest.getDisabledRuleIds(
    options                // object
);
```

### Parameter

- `options`
  - : Ein Objekt mit Angaben zu dem Regelsatz, dessen deaktivierte Regeln zurückgegeben werden sollen.
    - `rulesetId`
      - : `string` Die ID des abzufragenden statischen Regelsatzes.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array statischer [Regel-IDs](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/Rule#id) oder einem leeren Array erfüllt wird, wenn keine Regeln deaktiviert sind. Schlägt die Anfrage fehl, wird das Promise mit einer Fehlermeldung zurückgewiesen.

{{WebExtExamples("h2")}}

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
