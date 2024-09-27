---
title: "RTCPeerConnection: sctp-Eigenschaft"
short-title: sctp
slug: Web/API/RTCPeerConnection/sctp
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`sctp`** schreibgeschützte Eigenschaft des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Interfaces gibt ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) Objekt zurück, das den [SCTP](/de/docs/Glossary/SCTP)-Transport beschreibt, über den SCTP-Daten gesendet und empfangen werden. Falls SCTP nicht ausgehandelt wurde, ist dieser Wert `null`.

Der SCTP-Transport wird für das Senden und Empfangen von Daten auf allen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)s der Peer-Verbindung verwendet.

## Wert

Ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) Objekt, das den SCTP-Transport beschreibt, welcher von der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) für das Senden und Empfangen auf seinen Datenkanälen verwendet wird, oder `null`, falls keine SCTP-Aushandlung stattgefunden hat.

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
