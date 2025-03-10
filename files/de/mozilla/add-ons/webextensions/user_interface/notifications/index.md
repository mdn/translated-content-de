---
title: Benachrichtigungen
slug: Mozilla/Add-ons/WebExtensions/user_interface/Notifications
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{AddonSidebar}}

Benachrichtigungen ermöglichen es Ihnen, Informationen über Ihre Erweiterung oder deren Inhalt mithilfe des Benachrichtigungsdienstes des zugrunde liegenden Betriebssystems zu kommunizieren.

![Beispielbenachrichtigung auf macOS, unterhalb der Systemuhr, mit einem fettgedruckten Titel, der "Click notification" lautet, gefolgt von regulärem Text, der "You clicked https://developer.mozilla.org/de/docs/MDN" liest. Die Benachrichtigung hat das Firefox Nightly-Logo auf der linken Seite und ein Link-Icon auf der rechten Seite.](notify-shadowed.png)

Benachrichtigungen können einen Aufruf zu einer Aktion für den Benutzer enthalten, und Ihr Add-on kann darauf hören, dass der Benutzer die Benachrichtigung anklickt oder die Benachrichtigung schließt.

## Festlegen von Benachrichtigungen

Sie verwalten Benachrichtigungen programmatisch mithilfe der {{WebExtAPIRef("notifications")}} API. Um diese API zu verwenden, müssen Sie die Berechtigung `notifications` in Ihrer manifest.json anfordern:

```json
"permissions": ["notifications"]
```

Anschließend verwenden Sie {{WebExtAPIRef("notifications.create")}}, um Ihre Benachrichtigungen zu erstellen, wie in diesem Beispiel aus [notify-link-clicks-i18n:](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n)

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

Wenn die Benachrichtigung einen Handlungsaufruf enthält, können Sie darauf hören, dass der Benutzer die Benachrichtigung anklickt, um die Funktion zur Verarbeitung der Aktion aufzurufen:

```js
browser.notifications.onClicked.addListener(handleClick);
```

Wenn Sie Handlungsaufrufe durch Benachrichtigungen herausgeben, sollten Sie auch die optionale Benachrichtigungs-`id` definieren, damit Sie herausfinden können, welche Aktion der Benutzer ausgewählt hat.

## Symbole

Für Details, wie Sie Symbole erstellen, die Sie mit Ihrer Benachrichtigung verwenden können, siehe [Iconography](https://acorn.firefox.com/latest/styles/iconography/overview-QEDMXQqj) in der Dokumentation des [Acorn Design Systems](https://acorn.firefox.com/latest).

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Beispiel, das Benachrichtigungen implementiert.
