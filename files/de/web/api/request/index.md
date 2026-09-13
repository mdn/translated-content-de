---
title: Request
slug: Web/API/Request
l10n:
  sourceCommit: ad1fac9d8dd0c9ab8f560e98c5c923559617ba54
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`Request`**-Schnittstelle der [Fetch API](/de/docs/Web/API/Fetch_API) repräsentiert eine Ressourcenanfrage.

Sie können mit dem Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) ein neues `Request`-Objekt erstellen, werden aber eher einem `Request`-Objekt begegnen, das als Ergebnis einer anderen API-Operation zurückgegeben wird, etwa [`FetchEvent.request`](/de/docs/Web/API/FetchEvent/request) eines Service Workers.

## Konstruktor

- [`Request()`](/de/docs/Web/API/Request/Request)
  - : Erstellt ein neues `Request`-Objekt.

## Instanzeigenschaften

- [`Request.body`](/de/docs/Web/API/Request/body) {{ReadOnlyInline}}
  - : Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) mit dem Inhalt des Body.
- [`Request.bodyUsed`](/de/docs/Web/API/Request/bodyUsed) {{ReadOnlyInline}}
  - : Speichert `true` oder `false`, um anzugeben, ob der Body bereits in einer Anfrage verwendet wurde.
- [`Request.cache`](/de/docs/Web/API/Request/cache) {{ReadOnlyInline}}
  - : Enthält den Cache-Modus der Anfrage (z. B. `default`, `reload`, `no-cache`).
- [`Request.credentials`](/de/docs/Web/API/Request/credentials) {{ReadOnlyInline}}
  - : Enthält einen Wert, der steuert, ob Credentials in die Anfrage eingeschlossen werden sollen (z. B. `omit`, `same-origin`, `include`). Der Standardwert ist `same-origin`.
- [`Request.destination`](/de/docs/Web/API/Request/destination) {{ReadOnlyInline}}
  - : Ein String, der den Typ des angeforderten Inhalts beschreibt.
- [`Request.duplex`](/de/docs/Web/API/Request/duplex) {{ReadOnlyInline}} {{experimental_inline}}
  - : Der Duplex-Modus der Anfrage, der bestimmt, ob der Browser die gesamte Anfrage senden muss, bevor er die Antwort verarbeitet.
- [`Request.headers`](/de/docs/Web/API/Request/headers) {{ReadOnlyInline}}
  - : Enthält das zugehörige [`Headers`](/de/docs/Web/API/Headers)-Objekt der Anfrage.
