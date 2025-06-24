---
title: "SharedWorker: SharedWorker() Konstruktor"
short-title: SharedWorker()
slug: Web/API/SharedWorker/SharedWorker
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Workers API")}}

Der **`SharedWorker()`** Konstruktor erstellt ein
[`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekt, das das Skript an der angegebenen URL ausführt. Dieses Skript muss die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) befolgen.

> [!NOTE]
> Es gibt Uneinigkeit unter den Browserherstellern darüber, ob eine Daten-URL vom gleichen Ursprung ist oder nicht. Obwohl Firefox 10.0 und später Daten-URLs akzeptiert, ist das nicht in allen anderen Browsern der Fall.

## Syntax

```js-nolint
new SharedWorker(aURL)
new SharedWorker(aURL, name)
new SharedWorker(aURL, options)
```

### Parameter

- `aURL`
  - : Ein String, der die URL des Skripts darstellt, das der Worker ausführen wird. Es muss die Same-Origin-Policy befolgen.
- `name` {{optional_inline}}
  - : Ein String, der einen identifizierenden Namen für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) angibt, der den Geltungsbereich des Workers repräsentiert. Dies ist nützlich zum Erstellen neuer Instanzen desselben SharedWorkers und zum Debuggen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Options-Eigenschaften enthält, die beim Erstellen des Objektinstanz gesetzt werden können. Verfügbare Eigenschaften sind wie folgt:
    - `type`
      - : Ein String, der den Typ des zu erstellenden Workers angibt. Der Wert kann `classic` oder `module` sein. Wenn nicht angegeben, wird standardmäßig `classic` verwendet.
    - `credentials`
      - : Ein String, der die Art der zu verwendenden Anmeldedaten für den Worker angibt. Der Wert kann `omit`, `same-origin` oder `include` sein. Wenn nicht angegeben oder wenn der Typ `classic` ist, wird standardmäßig `omit` (keine Anmeldedaten erforderlich) verwendet.
    - `name`
      - : Ein String, der einen identifizierenden Namen für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) angibt, der den Geltungsbereich des Workers repräsentiert, was hauptsächlich für Debugging-Zwecke nützlich ist.
    - `sameSiteCookies`
      - : Ein String, der angibt, welche [`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) dem Worker zur Verfügung stehen sollen. Kann einen der folgenden beiden Werte haben:
        - 'all'
          - : `SameSite=Strict`, `SameSite=Lax` und `SameSite=None` Cookies stehen dem Worker zur Verfügung. Diese Option wird nur im First-Party-Kontext unterstützt und ist die Standardoption im First-Party-Kontext.
        - 'none'
          - : Nur `SameSite=None` Cookies stehen dem Worker zur Verfügung. Diese Option wird im First-Party- und Third-Party-Kontext unterstützt und ist die Standardoption in Third-Party-Kontexten.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument keine Erlaubnis hat, Workers zu starten, zum Beispiel wenn die URL eine ungültige Syntax hat oder die Same-Origin-Policy verletzt wird, oder wenn der Wert von `sameSiteCookies` im gegebenen Kontext nicht unterstützt wird.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der MIME-Typ des Worker-Skripts falsch ist. Er sollte _immer_ `text/javascript` sein (aus historischen Gründen können [andere JavaScript-MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) akzeptiert werden).
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `aURL` nicht geparst werden kann.

## Beispiele

Der folgende Code-Ausschnitt zeigt die Erstellung eines [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekts mit dem `SharedWorker()` Konstruktor und die anschließende Nutzung des Objekts:

```js
const myWorker = new SharedWorker("worker.js");

myWorker.port.start();

[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.port.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});

myWorker.port.onmessage = (e) => {
  result1.textContent = e.data;
  console.log("Message received from worker");
};
```

Für ein vollständiges Beispiel siehe unser [einfaches Shared Worker Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/).)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`SharedWorker`](/de/docs/Web/API/SharedWorker) Interface, zu dem es gehört.
