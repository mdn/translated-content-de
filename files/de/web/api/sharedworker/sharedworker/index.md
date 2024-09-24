---
title: "SharedWorker: SharedWorker()-Konstruktor"
short-title: SharedWorker()
slug: Web/API/SharedWorker/SharedWorker
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{APIRef("Web Workers API")}}

Der **`SharedWorker()`**-Konstruktor erstellt ein
{{domxref("SharedWorker")}}-Objekt, das das Skript an der angegebenen URL ausführt. Dieses
Skript muss der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) folgen.

> [!NOTE]
> Es gibt Meinungsverschiedenheiten unter den Browserherstellern darüber,
> ob eine Data-URL von derselben Herkunft ist oder nicht. Obwohl Firefox 10.0
> und höher Data-URLs akzeptieren, ist das nicht bei allen anderen
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
    ausführen wird. Es muss der Same-Origin-Policy folgen.
- `name` {{optional_inline}}
  - : Ein String, der einen identifizierenden Namen für die
    {{domxref("SharedWorkerGlobalScope")}} angibt, die den Geltungsbereich des Workers darstellt, was nützlich ist, um neue Instanzen desselben SharedWorkers zu erstellen und für das Debugging.
- `options` {{optional_inline}}

  - : Ein Objekt, das Optionsattribute enthält, die beim Erstellen der Objektinstanz festgelegt werden können. Verfügbare Eigenschaften sind:

    - `type`
      - : Ein String, der den Typ des zu erstellenden Workers angibt. Der Wert kann `classic` oder `module` sein. Wenn nicht
        angegeben, wird standardmäßig `classic` verwendet.
    - `credentials`
      - : Ein String, der den Typ der
        Anmeldeinformationen angibt, die für den Worker verwendet werden sollen. Der Wert kann `omit`,
        `same-origin` oder `include` sein. Wenn nicht
        angegeben oder wenn der Typ `classic` ist, wird standardmäßig
        `omit` (keine Anmeldeinformationen erforderlich) verwendet.
    - `name`
      - : Ein String, der einen
        identifizierenden Namen für die {{domxref("SharedWorkerGlobalScope")}} angibt, die den
        Geltungsbereich des Workers darstellt, was hauptsächlich für Debugging-Zwecke nützlich ist.
    - `sameSiteCookies`
      - : Ein String, der angibt, welche [`SameSite`-Cookies](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)
        dem Worker zur Verfügung stehen sollen. Kann einen der folgenden zwei Werte haben:
        - 'all'
          - : `SameSite=Strict`, `SameSite=Lax`, und `SameSite=None`-Cookies werden dem Worker zur Verfügung stehen.
            Diese Option wird nur in Erstanbieter-Kontexten unterstützt und ist die Standardeinstellung in Erstanbieter-Kontexten.
        - 'none'
          - : Nur `SameSite=None`-Cookies werden dem Worker zur Verfügung stehen. Diese Option wird in Erstanbieter-
            und Drittanbieter-Kontexten unterstützt und ist die Standardeinstellung in Drittanbieter-Kontexten.

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Dokument keine Erlaubnis hat, Worker zu starten, z.B. wenn die URL eine ungültige Syntax hat oder wenn die Same-Origin-Policy verletzt wird, oder wenn der `sameSiteCookies`-Wert im gegebenen Kontext nicht unterstützt wird.
- `NetworkError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der MIME-Typ des Worker-Skripts inkorrekt ist. Er sollte _immer_ `text/javascript` sein (aus historischen Gründen können [andere JavaScript-MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript) akzeptiert werden).
- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `aURL` nicht analysiert werden kann.

## Beispiele

Der folgende Codeausschnitt zeigt die Erstellung eines {{domxref("SharedWorker")}}-Objekts mithilfe des `SharedWorker()`-Konstruktors und die anschließende Nutzung des Objekts:

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

Für ein vollständiges Beispiel sehen Sie unser [Einfaches Shared-Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([run shared worker](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/).)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("SharedWorker")}}-Schnittstelle, zu der es gehört.
