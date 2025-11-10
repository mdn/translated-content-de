---
title: "RTCTransportStats: dtlsRole Eigenschaft"
short-title: dtlsRole
slug: Web/API/RTCTransportStats/dtlsRole
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`dtlsRole`**-Eigenschaft des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Wörterbuchs ist ein String, der die Rolle der zugehörigen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) in der DTLS-Negotiation angibt.

Konkret, ob es wie ein Server agierte und auf Verbindungen wartete oder wie ein Client die Verbindung initiierte, oder ob die Negotiation noch nicht begonnen hat.

## Wert

Ein String, der die DTLS-Rolle angibt. Dies wird einer der folgenden sein:

- `client`
  - : Der Peer initiierte den DTLS-Handshake.
- `server`
  - : Der Peer wartete auf den DTLS-Handshake.
- `unknown`
  - : Die DTLS-Negotiation hat noch nicht begonnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
