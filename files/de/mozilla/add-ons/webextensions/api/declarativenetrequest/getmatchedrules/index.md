---
title: declarativeNetRequest.getMatchedRules
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/getMatchedRules
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{AddonSidebar}}

Gibt alle Regeln zurück, die für die Erweiterung übereinstimmen. Aufrufer können die Liste der übereinstimmenden Regeln filtern, indem sie einen `filter` angeben. Diese Methode ist nur für Erweiterungen mit der Berechtigung `"declarativeNetRequestFeedback"` verfügbar oder wenn die Berechtigung `"activeTab"` für die in `filter` angegebene `tabId` gewährt wurde. Regeln, die nicht mit einem aktiven Dokument verbunden sind und mehr als fünf Minuten zuvor übereingestimmt wurden, werden nicht zurückgegeben.

## Syntax

```js-nolint
let gettingMatchedRules = browser.declarativeNetRequest.getMatchedRules(
    filter                // object
);
```

### Parameter

- `filter` {{optional_inline}}

  - : Ein Objekt, um die Liste der übereinstimmenden Regeln zu filtern.
    - `minTimeStamp` {{optional_inline}}
      - : Eine `number`. Wenn angegeben, werden nur Regeln nach dem angegebenen Zeitstempel übereinstimmen.
    - `tabId` {{optional_inline}}
      - : Eine `number`. Wenn angegeben, werden nur Regeln für den angegebenen Tab übereinstimmen. Übereinstimmende Regeln, die keinem aktiven Tab zugeordnet sind, wenn auf `-1` gesetzt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt mit diesen Eigenschaften erfüllt wird:

- `rule`
  - : {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}. Details einer übereinstimmenden Regel.
- `tabId`
  - : `number` Die `tabId` des Tabs, von dem die Anfrage stammt, wenn der Tab noch aktiv ist. Andernfalls `-1`.
- `timeStamp`
  - : `number` Die Zeit, zu der die Regel übereinstimmte. Zeitstempel entsprechen der JavaScript-Konvention für Zeiten, d.h. der Anzahl der Millisekunden seit der Epoche.

Wenn keine Regeln übereinstimmen, ist das Objekt leer. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

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
