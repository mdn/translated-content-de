---
title: "Beispiel und Tutorial: Einfaches Synthesizer-Keyboard"
slug: Web/API/Web_Audio_API/Simple_synth
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel präsentiert den Code und eine funktionierende Demo eines Video-Keyboards, das Sie mit der Maus spielen können. Das Keyboard ermöglicht das Umschalten zwischen den Standard-Wellenformen sowie einer benutzerdefinierten Wellenform. Sie können die Hauptverstärkung mit einem Lautstärkeregler unter dem Keyboard steuern. Dieses Beispiel nutzt die folgenden Web-API-Schnittstellen: [`AudioContext`](/de/docs/Web/API/AudioContext), [`OscillatorNode`](/de/docs/Web/API/OscillatorNode), [`PeriodicWave`](/de/docs/Web/API/PeriodicWave) und [`GainNode`](/de/docs/Web/API/GainNode).

Da [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) auf [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) basiert, ist dies in gewissem Maße auch ein Beispiel dafür.

## Das Video-Keyboard

### HTML

Es gibt drei Hauptkomponenten der Anzeige für unser virtuelles Keyboard. Die erste ist das musikalische Keyboard selbst. Wir zeichnen dieses in einem Paar verschachtelter {{HTMLElement("div")}}-Elemente, sodass wir das Keyboard horizontal scrollen können, falls nicht alle Tasten auf den Bildschirm passen, ohne dass sie umgebrochen werden.

#### Das Keyboard

Zuerst schaffen wir Platz, um das Keyboard zu erstellen. Wir werden das Keyboard programmatisch konstruieren, da dies die Flexibilität bietet, jede Taste zu konfigurieren, wenn wir die passenden Daten für den entsprechenden Ton bestimmen. In unserem Fall beziehen wir die Frequenz jeder Taste aus einer Tabelle, aber sie könnte auch algorithmisch berechnet werden.

```html
<div class="container">
  <div class="keyboard"></div>
</div>
```

Das {{HTMLElement("div")}} mit dem Namen `"container"` ist das scrollbare Feld, das es ermöglicht, das Keyboard horizontal zu scrollen, wenn es zu breit für den verfügbaren Platz ist. Die Tasten selbst werden in den Block der Klasse `"keyboard"` eingefügt.

#### Die Einstellungsleiste

Unter dem Keyboard platzieren wir einige Steuerungen zur Konfiguration der Schicht. Wir werden vorerst zwei Steuerungen haben: Eine, um die Hauptlautstärke einzustellen, und eine weitere, um die periodische Wellenform auszuwählen, die bei der Erstellung von Noten verwendet werden soll.

##### Die Lautstärkeregelung

Zuerst erstellen wir das `<div>`, um die Einstellungsleiste zu enthalten, damit sie bei Bedarf gestaltet werden kann. Dann erstellen wir eine Box, die auf der linken Seite der Leiste angezeigt wird, und platzieren ein Label und ein {{HTMLElement("input")}}-Element des Typs `"range"`. Das Range-Element wird typischerweise als Schieberegler dargestellt; wir konfigurieren es so, dass es Werte zwischen 0,0 und 1,0 zulässt, wobei in Schritten von 0,01 jeder Position vorangegangen wird.

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

Wir geben einen Standardwert von 0,5 an und bieten ein {{HTMLElement("datalist")}}-Element, das über das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut mit der Range verbunden ist, um eine Optionsliste zu finden, deren ID übereinstimmt; in diesem Fall ist der Datensatz als `"volumes"` benannt. Dies ermöglicht es uns, eine Reihe allgemeiner Werte und spezieller Zeichenketten bereitzustellen, die der Browser optional auf irgendeine Weise darstellen kann; wir bieten Namen für die Werte 0,0 ("Mute") und 1,0 ("100%") an.

##### Der Wellenformauswähler

Auf der rechten Seite der Einstellungsleiste platzieren wir ein Label und ein {{HTMLElement("select")}}-Element mit dem Namen `"waveform"`, dessen Optionen den verfügbaren Wellenformen entsprechen.

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
  background-color: #eeeeff;
}

.key:active,
.active {
  background-color: black;
  color: white;
}

