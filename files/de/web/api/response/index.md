---
title: Response
slug: Web/API/Response
l10n:
  sourceCommit: ad1fac9d8dd0c9ab8f560e98c5c923559617ba54
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die Schnittstelle **`Response`** der [Fetch API](/de/docs/Web/API/Fetch_API) repräsentiert die Antwort auf eine Anfrage.

Sie können mit dem Konstruktor [`Response()`](/de/docs/Web/API/Response/Response) ein neues `Response`-Objekt erstellen. Wahrscheinlicher werden Sie jedoch auf ein `Response`-Objekt stoßen, das als Ergebnis einer anderen API-Operation zurückgegeben wird – beispielsweise durch [`FetchEvent.respondWith`](/de/docs/Web/API/FetchEvent/respondWith) eines Service Workers oder durch einen einfachen Aufruf von [`fetch()`](/de/docs/Web/API/Window/fetch).

## Konstruktor

- [`Response()`](/de/docs/Web/API/Response/Response)
  - : Erstellt ein neues `Response`-Objekt.

## Instanzeigenschaften

- [`Response.body`](/de/docs/Web/API/Response/body) {{ReadOnlyInline}}
  - : Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) mit dem Inhalt des Body.
- [`Response.bodyUsed`](/de/docs/Web/API/Response/bodyUsed) {{ReadOnlyInline}}
  - : Speichert einen booleschen Wert, der angibt, ob der Body in einer Response bereits verwendet wurde.
- [`Response.headers`](/de/docs/Web/API/Response/headers) {{ReadOnlyInline}}
  - : Das der Response zugeordnete [`Headers`](/de/docs/Web/API/Headers)-Objekt.
- [`Response.ok`](/de/docs/Web/API/Response/ok) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Response erfolgreich war (Status im Bereich `200` – `299`) oder nicht.
- [`Response.redirected`](/de/docs/Web/API/Response/redirected) {{ReadOnlyInline}}
  - : Gibt an, ob die Response das Ergebnis einer Weiterleitung ist oder nicht (d.h. ihre URL-Liste enthält mehr als einen Eintrag).
- [`Response.status`](/de/docs/Web/API/Response/status) {{ReadOnlyInline}}
  - : Der Statuscode der Response. (Bei Erfolg ist dies `200`.)
- [`Response.statusText`](/de/docs/Web/API/Response/statusText) {{ReadOnlyInline}}
  - : Die dem Statuscode entsprechende Statusmeldung (z. B. `OK` für `200`).
- [`Response.type`](/de/docs/Web/API/Response/type) {{ReadOnlyInline}}
  - : Der Typ der Response (z. B. `basic`, `cors`).
- [`Response.url`](/de/docs/Web/API/Response/url) {{ReadOnlyInline}}
  - : Die URL der Response.

## Statische Methoden

- [`Response.error()`](/de/docs/Web/API/Response/error_static)
  - : Gibt ein neues `Response`-Objekt zurück, das mit einem Netzwerkfehler verknüpft ist.
- [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static)
  - : Gibt eine neue Response mit einer anderen URL zurück.
- [`Response.json()`](/de/docs/Web/API/Response/json_static)
  - : Gibt ein neues `Response`-Objekt zurück, um die bereitgestellten JSON-kodierten Daten zurückzugeben.

## Instanzmethoden

- [`Response.arrayBuffer()`](/de/docs/Web/API/Response/arrayBuffer)
  - : Gibt ein Promise zurück, das mit einer {{jsxref("ArrayBuffer")}}-Darstellung des Response-Body erfüllt wird.
- [`Response.blob()`](/de/docs/Web/API/Response/blob)
  - : Gibt ein Promise zurück, das mit einer [`Blob`](/de/docs/Web/API/Blob)-Darstellung des Response-Body erfüllt wird.
- [`Response.bytes()`](/de/docs/Web/API/Response/bytes)
  - : Gibt ein Promise zurück, das mit einer {{jsxref("Uint8Array")}}-Darstellung des Response-Body erfüllt wird.
- [`Response.clone()`](/de/docs/Web/API/Response/clone)
  - : Erstellt eine Kopie eines `Response`-Objekts.
- [`Response.formData()`](/de/docs/Web/API/Response/formData)
  - : Gibt ein Promise zurück, das mit einer [`FormData`](/de/docs/Web/API/FormData)-Darstellung des Response-Body erfüllt wird.
- [`Response.json()`](/de/docs/Web/API/Response/json)
  - : Gibt ein Promise zurück, das mit dem Ergebnis des Parsens des Response-Body-Texts als {{jsxref("JSON")}} erfüllt wird.
- [`Response.text()`](/de/docs/Web/API/Response/text)
  - : Gibt ein Promise zurück, das mit einer Textdarstellung des Response-Body erfüllt wird.
- [`Response.textStream()`](/de/docs/Web/API/Response/textStream) {{experimental_inline}}
  - : Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der verwendet werden kann, um den Inhalt des Response-Body in UTF-8-Chunks zu lesen.

## Beispiele

### Abrufen eines Bildes

In unserem [einfachen Fetch-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/basic-fetch) ([Beispiel live ausführen](https://mdn.github.io/dom-examples/fetch/basic-fetch/)) verwenden wir einen einfachen Aufruf von `fetch()`, um ein Bild abzurufen und es in einem {{htmlelement("img")}}-Element anzuzeigen.
Der Aufruf von `fetch()` gibt ein Promise zurück, das mit dem `Response`-Objekt erfüllt wird, das mit dem Abrufvorgang der Ressource verknüpft ist.

Sie werden feststellen, dass wir, da wir ein Bild anfordern, [`Response.blob`](/de/docs/Web/API/Response/blob) ausführen müssen, um der Response den korrekten MIME-Typ zuzuweisen.

```js
const image = document.querySelector(".my-image");
fetch("flowers.jpg")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.blob();
  })
  .then((blob) => {
    const objectURL = URL.createObjectURL(blob);
    image.src = objectURL;
  })
  .catch((error) => {
    console.error("Error fetching the image:", error);
  });
```

Sie können den Konstruktor [`Response()`](/de/docs/Web/API/Response/Response) auch verwenden, um Ihr eigenes benutzerdefiniertes `Response`-Objekt zu erstellen:

```js
const response = new Response();
```

### Ein PHP-Aufruf

Hier rufen wir eine PHP-Programmdatei auf, die einen JSON-String erzeugt, und zeigen das Ergebnis als JSON-Wert an.

```js
// Function to fetch JSON using PHP
const getJSON = async () => {
  // Generate the Response object
  const response = await fetch("getJSON.php");
  if (response.ok) {
    // Get JSON value from the response body
    return response.json();
  }
  throw new Error("*** PHP file not found");
};

// Call the function and output value or error message to console
getJSON()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffssteuerung (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
