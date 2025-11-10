---
title: notifications.onButtonClicked
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onButtonClicked
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn der Benutzer auf eine der Schaltflächen der Benachrichtigung klickt.

## Syntax

```js-nolint
browser.notifications.onButtonClicked.addListener(listener)
browser.notifications.onButtonClicked.removeListener(listener)
browser.notifications.onButtonClicked.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, ansonsten `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:
    - `notificationId`
      - : `string`. ID der Benachrichtigung, deren Schaltfläche angeklickt wurde.
    - `buttonIndex`
      - : `integer`. Der [Null-basierte](https://en.wikipedia.org/wiki/Zero-based_numbering) Index der Schaltfläche, die angeklickt wurde.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API von Chromium.
