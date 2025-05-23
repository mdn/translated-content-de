---
title: "Beispiel und Tutorial: Einfaches Synthesizer-Keyboard"
slug: Web/API/Web_Audio_API/Simple_synth
l10n:
  sourceCommit: 373fcd42528fc9eafa3703dc99927cc56c75fa8d
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel präsentiert den Code und eine funktionierende Demo eines Video-Keyboards, das Sie mit der Maus spielen können. Das Keyboard ermöglicht es Ihnen, zwischen den standardmäßigen Wellenformen und einer benutzerdefinierten Wellenform zu wechseln. Außerdem können Sie den Hauptverstärker mithilfe eines Lautstärkereglers unter dem Keyboard steuern. Dieses Beispiel verwendet die folgenden Web-API-Schnittstellen: [`AudioContext`](/de/docs/Web/API/AudioContext), [`OscillatorNode`](/de/docs/Web/API/OscillatorNode), [`PeriodicWave`](/de/docs/Web/API/PeriodicWave) und [`GainNode`](/de/docs/Web/API/GainNode).

Da [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) auf [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) basiert, ist dies bis zu einem gewissen Grad auch ein Beispiel dafür.

## Das Video-Keyboard

### HTML

Es gibt drei Hauptkomponenten für die Anzeige unseres virtuellen Keyboards. Die erste ist das musikalische Keyboard selbst. Wir zeichnen dies in einem Paar ineinander verschachtelter {{HTMLElement("div")}}-Elemente, sodass wir das Keyboard horizontal scrollen können, wenn nicht alle Tasten auf den Bildschirm passen, ohne dass sie umschlagen.

#### Das Keyboard

Zuerst schaffen wir Platz, um das Keyboard zu bauen. Wir werden das Keyboard programmatisch konstruieren, weil uns dies die Flexibilität gibt, jede Taste so zu konfigurieren, wie wir es für die entsprechenden Notendaten für angemessen halten. In unserem Fall erhalten wir die Frequenz jeder Taste aus einer Tabelle, aber es könnte auch algorithmisch berechnet werden.

```html
<div class="container">
  <div class="keyboard"></div>
</div>
```

Das {{HTMLElement("div")}}, das `"container"` benannt ist, ist das scrollbare Feld, das es ermöglicht, das Keyboard horizontal zu scrollen, wenn es zu breit für den verfügbaren Platz ist. Die Tasten selbst werden in den Block der Klasse `"keyboard"` eingefügt.

#### Die Einstellungsleiste

Unterhalb des Keyboards fügen wir einige Bedienelemente hinzu, um die Ebene zu konfigurieren. Vorerst werden wir zwei Bedienelemente haben: eines, um die Hauptlautstärke einzustellen, und ein weiteres, um auszuwählen, welche periodische Wellenform beim Erzeugen von Noten verwendet werden soll.

##### Der Lautstärkeregler

Zuerst erstellen wir das `<div>`, um die Einstellungsleiste zu enthalten, sodass es nach Bedarf gestaltet werden kann. Dann stellen wir ein Feld bereit, das auf der linken Seite der Leiste angezeigt wird, und platzieren ein Label sowie ein {{HTMLElement("input")}}-Element vom Typ `"range"`. Das Bereichs-Element wird typischerweise als Schieberegler angezeigt; wir konfigurieren es so, dass es jeden Wert zwischen 0.0 und 1.0 zulässt, mit einem Schritt von 0.01 bei jeder Position.

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

Wir legen einen Standardwert von 0.5 fest und bieten ein {{HTMLElement("datalist")}}-Element an, das mit dem Bereich über das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut verbunden ist, um eine Optionsliste zu finden, deren ID übereinstimmt; in diesem Fall heißt der Datensatz `"volumes"`. Dies ermöglicht es uns, eine Reihe von üblichen Werten und speziellen Strings bereitzustellen, die der Browser optional anzeigen kann; wir geben die Namen für die Werte 0.0 ("Stumm") und 1.0 ("100%") an.

##### Der Wellenformauswähler

Auf der rechten Seite der Einstellungsleiste platzieren wir ein Label und ein {{HTMLElement("select")}}-Element namens `"waveform"`, dessen Optionen den verfügbaren Wellenformen entsprechen.

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
  background-color: #000;
  color: #fff;
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
2. `oscList` wird vorbereitet, um eine Liste aller derzeit gespielten Oszillatoren zu enthalten. Es beginnt leer, da noch keine abgespielt werden.
3. `mainGainNode` wird zunächst auf null gesetzt; während des Einrichtungsprozesses wird es so konfiguriert, dass es einen [`GainNode`](/de/docs/Web/API/GainNode) enthält, an den alle abgespielten Oszillatoren angeschlossen werden und über den sie abgespielt werden, um die Gesamtlautstärke mit einem einzigen Schieberegler steuern zu können.

