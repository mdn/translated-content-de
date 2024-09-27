---
title: "AudioListener: upY-Eigenschaft"
short-title: upY
slug: Web/API/AudioListener/upY
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die `upY`-Eigenschaft des [`AudioListener`](/de/docs/Web/API/AudioListener)-Interfaces ist eine schreibgeschützte [`AudioParam`](/de/docs/Web/API/AudioParam), die den y-Wert des Richtungsvektors darstellt, der die Aufwärtsrichtung definiert, in die der Zuhörer zeigt.

> [!NOTE]
> Der Parameter ist _a-rate_, wenn er mit einem [`PannerNode`](/de/docs/Web/API/PannerNode) verwendet wird, dessen [`PannerNode`](/de/docs/Web/API/PannerNode/panningModel) auf equalpower gesetzt ist, oder sonst _k-rate_.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam). Der Standardwert ist 1, und er kann zwischen positivem und negativem Unendlichkeit variieren.

## Beispiele

Siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
