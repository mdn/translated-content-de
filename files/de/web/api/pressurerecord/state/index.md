---
title: "PressureRecord: Eigenschaft state"
short-title: state
slug: Web/API/PressureRecord/state
l10n:
  sourceCommit: a251e34887530216e319fee73b5b859c8c943a53
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

Die schreibgeschützte **`state`**-Eigenschaft ist ein String, der den erfassten Druckzustand angibt.

## Wert

Ein String, der den erfassten Druckzustand angibt. Die Compute Pressure API verwendet leicht verständliche Druckzustände mit den folgenden Bedeutungen (siehe auch die [Spezifikation](https://w3c.github.io/compute-pressure/#pressure-states)):

- ⚪ `"nominal"`: Die Bedingungen des Zielgeräts sind auf einem akzeptablen Niveau ohne spürbare negative Auswirkungen auf den Benutzer.
- 🟢 `"fair"`: Der Druck, die Temperatur und/oder der Energieverbrauch des Zielgeräts sind leicht erhöht, was zu einer reduzierten Batterielebensdauer und zum Aktivieren und Hörbarwerden von Lüftern (oder Systemen mit Lüftern) führen kann. Abgesehen davon arbeitet das Zielgerät einwandfrei und kann zusätzliche Arbeit übernehmen.
- 🟡 `"serious"`: Der Druck, die Temperatur und/oder der Energieverbrauch des Zielgeräts sind durchgehend stark erhöht. Das System könnte als Gegenmaßnahme zur Reduzierung der Temperaturen drosseln.
- 🔴 `"critical"`: Die Temperatur des Zielgeräts oder Systems ist erheblich erhöht und es muss abgekühlt werden, um potenzielle Probleme zu vermeiden.

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

## Kompatibilität der Browser

{{Compat}}
