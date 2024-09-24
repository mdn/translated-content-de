---
title: "RTCDataChannel: bufferedAmount-Eigenschaft"
short-title: bufferedAmount
slug: Web/API/RTCDataChannel/bufferedAmount
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte `RTCDataChannel`-Eigenschaft **`bufferedAmount`** gibt die Anzahl der Bytes von Daten zurück, die derzeit in der Warteschlange stehen, um über den Datenkanal gesendet zu werden. Die Warteschlange kann sich durch Aufrufe der {{domxref("RTCDataChannel.send", "send()")}}-Methode aufbauen. Dies schließt nur Daten ein, die von der Benutzeroberfläche selbst gepuffert werden; es umfasst nicht den Protokoll-Overhead oder das Puffern durch das Betriebssystem oder die Netzwerkhardware.

Der Benutzeragent kann den Prozess des tatsächlichen Sendens von Daten auf beliebige Weise implementieren; dies kann periodisch während der Ereignisschleife oder wirklich asynchron erfolgen. Während Nachrichten tatsächlich gesendet werden, wird dieser Wert entsprechend reduziert.

> [!NOTE]
> Das Schließen des Datenkanals setzt diesen Zähler nicht zurück, obwohl der Benutzeragent die Nachrichten in der Warteschlange löscht. Auch nach dem Schließen des Kanals führen Versuche, Nachrichten zu senden, weiterhin dazu, dass der `bufferedAmount`-Wert zunimmt, obwohl die Nachrichten weder gesendet noch gepuffert werden.

Wann immer dieser Wert auf den oder unter den im {{domxref("RTCDataChannel.bufferedAmountLowThreshold", "bufferedAmountLowThreshold")}} festgelegten Wert fällt, löst der Benutzeragent das {{DOMxRef("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}}-Ereignis aus. Dieses Ereignis kann beispielsweise verwendet werden, um Code zu implementieren, der mehr Nachrichten in die Warteschlange stellt, wann immer Platz vorhanden ist, um diese zu puffern.

## Wert

Die Anzahl der Bytes von Daten, die derzeit in der Warteschlange stehen, um über den Datenkanal gesendet zu werden, aber noch nicht gesendet wurden.

## Beispiel

Das untenstehende Snippet enthält eine Funktion, die den Inhalt eines Blocks mit der ID "bufferSize" in einen String ändert, der angibt, wie viele Bytes derzeit auf einem {{domxref("RTCDataChannel")}} gepuffert sind.

```js
const dc = peerConnection.createDataChannel("File Transfer");

// …

function showBufferedAmount(channel) {
  const el = document.getElementById("bufferSize");

  el.innerText = `${channel.bufferedAmount} bytes`;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [Verwendung von WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCDataChannel.bufferedAmountLowThreshold")}}
- {{DOMxRef("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}}-Ereignis
