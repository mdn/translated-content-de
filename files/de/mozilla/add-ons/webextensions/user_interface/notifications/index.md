---
title: Benachrichtigungen
slug: Mozilla/Add-ons/WebExtensions/user_interface/Notifications
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

Benachrichtigungen ermöglichen es Ihnen, Informationen über Ihre Erweiterung oder deren Inhalte mithilfe des Benachrichtigungsdienstes des zugrunde liegenden Betriebssystems zu kommunizieren.

![Beispiel einer Benachrichtigung auf macOS, unterhalb der Systemuhr mit dem fettgedruckten Titel "Click notification" und normalem Text "You clicked https://developer.mozilla.org/de/docs/MDN". Die Benachrichtigung zeigt links das Firefox Nightly Logo und rechts ein Link-Symbol.](notify-shadowed.png)

Benachrichtigungen können eine Handlungsaufforderung für den Benutzer beinhalten, und Ihr Add-on kann darauf hören, ob der Benutzer die Benachrichtigung anklickt oder sie schließt.

## Festlegung von Benachrichtigungen

Sie verwalten Benachrichtigungen programmgesteuert über die {{WebExtAPIRef("notifications")}} API. Um diese API nutzen zu können, müssen Sie die Berechtigung `notifications` in Ihrer manifest.json anfordern:

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

Dieser Code erstellt eine Benachrichtigung mit einem Symbol, einem Titel und einer Nachricht.

Wenn die Benachrichtigung eine Handlungsaufforderung beinhaltet, können Sie darauf hören, ob der Benutzer die Benachrichtigung anklickt, um die Funktion zur Handhabung der Aktion aufzurufen:

```js
browser.notifications.onClicked.addListener(handleClick);
```

Wenn Sie Handlungsaufforderungen über Benachrichtigungen ausgeben, sollten Sie auch die optionale Benachrichtigungs-`id` definieren, um herauszufinden, welche Handlungsaufforderung der Benutzer ausgewählt hat.

## Symbole

Für Details, wie Sie Symbole für Ihre Benachrichtigung erstellen können, siehe [Iconography](https://acorn.firefox.com/latest/styles/iconography-q7JqGl5H) in der Dokumentation des [Acorn Design Systems](https://acorn.firefox.com/latest).

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das Beispiel [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n), welches Benachrichtigungen implementiert.
