---
title: notifications
slug: Mozilla/Add-ons/WebExtensions/API/notifications
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Benachrichtigungen an den Benutzer anzeigen, unter Verwendung des Benachrichtigungsmechanismus des zugrunde liegenden Betriebssystems. Da diese API den Benachrichtigungsmechanismus des Betriebssystems verwendet, können die Details, wie Benachrichtigungen angezeigt und verhalten werden, je nach Betriebssystem und Benutzereinstellungen unterschiedlich sein.

Auf macOS sieht die Benachrichtigung ungefähr so aus:

![Beispiel einer Benachrichtigung auf macOS, unterhalb der Systemuhr, mit einem fett gedruckten Titel "Click notification", gefolgt von normalem Text "You clicked https://developer.mozilla.org/de/docs/MDN". Die Benachrichtigung hat links das Firefox Nightly-Logo und ein Linksymbol rechts.](notification-macos.png)

Unter Windows bleibt die Benachrichtigung im Info-Center, bis der Browser geschlossen wird. Die Benachrichtigung sieht ungefähr so aus:

![Beispiel einer Benachrichtigung auf Windows 10, über der Systemuhr, mit einem fett gedruckten Titel "Click notification", gefolgt von normalem Text "You clicked https://developer.mozilla.org/de/docs/MDN". Die Benachrichtigung hat ein kleines Firefox-Logo in der oberen linken Ecke, gefolgt von "Mozilla Firefox", und ein Linksymbol links vom Hauptbenachrichtigungstext.](notification-windows.png)

Um diese API zu verwenden, benötigen Sie die "notifications"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Typen

- {{WebExtAPIRef("notifications.NotificationOptions")}}
  - : Definiert den Inhalt einer Benachrichtigung.
- {{WebExtAPIRef("notifications.TemplateType")}}
  - : Der Typ der Benachrichtigung. Zum Beispiel wird hier definiert, ob die Benachrichtigung ein Bild enthalten kann.

## Funktionen

- {{WebExtAPIRef("notifications.clear()")}}
  - : Löscht eine spezifische Benachrichtigung, angegeben durch ihre ID.
- {{WebExtAPIRef("notifications.create()")}}
  - : Erstellt und zeigt eine neue Benachrichtigung an.
- {{WebExtAPIRef("notifications.getAll()")}}
  - : Ruft alle Benachrichtigungen ab.
- {{WebExtAPIRef("notifications.update()")}}
  - : Aktualisiert eine Benachrichtigung.

## Ereignisse

- {{WebExtAPIRef("notifications.onButtonClicked")}}
  - : Wird ausgelöst, wenn der Benutzer eine Schaltfläche in der Benachrichtigung anklickt.
- {{WebExtAPIRef("notifications.onClicked")}}
  - : Wird ausgelöst, wenn der Benutzer die Benachrichtigung anklickt, jedoch nicht auf eine Schaltfläche.
- {{WebExtAPIRef("notifications.onClosed")}}
  - : Wird ausgelöst, wenn eine Benachrichtigung geschlossen wird, entweder durch das System oder weil der Benutzer sie verworfen hat.
- {{WebExtAPIRef("notifications.onShown")}}
  - : Wird unmittelbar nach dem Anzeigen einer Benachrichtigung ausgelöst.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications)-API von Chromium.
