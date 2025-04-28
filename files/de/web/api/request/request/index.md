---
title: "Anfrage: Request() Konstruktor"
short-title: Request()
slug: Web/API/Request/Request
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Der **`Request()`** Konstruktor erstellt ein neues
[`Request`](/de/docs/Web/API/Request)-Objekt.

## Syntax

```js-nolint
new Request(input)
new Request(input, options)
```

### Parameter

- `input`

  - : Definiert die Ressource, die Sie abrufen möchten. Dies kann entweder sein:

    - Ein String, der die URL der Ressource enthält, die Sie abrufen möchten. Die URL kann relativ zur Basis-URL sein, die im Kontext eines Fensters das [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments oder im Kontext eines Workers [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) ist.
    - Ein [`Request`](/de/docs/Web/API/Request)-Objekt, das effektiv eine Kopie erstellt. Beachten Sie die folgenden Verhaltensänderungen, um die Sicherheit zu wahren und es unwahrscheinlicher zu machen, dass der Konstruktor Ausnahmen wirft:

      - Wenn dieses Objekt von einem anderen Ursprung als der Aufruf des Konstruktors stammt, wird der [`Request.referrer`](/de/docs/Web/API/Request/referrer) entfernt.
      - Wenn dieses Objekt einen [`Request.mode`](/de/docs/Web/API/Request/mode) von `navigate` hat, wird der `mode`-Wert in `same-origin` umgewandelt.

- `options` {{optional_inline}}

  - : Ein [`RequestInit`](/de/docs/Web/API/RequestInit)-Objekt, das alle benutzerdefinierten Einstellungen enthält, die Sie auf die Anfrage anwenden möchten.

    Wenn Sie eine neue `Request` von einer vorhandenen `Request` konstruieren, ersetzt jede Option, die Sie in einem _options_-Argument für die neue Anfrage festlegen, alle entsprechenden Optionen, die in der ursprünglichen `Request` festgelegt wurden. Zum Beispiel:

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

- `TypeError`
  - : Die URL enthält Anmeldedaten, wie `http://user:password@example.com`, oder kann nicht geparst werden.

## Beispiele

In unserem [Fetch-Anfragebeispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (siehe [Fetch-Anfrage live](https://mdn.github.io/dom-examples/fetch/fetch-request/)) erstellen wir ein neues `Request`-Objekt mit dem Konstruktor und rufen es dann mit einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf ab.
Da wir ein Bild abrufen, führen wir [`Response.blob`](/de/docs/Web/API/Response/blob) auf der Antwort aus, um ihm den richtigen MIME-Typ zu geben, damit es richtig behandelt wird, erstellen dann eine Object-URL davon und zeigen es in einem {{htmlelement("img")}}-Element an.

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

In unserem [Fetch-Anfrage-mit-init-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init) (siehe [Fetch-Anfrage-init live](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init/)) tun wir dasselbe, außer dass wir beim Aufruf von `fetch()` ein _options_-Objekt übergeben.
In diesem Fall können wir einen {{httpheader("Cache-Control")}}-Wert setzen, um anzugeben, welche Art von zwischengespeicherten Antworten uns recht sind:

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
  // …
});
```

Beachten Sie, dass Sie `options` auch in den `fetch`-Aufruf übergeben könnten, um denselben Effekt zu erzielen, z.B.:

```js
fetch(req, options).then((response) => {
  // …
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

Sie können auch ein [`Request`](/de/docs/Web/API/Request)-Objekt an den `Request()` Konstruktor übergeben, um eine Kopie der Request zu erstellen (Dies ist ähnlich dem Aufruf der [`clone()`](/de/docs/Web/API/Request/clone)-Methode.)

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
