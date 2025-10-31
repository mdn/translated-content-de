---
title: "RTCInboundRtpStreamStats: pauseCount-Eigenschaft"
short-title: pauseCount
slug: Web/API/RTCInboundRtpStreamStats/pauseCount
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`pauseCount`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs gibt die Gesamtzahl der vom Empfänger erlebten Pausen an.

Eine Pause wird gezählt, wenn ein neues Frame mehr als 5 Sekunden nach dem letzten gerenderten Frame angezeigt wird.

Die durchschnittliche Pausendauer kann mit `totalPausesDuration / pauseCount` berechnet werden.

> [!NOTE]
> Die Eigenschaft ist für Audiostreams nicht definiert.

## Wert

Eine positive ganze Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`totalPausesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalPausesDuration)
