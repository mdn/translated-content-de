---
title: Response
slug: Web/API/Response
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Fetch API")}}

Die **`Response`**-Schnittstelle der [Fetch API](/de/docs/Web/API/Fetch_API) repräsentiert die Antwort auf eine Anfrage.

Sie können ein neues `Response`-Objekt mithilfe des [`Response()`](/de/docs/Web/API/Response/Response)-Konstruktors erstellen, aber es ist wahrscheinlicher, dass Ihnen ein `Response`-Objekt als Ergebnis einer anderen API-Operation begegnet – zum Beispiel ein Service Worker [`FetchEvent.respondWith`](/de/docs/Web/API/FetchEvent/respondWith) oder ein einfaches [`fetch()`](/de/docs/Web/API/Window/fetch).

## Konstruktor

- [`Response()`](/de/docs/Web/API/Response/Response)
  - : Erstellt ein neues `Response`-Objekt.

## Instanz-Eigenschaften

- [`Response.body`](/de/docs/Web/API/Response/body) {{ReadOnlyInline}}
  - : Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) mit den Inhalten des Bodys.
- [`Response.bodyUsed`](/de/docs/Web/API/Response/bodyUsed) {{ReadOnlyInline}}
  - : Speichert einen booleschen Wert, der angibt, ob der Body in einer Antwort bereits verwendet wurde.
- [`Response.headers`](/de/docs/Web/API/Response/headers) {{ReadOnlyInline}}
  - : Das [`Headers`](/de/docs/Web/API/Headers)-Objekt, das mit der Antwort verknüpft ist.
- [`Response.ok`](/de/docs/Web/API/Response/ok) {{ReadOnlyInline}}
  - : Ein Boolescher Wert, der anzeigt, ob die Antwort erfolgreich war (Status im Bereich `200` – `299`) oder nicht.
- [`Response.redirected`](/de/docs/Web/API/Response/redirected) {{ReadOnlyInline}}
  - : Gibt an, ob die Antwort das Ergebnis einer Weiterleitung ist (d.h. ihre URL-Liste mehr als einen Eintrag enthält).
- [`Response.status`](/de/docs/Web/API/Response/status) {{ReadOnlyInline}}
  - : Der Statuscode der Antwort. (Dies wird `200` für einen Erfolg sein).
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
  - : Gibt ein neues `Response`-Objekt zurück, das die bereitgestellten JSON-kodierten Daten zurückgibt.

## Instanz-Methoden

- [`Response.arrayBuffer()`](/de/docs/Web/API/Response/arrayBuffer)
  - : Gibt ein Promise zurück, das mit einer {{jsxref("ArrayBuffer")}}-Darstellung des Antwortbodys aufgelöst wird.
- [`Response.blob()`](/de/docs/Web/API/Response/blob)
  - : Gibt ein Promise zurück, das mit einer [`Blob`](/de/docs/Web/API/Blob)-Darstellung des Antwortbodys aufgelöst wird.
- [`Response.bytes()`](/de/docs/Web/API/Response/bytes)
  - : Gibt ein Promise zurück, das mit einer {{jsxref("Uint8Array")}}-Darstellung des Antwortbodys aufgelöst wird.
- [`Response.clone()`](/de/docs/Web/API/Response/clone)
  - : Erstellt eine Kopie eines `Response`-Objekts.
- [`Response.formData()`](/de/docs/Web/API/Response/formData)
  - : Gibt ein Promise zurück, das mit einer [`FormData`](/de/docs/Web/API/FormData)-Darstellung des Antwortbodys aufgelöst wird.
- [`Response.json()`](/de/docs/Web/API/Response/json)
  - : Gibt ein Promise zurück, das mit dem Ergebnis des Parsens des Antwortbodytextes als {{jsxref("JSON")}} aufgelöst wird.
- [`Response.text()`](/de/docs/Web/API/Response/text)
  - : Gibt ein Promise zurück, das mit einer Textdarstellung des Antwortbodys aufgelöst wird.

## Beispiele

### Ein Bild abrufen

In unserem [einfachen Fetch-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/basic-fetch) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/fetch/basic-fetch/)) verwenden wir einen einfachen `fetch()`-Aufruf, um ein Bild abzurufen und in einem {{htmlelement("img")}}-Element anzuzeigen. Der `fetch()`-Aufruf gibt ein Promise zurück, das zum `Response`-Objekt aufgelöst wird, das mit der Ressourcenabrufoperation verknüpft ist.

Sie werden bemerken, dass wir, da wir ein Bild anfordern, [`Response.blob`](/de/docs/Web/API/Response/blob) ausführen müssen, um der Antwort ihren korrekten MIME-Typ zu geben.

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

Hier rufen wir eine PHP-Programmdaten ab, das einen JSON-String generiert und das Ergebnis als JSON-Wert anzeigt.

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
