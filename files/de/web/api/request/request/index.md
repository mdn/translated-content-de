---
title: "Request: Konstruktor Request()"
short-title: Request()
slug: Web/API/Request/Request
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Der **`Request()`**-Konstruktor erzeugt ein neues
[`Request`](/de/docs/Web/API/Request)-Objekt.

## Syntax

```js-nolint
new Request(input)
new Request(input, options)
```

### Parameter

- `input`

  - : Definiert die Ressource, die Sie abrufen möchten. Dies kann entweder sein:

    - Eine Zeichenkette, die die URL der gewünschten Ressource enthält. Die URL kann relativ zur Basis-URL sein, die im Fensterkontext die [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments oder im Worker-Kontext [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) ist.
    - Ein [`Request`](/de/docs/Web/API/Request)-Objekt, das im Wesentlichen eine Kopie erstellt. Beachten Sie die folgenden Verhaltensänderungen, um die Sicherheit zu gewährleisten und den Konstruktor weniger wahrscheinlich Ausnahmen werfen zu lassen:

      - Wenn sich dieses Objekt auf einem anderen Ursprung als der Konstruktoraufruf befindet, wird der [`Request.referrer`](/de/docs/Web/API/Request/referrer) entfernt.
      - Wenn dieses Objekt einen [`Request.mode`](/de/docs/Web/API/Request/mode) von `navigate` hat, wird der `mode`-Wert in `same-origin` umgewandelt.

- `options` {{optional_inline}}

  - : Ein [`RequestInit`](/de/docs/Web/API/RequestInit)-Objekt, das alle benutzerdefinierten Einstellungen enthält, die Sie auf die Anforderung anwenden möchten.

    Wenn Sie einen neuen `Request` aus einem bestehenden `Request` konstruieren, ersetzen alle Optionen, die Sie in einem _options_-Argument für den neuen Request festlegen, alle entsprechenden Optionen, die im ursprünglichen `Request` festgelegt sind. Zum Beispiel:

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
        Seit <a href="/de/docs/Mozilla/Firefox/Releases/43">Firefox 43</a> wirft
        <code>Request()</code> einen TypeError, wenn die URL Anmeldedaten enthält, wie
        zum Beispiel http://user:password@example.com.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

In unserem [Fetch Request Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (siehe [Fetch Request live](https://mdn.github.io/dom-examples/fetch/fetch-request/)) erstellen wir ein neues `Request`-Objekt mit dem Konstruktor und rufen es dann mit einem
[`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf ab. Da wir ein Bild abrufen, führen wir
[`Response.blob`](/de/docs/Web/API/Response/blob) auf die Antwort aus, um ihm den richtigen MIME-Typ zu geben, damit es korrekt behandelt wird, erstellen dann eine Objekt-URL davon und zeigen sie in einem
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

In unserem [Fetch Request mit init Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init) (siehe [Fetch Request init live](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init/)) tun wir dasselbe, außer dass wir ein _options_-Objekt übergeben, wenn wir `fetch()` aufrufen.
In diesem Fall können wir einen {{httpheader("Cache-Control")}}-Wert setzen, um anzugeben, mit welcher Art von zwischengespeicherten Antworten wir einverstanden sind:

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

Beachten Sie, dass Sie `options` auch in den `fetch`-Aufruf übergeben könnten, um den gleichen Effekt zu erzielen, zum Beispiel:

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

Sie können auch ein [`Request`](/de/docs/Web/API/Request)-Objekt an den `Request()`-Konstruktor übergeben, um eine Kopie des Requests zu erstellen (Dies ist ähnlich dem Aufruf der
[`clone()`](/de/docs/Web/API/Request/clone)-Methode.)

```js
const copy = new Request(req);
```

> [!NOTE]
> Diese letzte Verwendung ist wahrscheinlich nur in [ServiceWorkers](/de/docs/Web/API/Service_Worker_API) nützlich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
