---
title: "PressureObserver: PressureObserver()-Konstruktor"
short-title: PressureObserver()
slug: Web/API/PressureObserver/PressureObserver
l10n:
  sourceCommit: 5d670c42df8ede57e3d6341cb15d8251eb188dc4
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

Der **`PressureObserver()`**-Konstruktor erstellt ein neues [`PressureObserver`](/de/docs/Web/API/PressureObserver)-Objekt, um Änderungen des Drucks von Systemressourcen wie der CPU zu überwachen.

## Syntax

```js-nolint
new PressureObserver(callback)
```

### Parameter

- `callback`
  - : Ein Rückruf, der aufgerufen wird, wenn Druckaufzeichnungen beobachtet werden. Wenn der Rückruf aufgerufen wird, stehen die folgenden Parameter zur Verfügung:
    - `changes`
      - : Ein Array, das alle [`PressureRecord`](/de/docs/Web/API/PressureRecord)-Objekte enthält, die seit dem letzten Aufruf des Rückrufs oder seit dem letzten Aufruf der [`takeRecords()`](/de/docs/Web/API/PressureObserver/takeRecords)-Methode des Observers aufgezeichnet wurden.
    - `observer`
      - : Das [`observer`](/de/docs/Web/API/PressureObserver)-Objekt, das die oben genannten Aufzeichnungen erhält.

### Rückgabewert

Ein neues [`PressureObserver`](/de/docs/Web/API/PressureObserver)-Objekt mit der angegebenen `callback`-Funktion, die aufgerufen wird, wenn [`PressureObserver.observe()`](/de/docs/Web/API/PressureObserver/observe) aufgerufen wurde, um Druckänderungen zu überwachen.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API) durch eine {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) nicht erlaubt ist.

## Beispiele

### Aktuellen Druck protokollieren

Dieses Beispiel erstellt einen [`PressureObserver`](/de/docs/Web/API/PressureObserver) und führt Aktionen aus, wann immer es zu einer Druckänderung kommt. Das Probenintervall ist auf 1000ms eingestellt, was bedeutet, dass es höchstens einmal pro Sekunde Aktualisierungen gibt.

```js
function callback(records) {
  const lastRecord = records[records.length - 1];
  console.log(`Current pressure ${lastRecord.state}`);
  if (lastRecord.state === "critical") {
    // disable video feeds
  } else if (lastRecord.state === "serious") {
    // disable video filter effects
  } else {
    // enable all video feeds and filter effects
  }
}

try {
  const observer = new PressureObserver(callback);
  await observer.observe("cpu", {
    sampleInterval: 1000, // 1000ms
  });
} catch (error) {
  // report error setting up the observer
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
