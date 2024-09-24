---
title: "Beispiel und Anleitung: Einfaches Synthesizer-Tastatur"
slug: Web/API/Web_Audio_API/Simple_synth
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel präsentiert den Code und ein funktionierendes Demo einer Videotastatur, die Sie mit der Maus spielen können. Die Tastatur ermöglicht es Ihnen, zwischen den Standard-Wellenformen sowie einer benutzerdefinierten Wellenform zu wechseln, und Sie können die Hauptlautstärke mit einem Schieberegler unter der Tastatur steuern. Dieses Beispiel nutzt die folgenden Web-API-Schnittstellen: {{domxref("AudioContext")}}, {{domxref("OscillatorNode")}}, {{domxref("PeriodicWave")}} und {{domxref("GainNode")}}.

Da {{domxref("OscillatorNode")}} auf {{domxref("AudioScheduledSourceNode")}} basiert, ist dies bis zu einem gewissen Grad auch ein Beispiel dafür.

## Die Videotastatur

### HTML

Es gibt drei Hauptkomponenten für die Anzeige unseres virtuellen Keyboards. Die erste ist das Musikinstrument selber. Wir zeichnen dies in einem Paar verschachtelter {{HTMLElement("div")}} Elemente, damit wir die Tastatur horizontal scrollbar machen können, falls alle Tasten nicht auf den Bildschirm passen, ohne dass sie umbrochen werden.

#### Die Tastatur

Zuerst erstellen wir Platz, um die Tastatur zu erstellen. Wir werden die Tastatur programmgesteuert konstruieren, da uns dies die Flexibilität gibt, jede Taste individuell zu konfigurieren, wenn wir die entsprechenden Daten für die jeweilige Note bestimmen. In unserem Fall beziehen wir die Frequenz jeder Taste aus einer Tabelle, aber sie könnte auch algorithmisch berechnet werden.

```html
<div class="container">
  <div class="keyboard"></div>
</div>
```

Das {{HTMLElement("div")}} mit dem Namen `"container"` ist der scrollbare Kasten, der es ermöglicht, die Tastatur horizontal zu scrollen, falls sie zu breit für den verfügbaren Raum ist. Die Tasten selbst werden in den Block mit der Klasse `"keyboard"` eingefügt.

#### Die Einstellungsleiste

Unter der Tastatur werden wir einige Steuerelemente für die Konfiguration der Ebene platzieren. Derzeit haben wir zwei Steuerelemente: eines, um die Hauptlautstärke festzulegen, und ein anderes, um auszuwählen, welche periodische Wellenform beim Generieren von Notizen verwendet werden soll.

##### Die Lautstärkeregelung

Zunächst erstellen wir das `<div>` zu enthalten die Einstellungsleiste, damit sie nach Bedarf gestylt werden kann. Dann erstellen wir einen Kasten, der auf der linken Seite der Leiste erscheint, und platzieren ein Label und ein {{HTMLElement("input")}} Element vom Typ `"range"`. Das Range-Element wird typischerweise als Schieberegler-Steuerelement dargestellt; wir konfigurieren es, um jeden Wert zwischen 0,0 und 1,0 zuzulassen, wobei jeder Schritt um 0,01 erfolgt.

```html
<div class="settingsBar">
  <div class="left">
    <span>Lautstärke: </span>
    <input
      type="range"
      min="0.0"
      max="1.0"
      step="0.01"
      value="0.5"
      list="volumes"
      name="volume" />
    <datalist id="volumes">
      <option value="0.0" label="Stumm"></option>
      <option value="1.0" label="100%"></option>
    </datalist>
  </div>
</div>
```

