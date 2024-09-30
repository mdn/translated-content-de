---
title: tabs.onMoved
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onMoved
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Tab innerhalb eines Fensters verschoben wird.

Es wird nur ein Verschiebeereignis ausgelöst, das den vom Benutzer direkt verschobenen Tab darstellt. Verschiebeereignisse werden nicht für andere Tabs ausgelöst, die als Reaktion verschoben werden müssen. Dieses Ereignis wird nicht ausgelöst, wenn ein Tab zwischen Fenstern verschoben wird. Siehe dazu {{WebExtAPIRef('tabs.onDetached')}}.

## Syntax

```js-nolint
browser.tabs.onMoved.addListener(listener)
browser.tabs.onMoved.removeListener(listener)
browser.tabs.onMoved.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `tabId`
      - : `integer`. ID des Tabs, den der Benutzer verschoben hat.
    - `moveInfo`
      - : `object`. Informationen über die Verschiebung. Weitere Details finden Sie im Abschnitt [moveInfo](#moveinfo_2).

## Zusätzliche Objekte

### moveInfo

- `windowId`
  - : `integer`. ID des Fensters dieses Tabs.
- `fromIndex`
  - : `integer`. Ursprünglicher Index dieses Tabs im Fenster.
- `toIndex`
  - : `integer`. Endindex dieses Tabs im Fenster.

## Beispiele

Lauschen auf und protokollieren von Verschiebeereignissen:

```js
function handleMoved(tabId, moveInfo) {
  console.log(
    `Tab ${tabId} moved from ${moveInfo.fromIndex} to ${moveInfo.toIndex}`,
  );
}

browser.tabs.onMoved.addListener(handleMoved);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onMoved) API von Chromium. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
