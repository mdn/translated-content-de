---
title: "RTCIceCandidateStats: relayProtocol-Eigenschaft"
short-title: relayProtocol
slug: Web/API/RTCIceCandidateStats/relayProtocol
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`relayProtocol`**-Eigenschaft des [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Wörterbuchs gibt das Protokoll an, das von einem lokalen [ICE](/de/docs/Glossary/ICE)-Kandidaten verwendet wird, um mit dem [TURN](/de/docs/Glossary/TURN)-Server zu kommunizieren.

Das ansonsten von dem Kandidaten verwendete ICE-Protokoll kann von der
[`protocol`](/de/docs/Web/API/RTCIceCandidateStats/protocol)-Eigenschaft abgeleitet werden.

## Wert

Ein String, der das Protokoll angibt, das von dem Endpunkt zur Kommunikation mit dem TURN-Server verwendet wird. Die möglichen Werte sind:

- `tcp`
  - : TCP (Transport Control Protocol) wird verwendet, um mit dem TURN-Server zu kommunizieren.
- `tls`
  - : TLS (Transport Layer Security) wird verwendet, um mit dem TURN-Server zu kommunizieren.
- `udp`
  - : UDP (User Datagram Protocol) wird verwendet, um mit dem TURN-Server zu kommunizieren.

> [!NOTE]
> Diese Eigenschaft ist nur auf
> [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Objekten vorhanden, die lokale Kandidaten repräsentieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
