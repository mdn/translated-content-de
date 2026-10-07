---
title: Mehrere Parameter mit ConstantSourceNode steuern
slug: Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel zeigt, wie Sie mit einem [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) mehrere Parameter miteinander verknüpfen, sodass sie denselben Wert haben. Diesen Wert können Sie ändern, indem Sie den Parameter [`ConstantSourceNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset) setzen.

Manchmal sollen mehrere Audioparameter miteinander verknüpft sein und denselben Wert haben, auch wenn dieser geändert wird. Vielleicht haben Sie beispielsweise mehrere Oszillatoren, von denen zwei dieselbe einstellbare Lautstärke haben sollen. Oder Sie möchten einen Filter auf bestimmte Eingänge anwenden, aber nicht auf alle. Sie könnten mit einer Schleife den Wert jedes betroffenen [`AudioParam`](/de/docs/Web/API/AudioParam) einzeln ändern. Das hat jedoch zwei Nachteile: Erstens erfordert es zusätzlichen Code, den Sie, wie Sie gleich sehen werden, nicht schreiben müssen. Zweitens verbraucht die Schleife wertvolle CPU-Zeit auf Ihrem Thread – wahrscheinlich dem Haupt-Thread. Stattdessen können Sie die gesamte Arbeit dem Audio-Rendering-Thread überlassen. Dieser ist für solche Aufgaben optimiert und läuft möglicherweise mit einer passenderen Priorität als Ihr Code.

Die Lösung ist einfach und verwendet einen Audio-Node-Typ, der auf den ersten Blick nicht besonders nützlich erscheint: [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode).

## Die Technik

Mit einem `ConstantSourceNode` lässt sich diese vermeintlich schwierige Aufgabe leicht lösen. Erstellen Sie einen [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) und verbinden Sie ihn mit allen [`AudioParam`](/de/docs/Web/API/AudioParam)-Instanzen, deren Werte dauerhaft übereinstimmen sollen. Da der Wert von [`offset`](/de/docs/Web/API/ConstantSourceNode/offset) bei einem `ConstantSourceNode` direkt an alle seine Ausgänge weitergegeben wird, verteilt der Node diesen Wert an jeden verbundenen Parameter.

Das folgende Diagramm zeigt, wie das funktioniert: Ein Eingabewert `N` wird als Wert der Eigenschaft [`ConstantSourceNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset) gesetzt. Der `ConstantSourceNode` kann so viele Ausgänge haben wie nötig. In diesem Fall haben wir ihn mit drei Nodes verbunden: zwei [`GainNode`](/de/docs/Web/API/GainNode)-Instanzen und einem [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode). Damit wird `N` zum Wert des jeweiligen Parameters ([`gain`](/de/docs/Web/API/GainNode/gain) bei den [`GainNode`](/de/docs/Web/API/GainNode)-Instanzen und `pan` beim [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)).

![SVG-Diagramm, das zeigt, wie ein ConstantSourceNode einen Eingabewert auf mehrere Nodes verteilen kann.](customsourcenode-as-splitter.svg)

Wenn Sie `N` ändern (den Wert des [`AudioParam`](/de/docs/Web/API/AudioParam) am Eingang), werden folglich auch die Werte der beiden `GainNode.gain`-Eigenschaften und der `pan`-Eigenschaft des `StereoPannerNode` auf `N` gesetzt.

## Beispiel

Sehen wir uns die Technik in der Praxis an. In diesem einfachen Beispiel erstellen wir drei [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)-Objekte. Bei zwei davon lässt sich die Verstärkung über ein gemeinsames Steuerelement einstellen. Der dritte Oszillator hat eine feste Lautstärke.

### HTML

Der HTML-Inhalt dieses Beispiels besteht hauptsächlich aus einer Checkbox, die wie eine Schaltfläche gestaltet ist und die Oszillatortöne ein- und ausschaltet, sowie einem {{HTMLElement("input")}}-Element vom Typ `range`, mit dem die Lautstärke von zwei der drei Oszillatoren geregelt wird.

```html
<div class="controls">
  <input type="checkbox" id="playButton" />
  <label for="playButton">Activate: </label>
  <label for="volumeControl">Volume: </label>
  <input
    type="range"
    min="0.0"
    max="1.0"
    step="0.01"
    value="0.8"
    name="volume"
    id="volumeControl" />
</div>

<p>
  Toggle the checkbox above to start and stop the tones, and use the volume
  control to change the volume of the notes E and G in the chord.
</p>
```

```css hidden
.controls {
  width: 400px;
  position: relative;
  vertical-align: middle;
  height: 44px;
}

#playButton:checked + label::after {
  content: "⏸";
}

#playButton:not(:checked) + label::after {
  content: "▶️";
}

#playButton + label::after {
  cursor: pointer;
}

#playButton {
  vertical-align: middle;
  display: none;
}

#volumeControl {
  vertical-align: bottom;
}

label {
  vertical-align: middle;
}
```

### JavaScript

Sehen wir uns nun den JavaScript-Code Stück für Stück an.

