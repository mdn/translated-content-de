---
title: "RTCPeerConnection: sctp-Eigenschaft"
short-title: sctp
slug: Web/API/RTCPeerConnection/sctp
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`sctp`** der Schnittstelle [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gibt ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) zurück, das den [SCTP](/de/docs/Glossary/SCTP)-Transport beschreibt, über den SCTP-Daten gesendet und empfangen werden.
Wenn SCTP nicht verhandelt wurde, ist dieser Wert `null`.

Der SCTP-Transport wird für das Senden und Empfangen von Daten aller [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)s auf der Peer-Verbindung verwendet.

## Wert

Ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)-Objekt, das den von der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendeten SCTP-Transport zum Senden und Empfangen auf seinen Datenkanälen beschreibt, oder `null`, wenn keine SCTP-Verhandlung stattgefunden hat.

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
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [SCTP](/de/docs/Glossary/SCTP)
