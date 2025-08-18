---
title: "RTCInboundRtpStreamStats: pauseCount-Eigenschaft"
short-title: pauseCount
slug: Web/API/RTCInboundRtpStreamStats/pauseCount
l10n:
  sourceCommit: 5f8f306587fbe25beac0d0e9c9fbda366e372f14
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`pauseCount`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs gibt die Gesamtanzahl der Pausen an, die bei diesem Empfänger aufgetreten sind.

Eine Pause wird gezählt, wenn ein neues Bild mehr als 5 Sekunden nach dem letzten Bild gerendert wird.

Die durchschnittliche Pausendauer kann mit `totalPausesDuration / pauseCount` berechnet werden.

> [!NOTE]
> Die Eigenschaft ist für Audio-Streams nicht definiert.

## Wert

Eine positive ganze Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`totalPausesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalPausesDuration)
