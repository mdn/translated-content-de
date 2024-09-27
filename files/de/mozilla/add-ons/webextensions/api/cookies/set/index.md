---
title: cookies.set()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/set
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die **`set()`**-Methode der {{WebExtAPIRef("cookies")}} API setzt ein Cookie mit den angegebenen Cookie-Daten. Diese Methode ist äquivalent zum Versand eines HTTP `Set-Cookie` Headers während einer Anfrage an eine gegebene URL.

Der Aufruf ist nur erfolgreich, wenn Sie die "cookies" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei sowie [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die im Manifest angegebene URL einschließen. Die angegebene URL benötigt außerdem die erforderlichen Berechtigungen, um ein Cookie mit den gegebenen Parametern zu erstellen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let setting = browser.cookies.set(
  details               // object
)
```

### Parameter

- `details`

  - : Ein `object`, das die Details des Cookies enthält, das Sie setzen möchten. Es kann die folgenden Eigenschaften haben:

    - `domain` {{optional_inline}}
      - : Ein `string`, der die Domäne des Cookies darstellt. Wenn weggelassen, wird das Cookie ein Host-Only-Cookie.
    - `expirationDate` {{optional_inline}}
      - : Eine `number`, die das Ablaufdatum des Cookies als Anzahl der Sekunden seit dem UNIX-Epoch darstellt. Wenn weggelassen, wird das Cookie ein Sitzungs-Cookie.
    - `firstPartyDomain` {{optional_inline}}
      - : Ein `string`, der die First-Party-Domäne darstellt, mit der das Cookie assoziiert wird. Diese Eigenschaft muss angegeben werden, wenn der Browser die Isolation der Erstanbieter aktiviert hat. Siehe [First-party isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
    - `httpOnly` {{optional_inline}}
      - : Ein `boolean`, der angibt, ob das Cookie als HttpOnly (`true`) markiert werden soll oder nicht (false). Wenn weggelassen, ist der Standardwert false.
    - `name` {{optional_inline}}
      - : Ein `string`, der den Namen des Cookies darstellt. Wenn weggelassen, ist dieser standardmäßig leer.
    - `partitionKey` {{optional_inline}}

      - : Ein `object`, das die [Speicherpartition](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) darstellt, in der das Cookie gesetzt werden soll. Schließen Sie dieses Objekt ein, um ein Cookie im partitionierten Speicher zu setzen. Dieses Objekt enthält:

        - `topLevelSite` {{optional_inline}}
          - : Ein `string`, der die URL der obersten Ebene des First-Party-Speicherpartition, die das Cookie enthält, darstellt.

    - `path` {{optional_inline}}
      - : Ein `string`, der den Pfad des Cookies darstellt. Wenn weggelassen, wird standardmäßig der Pfadanteil des URL-Parameters verwendet.
    - `sameSite` {{optional_inline}}
      - : Ein {{WebExtAPIRef("cookies.SameSiteStatus")}} Wert, der den SameSite-Status des Cookies angibt. Wenn weggelassen, ist der Standardwert 0, 'no_restriction'.
    - `secure` {{optional_inline}}
      - : Ein `boolean`, der angibt, ob das Cookie als secure (`true`) markiert werden soll oder nicht (false). Wenn weggelassen, ist der Standardwert false.
    - `storeId` {{optional_inline}}
      - : Ein `string`, der die ID des Cookie-Stores darstellt, in dem das Cookie gesetzt werden soll. Wenn weggelassen, wird das Cookie standardmäßig im Cookie-Store des aktuellen Ausführungskontexts gesetzt.
    - `url`
      - : Ein `string`, der die request-URI darstellt, die mit dem Cookie assoziiert wird. Dieser Wert kann die Standarddomäne und -pfadwerte des erstellten Cookies beeinflussen. Wenn Host-Berechtigungen für diese URL nicht im Manifest angegeben sind, schlägt der Methodenaufruf fehl.
    - `value` {{optional_inline}}
      - : Ein `string`, der den Wert des Cookies darstellt. Wenn weggelassen, ist dieser standardmäßig leer.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('cookies.Cookie')}}-Objekt erfüllt wird, das Details über das gesetzte Cookie enthält. Wenn der Aufruf aus irgendeinem Grund fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel setzt ein Cookie für das Dokument, das im aktuell aktiven Tab gehostet wird:

```js
let getActive = browser.tabs.query({ active: true, currentWindow: true });
getActive.then(setCookie);

function setCookie(tabs) {
  browser.cookies.set({
    url: tabs[0].url,
    name: "favorite-color",
    value: "red",
  });
}
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-set) API von Chromium. Diese Dokumentation stammt aus [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.

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
