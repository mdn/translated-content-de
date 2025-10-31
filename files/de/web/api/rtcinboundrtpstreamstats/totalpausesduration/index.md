---
title: "RTCInboundRtpStreamStats: totalPausesDuration-Eigenschaft"
short-title: totalPausesDuration
slug: Web/API/RTCInboundRtpStreamStats/totalPausesDuration
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`totalPausesDuration`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs gibt die gesamte Zeit an, die das Video in diesem Stream pausiert war, in Sekunden.

Eine Pause wird gezählt, wenn ein neuer Frame mehr als 5 Sekunden nach dem letzten Frame gerendert wird, und die zwischen den Frames benötigte Zeit wird der `totalPausesDuration` hinzugefügt.

Die durchschnittliche Pausendauer kann berechnet werden mit `totalPausesDuration / pauseCount`.

> [!NOTE]
> Die Eigenschaft ist für Audiostreams nicht definiert.

## Wert

Eine positive Zahl, in Sekunden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`pauseCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/pauseCount)
