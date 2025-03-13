---
title: "Request: Request() Konstruktor"
short-title: Request()
slug: Web/API/Request/Request
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Der **`Request()`**-Konstruktor erstellt ein neues [`Request`](/de/docs/Web/API/Request)-Objekt.

## Syntax

```js-nolint
new Request(input)
new Request(input, options)
```

### Parameter

- `input`

  - : Definiert die Ressource, die Sie abrufen möchten. Dies kann entweder sein:

    - Eine Zeichenkette, die die URL der Ressource enthält, die Sie abrufen möchten. Die URL kann relativ zur Basis-URL sein, die im Fensterkontext das [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments oder im Worker-Kontext [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) ist.
    - Ein [`Request`](/de/docs/Web/API/Request)-Objekt, das effektiv eine Kopie erstellt. Beachten Sie die folgenden Verhaltensaktualisierungen, um die Sicherheit zu wahren und die Wahrscheinlichkeit von Ausnahmen beim Aufrufen des Konstruktors zu reduzieren:

      - Wenn dieses Objekt von einer anderen Herkunft als dem Aufruf des Konstruktors existiert, wird der [`Request.referrer`](/de/docs/Web/API/Request/referrer) entfernt.
      - Wenn dieses Objekt einen [`Request.mode`](/de/docs/Web/API/Request/mode) von `navigate` hat, wird der `mode`-Wert in `same-origin` konvertiert.

- `options` {{optional_inline}}

  - : Ein [`RequestInit`](/de/docs/Web/API/RequestInit)-Objekt, das benutzerdefinierte Einstellungen enthält, die Sie auf die Anforderung anwenden möchten.

    Wenn Sie einen neuen `Request` basierend auf einem vorhandenen `Request` erstellen, ersetzt jede Option, die Sie im _options_-Argument für den neuen Request festlegen, alle entsprechenden Optionen, die im ursprünglichen `Request` gesetzt wurden. Zum Beispiel:

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

In unserem [Fetch Request-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (siehe [Fetch Request live](https://mdn.github.io/dom-examples/fetch/fetch-request/)) erstellen wir ein neues `Request`-Objekt mit dem Konstruktor und rufen es dann mit einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf ab.
Da wir ein Bild abrufen, führen wir [`Response.blob`](/de/docs/Web/API/Response/blob) für die Antwort aus, um den richtigen MIME-Typ zu erhalten, damit es korrekt verarbeitet wird. Anschließend erstellen wir eine Objekt-URL daraus und zeigen sie in einem {{htmlelement("img")}}-Element an.

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

In unserem [Fetch Request mit Init-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init) (siehe [Fetch Request init live](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init/)) machen wir dasselbe, außer dass wir beim Aufrufen von `fetch()` ein _options_-Objekt übergeben.
In diesem Fall können wir einen {{httpheader("Cache-Control")}}-Wert festlegen, um anzugeben, mit welcher Art von zwischengespeicherten Antworten wir einverstanden sind:

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

Beachten Sie, dass Sie `options` auch in den `fetch`-Aufruf einfügen können, um den gleichen Effekt zu erzielen, z. B.:

```js
fetch(req, options).then((response) => {
  // ...
});
```

Sie können auch ein Objektsliteral als `headers` in `options` verwenden.

```js
const options = {
  headers: {
    "Cache-Control": "max-age=60480",
  },
};

const req = new Request("flowers.jpg", options);
```

Sie können auch ein [`Request`](/de/docs/Web/API/Request)-Objekt an den `Request()`-Konstruktor übergeben, um eine Kopie des Requests zu erstellen (Dies ähnelt dem Aufruf der [`clone()`](/de/docs/Web/API/Request/clone)-Methode).

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
