---
title: declarativeNetRequest.updateStaticRules()
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/updateStaticRules
l10n:
  sourceCommit: 5137b45128dcf07ac636da68184f00aab30ec1cc
---

Ändert den Aktivierungsstatus von Regeln in einem statischen Regelsatz. Die Anzahl der Regeln, die in einem Regelsatz deaktiviert werden können, ist auf den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES","MAX_NUMBER_OF_DISABLED_STATIC_RULES")}} begrenzt.

Regeln können aktiviert und deaktiviert werden, während der Regelsatz, zu dem sie gehören, deaktiviert ist. Die Änderungen werden wirksam, sobald der Regelsatz aktiviert wird.

## Syntax

```js-nolint
let staticRulesUpdated = browser.declarativeNetRequest.updateStaticRules(
    options                // object
);
```

### Parameter

- `options`
  - : Ein Objekt, das einen statischen Regelsatz und die darin zu aktivierenden oder zu deaktivierenden Regeln angibt.
    - `rulesetId` rulesetId
      - : `string` Die ID des zu ändernden statischen Regelsatzes.
    - `disableRuleIds` {{optional_inline}}
      - : Ein Array von `number`-Werten. IDs der zu deaktivierenden Regeln. Ungültige IDs werden ignoriert.
    - `enableRuleIds` {{optional_inline}}
      - : Ein Array von `number`-Werten. IDs der zu aktivierenden Regeln. Ungültige IDs werden ignoriert.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anfrage erfolgreich ist, wird das Promise ohne Argumente erfüllt. Schlägt die Anfrage fehl, wird das Promise mit einer Fehlermeldung zurückgewiesen.

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
