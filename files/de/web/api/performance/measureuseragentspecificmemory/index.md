---
title: "Performance: measureUserAgentSpecificMemory() Methode"
short-title: measureUserAgentSpecificMemory()
slug: Web/API/Performance/measureUserAgentSpecificMemory
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`measureUserAgentSpecificMemory()`** Methode wird verwendet, um den Speicherverbrauch einer Webanwendung einschließlich aller ihrer iframes und Worker abzuschätzen.

## Syntax

```js-nolint
measureUserAgentSpecificMemory()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf ein Objekt aufgelöst wird, welches die folgenden Eigenschaften enthält:

- `bytes`
  - : Eine Zahl, die den gesamten Speicherverbrauch darstellt.
- `breakdown`
  - : Ein {{jsxref("Array")}} von Objekten, das die Gesamtanzahl der `bytes` aufteilt und Zuordnungs- sowie Typinformationen bereitstellt. Das Objekt enthält die folgenden Eigenschaften:
    - `bytes`
      - : Die Größe des Speichers, den dieser Eintrag beschreibt.
    - `attribution`
      - : Ein {{jsxref("Array")}} von Containerelementen der JavaScript-Realm, die den Speicher verwenden. Dieses Objekt hat die folgenden Eigenschaften:
        - `url`
          - : Wenn diese Zuordnung zu einem gleichartigen JavaScript-Realm gehört, enthält diese Eigenschaft die URL des Realms. Andernfalls ist es die Zeichenkette "cross-origin-url".
        - `container`
          - : Ein Objekt, das das DOM-Element beschreibt, das diesen JavaScript-Realm enthält. Dieses Objekt hat die folgenden Eigenschaften:
            - `id`
              - : Das `id`-Attribut des Containerelements.
            - `src`
              - : Das `src`-Attribut des Containerelements. Wenn das Containerelement ein {{HTMLElement("object")}}-Element ist, enthält dieses Feld den Wert des `data`-Attributs.
        - `scope`
          - : Eine Zeichenkette, die den Typ des gleichartigen JavaScript-Realm beschreibt. Entweder `"Window"`, `"DedicatedWorkerGlobalScope"`, `"SharedWorkerGlobalScope"`, `"ServiceWorkerGlobalScope"` oder `"cross-origin-aggregated"` für den Cross-Origin-Fall.
    - `types`
      - : Ein Array von implementierungsdefinierten Speichertypen, die mit dem Speicher verbunden sind.

Ein Beispiel für den Rückgabewert sieht folgendermaßen aus:

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
  - : Wird ausgelöst, wenn die [Sicherheitsanforderungen](#sicherheitsanforderungen) zum Verhindern von Cross-Origin-Informationslecks nicht erfüllt sind.

## Beschreibung

Der Browser weist automatisch Speicher zu, wenn Objekte erstellt werden, und gibt ihn frei, wenn sie nicht mehr erreichbar sind (Garbage Collection). Diese Garbage Collection (GC) ist eine Annäherung, da das generelle Problem, festzustellen, ob ein bestimmtes Speicherstück noch benötigt wird, unmöglich ist (siehe auch [JavaScript-Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management)). Entwickler müssen sicherstellen, dass Objekte der Garbage Collection unterliegen, kein Speicher ausläuft, und der Speicherverbrauch nicht unnötig über die Zeit wächst, was zu langsamen und nicht reagierenden Webanwendungen führt. Speicherlecks werden typischerweise eingeführt, indem vergessen wird, einen Event Listener abzumelden, einen Worker zu schließen, Objekte in Arrays zu akkumulieren, und mehr.

Die `measureUserAgentSpecificMemory()` API aggregiert Speicherverbrauchsdaten, um Ihnen bei der Suche nach Speicherlecks zu helfen. Sie kann zur Erkennung von Speicherregressionen oder für A/B-Tests von Funktionen zur Bewertung ihrer Auswirkung auf den Speicher genutzt werden. Anstatt einzelne Aufrufe an diese Methode zu tätigen, ist es besser, periodische Aufrufe zu machen, um zu verfolgen, wie sich der Speicherverbrauch im Verlauf einer Sitzung verändert.

Die `byte`-Werte, die diese API zurückgibt, sind weder über verschiedene Browser hinweg noch zwischen verschiedenen Versionen desselben Browsers vergleichbar, da sie stark implementierungsabhängig sind. Auch wie `breakdown` und `attribution` Arrays bereitgestellt werden, liegt ebenfalls beim Browser. Es ist am besten, keine Annahmen über diese Daten fest in den Code zu integrieren. Diese API ist dazu gedacht, periodisch (mit einem zufälligen Intervall) aufgerufen zu werden, um Daten zu aggregieren und den Unterschied zwischen den Proben zu analysieren.

## Sicherheitsanforderungen

Um diese Methode zu verwenden, muss Ihr Dokument in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) und [cross-origin-isoliert](/de/docs/Web/API/Window/crossOriginIsolated) sein.

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu überprüfen, ob das Dokument cross-origin-isoliert ist:

```js
if (crossOriginIsolated) {
  // Use measureUserAgentSpecificMemory
}
```

## Beispiele

### Überwachen des Speicherverbrauchs

Der folgende Code zeigt, wie die `measureUserAgentSpecificMemory()` Methode einmal alle fünf Minuten in einem zufälligen Intervall unter Verwendung der [Exponentialverteilung](https://en.wikipedia.org/wiki/Exponential_distribution#Random_variate_generation) aufgerufen wird.

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
- [Überwachen des gesamten Speicherverbrauchs Ihrer Webseite mit measureUserAgentSpecificMemory() - web.dev](https://web.dev/articles/monitor-total-page-memory-usage)
