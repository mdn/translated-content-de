---
title: "RTCSctpTransport: maxMessageSize-Eigenschaft"
short-title: maxMessageSize
slug: Web/API/RTCSctpTransport/maxMessageSize
l10n:
  sourceCommit: 989453176fd8756828b34b743a677a797d897156
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`maxMessageSize`** des [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)-Interfaces gibt die maximale Größe einer Nachricht an, die mit der [`RTCDataChannel.send()`](/de/docs/Web/API/RTCDataChannel/send)-Methode gesendet werden kann.

## Wert

Ein Ganzzahlwert, der die maximale Größe in Bytes angibt, einer Nachricht, die mit der [`RTCDataChannel.send()`](/de/docs/Web/API/RTCDataChannel/send)-Methode gesendet werden kann.

## Beispiele

Dieses Beispiel zeigt, wie Sie eine Zeichenfolge in kleine Teile aufteilen können, um sie basierend auf der maximalen Nachrichtenlänge zu senden.

```js
// Function splits strings to a specified size and returns array.
function splitStringToMax(str, maxLength) {
  const result = [];
  let i = 0;
  while (i < str.length) {
    result.push(str.substring(i, i + maxLength));
    i += maxLength;
  }
  return result;
}

const peerConnection = new RTCPeerConnection(options);
const channel = peerConnection.createDataChannel("chat");
channel.onopen = (event) => {
  const maximumMessageSize = peerConnection.sctp.maxMessageSize;
  const textToSend = "This is my possibly overly long string!";
  splitStringToMax(textToSend, maximumMessageSize).forEach((elem) => {
    channel.send(elem);
  });
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)
- Abschnitt [Verständnis von Nachrichten-Längenbegrenzungen](/de/docs/Web/API/WebRTC_API/Using_data_channels#understanding_message_size_limits) in der [Verwendung von WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels)
