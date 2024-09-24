---
title: "PressureRecord: state-Eigenschaft"
short-title: state
slug: Web/API/PressureRecord/state
l10n:
  sourceCommit: e1d2d6a3880d47638de6b5a54b58df92826ec58e
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die schreibgeschützte **`state`**-Eigenschaft ist ein String, der den aufgezeichneten Druckzustand angibt.

## Wert

Ein String, der den aufgezeichneten Druckzustand angibt. Die Compute Pressure API verwendet verständliche Druckzustände mit den folgenden Bedeutungen (siehe auch die [Spezifikation](https://w3c.github.io/compute-pressure/#pressure-states)):

- ⚪ `"nominal"`: Die Bedingungen des Zielgeräts sind auf einem akzeptablen Niveau ohne spürbare negative Auswirkungen auf den Benutzer.
- 🟢 `"fair"`: Druck, Temperatur und/oder Energieverbrauch des Zielgeräts sind leicht erhöht, was zu einer verkürzten Batterielebensdauer führen kann, sowie dazu, dass Lüfter (oder Systeme mit Lüftern) aktiv und hörbar werden. Ansonsten läuft das Zielgerät einwandfrei und kann zusätzliche Arbeit übernehmen.
- 🟡 `"serious"`: Druck, Temperatur und/oder Energieverbrauch des Zielgeräts sind durchgehend stark erhöht. Das System könnte als Gegenmaßnahme Drosselungen durchführen, um die thermale Belastung zu reduzieren.
- 🔴 `"critical"`: Die Temperatur des Zielgeräts oder Systems ist erheblich erhöht und es muss gekühlt werden, um potenzielle Probleme zu vermeiden.

## Beispiele

### Verwendung der `state`-Eigenschaft

Im folgenden Beispiel protokollieren wir den Wert der `state`-Eigenschaft im Rückruf des Druckbeobachters.

```js
function callback(records) {
  const lastRecord = records[records.length - 1];
  console.log(`Current pressure is ${lastRecord.state}`);
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
