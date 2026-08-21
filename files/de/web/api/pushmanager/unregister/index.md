---
title: "PushManager: unregister() Methode"
short-title: unregister()
slug: Web/API/PushManager/unregister
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ApiRef("Push API")}}{{non-standard_header}}{{AvailableInWorkers}}

Die **`unregister()`**-Methode wurde verwendet, um das System zu bitten, den angegebenen Endpunkt abzumelden und zu löschen.

> [!NOTE]
> In der aktualisierten API kann eine Registrierung über die [`PushSubscription.unsubscribe()`](/de/docs/Web/API/PushSubscription/unsubscribe)-Methode abgemeldet werden.

## Syntax

```js-nolint
unregister(pushEndpoint)
```

### Parameter

- `pushEndpoint`
  - : Ein zu abmeldender `pushEndpoint`.

### Rückgabewert

Ein `DOMRequest`-Objekt zur Behandlung des Erfolgs oder Fehlers des Methodenaufrufs.

Wenn der Methodenaufruf erfolgreich ist, wird das `result` der Anfrage ein
[PushRegistration](#pushregistration)-Objekt sein, das den abgemeldeten Endpunkt repräsentiert.

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

- [`PushManager`](/de/docs/Web/API/PushManager)
