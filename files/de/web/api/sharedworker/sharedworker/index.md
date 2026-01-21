---
title: "SharedWorker: SharedWorker()-Konstruktor"
short-title: SharedWorker()
slug: Web/API/SharedWorker/SharedWorker
l10n:
  sourceCommit: d6f264d67b36a1c8b540f985422f52698c857a34
---

{{APIRef("Web Workers API")}}

> [!WARNING]
> Dieses Skript, das an das `url`-Element übergeben wird, wird ausgeführt. APIs wie diese sind als [Injections-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein.
>
> Sie können dieses Risiko mindern, indem Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) haben, die die Orte einschränkt, von denen Skripte geladen werden können, und indem Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Zeichenketten zuweisen und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](/de/docs/Web/API/Worker/Worker#security_considerations) im `Worker()`-Konstruktor.

Der **`SharedWorker()`**-Konstruktor erstellt ein [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekt, das das Skript an der angegebenen URL ausführt.

## Syntax

```js-nolint
new SharedWorker(url)
new SharedWorker(url, name)
new SharedWorker(url, options)
```

### Parameter

- `url`
  - : Ein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekt oder eine Zeichenkette, die die URL des Skripts oder Moduls repräsentiert, das der Worker ausführen wird.
    Diese muss mit dem Dokument des Aufrufers gleiche Herkunft haben oder eine `blob:`- oder `data:`-URL sein.
    Die URL wird relativ zum aktuellen Speicherort der HTML-Seite aufgelöst.
- `name` {{optional_inline}}
  - : Ein String, der einen identifizierenden Namen für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) angibt, der den Anwendungsbereich des Workers repräsentiert, was nützlich ist, um neue Instanzen desselben `SharedWorker` zu erstellen und zum Debuggen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Options-Eigenschaften enthält, die beim Erstellen der Objektinstanz festgelegt werden können.
    Verfügbare Eigenschaften sind wie folgt:
    - `type`
      - : Ein String, der den Typ des zu erstellenden Workers angibt.
        Der Wert kann `classic` oder `module` sein.
        Der Standard ist `classic`.
    - `credentials`
      - : Ein String, der angibt, ob der Browser Anmeldeinformationen sendet, wenn Module in einen Modul-Worker importiert werden.
        Die zulässigen Werte sind die gleichen wie jene, die an die [`fetch()`-Anfrage](/de/docs/Web/API/RequestInit#credentials) übergeben werden können: `omit`, `same-origin` oder `include`.
        Der Standard ist `same-origin` (Anmeldeinformationen nur bei Anfragen gleicher Herkunft einbeziehen).

        Dies wird für klassische Worker ignoriert.

    - `name`
      - : Ein String, der einen
        identifizierenden Namen für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) angibt, der hauptsächlich für Debugging-Zwecke nützlich ist.
    - `sameSiteCookies`
      - : Ein String, der angibt, welche [`SameSite`-Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) dem Worker zur Verfügung stehen sollen.
        Kann einen der folgenden zwei Werte haben:
        - 'alle'
          - : `SameSite=Strict`, `SameSite=Lax` und `SameSite=None`-Cookies sind dem Worker alle zugänglich.
            Diese Option wird nur in Erstanbieter-Kontexten unterstützt und ist die Standardeinstellung in Erstanbieter-Kontexten.
        - 'keine'
          - : Nur `SameSite=None`-Cookies sind dem Worker zugänglich.
            Diese Option wird sowohl in Erstanbieter- als auch in Drittanbieterkontexten unterstützt und ist die Standardeinstellung in Drittanbieterkontexten.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument keine Berechtigung hat, Worker zu starten, zum Beispiel wenn die URL eine ungültige Syntax hat oder die gleiche Herkunft verletzt wird, oder wenn der `sameSiteCookies`-Wert im gegebenen Kontext nicht unterstützt wird.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der MIME-Typ des Worker-Skripts falsch ist.
    Er sollte _immer_ `text/javascript` sein (aus historischen Gründen könnten [andere JavaScript-MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) akzeptiert werden).
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `url` nicht analysiert werden kann.
- `TypeError`
  - : Wird ausgelöst, wenn der `url`-Parameter eine Zeichenkette ist, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Der **`SharedWorker()`**-Konstruktor erstellt ein [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekt, das das klassische Skript oder Modul an der angegebenen URL ausführt.

Das Skript muss [gleiche Herkunft](/de/docs/Web/Security/Defenses/Same-origin_policy) mit dem zugehörigen Dokument haben, kann aber selbst Skripte oder Module importieren, die kreuzweise Herkunft haben (wenn von CORS und anderen Einschränkungen erlaubt).
Wenn ein kreuzherkunftlicher Worker erforderlich ist, müssen Benutzer ihn von einem zwischengeschalteten same-origin Worker oder einem Blob laden.

Weitere Informationen finden Sie unter [Beschreibung](/de/docs/Web/API/Worker/Worker#description) im `Worker()`-Konstruktor.

## Beispiele

Aus Gründen der Kürze verwenden die folgenden Beispiele keine [Trusted Types](/de/docs/Web/API/Trusted_Types_API).
In der Produktion sollte Ihr Code stets vertrauenswürdige Typen verwenden, wenn Daten von Benutzern in Injektions-Sinks übergeben werden.

Ein Beispiel finden Sie unter [Verwendung von Trusted Types](/de/docs/Web/API/Worker/Worker#using_trusted_types) in den `Worker()`-Konstruktor-Beispielen.

### Grundlegende Verwendung

Der folgende Codeabschnitt zeigt die Erstellung eines [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekts mit dem `SharedWorker()`-Konstruktor und die anschließende Verwendung des Objekts:

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

Für ein vollständiges Beispiel siehe unser [Beispiel für einen einfachen Shared Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([laufender Shared Worker](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/).)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Interface, zu dem es gehört.
