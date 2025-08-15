---
title: "RTCInboundRtpStreamStats: Eigenschaft totalFreezesDuration"
short-title: totalFreezesDuration
slug: Web/API/RTCInboundRtpStreamStats/totalFreezesDuration
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`totalFreezesDuration`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs gibt die Gesamtzeit an, die das Video in diesem Stream eingefroren verbracht hat, in Sekunden.

Ein Einfrieren wird gezählt, wenn das Intervall zwischen zwei gerenderten Frames gleich oder größer ist als das größere von "dreimal die durchschnittliche Dauer" oder "der Durchschnitt + 150ms", und die Zeit zwischen den Frames wird zur `totalFreezesDuration` hinzugefügt.

Die durchschnittliche Einfrierdauer kann berechnet werden mit `totalFreezesDuration / freezeCount`.

> [!NOTE]
> Die Eigenschaft ist für Audiostreams undefiniert.

## Wert

Eine positive Zahl in Sekunden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`freezeCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/freezeCount)
