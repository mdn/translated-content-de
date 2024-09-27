---
title: idle.queryState()
slug: Mozilla/Add-ons/WebExtensions/API/idle/queryState
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Gibt `"locked"` zurück, wenn das System gesperrt ist, `"idle"`, wenn der Benutzer für eine angegebene Anzahl von Sekunden keine Eingabe getätigt hat, oder `"active"` andernfalls.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let querying = browser.idle.queryState(
  detectionIntervalInSeconds // integer
)
```

### Parameter

- `detectionIntervalInSeconds`
  - : `integer`. Das System wird als im Ruhezustand angesehen, wenn `detectionIntervalInSeconds` Sekunden seit der letzten erkannten Benutzereingabe vergangen sind.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('idle.IdleState')}}-String erfüllt wird, der den aktuellen Status anzeigt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

In diesem einfachen Beispiel rufen wir `queryState()` auf und prüfen dann, ob der zurückgegebene `newState` `idle` oder `active` ist, und protokollieren entsprechend eine Nachricht. Da wir einen `detectionIntervalInSeconds` von 15 angegeben haben, wird ein `idle`-Status nur gemeldet, wenn es mindestens 15 Sekunden lang keine Benutzeraktivität gegeben hat.

```js
function onGot(newState) {
  if (newState === "idle") {
    console.log("Please come back — we miss you!");
  } else if (newState === "active") {
    console.log("Glad to still have you with us!");
  }
}

let querying = browser.idle.queryState(15);
querying.then(onGot);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.idle`](https://developer.chrome.com/docs/extensions/reference/api/idle#method-queryState) API von Chromium. Diese Dokumentation ist abgeleitet von [`idle.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/idle.json) im Chromium-Code.

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
