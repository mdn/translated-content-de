---
title: notifications.onClosed
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onClosed
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Benachrichtigung entweder vom System oder vom Benutzer geschlossen wird.

## Syntax

```js-nolint
browser.notifications.onClosed.addListener(listener)
browser.notifications.onClosed.removeListener(listener)
browser.notifications.onClosed.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Beendet das Zuhören für dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
    - `notificationId`
      - : `string`. ID der Benachrichtigung, die geschlossen wurde.
    - `byUser`
      - : `boolean`. `true`, wenn die Benachrichtigung vom Benutzer geschlossen wurde, oder `false`, wenn sie vom System geschlossen wurde. Dieses Argument wird in Firefox nicht unterstützt.

## Beispiele

In diesem einfachen Beispiel fügen wir einen Listener zum Ereignis `notifications.onClosed` hinzu, um zu überwachen, wann Systembenachrichtigungen geschlossen werden. Wenn dies eintritt, protokollieren wir eine entsprechende Nachricht in der Konsole.

```js
browser.notifications.onClosed.addListener((notificationId) => {
  console.log(`Notification ${notificationId} has closed.`);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API von Chromium.
