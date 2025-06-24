---
title: "WebSocket: send()-Methode"
short-title: send()
slug: Web/API/WebSocket/send
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Die **`WebSocket.send()`**-Methode reiht die angegebenen Daten zur Übertragung an den Server über die WebSocket-Verbindung ein und erhöht den Wert von `bufferedAmount` um die Anzahl der Bytes, die benötigt werden, um die Daten zu enthalten. Wenn die Daten nicht gesendet werden können (zum Beispiel, weil sie zwischengespeichert werden müssen, aber der Puffer voll ist), wird der Socket automatisch geschlossen. Der Browser löst eine Ausnahme aus, wenn Sie `send()` aufrufen, während die Verbindung im `CONNECTING`-Status ist. Wenn Sie `send()` aufrufen, während die Verbindung im `CLOSING`- oder `CLOSED`-Status ist, verwirft der Browser die Daten ohne Benachrichtigung.

## Syntax

```js-nolint
send(data)
```

### Parameter

- `data`
  - : Die Daten, die an den Server gesendet werden sollen. Sie können einer der folgenden Typen sein:
    - `string`
      - : Ein Textstring. Der String wird im UTF-8-Format in den Puffer aufgenommen, und der Wert von `bufferedAmount` wird um die Anzahl der Bytes erhöht, die zur Darstellung des UTF-8-Strings benötigt werden.
    - {{jsxref("ArrayBuffer")}}
      - : Sie können die zugrunde liegenden Binärdaten, die von einem typisierten Array-Objekt verwendet werden, senden; seine Binärdateninhalte werden in den Puffer eingereiht und erhöhen den Wert von `bufferedAmount` um die erforderliche Anzahl an Bytes.
    - [`Blob`](/de/docs/Web/API/Blob)
      - : Wenn Sie ein `Blob` angeben, wird die rohe Daten des Blobs in einem Binärrahmen zur Übertragung eingereiht (der [`Blob.type`](/de/docs/Web/API/Blob/type) wird ignoriert). Der Wert von `bufferedAmount` wird um die Byte-Größe dieser Rohdaten erhöht.
    - {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}
      - : Sie können jedes beliebige [JavaScript typisierte Array](/de/docs/Web/JavaScript/Guide/Typed_arrays)-Objekt als Binärrahmen senden; seine Binärdateninhalte werden in den Puffer eingereiht, wobei der Wert von `bufferedAmount` um die erforderliche Anzahl von Bytes erhöht wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn [`WebSocket.readyState`](/de/docs/Web/API/WebSocket/readyState) `CONNECTING` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
