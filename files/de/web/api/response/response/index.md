---
title: "Response: Response() Konstruktor"
short-title: Response()
slug: Web/API/Response/Response
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Der **`Response()`** Konstruktor erstellt ein neues [`Response`](/de/docs/Web/API/Response) Objekt.

## Syntax

```js-nolint
new Response()
new Response(body)
new Response(body, options)
```

### Parameter

- `body` {{optional_inline}}

  - : Ein Objekt, das einen Rumpf für die Antwort definiert. Dies kann `null` sein (was der Standardwert ist) oder eines der folgenden Typen:

    - [`Blob`](/de/docs/Web/API/Blob)
    - {{jsxref("ArrayBuffer")}}
    - {{jsxref("TypedArray")}}
    - {{jsxref("DataView")}}
    - [`FormData`](/de/docs/Web/API/FormData)
    - [`ReadableStream`](/de/docs/Web/API/ReadableStream)
    - [`URLSearchParams`](/de/docs/Web/API/URLSearchParams)
    - {{jsxref("String")}}
    - Zeichenfolgenliterale

- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das benutzerdefinierte Einstellungen enthält, die Sie auf die Antwort anwenden möchten, oder ein leeres Objekt (das der Standardwert ist). Mögliche Optionen sind:

    - `status`
      - : Der Statuscode für die Antwort.
        Der Standardwert ist `200`.
    - `statusText`
      - : Die Statusnachricht, die mit dem Statuscode verbunden ist, wie z.B. `"OK"`.
        Der Standardwert ist `""`.
    - `headers`
      - : Alle Header, die Sie Ihrer Antwort hinzufügen möchten, enthalten in einem [`Headers`](/de/docs/Web/API/Headers) Objekt oder einem Objektliteral von {{jsxref("String")}} Schlüssel/Wert-Paaren (siehe [HTTP-Header](/de/docs/Web/HTTP/Headers) für eine Referenz).
        Standardmäßig ist dies leer.

## Beispiele

In unserem [Fetch Response Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (siehe [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/)) erstellen wir ein neues `Response` Objekt mit dem Konstruktor, indem wir ihm ein neues [`Blob`](/de/docs/Web/API/Blob) als Rumpf und ein Initialisierungsobjekt mit einem benutzerdefinierten `status` und `statusText` übergeben:

```js
const myBlob = new Blob();
const myOptions = { status: 200, statusText: "SuperSmashingGreat!" };
const myResponse = new Response(myBlob, myOptions);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
