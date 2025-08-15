---
title: "RTCInboundRtpStreamStats: jitterBufferTargetDelay-Eigenschaft"
short-title: jitterBufferTargetDelay
slug: Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`jitterBufferTargetDelay`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die akkumulierte Zielverzögerung des {{Glossary("jitter", "Jitter-Puffers")}} in Sekunden an.

Die Zielverzögerung des Jitter-Puffers ist die Wiedergabeverzögerung, die der Jitter-Puffer benötigt, um Schwankungen auszugleichen und eine reibungslose Wiedergabe zu gewährleisten. Diese Schätzung wird von der Variabilität und Latenz des Netzwerks sowie von Mechanismen wie AV-Synchronisierung beeinflusst. Entwickler können sie beeinflussen, indem sie die [`RTCRtpReceiver.jitterBufferTarget`](/de/docs/Web/API/RTCRtpReceiver/jitterBufferTarget)-Eigenschaft festlegen.

Die Eigenschaft wird aktualisiert, wenn [`jitterBufferEmittedCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferEmittedCount) aktualisiert wird. Die durchschnittliche Zielverzögerung des Jitter-Puffers ist `jitterBufferTargetDelay / jitterBufferEmittedCount`.

Die Eigenschaft kann mit dem Durchschnitt der [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay) verglichen werden, um die Auswirkungen externer Faktoren auf das Ziel zu bestimmen, wie z. B. den konfigurierten `jitterBufferTarget`-Hinweis.

## Wert

Eine positive Zahl, in Sekunden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`jitterBufferEmittedCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferEmittedCount)
- [`jitterBufferMinimumDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay)
- [`jitterBufferDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferDelay)
