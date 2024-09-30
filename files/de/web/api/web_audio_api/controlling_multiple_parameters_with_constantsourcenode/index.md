---
title: Steuern mehrerer Parameter mit ConstantSourceNode
slug: Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode
l10n:
  sourceCommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel zeigt, wie Sie einen [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) verwenden können, um mehrere Parameter miteinander zu verknüpfen, sodass sie denselben Wert teilen, der durch Einstellen des Wertes des [`ConstantSourceNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset)-Parameters geändert werden kann.

Manchmal möchten Sie, dass mehrere Audioparameter so verknüpft sind, dass sie denselben Wert teilen, während sie auf irgendeine Weise geändert werden. Zum Beispiel haben Sie vielleicht eine Reihe von Oszillatoren, von denen zwei das gleiche konfigurierbare Volumen teilen müssen, oder Sie haben einen Filter, der auf bestimmte Eingaben, aber nicht auf alle angewendet wird. Sie könnten eine Schleife verwenden und den Wert jedes betroffenen [`AudioParam`](/de/docs/Web/API/AudioParam) nacheinander ändern. Allerdings gibt es zwei Nachteile bei diesem Vorgehen: Erstens ist es zusätzlicher Code, den Sie, wie Sie gleich sehen werden, nicht schreiben müssen; und zweitens benötigt diese Schleife wertvolle CPU-Zeit in Ihrem Thread (vermutlich dem Hauptthread), und es gibt eine Möglichkeit, all diese Arbeit auf den Audio-Rendering-Thread zu verlagern, der für diese Art von Arbeit optimiert ist und möglicherweise auf einer angemesseneren Prioritätsebene als Ihr Code läuft.

Die Lösung ist einfach und beinhaltet die Verwendung eines Audionodentyps, der auf den ersten Blick nicht besonders nützlich erscheint: [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode).

## Die Technik

Die Verwendung eines `ConstantSourceNode` ist eine mühelose Möglichkeit, etwas zu tun, das schwierig erscheinen mag. Sie müssen einen [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) erstellen und ihn mit allen [`AudioParam`](/de/docs/Web/API/AudioParam)s verbinden, deren Werte verknüpft sein sollen, um immer übereinzustimmen. Da der [`offset`](/de/docs/Web/API/ConstantSourceNode/offset)-Wert des `ConstantSourceNode` direkt an all seine Ausgänge gesendet wird, wirkt er als Verteiler für diesen Wert und sendet ihn an jeden angeschlossenen Parameter.

Das untenstehende Diagramm zeigt, wie dies funktioniert; ein Eingabewert `N` wird als Wert der [`ConstantSourceNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset)-Eigenschaft festgelegt. Der `ConstantSourceNode` kann beliebig viele Ausgänge haben; in diesem Fall haben wir ihn mit drei Knoten verbunden: zwei [`GainNode`](/de/docs/Web/API/GainNode)s und einem [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode). So wird `N` zum Wert des angegebenen Parameters ([`gain`](/de/docs/Web/API/GainNode/gain) für die [`GainNode`](/de/docs/Web/API/GainNode)s und `pan` für den [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)).

![Diagramm in SVG, das zeigt, wie ConstantSourceNode verwendet werden kann, um einen Eingabeparameter zu verteilen und mit mehreren Knoten zu teilen.](customsourcenode-as-splitter.svg)

Infolgedessen wird jedes Mal, wenn Sie `N` (den Wert des Eingabewertes [`AudioParam`](/de/docs/Web/API/AudioParam)) ändern, auch der Wert der beiden `GainNode.gain`-Eigenschaften und der Wert der `pan`-Eigenschaften des `StereoPannerNode` auf `N` gesetzt.

## Beispiel

Schauen wir uns diese Technik in Aktion an. In diesem einfachen Beispiel erstellen wir drei [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)-Objekte. Zwei von ihnen haben einstellbare Verstärkung, die über ein gemeinsames Eingabekontrollfeld gesteuert wird. Der andere Oszillator hat ein festes Volumen.

