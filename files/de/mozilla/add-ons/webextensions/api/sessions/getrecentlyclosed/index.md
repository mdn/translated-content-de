---
title: sessions.getRecentlyClosed()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/getRecentlyClosed
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Gibt ein Array von {{WebExtAPIRef("sessions.Session", "Session")}}-Objekten zurück, die Fenster und Tabs darstellen, die in der aktuellen Browsing-Sitzung geschlossen wurden (also: die Zeit seit dem Starten des Browsers).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingSessions = browser.sessions.getRecentlyClosed(
  filter             // optional object
)
```

### Parameter

- `filter` {{optional_inline}}
  - : `object`. Ein {{WebExtAPIRef("sessions.Filter")}}-Objekt, das die Menge der zurückgegebenen Sitzungen eingrenzt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Dies wird mit einem Array von {{WebExtAPIRef("sessions.Session", "Session")}}-Objekten erfüllt, eines für jeden der zuletzt geschlossenen Tabs oder Fenster in der aktuellen Browsing-Sitzung, bis zu {{WebExtAPIRef("sessions.MAX_SESSION_RESULTS")}} oder der im `filter`-Argument enthaltenen Anzahl, je nachdem, welcher Wert kleiner ist. Das Array wird in umgekehrter Reihenfolge der geschlossenen Tabs oder Fenster angegeben, sodass das zuletzt geschlossene Element an Index 0 steht.

Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieser Code stellt die zuletzt geschlossene Sitzung wieder her, egal ob es sich um einen Tab oder ein Fenster handelt:

```js
function restoreMostRecent(sessionInfos) {
  if (!sessionInfos.length) {
    console.log("No sessions found");
    return;
  }
  let sessionInfo = sessionInfos[0];
  if (sessionInfo.tab) {
    browser.sessions.restore(sessionInfo.tab.sessionId);
  } else {
    browser.sessions.restore(sessionInfo.window.sessionId);
  }
}

function onError(error) {
  console.log(error);
}

browser.browserAction.onClicked.addListener(() => {
  let gettingSessions = browser.sessions.getRecentlyClosed({
    maxResults: 1,
  });
  gettingSessions.then(restoreMostRecent, onError);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.sessions`](https://developer.chrome.com/docs/extensions/reference/api/sessions)-API von Chromium.

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
