---
title: "Beispiel und Tutorial: Einfaches Synthesizer-Keyboard"
slug: Web/API/Web_Audio_API/Simple_synth
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel präsentiert den Code und ein funktionierendes Demo eines Videokeyboards, das Sie mit der Maus spielen können. Das Keyboard ermöglicht es Ihnen, zwischen den Standard-Wellenformen sowie einer benutzerdefinierten Wellenform umzuschalten. Sie können den Hauptverstärker mit einem Lautstärkeregler unter dem Keyboard steuern. Dieses Beispiel nutzt die folgenden Web-API-Schnittstellen: [`AudioContext`](/de/docs/Web/API/AudioContext), [`OscillatorNode`](/de/docs/Web/API/OscillatorNode), [`PeriodicWave`](/de/docs/Web/API/PeriodicWave) und [`GainNode`](/de/docs/Web/API/GainNode).

Da [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) auf [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) basiert, ist dies bis zu einem gewissen Grad auch ein Beispiel dafür.

## Das Video-Keyboard

### HTML

Es gibt drei Hauptkomponenten zur Anzeige unseres virtuellen Keyboards. Die erste ist das Musik-Keyboard selbst. Wir zeichnen dies in einem Paar verschachtelter {{HTMLElement("div")}}-Elemente, um das Keyboard horizontal rollbar zu machen, falls alle Tasten nicht auf den Bildschirm passen, ohne sie umlaufen zu lassen.

#### Das Keyboard

Zuerst schaffen wir Platz, um das Keyboard zu bauen. Wir werden das Keyboard programmatisch konstruieren, da uns dies die Flexibilität gibt, jede Taste so zu konfigurieren, wie wir die entsprechenden Daten für die jeweilige Note bestimmen. In unserem Fall erhalten wir die Frequenz jeder Taste aus einer Tabelle, es könnte jedoch auch algorithmisch berechnet werden.

```html
<div class="container">
  <div class="keyboard"></div>
</div>
```

Das {{HTMLElement("div")}} mit dem Namen `"container"` ist das scrollbare Feld, das es ermöglicht, das Keyboard horizontal zu scrollen, falls es zu breit für den verfügbaren Raum ist. Die Tasten selbst werden in den Block der Klasse `"keyboard"` eingefügt.

#### Die Einstellungsleiste

Unter dem Keyboard platzieren wir einige Steuerungen zur Konfiguration der Ebene. Zurzeit haben wir zwei Steuerungen: eine, um die Hauptlautstärke einzustellen, und eine weitere, um auszuwählen, welche periodische Wellenform bei der Erzeugung von Noten verwendet werden soll.

##### Der Lautstärkeregler

Zuerst erstellen wir das `<div>`, um die Einstellungsleiste zu enthalten, damit sie bei Bedarf gestaltet werden kann. Dann richten wir ein Feld ein, das auf der linken Seite der Leiste angezeigt wird, und platzieren ein Label und ein {{HTMLElement("input")}}-Element vom Typ `"range"`. Das Range-Element wird normalerweise als Schieberegler dargestellt; wir konfigurieren es so, dass es jeden Wert zwischen 0.0 und 1.0 zulässt, wobei bei jedem Schritt 0.01 erhöht wird.

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

Wir geben einen Standardwert von 0.5 an und stellen ein {{HTMLElement("datalist")}}-Element bereit, das mit dem `range` durch das Attribut [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) verbunden ist, um eine Optionsliste zu finden, deren ID übereinstimmt; in diesem Fall handelt es sich um den Datensatz mit dem Namen `"volumes"`. Dies ermöglicht es uns, eine Reihe von üblichen Werten und speziellen Zeichenfolgen bereitzustellen, die der Browser eventuell in irgendeiner Weise anzeigen kann; wir geben Namen für die Werte 0.0 ("Stumm") und 1.0 ("100%") an.

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

Der JavaScript-Code beginnt damit, eine Anzahl von Variablen zu initialisieren.

```js
const audioContext = new AudioContext();
const oscList = [];
let mainGainNode = null;
```

