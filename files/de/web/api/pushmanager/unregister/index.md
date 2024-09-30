---
title: "PushManager: unregister() Methode"
short-title: unregister()
slug: Web/API/PushManager/unregister
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{ApiRef("Push API")}}{{deprecated_header}}{{non-standard_header}}{{AvailableInWorkers}}

Die **`unregister()`**-Methode wurde verwendet, um das System aufzufordern, den angegebenen Endpunkt abzumelden und zu löschen.

> [!NOTE]
> In der aktualisierten API kann ein Abonnement über die [`PushSubscription.unsubscribe()`](/de/docs/Web/API/PushSubscription/unsubscribe)-Methode abgemeldet werden.

## Syntax

```js-nolint
unregister(pushEndpoint)
```

### Parameter

- `pushEndpoint`
  - : Ein `pushEndpoint`, der abgemeldet werden soll.

### Rückgabewert

Ein `DOMRequest`-Objekt, um den Erfolg oder Misserfolg des Methodenaufrufs zu behandeln.

Wenn der Methodenaufruf erfolgreich ist, wird das `result` der Anfrage ein
[PushRegistration](#pushregistration)-Objekt sein, das den Endpunkt repräsentiert, der abgemeldet wurde.

### PushRegistration

Diese Objekte sind anonyme JavaScript-Objekte mit den folgenden Eigenschaften:

- `pushEndpoint`
  - : Ein String, der die URL des abgemeldeten Endpunkts darstellt.
- `version`
  - : `Undefined`, wenn `unregister.onsuccess` aufgerufen wird.

## Beispiele

```js
const req = navigator.push.unregister(pushEndpoint);

req.onsuccess = (e) => {
  const endpoint = req.result;
  console.log(`Unregistered endpoint: ${endpoint}`);
};

req.onerror = (e) => {
  console.error(`Error unregistering the endpoint: ${e.error}`);
};
```

## Spezifikationen

Diese Funktion ist nicht mehr Teil einer Spezifikation. Sie ist nicht mehr darauf ausgelegt, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PushManager`](/de/docs/Web/API/PushManager)
