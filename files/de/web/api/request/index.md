---
title: Request
slug: Web/API/Request
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Fetch API")}}

Das **`Request`**-Interface der [Fetch API](/de/docs/Web/API/Fetch_API) stellt eine Ressourcenanforderung dar.

Sie können ein neues `Request`-Objekt mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor erstellen. Wahrscheinlicher ist jedoch, dass ein `Request`-Objekt als Ergebnis einer anderen API-Operation zurückgegeben wird, wie beispielsweise eines Service Worker [`FetchEvent.request`](/de/docs/Web/API/FetchEvent/request).

## Konstruktor

- [`Request()`](/de/docs/Web/API/Request/Request)
  - : Erzeugt ein neues `Request`-Objekt.

## Instanz-Eigenschaften

- [`Request.body`](/de/docs/Web/API/Request/body) {{ReadOnlyInline}}
  - : Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) der Körperinhalte.
- [`Request.bodyUsed`](/de/docs/Web/API/Request/bodyUsed) {{ReadOnlyInline}}
  - : Speichert `true` oder `false`, um anzuzeigen, ob der Body bereits in einer Anforderung verwendet wurde oder nicht.
- [`Request.cache`](/de/docs/Web/API/Request/cache) {{ReadOnlyInline}}
  - : Enthält den Cache-Modus der Anforderung (z.B. `default`, `reload`, `no-cache`).
- [`Request.credentials`](/de/docs/Web/API/Request/credentials) {{ReadOnlyInline}}
  - : Enthält die Anmeldeinformationen der Anforderung (z.B. `omit`, `same-origin`, `include`). Der Standardwert ist `same-origin`.
- [`Request.destination`](/de/docs/Web/API/Request/destination) {{ReadOnlyInline}}
  - : Ein String, der den Typ des angeforderten Inhalts beschreibt.
- [`Request.headers`](/de/docs/Web/API/Request/headers) {{ReadOnlyInline}}
  - : Enthält das zugehörige [`Headers`](/de/docs/Web/API/Headers)-Objekt der Anforderung.
- [`Request.integrity`](/de/docs/Web/API/Request/integrity) {{ReadOnlyInline}}
  - : Enthält den [Subresource-Integrity](/de/docs/Web/Security/Subresource_Integrity)-Wert der Anforderung (z.B. `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
- [`Request.method`](/de/docs/Web/API/Request/method) {{ReadOnlyInline}}
  - : Enthält die Methode der Anforderung (`GET`, `POST`, etc.)
- [`Request.mode`](/de/docs/Web/API/Request/mode) {{ReadOnlyInline}}
  - : Enthält den Modus der Anforderung (z.B. `cors`, `no-cors`, `same-origin`, `navigate`).
- [`Request.redirect`](/de/docs/Web/API/Request/redirect) {{ReadOnlyInline}}
  - : Enthält den Modus, wie Umleitungen gehandhabt werden. Es kann einer von `follow`, `error`, oder `manual` sein.
- [`Request.referrer`](/de/docs/Web/API/Request/referrer) {{ReadOnlyInline}}
  - : Enthält den Referrer der Anforderung (z.B. `client`).
- [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy) {{ReadOnlyInline}}
  - : Enthält die Referrer-Richtlinie der Anforderung (z.B. `no-referrer`).
- [`Request.signal`](/de/docs/Web/API/Request/signal) {{ReadOnlyInline}}
  - : Gibt das [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das mit der Anforderung verbunden ist.
- [`Request.url`](/de/docs/Web/API/Request/url) {{ReadOnlyInline}}
  - : Enthält die URL der Anforderung.

## Instanz-Methoden

- [`Request.arrayBuffer()`](/de/docs/Web/API/Request/arrayBuffer)
  - : Gibt ein Promise zurück, das mit einer {{jsxref("ArrayBuffer")}}-Darstellung des Anforderungskörpers auflöst.
- [`Request.blob()`](/de/docs/Web/API/Request/blob)
  - : Gibt ein Promise zurück, das mit einer [`Blob`](/de/docs/Web/API/Blob)-Darstellung des Anforderungskörpers auflöst.
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes)
  - : Gibt ein Promise zurück, das mit einer {{jsxref("Uint8Array")}}-Darstellung des Anforderungskörpers auflöst.
- [`Request.clone()`](/de/docs/Web/API/Request/clone)
  - : Erstellt eine Kopie des aktuellen `Request`-Objekts.
- [`Request.formData()`](/de/docs/Web/API/Request/formData)
  - : Gibt ein Promise zurück, das mit einer [`FormData`](/de/docs/Web/API/FormData)-Darstellung des Anforderungskörpers auflöst.
- [`Request.json()`](/de/docs/Web/API/Request/json)
  - : Gibt ein Promise zurück, das mit dem Ergebnis des Parsens des Anforderungskörpers als {{JSxRef("JSON")}} auflöst.
- [`Request.text()`](/de/docs/Web/API/Request/text)
  - : Gibt ein Promise zurück, das mit einer Textdarstellung des Anforderungskörpers auflöst.

> [!NOTE]
> Die Funktionsaufrufe für Anforderungskörper können nur einmal ausgeführt werden; nachfolgende Aufrufe werden mit einem TypeError abgelehnt, der zeigt, dass der Body-Stream bereits verwendet wurde.

## Beispiele

Im folgenden Ausschnitt erstellen wir eine neue Anforderung mit dem `Request()`-Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript) und geben einige Eigenschaftswerte der Anforderung zurück:

```js
const request = new Request("https://www.mozilla.org/favicon.ico");

const url = request.url;
const method = request.method;
const credentials = request.credentials;
```

Sie könnten diese Anforderung dann abrufen, indem Sie das `Request`-Objekt als Parameter an einen [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben, beispielsweise:

```js
fetch(request)
  .then((response) => response.blob())
  .then((blob) => {
    image.src = URL.createObjectURL(blob);
  });
```

Im folgenden Ausschnitt erstellen wir eine neue Anforderung mit dem `Request()`-Konstruktor mit einigen Anfangsdaten und Körperinhalten für eine API-Anforderung, die eine Body-Nutzlast benötigt:

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
> Der Body kann nur ein [`Blob`](/de/docs/Web/API/Blob), ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}}, ein [`FormData`](/de/docs/Web/API/FormData), ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams), ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) oder ein {{jsxref("String")}}-Objekt sowie ein String-Literal sein. Um ein JSON-Objekt zur Nutzlast hinzuzufügen, müssen Sie dieses Objekt serialisieren.

Sie könnten diese API-Anforderung dann abrufen, indem Sie das `Request`-Objekt als Parameter an einen [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben, um zum Beispiel die Antwort zu erhalten:

```js
fetch(request)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Something went wrong on API server!");
    }
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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
