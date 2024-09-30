---
title: "AudioListener: forwardX-Eigenschaft"
short-title: forwardX
slug: Web/API/AudioListener/forwardX
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft `forwardX` des [`AudioListener`](/de/docs/Web/API/AudioListener)-Interfaces ist ein [`AudioParam`](/de/docs/Web/API/AudioParam), das den x-Wert des Richtungsvektors darstellt, welcher die Vorwärtsrichtung definiert, in die der Zuhörer zeigt.

> [!NOTE]
> Der Parameter ist _a-rate_, wenn er mit einem [`PannerNode`](/de/docs/Web/API/PannerNode) verwendet wird, dessen [`panningModel`](/de/docs/Web/API/PannerNode/panningModel) auf equalpower gesetzt ist, oder _k-rate_ anderweitig.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam). Der Standardwert ist 0 und er kann zwischen positiv und negativ unendlich variieren.

## Beispiele

Siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
