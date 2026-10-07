---
title: "Beispiel und Tutorial: Einfaches Synthesizer-Keyboard"
slug: Web/API/Web_Audio_API/Simple_synth
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel zeigt den Code und eine funktionsfähige Demo einer virtuellen Klaviatur, die Sie mit der Maus spielen können. Sie können zwischen den Standardwellenformen und einer benutzerdefinierten Wellenform wechseln. Die Gesamtlautstärke lässt sich über einen Schieberegler unterhalb der Klaviatur einstellen. In diesem Beispiel werden die folgenden Web-API-Schnittstellen verwendet: [`AudioContext`](/de/docs/Web/API/AudioContext), [`OscillatorNode`](/de/docs/Web/API/OscillatorNode), [`PeriodicWave`](/de/docs/Web/API/PeriodicWave) und [`GainNode`](/de/docs/Web/API/GainNode).

Da [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) auf [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) basiert, ist dies bis zu einem gewissen Grad auch ein Beispiel für diese Schnittstelle.

## Die virtuelle Klaviatur

### HTML

Die Anzeige unserer virtuellen Klaviatur besteht aus drei Hauptkomponenten. Die erste ist die Klaviatur selbst. Wir platzieren sie in zwei verschachtelten {{HTMLElement("div")}}-Elementen. So kann die Klaviatur horizontal gescrollt werden, wenn nicht alle Tasten auf den Bildschirm passen, ohne dass die Tasten in die nächste Zeile umbrechen.

#### Die Klaviatur

Zunächst schaffen wir einen Bereich für die Klaviatur. Wir werden die Klaviatur programmatisch erstellen. Das gibt uns die Möglichkeit, jede Taste anhand der Daten für die entsprechende Note zu konfigurieren. In unserem Fall entnehmen wir die Frequenz jeder Taste einer Tabelle; sie könnte aber auch algorithmisch berechnet werden.

```html
<div class="container">
  <div class="keyboard"></div>
</div>
```

Das {{HTMLElement("div")}}-Element namens `"container"` ist der scrollbare Bereich, in dem die Klaviatur bei Bedarf horizontal gescrollt werden kann. Die Tasten selbst werden in das Element mit der Klasse `"keyboard"` eingefügt.

#### Die Einstellungsleiste

Unterhalb der Klaviatur platzieren wir Steuerelemente für die Einstellungen. Zunächst gibt es zwei: eines zum Einstellen der Gesamtlautstärke und eines zur Auswahl der periodischen Wellenform, mit der die Noten erzeugt werden.

##### Der Lautstärkeregler

Zuerst erstellen wir das `<div>`-Element für die Einstellungsleiste, damit wir es nach Bedarf gestalten können. Dann legen wir einen Bereich auf der linken Seite der Leiste an und platzieren dort eine Beschriftung und ein {{HTMLElement("input")}}-Element vom Typ `"range"`. Dieses Element wird normalerweise als Schieberegler dargestellt. Wir konfigurieren es so, dass es Werte zwischen 0,0 und 1,0 in Schritten von 0,01 zulässt.

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

Wir geben den Standardwert 0,5 an und stellen ein {{HTMLElement("datalist")}}-Element bereit. Es wird über das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut mit dem Schieberegler verknüpft, indem dessen Wert mit der ID der Optionsliste übereinstimmt. In diesem Fall heißt die Liste `"volumes"`. Damit können wir häufig verwendete Werte und besondere Beschriftungen angeben, die der Browser optional anzeigen kann. Wir versehen die Werte 0,0 und 1,0 mit den Beschriftungen „Stumm“ beziehungsweise „100 %“.

##### Die Auswahl der Wellenform

Auf der rechten Seite der Einstellungsleiste platzieren wir eine Beschriftung und ein {{HTMLElement("select")}}-Element namens `"waveform"`, dessen Optionen den verfügbaren Wellenformen entsprechen.

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

Der JavaScript-Code beginnt mit der Initialisierung mehrerer Variablen.

```js
const audioContext = new AudioContext();
const oscList = [];
let mainGainNode = null;
```

