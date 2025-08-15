---
title: "RTCInboundRtpStreamStats: jitterBufferMinimumDelay-Eigenschaft"
short-title: jitterBufferMinimumDelay
slug: Web/API/RTCInboundRtpStreamStats/jitterBufferMinimumDelay
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`jitterBufferMinimumDelay`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Dictionaries gibt die minimale {{Glossary("jitter", "Jitter-Puffer")}}-Verzögerung an, die unter Berücksichtigung der Netzwerkeigenschaften, wie Jitter und Paketverlust, erreicht werden kann.

Die Jitter-Puffer-Verzögerung kann durch Benutzereinstellungen wie [`RTCRtpReceiver.jitterBufferTarget`](/de/docs/Web/API/RTCRtpReceiver/jitterBufferTarget) und WebRTC-Mechanismen wie AV-Synchronisation beeinflusst werden.
`jitterBufferMinimumDelay` kann mit der [`jitterBufferTargetDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay) verglichen werden, um die Auswirkungen dieser externen Faktoren auf die Verzögerung zu untersuchen.

Die Eigenschaft wird aktualisiert, wenn [`jitterBufferEmittedCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferEmittedCount) aktualisiert wird.

## Wert

Eine positive Zahl, in Sekunden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`jitterBufferEmittedCount`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferEmittedCount)
- [`jitterBufferDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferDelay)
- [`jitterBufferTargetDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferTargetDelay)
