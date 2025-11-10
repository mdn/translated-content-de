---
title: Benachrichtigungen
slug: Mozilla/Add-ons/WebExtensions/API/notifications
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Zeigen Sie Benachrichtigungen dem Benutzer an, indem Sie den Benachrichtigungsmechanismus des zugrunde liegenden Betriebssystems verwenden. Da diese API den Benachrichtigungsmechanismus des Betriebssystems verwendet, können die Details, wie Benachrichtigungen angezeigt und verhalten werden, je nach Betriebssystem und Benutzereinstellungen unterschiedlich sein.

Auf macOS sieht die Benachrichtigung etwa so aus:

![Beispiel einer Benachrichtigung auf macOS, unterhalb der Systemuhr, mit einem fettgedruckten Titel "Click notification", gefolgt von normalem Text "You clicked https://developer.mozilla.org/de/docs/MDN". Die Benachrichtigung hat das Firefox-Nightly-Logo auf der linken Seite und ein Link-Symbol auf der rechten Seite.](notification-macos.png)

Auf Windows bleibt die Benachrichtigung im Action Center bestehen, bis der Browser geschlossen wird. Die Benachrichtigung sieht etwa so aus:

![Beispiel einer Benachrichtigung auf Windows 10, oberhalb der Systemuhr, mit einem fettgedruckten Titel "Click notification", gefolgt von normalem Text "You clicked https://developer.mozilla.org/de/docs/MDN". Die Benachrichtigung hat ein kleines Firefox-Logo in der oberen linken Ecke, gefolgt von "Mozilla Firefox", und ein Link-Symbol links vom primären Benachrichtigungstext.](notification-windows.png)

Um diese API zu nutzen, müssen Sie die Berechtigung "notifications" [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben.

## Typen

- {{WebExtAPIRef("notifications.NotificationOptions")}}
  - : Definiert den Inhalt einer Benachrichtigung.
- {{WebExtAPIRef("notifications.TemplateType")}}
  - : Der Typ der Benachrichtigung. Zum Beispiel wird dadurch festgelegt, ob die Benachrichtigung ein Bild enthalten kann.

## Funktionen

- {{WebExtAPIRef("notifications.clear()")}}
  - : Löscht eine spezifische Benachrichtigung anhand ihrer ID.
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
  - : Wird ausgelöst, wenn eine Benachrichtigung geschlossen wird, entweder durch das System oder weil der Benutzer sie weggeklickt hat.
- {{WebExtAPIRef("notifications.onShown")}}
  - : Wird unmittelbar nach dem Anzeigen einer Benachrichtigung ausgelöst.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications)-API von Chromium.