1. `audioContext` wird als Instanz von [`AudioContext`](/de/docs/Web/API/AudioContext) erstellt.
2. `oscList` wird für eine Liste aller derzeit spielenden Oszillatoren vorbereitet. Die Liste ist anfangs leer, da noch keine Oszillatoren spielen.
3. `mainGainNode` wird auf null gesetzt. Während der Einrichtung wird der Variablen ein [`GainNode`](/de/docs/Web/API/GainNode) zugewiesen, mit dem alle spielenden Oszillatoren verbunden werden. So kann ihre Gesamtlautstärke mit einem einzigen Schieberegler gesteuert werden.

```js
const keyboard = document.querySelector(".keyboard");
const wavePicker = document.querySelector("select[name='waveform']");
const volumeControl = document.querySelector("input[name='volume']");
```

Anschließend werden Referenzen auf die benötigten Elemente abgerufen:

- `keyboard` ist das Containerelement, in das die Tasten eingefügt werden.
- `wavePicker` ist das {{HTMLElement("select")}}-Element zur Auswahl der Wellenform für die Noten.
- `volumeControl` ist das {{HTMLElement("input")}}-Element vom Typ `"range"`, mit dem die Gesamtlautstärke gesteuert wird.

```js
let customWaveform = null;
let sineTerms = null;
let cosineTerms = null;
```

Schließlich werden globale Variablen für die Erstellung von Wellenformen angelegt:

- `customWaveform` wird eine [`PeriodicWave`](/de/docs/Web/API/PeriodicWave) enthalten, die die Wellenform beschreibt, die verwendet wird, wenn „Custom“ in der Wellenformauswahl ausgewählt wird.
- `sineTerms` und `cosineTerms` speichern die Daten zur Erzeugung der Wellenform. Beide enthalten jeweils ein Array, das erstellt wird, wenn „Custom“ ausgewählt wird.

### Erstellen der Notentabelle

Die Funktion `createNoteTable()` erstellt das Array `noteFreq`. Es enthält Objekte, die jeweils eine Oktave repräsentieren. Jede Oktave hat wiederum für jede ihrer Noten eine benannte Eigenschaft. Der Name der Eigenschaft ist der Notenname, beispielsweise „C#“ für Cis; ihr Wert ist die Frequenz der Note in Hertz. Wir legen nur eine Oktave fest im Code an. Jede weitere Oktave lässt sich aus der vorherigen ableiten, indem die Frequenz jeder Note verdoppelt wird.

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

Ein Ausschnitt des resultierenden Objekts sieht so aus:

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

Mithilfe dieser Tabelle lässt sich die Frequenz einer Note in einer bestimmten Oktave leicht ermitteln. Für die Frequenz der Note G# in Oktave 1 verwenden wir `noteFreq[1]["G#"]` und erhalten den Wert 51,9.

> [!NOTE]
> Die Werte in der obigen Beispieltabelle wurden auf zwei Dezimalstellen gerundet.

### Erstellen der Klaviatur

Die Funktion `setup()` erstellt die Klaviatur und bereitet die Anwendung darauf vor, Musik abzuspielen.

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