```js
const keyboard = document.querySelector(".keyboard");
const wavePicker = document.querySelector("select[name='waveform']");
const volumeControl = document.querySelector("input[name='volume']");
```

Referenzen auf Elemente, auf die wir zugreifen müssen, werden abgerufen:

- `keyboard` ist das Containerelement, in das die Tasten eingefügt werden.
- `wavePicker` ist das {{HTMLElement("select")}}-Element, das zur Auswahl der Wellenform für die Noten verwendet wird.
- `volumeControl` ist das {{HTMLElement("input")}}-Element (vom Typ `"range"`), das zur Steuerung der Hauptlautstärke verwendet wird.

```js
let noteFreq = null;
let customWaveform = null;
let sineTerms = null;
let cosineTerms = null;
```

Schließlich werden globale Variablen erstellt, die verwendet werden, um Wellenformen zu konstruieren:

- `noteFreq` wird ein Array von Arrays sein; jedes Array repräsentiert eine Oktave, die jeweils einen Eintrag für jede Note in dieser Oktave enthält. Der Wert für jedes ist die Frequenz, in Hertz, des Tons dieser Note.
- `customWaveform` wird als ein [`PeriodicWave`](/de/docs/Web/API/PeriodicWave) eingerichtet, das die Wellenform beschreibt, die verwendet werden soll, wenn der Benutzer "Custom" im Wellenformauswähler auswählt.
- `sineTerms` und `cosineTerms` werden verwendet, um die Daten für die Erstellung der Wellenform zu speichern; jedes wird ein Array enthalten, das generiert wird, wenn der Benutzer "Custom" auswählt.

### Erstellen der Notentabelle

Die Funktion `createNoteTable()` baut das Array `noteFreq` auf, um ein Array von Objekten darzustellen, die jede Oktave repräsentieren. Jede Oktave hat wiederum für jede Note in dieser Oktave eine benannte Eigenschaft; der Name der Eigenschaft ist der Name der Note (wie "C#" für "Cis"), und der Wert ist die Frequenz, in Hertz, dieser Note.

```js
function createNoteTable() {
  const noteFreq = [];
  for (let i = 0; i < 9; i++) {
    noteFreq[i] = [];
  }

  noteFreq[0]["A"] = 27.500000000000000;
  noteFreq[0]["A#"] = 29.135235094880619;
  noteFreq[0]["B"] = 30.867706328507756;

  noteFreq[1]["C"] = 32.703195662574829;
  noteFreq[1]["C#"] = 34.647828872109012;
  noteFreq[1]["D"] = 36.708095989675945;
  noteFreq[1]["D#"] = 38.890872965260113;
  noteFreq[1]["E"] = 41.203444614108741;
  noteFreq[1]["F"] = 43.653528929125485;
  noteFreq[1]["F#"] = 46.249302838954299;
  noteFreq[1]["G"] = 48.999429497718661;
  noteFreq[1]["G#"] = 51.913087197493142;
  noteFreq[1]["A"] = 55.000000000000000;
  noteFreq[1]["A#"] = 58.270470189761239;
  noteFreq[1]["B"] = 61.735412657015513;
  // …
```

Mehrere Oktaven werden der Kürze halber nicht angezeigt.

