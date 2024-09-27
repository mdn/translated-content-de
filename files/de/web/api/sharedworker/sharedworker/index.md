---
title: "SharedWorker: SharedWorker()-Konstruktor"
short-title: SharedWorker()
slug: Web/API/SharedWorker/SharedWorker
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{APIRef("Web Workers API")}}

Der **`SharedWorker()`**-Konstruktor erstellt ein
[`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekt, das das Skript an der angegebenen URL ausführt. Dieses
Skript muss der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) gehorchen.

> [!NOTE]
> Es gibt Uneinigkeit unter den Browserherstellern darüber,
> ob eine Daten-URL dieselbe Herkunft hat oder nicht. Während Firefox ab Version 10.0
> Daten-URLs akzeptiert, ist dies bei allen anderen
> Browsern nicht der Fall.

## Syntax

```js-nolint
new SharedWorker(aURL)
new SharedWorker(aURL, name)
new SharedWorker(aURL, options)
```

### Parameter

- `aURL`
  - : Eine Zeichenfolge, die die URL des Skripts darstellt, das der Worker
    ausführen wird. Es muss der Same-Origin-Policy gehorchen.
- `name` {{optional_inline}}
  - : Eine Zeichenfolge zur Angabe eines Identifikationsnamens für den
    [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope), der den Gültigkeitsbereich des Workers darstellt. Dies ist nützlich, um neue Instanzen desselben SharedWorker zu erstellen und für Debugging-Zwecke.
- `options` {{optional_inline}}

  - : Ein Objekt, das die beim Erstellen der Objektinstanz zu setzenden Options-Eigenschaften enthält. Verfügbare Eigenschaften sind:

    - `type`
      - : Eine Zeichenfolge, die den Typ des Workers angibt,
        der erstellt werden soll. Der Wert kann `classic` oder `module` sein. Wenn nicht
        angegeben, wird standardmäßig `classic` verwendet.
    - `credentials`
      - : Eine Zeichenfolge, die die Art der
        Anmeldeinformationen angibt, die für den Worker verwendet werden sollen. Der Wert kann `omit`,
        `same-origin` oder _`include` sein. Wenn nicht
        angegeben oder wenn der Typ `classic` ist, wird standardmäßig
        `omit` verwendet (keine Anmeldeinformationen erforderlich)._
    - `name`
      - : Eine Zeichenfolge zur Angabe eines
        Identifikationsnamens für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope), der den
        Gültigkeitsbereich des Workers darstellt, was hauptsächlich für Debugging-Zwecke nützlich ist.
    - `sameSiteCookies`
      - : Eine Zeichenfolge, die angibt, welche [`SameSite`-Cookies](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)
        dem Worker zur Verfügung stehen sollen. Kann einen der folgenden Werte haben:
        - 'all'
          - : `SameSite=Strict`, `SameSite=Lax` und `SameSite=None`-Cookies sind dem Worker alle verfügbar.
            Diese Option wird nur in First-Party-Kontexten unterstützt und ist der Standard in First-Party-Kontexten.
        - 'none'
          - : Nur `SameSite=None`-Cookies sind dem Worker verfügbar. Diese Option wird in First-Party-
            und Third-Party-Kontexten unterstützt und ist der Standard in Third-Party-Kontexten.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht berechtigt ist, Worker zu starten, zum Beispiel wenn die URL eine ungültige Syntax hat oder die Same-Origin-Policy verletzt wird, oder wenn der `sameSiteCookies`-Wert im gegebenen Kontext nicht unterstützt wird.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der MIME-Typ des Worker-Skripts falsch ist. Es sollte _immer_ `text/javascript` sein (aus historischen Gründen können [andere JavaScript-MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript) akzeptiert werden).
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `aURL` nicht geparst werden kann.

## Beispiele

Der folgende Code-Schnipsel zeigt die Erstellung eines [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekts mithilfe des `SharedWorker()`-Konstruktors und die anschließende Verwendung des Objekts:

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

Für ein vollständiges Beispiel sehen Sie sich unser [einfaches Shared Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) an ([run shared worker](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/).)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Schnittstelle, zu der es gehört.
