---
title: notifications.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onClicked
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn der Benutzer auf eine Benachrichtigung klickt, jedoch nicht auf eine der Schaltflächen der Benachrichtigung (siehe dazu {{WebExtAPIRef("notifications.onButtonClicked")}}).

## Syntax

```js-nolint
browser.notifications.onClicked.addListener(listener)
browser.notifications.onClicked.removeListener(listener)
browser.notifications.onClicked.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Zuhören für dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `notificationId`
      - : `string`. ID der Benachrichtigung, auf die der Benutzer geklickt hat.

## Beispiele

In diesem einfachen Beispiel fügen wir einen Listener zum `notifications.onClicked`-Ereignis hinzu, um darauf zu hören, dass auf Systembenachrichtigungen geklickt wird. Wenn dies eintritt, protokollieren wir eine entsprechende Nachricht in der Konsole.

```js
browser.notifications.onClicked.addListener((notificationId) => {
  console.log(`Notification ${notificationId} was clicked by the user`);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API von Chromium.
