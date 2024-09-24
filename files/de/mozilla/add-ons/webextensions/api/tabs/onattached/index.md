---
title: tabs.onAttached
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onAttached
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Tab an ein Fenster angehängt wird, zum Beispiel weil es zwischen Fenstern verschoben wurde.

## Syntax

```js-nolint
browser.tabs.onAttached.addListener(listener)
browser.tabs.onAttached.removeListener(listener)
browser.tabs.onAttached.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:

    - `tabId`
      - : `integer`. ID des Tabs, der an ein neues Fenster angehängt wurde.
    - `attachInfo`
      - : `object`. ID des neuen Fensters und Index des Tabs darin. Siehe den Abschnitt [attachInfo](#attachinfo_2) für weitere Details.

## Zusätzliche Objekte

### attachInfo

- `newWindowId`
  - : `integer`. ID des neuen Fensters.
- `newPosition`
  - : `integer`. Indexposition, die der Tab im neuen Fenster hat.

## Beispiele

Lauscht auf Anhang-Ereignisse und protokolliert die Informationen:

```js
function handleAttached(tabId, attachInfo) {
  console.log(`Tab: ${tabId} attached`);
  console.log(`New window: ${attachInfo.newWindowId}`);
  console.log(`New index: ${attachInfo.newPosition}`);
}

browser.tabs.onAttached.addListener(handleAttached);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onAttached) API von Chromium. Diese Dokumentation basiert auf [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
