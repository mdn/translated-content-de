---
title: "AudioListener: positionX-Eigenschaft"
short-title: positionX
slug: Web/API/AudioListener/positionX
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte `positionX`-Eigenschaft der {{ domxref("AudioListener") }}-Schnittstelle ist ein {{domxref("AudioParam")}}, das die x-Position des Zuhörers im 3D-kartesischen Raum darstellt.

> [!NOTE]
> Der Parameter ist [_a-rate_](/de/docs/Web/API/AudioParam#a-rate), wenn er mit einem {{domxref("PannerNode")}} verwendet wird, dessen {{domxref("PannerNode.panningModel", "PannerNode")}} auf Equalpower eingestellt ist, oder ansonsten [_k-rate_](/de/docs/Web/API/AudioParam#k-rate).

## Wert

Ein {{domxref("AudioParam")}}. Sein Standardwert ist 0 und er kann zwischen positiv und negativ unendlich liegen.

## Beispiele

Sehen Sie sich für Beispielcode [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web-Audio-API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
