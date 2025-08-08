---
title: "Beispiel und Tutorial: Einfaches Synth-Keyboard"
slug: Web/API/Web_Audio_API/Simple_synth
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel stellt den Code und die funktionierende Demo eines Video-Keyboards vor, das Sie mit der Maus spielen können. Das Keyboard erlaubt es Ihnen, zwischen den standardmäßigen Wellenformen zu wechseln sowie eine benutzerdefinierte Wellenform zu nutzen, und Sie können die Hauptverstärkung mit einem Lautstärkeregler unterhalb des Keyboards steuern. Dieses Beispiel verwendet die folgenden Web API-Schnittstellen: [`AudioContext`](/de/docs/Web/API/AudioContext), [`OscillatorNode`](/de/docs/Web/API/OscillatorNode), [`PeriodicWave`](/de/docs/Web/API/PeriodicWave) und [`GainNode`](/de/docs/Web/API/GainNode).

Da [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) auf [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) basiert, ist dies bis zu einem gewissen Grad auch ein Beispiel dafür.

## Das Video-Keyboard

### HTML

Es gibt drei Hauptkomponenten für die Anzeige unseres virtuellen Keyboards. Die erste ist das musikalische Keyboard selbst. Wir zeichnen dieses in einem Paar ineinander geschachtelter {{HTMLElement("div")}}-Elemente, sodass wir das Keyboard horizontal scrollbar machen können, falls nicht alle Tasten auf den Bildschirm passen, ohne dass sie umgebrochen werden.

#### Das Keyboard

Zuerst schaffen wir Platz, um das Keyboard einzubauen. Wir werden das Keyboard programmatisch konstruieren, da wir dadurch die Flexibilität haben, jede Taste so zu konfigurieren, wie wir die entsprechenden Daten für die jeweilige Note ermitteln. In unserem Fall erhalten wir die Frequenz jeder Taste aus einer Tabelle, aber sie könnte auch algorithmisch berechnet werden.

```html
<div class="container">
  <div class="keyboard"></div>
</div>
```

Das {{HTMLElement("div")}}, das als `"container"` benannt ist, ist das scrollbare Feld, das es erlaubt, das Keyboard horizontal zu scrollen, wenn es zu breit für den verfügbaren Raum ist. Die Tasten selbst werden in den Block der Klasse `"keyboard"` eingefügt.

#### Die Einstellungsleiste

Unterhalb des Keyboards werden wir einige Steuerungen zur Konfiguration der Ebene platzieren. Für den Moment werden wir zwei Steuerungen haben: eine, um die Hauptlautstärke einzustellen, und eine andere, um zu wählen, welche periodische Wellenform bei der Generierung von Tönen genutzt werden soll.

##### Die Lautstärkeregelung

Zuerst erstellen wir das `<div>`, um die Einstellungsleiste zu enthalten, damit sie nach Bedarf gestylt werden kann. Dann stellen wir eine Box auf, die auf der linken Seite der Leiste präsentiert wird und platzieren ein Label und ein {{HTMLElement("input")}}-Element vom Typ `"range"`. Das Range-Element wird typischerweise als Schieberegler dargestellt; wir konfigurieren es so, dass jede Zahl zwischen 0.0 und 1.0 in Schritten von 0.01 gewählt werden kann.

```html-nolint
<div class="settingsBar">
  <div class="left">
    <span>Volume: </span>
    <input
      type="range"
      min="0.0"
      max="1.0"
      step="0.01"
      value="0.5"
      list="volumes"
      name="volume" />
    <datalist id="volumes">
      <option value="0.0" label="Mute"></option>
      <option value="1.0" label="100%"></option>
    </datalist>
  </div>
```

Wir spezifizieren einen Standardwert von 0.5 und bieten ein {{HTMLElement("datalist")}}-Element an, das durch das Attribut [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) mit dem Bereich verbunden ist, um eine Optionsliste zu finden, deren ID übereinstimmt; in diesem Fall heißt der Datensatz `"volumes"`. Dies erlaubt uns, eine Reihe häufiger Werte und spezieller Zeichenketten anzugeben, die der Browser möglicherweise auf irgendeine Weise anzeigt; wir bieten Namen für die Werte 0.0 ("Stumm") und 1.0 ("100%") an.

