---
title: Request
slug: Web/API/Request
l10n:
  sourceCommit: 75016e5d37ecff3b11de4c2ef6665178f654797e
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`Request`**-Schnittstelle der [Fetch API](/de/docs/Web/API/Fetch_API) repräsentiert eine Ressourcenanfrage.

Sie können ein neues `Request`-Objekt mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor erstellen, aber es ist wahrscheinlicher, dass Sie ein `Request`-Objekt als Ergebnis eines anderen API-Vorgangs erhalten, wie zum Beispiel als `FetchEvent.request` eines Service Workers [(`FetchEvent.request`)](/de/docs/Web/API/FetchEvent/request).

## Konstruktor

- [`Request()`](/de/docs/Web/API/Request/Request)
  - : Erstellt ein neues `Request`-Objekt.

## Instanzeigenschaften

- [`Request.body`](/de/docs/Web/API/Request/body) {{ReadOnlyInline}}
  - : Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) des Inhalts des Körpers.
- [`Request.bodyUsed`](/de/docs/Web/API/Request/bodyUsed) {{ReadOnlyInline}}
  - : Speichert `true` oder `false`, um anzuzeigen, ob der Körper in einer Anfrage bereits verwendet wurde oder nicht.
- [`Request.cache`](/de/docs/Web/API/Request/cache) {{ReadOnlyInline}}
  - : Enthält den Cache-Modus der Anfrage (z.B., `default`, `reload`, `no-cache`).
- [`Request.credentials`](/de/docs/Web/API/Request/credentials) {{ReadOnlyInline}}
  - : Enthält einen Wert, der steuert, ob Anmeldedaten mit der Anfrage einbezogen werden sollen (z.B., `omit`, `same-origin`, `include`). Der Standardwert ist `same-origin`.
- [`Request.destination`](/de/docs/Web/API/Request/destination) {{ReadOnlyInline}}
  - : Ein Zeichenfolgewert, der die Art des angeforderten Inhalts beschreibt.
- [`Request.duplex`](/de/docs/Web/API/Request/duplex) {{ReadOnlyInline}} {{experimental_inline}}
  - : Der Duplex-Modus der Anfrage, der bestimmt, ob der Browser die gesamte Anfrage senden muss, bevor die Antwort verarbeitet wird.
- [`Request.headers`](/de/docs/Web/API/Request/headers) {{ReadOnlyInline}}
  - : Enthält das zugehörige [`Headers`](/de/docs/Web/API/Headers)-Objekt der Anfrage.
