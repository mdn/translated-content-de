---
title: JS Self-Profiling API
slug: Web/API/JS_Self-Profiling_API
l10n:
  sourceCommit: 9fc1511293944aacab750f84dfe1a6753bd8a73f
---

{{DefaultAPISidebar("JS Self-Profiling API")}}{{SeeCompatTable}}

Die JS Self-Profiling API ermöglicht es einer Website, einen Sampling-Profiler auszuführen, um zu verstehen, wo die JavaScript-Ausführungszeit verbraucht wird.

## Konzepte und Verwendung

Um ein Profil zu starten, erstellt eine Website eine [`Profiler`](/de/docs/Web/API/Profiler)-Instanz. Sobald die Instanz erstellt wird, beginnt sie, den JavaScript-Ausführungskontext zu sampeln.

Um das Sammeln von Samples zu stoppen und das Profil abzurufen, ruft die Website [`Profiler.stop()`](/de/docs/Web/API/Profiler/stop) auf. Dies gibt ein {{jsxref("Promise")}} zurück, das sich zu einem Objekt auflöst, das die Profildaten enthält.

Zum Beispiel erstellt die folgende Funktion einen Profiler, ruft dann eine Funktion `genPrimes()` auf, stoppt dann den Profiler und ruft die Profildaten ab:

```js
async function profileGeneratePrimes() {
  const profiler = new Profiler({ sampleInterval: 10, maxBufferSize: 10000 });

  genPrimes();

  const trace = await profiler.stop();
  console.log(trace);
}
```

Der Profiler ist ein _Sampling-Profiler_: Das bedeutet, dass er periodisch den aktuellen Zustand des JavaScript-{{Glossary("call_stack", "Call Stacks")}} aufzeichnet (oder _sampelt_). Das Profil besteht aus der Sammlung dieser Samples. Dies ermöglicht es Ihnen zu verstehen, wo das Programm statistisch gesehen die meiste Zeit verbringt.

Um genau zu verstehen, was ein Profil enthält und wie es formatiert ist, siehe [Profile anatomy and format](/de/docs/Web/API/JS_Self-Profiling_API/Profile_content_and_format).

### Best Practices für Profiling

Das Sammeln und Verarbeiten von Profildaten bringt selbst einen Leistungsaufwand mit sich, und Entwickler sollten darauf achten, diesen zu steuern. Praktiken zur Minimierung des Leistungsaufwands umfassen:

- Verwenden Sie die Optionen [`maxbuffersize`](/de/docs/Web/API/Profiler/Profiler#maxbuffersize) und [`sampleinterval`](/de/docs/Web/API/Profiler/Profiler#sampleinterval), um zu steuern, wie viele Samples genommen werden und wie oft gesampelt wird.
- Sampeln Sie für kurze Zeiträume in einer abgetasteten Weise: Zum Beispiel, trace für 5 Sekunden alle 60 Sekunden.
- Verarbeiten Sie die Samples in einem Web-Worker, um die Leistung im Haupt-Thread nicht zu beeinträchtigen.
- Aggregieren Sie Samples auf dem Client, bevor Sie sie an einen Telemetrie-Endpunkt senden.

Wenn das JavaScript auf Ihrer Seite {{Glossary("Minification", "minifiziert")}} ist, müssen Sie die Profildaten basierend auf einer {{Glossary("Source_map", "Source Map")}} entweder auf dem Client oder auf dem Server transformieren, bevor die Daten nutzbar sind.

## Schnittstellen

- [`Profiler`](/de/docs/Web/API/Profiler) {{Experimental_Inline}}

  - : Die `Profiler`-Schnittstelle wird verwendet, um Profile zu erstellen.

## Sicherheitsanforderungen

Um diese API zu nutzen, muss das Dokument mit einer [Dokumentenrichtlinie](https://wicg.github.io/document-policy/) bereitgestellt werden, die den Konfigurationspunkt `"js-profiling"` enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
