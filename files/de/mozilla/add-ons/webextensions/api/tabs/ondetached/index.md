---
title: tabs.onDetached
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onDetached
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Tab von einem Fenster getrennt wird, z.B. weil es zwischen Fenstern verschoben wird.

## Syntax

```js-nolint
browser.tabs.onDetached.addListener(listener)
browser.tabs.onDetached.removeListener(listener)
browser.tabs.onDetached.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, diesem Ereignis zuzuhören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
    - `tabId`
      - : `integer`. ID des Tabs, der getrennt wurde.
    - `detachInfo`
      - : `object`. ID des vorherigen Fensters und Index des Tabs darin. Siehe den Abschnitt [detachInfo](#detachinfo_2) für mehr Details.

## Zusätzliche Objekte

### detachInfo

- `oldWindowId`
  - : `integer`. ID des vorherigen Fensters.
- `oldPosition`
  - : `integer`. Indexposition, die der Tab im alten Fenster hatte.

## Beispiele

Ereignisse für Trennungen überwachen und die Infos protokollieren:

```js
function handleDetached(tabId, detachInfo) {
  console.log(`Tab: ${tabId} moved`);
  console.log(`Old window: ${detachInfo.oldWindowId}`);
  console.log(`Old index: ${detachInfo.oldPosition}`);
}

browser.tabs.onDetached.addListener(handleDetached);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onDetached) API von Chromium. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
