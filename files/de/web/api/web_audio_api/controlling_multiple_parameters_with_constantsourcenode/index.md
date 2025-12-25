---
title: Steuerung mehrerer Parameter mit ConstantSourceNode
slug: Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode
l10n:
  sourceCommit: 3641c873f377a9b2dcdf9744e11756a21d099875
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel demonstriert, wie Sie einen [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) verwenden können, um mehrere Parameter so zu verknüpfen, dass sie denselben Wert teilen, welcher durch das Setzen des [`ConstantSourceNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset) Parameters geändert werden kann.

Manchmal möchten Sie möglicherweise mehrere Audioparameter verknüpfen, sodass sie denselben Wert teilen und irgendwie verändert werden können. Beispielsweise könnten Sie eine Reihe von Oszillatoren haben, von denen zwei dasselbe konfigurierbare Volumen teilen müssen, oder Sie haben einen Filter, der auf bestimmte Eingänge angewendet wird, aber nicht auf alle. Sie könnten eine Schleife verwenden und den Wert jedes betroffenen [`AudioParam`](/de/docs/Web/API/AudioParam) einzeln ändern. Allerdings gibt es zwei Nachteile bei diesem Ansatz: Zum einen ist das zusätzlicher Code, den Sie, wie Sie gleich sehen werden, nicht schreiben müssen; zum anderen nutzt diese Schleife wertvolle CPU-Zeit auf Ihrem Thread (wahrscheinlich dem Hauptthread), und es gibt eine Möglichkeit, all diese Arbeit auf den Audio-Rendering-Thread auszulagern, der für diese Art von Arbeit optimiert ist und möglicherweise auf einer geeigneteren Prioritätsebene läuft als Ihr Code.

Die Lösung ist einfach und beinhaltet die Verwendung eines Audio-Knotentyps, der auf den ersten Blick nicht sehr nützlich erscheint: der [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode).

## Die Technik

Die Verwendung eines `ConstantSourceNode` ist eine mühelose Möglichkeit, etwas zu tun, das schwierig erscheinen mag. Sie müssen einen [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) erstellen und ihn mit allen [`AudioParam`](/de/docs/Web/API/AudioParam)s verbinden, deren Werte verknüpft sein sollen, um immer gleich zu sein. Da der [`offset`](/de/docs/Web/API/ConstantSourceNode/offset)-Wert des `ConstantSourceNode` direkt an alle seine Ausgänge gesendet wird, fungiert er als Verteiler für diesen Wert und sendet ihn an jeden verbundenen Parameter.

Das folgende Diagramm zeigt, wie dies funktioniert: Ein Eingabewert, `N`, wird als Wert der [`ConstantSourceNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset)-Eigenschaft festgelegt. Der `ConstantSourceNode` kann so viele Ausgänge haben, wie nötig; in diesem Fall haben wir ihn mit drei Knoten verbunden: zwei [`GainNode`](/de/docs/Web/API/GainNode)s und einem [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode). So wird `N` zum Wert des angegebenen Parameters ([`gain`](/de/docs/Web/API/GainNode/gain) für die [`GainNode`](/de/docs/Web/API/GainNode)s und pan für den [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)).

![Diagramm im SVG, das zeigt, wie ConstantSourceNode verwendet werden kann, um einen Eingabeparameter auf mehrere Knoten zu teilen.](customsourcenode-as-splitter.svg)

Als Ergebnis werden jedes Mal, wenn Sie `N` ändern (den Wert des Eingabe- [`AudioParam`](/de/docs/Web/API/AudioParam)), die Werte der beiden `GainNode.gain`-Eigenschaften und der Wert der `StereoPannerNode` 's `pan`-Eigenschaften alle auf `N` gesetzt.

## Beispiel

Werfen wir einen Blick darauf, wie diese Technik in der Praxis funktioniert. In diesem einfachen Beispiel erstellen wir drei [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)-Objekte. Zwei von ihnen haben einstellbaren Gain, der über ein gemeinsames Eingabesteuerung gesteuert wird. Der andere Oszillator hat ein festes Volumen.

### HTML

