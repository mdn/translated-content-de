---
title: "Worker: Worker() Konstruktor"
short-title: Worker()
slug: Web/API/Worker/Worker
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Der **`Worker()`** Konstruktor erstellt ein [`Worker`](/de/docs/Web/API/Worker) Objekt, das das Skript an der angegebenen URL ausführt. Dieses Skript muss die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) einhalten.

> [!NOTE]
> Es besteht Uneinigkeit unter den Browserherstellern, ob eine Daten-URL als gleiche Origin betrachtet wird oder nicht. Obwohl Firefox 10 und später Daten-URLs akzeptieren, ist dies nicht in allen anderen Browsern der Fall.

## Syntax

```js-nolint
new Worker(url)
new Worker(url, options)
```

### Parameter

- `url`
  - : Ein String, der die URL des Skripts darstellt, das der Worker ausführen wird. Es muss die Same-Origin-Policy befolgen. Die URL wird relativ zum aktuellen Speicherort der HTML-Seite aufgelöst.

    > [!NOTE]
    > Bundler, einschließlich [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers), und [Parcel](https://parceljs.org/languages/javascript/#web-workers), empfehlen, URLs zu übergeben, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) an den `Worker()` Konstruktor sind. Zum Beispiel:
    >
    > ```js
    > const myWorker = new Worker(new URL("worker.js", import.meta.url));
    > ```
    >
    > Auf diese Weise ist der Pfad relativ zum aktuellen Skript statt zur aktuellen HTML-Seite, was es dem Bundler ermöglicht, sicher Optimierungen wie Umbenennungen vorzunehmen (da andernfalls die `worker.js` URL auf eine Datei zeigen könnte, die nicht vom Bundler kontrolliert wird, sodass er keine Annahmen treffen kann).

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen enthält, die bei der Erstellung der Objektinstanz gesetzt werden können. Verfügbare Eigenschaften sind wie folgt:
    - `type`
      - : Ein String, der den Typ des zu erstellenden Workers angibt. Der Wert kann `classic` oder `module` sein. Wenn nicht angegeben, wird standardmäßig `classic` verwendet.
    - `credentials`
      - : Ein String, der den Typ der Anmeldeinformationen angibt, die für den Worker verwendet werden sollen. Der Wert kann `omit`, `same-origin` oder _`include` sein. Wenn nicht angegeben oder wenn der Typ `classic` ist, wird standardmäßig `same-origin` verwendet (nur Anmeldeinformationen für gleichrangige Anfragen einschließen)._
    - `name`
      - : Ein String, der einen identifizierenden Namen für die [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) angibt, der den Umfang des Workers repräsentiert, was hauptsächlich für Debugging-Zwecke nützlich ist.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht berechtigt ist, Worker zu starten, z.B. wenn die URL eine ungültige Syntax hat oder die Same-Origin-Policy verletzt wird.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der MIME-Typ des Worker-Skripts falsch ist. Es _sollte_ immer `text/javascript` sein (aus historischen Gründen können [andere JavaScript MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types#legacy_javascript_mime_types) akzeptiert werden).
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn _eineURL_ nicht geparst werden kann.

## Beispiele

Der folgende Codeausschnitt zeigt die Erstellung eines [`Worker`](/de/docs/Web/API/Worker) Objekts mit dem `Worker()` Konstruktor und die anschließende Verwendung des Objekts:

```js
const myWorker = new Worker("worker.js");
const first = document.querySelector("input#number1");

first.onchange = () => {
  myWorker.postMessage(first.value);
  console.log("Message posted to worker");
};
```

Für ein vollständiges Beispiel siehe unser [Grundlegendes Beispiel für einen dedizierten Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Das [`Worker`](/de/docs/Web/API/Worker) Interface, zu dem es gehört.