### HTML

Der HTML-Inhalt für dieses Beispiel besteht hauptsächlich aus einem Kontrollkästchen, das als echter Knopf geformt ist, um die Oszillatortöne ein- und auszuschalten, und einem {{HTMLElement("input")}}-Element vom Typ `range`, um die Lautstärke von zwei der drei Oszillatoren zu steuern.

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

Nun schauen wir uns den JavaScript-Code an, Stück für Stück.

#### Einrichtung

Beginnen wir mit der globalen Variableninitialisierung.

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
  - : Der [`AudioContext`](/de/docs/Web/API/AudioContext), in dem alle Audionodes leben; er wird während einer Benutzeraktion initialisiert.
- `playButton` und `volumeControl`
  - : Referenzen auf die Play-Taste und das Lautstärkeregelungselement.
- `oscNode1`, `oscNode2` und `oscNode3`
  - : Die drei [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)s, die den Akkord erzeugen.
- `gainNode1`, `gainNode2` und `gainNode3`
  - : Die drei [`GainNode`](/de/docs/Web/API/GainNode)-Instanzen, die die Lautstärke für jeden der drei Oszillatoren bereitstellen. `gainNode2` und `gainNode3` werden mithilfe des [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) verknüpft, um denselben einstellbaren Wert zu haben.
- `constantNode`
  - : Der [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode), der verwendet wird, um die Werte von `gainNode2` und `gainNode3` zusammen zu steuern.

Schauen wir uns nun die `setup()`-Funktion an, die aufgerufen wird, wenn der Benutzer die Play-Taste zum ersten Mal umschaltet; sie erledigt alle Initialisierungsaufgaben, um das Audiografen einzurichten.

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

Zuerst erhalten wir Zugriff auf den [`AudioContext`](/de/docs/Web/API/AudioContext) des Fensters und speichern die Referenz in `context`. Dann holen wir uns Verweise auf die Steuerelemente, setzen `playButton` als Verweis auf die Play-Taste und `volumeControl` als Verweis auf den Schieberegler, den der Benutzer verwenden wird, um die Verstärkung des verknüpften Oszillatorpaares anzupassen.

Als Nächstes wird der [`GainNode`](/de/docs/Web/API/GainNode) `gainNode1` erstellt, um die Lautstärke für den nicht verknüpften Oszillator (`oscNode1`) zu handhaben. Wir setzen diese Verstärkung auf 0,5. Wir erstellen auch `gainNode2` und `gainNode3`, setzen deren Werte so, dass sie `gainNode1` entsprechen, und setzen dann den Wert des Lautstärkereglers auf denselben Wert, damit er mit der von ihm gesteuerten Verstärkungsstufe synchron bleibt.

