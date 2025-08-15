---
title: "RTCInboundRtpStreamStats: jitterBufferEmittedCount-Eigenschaft"
short-title: jitterBufferEmittedCount
slug: Web/API/RTCInboundRtpStreamStats/jitterBufferEmittedCount
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`jitterBufferEmittedCount`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die Gesamtzahl der Audiobeispiele und/oder Videoframes an, die aus dem {{Glossary("jitter", "Jitter-Puffer")}} herausgekommen sind.

Die `jitterBufferEmittedCount` und [`jitterBufferDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferDelay) werden erhöht, wenn Proben oder Frames den Puffer verlassen.
Die durchschnittliche Jitter-Puffer-Verzögerung ist `jitterBufferDelay / jitterBufferEmittedCount`.

## Wert

Eine positive Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`jitterBufferDelay`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitterBufferDelay)
