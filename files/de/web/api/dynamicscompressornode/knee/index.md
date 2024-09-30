---
title: "DynamicsCompressorNode: knee-Eigenschaft"
short-title: knee
slug: Web/API/DynamicsCompressorNode/knee
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{ APIRef("Web Audio API") }}

Die `knee`-Eigenschaft der [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)-Schnittstelle ist ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das einen Dezibelwert enthält, der den Bereich über der Schwelle darstellt, in dem die Kurve reibungslos in den komprimierten Abschnitt übergeht.

Der Standardwert der `knee`-Eigenschaft ist `30` und kann zwischen `0` und `40` eingestellt werden.

![Beschreibt die Wirkung eines Knees und zeigt zwei Kurven, eine für ein hartes Knee, die andere für ein weiches Knee.](webaudioknee.png)

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam).

> [!NOTE]
> Obwohl das zurückgegebene [`AudioParam`](/de/docs/Web/API/AudioParam) schreibgeschützt ist, ist der Wert, den es repräsentiert, nicht.

## Beispiele

```js
const audioCtx = new AudioContext();
const compressor = audioCtx.createDynamicsCompressor();
compressor.knee.value = 40;
```

Siehe [`BaseAudioContext.createDynamicsCompressor()`](/de/docs/Web/API/BaseAudioContext/createDynamicsCompressor#examples) für vollständigere Beispielcodes.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
