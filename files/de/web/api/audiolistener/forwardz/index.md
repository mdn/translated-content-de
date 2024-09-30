---
title: "AudioListener: forwardZ-Eigenschaft"
short-title: forwardZ
slug: Web/API/AudioListener/forwardZ
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft `forwardZ` der Schnittstelle [`AudioListener`](/de/docs/Web/API/AudioListener) ist ein [`AudioParam`](/de/docs/Web/API/AudioParam), das den z-Wert des Richtungsvektors darstellt, der die Vorwärtsrichtung angibt, in die der Zuhörer zeigt.

> [!NOTE]
> Der Parameter ist _a-rate_, wenn er mit einem [`PannerNode`](/de/docs/Web/API/PannerNode) verwendet wird, dessen [`panningModel`](/de/docs/Web/API/PannerNode/panningModel) auf gleichmächtiges Panning eingestellt ist, oder _k-rate_ andernfalls.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam). Der Standardwert ist -1, und er kann zwischen positiver und negativer Unendlichkeit liegen.

## Beispiele

Siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