```js hidden
noteFreq[2]["C"] = 65.406391325149658;
noteFreq[2]["C#"] = 69.295657744218024;
noteFreq[2]["D"] = 73.41619197935189;
noteFreq[2]["D#"] = 77.781745930520227;
noteFreq[2]["E"] = 82.406889228217482;
noteFreq[2]["F"] = 87.307057858250971;
noteFreq[2]["F#"] = 92.498605677908599;
noteFreq[2]["G"] = 97.998858995437323;
noteFreq[2]["G#"] = 103.826174394986284;
noteFreq[2]["A"] = 110.0;
noteFreq[2]["A#"] = 116.540940379522479;
noteFreq[2]["B"] = 123.470825314031027;

noteFreq[3]["C"] = 130.812782650299317;
noteFreq[3]["C#"] = 138.591315488436048;
noteFreq[3]["D"] = 146.83238395870378;
noteFreq[3]["D#"] = 155.563491861040455;
noteFreq[3]["E"] = 164.813778456434964;
noteFreq[3]["F"] = 174.614115716501942;
noteFreq[3]["F#"] = 184.997211355817199;
noteFreq[3]["G"] = 195.997717990874647;
noteFreq[3]["G#"] = 207.652348789972569;
noteFreq[3]["A"] = 220.0;
noteFreq[3]["A#"] = 233.081880759044958;
noteFreq[3]["B"] = 246.941650628062055;

noteFreq[4]["C"] = 261.625565300598634;
noteFreq[4]["C#"] = 277.182630976872096;
noteFreq[4]["D"] = 293.66476791740756;
noteFreq[4]["D#"] = 311.12698372208091;
noteFreq[4]["E"] = 329.627556912869929;
noteFreq[4]["F"] = 349.228231433003884;
noteFreq[4]["F#"] = 369.994422711634398;
noteFreq[4]["G"] = 391.995435981749294;
noteFreq[4]["G#"] = 415.304697579945138;
noteFreq[4]["A"] = 440.0;
noteFreq[4]["A#"] = 466.163761518089916;
noteFreq[4]["B"] = 493.883301256124111;

noteFreq[5]["C"] = 523.251130601197269;
noteFreq[5]["C#"] = 554.365261953744192;
noteFreq[5]["D"] = 587.32953583481512;
noteFreq[5]["D#"] = 622.253967444161821;
noteFreq[5]["E"] = 659.255113825739859;
noteFreq[5]["F"] = 698.456462866007768;
noteFreq[5]["F#"] = 739.988845423268797;
noteFreq[5]["G"] = 783.990871963498588;
noteFreq[5]["G#"] = 830.609395159890277;
noteFreq[5]["A"] = 880.0;
noteFreq[5]["A#"] = 932.327523036179832;
noteFreq[5]["B"] = 987.766602512248223;

noteFreq[6]["C"] = 1046.502261202394538;
noteFreq[6]["C#"] = 1108.730523907488384;
noteFreq[6]["D"] = 1174.659071669630241;
noteFreq[6]["D#"] = 1244.507934888323642;
noteFreq[6]["E"] = 1318.510227651479718;
noteFreq[6]["F"] = 1396.912925732015537;
noteFreq[6]["F#"] = 1479.977690846537595;
noteFreq[6]["G"] = 1567.981743926997176;
noteFreq[6]["G#"] = 1661.218790319780554;
noteFreq[6]["A"] = 1760.0;
noteFreq[6]["A#"] = 1864.655046072359665;
noteFreq[6]["B"] = 1975.533205024496447;
```

```js
  noteFreq[7]["C"] = 2093.004522404789077;
  noteFreq[7]["C#"] = 2217.461047814976769;
  noteFreq[7]["D"] = 2349.318143339260482;
  noteFreq[7]["D#"] = 2489.015869776647285;
  noteFreq[7]["E"] = 2637.020455302959437;
  noteFreq[7]["F"] = 2793.825851464031075;
  noteFreq[7]["F#"] = 2959.955381693075191;
  noteFreq[7]["G"] = 3135.963487853994352;
  noteFreq[7]["G#"] = 3322.437580639561108;
  noteFreq[7]["A"] = 3520.000000000000000;
  noteFreq[7]["A#"] = 3729.310092144719331;
  noteFreq[7]["B"] = 3951.066410048992894;

  noteFreq[8]["C"] = 4186.009044809578154;
  return noteFreq;
}
```

Das Ergebnis ist ein Array, `noteFreq`, mit einem Objekt für jede Oktave. Jedes Oktavobjekt hat benannte Eigenschaften, bei denen der Name der Eigenschaft der Name der Note ist (wie "C#" für Cis) und der Wert der Eigenschaft die Frequenz der Note in Hertz ist. Teilweise sieht das resultierende Objekt so aus:

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Oktave</th>
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

Mit dieser Tabelle können wir die Frequenz einer gegebenen Note in einer bestimmten Oktave ganz einfach herausfinden. Wenn wir die Frequenz für die Note Gis in der Oktave 1 wissen möchten, verwenden wir `noteFreq[1]["G#"]` und erhalten den Wert 51.9 als Ergebnis.

> [!NOTE]
> Die Werte in der obigen Beispielstabelle wurden auf zwei Dezimalstellen gerundet.

### Aufbau des Keyboards

Die Funktion `setup()` ist verantwortlich für den Aufbau des Keyboards und die Vorbereitung der App zum Musizieren.

