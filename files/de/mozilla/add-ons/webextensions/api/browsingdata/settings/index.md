---
title: browsingData.settings()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/settings
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Browser haben eine integrierte Funktion "Verlauf löschen", die es dem Benutzer ermöglicht, verschiedene Arten von Browsing-Daten zu löschen. Diese Funktion hat eine Benutzeroberfläche, die es dem Benutzer ermöglicht, auszuwählen, welche Art von Daten (z. B. Verlauf, Downloads, …) und wie weit zurück in der Zeit Daten entfernt werden sollen.

Diese Funktion gibt den aktuellen Wert dieser Einstellungen zurück.

Beachten Sie, dass nicht alle Datentypen immer über die Benutzeroberfläche entfernt werden können und dass einige Optionen der Benutzeroberfläche zu mehr als einem Datentyp zugeordnet sein können.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getSettings = browser.browsingData.settings()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das die Einstellungen enthält. Dieses Objekt hat drei Eigenschaften:

- `options`
  - : `{{WebExtAPIRef("browsingData.RemovalOptions")}}`. Ein `RemovalOptions`-Objekt, das die aktuell ausgewählten Entfernungsoptionen beschreibt.
- `dataToRemove`
  - : `{{WebExtAPIRef("browsingData.DataTypeSet")}}`. Dies wird eine Eigenschaft für jeden Datentyp enthalten, der in der Benutzeroberfläche des Browsers umgeschaltet werden kann. Jede Eigenschaft hat den Wert `true`, wenn dieser Typ zur Entfernung ausgewählt ist, und `false` andernfalls.
- `dataRemovalPermitted`
  - : `{{WebExtAPIRef("browsingData.DataTypeSet")}}`. Dies wird eine Eigenschaft für jeden Datentyp enthalten, der in der Benutzeroberfläche des Browsers umgeschaltet werden kann. Jede hat den Wert `true`, wenn der Administrator des Geräts dem Benutzer erlaubt hat, diesen Typ zu entfernen, und `false` andernfalls.

Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung zurückgewiesen.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Aktuelle Einstellungen protokollieren:

```js
function onGotSettings(settings) {
  console.log(settings.options);
  console.log(settings.dataToRemove);
  console.log(settings.dataRemovalPermitted);
}

function onError(error) {
  console.error(error);
}

browser.browsingData.settings().then(onGotSettings, onError);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API.

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
