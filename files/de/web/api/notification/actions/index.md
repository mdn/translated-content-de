---
title: "Benachrichtigung: actions-Eigenschaft"
short-title: actions
slug: Web/API/Notification/actions
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`actions`** des [`Notification`](/de/docs/Web/API/Notification)-Interfaces bietet die Aktionen, die den Benutzern zur Auswahl stehen, um mit der Benachrichtigung zu interagieren.

Die Aktionen werden mithilfe der `actions`-Option des zweiten Arguments der [`showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification)-Methode und des [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktors festgelegt.

> [!NOTE]
> Browser begrenzen typischerweise die maximale Anzahl an Aktionen, die sie für eine bestimmte Benachrichtigung anzeigen. Überprüfen Sie die statische [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static)-Eigenschaft, um das Limit zu bestimmen.

## Wert

Ein schreibgeschütztes Array von Aktionen. Jedes Element im Array ist ein Objekt mit folgenden Mitgliedern:

- `action`
  - : Ein String, der eine Benutzeraktion identifiziert, die auf der Benachrichtigung angezeigt werden soll.
- `title`
  - : Ein String, der den anzuzeigenden Aktionstext enthält.
- `icon`
  - : Ein String, der die URL eines Symbols enthält, das mit der Aktion angezeigt werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static)
