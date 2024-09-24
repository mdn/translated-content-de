---
title: "WebSocket: send()-Methode"
short-title: send()
slug: Web/API/WebSocket/send
l10n:
  sourceCommit: eba47bb55d10e6dc73f61dbefc9d3da2abf1fd78
---

{{APIRef("WebSockets API")}}

Die **`WebSocket.send()`**-Methode reiht die angegebenen Daten zur Übertragung an den Server über die WebSocket-Verbindung ein und erhöht den Wert von `bufferedAmount` um die Anzahl der Bytes, die zum Speichern der Daten erforderlich sind. Wenn die Daten nicht gesendet werden können (zum Beispiel, weil sie gepuffert werden müssen, der Puffer jedoch voll ist), wird die Verbindung automatisch geschlossen. Der Browser wirft eine Ausnahme, wenn Sie `send()` aufrufen, während die Verbindung im `CONNECTING`-Zustand ist. Wenn Sie `send()` aufrufen, während die Verbindung im `CLOSING`- oder `CLOSED`-Zustand ist, verwirft der Browser die Daten stillschweigend.

## Syntax

```js-nolint
send(data)
```

### Parameter

- `data`

  - : Die zu sendenden Daten an den Server. Sie können einer der folgenden Typen sein:

    - `string`
      - : Eine Textzeichenkette. Die Zeichenkette wird dem Puffer im UTF-8-Format hinzugefügt, und der Wert von `bufferedAmount` wird um die Anzahl der Bytes erhöht, die zum Darstellen der UTF-8-Zeichenkette erforderlich sind.
    - {{jsxref("ArrayBuffer")}}
      - : Sie können die zugrunde liegenden Binärdaten eines typisierten Array-Objekts senden; dessen Binärdateninhalt wird in den Puffer eingereiht, wodurch der Wert von `bufferedAmount` um die erforderliche Anzahl von Bytes erhöht wird.
    - {{domxref("Blob")}}
      - : Die Angabe eines `Blob` reiht die Rohdaten des Blobs zur Übertragung in einem binären Frame ein (der {{domxref("Blob.type")}} wird ignoriert). Der Wert von `bufferedAmount` wird um die Byte-Größe dieser Rohdaten erhöht.
    - {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}
      - : Sie können jedes [JavaScript-typisierte Array](/de/docs/Web/JavaScript/Guide/Typed_arrays)-Objekt als binären Frame senden; dessen Binärdateninhalt wird in den Puffer eingereiht, wodurch der Wert von `bufferedAmount` um die erforderliche Anzahl von Bytes erhöht wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn {{domxref("WebSocket/readyState", "WebSocket.readyState")}} `CONNECTING` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
