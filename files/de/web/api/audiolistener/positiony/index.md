---
title: "AudioListener: positionY-Eigenschaft"
short-title: positionY
slug: Web/API/AudioListener/positionY
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft `positionY` der {{ domxref("AudioListener") }}-Schnittstelle ist ein {{domxref("AudioParam")}}, das die y-Position des Zuhörers in einem 3D-kartesischen Raum darstellt.

> [!NOTE]
> Der Parameter ist [_a-rate_](/de/docs/Web/API/AudioParam#a-rate), wenn er mit einem {{domxref("PannerNode")}} verwendet wird, dessen {{domxref("PannerNode.panningModel", "PannerNode")}} auf "equalpower" gesetzt ist, oder [_k-rate_](/de/docs/Web/API/AudioParam#k-rate) in anderen Fällen.

## Wert

Ein {{domxref("AudioParam")}}. Sein Standardwert ist 0, und er kann zwischen positiver und negativer Unendlichkeit variieren.

## Beispiele

Siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
