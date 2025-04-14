---
title: Kontrolle mehrerer Parameter mit ConstantSourceNode
slug: Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel zeigt, wie Sie einen [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) verwenden können, um mehrere Parameter miteinander zu verbinden, sodass sie denselben Wert teilen, der durch Einstellen des Wertes des [`ConstantSourceNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset)-Parameters geändert werden kann.

Möglicherweise möchten Sie, dass mehrere Audio-Parameter verbunden sind, sodass sie denselben Wert teilen, während sie auf irgendeine Weise geändert werden. Zum Beispiel haben Sie vielleicht eine Gruppe von Oszillatoren, von denen zwei dieselbe konfigurierbare Lautstärke teilen müssen, oder Sie haben einen Filter, der auf bestimmte Eingänge angewendet wird, aber nicht auf alle. Sie könnten eine Schleife verwenden und den Wert jedes betroffenen [`AudioParam`](/de/docs/Web/API/AudioParam) einzeln ändern. Trotzdem gibt es zwei Nachteile bei dieser Vorgehensweise: Erstens ist das zusätzlicher Code, den Sie, wie Sie gleich sehen werden, nicht schreiben müssen; und zweitens verwendet diese Schleife wertvolle CPU-Zeit auf Ihrem Thread (wahrscheinlich dem Haupt-Thread), und es gibt eine Möglichkeit, all diese Arbeit auf den Audio-Rendering-Thread auszulagern, der für diese Art von Arbeit optimiert ist und möglicherweise auf einem angemesseneren Prioritätslevel läuft als Ihr Code.

Die Lösung ist einfach und beinhaltet die Verwendung eines Audio-Knotentyps, der auf den ersten Blick nicht besonders nützlich erscheint: [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode).

## Die Technik

Die Verwendung eines `ConstantSourceNode` ist eine mühelose Möglichkeit, etwas zu tun, das schwierig erscheinen mag. Sie müssen einen [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) erstellen und ihn mit all den [`AudioParam`](/de/docs/Web/API/AudioParam) verbinden, deren Werte miteinander verknüpft sein sollen, um immer übereinzustimmen. Da der [`offset`](/de/docs/Web/API/ConstantSourceNode/offset)-Wert des `ConstantSourceNode` direkt an alle seine Ausgänge gesendet wird, fungiert er als Splitter für diesen Wert und sendet ihn an jeden verbundenen Parameter.

Das untenstehende Diagramm zeigt, wie das funktioniert; ein Eingabewert `N` wird als Wert der [`ConstantSourceNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset)-Eigenschaft gesetzt. Der `ConstantSourceNode` kann so viele Ausgänge haben, wie nötig; in diesem Fall haben wir ihn mit drei Knoten verbunden: zwei [`GainNode`](/de/docs/Web/API/GainNode)s und einem [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode). Daher wird `N` zu dem Wert des angegebenen Parameters ([`gain`](/de/docs/Web/API/GainNode/gain) für die [`GainNode`](/de/docs/Web/API/GainNode)s und `pan` für den [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)).

![Diagramm im SVG-Format, das zeigt, wie der ConstantSourceNode verwendet werden kann, um einen Eingabeparameter zu teilen und ihn mit mehreren Knoten zu teilen.](customsourcenode-as-splitter.svg)

Folglich wird jedes Mal, wenn Sie `N` ändern (den Wert des Eingabe-[`AudioParam`](/de/docs/Web/API/AudioParam)), der Wert der beiden `GainNode.gain`-Eigenschaften und der Wert der `pan`-Eigenschaft des `StereoPannerNode` ebenfalls auf `N` gesetzt.

## Beispiel

Lassen Sie uns diese Technik in Aktion sehen. In diesem einfachen Beispiel erstellen wir drei [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)-Objekte. Zwei davon haben ein einstellbares Gain, das mit einer gemeinsamen Eingabesteuerung gesteuert wird. Der andere Oszillator hat eine feste Lautstärke.

### HTML

Der HTML-Inhalt für dieses Beispiel besteht hauptsächlich aus einem Kontrollkästchen, das als echter Knopf geformt ist, um die Oszillatortöne ein- und auszuschalten, und einem {{HTMLElement("input")}}-Element des Typs `range`, um die Lautstärke von zwei der drei Oszillatoren zu steuern.

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

