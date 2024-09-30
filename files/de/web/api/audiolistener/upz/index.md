---
title: "AudioListener: upZ-Eigenschaft"
short-title: upZ
slug: Web/API/AudioListener/upZ
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte `upZ`-Eigenschaft der [`AudioListener`](/de/docs/Web/API/AudioListener)-Schnittstelle ist ein [`AudioParam`](/de/docs/Web/API/AudioParam), das den z-Wert des Richtungsvektors darstellt, der die Richtung definiert, in die der Hörer zeigt.

> [!NOTE]
> Der Parameter hat die _a-rate_, wenn er mit einem [`PannerNode`](/de/docs/Web/API/PannerNode) verwendet wird, dessen [`PannerNode`](/de/docs/Web/API/PannerNode/panningModel) auf equalpower eingestellt ist, ansonsten die _k-rate_.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam). Sein Standardwert ist 0 und er kann zwischen positiver und negativer Unendlichkeit liegen.

## Beispiele

Siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
