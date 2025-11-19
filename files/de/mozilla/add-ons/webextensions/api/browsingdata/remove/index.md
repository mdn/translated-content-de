---
title: browsingData.remove()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/remove
l10n:
  sourceCommit: b2685e330f887359ec886b08199a22a6fcbe0caf
---

Entfernt die angegebenen Browserdaten.

Die zu entfernenden Browserdaten werden in der `dataTypes`-Option angegeben, bei der es sich um ein {{WebExtAPIRef("browsingData.DataTypeSet")}}-Objekt handelt.

Sie können die `removalOptions`-Option verwenden, ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt, um zu steuern, wie weit in die Vergangenheit die Daten entfernt werden sollen und ob Daten nur von normalen Webseiten oder auch von Erweiterungen entfernt werden sollen.

## Syntax

```js-nolint
let removing = browser.browsingData.remove(
  removalOptions,            // RemovalOptions object
  dataTypes                  // DataTypeSet object
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt, mit dem gesteuert werden kann, wie weit in die Vergangenheit die Daten entfernt werden sollen und ob Daten von Erweiterungen oder nur von normalen Webseiten entfernt werden sollen.
- `dataTypes`
  - : `object`. Ein {{WebExtAPIRef("browsingData.DataTypeSet")}}-Objekt, das die zu entfernenden Datentypen beschreibt (z. B. Verlauf, Downloads, etc.).

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), der ohne Argumente erfüllt wird, wenn das Entfernen abgeschlossen ist. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Entfernen Sie den Downloadverlauf und den Browserverlauf der letzten Woche:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

function weekInMilliseconds() {
  return 1000 * 60 * 60 * 24 * 7;
}

let oneWeekAgo = new Date().getTime() - weekInMilliseconds();

browser.browsingData
  .remove({ since: oneWeekAgo }, { downloads: true, history: true })
  .then(onRemoved, onError);
```

Entfernen Sie den gesamten Download- und Browserverlauf:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData
  .remove({}, { downloads: true, history: true })
  .then(onRemoved, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData)-API von Chromium.

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
