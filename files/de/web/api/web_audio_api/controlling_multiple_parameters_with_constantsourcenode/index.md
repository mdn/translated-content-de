---
title: Steuern mehrerer Parameter mit ConstantSourceNode
slug: Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode
l10n:
  sourceCommit: 92fbf299f229eec6f0941b79b5ac2a27f967b408
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel zeigt, wie Sie einen [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) verwenden, um mehrere Parameter zu verknüpfen, so dass sie denselben Wert teilen, der durch Setzen des Werts des [`ConstantSourceNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset) Parameters geändert werden kann.

Manchmal möchten Sie möglicherweise, dass mehrere Audioparameter verknüpft sind, sodass sie bei Änderungen denselben Wert teilen. Zum Beispiel haben Sie vielleicht eine Reihe von Oszillatoren, von denen zwei dieselbe konfigurierbare Lautstärke teilen müssen, oder Sie haben einen Filter, der auf bestimmte Eingänge angewendet wird, aber nicht auf alle. Sie könnten eine Schleife verwenden und den Wert jedes betroffenen [`AudioParam`](/de/docs/Web/API/AudioParam) einzeln ändern. Es gibt jedoch zwei Nachteile bei dieser Vorgehensweise: Erstens ist das zusätzlicher Code, den Sie, wie Sie gleich sehen werden, nicht schreiben müssen; und zweitens nutzt diese Schleife wertvolle CPU-Zeit in Ihrem Thread (wahrscheinlich dem Haupt-Thread), und es gibt einen Weg, diese Arbeit an den Audio-Rendering-Thread auszulagern, der für diese Art von Arbeit optimiert ist und möglicherweise auf einer angemesseneren Prioritätsebene als Ihr Code läuft.

Die Lösung ist einfach und umfasst die Verwendung eines Audioknotentyps, der auf den ersten Blick nicht so nützlich erscheint: [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode).

## Die Technik

Die Verwendung eines `ConstantSourceNode` ist eine mühelose Möglichkeit, etwas zu tun, das schwer zu sein scheint. Sie müssen einen [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) erstellen und ihn an alle [`AudioParam`](/de/docs/Web/API/AudioParam)s anschließen, deren Werte immer übereinstimmen sollen. Da der [`offset`](/de/docs/Web/API/ConstantSourceNode/offset) Wert des `ConstantSourceNode` direkt an alle seine Ausgänge gesendet wird, fungiert er als Verteiler für diesen Wert und sendet ihn an jeden verbundenen Parameter.

Das untenstehende Diagramm zeigt, wie dies funktioniert: Ein Eingabewert `N` wird als Wert der [`ConstantSourceNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset) Eigenschaft festgelegt. Der `ConstantSourceNode` kann so viele Ausgänge wie nötig haben; in diesem Fall haben wir ihn mit drei Knoten verbunden: zwei [`GainNode`](/de/docs/Web/API/GainNode)s und einem [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode). So wird `N` zum Wert des angegebenen Parameters ([`gain`](/de/docs/Web/API/GainNode/gain) für die [`GainNode`](/de/docs/Web/API/GainNode)s und pan für den [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)).

![Diagramm im SVG zeigt, wie ConstantSourceNode verwendet werden kann, um einen Eingabeparameter aufzuteilen und mit mehreren Knoten zu teilen.](customsourcenode-as-splitter.svg)

Als Ergebnis wird jedes Mal, wenn Sie `N` (den Wert des Eingabeparameters [`AudioParam`](/de/docs/Web/API/AudioParam)) ändern, der Wert der beiden `GainNode.gain` Eigenschaften und der Wert der `StereoPannerNode` 's `pan` Eigenschaften ebenfalls auf `N` gesetzt.

## Beispiel

Sehen wir uns diese Technik in Aktion an. In diesem einfachen Beispiel erstellen wir drei [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) Objekte. Zwei von ihnen haben einstellbare Verstärkung, die über eine gemeinsame Eingangskontrolle gesteuert wird. Der andere Oszillator hat ein festes Volumen.

### HTML

