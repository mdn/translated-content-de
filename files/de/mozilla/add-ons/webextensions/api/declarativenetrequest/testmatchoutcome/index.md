---
title: declarativeNetRequest.testMatchOutcome
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/testMatchOutcome
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Prüft, ob eine der `declarativeNetRequest`-Regeln der Erweiterung eine hypothetische Anfrage entsprechen würde. Nur während des Testens verfügbar, da dies während der Entwicklung von Erweiterungen verwendet werden soll. Siehe [Testing](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#testing) für Details, wie Tests in jedem Browser aktiviert werden.

## Syntax

```js-nolint
let result = await browser.declarativeNetRequest.testMatchOutcome(
    request,                // object
    options                 // optional object
);
```

### Parameter

- `request`

  - : Die Details der zu testenden Anfrage.
    - `initiator` {{optional_inline}}
      - : Ein `string`. Die Initiator-URL (falls vorhanden) für die hypothetische Anfrage.
    - `method` {{optional_inline}}
      - : Ein `string`. Die standardmäßige (klein geschriebene) HTTP-Methode der hypothetischen Anfrage. Standard ist `"get"` für HTTP-Anfragen und wird für Nicht-HTTP-Anfragen ignoriert.
    - `tabId` {{optional_inline}}
      - : Eine `number`. Die ID des Tabs, in dem die hypothetische Anfrage stattfindet. Muss nicht mit einer realen Tab-ID übereinstimmen. Standard ist `-1`, was bedeutet, dass die Anfrage nicht mit einem Tab zusammenhängt.
    - `type`
      - : {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}. Der Ressourcentyp der hypothetischen Anfrage.
    - `url`
      - : Ein `string`. Die URL der hypothetischen Anfrage.

- `options` {{optional_inline}}
  - : Details der Optionen für die Anfrage.
    - `includeOtherExtensions` {{optional_inline}}
      - : Ein `boolean`. Ob übereinstimmende Regeln von anderen Erweiterungen in `matchedRules` eingeschlossen werden. Wenn Regeln von anderen Erweiterungen übereinstimmen, hat die resultierende `matchedRule`-Eigenschaft eine `extensionId`. Standard ist `false`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das folgende Eigenschaften enthält:

- `matchedRules`
  - : {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}. Details der Regeln (falls vorhanden), die der hypothetischen Anfrage entsprechen.

Wenn keine Regeln übereinstimmen, ist das `matchedRules`-Array leer. Wenn die Anfrage fehlschlägt, wird das Versprechen mit einer Fehlermeldung abgelehnt.

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
