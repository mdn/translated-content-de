---
title: Response
slug: Web/API/Response
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`Response`**-Schnittstelle der [Fetch API](/de/docs/Web/API/Fetch_API) repräsentiert die Antwort auf eine Anfrage.

Sie können ein neues `Response`-Objekt mit dem [`Response()`](/de/docs/Web/API/Response/Response)-Konstruktor erstellen, aber es ist wahrscheinlicher, dass Ihnen ein `Response`-Objekt als Ergebnis einer anderen API-Operation begegnet - zum Beispiel ein Service Worker [`FetchEvent.respondWith`](/de/docs/Web/API/FetchEvent/respondWith) oder ein einfacher [`fetch()`](/de/docs/Web/API/Window/fetch).

## Konstruktor

- [`Response()`](/de/docs/Web/API/Response/Response)
  - : Erstellt ein neues `Response`-Objekt.

## Instanz-Eigenschaften

- [`Response.body`](/de/docs/Web/API/Response/body) {{ReadOnlyInline}}
  - : Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) des Inhalts des Körpers.
- [`Response.bodyUsed`](/de/docs/Web/API/Response/bodyUsed) {{ReadOnlyInline}}
  - : Speichert einen boolean-Wert, der angibt, ob der Körper in einer Antwort bereits verwendet wurde.
- [`Response.headers`](/de/docs/Web/API/Response/headers) {{ReadOnlyInline}}
  - : Das [`Headers`](/de/docs/Web/API/Headers)-Objekt, das mit der Antwort verknüpft ist.
- [`Response.ok`](/de/docs/Web/API/Response/ok) {{ReadOnlyInline}}
  - : Ein boolean, der angibt, ob die Antwort erfolgreich war (Status im Bereich `200` – `299`) oder nicht.
- [`Response.redirected`](/de/docs/Web/API/Response/redirected) {{ReadOnlyInline}}
  - : Gibt an, ob die Antwort das Ergebnis einer Umleitung ist (d. h., ob ihre URL-Liste mehr als einen Eintrag enthält).
- [`Response.status`](/de/docs/Web/API/Response/status) {{ReadOnlyInline}}
  - : Der Statuscode der Antwort. (Dies wird `200` bei einem Erfolg sein).
- [`Response.statusText`](/de/docs/Web/API/Response/statusText) {{ReadOnlyInline}}
  - : Die Statusnachricht, die dem Statuscode entspricht. (z. B. `OK` für `200`).
- [`Response.type`](/de/docs/Web/API/Response/type) {{ReadOnlyInline}}
  - : Der Typ der Antwort (z. B. `basic`, `cors`).
- [`Response.url`](/de/docs/Web/API/Response/url) {{ReadOnlyInline}}
  - : Die URL der Antwort.

## Statische Methoden

- [`Response.error()`](/de/docs/Web/API/Response/error_static)
  - : Gibt ein neues `Response`-Objekt zurück, das mit einem Netzwerkfehler verknüpft ist.
- [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static)
  - : Gibt eine neue Antwort mit einer anderen URL zurück.
- [`Response.json()`](/de/docs/Web/API/Response/json_static)
  - : Gibt ein neues `Response`-Objekt zurück, um die bereitgestellten JSON-codierten Daten zurückzugeben.

## Instanz-Methoden

- [`Response.arrayBuffer()`](/de/docs/Web/API/Response/arrayBuffer)
  - : Gibt ein Promise zurück, das mit einer {{jsxref("ArrayBuffer")}}-Darstellung des Antwortkörpers aufgelöst wird.
- [`Response.blob()`](/de/docs/Web/API/Response/blob)
  - : Gibt ein Promise zurück, das mit einer [`Blob`](/de/docs/Web/API/Blob)-Darstellung des Antwortkörpers aufgelöst wird.
- [`Response.bytes()`](/de/docs/Web/API/Response/bytes)
  - : Gibt ein Promise zurück, das mit einer {{jsxref("Uint8Array")}}-Darstellung des Antwortkörpers aufgelöst wird.
- [`Response.clone()`](/de/docs/Web/API/Response/clone)
  - : Erstellt ein Duplikat eines `Response`-Objekts.
- [`Response.formData()`](/de/docs/Web/API/Response/formData)
  - : Gibt ein Promise zurück, das mit einer [`FormData`](/de/docs/Web/API/FormData)-Darstellung des Antwortkörpers aufgelöst wird.
- [`Response.json()`](/de/docs/Web/API/Response/json)
  - : Gibt ein Promise zurück, das mit dem Ergebnis des Parsens des Antwortkörpers als {{jsxref("JSON")}} aufgelöst wird.
- [`Response.text()`](/de/docs/Web/API/Response/text)
  - : Gibt ein Promise zurück, das mit einer Textdarstellung des Antwortkörpers aufgelöst wird.

## Beispiele

### Ein Bild abrufen

In unserem [einfachen Fetch-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/basic-fetch) ([Beispiel live ausführen](https://mdn.github.io/dom-examples/fetch/basic-fetch/)) verwenden wir einen einfachen `fetch()`-Aufruf, um ein Bild zu holen und es in einem {{htmlelement("img")}}-Element anzuzeigen.
Der `fetch()`-Aufruf gibt ein Promise zurück, das mit dem `Response`-Objekt aufgelöst wird, das mit der Ressourcenabruffunktion verknüpft ist.

Sie werden feststellen, dass wir, da wir ein Bild anfordern, [`Response.blob`](/de/docs/Web/API/Response/blob) ausführen müssen, um der Antwort ihren korrekten MIME-Typ zu geben.

```js
const image = document.querySelector(".my-image");
fetch("flowers.jpg")
  .then((response) => response.blob())
  .then((blob) => {
    const objectURL = URL.createObjectURL(blob);
    image.src = objectURL;
  });
```

Sie können auch den [`Response()`](/de/docs/Web/API/Response/Response)-Konstruktor verwenden, um Ihr eigenes benutzerdefiniertes `Response`-Objekt zu erstellen:

```js
const response = new Response();
```

### Ein PHP-Aufruf

Hier rufen wir eine PHP-Programmdaten-Datei auf, die einen JSON-String generiert und das Ergebnis als JSON-Wert anzeigt.

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
