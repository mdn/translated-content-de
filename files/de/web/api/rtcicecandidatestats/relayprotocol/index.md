---
title: "RTCIceCandidateStats: relayProtocol-Eigenschaft"
short-title: relayProtocol
slug: Web/API/RTCIceCandidateStats/relayProtocol
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`relayProtocol`**-Eigenschaft des {{domxref("RTCIceCandidateStats")}}-Dictionaries gibt das Protokoll an, das von einem lokalen {{Glossary("ICE")}}-Kandidaten zur Kommunikation mit dem {{Glossary("TURN")}}-Server verwendet wird.

Das ansonsten von dem Kandidaten verwendete ICE-Protokoll kann über die {{domxref("RTCIceCandidateStats.protocol", "protocol")}}-Eigenschaft abgerufen werden.

## Wert

Ein String, der das Protokoll identifiziert, das vom Endpunkt zur Kommunikation mit dem TURN-Server verwendet wird. Die möglichen Werte sind:

- `tcp`
  - : TCP (Transport Control Protocol) wird zur Kommunikation mit dem TURN-Server verwendet.
- `tls`
  - : TLS (Transport Layer Security) wird zur Kommunikation mit dem TURN-Server verwendet.
- `udp`
  - : UDP (User Datagram Protocol) wird zur Kommunikation mit dem TURN-Server verwendet.

> [!NOTE]
> Diese Eigenschaft ist nur auf {{domxref("RTCIceCandidateStats")}}-Objekten vorhanden, die lokale Kandidaten repräsentieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
