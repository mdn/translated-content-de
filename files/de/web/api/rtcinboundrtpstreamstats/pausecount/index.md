---
title: "RTCInboundRtpStreamStats: pauseCount-Eigenschaft"
short-title: pauseCount
slug: Web/API/RTCInboundRtpStreamStats/pauseCount
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`pauseCount`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Verzeichnisses gibt die Gesamtzahl der Pausen an, die dieser Empfänger erlebt hat.

Eine Pause wird gezählt, wenn ein neues Bild mehr als 5 Sekunden nach dem letzten gerenderten Bild gerendert wird.

Die durchschnittliche Pausendauer kann berechnet werden mit `totalPausesDuration / pauseCount`.

> [!NOTE]
> Die Eigenschaft ist für Audiostreams nicht definiert.

## Wert

Eine positive Ganzzahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`totalPausesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalPausesDuration)
