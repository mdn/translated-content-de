---
title: declarativeNetRequest.updateStaticRules
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/updateStaticRules
l10n:
  sourceCommit: 39a2c86675005f0682b7c5d0c32c8066be412aac
---

{{AddonSidebar}}

Ändert den aktivierten Zustand von Regeln in einem statischen Regelset. Die Anzahl der Regeln, die in einem Regelset deaktiviert werden können, ist auf den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES","MAX_NUMBER_OF_DISABLED_STATIC_RULES")}} begrenzt.

Regeln können aktiviert und deaktiviert werden, während das Regelset, das sie enthält, deaktiviert ist. Alle Änderungen werden wirksam, wenn das Regelset aktiviert wird.

## Syntax

```js-nolint
let updatedStaticRules = browser.declarativeNetRequest.updateStaticRules(
    options                // object
);
```

### Parameter

- `options`

  - : Ein Objekt, das ein statisches Regelset und die Regeln angibt, die in diesem Regelset aktiviert oder deaktiviert werden sollen.
    - `rulesetId` rulesetId
      - : `string` Die ID des statischen Regelsets, das geändert werden soll.
    - `disableRuleIds` {{optional_inline}}
      - : Ein Array von `number`. IDs der zu deaktivierenden Regeln. Ungültige IDs werden ignoriert.
    - `enableRuleIds` {{optional_inline}}
      - : Ein Array von `number`. IDs der zu aktivierenden Regeln. Ungültige IDs werden ignoriert.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Bei Erfolg wird das Versprechen ohne Argumente erfüllt. Bei einem Fehler wird das Versprechen mit einer Fehlermeldung abgelehnt.

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