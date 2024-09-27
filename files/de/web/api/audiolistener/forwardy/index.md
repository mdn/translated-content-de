---
title: "AudioListener: forwardY-Eigenschaft"
short-title: forwardY
slug: Web/API/AudioListener/forwardY
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft `forwardY` der Schnittstelle [`AudioListener`](/de/docs/Web/API/AudioListener) ist ein [`AudioParam`](/de/docs/Web/API/AudioParam), das den y-Wert des Richtungsvektors darstellt, der die Vorwärtsrichtung angibt, in die der Hörer zeigt.

> [!NOTE]
> Der Parameter ist _a-rate_, wenn er mit einem [`PannerNode`](/de/docs/Web/API/PannerNode) verwendet wird, dessen [`panningModel`](/de/docs/Web/API/PannerNode/panningModel) auf "equalpower" gesetzt ist, oder _k-rate_ in anderen Fällen.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam). Der Standardwert ist 0 und der Wertebereich reicht von positiv bis negativ unendlich.

## Beispiele

Siehe [BaseAudioContext.createPanner()](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
