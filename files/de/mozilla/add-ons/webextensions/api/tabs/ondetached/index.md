---
title: tabs.onDetached
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onDetached
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ausgelöst, wenn ein Tab von einem Fenster abgelöst wird, zum Beispiel, weil es zwischen Fenstern verschoben wird.

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
  - : Stoppt das Zuhören bei diesem Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:
    - `tabId`
      - : `integer`. ID des Tabs, der abgelöst wurde.
    - `detachInfo`
      - : `object`. ID des vorherigen Fensters und Index des Tabs darin. Weitere Details siehe im Abschnitt [detachInfo](#detachinfo_2).

## Zusätzliche Objekte

### detachInfo

- `oldWindowId`
  - : `integer`. ID des vorherigen Fensters.
- `oldPosition`
  - : `integer`. Indexposition, die der Tab im alten Fenster hatte.

## Beispiele

Ereignisse des Ablösens überwachen und die Informationen protokollieren:

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
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onDetached) API. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
