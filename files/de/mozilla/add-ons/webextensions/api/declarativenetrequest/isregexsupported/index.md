---
title: declarativeNetRequest.isRegexSupported
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/isRegexSupported
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Überprüft, ob ein Regulärer Ausdruck als {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}`.regexFilter` Regelbedingung unterstützt wird.

## Syntax

```js-nolint
let count = browser.declarativeNetRequest.isRegexSupported(
    regexOptions                // object
);
```

### Parameter

- `regexOptions`

  - : Ein Objekt, das den zu überprüfenden Regulären Ausdruck enthält.
    - `isCaseSensitive` {{optional_inline}}
      - : `boolean` Ob der angegebene Reguläre Ausdruck groß-/kleinsensitiv ist. Standardmäßig ist dies `true`.
    - `regex`
      - : `string` Der zu überprüfende Reguläre Ausdruck.
    - `requireCapturing` {{optional_inline}}
      - : `boolean` Ob der angegebene Reguläre Ausdruck ein Capturing erfordert. Capturing ist nur für Umleitungsregeln erforderlich, die eine `regexSubstitution`-Aktion angeben. Standardmäßig ist dies false.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das folgende Eigenschaften enthält:

- `isSupported`
  - : `boolean` Ob der Reguläre Ausdruck unterstützt wird.
- `reason` {{optional_inline}}
  - : `string` Gibt den Grund an, warum der Reguläre Ausdruck nicht unterstützt wird. Mögliche Werte sind `"syntaxError"` und `"memoryLimitExceeded"`. Wird nur angegeben, wenn `isSupported` false ist.

Sollte die Anfrage fehlschlagen, wird das Promise mit einer Fehlermeldung abgelehnt.

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
