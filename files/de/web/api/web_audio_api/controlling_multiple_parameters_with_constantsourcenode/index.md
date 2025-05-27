---
title: Steuerung mehrerer Parameter mit ConstantSourceNode
slug: Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode
l10n:
  sourceCommit: edb16c0a662d7e719efe67561389a7a087c1ace9
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel demonstriert, wie Sie einen [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) verwenden, um mehrere Parameter miteinander zu verknüpfen, sodass sie denselben Wert teilen können, der durch Setzen des Werts des Parameters [`ConstantSourceNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset) geändert werden kann.

Manchmal möchten Sie möglicherweise, dass mehrere Audio-Parameter miteinander verknüpft sind, sodass sie denselben Wert teilen, während sie auf irgendeine Weise geändert werden. Zum Beispiel haben Sie möglicherweise einen Satz von Oszillatoren, von denen zwei dasselbe konfigurierbare Volumen teilen müssen, oder Sie haben einen Filter, der auf bestimmte Eingaben angewendet wird, aber nicht auf alle. Sie könnten eine Schleife verwenden und den Wert jedes betroffenen [`AudioParam`](/de/docs/Web/API/AudioParam) nacheinander ändern. Es gibt jedoch zwei Nachteile, dies auf diese Weise zu tun: Erstens ist das zusätzlicher Code, den Sie wie gleich sehen werden, nicht schreiben müssen; und zweitens nutzt diese Schleife wertvolle CPU-Zeit auf Ihrem Thread (wahrscheinlich der Haupt-Thread), und es gibt eine Möglichkeit, die gesamte Arbeit auf den Audio-Rendering-Thread auszulagern, der für diese Art von Arbeit optimiert ist und möglicherweise auf einer angemesseneren Prioritätsebene als Ihr Code ausgeführt wird.

Die Lösung ist einfach und beinhaltet die Verwendung eines Audio-Knotentyps, der auf den ersten Blick nicht so nützlich erscheint: [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode).

## Die Technik

Ein `ConstantSourceNode` zu verwenden, ist eine mühelose Möglichkeit, etwas zu tun, das schwer sein könnte. Sie müssen einen [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) erstellen und ihn mit allen [`AudioParam`](/de/docs/Web/API/AudioParam)s verbinden, deren Werte verknüpft sein sollen, um immer übereinzustimmen. Da der [`offset`](/de/docs/Web/API/ConstantSourceNode/offset)-Wert des `ConstantSourceNode` direkt an alle seine Ausgänge gesendet wird, fungiert er als Splitter für diesen Wert und sendet ihn an jeden verbundenen Parameter.

Das Diagramm unten zeigt, wie dies funktioniert; ein Eingabewert, `N`, wird als der Wert der [`ConstantSourceNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset)-Eigenschaft festgelegt. Der `ConstantSourceNode` kann so viele Ausgänge wie nötig haben; in diesem Fall haben wir ihn mit drei Knoten verbunden: zwei [`GainNode`](/de/docs/Web/API/GainNode)s und einem [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode). Also wird `N` zum Wert des angegebenen Parameters ([`gain`](/de/docs/Web/API/GainNode/gain) für die [`GainNode`](/de/docs/Web/API/GainNode)s und `pan` für den [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode).

![Diagramm in SVG, das zeigt, wie ein ConstantSourceNode verwendet werden kann, um einen Eingabeparameter zu verteilen und mit mehreren Knoten zu teilen.](customsourcenode-as-splitter.svg)

Als Ergebnis wird jedes Mal, wenn Sie `N` (den Wert des Eingabe-`AudioParam`) ändern, auch die Werte der beiden `GainNode.gain`-Eigenschaften und der Wert der `pan`-Eigenschaften des `StereoPannerNode` auf `N` gesetzt.

## Beispiel

Sehen wir uns diese Technik in Aktion an. In diesem einfachen Beispiel erstellen wir drei [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)-Objekte. Zwei von ihnen haben einstellbare Verstärkung, gesteuert durch ein gemeinsames Eingabekontrollfeld. Der andere Oszillator hat ein festes Volumen.

### HTML

Der HTML-Inhalt für dieses Beispiel besteht hauptsächlich aus einer Checkbox, die als tatsächliche Schaltfläche geformt ist, um die Oszillator-Töne ein- und auszuschalten, und einem {{HTMLElement("input")}}-Element vom Typ `range`, um das Volumen von zwei der drei Oszillatoren zu steuern.

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

Schauen wir uns nun den JavaScript-Code Stück für Stück an.

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
  - : Referenzen auf die Wiedergabe-Taste und die Lautstärkeregler.
- `oscNode1`, `oscNode2` und `oscNode3`
  - : Die drei [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)s zur Erzeugung des Akkords.
- `gainNode1`, `gainNode2` und `gainNode3`
  - : Die drei [`GainNode`](/de/docs/Web/API/GainNode)-Instanzen, die die Lautstärkepegel für jeden der drei Oszillatoren bereitstellen. `gainNode2` und `gainNode3` werden so miteinander verknüpft, dass sie denselben einstellbaren Wert mithilfe des [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) haben.
- `constantNode`
  - : Der [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode), der verwendet wird, um die Werte von `gainNode2` und `gainNode3` gemeinsam zu steuern.

Betrachten wir nun die `setup()`-Funktion, die aufgerufen wird, wenn der Benutzer die Wiedergabe-Taste zum ersten Mal umschaltet; sie erledigt alle Initialisierungsaufgaben zum Einrichten des Audio-Diagramms.

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

Zuerst erhalten wir Zugriff auf den [`AudioContext`](/de/docs/Web/API/AudioContext) des Fensters und bewahren die Referenz in `context` auf. Dann erhalten wir Referenzen auf die Steuerelemente, indem wir `playButton` als Referenz auf die Wiedergabe-Taste und `volumeControl` als Referenz auf den Schieberegler setzen, den der Benutzer zur Einstellung der Verstärkung des verknüpften Oszillatorpaares verwenden wird.

Als nächstes wird der [`GainNode`](/de/docs/Web/API/GainNode) `gainNode1` erstellt, um das Volumen für den nicht verknüpften Oszillator (`oscNode1`) zu handhaben. Wir setzen diese Verstärkung auf 0,5. Wir erstellen auch `gainNode2` und `gainNode3`, setzen ihre Werte auf `gainNode1` ab, und setzen dann den Wert des Lautstärkereglers auf denselben Wert, sodass er synchron mit dem Verstärkungspegel bleibt, den er steuert.

Sobald alle Verstärkungs-Knoten erstellt wurden, erstellen wir den [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode), `constantNode`. Wir verbinden seinen Ausgang mit dem `gain`-[`AudioParam`](/de/docs/Web/API/AudioParam) sowohl von `gainNode2` als auch von `gainNode3`, und wir starten den konstanten Knoten, indem wir die Methode [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start) aufrufen; jetzt sendet sie den Wert 0,5 an die Werte der beiden Verstärkungs-Knoten, und jede Änderung von [`constantNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset) wird automatisch die Verstärkung von sowohl `gainNode2` als auch `gainNode3` einstellen (wirken sich auf ihre Audio-Eingänge wie erwartet aus).

Schließlich verbinden wir alle Verstärkungs-Knoten mit dem [`AudioContext`](/de/docs/Web/API/AudioContext)'s [`destination`](/de/docs/Web/API/BaseAudioContext/destination), damit jeder Klang, der zu den Verstärkungs-Knoten gesendet wird, das Ausgangssignal erreicht, sei es Lautsprecher, Kopfhörer, ein Aufnahme-Stream oder jeder andere Zieltyp.

Dann weisen wir einen Handler für das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis des Lautstärkereglers zu (siehe [Steuerung der verknüpften Oszillatoren](#steuerung_der_verknüpften_oszillatoren), um die sehr kurze `changeVolume()`-Methode zu sehen).

Direkt nach der Deklaration der `setup()`-Funktion fügen wir einen Handler für das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis der Wiedergabe-Checkbox hinzu (siehe [Umschalten der Oszillatoren ein- und ausschalten](#umschalten_der_oszillatoren_ein-_und_ausschalten) für mehr zur `togglePlay()`-Methode), und die Bühne ist bereit. Lassen Sie uns sehen, wie die Aktion abläuft.

```js
playButton.addEventListener("change", togglePlay, false);
```

#### Umschalten der Oszillatoren ein- und ausschalten

Weil [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) den Begriff eines pausierten Zustands nicht unterstützt, müssen wir ihn simulieren, indem wir die Oszillatoren beenden und sie neu starten, wenn der Benutzer erneut auf die Wiedergabe-Checkbox klickt, um sie wieder einzuschalten. Sehen wir uns den Code an.

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

Wenn das `playButton`-Widget aktiviert ist, spielen wir die Oszillatoren bereits und rufen `stopOscillators()` auf, um die Oszillatoren zu stoppen. Siehe [Stoppen der Oszillatoren](#stoppen_der_oszillatoren) unten für diesen Code.

Wenn das `playButton`-Widget aktiviert ist und anzeigt, dass wir derzeit auf Pause sind, rufen wir `startOscillators()` auf, um die Oszillatoren ihre Töne spielen zu lassen. Weiter unten beschreiben wir diesen Code unter [Starten der Oszillatoren](#starten_der_oszillatoren).

#### Steuerung der verknüpften Oszillatoren

Die `changeVolume()`-Funktion, der Ereignishandler für die Schiebereglersteuerung für die Verstärkung des verknüpften Oszillatorpaars, sieht so aus:

```js
function changeVolume(event) {
  constantNode.offset.value = volumeControl.value;
}
```

Diese einfache Funktion steuert die Verstärkung auf beiden Knoten. Alles, was wir tun müssen, ist den Wert des [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)'s [`offset`](/de/docs/Web/API/ConstantSourceNode/offset)-Parameters zu setzen. Dieser Wert wird zum konstanten Ausgangswert des Knotens, der allen seinen Ausgängen, `gainNode2` und `gainNode3`, zugeführt wird.

Obwohl dies ein sehr einfaches Beispiel ist, stellen Sie sich ein 32-Oszillator-Synthesizer mit mehreren verknüpften Parametern vor, die über viele verbundene Knoten abgespielt werden. Die Verkürzung der Anzahl der Operationen, um sie alle anzupassen, wird sowohl für die Code-Größe als auch für die Leistung von unschätzbarem Wert sein.

#### Starten der Oszillatoren

Wenn der Benutzer die Wiedergabe-/Pause-Taste klickt, während die Oszillatoren nicht spielen, wird die Funktion `startOscillators()` aufgerufen.

```js
function startOscillators() {
  oscNode1 = new OscillatorNode(context, {
    type: "sine",
    frequency: 261.6255653005986, // middle C$
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

Jeder der drei Oszillatoren wird auf die gleiche Weise eingerichtet, indem der [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) erstellt wird, indem der [`OscillatorNode()`](/de/docs/Web/API/OscillatorNode/OscillatorNode)-Konstruktor mit zwei Optionen aufgerufen wird:

1. Setzen Sie den `type` des Oszillators auf `"sine"`, um eine Sinuswelle als Audiowellenform zu verwenden.
2. Setzen Sie die `frequency` des Oszillators auf den gewünschten Wert; in diesem Fall wird `oscNode1` auf ein mittleres C gesetzt, während `oscNode2` und `oscNode3` den Akkord mit den Noten E und G vervollständigen.

Dann verbinden wir den neuen Oszillator mit dem entsprechenden Verstärkungs-Knoten.

Nachdem alle drei Oszillatoren erstellt wurden, werden sie gestartet, indem jeweils die [`ConstantSourceNode.start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)-Methode aufgerufen wird.

#### Stoppen der Oszillatoren

Das Stoppen der Oszillatoren, wenn der Benutzer den Wiedergabestatus umschaltet, um die Töne zu pausieren, ist so einfach wie das Stoppen jedes Knotens.

```js
function stopOscillators() {
  oscNode1.stop();
  oscNode2.stop();
  oscNode3.stop();
}
```

Jeder Knoten wird durch Aufrufen seiner [`ConstantSourceNode.stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop)-Methode gestoppt.

### Ergebnis

{{ EmbedLiveSample('Example', 600, 120) }}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Einfacher Synthesizer-Keyboard](/de/docs/Web/API/Web_Audio_API/Simple_synth) (Beispiel)
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
- [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)