1. `audioContext` wird als Instanz von [`AudioContext`](/de/docs/Web/API/AudioContext) erstellt.
2. `oscList` wird eingerichtet, um bereit zu sein, eine Liste aller aktuell spielenden Oszillatoren zu enthalten. Es beginnt leer, da noch keine spielen.
3. `mainGainNode` wird auf null gesetzt; während des Einrichtungsprozesses wird es so konfiguriert, dass es einen [`GainNode`](/de/docs/Web/API/GainNode) enthält, an den alle spielenden Oszillatoren angeschlossen werden und durch den sie gespielt werden, um die Gesamtlautstärke mit einem einzelnen Schieberegler steuern zu können.

```js
const keyboard = document.querySelector(".keyboard");
const wavePicker = document.querySelector("select[name='waveform']");
const volumeControl = document.querySelector("input[name='volume']");
```

Referenzen auf Elemente, auf die wir zugreifen müssen, werden abgerufen:

- `keyboard` ist das Containerelement, in das die Tasten eingefügt werden.
- `wavePicker` ist das {{HTMLElement("select")}}-Element, das zur Auswahl der Wellenform verwendet wird, die für die Noten verwendet werden soll.
- `volumeControl` ist das {{HTMLElement("input")}}-Element (vom Typ `"range"`), das verwendet wird, um die Hauptlautstärke des Audios zu steuern.

```js
let customWaveform = null;
let sineTerms = null;
let cosineTerms = null;
```

Schließlich werden globale Variablen erstellt, die beim Erstellen von Wellenformen verwendet werden:

- `customWaveform` wird als ein [`PeriodicWave`](/de/docs/Web/API/PeriodicWave) eingerichtet, das die Wellenform beschreibt, die verwendet wird, wenn der Benutzer "Benutzerdefiniert" aus dem Wellenformausswahlmenü auswählt.
- `sineTerms` und `cosineTerms` werden verwendet, um die Daten zum Erzeugen der Wellenform zu speichern; jede enthält ein Array, das erzeugt wird, wenn der Benutzer "Benutzerdefiniert" wählt.

### Erstellen der Notentabelle

Die Funktion `createNoteTable()` baut das Array `noteFreq` auf, um ein Array von Objekten zu enthalten, die jedes Oktav darstellen. Jedes Oktav hat wiederum eine benannte Eigenschaft für jede Note in diesem Oktav; der Name der Eigenschaft ist der Name der Note (z.B. "C#" für Cis), und der Wert ist die Frequenz, in Hertz, dieser Note. Wir kodieren nur ein Oktav fest; jedes nachfolgende Oktav kann aus dem vorherigen Oktav abgeleitet werden, indem jede Note verdoppelt wird.

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

Mit dieser Tabelle können wir die Frequenz für eine bestimmte Note in einem bestimmten Oktav ganz einfach herausfinden. Wenn wir die Frequenz für die Note G# in Oktav 1 möchten, nutzen wir `noteFreq[1]["G#"]` und erhalten den Wert 51.9 als Ergebnis.

> [!NOTE]
> Die Werte in der oben angegebenen Beispiel-Tabelle wurden auf zwei Dezimalstellen gerundet.

### Das Keyboard aufbauen

Die `setup()`-Funktion ist dafür verantwortlich, das Keyboard zu erstellen und die App für die Wiedergabe von Musik vorzubereiten.

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

