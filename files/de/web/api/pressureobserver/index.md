---
title: PressureObserver
slug: Web/API/PressureObserver
l10n:
  sourceCommit: 3637dc76b50578ccf7d8c8625bca6ad5724937a2
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die **`PressureObserver`** Schnittstelle ist Teil der [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API) und wird verwendet, um die Druckänderungen von Systemressourcen wie der CPU zu beobachten.

## Konstruktor

- {{domxref("PressureObserver.PressureObserver","PressureObserver()")}} {{experimental_inline}}
  - : Erstellt und gibt ein neues `PressureObserver`-Objekt zurück.

## Statische Eigenschaften

- {{domxref("PressureObserver.knownSources_static", "PressureObserver.knownSources")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein Array von {{domxref("PressureRecord.source","source")}}-Werten zurück, die vom Benutzeragent unterstützt werden.

## Instanzmethoden

- {{domxref("PressureObserver.observe","PressureObserver.observe()")}} {{experimental_inline}}
  - : Ruft die Rückruffunktion des Pressure Observers auf, wenn ein Druckeintrag für die angegebene `source` beobachtet wird.
- {{domxref("PressureObserver.unobserve","PressureObserver.unobserve()")}} {{experimental_inline}}
  - : Stoppt die Rückruffunktion des Pressure Observers daran, Druckeinträge von der angegebenen `source` zu empfangen.
- {{domxref("PressureObserver.disconnect","PressureObserver.disconnect()")}} {{experimental_inline}}
  - : Stoppt die Rückruffunktion des Pressure Observers daran, Druckeinträge von allen Quellen zu empfangen.
- {{domxref("PressureObserver.takeRecords","PressureObserver.takeRecords()")}} {{experimental_inline}}
  - : Gibt die aktuelle Liste von Druckeinträgen zurück, die im Pressure Observer gespeichert sind, und leert sie.

## Beispiele

### Aktuellen Druck protokollieren

Dieses Beispiel erstellt einen `PressureObserver` und führt eine Aktion aus, wann immer sich der Druck ändert. Das Abtastintervall ist auf 1000 ms eingestellt, was bedeutet, dass es maximal jede Sekunde Updates geben wird.

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

## Siehe auch

- {{domxref('PerformanceObserver')}}
- {{domxref('MutationObserver')}}
- {{domxref('ResizeObserver')}}
- {{domxref('IntersectionObserver')}}
