---
title: "RTCInboundRtpStreamStats: Eigenschaft insertedSamplesForDeceleration"
short-title: insertedSamplesForDeceleration
slug: Web/API/RTCInboundRtpStreamStats/insertedSamplesForDeceleration
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`insertedSamplesForDeceleration`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs akkumuliert die Differenz zwischen der Anzahl der empfangenen Samples und der Anzahl der aus dem {{Glossary("jitter", "Jitter-Puffer")}} abgespielten Samples, während die Audiowiedergabe verlangsamt wird.

Der WebRTC-Jitter-Puffer legt ein Ziel-Playout-Verzögerungsniveau fest, sodass der Ein- und Ausfluss des Jitter-Puffers ungefähr gleich sein sollten. Wenn der Jitter-Puffer zu schnell leer wird, könnte das nächste zur Ausgabe anstehende Audiosample „vor dem Zeitplan“ liegen, und der Jitter-Puffer könnte die Wiedergabe verlangsamen. Wenn der Jitter-Puffer die Wiedergabe des Samples durch Einfügen zusätzlicher Audiosamples verlangsamt, gibt diese Eigenschaft die akkumulierte Anzahl solcher hinzugefügter Samples an.

Das Verlangsamen und/oder Beschleunigen des Audios (wie mit [`removedSamplesForAcceleration`](/de/docs/Web/API/RTCInboundRtpStreamStats/removedSamplesForAcceleration) verfolgt) kann zu hörbarem „Warbling“ oder anderen Verzerrungen führen. Die Summen am Ende des Anrufs geben Ihnen auch einige Hinweise darauf, wie viele Samples oder Sekunden betroffen waren, und `insertedSamplesForDeceleration` kann mit [`totalSamplesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalSamplesReceived) korreliert werden, um ein relatives Maß der Verzögerung zu erhalten. Das Protokollieren von `insertedSamplesForDeceleration` und `removedSamplesForAcceleration` in Zeitscheiben kann hilfreich sein, um die Zeiten zu isolieren, zu denen das Problem auftrat, und Sie können dann andere Metriken in derselben Zeitscheibe korrelieren, um wahrscheinliche Ursachen zu ermitteln.

> [!NOTE]
> Der Wert ist für Videostreams nicht definiert.

## Wert

Eine positive Ganzzahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`removedSamplesForAcceleration`](/de/docs/Web/API/RTCInboundRtpStreamStats/removedSamplesForAcceleration)
- [Die bessere Methode](https://webrtchacks.com/how-webrtcs-neteq-jitter-buffer-provides-smooth-audio/#post-4560-_mv3ivinthkf5) in "How WebRTC's NetEQ Jitter Buffer Provides Smooth Audio" (webrtchacks.com, Juni 2025)
