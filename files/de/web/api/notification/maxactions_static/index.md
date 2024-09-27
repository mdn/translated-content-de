---
title: "Notification: maxActions statische Eigenschaft"
short-title: maxActions
slug: Web/API/Notification/maxActions_static
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{SeeCompatTable}} {{AvailableInWorkers}}

Die schreibgeschützte statische Eigenschaft **`maxActions`** des [`Notification`](/de/docs/Web/API/Notification)-Interfaces gibt die maximale Anzahl von Aktionen zurück, die vom Gerät und dem User Agent unterstützt werden. Dies ist effektiv die maximale Anzahl von Elementen im [`Notification.actions`](/de/docs/Web/API/Notification/actions)-Array, die vom User Agent respektiert werden.

## Wert

Eine ganze Zahl, die die größte Anzahl von Benachrichtigungsaktionen angibt, die dem Benutzer vom User Agent und dem Gerät präsentiert werden können.

## Beispiele

Der folgende Codeabschnitt protokolliert die maximale Anzahl unterstützter Aktionen.

```js
const maxActions = Notification.maxActions;
console.log(
  `This device can display at most ${maxActions} actions on each notification.`,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- [`Notification.actions`](/de/docs/Web/API/Notification/actions)
