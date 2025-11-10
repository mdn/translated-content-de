---
title: "RTCInboundRtpStreamStats: totalAssemblyTime-Eigenschaft"
short-title: totalAssemblyTime
slug: Web/API/RTCInboundRtpStreamStats/totalAssemblyTime
l10n:
  sourceCommit: f06142077fabbb1e0fe791d74b856ae4f8d058b4
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`totalAssemblyTime`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die Gesamtzeit an, die mit dem Zusammenstellen erfolgreich dekodierter Videoframes verbracht wurde, die in mehreren RTP-Paketen transportiert wurden.

> [!NOTE]
> Der Wert ist für Audiostreams nicht definiert.

## Wert

Eine Zahl, in Sekunden.

## Beschreibung

Die Eigenschaft wird aktualisiert, wann immer ein Videoframe, das in mehreren RTP-Paketen transportiert wurde, erfolgreich dekodiert wird.
Die Zeitspanne wird berechnet, indem der Zeitstempel des letzten und des ersten RTP-Pakets subtrahiert wird, das die Videoframe-Daten enthielt.
Die Zeit wird nicht aktualisiert für Videoframes, die nicht dekodiert werden oder die vollständig innerhalb eines RTP-Pakets transportiert werden.

Die durchschnittliche Zusammenstellungszeit kann bestimmt werden, indem `totalAssemblyTime` durch [`framesAssembledFromMultiplePackets`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets) geteilt wird.
Eine höhere durchschnittliche Zusammenstellungszeit könnte auf Netzwerkprobleme oder Ineffizienzen in der Empfangspipeline hinweisen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
