---
title: "RTCInboundRtpStreamStats: jitterBufferDelay-Eigenschaft"
short-title: jitterBufferDelay
slug: Web/API/RTCInboundRtpStreamStats/jitterBufferDelay
l10n:
  sourceCommit: 74e7902b0875b6378d77df6d2d925a2d09d19f5d
---

{{APIRef("WebRTC")}}

Die **`jitterBufferDelay`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuches gibt die angesammelte Zeit an, die alle Audio-Samples und vollständigen Video-Frames im {{Glossary("jitter", "Jitter-Puffer")}} verbracht haben.

Für ein Audio-Sample wird die Zeit vom Zeitpunkt berechnet, zu dem das Sample vom Jitter-Puffer empfangen wird ("Ingest-Zeitstempel"), bis zu dem Zeitpunkt, an dem das Sample ausgegeben wird ("Exit-Zeitstempel").
Für ein Video-Frame ist die Ingest-Zeit der Zeitpunkt, an dem das erste Paket im Frame aufgenommen wird, bis zu dem Zeitpunkt, an dem das gesamte Frame den Puffer verlässt.
Es ist zu beachten, dass mehrere Audio-Samples in einem RTP-Paket denselben Ingest-Zeitstempel, aber unterschiedliche Exit-Zeitstempel haben können, während ein Video-Frame eventuell auf mehrere RTP-Pakete aufgeteilt wird.

`jitterBufferDelay` wird zusammen mit [`jitterBufferEmittedCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferEmittedCount) erhöht, wenn Samples oder Frames den Puffer verlassen.
Die durchschnittliche Jitter-Puffer-Verzögerung ist `jitterBufferDelay / jitterBufferEmittedCount`.

Der Jitter-Puffer kann Samples/Frames für eine längere (oder kürzere) Verzögerung halten, um Samples im Puffer aufzubauen, sodass eine gleichmäßige und kontinuierliche Wiedergabe ermöglicht wird.
Eine niedrige und relativ konstante `jitterBufferDelay` ist wünschenswert, da sie anzeigt, dass der Puffer nicht so viele Frames/Samples halten muss und das Netzwerk stabil ist.
Höhere Werte könnten darauf hindeuten, dass das Netzwerk weniger zuverlässig oder vorhersehbar ist.

Ebenso zeigt eine konstante durchschnittliche Verzögerung ein stabileres Netzwerk an, während eine steigende durchschnittliche Verzögerung auf zunehmende Latenz hindeutet.

## Wert

Eine positive Zahl, in Sekunden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`jitterBufferEmittedCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferEmittedCount)
- [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferMinimumDelay)
- [`jitterBufferTargetDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay)
