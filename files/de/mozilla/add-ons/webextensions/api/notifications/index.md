---
title: benachrichtigungen
slug: Mozilla/Add-ons/WebExtensions/API/notifications
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Zeigt Benachrichtigungen für den Benutzer an, wobei der Benachrichtigungsmechanismus des zugrundeliegenden Betriebssystems verwendet wird. Da diese API den Benachrichtigungsmechanismus des Betriebssystems verwendet, können sich die Details, wie Benachrichtigungen angezeigt und verhalten werden, je nach Betriebssystem und den Einstellungen des Benutzers unterscheiden.

Unter macOS sieht die Benachrichtigung in etwa so aus:

![Beispielbenachrichtigung auf macOS, unterhalb der Systemuhr positioniert, mit einem fettgedruckten Titel "Click notification" gefolgt von normalem Text "You clicked https://developer.mozilla.org/de/docs/MDN". Die Benachrichtigung hat das Logo von Firefox Nightly auf der linken Seite und ein Link-Symbol auf der rechten Seite.](notification-macos.png)

Unter Windows bleibt die Benachrichtigung im Action Center bestehen, bis der Browser geschlossen wird. Die Benachrichtigung sieht in etwa so aus:

![Beispielbenachrichtigung auf Windows 10, oberhalb der Systemuhr positioniert, mit einem fettgedruckten Titel "Click notification" gefolgt von normalem Text "You clicked https://developer.mozilla.org/de/docs/MDN". Die Benachrichtigung hat ein kleines Firefox-Logo in der oberen linken Ecke, gefolgt von "Mozilla Firefox", und ein Link-Symbol links vom Hauptbenachrichtigungstext.](notification-windows.png)

Um diese API zu verwenden, müssen Sie die "notifications" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) besitzen.

## Typen

- {{WebExtAPIRef("notifications.NotificationOptions")}}
  - : Definiert den Inhalt einer Benachrichtigung.
- {{WebExtAPIRef("notifications.TemplateType")}}
  - : Der Typ der Benachrichtigung. Zum Beispiel wird dadurch definiert, ob die Benachrichtigung ein Bild enthalten kann.

## Funktionen

- {{WebExtAPIRef("notifications.clear()")}}
  - : Löscht eine spezifische Benachrichtigung, basierend auf ihrer ID.
- {{WebExtAPIRef("notifications.create()")}}
  - : Erstellt und zeigt eine neue Benachrichtigung an.
- {{WebExtAPIRef("notifications.getAll()")}}
  - : Ruft alle Benachrichtigungen ab.
- {{WebExtAPIRef("notifications.update()")}}
  - : Aktualisiert eine Benachrichtigung.

## Ereignisse

- {{WebExtAPIRef("notifications.onButtonClicked")}}
  - : Wird ausgelöst, wenn der Benutzer einen Button in der Benachrichtigung anklickt.
- {{WebExtAPIRef("notifications.onClicked")}}
  - : Wird ausgelöst, wenn der Benutzer die Benachrichtigung anklickt, aber nicht auf einen Button.
- {{WebExtAPIRef("notifications.onClosed")}}
  - : Wird ausgelöst, wenn eine Benachrichtigung geschlossen wurde, entweder durch das System oder weil der Benutzer sie verworfen hat.
- {{WebExtAPIRef("notifications.onShown")}}
  - : Wird unmittelbar nach dem Anzeigen einer Benachrichtigung ausgelöst.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API.
