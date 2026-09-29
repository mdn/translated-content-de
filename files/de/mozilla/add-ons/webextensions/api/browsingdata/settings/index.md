---
title: browsingData.settings()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/settings
l10n:
  sourceCommit: 384aad08dfe00e5cb6b76b148019b1b4dc9d94ac
---

Browser verfügen über eine integrierte Funktion zum Löschen des Verlaufs, mit der Benutzer verschiedene Arten von Browserdaten löschen können. Über eine Benutzeroberfläche können sie auswählen, welche Datenarten entfernt werden sollen (z. B. Verlauf, Downloads, …) und wie weit zurückliegende Daten gelöscht werden sollen.

Diese Funktion gibt die aktuellen Werte dieser Einstellungen zurück.

Beachten Sie, dass nicht alle Datenarten immer über die Benutzeroberfläche gelöscht werden können und manche Optionen der Benutzeroberfläche mehreren Datenarten zugeordnet sein können.

Dies ist eine asynchrone Funktion, die eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getSettings = browser.browsingData.settings()
```

### Parameter

Keine.

### Rückgabewert

Eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), die mit einem Objekt erfüllt wird, das Informationen zu den Einstellungen enthält. Dieses Objekt hat drei Eigenschaften:

- `options`
  - : {{WebExtAPIRef("browsingData.RemovalOptions")}}. Ein `RemovalOptions`-Objekt, das die aktuell ausgewählten Optionen zum Entfernen beschreibt.
- `dataToRemove`
  - : {{WebExtAPIRef("browsingData.DataTypeSet")}}. Enthält eine Eigenschaft für jede Datenart, die in der Benutzeroberfläche des Browsers ausgewählt oder abgewählt werden kann. Jede Eigenschaft hat den Wert `true`, wenn die betreffende Datenart zum Entfernen ausgewählt ist, andernfalls `false`.
- `dataRemovalPermitted`
  - : {{WebExtAPIRef("browsingData.DataTypeSet")}}. Enthält eine Eigenschaft für jede Datenart, die in der Benutzeroberfläche des Browsers ausgewählt oder abgewählt werden kann. Jede Eigenschaft hat den Wert `true`, wenn der Administrator des Geräts dem Benutzer das Entfernen dieser Datenart erlaubt hat, andernfalls `false`.

Wenn ein Fehler auftritt, wird die Promise mit einer Fehlermeldung zurückgewiesen.

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
