---
title: "Performance: measureUserAgentSpecificMemory() Methode"
short-title: measureUserAgentSpecificMemory()
slug: Web/API/Performance/measureUserAgentSpecificMemory
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`measureUserAgentSpecificMemory()`**-Methode wird verwendet, um den Speicherverbrauch einer Webanwendung einschließlich all ihrer iframes und Worker abzuschätzen.

## Beschreibung

Der Browser weist automatisch Speicher zu, wenn Objekte erstellt werden, und gibt diesen frei, wenn sie nicht mehr erreichbar sind (Garbage Collection). Diese Garbage Collection (GC) ist eine Annäherung, da das allgemeine Problem, festzustellen, ob ein bestimmter Speicherbereich noch benötigt wird, unmöglich ist (siehe auch [JavaScript-Speicherverwaltung](/de/docs/Web/JavaScript/Memory_management)). Entwickler müssen sicherstellen, dass Objekte garbage collected werden, Speicher nicht verloren geht und die Speichernutzung nicht unnötig mit der Zeit wächst, was zu langsamen und nicht reagierenden Webanwendungen führt. Speicherlecks entstehen typischerweise dadurch, dass man vergisst, einen Event Listener zu deregistrieren, einen Worker nicht zu schließen, Objekte in Arrays zu sammeln und mehr.

Die `measureUserAgentSpecificMemory()`-API aggregiert Speichernutzungsdaten, um Ihnen bei der Erkennung von Speicherlecks zu helfen. Es kann zur Erkennung von Speicherregressionen oder zum A/B-Testen von Funktionen verwendet werden, um deren Speicherauswirkungen zu bewerten. Anstatt einzelne Anrufe an diese Methode zu tätigen, ist es besser, periodische Anrufe zu tätigen, um zu verfolgen, wie sich die Speichernutzung im Laufe einer Sitzung verändert.

Die `byte`-Werte, die diese API zurückgibt, sind nicht über verschiedene Browser oder zwischen verschiedenen Versionen desselben Browsers vergleichbar, da sie stark implementationsabhängig sind. Auch, wie `breakdown`- und `attribution`-Arrays bereitgestellt werden, hängt ebenfalls vom Browser ab. Es ist am besten, keine Annahmen über diese Daten hart zu kodieren. Diese API soll vielmehr periodisch (mit einem randomisierten Intervall) aufgerufen werden, um Daten zu aggregieren und die Unterschiede zwischen den Proben zu analysieren.

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
  - : Ein {{jsxref("Array")}} von Objekten, die die gesamten `bytes` aufteilen und Zuordnung sowie Typinformationen bereitstellen. Das Objekt enthält die folgenden Eigenschaften:
    - `bytes`
      - : Die Größe des Speichers, die dieser Eintrag beschreibt.
    - `attribution`
      - : Ein {{jsxref("Array")}} von Containerelementen der JavaScript-Reiche, die den Speicher verwenden. Dieses Objekt hat die folgenden Eigenschaften:
        - `url`
          - : Wenn diese Zuordnung einem JavaScript-Reich gleichem Ursprungs entspricht, enthält diese Eigenschaft die URL des Reiches. Andernfalls ist es der String "cross-origin-url".
        - `container`
          - : Ein Objekt, das das DOM-Element beschreibt, das dieses JavaScript-Reich enthält. Dieses Objekt hat die folgenden Eigenschaften:
            - `id`
              - : Das `id`-Attribut des Containerelements.
            - `src`
              - : Das `src`-Attribut des Containerelements. Wenn das Containerelement ein {{HTMLElement("object")}}-Element ist, enthält dieses Feld den Wert des `data`-Attributs.
        - `scope`
          - : Ein String, der den Typ des JavaScript-Reiches gleichen Ursprungs beschreibt. Entweder `"Window"`, `"DedicatedWorkerGlobalScope"`, `"SharedWorkerGlobalScope"`, `"ServiceWorkerGlobalScope"` oder `"cross-origin-aggregated"` für den Cross-Origin-Fall.
    - `types`
      - : Ein Array von implementationsdefinierten Speicherarten, die dem Speicher zugeordnet sind.

Ein Beispiel für einen Rückgabewert sieht folgendermaßen aus:

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
  - : Wird ausgelöst, wenn die Sicherheitsanforderungen zur Verhinderung von Cross-Origin-Informationslecks nicht erfüllt sind.

## Sicherheitsanforderungen

Ihre Seite muss sich in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) befinden.

Zwei Header müssen gesetzt werden, um Ihre Seite Cross-Origin abzugrenzen:

- [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) mit `same-origin` als Wert (schützt Ihren Ursprung vor Angreifern)
- [`Cross-Origin-Embedder-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) mit `require-corp` oder `credentialless` als Wert (schützt Opfer vor Ihrem Ursprung)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Um zu überprüfen, ob die Cross-Origin-Isolation erfolgreich war, können Sie die [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated)-Eigenschaft oder die [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated)-Eigenschaft testen, die in Fenstern und Worker-Kontexten verfügbar ist:

```js
if (crossOriginIsolated) {
  // Use measureUserAgentSpecificMemory
}
```

## Beispiele

### Überwachung der Speichernutzung

Der folgende Code zeigt, wie die `measureUserAgentSpecificMemory()`-Methode einmal alle fünf Minuten in einem zufälligen Intervall mithilfe der [Exponentialverteilung](https://en.wikipedia.org/wiki/Exponential_distribution#Random_variate_generation) aufgerufen wird.

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
