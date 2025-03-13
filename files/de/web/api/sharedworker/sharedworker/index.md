---
title: "SharedWorker: SharedWorker() Konstruktor"
short-title: SharedWorker()
slug: Web/API/SharedWorker/SharedWorker
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Web Workers API")}}

Der **`SharedWorker()`** Konstruktor erstellt ein
[`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekt, das das Skript an der angegebenen URL ausführt. Dieses
Skript muss der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) entsprechen.

> [!NOTE]
> Es gibt Meinungsverschiedenheiten unter den Browserherstellern darüber,
> ob eine Daten-URL als gleiche Herkunft betrachtet wird oder nicht. Obwohl Firefox 10.0
> und später Daten-URLs akzeptieren, ist dies nicht in allen anderen
> Browsern der Fall.

## Syntax

```js-nolint
new SharedWorker(aURL)
new SharedWorker(aURL, name)
new SharedWorker(aURL, options)
```

### Parameter

- `aURL`
  - : Ein String, der die URL des Skripts darstellt, das der Worker
    ausführen wird. Es muss der Same-Origin-Policy entsprechen.
- `name` {{optional_inline}}
  - : Ein String, der einen eindeutigen Namen für den
    [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) angibt, der den Gültigkeitsbereich des Workers repräsentiert, was nützlich ist, um neue Instanzen desselben SharedWorkers zu erstellen und bei der Fehlersuche.
- `options` {{optional_inline}}

  - : Ein Objekt, das die beim Erstellen der Objektinstanz festzulegenden Optionen enthält. Verfügbare Eigenschaften sind wie folgt:

    - `type`
      - : Ein String, der den Typ des zu erstellenden Workers angibt. Der Wert kann `classic` oder `module` sein. Wird nichts angegeben, wird standardmäßig `classic` verwendet.
    - `credentials`
      - : Ein String, der den Typ der
        Anmeldeinformationen angibt, die für den Worker verwendet werden sollen. Der Wert kann `omit`,
        `same-origin` oder `include` sein. Wird nichts angegeben oder der Typ ist `classic`, wird standardmäßig `omit` (keine Anmeldeinformationen erforderlich) verwendet.
    - `name`
      - : Ein String, der einen
        eindeutigen Namen für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) angibt, der den
        Gültigkeitsbereich des Workers repräsentiert, was hauptsächlich für Debugging-Zwecke nützlich ist.
    - `sameSiteCookies`
      - : Ein String, der angibt, welche [`SameSite`-Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)
        dem Worker verfügbar sein sollen. Kann einen der folgenden beiden Werte haben:
        - 'all'
          - : `SameSite=Strict`, `SameSite=Lax` und `SameSite=None` Cookies sind alle dem Worker verfügbar.
            Diese Option wird nur in First-Party-Kontexten unterstützt und ist standardmäßig in First-Party-Kontexten.
        - 'none'
          - : Nur `SameSite=None` Cookies sind dem Worker verfügbar. Diese Option wird in First-Party-
            und Third-Party-Kontexten unterstützt und ist standardmäßig in Third-Party-Kontexten.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht berechtigt ist, Worker zu starten, beispielsweise wenn die URL eine ungültige Syntax hat oder die Same-Origin-Policy verletzt wird, oder wenn der `sameSiteCookies`-Wert im gegebenen Kontext nicht unterstützt wird.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der MIME-Typ des Worker-Skripts inkorrekt ist. Es sollte _immer_ `text/javascript` sein (aus historischen Gründen können [andere JavaScript MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) akzeptiert werden).
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `aURL` nicht geparst werden kann.

## Beispiele

Der folgende Codeausschnitt zeigt die Erstellung eines [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekts unter Verwendung des `SharedWorker()` Konstruktors und die anschließende Nutzung des Objekts:

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

Für ein vollständiges Beispiel siehe unser [Basisbeispiel für einen Shared Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/).)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`SharedWorker`](/de/docs/Web/API/SharedWorker) Interface, zu dem es gehört.
