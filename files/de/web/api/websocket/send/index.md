---
title: "WebSocket: send()-Methode"
short-title: send()
slug: Web/API/WebSocket/send
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Die **`WebSocket.send()`**-Methode stellt die angegebene Datenmenge zur Übertragung an den Server über die WebSocket-Verbindung in die Warteschlange, wodurch der Wert von `bufferedAmount` um die Anzahl der Bytes erhöht wird, die zur Speicherung der Daten benötigt werden. Wenn die Daten nicht gesendet werden können (zum Beispiel, weil sie gepuffert werden müssen, der Puffer jedoch voll ist), wird der Socket automatisch geschlossen. Der Browser wirft eine Ausnahme, wenn Sie `send()` aufrufen, während die Verbindung im Zustand `CONNECTING` ist. Wenn Sie `send()` im Zustand `CLOSING` oder `CLOSED` aufrufen, wird der Browser die Daten stillschweigend verwerfen.

## Syntax

```js-nolint
send(data)
```

### Parameter

- `data`

  - : Die Daten, die an den Server gesendet werden sollen. Sie können einen der folgenden Typen haben:

    - `string`
      - : Ein Text-String. Der String wird im UTF-8-Format in den Puffer hinzugefügt, und der Wert von `bufferedAmount` wird um die Anzahl der Bytes erhöht, die zur Darstellung des UTF-8-Strings erforderlich sind.
    - {{jsxref("ArrayBuffer")}}
      - : Sie können die zugrunde liegenden Binärdaten verwenden, die von einem typisierten Array-Objekt verwendet werden; deren Binärdateninhalte werden im Puffer in die Warteschlange gestellt, wodurch der Wert von `bufferedAmount` um die erforderliche Anzahl von Bytes erhöht wird.
    - [`Blob`](/de/docs/Web/API/Blob)
      - : Die Angabe eines `Blob` stellt die Rohdaten des Blobs in eine binäre Rahmen in die Warteschlange, wobei der [`Blob.type`](/de/docs/Web/API/Blob/type) ignoriert wird. Der Wert von `bufferedAmount` wird um die Byte-Größe dieser Rohdaten erhöht.
    - {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}
      - : Sie können jedes [JavaScript-typisierte Array](/de/docs/Web/JavaScript/Guide/Typed_arrays)-Objekt als binären Rahmen senden; dessen Binärdateninhalte werden im Puffer in die Warteschlange gestellt, wodurch der Wert von `bufferedAmount` um die erforderliche Anzahl von Bytes erhöht wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`WebSocket.readyState`](/de/docs/Web/API/WebSocket/readyState) `CONNECTING` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
