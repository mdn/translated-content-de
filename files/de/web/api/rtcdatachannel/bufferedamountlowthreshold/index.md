---
title: "RTCDataChannel: bufferedAmountLowThreshold Eigenschaft"
short-title: bufferedAmountLowThreshold
slug: Web/API/RTCDataChannel/bufferedAmountLowThreshold
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("WebRTC")}}

Die `RTCDataChannel`-Eigenschaft **`bufferedAmountLowThreshold`** wird verwendet, um die Anzahl der gepufferten ausgehenden Datenbytes anzugeben, die als "niedrig" betrachtet werden. Der Standardwert ist 0\. Wenn die Anzahl der gepufferten ausgehenden Bytes, wie durch die [`bufferedAmount`](/de/docs/Web/API/RTCDataChannel/bufferedAmount)-Eigenschaft angegeben, auf diesen Wert oder darunter fällt, wird ein [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)-Ereignis ausgelöst. Dieses Ereignis kann beispielsweise verwendet werden, um Code zu implementieren, der mehr Nachrichten in die Warteschlange stellt, sobald Platz zum Puffern vorhanden ist. Listener können mit [`onbufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event) oder [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügt werden.

Der Benutzeragent kann den Prozess des tatsächlichen Sendens von Daten in beliebiger Weise implementieren; dies kann regelmäßig während der Ereignisschleife oder wirklich asynchron erfolgen. Wenn Nachrichten tatsächlich gesendet werden, wird dieser Wert entsprechend reduziert.

> [!NOTE] > `bufferedamountlow`-Ereignisse werden nicht ausgelöst, nachdem der Datenkanal geschlossen wurde.

## Wert

Die Anzahl der ausgehenden Datenbytes in der Warteschlange, unterhalb derer der Puffer als "niedrig" betrachtet wird.

## Beispiel

In diesem Codeausschnitt wird `bufferedAmountLowThreshold` auf 64kB gesetzt, und ein Handler für das [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)-Ereignis wird durch Setzen der [`onbufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)-Eigenschaft auf eine Funktion eingerichtet, die mehr Daten in den Puffer senden sollte, indem sie [`send()`](/de/docs/Web/API/RTCDataChannel/send) aufruft.

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
