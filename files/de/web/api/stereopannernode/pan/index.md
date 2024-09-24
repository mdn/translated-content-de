---
title: "StereoPannerNode: Pan-Eigenschaft"
short-title: pan
slug: Web/API/StereoPannerNode/pan
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Audio API")}}

Die `pan`-Eigenschaft der {{ domxref("StereoPannerNode") }}-Schnittstelle ist ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, das die Menge der anzuwendenden Stereopanoramierung darstellt. Der Wert kann zwischen `-1` (vollständig links) und `1` (vollständig rechts) liegen.

## Wert

Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, das die anzuwendende Stereopanoramierung enthält.

> [!NOTE]
> Obwohl das zurückgegebene `AudioParam` schreibgeschützt ist, ist der Wert, den es darstellt, es nicht.

## Beispiele

Siehe [`BaseAudioContext.createStereoPanner()`](/de/docs/Web/API/BaseAudioContext/createStereoPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
