---
title: "WebSocket: send() Methode"
short-title: send()
slug: Web/API/WebSocket/send
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Die **`WebSocket.send()`**-Methode stellt die angegebenen Daten in die Warteschlange, um sie über die WebSocket-Verbindung an den Server zu übertragen. Dabei wird der Wert von `bufferedAmount` um die Anzahl der Bytes erhöht, die zum Speichern der Daten erforderlich sind. Falls die Daten nicht gesendet werden können (zum Beispiel, weil sie zwischengespeichert werden müssen, der Puffer jedoch voll ist), wird der Socket automatisch geschlossen. Der Browser wirft eine Ausnahme, wenn Sie `send()` aufrufen, während die Verbindung im `CONNECTING`-Zustand ist. Rufen Sie `send()` auf, während die Verbindung im `CLOSING`- oder `CLOSED`-Zustand ist, werden die Daten vom Browser stillschweigend verworfen.

## Syntax

```js-nolint
send(data)
```

### Parameter

- `data`

  - : Die Daten, die an den Server gesendet werden sollen. Diese können einen der folgenden Typen haben:

    - `string`
      - : Ein Text-String. Der String wird im UTF-8-Format in den Puffer aufgenommen und der Wert von `bufferedAmount` wird um die Anzahl der Bytes erhöht, die für die Darstellung des UTF-8-Strings erforderlich sind.
    - {{jsxref("ArrayBuffer")}}
      - : Sie können die zugrunde liegenden Binärdaten eines typisierten Array-Objekts senden; seine Binärdateninhalte werden in die Warteschlange im Puffer gestellt, wodurch der Wert von `bufferedAmount` um die erforderliche Anzahl von Bytes erhöht wird.
    - [`Blob`](/de/docs/Web/API/Blob)
      - : Wenn Sie ein `Blob` angeben, werden die Rohdaten des Blobs zur Übertragung in einem binären Frame in die Warteschlange gestellt (der [`Blob.type`](/de/docs/Web/API/Blob/type) wird ignoriert). Der Wert von `bufferedAmount` wird um die Byte-Größe dieser Rohdaten erhöht.
    - {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}
      - : Sie können jedes [JavaScript Typed Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) Objekt als Binär-Frame senden; seine Binärdateninhalte werden in die Warteschlange im Puffer gestellt, wobei der Wert von `bufferedAmount` um die erforderliche Anzahl von Bytes erhöht wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn [`WebSocket.readyState`](/de/docs/Web/API/WebSocket/readyState) `CONNECTING` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
