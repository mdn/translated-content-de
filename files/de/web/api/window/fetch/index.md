---
title: "Window: fetch() Methode"
short-title: fetch()
slug: Web/API/Window/fetch
l10n:
  sourceCommit: 03bec1862b095fc71beac2341a9faaaa8d209f49
---

{{APIRef("Fetch API")}}

Die **`fetch()`** Methode des [`Window`](/de/docs/Web/API/Window) Interfaces startet den Prozess des Abrufens einer Ressource aus dem Netzwerk und gibt ein Promise zurück, das erfüllt wird, sobald die Antwort verfügbar ist.

Das Promise wird mit dem [`Response`](/de/docs/Web/API/Response) Objekt aufgelöst, das die Antwort auf Ihre Anfrage darstellt.

Ein `fetch()`-Promise wird nur dann abgelehnt, wenn die Anfrage fehlschlägt, zum Beispiel aufgrund einer schlecht formulierten Anforderungs-URL oder eines Netzwerkfehlers.
Ein `fetch()`-Promise wird _nicht_ abgelehnt, wenn der Server mit HTTP-Statuscodes antwortet, die Fehler anzeigen (`404`, `504` usw.).
Stattdessen muss ein `then()`-Handler die Eigenschaften [`Response.ok`](/de/docs/Web/API/Response/ok) und/oder [`Response.status`](/de/docs/Web/API/Response/status) überprüfen.

Die `fetch()` Methode wird durch die `connect-src` Direktive der [Content Security Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) gesteuert und nicht durch die Direktive der Ressourcen, die sie abruft.

> [!NOTE]
> Die Parameter der `fetch()` Methode sind identisch mit denen des [`Request()`](/de/docs/Web/API/Request/Request) Konstruktors.

## Syntax

```js-nolint
fetch(resource)
fetch(resource, options)
```

### Parameter

- `resource`
  - : Dies definiert die Ressource, die Sie abrufen möchten. Dies kann entweder sein:
    - Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier", "Stringifier")}} — einschließlich eines [`URL`](/de/docs/Web/API/URL) Objekts — das die URL der Ressource bereitstellt, die Sie abrufen möchten. Die URL kann relativ zur Basis-URL sein, die im Fensterkontext die [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments oder im Worker-Kontext [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) ist.
    - Ein [`Request`](/de/docs/Web/API/Request) Objekt.

- `options` {{optional_inline}}
  - : Ein [`RequestInit`](/de/docs/Web/API/RequestInit) Objekt, das benutzerdefinierte Einstellungen enthält, die Sie auf die Anfrage anwenden möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`Response`](/de/docs/Web/API/Response) Objekt aufgelöst wird.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde aufgrund eines Aufrufs der Methode [`AbortController`](/de/docs/Web/API/AbortController)
    [`abort()`](/de/docs/Web/API/AbortController/abort) abgebrochen.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der [Topics API](/de/docs/Web/API/Topics_API) durch eine spezifische {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) verboten ist und eine `fetch()`-Anfrage mit `browsingTopics: true` gestellt wurde.
- {{jsxref("TypeError")}}
  - : Kann aus folgenden Gründen auftreten:

<table>
  <thead>
    <tr>
      <th scope="col">Grund</th>
      <th scope="col">Fehlende Beispiele</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Durch eine Berechtigungsrichtlinie blockiert</td>
      <td>Die Verwendung der <a href="/de/docs/Web/API/Attribution_Reporting_API">Attribution Reporting API</a> wird durch eine <a href="/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/attribution-reporting"><code>attribution-reporting</code></a> {{httpheader("Permissions-Policy")}} blockiert, und eine <code>fetch()</code>-Anfrage wurde mit <code>attributionReporting</code> spezifiziert.</td>
    </tr>
    <tr>
      <td>Ungültiger Header-Name.</td>
      <td>
        <!-- cSpell:ignore ontent -->
        <pre class="brush: js">
// Leerzeichen in "C ontent-Type"
const headers = {
  "C ontent-Type": "text/xml",
  "Breaking-Bad": "<3",
};
fetch("https://example.com/", { headers });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        Ungültiger Header-Wert. Das Header-Objekt muss genau zwei Elemente enthalten.
      </td>
      <td>
        <pre class="brush: js">
const headers = [
  ["Content-Type", "text/html", "extra"],
  ["Accept"],
];
fetch("https://example.com/", { headers });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        Ungültige URL oder Schema oder Verwendung eines Schemas, das von fetch nicht unterstützt wird, oder Verwendung eines Schemas, das für einen bestimmten Anfragemodus nicht unterstützt wird.
      </td>
      <td>
        <pre class="brush: js">
