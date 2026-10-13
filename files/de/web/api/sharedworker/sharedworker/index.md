---
title: "SharedWorker: SharedWorker()-Konstruktor"
short-title: SharedWorker()
slug: Web/API/SharedWorker/SharedWorker
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("Web Workers API")}}

> [!WARNING]
> Das an den Parameter `url` übergebene Skript wird ausgeführt.
> APIs wie diese gelten als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und können einen Angriffsvektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen.
>
> Sie können dieses Risiko verringern, indem Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verwenden, die einschränkt, von welchen Orten Skripte geladen werden dürfen. Weisen Sie außerdem stets [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte statt Zeichenfolgen zu und [erzwingen Sie Trusted Types](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](/de/docs/Web/API/Worker/Worker#security_considerations) beim `Worker()`-Konstruktor.

Der **`SharedWorker()`**-Konstruktor erstellt ein [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekt, das das Skript unter der angegebenen URL ausführt.

## Syntax

```js-nolint
new SharedWorker(url)
new SharedWorker(url, name)
new SharedWorker(url, options)
```

### Parameter

- `url`
  - : Ein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekt oder eine Zeichenfolge, die die URL des Skripts oder Moduls angibt, das der Worker ausführen soll.
    Die URL muss denselben Ursprung wie das aufrufende Dokument haben oder eine `blob:`- bzw. `data:`-URL sein.
    Sie wird relativ zum Speicherort der aktuellen HTML-Seite aufgelöst.
- `name` {{optional_inline}}
  - : Eine Zeichenfolge, die einen identifizierenden Namen für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) angibt, der den Gültigkeitsbereich des Workers repräsentiert. Dies ist nützlich, um neue Instanzen desselben `SharedWorker` zu erstellen und Fehler zu beheben.
- `options` {{optional_inline}}
  - : Ein Objekt mit Optionseigenschaften, die beim Erstellen der Objektinstanz festgelegt werden können.
    Folgende Eigenschaften sind verfügbar:
    - `type`
      - : Eine Zeichenfolge, die den Typ des zu erstellenden Workers angibt.
        Der Wert kann `classic` oder `module` sein.
        Der Standardwert ist `classic`.
    - `credentials`
      - : Eine Zeichenfolge, die angibt, ob der Browser beim Importieren von Modulen in einen Modul-Worker Anmeldedaten sendet.
        Zulässig sind dieselben Werte wie für die [`fetch()`-Anfrage](/de/docs/Web/API/RequestInit#credentials): `omit`, `same-origin` oder `include`.
        Der Standardwert ist `same-origin` (Anmeldedaten werden nur bei Anfragen mit demselben Ursprung gesendet).

        Bei klassischen Workern wird diese Eigenschaft ignoriert.

    - `name`
      - : Eine Zeichenfolge, die einen identifizierenden Namen für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) angibt, der den Gültigkeitsbereich des Workers repräsentiert. Dies ist hauptsächlich für die Fehlerbehebung nützlich.
    - `extendedLifetime`
      - : Ein boolescher Wert, der angibt, ob der Shared Worker noch für kurze Zeit aktiv bleiben darf, nachdem alle Seiten, die ihn verwenden, verlassen oder geschlossen wurden.

        Dadurch können nach dem Verlassen der Seite noch Aufgaben erledigt werden, etwa Zustandsinformationen gespeichert oder Analysedaten an Server gesendet werden.
        Wie lange der Worker aktiv bleibt, hängt vom Browser ab und kann zwischen 10 Sekunden und 5 Minuten liegen (Chrome verwendet 30 Sekunden).

        Weitere Informationen finden Sie unter [Lebensdauer von Shared Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers#shared_worker_lifetime) in _Web Worker verwenden_.

    - `sameSiteCookies`
      - : Eine Zeichenfolge, die angibt, welche [`SameSite`-Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) dem Worker zur Verfügung stehen sollen.
        Sie kann einen der folgenden beiden Werte haben:
        - 'all'
          - : Dem Worker stehen Cookies mit `SameSite=Strict`, `SameSite=Lax` und `SameSite=None` zur Verfügung.
            Diese Option wird nur in First-Party-Kontexten unterstützt und ist dort der Standardwert.
        - 'none'
          - : Dem Worker stehen nur Cookies mit `SameSite=None` zur Verfügung.
            Diese Option wird in First-Party- und Third-Party-Kontexten unterstützt und ist in Third-Party-Kontexten der Standardwert.

> [!WARNING]
> Sobald ein Shared Worker mit einer bestimmten URL und einem bestimmten `name` ausgeführt wird, sind die Optionen `type`, `credentials` und `extendedLifetime` festgelegt.
> Wenn Sie für dasselbe Skript und denselben `name` einen neuen Shared Worker mit abweichenden Werten für diese Optionen erstellen, tritt ein Fehler auf.
> Falls Sie für dasselbe Skript unterschiedliche Optionen benötigen, starten Sie zwei Worker mit unterschiedlichen `name`-Werten.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument keine Worker starten darf, beispielsweise weil die URL eine ungültige Syntax hat, gegen die Same-Origin-Policy verstoßen wird oder der Wert von `sameSiteCookies` im gegebenen Kontext nicht unterstützt wird.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der MIME-Typ des Worker-Skripts falsch ist.
    Er sollte _immer_ `text/javascript` sein (aus historischen Gründen werden möglicherweise [andere JavaScript-MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) akzeptiert).
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `url` nicht geparst werden kann.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Parameter `url` eine Zeichenfolge ist, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Der **`SharedWorker()`**-Konstruktor erstellt ein [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekt, das das klassische Skript oder Modul unter der angegebenen URL ausführt.

Das Skript muss [denselben Ursprung](/de/docs/Web/Security/Defenses/Same-origin_policy) wie das zugehörige Dokument haben. Es darf jedoch selbst Skripte oder Module mit einem anderen Ursprung importieren, sofern CORS und andere Einschränkungen dies zulassen.
Wird ein Worker mit einem anderen Ursprung benötigt, müssen Sie ihn über einen zwischengeschalteten Worker mit demselben Ursprung oder über einen Blob laden.

Weitere Informationen finden Sie unter [Beschreibung](/de/docs/Web/API/Worker/Worker#description) beim `Worker()`-Konstruktor.

## Beispiele

Der Kürze halber verwenden die folgenden Beispiele keine [Trusted Types](/de/docs/Web/API/Trusted_Types_API).
In Produktionscode sollten Sie immer Trusted Types verwenden, wenn Sie Daten, die von Nutzern stammen, an Injection Sinks übergeben.

Ein Beispiel finden Sie unter [Trusted Types verwenden](/de/docs/Web/API/Worker/Worker#using_trusted_types) in den Beispielen zum `Worker()`-Konstruktor.

### Grundlegende Verwendung

Der folgende Codeausschnitt zeigt, wie mit dem `SharedWorker()`-Konstruktor ein [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekt erstellt und anschließend verwendet wird:

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

Ein vollständiges Beispiel finden Sie unter [Einfaches Shared-Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)).

### Beim Erstellen eines bereits laufenden Workers wird der vorhandene Worker wiederverwendet

Wenn Sie einen neuen Shared Worker mit denselben Optionen wie ein bereits laufender Shared Worker erstellen, wird der vorhandene Shared Worker wiederverwendet.

```js
const worker1 = new SharedWorker("./worker.js");

// This will reuse worker1 for worker2
const worker2 = new SharedWorker("./worker.js");
```

### Einen Shared Worker mit Optionen erstellen

Der folgende Codeausschnitt zeigt, wie mit dem `SharedWorker()`-Konstruktor und der Option `extendedLifetime` ein [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekt erstellt wird.

```js
const worker = new SharedWorker("worker.js", { extendedLifetime: true });

worker.addEventListener("error", (event) => {});
```

Sofern dies unterstützt wird, bleibt dieser Shared Worker noch für kurze Zeit aktiv, nachdem der Nutzer die Seite verlassen hat.

### Shared Worker mit unterschiedlichen Optionen

Dieses Beispiel zeigt, wie Sie Shared Worker mit unterschiedlichen Konstruktoroptionen starten können, indem Sie jedem einen eindeutigen Namen geben.

Zunächst zeigen wir, was passiert, wenn Sie dasselbe Skript und denselben `name` mit unterschiedlichen Optionen verwenden.
Dieser Code würde `worker2 error on instantiation:` in der Konsole ausgeben, weil eine Instanz die Option `extendedLifetime` festlegt und die andere nicht.
Dasselbe würde passieren, wenn wir unterschiedliche Werte für `type` oder `credentials` festlegen würden.

```js
const worker = new SharedWorker("worker.js", { extendedLifetime: true });

// Construct the same shared worker with different options.
const worker2 = new SharedWorker("worker.js");

// Handle constructor errors
worker2.addEventListener("error", (event) => {
  console.log(`worker2 error on instantiation: ${event}`);
});
```

Der folgende Code erstellt aus demselben Skript einen zweiten Worker, jedoch mit einem anderen Namen und anderen Optionen.
Da es sich um unterschiedliche Shared Worker handelt, wird in der Konsole kein Fehler ausgegeben.

```js
const worker = new SharedWorker("worker.js", { extendedLifetime: true });

// Start a second instance of worker.js
const worker2 = new SharedWorker("./worker.js", {
  name: "worker2",
  credentials: "omit",
});

worker2.port.start();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die zugehörige Schnittstelle [`SharedWorker`](/de/docs/Web/API/SharedWorker).
