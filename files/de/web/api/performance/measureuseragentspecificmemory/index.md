---
title: "Performance: measureUserAgentSpecificMemory()-Methode"
short-title: measureUserAgentSpecificMemory()
slug: Web/API/Performance/measureUserAgentSpecificMemory
l10n:
  sourceCommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{APIRef("Performance API")}} {{SeeCompatTable}}

Die **`measureUserAgentSpecificMemory()`**-Methode wird verwendet, um den Speicherverbrauch einer Webanwendung, einschließlich all ihrer iframes und Worker, abzuschätzen.

## Beschreibung

Der Browser weist beim Erstellen von Objekten automatisch Speicher zu und gibt ihn frei, wenn sie nicht mehr erreichbar sind (Garbage Collection). Diese Garbage Collection (GC) ist eine Annäherung, da das allgemeine Problem, festzustellen, ob ein bestimmter Speicherblock noch benötigt wird, unmöglich ist (siehe auch [JavaScript-Speicherverwaltung](/de/docs/Web/JavaScript/Memory_management)). Entwickler müssen sicherstellen, dass Objekte gesammelt, Speicher nicht verloren geht und der Speicherverbrauch im Laufe der Zeit nicht unnötig anwächst, was zu langsamen und nicht reagierenden Webanwendungen führen kann. Speicherlecks werden typischerweise durch das Vergessen, einen Event-Listener zu deregistrieren, das Nichtschließen eines Workers, das Ansammeln von Objekten in Arrays und mehr eingeführt.

Die `measureUserAgentSpecificMemory()`-API aggregiert Speicherverbrauchsdaten, um Ihnen bei der Suche nach Speicherlecks zu helfen. Sie kann zum Erkennen von Speicherregressionen oder für A/B-Tests von Funktionen verwendet werden, um deren Speicherwirkung zu evaluieren. Anstatt einmalige Aufrufe dieser Methode zu machen, ist es besser, periodische Aufrufe zu tätigen, um zu verfolgen, wie sich der Speicherverbrauch im Laufe einer Sitzung ändert.

Die `byte`-Werte, die diese API zurückgibt, sind nicht vergleichbar zwischen verschiedenen Browsern oder verschiedenen Versionen desselben Browsers, da diese stark implementierungsabhängig sind. Auch wie die `breakdown`- und `attribution`-Arrays bereitgestellt werden, liegt im Ermessen des Browsers. Es ist am besten, keine Annahmen über diese Daten zu kodieren. Diese API soll stattdessen periodisch (mit einem zufälligen Intervall) aufgerufen werden, um Daten zu aggregieren und die Unterschiede zwischen den Stichproben zu analysieren.

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
  - : Ein {{jsxref("Array")}} von Objekten, das die Gesamtmenge an `bytes` aufteilt und Zuordnungs- und Typinformationen bereitstellt. Das Objekt enthält die folgenden Eigenschaften:
    - `bytes`
      - : Die Größe des Speichers, den dieser Eintrag beschreibt.
    - `attribution`
      - : Ein {{jsxref("Array")}} von Containerelementen der JavaScript-Bereiche, die den Speicher verwenden. Dieses Objekt hat die folgenden Eigenschaften:
        - `url`
          - : Wenn diese Zuordnung zu einem ursprungsgleichen JavaScript-Bereich gehört, enthält diese Eigenschaft die URL des Bereichs. Andernfalls ist es der String "cross-origin-url".
        - `container`
          - : Ein Objekt, das das DOM-Element beschreibt, das diesen JavaScript-Bereich enthält. Dieses Objekt hat die folgenden Eigenschaften:
            - `id`
              - : Das `id`-Attribut des Containerelements.
            - `src`
              - : Das `src`-Attribut des Containerelements. Wenn das Containerelement ein {{HTMLElement("object")}}-Element ist, enthält dieses Feld den Wert des `data`-Attributs.
        - `scope`
          - : Ein String, der den Typ des ursprungsgleichen JavaScript-Bereichs beschreibt. Entweder `"Window"`, `"DedicatedWorkerGlobalScope"`, `"SharedWorkerGlobalScope"`, `"ServiceWorkerGlobalScope"` oder `"cross-origin-aggregated"` für den Fall des Cross-Origin.
    - `types`
      - : Ein Array von implementierungsdefinierten Speichertypen, die mit dem Speicher verbunden sind.

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
  - : Wird ausgelöst, wenn die Sicherheitsanforderungen zum Verhindern von Cross-Origin-Informationsverlusten nicht erfüllt sind.

## Sicherheitsanforderungen

Ihre Seite muss sich in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) befinden.

Zwei Header müssen gesetzt werden, um Ihre Seite isoliert zu betreiben:

- [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) mit `same-origin` als Wert (schützt Ihren Ursprung vor Angreifern)
- [`Cross-Origin-Embedder-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) mit `require-corp` oder `credentialless` als Wert (schützt Opfer vor Ihrem Ursprung)

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Um zu überprüfen, ob die Cross-Origin-Isolation erfolgreich war, können Sie die Eigenschaft [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) oder die Eigenschaft [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) in Fenster- und Worker-Kontexten testen:

```js
if (crossOriginIsolated) {
  // Use measureUserAgentSpecificMemory
}
```

## Beispiele

### Überwachung des Speicherverbrauchs

Der folgende Code zeigt, wie die `measureUserAgentSpecificMemory()`-Methode alle fünf Minuten mit einem zufälligen Intervall unter Verwendung der [Exponentialverteilung](https://de.wikipedia.org/wiki/Exponentialverteilung#Zufallsvariatengeneration) aufgerufen wird.

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
