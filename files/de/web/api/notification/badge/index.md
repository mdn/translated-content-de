---
title: "Notification: badge-Eigenschaft"
short-title: badge
slug: Web/API/Notification/badge
l10n:
  sourceCommit: 922949d1d9793e97e4cf9f2513a967e74b0171cf
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`badge`** der Schnittstelle [`Notification`](/de/docs/Web/API/Notification) gibt einen String zurück, der die URL eines kleinen Symbols enthält, das die Webanwendung selbst repräsentiert. Die Plattform verwendet dieses Symbol, wenn nicht genügend Platz vorhanden ist, um die vollständige Benachrichtigung anzuzeigen – beispielsweise in einer Statusleiste. Unter Android sollte das Symbol eine bis zu vierfache Anzeigeauflösung unterstützen (etwa 96 × 96 px). Das Bild wird automatisch auf eine monochrome Silhouette maskiert.

Eine Gegenüberstellung der drei Bildoptionen finden Sie unter [Benachrichtigungen mit verschiedenen Bildern](/de/docs/Web/API/ServiceWorkerRegistration/showNotification#notifications_with_different_images).

## Wert

Ein String, der eine URL enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
