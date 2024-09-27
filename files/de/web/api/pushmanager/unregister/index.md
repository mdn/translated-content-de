---
title: "PushManager: unregister()-Methode"
short-title: unregister()
slug: Web/API/PushManager/unregister
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{ApiRef("Push API")}}{{deprecated_header}}{{non-standard_header}}{{AvailableInWorkers}}

Die **`unregister()`**-Methode wurde verwendet, um das System aufzufordern, den angegebenen Endpunkt zu deregistrieren und zu löschen.

> [!NOTE]
> In der aktualisierten API kann ein Abonnement über die Methode [`PushSubscription.unsubscribe()`](/de/docs/Web/API/PushSubscription/unsubscribe) abgemeldet werden.

## Syntax

```js-nolint
unregister(pushEndpoint)
```

### Parameter

- `pushEndpoint`
  - : Ein zu deregistrierender pushEndpoint.

### Rückgabewert

Ein `DOMRequest`-Objekt zur Verwaltung des Erfolgs oder Misserfolgs des Methodenaufrufs.

Wenn der Methodenaufruf erfolgreich ist, wird das `result` der Anfrage ein
[PushRegistration](#pushregistration)-Objekt darstellen, das den Endpunkt repräsentiert, der deregistriert wurde.

### PushRegistration

Diese Objekte sind anonyme JavaScript-Objekte mit den folgenden Eigenschaften:

- `pushEndpoint`
  - : Ein String, der die URL des deregistrierten Endpunkts darstellt.
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

Dieses Feature ist nicht mehr Teil einer Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PushManager`](/de/docs/Web/API/PushManager)