##### Der Wellenformauswähler

Auf der rechten Seite der Einstellungsleiste platzieren wir ein Label und ein {{HTMLElement("select")}}-Element, das `"waveform"` benannt ist und dessen Optionen den verfügbaren Wellenformen entsprechen.

```html-nolint
  <div class="right">
    <span>Current waveform: </span>
    <select name="waveform">
      <option value="sine">Sine</option>
      <option value="square" selected>Square</option>
      <option value="sawtooth">Sawtooth</option>
      <option value="triangle">Triangle</option>
      <option value="custom">Custom</option>
    </select>
  </div>
</div>
```

### CSS

```css
.container {
  overflow-x: scroll;
  overflow-y: hidden;
  width: 660px;
  height: 110px;
  white-space: nowrap;
  margin: 10px;
}

.keyboard {
  width: auto;
  padding: 0;
  margin: 0;
}

.key {
  cursor: pointer;
  font:
    16px "Open Sans",
    "Lucida Grande",
    "Arial",
    sans-serif;
  border: 1px solid black;
  border-radius: 5px;
  width: 20px;
  height: 80px;
  text-align: center;
  box-shadow: 2px 2px darkgray;
  display: inline-block;
  position: relative;
  margin-right: 3px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.key div {
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  pointer-events: none;
}

.key div sub {
  font-size: 10px;
  pointer-events: none;
}

.key:hover {
  background-color: #eef;
}

.key:active,
.active {
  background-color: black;
  color: white;
}

.octave {
  display: inline-block;
  padding: 0 6px 0 0;
}

.settingsBar {
  padding-top: 8px;
  font:
    14px "Open Sans",
    "Lucida Grande",
    "Arial",
    sans-serif;
  position: relative;
  vertical-align: middle;
  width: 100%;
  height: 30px;
}

.left {
  width: 50%;
  position: absolute;
  left: 0;
  display: table-cell;
  vertical-align: middle;
}

.left span,
.left input {
  vertical-align: middle;
}

.right {
  width: 50%;
  position: absolute;
  right: 0;
  display: table-cell;
  vertical-align: middle;
}

.right span {
  vertical-align: middle;
}

.right input {
  vertical-align: baseline;
}
```

### JavaScript

Der JavaScript-Code beginnt mit der Initialisierung einer Reihe von Variablen.

```js
const audioContext = new AudioContext();
const oscList = [];
let mainGainNode = null;
```

1. `audioContext` wird als Instanz von [`AudioContext`](/de/docs/Web/API/AudioContext) erstellt.
2. `oscList` wird so eingerichtet, dass es bereit ist, eine Liste aller derzeit spielenden Oszillatoren zu enthalten. Es beginnt leer, da noch keine spielen.
3. `mainGainNode` ist auf `null` gesetzt; während des Einrichtungsprozesses wird es so konfiguriert, dass es einen [`GainNode`](/de/docs/Web/API/GainNode) enthält, an den alle spielenden Oszillatoren angeschlossen sind, um die Gesamtlautstärke mit einem einzigen Schieberegler steuern zu können.

```js
const keyboard = document.querySelector(".keyboard");
const wavePicker = document.querySelector("select[name='waveform']");
const volumeControl = document.querySelector("input[name='volume']");
```

Referenzen auf Elemente, auf die wir Zugriff benötigen, werden ermittelt:

- `keyboard` ist das Container-Element, in das die Tasten eingefügt werden.
- `wavePicker` ist das {{HTMLElement("select")}}-Element, das benutzt wird, um die Wellenform für die Töne auszuwählen.
- `volumeControl` ist das {{HTMLElement("input")}}-Element (vom Typ `"range"`), das verwendet wird, um die Hauptaudio-Lautstärke zu steuern.

```js
let customWaveform = null;
let sineTerms = null;
let cosineTerms = null;
```

Schließlich werden globale Variablen erstellt, die beim Erstellen von Wellenformen verwendet werden:

- `customWaveform` wird als [`PeriodicWave`](/de/docs/Web/API/PeriodicWave) eingerichtet, die die Wellenform beschreibt, die verwendet wird, wenn der Benutzer "Custom" vom Wellenformauswähler auswählt.
- `sineTerms` und `cosineTerms` werden verwendet, um die Daten zur Erzeugung der Wellenform zu speichern; jede enthält ein Array, das generiert wird, wenn der Benutzer "Custom" auswählt.

