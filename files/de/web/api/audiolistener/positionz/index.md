---
title: "AudioListener: positionZ-Eigenschaft"
short-title: positionZ
slug: Web/API/AudioListener/positionZ
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte `positionZ`-Eigenschaft der [`AudioListener`](/de/docs/Web/API/AudioListener)-Schnittstelle ist ein [`AudioParam`](/de/docs/Web/API/AudioParam), das die z-Position des Listeners im dreidimensionalen kartesischen Raum darstellt.

> [!NOTE]
> Der Parameter ist [_a-rate_](/de/docs/Web/API/AudioParam#a-rate), wenn er mit einem [`PannerNode`](/de/docs/Web/API/PannerNode) verwendet wird, dessen [`PannerNode`](/de/docs/Web/API/PannerNode/panningModel) auf equalpower eingestellt ist, oder ansonsten [_k-rate_](/de/docs/Web/API/AudioParam#k-rate).

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam). Sein Standardwert ist 0, und er kann zwischen posiver und negativer Unendlichkeit variieren.

## Beispiele

Siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für ein Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
