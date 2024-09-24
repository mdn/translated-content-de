---
title: "RTCSctpTransport: Eigenschaft maxMessageSize"
short-title: maxMessageSize
slug: Web/API/RTCSctpTransport/maxMessageSize
l10n:
  sourceCommit: 989453176fd8756828b34b743a677a797d897156
---

{{APIRef("WebRTC")}}

Die **`maxMessageSize`** schreibgeschützte Eigenschaft der {{DOMxRef("RTCSctpTransport")}}-Schnittstelle gibt die maximale Größe einer Nachricht an, die mit der {{DOMxRef("RTCDataChannel.send()")}}-Methode gesendet werden kann.

## Wert

Ein ganzzahliger Wert, der die maximale Größe in Bytes einer Nachricht angibt, die mit der {{DOMxRef("RTCDataChannel.send()")}}-Methode gesendet werden kann.

## Beispiele

Dieses Beispiel zeigt, wie Sie einen String in kleine Teile aufteilen könnten, die basierend auf der maximalen Nachrichtenlänge gesendet werden können.

```js
// Funktion teilt Zeichenfolgen auf eine festgelegte Größe auf und gibt ein Array zurück.
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

- {{DOMxRef("RTCSctpTransport")}}
- [Verständnis der Nachrichtenbegrenzungen](/de/docs/Web/API/WebRTC_API/Using_data_channels#understanding_message_size_limits) Abschnitt von [Verwendung von WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels)
