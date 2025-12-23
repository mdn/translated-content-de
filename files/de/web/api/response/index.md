---
title: Response
slug: Web/API/Response
l10n:
  sourceCommit: 252040efa8f6ca0f737fd7ec04e610354e58b98c
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Das **`Response`**-Interface der [Fetch API](/de/docs/Web/API/Fetch_API) stellt die Antwort auf eine Anfrage dar.

Sie können ein neues `Response`-Objekt mit dem [`Response()`](/de/docs/Web/API/Response/Response)-Konstruktor erstellen. Wahrscheinlicher ist jedoch, dass Sie ein `Response`-Objekt als Ergebnis einer anderen API-Operation erhalten – zum Beispiel in einem Serviceworker über [`FetchEvent.respondWith`](/de/docs/Web/API/FetchEvent/respondWith) oder durch einen einfachen [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf.

## Konstruktor

- [`Response()`](/de/docs/Web/API/Response/Response)
  - : Erstellt ein neues `Response`-Objekt.

## Instanz-Eigenschaften

- [`Response.body`](/de/docs/Web/API/Response/body) {{ReadOnlyInline}}
  - : Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) der Inhaltsdaten.
- [`Response.bodyUsed`](/de/docs/Web/API/Response/bodyUsed) {{ReadOnlyInline}}
  - : Speichert einen booleschen Wert, der angibt, ob der Inhalt in einer Antwort bereits verwendet wurde.
- [`Response.headers`](/de/docs/Web/API/Response/headers) {{ReadOnlyInline}}
  - : Das mit der Antwort verbundene [`Headers`](/de/docs/Web/API/Headers)-Objekt.
- [`Response.ok`](/de/docs/Web/API/Response/ok) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Antwort erfolgreich war (Status im Bereich von `200` – `299`).
- [`Response.redirected`](/de/docs/Web/API/Response/redirected) {{ReadOnlyInline}}
  - : Gibt an, ob die Antwort das Ergebnis einer Umleitung ist (d.h. ob die URL-Liste mehr als einen Eintrag hat).
- [`Response.status`](/de/docs/Web/API/Response/status) {{ReadOnlyInline}}
  - : Der Statuscode der Antwort. (Dieser ist `200` für einen Erfolg).
- [`Response.statusText`](/de/docs/Web/API/Response/statusText) {{ReadOnlyInline}}
  - : Die Statusmeldung, die dem Statuscode entspricht. (z.B. `OK` für `200`).
- [`Response.type`](/de/docs/Web/API/Response/type) {{ReadOnlyInline}}
  - : Der Typ der Antwort (z.B. `basic`, `cors`).
- [`Response.url`](/de/docs/Web/API/Response/url) {{ReadOnlyInline}}
  - : Die URL der Antwort.

## Statische Methoden

- [`Response.error()`](/de/docs/Web/API/Response/error_static)
  - : Gibt ein neues `Response`-Objekt zurück, das einem Netzwerkfehler zugeordnet ist.
- [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static)
  - : Gibt eine neue Antwort mit einer anderen URL zurück.
- [`Response.json()`](/de/docs/Web/API/Response/json_static)
  - : Gibt ein neues `Response`-Objekt für die Rückgabe der bereitgestellten JSON-kodierten Daten zurück.

## Instanz-Methoden

- [`Response.arrayBuffer()`](/de/docs/Web/API/Response/arrayBuffer)
  - : Gibt ein Promise zurück, das mit einer {{jsxref("ArrayBuffer")}}-Darstellung des Antwortinhalts aufgelöst wird.
- [`Response.blob()`](/de/docs/Web/API/Response/blob)
  - : Gibt ein Promise zurück, das mit einer [`Blob`](/de/docs/Web/API/Blob)-Darstellung des Antwortinhalts aufgelöst wird.
- [`Response.bytes()`](/de/docs/Web/API/Response/bytes)
  - : Gibt ein Promise zurück, das mit einer {{jsxref("Uint8Array")}}-Darstellung des Antwortinhalts aufgelöst wird.
- [`Response.clone()`](/de/docs/Web/API/Response/clone)
  - : Erzeugt eine Kopie eines `Response`-Objekts.
- [`Response.formData()`](/de/docs/Web/API/Response/formData)
  - : Gibt ein Promise zurück, das mit einer [`FormData`](/de/docs/Web/API/FormData)-Darstellung des Antwortinhalts aufgelöst wird.
- [`Response.json()`](/de/docs/Web/API/Response/json)
  - : Gibt ein Promise zurück, das mit dem Ergebnis des Parsens des Antworttextes als {{jsxref("JSON")}} aufgelöst wird.
- [`Response.text()`](/de/docs/Web/API/Response/text)
  - : Gibt ein Promise zurück, das mit einer Textdarstellung des Antwortinhalts aufgelöst wird.

## Beispiele

### Abrufen eines Bildes

In unserem [einfachen Fetch-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/basic-fetch) ([Beispiel live ausführen](https://mdn.github.io/dom-examples/fetch/basic-fetch/)) verwenden wir einen einfachen `fetch()`-Aufruf, um ein Bild abzurufen und es in einem {{htmlelement("img")}}-Element anzuzeigen.
Der `fetch()`-Aufruf gibt ein Promise zurück, das auf das mit der Ressourcenabfrage verbundene `Response`-Objekt aufgelöst wird.

Da wir ein Bild anfordern, müssen wir [`Response.blob`](/de/docs/Web/API/Response/blob) ausführen, um dem Antwortobjekt seinen korrekten MIME-Typ zuzuweisen.

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

Sie können auch den [`Response()`](/de/docs/Web/API/Response/Response)-Konstruktor verwenden, um Ihr eigenes benutzerdefiniertes `Response`-Objekt zu erstellen:

```js
const response = new Response();
```

### Ein PHP-Aufruf

Hier rufen wir eine PHP-Programmdatei auf, die eine JSON-Zeichenfolge generiert und das Ergebnis als JSON-Wert anzeigt.

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
