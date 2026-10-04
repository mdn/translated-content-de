---
title: declarativeNetRequest.updateEnabledRulesets()
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/updateEnabledRulesets
l10n:
  sourceCommit: 5137b45128dcf07ac636da68184f00aab30ec1cc
---

Aktualisiert die aktivierten statischen Regelsätze der Erweiterung. Zuerst werden die Regelsätze mit den in `options.disableRulesetIds` aufgeführten IDs deaktiviert. Anschließend werden die in `options.enableRulesetIds` aufgeführten Regelsätze aktiviert. Die Auswahl der aktivierten statischen Regelsätze bleibt über Browsersitzungen hinweg erhalten, jedoch nicht bei Aktualisierungen der Erweiterung. Bei jeder Aktualisierung der Erweiterung bestimmt der [Manifest-Schlüssel `declarative_net_request.rule_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request), welche statischen Regelsätze aktiviert sind.

> [!NOTE]
> In Firefox 132 und älteren Versionen werden statische Regelsätze nach einem Neustart des Browsers nicht geladen, wenn zum Zeitpunkt der Installation keine statischen oder dynamischen Regeln registriert sind ([Firefox-Bug 1921353](https://bugzil.la/1921353)). Als Behelfslösung stellen Sie sicher, dass der [Manifest-Schlüssel `declarative_net_request`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) mindestens einen aktivierten Regelsatz enthält.

## Syntax

```js-nolint
let updatedRulesets = browser.declarativeNetRequest.updateEnabledRulesets(
    options                // object
);
```

### Parameter

- `options`
  - : Ein Objekt, das angibt, welche statischen Regelsätze der Erweiterung aktiviert oder deaktiviert werden sollen.
    - `disableRulesetIds` {{optional_inline}}
      - : Ein Array von `string`-Werten. IDs der statischen Regelsätze, die deaktiviert werden sollen.
    - `enableRulesetIds` {{optional_inline}}
      - : Ein Array von `string`-Werten. IDs der statischen Regelsätze, die aktiviert werden sollen.

### Rückgabewert

Eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anfrage erfolgreich war, wird die Promise ohne Argumente erfüllt. Wenn die Anfrage fehlschlägt, wird die Promise mit einer Fehlermeldung zurückgewiesen.

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
