---
title: "Response: Response() Konstruktor"
short-title: Response()
slug: Web/API/Response/Response
l10n:
  sourceCommit: 80d24962385aac4afc9a170a709e97c49aae41c7
---

{{APIRef("Fetch API")}}

Der **`Response()`** Konstruktor erstellt ein neues {{domxref("Response")}}-Objekt.

## Syntax

```js-nolint
new Response()
new Response(body)
new Response(body, options)
```

### Parameter

- `body` {{optional_inline}}

  - : Ein Objekt, das einen Inhalt für die Antwort definiert. Dies kann `null` sein (was der Standardwert ist) oder eines von:

    - {{domxref("Blob")}}
    - {{jsxref("ArrayBuffer")}}
    - {{jsxref("TypedArray")}}
    - {{jsxref("DataView")}}
    - {{domxref("FormData")}}
    - {{domxref("ReadableStream")}}
    - {{domxref("URLSearchParams")}}
    - {{jsxref("String")}}
    - Zeichenkettenliteral

- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das alle benutzerdefinierten Einstellungen enthält, die Sie auf die Antwort anwenden möchten, oder ein leeres Objekt (was der Standardwert ist). Mögliche Optionen sind:

    - `status`
      - : Der Statuscode für die Antwort.
        Der Standardwert ist `200`.
    - `statusText`
      - : Die Statusnachricht, die mit dem Statuscode verbunden ist, wie z.B. `"OK"`.
        Der Standardwert ist `""`.
    - `headers`
      - : Alle Header, die Sie Ihrer Antwort hinzufügen möchten, enthalten in einem {{domxref("Headers")}}-Objekt oder Objektliteral mit {{jsxref("String")}} Schlüssel/Wert-Paaren (siehe [HTTP-Header](/de/docs/Web/HTTP/Headers) für eine Referenz).
        Standardmäßig ist dies leer.

## Beispiele

In unserem [Fetch Response Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (siehe [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/))
erstellen wir ein neues `Response`-Objekt mit dem Konstruktor, indem wir ihm ein neues {{domxref("Blob")}} als Body und ein Init-Objekt mit einem benutzerdefinierten `status` und `statusText` übergeben:

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
