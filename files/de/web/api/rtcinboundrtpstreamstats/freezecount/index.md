---
title: "RTCInboundRtpStreamStats: freezeCount-Eigenschaft"
short-title: freezeCount
slug: Web/API/RTCInboundRtpStreamStats/freezeCount
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`freezeCount`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats) Wörterbuchs gibt die Gesamtanzahl der Video-Freezes an, die von diesem Empfänger erlebt wurden.

Ein Freeze wird gezählt, wenn das Intervall zwischen zwei gerenderten Frames gleich oder größer ist als das größere von "dreimal die durchschnittliche Dauer" oder "der Durchschnitt + 150ms".
Dies stellt sicher, dass die Verzögerung, die erforderlich ist, um die Freeze-Zahl zu erhöhen, sich angemessen mit der Bildrate skaliert.

> [!NOTE]
> Der Wert ist für Audiostreams nicht definiert.

## Wert

Eine positive Ganzzahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`totalFreezesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalFreezesDuration)
