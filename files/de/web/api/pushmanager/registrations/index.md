---
title: "PushManager: registrations() Methode"
short-title: registrations()
slug: Web/API/PushManager/registrations
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ApiRef("Push API")}}{{non-standard_header}}{{AvailableInWorkers}}

Die **`registrations`**-Methode wird verwendet, um das System nach bestehenden Push-Endpunktregistrierungen zu fragen.

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

Wenn der Methodenaufruf erfolgreich ist, wird das `result` der Anfrage ein Array von
[PushRegistration](#pushregistration)-Objekten sein.

### PushRegistration

Diese Objekte sind anonyme JavaScript-Objekte mit den folgenden Eigenschaften:

- `pushEndpoint`
  - : Ein String, der die URL des Endpunkts darstellt.
- `version`
  - : Die aktuelle Version, in der sich der Push-Endpunkt befindet.

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

Dieses Feature ist nicht mehr Teil einer spezifischen Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PushManager`](/de/docs/Web/API/PushManager)