Der HTML-Inhalt für dieses Beispiel ist hauptsächlich ein Kontrollkästchen, das als tatsächliche Schaltfläche geformt ist, um die Oszillator-Töne ein- und auszuschalten, und ein {{HTMLElement("input")}} Element vom Typ `range`, um das Volumen von zwei der drei Oszillatoren zu steuern.

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

Nun schauen wir uns den JavaScript-Code an, Stück für Stück.

#### Einrichten

Beginnen wir mit der Betrachtung der Initialisierung der globalen Variablen.

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
  - : Referenzen auf die Wiedergabetaste und die Lautstärkeregler-Elemente.
- `oscNode1`, `oscNode2` und `oscNode3`
  - : Die drei [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)s, die zur Erzeugung des Akkords verwendet werden.
- `gainNode1`, `gainNode2` und `gainNode3`
  - : Die drei [`GainNode`](/de/docs/Web/API/GainNode) Instanzen, die die Lautstärkepegel für jeden der drei Oszillatoren bereitstellen. `gainNode2` und `gainNode3` werden so verknüpft, dass sie denselben, einstellbaren Wert haben, indem der [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) verwendet wird.
- `constantNode`
  - : Der [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode), der verwendet wird, um die Werte von `gainNode2` und `gainNode3` gemeinsam zu steuern.

Sehen wir uns nun die `setup()` Funktion an, die aufgerufen wird, wenn der Benutzer den Wiedergabeknopf zum ersten Mal umschaltet; sie kümmert sich um alle Initialisierungsaufgaben zum Einrichten des Audio-Graphen.

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

Zuerst erhalten wir Zugriff auf den [`AudioContext`](/de/docs/Web/API/AudioContext) des Fensters und speichern die Referenz in `context`. Dann erhalten wir Referenzen zu den Steuerelementen, setzen `playButton` als Referenz auf den Wiedergabeknopf und `volumeControl` als Referenz auf den Schieberegler, den der Benutzer verwenden wird, um die Verstärkung des verknüpften Oszillatorenpaars anzupassen.

Als nächstes wird der [`GainNode`](/de/docs/Web/API/GainNode) `gainNode1` erstellt, um die Lautstärke für den nicht-verknüpften Oszillator (`oscNode1`) zu handhaben. Wir setzen diese Verstärkung auf 0,5. Wir erstellen auch `gainNode2` und `gainNode3`, setzen deren Werte, um `gainNode1` zu entsprechen, und setzen den Wert des Lautstärkereglers auf denselben Wert, damit er synchron mit dem Pegel bleibt, den er steuert.

