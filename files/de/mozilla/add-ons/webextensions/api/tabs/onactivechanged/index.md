---
title: tabs.onActiveChanged
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onActiveChanged
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

> [!WARNING]
> Dieses Ereignis ist veraltet. Verwenden Sie stattdessen {{WebExtAPIRef("tabs.onActivated")}}.

Wird ausgelöst, wenn sich der ausgewählte Tab in einem Fenster ändert. Beachten Sie, dass die URL des Tabs möglicherweise nicht festgelegt ist, wenn dieses Ereignis ausgelöst wird. Sie können jedoch auf {{WebExtAPIRef('tabs.onUpdated')}}-Ereignisse hören, um benachrichtigt zu werden, wenn eine URL festgelegt wird.

## Syntax

```js-nolint
browser.tabs.onActiveChanged.addListener(listener)
browser.tabs.onActiveChanged.removeListener(listener)
browser.tabs.onActiveChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüfen Sie, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:
    - `tabId`
      - : `integer`. Die ID des Tabs, der aktiv geworden ist.
    - `selectInfo`
      - : `object`. Weitere Details finden Sie im Abschnitt [selectInfo](#selectinfo_2).

## Zusätzliche Objekte

### selectInfo

- `windowId`
  - : `integer`. Die ID des Fensters, das den ausgewählten Tab enthält.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onActiveChanged) API. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium Code.