Der HTML-Inhalt für dieses Beispiel ist hauptsächlich ein Kontrollkästchen, geformt als eigentliche Taste, um die Oszillatortöne ein- und auszuschalten, und ein {{HTMLElement("input")}}-Element vom Typ `range`, um das Volumen von zwei der drei Oszillatoren zu steuern.

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

Sehen wir uns nun den JavaScript-Code an, Stück für Stück.

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
  - : Der [`AudioContext`](/de/docs/Web/API/AudioContext), in dem alle Audio-Knoten existieren; er wird nach einer Benutzeraktion initialisiert.
- `playButton` und `volumeControl`
  - : Referenzen zu den Steuerungselementen für die Wiedergabetaste und die Lautstärkeregelung.
- `oscNode1`, `oscNode2` und `oscNode3`
  - : Die drei [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)s, die den Akkord erzeugen.
- `gainNode1`, `gainNode2` und `gainNode3`
  - : Die drei [`GainNode`](/de/docs/Web/API/GainNode)-Instanzen, die die Lautstärkepegel für jeden der drei Oszillatoren bereitstellen. `gainNode2` und `gainNode3` werden miteinander verknüpft, um denselben einstellbaren Wert mit dem [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) zu teilen.
- `constantNode`
  - : Der [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode), der die Werte von `gainNode2` und `gainNode3` gemeinsam steuert.

Sehen wir uns nun die `setup()`-Funktion an, die aufgerufen wird, wenn der Benutzer die Wiedergabetaste zum ersten Mal umschaltet; sie erledigt alle Initialisierungsaufgaben, um das Audio-Graph zu erstellen.

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

Zuerst greifen wir auf den [`AudioContext`](/de/docs/Web/API/AudioContext) des Fensters zu und speichern die Referenz in `context`. Dann erhalten wir Referenzen zu den Steuerelementen, indem wir `playButton` auf die Wiedergabetaste und `volumeControl` auf den Regler verweisen, den der Benutzer verwenden wird, um den Gain des verbundenen Oszillatorpaares einzustellen.

Anschließend wird der [`GainNode`](/de/docs/Web/API/GainNode) `gainNode1` erstellt, um die Lautstärke für den nicht verbundenen Oszillator (`oscNode1`) zu steuern. Wir setzen diesen Gain auf 0,5. Wir erstellen auch `gainNode2` und `gainNode3`, setzen deren Werte auf die von `gainNode1` und dann den Wert des Lautstärkereglers auf denselben Wert, damit er synchron mit dem von ihm gesteuerten Gain-Level bleibt.

