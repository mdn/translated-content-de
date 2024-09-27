---
title: "AudioNode: channelInterpretation-Eigenschaft"
short-title: channelInterpretation
slug: Web/API/AudioNode/channelInterpretation
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

Die **`channelInterpretation`**-Eigenschaft des [`AudioNode`](/de/docs/Web/API/AudioNode)-Interfaces repräsentiert einen enumerierten Wert, der beschreibt, wie Eingabekanäle auf Ausgabekanäle abgebildet werden, wenn die Anzahl der Eingänge/Ausgänge unterschiedlich ist. Beispielsweise definiert diese Einstellung, wie eine Mono-Eingabe auf eine Stereo- oder 5.1-Kanalausgabe hochgemixt wird oder wie eine Quad-Kanaleingabe auf eine Stereo- oder Monoausgabe herabgemischt wird.

Die Eigenschaft hat zwei Optionen: `speakers` und `discrete`. Diese sind dokumentiert in [Grundlegende Konzepte der Web Audio API > Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing).

## Wert

Die Werte sind dokumentiert in [Grundlegende Konzepte der Web Audio API > Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing).

Zusammenfassend:

- `speakers`
  - : Verwenden Sie eine Reihe von "standardisierten" Zuordnungen für Kombinationen gängiger Lautsprecher-Eingangs- und Ausgangskonfigurationen (Mono, Stereo, Quad, 5.1). Bei dieser Einstellung gibt beispielsweise ein Mono-Kanaleingang auf beiden Kanälen einer Stereoausgabe aus.
- `discrete`
  - : Eingabekanäle werden der Reihenfolge nach auf Ausgabekanäle abgebildet. Wenn es mehr Eingänge als Ausgänge gibt, werden die zusätzlichen Eingänge verworfen; wenn es weniger sind, bleiben die nicht genutzten Ausgänge stumm.

## Beispiele

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.channelInterpretation = "discrete";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
