---
title: "AudioListener: positionY-Eigenschaft"
short-title: positionY
slug: Web/API/AudioListener/positionY
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft `positionY` der [`AudioListener`](/de/docs/Web/API/AudioListener)-Schnittstelle ist ein [`AudioParam`](/de/docs/Web/API/AudioParam), das die y-Position des Hörers im 3D-kartesischen Raum darstellt.

> [!NOTE]
> Der Parameter ist [_a-rate_](/de/docs/Web/API/AudioParam#a-rate), wenn er mit einem [`PannerNode`](/de/docs/Web/API/PannerNode) verwendet wird, dessen [`PannerNode`](/de/docs/Web/API/PannerNode/panningModel) auf equalpower gesetzt ist, oder [_k-rate_](/de/docs/Web/API/AudioParam#k-rate) ansonsten.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam). Der Standardwert ist 0, und er kann zwischen positiver und negativer Unendlichkeit variieren.

## Beispiele

Siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
