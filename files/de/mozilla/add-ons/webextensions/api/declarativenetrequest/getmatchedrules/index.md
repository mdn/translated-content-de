---
title: declarativeNetRequest.getMatchedRules()
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/getMatchedRules
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Gibt alle Regeln zurück, die für die Erweiterung übereingestimmt haben. Aufrufende können die Liste mit einem `filter` einschränken. Diese Methode steht nur Erweiterungen zur Verfügung, die über die Berechtigung `"declarativeNetRequestFeedback"` verfügen oder denen die [Berechtigung `activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission) für die in `filter` angegebene `tabId` erteilt wurde. Regeln, die keinem aktiven Dokument zugeordnet sind und vor mehr als fünf Minuten übereingestimmt haben, werden nicht zurückgegeben.

## Syntax

```js-nolint
let gettingMatchedRules = await browser.declarativeNetRequest.getMatchedRules(
    filter                // object
);
```

### Parameter

- `filter` {{optional_inline}}
  - : Ein Objekt zum Filtern der Liste übereinstimmender Regeln.
    - `minTimeStamp` {{optional_inline}}
      - : Ein `number`. Falls angegeben, werden nur Regeln zurückgegeben, die nach dem angegebenen Zeitstempel übereingestimmt haben.
    - `tabId` {{optional_inline}}
      - : Ein `number`. Falls angegeben, werden nur Regeln für den angegebenen Tab zurückgegeben. Bei `-1` werden Regeln berücksichtigt, die keinem aktiven Tab zugeordnet sind.

### Rückgabewert

Eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), die mit einem Objekt mit den folgenden Eigenschaften erfüllt wird:

- `rule`
  - : {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}. Details zu einer übereinstimmenden Regel.
- `tabId`
  - : `number` Die `tabId` des Tabs, von dem die Anfrage ausging, sofern der Tab noch aktiv ist. Andernfalls `-1`.
- `timeStamp`
  - : `number` Der Zeitpunkt, zu dem die Regel übereingestimmt hat. Zeitstempel entsprechen der JavaScript-Konvention für Zeitangaben, also der Anzahl der Millisekunden seit der Epoche.

Wenn keine Regeln übereingestimmt haben, ist das Objekt leer. Schlägt die Anfrage fehl, wird die Promise mit einer Fehlermeldung zurückgewiesen.

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
