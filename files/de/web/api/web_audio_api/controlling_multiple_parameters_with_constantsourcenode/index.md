---
title: Steuerung mehrerer Parameter mit ConstantSourceNode
slug: Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode
l10n:
  sourceCommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel zeigt, wie man einen [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) verwendet, um mehrere Parameter miteinander zu verknüpfen, sodass sie denselben Wert teilen, der durch Festlegen des Wertes des [`ConstantSourceNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset) Parameters geändert werden kann.

Manchmal möchten Sie möglicherweise, dass mehrere Audioparameter miteinander verknüpft werden, sodass sie denselben Wert teilen und dennoch geändert werden können. Zum Beispiel haben Sie möglicherweise eine Reihe von Oszillatoren, von denen zwei dasselbe einstellbare Volumen teilen müssen, oder Sie haben einen Filter, der auf bestimmte Eingänge, aber nicht alle angewendet wird. Sie könnten eine Schleife verwenden und den Wert jedes betroffenen [`AudioParam`](/de/docs/Web/API/AudioParam) einzeln ändern. Es gibt jedoch zwei Nachteile bei dieser Vorgehensweise: Erstens ist das zusätzlicher Code, den Sie, wie Sie gleich sehen werden, nicht schreiben müssen; und zweitens verwendet diese Schleife wertvolle CPU-Zeit auf Ihrem Thread (wahrscheinlich dem Haupt-Thread), und es gibt eine Möglichkeit, diese gesamte Arbeit auf den Audio-Rendering-Thread auszulagern, der für diese Art von Arbeit optimiert ist und möglicherweise auf einem angemesseneren Prioritätslevel läuft als Ihr Code.

Die Lösung ist einfach und beinhaltet die Verwendung eines Audio-Knotentyps, der auf den ersten Blick nicht besonders nützlich erscheint: [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode).

## Die Technik

Die Verwendung eines `ConstantSourceNode` ist eine mühelose Möglichkeit, etwas zu tun, das schwierig erscheinen mag. Sie müssen einen [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) erstellen und ihn mit allen [`AudioParam`](/de/docs/Web/API/AudioParam)s verbinden, deren Werte miteinander verknüpft sein sollen. Da der [`offset`](/de/docs/Web/API/ConstantSourceNode/offset) Wert des `ConstantSourceNode` direkt an alle seine Ausgänge gesendet wird, fungiert er als Verteiler für diesen Wert und sendet ihn an jeden verbundenen Parameter.

Das Diagramm unten zeigt, wie dies funktioniert: ein Eingabewert, `N`, wird als Wert der [`ConstantSourceNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset) Eigenschaft festgelegt. Der `ConstantSourceNode` kann so viele Ausgänge haben, wie nötig; in diesem Fall haben wir ihn mit drei Knoten verbunden: zwei [`GainNode`](/de/docs/Web/API/GainNode)s und einen [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode). So wird `N` zum Wert des angegebenen Parameters ([`gain`](/de/docs/Web/API/GainNode/gain) für die [`GainNode`](/de/docs/Web/API/GainNode)s und `pan` für den [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode).

![Diagramm in SVG, das zeigt, wie ConstantSourceNode als Verteiler eines Eingabeparameters verwendet werden kann, um ihn mit mehreren Knoten zu teilen.](customsourcenode-as-splitter.svg)

Als Ergebnis, wann immer Sie `N` ändern (den Wert des Eingabe [`AudioParam`](/de/docs/Web/API/AudioParam), werden die Werte der beiden `GainNode.gain` Eigenschaften und der Wert der `StereoPannerNode` `pan` Eigenschaften alle auf `N` gesetzt.

## Beispiel

Schauen wir uns diese Technik in Aktion an. In diesem einfachen Beispiel erstellen wir drei [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) Objekte. Zwei von ihnen haben ein einstellbares Gain, das mit einem gemeinsamen Eingaberegler gesteuert wird. Der andere Oszillator hat ein festes Volumen.

### HTML

Der HTML-Inhalt für dieses Beispiel ist hauptsächlich ein Kontrollkästchen, das wie ein tatsächlicher Button geformt ist, um die Oszillator-Töne ein- und auszuschalten, und ein {{HTMLElement("input")}}-Element vom Typ `range`, um das Volumen von zwei der drei Oszillatoren zu steuern.

```html
<div class="controls">
    <input type="checkbox" id="playButton">
    <label for="playButton">Activate: </label>
    <label for="volumeControl">Volume: </label>
    <input type="range" min="0.0" max="1.0" step="0.01"
           value="0.8" name="volume" id="volumeControl">
  </div>
</div>

<p>Toggle the checkbox above to start and stop the tones, and use the volume control to
change the volume of the notes E and G in the chord.</p>
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

#playButton:not(checked) + label::after {
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

Schauen wir uns nun den JavaScript-Code an, Schritt für Schritt.

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
  - : Der [`AudioContext`](/de/docs/Web/API/AudioContext), in dem alle Audio-Knoten leben; er wird während einer Benutzeraktion initialisiert.
- `playButton` und `volumeControl`
  - : Referenzen auf den Abspiel-Button und die Volumensteuerungselemente.
- `oscNode1`, `oscNode2` und `oscNode3`
  - : Die drei [`OscillatorNode`](/de/docs/Web/API/OscillatorNode), die den Akkord erzeugen.
- `gainNode1`, `gainNode2` und `gainNode3`
  - : Die drei [`GainNode`](/de/docs/Web/API/GainNode)-Instanzen, die die Lautstärkepegel für jeden der drei Oszillatoren bereitstellen. `gainNode2` und `gainNode3` werden zusammen mit dem [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) verbunden, um denselben, einstellbaren Wert zu haben.
- `constantNode`
  - : Der [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode), der die Werte von `gainNode2` und `gainNode3` zusammen steuert.

Schauen wir uns nun die `setup()` Funktion an, die beim ersten Mal aufgerufen wird, wenn der Benutzer den Wiedergabe-Button umschaltet; sie erledigt alle Initialisierungsaufgaben, um das Audio-Graphen einzurichten.

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
  volumeControl.addEventListener("input", changeVolume, false);
}
```

Zuerst erhalten wir Zugriff auf den [`AudioContext`](/de/docs/Web/API/AudioContext) des Fensters und speichern die Referenz in `context`. Dann erhalten wir Referenzen zu den Steuerungs-Widgets, indem wir `playButton` auf den Abspiel-Button und `volumeControl` auf den Schieberegler setzen, den der Benutzer verwenden wird, um den Gain-Wert des verbundenen Oszillatorpaares anzupassen.

Als nächstes wird der [`GainNode`](/de/docs/Web/API/GainNode) `gainNode1` erstellt, um die Lautstärke für den nicht verbundenen Oszillator (`oscNode1`) zu regeln. Wir setzen diesen Gain auf 0.5. Wir erstellen auch `gainNode2` und `gainNode3`, setzen ihre Werte auf den von `gainNode1` ein, und setzen den Wert des Volumenschiebers auf denselben Wert, um synchron mit dem Gain-Level zu bleiben, das er steuert.

Sobald alle Gain-Knoten erstellt sind, erstellen wir den [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode), `constantNode`. Wir verbinden seinen Ausgang mit dem `gain` [`AudioParam`](/de/docs/Web/API/AudioParam) sowohl von `gainNode2` als auch `gainNode3`, und wir starten den Constant-Knoten, indem wir seine [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start) Methode aufrufen; nun sendet er den Wert 0.5 an die zwei Gain-Knoteneinträge, und jede Änderung an [`constantNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset) wird automatisch den Gain sowohl von `gainNode2` als auch `gainNode3` einstellen (und die Audioeingänge entsprechend beeinflussen).

Schließlich verbinden wir alle Gain-Knoten mit dem [`AudioContext`](/de/docs/Web/API/AudioContext)'s [`destination`](/de/docs/Web/API/BaseAudioContext/destination), damit jeder Ton, der an die Gain-Knoten geliefert wird, das Ausgabeziel erreicht, sei es Lautsprecher, Kopfhörer, ein Aufnahme-Stream oder ein anderer Ausgabentyp.

Dann weisen wir einen Handler für das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis des Volumenschiebers zu (siehe [Steuern der verknüpften Oszillatoren](#steuern_der_verknüpften_oszillatoren), um die sehr kurze `changeVolume()`-Methode zu sehen).

Unmittelbar nachdem die `setup()` Funktion deklariert wurde, fügen wir einen Handler für das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis des Abspiel-Kontrollkästchens hinzu (siehe [Umschalten der Oszillatoren Ein/Aus](#umschalten_der_oszillatoren_ein/aus) für mehr zur `togglePlay()`-Methode), und die Bühne ist bereit. Schauen wir, wie die Aktion abläuft.

```js
playButton.addEventListener("change", togglePlay, false);
```

#### Umschalten der Oszillatoren Ein/Aus

Da [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) den Begriff eines Pausenzustands nicht unterstützt, müssen wir es simulieren, indem wir die Oszillatoren beenden und sie erneut starten, wenn der Benutzer erneut auf das Abspiel-Kontrollkästchen klickt, um sie wieder einzuschalten. Schauen wir uns den Code an.

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

Wenn das `playButton` Widget angekreuzt ist, spielen die Oszillatoren bereits, und wir rufen `stopOscillators()` auf, um die Oszillatoren zu stoppen. Siehe [Stoppen der Oszillatoren](#stoppen_der_oszillatoren) unten für diesen Code.

Wenn das `playButton` Widget angekreuzt ist, was anzeigt, dass wir derzeit pausiert sind, rufen wir `startOscillators()` auf, um die Oszillatoren ihre Töne spielen zu lassen. Unten beschreiben wir diesen Code unter [Starten der Oszillatoren](#starten_der_oszillatoren).

#### Steuern der verknüpften Oszillatoren

Die `changeVolume()` Funktion, der Ereignishandler für den Schieberegler der Lautstärke des verbundenen Oszillatorpaares, sieht so aus:

```js
function changeVolume(event) {
  constantNode.offset.value = volumeControl.value;
}
```

Diese einfache Funktion steuert den Gain-Wert beider Knoten. Alles, was wir tun müssen, ist den Wert des [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)'s [`offset`](/de/docs/Web/API/ConstantSourceNode/offset) Parameter festzulegen. Dieser Wert wird zum konstanten Ausgabewert des Knotens und an alle seine Ausgänge, `gainNode2` und `gainNode3`, ausgegeben.

Während dies ein grundlegendes Beispiel ist, stellen Sie sich vor, dass Sie einen 32-Oszillator-Synthesizer mit mehreren verknüpften Parametern haben, die über viele gepatchte Knoten hinweg in Betrieb sind. Die Verringerung der Anzahl der Operationen zur Anpassung aller wird sich sowohl für die Codegröße als auch für die Leistung als wertvoll erweisen.

#### Starten der Oszillatoren

Wenn der Benutzer den Abspiel/Pause-Schalter drückt, während die Oszillatoren nicht spielen, wird die `startOscillators()` Funktion aufgerufen.

```js
function startOscillators() {
  oscNode1 = new OscillatorNode(context, {
    type: "sine",
    frequency: 261.625565300598634, // middle C$
  });
  oscNode1.connect(gainNode1);

  oscNode2 = new OscillatorNode(context, {
    type: "sine",
    frequency: 329.627556912869929, // E
  });
  oscNode2.connect(gainNode2);

  oscNode3 = new OscillatorNode(context, {
    type: "sine",
    frequency: 391.995435981749294, // G
  });
  oscNode3.connect(gainNode3);

  oscNode1.start();
  oscNode2.start();
  oscNode3.start();
}
```

Jeder der drei Oszillatoren wird auf dieselbe Weise eingerichtet, indem der [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) erstellt wird, indem der [`OscillatorNode()`](/de/docs/Web/API/OscillatorNode/OscillatorNode) Konstruktor mit zwei Optionen aufgerufen wird:

1. Stellen Sie den Oszillator `type` auf `"sine"`, um eine Sinuswelle als Audio-Wellenform zu verwenden.
2. Stellen Sie die `frequency` des Oszillators auf den gewünschten Wert ein; in diesem Fall wird `oscNode1` auf ein mittleres C gesetzt, während `oscNode2` und `oscNode3` den Akkord durch das Abspielen der E- und G-Noten vervollständigen.

Dann verbinden wir den neuen Oszillator mit dem entsprechenden Gain-Knoten.

Sobald alle drei Oszillatoren erstellt sind, werden sie gestartet, indem jeweils die [`ConstantSourceNode.start()`](/de/docs/Web/API/AudioScheduledSourceNode/start) Methode aufgerufen wird.

#### Stoppen der Oszillatoren

Das Stoppen der Oszillatoren, wenn der Benutzer den Wiedergabezustand umschaltet, um die Töne zu pausieren, ist so einfach wie das Stoppen jedes Knotens.

```js
function stopOscillators() {
  oscNode1.stop();
  oscNode2.stop();
  oscNode3.stop();
}
```

Jeder Knoten wird gestoppt, indem seine [`ConstantSourceNode.stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop) Methode aufgerufen wird.

### Ergebnis

{{ EmbedLiveSample('Example', 600, 120) }}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Einfaches Synthesizer-Keyboard](/de/docs/Web/API/Web_Audio_API/Simple_synth) (Beispiel)
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
- [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)
