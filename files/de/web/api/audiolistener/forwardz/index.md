---
title: "AudioListener: forwardZ-Eigenschaft"
short-title: forwardZ
slug: Web/API/AudioListener/forwardZ
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft `forwardZ` der {{ domxref("AudioListener") }}-Schnittstelle ist ein {{domxref("AudioParam")}}, das den z-Wert des Richtungsvektors darstellt, welcher die Richtung definiert, in die der Zuhörer zeigt.

> [!NOTE]
> Der Parameter ist _a-rate_, wenn er mit einem {{domxref("PannerNode")}} verwendet wird, dessen {{domxref("PannerNode.panningModel", "panningModel")}} auf equalpower gesetzt ist, oder _k-rate_ andernfalls.

## Wert

Ein {{domxref("AudioParam")}}. Sein Standardwert ist -1, und er kann zwischen positiv bis negativ unendlich reichen.

## Beispiele

Siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
