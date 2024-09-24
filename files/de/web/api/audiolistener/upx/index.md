---
title: "AudioListener: upX-Eigenschaft"
short-title: upX
slug: Web/API/AudioListener/upX
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft `upX` der {{ domxref("AudioListener") }}-Schnittstelle ist ein {{domxref("AudioParam")}}, das den x-Wert des Richtungsvektors darstellt, der die Richtung angibt, in die der Zuhörer zeigt.

> [!NOTE]
> Der Parameter ist _a-rate_, wenn er mit einem {{domxref("PannerNode")}} verwendet wird, dessen {{domxref("PannerNode.panningModel", "PannerNode")}} auf equalpower gesetzt ist, oder _k-rate_ andernfalls.

## Wert

Ein {{domxref("AudioParam")}}. Sein Standardwert ist 0, und er kann zwischen positiver und negativer Unendlichkeit liegen.

## Beispiele

Für detailliertere Beispielcodes siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples).

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
