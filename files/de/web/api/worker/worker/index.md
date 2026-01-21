---
title: "Worker: Worker()-Konstruktor"
short-title: Worker()
slug: Web/API/Worker/Worker
l10n:
  sourceCommit: d6f264d67b36a1c8b540f985422f52698c857a34
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

> [!WARNING]
> Dieses Skript, das dem `url`-Element übergeben wird, wird ausgeführt.
> Solche APIs werden als [injection sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.
>
> Sie können dieses Risiko verringern, indem Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) haben, die die Orte einschränkt, von denen Skripte geladen werden können, und indem Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Zeichenfolgen zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Der **`Worker()`**-Konstruktor erstellt ein [`Worker`](/de/docs/Web/API/Worker)-Objekt, das das klassische Skript oder Modul an der angegebenen URL ausführt.

## Syntax

```js-nolint
new Worker(url)
new Worker(url, options)
```

### Parameter

- `url`
  - : Ein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekt oder eine Zeichenfolge, die die URL des Skripts oder Moduls darstellt, das der Worker ausführen wird.

    Dies muss gleicher Ursprung mit dem Dokument des Anrufers sein oder eine `blob:`- oder `data:`-URL.
    Die URL wird relativ zum aktuellen Standort der HTML-Seite aufgelöst.

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionsattribute enthält, die bei der Erstellung der Objektinstanz festgelegt werden können.
    Verfügbare Eigenschaften sind wie folgt:
    - `credentials`
      - : Eine Zeichenkette, die angibt, ob der Browser Anmeldeinformationen sendet, wenn Module in einen Modul-Worker importiert werden.
        Zulässige Werte sind die gleichen wie die, die an die [`fetch()`-Anfrage](/de/docs/Web/API/RequestInit#credentials) übergeben werden können: `omit`, `same-origin` oder `include`.
        Der Standardwert ist `same-origin` (Anmeldeinformationen nur für Anfragen mit gleichem Ursprung einschließen).

        Dies wird für klassische Worker ignoriert.

    - `name`
      - : Eine Zeichenkette, die einen identifizierenden Namen für den [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) angibt, der den Bereich des Workers darstellt, was hauptsächlich für Debugging-Zwecke nützlich ist.
    - `type`
      - : Eine Zeichenkette, die den Typ des zu erstellenden Workers angibt.
        Der Wert kann `classic` oder `module` sein.
        Der Standardwert ist `classic`.

### Ausnahmen

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der MIME-Typ des Worker-Skripts falsch ist.
    Er _sollte_ immer `text/javascript` sein (aus historischen Gründen können [andere JavaScript-MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types#legacy_javascript_mime_types) akzeptiert werden).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument keine Worker starten darf, z.B. wenn die URL eine ungültige Syntax hat oder wenn die gleiche-Origin-Politik verletzt wird.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `url` nicht analysiert werden kann.
- `TypeError`
  - : Wird ausgelöst, wenn der `url`-Parameter eine Zeichenfolge ist, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Der **`Worker()`**-Konstruktor erstellt ein [`Worker`](/de/docs/Web/API/Worker)-Objekt, das das klassische Skript oder Modul an der angegebenen URL ausführt.

Das Skript muss [same-origin](/de/docs/Web/Security/Defenses/Same-origin_policy) mit dem zugehörigen Dokument sein, kann jedoch selbst Skripte oder Module importieren, die fremder Herkunft sind (wenn dies durch CORS und andere Einschränkungen erlaubt ist).
Wenn ein Worker mit fremder Herkunft erforderlich ist, müssen Benutzer ihn von einem zwischengeschalteten gleichartigen Worker oder einem Blob laden.

### Modul- und klassische Worker

Ein klassischer Worker ist einer, der aus einem klassischen Skript konstruiert ist, während ein Modul-Worker aus einem [ECMASCript-Modul](/de/docs/Web/JavaScript/Guide/Modules) konstruiert wird.
Die Art des Workers beeinflusst die Worker-Konstruktoroptionen, wie das Worker-Skript abgerufen wird und wie es ausgeführt wird.

Der unten stehende Code zeigt zwei Möglichkeiten, wie Sie einen klassischen Worker konstruieren können, und auch, wie Sie den `type` `"module"` angeben, um einen Modul-Worker zu erstellen.
In beiden Fällen muss das Skript same-origin zum ladenden Dokument sein und wird relativ zur Position des startenden Dokuments aufgelöst.

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
- Müssen mit dem Medientyp `Content-Type: text/javascript` serviert werden
- Im {{Glossary("Strict_mode", "Strict mode")}} ausgeführt

Klassische Worker werden als Skripte abgerufen und ausgeführt:

- Abhängigkeiten werden mithilfe der Methode [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert
- Synchron im `no-cors`-Modus abgerufen

### Skripte oder Module importieren

Modul-Worker können [ECMASCript-Module](/de/docs/Web/JavaScript/Guide/Modules) mit [`import`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/import) importieren.
Module werden mit CORS abgerufen, sodass fremde Module mit dem {{httpheader("Access-Control-Allow-Origin")}}-Header bereitgestellt werden müssen, um geladen zu werden.
Entwickler können angeben, ob Anmeldeinformationen bei fremden Importen gesendet werden sollen oder nicht.

Klassische Worker können Skripte (aber keine Module) mit der Methode [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importieren.
Im Gegensatz zu Modulen werden Skripte im `no-cors`-Modus abgerufen und können auch fremd angefragt werden, wenn der Server nicht die passenden CORS-Header setzt.
Anmeldeinformationen werden für same-origin-Importe gesendet, aber normalerweise nicht für fremde Anfragen.

Darüber hinaus muss, wenn das Dokument eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) hat, diese die Ursprünge importierter Skripte oder Module zulassen.
Für Module sind die erlaubten Quellen in `worker-src` (mit Rückfall auf `script-src` und `default-src`-Direktiven) festgelegt, während für klassische Skripte die Quellen in `script-src` (mit Rückfall auf die `default-src`-Direktiven) festgelegt sind.

### `data:`- und `blob:`-URLs

`data:`-URLs können an den `url`-Parameter übergeben werden, haben aber einen {{Glossary("Origin#opaque_origin", "opaque_origin")}}, der sie für alle anderen Ursprünge einschließlich ihres Eigentümers fremd macht.

Folglich kann der Worker zwar noch mit seinem Eigentümer über `postMessage()` kommunizieren, sein Zugriff auf andere externe Ressourcen ist jedoch stark eingeschränkt.
Zum Beispiel würde eine `fetch()`-Anfrage des Workers als fremd zu seiner eigenen Seite behandelt, und jede Anfrage an irgendeinen Ursprung muss von CORS erlaubt werden.

Stattdessen sollten, wenn möglich, `blob:`-URLs verwendet werden, da die URL den Ursprung des Dokuments erbt, das sie erstellt hat.
Dies stellt sicher, dass ein Worker, der mit einer `blob:`-URL erstellt wurde, den gleichen Ursprung hat wie die Seite, die ihn erstellt hat.
Beachten Sie, dass, wenn Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verwenden, um einzuschränken, welche Ressourcen in Ihren Worker geladen werden können, Sie den `blob:`-Ursprung zulassen müssen.

### Überlegungen zu Bundlern

Bundler wie [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers) empfehlen, URLs zu übergeben, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) an den `Worker()`-Konstruktor sind.

Zum Beispiel:

```js
const myWorker = new Worker(new URL("worker.js", import.meta.url));
```

Dies macht den Pfad relativ zum aktuellen Skript und nicht zur aktuellen HTML-Seite, was es dem Bundler ermöglicht, sicher Optimierungen wie Umbenennen durchzuführen (da ansonsten die `worker.js`-URL auf eine Datei verweisen könnte, die nicht vom Bundler kontrolliert wird, sodass er keine Annahmen treffen kann).

### Sicherheitsüberlegungen

Das Skript oder Modul, das durch das `url`-Argument angegeben wird, wird im Kontext des Web Workers ausgeführt und kann selbst andere same-origin und fremde Skripte importieren.
Wenn die `url` von einem Nutzer bereitgestellt wird, ist dies ein möglicher Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.

Obwohl Web Workers keinen direkten Zugriff auf das besitzende Dokument oder Fenster haben, ist es dennoch äußerst riskant, beliebige URLs von untrusted Ursprüngen zu akzeptieren und auszuführen.
Für Modul-Worker, jedoch nicht für klassische Worker, wird CORS kontrollieren, welche fremden Ressourcen angefordert werden können.

Eine Webseite sollte auch steuern, welche Skripte ausgeführt werden dürfen, indem eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) mit der [`worker-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/worker-src)-Direktive (oder einem Rückgriff auf [`child-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/child-src), [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src)) verwendet wird.
Dies kann Scripts auf diejenigen vom aktuellen Ursprung, ein spezifisches Set von Ursprüngen oder sogar bestimmte Dateien einschränken.

Wenn Sie diese Eigenschaft verwenden und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) (unter Verwendung der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive), müssen Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Zeichenfolgen zuweisen.
Dadurch wird sichergestellt, dass die Eingabe durch eine Transformationsfunktion gegeben wird, die die Möglichkeit hat, URLs abzulehnen oder zu modifizieren, die der Worker benötigt, bevor sie abgerufen werden.

