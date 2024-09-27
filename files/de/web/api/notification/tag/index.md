---
title: "Notification: tag-Eigenschaft"
short-title: tag
slug: Web/API/Notification/tag
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

Die schreibgeschützte **`tag`**-Eigenschaft der [`Notification`](/de/docs/Web/API/Notification)-Schnittstelle stellt ein identifizierendes Tag für die Benachrichtigung dar, wie im `tag`-Parameter des [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktors angegeben.

Die Idee von Benachrichtigungstags ist, dass mehr als eine Benachrichtigung dasselbe Tag teilen kann, wodurch sie miteinander verknüpft werden. Eine Benachrichtigung kann dann programmatisch durch eine andere ersetzt werden, um zu verhindern, dass der Bildschirm der Benutzer mit einer großen Anzahl ähnlicher Benachrichtigungen überflutet wird.

## Wert

Ein String.

## Beispiele

Unser Artikel [Using the Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API#replacing_existing_notifications) enthält ein gutes Beispiel für die Verwendung von Tags.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
