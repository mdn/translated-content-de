---
title: JS Self-Profiling API
slug: Web/API/JS_Self-Profiling_API
l10n:
  sourceCommit: 49f36838f402e87204234c21fa8a98002c7e7a42
---

{{DefaultAPISidebar("JS Self-Profiling API")}}

Die JS Self-Profiling API ermöglicht einer Website, einen Sampling-Profiler auszuführen, um zu verstehen, wo sie ihre JavaScript-Ausführungszeit verbringt.

## Konzepte und Verwendung

Um ein Profil zu starten, erstellt eine Website eine [`Profiler`](/de/docs/Web/API/Profiler)-Instanz. Sobald die Instanz erstellt ist, beginnt sie damit, den JavaScript-Ausführungskontext zu samplen.

Um das Sammeln von Samples zu beenden und das Profil abzurufen, ruft die Website [`Profiler.stop()`](/de/docs/Web/API/Profiler/stop) auf. Dies gibt ein {{jsxref("Promise")}} zurück, das zu einem Objekt aufgelöst wird, das die Profildaten enthält.

Zum Beispiel erstellt die folgende Funktion einen Profiler, ruft dann eine Funktion `genPrimes()` auf, stoppt den Profiler und ruft die Profildaten ab:

```js
async function profileGeneratePrimes() {
  const profiler = new Profiler({ sampleInterval: 10, maxBufferSize: 10000 });

  genPrimes();

  const trace = await profiler.stop();
  console.log(trace);
}
```

Der Profiler ist ein _Sampling-Profiler_: Das bedeutet, dass er periodisch den aktuellen Zustand des JavaScript-{{Glossary("call_stack", "Aufrufstapels")}} aufzeichnet (oder _samples_). Das Profil besteht aus der Sammlung dieser Samples. Dies ermöglicht es Ihnen zu verstehen, wo das Programm statistisch gesehen den Großteil seiner Zeit verbringt.

Um genau zu verstehen, was ein Profil enthält und wie es formatiert ist, siehe [Profile anatomy and format](/de/docs/Web/API/JS_Self-Profiling_API/Profile_content_and_format).

### Profiling-Best Practices

Das Sammeln und Verarbeiten von Profildaten bringt eine eigene Leistungsbelastung mit sich, und Entwickler sollten darauf achten, dies zu verwalten. Praktiken zur Minimierung der Leistungsbelastung sind:

- Verwenden Sie die Optionen [`maxbuffersize`](/de/docs/Web/API/Profiler/Profiler#maxbuffersize) und [`sampleinterval`](/de/docs/Web/API/Profiler/Profiler#sampleinterval), um zu steuern, wie viele Samples genommen werden sollen und wie oft gesamplet werden soll.
- Samplen Sie für kurze Zeiträume auf samplingbasierte Weise: beispielsweise 5 Sekunden von jedem 60 Sekunden trace.
- Verarbeiten Sie die Samples in einem Web Worker, um die Leistung des Hauptthreads nicht zu beeinträchtigen.
- Aggregieren Sie Samples auf dem Client, bevor Sie sie an einen Telemetrie-Endpunkt senden.

Wenn das JavaScript Ihrer Website {{Glossary("Minification", "minified")}} ist, müssen Sie die Profildaten basierend auf einer {{Glossary("Source_map", "Source Map")}} entweder auf dem Client oder auf dem Server transformieren, bevor die Daten verwendbar sind.

## Schnittstellen

- [`Profiler`](/de/docs/Web/API/Profiler) {{Experimental_Inline}}

  - : Die `Profiler`-Schnittstelle wird verwendet, um Profile zu erstellen.

## Sicherheitsanforderungen

Um diese API zu verwenden, muss das Dokument mit einer [Document Policy](https://wicg.github.io/document-policy/) bereitgestellt werden, die den Konfigurationspunkt `"js-profiling"` enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
