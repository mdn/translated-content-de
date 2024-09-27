---
title: AudioNode
slug: Web/API/AudioNode
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Die **`AudioNode`**-Schnittstelle ist eine generische Schnittstelle zur Darstellung eines Audiobearbeitungsmoduls.

Beispiele umfassen:

- eine Audioquelle (z. B. ein HTML-{{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element, ein [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) usw.),
- das Audioziel,
- ein Zwischenbearbeitungsmodul (z. B. ein Filter wie [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) oder [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)) oder
- Lautstärkeregelung (wie [`GainNode`](/de/docs/Web/API/GainNode))

{{InheritanceDiagram}}

> [!NOTE]
> Ein `AudioNode` kann Ziel von Ereignissen sein, daher implementiert es die [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle.

## Instanz-Eigenschaften

- [`AudioNode.context`](/de/docs/Web/API/AudioNode/context) {{ReadOnlyInline}}
  - : Gibt den zugehörigen [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) zurück, das Objekt, das den Verarbeitungsgraph darstellt, an dem der Knoten beteiligt ist.
- [`AudioNode.numberOfInputs`](/de/docs/Web/API/AudioNode/numberOfInputs) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Eingaben zurück, die den Knoten speisen. Quellknoten sind als Knoten definiert, deren `numberOfInputs`-Eigenschaft den Wert `0` hat.
- [`AudioNode.numberOfOutputs`](/de/docs/Web/API/AudioNode/numberOfOutputs) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Ausgaben zurück, die aus dem Knoten herauskommen. Zielknoten — wie [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) — haben für dieses Attribut den Wert `0`.
- [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount)
  - : Stellt eine Ganzzahl dar, die verwendet wird, um zu bestimmen, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) der Verbindungen zu den Eingängen des Knotens verwendet werden. Die Nutzung und die genaue Definition hängen vom Wert von [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) ab.
- [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode)
  - : Stellt einen enumerierten Wert dar, der beschreibt, wie Kanäle zwischen den Eingängen und Ausgängen des Knotens abgestimmt werden müssen.
- [`AudioNode.channelInterpretation`](/de/docs/Web/API/AudioNode/channelInterpretation)
  - : Stellt einen enumerierten Wert dar, der die Bedeutung der Kanäle beschreibt. Diese Interpretation definiert, wie das Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) erfolgen wird. Die möglichen Werte sind `"speakers"` oder `"discrete"`.

## Instanz-Methoden

_Implementiert auch Methoden von der Schnittstelle_ [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`AudioNode.connect()`](/de/docs/Web/API/AudioNode/connect)
  - : Ermöglicht es uns, den Ausgang dieses Knotens als Eingang zu einem anderen Knoten zu verbinden, entweder als Audiodaten oder als Wert eines [`AudioParam`](/de/docs/Web/API/AudioParam).
- [`AudioNode.disconnect()`](/de/docs/Web/API/AudioNode/disconnect)
  - : Ermöglicht es uns, den aktuellen Knoten von einem anderen zu trennen, mit dem er bereits verbunden ist.

## Beschreibung

### Der Audio-Routing-Graph

![AudioNodes, die an einem AudioContext teilnehmen, erstellen einen Audio-Routing-Graph.](webaudiobasics.png)

Jeder `AudioNode` hat Eingaben und Ausgaben, und mehrere Audioknoten sind verbunden, um einen _Verarbeitungsgraph_ zu erstellen. Dieser Graph ist in einem [`AudioContext`](/de/docs/Web/API/AudioContext) enthalten, und jeder Audioknoten kann nur zu einem Audiokontext gehören.

Ein _Quellknoten_ hat keine Eingaben, aber eine oder mehrere Ausgaben und kann zur Tonerzeugung verwendet werden. Ein _Zielknoten_ hat dagegen keine Ausgaben; stattdessen werden all seine Eingaben direkt auf den Lautsprechern wiedergegeben (oder auf welchem Ausgabegerät auch immer der Audiokontext verwendet). Darüber hinaus gibt es _Verarbeitungsknoten_, die Eingaben und Ausgaben haben. Die genaue Verarbeitung variiert von einem `AudioNode` zum anderen, aber im Allgemeinen liest ein Knoten seine Eingaben, führt eine audio-bezogene Verarbeitung durch und erzeugt neue Werte für seine Ausgaben oder lässt das Audio passieren (zum Beispiel im [`AnalyserNode`](/de/docs/Web/API/AnalyserNode), wo das Verarbeitungsergebnis separat abgerufen wird).

Je mehr Knoten in einem Graphen vorhanden sind, desto höher wird die Latenz sein. Wenn Ihr Graph beispielsweise eine Latenz von 500 ms hat, dauert es beim Abspielen eines Tons durch den Quellknoten eine halbe Sekunde, bis dieser Ton auf Ihren Lautsprechern gehört werden kann (oder noch länger aufgrund von Latenz im zugrunde liegenden Audiogerät). Wenn Sie interaktives Audio benötigen, halten Sie den Graphen also so klein wie möglich und platzieren Sie benutzerkontrollierte Audioknoten am Ende eines Graphen. Zum Beispiel sollte eine Lautstärkeregelung (`GainNode`) der letzte Knoten sein, damit Lautstärkeänderungen sofort wirksam werden.

Jeder Eingang und Ausgang hat eine bestimmte Anzahl von _Kanälen_. Mono-Audio hat zum Beispiel einen Kanal, während Stereo-Audio zwei Kanäle hat. Die Web Audio API wird die Anzahl der Kanäle bei Bedarf hochmischen oder heruntermischen; siehe die Web Audio-Spezifikation für Details.

Eine Liste aller Audioknoten finden Sie auf der Startseite der [Web Audio API](/de/docs/Web/API/Web_Audio_API).

### Erstellen eines `AudioNode`

Es gibt zwei Möglichkeiten, ein `AudioNode` zu erstellen: über den _Konstruktor_ und über die _Fabrikmethode_.

```js
// constructor
const analyserNode = new AnalyserNode(audioCtx, {
  fftSize: 2048,
  maxDecibels: -25,
  minDecibels: -60,
  smoothingTimeConstant: 0.5,
});
```

```js
// factory method
const analyserNode = audioCtx.createAnalyser();
analyserNode.fftSize = 2048;
analyserNode.maxDecibels = -25;
analyserNode.minDecibels = -60;
analyserNode.smoothingTimeConstant = 0.5;
```

Sie können entweder Konstruktoren oder Fabrikmethoden verwenden oder beide mischen, jedoch gibt es Vorteile bei der Verwendung der Konstruktoren:

- Alle Parameter können während der Konstruktionszeit festgelegt werden und müssen nicht einzeln gesetzt werden.
- Sie können ein [Audio-Knoten unterklassen](https://github.com/WebAudio/web-audio-api/issues/251). Während die tatsächliche Verarbeitung intern durch den Browser erfolgt und nicht verändert werden kann, könnten Sie eine Hülle um einen Audioknoten schreiben, um benutzerdefinierte Eigenschaften und Methoden bereitzustellen.
- Etwas bessere Leistung: Sowohl in Chrome als auch in Firefox rufen die Fabrikmethoden intern die Konstruktoren auf.

_Kurze Geschichte:_ Die erste Version der Web Audio-Spezifikation definierte nur die Fabrikmethoden. Nach einer [Designüberprüfung im Oktober 2013](https://github.com/WebAudio/web-audio-api/issues/250) wurde beschlossen, Konstruktoren hinzuzufügen, da sie gegenüber den Fabrikmethoden zahlreiche Vorteile bieten. Die Konstruktoren wurden von August bis Oktober 2016 zur Spezifikation hinzugefügt. Die Fabrikmethoden sind weiterhin in der Spezifikation enthalten und sind nicht veraltet.

## Beispiel

Dieser einfache Codeausschnitt zeigt die Erstellung einiger Audioknoten und wie die `AudioNode`-Eigenschaften und -Methoden verwendet werden können. Sie finden Beispiele für eine solche Nutzung auf den mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API) verknüpften Beispielseiten (zum Beispiel [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin)).

```js
const audioCtx = new AudioContext();

const oscillator = new OscillatorNode(audioCtx);
const gainNode = new GainNode(audioCtx);

oscillator.connect(gainNode).connect(audioCtx.destination);

oscillator.context;
oscillator.numberOfInputs;
oscillator.numberOfOutputs;
oscillator.channelCount;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
