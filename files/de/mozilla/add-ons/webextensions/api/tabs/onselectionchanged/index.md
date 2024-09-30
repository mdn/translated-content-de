---
title: tabs.onSelectionChanged
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onSelectionChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

> [!WARNING]
> Dieses Ereignis ist veraltet. Verwenden Sie stattdessen {{WebExtAPIRef("tabs.onActivated")}}.

Wird ausgelöst, wenn sich der ausgewählte Tab in einem Fenster ändert.

## Syntax

```js-nolint
browser.tabs.onSelectionChanged.addListener(listener)
browser.tabs.onSelectionChanged.removeListener(listener)
browser.tabs.onSelectionChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüfen Sie, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `tabId`
      - : `integer`. Die ID des Tabs, der aktiv geworden ist.
    - `selectInfo`
      - : `object`. Siehe den Abschnitt [selectInfo](#selectinfo_2) für weitere Details.

## Zusätzliche Objekte

### selectInfo

- `windowId`
  - : `integer`. Die ID des Fensters, in dem sich der ausgewählte Tab geändert hat.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onSelectionChanged) API von Chromium. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
