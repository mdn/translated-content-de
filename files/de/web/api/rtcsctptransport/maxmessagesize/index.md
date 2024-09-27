---
title: "RTCSctpTransport: Eigenschaft maxMessageSize"
short-title: maxMessageSize
slug: Web/API/RTCSctpTransport/maxMessageSize
l10n:
  sourceCommit: 989453176fd8756828b34b743a677a797d897156
---

{{APIRef("WebRTC")}}

Die **`maxMessageSize`** schreibgeschützte Eigenschaft der [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)-Schnittstelle gibt die maximale Größe einer Nachricht an, die mithilfe der [`RTCDataChannel.send()`](/de/docs/Web/API/RTCDataChannel/send)-Methode gesendet werden kann.

## Wert

Ein Ganzzahlenwert, der die maximale Größe in Bytes einer Nachricht angibt, die mithilfe der [`RTCDataChannel.send()`](/de/docs/Web/API/RTCDataChannel/send)-Methode gesendet werden kann.

## Beispiele

Dieses Beispiel zeigt, wie Sie möglicherweise einen String in kleine Teile aufteilen, um ihn basierend auf der maximalen Nachrichtenhöhe zu senden.

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
- Abschnitt [Verstehen von Nachrichtenhöchstgrenzen](/de/docs/Web/API/WebRTC_API/Using_data_channels#understanding_message_size_limits) von [Verwendung von WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels)
