---
title: "AudioListener: upX-Eigenschaft"
short-title: upX
slug: Web/API/AudioListener/upX
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die `upX`-Eigenschaft des [`AudioListener`](/de/docs/Web/API/AudioListener)-Interfaces ist ein [`AudioParam`](/de/docs/Web/API/AudioParam), das den x-Wert des Richtungsvektors darstellt, welcher die Richtung definiert, in die der Listener zeigt.

> [!NOTE]
> Der Parameter ist _a-rate_, wenn er mit einem [`PannerNode`](/de/docs/Web/API/PannerNode) verwendet wird, dessen [`PannerNode`](/de/docs/Web/API/PannerNode/panningModel) auf "equalpower" gesetzt ist, oder _k-rate_ ansonsten.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam). Sein Standardwert ist 0, und er kann im Bereich von positiver bis negativer Unendlichkeit liegen.

## Beispiele

Für ausführlicheren Beispielcode siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
