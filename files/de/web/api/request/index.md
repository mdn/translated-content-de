---
title: Request
slug: Web/API/Request
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`Request`**-Schnittstelle der [Fetch API](/de/docs/Web/API/Fetch_API) stellt eine Ressourcenanfrage dar.

Sie können mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor ein neues `Request`-Objekt erstellen. Häufiger begegnet Ihnen jedoch ein `Request`-Objekt als Ergebnis eines anderen API-Vorgangs, beispielsweise über [`FetchEvent.request`](/de/docs/Web/API/FetchEvent/request) eines Service Workers.

## Konstruktor

- [`Request()`](/de/docs/Web/API/Request/Request)
  - : Erstellt ein neues `Request`-Objekt.

## Instanzeigenschaften

- [`Request.body`](/de/docs/Web/API/Request/body) {{ReadOnlyInline}}
  - : Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) mit dem Inhalt des Anfragebodys.
- [`Request.bodyUsed`](/de/docs/Web/API/Request/bodyUsed) {{ReadOnlyInline}}
  - : Speichert `true` oder `false`, um anzugeben, ob der Anfragebody bereits verwendet wurde.
- [`Request.cache`](/de/docs/Web/API/Request/cache) {{ReadOnlyInline}}
  - : Enthält den Cache-Modus der Anfrage (z. B. `default`, `reload`, `no-cache`).
- [`Request.credentials`](/de/docs/Web/API/Request/credentials) {{ReadOnlyInline}}
  - : Enthält einen Wert, der steuert, ob Anmeldedaten in die Anfrage aufgenommen werden (z. B. `omit`, `same-origin`, `include`). Der Standardwert ist `same-origin`.
- [`Request.destination`](/de/docs/Web/API/Request/destination) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die den Typ des angeforderten Inhalts beschreibt.
- [`Request.duplex`](/de/docs/Web/API/Request/duplex) {{ReadOnlyInline}}
  - : Der Duplexmodus der Anfrage. Er bestimmt, ob der Browser die gesamte Anfrage senden muss, bevor er die Antwort verarbeitet.
- [`Request.headers`](/de/docs/Web/API/Request/headers) {{ReadOnlyInline}}
  - : Enthält das zugehörige [`Headers`](/de/docs/Web/API/Headers)-Objekt der Anfrage.
