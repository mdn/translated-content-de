---
title: "RTCDataChannel: readyState Eigenschaft"
short-title: readyState
slug: Web/API/RTCDataChannel/readyState
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte `RTCDataChannel`-Eigenschaft **`readyState`** gibt einen String zurück, der den Zustand der zugrunde liegenden Datenverbindung des Datenkanals angibt.

## Werte

Ein String, der den aktuellen Zustand des zugrunde liegenden Datentransports angibt und einen der folgenden Werte hat:

- `connecting`
  - : Der User-Agent (Browser) ist dabei, den zugrunde liegenden Datentransport zu erstellen;
    dies ist der Zustand eines neuen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) nachdem es durch [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) erstellt wurde,
    auf dem Peer, der den Verbindungsprozess gestartet hat.
- `open`
  - : Der zugrunde liegende Datentransport wurde hergestellt
    und Daten können bidirektional darüber übertragen werden.
    Dies ist der Standardzustand eines neuen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), das von der WebRTC-Schicht erstellt wurde,
    wenn der entfernte Peer den Kanal erstellt
    und ihn der Site oder App
    in einem [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event) Ereignis zugestellt hat.
- `closing`
  - : Der Prozess des Schließens des zugrunde liegenden Datentransports hat begonnen.
    Es ist nicht mehr möglich, neue Nachrichten zum Senden in die Warteschlange zu stellen,
    aber zuvor in die Warteschlange gestellte Nachrichten können möglicherweise noch gesendet oder empfangen werden,
    bevor der `closed` Zustand eintritt.
- `closed`
  - : Der zugrunde liegende Datentransport wurde geschlossen,
    oder der Versuch, die Verbindung herzustellen, ist fehlgeschlagen.

## Beispiel

```js
const dataChannel = peerConnection.createDataChannel("File Transfer");
const sendQueue = [];

function sendMessage(msg) {
  switch (dataChannel.readyState) {
    case "connecting":
      console.log(`Connection not open; queueing: ${msg}`);
      sendQueue.push(msg);
      break;
    case "open":
      sendQueue.forEach((msg) => dataChannel.send(msg));
      break;
    case "closing":
      console.log(`Attempted to send message while closing: ${msg}`);
      break;
    case "closed":
      console.log("Error! Attempt to send while connection closed.");
      break;
  }
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
- [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)
