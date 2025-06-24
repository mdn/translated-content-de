---
title: "XMLHttpRequest: send()-Methode"
short-title: send()
slug: Web/API/XMLHttpRequest/send
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Methode **`send()`** sendet die Anfrage an den Server.

Wenn die Anfrage asynchron ist (was der Standard ist), kehrt diese Methode zurück, sobald die Anfrage gesendet wurde und das Ergebnis wird über Ereignisse geliefert. Ist die Anfrage synchron, kehrt diese Methode nicht zurück, bis die Antwort eingetroffen ist.

`send()` akzeptiert einen optionalen Parameter, mit dem Sie den Inhalt der Anfrage angeben können; dies wird hauptsächlich für Anfragen wie {{HTTPMethod("PUT")}} verwendet. Wenn die Anfragemethode {{HTTPMethod("GET")}} oder {{HTTPMethod("HEAD")}} ist, wird der `body`-Parameter ignoriert und der Anfragetext auf `null` gesetzt.

Wenn kein {{HTTPHeader("Accept")}}-Header mithilfe von [`setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) gesetzt wurde, wird ein `Accept`-Header mit dem Typ `"*/*"` (jeder Typ) gesendet.

## Syntax

```js-nolint
send()
send(body)
```

### Parameter

- `body` {{optional_inline}}

  - : Ein Datenkörper, der in der XHR-Anfrage gesendet werden soll. Dies kann sein:

    - Ein [`Document`](/de/docs/Web/API/Document), das vor dem Senden serialisiert wird.
    - Ein `XMLHttpRequestBodyInit`, das [laut Fetch-Spezifikation](https://fetch.spec.whatwg.org/#typedefdef-xmlhttprequestbodyinit) ein [`Blob`](/de/docs/Web/API/Blob), ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}}, ein [`FormData`](/de/docs/Web/API/FormData), ein [`URLSearchParams`](/de/docs/Web/API/URLSearchParams) oder ein String sein kann.
    - `null`

    Wenn kein Wert für den Body angegeben wird, wird standardmäßig `null` verwendet.

Der beste Weg, um binäre Inhalte (z.B. bei Datei-Uploads) zu senden, ist die Verwendung eines {{jsxref("TypedArray")}}, eines {{jsxref("DataView")}} oder eines [`Blob`](/de/docs/Web/API/Blob)-Objekts in Verbindung mit der `send()`-Methode.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `send()` bereits für die Anfrage aufgerufen wurde und/oder die Anfrage abgeschlossen ist.
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
