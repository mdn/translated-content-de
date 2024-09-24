---
title: "Request: Request()-Konstruktor"
short-title: Request()
slug: Web/API/Request/Request
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("Fetch API")}}

Der **`Request()`**-Konstruktor erstellt ein neues {{domxref("Request")}}-Objekt.

## Syntax

```js-nolint
new Request(input)
new Request(input, options)
```

### Parameter

- `input`

  - : Bestimmt die Ressource, die Sie abrufen möchten. Dies kann entweder sein:

    - Ein String, der die URL der Ressource enthält, die Sie abrufen möchten. Die URL kann relativ zur Basis-URL sein, die im Fensterkontext die {{domxref("Node.baseURI", "baseURI")}} des Dokuments oder {{domxref("WorkerGlobalScope.location")}} im Worker-Kontext ist.
    - Ein {{domxref("Request")}}-Objekt, das effektiv eine Kopie erstellt. Beachten Sie die folgenden Verhaltensänderungen, um die Sicherheit beizubehalten, während es weniger wahrscheinlich ist, dass der Konstruktor Ausnahmen auslöst:

      - Wenn dieses Objekt von einem anderen Ursprung als der Konstruktoraufruf stammt, wird der {{domxref("Request.referrer")}} entfernt.
      - Wenn dieses Objekt einen {{domxref("Request.mode")}} von `navigate` hat, wird der `mode`-Wert in `same-origin` umgewandelt.

- `options` {{optional_inline}}

  - : Ein {{domxref("RequestInit")}}-Objekt, das benutzerdefinierte Einstellungen enthält, die Sie auf die Anfrage anwenden möchten.

    Wenn Sie einen neuen `Request` aus einem bestehenden `Request` erstellen, ersetzen alle Optionen, die Sie in einem _options_-Argument für den neuen Request festlegen, alle entsprechenden Optionen, die im ursprünglichen `Request` festgelegt wurden. Zum Beispiel:

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
        wirft <code>Request()</code> einen TypeError, wenn die URL Anmeldedaten enthält, wie z.B. http://user:password@example.com.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

In unserem [Fetch Request-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (siehe [Fetch Request live](https://mdn.github.io/dom-examples/fetch/fetch-request/)) erstellen wir ein neues `Request`-Objekt mit dem Konstruktor und rufen es dann mit einem {{domxref("Window/fetch", "fetch()")}}-Aufruf ab. Da wir ein Bild abrufen, führen wir {{domxref("Response.blob")}} für die Antwort aus, um ihr den richtigen MIME-Typ zu geben, damit sie ordnungsgemäß behandelt wird, erstellen dann eine Objekt-URL davon und zeigen sie in einem {{htmlelement("img")}}-Element an.

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

In unserem [Fetch Request mit Init-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init) (siehe [Fetch Request init live](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init/)) tun wir dasselbe, außer dass wir ein _options_-Objekt übergeben, wenn wir `fetch()` aufrufen. In diesem Fall können wir einen {{httpheader("Cache-Control")}}-Wert festlegen, um anzugeben, welche Art von zwischengespeicherten Antworten für uns akzeptabel sind:

```js
const myImage = document.querySelector("img");
const reqHeaders = new Headers();

// Eine zwischengespeicherte Antwort ist in Ordnung, es sei denn, sie ist älter als eine Woche.
reqHeaders.set("Cache-Control", "max-age=604800");

const options = {
  headers: reqHeaders,
};

// übergeben Sie init als "options"-Objekt mit unseren Headern
const req = new Request("flowers.jpg", options);

fetch(req).then((response) => {
  // ...
});
```

Beachten Sie, dass Sie `options` auch in den `fetch`-Aufruf eingeben könnten, um denselben Effekt zu erzielen, zum Beispiel:

```js
fetch(req, options).then((response) => {
  // ...
});
```

Sie können auch ein Objekt-Literal als `headers` in `options` verwenden.

```js
const options = {
  headers: {
    "Cache-Control": "max-age=60480",
  },
};

const req = new Request("flowers.jpg", options);
```

Sie können auch ein {{domxref("Request")}}-Objekt an den `Request()`-Konstruktor übergeben, um eine Kopie der Anforderung zu erstellen (Dies ist ähnlich dem Aufruf der {{domxref("Request.clone","clone()")}}-Methode.)

```js
const copy = new Request(req);
```

> [!NOTE]
> Diese letzte Verwendung ist wahrscheinlich nur in [ServiceWorkers](/de/docs/Web/API/Service_Worker_API) nützlich.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
