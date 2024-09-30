---
title: "Notification: actions-Eigenschaft"
short-title: actions
slug: Web/API/Notification/actions
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die schreibgeschützte **`actions`**-Eigenschaft des [`Notification`](/de/docs/Web/API/Notification)-Interfaces bietet die Aktionen, die Benutzern zur Auswahl für die Interaktion mit der Benachrichtigung zur Verfügung stehen.

Die Aktionen werden mit der `actions`-Option des zweiten Arguments für die [`showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification)-Methode und den [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktor festgelegt.

> [!NOTE]
> Browser beschränken typischerweise die maximale Anzahl von Aktionen, die sie für eine bestimmte Benachrichtigung anzeigen. Überprüfen Sie die statische [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static)-Eigenschaft, um das Limit zu bestimmen.

## Wert

Ein schreibgeschütztes Array von Aktionen. Jedes Element im Array ist ein Objekt mit den folgenden Mitgliedern:

- `action`
  - : Ein String, der eine Benutzeraktion identifiziert, die auf der Benachrichtigung angezeigt werden soll.
- `title`
  - : Ein String, der den Aktionstext enthält, der dem Benutzer angezeigt werden soll.
- `icon`
  - : Ein String, der die URL eines Symbols enthält, das mit der Aktion angezeigt werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static)
