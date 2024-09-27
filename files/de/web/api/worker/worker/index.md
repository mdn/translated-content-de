---
title: "Worker: Worker() Konstruktor"
short-title: Worker()
slug: Web/API/Worker/Worker
l10n:
  sourceCommit: efddce9305893217de7168b860c492dd3981e88f
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Der **`Worker()`** Konstruktor erstellt ein [`Worker`](/de/docs/Web/API/Worker)-Objekt, das das Skript an der angegebenen URL ausführt. Dieses Skript muss der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) gehorchen.

> [!NOTE]
> Es gibt unter Browserherstellern Uneinigkeiten darüber, ob eine Data-URL die gleiche Herkunft hat oder nicht. Obwohl Firefox ab Version 10 Data-URLs akzeptiert, ist dies bei allen anderen Browsern nicht der Fall.

## Syntax

```js-nolint
new Worker(url)
new Worker(url, options)
```

### Parameter

- `url`

  - : Ein String, der die URL des Skripts darstellt, das der Worker ausführen wird. Es muss der Same-Origin-Policy gehorchen. Die URL wird relativ zum Standort der aktuellen HTML-Seite aufgelöst.

    > [!NOTE]
    > Bundler, einschließlich [Webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vitejs.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers), empfehlen, URLs zu übergeben, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) an den `Worker()`-Konstruktor sind. Zum Beispiel:
    >
    > ```js
    > const myWorker = new Worker(new URL("worker.js", import.meta.url));
    > ```
    >
    > Auf diese Weise ist der Pfad relativ zum aktuellen Skript anstelle der aktuellen HTML-Seite, was dem Bundler ermöglicht, sicher Optimierungen wie Umbenennungen durchzuführen (da sonst die `worker.js`-URL auf eine vom Bundler nicht kontrollierte Datei verweisen könnte, sodass keine Annahmen gemacht werden können).

- `options` {{optional_inline}}

  - : Ein Objekt, das Options-Eigenschaften enthält, die bei der Erstellung der Objektinstanz gesetzt werden können. Verfügbare Eigenschaften sind wie folgt:

    - `type`
      - : Ein String, der den Typ des zu erstellenden Workers spezifiziert. Der Wert kann `classic` oder `module` sein. Wird er nicht angegeben, wird standardmäßig `classic` verwendet.
    - `credentials`
      - : Ein String, der die Art der Anmeldeinformationen für den Worker angibt. Der Wert kann `omit`, `same-origin` oder `include` sein. Wird er nicht angegeben oder falls der Typ `classic` ist, wird standardmäßig `same-origin` verwendet (nur für Same-Origin-Anfragen Anmeldeinformationen einbeziehen).
    - `name`
      - : Ein String, der einen identifizierenden Namen für den [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) angibt, welcher den Bereich des Workers repräsentiert und hauptsächlich zu Debugging-Zwecken nützlich ist.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgegeben, wenn das Dokument keine Worker starten darf, z.B. wenn die URL eine ungültige Syntax aufweist oder die Same-Origin-Policy verletzt wird.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgegeben, wenn der MIME-Typ des Worker-Skripts falsch ist. Er _sollte_ immer `text/javascript` sein (aus historischen Gründen können [andere JavaScript-MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#legacy_javascript_mime_types) akzeptiert werden).
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgegeben, wenn _aURL_ nicht geparst werden kann.

## Beispiele

Der folgende Codeausschnitt zeigt die Erstellung eines [`Worker`](/de/docs/Web/API/Worker)-Objekts mit dem `Worker()`-Konstruktor und die anschließende Nutzung des Objekts:

```js
const myWorker = new Worker("worker.js");
const first = document.querySelector("input#number1");

first.onchange = () => {
  myWorker.postMessage(first.value);
  console.log("Message posted to worker");
};
```

Für ein vollständiges Beispiel siehe unser [Grundlegendes Beispiel für dedizierte Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Das [`Worker`](/de/docs/Web/API/Worker)-Interface, zu dem es gehört.