.octave {
  display: inline-block;
  padding-right: 6px;
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
2. `oscList` wird vorbereitet, um eine Liste aller aktuell gespielten Oszillatoren zu enthalten. Es beginnt leer, da im Moment keiner spielt.
3. `mainGainNode` wird auf null gesetzt; im Verlauf des Setups wird es so konfiguriert, dass es einen [`GainNode`](/de/docs/Web/API/GainNode) enthält, an den alle spielenden Oszillatoren angeschlossen werden und durch den sie spielen, um die Gesamtlautstärke mit einem einzigen Schieberegler steuern zu können.

```js
const keyboard = document.querySelector(".keyboard");
const wavePicker = document.querySelector("select[name='waveform']");
const volumeControl = document.querySelector("input[name='volume']");
```

Referenzen zu Elementen, auf die wir zugreifen müssen, werden abgerufen:

- `keyboard` ist das Containerelement, in das die Tasten eingefügt werden.
- `wavePicker` ist das {{HTMLElement("select")}}-Element, das verwendet wird, um die Wellenform für die Noten auszuwählen.
- `volumeControl` ist das {{HTMLElement("input")}}-Element (vom Typ `"range"`), das zur Steuerung der Hauptlautstärke dient.

```js
let customWaveform = null;
let sineTerms = null;
let cosineTerms = null;
```

Schließlich werden globale Variablen erstellt, die bei der Erstellung von Wellenformen verwendet werden:

- `customWaveform` wird als [`PeriodicWave`](/de/docs/Web/API/PeriodicWave) eingerichtet, die die Wellenform beschreibt, die verwendet wird, wenn der Benutzer "Custom" aus dem Wellenformauswähler auswählt.
- `sineTerms` und `cosineTerms` werden verwendet, um die Daten zur Erstellung der Wellenform zu speichern; jeder wird ein Array enthalten, das generiert wird, wenn der Benutzer "Custom" auswählt.

### Erstellen der Notentabelle

Die Funktion `createNoteTable()` baut das Array `noteFreq`, um ein Array von Objekten zu enthalten, die jede Oktave darstellen. Jede Oktave hat wiederum eine benannte Eigenschaft für jede Note in dieser Oktave; der Name der Eigenschaft ist der Name der Note (wie "C#" für Cis), und der Wert ist die Frequenz in Hertz dieser Note. Wir kodieren nur eine Oktave hart; jede nachfolgende Oktave kann von der vorherigen abgeleitet werden, indem jede Note verdoppelt wird.

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

Mit dieser Tabelle können wir die Frequenz für eine bestimmte Note in einer bestimmten Oktave recht einfach herausfinden. Wenn wir die Frequenz für die Note G# in Oktave 1 möchten, verwenden wir `noteFreq[1]["G#"]` und erhalten den Wert 51,9 als Ergebnis.

> [!NOTE]
> Die Werte in der obigen Beispielstabelle wurden auf zwei Dezimalstellen gerundet.

### Das Keyboard bauen

Die Funktion `setup()` ist dafür verantwortlich, das Keyboard zu bauen und die App vorzubereiten, um Musik abzuspielen.

```js
function setup() {
  const noteFreq = createNoteTable();

  volumeControl.addEventListener("change", changeVolume);

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

1. Die Tabelle, die Notennamen und Oktaven auf ihre Frequenzen abbildet, wird erstellt, indem `createNoteTable()` aufgerufen wird.
2. Ein Ereignishandler wird eingerichtet (indem unser alter Freund [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufgerufen wird), um [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse auf der Hauptverstärkungssteuerung zu handhaben. Dadurch wird der Lautstärkewert des Hauptverstärkungsknotens auf den neuen Wert der Steuerung aktualisiert.
3. Als Nächstes iterieren wir über jede Oktave in der Notenfrequenzen-Tabelle. Für jede Oktave verwenden wir {{jsxref("Object.entries()")}}, um eine Liste der Noten in dieser Oktave zu erhalten.
4. Ein {{HTMLElement("div")}}-Element wird erstellt, um die Noten dieser Oktave zu enthalten (damit wir einen kleinen Abstand zwischen den Oktaven zeichnen können), und sein Klassenname wird auf "octave" gesetzt.
5. Für jede Taste in der Oktave prüfen wir, ob der Name der Note mehr als einen Buchstaben hat. Diese überspringen wir, da wir in diesem Beispiel die Halbtonnoten weglassen. Wenn der Name der Note nur einen Buchstaben hat, rufen wir `createKey()` auf und spezifizieren den Notenstring, die Oktave und die Frequenz. Das zurückgegebene Element wird an das in Schritt 4 erstellte Oktavelement angehängt.
6. Wenn jedes Oktavelement erstellt wurde, wird es an das Keyboard angehängt.
7. Sobald das Keyboard konstruiert ist, scrollen wir die Note "B" in Oktave 5 in den sichtbaren Bereich; das hat den Effekt, dass das mittlere C sichtbar ist, zusammen mit seinen umgebenden Tasten.
8. Dann wird eine neue benutzerdefinierte Wellenform unter Verwendung von [`BaseAudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave) erstellt. Diese Wellenform wird immer dann verwendet, wenn der Benutzer "Custom" aus der Wellenformauswahlsteuerung auswählt.
9. Schließlich wird die Oszillatorliste initialisiert, um sicherzustellen, dass sie bereit ist, Informationen zu empfangen, die identifizieren, welche Oszillatoren mit welchen Tasten assoziiert sind.

