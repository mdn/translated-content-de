---
title: AudioNode
slug: Web/API/AudioNode
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Das **`AudioNode`**-Interface ist ein generisches Interface zur Darstellung eines Audiomoduls.

Beispiele sind:

- eine Audioquelle (z. B. ein HTML-{{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element, ein {{domxref("OscillatorNode")}} usw.),
- das Audioziel,
- ein Zwischenverarbeitungsmodul (z. B. ein Filter wie {{domxref("BiquadFilterNode")}} oder {{domxref("ConvolverNode")}}) oder
- Lautstärkeregelung (wie {{domxref("GainNode")}})

{{InheritanceDiagram}}

> [!NOTE]
> Ein `AudioNode` kann Ziel von Ereignissen sein und implementiert daher das {{domxref("EventTarget")}}-Interface.

## Instanz-Eigenschaften

- {{domxref("AudioNode.context")}} {{ReadOnlyInline}}
  - : Gibt den zugehörigen {{domxref("BaseAudioContext")}} zurück, das ist das Objekt, das das Verarbeitungsdiagramm repräsentiert, an dem der Knoten beteiligt ist.
- {{domxref("AudioNode.numberOfInputs")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Eingänge zurück, die den Knoten speisen. Quellknoten sind definiert als Knoten mit einer `numberOfInputs`-Eigenschaft mit einem Wert von `0`.
- {{domxref("AudioNode.numberOfOutputs")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Ausgänge zurück, die aus dem Knoten kommen. Zielknoten – wie z.B. {{ domxref("AudioDestinationNode") }} – haben für dieses Attribut einen Wert von `0`.
- {{domxref("AudioNode.channelCount")}}
  - : Repräsentiert eine Ganzzahl, die verwendet wird, um zu bestimmen, wie viele Kanäle verwendet werden, wenn [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) Verbindungen zu einem Eingang des Knotens stattfinden. Seine Nutzung und genaue Definition hängen von dem Wert von {{domxref("AudioNode.channelCountMode")}} ab.
- {{domxref("AudioNode.channelCountMode")}}
  - : Repräsentiert einen enumerierten Wert, der beschreibt, wie Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen.
- {{domxref("AudioNode.channelInterpretation")}}
  - : Repräsentiert einen enumerierten Wert, der die Bedeutung der Kanäle beschreibt. Diese Interpretation definiert, wie das Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) erfolgen wird.
    Die möglichen Werte sind `"speakers"` oder `"discrete"`.

## Instanz-Methoden

_Implementiert auch Methoden aus dem Interface_ {{domxref("EventTarget")}}.

- {{domxref("AudioNode.connect()")}}
  - : Ermöglicht es, den Ausgang dieses Knotens so zu verbinden, dass er in einen anderen Knoten eingespeist wird, entweder als Audiodaten oder als Wert eines {{domxref("AudioParam")}}.
- {{domxref("AudioNode.disconnect()")}}
  - : Ermöglicht es, den aktuellen Knoten von einem anderen Knoten zu trennen, mit dem er bereits verbunden ist.

## Beschreibung

### Das Audio-Routing-Diagramm

![AudioNodes, die an einem AudioContext teilnehmen, erstellen ein Audio-Routing-Diagramm.](webaudiobasics.png)

Jedes `AudioNode` hat Eingänge und Ausgänge, und mehrere Audio-Knoten werden verbunden, um ein _Verarbeitungsdiagramm_ zu erstellen. Dieses Diagramm befindet sich in einem {{domxref("AudioContext")}}, und jeder Audio-Knoten kann nur zu einem Audio-Kontext gehören.

Ein _Quellknoten_ hat keine Eingänge, aber einen oder mehrere Ausgänge und kann verwendet werden, um Ton zu erzeugen. Ein _Zielknoten_ hingegen hat keine Ausgänge; stattdessen werden alle seine Eingänge direkt über die Lautsprecher abgespielt (oder über welches Audio-Ausgabegerät auch immer der Audiokontext verwendet). Zusätzlich gibt es _Verarbeitungsknoten_, die Eingänge und Ausgänge haben. Die genaue Verarbeitung variiert von einem `AudioNode` zum anderen, aber im Allgemeinen liest ein Knoten seine Eingänge, führt eine Audio-bezogene Verarbeitung durch und generiert neue Werte für seine Ausgänge oder lässt das Audio einfach passieren (zum Beispiel im {{domxref("AnalyserNode")}}, wo das Ergebnis der Verarbeitung separat abgerufen wird).

Je mehr Knoten in einem Diagramm vorhanden sind, desto höher ist die Latenz. Zum Beispiel, wenn Ihr Diagramm eine Latenz von 500 ms hat, dauert es eine halbe Sekunde, bis ein von der Quelle erzeugter Ton auf den Lautsprechern hörbar ist (oder sogar länger aufgrund von Latenz im zugrunde liegenden Audiogerät). Wenn Sie also interaktives Audio benötigen, halten Sie das Diagramm so klein wie möglich und platzieren Sie benutzerkontrollierte Audio-Knoten am Ende des Diagramms. Zum Beispiel sollte eine Lautstärkeregelung (`GainNode`) der letzte Knoten sein, damit Lautstärkeänderungen sofort wirksam werden.

Jeder Eingang und Ausgang hat eine bestimmte Anzahl von _Kanälen_. Zum Beispiel hat Mono-Audio einen Kanal, während Stereo-Audio zwei Kanäle hat. Die Web Audio API wird die Anzahl der Kanäle bei Bedarf hoch- oder heruntermixen; überprüfen Sie die Web Audio-Spezifikation für Details.

Für eine Liste aller Audioknoten, siehe die [Web Audio API](/de/docs/Web/API/Web_Audio_API) Homepage.

### Ein `AudioNode` erstellen

Es gibt zwei Möglichkeiten, ein `AudioNode` zu erstellen: über den _Konstruktor_ und über die _Fabrikmethode_.

```js
// Konstruktor
const analyserNode = new AnalyserNode(audioCtx, {
  fftSize: 2048,
  maxDecibels: -25,
  minDecibels: -60,
  smoothingTimeConstant: 0.5,
});
```

```js
// Fabrikmethode
const analyserNode = audioCtx.createAnalyser();
analyserNode.fftSize = 2048;
analyserNode.maxDecibels = -25;
analyserNode.minDecibels = -60;
analyserNode.smoothingTimeConstant = 0.5;
```

Sie sind frei, entweder Konstruktoren oder Fabrikmethoden zu verwenden oder beides zu mischen, jedoch gibt es Vorteile bei der Verwendung der Konstruktoren:

- Alle Parameter können während der Erstellungszeit gesetzt werden und müssen nicht einzeln gesetzt werden.
- Sie können [einen Audio-Knoten subklassifizieren](https://github.com/WebAudio/web-audio-api/issues/251). Während die eigentliche Verarbeitung intern vom Browser durchgeführt wird und nicht verändert werden kann, könnten Sie einen Wrapper um einen Audioknoten schreiben, um benutzerdefinierte Eigenschaften und Methoden bereitzustellen.
- Etwas bessere Leistung: In sowohl Chrome als auch Firefox rufen die Fabrikmethoden intern die Konstruktoren auf.

_Kurzgeschichte:_ Die erste Version der Web Audio-Spezifikation definierte nur die Fabrikmethoden. Nach einem [Design-Review im Oktober 2013](https://github.com/WebAudio/web-audio-api/issues/250) wurde entschieden, Konstruktoren hinzuzufügen, da diese viele Vorteile gegenüber Fabrikmethoden bieten. Die Konstruktoren wurden von August bis Oktober 2016 in die Spezifikation aufgenommen. Fabrikmethoden bleiben in der Spezifikation enthalten und sind nicht veraltet.

## Beispiel

Dieses einfache Code-Snippet zeigt die Erstellung einiger Audioknoten und wie die `AudioNode`-Eigenschaften und -Methoden verwendet werden können. Beispiele für eine solche Nutzung finden Sie in allen auf der [Web Audio API](/de/docs/Web/API/Web_Audio_API) Startseite verlinkten Beispielen (zum Beispiel [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin)).

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

- [Verwenden der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
