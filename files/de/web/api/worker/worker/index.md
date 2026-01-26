---
title: "Worker: Worker() Konstruktor"
short-title: Worker()
slug: Web/API/Worker/Worker
l10n:
  sourceCommit: d359e01c8cbe5ace455a9d3d149a280dffcf0cf9
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

> [!WARNING]
> Das Skript, das an das `url`-Element übergeben wird, wird ausgeführt.
> APIs wie diese sind bekannt als [Einspeisepunkte für Skripte](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und stellen potenziell eine Angriffsfläche für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) dar.
>
> Sie können dieses Risiko mindern, indem Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) einrichten, die die Orte einschränkt, von denen Skripte geladen werden können, und indem Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Zeichenfolgen zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Der **`Worker()`** Konstruktor erstellt ein [`Worker`](/de/docs/Web/API/Worker)-Objekt, das das angegebene klassische Skript oder Modul an der angegebenen URL ausführt.

## Syntax

```js-nolint
new Worker(url)
new Worker(url, options)
```

### Parameter

- `url`
  - : Ein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekt oder eine Zeichenfolge, die die URL des Skripts oder Moduls darstellt, das der Worker ausführen wird.

    Diese muss dasselbe Ursprungsdokument wie das aufrufende Dokument haben oder eine `blob:`- oder `data:`-URL sein.
    Die URL wird relativ zum aktuellen Standort der HTML-Seite aufgelöst.

