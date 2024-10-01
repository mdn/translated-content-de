---
title: "Window: fetch() Methode"
short-title: fetch()
slug: Web/API/Window/fetch
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef("Fetch API")}}

Die **`fetch()`** Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces startet den Prozess des Abrufens einer Ressource aus dem Netzwerk und gibt ein Promise zurück, das erfüllt wird, sobald die Antwort verfügbar ist.

Das Promise wird zum [`Response`](/de/docs/Web/API/Response)-Objekt aufgelöst, das die Antwort auf Ihre Anfrage darstellt.

Ein `fetch()`-Promise wird nur abgelehnt, wenn die Anfrage fehlschlägt, z. B. aufgrund einer fehlerhaft formatierten Anforderungs-URL oder eines Netzwerkfehlers.
Ein `fetch()`-Promise wird _nicht_ abgelehnt, wenn der Server mit HTTP-Statuscodes antwortet, die Fehler anzeigen (`404`, `504` usw.).
Stattdessen muss ein `then()`-Handler die Eigenschaften [`Response.ok`](/de/docs/Web/API/Response/ok) und/oder [`Response.status`](/de/docs/Web/API/Response/status) überprüfen.

Die `fetch()`-Methode wird durch die `connect-src`-Direktive der [Content Security Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy) kontrolliert, anstatt durch die Direktive der Ressourcen, die abgerufen werden.

> [!NOTE]
> Die Parameter der `fetch()`-Methode sind identisch mit denen des [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors.

## Syntax

```js-nolint
fetch(resource)
fetch(resource, options)
```

### Parameter

- `resource`

  - : Dies definiert die Ressource, die Sie abrufen möchten. Dies kann sein:

    - Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier", "stringifier")}} — einschließlich eines [`URL`](/de/docs/Web/API/URL)-Objekts —, das die URL der Ressource liefert, die Sie abrufen möchten. Die URL kann relativ zur Basis-URL sein, die im Fenster-Kontext die [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments oder im Worker-Kontext [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) ist.
    - Ein [`Request`](/de/docs/Web/API/Request)-Objekt.

- `options` {{optional_inline}}

  - : Ein [`RequestInit`](/de/docs/Web/API/RequestInit)-Objekt, das alle benutzerdefinierten Einstellungen enthält, die Sie auf die Anfrage anwenden möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`Response`](/de/docs/Web/API/Response)-Objekt aufgelöst wird.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde aufgrund eines Aufrufs der [`AbortController`](/de/docs/Web/API/AbortController)
    [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode abgebrochen.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Verwendung der [Topics API](/de/docs/Web/API/Topics_API) durch eine {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) speziell verboten wird und eine `fetch()`-Anfrage mit `browsingTopics: true` gestellt wurde.
- {{jsxref("TypeError")}}
  - : Kann aus den folgenden Gründen auftreten:

<table>
  <thead>
    <tr>
      <th scope="col">Grund</th>
      <th scope="col">Fehlerhafte Beispiele</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Durch eine Berechtigungsrichtlinie blockiert</td>
      <td>Die Verwendung der <a href="/de/docs/Web/API/Attribution_Reporting_API">Attribution Reporting API</a> wird durch eine <a href="/de/docs/Web/HTTP/Headers/Permissions-Policy/attribution-reporting"><code>attribution-reporting</code></a> {{httpheader("Permissions-Policy")}} blockiert, und eine <code>fetch()</code>-Anfrage wurde mit <code>attributionReporting</code> spezifiziert.</td>
    </tr>
    <tr>
      <td>Ungültiger Header-Name.</td>
      <td>
        <pre>
// Leerzeichen in "C ontent-Type"
const headers = {
  'C ontent-Type': 'text/xml',
  'Breaking-Bad': '<3',
};
fetch('https://example.com/', { headers });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        Ungültiger Header-Wert. Das Header-Objekt muss genau zwei Elemente enthalten.
      </td>
      <td>
        <pre>
const headers = [
  ['Content-Type', 'text/html', 'extra'],
  ['Accept'],
];
fetch('https://example.com/', { headers });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        Ungültige URL oder Schema, oder ein Schema, das `fetch` nicht unterstützt, oder ein Schema, das für einen bestimmten Anfragemodus nicht unterstützt wird.
      </td>
      <td>
        <pre>
fetch('blob://example.com/', { mode: 'cors' });
        </pre>
      </td>
    </tr>
      <td>URL enthält Anmeldedaten.</td>
      <td>
        <pre>
fetch('https://user:password@example.com/');
        </pre>
      </td>
    <tr>
      <td>Ungültige Referrer-URL.</td>
      <td>
        <pre>
fetch('https://example.com/', { referrer: './abc\u0000df' });
        </pre>
      </td>
    </tr>
    <tr>
      <td>Ungültige Modi (<code>navigate</code> und <code>websocket</code>).</td>
      <td>
        <pre>
fetch('https://example.com/', { mode: 'navigate' });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        Wenn der Cache-Modus der Anfrage "only-if-cached" ist und der Anfragemodus nicht "same-origin" ist.
      </td>
      <td>
        <pre>
fetch('https://example.com/', {
  cache: 'only-if-cached',
  mode: 'no-cors',
});
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        Wenn die Anfragemethode ein ungültiger Name-Token ist oder eine der verbotenen Header
        (<code>'CONNECT'</code>, <code>'TRACE'</code> oder <code>'TRACK'</code>).
      </td>
      <td>
        <pre>
fetch('https://example.com/', { method: 'CONNECT' });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        Wenn der Anfragemodus "no-cors" ist und die Anfragemethode keine CORS-safe-listed Methode ist
        (<code>'GET'</code>, <code>'HEAD'</code> oder <code>'POST'</code>).
      </td>
      <td>
        <pre>
fetch('https://example.com/', {
  method: 'CONNECT',
  mode: 'no-cors',
});
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        Wenn die Anfragemethode <code>'GET'</code> oder <code>'HEAD'</code> ist und der Body nicht null oder undefined ist.
      </td>
      <td>
        <pre>
fetch('https://example.com/', {
  method: 'GET',
  body: new FormData(),
});
        </pre>
      </td>
    </tr>
    <tr>
      <td>Wenn `fetch` einen Netzwerkfehler auslöst.</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Beispiele

In unserem [Fetch Request Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (siehe [Fetch Request live](https://mdn.github.io/dom-examples/fetch/fetch-request/)) erstellen wir ein neues [`Request`](/de/docs/Web/API/Request)-Objekt mit dem entsprechenden Konstruktor und holen es dann mit einem `fetch()`-Aufruf. Da wir ein Bild abrufen, führen wir [`Response.blob()`](/de/docs/Web/API/Response/blob) für die Antwort aus, um den richtigen MIME-Typ zu erhalten, damit es ordnungsgemäß verarbeitet wird. Dann erstellen wir eine Object-URL daraus und zeigen sie in einem {{htmlelement("img")}}-Element an.

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

In unserem [Fetch Request mit Init-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init) (siehe [Fetch Request init live](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init/)) machen wir dasselbe, außer dass wir ein _options_-Objekt übergeben, wenn wir `fetch()` aufrufen.
In diesem Fall können wir einen {{HTTPHeader("Cache-Control")}}-Wert setzen, um anzugeben, welche Art von gecachten Antworten wir akzeptieren:

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

Sie könnten das `init`-Objekt auch mit dem `Request`-Konstruktor übergeben, um denselben Effekt zu erzielen:

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerGlobalScope.fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
