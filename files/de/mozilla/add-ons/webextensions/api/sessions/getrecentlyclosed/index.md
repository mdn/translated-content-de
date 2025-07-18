---
title: sessions.getRecentlyClosed()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/getRecentlyClosed
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Gibt ein Array von {{WebExtAPIRef("sessions.Session", "Session")}} Objekten zurück, die Fenster und Tabs darstellen, die in der aktuellen Browsersitzung geschlossen wurden (also: die Zeit, seit der der Browser gestartet wurde).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingSessions = browser.sessions.getRecentlyClosed(
  filter             // optional object
)
```

### Parameter

- `filter` {{optional_inline}}
  - : `object`. Ein {{WebExtAPIRef("sessions.Filter")}} Objekt, das die Menge der zurückgegebenen Sitzungen einschränkt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Dieses wird mit einem Array von {{WebExtAPIRef("sessions.Session", "Session")}} Objekten erfüllt werden, eines für jeden der zuletzt geschlossenen Tabs oder Fenster in der aktuellen Browsersitzung, bis zu {{WebExtAPIRef("sessions.MAX_SESSION_RESULTS")}} oder der Anzahl, die im Argument `filter` enthalten ist, je nachdem, welche Zahl kleiner ist. Das Array wird in umgekehrter Reihenfolge der Schließung der Tabs oder Fenster angegeben, sodass der zuletzt geschlossene Eintrag bei Index 0 steht.

Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieser Code stellt die zuletzt geschlossene Sitzung wieder her, unabhängig davon, ob es sich um einen Tab oder ein Fenster handelt:

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
> Diese API basiert auf der [`chrome.sessions`](https://developer.chrome.com/docs/extensions/reference/api/sessions) API von Chromium.
