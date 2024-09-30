---
title: "Request: Request() Konstruktor"
short-title: Request()
slug: Web/API/Request/Request
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("Fetch API")}}

Der **`Request()`**-Konstruktor erstellt ein neues
[`Request`](/de/docs/Web/API/Request)-Objekt.

## Syntax

```js-nolint
new Request(input)
new Request(input, options)
```

### Parameter

- `input`

  - : Definiert die Ressource, die Sie abrufen möchten. Dies kann entweder sein:

    - Ein String, der die URL der Ressource enthält, die Sie abrufen möchten. Die URL kann relativ zur Basis-URL sein, welche das [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments im Fensterkontext oder [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) im Worker-Kontext ist.
    - Ein [`Request`](/de/docs/Web/API/Request)-Objekt, das effektiv eine Kopie erstellt. Beachten Sie die folgenden Verhaltensänderungen, um die Sicherheit zu gewährleisten und die Wahrscheinlichkeit von Ausnahmen zu verringern:

      - Wenn dieses Objekt von einem anderen Ursprung als dem der Konstruktoraufruf stammt, wird der
        [`Request.referrer`](/de/docs/Web/API/Request/referrer) entfernt.
      - Wenn dieses Objekt einen [`Request.mode`](/de/docs/Web/API/Request/mode) von `navigate` hat,
        wird der `mode`-Wert in `same-origin` umgewandelt.

- `options` {{optional_inline}}

  - : Ein [`RequestInit`](/de/docs/Web/API/RequestInit)-Objekt, das benutzerdefinierte Einstellungen für die Anfrage enthält.

    Wenn Sie ein neues `Request` aus einem bestehenden `Request` erstellen, ersetzen alle im _options_-Parameter angegebenen Optionen die entsprechenden Optionen im ursprünglichen `Request`. Zum Beispiel:

    ```js
    const oldRequest = new Request(
      "https://github.com/mdn/content/issues/12959",
      { headers: { From: "webmaster@example.org" } },
    );
    oldRequest.headers.get("From"); // "webmaster@example.org"
    const newRequest = new Request(oldRequest, {
      headers: { From: "developer@example.org" },
    });
    newRequest.headers.get("From"); // "developer@example.org"
    ```

### Ausnahmen

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Typ</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>TypeError</code></td>
      <td>
        Seit <a href="/de/docs/Mozilla/Firefox/Releases/43">Firefox 43</a>
        wirft <code>Request()</code> einen TypeError, wenn die URL Anmeldeinformationen wie http://user:password@example.com enthält.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

In unserem [Fetch Request Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (siehe [Fetch Request live](https://mdn.github.io/dom-examples/fetch/fetch-request/)) erstellen wir ein neues `Request`-Objekt mit dem Konstruktor und rufen es dann mit einem
[`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf ab. Da wir ein Bild abrufen, führen wir
[`Response.blob`](/de/docs/Web/API/Response/blob) auf der Antwort aus, um ihm den richtigen MIME-Typ zu geben, so dass es richtig verarbeitet wird, dann erstellen wir eine Objekt-URL davon und zeigen es in einem
{{htmlelement("img")}}-Element an.

```js
const myImage = document.querySelector("img");
const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => response.blob())
  .then((response) => {
    const objectURL = URL.createObjectURL(response);
    myImage.src = objectURL;
  });
```

In unserem [Fetch Request mit init Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init) (siehe [Fetch Request init live](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init/)) machen wir dasselbe, außer dass wir ein _options_-Objekt übergeben, wenn wir `fetch()` aufrufen.
In diesem Fall können wir einen {{httpheader("Cache-Control")}}-Wert festlegen, um anzugeben, welche Art von zwischengespeicherten Antworten wir akzeptieren:

```js
const myImage = document.querySelector("img");
const reqHeaders = new Headers();

// A cached response is okay unless it's more than a week old.
reqHeaders.set("Cache-Control", "max-age=604800");

const options = {
  headers: reqHeaders,
};

// pass init as an "options" object with our headers
const req = new Request("flowers.jpg", options);

fetch(req).then((response) => {
  // ...
});
```

Beachten Sie, dass Sie `options` auch in den `fetch`-Aufruf übergeben können, um denselben Effekt zu erzielen, z.B.:

```js
fetch(req, options).then((response) => {
  // ...
});
```

Sie können auch ein Objektliteral als `headers` in `options` verwenden.

```js
const options = {
  headers: {
    "Cache-Control": "max-age=60480",
  },
};

const req = new Request("flowers.jpg", options);
```

Sie können auch ein [`Request`](/de/docs/Web/API/Request)-Objekt an den `Request()`
Konstruktor übergeben, um eine Kopie des Request zu erstellen (Dies ist ähnlich wie das Aufrufen der
[`clone()`](/de/docs/Web/API/Request/clone)-Methode).

```js
const copy = new Request(req);
```

> [!NOTE]
> Diese letzte Nutzung ist wahrscheinlich nur in [ServiceWorkers](/de/docs/Web/API/Service_Worker_API) nützlich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