### Erstellung der Notentabelle

Die Funktion `createNoteTable()` baut das Array `noteFreq` auf, um ein Array von Objekten zu enthalten, die jedes Oktav darstellen. Jedes Oktav hat wiederum eine benannte Eigenschaft für jede Note in diesem Oktav; der Name der Eigenschaft ist der Notenname (wie "C#" für Cis), und der Wert ist die Frequenz, in Hertz, dieser Note. Wir codieren nur ein Oktav vor; jedes nachfolgende Oktav kann vom vorhergehenden Oktav abgeleitet werden, indem jede Note verdoppelt wird.

```js
function createNoteTable() {
  const noteFreq = [
    { A: 27.5, "A#": 29.13523509488062, B: 30.867706328507754 },
    {
      C: 32.70319566257483,
      "C#": 34.64782887210901,
      D: 36.70809598967595,
      "D#": 38.89087296526011,
      E: 41.20344461410874,
      F: 43.65352892912549,
      "F#": 46.2493028389543,
      G: 48.99942949771866,
      "G#": 51.91308719749314,
      A: 55,
      "A#": 58.27047018976124,
      B: 61.73541265701551,
    },
  ];
  for (let octave = 2; octave <= 7; octave++) {
    noteFreq.push(
      Object.fromEntries(
        Object.entries(noteFreq[octave - 1]).map(([key, freq]) => [
          key,
          freq * 2,
        ]),
      ),
    );
  }
  noteFreq.push({ C: 4186.009044809578 });
  return noteFreq;
}
```

Das resultierende Objekt sieht teilweise so aus:

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Oktav</th>
      <td colspan="8">Noten</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">0</th>
      <td>"A" ⇒ 27.5</td>
      <td>"A#" ⇒ 29.14</td>
      <td>"B" ⇒ 30.87</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>"C" ⇒ 32.70</td>
      <td>"C#" ⇒ 34.65</td>
      <td>"D" ⇒ 36.71</td>
      <td>"D#" ⇒ 38.89</td>
      <td>"E" ⇒ 41.20</td>
      <td>"F" ⇒ 43.65</td>
      <td>"F#" ⇒ 46.25</td>
      <td>"G" ⇒ 49</td>
      <td>"G#" ⇒ 51.9</td>
      <td>"A" ⇒ 55</td>
      <td>"A#" ⇒ 58.27</td>
      <td>"B" ⇒ 61.74</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="12">. . .</td>
    </tr>
  </tbody>
</table>

Mit dieser Tabelle können wir die Frequenz für eine gegebene Note in einem bestimmten Oktav leicht herausfinden. Wenn wir die Frequenz für die Note G# im Oktav 1 haben wollen, verwenden wir `noteFreq[1]["G#"]` und erhalten den Wert 51.9 als Ergebnis.

> [!NOTE]
> Die Werte in der oben gezeigten Beispielstabelle sind auf zwei Dezimalstellen gerundet worden.

### Aufbau des Keyboards

Die Funktion `setup()` ist dafür verantwortlich, das Keyboard zu bauen und die App für das Musizieren vorzubereiten.

```js
function setup() {
  const noteFreq = createNoteTable();

  volumeControl.addEventListener("change", changeVolume, false);

  mainGainNode = audioContext.createGain();
  mainGainNode.connect(audioContext.destination);
  mainGainNode.gain.value = volumeControl.value;

  // Create the keys; skip any that are sharp or flat; for
  // our purposes we don't need them. Each octave is inserted
  // into a <div> of class "octave".

  noteFreq.forEach((keys, idx) => {
    const keyList = Object.entries(keys);
    const octaveElem = document.createElement("div");
    octaveElem.className = "octave";

    keyList.forEach((key) => {
      if (key[0].length === 1) {
        octaveElem.appendChild(createKey(key[0], idx, key[1]));
      }
    });

    keyboard.appendChild(octaveElem);
  });

  document
    .querySelector("div[data-note='B'][data-octave='5']")
    .scrollIntoView(false);

  sineTerms = new Float32Array([0, 0, 1, 0, 1]);
  cosineTerms = new Float32Array(sineTerms.length);
  customWaveform = audioContext.createPeriodicWave(cosineTerms, sineTerms);

  for (let i = 0; i < 9; i++) {
    oscList[i] = {};
  }
}

setup();
```