1. Durch Aufrufen von `createNoteTable()` wird die Tabelle erstellt, die Notennamen und Oktaven ihren Frequenzen zuordnet.
2. Mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) wird ein Event-Handler für [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse am Regler für die Gesamtlautstärke eingerichtet. Er aktualisiert die Lautstärke des zentralen Gain-Nodes auf den neuen Wert des Reglers.
3. Anschließend durchlaufen wir jede Oktave in der Tabelle der Notenfrequenzen. Mit {{jsxref("Object.entries()")}} erhalten wir für jede Oktave eine Liste ihrer Noten.
4. Wir erstellen ein {{HTMLElement("div")}}-Element für die Noten der Oktave, damit zwischen den Oktaven etwas Abstand bleibt, und setzen seinen Klassennamen auf „octave“.
5. Für jede Taste der Oktave prüfen wir, ob der Notenname aus mehr als einem Zeichen besteht. Solche Noten überspringen wir, da dieses Beispiel die erhöhten Noten auslässt. Besteht der Name aus nur einem Zeichen, rufen wir `createKey()` mit dem Notennamen, der Oktave und der Frequenz auf. Das zurückgegebene Element wird dem in Schritt 4 erstellten Oktavenelement hinzugefügt.
6. Sobald ein Oktavenelement fertiggestellt ist, wird es der Klaviatur hinzugefügt.
7. Nach dem Erstellen der Klaviatur scrollen wir die Note „B“ in Oktave 5 in den sichtbaren Bereich. Dadurch sind das mittlere C und die benachbarten Tasten sichtbar.
8. Anschließend wird mit [`BaseAudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave) eine neue benutzerdefinierte Wellenform erstellt. Sie wird verwendet, wenn in der Wellenformauswahl „Custom“ ausgewählt wird.
9. Schließlich wird die Oszillatorenliste initialisiert, damit sie Informationen darüber aufnehmen kann, welcher Oszillator welcher Taste zugeordnet ist.

#### Erstellen einer Taste

Die Funktion `createKey()` wird für jede Taste aufgerufen, die auf der virtuellen Klaviatur angezeigt werden soll. Sie erstellt die Elemente für die Taste und ihre Beschriftung, fügt dem Tastenelement Datenattribute für die spätere Verwendung hinzu und weist ihm Event-Handler für die relevanten Ereignisse zu.

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

Nachdem wir die Elemente für die Taste und ihre Beschriftung erstellt haben, setzen wir die Klasse des Tastenelements auf „key“, um sein Aussehen festzulegen. Dann fügen wir [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)-Attribute hinzu. Sie enthalten die Oktave der Taste (Attribut `data-octave`), den Namen der zu spielenden Note (Attribut `data-note`) und ihre Frequenz in Hertz (Attribut `data-frequency`). So können wir diese Informationen bei der Verarbeitung von Ereignissen leicht abrufen.

### Musik erzeugen

#### Einen Ton abspielen

Die Funktion `playTone()` spielt einen Ton mit der angegebenen Frequenz ab. Sie wird vom Event-Handler verwendet, der beim Betätigen einer Taste die entsprechende Note abspielt.

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

`playTone()` erstellt zunächst einen neuen [`OscillatorNode`](/de/docs/Web/API/OscillatorNode), indem die Methode [`BaseAudioContext.createOscillator()`](/de/docs/Web/API/BaseAudioContext/createOscillator) aufgerufen wird. Anschließend verbinden wir ihn über die [`connect()`](/de/docs/Web/API/AudioNode/connect)-Methode des neuen Oszillators mit dem zentralen Gain-Node. Damit legen wir fest, wohin der Oszillator seine Ausgabe sendet. Eine Änderung des Gain-Werts dieses Nodes wirkt sich dadurch auf die Lautstärke aller erzeugten Töne aus.

Danach lesen wir aus der Wellenformauswahl in der Einstellungsleiste ab, welche Wellenform verwendet werden soll. Ist sie auf `"custom"` eingestellt, rufen wir [`OscillatorNode.setPeriodicWave()`](/de/docs/Web/API/OscillatorNode/setPeriodicWave) auf, damit der Oszillator unsere benutzerdefinierte Wellenform verwendet. Dadurch wird die [`type`](/de/docs/Web/API/OscillatorNode/type)-Eigenschaft des Oszillators automatisch auf `custom` gesetzt. Ist eine andere Wellenform ausgewählt, setzen wir den Typ des Oszillators auf den Wert der Auswahl. Dieser Wert ist entweder `sine`, `square`, `triangle` oder `sawtooth`.

Die Frequenz des Oszillators wird auf den im Parameter `freq` angegebenen Wert gesetzt. Dazu setzen wir den Wert des [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekts [`OscillatorNode.frequency`](/de/docs/Web/API/OscillatorNode/frequency). Schließlich starten wir den Oszillator mit seiner geerbten Methode [`AudioScheduledSourceNode.start()`](/de/docs/Web/API/AudioScheduledSourceNode/start), damit er einen Ton erzeugt.

#### Eine Note abspielen

Wenn auf einer Taste ein [`mousedown`](/de/docs/Web/API/Element/mousedown_event)- oder [`mouseover`](/de/docs/Web/API/Element/mouseover_event)-Ereignis eintritt, soll die entsprechende Note abgespielt werden. Die Funktion `notePressed()` dient als Event-Handler für diese Ereignisse.

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

Zunächst prüfen wir aus zwei Gründen, ob die primäre Maustaste gedrückt ist. Erstens sollen nur Aktionen mit der primären Maustaste eine Note auslösen. Zweitens verarbeiten wir damit [`mouseover`](/de/docs/Web/API/Element/mouseover_event)-Ereignisse, wenn die Maus bei gedrückter Taste von einer Note zur nächsten bewegt wird. Eine Note soll dabei nur abgespielt werden, wenn die Maustaste beim Eintritt in das Element gedrückt ist.

Ist die Maustaste tatsächlich gedrückt, rufen wir die [`dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft der betätigten Taste ab. Über sie können wir leicht auf die benutzerdefinierten Datenattribute des Elements zugreifen. Wir prüfen, ob ein `data-pressed`-Attribut vorhanden ist. Fehlt es, wird die Note noch nicht abgespielt. Dann rufen wir `playTone()` mit dem Wert des `data-frequency`-Attributs auf, um sie abzuspielen. Der zurückgegebene Oszillator wird zur späteren Verwendung in `oscList` gespeichert. Außerdem setzen wir `data-pressed` auf `yes`, um anzuzeigen, dass die Note spielt und bei einem erneuten Aufruf nicht noch einmal gestartet werden soll.

#### Einen Ton anhalten

Die Funktion `noteReleased()` ist der Event-Handler, der aufgerufen wird, wenn die Maustaste losgelassen oder der Mauszeiger von der gerade spielenden Taste wegbewegt wird.

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

`noteReleased()` verwendet die benutzerdefinierten Attribute `data-octave` und `data-note`, um den Oszillator der Taste zu finden. Anschließend ruft die Funktion dessen geerbte Methode [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop) auf, um die Note anzuhalten. Schließlich wird der Eintrag für die Note in `oscList` gelöscht und das Attribut `data-pressed` vom Tastenelement entfernt, das über [`event.target`](/de/docs/Web/API/Event/target) bestimmt wird. Damit wird angezeigt, dass die Note derzeit nicht abgespielt wird.

#### Die Gesamtlautstärke ändern

Mit dem Lautstärkeregler in der Einstellungsleiste lässt sich der Gain-Wert des zentralen Gain-Nodes ändern. Dadurch ändert sich die Lautstärke aller spielenden Noten. Die Methode `changeVolume()` ist der Handler für das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis des Schiebereglers.

```js
function changeVolume(event) {
  mainGainNode.gain.value = volumeControl.value;
}
```

Sie setzt den Wert des [`AudioParam`](/de/docs/Web/API/AudioParam) `gain` des zentralen Gain-Nodes auf den neuen Wert des Schiebereglers.

#### Unterstützung der Computertastatur

Der folgende Code fügt Event-Listener für [`keydown`](/de/docs/Web/API/Element/keydown_event) und [`keyup`](/de/docs/Web/API/Element/keyup_event) hinzu, um Eingaben über die Computertastatur zu verarbeiten. Der Event-Handler für `keydown` ruft `notePressed()` auf, um die Note der gedrückten Taste abzuspielen. Der Event-Handler für `keyup` ruft `noteReleased()` auf, um die Note der losgelassenen Taste anzuhalten.

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

Zusammen ergibt sich eine einfache, aber funktionsfähige Klaviatur, die Sie per Mausklick spielen können:

{{ EmbedLiveSample('The_video_keyboard', 680, 200) }}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
- [`GainNode`](/de/docs/Web/API/GainNode)
- [`AudioContext`](/de/docs/Web/API/AudioContext)
