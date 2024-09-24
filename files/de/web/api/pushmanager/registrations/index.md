---
title: "PushManager: registrations()-Methode"
short-title: registrations()
slug: Web/API/PushManager/registrations
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{ApiRef("Push API")}}{{deprecated_header}}{{non-standard_header}}{{AvailableInWorkers}}

Die **`registrations`**-Methode wird verwendet, um das System nach vorhandenen Push-Endpunkt-Registrierungen zu fragen.

> [!NOTE]
> Diese Methode wurde durch die Methode {{domxref("PushManager.getSubscription()")}} ersetzt.

## Syntax

```js-nolint
registrations()
```

### Parameter

Keine.

### Rückgabewert

Ein `DOMRequest`-Objekt, um den Erfolg oder das Scheitern des Methodenaufrufs zu bearbeiten.

Wenn der Methodenaufruf erfolgreich ist, wird das `result` der Anfrage ein Array von [PushRegistration](#pushregistration)-Objekten sein.

### PushRegistration

Diese Objekte sind anonyme JavaScript-Objekte mit den folgenden Eigenschaften:

- `pushEndpoint`
  - : Ein String, der die URL des Endpunkts darstellt.
- `version`
  - : Die aktuelle Version, die der Push-Endpunkt hat.

## Beispiele

```js
const req = navigator.push.registrations();

req.onsuccess = (e) => {
  if (req.result.length > 0) {
    req.result.forEach((result) => {
      console.log(
        `Bestehende Registrierung ${result.pushEndpoint} ${result.version}`,
      );
    });
    // Vorhandene Endpunkte wiederverwenden.
  } else {
    // Für einen neuen Endpunkt registrieren.
    const register = navigator.push.register();
    register.onsuccess = (e) => {
      console.log(`Neuen Endpunkt registriert: ${register.result}`);
    };
  }
};
```

## Spezifikationen

Diese Funktion ist nicht mehr Teil einer Spezifikation. Sie ist nicht länger auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("PushManager")}}
