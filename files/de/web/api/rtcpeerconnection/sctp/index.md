---
title: "RTCPeerConnection: sctp-Eigenschaft"
short-title: sctp
slug: Web/API/RTCPeerConnection/sctp
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`sctp`**-Schreibgeschützte Eigenschaft der {{domxref("RTCPeerConnection")}}-Schnittstelle gibt ein {{domxref("RTCSctpTransport")}}-Objekt zurück, das den {{Glossary("SCTP")}}-Transport beschreibt, über den SCTP-Daten gesendet und empfangen werden.
Wenn SCTP nicht ausgehandelt wurde, ist dieser Wert `null`.

Der SCTP-Transport wird zum Senden und Empfangen von Daten für alle {{domxref("RTCDataChannel")}}s auf der Peer-Verbindung verwendet.

## Wert

Ein {{domxref("RTCSctpTransport")}}-Objekt, das den von der {{domxref("RTCPeerConnection")}} für das Senden und Empfangen auf ihren Datenkanälen verwendeten SCTP-Transport beschreibt, oder `null`, wenn die SCTP-Aushandlung nicht stattgefunden hat.

## Beispiel

```js
const peerConnection = new RTCPeerConnection();

const channel = peerConnection.createDataChannel("Mydata");
channel.onopen = (event) => {
  channel.send("sending a message");
};
channel.onmessage = (event) => {
  console.log(event.data);
};

// Determine the largest message size that can be sent

const sctp = peerConnection.sctp;
const maxMessageSize = sctp.maxMessageSize;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCDataChannel")}}
- {{Glossary("SCTP")}}
