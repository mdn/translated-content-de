---
title: "Worker: Worker()-Konstruktor"
short-title: Worker()
slug: Web/API/Worker/Worker
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

> [!WARNING]
> Das Skript, das dem `url`-Parameter übergeben wird, wird ausgeführt.
> APIs wie diese gelten als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und können für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) genutzt werden.
>
> Sie können dieses Risiko verringern, indem Sie mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) einschränken, von welchen Orten Skripte geladen werden dürfen, und stets [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte statt Zeichenfolgen zuweisen sowie [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Der **`Worker()`**-Konstruktor erstellt ein [`Worker`](/de/docs/Web/API/Worker)-Objekt, das das klassische Skript oder Modul unter der angegebenen URL ausführt.

## Syntax

```js-nolint
new Worker(url)
new Worker(url, options)
```

### Parameter

- `url`
  - : Ein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekt oder eine Zeichenfolge, die die URL des Skripts oder Moduls angibt, das der Worker ausführen soll.

    Die URL muss denselben Ursprung wie das Dokument des Aufrufers haben oder eine `blob:`- bzw. `data:`-URL sein.
    Sie wird relativ zum Speicherort der aktuellen HTML-Seite aufgelöst.

- `options` {{optional_inline}}
  - : Ein Objekt mit optionalen Eigenschaften, die beim Erstellen der Objektinstanz festgelegt werden können.
    Folgende Eigenschaften stehen zur Verfügung:
    - `credentials`
      - : Eine Zeichenfolge, die angibt, ob der Browser beim Importieren von Modulen in einen Modul-Worker Anmeldeinformationen sendet.
        Zulässig sind dieselben Werte wie bei einer [`fetch()`-Anfrage](/de/docs/Web/API/RequestInit#credentials): `omit`, `same-origin` oder `include`.
        Der Standardwert ist `same-origin` (Anmeldeinformationen werden nur bei Anfragen an denselben Ursprung mitgesendet).

        Bei klassischen Workern wird diese Eigenschaft ignoriert.

    - `name`
      - : Eine Zeichenfolge, die einen Namen für den [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) angibt, der den Gültigkeitsbereich des Workers repräsentiert. Dies ist vor allem beim Debuggen hilfreich.
    - `type`
      - : Eine Zeichenfolge, die den Typ des zu erstellenden Workers angibt.
        Der Wert kann `classic` oder `module` sein.
        Der Standardwert ist `classic`.

### Ausnahmen

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der MIME-Typ des Worker-Skripts falsch ist.
    Er _sollte_ immer `text/javascript` sein (aus historischen Gründen werden möglicherweise auch [andere JavaScript-MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types#legacy_javascript_mime_types) akzeptiert).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument keine Worker starten darf, beispielsweise weil die URL eine ungültige Syntax hat oder gegen die Same-Origin-Policy verstößt.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `url` nicht geparst werden kann.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Parameter `url` eine Zeichenfolge ist, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Der **`Worker()`**-Konstruktor erstellt ein [`Worker`](/de/docs/Web/API/Worker)-Objekt, das das klassische Skript oder Modul unter der angegebenen URL ausführt.

Das Skript muss [denselben Ursprung](/de/docs/Web/Security/Defenses/Same-origin_policy) wie das zugehörige Dokument haben, darf aber selbst Skripte oder Module von anderen Ursprüngen importieren, sofern CORS und andere Beschränkungen dies erlauben.
Wenn ein Worker von einem anderen Ursprung benötigt wird, müssen Sie ihn über einen zwischengeschalteten Worker desselben Ursprungs oder über einen Blob laden.

### Modul- und klassische Worker

Ein klassischer Worker wird aus einem klassischen Skript erstellt, ein Modul-Worker dagegen aus einem [ECMAScript-Modul](/de/docs/Web/JavaScript/Guide/Modules).
Der Worker-Typ beeinflusst die Optionen des Worker-Konstruktors sowie die Art, wie das Worker-Skript abgerufen und ausgeführt wird.

Der folgende Code zeigt zwei Möglichkeiten, einen klassischen Worker zu erstellen, und wie Sie mit dem `type`-Wert `"module"` einen Modul-Worker erstellen.
In beiden Fällen muss das Skript denselben Ursprung wie das ladende Dokument haben. Seine URL wird relativ zum Speicherort des Dokuments aufgelöst, das den Worker startet.

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

Modul-Worker und ihre Abhängigkeiten werden gemäß der Semantik von ECMAScript-Modulen geladen und ausgeführt:

- Abhängigkeiten werden über statische [`import`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/import) importiert.
- Sie werden asynchron mithilfe von [CORS](/de/docs/Web/HTTP/Guides/CORS) abgerufen.
- Alle Module werden aufgelöst, bevor Code ausgeführt wird.
- Sie müssen mit dem Medientyp `Content-Type: text/javascript` bereitgestellt werden.
- Sie werden im {{Glossary("Strict_mode", "Strict Mode")}} ausgeführt.

Klassische Worker werden als Skripte abgerufen und ausgeführt:

- Abhängigkeiten werden mit der Methode [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert.
- Sie werden synchron im `no-cors`-Modus abgerufen.

### Skripte oder Module importieren

Modul-Worker können [ECMAScript-Module](/de/docs/Web/JavaScript/Guide/Modules) über [`import`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/import) importieren.
Module werden mithilfe von CORS abgerufen. Damit Module von anderen Ursprüngen geladen werden können, muss der Server sie daher mit dem Header {{httpheader("Access-Control-Allow-Origin")}} bereitstellen.
Entwickler können festlegen, ob bei ursprungsübergreifenden Importen Anmeldeinformationen gesendet werden sollen.

Klassische Worker können mit der Methode [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) Skripte importieren, aber keine Module.
Anders als Module werden Skripte im `no-cors`-Modus abgerufen und können auch dann von anderen Ursprüngen angefordert werden, wenn der Server keine entsprechenden CORS-Header setzt.
Bei Importen vom selben Ursprung werden Anmeldeinformationen gesendet, bei ursprungsübergreifenden Anfragen dagegen normalerweise nicht.

Wenn das Dokument eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) hat, muss diese außerdem die Ursprünge importierter Skripte oder Module erlauben.
Für Module werden die zulässigen Quellen in `worker-src` festgelegt (mit Rückgriff auf die Direktiven `script-src` und `default-src`), für klassische Skripte dagegen in `script-src` (mit Rückgriff auf `default-src`).

### `data:`- und `blob:`-URLs

`data:`-URLs können an den Parameter `url` übergeben werden. Sie haben jedoch einen {{Glossary("Origin#opaque_origin", "opaken Ursprung")}} und gelten daher gegenüber allen anderen Ursprüngen, einschließlich dem ihres Erstellers, als ursprungsübergreifend.

Der Worker kann zwar weiterhin über `postMessage()` mit seinem Ersteller kommunizieren, sein Zugriff auf andere externe Ressourcen ist jedoch stark eingeschränkt.
Eine `fetch()`-Anfrage des Workers wäre beispielsweise selbst gegenüber der eigenen Website ursprungsübergreifend. Anfragen an beliebige Ursprünge müssen daher durch CORS erlaubt werden.

Verwenden Sie nach Möglichkeit stattdessen `blob:`-URLs, da sie den Ursprung des Dokuments übernehmen, das sie erstellt hat.
So hat ein mit einer `blob:`-URL erstellter Worker denselben Ursprung wie die Seite, die ihn erstellt hat.
Wenn Sie mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) einschränken, welche Ressourcen in Ihren Worker geladen werden dürfen, müssen Sie den `blob:`-Ursprung erlauben.

### Hinweise zu Bundlern

Bundler wie [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers) empfehlen, dem `Worker()`-Konstruktor URLs zu übergeben, die relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) sind.

Zum Beispiel:

```js
const myWorker = new Worker(new URL("worker.js", import.meta.url));
```

Dadurch bezieht sich der Pfad auf das aktuelle Skript statt auf die aktuelle HTML-Seite. So kann der Bundler Optimierungen wie das Umbenennen von Dateien sicher durchführen. Andernfalls könnte die `worker.js`-URL auf eine Datei verweisen, die nicht vom Bundler verwaltet wird und über die er daher keine Annahmen treffen kann.

### Sicherheitsaspekte

Das durch das Argument `url` angegebene Skript oder Modul wird im Kontext des Web Workers ausgeführt und kann selbst weitere Skripte vom selben oder von anderen Ursprüngen importieren.
Wenn `url` von einem Benutzer bereitgestellt wird, kann dies für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) genutzt werden.

Obwohl Web Worker keinen direkten Zugriff auf das zugehörige Dokument oder Fenster haben, ist es äußerst riskant, beliebige URLs aus nicht vertrauenswürdigen Quellen zu akzeptieren und auszuführen.
Bei Modul-Workern, nicht aber bei klassischen Workern, steuert CORS, welche Ressourcen von anderen Ursprüngen angefordert werden können.

Eine Website sollte außerdem mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) und der Direktive [`worker-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/worker-src) steuern, welche Skripte ausgeführt werden dürfen (oder ersatzweise mit [`child-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/child-src), [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src)).
Damit lassen sich Skripte auf den aktuellen Ursprung, eine bestimmte Gruppe von Ursprüngen oder sogar einzelne Dateien beschränken.

