---
title: cookies.get()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/get
l10n:
  sourceCommit: 6f58b8afb8e045e0d706ac0f0fdeacfaea487f86
---

{{AddonSidebar}}

Die **`get()`** Methode der {{WebExtAPIRef("cookies")}} API ruft Informationen über ein Cookie ab, basierend auf dem Namen des Cookies und der URL.

Um diese Methode zu verwenden, muss eine Erweiterung die Berechtigung `"cookies"` und relevante Host-Berechtigungen haben. Weitere Details finden Sie unter [`cookie` permissions](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#permissions).

Wenn es mehr als ein Cookie mit demselben Namen für eine URL gibt, wird das Cookie mit dem längsten Pfad zurückgegeben. Für Cookies mit gleicher Pfadlänge wird das Cookie mit der frühesten Erstellungszeit zurückgegeben. Wenn kein entsprechendes Cookie gefunden wird, wird `null` zurückgegeben.

> [!NOTE]
> Vor Firefox 133 gab Firefox bei mehreren Cookies mit demselben Namen das Cookie mit der frühesten Erstellungszeit zurück.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getting = browser.cookies.get(
  details                // object
)
```

### Parameter

- `details`

  - : Ein `object`, das Details enthält, die verwendet werden, um ein Cookie zu identifizieren. Es kann diese Eigenschaften umfassen:

    - `firstPartyDomain` {{optional_inline}}
      - : Ein `string`, der die Erstanbieter-Domain darstellt, mit der das abzurufende Cookie verknüpft ist. Diese Eigenschaft muss angegeben werden, wenn der Browser die First-Party-Isolation aktiviert hat. Siehe [First-party isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
    - `name`
      - : Ein `string`, der den Namen des abzurufenden Cookies darstellt.
    - `partitionKey` {{optional_inline}}

      - : Ein `object`, das die [Speicherpartition](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) darstellt, die das Cookie enthält. Fügen Sie dieses Objekt mit `topLevelSite` hinzu, um ein Cookie aus partitioniertem Speicher zu erhalten. Andernfalls wird das Cookie aus dem nicht partitionierten Speicher zurückgegeben. Dieses Objekt enthält:

        - `topLevelSite` {{optional_inline}}
          - : Ein `string`, der die Erstanbieter-URL der übergeordneten Site-Speicherpartition darstellt, die das Cookie enthält.

    - `storeId` {{optional_inline}}
      - : Ein `string`, der die ID des [Cookie-Stores](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies/CookieStore) darstellt, in dem nach dem Cookie gesucht werden soll (wie zurückgegeben von {{WebExtAPIRef("cookies.getAllCookieStores()")}}). Standardmäßig wird der Cookie-Store des aktuellen Ausführungskontextes verwendet.
    - `url`
      - : Ein `string`, der die URL darstellt, mit der das abzurufende Cookie verknüpft ist. Dieses Argument kann eine vollständige URL sein, wobei alle Daten nach dem URL-Pfad (z.B. die Abfragezeichenfolge) ignoriert werden. Wenn [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) für diese URL nicht in der [Manifestdatei](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) der Erweiterung angegeben sind, schlägt der API-Aufruf fehl.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('cookies.Cookie', 'Cookie')}}-Objekt erfüllt wird, das Details über das Cookie enthält, oder `null`, wenn das Cookie nicht gefunden wird.

## Beispiele

Dieses Beispiel versucht, das Cookie mit dem Namen "favorite-color" abzurufen, das mit der URL des aktiven Tabs verknüpft ist:

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-get) API von Chromium. Diese Dokumentation stammt aus [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.

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
