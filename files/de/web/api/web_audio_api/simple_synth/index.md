---
title: "Beispiel und Tutorial: Einfaches Synthesizer-Keyboard"
slug: Web/API/Web_Audio_API/Simple_synth
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel präsentiert den Code und eine funktionierende Demo eines virtuellen Keyboards, das Sie mit der Maus spielen können. Das Keyboard erlaubt es Ihnen, zwischen den Standardwellenformen und einer benutzerdefinierten Wellenform zu wechseln, und Sie können die Hauptlautstärke mit einem Lautstärkeregler unter dem Keyboard steuern. Dieses Beispiel verwendet die folgenden Web-API-Schnittstellen: [`AudioContext`](/de/docs/Web/API/AudioContext), [`OscillatorNode`](/de/docs/Web/API/OscillatorNode), [`PeriodicWave`](/de/docs/Web/API/PeriodicWave) und [`GainNode`](/de/docs/Web/API/GainNode).

Da [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) auf [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) basiert, dient dies bis zu einem gewissen Grad auch als Beispiel dafür.

## Das virtuelle Keyboard

### HTML

Es gibt drei Hauptkomponenten für die Anzeige unseres virtuellen Keyboards. Die erste ist das musikalische Keyboard selbst. Wir zeichnen dies in einem Paar verschachtelter {{HTMLElement("div")}}-Elemente, sodass wir das Keyboard horizontal scrollbar machen können, falls alle Tasten nicht auf den Bildschirm passen, ohne dass sie umgebrochen werden.

#### Das Keyboard

Zuerst erstellen wir Platz, um das Keyboard aufzubauen. Wir werden das Keyboard programmgesteuert erstellen, da uns das die Flexibilität gibt, jede Taste entsprechend den für die jeweilige Note relevanten Daten zu konfigurieren. In unserem Fall erhalten wir die Frequenz jeder Taste aus einer Tabelle, aber sie könnte auch algorithmisch berechnet werden.

```html
<div class="container">
  <div class="keyboard"></div>
</div>
```

Das {{HTMLElement("div")}}, benannt `"container"`, ist der scrollbare Kasten, der das horizontale Scrollen des Keyboards ermöglicht, wenn es zu breit für den verfügbaren Raum ist. Die Tasten selbst werden in den Block der Klasse `"keyboard"` eingefügt.

#### Die Einstellungsleiste

Unterhalb des Keyboards platzieren wir einige Steuerungen zur Konfiguration der Schicht. Aktuell werden wir zwei Steuerungen haben: eine, um die Hauptlautstärke einzustellen, und eine andere, um die periodische Wellenform auszuwählen, die bei der Erzeugung der Noten verwendet werden soll.

##### Die Lautstärkeregelung

Zuerst erstellen wir das `<div>`, um die Einstellungsleiste zu enthalten, damit es nach Bedarf gestylt werden kann. Dann richten wir eine Box ein, die auf der linken Seite der Leiste präsentiert wird, und platzieren ein Label und ein {{HTMLElement("input")}}-Element vom Typ `"range"`. Das Range-Element wird normalerweise als Slider-Steuerung angezeigt; wir konfigurieren es so, dass es jeden Wert zwischen 0,0 und 1,0 erlaubt, in Schritten von 0,01 pro Position.

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

Wir geben einen Standardwert von 0,5 an und stellen ein {{HTMLElement("datalist")}}-Element bereit, das mit dem Range-Element über das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut verbunden ist, um eine Optionsliste zu finden, deren ID übereinstimmt; in diesem Fall heißt der Datensatz `"volumes"`. Dies ermöglicht es uns, eine Reihe von üblichen Werten und speziellen Zeichenketten bereitzustellen, die der Browser möglicherweise optional in irgendeiner Form anzeigt; wir geben Namen für die Werte 0,0 ("Stumm") und 1,0 ("100%") an.

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
  background-color: #eeeeff;
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

Der JavaScript-Code beginnt mit der Initialisierung einer Anzahl von Variablen.

```js
const audioContext = new AudioContext();
const oscList = [];
let mainGainNode = null;
```

