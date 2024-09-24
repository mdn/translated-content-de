---
title: "AudioNode: channelInterpretation-Eigenschaft"
short-title: channelInterpretation
slug: Web/API/AudioNode/channelInterpretation
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

Die **`channelInterpretation`**-Eigenschaft der {{domxref("AudioNode")}}-Schnittstelle repräsentiert einen enumerierten Wert, der beschreibt, wie Eingangskanäle auf Ausgangskanäle abgebildet werden, wenn die Anzahl der Eingänge/Ausgänge unterschiedlich ist. Beispielsweise definiert diese Einstellung, wie ein Mono-Eingang für einen Stereo- oder 5.1-Kanal-Ausgang hochgemischt wird oder wie ein Quad-Kanal-Eingang auf Stereo- oder Mono-Ausgang heruntergemischt wird.

Die Eigenschaft hat zwei Optionen: `speakers` und `discrete`. Diese sind dokumentiert in [Grundlagen der Web Audio API > Hochmischen und Heruntermischen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing).

## Wert

Die Werte sind dokumentiert in [Grundlagen der Web Audio API > Hochmischen und Heruntermischen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing).

Zusammengefasst:

- `speakers`
  - : Verwenden Sie ein Set von "standardmäßigen" Abbildungen für Kombinationen von üblichen Lautsprechereingangs- und -ausgangsanordnungen (Mono, Stereo, Quad, 5.1). Beispielsweise wird mit dieser Einstellung ein Mono-Kanal-Eingang auf beide Kanäle eines Stereo-Ausgangs ausgegeben.
- `discrete`
  - : Eingangskanäle werden sequenziell auf Ausgangskanäle abgebildet. Wenn es mehr Eingänge als Ausgänge gibt, werden die zusätzlichen Eingänge verworfen; wenn es weniger gibt, bleiben die nicht genutzten Ausgänge stumm.

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