#### Eine Taste erstellen

Die Funktion `createKey()` wird einmal für jede Taste aufgerufen, die wir im virtuellen Keyboard darstellen möchten. Sie erstellt die Elemente, die die Taste und ihr Label bilden, fügt dem Element einige Datenattribute für die spätere Verwendung hinzu und weist Ereignishandler für die Ereignisse zu, die uns interessieren.

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

  keyElement.addEventListener("mousedown", notePressed);
  keyElement.addEventListener("mouseup", noteReleased);
  keyElement.addEventListener("mouseover", notePressed);
  keyElement.addEventListener("mouseleave", noteReleased);

  return keyElement;
}
```

Nachdem die Elemente erstellt wurden, die die Taste und ihr Label darstellen, konfigurieren wir das Element der Taste, indem wir deren Klasse auf "key" setzen (was deren Aussehen festlegt). Dann fügen wir [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)-Attribute hinzu, die die Oktave der Taste enthalten (Attribut `data-octave`), eine Zeichenkette, die die zu spielende Note darstellt (Attribut `data-note`), und die Frequenz (Attribut `data-frequency`) in Hertz. Dadurch ist es einfach, diese Informationen bei Bedarf beim Handhaben von Ereignissen abzurufen.

### Musik machen

#### Einen Ton abspielen

Die Aufgabe der `playTone()`-Funktion ist es, einen Ton mit der angegebenen Frequenz abzuspielen. Dies wird von dem Handler für Ereignisse verwendet, die Tasten auf dem Keyboard auslösen, um die entsprechenden Noten abzuspielen.

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

`playTone()` beginnt mit der Erstellung eines neuen [`OscillatorNode`](/de/docs/Web/API/OscillatorNode), indem die Methode [`BaseAudioContext.createOscillator()`](/de/docs/Web/API/BaseAudioContext/createOscillator) aufgerufen wird. Wir verbinden ihn dann mit dem Hauptverstärkungsknoten, indem wir die Methode [`connect()`](/de/docs/Web/API/AudioNode/connect) des neuen Oszillators aufrufen, die dem Oszillator mitteilt, wohin er seine Ausgabe senden soll. Durch diese Vorgehensweise beeinflusst die Änderung der Verstärkung des Hauptverstärkungsknotens die Lautstärke aller erzeugten Töne.

Dann ermitteln wir den Typ der zu verwendenden Wellenform, indem wir den Wert der Wellenformauswahlsteuerung in der Einstellungsleiste überprüfen. Wenn der Benutzer sie auf `"custom"` eingestellt hat, rufen wir [`OscillatorNode.setPeriodicWave()`](/de/docs/Web/API/OscillatorNode/setPeriodicWave) auf, um den Oszillator so zu konfigurieren, dass unsere benutzerdefinierte Wellenform verwendet wird. Dadurch wird der Oszillator-Typ automatisch auf `custom` gesetzt. Wenn in der Wellenformauswahl eine andere Wellenform ausgewählt ist, setzen wir den Oszillator-Typ auf den Wert der Auswahl; dieser Wert wird einer von `sine`, `square`, `triangle` und `sawtooth` sein.

Die Frequenz des Oszillators wird auf den im `freq`-Parameter angegebenen Wert gesetzt, indem der Wert des [`OscillatorNode.frequency`](/de/docs/Web/API/OscillatorNode/frequency) [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekts gesetzt wird. Schließlich wird der Oszillator gestartet, damit er beginnt, Ton zu erzeugen, indem die vererbte Methode [`AudioScheduledSourceNode.start()`](/de/docs/Web/API/AudioScheduledSourceNode/start) des Oszillators aufgerufen wird.

#### Eine Note spielen

Wenn das [`mousedown`](/de/docs/Web/API/Element/mousedown_event)- oder [`mouseover`](/de/docs/Web/API/Element/mouseover_event)-Ereignis auf einer Taste auftritt, möchten wir die entsprechende Note abspielen. Die Funktion `notePressed()` wird als Ereignishandler für diese Ereignisse verwendet.

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

Wir beginnen mit der Überprüfung, ob die primäre Maustaste gedrückt ist, aus zwei Gründen. Erstens wollen wir nur die primäre Maustaste zulassen, um das Abspielen von Noten auszulösen. Zweitens, und noch wichtiger, verwenden wir dies, um [`mouseover`](/de/docs/Web/API/Element/mouseover_event) für Fälle zu handhaben, in denen der Benutzer von Note zu Note zieht, und wir nur dann die Note abspielen wollen, wenn die Maustaste gedrückt ist, wenn sie das Element betritt.

Wenn die Maustaste tatsächlich gedrückt ist, holen wir das Attribut [`dataset`](/de/docs/Web/API/HTMLElement/dataset) der gedrückten Taste; dies macht es einfach, auf die benutzerdefinierten Datenattribute auf dem Element zuzugreifen. Wir suchen nach einem `data-pressed`-Attribut; wenn es keines gibt (was anzeigt, dass die Note nicht bereits gespielt wird), rufen wir `playTone()` auf, um die Note abzuspielen, und übergeben dabei den Wert des Attributs `data-frequency` des Elements. Der zurückgegebene Oszillator wird in `oscList` zur späteren Verwendung gespeichert, und `data-pressed` wird auf `yes` gesetzt, um anzuzeigen, dass die Note gespielt wird, damit wir sie beim nächsten Aufruf nicht erneut starten.

#### Einen Ton stoppen

Die `noteReleased()`-Funktion ist der Ereignishandler, der aufgerufen wird, wenn der Benutzer die Maustaste loslässt oder die Maus aus der Taste herausbewegt, die aktuell gespielt wird.

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

`noteReleased()` verwendet die benutzerdefinierten Attribute `data-octave` und `data-note`, um den Oszillator der Taste nachzuschlagen, und ruft dann die vererbte Methode [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop) des Oszillators auf, um die Note zu stoppen. Schließlich wird der Eintrag in `oscList` für die Note geleert und das `data-pressed`-Attribut vom Tastelement (identifiziert durch [`event.target`](/de/docs/Web/API/Event/target)) entfernt, um anzuzeigen, dass die Note derzeit nicht gespielt wird.

#### Die Hauptlautstärke ändern

Der Lautstärkeregler in der Einstellungsleiste bietet eine Schnittstelle, um den Gain-Wert am Hauptverstärkungsknoten zu ändern und somit die Lautstärke aller gespielten Noten zu ändern. Die `changeVolume()`-Methode ist der Handler für das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis auf dem Schieberegler.

```js
function changeVolume(event) {
  mainGainNode.gain.value = volumeControl.value;
}
```

Dies setzt den Wert des `gain`-[`AudioParam`](/de/docs/Web/API/AudioParam) des Hauptverstärkungsknotens auf den neuen Wert des Schiebereglers.

#### Tastaturunterstützung

Der folgende Code fügt [`keydown`](/de/docs/Web/API/Element/keydown_event)- und [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignislistener hinzu, um Tastatureingaben zu handhaben. Der `keydown`-Ereignishandler ruft `notePressed()` auf, um die Note zu spielen, die der gedrückten Taste entspricht, und der `keyup`-Ereignishandler ruft `noteReleased()` auf, um die Note zu stoppen, die der freigegebenen Taste entspricht.

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

Alles zusammen ergibt ein einfaches, aber funktionierendes Point-and-Click-Musikkeyboard:

{{ EmbedLiveSample('The_video_keyboard', 680, 200) }}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
- [`GainNode`](/de/docs/Web/API/GainNode)
- [`AudioContext`](/de/docs/Web/API/AudioContext)
