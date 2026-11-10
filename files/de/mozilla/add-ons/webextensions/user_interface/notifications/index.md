---
title: Benachrichtigungen
slug: Mozilla/Add-ons/WebExtensions/user_interface/Notifications
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

Mit Benachrichtigungen können Sie Informationen über Ihre Erweiterung oder deren Inhalte über den Benachrichtigungsdienst des zugrunde liegenden Betriebssystems übermitteln.

![Beispiel einer Benachrichtigung unter macOS mit dem fett gedruckten Titel „Click notification“, gefolgt vom Text „You clicked https://developer.mozilla.org/de/docs/MDN.“ Links ist das Logo der Firefox Developer Edition zu sehen, rechts ein Linksymbol.](notify-shadowed.png)

Benachrichtigungen können eine Handlungsaufforderung enthalten. Ihr Add-on kann erkennen, wenn der Benutzer auf die Benachrichtigung klickt oder sie geschlossen wird.

## Benachrichtigungen festlegen

Sie verwalten Benachrichtigungen programmgesteuert mit der API {{WebExtAPIRef("notifications")}}. Um diese API zu verwenden, müssen Sie in Ihrer manifest.json die Berechtigung `notifications` anfordern:

```json
"permissions": ["notifications"]
```

Anschließend erstellen Sie Benachrichtigungen mit {{WebExtAPIRef("notifications.create")}}, wie in diesem Beispiel aus [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n):

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

Dieser Code erstellt eine Benachrichtigung mit einem Symbol, einem Titel und einer Nachricht.

Wenn die Benachrichtigung eine Handlungsaufforderung enthält, können Sie erkennen, wenn der Benutzer darauf klickt, und dann die Funktion aufrufen, die die Aktion verarbeitet:

```js
browser.notifications.onClicked.addListener(handleClick);
```

Wenn Sie Handlungsaufforderungen über Benachrichtigungen ausgeben, sollten Sie außerdem die optionale Benachrichtigungs-`id` festlegen. So können Sie feststellen, welche Handlungsaufforderung der Benutzer ausgewählt hat.

## Symbole

Einzelheiten zum Erstellen von Symbolen für Ihre Benachrichtigungen finden Sie unter [Ikonografie](https://acorn.firefox.com/latest/foundations/styles/iconography-QEDMXQqj) in der Dokumentation zum [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das Repository [webextensions-examples](https://github.com/mdn/webextensions-examples) auf GitHub enthält das Beispiel [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n), das Benachrichtigungen implementiert.
