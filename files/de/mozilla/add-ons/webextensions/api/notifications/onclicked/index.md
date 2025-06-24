---
title: notifications.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onClicked
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ausgelöst, wenn der Benutzer auf eine Benachrichtigung klickt, jedoch nicht auf eine der Schaltflächen der Benachrichtigung (siehe dazu {{WebExtAPIRef("notifications.onButtonClicked")}}).

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
  - : Stoppt das Lauschen auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es aktiv ist, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `notificationId`
      - : `string`. ID der Benachrichtigung, auf die der Benutzer geklickt hat.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

In diesem einfachen Beispiel fügen wir einen Listener zum Ereignis `notifications.onClicked` hinzu, um auf Klicks auf Systembenachrichtigungen zu lauschen. Sobald dies eintritt, protokollieren wir eine entsprechende Nachricht in der Konsole.

```js
browser.notifications.onClicked.addListener((notificationId) => {
  console.log(`Notification ${notificationId} was clicked by the user`);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API.
