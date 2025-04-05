---
title: Anfrage
slug: Web/API/Request
l10n:
  sourceCommit: b4e2ff56635e5e3b1342ed13e00ee201ba4bf7c8
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`Request`**-Schnittstelle der [Fetch API](/de/docs/Web/API/Fetch_API) stellt eine Ressourcenanfrage dar.

Sie können ein neues `Request`-Objekt mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor erstellen, aber es ist wahrscheinlicher, dass Ihnen ein `Request`-Objekt als Ergebnis einer anderen API-Operation begegnet, wie beispielsweise einem Service-Worker [`FetchEvent.request`](/de/docs/Web/API/FetchEvent/request).

## Konstruktor

- [`Request()`](/de/docs/Web/API/Request/Request)
  - : Erstellt ein neues `Request`-Objekt.

## Instanzeigenschaften

- [`Request.body`](/de/docs/Web/API/Request/body) {{ReadOnlyInline}}
  - : Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) der Körperinhalte.
- [`Request.bodyUsed`](/de/docs/Web/API/Request/bodyUsed) {{ReadOnlyInline}}
  - : Speichert `true` oder `false`, um anzuzeigen, ob der Körper in einer Anfrage bereits verwendet wurde.
- [`Request.cache`](/de/docs/Web/API/Request/cache) {{ReadOnlyInline}}
  - : Enthält den Cache-Modus der Anfrage (z.B. `default`, `reload`, `no-cache`).
- [`Request.credentials`](/de/docs/Web/API/Request/credentials) {{ReadOnlyInline}}
  - : Enthält die Anmeldeinformationen der Anfrage (z.B. `omit`, `same-origin`, `include`). Der Standardwert ist `same-origin`.
- [`Request.destination`](/de/docs/Web/API/Request/destination) {{ReadOnlyInline}}
  - : Ein String, der den Typ des angeforderten Inhalts beschreibt.
- [`Request.headers`](/de/docs/Web/API/Request/headers) {{ReadOnlyInline}}
  - : Enthält das zugehörige [`Headers`](/de/docs/Web/API/Headers)-Objekt der Anfrage.
- [`Request.integrity`](/de/docs/Web/API/Request/integrity) {{ReadOnlyInline}}
  - : Enthält den [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Wert der Anfrage (z.B. `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
- [`Request.isHistoryNavigation`](/de/docs/Web/API/Request/isHistoryNavigation) {{ReadOnlyInline}}
  - : Ein Boolean, der angibt, ob die Anfrage eine Verlauf-Navigation ist.
- [`Request.keepalive`](/de/docs/Web/API/Request/keepalive) {{ReadOnlyInline}}
  - : Enthält die `keepalive`-Einstellung der Anfrage (`true` oder `false`), die angibt, ob der Browser die zugehörige Anfrage am Leben hält, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.
- [`Request.method`](/de/docs/Web/API/Request/method) {{ReadOnlyInline}}
  - : Enthält die Methode der Anfrage (`GET`, `POST`, etc.)
- [`Request.mode`](/de/docs/Web/API/Request/mode) {{ReadOnlyInline}}
  - : Enthält den Modus der Anfrage (z.B. `cors`, `no-cors`, `same-origin`, `navigate`).
- [`Request.redirect`](/de/docs/Web/API/Request/redirect) {{ReadOnlyInline}}
  - : Enthält den Modus, wie Weiterleitungen gehandhabt werden. Es kann `follow`, `error` oder `manual` sein.
- [`Request.referrer`](/de/docs/Web/API/Request/referrer) {{ReadOnlyInline}}
  - : Enthält den Referrer der Anfrage (z.B. `client`).
- [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy) {{ReadOnlyInline}}
  - : Enthält die Referrer-Richtlinie der Anfrage (z.B. `no-referrer`).
- [`Request.signal`](/de/docs/Web/API/Request/signal) {{ReadOnlyInline}}
  - : Gibt das [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das mit der Anfrage verknüpft ist.
- [`Request.url`](/de/docs/Web/API/Request/url) {{ReadOnlyInline}}
  - : Enthält die URL der Anfrage.

## Instanzmethoden

- [`Request.arrayBuffer()`](/de/docs/Web/API/Request/arrayBuffer)
  - : Gibt ein Versprechen zurück, das mit einer {{jsxref("ArrayBuffer")}}-Darstellung des Anfragekörpers aufgelöst wird.
- [`Request.blob()`](/de/docs/Web/API/Request/blob)
  - : Gibt ein Versprechen zurück, das mit einer [`Blob`](/de/docs/Web/API/Blob)-Darstellung des Anfragekörpers aufgelöst wird.
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes)
  - : Gibt ein Versprechen zurück, das mit einer {{jsxref("Uint8Array")}}-Darstellung des Anfragekörpers aufgelöst wird.
- [`Request.clone()`](/de/docs/Web/API/Request/clone)
  - : Erstellt eine Kopie des aktuellen `Request`-Objekts.
- [`Request.formData()`](/de/docs/Web/API/Request/formData)
  - : Gibt ein Versprechen zurück, das mit einer [`FormData`](/de/docs/Web/API/FormData)-Darstellung des Anfragekörpers aufgelöst wird.
- [`Request.json()`](/de/docs/Web/API/Request/json)
  - : Gibt ein Versprechen zurück, das mit dem Ergebnis der Analyse des Anfragekörpers als {{JSxRef("JSON")}} aufgelöst wird.
- [`Request.text()`](/de/docs/Web/API/Request/text)
  - : Gibt ein Versprechen zurück, das mit einer Textdarstellung des Anfragekörpers aufgelöst wird.

> [!NOTE]
> Die Funktionen für den Anfragkörper können nur einmal ausgeführt werden; nachfolgende Anrufe werden mit einem TypeError abgelehnt, der zeigt, dass der Körperstream bereits benutzt wurde.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem `Request()`-Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie das Skript) und geben dann einige Eigenschaftswerte der Anfrage zurück:

```js
const request = new Request("https://www.mozilla.org/favicon.ico");

const url = request.url;
const method = request.method;
const credentials = request.credentials;
```

Sie könnten diese Anfrage dann abrufen, indem Sie das `Request`-Objekt als Parameter in einen [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben, zum Beispiel:

```js
fetch(request)
  .then((response) => response.blob())
  .then((blob) => {
    image.src = URL.createObjectURL(blob);
  });
```

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem `Request()`-Konstruktor mit einigen Anfangsdaten und Körperinhalten für eine API-Anfrage, die eine Körpernutzlast benötigt:

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
> Der Körper kann nur ein [`Blob`](/de/docs/Web/API/Blob), ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}}, ein [`FormData`](/de/docs/Web/API/FormData), ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams), ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) oder ein {{jsxref("String")}}-Objekt sowie ein Zeichenfolgenliteral sein. Daher müssen Sie ein JSON-Objekt in der Nutzlast als Zeichenfolge serialisieren.

Sie könnten dann diese API-Anfrage abrufen, indem Sie das `Request`-Objekt als Parameter in einen [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben und die Antwort erhalten, beispielsweise:

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
- [HTTP-Zugriffssteuerung (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
