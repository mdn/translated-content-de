---
title: "RTCInboundRtpStreamStats: jitterBufferTargetDelay Eigenschaft"
short-title: jitterBufferTargetDelay
slug: Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay
l10n:
  sourceCommit: 74e7902b0875b6378d77df6d2d925a2d09d19f5d
---

{{APIRef("WebRTC")}}

Die **`jitterBufferTargetDelay`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats) Wörterbuchs gibt die akkumulierte Ziel-Jitter-Puffer-Verzögerung in Sekunden an.

Die Ziel-Jitter-Puffer-Verzögerung ist die Wiedergabeverzögerung, die der Jitter-Puffer schätzt, dass er benötigt, um Jitter auszugleichen und eine reibungslose Wiedergabe zu gewährleisten.
Die Schätzung wird durch Netzwerkvariabilität und Latenz sowie durch Mechanismen wie AV-Synchronisation beeinflusst. Entwickler können darauf Einfluss nehmen, indem sie die [`RTCRtpReceiver.jitterBufferTarget`](/de/docs/Web/API/RTCRtpReceiver/jitterBufferTarget)-Eigenschaft festlegen.

Die Eigenschaft wird aktualisiert, wenn [`jitterBufferEmittedCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferEmittedCount) aktualisiert wird.
Die durchschnittliche Ziel-Jitter-Puffer-Verzögerung ist `jitterBufferTargetDelay / jitterBufferEmittedCount`.

Die Eigenschaft kann mit dem Durchschnitt der [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferMinimumDelay) verglichen werden, um die Auswirkungen externer Faktoren auf das Ziel zu bestimmen, wie zum Beispiel der konfigurierte `jitterBufferTarget`-Hinweis.

## Wert

Eine positive Zahl, in Sekunden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`jitterBufferEmittedCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferEmittedCount)
- [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferMinimumDelay)
- [`jitterBufferDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferDelay)