Wenn Sie diese Eigenschaft verwenden und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) (mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)), müssen Sie stets [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte statt Zeichenfolgen zuweisen.
Dadurch wird die Eingabe durch eine Transformationsfunktion geleitet, die vom Worker benötigte URLs ablehnen oder ändern kann, bevor sie abgerufen werden.

## Beispiele

Der Kürze halber verwendet nur das erste der folgenden Beispiele Trusted Types.
In produktivem Code sollten Sie immer Trusted Types verwenden, wenn Sie von Benutzern stammende Daten an Injection Sinks übergeben.

### Trusted Types verwenden

Um das XSS-Risiko zu verringern, sollten wir für die Worker-URL stets `TrustedScriptURL`-Instanzen statt Zeichenfolgen übergeben.
Das ist auch erforderlich, wenn wir Trusted Types aus anderen Gründen erzwingen und bestimmte Quellen zulassen möchten, die durch `CSP: worker-src` erlaubt wurden.

Trusted Types werden noch nicht von allen Browsern unterstützt. Deshalb definieren wir zunächst den [Trusted-Types-Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Er dient als transparenter Ersatz für die JavaScript-API für Trusted Types:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Anschließend erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine Methode [`createScriptURL()`](/de/docs/Web/API/TrustedTypePolicy/createScriptURL) definiert, um Eingabezeichenfolgen in [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanzen umzuwandeln.

Für dieses Beispiel nehmen wir an, dass wir eine vordefinierte Gruppe von URLs im Array `workerScriptAllowList` zulassen und alle anderen Skripte protokollieren möchten.

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

Anschließend erstellen wir mit unserem `policy`-Objekt aus einer potenziell unsicheren Eingabezeichenfolge ein `trustedScriptURL`-Objekt und übergeben es an den Worker.

```js
// The potentially malicious worker URL
// We won't be including untrustedScript in our workerScriptAllowList array
const untrustedScriptURL = "https://evil.example.com/naughty.js";

// Create a TrustedScriptURL instance using the policy
const trustedScriptURL = policy.createScriptURL(untrustedScriptURL);

// Construct the worker with the trusted URL
const myWorker = new Worker(trustedScriptURL);
```

### Einen klassischen Worker erstellen

Der folgende Codeausschnitt zeigt, wie mit dem `Worker()`-Konstruktor ein klassisches [`Worker`](/de/docs/Web/API/Worker)-Objekt erstellt und anschließend verwendet wird:

```js
const myWorker = new Worker("worker.js");
const first = document.querySelector("input#number1");

first.onchange = () => {
  myWorker.postMessage(first.value);
  console.log("Message posted to worker");
};
```

Ein vollständiges Beispiel finden Sie in unserem [einfachen Beispiel für einen dedizierten Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

### Einen Modul-Worker von einem anderen Ursprung über einen Blob laden

Dieses Beispiel zeigt eine Methode, mit der Sie ein Modul-Worker-Skript von einem anderen Ursprung abrufen und anschließend als Blob in Ihren Worker laden können. Ein klassisches Skript ließe sich auf dieselbe Weise laden:

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

Der erste Abruf erfolgt mit CORS. Die Antwort von `other_origin.com` muss daher wie gezeigt den Header {{httpheader("Access-Control-Allow-Origin")}} enthalten:

```http
Access-Control-Allow-Origin "https://my_origin.com"
```

Wenn Sie eine CSP verwenden, müssen Sie außerdem den `blob:`-Ursprung für `worker-src` erlauben, damit der Blob in das Dokument geladen werden kann:

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
