---
title: "Performance: measureUserAgentSpecificMemory() Methode"
short-title: measureUserAgentSpecificMemory()
slug: Web/API/Performance/measureUserAgentSpecificMemory
l10n:
  sourceCommit: 6d6c7276af1aa286330458c3e84ddc7ea0b435ac
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`measureUserAgentSpecificMemory()`** Methode wird verwendet, um die Speichernutzung einer Webanwendung einschließlich aller ihrer iframes und Worker zu schätzen.

## Syntax

```js-nolint
measureUserAgentSpecificMemory()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem Objekt aufgelöst wird, das die folgenden Eigenschaften enthält:

- `bytes`
  - : Eine Zahl, die die gesamte Speichernutzung darstellt.
- `breakdown`
  - : Ein {{jsxref("Array")}} von Objekten, das die gesamten `bytes` aufteilt und Attributions- und Typinformationen bereitstellt. Das Objekt enthält die folgenden Eigenschaften:
    - `bytes`
      - : Die Größe des Speichers, den dieser Eintrag beschreibt.
    - `attribution`
      - : Ein {{jsxref("Array")}} von Container-Elementen der JavaScript-Bereiche, die den Speicher nutzen. Dieses Objekt hat die folgenden Eigenschaften:
        - `url`
          - : Wenn diese Attribution einem JavaScript-Bereich mit demselben Ursprung entspricht, enthält diese Eigenschaft die URL des Bereichs. Andernfalls ist es der String "cross-origin-url".
        - `container`
          - : Ein Objekt, das das DOM-Element beschreibt, das diesen JavaScript-Bereich enthält. Dieses Objekt hat die folgenden Eigenschaften:
            - `id`
              - : Das `id` Attribut des Container-Elements.
            - `src`
              - : Das `src` Attribut des Container-Elements. Wenn das Container-Element ein {{HTMLElement("object")}} Element ist, enthält dieses Feld den Wert des `data` Attributs.
        - `scope`
          - : Ein String, der den Typ des gleichursprünglichen JavaScript-Bereichs beschreibt. Entweder `"Window"`, `"DedicatedWorkerGlobalScope"`, `"SharedWorkerGlobalScope"`, `"ServiceWorkerGlobalScope"` oder `"cross-origin-aggregated"` für den Fall mit übergreifendem Ursprung.
    - `types`
      - : Ein Array von implementationsspezifischen Speichertypen, die mit dem Speicher verbunden sind.

Ein Beispiel für einen Rückgabewert sieht so aus:

```js
{
  bytes: 1500000,
  breakdown: [
    {
      bytes: 1000000,
      attribution: [
        {
          url: "https://example.com",
          scope: "Window",
        },
      ],
      types: ["DOM", "JS"],
    },
    {
      bytes: 0,
      attribution: [],
      types: [],
    },
    {
      bytes: 500000,
      attribution: [
        {
          url: "https://example.com/iframe.html"
          container: {
            id: "example-id",
            src: "redirect.html?target=iframe.html",
          },
          scope: "Window",
        }
      ],
      types: ["JS", "DOM"],
    },
  ],
}
```

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [Sicherheitsanforderungen](#sicherheitsanforderungen) zum Verhindern von übergreifenden Ursprungs-Informationslecks nicht erfüllt sind.

## Beschreibung

Der Browser weist automatisch Speicher zu, wenn Objekte erstellt werden, und gibt ihn frei, wenn sie nicht mehr erreichbar sind (Garbage Collection). Diese Garbage Collection (GC) ist eine Annäherung, da das allgemeine Problem, festzustellen, ob ein bestimmtes Speicherstück noch benötigt wird, unlösbar ist (siehe auch [JavaScript Memory Management](/de/docs/Web/JavaScript/Memory_management)). Entwickler müssen sicherstellen, dass Objekte gesammelt werden, kein Speicher verloren geht und die Speichernutzung nicht unnötig über die Zeit ansteigt, was zu langsamen und nicht reagierenden Webanwendungen führt. Speicherlecks werden typischerweise durch das Vergessen, einen Event-Listener abzumelden, durch das Nicht-Schließen eines Workers, durch das Ansammeln von Objekten in Arrays und mehr, eingeführt.

Die `measureUserAgentSpecificMemory()` API aggregiert Speichernutzungsdaten, um Ihnen bei der Suche nach Speicherlecks zu helfen. Sie kann zur Erkennung von Speicherregressionen oder für A/B-Tests von Funktionen verwendet werden, um deren Speicherauswirkung zu bewerten. Anstatt einzelne Aufrufe dieser Methode zu machen, ist es besser, regelmäßige Aufrufe zu tätigen, um zu verfolgen, wie sich die Speichernutzung während einer Sitzung verändert.

Die `byte` Werte, die diese API zurückgibt, sind zwischen Browsern oder zwischen verschiedenen Versionen desselben Browsers nicht vergleichbar, da diese stark von der Implementierung abhängen. Auch wie die `breakdown` und `attribution` Arrays bereitgestellt werden, liegt ebenfalls im Ermessen des Browsers. Es ist am besten, keine Annahmen über diese Daten festzucodieren. Diese API ist eher dazu gedacht, periodisch (mit einem zufälligen Intervall) aufgerufen zu werden, um Daten zu aggregieren und die Unterschiede zwischen den Proben zu analysieren.

## Sicherheitsanforderungen

Um diese Methode zu verwenden, muss Ihr Dokument in einem [sicherer Kontext](/de/docs/Web/Security/Secure_Contexts) und [übergreifend isoliert](/de/docs/Web/API/Window/crossOriginIsolated) sein.

Sie können die [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) Eigenschaften verwenden, um zu überprüfen, ob das Dokument übergreifend isoliert ist:

```js
if (crossOriginIsolated) {
  // Use measureUserAgentSpecificMemory
}
```

## Beispiele

### Überwachung der Speichernutzung

Der folgende Code zeigt, wie die `measureUserAgentSpecificMemory()` Methode einmal alle fünf Minuten zu einem zufälligen Intervall unter Verwendung der [Exponentialverteilung](https://en.wikipedia.org/wiki/Exponential_distribution#Random_variate_generation) aufgerufen wird.

```js
function runMemoryMeasurements() {
  const interval = -Math.log(Math.random()) * 5 * 60 * 1000;
  console.log(`Next measurement in ${Math.round(interval / 1000)} seconds.`);
  setTimeout(measureMemory, interval);
}

async function measureMemory() {
  const memorySample = await performance.measureUserAgentSpecificMemory();
  console.log(memorySample);
  runMemoryMeasurements();
}

if (crossOriginIsolated) {
  runMemoryMeasurements();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)
- [Überwachen Sie die gesamte Speichernutzung Ihrer Webseite mit measureUserAgentSpecificMemory() - web.dev](https://web.dev/articles/monitor-total-page-memory-usage)
