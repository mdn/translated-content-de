---
title: Benachrichtigungen
slug: Mozilla/Add-ons/WebExtensions/user_interface/Notifications
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

Benachrichtigungen ermöglichen es Ihnen, Informationen über Ihre Erweiterung oder deren Inhalt mithilfe des Benachrichtigungsdienstes des zugrunde liegenden Betriebssystems zu kommunizieren.

![Beispiel einer Benachrichtigung auf macOS, die sich unterhalb der Systemuhr befindet, mit einem fett gedruckten Titel "Click notification" gefolgt von normalem Text "You clicked https://developer.mozilla.org/de/docs/MDN". Die Benachrichtigung hat das Firefox Nightly-Logo auf der linken Seite und ein Link-Symbol auf der rechten Seite.](notify-shadowed.png)

Benachrichtigungen können einen Handlungsaufruf für den Benutzer enthalten, und Ihr Add-on kann darauf lauschen, ob der Benutzer auf die Benachrichtigung klickt oder diese schließt.

## Benachrichtigungen festlegen

Sie verwalten Benachrichtigungen programmgesteuert, indem Sie die {{WebExtAPIRef("notifications")}} API verwenden. Um diese API zu nutzen, müssen Sie die Berechtigung `notifications` in Ihrer manifest.json anfordern:

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

Wenn die Benachrichtigung einen Handlungsaufruf enthält, können Sie darauf lauschen, dass der Benutzer auf die Benachrichtigung klickt, um die Funktion aufzurufen, die die Aktion behandelt:

```js
browser.notifications.onClicked.addListener(handleClick);
```

Wenn Sie Handlungsaufrufe über Benachrichtigungen ausgeben, möchten Sie auch die optionale Benachrichtigung `id` definieren, damit Sie herausfinden können, welche Handlungsaufforderung der Benutzer ausgewählt hat.

## Symbole

Für Details, wie Sie Symbole erstellen, die Sie mit Ihrer Benachrichtigung verwenden können, siehe [Ikonographie](https://acorn.firefox.com/latest/styles/iconography-q7JqGl5H) in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel, das Benachrichtigungen implementiert.