```js
function setup() {
  noteFreq = createNoteTable();

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

1. Die Tabelle, die Notennamen und Oktaven ihren Frequenzen zuordnet, wird durch Aufruf von `createNoteTable()` erstellt.
2. Ein Ereignishandler wird eingerichtet (indem unser alter Freund [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufgerufen wird, um [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse auf der Hauptverstärkersteuerung zu behandeln. Dies wird das Hauptverstärkernode-Volumen auf den neuen Wert der Steuerung aktualisieren.
3. Dann iterieren wir über jede Oktave in der Notenfrequenztabelle. Für jede Oktave verwenden wir {{jsxref("Object.entries()")}}, um eine Liste der Noten in dieser Oktave zu erhalten.
4. Erstellen Sie ein {{HTMLElement("div")}}, um die Noten dieser Oktave zu enthalten (sodass wir einen kleinen Abstand zwischen den Oktaven zeichnen können), und setzen Sie seinen Klassennamen auf "octave"
5. Für jede Taste in der Oktave prüfen wir, ob der Name der Note mehr als ein Zeichen hat. Wir überspringen diese, da wir in diesem Beispiel die Kreuznoten weglassen. Wenn der Name der Note nur ein Zeichen ist, rufen wir `createKey()` auf und geben die Notenfolge, die Oktave und die Frequenz an. Das zurückgegebene Element wird an das in Schritt 4 erstellte Oktave-Element angehängt.
6. Wenn jedes Oktave-Element gebaut wurde, wird es an das Keyboard angehängt.
7. Sobald das Keyboard konstruiert wurde, scrollen wir die Note "B" in der Oktave 5 ins Sichtfeld; dies hat den Effekt, dass das mittlere C zusammen mit seinen umliegenden Tasten sichtbar ist.
8. Dann wird eine neue benutzerdefinierte Wellenform mithilfe von [`BaseAudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave) erstellt. Diese Wellenform wird immer dann verwendet, wenn der Benutzer "Custom" aus der Wellenformauswahlsteuerung auswählt.
9. Schließlich wird die Oszillatorliste initialisiert, um sicherzustellen, dass sie bereit ist, Informationen zu erhalten, die identifizieren, welche Oszillatoren mit welchen Tasten verbunden sind.

#### Erstellen einer Taste

Die Funktion `createKey()` wird einmal für jede Taste aufgerufen, die wir auf dem virtuellen Keyboard präsentieren möchten. Sie erstellt die Elemente, aus denen die Taste und ihr Etikett bestehen, fügt einige Dateneigenschaften zum Element hinzu, die später verwendet werden, und weist Ereignis-Handler für die Ereignisse zu, die uns interessieren.

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

Nachdem die Elemente erstellt wurden, die die Taste und ihr Etikett darstellen, konfigurieren wir das Element der Taste, indem wir seine Klasse auf "key" setzen (was dessen Erscheinungsbild festlegt). Dann fügen wir [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)-Attribute hinzu, die die Oktave der Taste (Attribut `data-octave`), die Zeichenkette, die die Note darstellt, die gespielt werden soll (Attribut `data-note`), und die Frequenz (Attribut `data-frequency`) in Hertz enthalten. Dies ermöglicht es uns, diese Informationen einfach abzurufen, wenn wir Ereignisse behandeln.

### Musik machen

#### Einen Ton spielen

Die Funktion `playTone()` hat die Aufgabe, einen Ton mit der gegebenen Frequenz zu spielen. Dies wird vom Ereignis-Handler für Ereignisse, die Tasten auf dem Keyboard auslösen, verwendet, um die entsprechenden Noten zu spielen.

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

`playTone()` beginnt mit der Erstellung eines neuen [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) durch Aufruf der Methode [`BaseAudioContext.createOscillator()`](/de/docs/Web/API/BaseAudioContext/createOscillator). Wir verbinden es dann mit dem Hauptverstärkernode, indem wir die [`connect()`](/de/docs/Web/API/AudioNode/connect)-Methode des neuen Oszillators aufrufen, die dem Oszillator mitteilt, wohin er seinen Ausgang senden soll. Indem wir dies tun, wirkt sich die Veränderung der Verstärkung des Hauptverstärkernodes auf die Lautstärke aller erzeugten Töne aus.

Dann holen wir den Wellentyp ab, indem wir den Wert der Wellenformauswahlsteuerung in der Einstellungsleiste überprüfen. Wenn der Benutzer `"custom"` eingestellt hat, rufen wir [`OscillatorNode.setPeriodicWave()`](/de/docs/Web/API/OscillatorNode/setPeriodicWave) auf, um den Oszillator so zu konfigurieren, dass er unsere benutzerdefinierte Wellenform verwendet. Dies setzt automatisch den [`type`](/de/docs/Web/API/OscillatorNode/type) des Oszillators auf `custom`. Wenn ein anderer Wellentyp in der Wellenformauswahl ausgewählt ist, setzen wir den Typ des Oszillators auf den Wert der Auswahl; dieser Wert wird einer von `sine`, `square`, `triangle` und `sawtooth` sein.

