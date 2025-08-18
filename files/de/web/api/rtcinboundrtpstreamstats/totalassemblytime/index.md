---
title: "RTCInboundRtpStreamStats: totalAssemblyTime-Eigenschaft"
short-title: totalAssemblyTime
slug: Web/API/RTCInboundRtpStreamStats/totalAssemblyTime
l10n:
  sourceCommit: 5f8f306587fbe25beac0d0e9c9fbda366e372f14
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`totalAssemblyTime`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Dictionaries gibt die gesamte Zeit an, die für das Zusammenstellen von erfolgreich decodierten Videoframes aufgewendet wurde, die in mehreren RTP-Paketen transportiert wurden.

> [!NOTE]
> Der Wert ist für Audiostreams undefiniert.

## Wert

Eine Zahl, in Sekunden.

## Beschreibung

Die Eigenschaft wird aktualisiert, wann immer ein Videoframe, das in mehreren RTP-Paketen transportiert wurde, erfolgreich decodiert wird. Der Zeitinkrement wird berechnet, indem der Zeitstempel des letzten und des ersten RTP-Pakets, das die Videodaten enthielt, subtrahiert wird. Die Zeit wird nicht für Videoframes aktualisiert, die nicht decodiert werden oder die vollständig innerhalb eines RTP-Pakets transportiert werden.

Die durchschnittliche Zusammenstellungszeit kann ermittelt werden, indem `totalAssemblyTime` durch [`framesAssembledFromMultiplePackets`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets) geteilt wird. Eine höhere durchschnittliche Zusammenstellungszeit kann auf Netzwerkprobleme oder Ineffizienzen in der Empfangspipeline hinweisen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
