---
title: sessions.getRecentlyClosed()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/getRecentlyClosed
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Gibt ein Array von {{WebExtAPIRef("sessions.Session", "Session")}}-Objekten zurück, die Fenster und Tabs darstellen, die in der aktuellen Browsersitzung geschlossen wurden (das heißt: seit dem Start des Browsers).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingSessions = browser.sessions.getRecentlyClosed(
  filter             // optionales Objekt
)
```

### Parameter

- `filter` {{optional_inline}}
  - : `object`. Ein {{WebExtAPIRef("sessions.Filter")}}-Objekt, das den Umfang der zurückgegebenen Sitzungen einschränkt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Dieses wird mit einem Array von {{WebExtAPIRef("sessions.Session", "Session")}}-Objekten erfüllt, eines für jeden der zuletzt geschlossenen Tabs oder Fenster in der aktuellen Browsersitzung, bis zu {{WebExtAPIRef("sessions.MAX_SESSION_RESULTS")}} oder der im `filter`-Argument enthaltenen Anzahl, je nachdem, welche kleiner ist. Das Array wird in umgekehrter Reihenfolge der Schließung der Tabs oder Fenster gegeben, sodass der zuletzt geschlossene an Index 0 steht.

Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

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

> [!NOTE]
> Diese API basiert auf der [`chrome.sessions`](https://developer.chrome.com/docs/extensions/reference/api/sessions)-API von Chromium.