fetch("blob://example.com/", { mode: "cors" });
        </pre>
      </td>
    </tr>
      <td>URL enthält Anmeldedaten.</td>
      <td>
        <pre class="brush: js">
fetch("https://user:password@example.com/");
        </pre>
      </td>
    <tr>
      <td>Ungültige Referrer-URL.</td>
      <td>
        <pre class="brush: js">
fetch("https://example.com/", { referrer: "./abc\u0000df" });
        </pre>
      </td>
    </tr>
    <tr>
      <td>Ungültige Modi (<code>navigate</code> und <code>websocket</code>).</td>
      <td>
        <pre class="brush: js">
fetch("https://example.com/", { mode: "navigate" });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        Wenn der Anfragemodus "only-if-cached" ist und der Modus der Anfrage anders als "same-origin" ist.
      </td>
      <td>
        <pre class="brush: js">
fetch("https://example.com/", {
  cache: "only-if-cached",
  mode: "no-cors",
});
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        Wenn der Anfragemodus ein ungültiger Namenstoken oder einer der verbotenen Header (<code>CONNECT</code>, <code>TRACE</code> oder <code>TRACK</code>) ist.
      </td>
      <td>
        <pre class="brush: js">
fetch("https://example.com/", { method: "CONNECT" });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        Wenn der Anfragemodus "no-cors" ist und die Anfragemethode keine CORS-Whitelist-Methode (<code>GET</code>, <code>HEAD</code> oder <code>POST</code>) ist.
      </td>
      <td>
        <pre class="brush: js">
fetch("https://example.com/", {
  method: "CONNECT",
  mode: "no-cors",
});
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        Wenn die Anfragemethode <code>GET</code> oder <code>HEAD</code> ist und der Körper nicht null oder undefiniert ist.
      </td>
      <td>
        <pre class="brush: js">
fetch("https://example.com/", {
  method: "GET",
  body: new FormData(),
});
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        Wenn <code>body</code> ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) ist und <code>duplex</code> weggelassen oder nicht auf <code>"half"</code> gesetzt ist, oder wenn ein ungültiger <code>duplex</code>-Wert angegeben wird.
      </td>
      <td>
        <pre class="brush: js">
const stream = new ReadableStream({ /* ... */ });
fetch("https://example.com", {
  method: "POST",
  body: stream,
});
        </pre>
      </td>
    </tr>
    <tr>
      <td>Wenn fetch einen Netzwerkfehler auslöst.</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Beispiele

In unserem [Fetch-Anfrage-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (siehe [Fetch-Anfrage live](https://mdn.github.io/dom-examples/fetch/fetch-request/)) erstellen wir ein neues [`Request`](/de/docs/Web/API/Request) Objekt mit dem entsprechenden Konstruktor und rufen es dann mit einem `fetch()` Aufruf ab. Da wir ein Bild abrufen, führen wir [`Response.blob()`](/de/docs/Web/API/Response/blob) auf die Antwort aus, um ihr den richtigen MIME-Typ zu geben, damit es ordnungsgemäß behandelt wird, erstellen dann eine Objekt-URL daraus und zeigen es in einem {{htmlelement("img")}} Element an.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

window
  .fetch(myRequest)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.blob();
  })
  .then((response) => {
    myImage.src = URL.createObjectURL(response);
  });
```

In unserem [Fetch-Anfrage-mit-init-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init) (siehe [Fetch-Anfrage-Init live](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init/)) machen wir dasselbe, außer dass wir beim Aufruf von `fetch()` ein _options_ Objekt übergeben.
In diesem Fall können wir einen {{HTTPHeader("Cache-Control")}} Wert festlegen, um anzugeben, welche Art von zwischengespeicherten Antworten für uns akzeptabel sind:

```js
const myImage = document.querySelector("img");
const reqHeaders = new Headers();

// A cached response is okay unless it's more than a week old
reqHeaders.set("Cache-Control", "max-age=604800");

const options = {
  headers: reqHeaders,
};

// Pass init as an "options" object with our headers.
const req = new Request("flowers.jpg", options);

fetch(req).then((response) => {
  // …
});
```

Sie könnten auch das `init` Objekt mit dem `Request` Konstruktor übergeben, um den gleichen Effekt zu erzielen:

```js
const req = new Request("flowers.jpg", options);
```

Sie können auch ein Objekt-Literal als `headers` in `init` verwenden:

```js
const options = {
  headers: {
    "Cache-Control": "max-age=60480",
  },
};

const req = new Request("flowers.jpg", options);
```

Der Artikel [Verwendung von fetch](/de/docs/Web/API/Fetch_API/Using_Fetch) bietet weitere Beispiele zur Verwendung von `fetch()`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerGlobalScope.fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
