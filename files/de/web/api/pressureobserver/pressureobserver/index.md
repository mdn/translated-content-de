---
title: "PressureObserver: PressureObserver() Konstruktor"
short-title: PressureObserver()
slug: Web/API/PressureObserver/PressureObserver
l10n:
  sourceCommit: 5d670c42df8ede57e3d6341cb15d8251eb188dc4
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

Der **`PressureObserver()`** Konstruktor erzeugt ein neues [`PressureObserver`](/de/docs/Web/API/PressureObserver) Objekt, um Änderungen des Drucks auf Systemressourcen wie die CPU zu überwachen.

## Syntax

```js-nolint
new PressureObserver(callback)
```

### Parameter

- `callback`
  - : Ein Callback, das aufgerufen wird, wenn Druckaufzeichnungen beobachtet werden. Wenn das Callback aufgerufen wird, sind die folgenden Parameter verfügbar:
    - `changes`
      - : Ein Array, das alle [`PressureRecord`](/de/docs/Web/API/PressureRecord) Objekte enthält, die seit dem letzten Aufruf des Callbacks oder dem letzten Aufruf der [`takeRecords()`](/de/docs/Web/API/PressureObserver/takeRecords) Methode des Observers aufgezeichnet wurden.
    - `observer`
      - : Das [`observer`](/de/docs/Web/API/PressureObserver) Objekt, das die oben genannten Aufzeichnungen erhält.

### Rückgabewert

Ein neues [`PressureObserver`](/de/docs/Web/API/PressureObserver) Objekt mit der angegebenen `callback` Funktion, die aufgerufen wird, wenn [`PressureObserver.observe()`](/de/docs/Web/API/PressureObserver/observe) aufgerufen wurde, um Druckänderungen zu überwachen.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API) durch eine {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) nicht erlaubt ist.

## Beispiele

### Aktuellen Druck protokollieren

Dieses Beispiel erstellt einen [`PressureObserver`](/de/docs/Web/API/PressureObserver) und reagiert, wann immer es eine Druckänderung gibt. Das Abtastintervall ist auf 1000ms gesetzt, was bedeutet, dass es höchstens einmal pro Sekunde Updates geben wird.

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
