---
title: notifications.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onClicked
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ausgelöst, wenn der Benutzer auf eine Benachrichtigung klickt, jedoch nicht auf eine der Schaltflächen der Benachrichtigung (siehe hierfür {{WebExtAPIRef("notifications.onButtonClicked")}}).

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
  - : Beendet das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, sonst `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `notificationId`
      - : `string`. ID der Benachrichtigung, auf die der Benutzer geklickt hat.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

In diesem einfachen Beispiel fügen wir einen Listener zum `notifications.onClicked`-Ereignis hinzu, um auf Klicks bei Systembenachrichtigungen zu hören. Wenn dies geschieht, protokollieren wir eine entsprechende Nachricht in der Konsole.

```js
browser.notifications.onClicked.addListener((notificationId) => {
  console.log(`Notification ${notificationId} was clicked by the user`);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API von Chromium.
