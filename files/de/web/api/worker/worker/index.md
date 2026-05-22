---
title: "Worker: Konstruktor Worker()"
short-title: Worker()
slug: Web/API/Worker/Worker
l10n:
  sourceCommit: 63ab30ba03e9f0c638e3cb42bb2e878aaaeffa53
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

> [!WARNING]
> Dieses Skript, dass dem `url`-Element übergeben wird, wird ausgeführt.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.
>
> Sie können dieses Risiko mindern, indem Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) haben, die die Orte einschränkt, von denen Skripte geladen werden können, und indem Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Strings zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Der **`Worker()`**-Konstruktor erstellt ein [`Worker`](/de/docs/Web/API/Worker)-Objekt, das das klassische Skript oder Modul an der angegebenen URL ausführt.

## Syntax

```js-nolint
new Worker(url)
new Worker(url, options)
```

### Parameter

- `url`
  - : Ein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekt oder ein String, der die URL des Skripts oder Moduls darstellt, das der Worker ausführen wird.

    Diese muss ursprungsgleich mit dem Dokument des Aufrufers sein, oder eine `blob:`- oder `data:`-URL.
    Die URL wird relativ zum aktuellen Ort der HTML-Seite aufgelöst.

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen enthält, die beim Erstellen der Objektinstanz festgelegt werden können.
    Verfügbare Eigenschaften sind wie folgt:
    - `credentials`
      - : Ein String, der angibt, ob der Browser Anmeldeinformationen sendet, wenn Module in einen Modul-Worker importiert werden.
        Die erlaubten Werte sind die gleichen, die an die [`fetch()`-Anfrage](/de/docs/Web/API/RequestInit#credentials) übergeben werden können: `omit`, `same-origin` oder `include`.
        Der Standardwert ist `same-origin` (nur Anmeldeinformationen für ursprungsgleiche Anfragen einbeziehen).

        Dies wird für klassische Worker ignoriert.

    - `name`
      - : Ein String, der einen identifizierenden Namen für den [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) angibt, der den Umfang des Workers repräsentiert, was hauptsächlich für Debugging-Zwecke nützlich ist.
    - `type`
      - : Ein String, der den Typ des Workers angibt, der erstellt werden soll.
        Der Wert kann `classic` oder `module` sein.
        Der Standardwert ist `classic`.

### Ausnahmen

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der MIME-Typ des Worker-Skripts falsch ist.
    Es _sollte_ immer `text/javascript` sein (aus historischen Gründen können [andere JavaScript-MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types#legacy_javascript_mime_types) akzeptiert werden).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht berechtigt ist, Worker zu starten, z.B., wenn die URL eine ungültige Syntax hat oder wenn die Same-Origin-Policy verletzt wird.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `url` nicht geparst werden kann.
- `TypeError`
  - : Wird ausgelöst, wenn der `url`-Parameter ein String ist, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Der **`Worker()`**-Konstruktor erstellt ein [`Worker`](/de/docs/Web/API/Worker)-Objekt, das das klassische Skript oder Modul an der angegebenen URL ausführt.

Das Skript muss [ursprungsgleich](/de/docs/Web/Security/Defenses/Same-origin_policy) mit dem zugehörigen Dokument sein, kann jedoch selbst Skripte oder Module importieren, die nicht ursprungsgleich sind (sofern durch CORS und andere Einschränkungen erlaubt).
Wenn ein nicht ursprungsgleicher Worker erforderlich ist, müssen Benutzer ihn von einem zwischengeschalteten ursprungsgleichen Worker oder einem Blob laden.

### Modul- und klassische Worker

Ein klassischer Worker ist einer, der aus einem klassischen Skript konstruiert wird, während ein Modul-Worker aus einem [ECMAScript Modul](/de/docs/Web/JavaScript/Guide/Modules) konstruiert wird.
Der Typ des Workers wirkt sich auf die Optionen des Worker-Konstruktors, darauf, wie das Worker-Skript abgerufen und wie es ausgeführt wird, aus.

Der unten stehende Code zeigt zwei Möglichkeiten, wie Sie einen klassischen Worker konstruieren können, und auch, wie Sie den `type` von `"module"` angeben, um einen Modul-Worker zu erstellen.
In beiden Fällen muss das Skript ursprungsgleich mit dem ladenden Dokument sein und wird relativ zum Ort des startenden Dokuments aufgelöst.

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

Modul-Worker und ihre Abhängigkeiten werden mit ECMAScript-Modul-Semantik geladen und ausgeführt:

- Abhängigkeiten werden über statische [`import`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/import) importiert
- Asynchron unter Verwendung von [CORS](/de/docs/Web/HTTP/Guides/CORS) abgerufen.
- Alle Module werden aufgelöst, bevor jeglicher Code ausgeführt wird
- Müssen mit dem Medientyp `Content-Type: text/javascript` bereitgestellt werden
- Ausgeführt im {{Glossary("Strict_mode", "Strict mode")}}

Klassische Worker werden als Skripte abgerufen und ausgeführt:

- Abhängigkeiten werden mit der Methode [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert
- Synchronously im `no-cors`-Modus abgerufen

### Importieren von Skripten oder Modulen

Modul-Worker können [ECMAScript-Module](/de/docs/Web/JavaScript/Guide/Modules) mit [`import`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/import) importieren.
Module werden unter Verwendung von CORS abgerufen, daher müssen Cross-Origin-Module mit dem {{httpheader("Access-Control-Allow-Origin")}}-Header bereitgestellt werden, um geladen zu werden.
Entwickler können spezifizieren, ob Anmeldeinformationen bei Cross-Origin-Imports gesendet werden sollen oder nicht.

Klassische Worker können Skripte (aber keine Module) mit der Methode [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importieren.
Im Gegensatz zu Modulen werden Skripte im `no-cors`-Modus abgerufen und können Cross-Origin angefordert werden, auch wenn der Server die entsprechenden CORS-Header nicht setzt.
Anmeldeinformationen werden für ursprungsgleiche Importe gesendet, normalerweise jedoch nicht für Cross-Origin-Anfragen.

Darüber hinaus, wenn das Dokument über eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verfügt, muss sie die Ursprünge der importierten Skripte oder Module zulassen.
Für Module werden die erlaubten Quellen in `worker-src` spezifiziert (mit Rückfall auf `script-src` und `default-src` Direktiven), während für klassische Skripte die Quellen in `script-src` spezifiziert werden (mit Rückfall auf die `default-src`-Direktiven).

### `data:` und `blob:` URLs

`data:`-URLs können dem `url`-Parameter übergeben werden, haben jedoch einen {{Glossary("Origin#opaque_origin", "undurchsichtigen Ursprung")}}, was sie zu Cross-Origin für alle anderen Ursprünge, einschließlich ihres Besitzers, macht.

Infolgedessen kann der Worker zwar weiterhin mit seinem Besitzer unter Verwendung von `postMessage()` kommunizieren, sein Zugriff auf andere externe Ressourcen ist jedoch stark eingeschränkt.
Zum Beispiel würde eine `fetch()`-Anfrage des Workers zu seiner eigenen Site Cross-Origin sein, und alle Anfragen an jeden Ursprung müssen durch CORS gewährt werden.

`blob:`-URLs sollten stattdessen verwendet werden, wo immer möglich, da die URL den Ursprung des Dokuments erbt, das sie erstellt hat.
Dies stellt sicher, dass ein Worker, der mit einer `blob:`-URL erstellt wurde, ursprungsgleich mit der Seite ist, die ihn erstellt hat.
Beachten Sie, dass, wenn Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verwenden, um einzuschränken, welche Ressourcen in Ihren Worker geladen werden können, Sie den `blob:`-Ursprung zulassen müssen.

### Bundler-Erwägungen

Bundler wie [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers) empfehlen, URLs relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) an den `Worker()`-Konstruktor zu übergeben.

Zum Beispiel:

```js
const myWorker = new Worker(new URL("worker.js", import.meta.url));
```

Dadurch wird der Pfad relativ zum aktuellen Skript statt zur aktuellen HTML-Seite, was dem Bundler erlaubt, sicher Optimierungen wie Umbenennungen vorzunehmen (da sonst die `worker.js`-URL auf eine Datei zeigen könnte, die nicht vom Bundler kontrolliert wird, sodass er keine Annahmen treffen kann).

### Sicherheitsüberlegungen

Das Skript oder Modul, das durch das `url`-Argument spezifiziert wird, wird im Kontext des Webworkers ausgeführt und kann selbst andere ursprungsgleiche und Cross-Origin-Skripte importieren.
Wenn die `url` von einem Benutzer bereitgestellt wird, stellt dies einen möglichen Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe dar.

Obwohl Webworker keinen direkten Zugriff auf das Dokument oder Fenster des Besitzers haben, ist es dennoch äußerst riskant, beliebige URLs von nicht vertrauenswürdigen Ursprüngen zu akzeptieren und auszuführen.
Für Modul-Worker, aber nicht für klassische Worker, wird CORS kontrollieren, welche Cross-Origin-Ressourcen angefordert werden können.

Eine Website sollte auch kontrollieren, welche Skripte mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) mit der [`worker-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/worker-src)-Direktive (oder einem Rückfall zu [`child-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/child-src), [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src)) ausgeführt werden dürfen.
Dies kann Skripte auf die des aktuellen Ursprungs, eine spezifische Menge von Ursprüngen oder sogar bestimmte Dateien beschränken.

Wenn Sie diese Eigenschaft verwenden und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) (unter Verwendung der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive), müssen Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Strings zuweisen.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, URLs, die der Worker benötigt, zu ändern oder abzulehnen, bevor sie abgerufen werden.

## Beispiele

Der Übersichtlichkeit halber verwendet nur das erste Beispiel unten Trusted Types.
In der Produktion sollte Ihr Code immer Trusted Types verwenden, wenn Daten, die von Benutzern stammen, in Injection Sinks übergeben werden.

### Verwendung von Trusted Types

Um das Risiko von XSS zu mindern, sollten wir immer `TrustedScriptURL`-Instanzen an die Worker-URL anstelle von Strings übergeben.
Wir müssen dies auch tun, wenn wir aus anderen Gründen Trusted Types durchsetzen und einige Quellen zulassen möchten, die erlaubt wurden (durch `CSP: worker-src`).

Trusted Types werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst das [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createScriptURL()`](/de/docs/Web/API/TrustedTypePolicy/createScriptURL)-Methode für die Umwandlung von Eingabestrings in [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanzen definiert.

Für das Beispiel nehmen wir an, dass wir eine vordefinierte Menge von URLs in dem Array `workerScriptAllowList` zulassen möchten und alle anderen Skripte protokollieren.

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

Anschließend verwenden wir unser `policy`-Objekt, um ein `trustedScriptURL`-Objekt aus einem potenziell unsicheren Eingabestring zu erstellen und dieses an den Worker zu übergeben.

```js
// The potentially malicious worker URL
// We won't be including untrustedScript in our workerScriptAllowList array
const untrustedScriptURL = "https://evil.example.com/naughty.js";

// Create a TrustedScriptURL instance using the policy
const trustedScriptURL = policy.createScriptURL(untrustedScriptURL);

// Construct the worker with the trusted URL
const myWorker = new Worker(trustedScriptURL);
```

### Erstellen eines klassischen Workers

Der folgende Codeausschnitt zeigt die Erstellung eines klassischen [`Worker`](/de/docs/Web/API/Worker)-Objekts mit dem `Worker()`-Konstruktor und die anschließende Verwendung des Objekts:

```js
const myWorker = new Worker("worker.js");
const first = document.querySelector("input#number1");

first.onchange = () => {
  myWorker.postMessage(first.value);
  console.log("Message posted to worker");
};
```

Für ein vollständiges Beispiel siehe unser [Grundlegendes Beispiel für dedizierte Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

### Laden eines Cross-Origin-Modul-Workers aus einem Blob

Dieses Beispiel zeigt eine Methode, die ein Cross-Origin-Modul-Worker-Skript abrufen und laden und es dann als Blob in Ihren Worker laden kann (ein klassisches Skript könnte auf die gleiche Weise geladen werden):

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

Der anfängliche Abruf erfolgt mit CORS, daher muss die Antwort von `other_origin.com` den {{httpheader("Access-Control-Allow-Origin")}}-Header enthalten, wie gezeigt:

```http
Access-Control-Allow-Origin "https://my_origin.com"
```

Darüber hinaus, wenn Sie eine CSP verwenden, müssen Sie den `blob:`-Ursprung für `worker-src` zulassen, damit er in das Dokument geladen werden kann:

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
