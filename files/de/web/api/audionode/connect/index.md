---
title: "AudioNode: connect() Methode"
short-title: connect()
slug: Web/API/AudioNode/connect
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{ APIRef("Web Audio API") }}

Die `connect()` Methode der [`AudioNode`](/de/docs/Web/API/AudioNode) Schnittstelle ermöglicht es Ihnen, einen der Ausgänge des Knotens mit einem Ziel zu verbinden, das entweder ein weiterer `AudioNode` sein kann (wodurch die Audiodaten an den angegebenen Knoten geleitet werden) oder ein [`AudioParam`](/de/docs/Web/API/AudioParam), sodass die Ausgangsdaten des Knotens automatisch verwendet werden, um den Wert dieses Parameters im Laufe der Zeit zu ändern.

## Syntax

```js-nolint
connect(destination)
connect(destination, outputIndex)
connect(destination, outputIndex, inputIndex)
```

### Parameter

- `destination`
  - : Der [`AudioNode`](/de/docs/Web/API/AudioNode) oder [`AudioParam`](/de/docs/Web/API/AudioParam), zu dem die Verbindung hergestellt werden soll.
- `outputIndex` {{optional_inline}}
  - : Ein Index, der angibt, welcher Ausgang des aktuellen `AudioNode` mit dem Ziel verbunden werden soll. Die Indexzahlen sind entsprechend der Anzahl der Ausgangskanäle definiert (siehe [Audiokanäle](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)). Während man nur einen bestimmten Ausgang einmal mit einem bestimmten Eingang verbinden kann (wiederholte Versuche werden ignoriert), kann man einen Ausgang mit mehreren Eingängen verbinden, indem man `connect()` wiederholt aufruft. Dies macht [Fan-out](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#fan-in_and_fan-out) möglich. Der Standardwert ist 0.
- `inputIndex` {{optional_inline}}
  - : Ein Index, der beschreibt, welcher Eingang des Ziels mit dem aktuellen `AudioNode` verbunden werden soll; der Standard ist 0. Die Indexzahlen sind entsprechend der Anzahl der Eingangskanäle definiert (siehe [Audiokanäle](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)). Es ist möglich, einen `AudioNode` mit einem anderen `AudioNode` zu verbinden, der wiederum zurück zum ersten `AudioNode` verbindet, wodurch ein Zyklus entsteht.

### Rückgabewert

Wenn das Ziel ein Knoten ist, gibt `connect()` eine Referenz auf das Ziel [`AudioNode`](/de/docs/Web/API/AudioNode) Objekt zurück, das es Ihnen ermöglicht, mehrere `connect()` Aufrufe zu verketten. In einigen Browsern geben ältere Implementierungen dieser Schnittstelle {{jsxref("undefined")}} zurück.

Wenn das Ziel ein `AudioParam` ist, gibt `connect()` `undefined` zurück.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der als `outputIndex` oder `inputIndex` angegebene Wert keinem vorhandenen Eingang oder Ausgang entspricht.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zielknoten nicht Teil desselben Audio-Kontexts wie der Quellknoten ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebene Verbindung einen Zyklus erzeugen würde (in dem das Audio wiederholt durch dieselben Knoten zurückgeführt wird) und es keine [`DelayNode`](/de/docs/Web/API/DelayNode) Objekte im Zyklus gibt, um zu verhindern, dass die resultierende Wellenform dauerhaft dasselbe Audio-Frame konstruiert. Außerdem wird dies ausgelöst, wenn der `inputIndex` Parameter verwendet wird, während das Ziel ein [`AudioParam`](/de/docs/Web/API/AudioParam) ist.

## Beispiele

### Verbindung zu einem Audioeingang

Die offensichtlichste Verwendung der `connect()` Methode besteht darin, den Audioausgang eines Knotens in den Audioeingang eines anderen Knotens zur weiteren Verarbeitung zu leiten. Beispielsweise könnten Sie das Audio von einem [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) — also dem Audio von einem HTML-Mediaelement wie {{HTMLElement("audio")}} — durch ein Bandpassfilter leiten, das mit einem [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) implementiert ist, um Geräusche zu reduzieren, bevor das Audio an die Lautsprecher gesendet wird.

Dieses Beispiel erstellt einen Oszillator und verbindet ihn dann mit einem Verstärker-Knoten, sodass der Verstärker-Knoten die Lautstärke des Oszillator-Knotens steuert.

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

### AudioParam Beispiel

In diesem Beispiel werden wir den Verstärkungswert eines [`GainNode`](/de/docs/Web/API/GainNode) mit einem [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) mit einer langsamen Frequenz ändern. Diese Technik ist als _LFO_-gesteuerte Parameter bekannt.

```js
const audioCtx = new AudioContext();

// create an normal oscillator to make sound
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

#### AudioParam Hinweise

Es ist möglich, den Ausgang eines `AudioNode` mit mehr als einem [`AudioParam`](/de/docs/Web/API/AudioParam) zu verbinden und mehr als einen Ausgang eines AudioNode mit einem einzigen [`AudioParam`](/de/docs/Web/API/AudioParam), mit mehreren Aufrufen von `connect()`. [Fan-in und Fan-out](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#fan-in_and_fan-out) werden daher unterstützt.

Ein [`AudioParam`](/de/docs/Web/API/AudioParam) übernimmt die gerenderten Audiodaten von jedem verbundenen `AudioNode` Ausgang und konvertiert sie zu Mono durch [Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) (sofern sie nicht bereits Mono sind). Anschließend wird es mit anderen solchen Ausgängen und dem intrinsischen Parameterwert (dem Wert, den das [`AudioParam`](/de/docs/Web/API/AudioParam) normalerweise ohne Audioverbindungen hätte), einschließlich aller geplanten Zeitachsenänderungen für den Parameter, gemischt.

Daher ist es möglich, den Bereich auszuwählen, in dem ein [`AudioParam`](/de/docs/Web/API/AudioParam) sich ändern wird, indem der Wert des [`AudioParam`](/de/docs/Web/API/AudioParam) auf die zentrale Frequenz gesetzt wird und ein [`GainNode`](/de/docs/Web/API/GainNode) zwischen der Audioquelle und dem [`AudioParam`](/de/docs/Web/API/AudioParam) verwendet wird, um den Bereich der Änderungen des [`AudioParam`](/de/docs/Web/API/AudioParam) anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