1. Die Tabelle, die Notennamen und Oktaven ihren Frequenzen zuordnet, wird durch Aufrufen von `createNoteTable()` erstellt.
2. Ein Ereignishandler wird eingerichtet (durch Aufrufen unseres alten Bekannten [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)), um [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse auf der Haupteinstellung zu behandeln. Dies aktualisiert die Lautstärke des Hauptverstärkerknotens auf den neuen Wert der Steuerung.
3. Als Nächstes durchlaufen wir jede Oktave in der Notenfrequenzen-Tabelle. Für jede Oktave verwenden wir {{jsxref("Object.entries()")}}, um eine Liste der Noten in dieser Oktave zu erhalten.
4. Ein {{HTMLElement("div")}} wird erstellt, um die Noten dieser Oktave zu enthalten (damit wir etwas Abstand zwischen den Oktaven einfügen können) und setzen seinen Klassennamen auf "octave".
5. Für jede Taste in der Oktave prüfen wir, ob der Notenname mehr als ein Zeichen hat. Wir überspringen diese, da wir in diesem Beispiel die Kreuznotizen weglassen. Wenn der Notenname nur ein Zeichen hat, rufen wir `createKey()` auf, wobei wir die Notenzeichenfolge, die Oktave und die Frequenz angeben. Das zurückgegebene Element wird dem in Schritt 4 erstellten Oktavenelement hinzugefügt.
6. Wenn jedes Oktavenelement erstellt wurde, wird es dem Keyboard hinzugefügt.
7. Sobald das Keyboard aufgebaut ist, scrollen wir die Note "B" in Oktav 5 ins Sichtfeld; dies hat den Effekt, dass C4 sichtbar gemacht wird zusammen mit den umliegenden Tasten.
8. Dann wird eine neue benutzerdefinierte Wellenform mit [`BaseAudioContext.createPeriodicWave()`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave) erstellt. Diese Wellenform wird verwendet, wenn der Benutzer "Benutzerdefiniert" aus der Wellenformausswahl auswählt.
9. Schließlich wird die Oszillatorliste initialisiert, um sicherzustellen, dass sie bereit ist, Informationen zu empfangen, welche Oszillatoren mit welchen Tasten verknüpft sind.

#### Eine Taste erstellen

Die Funktion `createKey()` wird für jede Taste aufgerufen, die wir in dem virtuellen Keyboard präsentieren möchten. Sie erstellt die Elemente, die die Taste und ihr Etikett ausmachen, fügt dem Element einige Datenattribute für die spätere Verwendung hinzu und weist den Ereignis-Handlern für die relevanten Ereignisse zu.

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

Nach der Erstellung der Elemente, die die Taste und ihr Etikett repräsentieren, konfigurieren wir das Element der Taste, indem wir ihre Klasse auf "key" setzen (was ihr Aussehen festlegt). Dann fügen wir [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)-Attribute hinzu, die das Oktav der Taste (Attribut `data-octave`), die Zeichenfolge, die die zu spielende Note darstellt (Attribut `data-note`), und die Frequenz (Attribut `data-frequency`) in Hertz enthalten. Dies ermöglicht es uns, diese Informationen bei der Ereignisbehandlung bei Bedarf einfach abzurufen.

### Musik machen

#### Einen Ton spielen

Aufgabe der Funktion `playTone()` ist es, einen Ton mit der gegebenen Frequenz zu spielen. Diese wird vom Ereignishandler für die Ereignisse, die Tasten auf dem Keyboard auslösen, verwendet, um die entsprechenden Noten zu spielen.

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

`playTone()` beginnt damit, einen neuen [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) durch Aufrufen der Methode [`BaseAudioContext.createOscillator()`](/de/docs/Web/API/BaseAudioContext/createOscillator) zu erstellen. Wir verbinden es dann mit dem Hauptverstärkerknoten durch Aufrufen der Methode [`connect()`](/de/docs/Web/API/AudioNode/connect) des neuen Oszillators, die dem Oszillator mitteilt, wohin er seine Ausgabe senden soll. Indem wir dies tun, ändert sich die Verstärkung des Hauptverstärkerknotens, und somit wirkt sich dies auf die Lautstärke aller gezielten Töne aus.

Dann erhalten wir den Typ der Wellenform, die verwendet werden soll, indem wir den Wert der Wellenformausswahlsteuerung in der Einstellungsleiste überprüfen. Wenn der Benutzer diese auf `"custom"` gesetzt hat, rufen wir [`OscillatorNode.setPeriodicWave()`](/de/docs/Web/API/OscillatorNode/setPeriodicWave) auf, um den Oszillator zu konfigurieren, unsere benutzerdefinierte Wellenform zu verwenden. Dadurch wird der Typ des Oszillators automatisch auf `custom` gesetzt. Wenn in der Wellenformauswahl eine andere Wellenform ausgewählt ist, setzen wir den Typ des Oszillators auf den Wert der Auswahl; dieser Wert wird einer der folgenden sein: `sine`, `square`, `triangle` und `sawtooth`.

Die Frequenz des Oszillators wird auf den im `freq`-Parameter angegebenen Wert gesetzt, indem der Wert des [`OscillatorNode.frequency`](/de/docs/Web/API/OscillatorNode/frequency)-[`AudioParam`](/de/docs/Web/API/AudioParam)-Objekts festgelegt wird. Dann wird der Oszillator durch Aufrufen der vom [`AudioScheduledSourceNode.start()`](/de/docs/Web/API/AudioScheduledSourceNode/start) geerbten Methode des Oszillators gestartet, um mit der Tonerzeugung zu beginnen.

#### Eine Note spielen

Wenn das [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`mouseover`](/de/docs/Web/API/Element/mouseover_event)-Ereignis auf einer Taste auftritt, möchten wir die entsprechende Note spielen. Die Funktion `notePressed()` wird als Ereignishandler für diese Ereignisse verwendet.

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

Wir beginnen damit, zu überprüfen, ob die primäre Maustaste gedrückt ist, aus zwei Gründen. Erstens möchten wir nur die primäre Maustaste das Abspielen von Noten auslösen lassen. Zweitens, und noch wichtiger, verwenden wir dies, um [`mouseover`](/de/docs/Web/API/Element/mouseover_event) für Fälle zu handhaben, in denen der Benutzer von Note zu Note zieht, und wir möchten nur die Note abspielen, wenn die Maustaste gedrückt ist, sobald sie das Element betritt.

Wenn die Maustaste tatsächlich gedrückt ist, erhalten wir das [`dataset`](/de/docs/Web/API/HTMLElement/dataset)-Attribut der gedrückten Taste; dies macht es leicht, auf die benutzerdefinierten Datenattribute des Elements zuzugreifen. Wir suchen nach einem `data-pressed`-Attribut; wenn es keines gibt (was anzeigt, dass die Note noch nicht spielt), rufen wir `playTone()` auf, um die Note abzuspielen, wobei wir den Wert des `data-frequency`-Attributs des Elements übergeben. Der zurückgegebene Oszillator wird in `oscList` für zukünftige Referenz gespeichert, und `data-pressed` wird auf `yes` gesetzt, um anzuzeigen, dass die Note spielt, damit wir nicht noch einmal damit anfangen, das nächste Mal, wenn dies aufgerufen wird.

#### Einen Ton stoppen

Die Funktion `noteReleased()` ist der Ereignishandler, der aufgerufen wird, wenn der Benutzer die Maustaste loslässt oder die Maus aus der Taste bewegt, die gerade spielt.

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

`noteReleased()` verwendet die benutzerdefinierten Attribute `data-octave` und `data-note`, um den Oszillator der Taste zu lokalisieren, und ruft dann die geerbte [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop)-Methode des Oszillators auf, um die Note zu stoppen. Schließlich wird der `oscList`-Eintrag für die Note geleert und das `data-pressed`-Attribut vom Tastenelement (wie durch [`event.target`](/de/docs/Web/API/Event/target) identifiziert) entfernt, um anzuzeigen, dass die Note derzeit nicht spielt.

#### Die Hauptlautstärke ändern

Der Lautstärkeregler in der Einstellungsleiste bietet eine Oberfläche zum Ändern des Verstärkungswertes am Hauptverstärkerknoten und damit zur Änderung der Lautstärke aller abgespielten Noten. Die `changeVolume()`-Methode ist der Handler für das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis am Schieberegler.

```js
function changeVolume(event) {
  mainGainNode.gain.value = volumeControl.value;
}
```

Dies setzt den Wert des Verstärkungs-`gain`-[`AudioParam`](/de/docs/Web/API/AudioParam)-Objekts des Hauptverstärkerknotens auf den neuen Wert des Schiebereglers.

#### Tastaturunterstützung

Der untenstehende Code fügt Ereignis-Listener für [`keydown`](/de/docs/Web/API/Element/keydown_event) und [`keyup`](/de/docs/Web/API/Element/keyup_event) hinzu, um Tastatureingaben zu verarbeiten. Der `keydown`-Ereignishandler ruft `notePressed()` auf, um die Note abzuspielen, die der gedrückten Taste entspricht, und der `keyup`-Ereignishandler ruft `noteReleased()` auf, um die Note zu stoppen, die der losgelassenen Taste entspricht.

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

Insgesamt ergibt sich ein einfaches, aber funktionierendes Point-and-Click-Musikkeyboard:

{{ EmbedLiveSample('The_video_keyboard', 680, 200) }}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
- [`GainNode`](/de/docs/Web/API/GainNode)
- [`AudioContext`](/de/docs/Web/API/AudioContext)
