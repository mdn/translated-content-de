---
title: "Worker: Worker() Konstruktor"
short-title: Worker()
slug: Web/API/Worker/Worker
l10n:
  sourceCommit: 3d49f18251e1f3493ef2e3a70519603345f8b7dc
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

> [!WARNING]
> Dieses Skript, das dem `url` Element übergeben wird, wird ausgeführt.
> APIs wie diese sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können potenziell ein Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe sein.
>
> Sie können dieses Risiko mindern, indem Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) haben, die die Orte einschränkt, von denen Skripte geladen werden können, und indem Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Objekte anstelle von Strings zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Der **`Worker()`** Konstruktor erstellt ein [`Worker`](/de/docs/Web/API/Worker) Objekt, das das klassische Skript oder Modul an der angegebenen URL ausführt.

## Syntax

```js-nolint
new Worker(url)
new Worker(url, options)
```

### Parameter

- `url`
  - : Ein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Objekt oder ein String, der die URL des Skripts oder Moduls darstellt, das der Worker ausführen wird.

    Diese muss mit dem Dokument des Anrufers gleichherkunft sein oder eine `blob:` oder `data:` URL sein.
    Die URL wird relativ zum aktuellen Standort der HTML-Seite aufgelöst.

- `options` {{optional_inline}}
  - : Ein Objekt, das Options-Eigenschaften enthält, die beim Erstellen der Objektinstanz festgelegt werden können.
    Verfügbare Eigenschaften sind wie folgt:
    - `credentials`
      - : Ein String, der angibt, ob der Browser Anmeldeinformationen sendet, wenn Module in einen Modul-Worker importiert werden.
        Die erlaubten Werte sind dieselben, die an die [`fetch()` Anfrage](/de/docs/Web/API/RequestInit#credentials) übergeben werden können: `omit`, `same-origin` oder `include`.
        Der Standardwert ist `same-origin` (Anmeldeinformationen nur für gleichherkunft Anfragen einschließen).

        Dies wird bei klassischen Workern ignoriert.

    - `name`
      - : Ein String, der einen identifizierenden Namen für den [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) angibt, der den Geltungsbereich des Workers darstellt, was hauptsächlich für Debugging-Zwecke nützlich ist.
    - `type`
      - : Ein String, der den Typ des zu erstellenden Workers angibt.
        Der Wert kann `classic` oder `module` sein.
        Der Standardwert ist `classic`.

### Ausnahmen

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der MIME-Typ des Worker-Skripts falsch ist.
    Es _sollte_ immer `text/javascript` sein (aus historischen Gründen könnten [andere JavaScript MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types#legacy_javascript_mime_types) akzeptiert werden).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn dem Dokument nicht erlaubt ist, Worker zu starten, z.B. wenn die URL eine ungültige Syntax hat oder die Same-Origin-Policy verletzt wird.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `url` nicht analysiert werden kann.
- `TypeError`
  - : Wird ausgelöst, wenn der `url` Parameter ein String ist, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Der **`Worker()`** Konstruktor erstellt ein [`Worker`](/de/docs/Web/API/Worker) Objekt, das das klassische Skript oder Modul an der angegebenen URL ausführt.

Das Skript muss [gleichherkunft](/de/docs/Web/Security/Defenses/Same-origin_policy) mit dem zugehörigen Dokument sein, darf jedoch selbst Skripte oder Module importieren, die aus verschiedenen Ursprüngen stammen (falls von CORS und anderen Einschränkungen erlaubt).
Wenn ein Worker mit verschiedenen Ursprüngen erforderlich ist, müssen Benutzer ihn von einem zwischengeschalteten gleichherkunft Worker oder einem Blob laden.

### Modul- und klassische Worker

Ein klassischer Worker ist einer, der aus einem klassischen Skript erstellt wird, während ein Modul-Worker aus einem [ECMAScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) erstellt wird.
Der Typ des Workers wirkt sich auf die Worker-Konstruktoroptionen aus, auf die Art, wie das Worker-Skript abgerufen und ausgeführt wird.

Der folgende Code zeigt zwei Möglichkeiten, wie Sie einen klassischen Worker konstruieren können, und auch, wie Sie den `type` als `"module"` angeben, um einen Modul-Worker zu erstellen.
In beiden Fällen muss das Skript gleichherkunft mit dem ladenden Dokument sein und wird relativ zum Standort des startenden Dokuments aufgelöst.

```js
// Construct a classic worker
const worker1 = new Worker("worker_classic.js");
const worker2 = new Worker("worker_classic.js", {
  type: "classic",
});

// Construct a module worker
const worker3 = new Worker("worker_module.js", {
  type: "module",
});
```

Modul-Worker und ihre Abhängigkeiten werden unter Verwendung der ECMAScript-Modul-Semantik geladen und ausgeführt:

- Abhängigkeiten werden über statische [`import` Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/import) importiert
- Asynchron mit [CORS](/de/docs/Web/HTTP/Guides/CORS) abgerufen.
- Alle Module werden aufgelöst, bevor irgendein Code ausgeführt wird
- Müssen mit dem Medientyp `Content-Type: text/javascript` bedient werden
- Ausgeführt im {{Glossary("Strict_mode", "Strict mode")}}

Klassische Worker werden als Skripte abgerufen und ausgeführt:

- Abhängigkeiten werden mit der Methode [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert
- Synchron im `no-cors` Modus abgerufen

### Import von Skripten oder Modulen

Modul-Worker können [ECMAScript-Module](/de/docs/Web/JavaScript/Guide/Modules) mithilfe von [`import` Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/import) importieren.
Module werden mit CORS abgerufen, sodass Cross-Origin-Module mit dem {{httpheader("Access-Control-Allow-Origin")}} Header bereitgestellt werden müssen, um geladen zu werden.
Entwickler können angeben, ob Anmeldeinformationen in Cross-Origin-Imports gesendet werden sollen oder nicht.

Klassische Worker können Skripte (aber keine Module) mit der Methode [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importieren.
Im Gegensatz zu Modulen werden Skripte im `no-cors` Modus abgerufen und können Cross-Origin angefordert werden, auch wenn der Server die entsprechenden CORS-Header nicht setzt.
Anmeldeinformationen werden bei Imports gleichherkunft gesendet, aber in der Regel nicht bei Cross-Origin-Anfragen.

Darüber hinaus muss, wenn das Dokument eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) hat, die Ursprünge importierter Skripte oder Module erlaubt sein.
Für Module werden die erlaubten Quellen in `worker-src` (mit Rückgriff auf `script-src` und `default-src` Direktiven) angegeben, während für klassische Skripte die Quellen in `script-src` (mit Rückgriff auf `default-src` Direktiven) spezifiziert werden.

### `data:` und `blob:` URLs

`data:` URLs können an den `url` Parameter übergeben werden, haben jedoch einen {{Glossary("Origin#opaque_origin", "opaque_origin")}}, was sie zu Cross-Origin für alle anderen Ursprünge, einschließlich ihres Eigentümers, macht.

Folglich kann der Worker zwar noch mit seinem Eigentümer über `postMessage()` kommunizieren, aber sein Zugriff auf andere externe Ressourcen ist stark eingeschränkt.
Beispielsweise würde eine Worker-`fetch()` Anfrage Cross-Origin zu seiner eigenen Seite sein, und jede Anfrage an einen beliebigen Ursprung muss von CORS gewährt werden.

`blob:` URLs sollten stattdessen, wo möglich, verwendet werden, da die URL den Ursprung des Dokuments erbt, das sie erstellt hat.
Dies stellt sicher, dass ein Worker, der mit einer `blob:` URL erstellt wird, gleichherkunft mit der Seite ist, die ihn erstellt hat.
Beachten Sie, dass, wenn Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verwenden, um zu beschränken, welche Ressourcen in Ihren Worker geladen werden können, Sie den `blob:` Ursprung erlauben müssen.

### Überlegungen für Bundler

Bundler wie [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers) empfehlen, URLs, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) sind, an den `Worker()` Konstruktor zu übergeben.

Zum Beispiel:

```js
const myWorker = new Worker(new URL("worker.js", import.meta.url));
```

Dies macht den Pfad relativ zum aktuellen Skript anstatt zur aktuellen HTML-Seite, was dem Bundler erlaubt, sicher Optimierungen wie Umbenennung durchzuführen (weil andernfalls die `worker.js` URL auf eine Datei zeigen könnte, die nicht vom Bundler kontrolliert wird, sodass keine Annahmen getroffen werden können).

### Sicherheitsüberlegungen

Das Skript oder Modul, das durch das `url` Argument angegeben wird, wird im Web Worker-Kontext ausgeführt und kann selbst andere Skripte aus derselben Herkunft und aus verschiedenen Ursprüngen importieren.
Wenn die `url` von einem Benutzer bereitgestellt wird, ist dies ein möglicher Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe.

Während Web Worker keinen direkten Zugriff auf das besitzende Dokument oder Fenster haben, ist es dennoch äußerst riskant, willkürlich URLs von nicht vertrauenswürdigen Ursprüngen zu akzeptieren und auszuführen.
Für Modul-Worker, aber nicht für klassische Worker, wird CORS kontrollieren, welche Ressourcen von verschiedenen Ursprüngen angefordert werden können.

Eine Website sollte auch kontrollieren, welche Skripte mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) mit der [`worker-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/worker-src) Direktive (oder einem Rückgriff auf [`child-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/child-src), [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src)) ausgeführt werden dürfen.
Dies kann Skripten auf diejenigen vom aktuellen Ursprung oder eine spezifische Menge von Ursprüngen oder sogar bestimmte Dateien beschränken.

Wenn Sie diese Eigenschaft verwenden und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) (mithilfe der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP Direktive), müssen Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Objekte anstelle von Strings zuweisen.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, URLs, die vom Worker benötigt werden, abzulehnen oder zu modifizieren, bevor sie abgerufen werden.

