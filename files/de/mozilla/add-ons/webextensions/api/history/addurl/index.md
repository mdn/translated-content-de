---
title: history.addUrl()
slug: Mozilla/Add-ons/WebExtensions/API/history/addUrl
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügt dem Browserverlauf einen Eintrag für den Besuch der angegebenen URL hinzu. Die Besuchszeit wird als die Zeit des Aufrufs protokolliert, und der {{WebExtAPIRef("history.TransitionType", "TransitionType")}} wird als "link" aufgezeichnet.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let addingUrl = browser.history.addUrl(
  details         // object
)
```

### Parameter

- `details`

  - : `object`. Objekt, das die hinzuzufügende URL enthält.

    - `url`
      - : `string`. Die hinzuzufügende URL.
    - `title` {{optional_inline}}
      - : string: Der Titel der Seite. Wenn dieser nicht angegeben wird, wird der Titel als `null` aufgezeichnet.
    - `transition` {{optional_inline}}
      - : {{WebExtAPIRef("history.TransitionType")}}. Beschreibt, wie der Browser bei dieser Gelegenheit zu der Seite navigiert ist. Wenn dies nicht angegeben wird, wird ein Übergangstyp von "link" aufgezeichnet.
    - `visitTime` {{optional_inline}}
      - : `number` oder `string` oder `object`. Ein Wert, der ein Datum und eine Uhrzeit angibt. Dies kann als: ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt, eine [ISO 8601 Datumszeichenfolge](https://www.iso.org/iso-8601-date-and-time-format.html) oder die Anzahl der Millisekunden seit der Epoche dargestellt werden. Legt die Besuchszeit auf diesen Wert fest. Wenn dies nicht angegeben wird, wird die aktuelle Zeit aufgezeichnet.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wird ohne Parameter erfüllt, wenn das Element hinzugefügt wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Fügen Sie einen Eintrag für einen Besuch zu "https\://example.org/" hinzu und überprüfen Sie dann, ob der neue Besuch protokolliert wurde, indem Sie den Verlauf nach dem neuesten Element durchsuchen und es protokollieren:

```js
function onGot(results) {
  if (results.length) {
    console.log(results[0].url);
    console.log(new Date(results[0].lastVisitTime));
  }
}

browser.history
  .addUrl({ url: "https://example.org/" })
  .then(() =>
    browser.history.search({
      text: "https://example.org/",
      startTime: 0,
      maxResults: 1,
    }),
  )
  .then(onGot);
```

Fügen Sie einen Eintrag für einen Besuch zu "https\://example.org" hinzu, geben Sie jedoch eine `visitTime` 24 Stunden in der Vergangenheit und einen `transition` von "typed" an:

```js
const DAY = 24 * 60 * 60 * 1000;

function oneDayAgo() {
  return Date.now() - DAY;
}

function onGot(visits) {
  for (const visit of visits) {
    console.log(new Date(visit.visitTime));
    console.log(visit.transition);
  }
}

browser.history
  .addUrl({
    url: "https://example.org/",
    visitTime: oneDayAgo(),
    transition: "typed",
  })
  .then(() =>
    browser.history.getVisits({
      url: "https://example.org/",
    }),
  )
  .then(onGot);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#method-addUrl) API. Diese Dokumentation ist abgeleitet von [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code.

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
