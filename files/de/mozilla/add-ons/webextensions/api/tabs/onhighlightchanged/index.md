---
title: tabs.onHighlightChanged
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onHighlightChanged
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

> [!WARNING]
> Dieses Ereignis ist veraltet. Verwenden Sie stattdessen {{WebExtAPIRef("tabs.onHighlighted")}}.

Wird ausgelöst, wenn sich die hervorgehobenen oder ausgewählten Tabs in einem Fenster ändern.

## Syntax

```js-nolint
browser.tabs.onHighlightChanged.addListener(listener)
browser.tabs.onHighlightChanged.removeListener(listener)
browser.tabs.onHighlightChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüfen Sie, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zugehört wird, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
    - `selectInfo`
      - : `object`. Siehe den Abschnitt [selectInfo](#selectinfo_2) für weitere Details.

## Zusätzliche Objekte

### selectInfo

- `windowId`
  - : `integer`. Das Fenster, dessen Tabs sich geändert haben.
- `tabIds`
  - : `array` von `integer`. Alle hervorgehobenen Tabs im Fenster.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onHighlightChanged) API von Chromium. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