Sobald alle Verstärkungs-Knoten erstellt sind, erstellen wir den [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode), `constantNode`. Wir verbinden seinen Ausgang mit dem `gain` [`AudioParam`](/de/docs/Web/API/AudioParam) sowohl an `gainNode2` als auch an `gainNode3`, und starten den Konstantknoten, indem wir seine [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start) Methode aufrufen; jetzt sendet er den Wert 0,5 an die zwei Verstärkungs-Knoten-Werte, und jede Änderung an [`constantNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset) wird automatisch die Verstärkung von sowohl `gainNode2` als auch `gainNode3` einstellen (wie erwartet auf deren Audioeingänge wirkend).

Schließlich verbinden wir alle Verstärkungs-Knoten mit der [`AudioContext`](/de/docs/Web/API/AudioContext)'s [`destination`](/de/docs/Web/API/BaseAudioContext/destination), sodass jeder Ton, der an die Verstärkungs-Knoten geliefert wird, das Ausgabeziel erreicht, sei es Lautsprecher, Kopfhörer, ein Aufnahme-Stream oder ein anderes Destinations-Typ.

Dann weisen wir einen Handler für die [`input`](/de/docs/Web/API/Element/input_event) Veranstaltung des Lautstärkereglers zu (siehe [Kontrolle der verknüpften Oszillatoren](#kontrolle_der_verknüpften_oszillatoren) für die sehr kurze `changeVolume()` Methode).

Unmittelbar nach der Deklaration der `setup()` Funktion fügen wir einen Handler für das [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis des Wiedergabekontrollkästchens hinzu (siehe [Ein- und Ausschalten der Oszillatoren](#ein-_und_ausschalten_der_oszillatoren) für mehr zur `togglePlay()` Methode), und die Bühne ist vorbereitet. Lassen Sie uns sehen, wie die Aktion abläuft.

```js
playButton.addEventListener("change", togglePlay);
```

#### Ein- und Ausschalten der Oszillatoren

Da [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) keine Unterstützung für einen pausierten Zustand bietet, müssen wir ihn simulieren, indem wir die Oszillatoren beenden und sie wieder starten, wenn der Benutzer erneut auf das Wiedergabekontrollkästchen klickt, um sie wieder zu aktivieren. Schauen wir uns den Code an.

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

Wenn das `playButton` Widget aktiviert ist, spielen wir bereits die Oszillatoren, und wir rufen `stopOscillators()` auf, um die Oszillatoren zu schließen. Siehe [Stoppen der Oszillatoren](#stoppen_der_oszillatoren) unten für diesen Code.

Wenn das `playButton` Widget aktiviert ist, was darauf hinweist, dass wir momentan pausiert sind, rufen wir `startOscillators()` auf, um die Oszillatoren ihre Töne abspielen zu lassen. Unten beschreiben wir diesen Code unter [Starten der Oszillatoren](#starten_der_oszillatoren).

#### Kontrolle der verknüpften Oszillatoren

Die `changeVolume()` Funktion, der Ereignishandler für das Schieberegler-Steuerung für die Verstärkung des verknüpften Oszillatorenpaars, sieht folgendermaßen aus:

```js
function changeVolume(event) {
  constantNode.offset.value = volumeControl.value;
}
```

Diese einfache Funktion steuert die Verstärkung auf beiden Knoten. Alles, was wir tun müssen, ist den Wert des [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)'s [`offset`](/de/docs/Web/API/ConstantSourceNode/offset) Parameters zu setzen. Dieser Wert wird zum konstanten Ausgangswert des Knotens, der an alle seine Ausgänge, `gainNode2` und `gainNode3`, geliefert wird.

Während dies ein elementares Beispiel ist, stellen Sie sich vor, Sie haben einen 32-Oszillator-Synthesizer mit mehreren verknüpften Parametern, die über viele gepatchte Knoten gespielt werden. Die Verkürzung der Anzahl der Operationen, um sie alle anzupassen, wird sowohl für die Codegröße als auch für die Leistung von unschätzbarem Wert sein.

#### Starten der Oszillatoren

Wenn der Benutzer auf den Wiedergabe-/Pause-Umschaltknopf klickt, während die Oszillatoren nicht spielen, wird die `startOscillators()` Funktion aufgerufen.

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

Jeder der drei Oszillatoren wird auf die gleiche Weise eingerichtet, indem der [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) durch Aufrufen des [`OscillatorNode()`](/de/docs/Web/API/OscillatorNode/OscillatorNode) Konstruktors mit zwei Optionen erstellt wird:

1. Setzen Sie den `type` des Oszillators auf `"sine"`, um eine Sinuswelle als Audiowellenform zu verwenden.
2. Setzen Sie die `frequency` des Oszillators auf den gewünschten Wert; in diesem Fall ist `oscNode1` auf ein mittleres C gesetzt, während `oscNode2` und `oscNode3` den Akkord abrunden, indem sie die Noten E und G spielen.

Dann verbinden wir den neuen Oszillator mit dem entsprechenden Verstärkungs-Knoten.

Sobald alle drei Oszillatoren erstellt sind, werden sie gestartet, indem jeweils die [`ConstantSourceNode.start()`](/de/docs/Web/API/AudioScheduledSourceNode/start) Methode aufgerufen wird.

#### Stoppen der Oszillatoren

Das Stoppen der Oszillatoren, wenn der Benutzer den Wiedergabestatus umschaltet, um die Töne zu pausieren, ist so einfach wie das Stoppen jedes Knotens.

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
