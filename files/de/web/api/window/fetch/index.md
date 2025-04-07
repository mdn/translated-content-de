---
title: "Window: fetch() Method"
short-title: fetch()
slug: Web/API/Window/fetch
l10n:
  sourceCommit: af98ab1715ff54825888ef1f7f13d6e3e3bf90b8
---

{{APIRef("Fetch API")}}

Die **`fetch()`**-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces startet den Prozess des Abrufens einer Ressource aus dem Netzwerk. Sie gibt ein Promise zurück, das erfüllt wird, sobald die Antwort verfügbar ist.

Das Promise wird auf das [`Response`](/de/docs/Web/API/Response)-Objekt aufgelöst, das die Antwort auf Ihre Anfrage darstellt.

Ein `fetch()`-Promise wird nur abgelehnt, wenn die Anfrage fehlschlägt, beispielsweise aufgrund einer fehlerhaft geformten Anforderungs-URL oder eines Netzwerkfehlers. Ein `fetch()`-Promise wird _nicht_ abgelehnt, wenn der Server mit HTTP-Statuscodes antwortet, die Fehler anzeigen (`404`, `504` usw.). Stattdessen muss ein `then()`-Handler die Eigenschaften [`Response.ok`](/de/docs/Web/API/Response/ok) und/oder [`Response.status`](/de/docs/Web/API/Response/status) überprüfen.

Die `fetch()`-Methode wird durch die `connect-src`-Direktive der [Content Security Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) kontrolliert, nicht durch die Direktive der Ressourcen, die sie abruft.

> [!NOTE]
> Die Parameter der `fetch()`-Methode sind identisch mit denen des [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors.

## Syntax

```js-nolint
fetch(resource)
fetch(resource, options)
```

### Parameter

- `resource`

  - : Dies definiert die Ressource, die Sie abrufen möchten. Dies kann entweder sein:

    - Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier", "Stringifier")}} — einschließlich eines [`URL`](/de/docs/Web/API/URL)-Objekts — das die URL der Ressource bereitstellt, die Sie abrufen möchten. Die URL kann relativ zur Basis-URL sein, welche im Fensterkontext die [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments ist oder [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) im Worker-Kontext.
    - Ein [`Request`](/de/docs/Web/API/Request)-Objekt.

- `options` {{optional_inline}}

  - : Ein [`RequestInit`](/de/docs/Web/API/RequestInit)-Objekt, das alle benutzerdefinierten Einstellungen enthält, die Sie auf die Anforderung anwenden möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf ein [`Response`](/de/docs/Web/API/Response)-Objekt aufgelöst wird.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde aufgrund eines Aufrufs der Methode [`AbortController`](/de/docs/Web/API/AbortController)
    [`abort()`](/de/docs/Web/API/AbortController/abort) abgebrochen.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Nutzung der [Topics API](/de/docs/Web/API/Topics_API) ausdrücklich durch eine {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) untersagt wird und eine `fetch()`-Anfrage mit `browsingTopics: true` gestellt wurde.
- {{jsxref("TypeError")}}
  - : Kann aus folgenden Gründen auftreten:

<table>
  <thead>
    <tr>
      <th scope="col">Grund</th>
      <th scope="col">Fehlschlagende Beispiele</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Durch eine Berechtigungsrichtlinie blockiert</td>
      <td>Die Verwendung der <a href="/de/docs/Web/API/Attribution_Reporting_API">Attribution Reporting API</a> wird durch eine <a href="/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/attribution-reporting"><code>attribution-reporting</code></a> {{httpheader("Permissions-Policy")}} blockiert, und eine <code>fetch()</code>-Anfrage wurde mit <code>attributionReporting</code> angegeben.</td>
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
        Ungültige URL oder Schema oder Verwendung eines Schemas, das fetch nicht unterstützt, oder Nutzung eines Schemas, das für einen bestimmten Anforderungsmodus nicht unterstützt wird.
      </td>
      <td>
        <pre class="brush: js">
fetch("blob://example.com/", { mode: "cors" });
        </pre>
      </td>
    </tr>
      <td>URL enthält Anmeldeinformationen.</td>
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
        Wenn der Anforderungscachemodus "only-if-cached" ist und der Anforderungsmodus anders als "same-origin" ist.
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
        Wenn die Anforderungsmethode ein ungültiger Namens-Token oder einer der verbotenen Header ist
        (<code>CONNECT</code>, <code>TRACE</code> oder <code>TRACK</code>).
      </td>
      <td>
        <pre class="brush: js">
fetch("https://example.com/", { method: "CONNECT" });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        Wenn der Anforderungsmodus "no-cors" ist und die Anforderungsmethode nicht eine CORS-sicher gelistete Methode ist
        (<code>GET</code>, <code>HEAD</code> oder <code>POST</code>).
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
        Wenn die Anforderungsmethode <code>GET</code> oder <code>HEAD</code> ist und der Body nicht null oder nicht undefiniert ist.
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
      <td>Wenn fetch einen Netzwerkfehler wirft.</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Beispiele

In unserem [Fetch Request-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (siehe [Fetch Request live](https://mdn.github.io/dom-examples/fetch/fetch-request/)) erstellen wir ein neues [`Request`](/de/docs/Web/API/Request)-Objekt mit dem entsprechenden Konstruktor und rufen es dann mit einem `fetch()`-Aufruf ab. Da wir ein Bild abrufen, führen wir [`Response.blob()`](/de/docs/Web/API/Response/blob) für die Antwort aus, um ihm den richtigen MIME-Typ zu geben, damit es ordnungsgemäß behandelt wird. Dann erstellen wir eine Objekt-URL daraus und zeigen es in einem {{htmlelement("img")}}-Element an.

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

In unserem [Fetch Request with init-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init) (siehe [Fetch Request init live](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init/)) machen wir das gleiche, außer dass wir beim Aufruf von `fetch()` ein _options_-Objekt übergeben. In diesem Fall können wir einen {{HTTPHeader("Cache-Control")}}-Wert setzen, um anzugeben, mit welchen Art von zwischengespeicherten Antworten wir einverstanden sind:

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
  // ...
});
```

Sie könnten das `init`-Objekt auch mit dem `Request`-Konstruktor übergeben, um den gleichen Effekt zu erzielen:

```js
const req = new Request("flowers.jpg", options);
```

Sie können auch ein Objektliteral als `headers` in `init` verwenden:

```js
const options = {
  headers: {
    "Cache-Control": "max-age=60480",
  },
};

const req = new Request("flowers.jpg", options);
```

Der Artikel [Using fetch](/de/docs/Web/API/Fetch_API/Using_Fetch) bietet weitere Beispiele zur Verwendung von `fetch()`.

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
