---
title: "RTCInboundRtpStreamStats: totalPausesDuration-Eigenschaft"
short-title: totalPausesDuration
slug: Web/API/RTCInboundRtpStreamStats/totalPausesDuration
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`totalPausesDuration`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs gibt die gesamte Zeit an, die das Video in diesem Stream pausiert wurde, in Sekunden.

Eine Pause wird gezählt, wenn ein neuer Frame mehr als 5 Sekunden nach dem letzten Frame gerendert wird, und die Zeit, die zwischen den Frames vergeht, wird zur `totalPausesDuration` hinzugefügt.

Die durchschnittliche Pausendauer kann mittels `totalPausesDuration / pauseCount` berechnet werden.

> [!NOTE]
> Die Eigenschaft ist undefiniert für Audiostreams.

## Wert

Eine positive Zahl, in Sekunden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`pauseCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pauseCount)
