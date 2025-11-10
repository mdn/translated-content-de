---
title: cookies.remove()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/remove
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die **`remove()`** Methode der {{WebExtAPIRef("cookies")}} API löscht ein Cookie, basierend auf seinem Namen und der URL.

Um diese Methode zu verwenden, muss eine Erweiterung die Berechtigung `"cookies"` und relevante Host-Berechtigungen besitzen. Weitere Details finden Sie unter [`cookie` Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#permissions).

Wenn es mehr als ein Cookie mit demselben Namen für eine URL gibt, wird das Cookie mit dem längsten Pfad gelöscht. Bei Cookies mit derselben Pfadlänge wird das Cookie mit der frühesten Erstellungszeit gelöscht. Wenn kein passendes Cookie gefunden wird, wird `null` zurückgegeben.

> [!NOTE]
> Vor Firefox 133 wurde, wenn es mehr als ein Cookie mit demselben Namen gab, von Firefox das Cookie mit der frühesten Erstellungszeit gelöscht.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.cookies.remove(
  details               // object
)
```

### Parameter

- `details`
  - : Ein `object`, das Informationen enthält, um das zu löschende Cookie zu identifizieren. Es enthält folgende Eigenschaften:
    - `firstPartyDomain` {{optional_inline}}
      - : Ein `string`, der die mit dem zu löschenden Cookie assoziierte first-party Domain darstellt. Diese Eigenschaft muss angegeben werden, wenn der Browser First-Party Isolation aktiviert hat. Siehe [First-party Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
    - `name`
      - : Ein `string`, der den Namen des zu löschenden Cookies darstellt.
    - `partitionKey` {{optional_inline}}
      - : Ein `object`, das die [Storage-Partition](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) enthält, die das Cookie enthält. Dieses Objekt muss angegeben werden, um ein Cookie aus partitioniertem Speicher zu entfernen. Dieses Objekt enthält:
        - `topLevelSite` {{optional_inline}}
          - : Ein `string`, das die first-party URL der obersten Speicherpartition, die das Cookie enthält, darstellt.

    - `storeId` {{optional_inline}}
      - : Ein `string`, das die ID des Cookie-Speichers, in dem das Cookie gefunden werden soll, darstellt. Wenn nicht angegeben, wird das Cookie im Cookie-Speicher des aktuellen Ausführungskontexts gesucht.
    - `url`
      - : Ein `string`, der die mit dem Cookie assoziierte URL darstellt. Der API-Aufruf schlägt fehl, wenn die Erweiterung keine [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für diese URL hat.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('cookies.Cookie')}} Objekt erfüllt wird, das Details über das entfernte Cookie enthält. Wenn ein Cookie, das dem `details`-Parameter entspricht, nicht gefunden wird, wird das Versprechen mit `null` erfüllt. Wenn der Aufruf fehlschlägt, wird das Versprechen mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel versucht, das Cookie mit dem Namen "favorite-color" zu entfernen, dessen URL mit der URL des Dokuments übereinstimmt, das vom aktiven Tab gehostet wird:

```js
function onRemoved(cookie) {
  console.log(`Removed: ${cookie}`);
}

function onError(error) {
  console.log(`Error removing cookie: ${error}`);
}

function removeCookie(tabs) {
  let removing = browser.cookies.remove({
    url: tabs[0].url,
    name: "favorite-color",
  });
  removing.then(onRemoved, onError);
}

let getActive = browser.tabs.query({ active: true, currentWindow: true });
getActive.then(removeCookie);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-remove) API. Diese Dokumentation ist abgeleitet von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium Code.

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
