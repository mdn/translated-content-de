---
title: sessions.restore()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/restore
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Stellt einen geschlossenen Tab oder ein Fenster wieder her. Das Wiederherstellen öffnet nicht nur den Tab oder das Fenster erneut, sondern stellt auch den Navigationsverlauf des Tabs wieder her, sodass die Vor-/Zurück-Tasten funktionieren. Das Wiederherstellen eines Fensters wird alle Tabs wiederherstellen, die das Fenster beim Schließen enthielt.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let restoringSession = browser.sessions.restore(
  sessionId             // string
)
```

### Parameter

- `sessionId`
  - : `string`. Ein String, der die Sitzungs-ID für das wiederherzustellende Fenster oder den Tab enthält. Diese kann in der `sessionId`-Eigenschaft des {{WebExtAPIRef("tabs.Tab", "Tab")}} oder {{WebExtAPIRef("windows.Window", "Window")}} Objekts im {{WebExtAPIRef("sessions.Session", "Session")}} gefunden werden, das von {{WebExtAPIRef("sessions.getRecentlyClosed()")}} zurückgegeben wird.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Dieses wird mit einem {{WebExtAPIRef("sessions.Session", "Session")}} Objekt erfüllt, das die wiederhergestellte Sitzung repräsentiert.

## Beispiele

Dies stellt die zuletzt geschlossene Sitzung wieder her, unabhängig davon, ob es sich um ein Fenster oder einen Tab handelt:

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
> Dieses API basiert auf Chromium's [`chrome.sessions`](https://developer.chrome.com/docs/extensions/reference/api/sessions) API.

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

## Bekannte Probleme

[Bug 1538119](https://bugzil.la/1538119) - Doppelte sessionId in browser.sessions.getRecentlyClosed() nach "Vorherige Sitzung wiederherstellen"
