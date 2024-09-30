---
title: "RTCDataChannel: bufferedAmount-Eigenschaft"
short-title: bufferedAmount
slug: Web/API/RTCDataChannel/bufferedAmount
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte `RTCDataChannel`-Eigenschaft **`bufferedAmount`** gibt die Anzahl von Bytes zurück, die derzeit zur Übertragung über den Datenkanal in der Warteschlange stehen. Die Warteschlange kann sich aufgrund von Aufrufen der [`send()`](/de/docs/Web/API/RTCDataChannel/send)-Methode aufbauen. Dies umfasst nur Daten, die vom User Agent selbst gepuffert werden; es umfasst weder einen Rahmen-Overhead noch ein Puffern durch das Betriebssystem oder die Netzwerkausrüstung.

Der User Agent kann den tatsächlichen Sendevorgang auf beliebige Weise implementieren; dies kann periodisch während der Ereignisschleife oder tatsächlich asynchron geschehen. Während Nachrichten tatsächlich gesendet werden, wird dieser Wert entsprechend reduziert.

> [!NOTE]
> Das Schließen des Datenkanals setzt diesen Zähler nicht zurück, obwohl der User Agent die Nachrichten in der Warteschlange löscht. Dennoch werden auch nach dem Schließen des Kanals weitere Versuche, Nachrichten zu senden, zum `bufferedAmount`-Wert hinzugefügt, obwohl die Nachrichten weder gesendet noch gepuffert werden.

Jedes Mal, wenn dieser Wert auf oder unter den in der [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold)-Eigenschaft angegebenen Wert abfällt, löst der User Agent das [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)-Ereignis aus. Dieses Ereignis kann beispielsweise verwendet werden, um Code zu implementieren, der mehr Nachrichten in die Warteschlange stellt, sobald Raum vorhanden ist, um sie zu puffern.

## Wert

Die Anzahl von Bytes von Daten, die derzeit zur Übertragung über den Datenkanal in der Warteschlange stehen, aber noch nicht gesendet wurden.

## Beispiel

Der unten stehende Ausschnitt enthält eine Funktion, die den Inhalt eines Blocks mit der ID "bufferSize" in einen String ändert, der die Anzahl der derzeit auf einem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) gepufferten Bytes angibt.

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