Wir geben einen Standardwert von 0,5 an und stellen ein {{HTMLElement("datalist")}} Element bereit, das über das [`list`](/de/docs/Web/HTML/Element/input#list) Attribut mit dem Range-Element verbunden ist, um eine Optionsliste zu finden, deren ID übereinstimmt; in diesem Fall trägt der Datensatz den Namen `"volumes"`. Dies ermöglicht es uns, eine Reihe von häufig verwendeten Werten und speziellen Zeichenfolgen bereitzustellen, die der Browser möglicherweise in irgendeiner Form anzeigt; wir stellen Namen für die Werte 0,0 ("Stumm") und 1,0 ("100%") bereit.

##### Der Wellenformwähler

Auf der rechten Seite der Einstellungsleiste platzieren wir ein Label und ein {{HTMLElement("select")}} Element mit dem Namen `"waveform"`, dessen Optionen den verfügbaren Wellenformen entsprechen.

```html
  <div class="right">
    <span>Aktuelle Wellenform: </span>
    <select name="waveform">
      <option value="sine">Sinus</option>
      <option value="square" selected>Rechteck</option>
      <option value="sawtooth">Sägezahn</option>
      <option value="triangle">Dreieck</option>
      <option value="custom">Benutzerdefiniert</option>
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

1. `audioContext` wird als eine Instanz von {{domxref("AudioContext")}} erstellt.
2. `oscList` wird vorbereitet, um eine Liste aller aktuell spielenden Oszillatoren zu enthalten. Sie beginnt leer, da derzeit noch kein Oszillator spielt.
3. `mainGainNode` ist auf null gesetzt; während des Setups wird es so konfiguriert, dass es einen {{domxref("GainNode")}} enthält, mit dem alle spielenden Oszillatoren verbunden sind, um die Gesamtlautstärke mit einem einzigen Schieberegler zu steuern.

```js
const keyboard = document.querySelector(".keyboard");
const wavePicker = document.querySelector("select[name='waveform']");
const volumeControl = document.querySelector("input[name='volume']");
```

Benötigte Elemente werden referenziert:

- `keyboard` ist das Container-Element, in das die Tasten eingesetzt werden.
- `wavePicker` ist das {{HTMLElement("select")}} Element, mit dem die Wellenform für die Noten ausgewählt wird.
- `volumeControl` ist das {{HTMLElement("input")}} Element (vom Typ `"range"`), das zur Steuerung der Hauptlautstärke des Audios verwendet wird.

```js
let noteFreq = null;
let customWaveform = null;
let sineTerms = null;
let cosineTerms = null;
```

Schließlich werden globale Variablen erstellt, die beim Erstellen von Wellenformen verwendet werden:

- `noteFreq` wird ein Array von Arrays sein; jedes Array repräsentiert eine Oktave, die jeweils einen Eintrag für jede Note in dieser Oktave enthält. Der Wert für jede Note ist die Frequenz in Hertz des Tons der Note.
- `customWaveform` wird so eingerichtet, dass es eine {{domxref("PeriodicWave")}} beschreibt, die Wellenform zu verwenden, wenn der Benutzer "Benutzerdefiniert" aus dem Wellenformwähler wählt.
- `sineTerms` und `cosineTerms` werden verwendet, um die Daten für die Generierung der Wellenform zu speichern; jedes enthält ein Array, das generiert wird, wenn der Benutzer "Benutzerdefiniert" auswählt.

### Erstellen der Notentabelle

Die Funktion `createNoteTable()` erstellt das Array `noteFreq`, um es mit einem Array von Objekten zu befüllen, die jede Oktave darstellen. Jede Oktave wiederum hat eine benannte Eigenschaft für jede Note in dieser Oktave; der Name der Eigenschaft ist der Name der Note (zum Beispiel "C#" für Cis), und der Wert ist die Frequenz der Note in Hertz.

```js
function createNoteTable() {
  const noteFreq = [];
  for (let i=0; i< 9; i++) {
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

Mehrere Oktaven sind der Kürze halber nicht gezeigt.

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

Das Ergebnis ist ein Array `noteFreq` mit einem Objekt für jede Oktave. Jedes Oktavobjekt hat benannte Eigenschaften, wobei der Eigenschaftsname der Name der Note ist (zum Beispiel "C#" für Cis) und der Wert der Frequenz der Note in Hertz entspricht. Ein Beispielteil des resultierenden Objekts sieht so aus:

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

Mit dieser Tabelle können wir die Frequenz einer gegebenen Note in einer bestimmten Oktave ganz einfach herausfinden. Wenn wir die Frequenz für die Note G# in Oktave 1 benötigen, verwenden wir `noteFreq[1]["G#"]` und erhalten den Wert 51.9 als Ergebnis.

> [!NOTE]
> Die Werte in der obigen Beispieltabelle wurden auf zwei Dezimalstellen gerundet.

```js hidden
if (!Object.entries) {
  Object.entries = function entries(O) {
    return reduce(
      keys(O),
      (e, k) =>
        concat(
          e,
          typeof k === "string" && isEnumerable(O, k) ? [[k, O[k]]] : [],
        ),
      [],
    );
  };
}
```

### Aufbau der Tastatur

Die Funktion `setup()` ist verantwortlich für den Aufbau der Tastatur und die Vorbereitung der App, um Musik zu spielen.

```js
function setup() {
  noteFreq = createNoteTable();

  volumeControl.addEventListener("change", changeVolume, false);

  mainGainNode = audioContext.createGain();
  mainGainNode.connect(audioContext.destination);
  mainGainNode.gain.value = volumeControl.value;

  // Die Tasten erstellen; überspringen Sie alle, die scharf oder flach sind; für
  // unsere Zwecke benötigen wir sie nicht. Jede Oktave wird
  // in ein <div> mit der Klasse "octave" eingefügt.

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

1. Die Tabelle, die Notennamen und Oktaven mit ihren Frequenzen verknüpft, wird durch den Aufruf von `createNoteTable()` erstellt.
2. Ein Ereignishandler wird eingerichtet (durch unseren alten Freund {{domxref("EventTarget.addEventListener", "addEventListener()")}}), um {{domxref("HTMLElement/change_event", "change")}} Ereignisse auf dem Hauptlautstärkeregler zu behandeln. Dies wird die Lautstärke des Haupt-Gain-Knotens auf den neuen Wert des Reglers aktualisieren.
3. Als nächstes iterieren wir über jede Oktave in der Notenfrequenztabelle. Für jede Oktave verwenden wir {{jsxref("Object.entries()")}}, um eine Liste der Noten in dieser Oktave zu erhalten.
4. Erstellen Sie ein {{HTMLElement("div")}}, das die Noten dieser Oktave enthält (damit wir ein kleines Stück Platz zwischen den Oktaven haben) und setzen Sie seinen Klassennamen auf "octave".
5. Für jede Taste in der Oktave prüfen wir, ob der Name der Note mehr als ein Zeichen hat. Diese überspringen wir, da wir in diesem Beispiel die scharfen Noten weglassen. Wenn der Name der Note nur ein Zeichen lang ist, rufen wir `createKey()` auf und geben die Notenzeichenkette, Oktave und Frequenz an. Das zurückgegebene Element wird dem in Schritt 4 erstellten Oktave-Element hinzugefügt.
6. Wenn jedes Oktave-Element gebaut wurde, wird es der Tastatur hinzugefügt.
7. Sobald die Tastatur konstruiert wurde, scrollen wir die Note "B" in Oktave 5 ins Blickfeld; dies hat den Effekt, dass das mittlere C zusammen mit den umgebenden Tasten sichtbar ist.
8. Dann wird eine neue benutzerdefinierte Wellenform mit {{domxref("BaseAudioContext.createPeriodicWave()")}} erstellt. Diese Wellenform wird verwendet, wenn der Benutzer "Benutzerdefiniert" aus dem Wellenformwähler auswählt.
9. Schließlich wird die Oszillatorliste initialisiert, um sicherzustellen, dass sie bereit ist, Informationen zu empfangen, welche Oszillatoren mit welchen Tasten verbunden sind.

#### Erstellen einer Taste

Die Funktion `createKey()` wird einmal für jede Taste aufgerufen, die wir auf der virtuellen Tastatur darstellen möchten. Sie erstellt die Elemente, aus denen die Taste und ihre Beschriftung bestehen, fügt dem Element einige Datenattribute für die spätere Verwendung hinzu und weist Ereignishandler für die Events zu, die uns interessieren.

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

Nach dem Erstellen der Elemente, die die Taste und ihre Beschriftung darstellen, konfigurieren wir das Tastelement, indem wir seine Klasse auf "key" setzen (was das Aussehen festlegt). Dann fügen wir [`data-*`](/de/docs/Web/HTML/Global_attributes/data-*) Attribute hinzu, die die Oktave der Taste (Attribut `data-octave`), eine Zeichenkette, die die zu spielende Note darstellt (Attribut `data-note`), und die Frequenz (Attribut `data-frequency`) in Hertz enthalten. Dies ermöglicht es uns, diese Informationen bei Bedarf beim Ereignishandling leicht abzurufen.

### Musik machen

#### Einen Ton spielen

Die Funktion `playTone()` hat die Aufgabe, einen Ton mit der gegebenen Frequenz zu spielen. Dies wird vom Handler für Funktionen verwendet, die Tasten auf der Tastatur auslösen, um die entsprechenden Noten zu spielen.

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

`playTone()` beginnt mit der Erstellung eines neuen {{domxref("OscillatorNode")}} durch Aufruf der Methode {{domxref("BaseAudioContext.createOscillator()")}}. Wir verbinden es dann mit dem Haupt-Gain-Knoten, indem wir die {{domxref("AudioNode/connect", "connect()")}} Methode des neuen Oszillators aufrufen; das sagt dem Oszillator, wohin sein Ausgang gesendet werden soll. Durch dies wird die Änderung der Verstärkung des Haupt-Gain-Knotens die Lautstärke aller erzeugten Töne beeinflussen.

Dann erhalten wir den Typ der zu verwendenden Wellenform, indem wir den Wert des Wellenformwählers im Einstellungsleiste überprüfen. Wenn der Benutzer ihn auf `"custom"` gesetzt hat, rufen wir {{domxref("OscillatorNode.setPeriodicWave()")}} auf, um den Oszillator zu konfigurieren, unsere benutzerdefinierte Wellenform zu verwenden. Dadurch wird der {{domxref("OscillatorNode.type", "type")}} des Oszillators automatisch auf `custom` gesetzt. Wenn im Wellenformwähler ein anderer Wellentyp ausgewählt ist, setzen wir den Typ des Oszillators auf den Wert des Wählers; dieser Wert wird einer von `sine`, `square`, `triangle` und `sawtooth` sein.

Die Frequenz des Oszillators wird auf den im Parameter `freq` angegebenen Wert gesetzt, indem der Wert des {{domxref("OscillatorNode.frequency")}} {{domxref("AudioParam")}} Objekts gesetzt wird. Schließlich wird der Oszillator gestartet, damit er beginnt, Klang zu erzeugen, indem die Methode {{domxref("AudioScheduledSourceNode.start()")}} des Oszillators aufgerufen wird.

#### Eine Note spielen

Wenn das {{domxref("Element/mousedown_event", "mousedown")}} oder {{domxref("Element/mouseover_event", "mouseover")}} Ereignis auf einer Taste auftritt, wollen wir beginnen, die entsprechende Note zu spielen. Die Funktion `notePressed()` wird als Ereignis-Handler für diese Ereignisse verwendet.

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

Wir beginnen mit der Überprüfung, ob die primäre Maustaste gedrückt ist, aus zwei Gründen. Erstens wollen wir nur die primäre Maustaste verwenden, um das Spielen von Noten zu aktivieren. Zweitens und wichtiger, verwenden wir dies, um {{domxref("Element/mouseover_event", "mouseover")}} zu behandeln für Fälle, in denen der Benutzer von Note zu Note zieht, und wir wollen nur beginnen, die Note zu spielen, wenn die Maus beim Eintritt in das Element gedrückt wird.

Wenn die Maustaste tatsächlich gedrückt ist, erhalten wir das [`dataset`](/de/docs/Web/API/HTMLElement/dataset) Attribut der gedrückten Taste; dies erleichtert den Zugriff auf die benutzerdefinierten Datenattribute des Elements. Wir prüfen, ob ein `data-pressed` Attribut vorhanden ist; wenn nicht (was darauf hinweist, dass die Note noch nicht spielt), rufen wir `playTone()` auf, um die Note zu spielen, und übergeben den Wert des `data-frequency` Attributs des Elements. Der zurückgegebene Oszillator wird zur späteren Bezugnahme in `oscList` gespeichert, und `data-pressed` wird auf `yes` gesetzt, um zu kennzeichnen, dass die Note spielt, damit wir sie nicht erneut starten, wenn dies erneut aufgerufen wird.

#### Einen Ton stoppen

Die Funktion `noteReleased()` ist der Ereignis-Handler, der aufgerufen wird, wenn der Benutzer die Maustaste loslässt oder die Maus aus der gerade spielenden Taste herausbewegt.

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

`noteReleased()` verwendet die `data-octave` und `data-note` benutzerdefinierten Attribute, um den Oszillator der Taste zu finden, und ruft dann die geerbte Methode {{domxref("AudioScheduledSourceNode.stop", "stop()")}} des Oszillators auf, um die Note zu stoppen. Schließlich wird der `oscList` Eintrag für die Note gelöscht und das `data-pressed` Attribut vom Tastelement (identifiziert durch {{domxref("event.target")}}) entfernt, um anzuzeigen, dass die Note derzeit nicht spielt.

#### Die Hauptlautstärke ändern

Der Lautstärkeregler in der Einstellungsleiste bietet eine einfache Schnittstelle, um den Verstärkungswert am Haupt-Gain-Knoten zu ändern und dadurch die Lautstärke aller spielenden Noten zu ändern. Die Methode `changeVolume()` ist der Handler für das {{domxref("HTMLElement/change_event", "change")}} Ereignis auf dem Schieberegler.

```js
function changeVolume(event) {
  mainGainNode.gain.value = volumeControl.value;
}
```

Dies setzt den Wert der `gain` {{domxref("AudioParam")}} des Haupt-Gain-Knotens auf den neuen Wert des Schiebereglers.

#### Unterstützung für Tastatureingaben

Der folgende Code fügt [`keydown`](/de/docs/Web/API/Element/keydown_event) und [`keyup`](/de/docs/Web/API/Element/keyup_event) Ereignislistener hinzu, um Tastatureingaben zu verarbeiten. Der `keydown` Ereignis-Handler ruft `notePressed()` auf, um die Note zu spielen, die der gedrückten Taste entspricht, und der `keyup` Ereignis-Handler ruft `noteReleased()` auf, um das Spielen der Note zu stoppen, die der freigegebenen Taste entspricht.

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

Alles zusammen ergibt eine einfache, aber funktionierende Point-and-Click-Musiktastatur:

{{ EmbedLiveSample('The_video_keyboard', 680, 200) }}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- {{domxref("OscillatorNode")}}
- {{domxref("GainNode")}}
- {{domxref("AudioContext")}}
