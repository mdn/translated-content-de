---
title: "AudioListener: forwardY-Eigenschaft"
short-title: forwardY
slug: Web/API/AudioListener/forwardY
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft `forwardY` des [`AudioListener`](/de/docs/Web/API/AudioListener)-Interfaces ist ein [`AudioParam`](/de/docs/Web/API/AudioParam), das den y-Wert des Richtungsvektors darstellt, der die Vorwärtsrichtung definiert, in die der Zuhörer zeigt.

> [!NOTE]
> Der Parameter ist _a-rate_, wenn er mit einem [`PannerNode`](/de/docs/Web/API/PannerNode) verwendet wird, dessen [`panningModel`](/de/docs/Web/API/PannerNode/panningModel) auf gleichmäßige Leistung (equalpower) eingestellt ist, oder _k-rate_ in anderen Fällen.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam). Sein Standardwert ist 0, und er kann zwischen positiver und negativer Unendlichkeit variieren.

## Beispiele

Siehe [BaseAudioContext.createPanner()](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
