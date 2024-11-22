---
title: cookies.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/getAll
l10n:
  sourceCommit: 6f58b8afb8e045e0d706ac0f0fdeacfaea487f86
---

{{AddonSidebar}}

Die **`getAll()`** Methode der {{WebExtAPIRef("cookies")}} API ruft alle Cookies aus einem Cookie-Store ab, die den angegebenen Details entsprechen.

Um diese Methode zu nutzen, muss eine Erweiterung die Berechtigung `"cookies"` und entsprechende Host-Berechtigungen haben. Siehe [Cookie-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#permissions) für weitere Details.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getting = browser.cookies.getAll(
  details                // object
)
```

### Parameter

- `details`

  - : Ein `object`, das Details enthält, die verwendet werden, um Cookies zu finden, die abgerufen werden sollen. Die enthaltenen Eigenschaften sind wie folgt (siehe [Cookie-Typ](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies/Cookie#type) für weitere Informationen dazu):

    - `domain` {{optional_inline}}
      - : Ein `string`, das eine Domain darstellt, mit der Cookies in Verbindung stehen müssen (sie können entweder mit dieser exakten Domain oder einer ihrer Subdomains verbunden sein).
    - `firstPartyDomain` {{optional_inline}}

      - : Ein `string`, das die First-Party-Domain repräsentiert, mit der das abzurufende Cookie verknüpft ist.

        Diese Eigenschaft muss angegeben werden, wenn der Browser die First-Party-Isolierung aktiviert hat. Wenn Sie `null` übergeben, werden Cookies mit einem beliebigen Wert für `firstPartyDomain` und Cookies, die `firstPartyDomain` nicht gesetzt haben, in die Ergebnisse eingeschlossen. Siehe [First-Party-Isolierung](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).

    - `name` {{optional_inline}}
      - : Ein `string`, der einen Namen darstellt, den die Cookies haben müssen.
    - `partitionKey` {{optional_inline}}

      - : Ein `object`, das definiert, welche [Speicherpartitionen](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) verwendet werden sollen, um Cookies abzurufen:

        - Wird dies weggelassen, werden nur Cookies aus nicht partitioniertem Speicher zurückgegeben.
        - Wird dies ohne `topLevelSite` einbezogen, werden alle Cookies aus partitioniertem und nicht partitioniertem Speicher zurückgegeben.
        - Wenn es mit einem angegebenen `topLevelSite` einbezogen wird, werden Cookies aus dem angegebenen Partitionenspeicher zurückgegeben.

        Dieses Objekt enthält:

        - `topLevelSite` {{optional_inline}}
          - : Ein `string`, das die First-Party-URL der Top-Level-Site-Speicherpartition darstellt, die die Cookies enthält.

    - `path` {{optional_inline}}
      - : Ein `string`, der einen Pfad repräsentiert - der Pfad der Cookies muss mit diesem identisch sein.
    - `secure` {{optional_inline}}
      - : Ein `boolean` — filtert Cookies nach ihrer `secure` Eigenschaft und ermöglicht das Filtern von sicheren oder unsicheren Cookies.
    - `session` {{optional_inline}}
      - : Ein `boolean` — filtert die Cookies nach ihrer `session` Eigenschaft und ermöglicht das Filtern von Sitzungs- oder persistenten Cookies.
    - `storeId` {{optional_inline}}
      - : Ein `string`, das den Cookie-Store repräsentiert, aus dem Cookies abgerufen werden sollen. Wird er weggelassen, wird der Cookie-Store des aktuellen Ausführungskontexts verwendet.
    - `url` {{optional_inline}}
      - : Ein `string`, das eine URL repräsentiert, mit der die abgerufenen Cookies in Verbindung stehen müssen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von `{{WebExtAPIRef('cookies.Cookie')}}` Objekten erfüllt wird, die den im `details` Parameter angegebenen Eigenschaften entsprechen. Es werden nur nicht abgelaufene Cookies zurückgegeben. Die zurückgegebenen Cookies sind nach Pfadlänge sortiert, von der längsten zur kürzesten. Wenn mehrere Cookies die gleiche Pfadlänge haben, kommen diejenigen mit der frühesten Erstellungszeit zuerst.

> [!NOTE]
> Vor Firefox 133 hat Firefox die Cookies nach der Erstellungszeit sortiert, wobei die früheste Erstellungszeit zuerst kam.

## Beispiele

Dieses Beispiel ruft alle Cookies ab, die der Browser mit dem Namen "favorite-color" gespeichert hat. Wenn das Ergebnis zurückgegeben wird, druckt der Code den Wert jedes Ergebnisses in die Konsole.

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
> Diese API basiert auf der [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-getAll) API von Chromium. Diese Dokumentation ist von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code abgeleitet.

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
