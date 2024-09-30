---
title: declarativeNetRequest.updateSessionRules
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/updateSessionRules
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{AddonSidebar}}

Modifiziert die Sitzungs-Regeln der Erweiterung. Die Regeln mit den in `options.removeRuleIds` aufgeführten IDs werden zunächst entfernt, und dann werden die in `options.addRules` angegebenen Regeln hinzugefügt. Beachten Sie:

- Diese Aktualisierung erfolgt als atomare Operation: Entweder werden alle angegebenen Regeln hinzugefügt und entfernt, oder es wird ein Fehler zurückgegeben.
- Diese Regeln werden nicht über Browser-Sitzungen hinweg gespeichert.
- Die Anzahl der sitzungsgebundenen Regeln, die hinzugefügt werden können, ist begrenzt:
  - In Safari und bis Chrome 119 auf den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}} für die kombinierte Gesamtzahl von dynamischen und sitzungsgebundenen Regeln.
  - Bis Firefox 127 auf den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}.
  - Ab Chrome 120 und Firefox 128 auf den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}}.

## Syntax

```js-nolint
let updatedRuleset = browser.declarativeNetRequest.updateSessionRules(
    options                // object
);
```

### Parameter

- `options`

  - : Ein Objekt mit Details zu den Regeln, die zu den dynamischen Regeln hinzugefügt oder gelöscht werden sollen.
    - `addRules` {{optional_inline}}
      - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.Rule")}}. Details zu den hinzuzufügenden Regeln.
    - `removeRuleIds` {{optional_inline}}
      - : Ein Array von `number`. IDs der zu entfernenden Regeln. Ungültige IDs werden ignoriert.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) Wenn die Anfrage erfolgreich war, wird das Promise ohne Argumente erfüllt. Scheitert die Anfrage, wird das Promise mit einer Fehlermeldung abgelehnt.

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
