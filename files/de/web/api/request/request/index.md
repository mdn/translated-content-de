---
title: "Anfrage: Request() Konstruktor"
short-title: Request()
slug: Web/API/Request/Request
l10n:
  sourceCommit: f6e66d18205c93fcaeb2ea9ad51541b5b4d7d2b1
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Der **`Request()`** Konstruktor erstellt ein neues
[`Request`](/de/docs/Web/API/Request) Objekt.

## Syntax

```js-nolint
new Request(input)
new Request(input, options)
```

### Parameter

- `input`
  - : Definiert die Ressource, die Sie abrufen möchten. Dies kann entweder sein:
    - Ein String, der die URL der Ressource enthält, die Sie abrufen möchten. Die URL kann relativ zur Basis-URL sein, die sich im Fensterkontext auf die [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments oder im Worker-Kontext auf [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) bezieht.
    - Ein [`Request`](/de/docs/Web/API/Request) Objekt, das effektiv eine Kopie erstellt. Beachten Sie die folgenden Verhaltensaktualisierungen, um die Sicherheit zu gewährleisten und das Auftreten von Ausnahmen zu reduzieren:
      - Wenn dieses Objekt auf einem anderen Ursprung als der Konstruktoraufruf existiert, wird der [`Request.referrer`](/de/docs/Web/API/Request/referrer) entfernt.
      - Wenn dieses Objekt einen [`Request.mode`](/de/docs/Web/API/Request/mode) von `navigate` hat, wird der `mode`-Wert zu `same-origin` konvertiert.

- `options` {{optional_inline}}
  - : Ein [`RequestInit`](/de/docs/Web/API/RequestInit) Objekt, das alle benutzerdefinierten Einstellungen enthält, die Sie auf die Anfrage anwenden möchten.

    Wenn Sie ein neues `Request` aus einem bestehenden `Request` konstruieren, ersetzen alle Optionen, die Sie in einem _options_ Argument für die neue Anfrage festlegen, alle entsprechenden Optionen, die im ursprünglichen `Request` festgelegt wurden. Zum Beispiel:

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
    - Die Verwendung der [Topics API](/de/docs/Web/API/Topics_API) durch eine {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guide/Permissions_Policy) speziell untersagt ist und `browsingTopics` auf `true` gesetzt ist.
    - Die Verwendung von Operationen der [Private State Token API](/de/docs/Web/API/Private_State_Token_API) durch eine {{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}} oder {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guide/Permissions_Policy) speziell untersagt ist und die `privateToken`-Option angegeben ist, einschließlich eines nicht erlaubten `privateToken.operation` Typs.
- `TypeError`
  - : Wird ausgelöst, wenn:
    - Die URL Anmeldedaten enthält, wie `http://user:password@example.com`, oder nicht analysiert werden kann.
    - Die `privateToken` Init-Option angegeben ist, einschließlich eines `privateToken.operation` Typs von `send-redemption-record` und das `privateToken.issues` Array leer war oder nicht gesetzt wurde, oder ein oder mehrere der angegebenen `issuers` keine vertrauenswürdigen HTTPS-URLs sind.

## Beispiele

In unserem [Fetch Request Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (siehe [Fetch Request live](https://mdn.github.io/dom-examples/fetch/fetch-request/)) erstellen wir ein neues `Request` Objekt mit dem Konstruktor, das wir dann mit einem [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf abrufen.
Da wir ein Bild abrufen, führen wir [`Response.blob`](/de/docs/Web/API/Response/blob) auf der Antwort aus, um den richtigen MIME-Typ zu erhalten, damit es korrekt behandelt wird, erstellen dann eine Objekt-URL daraus und zeigen sie in einem {{htmlelement("img")}} Element an.

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

In unserem [Fetch Request mit init Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init) (siehe [Fetch Request init live](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init/)) tun wir dasselbe, außer dass wir ein _options_ Objekt übergeben, wenn wir `fetch()` aufrufen.
In diesem Fall können wir einen {{httpheader("Cache-Control")}} Wert festlegen, um anzugeben, mit welcher Art von zwischengespeicherten Antworten wir einverstanden sind:

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

Beachten Sie, dass Sie `options` auch in den `fetch` Aufruf übergeben könnten, um denselben Effekt zu erzielen, z.B.:

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

Sie können auch ein [`Request`](/de/docs/Web/API/Request) Objekt an den `Request()` Konstruktor übergeben, um eine Kopie des Requests zu erstellen (dies ist ähnlich wie der Aufruf der [`clone()`](/de/docs/Web/API/Request/clone) Methode).

```js
const copy = new Request(req);
```

> [!NOTE]
> Dieser letzte Gebrauch ist wahrscheinlich nur in [ServiceWorkers](/de/docs/Web/API/Service_Worker_API) nützlich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guide/CORS)
- [HTTP](/de/docs/Web/HTTP)
