---
title: notifications
slug: Mozilla/Add-ons/WebExtensions/API/notifications
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

Zeigt Benachrichtigungen mithilfe des Benachrichtigungsmechanismus des zugrunde liegenden Betriebssystems an. Da diese API den Benachrichtigungsmechanismus des Betriebssystems verwendet, können Aussehen und Verhalten der Benachrichtigungen je nach Betriebssystem und Einstellungen der Benutzerin oder des Benutzers variieren.

Unter macOS sieht eine Benachrichtigung etwa so aus:

![Beispiel für eine Benachrichtigung unter macOS mit dem fett gedruckten Titel „Click notification“ und dem darauffolgenden Text „You clicked https://developer.mozilla.org/de/docs/MDN.“. Links ist das Logo der Firefox Developer Edition zu sehen, rechts ein Linksymbol.](notification-macos.png)

Unter Windows sieht eine Benachrichtigung etwa so aus:

![Beispiel für eine Benachrichtigung unter Windows 10 oberhalb der Systemuhr mit dem fett gedruckten Titel „Click notification“ und dem darauffolgenden Text „You clicked https://developer.mozilla.org/de/docs/MDN“. Oben links ist ein kleines Firefox-Logo zu sehen, gefolgt von „Mozilla Firefox“. Links neben dem Haupttext der Benachrichtigung befindet sich ein Linksymbol.](notification-windows.png)

Die Benachrichtigung bleibt im Windows-Info-Center erhalten, bis der Browser geschlossen wird.

Um diese API zu verwenden, benötigen Sie die [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) „notifications“.

## Typen

- {{WebExtAPIRef("notifications.NotificationOptions")}}
  - : Definiert den Inhalt einer Benachrichtigung.
- {{WebExtAPIRef("notifications.TemplateType")}}
  - : Der Typ der Benachrichtigung. Er legt beispielsweise fest, ob die Benachrichtigung ein Bild enthalten kann.

## Funktionen

- {{WebExtAPIRef("notifications.clear()")}}
  - : Entfernt eine bestimmte Benachrichtigung anhand ihrer ID.
- {{WebExtAPIRef("notifications.create()")}}
  - : Erstellt eine neue Benachrichtigung und zeigt sie an.
- {{WebExtAPIRef("notifications.getAll()")}}
  - : Ruft alle Benachrichtigungen ab.
- {{WebExtAPIRef("notifications.update()")}}
  - : Aktualisiert eine Benachrichtigung.

## Ereignisse

- {{WebExtAPIRef("notifications.onButtonClicked")}}
  - : Wird ausgelöst, wenn die Benutzerin oder der Benutzer auf eine Schaltfläche in der Benachrichtigung klickt.
- {{WebExtAPIRef("notifications.onClicked")}}
  - : Wird ausgelöst, wenn die Benutzerin oder der Benutzer auf die Benachrichtigung klickt, aber nicht auf eine Schaltfläche.
- {{WebExtAPIRef("notifications.onClosed")}}
  - : Wird ausgelöst, wenn eine Benachrichtigung geschlossen wird – entweder durch das System oder weil die Benutzerin oder der Benutzer sie verwirft.
- {{WebExtAPIRef("notifications.onShown")}}
  - : Wird unmittelbar nach dem Anzeigen einer Benachrichtigung ausgelöst.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der API [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) von Chromium.
