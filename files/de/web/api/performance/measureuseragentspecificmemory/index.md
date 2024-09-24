---
title: "Performance: measureUserAgentSpecificMemory()-Methode"
short-title: measureUserAgentSpecificMemory()
slug: Web/API/Performance/measureUserAgentSpecificMemory
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef("Performance API")}} {{SeeCompatTable}}

Die **`measureUserAgentSpecificMemory()`**-Methode wird verwendet, um die Speichernutzung einer Webanwendung, einschließlich all ihrer iframes und Worker, zu schätzen.

## Beschreibung

Der Browser weist automatisch Speicher zu, wenn Objekte erstellt werden, und gibt ihn frei, wenn sie nicht mehr erreichbar sind (Garbage Collection). Diese Garbage Collection (GC) ist eine Annäherung, da das allgemeine Problem, festzustellen, ob ein bestimmter Speicherplatz noch benötigt wird, unmöglich ist (siehe auch [JavaScript-Speicherverwaltung](/de/docs/Web/JavaScript/Memory_management)). Entwickler müssen sicherstellen, dass Objekte der Garbage Collection unterliegen, kein Speicher verlustig geht und die Speichernutzung im Laufe der Zeit nicht unnötig wächst, was zu langsamen und nicht reagierenden Webanwendungen führt. Speicherlecks entstehen typischerweise dadurch, dass das Abmelden eines Ereignislisteners vergessen wird, ein Worker nicht geschlossen wird, Objekte in Arrays angehäuft werden und mehr.

Die `measureUserAgentSpecificMemory()`-API aggregiert Speichernutzungsdaten, um Ihnen zu helfen, Speicherlecks zu finden. Sie kann zur Erkennung von Speicherregressionen oder für A/B-Tests von Funktionen verwendet werden, um deren Speichereinfluss zu bewerten. Anstatt einzelne Aufrufe dieser Methode zu machen, ist es besser, periodische Aufrufe zu machen, um zu verfolgen, wie sich die Speichernutzung im Verlauf einer Sitzung ändert.

Die `byte`-Werte, die diese API zurückgibt, sind zwischen Browsern oder zwischen verschiedenen Versionen desselben Browsers nicht vergleichbar, da sie stark von der Implementierung abhängen. Auch wie die `breakdown`- und `attribution`-Arrays bereitgestellt werden, hängt ebenfalls vom Browser ab. Es ist am besten, keine Annahmen über diese Daten hart zu kodieren. Diese API soll vielmehr periodisch (mit einem zufälligen Intervall) aufgerufen werden, um Daten zu aggregieren und die Unterschiede zwischen den Proben zu analysieren.

## Syntax

```js-nolint
measureUserAgentSpecificMemory()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ein Objekt auflöst, das die folgenden Eigenschaften enthält:

- `bytes`
  - : Eine Zahl, die die gesamte Speichernutzung darstellt.
- `breakdown`
  - : Ein {{jsxref("Array")}} von Objekten, die die gesamten `bytes` aufteilen und Zuweisungs- und Typinformationen bereitstellen. Das Objekt enthält die folgenden Eigenschaften:
    - `bytes`
      - : Die Größe des Speichers, den dieser Eintrag beschreibt.
    - `attribution`
      - : Ein {{jsxref("Array")}} von Containerelementen der JavaScript-Reichen, die den Speicher nutzen. Dieses Objekt hat die folgenden Eigenschaften:
        - `url`
          - : Wenn diese Zuweisung einem gleichherkunftlichen JavaScript-Reich entspricht, enthält diese Eigenschaft die URL des Reichs. Andernfalls ist es die Zeichenkette "cross-origin-url".
        - `container`
          - : Ein Objekt, das das DOM-Element beschreibt, das dieses JavaScript-Reich enthält. Dieses Objekt hat die folgenden Eigenschaften:
            - `id`
              - : Das `id`-Attribut des Containerelements.
            - `src`
              - : Das `src`-Attribut des Containerelements. Wenn das Containerelement ein {{HTMLElement("object")}}-Element ist, enthält dieses Feld den Wert des `data`-Attributs.
        - `scope`
          - : Eine Zeichenkette, die den Typ des gleichherkunftlichen JavaScript-Reichs beschreibt. Entweder `"Window"`, `"DedicatedWorkerGlobalScope"`, `"SharedWorkerGlobalScope"`, `"ServiceWorkerGlobalScope"` oder `"cross-origin-aggregated"` für den Fall der ursprungsübergreifenden Aggregation.
    - `types`
      - : Ein Array von implementierungsdefinierten Speichertypen, die mit dem Speicher verknüpft sind.

Ein Beispielrückgabewert sieht folgendermaßen aus:

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
  - : Wird ausgelöst, wenn die Sicherheitsanforderungen zum Verhindern von ursprungsübergreifenden Informationslecks nicht erfüllt sind.

## Sicherheitsanforderungen

Ihre Seite muss sich in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) befinden.

Zwei Header müssen gesetzt werden, um Ihre Seite ursprungsübergreifend zu isolieren:

- [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) mit `same-origin` als Wert (schützt Ihren Ursprung vor Angreifern)
- [`Cross-Origin-Embedder-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) mit `require-corp` oder `credentialless` als Wert (schützt Opfer vor Ihrem Ursprung)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Um zu überprüfen, ob die ursprungsübergreifende Isolierung erfolgreich war, können Sie die Eigenschaft [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) oder die Eigenschaft [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) testen, die in Fenster- und Worker-Kontexten verfügbar ist:

```js
if (crossOriginIsolated) {
  // Use measureUserAgentSpecificMemory
}
```

## Beispiele

### Überwachung der Speichernutzung

Der folgende Code zeigt, wie die `measureUserAgentSpecificMemory()`-Methode einmal alle fünf Minuten in einem zufälligen Intervall unter Verwendung der [Exponentialverteilung](https://en.wikipedia.org/wiki/Exponential_distribution#Random_variate_generation) aufgerufen wird.

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