1. `audioContext` wird als Instanz von [`AudioContext`](/de/docs/Web/API/AudioContext) erstellt.
2. `oscList` wird eingerichtet, um bereit zu sein, eine Liste aller aktuell spielenden Oszillatoren zu enthalten. Es startet leer, da noch keine spielen.
3. `mainGainNode` wird auf null gesetzt; während des Setups wird es so konfiguriert, dass es einen [`GainNode`](/de/docs/Web/API/GainNode) enthält, den alle spielenden Oszillatoren anschließen und durch den sie spielen, um die Gesamtlautstärke mit einem einzigen Slider zu steuern.

```js
const keyboard = document.querySelector(".keyboard");
const wavePicker = document.querySelector("select[name='waveform']");
const volumeControl = document.querySelector("input[name='volume']");
```

Referenzen auf Elemente, auf die wir zugreifen müssen, werden erhalten:

- `keyboard` ist das Containerelement, in das die Tasten platziert werden.
- `wavePicker` ist das {{HTMLElement("select")}}-Element, das verwendet wird, um die Wellenform auszuwählen, die für die Noten verwendet werden soll.
- `volumeControl` ist das {{HTMLElement("input")}}-Element (vom Typ `"range"`), das verwendet wird, um die Hauptlautstärke zu steuern.

```js
let customWaveform = null;
let sineTerms = null;
let cosineTerms = null;
```

Schließlich werden globale Variablen erstellt, die beim Erstellen von Wellenformen verwendet werden:

- `customWaveform` wird als [`PeriodicWave`](/de/docs/Web/API/PeriodicWave) eingerichtet, die die Wellenform beschreibt, die verwendet wird, wenn der Benutzer "Custom" aus dem Wellenformwähler auswählt.
- `sineTerms` und `cosineTerms` werden verwendet, um die Daten zur Erstellung der Wellenform zu speichern; jeder wird ein Array enthalten, das generiert wird, wenn der Benutzer "Custom" auswählt.

### Erstellen der Noten-Tabelle

Die Funktion `createNoteTable()` erstellt das Array `noteFreq`, um ein Array von Objekten zu enthalten, die jede Oktave repräsentieren. Jede Oktave hat wiederum eine benannte Eigenschaft für jede Note in dieser Oktave; der Name der Eigenschaft ist der Name der Note (wie "C#" für Cis), und der Wert ist die Frequenz in Hertz dieser Note. Wir verankern nur eine Oktave fest; jede nachfolgende Oktave kann von der vorherigen abgeleitet werden, indem jede Note verdoppelt wird.

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

Mit dieser Tabelle können wir die Frequenz für eine gegebene Note in einer bestimmten Oktave ganz einfach herausfinden. Wenn wir die Frequenz für die Note G# in Oktave 1 suchen, verwenden wir `noteFreq[1]["G#"]` und erhalten den Wert 51.9 als Ergebnis.

> [!NOTE]
> Die Werte in der obigen Beispiel-Tabelle wurden auf zwei Dezimalstellen gerundet.

### Das Keyboard bauen

Die Funktion `setup()` ist dafür verantwortlich, das Keyboard zu erstellen und die App zum Spielen von Musik vorzubereiten.

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

