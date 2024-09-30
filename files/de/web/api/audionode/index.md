---
title: AudioNode
slug: Web/API/AudioNode
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Das **`AudioNode`**-Interface ist ein generisches Interface zur Darstellung eines Audiobearbeitungsmoduls.

Beispiele umfassen:

- eine Audioquelle (z.B. ein HTML-{{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element, ein [`OscillatorNode`](/de/docs/Web/API/OscillatorNode), etc.),
- das Audioziel,
- ein intermediäres Bearbeitungsmodul (z.B. ein Filter wie [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) oder [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)), oder
- Lautstärkeregelung (wie [`GainNode`](/de/docs/Web/API/GainNode))

{{InheritanceDiagram}}

> [!NOTE]
> Ein `AudioNode` kann Ziel von Ereignissen sein, daher implementiert es das [`EventTarget`](/de/docs/Web/API/EventTarget)-Interface.

## Instanz-Eigenschaften

- [`AudioNode.context`](/de/docs/Web/API/AudioNode/context) {{ReadOnlyInline}}
  - : Gibt den zugeordneten [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) zurück, das Objekt, das das Verarbeitungsgraf darstellt, an dem der Knoten beteiligt ist.
- [`AudioNode.numberOfInputs`](/de/docs/Web/API/AudioNode/numberOfInputs) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Eingänge zurück, die den Knoten speisen. Quellknoten sind definiert als Knoten mit einer `numberOfInputs`-Eigenschaft mit einem Wert von `0`.
- [`AudioNode.numberOfOutputs`](/de/docs/Web/API/AudioNode/numberOfOutputs) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Ausgänge zurück, die aus dem Knoten kommen. Zielknoten — wie [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) — haben für dieses Attribut einen Wert von `0`.
- [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount)
  - : Repräsentiert eine Ganzzahl, die verwendet wird, um zu bestimmen, wie viele Kanäle beim [Up-Mixing and Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu irgendeinem Eingang des Knotens verwendet werden. Die Verwendung und genaue Definition hängen vom Wert von [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) ab.
- [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode)
  - : Repräsentiert einen enumerierten Wert, der beschreibt, wie Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen.
- [`AudioNode.channelInterpretation`](/de/docs/Web/API/AudioNode/channelInterpretation)
  - : Repräsentiert einen enumerierten Wert, der die Bedeutung der Kanäle beschreibt. Diese Interpretation definiert, wie das Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) erfolgen wird.
    Die möglichen Werte sind `"speakers"` oder `"discrete"`.

## Instanz-Methoden

_Implementiert auch Methoden aus dem Interface_ [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`AudioNode.connect()`](/de/docs/Web/API/AudioNode/connect)
  - : Ermöglicht es, den Ausgang dieses Knotens als Eingang in einen anderen Knoten zu verbinden, entweder als Audiodaten oder als Wert eines [`AudioParam`](/de/docs/Web/API/AudioParam).
- [`AudioNode.disconnect()`](/de/docs/Web/API/AudioNode/disconnect)
  - : Ermöglicht es, den aktuellen Knoten von einem anderen, zu dem er bereits verbunden ist, zu trennen.

## Beschreibung

### Das Audio-Routing-Graf

![AudioNodes, die an einem AudioContext teilnehmen, erstellen ein Audio-Routing-Graf.](webaudiobasics.png)

Jedes `AudioNode` hat Eingänge und Ausgänge, und mehrere Audio-Knoten sind verbunden, um ein _Verarbeitungsgraf_ zu erstellen. Dieser Graf ist in einem [`AudioContext`](/de/docs/Web/API/AudioContext) enthalten, und jeder Audio-Knoten kann nur zu einem Audiokontext gehören.

Ein _Quellknoten_ hat keine Eingänge, aber einen oder mehrere Ausgänge und kann zur Tonerzeugung verwendet werden. Andererseits hat ein _Zielknoten_ keine Ausgänge; stattdessen werden alle seine Eingänge direkt über die Lautsprecher (oder welches Audiogerät auch immer der Audiokontext verwendet) wiedergegeben. Darüber hinaus gibt es _Verarbeitungsknoten_, die Eingänge und Ausgänge haben. Die genaue Verarbeitung variiert von einem `AudioNode` zum anderen, aber im Allgemeinen liest ein Knoten seine Eingänge, führt eine audio-bezogene Verarbeitung durch und erzeugt neue Werte für seine Ausgänge oder lässt das Audio passieren (zum Beispiel im [`AnalyserNode`](/de/docs/Web/API/AnalyserNode), bei dem das Ergebnis der Verarbeitung separat zugänglich ist).

Je mehr Knoten im Graf sind, desto höher wird die Latenz sein. Zum Beispiel, wenn Ihr Graf eine Latenz von 500ms hat, wird es eine halbe Sekunde dauern, bis ein Ton, der vom Quellknoten gespielt wird, über Ihre Lautsprecher zu hören ist (oder noch länger wegen der Latenz im zugrunde liegenden Audiogerät). Daher, wenn Sie interaktives Audio benötigen, halten Sie den Graf soweit wie möglich klein und setzen Sie benutzergesteuerte Audioknoten am Ende eines Grafen. Zum Beispiel sollte eine Lautstärkeregelung (`GainNode`) der letzte Knoten sein, damit Lautstärkeänderungen sofort wirksam werden.

Jeder Eingang und Ausgang hat eine bestimmte Anzahl an _Kanälen_. Zum Beispiel hat Mono-Audio einen Kanal, während Stereo-Audio zwei Kanäle hat. Die Web Audio API wird die Anzahl der Kanäle nach Bedarf erhöhen oder verringern; Einzelheiten finden Sie in der Spezifikation der Web Audio API.

Für eine Liste aller Audionoden siehe die [Web Audio API](/de/docs/Web/API/Web_Audio_API)-Homepage.

### Erstellen eines `AudioNode`

Es gibt zwei Möglichkeiten, ein `AudioNode` zu erstellen: über den _Konstruktor_ und über die _Factory-Methode_.

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

Sie sind frei, entweder Konstruktoren oder Factory-Methoden zu verwenden oder beide zu mischen, jedoch gibt es Vorteile bei der Verwendung der Konstruktoren:

- Alle Parameter können während der Konstruktion festgelegt werden und müssen nicht einzeln gesetzt werden.
- Sie können [einen Audioknoten unterklassen](https://github.com/WebAudio/web-audio-api/issues/251). Zwar wird die eigentliche Verarbeitung intern vom Browser durchgeführt und kann nicht verändert werden, jedoch können Sie einen Wrapper um einen Audioknoten schreiben, um benutzerdefinierte Eigenschaften und Methoden bereitzustellen.
- Etwas bessere Leistung: Sowohl in Chrome als auch Firefox rufen die Factory-Methoden intern die Konstruktoren auf.

_Kurze Historie:_ Die erste Version der Web Audio-Spezifikation definierte nur die Factory-Methoden. Nach einer [Designüberprüfung im Oktober 2013](https://github.com/WebAudio/web-audio-api/issues/250) wurde beschlossen, Konstruktoren hinzuzufügen, da sie zahlreiche Vorteile gegenüber Factory-Methoden bieten. Die Konstruktoren wurden von August bis Oktober 2016 in die Spezifikation aufgenommen. Factory-Methoden sind weiterhin in der Spezifikation enthalten und nicht veraltet.

## Beispiel

Dieses einfache Code-Snippet zeigt die Erstellung einiger Audionoden und wie die `AudioNode`-Eigenschaften und -Methoden verwendet werden können. Beispiele für solche Anwendungen finden Sie in den auf der [Web Audio API](/de/docs/Web/API/Web_Audio_API)-Hauptseite verlinkten Beispielen (zum Beispiel [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin)).

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
