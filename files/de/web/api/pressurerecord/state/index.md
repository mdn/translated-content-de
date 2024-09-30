---
title: "PressureRecord: state-Eigenschaft"
short-title: state
slug: Web/API/PressureRecord/state
l10n:
  sourceCommit: a251e34887530216e319fee73b5b859c8c943a53
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

Die schreibgeschützte **`state`**-Eigenschaft ist ein String, der den aufgezeichneten Druckzustand angibt.

## Wert

Ein String, der den aufgezeichneten Druckzustand angibt. Die Compute Pressure API verwendet menschenlesbare Druckzustände mit den folgenden Semantiken (siehe auch die [Spezifikation](https://w3c.github.io/compute-pressure/#pressure-states)):

- ⚪ `"nominal"`: Die Bedingungen des Zielgeräts sind auf einem akzeptablen Niveau ohne merkliche negative Auswirkungen auf den Benutzer.
- 🟢 `"fair"`: Der Druck, die Temperatur und/oder der Energieverbrauch des Zielgeräts sind leicht erhöht, was zu einer verringerten Akkulaufzeit führen kann, sowie zu aktiven und hörbaren Lüftern (oder Systemen mit Lüftern). Abgesehen davon läuft das Zielgerät einwandfrei und kann zusätzliche Arbeit übernehmen.
- 🟡 `"serious"`: Der Druck, die Temperatur und/oder der Energieverbrauch des Zielgeräts sind konstant stark erhöht. Das System könnte Drosselmaßnahmen ergreifen, um die Temperatur zu senken.
- 🔴 `"critical"`: Die Temperatur des Zielgeräts oder Systems ist erheblich erhöht und erfordert eine Abkühlung, um mögliche Probleme zu vermeiden.

## Beispiele

### Verwendung der `state`-Eigenschaft

Im folgenden Beispiel protokollieren wir den Wert der `state`-Eigenschaft im Callback des Druckbeobachters.

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
