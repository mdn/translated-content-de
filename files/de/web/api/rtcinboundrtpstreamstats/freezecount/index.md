---
title: "RTCInboundRtpStreamStats: freezeCount-Eigenschaft"
short-title: freezeCount
slug: Web/API/RTCInboundRtpStreamStats/freezeCount
l10n:
  sourceCommit: 5f8f306587fbe25beac0d0e9c9fbda366e372f14
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`freezeCount`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Dictionaries gibt die Gesamtzahl der von diesem Empfänger erlebten Video-Freezes an.

Ein Freeze wird gezählt, wenn das Intervall zwischen zwei gerenderten Frames gleich oder größer ist als das Größere von "drei Mal die durchschnittliche Dauer" oder "der Durchschnitt + 150 ms".
Dies stellt sicher, dass sich die Verzögerung, die erforderlich ist, um die Freeze-Anzahl zu erhöhen, angemessen mit der Bildrate skaliert.

> [!NOTE]
> Der Wert ist für Audiostreams undefiniert.

## Wert

Eine positive ganze Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`totalFreezesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalFreezesDuration)
