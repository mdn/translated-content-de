---
title: declarativeNetRequest.updateDynamicRules()
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/updateDynamicRules
l10n:
  sourceCommit: 5137b45128dcf07ac636da68184f00aab30ec1cc
---

Ändert die dynamischen Regeln der Erweiterung. Zuerst werden die Regeln mit den in `options.removeRuleIds` aufgeführten IDs entfernt. Anschließend werden die in `options.addRules` angegebenen Regeln hinzugefügt. Beachten Sie Folgendes:

- Diese Aktualisierung erfolgt als atomare Operation: Entweder werden alle angegebenen Regeln hinzugefügt und entfernt, oder es wird ein Fehler zurückgegeben.
- Diese Regeln bleiben über Browser-Sitzungen und Aktualisierungen der Erweiterung hinweg erhalten.
- Statische Regeln, die als Teil des Erweiterungspakets angegeben sind, können mit dieser Funktion nicht entfernt werden.
- Die Anzahl der dynamischen Regeln, die hinzugefügt werden können, ist begrenzt:
  - In Safari und bis Chrome 119 auf den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}} für die Gesamtzahl der dynamischen und sitzungsgebundenen Regeln.
  - Bis Firefox 127 auf den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}.
  - Ab Chrome 120 und Firefox 128 auf den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}}.

> [!NOTE]
> In Firefox 132 und früher werden dynamische Regeln nach einem Browser-Neustart mitunter nicht angewendet, und Aufrufe dieser API werden mit einem Fehler zurückgewiesen ([Firefox-Bug 1921353](https://bugzil.la/1921353)). Als Umgehungslösung können Sie im Manifest-Schlüssel [`declarative_net_request`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) ein aktiviertes statisches Regelset angeben. Die Regelset-Datei kann eine leere Liste enthalten.

## Syntax

```js-nolint
let rulesUpdated = browser.declarativeNetRequest.updateDynamicRules(
    options                // object
);
```

### Parameter

- `options`
  - : Ein Objekt mit Angaben zu den Regeln, die zu den dynamischen Regeln hinzugefügt oder daraus entfernt werden sollen.
    - `addRules` {{optional_inline}}
      - : Ein Array von {{WebExtAPIRef("declarativeNetRequest.Rule")}}. Angaben zu den hinzuzufügenden Regeln.
    - `removeRuleIds` {{optional_inline}}
      - : Ein Array von `number`. IDs der zu entfernenden Regeln. Ungültige IDs werden ignoriert.

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
