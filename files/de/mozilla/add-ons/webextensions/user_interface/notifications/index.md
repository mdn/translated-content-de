---
title: Benachrichtigungen
slug: Mozilla/Add-ons/WebExtensions/user_interface/Notifications
l10n:
  sourceCommit: 5d6f5187d1c657edec7e735d3cc5ad36907e2030
---

Benachrichtigungen ermöglichen es Ihnen, Informationen über Ihre Erweiterung oder deren Inhalt mithilfe des Benachrichtigungsdienstes des zugrunde liegenden Betriebssystems zu kommunizieren.

![Beispielbenachrichtigung auf macOS, unterhalb der Systemuhr, mit einem fett gedruckten Titel "Click notification" und anschließendem normalen Text mit "You clicked https://developer.mozilla.org/de/docs/MDN". Die Benachrichtigung hat das Firefox Nightly-Logo auf der linken Seite und ein Link-Symbol auf der rechten Seite.](notify-shadowed.png)

Benachrichtigungen können einen Handlungsaufruf für den Benutzer beinhalten, und Ihr Add-on kann darauf hören, wenn der Benutzer die Benachrichtigung anklickt oder die Benachrichtigung geschlossen wird.

## Spezifizieren von Benachrichtigungen

Sie verwalten Benachrichtigungen programmatisch unter Verwendung der {{WebExtAPIRef("notifications")}} API. Um diese API zu verwenden, müssen Sie die Berechtigung `notifications` in Ihrer manifest.json anfordern:

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

Dieser Code erstellt eine Benachrichtigung mit einem Symbol, einem Titel und einer Nachricht.

Wenn die Benachrichtigung einen Handlungsaufruf enthält, können Sie darauf hören, dass der Benutzer die Benachrichtigung anklickt, um die Funktion zum Bearbeiten der Aktion aufzurufen:

```js
browser.notifications.onClicked.addListener(handleClick);
```

Wenn Sie Handlungsaufrufe durch Benachrichtigungen ausgeben, sollten Sie auch die optionale Benachrichtigungs-`id` definieren, damit Sie herausfinden können, welchen Handlungsaufruf der Benutzer ausgewählt hat.

## Symbole

Für Details zur Erstellung von Symbolen, die Sie mit Ihrer Benachrichtigung verwenden, siehe [Ikonografie](https://acorn.firefox.com/latest/foundations/styles/iconography-QEDMXQqj) in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel, welches Benachrichtigungen implementiert.
