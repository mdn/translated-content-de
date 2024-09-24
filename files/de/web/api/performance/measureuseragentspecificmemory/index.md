---
title: "Leistung: measureUserAgentSpecificMemory()-Methode"
short-title: measureUserAgentSpecificMemory()
slug: Web/API/Performance/measureUserAgentSpecificMemory
l10n:
  sourceCommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{APIRef("Performance API")}} {{SeeCompatTable}}

Die Methode **`measureUserAgentSpecificMemory()`** wird verwendet, um den Speicherverbrauch einer Webanwendung, einschließlich aller eingebetteten Iframes und Worker, zu schätzen.

## Beschreibung

Der Browser weist automatisch Speicher zu, wenn Objekte erstellt werden, und gibt ihn frei, wenn sie nicht mehr erreichbar sind (Garbage Collection). Diese Garbage Collection (GC) ist eine Annäherung, da das generelle Problem der Bestimmung, ob ein spezifisches Speicherstück noch benötigt wird, unmöglich ist (siehe auch [JavaScript Memory Management](/de/docs/Web/JavaScript/Memory_management)). Entwickler müssen sicherstellen, dass Objekte durch die Garbage Collection bereinigt werden, kein Speicher verloren geht und der Speicherverbrauch nicht unnötig im Laufe der Zeit wächst, was zu langsamen und nicht reagierenden Webanwendungen führen kann. Speicherlecks werden typischerweise dadurch eingeführt, dass ein Event-Listener nicht abgemeldet, ein Worker nicht geschlossen oder Objekte in Arrays angesammelt werden und mehr.

Die API `measureUserAgentSpecificMemory()` aggregiert Speichernutzungsdaten, um Ihnen bei der Erkennung von Speicherlecks zu helfen. Sie kann für die Erkennung von Speicherregressionen oder für A/B-Tests von Funktionen verwendet werden, um deren Speichereffekte zu bewerten. Anstatt einzelne Aufrufe dieser Methode vorzunehmen, ist es besser, regelmäßige Aufrufe zu machen, um zu verfolgen, wie sich der Speicherverbrauch während der Dauer einer Sitzung ändert.

Die von dieser API zurückgegebenen `byte`-Werte sind zwischen Browsern oder zwischen verschiedenen Versionen desselben Browsers nicht vergleichbar, da sie stark implementierungsabhängig sind. Auch wie `breakdown`- und `attribution`-Arrays bereitgestellt werden, liegt ebenfalls im Ermessen des Browsers. Es ist am besten, keine Annahmen bezüglich dieser Daten fest zu kodieren. Diese API soll vielmehr periodisch (mit einem randomisierten Intervall) aufgerufen werden, um Daten zu aggregieren und die Unterschiede zwischen den Samples zu analysieren.

## Syntax

```js-nolint
measureUserAgentSpecificMemory()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem Objekt aufgelöst wird, das folgende Eigenschaften enthält:

- `bytes`
  - : Eine Zahl, die den gesamten Speicherverbrauch darstellt.
- `breakdown`
  - : Ein {{jsxref("Array")}} von Objekten, das die gesamten `bytes` partitioniert und Zuordnungs- und Typinformationen bereitstellt. Das Objekt enthält die folgenden Eigenschaften:
    - `bytes`
      - : Die Größe des Speichers, die dieser Eintrag beschreibt.
    - `attribution`
      - : Ein {{jsxref("Array")}} von Containerelementen der JavaScript-Reiche, die den Speicher verwenden. Dieses Objekt hat die folgenden Eigenschaften:
        - `url`
          - : Wenn diese Zuordnung einem gleichartigen JavaScript-Reich entspricht, enthält diese Eigenschaft die URL des Reiches. Andernfalls ist es der String "cross-origin-url".
        - `container`
          - : Ein Objekt, das das DOM-Element beschreibt, das dieses JavaScript-Reich enthält. Dieses Objekt hat die folgenden Eigenschaften:
            - `id`
              - : Das `id`-Attribut des Containerelements.
            - `src`
              - : Das `src`-Attribut des Containerelements. Wenn das Containerelement ein {{HTMLElement("object")}}-Element ist, enthält dieses Feld den Wert des `data`-Attributs.
        - `scope`
          - : Ein String, der den Typ des gleichartigen JavaScript-Reiches beschreibt. Entweder `"Window"`, `"DedicatedWorkerGlobalScope"`, `"SharedWorkerGlobalScope"`, `"ServiceWorkerGlobalScope"` oder `"cross-origin-aggregated"` für den fallübergreifenden Fall.
    - `types`
      - : Ein Array von Implementierungs-definierten Speicherarten, die dem Speicher zugeordnet sind.

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

- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Sicherheitsanforderungen zur Verhinderung von Cross-Origin-Informationslecks nicht erfüllt sind.

## Sicherheitsanforderungen

Ihre Website muss sich in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) befinden.

Zwei Header müssen gesetzt werden, um Ihre Website von Cross-Origin zu isolieren:

- [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) mit `same-origin` als Wert (schützt Ihre Herkunft vor Angreifern)
- [`Cross-Origin-Embedder-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) mit `require-corp` oder `credentialless` als Wert (schützt Opfer vor Ihrer Herkunft)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Um zu überprüfen, ob die Cross-Origin-Isolation erfolgreich war, können Sie die {{domxref("Window.crossOriginIsolated")}}-Eigenschaft oder die {{domxref("WorkerGlobalScope.crossOriginIsolated")}}-Eigenschaft, die in Fenster- und Worker-Kontexten verfügbar ist, testen:

```js
if (crossOriginIsolated) {
  // Verwenden Sie measureUserAgentSpecificMemory
}
```

## Beispiele

### Überwachung der Speichernutzung

Der folgende Code zeigt, wie die Methode `measureUserAgentSpecificMemory()` einmal alle fünf Minuten zu einem zufälligen Intervall aufgerufen wird, unter Verwendung der [Exponentialverteilung](https://en.wikipedia.org/wiki/Exponential_distribution#Random_variate_generation).

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

- {{domxref("setTimeout()")}}
- [Überwachen Sie den gesamten Speicherverbrauch Ihrer Webseite mit measureUserAgentSpecificMemory() - web.dev](https://web.dev/articles/monitor-total-page-memory-usage)
