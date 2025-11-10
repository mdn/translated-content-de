---
title: notifications.onShown
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onShown
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

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
  - : Stoppt das Zuhören für dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
    - `notificationId`
      - : `string`. ID der Benachrichtigung, die angezeigt wurde.

## Beispiele

Fügen Sie einen Listener zum `notifications.onShown`-Ereignis hinzu und protokollieren Sie dessen Details:

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications)-API von Chromium.
