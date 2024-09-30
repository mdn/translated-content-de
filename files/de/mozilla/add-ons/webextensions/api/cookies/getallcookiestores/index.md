---
title: cookies.getAllCookieStores()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/getAllCookieStores
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Methode **`getAllCookieStores()`** der {{WebExtAPIRef("cookies")}} API gibt eine Liste aller Cookie Stores zurück.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingStores = browser.cookies.getAllCookieStores()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `array` von {{WebExtAPIRef('cookies.CookieStore')}} Objekten erfüllt wird, die alle existierenden Cookie Stores repräsentieren.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Im folgenden Beispiel wird die Methode `getAllCookieStores()` verwendet, um alle derzeit im Browser verfügbaren Cookie Stores abzurufen und für jeden Cookie Store die ID auszugeben sowie die Tabs, die diesen Cookie Store derzeit teilen.

```js
function logStores(cookieStores) {
  for (const store of cookieStores) {
    console.log(`Cookie store: ${store.id}\n Tab IDs: ${store.tabIds}`);
  }
}

browser.cookies.getAllCookieStores().then(logStores);
```

Jedes Mitglied des `cookieStores` Arrays ist ein {{WebExtAPIRef("cookies.CookieStore")}} Objekt.

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-getAllCookieStores) API von Chromium. Diese Dokumentation ist von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code abgeleitet.

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
