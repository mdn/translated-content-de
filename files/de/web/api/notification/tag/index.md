---
title: "Benachrichtigung: tag Eigenschaft"
short-title: tag
slug: Web/API/Notification/tag
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`tag`**-Eigenschaft des
[`Notification`](/de/docs/Web/API/Notification)-Interfaces ist eine schreibgeschützte Eigenschaft, die ein Identifikations-Tag für die Benachrichtigung kennzeichnet, wie im `tag`-Parameter des
[`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktors angegeben.

Die Idee von Benachrichtigungstags ist, dass mehrere Benachrichtigungen denselben Tag teilen können, um sie miteinander zu verknüpfen. Eine Benachrichtigung kann dann programmatisch durch eine andere ersetzt werden, um zu verhindern, dass der Bildschirm des Benutzers mit einer großen Anzahl ähnlicher Benachrichtigungen überfüllt wird.

## Wert

Ein String.

## Beispiele

Unser Artikel [Verwenden der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API#replacing_existing_notifications) enthält ein gutes Beispiel für die Verwendung von Tags.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
