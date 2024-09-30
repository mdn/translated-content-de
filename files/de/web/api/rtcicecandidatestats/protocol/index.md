---
title: "RTCIceCandidateStats: Eigenschaft protocol"
short-title: protocol
slug: Web/API/RTCIceCandidateStats/protocol
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("WebRTC")}}

Die **`protocol`**-Eigenschaft des [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Wörterbuchs gibt das Protokoll an, das der angegebene Kandidat für die Kommunikation mit dem entfernten Peer verwenden würde.

## Wert

Der Wert ist einer der folgenden Strings:

- `tcp`
  - : Der Kandidat würde, falls ausgewählt, [TCP](/de/docs/Glossary/TCP) als Transportprotokoll für seine Daten verwenden. Die [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType)-Eigenschaft liefert zusätzliche Informationen über die Art des TCP-Kandidaten, der durch das Objekt dargestellt wird.
- `udp`
  - : Der Kandidat wird das [UDP](/de/docs/Glossary/UDP)-Transportprotokoll für seine Daten verwenden. Dies ist das bevorzugte Protokoll für Medieninteraktionen, da es ein besseres Leistungsprofil bietet. 

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
