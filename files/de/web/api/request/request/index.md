---
title: "Request: Request() Konstruktor"
short-title: Request()
slug: Web/API/Request/Request
l10n:
  sourceCommit: ca8be373334524886ee437112d7eae180a59be48
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

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

    - Eine Zeichenkette, die die URL der Ressource enthält, die Sie abrufen möchten. Die URL kann relativ zur Basis-URL sein, welche die [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments in einem Fensterkontext oder [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) in einem Worker-Kontext ist.
    - Ein [`Request`](/de/docs/Web/API/Request)-Objekt, das effektiv eine Kopie erstellt. Beachten Sie die folgenden Verhaltensänderungen, um die Sicherheit zu gewährleisten, während der Konstruktor weniger wahrscheinlich Ausnahmen auslöst:

      - Falls dieses Objekt in einem anderen Ursprung zum Konstruktoraufruf existiert, wird der [`Request.referrer`](/de/docs/Web/API/Request/referrer) entfernt.
      - Falls dieses Objekt einen [`Request.mode`](/de/docs/Web/API/Request/mode) von `navigate` hat, wird der `mode`-Wert in `same-origin` geändert.

- `options` {{optional_inline}}

  - : Ein [`RequestInit`](/de/docs/Web/API/RequestInit)-Objekt, das alle benutzerdefinierten Einstellungen enthält, die Sie auf die Anfrage anwenden möchten.

    Wenn Sie einen neuen `Request` aus einem bestehenden `Request` erstellen, ersetzen alle im _options_-Argument für die neue Anfrage gesetzten Optionen alle entsprechenden Optionen, die im ursprünglichen `Request` gesetzt wurden. Zum Beispiel:

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
  - : Die URL enthält Anmeldedaten, wie in `http://user:password@example.com`, oder kann nicht analysiert werden.

## Beispiele

In unserem [Fetch Request Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (siehe [Fetch Request live](https://mdn.github.io/dom-examples/fetch/fetch-request/)) erstellen wir ein neues `Request`-Objekt mithilfe des Konstruktors und rufen es dann mit einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf ab.
Da wir ein Bild abrufen, führen wir [`Response.blob`](/de/docs/Web/API/Response/blob) auf die Antwort aus, um ihr den richtigen MIME-Typ zu geben, damit sie ordnungsgemäß behandelt wird, erstellen dann eine Objekt-URL daraus und zeigen sie in einem {{htmlelement("img")}}-Element an.

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

In unserem [Fetch Request mit Init-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init) (siehe [Fetch Request init live](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init/)) tun wir dasselbe, außer dass wir ein _options_-Objekt übergeben, wenn wir `fetch()` aufrufen.
In diesem Fall können wir einen {{httpheader("Cache-Control")}}-Wert setzen, um anzugeben, welche Art von zwischengespeicherten Antworten für uns in Ordnung sind:

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

Beachten Sie, dass Sie `options` auch in den `fetch`-Aufruf übergeben könnten, um denselben Effekt zu erzielen, z. B.:

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

Sie können auch ein [`Request`](/de/docs/Web/API/Request)-Objekt an den `Request()`-Konstruktor übergeben, um eine Kopie des Requests zu erstellen (Dies ist ähnlich dem Aufrufen der [`clone()`](/de/docs/Web/API/Request/clone)-Methode.)

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
- [HTTP Access Control (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
