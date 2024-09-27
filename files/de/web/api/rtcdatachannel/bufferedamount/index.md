---
title: "RTCDataChannel: bufferedAmount-Eigenschaft"
short-title: bufferedAmount
slug: Web/API/RTCDataChannel/bufferedAmount
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte `RTCDataChannel`-Eigenschaft **`bufferedAmount`** gibt die Anzahl der Bytes an Daten zurück, die derzeit zur Übertragung über den Datenkanal in die Warteschlange gestellt sind. Die Warteschlange kann sich als Ergebnis von Aufrufen der [`send()`](/de/docs/Web/API/RTCDataChannel/send)-Methode aufbauen. Dies schließt nur die vom Benutzeragenten selbst gepufferten Daten ein; es schließt keinen Framing-Overhead oder Pufferung durch das Betriebssystem oder die Netzwerkausrüstung ein.

Der Benutzeragent kann den Vorgang des tatsächlichen Sendens von Daten auf beliebige Weise implementieren; dies kann periodisch während der Ereignisschleife oder wirklich asynchron erfolgen. Wenn Nachrichten tatsächlich gesendet werden, wird dieser Wert entsprechend verringert.

> [!NOTE]
> Das Schließen des Datenkanals setzt diesen Zähler nicht zurück, obwohl der Benutzeragent die Nachrichten in der Warteschlange löscht. Selbst nach dem Schließen des Kanals führen jedoch Versuche, Nachrichten zu senden, weiterhin zu einem Anstieg des `bufferedAmount`-Wertes, obwohl die Nachrichten weder gesendet noch gepuffert werden.

Immer wenn dieser Wert unter den im [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) angegebenen Wert fällt, löst der Benutzeragent das [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)-Ereignis aus. Dieses Ereignis kann beispielsweise verwendet werden, um Code zu implementieren, der weitere Nachrichten zur Übertragung in die Warteschlange stellt, wann immer Platz zum Puffern vorhanden ist.

## Wert

Die Anzahl der Bytes von Daten, die derzeit zur Übertragung über den Datenkanal in die Warteschlange gestellt, aber noch nicht gesendet wurden.

## Beispiel

Der folgende Codeausschnitt enthält eine Funktion, die den Inhalt eines Blocks mit der ID "bufferSize" in einen String ändert, der die Anzahl der derzeit auf einem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) gepufferten Bytes angibt.

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
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [`RTCDataChannel.bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold)
- [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)-Ereignis
