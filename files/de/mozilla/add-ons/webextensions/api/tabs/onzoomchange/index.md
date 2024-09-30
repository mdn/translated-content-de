---
title: tabs.onZoomChange
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onZoomChange
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ausgelöst, wenn ein Tab gezoomt wird.

## Syntax

```js-nolint
browser.tabs.onZoomChange.addListener(listener)
browser.tabs.onZoomChange.removeListener(listener)
browser.tabs.onZoomChange.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, dieses Ereignis zu überwachen. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es überwacht wird, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `ZoomChangeInfo`
      - : `object`. Informationen über das Zoom-Ereignis. Weitere Details finden Sie im Abschnitt [ZoomChangeInfo](#zoomchangeinfo_2).

## Zusätzliche Objekte

### ZoomChangeInfo

- `tabId`
  - : `integer`. ID des Tabs, der gezoomt wurde.
- `oldZoomFactor`
  - : `number`. Der vorherige Zoom-Faktor.
- `newZoomFactor`
  - : `number`. Der neue Zoom-Faktor.
- `zoomSettings`
  - : {{WebExtAPIRef('tabs.ZoomSettings')}}. Zoom-Einstellungen für den Tab.

## Beispiele

Überwachen Sie Zoom-Ereignisse und protokollieren Sie die Informationen:

```js
function handleZoomed(zoomChangeInfo) {
  console.log(`Tab: ${zoomChangeInfo.tabId} zoomed`);
  console.log(`Old zoom: ${zoomChangeInfo.oldZoomFactor}`);
  console.log(`New zoom: ${zoomChangeInfo.newZoomFactor}`);
}

browser.tabs.onZoomChange.addListener(handleZoomed);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onZoomChange)-API von Chromium. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

<!--
...
-->
