---
title: "PressureRecord: source-Eigenschaft"
short-title: source
slug: Web/API/PressureRecord/source
l10n:
  sourceCommit: e1d2d6a3880d47638de6b5a54b58df92826ec58e
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die schreibgeschützte **`source`**-Eigenschaft ist ein String, der die Ursprungsquelle angibt, von der der Datensatz stammt.

## Wert

Ein String, der die Ursprungsquelle angibt, von der der Datensatz stammt. Die aktuelle Version der Compute Pressure API-Spezifikation unterstützt zwei Hauptquellentypen:

- `"thermals"` repräsentiert den globalen thermischen Zustand des gesamten Systems.
- `"cpu"` repräsentiert den durchschnittlichen Druck der zentralen Verarbeitungseinheit (CPU) über alle ihre Kerne. Dieser Zustand kann durch andere Apps und Websites als die beobachtende Website beeinflusst werden.

Verwenden Sie den statischen Hinweis [`PressureObserver.knownSources`](/de/docs/Web/API/PressureObserver/knownSources_static), um zu sehen, welche Quellentypen von Ihrem Browser unterstützt werden. Beachten Sie, dass die Verfügbarkeit auch von Ihrem Betriebssystem und Ihrer Hardware abhängen kann. Rufen Sie [`observe()`](/de/docs/Web/API/PressureObserver/observe) auf und prüfen Sie auf einen `NotSupportedError`, um festzustellen, ob eine Druckbeobachtung möglich ist.

## Beispiele

### Verwendung der `source`-Eigenschaft

Im folgenden Beispiel protokollieren wir den Wert der `source`-Eigenschaft im Rückruf der Druckbeobachtung.

```js
function callback(records) {
  const lastRecord = records[records.length - 1];
  console.log(`Current pressure source: ${lastRecord.source}`);
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
