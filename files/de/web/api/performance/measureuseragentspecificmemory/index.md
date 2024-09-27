---
title: "Performance: measureUserAgentSpecificMemory()-Methode"
short-title: measureUserAgentSpecificMemory()
slug: Web/API/Performance/measureUserAgentSpecificMemory
l10n:
  sourceCommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{APIRef("Performance API")}} {{SeeCompatTable}}

Die **`measureUserAgentSpecificMemory()`**-Methode wird verwendet, um den Speicherverbrauch einer Webanwendung, einschließlich aller ihrer iframes und Worker, zu schätzen.

## Beschreibung

Der Browser weist automatisch Speicher zu, wenn Objekte erstellt werden, und gibt den Speicher frei, wenn sie nicht mehr erreichbar sind (Garbage Collection). Diese Garbage Collection (GC) ist eine Annäherung, da das allgemeine Problem der Bestimmung, ob ein bestimmter Speicher noch benötigt wird oder nicht, unmöglich ist (siehe auch [JavaScript-Speicherverwaltung](/de/docs/Web/JavaScript/Memory_management)). Entwickler müssen sicherstellen, dass Objekte dem Garbage Collector übergeben werden, kein Speicher verloren geht und der Speicherverbrauch nicht unnötig im Laufe der Zeit wächst, was zu langsamen und nicht reagierenden Webanwendungen führen kann. Speicherlecks werden typischerweise durch das Vergessen, einen Event Listener abzumelden, durch das Nicht-Schließen eines Workers, das Ansammeln von Objekten in Arrays und mehr eingeführt.

Die `measureUserAgentSpecificMemory()`-API aggregiert Speicherverbrauchsdaten, um Ihnen zu helfen, Speicherlecks zu finden. Sie kann für den Nachweis von Speicherregressionen oder für A/B-Tests von Funktionen verwendet werden, um deren Speichereinfluss zu bewerten. Statt einzelne Aufrufe dieser Methode zu machen, ist es besser, periodische Aufrufe zu machen, um zu verfolgen, wie sich der Speicherverbrauch im Verlauf einer Sitzung ändert.

Die `byte`-Werte, die diese API zurückgibt, sind nicht zwischen den Browsern oder zwischen verschiedenen Versionen desselben Browsers vergleichbar, da sie stark von der Implementierung abhängig sind. Auch wie die `breakdown`- und `attribution`-Arrays bereitgestellt werden, liegt im Ermessen des Browsers. Es ist am besten, keine Annahmen über diese Daten zu machen. Diese API ist vielmehr dazu gedacht, periodisch (mit einem zufälligen Intervall) aufgerufen zu werden, um Daten zu aggregieren und den Unterschied zwischen den Proben zu analysieren.

## Syntax

```js-nolint
measureUserAgentSpecificMemory()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem Objekt mit folgenden Eigenschaften auflöst:

- `bytes`
  - : Eine Zahl, die den gesamten Speicherverbrauch darstellt.
- `breakdown`
  - : Ein {{jsxref("Array")}} von Objekten, die die gesamten `bytes` partitionieren und Zuordnungs- und Typinformationen bereitstellen. Das Objekt enthält die folgenden Eigenschaften:
    - `bytes`
      - : Die Größe des Speichers, den dieser Eintrag beschreibt.
    - `attribution`
      - : Ein {{jsxref("Array")}} von Containerelementen der JavaScript-Reiche, die den Speicher nutzen. Dieses Objekt hat die folgenden Eigenschaften:
        - `url`
          - : Wenn diese Zuordnung einem JavaScript-Reich mit dem gleichen Ursprung entspricht, enthält diese Eigenschaft die URL des Reichs. Andernfalls ist es der String "cross-origin-url".
        - `container`
          - : Ein Objekt, das das DOM-Element beschreibt, das dieses JavaScript-Reich enthält. Dieses Objekt hat die folgenden Eigenschaften:
            - `id`
              - : Das `id`-Attribut des Containerelements.
            - `src`
              - : Das `src`-Attribut des Containerelements. Wenn das Containerelement ein {{HTMLElement("object")}}-Element ist, enthält dieses Feld den Wert des `data`-Attributs.
        - `scope`
          - : Ein String, der den Typ des JavaScript-Reichs mit dem gleichen Ursprung beschreibt. Entweder `"Window"`, `"DedicatedWorkerGlobalScope"`, `"SharedWorkerGlobalScope"`, `"ServiceWorkerGlobalScope"` oder `"cross-origin-aggregated"` für den Fall mit fremdem Ursprung.
    - `types`
      - : Ein Array von implementierungsdefinierten Speichertypen, die mit dem Speicher verknüpft sind.

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
  - : Wird ausgelöst, wenn die Sicherheitsanforderungen zur Verhinderung von Informationslecks über Ursprünge hinweg nicht erfüllt sind.

## Sicherheitsanforderungen

Ihre Seite muss sich in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) befinden.

Zwei Header müssen gesetzt werden, um Ihre Seite durch Cross-Origin-Kapselung zu isolieren:

- [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) mit `same-origin` als Wert (schützt Ihren Ursprung vor Angreifern)
- [`Cross-Origin-Embedder-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) mit `require-corp` oder `credentialless` als Wert (schützt Opfer vor Ihrem Ursprung)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Um zu prüfen, ob die Cross-Origin-Isolierung erfolgreich war, können Sie gegen die Eigenschaft [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) oder die Eigenschaft [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) testen, die in Fenster- und Worker-Kontexten verfügbar ist:

```js
if (crossOriginIsolated) {
  // Use measureUserAgentSpecificMemory
}
```

## Beispiele

### Überwachen der Speichernutzung

Der folgende Code zeigt, wie man die Methode `measureUserAgentSpecificMemory()` einmal alle fünf Minuten in einem zufälligen Intervall unter Verwendung der [Exponentialverteilung](https://en.wikipedia.org/wiki/Exponential_distribution#Random_variate_generation) aufruft.

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

- [`setTimeout()`](/de/docs/Web/API/SetTimeout)
- [Überwachen Sie den gesamten Speicherverbrauch Ihrer Webseite mit measureUserAgentSpecificMemory() - web.dev](https://web.dev/articles/monitor-total-page-memory-usage)