1. Die Tabelle, die Notennamen und Oktaven mit ihren Frequenzen abbildet, wird durch Aufruf von `createNoteTable()` erstellt.
2. Ein Ereignishandler wird eingerichtet (durch Aufruf unseres alten Freundes [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)), um [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse auf dem Haupt-Lautstärkeregler zu behandeln. Dies wird das Lautstärkelinienvolumen des Haupt-Lautstärkeknotens auf den neuen Wert des Reglers aktualisieren.
3. Als nächstes iterieren wir über jede Oktave in der Notenfrequenz-Tabelle. Für jede Oktave verwenden wir {{jsxref("Object.entries()")}}, um eine Liste der Noten in dieser Oktave zu erhalten.
4. Erstellen Sie ein {{HTMLElement("div")}}, das die Noten dieser Oktave enthält (sodass wir ein kleines bisschen Platz zwischen den Oktaven angezeigt haben können), und setzen Sie den Klassennamen auf "octave".
5. Für jede Taste in der Oktave überprüfen wir, ob der Name der Note mehr als ein Zeichen hat. Diese überspringen wir, da wir die Kreuztöne in diesem Beispiel weglassen. Wenn der Name der Note nur ein Zeichen hat, rufen wir `createKey()` auf, indem wir die Zeichenkette der Note, die Oktave und die Frequenz angeben. Das zurückgegebene Element wird dem in Schritt 4 erstellten Oktave-Element hinzugefügt.
6. Wenn jedes Oktave-Element erstellt wurde, wird es dem Keyboard hinzugefügt.
7. Sobald das Keyboard erstellt wurde, scrollen wir die Note "B" in Oktave 5 in den Sichtbereich; das hat zur Folge, dass mittleres C zusammen mit seinen umliegenden Tasten sichtbar ist.
8. Dann wird eine neue benutzerdefinierte Wellenform mit [`BaseAudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave) erstellt. Diese Wellenform wird jedes Mal verwendet, wenn der Benutzer "Custom" aus dem Wellenformwähler auswählt.
9. Schließlich wird die Oszillatorenliste initialisiert, um sicherzustellen, dass sie bereit ist, Informationen zu empfangen, welche Oszillatoren mit welchen Tasten verbunden sind.

#### Erstellen einer Taste

Die Funktion `createKey()` wird einmal für jede Taste aufgerufen, die wir im virtuellen Keyboard präsentieren möchten. Sie erstellt die Elemente, die die Taste und ihr Label umfassen, fügt dem Element einige Datenattribute für die spätere Verwendung hinzu und weist Ereignishandler für die Ereignisse zu, die uns interessieren.

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

Nachdem die Elemente erstellt wurden, die die Taste und ihr Label darstellen, konfigurieren wir das Taste-Element, indem wir seine Klasse auf "key" setzen (was sein Aussehen festlegt). Dann fügen wir [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)-Attribute hinzu, die die Oktave der Taste (Attribut `data-octave`), die Zeichenkette darstellen, die Note zu spielen (Attribut `data-note`), und die Frequenz (Attribut `data-frequency`) in Hertz enthalten. Dies ermöglicht es uns, diese Informationen bei Bedarf einfach abzurufen, wenn wir Ereignisse behandeln.

### Musik machen

#### Einen Ton spielen

Die Aufgabe der Funktion `playTone()` ist es, einen Ton mit der gegebenen Frequenz zu spielen. Diese wird vom Handler für Ereignisse verwendet, die Tasten auf dem Keyboard auslösen, um die entsprechenden Noten zu spielen.

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

`playTone()` beginnt mit der Erstellung eines neuen [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) durch Aufruf der Methode [`BaseAudioContext.createOscillator()`](/de/docs/Web/API/BaseAudioContext/createOscillator). Wir verbinden ihn dann mit dem Hauptlautstärkeknoten, indem wir die Methode [`connect()`](/de/docs/Web/API/AudioNode/connect) des neuen Oszillators aufrufen, was dem Oszillator mitteilt, wohin er seine Ausgabe senden soll. Dadurch wird das Ändern des Lautstärkereglers des Hauptlautstärkeknotens die Lautstärke aller generierten Töne beeinflussen.

Dann erhalten wir die Art der zu verwendenden Wellenform, indem wir den Wert des Wellenformwählers in der Einstellungsleiste überprüfen. Wenn der Benutzer auf `"custom"` eingestellt hat, rufen wir [`OscillatorNode.setPeriodicWave()`](/de/docs/Web/API/OscillatorNode/setPeriodicWave) auf, um den Oszillator so zu konfigurieren, dass er unsere benutzerdefinierte Wellenform verwendet. Dies setzt automatisch den [`type`](/de/docs/Web/API/OscillatorNode/type) des Oszillators auf `custom`. Wenn eine andere Wellenformart im Wellenformwähler ausgewählt ist, setzen wir den Typ des Oszillators auf den Wert des Wählers; dieser Wert wird einer von `sine`, `square`, `triangle` und `sawtooth` sein.

Die Frequenz des Oszillators wird auf den im `freq`-Parameter angegebenen Wert gesetzt, indem der Wert des [`OscillatorNode.frequency`](/de/docs/Web/API/OscillatorNode/frequency) [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekts festgelegt wird. Schließlich wird der Oszillator gestartet, damit er anfängt, Sound zu produzieren, indem die vererbte Methode [`AudioScheduledSourceNode.start()`](/de/docs/Web/API/AudioScheduledSourceNode/start) des Oszillators aufgerufen wird.

#### Eine Note spielen

Wenn das [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`mouseover`](/de/docs/Web/API/Element/mouseover_event)-Ereignis auf einer Taste auftritt, möchten wir die entsprechende Note zu spielen beginnen. Die Funktion `notePressed()` wird als Ereignishandler für diese Ereignisse verwendet.

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

Wir beginnen damit zu überprüfen, ob die primäre Maustaste gedrückt ist, aus zwei Gründen. Erstens wollen wir nur die primäre Maustaste zulassen, um das Abspielen von Noten zu starten. Zweitens und vor allem nutzen wir dies, um [`mouseover`](/de/docs/Web/API/Element/mouseover_event) für Fälle zu behandeln, in denen der Benutzer von Note zu Note zieht, und wir möchten nur starten, die Note zu spielen, wenn die Maus gedrückt wird, wenn sie in das Element eintritt.

Wenn die Maustaste tatsächlich unten ist, erhalten wir das [`dataset`](/de/docs/Web/API/HTMLElement/dataset)-Attribut der gedrückten Taste; dies macht es einfach, auf die benutzerdefinierten Datenattribute des Elements zuzugreifen. Wir suchen nach einem `data-pressed`-Attribut; wenn keines vorhanden ist (was darauf hinweist, dass die Note nicht bereits gespielt wird), rufen wir `playTone()` auf, um die Note zu beginnen, indem wir den Wert des `data-frequency`-Attributes des Elements übergeben. Der zurückgegebene Oszillator wird für zukünftige Referenz in `oscList` gespeichert und `data-pressed` wird auf `yes` gesetzt, um anzuzeigen, dass die Note gespielt wird, damit wir sie beim nächsten Aufruf nicht wieder starten.

#### Einen Ton stoppen

Die Funktion `noteReleased()` ist der Ereignishandler, der aufgerufen wird, wenn der Benutzer die Maustaste loslässt oder die Maus aus der gerade gespielten Taste herausbewegt.

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

`noteReleased()` verwendet die benutzerdefinierten Attribute `data-octave` und `data-note`, um den Oszillator der Taste nachzuschlagen, und ruft dann die vererbte Methode [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop) des Oszillators auf, um die Note zu stoppen. Schließlich wird der `oscList`-Eintrag für die Note geleert und das `data-pressed`-Attribut vom Tasten-Element (wie durch [`event.target`](/de/docs/Web/API/Event/target) identifiziert) entfernt, um anzuzeigen, dass die Note aktuell nicht gespielt wird.

#### Ändern der Hauptlautstärke

Der Lautstärkeregler in der Einstellungsleiste bietet eine Schnittstelle, um den Lautstärkewert des Hauptlautstärkeknotens zu ändern und dadurch die Lautstärke aller gespielten Noten zu ändern. Die Methode `changeVolume()` ist der Handler für das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis auf dem Slider.

```js
function changeVolume(event) {
  mainGainNode.gain.value = volumeControl.value;
}
```

Dies setzt den Wert des Lautstärke-`gain`-[`AudioParam`](/de/docs/Web/API/AudioParam) des Hauptlautstärkeknotens auf den neuen Wert des Sliders fest.

#### Unterstützung der Tastatur

Der nachfolgende Code fügt [`keydown`](/de/docs/Web/API/Element/keydown_event) und [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignislistener hinzu, um die Tastatureingabe zu behandeln. Der `keydown`-Ereignishandler ruft `notePressed()` auf, um die Note zu beginnen, die der gedrückten Taste entspricht, und der `keyup`-Ereignishandler ruft `noteReleased()` auf, um die Note zu stoppen, die der losgelassenen Taste entspricht.

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

Insgesamt ergibt sich ein einfaches, aber funktionierendes Point-and-Click-Musik-Keyboard:

{{ EmbedLiveSample('The_video_keyboard', 680, 200) }}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
- [`GainNode`](/de/docs/Web/API/GainNode)
- [`AudioContext`](/de/docs/Web/API/AudioContext)
