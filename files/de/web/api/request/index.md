---
title: Request
slug: Web/API/Request
l10n:
  sourceCommit: 513146a616213fee548fdcf72dc1359030eb3395
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`Request`**-Schnittstelle der [Fetch-API](/de/docs/Web/API/Fetch_API) repräsentiert eine Ressourcenanforderung.

Sie können ein neues `Request`-Objekt mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor erstellen, jedoch ist es wahrscheinlicher, dass Sie ein `Request`-Objekt als Ergebnis einer anderen API-Operation erhalten, wie etwa einer Service-Worker-[`FetchEvent.request`](/de/docs/Web/API/FetchEvent/request).

## Konstruktor

- [`Request()`](/de/docs/Web/API/Request/Request)
  - : Erstellt ein neues `Request`-Objekt.

## Instanz-Eigenschaften

- [`Request.body`](/de/docs/Web/API/Request/body) {{ReadOnlyInline}}
  - : Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) der Körperinhalte.
- [`Request.bodyUsed`](/de/docs/Web/API/Request/bodyUsed) {{ReadOnlyInline}}
  - : Speichert `true` oder `false`, um anzuzeigen, ob der Körper in einer Anforderung bereits verwendet wurde oder nicht.
- [`Request.cache`](/de/docs/Web/API/Request/cache) {{ReadOnlyInline}}
  - : Enthält den Cache-Modus der Anforderung (z.B. `default`, `reload`, `no-cache`).
- [`Request.credentials`](/de/docs/Web/API/Request/credentials) {{ReadOnlyInline}}
  - : Enthält einen Wert, der steuert, ob Anmeldeinformationen in die Anforderung aufgenommen werden sollen (z.B. `omit`, `same-origin`, `include`). Der Standardwert ist `same-origin`.
- [`Request.destination`](/de/docs/Web/API/Request/destination) {{ReadOnlyInline}}
  - : Ein String, der die Art des angeforderten Inhalts beschreibt.
- [`Request.duplex`](/de/docs/Web/API/Request/duplex) {{ReadOnlyInline}} {{experimental_inline}}
  - : Der Duplex-Modus der Anforderung, der bestimmt, ob der Browser die gesamte Anfrage senden muss, bevor die Antwort verarbeitet wird.
- [`Request.headers`](/de/docs/Web/API/Request/headers) {{ReadOnlyInline}}
  - : Enthält das zugehörige [`Headers`](/de/docs/Web/API/Headers)-Objekt der Anforderung.
- [`Request.integrity`](/de/docs/Web/API/Request/integrity) {{ReadOnlyInline}}
  - : Enthält den [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)-Wert der Anforderung (z.B. `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
- [`Request.isHistoryNavigation`](/de/docs/Web/API/Request/isHistoryNavigation) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob die Anforderung eine Verlauf-Navigation ist.
- [`Request.isReloadNavigation`](/de/docs/Web/API/Request/isReloadNavigation) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein boolescher Wert, der anzeigt, ob die Anforderung ein benutzerinitiiertes Neuladen ist.
- [`Request.keepalive`](/de/docs/Web/API/Request/keepalive) {{ReadOnlyInline}}
  - : Enthält die `keepalive`-Einstellung der Anforderung (`true` oder `false`), was angibt, ob der Browser die zugehörige Anfrage am Leben hält, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.
- [`Request.method`](/de/docs/Web/API/Request/method) {{ReadOnlyInline}}
  - : Enthält die Methode der Anforderung (`GET`, `POST`, etc.)
- [`Request.mode`](/de/docs/Web/API/Request/mode) {{ReadOnlyInline}}
  - : Enthält den Modus der Anforderung (z.B. `cors`, `no-cors`, `same-origin`, `navigate`.)
- [`Request.redirect`](/de/docs/Web/API/Request/redirect) {{ReadOnlyInline}}
  - : Enthält den Modus, wie Weiterleitungen behandelt werden. Es kann `follow`, `error`, oder `manual` sein.
- [`Request.referrer`](/de/docs/Web/API/Request/referrer) {{ReadOnlyInline}}
  - : Enthält den Referrer der Anforderung (z.B. `client`).
- [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy) {{ReadOnlyInline}}
  - : Enthält die Referrer-Richtlinie der Anforderung (z.B. `no-referrer`).
- [`Request.signal`](/de/docs/Web/API/Request/signal) {{ReadOnlyInline}}
  - : Gibt das mit der Anforderung verbundene [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück.
- [`Request.targetAddressSpace`](/de/docs/Web/API/Request/targetAddressSpace) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt den Zieladressraum der Anforderung zurück, der angibt, ob es sich um eine Loopback-, lokale oder öffentliche Anfrage handelt.
- [`Request.url`](/de/docs/Web/API/Request/url) {{ReadOnlyInline}}
  - : Enthält die URL der Anforderung.

## Instanz-Methoden

- [`Request.arrayBuffer()`](/de/docs/Web/API/Request/arrayBuffer)
  - : Gibt ein Versprechen zurück, das mit einer {{jsxref("ArrayBuffer")}}-Darstellung des Anforderungskörpers aufgelöst wird.
- [`Request.blob()`](/de/docs/Web/API/Request/blob)
  - : Gibt ein Versprechen zurück, das mit einer [`Blob`](/de/docs/Web/API/Blob)-Darstellung des Anforderungskörpers aufgelöst wird.
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes)
  - : Gibt ein Versprechen zurück, das mit einer {{jsxref("Uint8Array")}}-Darstellung des Anforderungskörpers aufgelöst wird.
- [`Request.clone()`](/de/docs/Web/API/Request/clone)
  - : Erstellt eine Kopie des aktuellen `Request`-Objekts.
- [`Request.formData()`](/de/docs/Web/API/Request/formData)
  - : Gibt ein Versprechen zurück, das mit einer [`FormData`](/de/docs/Web/API/FormData)-Darstellung des Anforderungskörpers aufgelöst wird.
- [`Request.json()`](/de/docs/Web/API/Request/json)
  - : Gibt ein Versprechen zurück, das mit dem Ergebnis des Parsens des Anforderungskörpers als {{JSxRef("JSON")}} aufgelöst wird.
- [`Request.text()`](/de/docs/Web/API/Request/text)
  - : Gibt ein Versprechen zurück, das mit einer Textdarstellung des Anforderungskörpers aufgelöst wird.

> [!NOTE]
> Die Funktionen für den Anforderungskörper können nur einmal ausgeführt werden; nachfolgende Aufrufe werden mit TypeError abgelehnt, der zeigt, dass der Körperstream bereits verwendet wurde.

## Beispiele

Im folgenden Ausschnitt erstellen wir eine neue Anfrage mit dem `Request()`-Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie das Skript) und geben dann einige Eigenschaftswerte der Anfrage zurück:

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

Im folgenden Ausschnitt erstellen wir eine neue Anfrage mit dem `Request()`-Konstruktor mit einigen Anfangsdaten und Körperinhalt für eine API-Anfrage, die eine Nutzlast im Körper benötigt:

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
> Der Körper kann nur ein [`Blob`](/de/docs/Web/API/Blob), ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}}, ein [`FormData`](/de/docs/Web/API/FormData), ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams), ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) oder ein {{jsxref("String")}}-Objekt sowie ein einfacher String-Literal sein, sodass Sie zum Hinzufügen eines JSON-Objekts zur Nutzlast dieses Objekt als String darstellen müssen.

Sie könnten diese API-Anfrage dann abrufen, indem Sie das `Request`-Objekt als Parameter in einen [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf übergeben und die Antwort erhalten:

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