## Beispiele

Aus Gründen der Kürze nutzt nur das erste Beispiel unten Trusted Types.
In Produktionsumgebungen sollte Ihr Code immer Trusted Types verwenden, wenn Daten, die von Benutzern stammen, in Injection Sinks übergeben werden.

### Verwendung von Trusted Types

Um das Risiko von XSS zu mindern, sollten wir immer `TrustedScriptURL`-Instanzen an die Worker-URL anstelle von Zeichenfolgen übergeben.
Wir müssen dies auch tun, wenn wir Trusted Types aus anderen Gründen durchsetzen und einige Quellen zulassen möchten, die erlaubt worden sind (durch `CSP: worker-src`).

Trusted Types werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst das [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine Methode [`createScriptURL()`](/de/docs/Web/API/TrustedTypePolicy/createScriptURL) definiert, um Eingabezeichenfolgen in [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanzen zu transformieren.

Für den Zweck dieses Beispiels nehmen wir an, dass wir eine vordefinierte Gruppe von URLs im Array `workerScriptAllowList` zulassen wollen und alle anderen Skripte protokollieren.

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

Als Nächstes verwenden wir unser `policy`-Objekt, um ein `trustedScriptURL`-Objekt aus einer potenziell unsicheren Eingabezeichenfolge zu erstellen und übergeben dieses an den Worker.

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

Der folgende Codeausschnitt zeigt die Erstellung eines klassischen [`Worker`](/de/docs/Web/API/Worker)-Objekts mit dem `Worker()`-Konstruktor und die anschließende Verwendung des Objekts:

```js
const myWorker = new Worker("worker.js");
const first = document.querySelector("input#number1");

first.onchange = () => {
  myWorker.postMessage(first.value);
  console.log("Message posted to worker");
};
```

Für ein vollständiges Beispiel siehe unser [Einfaches dediziertes Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

### Laden eines Cross-Origin-Modul-Workers von einem Blob

Dieses Beispiel zeigt eine Methode, die ein Cross-Origin-Modul-Worker-Skript abrufen und laden kann und dieses dann als Blob in Ihren Worker lädt (ein klassisches Skript könnte auf die gleiche Weise geladen werden):

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

Der anfängliche Abruf wird mit CORS durchgeführt, sodass die Antwort von `other_origin.com` den {{httpheader("Access-Control-Allow-Origin")}}-Header enthalten muss, wie gezeigt:

```http
Access-Control-Allow-Origin "https://my_origin.com"
```

Darüber hinaus müssen Sie, wenn Sie eine CSP verwenden, den `blob:`-Ursprung für `worker-src` zulassen, damit er ins Dokument geladen werden kann:

```http
Content-Security-Policy worker-src 'self' https://other_origin.com blob:
```

## Spezifikationen

{{Speifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Worker`](/de/docs/Web/API/Worker)
- [Trusted Types API](/de/docs/Web/API/Trusted_Types_API)