- `options` {{optional_inline}}
  - : Ein Objekt, das Options-/Eigenschaften enthält, die bei der Erstellung der Objektinstanz festgelegt werden können.
    Verfügbare Eigenschaften sind:
    - `credentials`
      - : Eine Zeichenfolge, die spezifiziert, ob der Browser Zugangsdaten sendet, wenn Module in einen Modul-Worker importiert werden.
        Die erlaubten Werte sind dieselben, die an die [`fetch()`-Anfrage](/de/docs/Web/API/RequestInit#credentials) übergeben werden können: `omit`, `same-origin` oder `include`.
        Der Standardwert ist `same-origin` (Zugangsdaten werden nur für Anfragen des gleichen Ursprungs einbezogen).

        Dies wird für klassische Worker ignoriert.

    - `name`
      - : Eine Zeichenfolge, die einen identifizierenden Namen für den [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) angibt, der den Geltungsbereich des Workers darstellt, was hauptsächlich für Debuggingzwecke nützlich ist.
    - `type`
      - : Eine Zeichenfolge, die den Typ des zu erstellenden Workers angibt.
        Der Wert kann `classic` oder `module` sein.
        Der Standardwert ist `classic`.

### Ausnahmen

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der MIME-Typ des Worker-Skripts falsch ist.
    Er _sollte_ immer `text/javascript` sein (aus historischen Gründen können [andere JavaScript-MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types#legacy_javascript_mime_types) akzeptiert werden).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument keine Worker starten darf, z.B. wenn die URL eine ungültige Syntax hat oder die gleiche Ursprungsrichtlinie verletzt wird.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `url` nicht geparst werden kann.
- `TypeError`
  - : Wird ausgelöst, wenn der `url`-Parameter eine Zeichenfolge ist, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch ein CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Der **`Worker()`** Konstruktor erstellt ein [`Worker`](/de/docs/Web/API/Worker)-Objekt, das das klassische Skript oder Modul an der angegebenen URL ausführt.

Das Skript muss [same-origin](/de/docs/Web/Security/Defenses/Same-origin_policy) mit dem zugehörigen Dokument sein, kann jedoch selbst Skripte oder Module importieren, die Cross-Origin sind (wenn dies von CORS und anderen Einschränkungen erlaubt ist).
Wenn ein Cross-Origin-Worker erforderlich ist, müssen Benutzer ihn von einem dazwischenliegenden same-origin Worker oder einem Blob laden.

### Modul- und klassische Worker

Ein klassischer Worker wird aus einem klassischen Skript erstellt, während ein Modul-Worker aus einem [ECMAScript-Modul](/de/docs/Web/JavaScript/Guide/Modules) erstellt wird.
Der Typ des Workers beeinflusst die Worker-Konstruktoroptionen, wie das Worker-Skript abgerufen und ausgeführt wird.

Der folgende Code zeigt zwei Möglichkeiten, wie Sie einen klassischen Worker konstruieren können, und auch, wie Sie den `type` `"module"` angeben, um einen Modul-Worker zu erstellen.
In beiden Fällen muss das Skript dasselbe Ursprung wie das ladende Dokument haben und wird relativ zur Position des startenden Dokuments aufgelöst.

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
- Asynchron mit [CORS](/de/docs/Web/HTTP/Guides/CORS) abgerufen.
- Alle Module werden aufgelöst, bevor irgendein Code ausgeführt wird
- Muss mit dem Medientyp `Content-Type: text/javascript` bereitgestellt werden
- Im {{Glossary("Strict_mode", "Strict mode")}} ausgeführt

Klassische Worker werden als Skripte abgerufen und ausgeführt:

- Abhängigkeiten werden mit der Methode [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert
- Synchron im `no-cors`-Modus abgerufen

### Importieren von Skripten oder Modulen

Modul-Worker können [ECMAScript-Module](/de/docs/Web/JavaScript/Guide/Modules) mit [`import`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/import) importieren.
Module werden mit CORS abgerufen, daher müssen Cross-Origin-Module mit dem {{httpheader("Access-Control-Allow-Origin")}}-Header bereitgestellt werden, damit sie geladen werden können.
Entwickler können angeben, ob Zugangsdaten bei Cross-Origin-Imports gesendet werden sollen oder nicht.

Klassische Worker können Skripte (aber keine Module) mit der Methode [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importieren.
Im Gegensatz zu Modulen werden Skripte im `no-cors`-Modus abgerufen und können Cross-Origin angefordert werden, auch wenn der Server keine entsprechenden CORS-Header setzt.
Zugangsdaten werden für Same-Origin-Imports gesendet, normalerweise jedoch nicht für Cross-Origin-Anfragen.

Außerdem muss, wenn das Dokument eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) hat, die Herkunft der importierten Skripte oder Module zugelassen werden.
Für Module werden die erlaubten Quellen in `worker-src` angegeben (mit Fallback auf `script-src` und `default-src` Direktiven), während für klassische Skripte die Quellen in `script-src` (mit Fallback auf die `default-src` Direktiven) spezifiziert werden.

### `data:`- und `blob:`-URLs

`data:`-URLs können an den `url`-Parameter übergeben werden, haben jedoch einen {{Glossary("Origin#opaque_origin", "opaque_origin")}}, was sie zu einem Cross-Origin für alle anderen Ursprünge einschließlich ihres eigenen Besitzers macht.

Daher kann der Worker zwar immer noch mit seinem Besitzer über `postMessage()` kommunizieren, sein Zugang zu anderen externen Ressourcen ist jedoch stark eingeschränkt.
Ein `fetch()`-Anruf des Workers wäre für seine eigene Seite Cross-Origin, und alle Anfragen an jeden Ursprung müssen von CORS genehmigt werden.

Stattdessen sollten `blob:`-URLs verwendet werden, sofern möglich, da die URL den Ursprung des Dokuments erbt, das sie erstellt hat.
Dies stellt sicher, dass ein mit einer `blob:`-URL erstellter Worker denselben Ursprung wie die Seite hat, die ihn erstellt hat.
Beachten Sie, dass Sie, wenn Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verwenden, um einzuschränken, welche Ressourcen in Ihren Worker geladen werden können, die `blob:`-Ursprung zulassen müssen.

### Überlegungen zum Bundler

Bundler wie [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers) empfehlen, URLs, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) sind, an den `Worker()`-Konstruktor zu übergeben.

Zum Beispiel:

```js
const myWorker = new Worker(new URL("worker.js", import.meta.url));
```

Dies macht den Pfad relativ zum aktuellen Skript statt zur aktuellen HTML-Seite, was es dem Bundler ermöglicht, sicher Optimierungen wie Umbenennungen vorzunehmen (da andernfalls die `worker.js`-URL auf eine Datei verweisen könnte, die nicht vom Bundler kontrolliert wird, sodass keine Annahmen getroffen werden können).

### Sicherheitsüberlegungen

Das durch das `url`-Argument angegebene Skript oder Modul wird im Web-Worker-Kontext ausgeführt und kann selbst andere Same-Origin- und Cross-Origin-Skripte importieren.
Wenn die `url` von einem Benutzer bereitgestellt wird, ist dies ein möglicher Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe.

Obwohl Web-Worker keinen direkten Zugriff auf das besitzende Dokument oder Fenster haben, ist es dennoch extrem riskant, willkürlich URLs aus nicht vertrauenswürdigen Ursprüngen anzunehmen und auszuführen.
Für Modul-Worker, aber nicht für klassische Worker, wird CORS kontrollieren, welche Cross-Origin-Ressourcen angefordert werden können.

Eine Website sollte auch kontrollieren, welche Skripte mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) mit der [`worker-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/worker-src) Direktive (oder einem Fallback auf [`child-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/child-src), [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src)) ausgeführt werden dürfen.
Dies kann Skripte auf die derzeitige Herkunft, eine spezifische Menge von Herkünften oder sogar auf bestimmte Dateien beschränken.

Wenn Sie diese Eigenschaft verwenden und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) (mit der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)) müssen Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Zeichenfolgen zuweisen.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, URLs abzulehnen oder zu modifizieren, die der Worker benötigt bevor sie abgerufen werden.

