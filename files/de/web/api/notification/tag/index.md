---
title: "Notification: tag-Eigenschaft"
short-title: tag
slug: Web/API/Notification/tag
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`tag`** schreibgeschützte Eigenschaft des
{{domxref("Notification")}}-Interfaces kennzeichnet ein identifizierendes Tag für die Benachrichtigung,
wie im `tag`-Option des
{{domxref("Notification.Notification","Notification()")}}-Konstruktors angegeben.

Die Idee von Benachrichtigungstags ist, dass mehr als eine Benachrichtigung das gleiche
Tag teilen kann, wodurch sie miteinander verbunden werden. Eine Benachrichtigung kann dann programmgesteuert durch eine andere ersetzt werden, um zu vermeiden, dass der Bildschirm des Benutzers mit einer großen Anzahl ähnlicher Benachrichtigungen überfüllt wird.

## Wert

Ein String.

## Beispiele

Unser Artikel [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API#replacing_existing_notifications) enthält ein gutes Beispiel für die Verwendung von Tags.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
