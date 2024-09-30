---
title: "SharedWorker: SharedWorker() Konstruktor"
short-title: SharedWorker()
slug: Web/API/SharedWorker/SharedWorker
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{APIRef("Web Workers API")}}

Der **`SharedWorker()`** Konstruktor erstellt ein [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekt, das das Skript an der angegebenen URL ausführt. Dieses Skript muss der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) gehorchen.

> [!NOTE]
> Es gibt Meinungsverschiedenheiten zwischen Browser-Herstellern darüber, ob eine Daten-URL von derselben Herkunft ist oder nicht. Obwohl Firefox 10.0 und später Daten-URLs akzeptieren, ist dies nicht bei allen anderen Browsern der Fall.

## Syntax

```js-nolint
new SharedWorker(aURL)
new SharedWorker(aURL, name)
new SharedWorker(aURL, options)
```

### Parameter

- `aURL`
  - : Ein String, der die URL des Skripts darstellt, das der Worker ausführen wird. Es muss der Same-Origin-Policy gehorchen.
- `name` {{optional_inline}}
  - : Ein String, der einen identifizierenden Namen für die [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) angibt, welche den Geltungsbereich des Workers repräsentiert. Dies ist nützlich für die Erstellung neuer Instanzen desselben SharedWorkers und für das Debuggen.
- `options` {{optional_inline}}

  - : Ein Objekt, das Options-Eigenschaften enthält, die beim Erstellen der Objektinstanz gesetzt werden können. Verfügbare Eigenschaften sind wie folgt:

    - `type`
      - : Ein String, der den Typ des zu erstellenden Workers angibt. Der Wert kann `classic` oder `module` sein. Wenn nicht angegeben, wird standardmäßig `classic` verwendet.
    - `credentials`
      - : Ein String, der die Art der zu verwendenden Anmeldeinformationen für den Worker angibt. Der Wert kann `omit`, `same-origin` oder `include` sein. Wenn nicht angegeben oder wenn der Typ `classic` ist, wird standardmäßig `omit` (keine Anmeldeinformationen erforderlich) verwendet.
    - `name`
      - : Ein String, der einen identifizierenden Namen für die [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) angibt, welche den Geltungsbereich des Workers repräsentiert, was hauptsächlich für Debugging-Zwecke nützlich ist.
    - `sameSiteCookies`
      - : Ein String, der angibt, welche [`SameSite` Cookies](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) dem Worker zur Verfügung stehen sollen. Kann einen der folgenden zwei Werte haben:
        - 'all'
          - : `SameSite=Strict`, `SameSite=Lax` und `SameSite=None` Cookies werden alle dem Worker zur Verfügung stehen. Diese Option wird nur in Erstparteikontexten unterstützt und ist die Standardeinstellung in Erstparteikontexten.
        - 'none'
          - : Nur `SameSite=None` Cookies werden dem Worker zur Verfügung stehen. Diese Option wird in Erstparteikontexten und Drittparteikontexten unterstützt und ist die Standardeinstellung in Drittparteikontexten.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht berechtigt ist, Worker zu starten, z.B. wenn die URL eine ungültige Syntax hat oder wenn die Same-Origin-Policy verletzt wird, oder wenn der `sameSiteCookies`-Wert im gegebenen Kontext nicht unterstützt wird.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der MIME-Typ des Workerskripts falsch ist. Es sollte _immer_ `text/javascript` sein (aus historischen Gründen können [andere JavaScript MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript) akzeptiert werden).
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `aURL` nicht geparst werden kann.

## Beispiele

Der folgende Codeabschnitt zeigt die Erstellung eines [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekts mit dem `SharedWorker()` Konstruktor und die anschließende Verwendung des Objekts:

```js
const myWorker = new SharedWorker("worker.js");

myWorker.port.start();

first.onchange = () => {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

second.onchange = () => {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

myWorker.port.onmessage = (e) => {
  result1.textContent = e.data;
  console.log("Message received from worker");
};
```

Für ein vollständiges Beispiel, siehe unser [Grundlegendes SharedWorker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/).)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`SharedWorker`](/de/docs/Web/API/SharedWorker) Interface, zu dem es gehört.