## Beispiele

Der Kürze halber verwendet nur das erste Beispiel unten Trusted Types.
In Produktionscode sollte stets Trusted Types verwendet werden, wenn Daten, die von Benutzern stammen, in Einspeisepunkte übergeben werden.

### Verwendung von Trusted Types

Um das Risiko von XSS zu verringern, sollten Sie immer `TrustedScriptURL`-Instanzen anstelle von Zeichenfolgen an die Worker-URL übergeben.
Wir müssen dies auch tun, wenn wir Trusted Types aus anderen Gründen durchsetzen und einige Quellen erlauben möchten, die zugelassen wurden (durch `CSP: worker-src`).

Trusted Types werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst den [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies dient als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine Methode [`createScriptURL()`](/de/docs/Web/API/TrustedTypePolicy/createScriptURL) definiert, um Eingabezeichenfolgen in [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanzen zu transformieren.

Für den Zweck dieses Beispiels nehmen wir an, dass wir eine vordefinierte Menge von URLs im `workerScriptAllowList`-Array zulassen und andere Skripte protokollieren möchten.

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

Als nächstes verwenden wir unser `policy`-Objekt, um ein `trustedScriptURL`-Objekt aus einer potenziell unsicheren Eingabezeichenfolge zu erstellen und dies an den Worker zu übergeben.

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

### Laden eines Cross-Origin-Modul-Workers von einem Blob

Dieses Beispiel zeigt eine Methode, die ein Cross-Origin-Modul-Worker-Skript abrufen und dann als Blob in Ihren Worker laden kann (ein klassisches Skript könnte auf dieselbe Weise geladen werden):

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

Der anfängliche Abruf erfolgt mit CORS, sodass die `other_origin.com`-Antwort den Header {{httpheader("Access-Control-Allow-Origin")}} wie gezeigt enthalten muss:

```http
Access-Control-Allow-Origin "https://my_origin.com"
```

Darüber hinaus, wenn Sie eine CSP verwenden, müssen Sie die `blob:`-Ursprung für `worker-src` zulassen, damit sie in das Dokument geladen werden kann:

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
