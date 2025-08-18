---
title: "RTCInboundRtpStreamStats: totalPausesDuration-Eigenschaft"
short-title: totalPausesDuration
slug: Web/API/RTCInboundRtpStreamStats/totalPausesDuration
l10n:
  sourceCommit: 5f8f306587fbe25beac0d0e9c9fbda366e372f14
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`totalPausesDuration`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs gibt die Gesamtzeit an, die das Video in diesem Stream pausiert verbracht hat, in Sekunden.

Eine Pause wird gezählt, wenn ein neuer Frame mehr als 5 Sekunden nach dem letzten gerenderten Frame gerendert wird, und die zwischen den Frames genommene Zeit wird zur `totalPausesDuration` hinzugefügt.

Die durchschnittliche Pausendauer kann mit `totalPausesDuration / pauseCount` berechnet werden.

> [!NOTE]
> Die Eigenschaft ist für Audiostreams undefiniert.

## Wert

Eine positive Zahl, in Sekunden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`pauseCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pauseCount)
