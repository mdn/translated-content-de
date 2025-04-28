---
title: JS Self-Profiling API
slug: Web/API/JS_Self-Profiling_API
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{DefaultAPISidebar("JS Self-Profiling API")}}{{SeeCompatTable}}

Die JS Self-Profiling API ermöglicht es einer Website, einen Sampling-Profiler auszuführen, um zu verstehen, wo sie JavaScript-Ausführungszeit verbringt.

## Konzepte und Nutzung

Um ein Profil zu starten, erstellt eine Website eine [`Profiler`](/de/docs/Web/API/Profiler) Instanz. Sobald die Instanz erstellt ist, beginnt sie, den JavaScript-Ausführungskontext zu sampeln.

Um das Sammeln von Samples zu stoppen und das Profil abzurufen, ruft die Website [`Profiler.stop()`](/de/docs/Web/API/Profiler/stop) auf. Dies gibt ein {{jsxref("Promise")}} zurück, das sich zu einem Objekt mit den Profildaten auflöst.

Im folgenden Beispiel wird eine Profiler erstellt, dann eine Funktion `genPrimes()` aufgerufen, dann der Profiler gestoppt und die Profildaten abgerufen:

```js
async function profileGeneratePrimes() {
  const profiler = new Profiler({ sampleInterval: 10, maxBufferSize: 10000 });

  genPrimes();

  const trace = await profiler.stop();
  console.log(trace);
}
```

Der Profiler ist ein _Sampling-Profiler_: Das bedeutet, dass er periodisch den aktuellen Zustand des JavaScript-{{Glossary("call_stack", "call stack")}} aufzeichnet (oder _sampelt_). Das Profil besteht aus der Sammlung dieser Samples. Dies ermöglicht es Ihnen zu verstehen, wo das Programm statistisch gesehen die meiste Zeit verbringt.

Um genau zu verstehen, was ein Profil enthält und wie es formatiert ist, siehe [Profil anatomie und format](/de/docs/Web/API/JS_Self-Profiling_API/Profile_content_and_format).

### Best Practices für das Profiling

Das Sammeln und Verarbeiten von Profildaten verursacht selbst einen Leistungsaufwand, und Entwickler sollten darauf achten, diesen zu verwalten. Praktiken zur Minimierung des Leistungsaufwands beinhalten:

- Verwenden Sie die Optionen [`maxBufferSize`](/de/docs/Web/API/Profiler/Profiler#maxbuffersize) und [`sampleInterval`](/de/docs/Web/API/Profiler/Profiler#sampleinterval), um zu steuern, wie viele Samples genommen werden und wie oft gesampelt wird.
- Sampeln Sie für kurze Zeitperioden in einer gesampelten Weise: Zum Beispiel für 5 Sekunden von 60 Sekunden verfolgen.
- Verarbeiten Sie die Samples in einem Web Worker, um die Leistung des Hauptthreads nicht zu beeinträchtigen.
- Aggregieren Sie die Samples auf dem Client, bevor Sie sie an einen Telemetrie-Endpunkt senden.

Wenn das JavaScript auf Ihrer Seite {{Glossary("Minification", "minimiert")}} ist, müssen Sie die Profildaten basierend auf einer {{Glossary("Source_map", "Source Map")}}, entweder auf dem Client oder auf dem Server, transformieren, bevor die Daten nutzbar sind.

## Schnittstellen

- [`Profiler`](/de/docs/Web/API/Profiler) {{Experimental_Inline}}

  - : Die `Profiler`-Schnittstelle wird verwendet, um Profile zu erstellen.

## Sicherheitsanforderungen

Um diese API zu nutzen, muss das Dokument mit einer [Dokumentenrichtlinie](https://wicg.github.io/document-policy/) bereitgestellt werden, die den Konfigurationspunkt `"js-profiling"` enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
