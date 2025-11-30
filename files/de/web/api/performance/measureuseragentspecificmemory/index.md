---
title: "Performance: measureUserAgentSpecificMemory() Methode"
short-title: measureUserAgentSpecificMemory()
slug: Web/API/Performance/measureUserAgentSpecificMemory
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`measureUserAgentSpecificMemory()`**-Methode wird verwendet, um den Speicherverbrauch einer Webanwendung einschließlich aller ihrer Iframes und Worker zu schätzen.

## Syntax

```js-nolint
measureUserAgentSpecificMemory()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein Objekt mit den folgenden Eigenschaften aufgelöst wird:

- `bytes`
  - : Eine Zahl, die den gesamten Speicherverbrauch repräsentiert.
- `breakdown`
  - : Ein {{jsxref("Array")}} von Objekten, das die gesamten `bytes` unterteilt und Zuordnungs- und Typinformationen bereitstellt. Das Objekt enthält die folgenden Eigenschaften:
    - `bytes`
      - : Die Größe des Speichers, den dieser Eintrag beschreibt.
    - `attribution`
      - : Ein {{jsxref("Array")}} von Containerelementen der JavaScript-Reiche, die den Speicher verwenden. Dieses Objekt hat die folgenden Eigenschaften:
        - `url`
          - : Wenn diese Zuordnung einem gleich-origen JavaScript-Reich entspricht, dann enthält diese Eigenschaft die URL des Reichs. Andernfalls ist es der String "cross-origin-url".
        - `container`
          - : Ein Objekt, das das DOM-Element beschreibt, das dieses JavaScript-Reich enthält. Dieses Objekt hat die folgenden Eigenschaften:
            - `id`
              - : Das `id`-Attribut des Containerelements.
            - `src`
              - : Das `src`-Attribut des Containerelements. Wenn das Containerelement ein {{HTMLElement("object")}}-Element ist, dann enthält dieses Feld den Wert des `data`-Attributs.
        - `scope`
          - : Ein String, der den Typ des gleich-origen JavaScript-Reichs beschreibt. Entweder `"Window"`, `"DedicatedWorkerGlobalScope"`, `"SharedWorkerGlobalScope"`, `"ServiceWorkerGlobalScope"` oder `"cross-origin-aggregated"` für den Cross-Origin-Fall.
    - `types`
      - : Ein Array von implementierungsdefinierten Speichertypen, die dem Speicher zugeordnet sind.

Ein Beispiel-Rückgabewert sieht folgendermaßen aus:

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

Der Browser weist automatisch Speicher zu, wenn Objekte erstellt werden, und gibt ihn frei, wenn sie nicht mehr erreichbar sind (Garbage Collection). Diese Garbage Collection (GC) ist eine Näherung, da das allgemeine Problem zu bestimmen, ob ein bestimmter Speicherblock noch benötigt wird, unmöglich ist (siehe auch [JavaScript-Speicherverwaltung](/de/docs/Web/JavaScript/Guide/Memory_management)). Entwickler müssen sicherstellen, dass Objekte gesammelt werden, dass kein Speicherverlust stattfindet und dass der Speicherverbrauch im Laufe der Zeit nicht unnötig wächst, was zu langsamen und nicht reagierenden Webanwendungen führen würde. Speicherlecks werden typischerweise eingeführt, indem vergessen wird, einen Event-Listener zu deregistrieren, einen Worker zu schließen, Objekte in Arrays anzusammeln und mehr.

Die `measureUserAgentSpecificMemory()`-API aggregiert Speicherverbrauchsdaten, um bei der Erkennung von Speicherlecks zu helfen. Sie kann für das Erkennen von Speicherregressionen oder für A/B-Tests von Funktionen verwendet werden, um ihren Speichereinfluss zu bewerten. Anstatt einmalige Aufrufe dieser Methode zu machen, ist es besser, sie regelmäßig aufzurufen, um zu verfolgen, wie sich der Speicherverbrauch im Laufe einer Sitzung ändert.

Die `byte`-Werte, die diese API zurückgibt, sind nicht zwischen verschiedenen Browsern oder zwischen unterschiedlichen Versionen desselben Browsers vergleichbar, da diese stark von der Implementierung abhängen. Auch wie `breakdown` und `attribution` Arrays bereitgestellt werden, obliegt dem Browser. Am besten ist es, keine Annahmen über diese Daten festzucodieren. Diese API soll vielmehr periodisch (mit einem zufälligen Intervall) aufgerufen werden, um Daten zu aggregieren und die Unterschiede zwischen den Stichproben zu analysieren.

## Sicherheitsanforderungen

Um diese Methode zu verwenden, muss Ihr Dokument in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) und [cross-origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) sein.

Sie können die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) verwenden, um zu überprüfen, ob das Dokument cross-origin isoliert ist:

```js
if (crossOriginIsolated) {
  // Use measureUserAgentSpecificMemory
}
```

## Beispiele

### Überwachung des Speicherverbrauchs

Der folgende Code zeigt, wie man die `measureUserAgentSpecificMemory()`-Methode einmal alle fünf Minuten mit einem zufälligen Intervall unter Verwendung der [Exponentialverteilung](https://en.wikipedia.org/wiki/Exponential_distribution#Random_variate_generation) aufruft.

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
- [Überwachen Sie den Gesamtspeicherverbrauch Ihrer Webseite mit measureUserAgentSpecificMemory() - web.dev](https://web.dev/articles/monitor-total-page-memory-usage)
