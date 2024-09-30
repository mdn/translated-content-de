---
title: "StereoPannerNode: pan-Eigenschaft"
short-title: pan
slug: Web/API/StereoPannerNode/pan
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Audio API")}}

Die `pan`-Eigenschaft des [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)-Interfaces ist ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Menge des anzuwendenden Pannings darstellt. Der Wert kann zwischen `-1` (vollständig nach links) und `1` (vollständig nach rechts) variieren.

## Wert

Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das das anzuwendende Panning enthält.

> [!NOTE]
> Obwohl das zurückgegebene `AudioParam` schreibgeschützt ist, ist der Wert, den es darstellt, nicht.

## Beispiele

Siehe [`BaseAudioContext.createStereoPanner()`](/de/docs/Web/API/BaseAudioContext/createStereoPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
