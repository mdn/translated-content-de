---
title: "AudioNode: connect() Methode"
short-title: connect()
slug: Web/API/AudioNode/connect
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{ APIRef("Web Audio API") }}

Die `connect()`-Methode der [`AudioNode`](/de/docs/Web/API/AudioNode)-Schnittstelle ermöglicht es Ihnen, einen der Ausgänge des Knotens mit einem Ziel zu verbinden, das entweder ein anderer `AudioNode` (wodurch die Audiodaten an den angegebenen Knoten geleitet werden) oder ein [`AudioParam`](/de/docs/Web/API/AudioParam) sein kann, sodass die Ausgabedaten des Knotens automatisch verwendet werden, um den Wert dieses Parameters im Laufe der Zeit zu ändern.

## Syntax

```js-nolint
connect(destination)
connect(destination, outputIndex)
connect(destination, outputIndex, inputIndex)
```

### Parameter

- `destination`
  - : Der [`AudioNode`](/de/docs/Web/API/AudioNode) oder [`AudioParam`](/de/docs/Web/API/AudioParam), mit dem eine Verbindung hergestellt werden soll.
- `outputIndex` {{optional_inline}}
  - : Ein Index, der angibt, welcher Ausgang des aktuellen `AudioNode` mit dem Ziel verbunden werden soll. Die Indexnummern sind gemäß der Anzahl der Ausgangskanäle definiert (siehe [Audiokanäle](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)). Obwohl Sie einen gegebenen Ausgang nur einmal mit einem gegebenen Eingang verbinden können (wiederholte Versuche werden ignoriert), können Sie einen Ausgang mit mehreren Eingängen verbinden, indem Sie `connect()` wiederholt aufrufen. Dies ermöglicht [Fan-out](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#fan-in_and_fan-out). Der Standardwert ist 0.
- `inputIndex` {{optional_inline}}
  - : Ein Index, der beschreibt, mit welchem Eingang des Ziels Sie den aktuellen `AudioNode` verbinden möchten; der Standardwert ist 0. Die Indexnummern sind gemäß der Anzahl der Eingangskanäle definiert (siehe [Audiokanäle](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)). Es ist möglich, einen `AudioNode` mit einem anderen `AudioNode` zu verbinden, der wiederum zurück zum ersten `AudioNode` verbindet und somit einen Zyklus erstellt.

### Rückgabewert

Wenn das Ziel ein Knoten ist, gibt `connect()` eine Referenz auf das Ziel-`[`AudioNode`](/de/docs/Web/API/AudioNode)`-Objekt zurück, so dass Sie mehrere `connect()`-Aufrufe verketten können. In einigen Browsern geben ältere Implementierungen dieser Schnittstelle {{jsxref("undefined")}} zurück.

Wenn das Ziel ein `AudioParam` ist, gibt `connect()` `undefined` zurück.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der als `outputIndex` oder `inputIndex` angegebene Wert nicht einem vorhandenen Eingang oder Ausgang entspricht.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zielknoten nicht Teil desselben Audiokontexts wie der Quellknoten ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebene Verbindung einen Zyklus erstellen würde (bei dem das Audio wiederholt durch dieselben Knoten geleitet wird) und keine [`DelayNode`](/de/docs/Web/API/DelayNode)-Objekte im Zyklus vorhanden sind, um zu verhindern, dass die resultierende Wellenform ständig denselben Audioframe konstruiert. Wird auch ausgelöst, wenn der `inputIndex`-Parameter verwendet wird, während das Ziel ein [`AudioParam`](/de/docs/Web/API/AudioParam) ist.

## Beispiele

### Verbindung zu einem Audioeingang

Die offensichtlichste Verwendung der `connect()`-Methode besteht darin, den Audioausgang eines Knotens in den Audioeingang eines anderen Knotens zur weiteren Verarbeitung zu leiten. Beispielsweise könnten Sie das Audio von einem [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)—also das Audio aus einem HTML-Media-Element wie {{HTMLElement("audio")}}—durch einen Bandpassfilter leiten, der mit einem [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) implementiert ist, um Rauschen zu reduzieren, bevor das Audio dann an die Lautsprecher gesendet wird.

Dieses Beispiel erstellt einen Oszillator und verbindet ihn dann mit einem Gain-Knoten, sodass der Gain-Knoten die Lautstärke des Oszillator-Knotens steuert.

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

### AudioParam-Beispiel

In diesem Beispiel werden wir den Gain-Wert eines [`GainNode`](/de/docs/Web/API/GainNode) mit einem [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) bei niedriger Frequenz ändern. Diese Technik ist als _LFO_-gesteuerter Parameter bekannt.

```js
const audioCtx = new AudioContext();

// create a normal oscillator to make sound
const oscillator = audioCtx.createOscillator();

// create a second oscillator that will be used as an LFO (Low-frequency
// oscillator), and will control a parameter
const lfo = audioCtx.createOscillator();

// set the frequency of the second oscillator to a low number
lfo.frequency.value = 2.0; // 2Hz: two oscillations per second

// create a gain whose gain AudioParam will be controlled by the LFO
const gain = audioCtx.createGain();

// connect the LFO to the gain AudioParam. This means the value of the LFO
// will not produce any audio, but will change the value of the gain instead
lfo.connect(gain.gain);

// connect the oscillator that will produce audio to the gain
oscillator.connect(gain);

// connect the gain to the destination so we hear sound
gain.connect(audioCtx.destination);

// start the oscillator that will produce audio
oscillator.start();

// start the oscillator that will modify the gain value
lfo.start();
```

#### Hinweise zu AudioParam

Es ist möglich, ein `AudioNode`-Ausgang mit mehr als einem [`AudioParam`](/de/docs/Web/API/AudioParam) zu verbinden und mehr als einen `AudioNode`-Ausgang mit einem einzigen [`AudioParam`](/de/docs/Web/API/AudioParam) mit mehreren `connect()`-Aufrufen zu verbinden. [Fan-in und Fan-out](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#fan-in_and_fan-out) werden daher unterstützt.

Ein [`AudioParam`](/de/docs/Web/API/AudioParam) nimmt die gerenderten Audiodaten von jedem `AudioNode`-Ausgang, der damit verbunden ist, und wandelt sie durch [Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) in Mono um (falls sie nicht bereits mono sind). Anschließend mischt es diese mit anderen solcher Ausgänge und dem intrinsischen Parameterwert (dem Wert, den das [`AudioParam`](/de/docs/Web/API/AudioParam) normalerweise ohne Audioverbindungen hätte), einschließlich aller für den Parameter geplanten Zeitachsenänderungen.

Daher ist es möglich, den Bereich auszuwählen, in dem ein [`AudioParam`](/de/docs/Web/API/AudioParam) sich ändern wird, indem Sie den Wert des [`AudioParam`](/de/docs/Web/API/AudioParam) auf die zentrale Frequenz einstellen und einen [`GainNode`](/de/docs/Web/API/GainNode) zwischen der Audioquelle und dem [`AudioParam`](/de/docs/Web/API/AudioParam) verwenden, um den Bereich der Änderungen des [`AudioParam`](/de/docs/Web/API/AudioParam) anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
