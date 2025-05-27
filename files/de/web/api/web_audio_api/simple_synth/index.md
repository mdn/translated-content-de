---
title: "Beispiel und Tutorial: Einfaches Synthesizer-Keyboard"
slug: Web/API/Web_Audio_API/Simple_synth
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel präsentiert den Code und eine funktionierende Demo eines Video-Keyboards, das Sie mit der Maus spielen können. Das Keyboard ermöglicht es Ihnen, zwischen den Standard-Wellenformen sowie einer benutzerdefinierten Wellenform zu wechseln, und Sie können die Haupteingangsverstärkung mit einem Lautstärkeregler unter dem Keyboard steuern. Dieses Beispiel nutzt die folgenden Web-API-Schnittstellen: [`AudioContext`](/de/docs/Web/API/AudioContext), [`OscillatorNode`](/de/docs/Web/API/OscillatorNode), [`PeriodicWave`](/de/docs/Web/API/PeriodicWave) und [`GainNode`](/de/docs/Web/API/GainNode).

Da [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) auf [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) basiert, ist dies bis zu einem gewissen Grad auch ein Beispiel dafür.

## Das Video-Keyboard

### HTML

Es gibt drei Hauptkomponenten für die Anzeige unseres virtuellen Keyboards. Die erste ist das Musikinstrumenten-Keyboard selbst. Wir zeichnen dies in einem Paar geschachtelter {{HTMLElement("div")}}-Elemente, sodass wir das Keyboard horizontal scrollen können, falls alle Tasten nicht auf den Bildschirm passen, ohne dass sie umbrechen.

#### Das Keyboard

Zuerst erstellen wir Platz, um das Keyboard zu bauen. Wir werden das Keyboard programmatisch konstruieren, da uns dies die Flexibilität gibt, jede Taste zu konfigurieren, sobald wir die entsprechenden Daten für den entsprechenden Ton ermittelt haben. In unserem Fall beziehen wir die Frequenz jeder Taste aus einer Tabelle, sie könnte aber auch algorithmisch berechnet werden.

```html
<div class="container">
  <div class="keyboard"></div>
</div>
```

Das {{HTMLElement("div")}}, das `"container"` genannt wird, ist das scrollbare Feld, das es ermöglicht, das Keyboard horizontal zu scrollen, wenn es für den verfügbaren Platz zu breit ist. Die Tasten selbst werden in den Block der Klasse `"keyboard"` eingefügt.

#### Die Einstellungsleiste

Unter dem Keyboard platzieren wir einige Steuerungen zur Konfiguration der Ebene. Wir werden zunächst zwei Steuerungen haben: eine zum Einstellen der Hauptlautstärke und eine andere zur Auswahl der periodischen Wellenform, die beim Generieren von Tönen verwendet werden soll.

##### Die Lautstärkeregelung

Zuerst erstellen wir das `<div>`, um die Einstellungsleiste zu enthalten, damit sie nach Bedarf gestaltet werden kann. Dann etablieren wir ein Feld, das auf der linken Seite der Leiste dargestellt wird, und platzieren ein Label und ein {{HTMLElement("input")}}-Element vom Typ `"range"`. Das Range-Element wird typischerweise als Schieberegler dargestellt; wir konfigurieren es so, dass es jeden Wert zwischen 0.0 und 1.0 zulässt, wobei jeder Schritt 0.01 beträgt.

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

Wir spezifizieren einen Standardwert von 0.5 und geben ein {{HTMLElement("datalist")}}-Element an, das über das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut mit der Range verbunden ist, um eine Optionsliste zu finden, deren ID übereinstimmt; in diesem Fall wird der Datensatz `"volumes"` genannt. Dies ermöglicht es uns, eine Gruppe von allgemeinen Werten und speziellen Zeichenfolgen bereitzustellen, die der Browser optional auf irgendeine Weise anzeigen kann; wir geben Namen für die Werte 0.0 ("Mute") und 1.0 ("100%") an.

##### Der Wellenformwähler

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

Der JavaScript-Code beginnt mit der Initialisierung einer Anzahl von Variablen.

```js
const audioContext = new AudioContext();
const oscList = [];
let mainGainNode = null;
```

