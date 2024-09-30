---
title: "AudioNode: channelInterpretation-Eigenschaft"
short-title: channelInterpretation
slug: Web/API/AudioNode/channelInterpretation
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

Die **`channelInterpretation`**-Eigenschaft des [`AudioNode`](/de/docs/Web/API/AudioNode)-Interfaces repräsentiert einen enumerierten Wert, der beschreibt, wie Eingangskanäle auf Ausgangskanäle abgebildet werden, wenn die Anzahl der Eingänge/Ausgänge unterschiedlich ist. Zum Beispiel definiert diese Einstellung, wie ein Mono-Eingang auf einen Stereo- oder 5.1-Kanal-Ausgang hochgemischt oder wie ein Quad-Kanal-Eingang auf einen Stereo- oder Mono-Ausgang heruntergemischt wird.

Die Eigenschaft hat zwei Optionen: `speakers` und `discrete`. Diese sind im Abschnitt [Grundlegende Konzepte der Web Audio API > Hochmischen und Heruntermischen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) dokumentiert.

## Wert

Die Werte sind im Abschnitt [Grundlegende Konzepte der Web Audio API > Hochmischen und Heruntermischen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) dokumentiert.

Zusammengefasst:

- `speakers`
  - : Verwenden Sie eine Reihe von "standardmäßigen" Zuordnungen für Kombinationen üblicher Lautsprecher-Eingangs- und -Ausgangs-Setups (Mono, Stereo, Quad, 5.1). Bei dieser Einstellung würde beispielsweise ein Mono-Kanal-Eingang auf beiden Kanälen eines Stereo-Ausgangs wiedergegeben.
- `discrete`
  - : Eingangskanäle werden in Reihenfolge auf Ausgangskanäle abgebildet. Wenn es mehr Eingänge als Ausgänge gibt, werden die zusätzlichen Eingänge verworfen; gibt es weniger, bleiben die ungenutzten Ausgänge stumm.

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
