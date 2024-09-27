---
title: notifications
slug: Mozilla/Add-ons/WebExtensions/API/notifications
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Zeigen Sie Benachrichtigungen für den Benutzer an, indem Sie den Benachrichtigungsmechanismus des zugrunde liegenden Betriebssystems verwenden. Da diese API den Benachrichtigungsmechanismus des Betriebssystems nutzt, können die Details, wie Benachrichtigungen angezeigt werden und sich verhalten, je nach Betriebssystem und den Einstellungen des Benutzers unterschiedlich sein.

Unter macOS sieht die Benachrichtigung etwa so aus:

![Beispielbenachrichtigung unter macOS, unterhalb der Systemuhr angezeigt, mit einem fetten Titel "Click notification", gefolgt von normalem Text "You clicked https://developer.mozilla.org/de/docs/MDN". Die Benachrichtigung hat das Firefox Nightly-Logo auf der linken Seite und ein Link-Symbol auf der rechten.](notification-macos.png)

Unter Windows bleibt die Benachrichtigung im Action Center, bis der Browser geschlossen wird. Die Benachrichtigung sieht etwa so aus:

![Beispielbenachrichtigung unter Windows 10, oberhalb der Systemuhr angezeigt, mit einem fetten Titel "Click notification", gefolgt von normalem Text "You clicked https://developer.mozilla.org/de/docs/MDN". Die Benachrichtigung hat ein kleines Firefox-Logo in der oberen linken Ecke, gefolgt von "Mozilla Firefox", und ein Link-Symbol links vom Hauptbenachrichtigungstext.](notification-windows.png)

Um diese API zu verwenden, müssen Sie die "notifications" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben.

## Typen

- {{WebExtAPIRef("notifications.NotificationOptions")}}
  - : Definiert den Inhalt einer Benachrichtigung.
- {{WebExtAPIRef("notifications.TemplateType")}}
  - : Der Typ der Benachrichtigung. Zum Beispiel legt dies fest, ob die Benachrichtigung ein Bild enthalten kann.

## Funktionen

- {{WebExtAPIRef("notifications.clear()")}}
  - : Löscht eine spezifische Benachrichtigung, gegeben durch ihre ID.
- {{WebExtAPIRef("notifications.create()")}}
  - : Erstellt und zeigt eine neue Benachrichtigung an.
- {{WebExtAPIRef("notifications.getAll()")}}
  - : Ruft alle Benachrichtigungen ab.
- {{WebExtAPIRef("notifications.update()")}}
  - : Aktualisiert eine Benachrichtigung.

## Ereignisse

- {{WebExtAPIRef("notifications.onButtonClicked")}}
  - : Wird ausgelöst, wenn der Benutzer auf eine Schaltfläche in der Benachrichtigung klickt.
- {{WebExtAPIRef("notifications.onClicked")}}
  - : Wird ausgelöst, wenn der Benutzer auf die Benachrichtigung klickt, aber nicht auf eine Schaltfläche.
- {{WebExtAPIRef("notifications.onClosed")}}
  - : Wird ausgelöst, wenn eine Benachrichtigung geschlossen wird, entweder durch das System oder weil der Benutzer sie abgewiesen hat.
- {{WebExtAPIRef("notifications.onShown")}}
  - : Wird unmittelbar nach dem Anzeigen einer Benachrichtigung ausgelöst.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API von Chromium.
