---
title: cookies.get()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/get
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die **`get()`**-Methode der {{WebExtAPIRef("cookies")}} API ruft Informationen über ein einzelnes Cookie ab, basierend auf seinem Namen und der URL.

Wenn mehr als ein Cookie mit demselben Namen für eine gegebene URL existiert, wird das Cookie mit dem längsten Pfad zurückgegeben. Für Cookies mit gleicher Pfadlänge wird das Cookie mit der frühesten Erstellungszeit zurückgegeben. Falls kein passendes Cookie gefunden werden konnte, wird `null` zurückgegeben.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getting = browser.cookies.get(
  details                // object
)
```

### Parameter

- `details`

  - : Ein `object`, das Details enthält, die verwendet werden können, um ein Cookie zum Abrufen zu identifizieren. Es kann die folgenden Eigenschaften enthalten:

    - `firstPartyDomain` {{optional_inline}}
      - : Ein `string`, der die Erstanbieter-Domain darstellt, mit der das abzurufende Cookie verbunden ist. Diese Eigenschaft muss angegeben werden, wenn der Browser über "First-Party Isolation" verfügt. Siehe [First-party isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
    - `name`
      - : Ein `string`, der den Namen des abzurufenden Cookies darstellt.
    - `partitionKey` {{optional_inline}}

      - : Ein `object`, das die [Speicherpartition](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) repräsentiert, die das Cookie enthält. Dieses Objekt mit `topLevelSite` enthalten, um ein Cookie aus partitioniertem Speicher abzurufen. Andernfalls wird das Cookie aus unpartitioniertem Speicher zurückgegeben. Dieses Objekt enthält:

        - `topLevelSite` {{optional_inline}}
          - : Ein `string`, der die Erstanbieter-URL der Top-Level-Speicherpartition darstellt, die das Cookie enthält.

    - `storeId` {{optional_inline}}
      - : Ein `string`, das die ID des [Cookie Stores](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies/CookieStore) darstellt, in dem nach dem Cookie gesucht werden soll (wie von {{WebExtAPIRef("cookies.getAllCookieStores()")}} zurückgegeben). Standardmäßig wird der Cookie Store des aktuellen Ausführungskontexts verwendet.
    - `url`
      - : Ein `string`, der die URL darstellt, mit der das abzurufende Cookie verbunden ist. Dieses Argument kann eine vollständige URL sein, wobei alle Daten nach dem URL-Pfad ignoriert werden (z.B. die Abfragezeichenfolge). Wenn [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) für diese URL nicht in der [Manifest-Datei](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) der Erweiterung angegeben sind, scheitert der API-Aufruf.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('cookies.Cookie', 'Cookie')}}-Objekt erfüllt wird, das Details über das Cookie enthält, oder `null`, wenn das Cookie nicht gefunden wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel versucht, das Cookie mit dem Namen "favorite-color" zu erhalten, das mit der URL des derzeit aktiven Tabs verbunden ist:

```js
function logCookie(cookie) {
  if (cookie) {
    console.log(cookie.value);
  }
}

function getCookie(tabs) {
  let getting = browser.cookies.get({
    url: tabs[0].url,
    name: "favorite-color",
  });
  getting.then(logCookie);
}

let getActive = browser.tabs.query({
  active: true,
  currentWindow: true,
});
getActive.then(getCookie);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-get) API. Diese Dokumentation ist abgeleitet von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.

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
