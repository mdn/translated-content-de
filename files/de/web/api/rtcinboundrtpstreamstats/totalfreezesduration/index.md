---
title: "RTCInboundRtpStreamStats: Eigenschaft totalFreezesDuration"
short-title: totalFreezesDuration
slug: Web/API/RTCInboundRtpStreamStats/totalFreezesDuration
l10n:
  sourceCommit: 5f8f306587fbe25beac0d0e9c9fbda366e372f14
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`totalFreezesDuration`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs gibt die gesamte Zeit an, die das Video in diesem Stream eingefroren war, in Sekunden.

Ein Einfrieren wird gezählt, wenn das Intervall zwischen zwei gerenderten Frames gleich oder größer ist als der größere Wert von „drei Mal die durchschnittliche Dauer“ oder „der Durchschnitt + 150 ms“, und die zwischen den Frames benötigte Zeit wird zur `totalFreezesDuration` hinzugefügt.

Die durchschnittliche Dauer des Einfrierens kann berechnet werden mit `totalFreezesDuration / freezeCount`.

> [!NOTE]
> Die Eigenschaft ist für Audioströme nicht definiert.

## Wert

Eine positive Zahl, in Sekunden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`freezeCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/freezeCount)
