---
title: "AudioListener: upY Eigenschaft"
short-title: upY
slug: Web/API/AudioListener/upY
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft `upY` der {{ domxref("AudioListener") }}-Schnittstelle ist ein {{domxref("AudioParam")}}, das den y-Wert des Richtungsvektors darstellt, der die Aufwärtsrichtung definiert, in die der Zuhörer zeigt.

> [!NOTE]
> Der Parameter ist _a-rate_, wenn er mit einem {{domxref("PannerNode")}} verwendet wird, dessen {{domxref("PannerNode.panningModel", "PannerNode")}} auf Ortgleichgewicht (equalpower) gesetzt ist, oder _k-rate_ andernfalls.

## Wert

Ein {{domxref("AudioParam")}}. Der Standardwert ist 1 und kann zwischen positiver und negativer Unendlichkeit liegen.

## Beispiele

Siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
