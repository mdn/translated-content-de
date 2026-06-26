---
title: "RTCTransportStats: dtlsRole-Eigenschaft"
short-title: dtlsRole
slug: Web/API/RTCTransportStats/dtlsRole
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("WebRTC")}}

Die **`dtlsRole`**-Eigenschaft des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Wörterbuchs ist ein String, der die Rolle der zugehörigen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) in der DTLS-Verhandlung angibt.

Speziell, ob es wie ein Server agierte und auf Verbindungen lauschte, oder wie ein Client agierte und die Verbindung initiierte, oder dass die Verhandlung noch nicht begonnen hat.

## Wert

Ein String, der die DTLS-Rolle angibt.
Dies wird einer der folgenden sein:

- `client`
  - : Der Peer hat das DTLS-Handshake initiiert.
- `server`
  - : Der Peer wartete auf das DTLS-Handshake.
- `unknown`
  - : Die DTLS-Verhandlung hat nicht begonnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
