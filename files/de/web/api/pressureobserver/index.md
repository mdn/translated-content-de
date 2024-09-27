---
title: PressureObserver
slug: Web/API/PressureObserver
l10n:
  sourceCommit: 3637dc76b50578ccf7d8c8625bca6ad5724937a2
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die **`PressureObserver`**-Schnittstelle ist Teil der [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API) und wird verwendet, um die Druckänderungen von Systemressourcen wie der CPU zu beobachten.

## Konstruktor

- [`PressureObserver()`](/de/docs/Web/API/PressureObserver/PressureObserver) {{experimental_inline}}
  - : Erstellt und gibt ein neues `PressureObserver`-Objekt zurück.

## Statische Eigenschaften

- [`PressureObserver.knownSources`](/de/docs/Web/API/PressureObserver/knownSources_static) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein Array von [`source`](/de/docs/Web/API/PressureRecord/source)-Werten zurück, die vom User-Agent unterstützt werden.

## Instanzmethoden

- [`PressureObserver.observe()`](/de/docs/Web/API/PressureObserver/observe) {{experimental_inline}}
  - : Ruft die Rückruffunktion des Pressure-Observers auf, wenn ein Druckeintrag für die angegebene `source` beobachtet wird.
- [`PressureObserver.unobserve()`](/de/docs/Web/API/PressureObserver/unobserve) {{experimental_inline}}
  - : Stoppt die Druck-Observer-Rückruffunktion von der Entgegennahme von Druckeinträgen von der angegebenen `source`.
- [`PressureObserver.disconnect()`](/de/docs/Web/API/PressureObserver/disconnect) {{experimental_inline}}
  - : Stoppt die Druck-Observer-Rückruffunktion von der Entgegennahme von Druckeinträgen von allen Quellen.
- [`PressureObserver.takeRecords()`](/de/docs/Web/API/PressureObserver/takeRecords) {{experimental_inline}}
  - : Gibt die aktuelle Liste der im Druck-Observer gespeicherten Druckeinträge zurück und leert diese.

## Beispiele

### Aktuellen Druck protokollieren

Dieses Beispiel erstellt einen `PressureObserver` und führt eine Aktion aus, wann immer es eine Druckänderung gibt. Das Stichprobenintervall ist auf 1000 ms eingestellt, was bedeutet, dass es höchstens jede Sekunde Aktualisierungen gibt.

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

- [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)
- [`MutationObserver`](/de/docs/Web/API/MutationObserver)
- [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