## Beispiele

Aus Gründen der Kürze verwendet nur das erste Beispiel unten trusted types.
In der Produktion sollte Ihr Code immer trusted types verwenden, wenn Daten, die von Benutzern stammen, in Injection Sinks übergeben werden.

### Verwendung von Trusted Types

Um das Risiko von XSS zu mindern, sollten wir immer `TrustedScriptURL` Instanzen an die Worker-URL anstelle von Strings übergeben.
Wir müssen dies auch tun, wenn wir trusted types aus anderen Gründen durchsetzen und einige Quellen erlauben möchten, die zugelassen wurden (durch `CSP: worker-src`).

Trusted Types werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst das [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die JavaScript-API der Trusted Types:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createScriptURL()`](/de/docs/Web/API/TrustedTypePolicy/createScriptURL) Methode definiert, um Eingabestrings in [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Instanzen zu transformieren.

Für den Zweck dieses Beispiels gehen wir davon aus, dass wir eine vordefinierte Menge von URLs im `workerScriptAllowList` Array erlauben und alle anderen Skripte protokollieren möchten.

```js
const workerScriptAllowList = [
  // Some list of allowed URLs
];
const policy = trustedTypes.createPolicy("worker-url-policy", {
  createScriptURL(input) {
    if (workerScriptAllowList.includes(input)) {
      return input; // allow the script
    }
    console.log(`Script not in workerScriptAllowList: ${input}`);
    return ""; // Block the script
  },
});
```

Als nächstes verwenden wir unser `policy` Objekt, um ein `trustedScriptURL` Objekt aus einem potenziell unsicheren Eingabestring zu erstellen und dieses an den Worker zu übergeben.

```js
// The potentially malicious worker URL
// We won't be including untrustedScript in our workerScriptAllowList array
const untrustedScriptURL = "https://evil.example.com/naughty.js";

// Create a TrustedScriptURL instance using the policy
const trustedScriptURL = policy.createScriptURL(untrustedScriptURL);

// Construct the worker with the trusted URL
const myWorker = new Worker(trustedScriptURL);
```

### Erstellung eines klassischen Workers

Der folgende Codeausschnitt zeigt die Erstellung eines klassischen [`Worker`](/de/docs/Web/API/Worker) Objekts mit dem `Worker()` Konstruktor und die anschließende Nutzung des Objekts:

```js
const myWorker = new Worker("worker.js");
const first = document.querySelector("input#number1");

first.onchange = () => {
  myWorker.postMessage(first.value);
  console.log("Message posted to worker");
};
```

Für ein vollständiges Beispiel siehe unser [Einfaches Beispiel für dedizierte Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

### Laden eines Cross-Origin Modul-Workers aus einem Blob

Dieses Beispiel zeigt eine Methode, die ein Cross-Origin Modul-Worker-Skript abrufen und laden kann und es dann als Blob in Ihren Worker lädt (ein klassisches Skript könnte auf die gleiche Weise geladen werden):

```js
async function loadWorker() {
  const response = await fetch("https://other_origin.com/worker.js");
  const script = await response.text();

  // Create a blob that contains the fetched script, and then create a URL from that blob
  const blob = new Blob([script], { type: "application/javascript" });
  const workerUrl = URL.createObjectURL(blob);

  try {
    const worker = new Worker(workerUrl, { type: "module" });
  } catch (e) {
    console.error(`Cross-origin worker module failed to load: ${e}`);
  }
}
loadWorker();
```

Der erste Abruf wird mit CORS durchgeführt, daher muss die `other_origin.com` Antwort den {{httpheader("Access-Control-Allow-Origin")}} Header enthalten, wie gezeigt:

```http
Access-Control-Allow-Origin "https://my_origin.com"
```

Wenn Sie außerdem eine CSP verwenden, müssen Sie den `blob:` Ursprung für `worker-src` erlauben, damit dieser in das Dokument geladen werden kann:

```http
Content-Security-Policy worker-src 'self' https://other_origin.com blob:
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker)
- [Trusted Types API](/de/docs/Web/API/Trusted_Types_API)
