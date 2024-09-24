---
title: "XMLHttpRequest: Methode send()"
short-title: send()
slug: Web/API/XMLHttpRequest/send
l10n:
  sourceCommit: c61f29b391b12980fd22bedcc2e1ca113de84986
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die {{domxref("XMLHttpRequest")}}-Methode **`send()`** sendet die Anfrage an den Server.

Wenn die Anfrage asynchron ist (was der Standard ist), kehrt diese Methode sofort zurück, sobald die Anfrage gesendet wurde, und das Ergebnis wird mithilfe von Ereignissen bereitgestellt. Wenn die Anfrage synchron ist, kehrt diese Methode erst zurück, wenn die Antwort eingetroffen ist.

`send()` akzeptiert einen optionalen Parameter, mit dem Sie den Rumpf der Anfrage angeben können; dies wird hauptsächlich für Anfragen wie {{HTTPMethod("PUT")}} verwendet. Wenn die Anfragemethode {{HTTPMethod("GET")}} oder {{HTTPMethod("HEAD")}} ist, wird der Parameter `body` ignoriert und der Anfragerumpf wird auf `null` gesetzt.

Wenn kein {{HTTPHeader("Accept")}}-Header mithilfe der {{domxref("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}} gesetzt wurde, wird ein `Accept`-Header mit dem Typ `"*/*"` (jeder Typ) gesendet.

## Syntax

```js-nolint
send()
send(body)
```

### Parameter

- `body` {{optional_inline}}

  - : Ein Datenrumpf, der in der XHR-Anfrage gesendet werden soll. Dies kann sein:

    - Ein {{domxref("Document")}}, in welchem Fall es vor dem Senden serialisiert wird.
    - Ein `XMLHttpRequestBodyInit`, was [laut der Fetch-Spezifikation](https://fetch.spec.whatwg.org/#typedefdef-xmlhttprequestbodyinit) ein {{domxref("Blob")}}, ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, ein {{jsxref("DataView")}}, ein {{domxref("FormData")}}, ein {{domxref("URLSearchParams")}} oder ein String sein kann.
    - `null`

    Wenn kein Wert für den Rumpf angegeben wird, wird ein Standardwert von `null` verwendet.

Der beste Weg, um binäre Inhalte zu senden (z. B. bei Datei-Uploads), ist die Verwendung eines {{jsxref("TypedArray")}}, eines {{jsxref("DataView")}} oder eines {{domxref("Blob")}}-Objekts in Verbindung mit der `send()`-Methode.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `send()` bereits für die Anfrage aufgerufen wurde und/oder die Anfrage abgeschlossen ist.
- `NetworkError` {{domxref("DOMException")}}
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

// Senden Sie die richtigen Header-Informationen mit der Anfrage
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = () => {
  // Rufen Sie eine Funktion auf, wenn sich der Status ändert.
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
