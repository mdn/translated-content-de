---
title: "PressureRecord: state-Eigenschaft"
short-title: state
slug: Web/API/PressureRecord/state
l10n:
  sourceCommit: a251e34887530216e319fee73b5b859c8c943a53
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

Die schreibgeschützte **`state`**-Eigenschaft ist ein Zeichenfolgenwert, der den aufgezeichneten Druckzustand angibt.

## Wert

Eine Zeichenfolge, die den aufgezeichneten Druckzustand angibt. Die Compute Pressure API verwendet menschenlesbare Druckzustände mit den folgenden Bedeutungen (siehe auch die [Spezifikation](https://w3c.github.io/compute-pressure/#pressure-states)):

- ⚪ `"nominal"`: Die Bedingungen des Zielgeräts sind auf einem akzeptablen Niveau ohne merkliche nachteilige Auswirkungen auf den Benutzer.
- 🟢 `"fair"`: Der Druck, die Temperatur und/oder der Energieverbrauch des Zielgeräts sind leicht erhöht, was möglicherweise zu einer verkürzten Batterielebensdauer führen kann. Auch können Lüfter (oder Systeme mit Lüftern) aktiv und hörbar werden. Ansonsten läuft das Zielgerät einwandfrei und kann zusätzliche Arbeit übernehmen.
- 🟡 `"serious"`: Der Druck, die Temperatur und/oder der Energieverbrauch des Zielgeräts sind durchgehend stark erhöht. Das System kann als Gegenmaßnahme zur Verringerung der Temperatur gedrosselt werden.
- 🔴 `"critical"`: Die Temperatur des Zielgeräts oder Systems ist deutlich erhöht und erfordert eine Abkühlung, um mögliche Probleme zu vermeiden.

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
