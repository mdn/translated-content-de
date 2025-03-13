---
title: "Window: fetch() Methode"
short-title: fetch()
slug: Web/API/Window/fetch
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}

Die **`fetch()`**-Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle startet den Prozess des Abrufens einer Ressource aus dem Netzwerk und gibt ein Promise zurück, das erfüllt wird, sobald die Antwort verfügbar ist.

Das Promise wird zu dem [`Response`](/de/docs/Web/API/Response) Objekt aufgelöst, das die Antwort auf Ihre Anfrage darstellt.

Ein `fetch()`-Promise wird nur abgelehnt, wenn die Anfrage fehlschlägt, zum Beispiel aufgrund einer schlecht geformten URL oder eines Netzwerkfehlers. Ein `fetch()`-Promise wird _nicht_ abgelehnt, wenn der Server mit HTTP-Statuscodes antwortet, die auf Fehler hinweisen (`404`, `504`, etc.). Stattdessen muss ein `then()`-Handler die Eigenschaften [`Response.ok`](/de/docs/Web/API/Response/ok) und/oder [`Response.status`](/de/docs/Web/API/Response/status) prüfen.

Die `fetch()`-Methode wird durch die `connect-src` Direktive der [Content Security Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) gesteuert, anstatt durch die Direktive der Ressourcen, die sie abruft.

> [!NOTE]
> Die Parameter der `fetch()`-Methode sind identisch mit denen des [`Request()`](/de/docs/Web/API/Request/Request) Konstruktors.

## Syntax

```js-nolint
fetch(resource)
fetch(resource, options)
```

### Parameter

- `resource`

  - : Dies definiert die Ressource, die Sie abrufen möchten. Dies kann entweder sein:

    - Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier", "stringifier")}} — einschließlich eines [`URL`](/de/docs/Web/API/URL) Objekts — das die URL der Ressource bereitstellt, die Sie abrufen möchten. Die URL kann relativ zur Basis-URL sein, die das [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments im Kontext eines Fensters ist, oder [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) im Kontext eines Workers.
    - Ein [`Request`](/de/docs/Web/API/Request) Objekt.

- `options` {{optional_inline}}

  - : Ein [`RequestInit`](/de/docs/Web/API/RequestInit) Objekt, das benutzerdefinierte Einstellungen enthält, die Sie auf die Anfrage anwenden möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`Response`](/de/docs/Web/API/Response) Objekt aufgelöst wird.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde aufgrund eines Aufrufs der [`AbortController`](/de/docs/Web/API/AbortController) [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode abgebrochen.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der [Topics API](/de/docs/Web/API/Topics_API) durch eine {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) ausdrücklich untersagt wird und eine `fetch()`-Anfrage mit `browsingTopics: true` gemacht wurde.
- {{jsxref("TypeError")}}
  - : Kann aus folgenden Gründen auftreten:

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
      <td>Die Nutzung der <a href="/de/docs/Web/API/Attribution_Reporting_API">Attribution Reporting API</a> wird durch eine <a href="/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/attribution-reporting"><code>attribution-reporting</code></a> {{httpheader("Permissions-Policy")}} blockiert, und eine <code>fetch()</code>-Anfrage mit <code>attributionReporting</code> wurde angegeben.</td>
    </tr>
    <tr>
      <td>Ungültiger Header-Name.</td>
      <td>
        <!-- cSpell:ignore ontent -->
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
        Ungültige URL oder Schema, Verwenden eines Schemas, das fetch nicht unterstützt, oder Verwenden eines Schemas, das für einen bestimmten Anfragemodus nicht unterstützt wird.
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
        Wenn der Cache-Modus der Anfrage "only-if-cached" ist und der Anfrage-Modus nicht "same-origin" ist.
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
        Wenn die Anfragemethode ein ungültiges Namenstoken oder einer der verbotenen Header (<code>'CONNECT'</code>, <code>'TRACE'</code> oder <code>'TRACK'</code>) ist.
      </td>
      <td>
        <pre>
fetch('https://example.com/', { method: 'CONNECT' });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        Wenn der Anfragemodus "no-cors" ist und die Anfragemethode keine CORS-sichere Liste enthält (<code>'GET'</code>, <code>'HEAD'</code> oder <code>'POST'</code>).
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
        Wenn die Anfragemethode <code>'GET'</code> oder <code>'HEAD'</code> ist und der Body nicht null oder undefiniert ist.
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
      <td>Wenn fetch einen Netzwerkfehler verursacht.</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Beispiele

In unserem [Fetch Request Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (siehe [Fetch Request live](https://mdn.github.io/dom-examples/fetch/fetch-request/)) erstellen wir ein neues [`Request`](/de/docs/Web/API/Request) Objekt mithilfe des entsprechenden Konstruktors und rufen es dann mit einem `fetch()`-Aufruf ab. Da wir ein Bild abrufen, führen wir [`Response.blob()`](/de/docs/Web/API/Response/blob) auf der Antwort aus, um ihr den richtigen MIME-Typ zuzuweisen, damit es korrekt behandelt wird, und erstellen dann eine Object-URL daraus und zeigen sie in einem {{htmlelement("img")}} Element an.

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

In unserem [Fetch Request with init Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init) (siehe [Fetch Request init live](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init/)) machen wir dasselbe, außer dass wir ein _options_-Objekt übergeben, wenn wir `fetch()` aufrufen. In diesem Fall können wir einen {{HTTPHeader("Cache-Control")}} Wert festlegen, um anzugeben, mit welchen Arten von zwischengespeicherten Antworten wir einverstanden sind:

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

Sie könnten das `init`-Objekt auch mit dem `Request` Konstruktor übergeben, um denselben Effekt zu erzielen:

```js
const req = new Request("flowers.jpg", options);
```

Sie können auch ein Objektliteral als `headers` im `init` verwenden:

```js
const options = {
  headers: {
    "Cache-Control": "max-age=60480",
  },
};

const req = new Request("flowers.jpg", options);
```

Der Artikel [Using fetch](/de/docs/Web/API/Fetch_API/Using_Fetch) bietet weitere Beispiele für die Verwendung von `fetch()`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerGlobalScope.fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
