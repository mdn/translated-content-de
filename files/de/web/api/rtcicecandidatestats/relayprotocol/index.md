---
title: "RTCIceCandidateStats: relayProtocol-Eigenschaft"
short-title: relayProtocol
slug: Web/API/RTCIceCandidateStats/relayProtocol
l10n:
  sourceCommit: 7c03abf6c6abaf0013f6606cae9cb97717415cce
---

{{APIRef("WebRTC")}}

Die **`relayProtocol`**-Eigenschaft des [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Wörterbuchs gibt das Protokoll an, das von einem lokalen {{Glossary("ICE", "ICE")}}-Kandidaten verwendet wird, um mit dem {{Glossary("TURN", "TURN")}}-Server zu kommunizieren.

Das von dem Kandidaten verwendete ICE-Protokoll kann ansonsten aus der [`protocol`](/de/docs/Web/API/RTCIceCandidateStats/protocol)-Eigenschaft abgerufen werden.

## Wert

Ein String, der das Protokoll identifiziert, das von dem Endpunkt verwendet wird, um mit dem TURN-Server zu kommunizieren. Die möglichen Werte sind:

- `tcp`
  - : TCP (Transport Control Protocol) wird verwendet, um mit dem TURN-Server zu kommunizieren.
- `tls`
  - : TLS (Transport Layer Security) wird verwendet, um mit dem TURN-Server zu kommunizieren.
- `udp`
  - : UDP (User Datagram Protocol) wird verwendet, um mit dem TURN-Server zu kommunizieren.

> [!NOTE]
> Diese Eigenschaft ist nur in [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Objekten vorhanden, die lokale Kandidaten repräsentieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