- [`Request.integrity`](/de/docs/Web/API/Request/integrity) {{ReadOnlyInline}}
  - : Enthält den [subresource integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)-Wert der Anfrage (z.B., `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
- [`Request.isHistoryNavigation`](/de/docs/Web/API/Request/isHistoryNavigation) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Anfrage eine Verlaufsnavigation ist.
- [`Request.keepalive`](/de/docs/Web/API/Request/keepalive) {{ReadOnlyInline}}
  - : Enthält die `keepalive`-Einstellung der Anfrage (`true` oder `false`), die angibt, ob der Browser die zugehörige Anfrage beibehalten wird, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.
- [`Request.method`](/de/docs/Web/API/Request/method) {{ReadOnlyInline}}
  - : Enthält die Methode der Anfrage (`GET`, `POST`, etc.)
- [`Request.mode`](/de/docs/Web/API/Request/mode) {{ReadOnlyInline}}
  - : Enthält den Modus der Anfrage (z.B., `cors`, `no-cors`, `same-origin`, `navigate`).
- [`Request.redirect`](/de/docs/Web/API/Request/redirect) {{ReadOnlyInline}}
  - : Enthält den Modus, wie Umleitungen behandelt werden. Es kann `follow`, `error`, oder `manual` sein.
- [`Request.referrer`](/de/docs/Web/API/Request/referrer) {{ReadOnlyInline}}
  - : Enthält den Referrer der Anfrage (z.B., `client`).
- [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy) {{ReadOnlyInline}}
  - : Enthält die Referrer-Richtlinie der Anfrage (z.B., `no-referrer`).
- [`Request.signal`](/de/docs/Web/API/Request/signal) {{ReadOnlyInline}}
  - : Gibt das mit der Anfrage verbundene [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück.
- [`Request.targetAddressSpace`](/de/docs/Web/API/Request/targetAddressSpace) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt den Ziel-Adressraum der Anfrage zurück, der angibt, ob es sich um eine Loopback-, lokale oder öffentliche Anfrage handelt.
- [`Request.url`](/de/docs/Web/API/Request/url) {{ReadOnlyInline}}
  - : Enthält die URL der Anfrage.

## Instanzmethoden

- [`Request.arrayBuffer()`](/de/docs/Web/API/Request/arrayBuffer)
  - : Gibt ein Promise zurück, das mit einer {{jsxref("ArrayBuffer")}}-Darstellung des Anfragkörpers aufgelöst wird.
- [`Request.blob()`](/de/docs/Web/API/Request/blob)
  - : Gibt ein Promise zurück, das mit einer [`Blob`](/de/docs/Web/API/Blob)-Darstellung des Anfragkörpers aufgelöst wird.
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes)
  - : Gibt ein Promise zurück, das mit einer {{jsxref("Uint8Array")}}-Darstellung des Anfragkörpers aufgelöst wird.
- [`Request.clone()`](/de/docs/Web/API/Request/clone)
  - : Erstellt eine Kopie des aktuellen `Request`-Objekts.
- [`Request.formData()`](/de/docs/Web/API/Request/formData)
  - : Gibt ein Promise zurück, das mit einer [`FormData`](/de/docs/Web/API/FormData)-Darstellung des Anfragkörpers aufgelöst wird.
- [`Request.json()`](/de/docs/Web/API/Request/json)
  - : Gibt ein Promise zurück, das mit dem Resultat des Parsens des Anfragkörpers als {{JSxRef("JSON")}} aufgelöst wird.
- [`Request.text()`](/de/docs/Web/API/Request/text)
  - : Gibt ein Promise zurück, das mit einer Textdarstellung des Anfragkörpers aufgelöst wird.

> [!NOTE]
> Die Funktionen des Anfragkörpers können nur einmal ausgeführt werden; nachfolgende Aufrufe werden mit einem TypeError abgelehnt, der zeigt, dass der Body-Stream bereits verwendet wurde.

## Beispiele

Im folgenden Ausschnitt erstellen wir eine neue Anfrage mit dem `Request()`-Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript) und geben dann einige Eigenschaftenwerte der Anfrage zurück:

```js
const request = new Request("https://www.mozilla.org/favicon.ico");

const url = request.url;
const method = request.method;
const credentials = request.credentials;
```

Sie könnten dann diese Anfrage abrufen, indem Sie das `Request`-Objekt als Parameter an einen [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben, zum Beispiel:

```js
fetch(request)
  .then((response) => response.blob())
  .then((blob) => {
    image.src = URL.createObjectURL(blob);
  });
```

Im folgenden Ausschnitt erstellen wir eine neue Anfrage mit dem `Request()`-Konstruktor mit einigen Anfangsdaten und Körperinhalt für eine API-Anfrage, die ein Body-Payload benötigt:

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
> Der Körper kann nur ein [`Blob`](/de/docs/Web/API/Blob), ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}}, ein [`FormData`](/de/docs/Web/API/FormData), ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams), ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) oder ein {{jsxref("String")}}-Objekt sein, sowie ein string-Literal. Daher müssen Sie das Objekt in eine Zeichenfolge umwandeln, um ein JSON-Objekt dem Payload hinzuzufügen.

Sie könnten dann diese API-Anfrage abrufen, indem Sie das `Request`-Objekt als Parameter an einen [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben und zum Beispiel die Antwort erhalten:

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

- [ServiceWorker-API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
