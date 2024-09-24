---
title: sessions.restore()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/restore
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Stellt einen geschlossenen Tab oder ein geschlossenes Fenster wieder her. Das Wiederherstellen öffnet nicht nur den Tab oder das Fenster erneut, sondern stellt auch die Navigationserfahrung des Tabs wieder her, sodass die Vor-/Zurück-Schaltflächen funktionieren. Bei der Wiederherstellung eines Fensters werden alle Tabs wiederhergestellt, die das Fenster beim Schließen beinhaltete.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let restoringSession = browser.sessions.restore(
  sessionId             // string
)
```

### Parameter

- `sessionId`
  - : `string`. Ein String, der die Sitzungs-ID für das zu wiederherstellende Fenster oder den zu wiederherstellenden Tab enthält. Diese kann in der `sessionId`-Eigenschaft des {{WebExtAPIRef("tabs.Tab", "Tab")}}- oder {{WebExtAPIRef("windows.Window", "Window")}}-Objekts gefunden werden, das in der {{WebExtAPIRef("sessions.Session", "Session")}} zurückgegeben wird, die von {{WebExtAPIRef("sessions.getRecentlyClosed()")}} zurückgegeben wird.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Dieses wird mit einem {{WebExtAPIRef("sessions.Session", "Session")}}-Objekt erfüllt, das die wiederhergestellte Sitzung repräsentiert.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dies stellt die zuletzt geschlossene Sitzung wieder her, egal ob es sich um ein Fenster oder einen Tab handelt:

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

## Bekannte Probleme

[Bug 1538119](https://bugzil.la/1538119) - Doppelter sessionId in browser.sessions.getRecentlyClosed() nach "Vorherige Sitzung wiederherstellen"
