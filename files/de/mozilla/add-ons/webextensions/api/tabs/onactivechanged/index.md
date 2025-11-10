---
title: tabs.onActiveChanged
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onActiveChanged
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

> [!WARNING]
> Dieses Ereignis ist veraltet. Verwenden Sie stattdessen {{WebExtAPIRef("tabs.onActivated")}}.

Wird ausgelöst, wenn sich der ausgewählte Tab in einem Fenster ändert. Beachten Sie, dass die URL des Tabs möglicherweise zum Zeitpunkt des Ereignisses noch nicht gesetzt ist. Sie können jedoch auf {{WebExtAPIRef('tabs.onUpdated')}}-Ereignisse hören, um benachrichtigt zu werden, wenn eine URL gesetzt wird.

## Syntax

```js-nolint
browser.tabs.onActiveChanged.addListener(listener)
browser.tabs.onActiveChanged.removeListener(listener)
browser.tabs.onActiveChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, sonst `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
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
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onActiveChanged) API von Chromium. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