Sobald alle Gain-Nodes erstellt sind, erstellen wir den [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode), `constantNode`. Wir verbinden dessen Ausgang mit dem `gain` [`AudioParam`](/de/docs/Web/API/AudioParam) auf sowohl `gainNode2` als auch `gainNode3`, und wir starten den konstanten Node, indem wir seine [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)-Methode aufrufen; nun wird der Wert 0.5 an die Werte der beiden Gain-Nodes gesendet, und jede Änderung an [`constantNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset) wird automatisch die Verstärkung von sowohl `gainNode2` als auch `gainNode3` setzen (beeinflusst ihre Audioeingaben wie erwartet).

Schließlich verbinden wir alle Gain-Nodes mit dem [`AudioContext`](/de/docs/Web/API/AudioContext)-[`destination`](/de/docs/Web/API/BaseAudioContext/destination), sodass jeder Sound, der an die Gain-Nodes geliefert wird, den Ausgang erreicht, sei es Lautsprecher, Kopfhörer, ein Aufnahme-Stream oder ein anderer Ausgabetyp.

Dann weisen wir einen Handler für das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis des Lautstärkereglers zu (siehe [Steuern der verknüpften Oszillatoren](#steuern_der_verknüpften_oszillatoren), um die sehr kurze `changeVolume()`-Methode zu sehen).

Direkt nach der Deklaration der `setup()`-Funktion fügen wir einen Handler für das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis des Play-Kontrollkästchens hinzu (siehe [Umschalten der Oszillatoren ein und aus](#umschalten_der_oszillatoren_ein_und_aus) für mehr Informationen zur `togglePlay()`-Methode), und die Bühne ist bereit. Lassen Sie uns sehen, wie die Aktion abläuft.

```js
playButton.addEventListener("change", togglePlay, false);
```

#### Umschalten der Oszillatoren ein und aus

Da der [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) das Konzept eines pausierten Zustands nicht unterstützt, müssen wir dies simulieren, indem wir die Oszillatoren beenden und sie wieder starten, wenn der Benutzer erneut auf das Play-Kontrollkästchen klickt, um sie wieder einzuschalten. Lassen Sie uns den Code ansehen.

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

Wenn das `playButton`-Widget aktiviert ist, spielen wir bereits die Oszillatoren, und wir rufen `stopOscillators()` auf, um die Oszillatoren herunterzufahren. Siehe [Anhalten der Oszillatoren](#anhalten_der_oszillatoren) unten für diesen Code.

Wenn das `playButton`-Widget aktiviert ist, was anzeigt, dass wir derzeit pausiert sind, rufen wir `startOscillators()` auf, um die Oszillatoren ihre Töne spielen zu lassen. Weiter unten beschreiben wir diesen Code unter [Starten der Oszillatoren](#starten_der_oszillatoren).

#### Steuern der verknüpften Oszillatoren

Die `changeVolume()`-Funktion, der Ereignishandler für den Schieberegler für die Verstärkung auf dem verknüpften Oszillatorpaar, sieht so aus:

```js
function changeVolume(event) {
  constantNode.offset.value = volumeControl.value;
}
```

Diese einfache Funktion steuert die Verstärkung auf beiden Knoten. Alles, was wir tun müssen, ist den Wert des [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)-[`offset`](/de/docs/Web/API/ConstantSourceNode/offset)-Parameters zu setzen. Dieser Wert wird zum konstanten Ausgangswert des Knotens, der an alle seine Ausgänge, `gainNode2` und `gainNode3`, gesendet wird.

Auch wenn dies ein sehr einfaches Beispiel ist, stellen Sie sich vor, Sie hätten einen 32 Oszillator-Synthesizer mit mehreren verknüpften Parametern in vielen gepatchten Nodes. Die Anzahl der Operationen zu verkürzen, um sie alle anzupassen, wird sich sowohl für die Codegröße als auch die Leistung als unschätzbar erweisen.

#### Starten der Oszillatoren

Wenn der Benutzer auf den Play/Pause-Schalter klickt, während die Oszillatoren nicht spielen, wird die `startOscillators()`-Funktion aufgerufen.

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

Jeder der drei Oszillatoren wird auf dieselbe Weise eingerichtet, indem der [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) erstellt wird, indem der [`OscillatorNode()`](/de/docs/Web/API/OscillatorNode/OscillatorNode)-Konstruktor mit zwei Optionen aufgerufen wird:

1. Setzen Sie den Oszillator `type` auf `"sine"`, um eine Sinuswelle als Audiowellenform zu verwenden.
2. Setzen Sie die Frequenz des Oszillators auf den gewünschten Wert; in diesem Fall wird `oscNode1` auf ein mittleres C gesetzt, während `oscNode2` und `oscNode3` den Akkord abrunden, indem sie die Töne E und G spielen.

Dann verbinden wir den neuen Oszillator mit dem entsprechenden Gain-Node.

Sobald alle drei Oszillatoren erstellt sind, werden sie gestartet, indem die [`ConstantSourceNode.start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)-Methode jedes Oszillators nacheinander aufgerufen wird.

#### Anhalten der Oszillatoren

Das Anhalten der Oszillatoren, wenn der Benutzer den Wiedergabestatus umschaltet, um die Töne zu pausieren, ist so einfach, wie jeden Knoten zu stoppen.

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
