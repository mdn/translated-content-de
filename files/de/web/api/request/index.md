---
title: Anfrage
slug: Web/API/Request
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Das **`Request`** Interface der [Fetch API](/de/docs/Web/API/Fetch_API) repräsentiert eine Ressourcenanfrage.

Sie können ein neues `Request` Objekt mit dem [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor erstellen. Häufiger werden Sie jedoch ein `Request` Objekt als Ergebnis einer anderen API-Operation antreffen, zum Beispiel bei einem Service-Worker [`FetchEvent.request`](/de/docs/Web/API/FetchEvent/request).

## Konstruktor

- [`Request()`](/de/docs/Web/API/Request/Request)
  - : Erstellt ein neues `Request` Objekt.

## Instanz-Eigenschaften

- [`Request.body`](/de/docs/Web/API/Request/body) {{ReadOnlyInline}}
  - : Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) der Inhaltsdaten des Anfragetextes.
- [`Request.bodyUsed`](/de/docs/Web/API/Request/bodyUsed) {{ReadOnlyInline}}
  - : Speichert `true` oder `false`, um anzuzeigen, ob der Anfragetext bereits verwendet wurde.
- [`Request.cache`](/de/docs/Web/API/Request/cache) {{ReadOnlyInline}}
  - : Enthält den Cache-Modus der Anfrage (z.B. `default`, `reload`, `no-cache`).
- [`Request.credentials`](/de/docs/Web/API/Request/credentials) {{ReadOnlyInline}}
  - : Enthält einen Wert, der steuert, ob Anmeldeinformationen mit der Anfrage gesendet werden sollen (z.B. `omit`, `same-origin`, `include`). Der Standardwert ist `same-origin`.
- [`Request.destination`](/de/docs/Web/API/Request/destination) {{ReadOnlyInline}}
  - : Ein String, der den Typ der angeforderten Inhalte beschreibt.
- [`Request.duplex`](/de/docs/Web/API/Request/duplex) {{ReadOnlyInline}} {{experimental_inline}}
  - : Der Duplexmodus der Anfrage, der bestimmt, ob der Browser die gesamte Anfrage senden muss, bevor die Antwort verarbeitet wird.
- [`Request.headers`](/de/docs/Web/API/Request/headers) {{ReadOnlyInline}}
  - : Enthält das zugehörige [`Headers`](/de/docs/Web/API/Headers) Objekt der Anfrage.
- [`Request.integrity`](/de/docs/Web/API/Request/integrity) {{ReadOnlyInline}}
  - : Enthält den [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) Wert der Anfrage (z.B. `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
- [`Request.isHistoryNavigation`](/de/docs/Web/API/Request/isHistoryNavigation) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob die Anfrage eine Verlaufsnavigation ist.
- [`Request.keepalive`](/de/docs/Web/API/Request/keepalive) {{ReadOnlyInline}}
  - : Enthält die `keepalive` Einstellung der Anfrage (`true` oder `false`), die angibt, ob der Browser die zugehörige Anfrage am Leben hält, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.
- [`Request.method`](/de/docs/Web/API/Request/method) {{ReadOnlyInline}}
  - : Enthält die Methode der Anfrage (`GET`, `POST`, etc.)
- [`Request.mode`](/de/docs/Web/API/Request/mode) {{ReadOnlyInline}}
  - : Enthält den Modus der Anfrage (z.B. `cors`, `no-cors`, `same-origin`, `navigate`).
- [`Request.redirect`](/de/docs/Web/API/Request/redirect) {{ReadOnlyInline}}
  - : Enthält den Modus, wie Weiterleitungen behandelt werden sollen. Es kann `follow`, `error` oder `manual` sein.
- [`Request.referrer`](/de/docs/Web/API/Request/referrer) {{ReadOnlyInline}}
  - : Enthält den Referrer der Anfrage (z.B. `client`).
- [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy) {{ReadOnlyInline}}
  - : Enthält die Referrer-Richtlinie der Anfrage (z.B. `no-referrer`).
- [`Request.signal`](/de/docs/Web/API/Request/signal) {{ReadOnlyInline}}
  - : Gibt das [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das mit der Anfrage verbunden ist.
- [`Request.url`](/de/docs/Web/API/Request/url) {{ReadOnlyInline}}
  - : Enthält die URL der Anfrage.

## Instanz-Methoden

- [`Request.arrayBuffer()`](/de/docs/Web/API/Request/arrayBuffer)
  - : Gibt ein Promise zurück, das mit einer {{jsxref("ArrayBuffer")}} Repräsentation des Anfragetextes erfüllt wird.
- [`Request.blob()`](/de/docs/Web/API/Request/blob)
  - : Gibt ein Promise zurück, das mit einer [`Blob`](/de/docs/Web/API/Blob) Repräsentation des Anfragetextes erfüllt wird.
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes)
  - : Gibt ein Promise zurück, das mit einer {{jsxref("Uint8Array")}} Repräsentation des Anfragetextes erfüllt wird.
- [`Request.clone()`](/de/docs/Web/API/Request/clone)
  - : Erstellt eine Kopie des aktuellen `Request` Objekts.
- [`Request.formData()`](/de/docs/Web/API/Request/formData)
  - : Gibt ein Promise zurück, das mit einer [`FormData`](/de/docs/Web/API/FormData) Repräsentation des Anfragetextes erfüllt wird.
- [`Request.json()`](/de/docs/Web/API/Request/json)
  - : Gibt ein Promise zurück, das mit dem Ergebnis des Parsens des Anfragetextes als {{JSxRef("JSON")}} erfüllt wird.
- [`Request.text()`](/de/docs/Web/API/Request/text)
  - : Gibt ein Promise zurück, das mit einer Textdarstellung des Anfragetextes erfüllt wird.

> [!NOTE]
> Die Anfragetextfunktionen können nur einmal ausgeführt werden; nachfolgende Aufrufe werden mit TypeError abgelehnt, der zeigt, dass der Textstream bereits verwendet wurde.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem `Request()` Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie das Skript) und rufen dann einige Eigenschaftswerte der Anfrage ab:

```js
const request = new Request("https://www.mozilla.org/favicon.ico");

const url = request.url;
const method = request.method;
const credentials = request.credentials;
```

Sie könnten diese Anfrage dann ausführen, indem Sie das `Request` Objekt als Parameter an einen [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf übergeben, zum Beispiel:

```js
fetch(request)
  .then((response) => response.blob())
  .then((blob) => {
    image.src = URL.createObjectURL(blob);
  });
```

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem `Request()` Konstruktor mit einigen Anfangsdaten und Textinhalt für eine API-Anfrage, die eine Nutzlast benötigt:

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
> Der Text kann nur ein [`Blob`](/de/docs/Web/API/Blob), ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}}, ein [`FormData`](/de/docs/Web/API/FormData), ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams), ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), oder ein {{jsxref("String")}} Objekt sowie ein Stringliteral sein. Wenn Sie ein JSON-Objekt zur Nutzlast hinzufügen möchten, müssen Sie dieses Objekt in einen String umwandeln.

Sie könnten diese API-Anfrage dann ausführen, indem Sie das `Request` Objekt als Parameter an einen [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf übergeben, um so die Antwort zu erhalten:

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
