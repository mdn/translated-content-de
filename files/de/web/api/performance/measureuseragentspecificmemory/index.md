---
title: "Leistung: `measureUserAgentSpecificMemory()` Methode"
short-title: measureUserAgentSpecificMemory()
slug: Web/API/Performance/measureUserAgentSpecificMemory
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`measureUserAgentSpecificMemory()`**-Methode wird verwendet, um den Speicherverbrauch einer Webanwendung einschließlich aller ihrer iframes und Worker abzuschätzen.

## Syntax

```js-nolint
measureUserAgentSpecificMemory()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf ein Objekt aufgelöst wird, das die folgenden Eigenschaften enthält:

- `bytes`
  - : Eine Zahl, die den gesamten Speicherverbrauch darstellt.
- `breakdown`
  - : Ein {{jsxref("Array")}} von Objekten, die die gesamten `bytes` unterteilen und Zuordnungs- sowie Typinformationen bereitstellen. Das Objekt enthält die folgenden Eigenschaften:
    - `bytes`
      - : Die Größe des Speichers, den dieser Eintrag beschreibt.
    - `attribution`
      - : Ein {{jsxref("Array")}} von Containerelementen der JavaScript-Bereiche, die den Speicher verwenden. Dieses Objekt hat die folgenden Eigenschaften:
        - `url`
          - : Wenn diese Zuordnung einem JavaScript-Bereich mit gleicher Herkunft entspricht, enthält diese Eigenschaft die URL des Bereichs. Andernfalls ist es der String "cross-origin-url".
        - `container`
          - : Ein Objekt, das das DOM-Element beschreibt, das diesen JavaScript-Bereich enthält. Dieses Objekt hat die folgenden Eigenschaften:
            - `id`
              - : Das `id`-Attribut des Containerelements.
            - `src`
              - : Das `src`-Attribut des Containerelements. Wenn das Containerelement ein {{HTMLElement("object")}}-Element ist, enthält dieses Feld den Wert des `data`-Attributes.
        - `scope`
          - : Ein String, der den Typ des gleichen Ursprungs-JavaScript-Bereichs beschreibt. Entweder `"Window"`, `"DedicatedWorkerGlobalScope"`, `"SharedWorkerGlobalScope"`, `"ServiceWorkerGlobalScope"` oder `"cross-origin-aggregated"` für den Fall einer fremden Herkunft.
    - `types`
      - : Ein Array von implementationsdefinierten Speichertypen, die mit dem Speicher assoziiert sind.

Ein Beispiel für einen Rückgabewert sieht folgendermaßen aus:

```json
{
  "bytes": 1500000,
  "breakdown": [
    {
      "bytes": 1000000,
      "attribution": [
        {
          "url": "https://example.com",
          "scope": "Window",
        },
      ],
      "types": ["DOM", "JS"],
    },
    {
      "bytes": 0,
      "attribution": [],
      "types": [],
    },
    {
      "bytes": 500000,
      "attribution": [
        {
          "url": "https://example.com/iframe.html"
          "container": {
            "id": "example-id",
            "src": "redirect.html?target=iframe.html",
          },
          "scope": "Window",
        }
      ],
      "types": ["JS", "DOM"],
    },
  ],
}
```

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [Sicherheitsanforderungen](#sicherheitsanforderungen) zur Verhinderung von cross-origin Informationslecks nicht erfüllt sind.

## Beschreibung

Der Browser weist automatisch Speicher zu, wenn Objekte erstellt werden, und gibt ihn frei, wenn sie nicht mehr erreichbar sind (Garbage Collection). Diese Garbage Collection (GC) ist eine Annäherung, da das allgemeine Problem, zu bestimmen, ob ein bestimmtes Stück Speicher noch benötigt wird, unmöglich ist (siehe auch [JavaScript-Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management)). Entwickler müssen sicherstellen, dass Objekte gesammelt werden, der Speicher nicht ausläuft und der Speicherverbrauch nicht unnötig über die Zeit wächst, was zu langsamen und nicht reaktionsfähigen Webanwendungen führt. Speicherlecks entstehen typischerweise dadurch, dass ein Event-Listener nicht abgemeldet, ein Worker nicht geschlossen oder Objekte in Arrays angehäuft werden und mehr.

Die `measureUserAgentSpecificMemory()`-API aggregiert Speicherverbrauchsdaten, um Ihnen zu helfen, Speicherlecks zu finden. Sie kann zur Erkennung von Speicherregressionen oder für A/B-Testings von Funktionen verwendet werden, um deren Speicherauswirkung zu bewerten. Es ist besser, periodische Aufrufe dieser Methode zu machen, um die Veränderung des Speicherverbrauchs während einer Sitzung zu verfolgen, anstatt einmalige Aufrufe zu tätigen.

Die `byte`-Werte, die diese API zurückgibt, sind nicht über Browser hinweg oder zwischen verschiedenen Versionen desselben Browsers vergleichbar, da diese stark von der Implementierung abhängen. Auch wie die `breakdown`- und `attribution`-Arrays bereitgestellt werden, bleibt dem Browser überlassen. Es ist am besten, keine festen Annahmen über diese Daten zu treffen. Diese API soll vielmehr regelmäßig (mit einem zufälligen Intervall) aufgerufen werden, um Daten zu aggregieren und die Unterschiede zwischen den Stichproben zu analysieren.

## Sicherheitsanforderungen

Um diese Methode zu verwenden, muss Ihr Dokument in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) und [cross-origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) sein.

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu prüfen, ob das Dokument cross-origin isoliert ist:

```js
if (crossOriginIsolated) {
  // Use measureUserAgentSpecificMemory
}
```

## Beispiele

### Überwachung des Speicherverbrauchs

Der folgende Code zeigt, wie man die `measureUserAgentSpecificMemory()`-Methode einmal alle fünf Minuten in einem zufälligen Intervall mit der [Exponentialverteilung](https://en.wikipedia.org/wiki/Exponential_distribution#Random_variate_generation) aufruft.

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
- [Überwachen Sie den gesamten Speicherverbrauch Ihrer Webseite mit measureUserAgentSpecificMemory() - web.dev](https://web.dev/articles/monitor-total-page-memory-usage)
