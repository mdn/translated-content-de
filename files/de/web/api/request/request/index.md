---
title: "Request: Request()-Konstruktor"
short-title: Request()
slug: Web/API/Request/Request
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
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
  - : Definiert die Ressource, die Sie abrufen möchten. Dies kann Folgendes sein:
    - Ein String mit der URL der Ressource, die Sie abrufen möchten. Die URL kann relativ zur Basis-URL sein. In einem Window-Kontext ist dies die [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments, in einem Worker-Kontext [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location).
    - Ein [`Request`](/de/docs/Web/API/Request)-Objekt, wodurch praktisch eine Kopie erstellt wird. Beachten Sie die folgenden Verhaltensanpassungen, die die Sicherheit gewährleisten und zugleich die Wahrscheinlichkeit verringern, dass der Konstruktor Ausnahmen auslöst:
      - Wenn dieses Objekt von einem anderen Origin stammt als der Konstruktoraufruf, wird [`Request.referrer`](/de/docs/Web/API/Request/referrer) entfernt.
      - Wenn [`Request.mode`](/de/docs/Web/API/Request/mode) dieses Objekts den Wert `navigate` hat, wird der Wert von `mode` in `same-origin` umgewandelt.

- `options` {{optional_inline}}
  - : Ein [`RequestInit`](/de/docs/Web/API/RequestInit)-Objekt mit benutzerdefinierten Einstellungen, die Sie auf die Anfrage anwenden möchten.

    Wenn Sie ein neues `Request`-Objekt aus einem vorhandenen `Request`-Objekt erstellen, ersetzen die Einstellungen im Argument _options_ der neuen Anfrage die entsprechenden Einstellungen des ursprünglichen `Request`-Objekts. Beispiel:

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

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die Verwendung der [Topics API](/de/docs/Web/API/Topics_API) durch eine {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}}-[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) ausdrücklich untersagt ist und `browsingTopics` auf `true` gesetzt ist.
    - Die Verwendung von Operationen der [Private State Token API](/de/docs/Web/API/Private_State_Token_API) durch eine {{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}}- oder {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}}-[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) ausdrücklich untersagt ist und die Option `privateToken` angegeben wurde, einschließlich eines nicht zulässigen Typs für `privateToken.operation`.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Die URL Zugangsdaten enthält, beispielsweise `http://user:password@example.com`, oder nicht geparst werden kann.
    - Die Initialisierungsoption `privateToken` angegeben wurde, einschließlich eines `privateToken.operation`-Typs mit dem Wert `send-redemption-record`, und das Array `privateToken.issues` leer oder nicht festgelegt war oder eine oder mehrere der angegebenen `issuers` keine vertrauenswürdigen HTTPS-URLs sind.

## Beispiele

In unserem [Fetch-Request-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (siehe [Fetch-Request-Live-Demo](https://mdn.github.io/dom-examples/fetch/fetch-request/)) erstellen wir mit dem Konstruktor ein neues `Request`-Objekt und rufen die Ressource anschließend mit [`fetch()`](/de/docs/Web/API/Window/fetch) ab.
Da wir ein Bild abrufen, rufen wir [`Response.blob`](/de/docs/Web/API/Response/blob) für die Antwort auf, damit sie den passenden MIME-Typ erhält und korrekt verarbeitet wird. Anschließend erstellen wir daraus eine Objekt-URL und zeigen das Bild in einem {{htmlelement("img")}}-Element an.

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

In unserem [Fetch-Request-Beispiel mit Initialisierungsoptionen](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init) (siehe [Live-Demo](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init/)) gehen wir genauso vor, übergeben beim Aufruf von `fetch()` jedoch zusätzlich ein _options_-Objekt.
In diesem Fall können wir einen Wert für {{httpheader("Cache-Control")}} festlegen, um anzugeben, welche Arten zwischengespeicherter Antworten wir akzeptieren:

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

Sie können `options` auch direkt an den `fetch`-Aufruf übergeben, um denselben Effekt zu erzielen, beispielsweise:

```js
fetch(req, options).then((response) => {
  // …
});
```

Sie können für `headers` in `options` auch ein Objektliteral verwenden.

```js
const options = {
  headers: {
    "Cache-Control": "max-age=60480",
  },
};

const req = new Request("flowers.jpg", options);
```

Sie können dem `Request()`-Konstruktor außerdem ein [`Request`](/de/docs/Web/API/Request)-Objekt übergeben, um eine Kopie des Request-Objekts zu erstellen. Dies ähnelt dem Aufruf der Methode [`clone()`](/de/docs/Web/API/Request/clone).

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
