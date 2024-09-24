---
title: "Worker: Worker() Konstruktor"
short-title: Worker()
slug: Web/API/Worker/Worker
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Der **`Worker()`**-Konstruktor erstellt ein [`Worker`](/de/docs/Web/API/Worker)-Objekt, das das Skript an der angegebenen URL ausführt. Dieses Skript muss der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) gehorchen.

> [!NOTE]
> Es gibt Meinungsverschiedenheiten unter den Browser-Herstellern darüber, ob eine Daten-URL als gleiche Herkunft angesehen wird oder nicht. Obwohl Firefox ab Version 10 Daten-URLs akzeptiert, ist das nicht in allen anderen Browsern der Fall.

## Syntax

```js-nolint
new Worker(url)
new Worker(url, options)
```

### Parameter

- `url`

  - : Ein String, der die URL des Skripts darstellt, das der Worker ausführen wird. Es muss der Same-Origin-Policy gehorchen. Die URL wird relativ zur Position der aktuellen HTML-Seite aufgelöst.

    > [!NOTE]
    > Bundler, einschließlich [Webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vitejs.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers), empfehlen, URLs zu verwenden, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) an den `Worker()`-Konstruktor übergeben werden. Zum Beispiel:
    >
    > ```js
    > const myWorker = new Worker(new URL("worker.js", import.meta.url));
    > ```
    >
    > Auf diese Weise ist der Pfad relativ zum aktuellen Skript statt zur aktuellen HTML-Seite, was es dem Bundler ermöglicht, sicher Optimierungen wie Umbenennungen vorzunehmen (da andernfalls die `worker.js`-URL auf eine Datei verweisen könnte, die nicht vom Bundler kontrolliert wird, und daher keine Annahmen getroffen werden können).

- `options` {{optional_inline}}

  - : Ein Objekt, das Options-Properties enthält, die bei der Erstellung der Objektinstanz festgelegt werden können. Verfügbare Eigenschaften sind wie folgt:

    - `type`
      - : Ein String, der den Typ des zu erstellenden Workers angibt. Der Wert kann `classic` oder `module` sein. Wenn nicht angegeben, wird standardmäßig `classic` verwendet.
    - `credentials`
      - : Ein String, der den Typ der Anmeldeinformationen angibt, die für den Worker verwendet werden sollen. Der Wert kann `omit`, `same-origin` oder `include` sein. Wenn nicht angegeben oder wenn der Typ `classic` ist, wird standardmäßig `same-origin` verwendet (Anmeldeinformationen nur für Anfragen mit gleicher Herkunft einbeziehen).
    - `name`
      - : Ein String, der einen identifizierenden Namen für den [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) angibt, der den Bereich des Workers repräsentiert, was hauptsächlich für Debugging-Zwecke nützlich ist.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht berechtigt ist, Workers zu starten, z.B. wenn die URL eine ungültige Syntax hat oder wenn die Same-Origin-Policy verletzt wird.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der MIME-Typ des Worker-Skripts falsch ist. Er _sollte_ immer `text/javascript` sein (aus historischen Gründen können [andere JavaScript MIME-Typen](/de/docs/Web/HTTP/MIME_types#legacy_javascript_mime_types) akzeptiert werden).
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn _aURL_ nicht geparst werden kann.

## Beispiele

Der folgende Code-Schnipsel zeigt die Erstellung eines [`Worker`](/de/docs/Web/API/Worker)-Objekts mit dem `Worker()`-Konstruktor und die nachfolgende Verwendung des Objekts:

```js
const myWorker = new Worker("worker.js");
const first = document.querySelector("input#number1");

first.onchange = () => {
  myWorker.postMessage(first.value);
  console.log("Message posted to worker");
};
```

Ein vollständiges Beispiel finden Sie in unserem [Grundlegendes Beispiel eines dedizierten Workers](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Das [`Worker`](/de/docs/Web/API/Worker)-Interface, zu dem es gehört.