- [`Request.integrity`](/de/docs/Web/API/Request/integrity) {{ReadOnlyInline}}
  - : Enthält den [Subresource-Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)-Wert der Anfrage (z. B. `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
- [`Request.isHistoryNavigation`](/de/docs/Web/API/Request/isHistoryNavigation) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Anfrage eine Navigation über den Browserverlauf ist.
- [`Request.isReloadNavigation`](/de/docs/Web/API/Request/isReloadNavigation) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein boolescher Wert, der angibt, ob die Anfrage ein durch einen Benutzer ausgelöstes Neuladen ist.
- [`Request.keepalive`](/de/docs/Web/API/Request/keepalive) {{ReadOnlyInline}}
  - : Enthält die `keepalive`-Einstellung der Anfrage (`true` oder `false`). Sie gibt an, ob der Browser die zugehörige Anfrage aufrechterhält, wenn die Seite, die sie ausgelöst hat, vor Abschluss der Anfrage entladen wird.
- [`Request.method`](/de/docs/Web/API/Request/method) {{ReadOnlyInline}}
  - : Enthält die Methode der Anfrage (`GET`, `POST` usw.).
- [`Request.mode`](/de/docs/Web/API/Request/mode) {{ReadOnlyInline}}
  - : Enthält den Modus der Anfrage (z. B. `cors`, `no-cors`, `same-origin`, `navigate`).
- [`Request.redirect`](/de/docs/Web/API/Request/redirect) {{ReadOnlyInline}}
  - : Enthält den Modus für die Behandlung von Weiterleitungen. Der Wert kann `follow`, `error` oder `manual` sein.
- [`Request.referrer`](/de/docs/Web/API/Request/referrer) {{ReadOnlyInline}}
  - : Enthält den Referrer der Anfrage (z. B. `client`).
- [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy) {{ReadOnlyInline}}
  - : Enthält die Referrer-Richtlinie der Anfrage (z. B. `no-referrer`).
- [`Request.signal`](/de/docs/Web/API/Request/signal) {{ReadOnlyInline}}
  - : Gibt das mit der Anfrage verknüpfte [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück.
- [`Request.targetAddressSpace`](/de/docs/Web/API/Request/targetAddressSpace) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt den Zieladressraum der Anfrage zurück. Dieser gibt an, ob die Anfrage an eine Loopback-, lokale oder öffentliche Adresse gerichtet ist.
- [`Request.url`](/de/docs/Web/API/Request/url) {{ReadOnlyInline}}
  - : Enthält die URL der Anfrage.

## Instanzmethoden

- [`Request.arrayBuffer()`](/de/docs/Web/API/Request/arrayBuffer)
  - : Gibt ein Promise zurück, das mit einer {{jsxref("ArrayBuffer")}}-Repräsentation des Anfragebodys erfüllt wird.
- [`Request.blob()`](/de/docs/Web/API/Request/blob)
  - : Gibt ein Promise zurück, das mit einer [`Blob`](/de/docs/Web/API/Blob)-Repräsentation des Anfragebodys erfüllt wird.
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes)
  - : Gibt ein Promise zurück, das mit einer {{jsxref("Uint8Array")}}-Repräsentation des Anfragebodys erfüllt wird.
- [`Request.clone()`](/de/docs/Web/API/Request/clone)
  - : Erstellt eine Kopie des aktuellen `Request`-Objekts.
- [`Request.formData()`](/de/docs/Web/API/Request/formData)
  - : Gibt ein Promise zurück, das mit einer [`FormData`](/de/docs/Web/API/FormData)-Repräsentation des Anfragebodys erfüllt wird.
- [`Request.json()`](/de/docs/Web/API/Request/json)
  - : Gibt ein Promise zurück, das mit dem Ergebnis der Verarbeitung des Anfragebodys als {{JSxRef("JSON")}} erfüllt wird.
- [`Request.text()`](/de/docs/Web/API/Request/text)
  - : Gibt ein Promise zurück, das mit einer Textrepräsentation des Anfragebodys erfüllt wird.
- [`Request.textStream()`](/de/docs/Web/API/Request/textStream) {{experimental_inline}}
  - : Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, mit dem der Inhalt des Anfragebodys in UTF-8-Blöcken gelesen werden kann.

> [!NOTE]
> Die Funktionen zum Lesen des Anfragebodys können nur einmal ausgeführt werden. Weitere Aufrufe werden mit einem TypeError zurückgewiesen, der angibt, dass der Body-Stream bereits verwendet wurde.

## Beispiele

Im folgenden Codeausschnitt erstellen wir mit dem `Request()`-Konstruktor eine neue Anfrage für eine Bilddatei im selben Verzeichnis wie das Skript und geben anschließend einige Eigenschaftswerte der Anfrage zurück:

```js
const request = new Request("https://www.mozilla.org/favicon.ico");

const url = request.url;
const method = request.method;
const credentials = request.credentials;
```

Sie können diese Anfrage dann beispielsweise abrufen, indem Sie das `Request`-Objekt als Parameter an einen [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben:

```js
fetch(request)
  .then((response) => response.blob())
  .then((blob) => {
    image.src = URL.createObjectURL(blob);
  });
```

Im folgenden Codeausschnitt erstellen wir mit dem `Request()`-Konstruktor eine neue API-Anfrage mit einigen Anfangsdaten und einem Anfragebody, da die Anfrage einen Body-Payload benötigt:

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
> Der Body kann nur ein [`Blob`](/de/docs/Web/API/Blob)-, {{jsxref("ArrayBuffer")}}-, {{jsxref("TypedArray")}}-, {{jsxref("DataView")}}-, [`FormData`](/de/docs/Web/API/FormData)-, [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)-, [`ReadableStream`](/de/docs/Web/API/ReadableStream)- oder {{jsxref("String")}}-Objekt oder ein Zeichenfolgenliteral sein. Um dem Payload ein JSON-Objekt hinzuzufügen, müssen Sie dieses Objekt daher in eine Zeichenfolge umwandeln.

Sie können diese API-Anfrage dann beispielsweise abrufen und die Antwort erhalten, indem Sie das `Request`-Objekt als Parameter an einen [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
