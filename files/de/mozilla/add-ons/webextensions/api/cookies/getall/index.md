---
title: cookies.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/getAll
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die **`getAll()`** Methode der {{WebExtAPIRef("cookies")}} API ruft alle Cookies aus einem einzelnen Cookie-Store ab, die den angegebenen Informationen entsprechen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getting = browser.cookies.getAll(
  details                // object
)
```

### Parameter

- `details`

  - : Ein `object`, das Details enthält, die verwendet werden können, um die abzurufenden Cookies zu filtern. Die enthaltenen Eigenschaften sind wie folgt (siehe [Cookie-Typ](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies/Cookie#type) für weitere Informationen zu diesen):

    - `domain` {{optional_inline}}
      - : Ein `string`, das eine Domain darstellt, der Cookies zugeordnet sein müssen (sie können entweder mit dieser genauen Domain oder einer ihrer Subdomains assoziiert sein).
    - `firstPartyDomain` {{optional_inline}}

      - : Ein `string`, das die First-Party-Domain darstellt, mit der das abzurufende Cookie assoziiert ist.

        Diese Eigenschaft muss angegeben werden, wenn der Browser die first-party isolation aktiviert hat. Sie können in diesem Fall jedoch `null` übergeben. Wenn Sie dies tun, werden Cookies mit einem beliebigen Wert für `firstPartyDomain` sowie Cookies, die das `firstPartyDomain` überhaupt nicht gesetzt haben, in die Ergebnisse eingeschlossen. Siehe [First-party Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).

    - `name` {{optional_inline}}
      - : Ein `string`, das einen Namen darstellt, den die Cookies haben sollten.
    - `partitionKey` {{optional_inline}}

      - : Ein `object`, das definiert, aus welchen [Speicherpartitionen](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) Cookies zurückgegeben werden sollen:

        - Wenn nicht angegeben, werden nur Cookies aus nicht partitioniertem Speicher zurückgegeben.
        - Wenn enthalten, aber ohne `topLevelSite`, werden alle Cookies aus partitioniertem und nicht partitioniertem Speicher zurückgegeben.
        - Wenn vorhanden und `topLevelSite` angegeben ist, werden Cookies aus dem angegebenen Partitionsspeicher zurückgegeben.

        Dieses Objekte enthält:

        - `topLevelSite` {{optional_inline}}
          - : Ein `string`, das die First-Party-URL der obersten Speicherebene der Partition darstellt, die die Cookies enthält.

    - `path` {{optional_inline}}
      - : Ein `string`, das einen Pfad darstellt — der Pfad der Cookies muss mit diesem identisch sein.
    - `secure` {{optional_inline}}
      - : Ein `boolean` — filtert Cookies nach ihrer `secure` Eigenschaft, sodass Sie sichere von nicht sicheren Cookies filtern können.
    - `session` {{optional_inline}}
      - : Ein `boolean` — filtert die Cookies nach ihrer `session` Eigenschaft, sodass Sie Sitzungscookies von persistenten Cookies filtern können.
    - `storeId` {{optional_inline}}
      - : Ein `string`, das den Cookie-Store darstellt, aus dem Cookies abgerufen werden sollen. Wenn weggelassen, wird der Cookie-Store des aktuellen Ausführungskontextes verwendet.
    - `url` {{optional_inline}}
      - : Ein `string`, das eine URL darstellt, mit der die abgerufenen Cookies assoziiert sein müssen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von `{{WebExtAPIRef('cookies.Cookie')}}` Objekten erfüllt wird, die mit den im `details` Parameter angegebenen Eigenschaften übereinstimmen. Es werden nur nicht abgelaufene Cookies zurückgegeben. Die zurückgegebenen Cookies werden nach Pfadlänge sortiert, von längster zu kürzester. Haben mehrere Cookies die gleiche Pfadlänge, werden diejenigen mit der frühesten Erstellungszeit zuerst angezeigt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Im folgenden Ausschnitt rufen wir alle Cookies ab, die der Browser gerade gespeichert hat und deren Name "favorite-color" ist. Wenn das Ergebnis zurückgegeben wird, drucken wir den Wert jedes Ergebnisses in die Konsole.

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
> Diese API basiert auf Chromiums [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-getAll) API. Diese Dokumentation ist abgeleitet von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.

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
