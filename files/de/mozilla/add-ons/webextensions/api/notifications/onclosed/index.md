---
title: notifications.onClosed
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onClosed
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Benachrichtigung entweder durch das System oder durch den Benutzer geschlossen wird.

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
  - : Stoppt das Zuhören für dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `notificationId`
      - : `string`. ID der Benachrichtigung, die geschlossen wurde.
    - `byUser`
      - : `boolean`. `true`, wenn die Benachrichtigung durch den Benutzer geschlossen wurde, oder `false`, wenn sie durch das System geschlossen wurde. Dieses Argument wird in Firefox nicht unterstützt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

In diesem einfachen Beispiel fügen wir einen Listener für das {{WebExtAPIRef("notifications.onClosed")}}-Ereignis hinzu, um auf geschlossene Systembenachrichtigungen zu lauschen. Wenn dies geschieht, protokollieren wir eine entsprechende Nachricht in der Konsole.

```js
browser.notifications.onClosed.addListener((notificationId) => {
  console.log(`Notification ${notificationId} has closed.`);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications)-API von Chromium.
