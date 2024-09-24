---
title: Anfrage
slug: Web/API/Request
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Fetch API")}}

Die **`Request`**-Schnittstelle der [Fetch API](/de/docs/Web/API/Fetch_API) repräsentiert eine Ressourcenanfrage.

Sie können ein neues `Request`-Objekt mit dem {{domxref("Request.Request","Request()")}}-Konstruktor erstellen. Es ist jedoch wahrscheinlicher, dass Sie ein `Request`-Objekt als Ergebnis einer anderen API-Operation antreffen, wie zum Beispiel eines Service-Workers {{domxref("FetchEvent.request")}}.

## Konstruktor

- {{domxref("Request.Request","Request()")}}
  - : Erstellt ein neues `Request`-Objekt.

## Instanz-Eigenschaften

- {{domxref("Request.body")}} {{ReadOnlyInline}}
  - : Ein {{domxref("ReadableStream")}} des Körperinhalts.
- {{domxref("Request.bodyUsed")}} {{ReadOnlyInline}}
  - : Speichert `true` oder `false`, um anzuzeigen, ob der Body bereits in einer Anfrage verwendet wurde.
- {{domxref("Request.cache")}} {{ReadOnlyInline}}
  - : Enthält den Cache-Modus der Anfrage (z. B. `default`, `reload`, `no-cache`).
- {{domxref("Request.credentials")}} {{ReadOnlyInline}}
  - : Enthält die Anmeldeinformationen der Anfrage (z. B. `omit`, `same-origin`, `include`). Der Standardwert ist `same-origin`.
- {{domxref("Request.destination")}} {{ReadOnlyInline}}
  - : Ein String, der den Typ des angeforderten Inhalts beschreibt.
- {{domxref("Request.headers")}} {{ReadOnlyInline}}
  - : Enthält das zugehörige {{domxref("Headers")}}-Objekt der Anfrage.
- {{domxref("Request.integrity")}} {{ReadOnlyInline}}
  - : Enthält den [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Wert der Anfrage (z. B. `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).
- {{domxref("Request.method")}} {{ReadOnlyInline}}
  - : Enthält die Methode der Anfrage (`GET`, `POST`, etc.).
- {{domxref("Request.mode")}} {{ReadOnlyInline}}
  - : Enthält den Modus der Anfrage (z. B. `cors`, `no-cors`, `same-origin`, `navigate`).
- {{domxref("Request.redirect")}} {{ReadOnlyInline}}
  - : Enthält den Modus, wie Weiterleitungen behandelt werden. Es kann `follow`, `error` oder `manual` sein.
- {{domxref("Request.referrer")}} {{ReadOnlyInline}}
  - : Enthält den Referrer der Anfrage (z. B. `client`).
- {{domxref("Request.referrerPolicy")}} {{ReadOnlyInline}}
  - : Enthält die Referrer-Richtlinie der Anfrage (z. B. `no-referrer`).
- {{domxref("Request.signal")}} {{ReadOnlyInline}}
  - : Gibt das mit der Anfrage verbundene {{domxref("AbortSignal")}} zurück.
- {{domxref("Request.url")}} {{ReadOnlyInline}}
  - : Enthält die URL der Anfrage.

## Instanz-Methoden

- {{domxref("Request.arrayBuffer()")}}
  - : Gibt ein Promise zurück, das mit einer {{jsxref("ArrayBuffer")}}-Darstellung des Anfragetextes erfüllt wird.
- {{domxref("Request.blob()")}}
  - : Gibt ein Promise zurück, das mit einer {{domxref("Blob")}}-Darstellung des Anfragetextes erfüllt wird.
- {{domxref("Request.bytes()")}}
  - : Gibt ein Promise zurück, das mit einer {{jsxref("Uint8Array")}}-Darstellung des Anfragetextes erfüllt wird.
- {{domxref("Request.clone()")}}
  - : Erstellt eine Kopie des aktuellen `Request`-Objekts.
- {{domxref("Request.formData()")}}
  - : Gibt ein Promise zurück, das mit einer {{domxref("FormData")}}-Darstellung des Anfragetextes erfüllt wird.
- {{domxref("Request.json()")}}
  - : Gibt ein Promise zurück, das mit dem Ergebnis der Analyse des Anfragetextes als {{JSxRef("JSON")}} erfüllt wird.
- {{domxref("Request.text()")}}
  - : Gibt ein Promise zurück, das mit einer Textdarstellung des Anfragetextes erfüllt wird.

> [!NOTE]
> Die Funktionen des Anfragetextes können nur einmal ausgeführt werden; nachfolgende Aufrufe werden mit TypeError abgelehnt, was darauf hinweist, dass der Body-Stream bereits verwendet wurde.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem `Request()`-Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie das Skript) und geben dann einige Eigenschaften der Anfrage zurück:

```js
const request = new Request("https://www.mozilla.org/favicon.ico");

const url = request.url;
const method = request.method;
const credentials = request.credentials;
```

Sie könnten diese Anfrage dann ausführen, indem Sie das `Request`-Objekt als Parameter an einen {{domxref("Window/fetch", "fetch()")}}-Aufruf übergeben, zum Beispiel:

```js
fetch(request)
  .then((response) => response.blob())
  .then((blob) => {
    image.src = URL.createObjectURL(blob);
  });
```

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem `Request()`-Konstruktor mit einigen Anfangsdaten und Body-Inhalt für eine API-Anfrage, die eine Body-Nutzlast benötigt:

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
> Der Body kann nur ein {{domxref("Blob")}}, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}}, ein {{domxref("FormData")}}, ein {{domxref("URLSearchParams")}}, ein {{domxref("ReadableStream")}}, oder ein {{jsxref("String")}}-Objekt sein, sowie ein Zeichenfolgenliteral. Daher müssen Sie ein JSON-Objekt für die Nutzlast in eine Zeichenfolge umwandeln.

Sie könnten diese API-Anfrage dann ausführen, indem Sie das `Request`-Objekt als Parameter an einen {{domxref("Window/fetch", "fetch()")}}-Aufruf übergeben und die Antwort erhalten:

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
