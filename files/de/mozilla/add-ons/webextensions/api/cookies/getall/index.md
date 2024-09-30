---
title: cookies.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/getAll
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die **`getAll()`** Methode der {{WebExtAPIRef("cookies")}} API ruft alle Cookies aus einem einzigen Cookie-Speicher ab, die den angegebenen Informationen entsprechen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getting = browser.cookies.getAll(
  details                // object
)
```

### Parameter

- `details`

  - : Ein `object`, das Details enthält, die verwendet werden können, um die abzurufenden Cookies zu filtern. Die enthaltenen Eigenschaften sind wie folgt (siehe [Cookie-Typ](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies/Cookie#type) für weitere Informationen dazu):

    - `domain` {{optional_inline}}
      - : Ein `string`, der eine Domain darstellt, mit der die Cookies verknüpft sein müssen (sie können entweder mit dieser exakten Domain oder einer ihrer Subdomains verknüpft sein).
    - `firstPartyDomain` {{optional_inline}}

      - : Ein `string`, der die zugehörige First-Party-Domain darstellt.

        Diese Eigenschaft muss angegeben werden, wenn im Browser die Isolation von First-Parties aktiviert ist. Sie können jedoch in diesem Fall `null` übergeben. Wenn Sie dies tun, werden Cookies mit jedem Wert für `firstPartyDomain`, sowie Cookies, die `firstPartyDomain` überhaupt nicht gesetzt haben, in die Ergebnisse aufgenommen. Siehe [First-Party-Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).

    - `name` {{optional_inline}}
      - : Ein `string`, der einen Namen darstellt, den die Cookies haben sollten.
    - `partitionKey` {{optional_inline}}

      - : Ein `object`, das definiert, aus welchen [Speicherpartitionen](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) Cookies zurückgegeben werden sollen:

        - wenn ausgelassen, werden nur Cookies aus nicht partitionierten Speicher zurückgegeben.
        - wenn ohne `topLevelSite` eingeschlossen, werden alle Cookies aus partitionierten und nicht partitionierten Speicher zurückgegeben.
        - wenn mit angegebenem `topLevelSite` eingeschlossen, werden Cookies aus dem angegebenen Partitionsspeicher zurückgegeben.

        Dieses Objekt enthält:

        - `topLevelSite` {{optional_inline}}
          - : Ein `string`, der die First-Party-URL der Top-Level-Sitespeicherpartition darstellt, die die Cookies enthält.

    - `path` {{optional_inline}}
      - : Ein `string`, der einen Pfad darstellt — der Pfad des Cookies muss mit diesem identisch sein.
    - `secure` {{optional_inline}}
      - : Ein `boolean` — filtert Cookies nach ihrer `secure` Eigenschaft, sodass Sie sichere Cookies vs. nicht sichere Cookies filtern können.
    - `session` {{optional_inline}}
      - : Ein `boolean` — filtert die Cookies nach ihrer `session` Eigenschaft, sodass Sie Sitzungs-Cookies vs. persistente Cookies filtern können.
    - `storeId` {{optional_inline}}
      - : Ein `string`, der den Cookie-Speicher darstellt, aus dem Cookies abgerufen werden sollen. Wenn ausgelassen, wird der Cookie-Speicher des aktuellen Ausführungskontexts verwendet.
    - `url` {{optional_inline}}
      - : Ein `string`, der eine URL darstellt, mit der die abgerufenen Cookies verknüpft sein müssen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von `{{WebExtAPIRef('cookies.Cookie')}}` Objekten erfüllt wird, die den im `details` Parameter angegebenen Eigenschaften entsprechen. Es werden nur nicht abgelaufene Cookies zurückgegeben. Die zurückgegebenen Cookies werden nach der Pfadlänge sortiert, von der längsten zur kürzesten. Wenn mehrere Cookies die gleiche Pfadlänge aufweisen, kommen die mit der frühesten Erstellungszeit zuerst.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Im folgenden Codeausschnitt machen wir einen Aufruf, um alle Cookies abzurufen, die der Browser derzeit gespeichert hat und die den Namen "favorite-color" haben. Wenn das Ergebnis zurückgegeben wird, drucken wir den Wert jedes Ergebnisses auf die Konsole.

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

> [!NOTE]
> Diese API basiert auf der Chromiums [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-getAll) API. Diese Dokumentation ist abgeleitet von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.

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
