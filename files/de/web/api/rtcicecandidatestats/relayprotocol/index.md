---
title: "RTCIceCandidateStats: relayProtocol-Eigenschaft"
short-title: relayProtocol
slug: Web/API/RTCIceCandidateStats/relayProtocol
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`relayProtocol`**-Eigenschaft des [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Wörterbuchs gibt das Protokoll an, das von einem lokalen [ICE](/de/docs/Glossary/ICE)-Kandidaten genutzt wird, um mit dem [TURN](/de/docs/Glossary/TURN)-Server zu kommunizieren.

Das ICE-Protokoll, das sonst von dem Kandidaten verwendet wird, kann aus der [`protocol`](/de/docs/Web/API/RTCIceCandidateStats/protocol)-Eigenschaft abgerufen werden.

## Wert

Ein String, der das Protokoll identifiziert, das vom Endpunkt zur Kommunikation mit dem TURN-Server verwendet wird. Die möglichen Werte sind:

- `tcp`
  - : TCP (Transport Control Protocol) wird zur Kommunikation mit dem TURN-Server verwendet.
- `tls`
  - : TLS (Transport Layer Security) wird zur Kommunikation mit dem TURN-Server verwendet.
- `udp`
  - : UDP (User Datagram Protocol) wird zur Kommunikation mit dem TURN-Server verwendet.

> [!NOTE]
> Diese Eigenschaft ist nur in [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Objekten vorhanden, die lokale Kandidaten darstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
