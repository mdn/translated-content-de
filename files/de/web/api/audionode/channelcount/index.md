---
title: "AudioNode: channelCount-Eigenschaft"
short-title: channelCount
slug: Web/API/AudioNode/channelCount
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

Die **`channelCount`**-Eigenschaft der [`AudioNode`](/de/docs/Web/API/AudioNode)-Schnittstelle repräsentiert eine ganze Zahl, die verwendet wird, um festzulegen, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu allen Eingängen des Knotens verwendet werden.

Die Verwendung und genaue Definition von `channelCount` hängen vom Wert von [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) ab:

- Sie wird ignoriert, wenn der Wert von `channelCountMode` `max` ist.
- Sie wird als Maximalwert verwendet, wenn der Wert von `channelCountMode` `clamped-max` ist.
- Sie wird als exakter Wert verwendet, wenn der Wert von `channelCountMode` `explicit` ist.

## Wert

Eine ganze Zahl.

## Beispiele

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.channelCount;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
