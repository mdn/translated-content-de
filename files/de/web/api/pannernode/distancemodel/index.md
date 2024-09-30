---
title: "PannerNode: distanceModel-Eigenschaft"
short-title: distanceModel
slug: Web/API/PannerNode/distanceModel
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{ APIRef("Web Audio API") }}

Die `distanceModel`-Eigenschaft der [`PannerNode`](/de/docs/Web/API/PannerNode)-Schnittstelle ist ein enumerierter Wert, der festlegt, welcher Algorithmus verwendet wird, um die Lautstärke der Audioquelle zu reduzieren, wenn sie sich vom Hörer entfernt.

Die möglichen Werte sind:

- `linear`: Ein _lineares Distanzmodell_, das die durch die Entfernung induzierte Verstärkung wie folgt berechnet:
  `1 - rolloffFactor * (distance - refDistance) / (maxDistance - refDistance)`
- `inverse`: Ein _inverses Distanzmodell_, das die durch die Entfernung induzierte Verstärkung wie folgt berechnet:
  `refDistance / (refDistance + rolloffFactor * (Math.max(distance, refDistance) - refDistance))`
- `exponential`: Ein _exponentielles Distanzmodell_, das die durch die Entfernung induzierte Verstärkung wie folgt berechnet:
  `pow((Math.max(distance, refDistance) / refDistance, -rolloffFactor)`.

`inverse` ist der Standardwert von `distanceModel`.

## Wert

Ein Enum — siehe [`DistanceModelType`](https://webaudio.github.io/web-audio-api/#idl-def-DistanceModelType).

## Beispiele

Siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Raumklanggestaltung](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
