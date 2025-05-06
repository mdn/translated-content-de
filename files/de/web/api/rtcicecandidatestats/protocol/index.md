---
title: "RTCIceCandidateStats: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/RTCIceCandidateStats/protocol
l10n:
  sourceCommit: ef82d981d563626248276acbf9516aac7445d4fa
---

{{APIRef("WebRTC")}}

Die **`protocol`**-Eigenschaft des [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Wörterbuchs gibt das Protokoll an, das der spezifizierte Kandidat für die Kommunikation mit dem entfernten Peer verwenden würde.

## Wert

Der Wert ist einer der folgenden Zeichenfolgen:

- `tcp`
  - : Der Kandidat würde, wenn ausgewählt, {{Glossary("TCP", "TCP")}} als Transportprotokoll für seine Daten verwenden.
    Die [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType)-Eigenschaft liefert zusätzliche Informationen über die Art des durch das Objekt repräsentierten TCP-Kandidaten.
- `udp`
  - : Der Kandidat wird das {{Glossary("UDP", "UDP")}}-Transportprotokoll für seine Daten verwenden.
    Dies ist das bevorzugte Protokoll für Medieninteraktionen aufgrund seines besseren Leistungsprofils.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
