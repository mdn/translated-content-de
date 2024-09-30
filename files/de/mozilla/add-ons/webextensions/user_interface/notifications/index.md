---
title: Notifications
slug: Mozilla/Add-ons/WebExtensions/user_interface/Notifications
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

Mit Benachrichtigungen können Sie Informationen zu Ihrer Erweiterung oder deren Inhalt mithilfe des Benachrichtigungsdienstes des zugrundeliegenden Betriebssystems kommunizieren.

![Ein Beispiel für eine Benachrichtigung auf macOS, die sich unterhalb der Systemuhr befindet, mit einem fettgedruckten Titel "Click notification" und einem regulären Text "You clicked https://developer.mozilla.org/de/docs/MDN". Die Benachrichtigung zeigt links das Firefox Nightly-Logo und rechts ein Link-Symbol.](notify-shadowed.png)

Benachrichtigungen können eine Aufforderung zum Handeln für den Benutzer enthalten, und Ihr Add-on kann darauf hören, dass der Benutzer die Benachrichtigung anklickt oder die Benachrichtigung schließt.

## Benachrichtigungen spezifizieren

Sie verwalten Benachrichtigungen programmgesteuert mit der {{WebExtAPIRef("notifications")}} API. Um diese API zu verwenden, müssen Sie die Berechtigung `notifications` in Ihrer manifest.json anfordern:

```json
"permissions": ["notifications"]
```

Anschließend verwenden Sie {{WebExtAPIRef("notifications.create")}}, um Ihre Benachrichtigungen zu erstellen, wie in diesem Beispiel von [notify-link-clicks-i18n:](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n)

```js
const title = browser.i18n.getMessage("notificationTitle");
const content = browser.i18n.getMessage("notificationContent", message.url);
browser.notifications.create({
  type: "basic",
  iconUrl: browser.extension.getURL("icons/link-48.png"),
  title,
  message: content,
});
```

Dieser Code erstellt eine Benachrichtigung mit einem Icon, einem Titel und einer Nachricht.

Wenn die Benachrichtigung eine Handlungaufforderung enthält, können Sie darauf hören, dass der Benutzer die Benachrichtigung anklickt, um die Funktion zur Handhabung der Aktion aufzurufen:

```js
browser.notifications.onClicked.addListener(handleClick);
```

Wenn Sie Handlungaufforderungen über Benachrichtigungen ausgeben, sollten Sie auch die optionale Benachrichtigungs-`id` definieren, um festzustellen, welche Handlungaufforderung der Benutzer ausgewählt hat.

## Icons

Für Details zur Erstellung von Icons zur Verwendung mit Ihrer Benachrichtigung schauen Sie in die [Ikonographie](https://acorn.firefox.com/latest/styles/iconography-q7JqGl5H) im [Acorn Design System](https://acorn.firefox.com/latest) nach.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das Beispiel [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n), das Benachrichtigungen implementiert.
