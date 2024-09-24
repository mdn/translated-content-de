---
title: "RTCDataChannel: bufferedAmountLowThreshold-Eigenschaft"
short-title: bufferedAmountLowThreshold
slug: Web/API/RTCDataChannel/bufferedAmountLowThreshold
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die `RTCDataChannel`-Eigenschaft
**`bufferedAmountLowThreshold`** wird verwendet, um die Anzahl der Bytes gepufferter ausgehender Daten zu spezifizieren, die als "niedrig" betrachtet werden. Der Standardwert ist 0. Wenn die Anzahl der gepufferten ausgehenden Bytes, wie durch die {{domxref("RTCDataChannel.bufferedAmount", "bufferedAmount")}}-Eigenschaft angegeben, auf diesen Wert fällt oder darunter liegt, wird ein {{DOMxRef("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}}-Ereignis ausgelöst. Dieses Ereignis kann beispielsweise verwendet werden, um Code zu implementieren, der weitere Nachrichten in die Warteschlange einfügt, wann immer Platz zum Puffern vorhanden ist. Listener können mithilfe von {{domxref("RTCDataChannel.bufferedamountlow_event", "onbufferedamountlow")}} oder {{domxref("EventTarget.addEventListener", "addEventListener()")}} hinzugefügt werden.

Der Benutzeragent kann den Prozess des eigentlichen Sendens von Daten auf beliebige Weise implementieren; dies kann periodisch während der Ereignisschleife oder wirklich asynchron erfolgen. Während Nachrichten tatsächlich gesendet werden, wird dieser Wert entsprechend verringert.

> **Note:** `bufferedamountlow`-Ereignisse werden nicht ausgelöst, nachdem der Datenkanal geschlossen ist.

## Wert

Die Anzahl der Warteschlangen-Bytes für ausgehende Daten, unterhalb derer der Puffer als "niedrig" angesehen wird.

## Beispiel

In diesem Codeausschnitt wird `bufferedAmountLowThreshold` auf 64 kB gesetzt, und ein Handler für das {{DOMxRef("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}}-Ereignis wird eingerichtet, indem die {{domxref("RTCDataChannel.bufferedamountlow_event", "onbufferedamountlow")}}-Eigenschaft auf eine Funktion gesetzt wird, die mehr Daten in den Puffer senden soll, indem sie {{domxref("RTCDataChannel.send", "send()")}} aufruft.

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
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCDataChannel.bufferedAmount")}}
- {{DOMxRef("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}}-Ereignis
