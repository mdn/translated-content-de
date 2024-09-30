---
title: tabs.onHighlightChanged
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onHighlightChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

> [!WARNING]
> Dieses Ereignis ist veraltet. Benutzen Sie stattdessen {{WebExtAPIRef("tabs.onHighlighted")}}.

Wird ausgelöst, wenn sich die hervorgehobenen oder ausgewählten Tabs in einem Fenster ändern.

## Syntax

```js-nolint
browser.tabs.onHighlightChanged.addListener(listener)
browser.tabs.onHighlightChanged.removeListener(listener)
browser.tabs.onHighlightChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener für dieses Ereignis hinzu.
- `removeListener(listener)`
  - : Beendet das Zuhören für dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, ansonsten `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Die Funktion erhält folgendes Argument:

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
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onHighlightChanged) API. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
