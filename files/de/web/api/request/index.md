---
title: Anforderung
slug: Web/API/Request
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Das **`Request`** Interface der [Fetch API](/de/docs/Web/API/Fetch_API) repräsentiert eine Ressourcenanfrage.

Sie können ein neues `Request` Objekt mit dem [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor erstellen, aber es ist wahrscheinlicher, dass Sie ein `Request` Objekt als Ergebnis einer anderen API-Operation erhalten, wie z. B. einem Service Worker [`FetchEvent.request`](/de/docs/Web/API/FetchEvent/request).

## Konstruktor

- [`Request()`](/de/docs/Web/API/Request/Request)
  - : Erstellt ein neues `Request` Objekt.

## Instanzeigenschaften

- [`Request.body`](/de/docs/Web/API/Request/body) {{ReadOnlyInline}}
  - : Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) des Inhalts des Körpers.
- [`Request.bodyUsed`](/de/docs/Web/API/Request/bodyUsed) {{ReadOnlyInline}}
  - : Speichert `true` oder `false`, um anzuzeigen, ob der Body in einer Anfrage bereits verwendet wurde oder nicht.
- [`Request.cache`](/de/docs/Web/API/Request/cache) {{ReadOnlyInline}}
  - : Beinhaltet den Cache-Modus der Anfrage (z. B. `default`, `reload`, `no-cache`).
- [`Request.credentials`](/de/docs/Web/API/Request/credentials) {{ReadOnlyInline}}
  - : Beinhaltet einen Wert, der steuert, ob Anmeldeinformationen mit der Anfrage gesendet werden sollen (z. B. `omit`, `same-origin`, `include`). Der Standardwert ist `same-origin`.
- [`Request.destination`](/de/docs/Web/API/Request/destination) {{ReadOnlyInline}}
  - : Ein String, der den Typ des angeforderten Inhalts beschreibt.
- [`Request.duplex`](/de/docs/Web/API/Request/duplex) {{ReadOnlyInline}} {{experimental_inline}}
  - : Der Duplex-Modus der Anfrage, der bestimmt, ob der Browser die gesamte Anfrage senden muss, bevor die Antwort verarbeitet wird.
- [`Request.headers`](/de/docs/Web/API/Request/headers) {{ReadOnlyInline}}
  - : Beinhaltet das zugehörige [`Headers`](/de/docs/Web/API/Headers) Objekt der Anfrage.
- [`Request.integrity`](/de/docs/Web/API/Request/integrity) {{ReadOnlyInline}}
  - : Beinhaltet den [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) Wert der Anfrage (z. B. `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
- [`Request.isHistoryNavigation`](/de/docs/Web/API/Request/isHistoryNavigation) {{ReadOnlyInline}}
  - : Ein Boolean, der anzeigt, ob die Anfrage eine Verlaufsnavigation ist.
- [`Request.keepalive`](/de/docs/Web/API/Request/keepalive) {{ReadOnlyInline}}
  - : Beinhaltet die `keepalive` Einstellung der Anfrage (`true` oder `false`), die angibt, ob der Browser die zugehörige Anfrage weiter ausführen soll, wenn die Seite, die sie initiiert hat, vor Abschluss der Anfrage geschlossen wird.
- [`Request.method`](/de/docs/Web/API/Request/method) {{ReadOnlyInline}}
  - : Beinhaltet die Methode der Anfrage (`GET`, `POST`, etc.)
- [`Request.mode`](/de/docs/Web/API/Request/mode) {{ReadOnlyInline}}
  - : Beinhaltet den Modus der Anfrage (z. B. `cors`, `no-cors`, `same-origin`, `navigate`).
- [`Request.redirect`](/de/docs/Web/API/Request/redirect) {{ReadOnlyInline}}
  - : Beinhaltet den Modus, wie Umleitungen behandelt werden. Es kann `follow`, `error` oder `manual` sein.
- [`Request.referrer`](/de/docs/Web/API/Request/referrer) {{ReadOnlyInline}}
  - : Beinhaltet den Referrer der Anfrage (z. B. `client`).
- [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy) {{ReadOnlyInline}}
  - : Beinhaltet die Referrer-Richtlinie der Anfrage (z. B. `no-referrer`).
- [`Request.signal`](/de/docs/Web/API/Request/signal) {{ReadOnlyInline}}
  - : Gibt das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal) der Anfrage zurück.
- [`Request.url`](/de/docs/Web/API/Request/url) {{ReadOnlyInline}}
  - : Beinhaltet die URL der Anfrage.

## Instanzmethoden

- [`Request.arrayBuffer()`](/de/docs/Web/API/Request/arrayBuffer)
  - : Gibt ein Versprechen zurück, welches sich zu einer {{jsxref("ArrayBuffer")}} Repräsentation des Anfragekörpers auflöst.
- [`Request.blob()`](/de/docs/Web/API/Request/blob)
  - : Gibt ein Versprechen zurück, welches sich zu einer [`Blob`](/de/docs/Web/API/Blob) Repräsentation des Anfragekörpers auflöst.
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes)
  - : Gibt ein Versprechen zurück, welches sich zu einer {{jsxref("Uint8Array")}} Repräsentation des Anfragekörpers auflöst.
- [`Request.clone()`](/de/docs/Web/API/Request/clone)
  - : Erstellt eine Kopie des aktuellen `Request` Objekts.
- [`Request.formData()`](/de/docs/Web/API/Request/formData)
  - : Gibt ein Versprechen zurück, welches sich zu einer [`FormData`](/de/docs/Web/API/FormData) Repräsentation des Anfragekörpers auflöst.
- [`Request.json()`](/de/docs/Web/API/Request/json)
  - : Gibt ein Versprechen zurück, welches sich mit dem Ergebnis des Parsens des Anfragekörpers als {{JSxRef("JSON")}} auflöst.
- [`Request.text()`](/de/docs/Web/API/Request/text)
  - : Gibt ein Versprechen zurück, welches sich zu einer Textdarstellung des Anfragekörpers auflöst.

> [!NOTE]
> Die Funktionen für den Anfragekörper können nur einmal ausgeführt werden; nachfolgende Aufrufe werden mit einem TypeError abgelehnt, der anzeigt, dass der Body-Stream bereits verwendet wurde.

## Beispiele

Im folgenden Code-Schnipsel erstellen wir eine neue Anfrage mit dem `Request()` Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript) und geben einige Eigenschaftswerte der Anfrage zurück:

```js
const request = new Request("https://www.mozilla.org/favicon.ico");

const url = request.url;
const method = request.method;
const credentials = request.credentials;
```

Sie könnten diese Anfrage dann abrufen, indem Sie das `Request` Objekt als Parameter für einen [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf übergeben, zum Beispiel:

```js
fetch(request)
  .then((response) => response.blob())
  .then((blob) => {
    image.src = URL.createObjectURL(blob);
  });
```

Im folgenden Code-Schnipsel erstellen wir eine neue Anfrage mit dem `Request()` Konstruktor mit einigen Anfangsdaten und einem Body-Inhalt für eine API-Anfrage, die einen Payload benötigt:

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
> Der Body kann nur ein [`Blob`](/de/docs/Web/API/Blob), ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}}, ein [`FormData`](/de/docs/Web/API/FormData), ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams), ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) oder ein {{jsxref("String")}} Objekt sein, sowie ein Stringliteral, so dass für das Hinzufügen eines JSON-Objekts zum Payload dieses Objekt serialisiert werden muss.

Sie könnten diese API-Anfrage dann abrufen, indem Sie das `Request` Objekt als Parameter für einen [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf übergeben und die Antwort erhalten:

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
- [HTTP access control (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
