---
title: cookies.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/getAll
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die **`getAll()`** Methode der {{WebExtAPIRef("cookies")}} API ruft alle Cookies aus einem Cookie-Store ab, die den angegebenen Details entsprechen.

Um diese Methode zu nutzen, muss eine Erweiterung die Berechtigung `"cookies"` und relevante Host-Berechtigungen besitzen. Sehen Sie für weitere Details die [Cookie-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#permissions) ein.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getting = browser.cookies.getAll(
  details                // object
)
```

### Parameter

- `details`
  - : Ein `object`, das Details enthält, die verwendet werden, um die abzurufenden Cookies zu identifizieren. Die enthaltenen Eigenschaften sind wie folgt (siehe [Cookie-Typ](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies/Cookie#type) für weitere Informationen hierzu):
    - `domain` {{optional_inline}}
      - : Ein `string`, das eine Domain darstellt, mit der die Cookies verbunden sein müssen (sie können entweder mit dieser genauen Domain oder einem ihrer Subdomains verbunden sein).
    - `firstPartyDomain` {{optional_inline}}
      - : Ein `string`, das die Erstparteien-Domain darstellt, mit der das abzurufende Cookie verbunden ist.

        Diese Eigenschaft muss angegeben werden, wenn der Browser die Isolierung der Erstpartei aktiviert hat. Wenn Sie `null` übergeben, sind Cookies mit jedem Wert für `firstPartyDomain` und Cookies, die kein `firstPartyDomain` gesetzt haben, in den Ergebnissen enthalten. Sehen Sie [Isolation der Erstpartei](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).

    - `name` {{optional_inline}}
      - : Ein `string`, das einen Namen darstellt, den die Cookies haben müssen.
    - `partitionKey` {{optional_inline}}
      - : Ein `object`, das definiert, aus welchen [Speicherpartitionen](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) Cookies zurückgegeben werden sollen:
        - Falls weggelassen, werden nur Cookies aus unpartitioniertem Speicher zurückgegeben.
        - Falls enthalten ohne `topLevelSite`, werden alle Cookies aus partitioniertem und unpartitioniertem Speicher zurückgegeben.
        - Falls enthalten mit der angegebenen `topLevelSite`, werden Cookies aus dem angegebenen Partitionsspeicher zurückgegeben.

        Dieses Objekt enthält:
        - `topLevelSite` {{optional_inline}}
          - : Ein `string`, das die Erstparteien-URL der Top-Level-Site-Speicherpartition darstellt, die die Cookies enthält.

    - `path` {{optional_inline}}
      - : Ein `string`, das einen Pfad darstellt — der Pfad der Cookies muss mit diesem übereinstimmen.
    - `secure` {{optional_inline}}
      - : Ein `boolean` — filtert Cookies nach ihrer `secure` Eigenschaft, sodass Sie sichere oder nicht sichere Cookies filtern können.
    - `session` {{optional_inline}}
      - : Ein `boolean` — filtert die Cookies nach ihrer `session` Eigenschaft, sodass Sie Session- oder persistente Cookies filtern können.
    - `storeId` {{optional_inline}}
      - : Ein `string`, der den Cookie-Store darstellt, aus dem Cookies abgerufen werden sollen. Falls weggelassen, wird der Cookie-Store des aktuellen Ausführungskontextes verwendet.
    - `url` {{optional_inline}}
      - : Ein `string`, das eine URL darstellt, mit der die abgerufenen Cookies verbunden sein müssen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef('cookies.Cookie')}} Objekten erfüllt wird, die den im Parameter `details` angegebenen Eigenschaften entsprechen. Es werden nur nicht abgelaufene Cookies zurückgegeben. Die zurückgegebenen Cookies sind nach Pfadlänge sortiert, von der längsten zur kürzesten. Wenn mehrere Cookies die gleiche Pfadlänge haben, werden die mit der frühesten Erstellungszeit zuerst zurückgegeben.

> [!NOTE]
> Vor Firefox 133 gab Firefox die Cookies nach Erstellungszeit sortiert zurück, mit der frühesten Erstellungszeit zuerst.

## Beispiele

Dieses Beispiel ruft alle Cookies ab, die der Browser mit dem Namen "favorite-color" gespeichert hat. Wenn das Ergebnis zurückgegeben wird, gibt der Code den Wert jedes Ergebnisses in die Konsole aus.

```js
function logCookies(cookies) {
  for (const cookie of cookies) {
    console.log(cookie.value);
  }
}

browser.cookies
  .getAll({
    name: "favorite-color",
  })
  .then(logCookies);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-getAll) API. Diese Dokumentation basiert auf [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.

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