Sobald alle Gain-Knoten erstellt sind, erstellen wir den [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode), `constantNode`. Wir verbinden seinen Ausgang mit dem `gain`- [`AudioParam`](/de/docs/Web/API/AudioParam) sowohl von `gainNode2` als auch von `gainNode3` und starten den konstanten Knoten, indem wir seine [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)-Methode aufrufen; jetzt sendet er den Wert 0,5 an die Werte der beiden Gain-Knoten, und jede Änderung an [`constantNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset) wird automatisch den Gain von `gainNode2` und `gainNode3` setzen (was ihre Audioeingänge wie erwartet beeinflusst).

Am Ende verbinden wir alle Gain-Knoten mit dem [`AudioContext`](/de/docs/Web/API/AudioContext)'s [`destination`](/de/docs/Web/API/BaseAudioContext/destination), damit jeder Ton, der an die Gain-Knoten geliefert wird, den Ausgang erreicht, sei es Lautsprecher, Kopfhörer, ein Aufnahme-Stream oder jeder andere Ausgabetyp.

Dann weisen wir einen Handler für das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis des Lautstärkereglers zu (siehe [Steuerung der verbundenen Oszillatoren](#steuerung_der_verbundenen_oszillatoren), um die sehr kurze `changeVolume()`-Methode zu sehen).

Direkt nach der Deklaration der `setup()`-Funktion fügen wir einen Handler für das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis des Wiedergabekontrollkästchens hinzu (siehe [Oszillatoren ein- und ausschalten](#oszillatoren_ein-_und_ausschalten) für weitere Informationen zur `togglePlay()`-Methode), und die Bühne ist vorbereitet. Sehen wir, wie die Aktion abläuft.

```js
playButton.addEventListener("change", togglePlay);
```

#### Oszillatoren ein- und ausschalten

Da [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) den Begriff des Pausierens nicht unterstützt, müssen wir dies simulieren, indem wir die Oszillatoren beenden und sie wieder starten, wenn der Benutzer erneut auf das Kontrollkästchen klickt, um sie wieder einzuschalten. Sehen wir uns den Code an.

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

Wenn das `playButton`-Widget nicht aktiviert ist, spielen wir bereits die Oszillatoren, und wir rufen `stopOscillators()` auf, um die Oszillatoren abzuschalten. Siehe [Oszillatoren stoppen](#oszillatoren_stoppen) unten für diesen Code.

Wenn das `playButton`-Widget aktiviert ist, was anzeigt, dass wir derzeit pausiert sind, rufen wir `startOscillators()` auf, um die Oszillatoren dazu zu bringen, ihre Töne abzuspielen. Unten beschreiben wir diesen Code unter [Oszillatoren starten](#oszillatoren_starten).

#### Steuerung der verbundenen Oszillatoren

Die `changeVolume()`-Funktion, der Ereignishandler für das Steuerungselement des Sliders für den Gain des verbundenen Oszillatorpaares, sieht folgendermaßen aus:

```js
function changeVolume(event) {
  constantNode.offset.value = volumeControl.value;
}
```

Diese einfache Funktion steuert den Gain auf beiden Knoten. Alles, was wir tun müssen, ist den Wert des [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)'s [`offset`](/de/docs/Web/API/ConstantSourceNode/offset)-Parameters zu setzen. Dieser Wert wird zum konstanten Ausgangswert des Knotens, der an alle seine Ausgänge gesendet wird, `gainNode2` und `gainNode3`.

Während dies ein sehr einfaches Beispiel ist, stellen Sie sich vor, Sie hätten einen Synthesizer mit 32 Oszillatoren und mehreren verbundenen Parametern, die über viele gepatchte Knoten im Spiel sind. Die Reduzierung der Anzahl der Operationen, um sie alle anzupassen, wird sowohl für die Codegröße als auch für die Leistung von unschätzbarem Wert sein.

#### Oszillatoren starten

Wenn der Benutzer die Wiedergabe-/Pause-Taste drückt, während die Oszillatoren nicht spielen, wird die Funktion `startOscillators()` aufgerufen.

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

Jeder der drei Oszillatoren wird auf die gleiche Weise eingerichtet, indem der [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) erstellt wird, indem der [`OscillatorNode()`](/de/docs/Web/API/OscillatorNode/OscillatorNode)-Konstruktor mit zwei Optionen aufgerufen wird:

1. Stellen Sie den `type` des Oszillators auf `"sine"` ein, um eine Sinuswelle als Audio-Wellenform zu verwenden.
2. Stellen Sie die `frequency` des Oszillators auf den gewünschten Wert ein; in diesem Fall wird `oscNode1` auf ein mittleres C gesetzt, während `oscNode2` und `oscNode3` den Akkord ergänzen, indem sie die E- und G-Noten spielen.

Dann verbinden wir den neuen Oszillator mit dem entsprechenden Gain-Knoten.

Sobald alle drei Oszillatoren erstellt wurden, werden sie gestartet, indem wir die [`ConstantSourceNode.start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)-Methode nacheinander aufrufen.

#### Oszillatoren stoppen

Das Stoppen der Oszillatoren, wenn der Benutzer den Wiedergabestatus umschaltet, um die Töne zu pausieren, ist so einfach wie das Stoppen jedes Knotens.

```js
function stopOscillators() {
  oscNode1.stop();
  oscNode2.stop();
  oscNode3.stop();
}
```

Jeder Knoten wird gestoppt, indem seine [`ConstantSourceNode.stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop)-Methode aufgerufen wird.

### Ergebnis

{{ EmbedLiveSample('Example', 600, 120) }}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Einfaches Synthesizer-Keyboard](/de/docs/Web/API/Web_Audio_API/Simple_synth) (Beispiel)
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
- [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)
