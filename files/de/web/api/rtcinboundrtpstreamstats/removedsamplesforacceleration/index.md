---
title: "RTCInboundRtpStreamStats: removedSamplesForAcceleration-Eigenschaft"
short-title: removedSamplesForAcceleration
slug: Web/API/RTCInboundRtpStreamStats/removedSamplesForAcceleration
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`removedSamplesForAcceleration`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Dictionaries addiert die Differenz zwischen der Anzahl der aus dem {{Glossary("jitter", "Jitter-Puffer")}} ausgegebenen und der während der beschleunigten Audiowiedergabe empfangenen Proben.

Der WebRTC Jitter-Puffer setzt ein Zielwiedergabeverzögerungsniveau, so dass der Ein- und Ausfluss des Jitter-Puffers ungefähr gleich sein sollte.
Wenn der Jitter-Puffer zu langsam leerläuft, könnte die nächste auszugebende Audio-Probe "hinterherhinken", und die Engine könnte die Wiedergabe beschleunigen, um aufzuholen.
Wenn die Engine die Wiedergabe beschleunigt, indem sie einige Audio-Proben entfernt, zeigt diese Eigenschaft die akkumulierte Anzahl solcher entfernter Proben an.

Das Beschleunigen oder Verlangsamen der Audioausgabe (wie mit [`insertedSamplesForDeceleration`](/de/docs/Web/API/RTCInboundRtpStreamStats/insertedSamplesForDeceleration) verfolgt) kann zu hörbaren Verzerrungen oder anderen Störungen führen.
Die Gesamtwerte am Ende des Anrufs geben Ihnen auch Hinweise darauf, wie viele Proben oder Sekunden betroffen waren, und `removedSamplesForAcceleration` kann mit [`totalSamplesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalSamplesReceived) korreliert werden, um ein relatives Maß der Beschleunigung zu erhalten.
Das Protokollieren von `insertedSamplesForDeceleration` und `removedSamplesForAcceleration` in Zeitabschnitten kann hilfreich sein, um die Zeiten zu isolieren, in denen das Problem auftrat, und Sie können dann andere Metriken im selben Zeitabschnitt korrelieren, um mögliche Ursachen zu ermitteln.

> [!NOTE]
> Der Wert ist für Videostreams nicht definiert.

## Wert

Eine positive ganze Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`insertedSamplesForDeceleration`](/de/docs/Web/API/RTCInboundRtpStreamStats/insertedSamplesForDeceleration)
- [Der bessere Weg](https://webrtchacks.com/how-webrtcs-neteq-jitter-buffer-provides-smooth-audio/#post-4560-_mv3ivinthkf5) in "How WebRTC's NetEQ Jitter Buffer Provides Smooth Audio" (webrtchacks.com, Juni 2025)
