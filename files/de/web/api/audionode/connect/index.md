---
title: "AudioNode: connect() Methode"
short-title: connect()
slug: Web/API/AudioNode/connect
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{ APIRef("Web Audio API") }}

Die `connect()` Methode der [`AudioNode`](/de/docs/Web/API/AudioNode) Schnittstelle ermöglicht es Ihnen, einen der Ausgänge des Knotens mit einem Ziel zu verbinden, das entweder ein anderer `AudioNode` (und damit die Audiodaten an den angegebenen Knoten leitet) oder ein [`AudioParam`](/de/docs/Web/API/AudioParam) sein kann, sodass die Ausgabedaten des Knotens automatisch verwendet werden, um den Wert dieses Parameters im Laufe der Zeit zu ändern.

## Syntax

```js-nolint
connect(destination)
connect(destination, outputIndex)
connect(destination, outputIndex, inputIndex)
```

### Parameter

- `destination`
  - : Der [`AudioNode`](/de/docs/Web/API/AudioNode) oder [`AudioParam`](/de/docs/Web/API/AudioParam), mit dem verbunden werden soll.
- `outputIndex` {{optional_inline}}
  - : Ein Index, der angibt, welcher Ausgang des aktuellen `AudioNode` mit dem Ziel verbunden werden soll. Die Indexnummern sind entsprechend der Anzahl der Ausgangskanäle definiert (siehe [Audiokanäle](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)). Während Sie einen gegebenen Ausgang nur einmal mit einem gegebenen Eingang verbinden können (wiederholte Versuche werden ignoriert), können Sie einen Ausgang mit mehreren Eingängen verbinden, indem Sie `connect()` wiederholt aufrufen. Dies macht [Fan-out](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#fan-in_and_fan-out) möglich. Der Standardwert ist 0.
- `inputIndex` {{optional_inline}}
  - : Ein Index, der beschreibt, welcher Eingang des Ziels mit dem aktuellen `AudioNode` verbunden werden soll; der Standardwert ist 0. Die Indexnummern sind entsprechend der Anzahl der Eingangskanäle definiert (siehe [Audiokanäle](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)). Es ist möglich, einen `AudioNode` mit einem anderen `AudioNode` zu verbinden, der wiederum zurück zu dem ersten `AudioNode` verbindet, wodurch ein Zyklus entsteht.

### Rückgabewert

Wenn das Ziel ein Knoten ist, gibt `connect()` eine Referenz auf das Ziel-`AudioNode`-Objekt zurück, wodurch Sie mehrere `connect()`-Aufrufe verketten können. In einigen Browsern geben ältere Implementierungen dieser Schnittstelle {{jsxref("undefined")}} zurück.

Wenn das Ziel ein `AudioParam` ist, gibt `connect()` `undefined` zurück.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der als `outputIndex` oder `inputIndex` angegebene Wert nicht einem vorhandenen Eingang oder Ausgang entspricht.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zielknoten nicht Teil desselben Audiokontexts wie der Quellknoten ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebene Verbindung einen Zyklus erzeugen würde (in dem das Audio wiederholt durch dieselben Knoten zurückläuft) und es keine [`DelayNode`](/de/docs/Web/API/DelayNode) Objekte im Zyklus gibt, um zu verhindern, dass die resultierende Wellenform in der unendlichen Konstruktion desselben Audioframes stecken bleibt. Wird auch ausgelöst, wenn der `inputIndex` Parameter verwendet wird, während das Ziel ein [`AudioParam`](/de/docs/Web/API/AudioParam) ist.

## Beispiele

### Verbindung zu einem Audioeingang

Die offensichtlichste Verwendung der `connect()` Methode besteht darin, die Audioausgabe von einem Knoten in den Audioeingang eines anderen Knotens zur weiteren Verarbeitung zu leiten. Zum Beispiel könnten Sie das Audio von einem [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode)—das heißt, das Audio von einem HTML-Medienelement wie {{HTMLElement("audio")}}—durch einen Bandpassfilter führen, der mit einem [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) implementiert wird, um Geräusche zu reduzieren, bevor das Audio dann an die Lautsprecher gesendet wird.

Dieses Beispiel erstellt einen Oszillator und verknüpft ihn mit einem Verstärkungsknoten, sodass der Verstärkungsknoten die Lautstärke des Oszillatorknotens steuert.

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

### AudioParam-Beispiel

In diesem Beispiel werden wir den Verstärkungswert eines [`GainNode`](/de/docs/Web/API/GainNode) mit einem [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) mit einer langsamen Frequenz ändern. Diese Technik ist bekannt als eine _LFO_-kontrollierte Parameter.

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

Es ist möglich, einen `AudioNode` Ausgang mit mehr als einem [`AudioParam`](/de/docs/Web/API/AudioParam) zu verbinden, und mehr als einen `AudioNode` Ausgang mit einem einzigen [`AudioParam`](/de/docs/Web/API/AudioParam) zu verbinden, mit mehreren Aufrufen von `connect()`. [Fan-in und Fan-out](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#fan-in_and_fan-out) werden daher unterstützt.

Ein [`AudioParam`](/de/docs/Web/API/AudioParam) nimmt die gerenderten Audiodaten von jedem verbundenen `AudioNode` Ausgang und konvertiert sie durch [Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) in Mono (falls sie nicht bereits Mono sind). Anschließend wird es mit allen anderen solchen Ausgängen und dem intrinsischen Parameterwert (dem Wert, den das [`AudioParam`](/de/docs/Web/API/AudioParam) normalerweise ohne Audioverbindungen hätte), einschließlich aller für den Parameter geplanten Zeitlinienänderungen, zusammengeführt.

Daher ist es möglich, den Bereich zu wählen, in dem sich ein [`AudioParam`](/de/docs/Web/API/AudioParam) ändern wird, indem man den Wert des [`AudioParam`](/de/docs/Web/API/AudioParam) auf die zentrale Frequenz setzt und einen [`GainNode`](/de/docs/Web/API/GainNode) zwischen der Audioquelle und dem [`AudioParam`](/de/docs/Web/API/AudioParam) verwendet, um den Bereich der [`AudioParam`](/de/docs/Web/API/AudioParam)-Änderungen anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
