---
title: "Window: fetch()-Methode"
short-title: fetch()
slug: Web/API/Window/fetch
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef("Fetch API")}}

Die **`fetch()`**-Methode der {{domxref("Window")}}-Schnittstelle beginnt den Prozess des Abrufens einer Ressource aus dem Netzwerk und gibt ein Versprechen zurück, das erfüllt wird, sobald die Antwort verfügbar ist.

Das Versprechen wird mit dem {{domxref("Response")}}-Objekt aufgelöst, das die Antwort auf Ihre Anfrage darstellt.

Ein `fetch()`-Versprechen lehnt nur ab, wenn die Anfrage fehlschlägt, beispielsweise aufgrund einer schlecht geformten Anforderungs-URL oder eines Netzwerkfehlers.
Ein `fetch()`-Versprechen lehnt _nicht_ ab, wenn der Server mit HTTP-Statuscodes antwortet, die Fehler anzeigen (`404`, `504`, etc.).
Stattdessen muss ein `then()`-Handler die Eigenschaften {{domxref("Response.ok")}} und/oder {{domxref("Response.status")}} überprüfen.

Die `fetch()`-Methode wird durch die `connect-src`-Richtlinie der [Content Security Policy](/de/docs/Web/HTTP/Headers/Content-Security-Policy) kontrolliert und nicht durch die Richtlinie der abgerufenen Ressourcen.

> [!NOTE]
> Die Parameter der `fetch()`-Methode sind identisch mit denen des {{domxref("Request.Request","Request()")}}-Konstruktors.

## Syntax

```js-nolint
fetch(resource)
fetch(resource, options)
```

### Parameter

- `resource`

  - : Dies definiert die Ressource, die Sie abrufen möchten. Dies kann entweder sein:

    - Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier")}} — einschließlich eines {{domxref("URL")}}-Objekts — das die URL der abzurufenden Ressource bereitstellt. Die URL kann relativ zur Basis-URL sein, die in einem Fensterkontext die {{domxref("Node.baseURI", "baseURI")}} des Dokuments ist, oder {{domxref("WorkerGlobalScope.location")}} in einem Worker-Kontext.
    - Ein {{domxref("Request")}}-Objekt.

- `options` {{optional_inline}}

  - : Ein {{domxref("RequestInit")}}-Objekt, das alle benutzerdefinierten Einstellungen enthält, die Sie auf die Anfrage anwenden möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{domxref("Response")}}-Objekt aufgelöst wird.

### Ausnahmen

- `AbortError` {{domxref("DOMException")}}
  - : Die Anfrage wurde aufgrund eines Aufrufs der {{domxref("AbortController")}}
    {{domxref("AbortController.abort", "abort()")}}-Methode abgebrochen.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Verwendung der [Verknüpfte Themen API](/de/docs/Web/API/Topics_API) durch eine {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) speziell untersagt ist, und eine `fetch()`-Anfrage mit `browsingTopics: true` gestellt wurde.
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
      <td>Die Verwendung der <a href="/de/docs/Web/API/Attribution_Reporting_API">Attribution Reporting API</a> ist durch eine <a href="/de/docs/Web/HTTP/Headers/Permissions-Policy/attribution-reporting"><code>attribution-reporting</code></a> {{httpheader("Permissions-Policy")}} blockiert, und eine <code>fetch()</code>-Anfrage wurde mit <code>attributionReporting</code> spezifiziert.</td>
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
        Ungültige URL oder Schema, oder die Verwendung eines Schemas, das der Abruf nicht unterstützt, oder die Verwendung eines Schemas, das für einen bestimmten Anfragemodus nicht unterstützt wird.
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
        Wenn die Anfragemethode ein ungültiger Name-Token oder einer der verbotenen Header ist
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
        Wenn der Anfragemodus "no-cors" ist und die Anfragemethode keine CORS-sichere Liste ist
        (<code>'GET'</code>, <code>'HEAD'</code>, oder <code>'POST'</code>).
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
      <td>Wenn fetch einen Netzwerkfehler auslöst.</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Beispiele

In unserem [Fetch Request Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (siehe [Fetch Request live](https://mdn.github.io/dom-examples/fetch/fetch-request/)) erstellen wir
ein neues {{domxref("Request")}}-Objekt mit dem entsprechenden Konstruktor und rufen es dann
mit einem `fetch()`-Aufruf ab. Da wir ein Bild abrufen, führen wir
{{domxref("Response.blob()")}} für die Antwort aus, um den richtigen MIME-Typ zu erhalten, damit es
korrekt verarbeitet wird, erstellen dann eine Objekt-URL davon und zeigen es in einem
{{htmlelement("img")}}-Element an.

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

In unserem [Fetch Request with init Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init) (siehe [Fetch Request init live](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init/)) machen wir dasselbe, außer dass wir ein _options_-Objekt übergeben, wenn wir `fetch()` aufrufen.
In diesem Fall können wir einen {{HTTPHeader("Cache-Control")}}-Wert setzen, um anzugeben, mit welcher Art von zwischengespeicherten Antworten wir einverstanden sind:

```js
const myImage = document.querySelector("img");
const reqHeaders = new Headers();

// Eine zwischengespeicherte Antwort ist in Ordnung, es sei denn, sie ist älter als eine Woche
reqHeaders.set("Cache-Control", "max-age=604800");

const options = {
  headers: reqHeaders,
};

// Übergeben Sie init als ein "options"-Objekt mit unseren Köpfen.
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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WorkerGlobalScope.fetch()")}}
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