1. `audioContext` wird als Instanz von [`AudioContext`](/de/docs/Web/API/AudioContext) erstellt.
2. `oscList` wird so eingerichtet, dass es bereit ist, eine Liste aller derzeit spielenden Oszillatoren zu enthalten. Es beginnt leer, da noch keine spielen.
3. `mainGainNode` wird auf null gesetzt; während des Einrichtungsprozesses wird sie so konfiguriert, dass sie einen [`GainNode`](/de/docs/Web/API/GainNode) enthält, durch den alle spielenden Oszillatoren verbinden und spielen, um die Gesamtlautstärke mit einem einzigen Schieberegler zu steuern.

```js
const keyboard = document.querySelector(".keyboard");
const wavePicker = document.querySelector("select[name='waveform']");
const volumeControl = document.querySelector("input[name='volume']");
```

Referenzen auf Elemente, auf die wir zugreifen müssen, werden abgerufen:

- `keyboard` ist das Containerelement, in das die Tasten platziert werden.
- `wavePicker` ist das {{HTMLElement("select")}}-Element, das verwendet wird, um die Wellenform für die Töne auszuwählen.
- `volumeControl` ist das {{HTMLElement("input")}}-Element (vom Typ `"range"`), das zur Steuerung der Hauptlautstärke verwendet wird.

```js
let customWaveform = null;
let sineTerms = null;
let cosineTerms = null;
```

Schließlich werden globale Variablen erstellt, die beim Erstellen der Wellenformen verwendet werden:

- `customWaveform` wird als [`PeriodicWave`](/de/docs/Web/API/PeriodicWave) eingerichtet und beschreibt die Wellenform, die verwendet wird, wenn der Benutzer "Custom" aus dem Wellenformwähler auswählt.
- `sineTerms` und `cosineTerms` werden verwendet, um die Daten für die Generierung der Wellenform zu speichern; jede enthält ein Array, das erzeugt wird, wenn der Benutzer "Custom" auswählt.

### Erstellung der Ton-Tabelle

Die `createNoteTable()`-Funktion baut das Array `noteFreq`, um ein Array von Objekten zu enthalten, die jeweils eine Oktave darstellen. Jede Oktave hat wiederum eine benannte Eigenschaft für jede Note in dieser Oktave; der Name der Eigenschaft ist der Name der Note (z. B. "C#" für Cis), und der Wert ist die Frequenz dieser Note in Hertz. Wir hardcoden nur eine Oktave; jede nachfolgende Oktave kann von der vorherigen abgeleitet werden, indem jede Note verdoppelt wird.

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

Teilweise sieht das resultierende Objekt so aus:

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

Mit dieser Tabelle können wir die Frequenz für eine bestimmte Note in einer bestimmten Oktave ganz einfach herausfinden. Wenn wir die Frequenz für die Note G# in der Oktave 1 wünschen, verwenden wir `noteFreq[1]["G#"]` und erhalten den Wert 51.9 als Ergebnis.

> [!NOTE]
> Die Werte in der obigen Beispieltabelle sind auf zwei Dezimalstellen gerundet.

### Konstruktion des Keyboards

Die `setup()`-Funktion ist verantwortlich für den Aufbau des Keyboards und die Vorbereitung der App zum Abspielen von Musik.

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

