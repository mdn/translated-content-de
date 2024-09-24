---
title: "Worker: Worker() Konstruktor"
short-title: Worker()
slug: Web/API/Worker/Worker
l10n:
  sourceCommit: efddce9305893217de7168b860c492dd3981e88f
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Der **`Worker()`** Konstruktor erstellt ein {{domxref("Worker")}}-Objekt, das das Skript an der angegebenen URL ausführt. Dieses Skript muss der [Same-Origin Policy](/de/docs/Web/Security/Same-origin_policy) entsprechen.

> [!NOTE]
> Es gibt eine Uneinigkeit unter den Browserherstellern darüber, ob eine Daten-URL vom gleichen Ursprung ist oder nicht. Obwohl Firefox 10 und später Daten-URLs akzeptieren, ist dies nicht in allen anderen Browsern der Fall.

## Syntax

```js-nolint
new Worker(url)
new Worker(url, options)
```

### Parameter

- `url`

  - : Ein String, der die URL des Skripts darstellt, das der Worker ausführen wird. Es muss der Same-Origin Policy entsprechen. Die URL wird relativ zum aktuellen Standort der HTML-Seite aufgelöst.

    > [!NOTE]
    > Bundler, einschließlich [Webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vitejs.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers), empfehlen, URLs anzugeben, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) zum `Worker()` Konstruktor sind. Zum Beispiel:
    >
    > ```js
    > const myWorker = new Worker(new URL("worker.js", import.meta.url));
    > ```
    >
    > Auf diese Weise ist der Pfad relativ zum aktuellen Skript anstatt zur aktuellen HTML-Seite, was dem Bundler ermöglicht, sicher Optimierungen wie das Umbenennen vorzunehmen (weil ansonsten die `worker.js` URL auf eine Datei zeigen könnte, die nicht vom Bundler kontrolliert wird, sodass er keine Annahmen treffen kann).

- `options` {{optional_inline}}

  - : Ein Objekt, das Eigenschaftsoptionen enthält, die beim Erstellen der Objektinstanz festgelegt werden können. Verfügbare Eigenschaften sind wie folgt:

    - `type`
      - : Ein String, der den Typ des zu erstellenden Workers angibt. Der Wert kann `classic` oder `module` sein. Wenn nicht angegeben, wird standardmäßig `classic` verwendet.
    - `credentials`
      - : Ein String, der den Typ der Anmeldeinformationen angibt, die für den Worker verwendet werden sollen. Der Wert kann `omit`, `same-origin` oder `include` sein. Wenn nicht angegeben oder wenn der Typ `classic` ist, wird standardmäßig `same-origin` verwendet (Anmeldeinformationen nur für gleich-originierte Anfragen einschließen).
    - `name`
      - : Ein String, der einen identifizierenden Namen für das {{domxref("DedicatedWorkerGlobalScope")}} angibt, das den Gültigkeitsbereich des Workers darstellt, was hauptsächlich für Debugging-Zwecke nützlich ist.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Dokument nicht berechtigt ist, Worker zu starten, z. B. wenn die URL eine ungültige Syntax hat oder wenn die Same-Origin Policy verletzt wird.
- `NetworkError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der MIME-Typ des Worker-Skripts nicht korrekt ist. Es _sollte_ immer `text/javascript` sein
    (aus historischen Gründen können [andere JavaScript MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#legacy_javascript_mime_types) akzeptiert werden).
- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn _aURL_ nicht geparst werden kann.

## Beispiele

Der folgende Codeausschnitt zeigt die Erstellung eines {{domxref("Worker")}}-Objekts mithilfe des `Worker()` Konstruktors und die anschließende Nutzung des Objekts:

```js
const myWorker = new Worker("worker.js");
const first = document.querySelector("input#number1");

first.onchange = () => {
  myWorker.postMessage(first.value);
  console.log("Message posted to worker");
};
```

Für ein vollständiges Beispiel siehe unser [Einfaches Beispiel für dedizierte Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

Das {{domxref("Worker")}}-Interface, zu dem es gehört.