Nun lassen Sie uns den JavaScript-Code Stück für Stück betrachten.

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
  - : Der [`AudioContext`](/de/docs/Web/API/AudioContext), in dem alle Audio-Knoten leben; er wird nach einer Benutzeraktion initialisiert.
- `playButton` und `volumeControl`
  - : Referenzen auf die Steuerelemente für den Abspielknopf und die Lautstärkeregelung.
- `oscNode1`, `oscNode2` und `oscNode3`
  - : Die drei [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)s, die das Akkord erzeugen.
- `gainNode1`, `gainNode2` und `gainNode3`
  - : Die drei [`GainNode`](/de/docs/Web/API/GainNode)-Instanzen, die die Lautstärkepegel für die drei Oszillatoren bereitstellen. `gainNode2` und `gainNode3` werden miteinander verbunden sein, um denselben einstellbaren Wert zu haben, unter Verwendung des [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode).
- `constantNode`
  - : Der [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode), der verwendet wird, um die Werte von `gainNode2` und `gainNode3` zusammen zu steuern.

Nun schauen wir uns die `setup()`-Funktion an, die aufgerufen wird, wenn der Benutzer den Abspielknopf das erste Mal umschaltet; sie kümmert sich um alle Initialisierungsaufgaben, um das Audio-Netzwerk einzurichten.

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

Zuerst greifen wir auf den [`AudioContext`](/de/docs/Web/API/AudioContext) des Fensters zu und speichern die Referenz in `context`. Dann erhalten wir Referenzen auf die Steuerungs-Widgets und setzen `playButton`, um auf den Abspielknopf zu verweisen, und `volumeControl`, um auf den Schieberegler zu verweisen, den der Benutzer verwendet, um die Verstärkung des verbundenen Oszillatorpaars anzupassen.

Als Nächstes wird der [`GainNode`](/de/docs/Web/API/GainNode) `gainNode1` erstellt, um die Lautstärke für den nicht verbundenen Oszillator (`oscNode1`) zu handhaben. Wir setzen diese Verstärkung auf 0,5. Wir erstellen auch `gainNode2` und `gainNode3`, setzen ihre Werte so ein, dass sie zu `gainNode1` passen und setzen dann den Wert des Lautstärkereglers auf denselben Wert, damit er mit dem Verstärkungslevel, das er steuert, synchron bleibt.

