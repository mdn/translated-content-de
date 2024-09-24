---
title: sessions.forgetClosedWindow()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/forgetClosedWindow
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Entfernt ein geschlossenes Fenster aus der Liste der kürzlich geschlossenen Fenster des Browsers. Beachten Sie, dass die von diesem Fenster besuchten Seiten nicht aus dem Browserverlauf entfernt werden. Verwenden Sie die {{WebExtAPIRef("browsingData")}} oder {{WebExtAPIRef("history")}} APIs, um den Verlauf zu entfernen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let forgettingWindow = browser.sessions.forgetClosedWindow(
  sessionId            // string
)
```

### Parameter

- `sessionId`
  - : `String`. Die ID der Sitzung, die Sie vergessen möchten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Dieses wird ohne Argumente erfüllt, wenn die Sitzung entfernt wurde.

Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code vergisst die am kürzlichsten geschlossene Sitzung, egal ob es sich um einen Tab oder ein Fenster handelt:

```js
function forgetMostRecent(sessionInfos) {
  if (!sessionInfos.length) {
    console.log("No sessions found");
    return;
  }
  let sessionInfo = sessionInfos[0];
  if (sessionInfo.tab) {
    browser.sessions.forgetClosedTab(
      sessionInfo.tab.windowId,
      sessionInfo.tab.sessionId,
    );
  } else {
    browser.sessions.forgetClosedWindow(sessionInfo.window.sessionId);
  }
}

function onError(error) {
  console.log(error);
}

browser.sessions
  .getRecentlyClosed({ maxResults: 1 })
  .then(forgetMostRecent, onError);
```

{{WebExtExamples}}
