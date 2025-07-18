---
title: declarativeNetRequest.updateEnabledRulesets
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/updateEnabledRulesets
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Aktualisiert die Menge der statischen Regelsätze der Erweiterung. Die Regelsätze mit den in `options.disableRulesetIds` aufgeführten IDs werden zuerst deaktiviert und anschließend die in `options.enableRulesetIds` aufgeführten Regelsätze aktiviert. Beachten Sie, dass die Menge der aktivierten statischen Regelsätze zwischen den Sitzungen, jedoch nicht zwischen Erweiterungsaktualisierungen beibehalten wird, d.h. der [`declarative_net_request.rule_resources` manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) bestimmt die Menge der aktivierten statischen Regelsätze bei jeder Erweiterungsaktualisierung.

> [!NOTE]
> In Firefox 132 und früher werden statische Regelsätze nicht nach einem Browser-Neustart geladen, wenn zum Installationszeitpunkt keine statischen oder dynamischen Regeln registriert sind ([Firefox Bug 1921353](https://bugzil.la/1921353)). Ein Workaround besteht darin, sicherzustellen, dass der [`declarative_net_request`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) manifest-Schlüssel mindestens einen aktivierten Regelsatz enthält.

## Syntax

```js-nolint
let updatedRulesets = browser.declarativeNetRequest.updateEnabledRulesets(
    options                // object
);
```

### Parameter

- `options`
  - : Ein Objekt, das die zu aktivierenden oder zu deaktivierenden Regelsätze in den statischen Regelsätzen der Erweiterung beschreibt.
    - `disableRulesetIds` {{optional_inline}}
      - : Ein Array von `string`. IDs der statischen Regelsätze, die deaktiviert werden sollen.
    - `enableRulesetIds` {{optional_inline}}
      - : Ein Array von `string`. IDs der statischen Regelsätze, die aktiviert werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) Wenn die Anfrage erfolgreich war, wird das Versprechen ohne Argumente erfüllt. Schlägt die Anfrage fehl, wird das Versprechen mit einer Fehlermeldung zurückgewiesen.

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
