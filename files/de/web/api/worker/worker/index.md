---
title: "Worker: Worker()-Konstruktor"
short-title: Worker()
slug: Web/API/Worker/Worker
l10n:
  sourceCommit: 4f58b2f343774ccb19cb262e64c19b5ae4d6702b
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

> [!WARNING]
> Das Skript, das an das `url`-Element übergeben wird, wird ausgeführt.
> Solche APIs sind als [Injektionssenken](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und stellen potenziell einen Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe dar.
>
> Sie können dieses Risiko mindern, indem Sie eine [Content-Security-Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) einrichten, die die Orte einschränkt, von denen Skripte geladen werden können, und indem Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Zeichenfolgen zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Der **`Worker()`**-Konstruktor erstellt ein [`Worker`](/de/docs/Web/API/Worker)-Objekt, das das klassische Skript oder Modul an der angegebenen URL ausführt.

## Syntax

```js-nolint
new Worker(url)
new Worker(url, options)
```

### Parameter

- `url`
  - : Ein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekt oder ein String, der die URL des Skripts oder Moduls darstellt, das der Worker ausführen wird.

    Diese muss gleich-origin mit dem Dokument des Anrufers sein oder eine `blob:`- oder `data:`-URL.
    Die URL wird relativ zur aktuellen Position der HTML-Seite aufgelöst.

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionsattribute enthält, die beim Erstellen der Objektinstanz gesetzt werden können.
    Verfügbare Eigenschaften sind wie folgt:
    - `credentials`
      - : Ein String, der angibt, ob der Browser Anmeldeinformationen sendet, wenn Module in einen Modul-Worker importiert werden.
        Die erlaubten Werte sind die gleichen wie bei der [`fetch()`-Anfrage](/de/docs/Web/API/RequestInit#credentials): `omit`, `same-origin` oder `include`.
        Der Standardwert ist `same-origin` (Anmeldeinformationen nur für Anfragen mit derselben Herkunft einschließen).

        Dies wird für klassische Worker ignoriert.

    - `name`
      - : Ein String, der einen identifizierenden Namen für den [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) angibt, der den Geltungsbereich des Workers darstellt, was hauptsächlich zu Debugging-Zwecken nützlich ist.
    - `type`
      - : Ein String, der den Typ des zu erstellenden Workers angibt.
        Der Wert kann `classic` oder `module` sein.
        Der Standardwert ist `classic`.

### Ausnahmen

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der MIME-Typ des Worker-Skripts falsch ist.
    Er _sollte_ immer `text/javascript` sein (aus historischen Gründen können [andere JavaScript-MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types#legacy_javascript_mime_types) akzeptiert werden).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument keine Worker starten darf, z.B., wenn die URL eine ungültige Syntax hat oder die Same-Origin-Policy verletzt wird.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `url` nicht geparst werden kann.
- `TypeError`
  - : Wird ausgelöst, wenn der `url`-Parameter ein String ist, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Der **`Worker()`**-Konstruktor erstellt ein [`Worker`](/de/docs/Web/API/Worker)-Objekt, das das klassische Skript oder Modul an der angegebenen URL ausführt.

Das Skript muss [same-origin](/de/docs/Web/Security/Defenses/Same-origin_policy) mit dem zugehörigen Dokument sein, kann aber selbst Skripte oder Module importieren, die Cross-Origin sind (wenn CORS und andere Beschränkungen dies erlauben).
Wenn ein Cross-Origin-Worker benötigt wird, müssen Benutzer ihn von einem mittleren same-origin Worker oder einem Blob laden.

### Modul- und klassische Worker

Ein klassischer Worker ist einer, der aus einem klassischen Skript erstellt wird, während ein Modul-Worker aus einem [ECMASCript-Modul](/de/docs/Web/JavaScript/Guide/Modules) erstellt wird.
Der Typ des Workers beeinflusst die Worker-Konstruktoroptionen, wie das Worker-Skript abgerufen wird und wie es ausgeführt wird.

Der Code unten zeigt zwei Möglichkeiten, wie Sie einen klassischen Worker konstruieren können, und auch, wie Sie den `type` als `"module"` angeben, um einen Modul-Worker zu erstellen.
In beiden Fällen muss das Skript same-origin mit dem ladenden Dokument sein und wird relativ zum Standort des ausführenden Dokuments aufgelöst.

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

Modul-Worker und ihre Abhängigkeiten werden unter Verwendung von ECMAScript-Modul-Semantiken geladen und ausgeführt:

- Abhängigkeiten werden über statische [`import`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/import) importiert
- Asynchron über [CORS](/de/docs/Web/HTTP/Guides/CORS) abgerufen
- Alle Module werden aufgelöst, bevor Code ausgeführt wird
- Müssen mit dem Medientyp `Content-Type: text/javascript` bereitgestellt werden
- Ausführung im {{Glossary("Strict_mode", "Strict mode")}}

Klassische Worker werden als Skripte abgerufen und ausgeführt:

- Abhängigkeiten werden mit der Methode [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert
- Synchronously im `no-cors`-Modus abgerufen

### Importieren von Skripten oder Modulen

Modul-Worker können [ECMASCript-Module](/de/docs/Web/JavaScript/Guide/Modules) mit [`import`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/import) importieren.
Module werden mit CORS abgerufen, daher müssen Cross-Origin-Module mit dem {{httpheader("Access-Control-Allow-Origin")}}-Header bereitgestellt werden, um geladen werden zu können.
Entwickler können angeben, ob Anmeldeinformationen in Cross-Origin-Imports gesendet werden sollen oder nicht.

Klassische Worker können Skripte (aber keine Module) mit der Methode [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importieren.
Im Gegensatz zu Modulen werden Skripte im `no-cors`-Modus abgerufen und können Cross-Origin angefordert werden, auch wenn der Server nicht die entsprechenden CORS-Header setzt.
Anmeldeinformationen werden für same-origin Imports gesendet, aber normalerweise nicht für Cross-Origin-Anfragen.

Darüber hinaus muss, wenn das Dokument eine [Content-Security-Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) hat, sie die Ursprünge importierter Skripte oder Module erlauben.
Für Module sind die erlaubten Quellen in `worker-src` festgelegt (mit Rückfall auf die Richtlinien `script-src` und `default-src`), während für klassische Skripte die Quellen in `script-src` festgelegt sind (mit Rückfall auf die `default-src`-Richtlinien).

### `data:`- und `blob:`-URLs

`data:`-URLs können an den `url`-Parameter übergeben werden, aber sie haben eine {{Glossary("Origin#opaque_origin", "undurchsichtige Herkunft")}}, die sie zu allen anderen Herkünften einschließlich ihrer eigenen macht.

Folglich kann der Worker zwar immer noch mit seinem Eigentümer über `postMessage()` kommunizieren, aber sein Zugriff auf andere externe Ressourcen ist stark eingeschränkt.
Ein `fetch()`-Request des Workers wäre z.B. cross-origin zu seiner eigenen Seite, und alle Anfragen an irgendeine Herkunft müssen durch CORS gewährt werden.

`blob:`-URLs sollten stattdessen, wo möglich, verwendet werden, da die URL die Herkunft des Dokuments erbt, das sie erstellt hat.
Dies stellt sicher, dass ein Worker, der mit einer `blob:`-URL erstellt wurde, same-origin mit der Seite ist, die ihn erstellt hat.
Beachten Sie, dass Sie, wenn Sie eine [Content-Security-Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verwenden, um einzuschränken, welche Ressourcen in Ihren Worker geladen werden können, die `blob:`-Herkunft erlauben müssen.

### Überlegungen zu Bundlern

Bundler wie [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers) und [Parcel](https://parceljs.org/languages/javascript/#web-workers) empfehlen, URLs relativ zu [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#url) an den `Worker()`-Konstruktor zu übergeben.

Zum Beispiel:

```js
const myWorker = new Worker(new URL("worker.js", import.meta.url));
```

Dies macht den Pfad relativ zum aktuellen Skript anstelle der aktuellen HTML-Seite, was dem Bundler ermöglicht, sicher Optimierungen wie Umbenennungen durchzuführen (da andernfalls die `worker.js`-URL auf eine Datei außerhalb der Kontrolle des Bundlers verweisen könnte, weshalb er keine Annahmen machen kann).

### Sicherheitsüberlegungen

Das durch das `url`-Argument spezifizierte Skript oder Modul wird im Web-Worker-Kontext ausgeführt und kann selbst andere same-origin und cross-origin Skripts importieren.
Wenn die `url` von einem Benutzer bereitgestellt wird, ist dies eine mögliche Angriffsfläche für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS).

Obwohl Web-Worker keinen direkten Zugriff auf das besitzende Dokument oder Fenster haben, ist es dennoch äußerst riskant, beliebige URLs von unzuverlässigen Herkünften zu akzeptieren und auszuführen.
Für Modul-Worker, aber nicht für klassische Worker, steuert CORS, welche Cross-Origin-Ressourcen angefordert werden können.

Eine Website sollte auch steuern, welche Skripte mit einer [Content-Security-Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) mit der [`worker-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/worker-src)-Richtlinie (oder einem Rückfall auf [`child-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/child-src), [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src)) erlaubt sind.
Dies kann Skripte auf diejenigen der aktuellen Herkunft beschränken oder auf eine spezifische Menge von Herkünften oder sogar auf bestimmte Dateien.

Wenn Sie diese Eigenschaft verwenden und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) (unter Verwendung der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Richtlinie), müssen Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Zeichenfolgen zuweisen.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, URLs abzulehnen oder zu ändern, die der Worker benötigt, bevor sie abgerufen werden.

## Beispiele

Aus Gründen der Kürze verwendet nur das erste Beispiel unten Trusted Types.
In der Produktion sollte Ihr Code immer Trusted Types verwenden, wenn Daten von Benutzern in Injektionssenken übergeben werden.

### Verwendung von Trusted Types

Um das Risiko von XSS zu mindern, sollten wir immer `TrustedScriptURL`-Instanzen für die Worker-URL anstelle von Zeichenfolgen übergeben.
Wir müssen dies auch tun, wenn wir aus anderen Gründen Trusted Types durchsetzen und einige Quellen zulassen möchten, die durch `CSP: worker-src` erlaubt wurden.

Trusted Types werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst das [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types-JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createScriptURL()`](/de/docs/Web/API/TrustedTypePolicy/createScriptURL)-Methode definiert, um Eingabestrings in [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanzen zu transformieren.

Für den Zweck dieses Beispiels nehmen wir an, dass wir eine vordefinierte Menge von URLs in der `workerScriptAllowList`-Array erlauben möchten und alle anderen Skripte protokollieren.

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

### Laden eines Cross-Origin-Modul-Workers aus einem Blob

Dieses Beispiel zeigt eine Methode, die ein Cross-Origin-Modul-Worker-Skript abrufen und dann als Blob in Ihren Worker laden kann (ein klassisches Skript könnte auf die gleiche Weise geladen werden):

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

Der anfängliche Abruf erfolgt mit CORS, daher muss die `other_origin.com`-Antwort den {{httpheader("Access-Control-Allow-Origin")}}-Header enthalten, wie gezeigt:

```http
Access-Control-Allow-Origin "https://my_origin.com"
```

Darüber hinaus müssen Sie, wenn Sie eine CSP verwenden, die `blob:`-Herkunft für `worker-src` erlauben, damit sie in das Dokument geladen werden kann:

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
