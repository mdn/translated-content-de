---
title: "AudioNode: channelCountMode-Eigenschaft"
short-title: channelCountMode
slug: Web/API/AudioNode/channelCountMode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("Web Audio API") }}

Die Eigenschaft `channelCountMode` der [`AudioNode`](/de/docs/Web/API/AudioNode)-Schnittstelle stellt einen Aufzählungswert dar, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen des Knotens abgestimmt werden müssen.

## Wert

Die möglichen Werte des `channelCountMode`-Aufzählungswerts und deren Bedeutungen sind:

- `max`

  - : Die Anzahl der Kanäle entspricht der maximalen Anzahl an Kanälen aller Verbindungen.
    In diesem Fall wird `channelCount` ignoriert und nur hochgemischt.

    Die folgenden AudioNode-Kinder verwenden standardmäßig diesen Wert: [`GainNode`](/de/docs/Web/API/GainNode), [`DelayNode`](/de/docs/Web/API/DelayNode), [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode), [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode), [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode).

- `clamped-max`

  - : Die Anzahl der Kanäle entspricht der maximalen Anzahl an Kanälen aller Verbindungen, begrenzt auf den Wert von `channelCount`.

    Die folgenden AudioNode-Kinder verwenden standardmäßig diesen Wert: [`PannerNode`](/de/docs/Web/API/PannerNode), [`ConvolverNode`](/de/docs/Web/API/ConvolverNode), [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode).

- `explicit`

  - : Die Anzahl der Kanäle wird durch den Wert von `channelCount` definiert.

    Die folgenden AudioNode-Kinder verwenden standardmäßig diesen Wert: [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode), [`AnalyserNode`](/de/docs/Web/API/AnalyserNode), [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode), [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode).

> [!NOTE]
> In älteren Versionen der Spezifikation war der Standard für einen [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode) `max`.

## Beispiele

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.channelCountMode = "explicit";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