#### Einrichtung

Beginnen wir mit der Initialisierung der globalen Variablen.

```js
// Useful UI elements
const playButton = document.querySelector("#playButton");
const volumeControl = document.querySelector("#volumeControl");

// The audio context and the node will be initialized after the first request
let context = null;
let oscNode1 = null;
let oscNode2 = null;
let oscNode3 = null;
let constantNode = null;
let gainNode1 = null;
let gainNode2 = null;
let gainNode3 = null;
```

Diese Variablen sind:

- `context`
  - : Der [`AudioContext`](/de/docs/Web/API/AudioContext), in dem sich alle Audio-Nodes befinden. Er wird nach einer Benutzeraktion initialisiert.
- `playButton` und `volumeControl`
  - : Referenzen auf die Wiedergabeschaltfläche und das Element zur Lautstärkeregelung.
- `oscNode1`, `oscNode2` und `oscNode3`
  - : Die drei [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)-Instanzen, die den Akkord erzeugen.
- `gainNode1`, `gainNode2` und `gainNode3`
  - : Die drei [`GainNode`](/de/docs/Web/API/GainNode)-Instanzen, die die Lautstärke der einzelnen Oszillatoren bestimmen. `gainNode2` und `gainNode3` werden mithilfe des [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) miteinander verknüpft, sodass sie denselben einstellbaren Wert haben.
- `constantNode`
  - : Der [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode), mit dem die Werte von `gainNode2` und `gainNode3` gemeinsam gesteuert werden.

Sehen wir uns nun die Funktion `setup()` an. Sie wird aufgerufen, wenn der Benutzer die Wiedergabeschaltfläche zum ersten Mal betätigt, und übernimmt alle Initialisierungsschritte zum Aufbau des Audiographen.

```js
function setup() {
  context = new AudioContext();

  gainNode1 = new GainNode(context, {
    gain: 0.5,
  });
  gainNode2 = new GainNode(context, {
    gain: gainNode1.gain.value,
  });
  gainNode3 = new GainNode(context, {
    gain: gainNode1.gain.value,
  });

  volumeControl.value = gainNode1.gain.value;

  constantNode = new ConstantSourceNode(context, {
    offset: volumeControl.value,
  });
  constantNode.connect(gainNode2.gain);
  constantNode.connect(gainNode3.gain);
  constantNode.start();

  gainNode1.connect(context.destination);
  gainNode2.connect(context.destination);
  gainNode3.connect(context.destination);

  // All is set up. We can hook the volume control.
  volumeControl.addEventListener("input", changeVolume);
}
```

Zunächst greifen wir auf den [`AudioContext`](/de/docs/Web/API/AudioContext) des Fensters zu und speichern die Referenz in `context`. Anschließend holen wir Referenzen auf die Steuerelemente: `playButton` verweist auf die Wiedergabeschaltfläche und `volumeControl` auf den Schieberegler, mit dem der Benutzer die Verstärkung des verknüpften Oszillatorpaars einstellt.

Als Nächstes erstellen wir den [`GainNode`](/de/docs/Web/API/GainNode) `gainNode1`, der die Lautstärke des nicht verknüpften Oszillators (`oscNode1`) steuert. Seine Verstärkung setzen wir auf 0,5. Wir erstellen außerdem `gainNode2` und `gainNode3`, setzen ihre Werte auf denselben Wert wie bei `gainNode1` und stellen dann den Lautstärkeregler auf diesen Wert ein. So bleibt er mit der von ihm gesteuerten Verstärkung synchronisiert.

