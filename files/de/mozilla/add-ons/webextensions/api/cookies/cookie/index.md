---
title: cookies.Cookie
slug: Mozilla/Add-ons/WebExtensions/API/cookies/Cookie
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der `Cookie`-Typ der {{WebExtAPIRef("cookies")}} API repräsentiert Informationen über ein HTTP-Cookie.

## Typ

Werte dieses Typs sind Objekte, die folgende Eigenschaften enthalten können:

- `domain`
  - : Ein `string`, der die Domain repräsentiert, zu der das Cookie gehört (z.B. "www.google.com" oder "example.com").
- `expirationDate` {{optional_inline}}
  - : Eine `number`, die das Ablaufdatum des Cookies als Anzahl der Sekunden seit dem UNIX-Epoch darstellt. Nicht vorhanden bei Session-Cookies.
- `firstPartyDomain`
  - : Ein `string`, der die mit dem Cookie assoziierte First-Party-Domain repräsentiert. Dies ist ein leerer String, wenn das Cookie gesetzt wurde, während die First-Party-Isolation deaktiviert war. Siehe [First-party isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
- `hostOnly`
  - : Ein `boolean`, `true`, wenn es sich bei dem Cookie um ein host-only Cookie handelt (d.h. der Host der Anfrage muss genau mit der Domain des Cookies übereinstimmen), oder `false` andernfalls.
- `httpOnly`
  - : Ein `boolean`, `true`, wenn das Cookie als HttpOnly markiert ist (d.h. das Cookie ist für clientseitige Skripte nicht zugänglich), oder `false` andernfalls.
- `name`
  - : Ein `string`, der den Namen des Cookies repräsentiert.
- `partitionKey` {{optional_inline}}
  - : Ein `object`, das die Beschreibung der [storage partition](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) enthält, in der sich das Cookie befindet. Dieses Objekt wird weggelassen (null), wenn das Cookie nicht in partitioniertem Speicher ist. Dieses Objekt enthält die folgenden Eigenschaften:
    - `topLevelSite`
      - : Ein `string`, der die First-Party-URL der Speicherpartition des Cookies repräsentiert, falls das Cookie in einem nach Top-Level-Site partitionierten Speicher ist.

- `path`
  - : Ein `string`, der den Pfad des Cookies repräsentiert.
- `secure`
  - : Ein `boolean`, `true`, wenn das Cookie als sicher markiert ist (d.h. sein Geltungsbereich ist auf sichere Kanäle, typischerweise HTTPS, beschränkt), oder `false` andernfalls.
- `session`
  - : Ein `boolean`, `true`, wenn das Cookie ein Session-Cookie ist, oder `false`, wenn es sich um ein persistentes Cookie mit einem Ablaufdatum handelt.
- `sameSite`
  - : Ein {{WebExtAPIRef("cookies.SameSiteStatus")}}-Wert, der den SameSite-Status des Cookies angibt.
- `storeId`
  - : Ein `string`, der die ID des Cookie-Speichers repräsentiert, der dieses Cookie enthält, wie sie von {{WebExtAPIRef("cookies.getAllCookieStores()")}} bereitgestellt wird.
- `value`
  - : Ein `string`, der den Wert des Cookies repräsentiert.

## Beispiele

Die meisten Methoden der Cookies-API beinhalten ein `Cookie`-Objekt als Eingabeparameter oder als Teil des Rückgabewerts. Ein Aufruf von {{WebExtAPIRef("cookies.getAll()")}} gibt zum Beispiel ein Array von `Cookie`-Objekten zurück.

Dieses Beispiel fragt nach allen Cookies und protokolliert dann einige der Werte aus jedem der resultierenden `Cookie`-Objekte:

```js
function logCookies(cookies) {
  for (cookie of cookies) {
    console.log(`Domain: ${cookie.domain}`);
    console.log(`Name: ${cookie.name}`);
    console.log(`Value: ${cookie.value}`);
    console.log(`Persistent: ${!cookie.session}`);
  }
}

let gettingAll = browser.cookies.getAll({});
gettingAll.then(logCookies);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#type-Cookie) API von Chromium. Diese Dokumentation leitet sich von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code ab.

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
