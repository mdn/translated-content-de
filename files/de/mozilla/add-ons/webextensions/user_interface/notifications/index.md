---
title: Benachrichtigungen
slug: Mozilla/Add-ons/WebExtensions/user_interface/Notifications
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Benachrichtigungen ermöglichen es Ihnen, Informationen über Ihre Erweiterung oder deren Inhalt mithilfe des Benachrichtigungsdienstes des zugrunde liegenden Betriebssystems zu kommunizieren.

![Beispiel einer Benachrichtigung auf macOS, die sich unterhalb der Systemuhr befindet, mit einem fett gedruckten Titel "Click notification", gefolgt von normalem Text "You clicked https://developer.mozilla.org/de/docs/MDN". Die Benachrichtigung zeigt das Firefox Nightly-Logo auf der linken Seite und ein Link-Symbol auf der rechten Seite.](notify-shadowed.png)

Benachrichtigungen können einen Aufruf zu einer Aktion für den Benutzer enthalten, und Ihr Add-on kann darauf hören, wenn der Benutzer die Benachrichtigung anklickt oder schließt.

## Benachrichtigungen festlegen

Sie verwalten Benachrichtigungen programmatisch mit der {{WebExtAPIRef("notifications")}} API. Um diese API zu verwenden, müssen Sie die Berechtigung `notifications` in Ihrer `manifest.json` anfordern:

```json
"permissions": ["notifications"]
```

Dann verwenden Sie {{WebExtAPIRef("notifications.create")}}, um Ihre Benachrichtigungen zu erstellen, wie in diesem Beispiel von [notify-link-clicks-i18n:](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n)

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

Dieser Code erstellt eine Benachrichtigung mit einem Icon, Titel und einer Nachricht.

Wenn die Benachrichtigung einen Aufruf zur Aktion enthält, können Sie darauf hören, dass der Benutzer die Benachrichtigung anklickt, um die Funktion zur Behandlung der Aktion aufzurufen:

```js
browser.notifications.onClicked.addListener(handleClick);
```

Wenn Sie Aufrufe zur Aktion über Benachrichtigungen ausgeben, möchten Sie möglicherweise die optionale Benachrichtigungs-`id` definieren, damit Sie herausfinden können, welche Aktion der Benutzer ausgewählt hat.

## Icons

Einzelheiten dazu, wie Sie Icons für die Verwendung mit Ihrer Benachrichtigung erstellen, finden Sie unter [Iconography](https://acorn.firefox.com/latest/styles/iconography/overview-QEDMXQqj) in der Dokumentation des [Acorn Design Systems](https://acorn.firefox.com/latest).

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel, das Benachrichtigungen implementiert.