- [`Request.integrity`](/de/docs/Web/API/Request/integrity) {{ReadOnlyInline}}
  - : Enthält den Wert für [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) der Anfrage (z. B. `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
- [`Request.isHistoryNavigation`](/de/docs/Web/API/Request/isHistoryNavigation) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Anfrage eine Verlauf-Navigation ist.
- [`Request.isReloadNavigation`](/de/docs/Web/API/Request/isReloadNavigation) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein boolescher Wert, der angibt, ob die Anfrage ein vom Benutzer ausgelöstes Neuladen ist.
- [`Request.keepalive`](/de/docs/Web/API/Request/keepalive) {{ReadOnlyInline}}
  - : Enthält die `keepalive`-Einstellung der Anfrage (`true` oder `false`), die angibt, ob der Browser die zugehörige Anfrage aktiv hält, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.
- [`Request.method`](/de/docs/Web/API/Request/method) {{ReadOnlyInline}}
  - : Enthält die Methode der Anfrage (`GET`, `POST` usw.).
- [`Request.mode`](/de/docs/Web/API/Request/mode) {{ReadOnlyInline}}
  - : Enthält den Modus der Anfrage (z. B. `cors`, `no-cors`, `same-origin`, `navigate`).
- [`Request.redirect`](/de/docs/Web/API/Request/redirect) {{ReadOnlyInline}}
  - : Enthält den Modus für die Behandlung von Weiterleitungen. Er kann `follow`, `error` oder `manual` sein.
- [`Request.referrer`](/de/docs/Web/API/Request/referrer) {{ReadOnlyInline}}
  - : Enthält den Referrer der Anfrage (z. B. `client`).
- [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy) {{ReadOnlyInline}}
  - : Enthält die Referrer-Policy der Anfrage (z. B. `no-referrer`).
- [`Request.signal`](/de/docs/Web/API/Request/signal) {{ReadOnlyInline}}
  - : Gibt das mit der Anfrage verknüpfte [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück.
- [`Request.targetAddressSpace`](/de/docs/Web/API/Request/targetAddressSpace) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt den Zieladressraum der Anfrage zurück, der angibt, ob es sich um eine Loopback-, lokale oder öffentliche Anfrage handelt.
- [`Request.url`](/de/docs/Web/API/Request/url) {{ReadOnlyInline}}
  - : Enthält die URL der Anfrage.

## Instanzmethoden

- [`Request.arrayBuffer()`](/de/docs/Web/API/Request/arrayBuffer)
  - : Gibt ein Promise zurück, das mit einer {{jsxref("ArrayBuffer")}}-Darstellung des Anfrage-Body erfüllt wird.
- [`Request.blob()`](/de/docs/Web/API/Request/blob)
  - : Gibt ein Promise zurück, das mit einer [`Blob`](/de/docs/Web/API/Blob)-Darstellung des Anfrage-Body erfüllt wird.
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes)
  - : Gibt ein Promise zurück, das mit einer {{jsxref("Uint8Array")}}-Darstellung des Anfrage-Body erfüllt wird.
- [`Request.clone()`](/de/docs/Web/API/Request/clone)
  - : Erstellt eine Kopie des aktuellen `Request`-Objekts.
- [`Request.formData()`](/de/docs/Web/API/Request/formData)
  - : Gibt ein Promise zurück, das mit einer [`FormData`](/de/docs/Web/API/FormData)-Darstellung des Anfrage-Body erfüllt wird.
- [`Request.json()`](/de/docs/Web/API/Request/json)
  - : Gibt ein Promise zurück, das mit dem Ergebnis des Parsens des Anfrage-Body als {{JSxRef("JSON")}} erfüllt wird.
- [`Request.text()`](/de/docs/Web/API/Request/text)
  - : Gibt ein Promise zurück, das mit einer Textdarstellung des Anfrage-Body erfüllt wird.
- [`Request.textStream()`](/de/docs/Web/API/Request/textStream) {{experimental_inline}}
  - : Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der verwendet werden kann, um den Inhalt des Anfrage-Body in UTF-8-Blöcken zu lesen.

> [!NOTE]
> Die Funktionen für den Anfrage-Body können nur einmal ausgeführt werden; nachfolgende Aufrufe werden mit einem TypeError abgelehnt, der anzeigt, dass der Body-Stream bereits verwendet wurde.

## Beispiele

Im folgenden Snippet erstellen wir mit dem Konstruktor `Request()` eine neue Anfrage (für eine Bilddatei im selben Verzeichnis wie das Skript) und geben dann einige Eigenschaftswerte der Anfrage zurück:

```js
const request = new Request("https://www.mozilla.org/favicon.ico");

const url = request.url;
const method = request.method;
const credentials = request.credentials;
```

Sie könnten diese Anfrage dann abrufen, indem Sie das `Request`-Objekt als Parameter an einen Aufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, zum Beispiel:

```js
fetch(request)
  .then((response) => response.blob())
  .then((blob) => {
    image.src = URL.createObjectURL(blob);
  });
```

Im folgenden Snippet erstellen wir mit dem Konstruktor `Request()` eine neue Anfrage mit einigen Anfangsdaten und Body-Inhalten für eine API-Anfrage, die eine Body-Payload benötigt:

```js
const request = new Request("https://example.com", {
  method: "POST",
  body: '{"foo": "bar"}',
});

const url = request.url;
const method = request.method;
const credentials = request.credentials;
const bodyUsed = request.bodyUsed;
```

> [!NOTE]
> Der Body kann nur ein [`Blob`](/de/docs/Web/API/Blob), ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}}, ein [`FormData`](/de/docs/Web/API/FormData), ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams), ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) oder ein {{jsxref("String")}}-Objekt sowie ein String-Literal sein. Um ein JSON-Objekt zur Payload hinzuzufügen, müssen Sie dieses Objekt daher in einen String umwandeln.

Sie könnten diese API-Anfrage dann abrufen, indem Sie das `Request`-Objekt als Parameter an einen Aufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, und beispielsweise die Antwort erhalten:

```js
fetch(request)
  .then((response) => {
    if (response.status !== 200) {
      throw new Error("Something went wrong on API server!");
    }
    return response.json();
  })
  .then((response) => {
    console.debug(response);
    // …
  })
  .catch((error) => {
    console.error(error);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffssteuerung (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
