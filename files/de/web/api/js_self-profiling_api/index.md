---
title: JS Self-Profiling API
slug: Web/API/JS_Self-Profiling_API
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("JS Self-Profiling API")}}{{SeeCompatTable}}

Die JS Self-Profiling API ermöglicht es einer Website, einen Sampling-Profiler auszuführen, um zu verstehen, wo sie JavaScript-Ausführungszeit verbringt.

## Konzepte und Nutzung

Um ein Profil zu starten, erstellt eine Website eine [`Profiler`](/de/docs/Web/API/Profiler)-Instanz. Sobald die Instanz erstellt ist, beginnt sie mit der Probenahme des JavaScript-Ausführungskontextes.

Um die Sammlung von Proben zu stoppen und das Profil abzurufen, ruft die Website [`Profiler.stop()`](/de/docs/Web/API/Profiler/stop) auf. Dies gibt ein {{jsxref("Promise")}} zurück, das ein Objekt mit den Profildaten auflöst.

Zum Beispiel erstellt die folgende Funktion einen Profiler, ruft dann eine Funktion `genPrimes()` auf, stoppt anschließend den Profiler und ruft die Profildaten ab:

```js
async function profileGeneratePrimes() {
  const profiler = new Profiler({ sampleInterval: 10, maxBufferSize: 10000 });

  genPrimes();

  const trace = await profiler.stop();
  console.log(trace);
}
```

Der Profiler ist ein _Sampling-Profiler_: das bedeutet, dass er periodisch den aktuellen Zustand des JavaScript-{{Glossary("call_stack", "Call Stacks")}} aufzeichnet (oder _abfragt_). Das Profil besteht aus der Sammlung dieser Proben. Dies ermöglicht es Ihnen zu verstehen, wo das Programm statistisch gesehen die meiste Zeit verbringt.

Um genau zu verstehen, was ein Profil enthält und wie es formatiert ist, siehe [Profile anatomy and format](/de/docs/Web/API/JS_Self-Profiling_API/Profile_content_and_format).

### Best Practices für das Profiling

Das Sammeln und Verarbeiten von Profildaten führt zu einem eigenen Leistungsaufwand, und Entwickler sollten darauf achten, diesen zu verwalten. Praktiken zur Minimierung des Leistungsaufwands umfassen:

- Verwenden Sie die Optionen [`maxBufferSize`](/de/docs/Web/API/Profiler/Profiler#maxbuffersize) und [`sampleInterval`](/de/docs/Web/API/Profiler/Profiler#sampleinterval), um zu steuern, wie viele Proben genommen werden und wie oft die Probenahme erfolgen soll.
- Nehmen Sie Proben für kurze Zeiträume auf eine gesampelte Weise: zum Beispiel, indem Sie für 5 Sekunden von jeder 60 Sekunden verfolgen.
- Verarbeiten Sie die Proben in einem Web Worker, um die Leistung auf dem Haupt-Thread nicht zu beeinträchtigen.
- Aggregieren Sie Proben auf dem Client, bevor Sie sie an einen Telemetrie-Endpunkt senden.

Wenn das JavaScript auf Ihrer Seite {{Glossary("Minification", "minifiziert")}} ist, müssen Sie die Profildaten basierend auf einer {{Glossary("Source_map", "Source Map")}} entweder auf dem Client oder auf dem Server transformieren, bevor die Daten verwendbar sind.

## Schnittstellen

- [`Profiler`](/de/docs/Web/API/Profiler) {{Experimental_Inline}}
  - : Die `Profiler`-Schnittstelle wird zum Erstellen von Profilen verwendet.

## Sicherheitsanforderungen

Um diese API zu verwenden, muss das Dokument mit einer [Dokumentrichtlinie](https://wicg.github.io/document-policy/) bereitgestellt werden, die den Konfigurationspunkt `"js-profiling"` enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
