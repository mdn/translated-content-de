---
title: tabs.onCreated
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onCreated
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Tab erstellt wird.

Beachten Sie, dass die URL des Tabs zum Zeitpunkt, an dem dieses Ereignis ausgelöst wird, möglicherweise noch nicht den endgültigen Wert hat. Insbesondere öffnet Firefox einen neuen Tab mit der URL "about:blank", bevor die neue Seite darin geladen wird. Sie können {{WebExtAPIRef("tabs.onUpdated")}}-Ereignisse abhören, um benachrichtigt zu werden, wenn eine URL festgelegt wird.

## Syntax

```js-nolint
browser.tabs.onCreated.addListener(listener)
browser.tabs.onCreated.removeListener(listener)
browser.tabs.onCreated.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, dieses Ereignis abzuhören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, ansonsten `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Details des erstellten Tabs.

## Beispiele

Protokollieren Sie die IDs neu erstellter Tabs:

```js
function handleCreated(tab) {
  console.log(tab.id);
}

browser.tabs.onCreated.addListener(handleCreated);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onCreated) API. Diese Dokumentation stammt von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
