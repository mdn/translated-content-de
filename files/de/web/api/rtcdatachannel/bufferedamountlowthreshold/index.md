---
title: "RTCDataChannel: Eigenschaft bufferedAmountLowThreshold"
short-title: bufferedAmountLowThreshold
slug: Web/API/RTCDataChannel/bufferedAmountLowThreshold
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die `RTCDataChannel`-Eigenschaft **`bufferedAmountLowThreshold`** wird verwendet, um die Anzahl der Bytes gepufferter ausgehender Daten zu spezifizieren, die als "niedrig" angesehen wird. Der Standardwert ist 0. Wenn die Anzahl der gepufferten ausgehenden Bytes, wie durch die [`bufferedAmount`](/de/docs/Web/API/RTCDataChannel/bufferedAmount)-Eigenschaft angegeben, auf diesen Wert fällt oder darunter liegt, wird ein [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)-Ereignis ausgelöst. Dieses Ereignis kann beispielsweise verwendet werden, um Code zu implementieren, der mehr Nachrichten zur Übertragung in die Warteschlange stellt, wann immer Platz zum Puffern vorhanden ist. Listener können mit [`onbufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event) oder [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügt werden.

Der User-Agent kann den Prozess des tatsächlichen Sendens von Daten auf beliebige Weise implementieren; dies kann periodisch während der Ereignisschleife oder wirklich asynchron geschehen. Wenn Nachrichten tatsächlich gesendet werden, wird dieser Wert entsprechend reduziert.

> **Note:** `bufferedamountlow`-Ereignisse werden nicht ausgelöst, nachdem der Datenkanal geschlossen wurde.

## Wert

Die Anzahl der in die Warteschlange gestellten ausgehenden Datenbytes, unterhalb derer der Puffer als "niedrig" angesehen wird.

## Beispiel

In diesem Codeausschnitt wird `bufferedAmountLowThreshold` auf 64kB gesetzt, und ein Handler für das [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)-Ereignis wird eingerichtet, indem die [`onbufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)-Eigenschaft auf eine Funktion gesetzt wird, die mehr Daten in den Puffer senden soll, indem sie [`send()`](/de/docs/Web/API/RTCDataChannel/send) aufruft.

```js
const dc = peerConnection.createDataChannel("File Transfer");
dc.bufferedAmountLowThreshold = 65535;

dc.onbufferedamountlow = () => {
  /* use send() to queue more data to be sent */
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [Verwendung von WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels)
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [`RTCDataChannel.bufferedAmount`](/de/docs/Web/API/RTCDataChannel/bufferedAmount)
- [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)-Ereignis
