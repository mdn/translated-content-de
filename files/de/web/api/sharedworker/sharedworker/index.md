---
title: "SharedWorker: SharedWorker() Konstruktor"
short-title: SharedWorker()
slug: Web/API/SharedWorker/SharedWorker
l10n:
  sourceCommit: 875215de95e76ff145fc85902d32c1142a1ccf53
---

{{APIRef("Web Workers API")}}

Der **`SharedWorker()`** Konstruktor erstellt ein
[`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekt, das das Skript an der angegebenen URL ausführt. Dieses
Skript muss die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) einhalten.

> [!NOTE]
> Es gibt Uneinigkeit unter Browser-Herstellern darüber,
> ob eine Daten-URL als gleiche Herkunft angesehen wird oder nicht. Obwohl Firefox ab Version 10.0
> Daten-URLs akzeptiert, ist dies nicht in allen anderen
> Browsern der Fall.

## Syntax

```js-nolint
new SharedWorker(aURL)
new SharedWorker(aURL, name)
new SharedWorker(aURL, options)
```

### Parameter

- `aURL`
  - : Ein String, der die URL des Skripts darstellt, das der Worker ausführen wird. Sie muss die Same-Origin-Policy einhalten.
- `name` {{optional_inline}}
  - : Ein String, der einen identifizierenden Namen für den
    [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) angibt, der den Geltungsbereich des Workers darstellt. Dies ist nützlich für das Erstellen neuer Instanzen desselben SharedWorker und für das Debugging.
- `options` {{optional_inline}}

  - : Ein Objekt, das Options-Eigenschaften enthält, die beim Erstellen der Objektinstanz festgelegt werden können. Verfügbare Eigenschaften sind wie folgt:

    - `type`
      - : Ein String, der den zu erstellenden Worker-Typ angibt. Der Wert kann `classic` oder `module` sein. Wenn nicht angegeben, wird standardmäßig `classic` verwendet.
    - `credentials`
      - : Ein String, der die Art der
        zu verwendenden Anmeldeinformationen für den Worker angibt. Der Wert kann `omit`,
        `same-origin` oder `include` sein. Wenn nicht angegeben oder wenn der Typ `classic` ist, wird standardmäßig `omit` verwendet (keine Anmeldeinformationen erforderlich).
    - `name`
      - : Ein String, der einen
        identifizierenden Namen für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) angibt, der den Geltungsbereich des Workers darstellt, was hauptsächlich für Debugging-Zwecke nützlich ist.
    - `sameSiteCookies`
      - : Ein String, der angibt, welche [`SameSite`-Cookies](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)
        dem Worker zur Verfügung stehen sollen. Kann einen der folgenden zwei Werte haben:
        - 'all'
          - : `SameSite=Strict`, `SameSite=Lax` und `SameSite=None` Cookies werden dem Worker alle zur Verfügung stehen.
            Diese Option wird nur in Erstanbieter-Kontexten unterstützt und ist die Standardeinstellung in Erstanbieter-Kontexten.
        - 'none'
          - : Nur `SameSite=None` Cookies werden dem Worker zur Verfügung stehen. Diese Option wird in Erstanbieter-
            und Drittanbieter-Kontexten unterstützt und ist die Standardeinstellung in Drittanbieter-Kontexten.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht berechtigt ist, Worker zu starten, zum Beispiel wenn die URL eine ungültige Syntax hat oder wenn die Same-Origin-Policy verletzt wird, oder wenn der Wert von `sameSiteCookies` im gegebenen Kontext nicht unterstützt wird.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der MIME-Typ des Worker-Skripts falsch ist. Es sollte _immer_ `text/javascript` sein (aus historischen Gründen können [andere JavaScript-MIME-Typen](/de/docs/Web/HTTP/MIME_types#textjavascript) akzeptiert werden).
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `aURL` nicht geparst werden kann.

## Beispiele

Im folgenden Code-Snippet wird gezeigt, wie ein [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekt mit
dem `SharedWorker()` Konstruktor erstellt und das Objekt anschließend genutzt wird:

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

Für ein vollständiges Beispiel siehe unser [Einfaches Shared-Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/).)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Interface, zu dem es gehört.
