---
title: declarativeNetRequest.getDisabledRuleIds
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/getDisabledRuleIds
l10n:
  sourceCommit: 39a2c86675005f0682b7c5d0c32c8066be412aac
---

{{AddonSidebar}}

Gibt die IDs der deaktivierten Regeln in einem statischen Regelwerk zurück. Die Anzahl der deaktivierten Regeln in einem Regelwerk ist auf den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES","MAX_NUMBER_OF_DISABLED_STATIC_RULES")}} begrenzt.

## Syntax

```js-nolint
let ruleIds = await browser.declarativeNetRequest.getDisabledRuleIds(
    options                // object
);
```

### Parameter

- `options`

  - : Ein Objekt, das Details des Regelwerks enthält, für das deaktivierte Regeln zurückgegeben werden sollen.
    - `rulesetId`
      - : `string` Die ID des statischen Regelwerks, das abgefragt werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von statischen [Regel-IDs](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/Rule#id) oder einem leeren Array erfüllt wird, falls keine deaktivierten Regeln vorhanden sind. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

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
