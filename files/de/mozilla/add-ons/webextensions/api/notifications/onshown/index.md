---
title: notifications.onShown
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onShown
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird unmittelbar nach dem Anzeigen einer Benachrichtigung ausgelöst.

## Syntax

```js-nolint
browser.notifications.onShown.addListener(listener)
browser.notifications.onShown.removeListener(listener)
browser.notifications.onShown.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, auf dieses Ereignis zu hören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
    - `notificationId`
      - : `string`. ID der Benachrichtigung, die angezeigt wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Einen Listener zum `notifications.onShown`-Ereignis hinzufügen und die Details protokollieren:

```js
function logShown(itemId) {
  console.log(`shown: ${itemId}`);
  browser.notifications.getAll().then((all) => {
    console.log(all[itemId]);
  });
}

browser.notifications.onShown.addListener(logShown);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API von Chromium.