1. Die Tabelle, die Notennamen und Oktaven mit ihren Frequenzen abbildet, wird durch den Aufruf von `createNoteTable()` erstellt.
2. Ein Event-Handler wird etabliert (durch den Aufruf unseres alten Freundes [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)), um [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse beim Hauptlautstärkeregler zu verarbeiten. Dies aktualisiert die Lautstärke des Hauptverstärker-Nodes auf den neuen Wert der Steuerung.
3. Als Nächstes iterieren wir über jede Oktave in der Notenfrequenz-Tabelle. Für jede Oktave verwenden wir {{jsxref("Object.entries()")}}, um eine Liste der Noten in dieser Oktave zu erhalten.
4. Wir erstellen ein {{HTMLElement("div")}}, um die Noten dieser Oktave zu enthalten (sodass wir einen kleinen Abstand zwischen den Oktaven zeichnen können), und setzen den Klassennamen auf "octave".
5. Für jede Taste in der Oktave prüfen wir, ob der Notenname mehr als ein Zeichen hat. Wir überspringen diese, da wir in diesem Beispiel die Kreuznotizen weglassen. Wenn der Notenname nur ein Zeichen hat, rufen wir `createKey()` auf und spezifizieren dabei die Notenzeichenkette, die Oktave und die Frequenz. Das zurückgegebene Element wird an das in Schritt 4 erstellte Oktave-Element angehängt.
6. Wenn jedes Oktav-Element gebaut wurde, wird es an das Keyboard angehängt.
7. Nachdem das Keyboard aufgebaut wurde, scrollen wir die Note "B" im Oktav 5 in den Sichtbereich; dies hat den Effekt, dass mittleres-C zusammen mit seinen umgebenden Tasten sichtbar ist.
8. Dann wird eine neue benutzerdefinierte Wellenform mit [`BaseAudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave) erstellt. Diese Wellenform wird immer dann verwendet, wenn der Benutzer "Custom" aus dem Auswahlsteuerung für Wellenform auswählt.
9. Schließlich wird die Oszillator-Liste initialisiert, um sicherzustellen, dass sie bereit ist, Informationen zu empfangen, die identifizieren, welche Oszillatoren mit welchen Tasten verbunden sind.

#### Erstellen einer Taste

Die Funktion `createKey()` wird einmal für jede Taste aufgerufen, die wir im virtuellen Keyboard präsentieren wollen. Sie erstellt die Elemente, die die Taste und ihr Label bilden, fügt einige Datenattribute zum Element für die spätere Verwendung hinzu und weist Event-Handler für die Ereignisse zu, die uns wichtig sind.

```js
function createKey(note, octave, freq) {
  const keyElement = document.createElement("div");
  const labelElement = document.createElement("div");

  keyElement.className = "key";
  keyElement.dataset["octave"] = octave;
  keyElement.dataset["note"] = note;
  keyElement.dataset["frequency"] = freq;
  labelElement.appendChild(document.createTextNode(note));
  labelElement.appendChild(document.createElement("sub")).textContent = octave;
  keyElement.appendChild(labelElement);

  keyElement.addEventListener("mousedown", notePressed, false);
  keyElement.addEventListener("mouseup", noteReleased, false);
  keyElement.addEventListener("mouseover", notePressed, false);
  keyElement.addEventListener("mouseleave", noteReleased, false);

  return keyElement;
}
```

Nachdem die Elemente erstellt wurden, die die Taste und ihr Label darstellen werden, konfigurieren wir das Element der Taste, indem wir ihre Klasse auf "key" setzen (was ihr Erscheinungsbild festlegt). Dann fügen wir [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)-Attribute hinzu, die die Oktave der Taste enthalten (Attribut `data-octave`), die Zeichenkette, die die zu spielende Note darstellt (Attribut `data-note`), und die Frequenz (Attribut `data-frequency`) in Hertz. Dies ermöglicht es uns, diese Informationen bei Bedarf beim Verarbeiten von Ereignissen einfach abzurufen.

### Musik machen

#### Spielen eines Tons

Die Funktion `playTone()` hat die Aufgabe, einen Ton mit der angegebenen Frequenz zu spielen. Diese wird vom Handler für Ereignisse verwendet, die Tasten auf dem Keyboard auslösen, um die entsprechenden Noten zu spielen.

```js
function playTone(freq) {
  const osc = audioContext.createOscillator();
  osc.connect(mainGainNode);

  const type = wavePicker.options[wavePicker.selectedIndex].value;

  if (type === "custom") {
    osc.setPeriodicWave(customWaveform);
  } else {
    osc.type = type;
  }

  osc.frequency.value = freq;
  osc.start();

  return osc;
}
```

`playTone()` beginnt, indem sie einen neuen [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) erstellt, indem die Methode [`BaseAudioContext.createOscillator()`](/de/docs/Web/API/BaseAudioContext/createOscillator) aufgerufen wird. Wir verbinden diesen dann mit dem Hauptverstärker-Node, indem wir die Methode [`connect()`](/de/docs/Web/API/AudioNode/connect) des neuen Oszillators aufrufen, die dem Oszillator mitteilt, wohin er seine Ausgabe senden soll. Dadurch bewirkt das Ändern des Verstärkungswerts des Hauptverstärker-Nodes, dass das Volumen aller erzeugten Töne beeinflusst wird.

Dann erhalten wir den Typ der Wellenform, die zu verwenden ist, indem wir den Wert der Auswahleingabe in der Einstellungsleiste überprüfen. Wenn der Benutzer diese auf `"custom"` eingestellt hat, rufen wir [`OscillatorNode.setPeriodicWave()`](/de/docs/Web/API/OscillatorNode/setPeriodicWave) auf, um den Oszillator so zu konfigurieren, dass unsere benutzerdefinierte Wellenform verwendet wird. Dadurch wird automatisch der Typ des Oszillators auf `custom` gesetzt. Wenn eine andere Wellenform im Auswahlsteuerung für Wellenformen ausgewählt ist, setzen wir den Typ des Oszillators auf den Wert des Auswahlfelds; dieser Wert wird einer von `sine`, `square`, `triangle` und `sawtooth` sein.

Die Frequenz des Oszillators wird auf den im `freq`-Parameter angegebenen Wert eingestellt, indem der Wert des [`OscillatorNode.frequency`](/de/docs/Web/API/OscillatorNode/frequency)[`AudioParam`](/de/docs/Web/API/AudioParam)-Objekts gesetzt wird. Schließlich wird der Oszillator durch den Aufruf der vererbten Methode [`AudioScheduledSourceNode.start()`](/de/docs/Web/API/AudioScheduledSourceNode/start) des Oszillators gestartet, sodass er beginnt, Töne zu erzeugen.

#### Spielen einer Note

Wenn das [`mousedown`](/de/docs/Web/API/Element/mousedown_event)- oder [`mouseover`](/de/docs/Web/API/Element/mouseover_event)-Ereignis auf einer Taste auftritt, möchten wir die entsprechende Note abzuspielen beginnen. Die Methode `notePressed()` wird als Ereignis-Handler für diese Ereignisse verwendet.

```js
function notePressed(event) {
  if (event.buttons & 1) {
    const dataset = event.target.dataset;

    if (!dataset["pressed"] && dataset["octave"]) {
      const octave = Number(dataset["octave"]);
      oscList[octave][dataset["note"]] = playTone(dataset["frequency"]);
      dataset["pressed"] = "yes";
    }
  }
}
```

Wir beginnen damit, zu prüfen, ob die primäre Maustaste gedrückt ist, aus zwei Gründen. Erstens möchten wir nur erlauben, dass die primäre Maustaste das Abspielen von Noten auslöst. Zweitens und wichtiger ist, dass wir dies verwenden, um [`mouseover`](/de/docs/Web/API/Element/mouseover_event) zu behandeln für Fälle, in denen der Benutzer von Note zu Note zieht, und wir wollen nur die Note abspielen, wenn die Maus gedrückt ist, wenn sie das Element betritt.

Wenn die Maustaste tatsächlich gedrückt ist, erhalten wir das Attribut [`dataset`](/de/docs/Web/API/HTMLElement/dataset) der gedrückten Taste; dies macht es einfach, die benutzerdefinierten Datenattribute auf dem Element zuzugreifen. Wir suchen nach einem `data-pressed`-Attribut; wenn keines vorhanden ist (was darauf hinweist, dass die Note noch nicht gespielt wird), rufen wir `playTone()` auf, um die Wiedergabe der Note zu starten und übergeben dabei den Wert des `data-frequency`-Attributs des Elements. Der zurückgegebene Oszillator wird in `oscList` zur späteren Verwendung gespeichert, und `data-pressed` wird auf `yes` gesetzt, um anzuzeigen, dass die Note gespielt wird, damit sie nicht erneut gestartet wird, wenn dies das nächste Mal aufgerufen wird.

#### Beenden eines Tons

Die Methode `noteReleased()` ist der Ereignis-Handler, der aufgerufen wird, wenn der Benutzer die Maustaste loslässt oder die Maus aus der Taste bewegt, die derzeit gespielt wird.

```js
function noteReleased(event) {
  const dataset = event.target.dataset;

  if (dataset && dataset["pressed"]) {
    const octave = Number(dataset["octave"]);

    if (oscList[octave] && oscList[octave][dataset["note"]]) {
      oscList[octave][dataset["note"]].stop();
      delete oscList[octave][dataset["note"]];
      delete dataset["pressed"];
    }
  }
}
```

`noteReleased()` verwendet die benutzerdefinierten Attribute `data-octave` und `data-note`, um den Oszillator der Taste nachzuschlagen, dann wird die geerbte Methode [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop) des Oszillators aufgerufen, um die Wiedergabe der Note zu beenden. Schließlich wird der `oscList`-Eintrag für die Note gelöscht und das `data-pressed`-Attribut von dem Taste-Element (wie durch [`event.target`](/de/docs/Web/API/Event/target) identifiziert) entfernt, um anzuzeigen, dass die Note nicht aktuell gespielt wird.

#### Änderung der Hauptlautstärke

Der Lautstärkeregler in der Einstellungsleiste bietet eine Schnittstelle, um den Verstärkungswert am Hauptverstärker-Node zu ändern und dadurch die Lautstärke aller gespielten Noten. Die Methode `changeVolume()` ist der Handler für das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis am Schieberegler.

```js
function changeVolume(event) {
  mainGainNode.gain.value = volumeControl.value;
}
```

Dieser setzt den Wert des `gain`-[`AudioParam`](/de/docs/Web/API/AudioParam)s des Hauptverstärker-Nodes auf den neuen Wert des Schiebereglers.

#### Tastaturunterstützung

Der folgende Code fügt Ereignis-Listener für [`keydown`](/de/docs/Web/API/Element/keydown_event) und [`keyup`](/de/docs/Web/API/Element/keyup_event) hinzu, um eine Tastatureingabe zu verarbeiten. Der `keydown`-Ereignis-Handler ruft `notePressed()` auf, um die der gedrückten Taste entsprechende Note abzuspielen, und der `keyup`-Ereignis-Handler ruft `noteReleased()` auf, um die der freigegebenen Taste entsprechende Note zu stoppen.

```js
const synthKeys = document.querySelectorAll(".key");
// prettier-ignore
const keyCodes = [
  "Space",
  "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight",
  "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter",
  "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight",
  "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace",
  "Escape",
];
function keyNote(event) {
  const elKey = synthKeys[keyCodes.indexOf(event.code)];
  if (elKey) {
    if (event.type === "keydown") {
      elKey.tabIndex = -1;
      elKey.focus();
      elKey.classList.add("active");
      notePressed({ buttons: 1, target: elKey });
    } else {
      elKey.classList.remove("active");
      noteReleased({ buttons: 1, target: elKey });
    }
    event.preventDefault();
  }
}
addEventListener("keydown", keyNote);
addEventListener("keyup", keyNote);
```

### Ergebnis

Zusammengefügt ergibt das ein einfaches, aber funktionierendes Point-and-Click-Musik-Keyboard:

{{ EmbedLiveSample('The_video_keyboard', 680, 200) }}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
- [`GainNode`](/de/docs/Web/API/GainNode)
- [`AudioContext`](/de/docs/Web/API/AudioContext)
