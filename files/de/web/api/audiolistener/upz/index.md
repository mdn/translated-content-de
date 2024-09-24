---
title: "AudioListener: Eigenschaft upZ"
short-title: upZ
slug: Web/API/AudioListener/upZ
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft `upZ` der {{ domxref("AudioListener") }}-Schnittstelle ist ein {{domxref("AudioParam")}}, das den z-Wert des Richtungsvektors darstellt, der die Richtung definiert, in die der Hörer weist.

> [!NOTE]
> Der Parameter ist _a-rate_, wenn er mit einem {{domxref("PannerNode")}} verwendet wird, dessen {{domxref("PannerNode.panningModel", "PannerNode")}} auf "equalpower" eingestellt ist, oder _k-rate_ in anderen Fällen.

## Wert

Ein {{domxref("AudioParam")}}. Sein Standardwert ist 0, und er kann zwischen positiv und negativ unendlich variieren.

## Beispiele

Siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
