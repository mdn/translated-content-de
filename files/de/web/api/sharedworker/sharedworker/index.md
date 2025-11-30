---
title: "SharedWorker: SharedWorker() Konstruktor"
short-title: SharedWorker()
slug: Web/API/SharedWorker/SharedWorker
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Web Workers API")}}

Der **`SharedWorker()`**-Konstruktor erstellt ein
[`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekt, das das Skript an der angegebenen URL ausführt. Dieses
Skript muss die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) einhalten.

> [!NOTE]
> Es gibt Uneinigkeit unter Browser-Herstellern darüber,
> ob eine Daten-URL von derselben Herkunft ist oder nicht. Obwohl Firefox ab Version 10.0
> Daten-URLs akzeptiert, ist dies nicht in allen anderen
> Browsern der Fall.

## Syntax

```js-nolint
new SharedWorker(url)
new SharedWorker(url, name)
new SharedWorker(url, options)
```

### Parameter

- `url`
  - : Ein String, der die URL des Skripts darstellt, das der Worker
    ausführen wird. Es muss die Same-Origin-Policy einhalten.
- `name` {{optional_inline}}
  - : Ein String, der einen identifizierenden Namen für den
    [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) angibt, der den Geltungsbereich des Workers darstellt. Dies ist nützlich, um neue Instanzen desselben SharedWorkers zu erstellen und zu debuggen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Options-Eigenschaften enthält, die beim Erstellen der Objektinstanz festgelegt werden können. Verfügbare Eigenschaften sind wie folgt:
    - `type`
      - : Ein String, der den Typ des zu
        erstellenden Workers angibt. Der Wert kann `classic` oder `module` sein. Wenn nicht angegeben,
        wird `classic` als Standard verwendet.
    - `credentials`
      - : Ein String, der den Typ der
        Anmeldeinformationen angibt, die für den Worker verwendet werden sollen. Der Wert kann `omit`,
        `same-origin` oder `include` sein. Wenn nicht
        angegeben, oder wenn der Typ `classic` ist, wird `omit` (keine Anmeldeinformationen erforderlich) als Standard verwendet.
    - `name`
      - : Ein String, der einen
        identifizierenden Namen für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) angibt, der den
        Geltungsbereich des Workers darstellt, hauptsächlich nützlich für Debugging-Zwecke.
    - `sameSiteCookies`
      - : Ein String, der angibt, welche [`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)
        dem Worker zur Verfügung stehen sollen. Kann einen der folgenden zwei Werte haben:
        - 'all'
          - : `SameSite=Strict`, `SameSite=Lax` und `SameSite=None` Cookies stehen alle dem Worker zur Verfügung.
            Diese Option wird nur in Erstanbieter-Kontexten unterstützt und ist der Standard in Erstanbieter-Kontexten.
        - 'none'
          - : Nur `SameSite=None` Cookies stehen dem Worker zur Verfügung. Diese Option wird sowohl in Erstanbieter-
            als auch Drittanbieter-Kontexten unterstützt und ist der Standard in Drittanbieter-Kontexten.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument keine Berechtigung hat, Worker zu starten, zum Beispiel, wenn die URL eine ungültige Syntax hat oder wenn die Same-Origin-Policy verletzt wird, oder wenn der `sameSiteCookies` Wert im gegebenen Kontext nicht unterstützt wird.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der MIME-Typ des Worker-Skripts falsch ist. Es sollte _immer_ `text/javascript` sein (aus historischen Gründen können [andere JavaScript MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) akzeptiert werden).
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `url` nicht geparst werden kann.

## Beispiele

Der folgende Code-Ausschnitt zeigt die Erstellung eines [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekts mit dem `SharedWorker()`-Konstruktor und die anschließende Nutzung des Objekts:

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

Für ein vollständiges Beispiel siehe unser [Einfaches Shared-Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([Shared-Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/).)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`SharedWorker`](/de/docs/Web/API/SharedWorker) Schnittstelle, zu der sie gehört.
