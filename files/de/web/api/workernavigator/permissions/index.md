---
title: "WorkerNavigator: permissions-Eigenschaft"
short-title: permissions
slug: Web/API/WorkerNavigator/permissions
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Permissions API")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte **`permissions`**-Eigenschaft des [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Interfaces gibt ein [`Permissions`](/de/docs/Web/API/Permissions)-Objekt zurück, das verwendet werden kann, um den Berechtigungsstatus von APIs abzufragen und zu aktualisieren, die von der [Permissions API](/de/docs/Web/API/Permissions_API) abgedeckt werden.

## Wert

Ein [`Permissions`](/de/docs/Web/API/Permissions)-Objekt.

## Beispiele

```js
navigator.permissions.query({ name: "notifications" }).then((result) => {
  if (result.state === "granted") {
    showNotification();
  } else if (result.state === "prompt") {
    requestNotificationPermission();
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Permissions API](/de/docs/Web/API/Permissions_API)
- [Web Worker API](/de/docs/Web/API/Web_Workers_API)
