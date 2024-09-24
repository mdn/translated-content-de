---
title: "AudioNode: Methode connect()"
short-title: connect()
slug: Web/API/AudioNode/connect
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{ APIRef("Web Audio API") }}

Die `connect()`-Methode der {{ domxref("AudioNode") }}-Schnittstelle ermöglicht es Ihnen, einen der Ausgänge des Knotens mit einem Ziel zu verbinden. Dieses Ziel kann entweder ein anderer `AudioNode` sein (wodurch die Schallwellen an den angegebenen Knoten geleitet werden) oder ein {{domxref("AudioParam")}}, sodass die Ausgabedaten des Knotens automatisch verwendet werden, um den Wert dieses Parameters im Laufe der Zeit zu ändern.

## Syntax

```js-nolint
connect(destination)
connect(destination, outputIndex)
connect(destination, outputIndex, inputIndex)
```

### Parameter

- `destination`
  - : Der {{domxref("AudioNode")}} oder {{domxref("AudioParam")}}, mit dem die Verbindung hergestellt werden soll.
- `outputIndex` {{optional_inline}}
  - : Ein Index, der angibt, welcher Ausgang des aktuellen `AudioNode` mit dem Ziel verbunden werden soll. Die Indexnummern sind entsprechend der Anzahl der Ausgangskanäle definiert (siehe [Audio-Kanäle](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)).
    Obwohl Sie einen gegebenen Ausgang nur einmal mit einem gegebenen Eingang verbinden können (wiederholte Versuche werden ignoriert), können Sie einen Ausgang mit mehreren Eingängen verbinden, indem Sie `connect()` mehrmals aufrufen. Dies ermöglicht [Fan-out](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#fan-in_and_fan-out). Der Standardwert ist 0.
- `inputIndex` {{optional_inline}}
  - : Ein Index, der beschreibt, welcher Eingang des Ziels mit dem aktuellen `AudioNode` verbunden werden soll; der Standardwert ist 0. Die Indexnummern sind entsprechend der Anzahl der Eingangskanäle definiert (siehe [Audio-Kanäle](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)). Es ist möglich, einen `AudioNode` mit einem anderen `AudioNode` zu verbinden, der wiederum zurück zum ersten `AudioNode` verbindet und damit einen Kreislauf bildet.

### Rückgabewert

Wenn das Ziel ein Knoten ist, gibt `connect()` eine Referenz auf das Ziel-{{domxref("AudioNode")}}-Objekt zurück, wodurch es Ihnen ermöglicht wird, mehrere `connect()`-Aufrufe zu verketten. In einigen Browsern geben ältere Implementierungen dieser Schnittstelle {{jsxref("undefined")}} zurück.

Wenn das Ziel ein `AudioParam` ist, gibt `connect()` `undefined` zurück.

### Ausnahmen

- `IndexSizeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der als `outputIndex` oder `inputIndex` angegebene Wert keinem vorhandenen Eingang oder Ausgang entspricht.
- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Zielknoten nicht Teil des gleichen Audiokontexts wie der Quellknoten ist.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die angegebene Verbindung einen Kreislauf bilden würde (bei dem das Audio die gleichen Knoten wiederholt durchläuft) und es keine {{domxref("DelayNode")}}-Objekte im Kreislauf gibt, um zu verhindern, dass die resultierende Wellenform ständig denselben Audioframe konstruiert. Wird auch ausgelöst, wenn der `inputIndex`-Parameter verwendet wird, während das Ziel ein {{domxref("AudioParam")}} ist.

## Beispiele

### Verbindung zu einem Audioeingang

Die offensichtlichste Verwendung der `connect()`-Methode besteht darin, die Audioausgabe von einem Knoten in den Audioeingang eines anderen Knotens zur Weiterverarbeitung zu leiten. Zum Beispiel könnten Sie das Audio von einem {{domxref("MediaElementAudioSourceNode")}}, also dem Audio eines HTML-Medienelements wie {{HTMLElement("audio")}}, durch einen Bandpassfilter leiten, der mit einem {{domxref("BiquadFilterNode")}} implementiert ist, um Rauschen zu reduzieren, bevor das Audio dann an die Lautsprecher gesendet wird.

Dieses Beispiel erstellt einen Oszillator und verbindet ihn mit einem Verstärkungs-Knoten, sodass der Verstärkungs-Knoten die Lautstärke des Oszillator-Knotens steuert.

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

### Beispiel für AudioParam

In diesem Beispiel werden wir den Verstärkungswert eines {{domxref("GainNode")}} mithilfe eines {{domxref("OscillatorNode")}} mit einer niedrigen Frequenz ändern. Diese Technik ist bekannt als ein _LFO_-gesteuertes Parameter.

```js
const audioCtx = new AudioContext();

// Erstellen Sie einen normalen Oszillator, um Ton zu erzeugen
const oscillator = audioCtx.createOscillator();

// Erstellen Sie einen zweiten Oszillator, der als LFO (Low-frequency
// oscillator) verwendet wird und einen Parameter steuern wird
const lfo = audioCtx.createOscillator();

// Setzen Sie die Frequenz des zweiten Oszillators auf eine niedrige Zahl
lfo.frequency.value = 2.0; // 2Hz: zwei Oszillationen pro Sekunde

// Erstellen Sie eine Verstärkung, deren Gain-AudioParam vom LFO gesteuert wird
const gain = audioCtx.createGain();

// Verbinden Sie den LFO mit dem Gain-AudioParam. Das bedeutet, dass der Wert des LFO
// keinen Ton erzeugt, sondern stattdessen den Wert der Verstärkung ändert
lfo.connect(gain.gain);

// Verbinden Sie den Oszillator, der Ton erzeugen wird, mit der Verstärkung
oscillator.connect(gain);

// Verbinden Sie die Verstärkung mit dem Ziel, damit wir Ton hören
gain.connect(audioCtx.destination);

// Starten Sie den Oszillator, der Ton erzeugen wird
oscillator.start();

// Starten Sie den Oszillator, der den Verstärkungswert ändern wird
lfo.start();
```

#### Anmerkungen zu AudioParam

Es ist möglich, einen `AudioNode`-Ausgang mit mehr als einem {{domxref("AudioParam")}} und mehr als einen AudioNode-Ausgang mit einem einzigen {{domxref("AudioParam")}} zu verbinden, mit mehreren Aufrufen von `connect()`. [Fan-in und Fan-out](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#fan-in_and_fan-out) werden daher unterstützt.

Ein {{ domxref("AudioParam") }} nimmt die gerenderten Audiodaten von jedem `AudioNode`-Ausgang auf, der damit verbunden ist, und konvertiert sie durch [Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) in Mono (falls es nicht schon Mono ist). Anschließend werden sie mit allen anderen Ausgängen und dem intrinsischen Parameterwert (dem Wert, den das {{ domxref("AudioParam") }} normalerweise ohne Audioverbindungen hätte) sowie mit allen Zeitplanänderungen für den Parameter gemischt.

Daher ist es möglich den Bereich auszuwählen, in dem sich ein {{domxref("AudioParam")}} ändern wird, indem man den Wert des {{domxref("AudioParam")}} auf die zentrale Frequenz einstellt und ein {{domxref("GainNode")}} zwischen der Audioquelle und dem {{domxref("AudioParam")}} verwendet, um den Bereich der Änderungen des {{domxref("AudioParam")}} anzupassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
