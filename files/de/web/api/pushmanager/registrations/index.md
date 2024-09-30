---
title: "PushManager: registrations()-Methode"
short-title: registrations()
slug: Web/API/PushManager/registrations
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{ApiRef("Push API")}}{{deprecated_header}}{{non-standard_header}}{{AvailableInWorkers}}

Die **`registrations`**-Methode wird verwendet, um das System nach bestehenden Push-Endpoint-Registrierungen zu fragen.

> [!NOTE]
> Diese Methode wurde durch die [`PushManager.getSubscription()`](/de/docs/Web/API/PushManager/getSubscription)-Methode ersetzt.

## Syntax

```js-nolint
registrations()
```

### Parameter

Keine.

### Rückgabewert

Ein `DOMRequest`-Objekt, um den Erfolg oder Misserfolg des Methodenaufrufs zu behandeln.

Wenn der Methodenaufruf erfolgreich ist, wird das `result` der Anfrage ein Array von [PushRegistration](#pushregistration)-Objekten sein.

### PushRegistration

Diese Objekte sind anonyme JavaScript-Objekte mit den folgenden Eigenschaften:

- `pushEndpoint`
  - : Ein String, der die URL des Endpunkts darstellt.
- `version`
  - : Die aktuelle Version, die der Push-Endpoint hat.

## Beispiele

```js
const req = navigator.push.registrations();

req.onsuccess = (e) => {
  if (req.result.length > 0) {
    req.result.forEach((result) => {
      console.log(
        `Existing registration ${result.pushEndpoint} ${result.version}`,
      );
    });
    // Reuse existing endpoints.
  } else {
    // Register for a new endpoint.
    const register = navigator.push.register();
    register.onsuccess = (e) => {
      console.log(`Registered new endpoint: ${register.result}`);
    };
  }
};
```

## Spezifikationen

Diese Funktion ist nicht mehr Teil einer Spezifikation. Sie wird nicht länger zu einem Standard weiterentwickelt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PushManager`](/de/docs/Web/API/PushManager)
