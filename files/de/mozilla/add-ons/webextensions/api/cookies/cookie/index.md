---
title: cookies.Cookie
slug: Mozilla/Add-ons/WebExtensions/API/cookies/Cookie
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der `Cookie`-Typ der {{WebExtAPIRef("cookies")}} API repräsentiert Informationen über ein HTTP-Cookie.

## Typ

Werte dieses Typs sind Objekte, die die folgenden Eigenschaften enthalten können:

- `domain`
  - : Ein `string`, der die Domain repräsentiert, zu der das Cookie gehört (z. B. "www\.google.com", "example.com").
- `expirationDate` {{optional_inline}}
  - : Eine `number`, die das Ablaufdatum des Cookies als Anzahl der Sekunden seit der UNIX-Epoche angibt. Wird für Sitzungscookies nicht angegeben.
- `firstPartyDomain`
  - : Ein `string`, der die zugehörige First-Party-Domain des Cookies repräsentiert. Dies ist ein leerer String, wenn das Cookie gesetzt wurde, während die Isolierung der First-Party-Domain deaktiviert war. Siehe [Isolierung der First-Party-Domain](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
- `hostOnly`
  - : Ein `boolean`, `true`, wenn das Cookie ein Host-Only-Cookie ist (d. h. der Host der Anfrage muss genau mit der Domain des Cookies übereinstimmen), oder `false` andernfalls.
- `httpOnly`
  - : Ein `boolean`, `true`, wenn das Cookie als HttpOnly markiert ist (d. h. das Cookie ist für clientseitige Skripte nicht zugänglich), oder `false` andernfalls.
- `name`
  - : Ein `string`, der den Namen des Cookies darstellt.
- `partitionKey` {{optional_inline}}

  - : Ein `object`, das die Beschreibung der [Speicherpartition](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) enthält, in der sich das Cookie befindet. Dieses Objekt wird ausgelassen (null), wenn das Cookie nicht in einem partitionierten Speicher ist. Dieses Objekt enthält die folgenden Eigenschaften:

    - `topLevelSite`
      - : Ein `string`, der die First-Party-URL der Speicherpartition des Cookies darstellt, falls das Cookie in einem Speicher ist, der nach oberster Website partitioniert ist.

- `path`
  - : Ein `string`, der den Pfad des Cookies darstellt.
- `secure`
  - : Ein `boolean`, `true`, wenn das Cookie als sicher markiert ist (d. h. sein Geltungsbereich auf sichere Kanäle, typischerweise HTTPS, beschränkt ist), oder `false` andernfalls.
- `session`
  - : Ein `boolean`, `true`, wenn das Cookie ein Sitzungscookie ist, oder `false`, wenn es ein persistentes Cookie mit einem Ablaufdatum ist.
- `sameSite`
  - : Ein {{WebExtAPIRef("cookies.SameSiteStatus")}}-Wert, der den SameSite-Status des Cookies angibt.
- `storeId`
  - : Ein `string`, der die ID des Cookie-Speichers repräsentiert, der dieses Cookie enthält, wie von {{WebExtAPIRef("cookies.getAllCookieStores()")}} bereitgestellt.
- `value`
  - : Ein `string`, der den Wert des Cookies darstellt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Die meisten Methoden in der Cookie-API beinhalten, dass ein `Cookie`-Objekt entweder als Eingabeparameter verwendet wird oder Teil des Rückgabewerts ist. Zum Beispiel gibt ein Aufruf von {{WebExtAPIRef("cookies.getAll()")}} ein Array von `Cookie`-Objekten zurück.

Im untenstehenden Beispiel haben wir nach allen Cookies gefragt und dann einige der Werte jedes der resultierenden `Cookie`-Objekte protokolliert:

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

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#type-Cookie) API. Diese Dokumentation stammt aus [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.

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
