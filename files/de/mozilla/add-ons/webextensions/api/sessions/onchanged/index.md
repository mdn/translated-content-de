---
title: sessions.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/sessions/onChanged
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Wird ausgelöst, wenn sich die Liste der geschlossenen Tabs oder Fenster ändert.

## Syntax

```js-nolint
browser.sessions.onChanged.addListener(listener)
browser.sessions.onChanged.removeListener(listener)
browser.sessions.onChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Es werden keine Parameter übergeben.

## Beispiele

Diese sehr nervige Erweiterung hört auf `onChanged` und stellt dann sofort die zuletzt geschlossene Sitzung wieder her, wodurch es unmöglich wird, Fenster oder Tabs zu schließen:

```js
function restoreSession(sessionInfos) {
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

function restoreMostRecent() {
  let gettingSessions = browser.sessions.getRecentlyClosed({
    maxResults: 1,
  });
  gettingSessions.then(restoreSession, onError);
}

browser.sessions.onChanged.addListener(restoreMostRecent);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.sessions`](https://developer.chrome.com/docs/extensions/reference/api/sessions) API von Chromium.
