---
title: "AudioListener: upX-Eigenschaft"
short-title: upX
slug: Web/API/AudioListener/upX
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft `upX` des [`AudioListener`](/de/docs/Web/API/AudioListener)-Interfaces ist ein [`AudioParam`](/de/docs/Web/API/AudioParam), das den x-Wert des Richtungsvektors darstellt, der die Aufwärtsrichtung angibt, in die der Zuhörer zeigt.

> [!NOTE]
> Der Parameter ist _a-rate_, wenn er mit einem [`PannerNode`](/de/docs/Web/API/PannerNode) verwendet wird, dessen [`panningModel`](/de/docs/Web/API/PannerNode/panningModel) auf equalpower gesetzt ist, oder _k-rate_ anderweitig.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam). Sein Standardwert ist 0 und er kann zwischen positiver und negativer Unendlichkeit variieren.

## Beispiele

Für ausführlichere Beispielcodes siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
