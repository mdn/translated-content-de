---
title: cookies.remove()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/remove
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die **`remove()`** Methode der {{WebExtAPIRef("cookies")}} API löscht ein Cookie, basierend auf dessen Namen und URL.

Der Aufruf ist nur erfolgreich, wenn Sie die "cookies" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei einbinden sowie [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die in ihrem Manifest angegebene URL.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.cookies.remove(
  details               // object
)
```

### Parameter

- `details`

  - : Ein `object`, das Informationen zur Identifizierung des zu entfernenden Cookies enthält. Es enthält die folgenden Eigenschaften:

    - `firstPartyDomain` {{optional_inline}}
      - : Ein `string`, der die First-Party-Domain darstellt, mit der das zu entfernende Cookie verknüpft ist. Diese Eigenschaft muss angegeben werden, wenn der Browser First-Party-Isolation aktiviert hat. Siehe [First-party isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
    - `name`
      - : Ein `string`, der den Namen des zu entfernenden Cookies darstellt.
    - `partitionKey` {{optional_inline}}

      - : Ein `object`, das die [Speicherpartition](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) enthält, die das Cookie enthält. Schließen Sie dieses Objekt ein, um ein Cookie aus partitioniertem Speicher zu entfernen. Dieses Objekt enthält:

        - `topLevelSite` {{optional_inline}}
          - : Ein `string`, der die First-Party-URL der obersten Site-Speicherpartition darstellt, die das Cookie enthält.

    - `storeId` {{optional_inline}}
      - : Ein `string`, der die ID des Cookie-Speichers darstellt, in dem das Cookie gefunden werden soll. Wenn nicht angegeben, wird standardmäßig im Cookie-Speicher des aktuellen Ausführungskontextes nach dem Cookie gesucht.
    - `url`
      - : Ein `string`, der die URL darstellt, die mit dem Cookie verknüpft ist. Wenn die Erweiterung keine [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für diese URL hat, schlägt der API-Aufruf fehl.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('cookies.Cookie')}}-Objekt erfüllt wird, das Details über das entfernte Cookie enthält. Wenn ein Cookie, das dem `details`-Parameter entspricht, nicht gefunden werden kann, wird das Promise mit `null` erfüllt. Wenn der Aufruf aus irgendeinem Grund fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel versucht, das Cookie mit dem Namen "favorite-color" zu entfernen, dessen URL mit der URL des Dokuments des derzeit aktiven Tabs übereinstimmt:

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

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-remove) API. Diese Dokumentation ist abgeleitet von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.

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
