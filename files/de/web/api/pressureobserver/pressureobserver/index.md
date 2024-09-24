---
title: "PressureObserver: PressureObserver() Konstruktor"
short-title: PressureObserver()
slug: Web/API/PressureObserver/PressureObserver
l10n:
  sourceCommit: 5d670c42df8ede57e3d6341cb15d8251eb188dc4
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

Der **`PressureObserver()`**-Konstruktor erstellt ein neues {{domxref("PressureObserver")}}-Objekt, um Änderungen des Drucks von Systemressourcen wie der CPU zu beobachten.

## Syntax

```js-nolint
new PressureObserver(callback)
```

### Parameter

- `callback`
  - : Ein Callback, das aufgerufen wird, wenn Druckaufzeichnungen beobachtet werden. Wenn das Callback aufgerufen wird, stehen die folgenden Parameter zur Verfügung:
    - `changes`
      - : Ein Array, das alle seit dem letzten Aufruf des Callback oder der letzten Ausführung der Methode {{domxref("PressureObserver.takeRecords", "takeRecords()")}} des Observers aufgezeichneten {{domxref("PressureRecord")}}-Objekte enthält.
    - `observer`
      - : Das {{domxref("PressureObserver","observer")}}-Objekt, das die oben genannten Aufzeichnungen empfängt.

### Rückgabewert

Ein neues {{domxref("PressureObserver")}}-Objekt mit der angegebenen `callback`-Funktion, die aufgerufen wird, wenn {{domxref("PressureObserver.observe()")}} verwendet wurde, um Druckänderungen zu überwachen.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API) durch eine {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) nicht erlaubt ist.

## Beispiele

### Aktuellen Druck protokollieren

Dieses Beispiel erstellt einen {{domxref("PressureObserver")}} und führt eine Aktion aus, wenn sich der Druck ändert. Das Abtastintervall ist auf 1000ms eingestellt, was bedeutet, dass es höchstens einmal pro Sekunde Updates geben wird.

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