Nachdem alle Gain-Nodes erstellt wurden, erstellen wir den [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) `constantNode`. Wir verbinden seinen Ausgang mit dem [`AudioParam`](/de/docs/Web/API/AudioParam) `gain` von `gainNode2` und `gainNode3` und starten den Constant-Node durch Aufruf seiner Methode [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start). Nun sendet er den Wert 0,5 an die beiden Gain-Nodes. Jede Änderung an [`constantNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset) passt automatisch die Verstärkung von `gainNode2` und `gainNode3` an – und damit wie erwartet auch deren Audioeingänge.

Schließlich verbinden wir alle Gain-Nodes mit der [`destination`](/de/docs/Web/API/BaseAudioContext/destination) des [`AudioContext`](/de/docs/Web/API/AudioContext). Dadurch erreicht jeder an die Gain-Nodes gelieferte Ton den Ausgang, unabhängig davon, ob es sich dabei um Lautsprecher, Kopfhörer, einen Aufnahmestream oder eine andere Art von Ziel handelt.

Anschließend registrieren wir einen Handler für das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis des Lautstärkereglers. Die sehr kurze Methode `changeVolume()` finden Sie unter [Verknüpfte Oszillatoren steuern](#verknüpfte_oszillatoren_steuern).

Direkt nach der Deklaration der Funktion `setup()` registrieren wir einen Handler für das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis der Wiedergabe-Checkbox. Mehr über die Methode `togglePlay()` erfahren Sie unter [Oszillatoren ein- und ausschalten](#oszillatoren_ein-_und_ausschalten). Damit sind alle Vorbereitungen abgeschlossen. Sehen wir uns den Ablauf an.

```js
playButton.addEventListener("change", togglePlay);
```

#### Oszillatoren ein- und ausschalten

Da ein [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) keinen Pausenzustand unterstützt, müssen wir diesen simulieren: Wir beenden die Oszillatoren und starten sie erneut, wenn der Benutzer die Wiedergabe-Checkbox nochmals anklickt, um sie wieder einzuschalten. Sehen wir uns den Code an.

```js
function togglePlay(event) {
  if (!playButton.checked) {
    stopOscillators();
  } else {
    // If it is the first start, initialize the audio graph
    if (!context) {
      setup();
    }
    startOscillators();
  }
}
```

Wenn das Steuerelement `playButton` nicht aktiviert ist, werden die Oszillatoren bereits wiedergegeben. Wir rufen dann `stopOscillators()` auf, um sie zu beenden. Den zugehörigen Code finden Sie weiter unten unter [Oszillatoren stoppen](#oszillatoren_stoppen).

Wenn das Steuerelement `playButton` aktiviert ist, befinden wir uns derzeit im Pausenzustand. Wir rufen dann `startOscillators()` auf, damit die Oszillatoren ihre Töne wiedergeben. Dieser Code wird weiter unten unter [Oszillatoren starten](#oszillatoren_starten) beschrieben.

#### Verknüpfte Oszillatoren steuern

Die Funktion `changeVolume()` verarbeitet die Ereignisse des Schiebereglers, mit dem die Verstärkung des verknüpften Oszillatorpaars eingestellt wird. Sie sieht so aus:

```js
function changeVolume(event) {
  constantNode.offset.value = volumeControl.value;
}
```

Diese einfache Funktion steuert die Verstärkung beider Nodes. Dazu müssen wir lediglich den Wert des Parameters [`offset`](/de/docs/Web/API/ConstantSourceNode/offset) des [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) setzen. Dieser Wert wird zum konstanten Ausgangswert des Nodes und an alle seine Ausgänge weitergegeben, also an `gainNode2` und `gainNode3`.

Dieses Beispiel ist zwar sehr einfach. Stellen Sie sich aber einen Synthesizer mit 32 Oszillatoren vor, bei dem mehrere Parameter über viele miteinander verbundene Nodes hinweg verknüpft sind. Wenn sich die Anzahl der zum Anpassen aller Parameter nötigen Operationen verringert, ist das sowohl für den Codeumfang als auch für die Leistung äußerst wertvoll.

#### Oszillatoren starten

Wenn der Benutzer auf die Wiedergabe-/Pause-Schaltfläche klickt, während die Oszillatoren nicht wiedergegeben werden, wird die Funktion `startOscillators()` aufgerufen.

```js
function startOscillators() {
  oscNode1 = new OscillatorNode(context, {
    type: "sine",
    frequency: 261.6255653005986, // middle C
  });
  oscNode1.connect(gainNode1);

  oscNode2 = new OscillatorNode(context, {
    type: "sine",
    frequency: 329.6275569128699, // E
  });
  oscNode2.connect(gainNode2);

  oscNode3 = new OscillatorNode(context, {
    type: "sine",
    frequency: 391.99543598174927, // G
  });
  oscNode3.connect(gainNode3);

  oscNode1.start();
  oscNode2.start();
  oscNode3.start();
}
```

Jeder der drei Oszillatoren wird auf dieselbe Weise eingerichtet: Wir erstellen den [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) durch Aufruf des Konstruktors [`OscillatorNode()`](/de/docs/Web/API/OscillatorNode/OscillatorNode) mit zwei Optionen:

1. Wir setzen `type` des Oszillators auf `"sine"`, um eine Sinuswelle als Audio-Wellenform zu verwenden.
2. Wir setzen `frequency` des Oszillators auf den gewünschten Wert. In diesem Fall wird `oscNode1` auf das mittlere C eingestellt, während `oscNode2` und `oscNode3` mit den Tönen E und G den Akkord vervollständigen.

Anschließend verbinden wir den neuen Oszillator mit dem entsprechenden Gain-Node.

Sobald alle drei Oszillatoren erstellt wurden, starten wir sie, indem wir nacheinander jeweils ihre Methode [`ConstantSourceNode.start()`](/de/docs/Web/API/AudioScheduledSourceNode/start) aufrufen.

#### Oszillatoren stoppen

Um die Töne anzuhalten, wenn der Benutzer in den Pausenzustand wechselt, müssen wir lediglich jeden Node stoppen.

```js
function stopOscillators() {
  oscNode1.stop();
  oscNode2.stop();
  oscNode3.stop();
}
```

Jeder Node wird durch Aufruf seiner Methode [`ConstantSourceNode.stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop) gestoppt.

### Ergebnis

{{ EmbedLiveSample('Example', 600, 120) }}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Einfache Synthesizer-Tastatur](/de/docs/Web/API/Web_Audio_API/Simple_synth) (Beispiel)
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
- [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)
