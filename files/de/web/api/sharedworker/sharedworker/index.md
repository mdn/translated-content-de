---
title: "SharedWorker: SharedWorker() Konstruktor"
short-title: SharedWorker()
slug: Web/API/SharedWorker/SharedWorker
l10n:
  sourceCommit: 03e3379cbad4f98a74021ad0753a41cd38d547fd
---

{{APIRef("Web Workers API")}}

> [!WARNING]
> Das Skript, das an den `url` Parameter übergeben wird, wird ausgeführt.
> Solche APIs sind bekannt als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und können ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe sein.
>
> Sie können dieses Risiko mindern, indem Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verwenden, die die Orte einschränkt, von denen Skripte geladen werden können, und indem Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Objekte anstelle von Strings zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](/de/docs/Web/API/Worker/Worker#security_considerations) im `Worker()` Konstruktor für weitere Informationen.

Der **`SharedWorker()`** Konstruktor erstellt ein [`SharedWorker`](/de/docs/Web/API/SharedWorker) Objekt, das das Skript an der angegebenen URL ausführt.

## Syntax

```js-nolint
new SharedWorker(url)
new SharedWorker(url, name)
new SharedWorker(url, options)
```

### Parameter

- `url`
  - : Ein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Objekt oder ein String, der die URL des Skripts oder Moduls darstellt, das der Worker ausführen wird.
    Diese muss gleichherkunft mit dem Dokument des Aufrufenden sein oder eine `blob:` oder `data:` URL.
    Die URL wird relativ zur aktuellen Position der HTML-Seite aufgelöst.
- `name` {{optional_inline}}
  - : Ein String, der einen identifizierenden Namen für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) angibt, der den Gültigkeitsbereich des Workers repräsentiert. Dies ist nützlich für das Erstellen neuer Instanzen desselben `SharedWorker` und zum Debuggen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Options-Eigenschaften enthält, die beim Erstellen der Objektinstanz festgelegt werden können.
    Verfügbare Eigenschaften sind wie folgt:
    - `type`
      - : Ein String, der den Typ des zu erstellenden Workers angibt.
        Der Wert kann `classic` oder `module` sein.
        Der Standardwert ist `classic`.
    - `credentials`
      - : Ein String, der angibt, ob der Browser Anmeldeinformationen sendet, wenn Module in einen Moduelworker importiert werden.
        Die erlaubten Werte sind dieselben, die auch an die [`fetch()` Anfrage](/de/docs/Web/API/RequestInit#credentials) übergeben werden können: `omit`, `same-origin` oder `include`.
        Der Standardwert ist `same-origin` (enthält nur Anmeldeinformationen für Anfragen gleicher Herkunft).

        Dies wird für klassische Worker ignoriert.

    - `name`
      - : Ein String, der einen
        identifizierenden Namen für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) angibt, der den Gültigkeitsbereich des Workers repräsentiert, was hauptsächlich für Debugging-Zwecke nützlich ist.
    - `extendedLifetime`
      - : Ein Boolean, der angibt, ob dem Shared Worker erlaubt ist, für eine kurze Zeitspanne am Leben zu bleiben, nachdem alle Seiten, die ihn nutzen, weg navigiert oder geschlossen wurden.

        Dies soll Arbeit ermöglichen, nachdem der Benutzer von der Seite weg navigiert hat, wie das Schreiben von Zustandsinformationen in den Speicher oder das Senden von Analysedaten zurück an Server.
        Die genaue Zeit, die der Worker lebendig bleibt, hängt vom Browser ab und kann zwischen 10 Sekunden und 5 Minuten liegen (Chrome verwendet 30 Sekunden).

        Für weitere Informationen siehe [Lebensdauer des Shared Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers#shared_worker_lifetime) in _Using web workers_.

    - `sameSiteCookies`
      - : Ein String, der angibt, welche [`SameSite` Cookies](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) für den Worker verfügbar sein sollen.
        Kann einen der folgenden beiden Werte haben:
        - 'all'
          - : `SameSite=Strict`, `SameSite=Lax` und `SameSite=None` Cookies werden alle für den Worker verfügbar sein.
            Diese Option wird nur in Erstanbieter-Kontexten unterstützt und ist der Standardwert in Erstanbieter-Kontexten.
        - 'none'
          - : Nur `SameSite=None` Cookies sind für den Worker verfügbar.
            Diese Option wird in Erstanbieter- und Drittanbieter-Kontexten unterstützt und ist der Standardwert in Drittanbieter-Kontexten.

> [!WARNING]
> Sobald ein Shared Worker mit einer bestimmten URL und `name` läuft, sind die Optionen `type`, `credentials` und `extendedLifetime` festgelegt.
> Das Erstellen eines neuen Shared Workers für dasselbe Skript und `name` wird zu einem Fehler führen, wenn Sie andere Werte für diese Optionen angeben.
> Wenn andere Optionen für dasselbe Skript erforderlich sind, dann starten Sie zwei Worker mit unterschiedlichen `name` Werten.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument keine Worker starten darf, zum Beispiel wenn die URL eine ungültige Syntax hat oder die Same-Origin-Policy verletzt wird, oder wenn der `sameSiteCookies` Wert im gegebenen Kontext nicht unterstützt wird.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der MIME-Typ des Worker-Skripts inkorrekt ist.
    Es sollte _immer_ `text/javascript` sein (aus historischen Gründen können [andere JavaScript MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) akzeptiert werden).
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `url` nicht geparst werden kann.
- `TypeError`
  - : Wird ausgelöst, wenn der `url` Parameter ein String ist, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Der **`SharedWorker()`** Konstruktor erstellt ein [`SharedWorker`](/de/docs/Web/API/SharedWorker) Objekt, das das klassische Skript oder Modul an der angegebenen URL ausführt.

Das Skript muss [gleichherkunft](/de/docs/Web/Security/Defenses/Same-origin_policy) mit dem zugehörigen Dokument sein, kann jedoch selbst Skripte oder Module importieren, die aus anderer Herkunft stammen (sofern sie durch CORS und andere Beschränkungen zugelassen sind).
Wenn ein Worker aus fremder Herkunft notwendig ist, müssen Nutzer ihn aus einem zwischengeschalteten gleichherkunftlichen Worker oder einem Blob laden.

Für weitere Informationen sehen Sie [Beschreibung](/de/docs/Web/API/Worker/Worker#description) im `Worker()` Konstruktor.

## Beispiele

Der Kürze halber verwenden die folgenden Beispiele keine [Trusted Types](/de/docs/Web/API/Trusted_Types_API).
In der Produktion sollte Ihr Code immer Trusted Types verwenden, wenn Daten von Benutzern in Injection Sinks übergeben werden.

Für ein Beispiel siehe [Verwendung von Trusted Types](/de/docs/Web/API/Worker/Worker#using_trusted_types) in den `Worker()` Konstruktor-Beispielen.

### Grundlegende Verwendung

Der folgende Codeausschnitt zeigt die Erstellung eines [`SharedWorker`](/de/docs/Web/API/SharedWorker) Objekts mit dem `SharedWorker()` Konstruktor und die anschließende Nutzung des Objekts:

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

Für ein vollständiges Beispiel siehe unser [Einfaches Shared Worker Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([führen Sie den Shared Worker aus](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/).)

### Konstruktion eines bereits laufenden Workers wird den bestehenden Worker wiederverwenden

Wenn Sie einen neuen Shared Worker mit denselben Optionen wie ein bereits laufender Shared Worker konstruieren, wird der bestehende Shared Worker wiederverwendet.

```js
const worker1 = new SharedWorker("./worker.js");

// This will reuse worker1 for worker2
const worker2 = new SharedWorker("./worker.js");
```

### Konstruktion eines Shared Workers mit Optionen

Der folgende Codeausschnitt zeigt die Erstellung eines [`SharedWorker`](/de/docs/Web/API/SharedWorker) Objekts mit dem `SharedWorker()` Konstruktor unter Verwendung der `extendedLifetime` Option.

```js
const worker = new SharedWorker("worker.js", { extendedLifetime: true });

worker.addEventListener("error", (event) => {});
```

Wenn unterstützt, wird dieser Shared Worker für eine kurze Zeit weiterleben, nachdem der Benutzer von der Seite weg navigiert hat.

### Shared Worker mit unterschiedlichen Optionen

Dieses Beispiel zeigt, wie Sie Shared Worker mit unterschiedlichen Konstrukturoptionen starten können, indem Sie jedem einen eindeutigen Namen geben.

Zuerst demonstrieren wir, was passiert, wenn Sie dasselbe Skript und `name` mit unterschiedlichen Optionen verwenden.
Dieser Code würde `worker2 error on instantiation:` in die Konsole loggen, weil eine Instanz die `extendedLifetime` Option setzt und die andere nicht.
Dasselbe würde passieren, wenn wir unterschiedliche `type` oder `credentials` Werte setzen würden.

```js
const worker = new SharedWorker("worker.js", { extendedLifetime: true });

// Construct the same shared worker with different options.
const worker2 = new SharedWorker("worker.js");

// Handle constructor errors
worker2.addEventListener("error", (event) => {
  console.log(`worker2 error on instantiation: ${event}`);
});
```

Der folgende Code erstellt einen zweiten Worker aus demselben Skript, aber mit einem anderen Namen und Optionen.
Kein Fehler wird in die Konsole geloggt, da die Shared Worker unterschiedlich sind.

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

- Die [`SharedWorker`](/de/docs/Web/API/SharedWorker) Schnittstelle, zu der es gehört.
