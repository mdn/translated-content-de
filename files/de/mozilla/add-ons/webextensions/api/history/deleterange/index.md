---
title: history.deleteRange()
slug: Mozilla/Add-ons/WebExtensions/API/history/deleteRange
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Entfernt alle Besuche von Seiten, die der Benutzer während des angegebenen Zeitraums gemacht hat. Wenn dadurch alle Besuche zu einer bestimmten Seite entfernt werden, wird die Seite nicht mehr im Browserverlauf angezeigt, und {{WebExtAPIRef("history.onVisitRemoved")}} wird für diese Seite ausgelöst.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let deletingRange = browser.history.deleteRange(
  range           // object
)
```

### Parameter

- `range`
  - : `object`. Spezifikation des Zeitraums, für den Besuche gelöscht werden sollen.
    - `startTime`
      - : `number` oder `string` oder `object`. Ein Wert, der Datum und Uhrzeit angibt. Dies kann dargestellt werden als: ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Objekt, ein [ISO 8601-Datumsstring](https://www.iso.org/iso-8601-date-and-time-format.html) oder die Anzahl der [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time). Gibt die Startzeit für den Zeitraum an.
    - `endTime`
      - : `number` oder `string` oder `object`. Ein Wert, der Datum und Uhrzeit angibt. Dies kann dargestellt werden als: ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Objekt, ein [ISO 8601-Datumsstring](https://www.iso.org/iso-8601-date-and-time-format.html) oder die Anzahl der [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time). Gibt die Endzeit für den Zeitraum an.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wird ohne Parameter erfüllt, wenn der Zeitraum gelöscht wurde.

## Beispiele

Löschen Sie alle Besuche, die in der letzten Minute gemacht wurden:

```js
const MINUTE = 60 * 1000;

function oneMinuteAgo() {
  return Date.now() - MINUTE;
}

browser.history.deleteRange({
  startTime: oneMinuteAgo(),
  endTime: Date.now(),
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#method-deleteRange) API. Diese Dokumentation stammt aus [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code.

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
