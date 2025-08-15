---
title: "RTCInboundRtpStreamStats: totalAssemblyTime Eigenschaft"
short-title: totalAssemblyTime
slug: Web/API/RTCInboundRtpStreamStats/totalAssemblyTime
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`totalAssemblyTime`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die gesamte Zeit an, die mit dem Zusammenfügen erfolgreich dekodierter Videoframes verbracht wurde, die in mehreren RTP-Paketen transportiert wurden.

> [!NOTE]
> Der Wert ist für Audio-Streams nicht definiert.

## Wert

Eine Zahl, in Sekunden.

## Beschreibung

Die Eigenschaft wird aktualisiert, wann immer ein Videoframe, das in mehreren RTP-Paketen transportiert wurde, erfolgreich dekodiert wird.
Die Zeitdifferenz wird berechnet, indem der Zeitstempel des letzten und des ersten RTP-Pakets, das die Videodaten enthielt, subtrahiert wird.
Die Zeit wird nicht aktualisiert für Videoframes, die nicht dekodiert werden oder die vollständig in einem RTP-Paket transportiert werden.

Die durchschnittliche Zusammenfügungszeit kann ermittelt werden, indem `totalAssemblyTime` durch [`framesAssembledFromMultiplePackets`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets) dividiert wird.
Eine höhere durchschnittliche Zusammenfügungszeit könnte auf Netzwerkprobleme oder Ineffizienzen in der Empfangs-Pipeline hinweisen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