Sobald alle Verstärkungsknoten erstellt sind, erstellen wir den [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode), `constantNode`. Wir verbinden seinen Ausgang mit dem `gain`-[`AudioParam`](/de/docs/Web/API/AudioParam) sowohl von `gainNode2` als auch `gainNode3` und starten den konstanten Knoten, indem wir seine [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)-Methode aufrufen; jetzt sendet er den Wert 0,5 an die beiden Verstärkungsknoten, und jede Änderung an [`constantNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset) wird automatisch die Verstärkung von sowohl `gainNode2` als auch `gainNode3` einstellen (wodurch ihre Audioeingänge wie erwartet beeinflusst werden).

Schließlich verbinden wir alle Verstärkungsknoten mit dem [`destination`](/de/docs/Web/API/BaseAudioContext/destination) des [`AudioContext`](/de/docs/Web/API/AudioContext), sodass jeder Ton, der an die Verstärkungsknoten geliefert wird, den Ausgang erreicht, ob dieser Ausgang Lautsprecher, Kopfhörer, ein Aufnahme-Stream oder irgendein anderer Zieltyp ist.

Dann weisen wir einen Handler für das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis des Lautstärkeschiebers zu (sehen Sie dazu [Steuern der verbundenen Oszillatoren](#steuern_der_verbundenen_oszillatoren) für die sehr kurze `changeVolume()`-Methode).

Direkt nach der Deklaration der `setup()`-Funktion fügen wir einen Handler für das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis des Abspiel-Kontrollkästchens hinzu (sehen Sie dazu [Oszillatoren ein- und ausschalten](#oszillatoren_ein-_und_ausschalten) für mehr zur `togglePlay()`-Methode) und die Bühne ist bereit. Schauen wir, wie die Aktion abläuft.

```js
playButton.addEventListener("change", togglePlay, false);
```

#### Oszillatoren ein- und ausschalten

Da [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) den Begriff eines pausierten Zustands nicht unterstützt, müssen wir es simulieren, indem wir die Oszillatoren beenden und sie erneut starten, wenn der Benutzer das Abspiel-Kontrollkästchen erneut anklickt, um sie wieder einzuschalten. Schauen wir uns den Code an.

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

Wenn das `playButton`-Widget aktiviert ist, spielen wir bereits die Oszillatoren und rufen `stopOscillators()` auf, um die Oszillatoren herunterzufahren. Sehen Sie [Anhalten der Oszillatoren](#anhalten_der_oszillatoren) unten für diesen Code.

Wenn das `playButton`-Widget aktiviert ist, was darauf hinweist, dass wir derzeit pausiert sind, rufen wir `startOscillators()` auf, um die Oszillatoren dazu zu bringen, ihre Töne zu spielen. Unten beschreiben wir diesen Code unter [Starten der Oszillatoren](#starten_der_oszillatoren).

#### Steuern der verbundenen Oszillatoren

Die `changeVolume()`-Funktion, der Ereignishandler für den Schieberegler zur Steuerung der Verstärkung der verbundenen Oszillatorpaare, sieht so aus:

```js
function changeVolume(event) {
  constantNode.offset.value = volumeControl.value;
}
```

Diese einfache Funktion steuert die Verstärkung auf beiden Knoten. Alles, was wir tun müssen, ist, den Wert des [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)-[`offset`](/de/docs/Web/API/ConstantSourceNode/offset)-Parameters einzustellen. Dieser Wert wird zum konstanten Ausgangswert des Knotens, der an alle seine Ausgänge, `gainNode2` und `gainNode3`, weitergegeben wird.

Während dies ein elementares Beispiel ist, stellen Sie sich vor, Sie hätten einen Synthesizer mit 32 Oszillatoren mit mehreren verbundenen Parametern in vielen verknüpften Knoten in Betrieb. Die Verringerung der Anzahl der Operationen, um alle einzustellen, wird sowohl für die Codegröße als auch für die Leistung von unschätzbarem Wert sein.

#### Starten der Oszillatoren

Wenn der Benutzer den Schalter für Wiedergabe/Pause betätigt, während die Oszillatoren nicht spielen, wird die Funktion `startOscillators()` aufgerufen.

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

Jeder der drei Oszillatoren wird auf die gleiche Weise eingerichtet, indem der [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) erstellt wird, indem der [`OscillatorNode()`](/de/docs/Web/API/OscillatorNode/OscillatorNode)-Konstruktor mit zwei Optionen aufgerufen wird:

1. Setzen Sie den `type` des Oszillators auf `"sine"`, um eine Sinuswelle als Audiowellenform zu verwenden.
2. Stellen Sie die `frequency` des Oszillators auf den gewünschten Wert ein; in diesem Fall wird `oscNode1` auf ein mittleres C gesetzt, während `oscNode2` und `oscNode3` den Akkord durch Spielen der Noten E und G abrunden.

Dann verbinden wir den neuen Oszillator mit dem entsprechenden Verstärkungsknoten.

Sobald alle drei Oszillatoren erstellt sind, werden sie gestartet, indem die [`ConstantSourceNode.start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)-Methode jedes von ihnen nacheinander aufgerufen wird.

#### Anhalten der Oszillatoren

Das Anhalten der Oszillatoren, wenn der Benutzer den Abspiel-Zustand umschaltet, um die Töne zu pausieren, ist so einfach wie das Stoppen jedes Knotens.

```js
function stopOscillators() {
  oscNode1.stop();
  oscNode2.stop();
  oscNode3.stop();
}
```

Jeder Knoten wird gestoppt, indem seine [`ConstantSourceNode.stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop)-Methode aufgerufen wird.

### Resultat

{{ EmbedLiveSample('Example', 600, 120) }}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Einfaches Synthesizer-Keyboard](/de/docs/Web/API/Web_Audio_API/Simple_synth) (Beispiel)
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
- [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)
