---
title: Steuern mehrerer Parameter mit ConstantSourceNode
slug: Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode
l10n:
  sourceCommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel zeigt, wie man einen {{domxref("ConstantSourceNode")}} verwendet, um mehrere Parameter miteinander zu verknüpfen, sodass sie denselben Wert teilen, der durch Einstellen des Werts des Parameters {{domxref("ConstantSourceNode.offset")}} geändert werden kann.

Manchmal möchten Sie, dass mehrere Audio-Parameter miteinander verbunden sind, sodass sie denselben Wert teilen und auf irgendeine Weise geändert werden. Zum Beispiel haben Sie möglicherweise eine Reihe von Oszillatoren, von denen zwei dasselbe konfigurierbare Volumen teilen müssen, oder Sie haben einen Filter, der auf bestimmte Eingaben, aber nicht auf alle angewendet wird. Sie könnten eine Schleife verwenden und den Wert jedes betroffenen {{domxref("AudioParam")}} nacheinander ändern. Dennoch gibt es zwei Nachteile, dies auf diese Weise zu tun: Erstens ist das zusätzlicher Code, den Sie, wie Sie gleich sehen werden, nicht schreiben müssen; und zweitens nutzt diese Schleife wertvolle CPU-Zeit in Ihrem Thread (wahrscheinlich im Hauptthread), und es gibt eine Möglichkeit, all diese Arbeit an den Audio-Rendering-Thread auszulagern, der für diese Art von Arbeit optimiert ist und möglicherweise auf einer angemesseneren Prioritätsebene läuft als Ihr Code.

Die Lösung ist einfach und beinhaltet die Verwendung eines Audio-Node-Typs, der auf den ersten Blick nicht so nützlich erscheint: {{domxref("ConstantSourceNode")}}.

## Die Technik

Die Verwendung eines `ConstantSourceNode` ist eine mühelose Möglichkeit, etwas zu tun, das schwierig zu sein scheint. Sie müssen einen {{domxref("ConstantSourceNode")}} erstellen und ihn mit allen {{domxref("AudioParam")}}s verbinden, deren Werte miteinander verknüpft sein und sich immer ähneln sollen. Da der {{domxref("ConstantSourceNode.offset", "offset")}}-Wert des `ConstantSourceNode` direkt an alle seine Ausgaben gesendet wird, fungiert er als Splitter für diesen Wert und sendet ihn an jeden verbundenen Parameter.

