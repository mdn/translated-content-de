---
title: "PushManager: unregister()-Methode"
short-title: unregister()
slug: Web/API/PushManager/unregister
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{ApiRef("Push API")}}{{deprecated_header}}{{non-standard_header}}{{AvailableInWorkers}}

Die **`unregister()`**-Methode wurde verwendet, um das System aufzufordern, den angegebenen Endpunkt abzumelden und zu löschen.

> [!NOTE]
> In der aktualisierten API kann ein Abonnement über die Methode {{domxref("PushSubscription.unsubscribe()")}} abgemeldet werden.

## Syntax

```js-nolint
unregister(pushEndpoint)
```

### Parameter

- `pushEndpoint`
  - : Ein pushEndpoint, der abgemeldet werden soll.

### Rückgabewert

Ein `DOMRequest`-Objekt zur Handhabung des Erfolgs oder Misserfolgs des Methodenaufrufs.

Wenn der Methodenaufruf erfolgreich ist, wird das `result` des Antrags ein
[PushRegistration](#pushregistration)-Objekt sein, das den abgemeldeten Endpunkt darstellt.

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

Dieses Feature ist nicht mehr Teil einer Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("PushManager")}}
