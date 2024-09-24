---
title: "RTCIceCandidateStats: Protokoll-Eigenschaft"
short-title: Protokoll
slug: Web/API/RTCIceCandidateStats/protocol
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("WebRTC")}}

Die **`protocol`**-Eigenschaft des {{domxref("RTCIceCandidateStats")}}-Wörterbuchs gibt das Protokoll an, das der angegebene Kandidat für die Kommunikation mit dem entfernten Peer verwenden würde.

## Wert

Der Wert ist einer der folgenden Strings:

- `tcp`
  - : Der Kandidat würde, wenn ausgewählt, {{Glossary("TCP")}} als Transportprotokoll für seine Daten verwenden. Die Eigenschaft {{domxref("RTCIceCandidate.tcpType", "tcpType")}} liefert zusätzliche Informationen über die Art des durch das Objekt dargestellten TCP-Kandidaten.
- `udp`
  - : Der Kandidat wird das Transportprotokoll {{Glossary("UDP")}} für seine Daten nutzen. Dies ist das bevorzugte Protokoll für Medieninteraktionen aufgrund seines besseren Leistungsprofils.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
