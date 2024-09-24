---
title: "SharedWorker: SharedWorker() Konstruktor"
short-title: SharedWorker()
slug: Web/API/SharedWorker/SharedWorker
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{APIRef("Web Workers API")}}

Der **`SharedWorker()`** Konstruktor erstellt ein
[`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekt, das das Skript an der angegebenen URL ausführt. Dieses Skript muss die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) einhalten.

> [!NOTE]
> Es gibt Uneinigkeit unter Browserherstellern darüber, ob eine Daten-URL vom gleichen Ursprung ist oder nicht. Obwohl Firefox 10.0 und spätere Versionen Daten-URLs akzeptieren, ist dies nicht bei allen anderen Browsern der Fall.

## Syntax

```js-nolint
new SharedWorker(aURL)
new SharedWorker(aURL, name)
new SharedWorker(aURL, options)
```

### Parameter

- `aURL`
  - : Ein String, der die URL des Skripts darstellt, das der Worker ausführen wird. Es muss die Same-Origin-Policy einhalten.
- `name` {{optional_inline}}
  - : Ein String, der einen identifizierenden Namen für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) angibt, der den Gültigkeitsbereich des Workers darstellt, was nützlich ist, um neue Instanzen desselben SharedWorkers zu erstellen und zu debuggen.
- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen enthält, die beim Erstellen der Objektinstanz festgelegt werden können. Verfügbare Eigenschaften sind:

    - `type`
      - : Ein String, der den Typ des zu erstellenden Workers angibt. Der Wert kann `classic` oder `module` sein. Wenn nicht angegeben, wird `classic` als Standard verwendet.
    - `credentials`
      - : Ein String, der die Art der Anmeldeinformationen angibt, die für den Worker verwendet werden sollen. Der Wert kann `omit`, `same-origin` oder `include` sein. Wenn nicht angegeben oder wenn der Typ `classic` ist, wird `omit` (keine Anmeldeinformationen erforderlich) als Standard verwendet.
    - `name`
      - : Ein String, der einen identifizierenden Namen für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) angibt, der den Gültigkeitsbereich des Workers darstellt, hauptsächlich für Debugging-Zwecke nützlich.
    - `sameSiteCookies`
      - : Ein String, der angibt, welche [`SameSite`-Cookies](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) dem Worker zur Verfügung stehen sollen. Kann einen der folgenden zwei Werte haben:
        - 'all'
          - : `SameSite=Strict`, `SameSite=Lax` und `SameSite=None`-Cookies stehen dem Worker alle zur Verfügung. Diese Option wird nur in First-Party-Kontexten unterstützt und ist der Standard in First-Party-Kontexten.
        - 'none'
          - : Nur `SameSite=None`-Cookies stehen dem Worker zur Verfügung. Diese Option wird in First-Party- und Third-Party-Kontexten unterstützt und ist der Standard in Third-Party-Kontexten.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht berechtigt ist, Worker zu starten, zum Beispiel, wenn die URL eine ungültige Syntax hat oder wenn die Same-Origin-Policy verletzt wird, oder wenn der `sameSiteCookies`-Wert im gegebenen Kontext nicht unterstützt wird.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der MIME-Typ des Worker-Skripts falsch ist. Er sollte immer `text/javascript` sein (aus historischen Gründen könnten [andere JavaScript-MIME-Typen](/de/docs/Web/HTTP/MIME_types#textjavascript) akzeptiert werden).
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `aURL` nicht geparst werden kann.

## Beispiele

Der folgende Codeausschnitt zeigt die Erstellung eines [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekts mit dem `SharedWorker()`-Konstruktor und die anschließende Verwendung des Objekts:

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

Für ein vollständiges Beispiel, siehe unser [einfaches Shared Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([run shared worker](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/).)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Interface, zu dem es gehört.
