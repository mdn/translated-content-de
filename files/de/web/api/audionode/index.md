---
title: AudioNode
slug: Web/API/AudioNode
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Web Audio API")}}

Die **`AudioNode`**-Schnittstelle ist eine generische Schnittstelle zur Darstellung eines Audiomoduls zur Verarbeitung.

Beispiele umfassen:

- eine Audioquelle (z.B. ein HTML-{{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element, ein [`OscillatorNode`](/de/docs/Web/API/OscillatorNode), etc.),
- das Audioziel,
- ein Zwischenverarbeitungsmodul (z.B. ein Filter wie [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) oder [`ConvolverNode`](/de/docs/Web/API/ConvolverNode)), oder
- Lautstärkeregelung (wie [`GainNode`](/de/docs/Web/API/GainNode))

{{InheritanceDiagram}}

> [!NOTE]
> Ein `AudioNode` kann Ziel von Ereignissen sein, daher implementiert es die [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle.

## Instanz-Eigenschaften

- [`AudioNode.context`](/de/docs/Web/API/AudioNode/context) {{ReadOnlyInline}}
  - : Gibt den zugehörigen [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) zurück, das heißt das Objekt, das den Verarbeitungsgraphen darstellt, an dem der Knoten beteiligt ist.
- [`AudioNode.numberOfInputs`](/de/docs/Web/API/AudioNode/numberOfInputs) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Eingänge zurück, die den Knoten speisen. Quellknoten sind definiert als Knoten, die eine `numberOfInputs`-Eigenschaft mit dem Wert `0` haben.
- [`AudioNode.numberOfOutputs`](/de/docs/Web/API/AudioNode/numberOfOutputs) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Ausgänge zurück, die aus dem Knoten kommen. Zielknoten — wie [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) — haben für dieses Attribut den Wert `0`.
- [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount)
  - : Repräsentiert eine Ganzzahl, die verwendet wird, um zu bestimmen, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu Eingängen des Knotens verwendet werden. Seine Verwendung und genaue Definition hängt vom Wert von [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) ab.
- [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode)
  - : Repräsentiert einen enumerierten Wert, der beschreibt, wie Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen.
- [`AudioNode.channelInterpretation`](/de/docs/Web/API/AudioNode/channelInterpretation)
  - : Repräsentiert einen enumerierten Wert, der die Bedeutung der Kanäle beschreibt. Diese Interpretation wird definieren, wie Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) erfolgen wird.
    Die möglichen Werte sind `"speakers"` oder `"discrete"`.

## Instanz-Methoden

_Implementiert auch Methoden der Schnittstelle_ [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`AudioNode.connect()`](/de/docs/Web/API/AudioNode/connect)
  - : Ermöglicht uns, den Ausgang dieses Knotens als Eingang in einen anderen Knoten zu verbinden, entweder als Audiodaten oder als Wert eines [`AudioParam`](/de/docs/Web/API/AudioParam).
- [`AudioNode.disconnect()`](/de/docs/Web/API/AudioNode/disconnect)
  - : Ermöglicht uns, den aktuellen Knoten von einem anderen zu trennen, mit dem er bereits verbunden ist.

## Beschreibung

### Der Audio-Routing-Graph

![AudioNodes, die an einem AudioContext teilnehmen, erstellen einen Audio-Routing-Graph.](webaudiobasics.png)

Jeder `AudioNode` hat Eingänge und Ausgänge, und mehrere Audioknoten sind miteinander verbunden, um einen _Verarbeitungsgraphen_ zu bilden. Dieser Graph ist in einem [`AudioContext`](/de/docs/Web/API/AudioContext) enthalten, und jeder Audioknoten kann nur zu einem Audiokontext gehören.

Ein _Quellknoten_ hat keine Eingänge, aber einen oder mehrere Ausgänge und kann verwendet werden, um Ton zu erzeugen. Andererseits hat ein _Zielknoten_ keine Ausgänge; stattdessen werden alle seine Eingänge direkt auf den Lautsprechern abgespielt (oder welchem Audioausgabegerät auch immer der Audiokontext verwendet). Zusätzlich gibt es _Verarbeitungsknoten_, die Eingänge und Ausgänge haben. Die genaue Verarbeitung variiert von einem `AudioNode` zum anderen, aber im Allgemeinen liest ein Knoten seine Eingänge, führt eine audiospezifische Verarbeitung durch und generiert neue Werte für seine Ausgänge oder lässt das Audio passieren (zum Beispiel im [`AnalyserNode`](/de/docs/Web/API/AnalyserNode), wo das Ergebnis der Verarbeitung separat abgerufen wird).

Je mehr Knoten in einem Graphen, desto höher die Latenz. Zum Beispiel, wenn Ihr Graph eine Latenz von 500 ms hat, wird es eine halbe Sekunde dauern, bis ein Ton, der vom Quellknoten abgespielt wird, auf Ihren Lautsprechern zu hören ist (oder sogar länger aufgrund der Latenz im zugrunde liegenden Audiogerät). Daher sollten Sie, wenn Sie interaktives Audio benötigen, den Graphen so klein wie möglich halten und benutzerkontrollierte Audioknoten am Ende eines Graphen platzieren. Beispielsweise sollte eine Lautstärkeregelung (`GainNode`) der letzte Knoten sein, damit Lautstärkeänderungen sofort wirksam werden.

Jeder Eingang und Ausgang hat eine bestimmte Anzahl von _Kanälen_. Zum Beispiel hat Mono-Audio einen Kanal, während Stereo-Audio zwei Kanäle hat. Die Web Audio API wird die Anzahl der Kanäle bei Bedarf up-mixen oder down-mixen; überprüfen Sie die Web Audio-Spezifikation für Details.

Für eine Liste aller Audioknoten, siehe die [Web Audio API](/de/docs/Web/API/Web_Audio_API) Startseite.

### Erstellen eines `AudioNode`

Es gibt zwei Möglichkeiten, ein `AudioNode` zu erstellen: über den _Konstruktor_ und über die _Fabrikwesensmethode_.

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

Sie sind frei, entweder Konstruktoren oder Fabrikwesensmethoden zu verwenden, oder beide zu mischen, jedoch gibt es Vorteile bei der Verwendung der Konstruktoren:

- Alle Parameter können während der Konstruktion gesetzt werden und müssen nicht einzeln gesetzt werden.
- Sie können [einen Audio-Knoten unterklassen](https://github.com/WebAudio/web-audio-api/issues/251). Während die eigentliche Verarbeitung intern durch den Browser erfolgt und nicht geändert werden kann, könnten Sie eine Wrapper-Klasse um einen Audio-Knoten schreiben, um benutzerdefinierte Eigenschaften und Methoden bereitzustellen.
- Leicht bessere Leistung: In sowohl Chrome als auch Firefox rufen die Fabrikwesensmethoden intern die Konstruktoren auf.

_Kurzgeschichte:_ Die erste Version der Web Audio-Spezifikation definierte nur die Fabrikwesensmethoden. Nach einer [Designüberprüfung im Oktober 2013](https://github.com/WebAudio/web-audio-api/issues/250) wurde entschieden, Konstruktoren hinzuzufügen, da sie zahlreiche Vorteile gegenüber den Fabrikwesensmethoden haben. Die Konstruktoren wurden von August bis Oktober 2016 zur Spezifikation hinzugefügt. Fabrikwesensmethoden sind weiterhin in der Spezifikation enthalten und sind nicht veraltet.

## Beispiel

Dieses einfache Code-Snippet zeigt die Erstellung einiger Audioknoten und wie die `AudioNode`-Eigenschaften und -Methoden verwendet werden können. Sie können Beispiele für solche Anwendungen auf der [Web Audio API](/de/docs/Web/API/Web_Audio_API) Startseite finden (zum Beispiel [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin)).

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