Das untenstehende Diagramm zeigt, wie dies funktioniert; Ein Eingabewert, `N`, wird als Wert der Eigenschaft {{domxref("ConstantSourceNode.offset")}} festgelegt. Der `ConstantSourceNode` kann so viele Ausgaben wie nötig haben; in diesem Fall haben wir ihn mit drei Knoten verbunden: zwei {{domxref("GainNode")}}s und einem {{domxref("StereoPannerNode")}}. Somit wird `N` zum Wert des festgelegten Parameters ({{domxref("GainNode.gain", "gain")}} für die {{domxref("GainNode")}}s und Pan für den {{domxref("StereoPannerNode")}}.

![Diagramm in SVG zeigt, wie ConstantSourceNode verwendet werden kann, um einen Eingabeparameter zu teilen und ihn mit mehreren Knoten zu teilen.](customsourcenode-as-splitter.svg)

Das Ergebnis ist, dass jedes Mal, wenn Sie `N` ändern (den Wert des Eingabewerts {{domxref("AudioParam")}}), die Werte der beiden `GainNode.gain`-Eigenschaften und der Wert der `pan`-Eigenschaften des `StereoPannerNode` ebenfalls auf `N` gesetzt werden.

## Beispiel

Schauen wir uns diese Technik in Aktion an. In diesem einfachen Beispiel erstellen wir drei {{domxref("OscillatorNode")}}-Objekte. Zwei von ihnen haben eine einstellbare Verstärkung, die mithilfe einer gemeinsamen Eingabesteuerung gesteuert wird. Der andere Oszillator hat ein festes Volumen.

### HTML

Der HTML-Inhalt für dieses Beispiel besteht hauptsächlich aus einer Checkbox, die wie ein echter Button geformt ist, um die Oszillatortöne ein- und auszuschalten, und einem {{HTMLElement("input")}}-Element vom Typ `range`, um das Volumen von zwei der drei Oszillatoren zu steuern.

```html
<div class="controls">
    <input type="checkbox" id="playButton">
    <label for="playButton">Aktivieren: </label>
    <label for="volumeControl">Lautstärke: </label>
    <input type="range" min="0.0" max="1.0" step="0.01"
           value="0.8" name="volume" id="volumeControl">
  </div>
</div>

<p>Schalten Sie die Checkbox oben ein und aus, um die Töne zu starten und zu stoppen, und verwenden Sie die Lautstärkeregelung, um
die Lautstärke der Töne E und G im Akkord zu ändern.</p>
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

Nun lassen Sie uns den JavaScript-Code ansehen, Stück für Stück.

#### Einrichtung

Fangen wir mit der Initialisierung der globalen Variablen an.

```js
// Nützliche UI-Elemente
const playButton = document.querySelector("#playButton");
const volumeControl = document.querySelector("#volumeControl");

// Der Audio-Kontext und die Knoten werden nach der ersten Anforderung initialisiert
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
  - : Der {{domxref("AudioContext")}}, in dem sich alle Audio-Knoten befinden; er wird nach einer Benutzereingabe initialisiert.
- `playButton` und `volumeControl`
  - : Referenzen auf die Play-Taste und die Lautstärkeregelungselemente.
- `oscNode1`, `oscNode2` und `oscNode3`
  - : Die drei {{domxref("OscillatorNode")}}, die zur Erzeugung des Akkords verwendet werden.
- `gainNode1`, `gainNode2` und `gainNode3`
  - : Die drei {{domxref("GainNode")}}-Instanzen, die die Lautstärkepegel für jeden der drei Oszillatoren bereitstellen. `gainNode2` und `gainNode3` werden miteinander verknüpft, um mithilfe des {{domxref("ConstantSourceNode")}} denselben, anpassbaren Wert zu haben.
- `constantNode`
  - : Der {{domxref("ConstantSourceNode")}}, der verwendet wird, um die Werte von `gainNode2` und `gainNode3` zusammen zu steuern.

Nun lassen Sie uns die `setup()`-Funktion betrachten, die aufgerufen wird, wenn der Benutzer die Wiedergabetaste zum ersten Mal umschaltet; sie übernimmt alle Initialisierungsaufgaben zum Einrichten des Audio-Graphs.

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

  // Alles ist eingerichtet. Wir können die Lautstärkeregelung anschließen.
  volumeControl.addEventListener("input", changeVolume, false);
}
```

Zuerst erhalten wir Zugriff auf den {{domxref("AudioContext")}} des Fensters und speichern die Referenz in `context`. Dann holen wir uns die Referenzen auf die Kontroll-Widgets, setzen `playButton` als Referenz für die Wiedergabetaste und `volumeControl` als Referenz für das Schieberegler-Kontrollelement, das der Benutzer verwenden wird, um die Verstärkung des verknüpften Paares von Oszillatoren anzupassen.

Dann wird der {{domxref("GainNode")}} `gainNode1` erstellt, um die Lautstärke für den nicht verknüpften Oszillator (`oscNode1`) zu übernehmen. Wir setzen diese Verstärkung auf 0,5. Wir erstellen auch `gainNode2` und `gainNode3`, setzen ihre Werte so, dass sie mit `gainNode1` übereinstimmen, und setzen dann den Wert des Lautstärkeschiebereglers auf denselben Wert, damit er mit dem von ihm gesteuerten Verstärkungsgrad synchron bleibt.

Sobald alle Verstärkungsknoten erstellt sind, erstellen wir den {{domxref("ConstantSourceNode")}}, `constantNode`. Wir verbinden seinen Output mit dem Verstärkungs-{{domxref("AudioParam")}} auf sowohl `gainNode2` als auch `gainNode3`, und wir starten den konstanten Knoten, indem wir seine {{domxref("AudioScheduledSourceNode/start", "start()")}}-Methode aufrufen; jetzt sendet er den Wert 0,5 an die beiden Verstärkungsknoten, und jede Änderung an {{domxref("ConstantSourceNode.offset", "constantNode.offset")}} wird automatisch die Verstärkung von sowohl `gainNode2` als auch `gainNode3` setzen (was ihre Audio-Eingänge wie erwartet beeinflusst).

Schließlich verbinden wir alle Verstärkungsknoten mit dem {{domxref("AudioContext")}}'s {{domxref("BaseAudioContext/destination", "destination")}}, so dass jedes Geräusch, das an die Verstärkungsknoten geliefert wird, das Ziel erreicht, sei es Lautsprecher, Kopfhörer, ein Aufnahmestrom oder jeder andere Zieltyp.

Dann weisen wir einen Handler für das {{domxref("Element/input_event", "input")}}-Ereignis des Lautstärkeschiebereglers zu (siehe [Steuern der verknüpften Oszillatoren](#steuern_der_verknüpften_oszillatoren), um die sehr kurze `changeVolume()`-Methode zu sehen).

Direkt nach der Deklaration der `setup()`-Funktion fügen wir einen Handler für das {{domxref("HTMLElement/change_event", "change")}}-Ereignis der Wiedergabesteuerungs-Checkbox hinzu (siehe [Umschalten der Oszillatoren ein und aus](#umschalten_der_oszillatoren_ein_und_aus), um mehr über die `togglePlay()`-Methode zu erfahren), und die Bühne ist bereit. Schauen wir, wie sich die Aktion abspielt.

```js
playButton.addEventListener("change", togglePlay, false);
```

#### Umschalten der Oszillatoren ein und aus

Da {{domxref("OscillatorNode")}} das Konzept eines pausierten Zustands nicht unterstützt, müssen wir ihn simulieren, indem wir die Oszillatoren beenden und sie wieder starten, wenn der Benutzer erneut auf die Wiedergabe-Checkbox klickt, um sie wieder einzuschalten. Schauen wir uns den Code an.

```js
function togglePlay(event) {
  if (!playButton.checked) {
    stopOscillators();
  } else {
    // Wenn es der erste Start ist, initialisieren Sie den Audio-Graph
    if (!context) {
      setup();
    }
    startOscillators();
  }
}
```

Wenn das `playButton`-Widget aktiviert ist, spielen wir bereits die Oszillatoren und rufen `stopOscillators()` auf, um die Oszillatoren herunterzufahren. Siehe [Anhalten der Oszillatoren](#anhalten_der_oszillatoren) unten für diesen Code.

Wenn das `playButton`-Widget aktiviert ist, was darauf hindeutet, dass wir uns derzeit im pausierten Zustand befinden, rufen wir `startOscillators()` auf, um die Oszillatoren zum Abspielen ihrer Töne zu starten. Unter [Starten der Oszillatoren](#starten_der_oszillatoren) wird dieser Code beschrieben.

#### Steuern der verknüpften Oszillatoren

Die Funktion `changeVolume()`, der Ereignishandler für das Schieberegler-Kontrollelement für die Verstärkung des verknüpften Oszillatorpaares, sieht folgendermaßen aus:

```js
function changeVolume(event) {
  constantNode.offset.value = volumeControl.value;
}
```

Diese einfache Funktion steuert die Verstärkung auf beiden Knoten. Alles, was wir tun müssen, ist, den Wert des {{domxref("ConstantSourceNode")}}'s {{domxref("ConstantSourceNode.offset", "offset")}}-Parameters zu setzen. Dieser Wert wird zum konstanten Ausgabewert des Knotens und wird an all seine Outputs geliefert, `gainNode2` und `gainNode3`.

Obwohl dies ein sehr einfaches Beispiel ist, stellen Sie sich vor, Sie haben einen 32-Oszillator-Synthesizer mit mehreren verknüpften Parametern über viele gepatchte Knoten hinweg im Einsatz. Das Verkürzen der Anzahl der Operationen zur Anpassung all dieser wird sich sowohl für die Codegröße als auch für die Leistung als unschätzbar erweisen.

#### Starten der Oszillatoren

Wenn der Benutzer auf die Wiedergabe-/Pause-Umstelltaste klickt, während die Oszillatoren nicht spielen, wird die Funktion `startOscillators()` aufgerufen.

```js
function startOscillators() {
  oscNode1 = new OscillatorNode(context, {
    type: "sine",
    frequency: 261.625565300598634, // mittleres C$
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

Jeder der drei Oszillatoren wird auf dieselbe Weise eingerichtet und erstellt den {{domxref("OscillatorNode")}}, indem der {{domxref("OscillatorNode/OscillatorNode", "OscillatorNode()")}}-Konstruktor mit zwei Optionen aufgerufen wird:

1. Das `type` des Oszillators wird auf `"sine"` gesetzt, um eine Sinuswelle als Audiowellenform zu verwenden.
2. Die Frequenz des Oszillators wird auf den gewünschten Wert gesetzt; in diesem Fall wird `oscNode1` auf ein mittleres C gesetzt, während `oscNode2` und `oscNode3` den Akkord vervollständigen, indem sie die Noten E und G spielen.

Anschließend verbinden wir den neuen Oszillator mit dem entsprechenden Verstärkungsknoten.

Sobald alle drei Oszillatoren erstellt sind, werden sie gestartet, indem die Methode {{domxref("AudioScheduledSourceNode.start", "ConstantSourceNode.start()")}} jedes Oszillators der Reihe nach aufgerufen wird.

#### Anhalten der Oszillatoren

Das Anhalten der Oszillatoren, wenn der Benutzer den Wiedergabestatus umschaltet und die Töne pausiert, ist so einfach wie das Anhalten jedes Knotens.

```js
function stopOscillators() {
  oscNode1.stop();
  oscNode2.stop();
  oscNode3.stop();
}
```

Jeder Knoten wird durch Aufrufen seiner {{domxref("AudioScheduledSourceNode.stop", "ConstantSourceNode.stop()")}}-Methode angehalten.

### Ergebnis

{{ EmbedLiveSample('Example', 600, 120) }}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Die Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Einfaches Synth-Keyboard](/de/docs/Web/API/Web_Audio_API/Simple_synth) (Beispiel)
- {{domxref("OscillatorNode")}}
- {{domxref("ConstantSourceNode")}}
