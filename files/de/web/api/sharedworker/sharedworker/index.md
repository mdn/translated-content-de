---
title: "SharedWorker: SharedWorker() Konstruktor"
short-title: SharedWorker()
slug: Web/API/SharedWorker/SharedWorker
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

{{APIRef("Web Workers API")}}

Der **`SharedWorker()`** Konstruktor erstellt ein
[`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekt, das das Skript an der angegebenen URL ausführt. Dieses
Skript muss die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) einhalten.

> [!NOTE]
> Es gibt Uneinigkeit unter den Browser-Herstellern darüber, ob eine Daten-URL von derselben Herkunft ist oder nicht. Obwohl Firefox 10.0 und später Daten-URLs akzeptieren, trifft das nicht auf alle anderen Browser zu.

## Syntax

```js-nolint
new SharedWorker(url)
new SharedWorker(url, name)
new SharedWorker(url, options)
```

### Parameter

- `url`
  - : Ein String, der die URL des Skripts repräsentiert, das der Worker
    ausführen wird. Es muss die Same-Origin-Policy einhalten.
- `name` {{optional_inline}}
  - : Ein String, der einen identifizierenden Namen für den
    [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) spezifiziert, der den Geltungsbereich des Workers darstellt, was nützlich ist, um neue Instanzen desselben SharedWorkers zu erstellen und zu debuggen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen enthält, die beim Erstellen der Objektinstanz festgelegt werden können. Verfügbare Eigenschaften sind wie folgt:
    - `type`
      - : Ein String, der den Typ des zu erstellenden Workers
        spezifiziert. Der Wert kann `classic` oder `module` sein. Falls nicht
        angegeben, wird standardmäßig `classic` verwendet.
    - `credentials`
      - : Ein String, der die Art der
        Anmeldeinformationen angibt, die für den Worker verwendet werden sollen. Der Wert kann `omit`,
        `same-origin` oder `_include` sein. Falls nicht
        angegeben oder wenn `type` `classic` ist, wird standardmäßig
        `omit` (keine Anmeldeinformationen erforderlich) verwendet.
    - `name`
      - : Ein String, der einen
        identifizierenden Namen für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) spezifiziert, der den Geltungsbereich des Workers darstellt, was hauptsächlich zu Debugging-Zwecken nützlich ist.
    - `sameSiteCookies`
      - : Ein String, der angibt, welche [`SameSite`-Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)
        dem Worker zur Verfügung stehen sollen. Kann einen der folgenden zwei Werte haben:
        - 'all'
          - : `SameSite=Strict`, `SameSite=Lax` und `SameSite=None` Cookies werden dem Worker alle zur Verfügung stehen.
            Diese Option wird nur in First-Party-Kontexten unterstützt und ist in First-Party-Kontexten der Standard.
        - 'none'
          - : Nur `SameSite=None` Cookies werden dem Worker zur Verfügung stehen. Diese Option wird in First-Party-
            und Third-Party-Kontexten unterstützt und ist in Third-Party-Kontexten der Standard.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht berechtigt ist, Workers zu starten, zum Beispiel wenn die URL eine ungültige Syntax hat, die Same-Origin-Policy verletzt wird, oder wenn der `sameSiteCookies`-Wert im gegebenen Kontext nicht unterstützt wird.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der MIME-Typ des Worker-Skripts falsch ist. Er sollte _immer_ `text/javascript` sein (aus historischen Gründen können [andere JavaScript-MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) akzeptiert werden).
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `url` nicht geparst werden kann.

## Beispiele

Der folgende Codeausschnitt zeigt die Erstellung eines [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekts unter Verwendung des `SharedWorker()` Konstruktors und die anschließende Verwendung des Objekts:

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

Für ein vollständiges Beispiel sehen Sie unser [Einfaches Shared Worker Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/).)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`SharedWorker`](/de/docs/Web/API/SharedWorker) Interface, zu dem es gehört.
