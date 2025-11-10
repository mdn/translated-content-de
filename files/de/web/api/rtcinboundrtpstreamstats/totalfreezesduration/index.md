---
title: "RTCInboundRtpStreamStats: totalFreezesDuration Eigenschaft"
short-title: totalFreezesDuration
slug: Web/API/RTCInboundRtpStreamStats/totalFreezesDuration
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die Eigenschaft **`totalFreezesDuration`** des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs gibt die gesamte Zeit an, die das Video in diesem Stream eingefroren war, in Sekunden.

Ein Freeze wird gezählt, wenn das Intervall zwischen zwei gerenderten Frames gleich oder größer ist als die größere der beiden Zeiten: "dreimal die durchschnittliche Dauer" oder "der Durchschnitt + 150 ms". Die zwischen den Frames benötigte Zeit wird zur `totalFreezesDuration` addiert.

Die durchschnittliche Einfrierdauer kann mit `totalFreezesDuration / freezeCount` berechnet werden.

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
