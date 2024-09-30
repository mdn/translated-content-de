---
title: "PressureObserver: disconnect()-Methode"
short-title: disconnect()
slug: Web/API/PressureObserver/disconnect
l10n:
  sourceCommit: a251e34887530216e319fee73b5b859c8c943a53
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`disconnect()`**-Methode des [`PressureObserver`](/de/docs/Web/API/PressureObserver)-Interfaces stoppt den Rückruf des Druckbeobachters, sodass keine Druckaufzeichnungen mehr von allen Quellen empfangen werden.

## Syntax

```js-nolint
disconnect()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Einen Druckbeobachter stoppen

Das folgende Beispiel sammelt 20 Stichproben und trennt dann den Druckbeobachter, um das Empfangen weiterer Druckaufzeichnungen zu deaktivieren.

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
