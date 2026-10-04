---
title: declarativeNetRequest.testMatchOutcome()
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/testMatchOutcome
l10n:
  sourceCommit: 5137b45128dcf07ac636da68184f00aab30ec1cc
---

Prüft, ob eine der `declarativeNetRequest`-Regeln der Erweiterung auf eine hypothetische Anfrage zutreffen würde. Diese Methode ist nur beim Testen verfügbar, da sie für die Verwendung während der Entwicklung von Erweiterungen vorgesehen ist. Unter [Testen](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#testing) erfahren Sie, wie Sie Tests in den einzelnen Browsern aktivieren.

## Syntax

```js-nolint
let result = await browser.declarativeNetRequest.testMatchOutcome(
    request,                // object
    options                 // optional object
);
```

### Parameter

- `request`
  - : Die Einzelheiten der zu testenden Anfrage.
    - `initiator` {{optional_inline}}
      - : Ein `string`. Die Initiator-URL (falls vorhanden) der hypothetischen Anfrage.
    - `method` {{optional_inline}}
      - : Ein `string`. Die standardmäßige HTTP-Methode (in Kleinbuchstaben) der hypothetischen Anfrage. Für HTTP-Anfragen ist der Standardwert `"get"`; bei Nicht-HTTP-Anfragen wird dieser Wert ignoriert.
    - `tabId` {{optional_inline}}
      - : Eine `number`. Die ID des Tabs, in dem die hypothetische Anfrage stattfindet. Sie muss keiner tatsächlichen Tab-ID entsprechen. Der Standardwert ist `-1`, was bedeutet, dass die Anfrage keinem Tab zugeordnet ist.
    - `type`
      - : {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. Der Ressourcentyp der hypothetischen Anfrage.
    - `url`
      - : Ein `string`. Die URL der hypothetischen Anfrage.

- `options` {{optional_inline}}
  - : Einzelheiten zu den Optionen für die Anfrage.
    - `includeOtherExtensions` {{optional_inline}}
      - : Ein `boolean`. Gibt an, ob zutreffende Regeln anderer Erweiterungen in `matchedRules` enthalten sind. Wenn Regeln anderer Erweiterungen zutreffen, hat das entsprechende `matchedRule`-Objekt eine `extensionId`-Eigenschaft. Der Standardwert ist `false`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt mit den folgenden Eigenschaften erfüllt wird:

- `matchedRules`
  - : {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}. Einzelheiten zu den Regeln (falls vorhanden), die auf die hypothetische Anfrage zutreffen.

Wenn keine Regeln zutreffen, ist das Array `matchedRules` leer. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung zurückgewiesen.

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
