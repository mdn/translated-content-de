---
title: Steuerung mehrerer Parameter mit ConstantSourceNode
slug: Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel zeigt, wie Sie einen [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) verwenden, um mehrere Parameter miteinander zu verknüpfen, so dass sie denselben Wert teilen, der geändert werden kann, indem Sie den Wert des Parameters [`ConstantSourceNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset) setzen.

Manchmal möchten Sie vielleicht, dass mehrere Audioparameter so verknüpft sind, dass sie denselben Wert teilen, während sie irgendwie geändert werden. Beispielsweise haben Sie vielleicht ein Set von Oszillatoren, von denen zwei dasselbe konfigurierbare Volumen teilen müssen, oder Sie haben einen Filter, der auf bestimmte Eingänge angewendet wird, aber nicht auf alle. Sie könnten eine Schleife verwenden und den Wert jedes betroffenen [`AudioParam`](/de/docs/Web/API/AudioParam) einzeln ändern. Es gibt jedoch zwei Nachteile bei dieser Vorgehensweise: Erstens ist das zusätzlicher Code, den Sie, wie Sie gleich sehen werden, nicht schreiben müssen; und zweitens verbraucht diese Schleife wertvolle CPU-Zeit in Ihrem Thread (wahrscheinlich im Hauptthread), und es gibt eine Möglichkeit, all diese Arbeit an den Audio-Rendering-Thread auszulagern, der für diese Art von Arbeit optimiert und möglicherweise auf einer angemesseneren Prioritätsstufe als Ihr Code ausgeführt wird.

Die Lösung ist einfach und beinhaltet die Verwendung eines Audio-Knotentyps, der auf den ersten Blick nicht allzu nützlich erscheint: [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode).

## Die Technik

Die Verwendung eines `ConstantSourceNode` ist ein müheloser Weg, um etwas zu tun, das sich vielleicht schwierig anhört. Sie müssen einen [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) erstellen und ihn mit allen [`AudioParam`](/de/docs/Web/API/AudioParam)s verbinden, deren Werte so verknüpft sein sollen, dass sie immer übereinstimmen. Da der [`offset`](/de/docs/Web/API/ConstantSourceNode/offset)-Wert des `ConstantSourceNode` direkt an alle seine Ausgänge gesendet wird, fungiert er als Verteiler für diesen Wert und sendet ihn an jeden verbundenen Parameter.

Das untenstehende Diagramm zeigt, wie dies funktioniert; ein Eingabewert `N` wird als Wert der [`ConstantSourceNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset)-Eigenschaft festgelegt. Der `ConstantSourceNode` kann so viele Ausgänge haben, wie nötig; in diesem Fall haben wir ihn mit drei Knoten verbunden: zwei [`GainNode`](/de/docs/Web/API/GainNode)s und einem [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode). So wird `N` zum Wert des angegebenen Parameters ([`gain`](/de/docs/Web/API/GainNode/gain) für die [`GainNode`](/de/docs/Web/API/GainNode)s und `pan` für den [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode).

![Diagramm im SVG-Format, das zeigt, wie der ConstantSourceNode verwendet werden kann, um einen Eingabeparameter auf mehrere Knoten zu verteilen.](customsourcenode-as-splitter.svg)

Als Ergebnis wird jedes Mal, wenn Sie `N` ändern (den Wert des Eingabe-`AudioParam`), der Wert der beiden `GainNode.gain`-Eigenschaften und der Wert des `StereoPannerNode`-`pan`-Eigenschaften ebenfalls auf `N` gesetzt.

## Beispiel

Schauen wir uns diese Technik in Aktion an. In diesem einfachen Beispiel erstellen wir drei [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)-Objekte. Zwei von ihnen haben einstellbares Gain, das über ein gemeinsames Eingabekontrollfeld gesteuert wird. Der andere Oszillator hat ein festes Volumen.

### HTML

Der HTML-Inhalt für dieses Beispiel ist hauptsächlich ein Kontrollkästchen, das als echter Knopf gestaltet ist, um die Oszillator-Töne ein- und auszuschalten, sowie ein {{HTMLElement("input")}}-Element vom Typ `range`, um die Lautstärke von zwei der drei Oszillatoren zu steuern.

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
  - : Der [`AudioContext`](/de/docs/Web/API/AudioContext), in dem alle Audio-Knoten leben; er wird während einer Benutzeraktion initialisiert.
- `playButton` und `volumeControl`
  - : Referenzen auf die Play-Schaltfläche und das Lautstärkeregler-Element.
- `oscNode1`, `oscNode2` und `oscNode3`
  - : Die drei [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)s, die den Akkord erzeugen.
- `gainNode1`, `gainNode2` und `gainNode3`
  - : Die drei [`GainNode`](/de/docs/Web/API/GainNode)-Instanzen, die die Lautstärkepegel für jeden der drei Oszillatoren bereitstellen. `gainNode2` und `gainNode3` werden so verknüpft, dass sie denselben einstellbaren Wert mit einem [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) haben.
- `constantNode`
  - : Der [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode), der die Werte von `gainNode2` und `gainNode3` gemeinsam steuert.

Sehen wir uns nun die `setup()`-Funktion an, die beim ersten Umschalten der Play-Taste aufgerufen wird; sie behandelt alle Initialisierungsaufgaben, um den Audio-Graphen einzurichten.

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

Zuerst erhalten wir Zugriff auf den [`AudioContext`](/de/docs/Web/API/AudioContext) des Fensters und speichern die Referenz in `context`. Dann holen wir Referenzen auf die Steuerungs-Widgets, indem wir `playButton` auf die Play-Taste und `volumeControl` auf das Schieberegler-Steuerelement verweisen, das der Benutzer verwenden wird, um das Gain des verknüpften Oszillator-Paares einzustellen.

Als nächstes wird der [`GainNode`](/de/docs/Web/API/GainNode) `gainNode1` erstellt, um die Lautstärke des nicht verknüpften Oszillators (`oscNode1`) zu steuern. Wir setzen dieses Gain auf 0,5. Wir erstellen auch `gainNode2` und `gainNode3`, setzen ihre Werte so, dass sie `gainNode1` entsprechen, und setzen den Wert des Lautstärkereglers auf denselben Wert, sodass er synchron mit dem Gain-Pegel bleibt, den er steuert.

Sobald alle Gain-Knoten erstellt wurden, erstellen wir den [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode), `constantNode`. Wir verbinden seinen Ausgang mit dem `gain`-`AudioParam` bei `gainNode2` und `gainNode3`, und wir starten den Konstantenknoten, indem wir seine [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)-Methode aufrufen; nun sendet er den Wert 0,5 an die beiden Gain-Knoten, und jede Änderung von [`constantNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset) wird automatisch das Gain von `gainNode2` und `gainNode3` einstellen (was erwartungsgemäß ihre Audioeingänge beeinflusst).

Schließlich verbinden wir alle Gain-Knoten mit dem [`destination`](/de/docs/Web/API/BaseAudioContext/destination) des [`AudioContext`](/de/docs/Web/API/AudioContext), sodass jeder Ton, der an die Gain-Knoten geliefert wird, das Ausgabeziel erreicht, sei es Lautsprecher, Kopfhörer, ein Aufnahme-Stream oder ein anderer Ausgabetyp.

Dann weisen wir einen Handler für das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis des Lautstärkereglers zu (siehe [Steuerung der verknüpften Oszillatoren](#steuerung_der_verknüpften_oszillatoren) für die sehr kurze `changeVolume()`-Methode).

Direkt nach der Deklaration der `setup()`-Funktion fügen wir dem [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis des Play-Kontrollkästchens einen Handler hinzu (siehe [Umschalten der Oszillatoren ein und aus](#umschalten_der_oszillatoren_ein_und_aus) für mehr zur `togglePlay()`-Methode), und die Bühne ist bereit. Sehen wir, wie die Aktion abläuft.

```js
playButton.addEventListener("change", togglePlay);
```

#### Umschalten der Oszillatoren ein und aus

Da [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) das Konzept eines Pausenzustandes nicht unterstützt, müssen wir es simulieren, indem wir die Oszillatoren beenden und sie erneut starten, wenn der Benutzer auf das Play-Kontrollkästchen klickt, um sie wieder einzuschalten. Werfen wir einen Blick auf den Code.

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

Wenn das `playButton`-Widget aktiviert ist, spielen wir die Oszillatoren bereits, und wir rufen `stopOscillators()` auf, um die Oszillatoren auszuschalten. Den Code dazu finden Sie unter [Stoppen der Oszillatoren](#stoppen_der_oszillatoren) weiter unten.

Wenn das `playButton`-Widget aktiviert ist, was darauf hinweist, dass wir derzeit pausiert sind, rufen wir `startOscillators()` auf, um die Oszillatoren ihre Töne spielen zu lassen. Weiter unten beschreiben wir diesen Code unter [Starten der Oszillatoren](#starten_der_oszillatoren).

#### Steuerung der verknüpften Oszillatoren

Die `changeVolume()`-Funktion, der Ereignis-Handler für das Schieberegler-Steuerelement für das Gain des verknüpften Oszillator-Paares, sieht so aus:

```js
function changeVolume(event) {
  constantNode.offset.value = volumeControl.value;
}
```

Diese einfache Funktion steuert das Gain auf beiden Knoten. Alles, was wir tun müssen, ist, den Wert des [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)'s [`offset`](/de/docs/Web/API/ConstantSourceNode/offset)-Parameters einzustellen. Dieser Wert wird zum konstanten Ausgabewert des Knotens, der an all seine Ausgänge, `gainNode2` und `gainNode3`, weitergegeben wird.

Während dies ein sehr einfaches Beispiel ist, stellen Sie sich vor, Sie haben einen Synthesizer mit 32 Oszillatoren und mehreren verknüpften Parametern, die über viele gepatchte Knoten hinweg in Betrieb sind. Die Anzahl der Operationen zu verkürzen, um sie alle anzupassen, wird sich als unschätzbar wertvoll erweisen, sowohl in Bezug auf den Codeumfang als auch auf die Leistung.

#### Starten der Oszillatoren

Wenn der Benutzer die Wiedergabe-/Pause-Taste klickt, während die Oszillatoren nicht spielen, wird die `startOscillators()`-Funktion aufgerufen.

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

Jeder der drei Oszillatoren wird auf die gleiche Weise eingerichtet, indem der [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) erstellt wird, indem Sie den [`OscillatorNode()`](/de/docs/Web/API/OscillatorNode/OscillatorNode)-Konstruktor mit zwei Optionen aufrufen:

1. Setzen Sie den Oszillator-`type` auf `"sine"`, um eine Sinuswelle als Audio-Wellenform zu verwenden.
2. Setzen Sie die Oszillator-`frequency` auf den gewünschten Wert; in diesem Fall wird `oscNode1` auf ein mittleres C gesetzt, während `oscNode2` und `oscNode3` den Akkord abrunden, indem sie die E- und G-Noten spielen.

Dann verbinden wir den neuen Oszillator mit dem entsprechenden Gain-Knoten.

Nachdem alle drei Oszillatoren erstellt wurden, werden sie gestartet, indem wir jeweils die [`ConstantSourceNode.start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)-Methode aufrufen.

#### Stoppen der Oszillatoren

Das Stoppen der Oszillatoren, wenn der Benutzer den Wiedergabestatus auf Pause umschaltet, ist so einfach wie das Stoppen jedes Knotens.

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
- [Einfaches Synthesizer-Keyboard](/de/docs/Web/API/Web_Audio_API/Simple_synth) (Beispiel)
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
- [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)
