---
title: "Performance: measureUserAgentSpecificMemory() Methode"
short-title: measureUserAgentSpecificMemory()
slug: Web/API/Performance/measureUserAgentSpecificMemory
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`measureUserAgentSpecificMemory()`** Methode wird verwendet, um die Speichernutzung einer Webanwendung einschließlich aller ihrer Iframes und Worker abzuschätzen.

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
  - : Ein {{jsxref("Array")}} von Objekten, die die gesamten `bytes` aufteilen und Zugehörigkeits- und Typinformationen bereitstellen. Das Objekt enthält die folgenden Eigenschaften:
    - `bytes`
      - : Die Größe des Speichers, die dieser Eintrag beschreibt.
    - `attribution`
      - : Ein {{jsxref("Array")}} von Containerelementen der JavaScript-Bereiche, die den Speicher verwenden. Dieses Objekt hat die folgenden Eigenschaften:
        - `url`
          - : Wenn diese Zuordnung einem Same-Origin-JavaScript-Bereich entspricht, enthält diese Eigenschaft die URL des Bereichs. Andernfalls ist es der String "cross-origin-url".
        - `container`
          - : Ein Objekt, das das DOM-Element beschreibt, das diesen JavaScript-Bereich enthält. Dieses Objekt hat die folgenden Eigenschaften:
            - `id`
              - : Das `id`-Attribut des Containerelements.
            - `src`
              - : Das `src`-Attribut des Containerelements. Wenn das Containerelement ein {{HTMLElement("object")}} Element ist, enthält dieses Feld den Wert des `data`-Attributs.
        - `scope`
          - : Ein String, der den Typ des Same-Origin-JavaScript-Bereichs beschreibt. Entweder `"Window"`, `"DedicatedWorkerGlobalScope"`, `"SharedWorkerGlobalScope"`, `"ServiceWorkerGlobalScope"` oder `"cross-origin-aggregated"` für den Cross-Origin-Fall.
    - `types`
      - : Ein Array von implementierungsdefinierten Speichertypen, die dem Speicher zugeordnet sind.

Ein Beispiel für einen Rückgabewert sieht so aus:

```json
{
  "bytes": 1500000,
  "breakdown": [
    {
      "bytes": 1000000,
      "attribution": [
        {
          "url": "https://example.com",
          "scope": "Window"
        }
      ],
      "types": ["DOM", "JS"]
    },
    {
      "bytes": 0,
      "attribution": [],
      "types": []
    },
    {
      "bytes": 500000,
      "attribution": [
        {
          "url": "https://example.com/iframe.html",
          "container": {
            "id": "example-id",
            "src": "redirect.html?target=iframe.html"
          },
          "scope": "Window"
        }
      ],
      "types": ["JS", "DOM"]
    }
  ]
}
```

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [Sicherheitsanforderungen](#sicherheitsanforderungen) zur Verhinderung von Cross-Origin-Informationslecks nicht erfüllt sind.

## Beschreibung

Der Browser weist automatisch Speicher zu, wenn Objekte erstellt werden, und gibt ihn frei, wenn sie nicht mehr erreichbar sind (Garbage Collection). Diese Garbage Collection (GC) ist eine Annäherung, da das allgemeine Problem der Bestimmung, ob ein bestimmtes Speicherstück noch benötigt wird, unmöglich ist (siehe auch [JavaScript Memory Management](/de/docs/Web/JavaScript/Guide/Memory_management)). Entwickler müssen sicherstellen, dass Objekte gesammelt werden, das Speichervolumen nicht unnötig wächst und dadurch langsame und nicht reaktionsfähige Webanwendungen entstehen. Speicherlecks werden typischerweise eingeführt, indem vergessen wird, einen Ereignis-Listener abzumelden, einen Worker nicht geschlossen wird, Objekte in Arrays angesammelt werden und mehr.

Die `measureUserAgentSpecificMemory()` API aggregiert Speichernutzungsdaten, um Ihnen bei der Suche nach Speicherlecks zu helfen. Sie kann zur Erkennung von Speicherregressionen oder für A/B-Tests von Funktionen verwendet werden, um ihre Auswirkungen auf den Speicher zu bewerten. Anstatt einzelne Aufrufe dieser Methode zu tätigen, ist es besser, periodische Aufrufe zu machen, um zu verfolgen, wie sich die Speichernutzung über die Dauer einer Sitzung ändert.

Die `byte` Werte, die diese API zurückgibt, sind nicht über Browser oder zwischen verschiedenen Versionen desselben Browsers vergleichbar, da sie stark von der Implementierung abhängen. Auch wie `breakdown` und `attribution` Arrays bereitgestellt werden, liegt ebenfalls im Ermessen des Browsers. Es ist am besten, keine Annahmen über diese Daten fest zu kodieren. Diese API soll vielmehr periodisch (mit einem zufälligen Intervall) aufgerufen werden, um Daten zu aggregieren und die Unterschiede zwischen den Stichproben zu analysieren.

## Sicherheitsanforderungen

Um diese Methode zu verwenden, muss Ihr Dokument in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) und [cross-origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) sein.

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu überprüfen, ob das Dokument cross-origin isoliert ist:

```js
if (crossOriginIsolated) {
  // Use measureUserAgentSpecificMemory
}
```

## Beispiele

### Überwachung der Speichernutzung

Der folgende Code zeigt, wie die `measureUserAgentSpecificMemory()` Methode alle fünf Minuten zu einem zufälligen Intervall mittels [Exponentialverteilung](https://en.wikipedia.org/wiki/Exponential_distribution#Random_variate_generation) aufgerufen wird.

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
