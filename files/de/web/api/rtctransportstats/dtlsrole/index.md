---
title: "RTCTransportStats: dtlsRole Eigenschaft"
short-title: dtlsRole
slug: Web/API/RTCTransportStats/dtlsRole
l10n:
  sourceCommit: 185acd0fe4bd6d0f4a5c6d79fa46b1b748d09ea1
---

{{APIRef("WebRTC")}}

Die **`dtlsRole`**-Eigenschaft des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) Wörterbuchs ist ein String, der die Rolle der zugehörigen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) in der DTLS-Verhandlung angibt.

Genauer gesagt, ob es als Server fungierte und Verbindungen abhörte, als Client fungierte und die Verbindung initiierte, oder dass die Verhandlung noch nicht begonnen hat.

## Wert

Ein String, der die DTLS-Rolle angibt.
Dieser wird einer der folgenden sein:

- `client`
  - : Der Peer hat das DTLS-Handshake initiiert.
- `server`
  - : Der Peer hat auf das DTLS-Handshake gewartet.
- `unknown`
  - : Die DTLS-Verhandlung hat noch nicht begonnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
