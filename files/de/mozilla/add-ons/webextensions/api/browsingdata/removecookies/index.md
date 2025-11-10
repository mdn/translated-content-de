---
title: browsingData.removeCookies()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeCookies
l10n:
  sourceCommit: b2685e330f887359ec886b08199a22a6fcbe0caf
---

Löscht die Cookies des Browsers.

Sie können den Parameter `removalOptions` verwenden, der ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt ist, um:

- Cookies zu löschen, die nach einem bestimmten Zeitpunkt erstellt wurden.
- zu steuern, ob Cookies gelöscht werden sollen, die von Webseiten oder von Webseiten und Erweiterungen gesetzt wurden.

## Syntax

```js-nolint
let removing = browser.browsingData.removeCookies(
  removalOptions            // RemovalOptions object
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt, das verwendet werden kann, um Cookies zu löschen, die nach einem bestimmten Zeitpunkt erstellt wurden, und um zu steuern, ob Cookies gelöscht werden sollen, die von Webseiten oder von Webseiten und Erweiterungen gesetzt wurden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Löschen abgeschlossen ist. Tritt ein Fehler auf, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Cookies löschen, die in der letzten Woche erstellt wurden:

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
  .removeCookies({ since: oneWeekAgo })
  .then(onRemoved, onError);
```

Alle Cookies löschen:

> [!WARNING]
> Die Verwendung der API zum Löschen aller Cookies wird gleichzeitig alle lokalen Speicherobjekte löschen (einschließlich derjenigen anderer Erweiterungen).
>
> Wenn Sie alle Cookies löschen möchten, ohne lokale Speichermöglichkeiten zu stören, verwenden Sie [browser.cookies](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies), um durch die Inhalte aller Cookie-Speicher zu iterieren und sie zu löschen.

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removeCookies({}).then(onRemoved, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

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