Die Frequenz des Oszillators wird auf den im Parameter `freq` angegebenen Wert gesetzt, indem der Wert des [`OscillatorNode.frequency`](/de/docs/Web/API/OscillatorNode/frequency) [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekts gesetzt wird. Dann startet der Oszillator, um schließlich Geräusche zu erzeugen, indem die geerbte Methode [`AudioScheduledSourceNode.start()`](/de/docs/Web/API/AudioScheduledSourceNode/start) des Oszillators aufgerufen wird.

#### Eine Note spielen

Wenn das Ereignis [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`mouseover`](/de/docs/Web/API/Element/mouseover_event) auf einer Taste auftritt, möchten wir die entsprechende Note spielen. Die Funktion `notePressed()` wird als Ereignis-Handler für diese Ereignisse verwendet.

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

Wir beginnen damit, zu überprüfen, ob die primäre Maustaste gedrückt ist, aus zwei Gründen. Erstens möchten wir nur die primäre Maustaste das Spielen von Noten erlauben. Zweitens, und wichtiger ist, dass wir dies benutzen, um [`mouseover`](/de/docs/Web/API/Element/mouseover_event) zu behandeln für Fälle, in denen der Benutzer von Note zu Note zieht, und wir wollen nur die Note abspielen, wenn die Maus gedrückt ist, wenn sie das Element betritt.

Wenn die Maustaste tatsächlich gedrückt ist, erhalten wir das [`dataset`](/de/docs/Web/API/HTMLElement/dataset)-Attribut der gedrückten Taste; dies macht es einfach, auf die benutzerdefinierten Datenattribute des Elements zuzugreifen. Wir suchen nach einem `data-pressed`-Attribut; wenn es keines gibt (was darauf hinweist, dass die Note noch nicht gespielt wird), rufen wir `playTone()` auf, um die Note zu beginnen, und übergeben den Wert des `data-frequency`-Attributs des Elements. Der zurückgegebene Oszillator wird für zukünftige Referenzen in `oscList` gespeichert und `data-pressed` wird auf `yes` gesetzt, um anzuzeigen, dass die Note gespielt wird, sodass wir sie beim nächsten Aufruf nicht erneut starten.

#### Einen Ton stoppen

Die Funktion `noteReleased()` ist der Ereignis-Handler, der aufgerufen wird, wenn der Benutzer die Maustaste loslässt oder die Maus aus der gerade spielenden Taste bewegt.

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

`noteReleased()` verwendet die benutzerdefinierten Attribute `data-octave` und `data-note`, um den Oszillator der Taste nachzuschlagen, und ruft dann die geerbte [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop)-Methode des Oszillators auf, um die Note zu stoppen. Schließlich wird der Eintrag in `oscList` für die Note gelöscht und das `data-pressed`-Attribut vom Element der Taste (wie durch [`event.target`](/de/docs/Web/API/Event/target) identifiziert) entfernt, um anzuzeigen, dass die Note derzeit nicht gespielt wird.

#### Die Hauptlautstärke ändern

Der Lautstärkeregler in der Einstellungsleiste bietet eine Schnittstelle, um den Verstärkungswert am Hauptverstärkernode zu ändern und damit die Lautstärke aller gespielten Noten zu ändern. Die Methode `changeVolume()` ist der Handler für das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis auf dem Schieberegler.

```js
function changeVolume(event) {
  mainGainNode.gain.value = volumeControl.value;
}
```

Dies setzt den Wert des `gain`-[`AudioParam`](/de/docs/Web/API/AudioParam) des Hauptverstärkernodes auf den neuen Wert des Schiebereglers.

#### Unterstützung des Keyboards

Der untenstehende Code fügt [`keydown`](/de/docs/Web/API/Element/keydown_event) und [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis-Listener hinzu, um Tastatureingaben zu unterstützen. Der `keydown`-Ereignis-Handler ruft `notePressed()` auf, um die Note zu spielen, die der gedrückten Taste entspricht, und der `keyup`-Ereignis-Handler ruft `noteReleased()` auf, um die Note zu stoppen, die der losgelassenen Taste entspricht.

```js-nolint
const synthKeys = document.querySelectorAll(".key");
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

Insgesamt ergibt sich ein einfaches, aber funktionierendes Point-and-Click-Musik-Keyboard:

{{ EmbedLiveSample('The_video_keyboard', 680, 200) }}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
- [`GainNode`](/de/docs/Web/API/GainNode)
- [`AudioContext`](/de/docs/Web/API/AudioContext)
