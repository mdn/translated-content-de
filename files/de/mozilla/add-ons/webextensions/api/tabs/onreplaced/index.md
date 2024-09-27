---
title: tabs.onReplaced
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onReplaced
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Tab aufgrund von Prerendering oder Instant durch einen anderen Tab ersetzt wird.

Dieses Ereignis ist möglicherweise für andere Browser als Chrome nicht relevant oder unterstützt.

## Syntax

```js-nolint
browser.tabs.onReplaced.addListener(listener)
browser.tabs.onReplaced.removeListener(listener)
browser.tabs.onReplaced.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, dieses Ereignis zu hören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, `false` andernfalls.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:

    - `addedTabId`
      - : `integer`. ID des ersetzten Tabs.
    - `removedTabId`
      - : `integer`. ID des Tabs, der ersetzt wurde.

## Beispiele

Hören Sie auf Ersetzungsereignisse und protokollieren Sie die zugehörigen Informationen:

```js
function handleReplaced(addedTabId, removedTabId) {
  console.log(`New tab: ${addedTabId}`);
  console.log(`Old tab: ${removedTabId}`);
}

browser.tabs.onReplaced.addListener(handleReplaced);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onReplaced) API. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
