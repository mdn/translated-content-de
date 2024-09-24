---
title: tabs.onDetached
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onDetached
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Tab von einem Fenster abgetrennt wird, beispielsweise weil es zwischen Fenstern verschoben wird.

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
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, ansonsten `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:

    - `tabId`
      - : `integer`. ID des Tabs, der abgetrennt wurde.
    - `detachInfo`
      - : `object`. ID des vorherigen Fensters und Index des Tabs darin. Siehe den Abschnitt [detachInfo](#detachinfo_2) für weitere Details.

## Zusätzliche Objekte

### detachInfo

- `oldWindowId`
  - : `integer`. ID des vorherigen Fensters.
- `oldPosition`
  - : `integer`. Indexposition, die der Tab im alten Fenster hatte.

## Beispiele

Auf Trennungsereignisse hören und die Informationen protokollieren:

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
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onDetached)-API von Chromium. Diese Dokumentation ist aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code abgeleitet.
