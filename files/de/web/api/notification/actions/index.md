---
title: "Benachrichtigung: Eigenschaft actions"
short-title: actions
slug: Web/API/Notification/actions
l10n:
  sourceCommit: 29e6ba9d844b835a1f00346ef1a78fa5d9e7c1a8
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`actions`** schreibgeschützte Eigenschaft des [`Notification`](/de/docs/Web/API/Notification)-Interfaces bietet die Aktionen an, die Benutzern zur Auswahl stehen, um mit der Benachrichtigung zu interagieren.

Die Aktionen werden mit der `actions`-Option des zweiten Arguments für die [`showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification)-Methode und den [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktor festgelegt.

> [!NOTE]
> Browser begrenzen typischerweise die maximale Anzahl von Aktionen, die sie für eine bestimmte Benachrichtigung anzeigen. Überprüfen Sie die statische Eigenschaft [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static), um das Limit zu bestimmen.

## Wert

Ein schreibgeschütztes Array von Aktionen. Jedes Element im Array ist ein Objekt mit den folgenden Mitgliedern:

- `action`
  - : Ein Zeichenfolgenwert, der eine Benutzeraktion identifiziert, die auf der Benachrichtigung angezeigt werden soll.
- `title`
  - : Eine Zeichenfolge, die den Aktionstext enthält, der dem Benutzer angezeigt werden soll.
- `icon`
  - : Eine Zeichenfolge, die die URL eines Symbols enthält, das zusammen mit der Aktion angezeigt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static)
