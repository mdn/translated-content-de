---
title: notifications.onClosed
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onClosed
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ausgelöst, wenn eine Benachrichtigung entweder vom System oder vom Benutzer geschlossen wird.

## Syntax

```js-nolint
browser.notifications.onClosed.addListener(listener)
browser.notifications.onClosed.removeListener(listener)
browser.notifications.onClosed.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es aktiv ist, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
    - `notificationId`
      - : `string`. ID der geschlossenen Benachrichtigung.
    - `byUser`
      - : `boolean`. `true`, wenn die Benachrichtigung vom Nutzer geschlossen wurde, oder `false`, wenn sie vom System geschlossen wurde. Dieses Argument wird in Firefox nicht unterstützt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

In diesem einfachen Beispiel fügen wir einen Listener zum Ereignis `notifications.onClosed` hinzu, um auf geschlossene Systembenachrichtigungen zu hören. Wenn dies eintritt, protokollieren wir eine entsprechende Nachricht in der Konsole.

```js
browser.notifications.onClosed.addListener((notificationId) => {
  console.log(`Notification ${notificationId} has closed.`);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications)-API von Chromium.
