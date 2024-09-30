---
title: browsingData.removeDownloads()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeDownloads
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Löscht den Download-Verlauf des Browsers. Beachten Sie, dass dies die heruntergeladenen Objekte selbst nicht löscht, sondern nur die Aufzeichnungen der Downloads im Browserverlauf.

Sie können den Parameter `removalOptions` verwenden, der ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt ist, um:

- Aufzeichnungen von nach einer bestimmten Zeit heruntergeladenen Elementen zu löschen.
- zu steuern, ob nur Aufzeichnungen von normalen Webseiten heruntergeladenen Elementen gelöscht werden oder auch Aufzeichnungen von gehosteten Apps und Erweiterungen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.browsingData.removeDownloads(
  removalOptions            // RemovalOptions object
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt, das verwendet werden kann, um nur Aufzeichnungen zu löschen, die nach einer bestimmten Zeit erstellt wurden, und ob nur Aufzeichnungen von normalen Webseiten heruntergeladenen Elementen oder auch von gehosteten Apps und Erweiterungen gelöscht werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Entfernen abgeschlossen ist. Wenn ein Fehler auftritt, wird das Versprechen mit einer Fehlermeldung abgelehnt.

## Beispiele

Entfernen Sie Aufzeichnungen von in der letzten Woche heruntergeladenen Objekten:

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
  .removeDownloads({ since: oneWeekAgo })
  .then(onRemoved, onError);
```

Entfernen Sie alle Aufzeichnungen der heruntergeladenen Objekte:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removeDownloads({}).then(onRemoved, onError);
```

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API von Chromium.

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
