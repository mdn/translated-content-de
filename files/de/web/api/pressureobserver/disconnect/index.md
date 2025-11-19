---
title: "PressureObserver: disconnect()-Methode"
short-title: disconnect()
slug: Web/API/PressureObserver/disconnect
l10n:
  sourceCommit: e1d2d6a3880d47638de6b5a54b58df92826ec58e
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die **`disconnect()`**-Methode des [`PressureObserver`](/de/docs/Web/API/PressureObserver)-Interfaces stoppt den Rückruf des Pressure-Observers, keine Druckaufzeichnungen mehr von allen Quellen zu erhalten.

## Syntax

```js-nolint
disconnect()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Beenden eines Pressure-Observers

Das folgende Beispiel sammelt 20 Proben und trennt dann den Pressure-Observer, um keine weiteren Druckaufzeichnungen zu empfangen.

```js
const samples = [];

function pressureChange(records, observer) {
  for (const record of records) {
    samples.push(record.state);
    // We only want 20 samples
    if (samples.length === 20) {
      observer.disconnect();
      return;
    }
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
