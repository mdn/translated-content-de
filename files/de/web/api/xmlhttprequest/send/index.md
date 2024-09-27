---
title: "XMLHttpRequest: send()-Methode"
short-title: send()
slug: Web/API/XMLHttpRequest/send
l10n:
  sourceCommit: c61f29b391b12980fd22bedcc2e1ca113de84986
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Methode **`send()`** sendet die Anforderung an den Server.

Wenn die Anforderung asynchron ist (was standardmäßig der Fall ist), kehrt diese Methode sofort zurück, sobald die Anforderung gesendet wird, und das Ergebnis wird mit Hilfe von Ereignissen geliefert. Wenn die Anforderung synchron ist, kehrt diese Methode erst zurück, wenn die Antwort eingetroffen ist.

`send()` akzeptiert einen optionalen Parameter, mit dem Sie den Anforderungskörper spezifizieren können; dies wird hauptsächlich für Anforderungen wie {{HTTPMethod("PUT")}} verwendet. Wenn die Anforderungsmethode {{HTTPMethod("GET")}} oder {{HTTPMethod("HEAD")}} ist, wird der `body`-Parameter ignoriert und der Anforderungskörper wird auf `null` gesetzt.

Falls kein {{HTTPHeader("Accept")}}-Header durch die Methode [`setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) gesetzt wurde, wird ein `Accept`-Header mit dem Typ `"*/*"` (jeder Typ) gesendet.

## Syntax

```js-nolint
send()
send(body)
```

### Parameter

- `body` {{optional_inline}}

  - : Ein Datenkörper, der in der XHR-Anforderung gesendet werden soll. Dies kann sein:

    - Ein [`Document`](/de/docs/Web/API/Document), in diesem Fall wird es vor dem Senden seriellisiert.
    - Ein `XMLHttpRequestBodyInit`, das [laut dem Fetch-Spezifikation](https://fetch.spec.whatwg.org/#typedefdef-xmlhttprequestbodyinit) ein [`Blob`](/de/docs/Web/API/Blob), ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}}, ein [`FormData`](/de/docs/Web/API/FormData), ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) oder ein String sein kann.
    - `null`

    Wenn kein Wert für den body angegeben ist, wird ein Standardwert von `null` verwendet.

Der beste Weg zum Senden von Binärinhalten (z.B. bei Dateiuploads) ist die Verwendung eines {{jsxref("TypedArray")}}, eines {{jsxref("DataView")}}- oder eines [`Blob`](/de/docs/Web/API/Blob)-Objekts in Verbindung mit der `send()`-Methode.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `send()` bereits für die Anforderung aufgerufen wurde und/oder die Anforderung abgeschlossen ist.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der abzurufende Ressourcentyp ein Blob ist und die Methode nicht `GET` ist.

## Beispiel: GET

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

xhr.onload = () => {
  // Request finished. Do processing here.
};

xhr.send(null);
// xhr.send('string');
// xhr.send(new Blob());
// xhr.send(new Int8Array());
// xhr.send(document);
```

## Beispiel: POST

```js
const xhr = new XMLHttpRequest();
xhr.open("POST", "/server", true);

// Send the proper header information along with the request
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = () => {
  // Call a function when the state changes.
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    // Request finished. Do processing here.
  }
};
xhr.send("foo=bar&lorem=ipsum");
// xhr.send(new Int8Array());
// xhr.send(document);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
