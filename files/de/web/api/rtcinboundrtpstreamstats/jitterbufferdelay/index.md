---
title: "RTCInboundRtpStreamStats: jitterBufferDelay Eigenschaft"
short-title: jitterBufferDelay
slug: Web/API/RTCInboundRtpStreamStats/jitterBufferDelay
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`jitterBufferDelay`** Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats) Wörterbuchs gibt die kumulierte Zeit an, die alle Audiodaten und vollständigen Videoframes im {{Glossary("jitter", "Jitter-Puffer")}} verbracht haben.

Für eine Audiodatenprobe wird die Zeit berechnet vom Zeitpunkt, an dem die Probe vom Jitter-Puffer empfangen wird („Ingest-Zeitstempel“), bis zu dem Zeitpunkt, an dem die Probe ausgegeben wird („Exit-Zeitstempel“).
Für einen Videoframe ist die Ingest-Zeit, wenn das erste Paket im Frame aufgenommen wurde, bis zu dem Zeitpunkt, an dem der gesamte Frame den Puffer verlässt.
Beachten Sie, dass mehrere Audiodatenproben in einem RTP-Paket denselben Ingest-Zeitstempel, aber unterschiedliche Exit-Zeitstempel haben, während ein Videoframe über mehrere RTP-Pakete verteilt sein kann.

`jitterBufferDelay` wird zusammen mit [`jitterBufferEmittedCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferEmittedCount) erhöht, wenn Proben oder Frames den Puffer verlassen.
Die durchschnittliche Jitter-Puffer-Verzögerung ist `jitterBufferDelay / jitterBufferEmittedCount`.

Der Jitter-Puffer kann Proben/Frames für eine längere (oder kürzere) Verzögerung halten, was es ermöglicht, dass sich Proben im Puffer ansammeln, um eine reibungslosere und kontinuierlichere Wiedergabe zu ermöglichen.
Eine niedrige und relativ konstante `jitterBufferDelay` ist wünschenswert, da sie anzeigt, dass der Puffer nicht so viele Frames/Proben halten muss und das Netzwerk stabil ist.
Höhere Werte könnten darauf hinweisen, dass das Netzwerk weniger zuverlässig oder vorhersehbar ist.

Ebenso weist eine gleichbleibende durchschnittliche Verzögerung auf ein stabileres Netzwerk hin, während eine steigende durchschnittliche Verzögerung auf zunehmende Latenz hinweist.

## Wert

Eine positive Zahl, in Sekunden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`jitterBufferEmittedCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferEmittedCount)
- [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferDelay)
- [`jitterBufferTargetDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay)
