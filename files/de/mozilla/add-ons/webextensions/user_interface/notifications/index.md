---
title: Benachrichtigungen
slug: Mozilla/Add-ons/WebExtensions/user_interface/Notifications
l10n:
  sourceCommit: 38199423810927262c9cb4dec7ea7de4cb0c5e0f
---

Benachrichtigungen ermöglichen es Ihnen, Informationen über Ihre Erweiterung oder deren Inhalt mithilfe des Benachrichtigungsdienstes des zugrunde liegenden Betriebssystems zu kommunizieren.

![Beispielbenachrichtigung auf macOS, unterhalb der Systemuhr, mit einem fettgedruckten Titel "Click notification" und anschließendem regulären Text "You clicked https://developer.mozilla.org/de/docs/MDN". Die Benachrichtigung hat links das Firefox Nightly-Logo und rechts ein Link-Symbol.](notify-shadowed.png)

Benachrichtigungen können einen Handlungsaufruf für den Benutzer enthalten, und Ihr Add-on kann darauf hören, ob der Benutzer die Benachrichtigung anklickt oder sie schließt.

## Benachrichtigungen spezifizieren

Sie verwalten Benachrichtigungen programmgesteuert mit der {{WebExtAPIRef("notifications")}} API. Um diese API zu nutzen, müssen Sie die Berechtigung `notifications` in Ihrem manifest.json anfordern:

```json
"permissions": ["notifications"]
```

Anschließend verwenden Sie {{WebExtAPIRef("notifications.create")}}, um Ihre Benachrichtigungen zu erstellen, wie in diesem Beispiel von [notify-link-clicks-i18n:](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n)

```js
const title = browser.i18n.getMessage("notificationTitle");
const content = browser.i18n.getMessage("notificationContent", message.url);
browser.notifications.create({
  type: "basic",
  iconUrl: browser.runtime.getURL("icons/link-48.png"),
  title,
  message: content,
});
```

Dieser Code erstellt eine Benachrichtigung mit einem Icon, einem Titel und einer Nachricht.

Wenn die Benachrichtigung einen Handlungsaufruf enthält, können Sie darauf hören, dass der Benutzer die Benachrichtigung anklickt, um die Funktion zum Ausführen der Aktion aufzurufen:

```js
browser.notifications.onClicked.addListener(handleClick);
```

Wenn Sie über Benachrichtigungen zu Handlungsaufrufen aufrufen, sollten Sie auch die optionale Benachrichtigungs-`id` definieren, um herauszufinden, welchen Handlungsaufruf der Benutzer ausgewählt hat.

## Icons

Für Details, wie Sie Icons erstellen, die Sie mit Ihrer Benachrichtigung verwenden, siehe [Iconography](https://acorn.firefox.com/latest/foundations/styles/iconography-QEDMXQqj) in der Dokumentation des [Acorn Design Systems](https://acorn.firefox.com/latest).

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel, das Benachrichtigungen implementiert.