1. Die Tabelle, die Notennamen und Oktaven ihren Frequenzen zuordnet, wird durch Aufruf von `createNoteTable()` erstellt.
2. Ein Ereignishandler wird festgelegt (indem unser alter Freund [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufgerufen wird), um [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse des Hauptverstärkungsreglers zu behandeln. Dies wird die Lautstärke des Hauptverstärkerknotens auf den neuen Wert des Reglers aktualisieren.
3. Als Nächstes iterieren wir über jede Oktave in der Note-Frequenz-Tabelle. Für jede Oktave verwenden wir {{jsxref("Object.entries()")}}, um eine Liste der Noten in dieser Oktave zu erhalten.
4. Erstellen Sie ein {{HTMLElement("div")}}, um die Noten dieser Oktave zu enthalten (damit wir einen kleinen Abstand zwischen den Oktaven haben können), und setzen Sie den Klassennamen auf "octave".
5. Für jede Taste der Oktave prüfen wir, ob der Name der Note mehr als ein Zeichen hat. Wir überspringen diese, da wir bei diesem Beispiel die Kreuznoten weglassen. Wenn der Name der Note nur ein Zeichen ist, rufen wir `createKey()` auf, wobei die Notenzeichenfolge, die Oktave und die Frequenz angegeben werden. Das zurückgegebene Element wird an das in Schritt 4 erstellte Oktavelement angefügt.
6. Wenn jedes Oktavelement erstellt wurde, wird es dem Keyboard hinzugefügt.
7. Nachdem das Keyboard aufgebaut wurde, scrollen wir die Note "B" in der Oktave 5 in das Sichtfeld; dies hat den Effekt, dass das mittlere C sichtbar wird, zusammen mit seinen umliegenden Tasten.
8. Dann wird eine neue benutzerdefinierte Wellenform mithilfe von [`BaseAudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave) erstellt. Diese Wellenform wird verwendet, wenn der Benutzer "Custom" aus der Wellenform-Auswahlsteuerung auswählt.
9. Schließlich wird die Oszillatorliste initialisiert, um sicherzustellen, dass sie bereit ist, Informationen zu empfangen, die identifizieren, welche Oszillatoren mit welchen Tasten verknüpft sind.

#### Erstellung einer Taste

Die `createKey()`-Funktion wird einmal für jede Taste aufgerufen, die wir auf dem virtuellen Keyboard präsentieren wollen. Sie erstellt die Elemente, aus denen die Taste und ihr Etikett bestehen, fügt einige Dateneigenschaften zum späteren Gebrauch hinzu und weist Ereignishandler für die Ereignisse zu, die uns interessieren.

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

Nach der Erstellung der Elemente, die die Taste und ihr Etikett repräsentieren, konfigurieren wir das Element der Taste, indem wir seine Klasse auf "key" setzen (was sein Aussehen bestimmt). Dann fügen wir [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)-Attribute hinzu, die die Oktave der Taste (Attribut `data-octave`), die Zeichenfolge, die die zu spielende Note repräsentiert (Attribut `data-note`), und die Frequenz (Attribut `data-frequency`) in Hertz enthalten. Dies ermöglicht es uns, diese Informationen bei Bedarf leicht abzurufen, wenn Ereignisse behandelt werden.

### Musikmachen

#### Einen Ton spielen

Die Aufgabe der Funktion `playTone()` ist es, einen Ton bei der gegebenen Frequenz zu spielen. Dies wird vom Ereignishandler für Ereignisse verwendet, die Tasten auf dem Keyboard auslösen, um die entsprechenden Noten zu spielen.

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

`playTone()` beginnt mit der Erstellung eines neuen [`OscillatorNode`](/de/docs/Web/API/OscillatorNode), indem die Methode [`BaseAudioContext.createOscillator()`](/de/docs/Web/API/BaseAudioContext/createOscillator) aufgerufen wird. Wir verbinden es dann mit dem Hauptverstärkerknoten, indem wir die [`connect()`](/de/docs/Web/API/AudioNode/connect)-Methode des neuen Oszillators aufrufen, die dem Oszillator mitteilt, wohin er seinen Ausgang senden soll. Dadurch wirkt sich die Änderung der Verstärkung des Hauptverstärkerknotens auf die Lautstärke aller erzeugten Töne aus.

Dann erhalten wir die Art der Wellenform, die verwendet werden soll, indem wir den Wert der Wellenformer-Auswahlsteuerung in der Einstellungsleiste überprüfen. Wenn der Benutzer sie auf `"custom"` eingestellt hat, rufen wir [`OscillatorNode.setPeriodicWave()`](/de/docs/Web/API/OscillatorNode/setPeriodicWave) auf, um den Oszillator so zu konfigurieren, dass er unsere benutzerdefinierte Wellenform verwendet. Dadurch wird automatisch der Typ des Oszillators [`type`](/de/docs/Web/API/OscillatorNode/type) auf `custom` gesetzt. Wenn im Wellenformwähler eine andere Wellenformart ausgewählt ist, setzen wir den Oszillatortyp auf den Wert des Wählers; dieser Wert wird einer von `sine`, `square`, `triangle` und `sawtooth` sein.

Die Frequenz des Oszillators wird auf den im `freq`-Parameter angegebenen Wert gesetzt, indem der Wert des `frequncy` [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekts des Oszillators gesetzt wird. Dann wird der Oszillator schließlich gestartet, um so bald wie möglich Ton zu erzeugen, indem die geerbte Methode [`AudioScheduledSourceNode.start()`](/de/docs/Web/API/AudioScheduledSourceNode/start) des Oszillators aufgerufen wird.

#### Eine Note spielen

Wenn das [`mousedown`](/de/docs/Web/API/Element/mousedown_event)- oder [`mouseover`](/de/docs/Web/API/Element/mouseover_event)-Ereignis auf einer Taste eintritt, möchten wir die entsprechende Note spielen. Die `notePressed()`-Funktion wird als Ereignishandler für diese Ereignisse verwendet.

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

Wir beginnen damit zu prüfen, ob die primäre Maustaste gedrückt ist, aus zwei Gründen. Erstens möchten wir nur die primäre Maustaste das Spielen von Noten auslösen lassen. Zweitens verwenden wir dies, um [`mouseover`](/de/docs/Web/API/Element/mouseover_event) für Fälle zu behandeln, in denen der Benutzer von einer Note zur anderen zieht, und wir möchten nur die Note spielen, wenn die Maus gedrückt ist, wenn sie in das Element eintritt.

Wenn die Maustaste in der Tat nach unten gedrückt ist, holen wir das [`dataset`](/de/docs/Web/API/HTMLElement/dataset)-Attribut der gedrückten Taste; dies macht es einfach, auf die benutzerdefinierten Dateneigenschaften des Elements zuzugreifen. Wir suchen nach einem `data-pressed`-Attribut; wenn keines vorhanden ist (was darauf hinweist, dass die Note nicht bereits gespielt wird), rufen wir `playTone()` auf, um die Note zu spielen, und übergeben den Wert des `data-frequency`-Attributs des Elements. Der zurückgegebene Oszillator wird zur späteren Bezugnahme in `oscList` gespeichert, und `data-pressed` wird auf `yes` gesetzt, um anzugeben, dass die Note gespielt wird, damit wir sie nicht erneut starten, wenn dies das nächste Mal aufgerufen wird.

#### Einen Ton stoppen

Die `noteReleased()`-Funktion ist der Ereignishandler, der aufgerufen wird, wenn der Benutzer die Maustaste loslässt oder die Maus aus der Taste bewegt, die derzeit gespielt wird.

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

`noteReleased()` verwendet die benutzerdefinierten Attribute `data-octave` und `data-note`, um den Oszillator der Taste nachzuschlagen, und ruft dann die geerbte Methode [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop) des Oszillators auf, um das Spielen der Note zu stoppen. Schließlich wird der `oscList`-Eintrag für die Note gelöscht und das `data-pressed`-Attribut vom Tastenelement (wie durch [`event.target`](/de/docs/Web/API/Event/target) identifiziert) entfernt, um anzugeben, dass die Note derzeit nicht gespielt wird.

#### Die Hauptlautstärke ändern

Der Lautstärkeregler in der Einstellungsleiste bietet eine Schnittstelle, um den Verstärkungswert auf dem Hauptverstärkerknoten zu ändern und damit die Lautstärke aller gespielten Noten zu ändern. Die `changeVolume()`-Methode ist der Handler für das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis am Schieberegler.

```js
function changeVolume(event) {
  mainGainNode.gain.value = volumeControl.value;
}
```

Dies setzt den Wert des `gain` [`AudioParam`](/de/docs/Web/API/AudioParam) des Hauptverstärkerknotens auf den neuen Wert des Schiebereglers.

#### Unterstützung für die Tastatur

Der folgende Code fügt [`keydown`](/de/docs/Web/API/Element/keydown_event)- und [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignislistener hinzu, um Tastatureingaben zu unterstützen. Der `keydown`-Ereignishandler ruft `notePressed()` auf, um die der gedrückten Taste entsprechende Note zu spielen, und der `keyup`-Ereignishandler ruft `noteReleased()` auf, um die der losgelassenen Taste entsprechende Note zu stoppen.

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

Insgesamt ergibt sich ein einfaches, aber funktionierendes Point-and-Click-Musikinstrumenten-Keyboard:

{{ EmbedLiveSample('The_video_keyboard', 680, 200) }}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
- [`GainNode`](/de/docs/Web/API/GainNode)
- [`AudioContext`](/de/docs/Web/API/AudioContext)
