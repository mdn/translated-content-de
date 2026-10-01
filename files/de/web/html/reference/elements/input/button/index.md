---
title: HTML-Attributwert `<input type="button">`
short-title: <input type="button">
slug: Web/HTML/Reference/Elements/input/button
l10n:
  sourceCommit: bcb7d4dde9f0a43664c64587d9d70b8835286eb7
---

{{HTMLElement("input")}}-Elemente vom Typ **`button`** werden als Schaltflächen dargestellt. Wenn ihnen eine Event-Handler-Funktion zugewiesen wird (in der Regel für das [`click`](/de/docs/Web/API/Element/click_event)-Event), können sie so programmiert werden, dass sie an beliebiger Stelle einer Webseite benutzerdefinierte Funktionen ausführen.

> [!NOTE]
> Obwohl `<input>`-Elemente vom Typ `button` weiterhin gültiges HTML sind, wird zum Erstellen von Schaltflächen das {{HTMLElement("button")}}-Element bevorzugt. Da der Beschriftungstext eines {{HTMLElement("button")}}-Elements zwischen dem öffnenden und dem schließenden Tag steht, können Sie in der Beschriftung HTML verwenden, auch Bilder.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;button&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<input class="styled" type="button" value="Add to favorites" />
```

```css interactive-example
.styled {
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 1px black;
  border-radius: 10px;
  background-color: tomato;
  background-image: linear-gradient(
    to top left,
    rgb(0 0 0 / 20%),
    rgb(0 0 0 / 20%) 30%,
    transparent
  );
  box-shadow:
    inset 2px 2px 3px rgb(255 255 255 / 60%),
    inset -2px -2px 3px rgb(0 0 0 / 60%);
}

.styled:hover {
  background-color: red;
}

.styled:active {
  box-shadow:
    inset -2px -2px 3px rgb(255 255 255 / 60%),
    inset 2px 2px 3px rgb(0 0 0 / 60%);
}
```

## Wert

### Schaltfläche mit einem Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut eines `<input type="button">`-Elements enthält eine Zeichenfolge, die als Beschriftung der Schaltfläche verwendet wird. `value` liefert die {{Glossary("accessible_description", "zugängliche Beschreibung")}} der Schaltfläche.

```html
<input type="button" value="Click Me" />
```

{{EmbedLiveSample("Button_with_a_value", 650, 30)}}

### Schaltfläche ohne Wert

Wenn Sie keinen `value` angeben, erhalten Sie eine leere Schaltfläche:

```html
<input type="button" />
```

{{EmbedLiveSample("Button_without_a_value", 650, 30)}}

## Schaltflächen verwenden

`<input type="button">`-Elemente haben kein Standardverhalten (die verwandten Elemente `<input type="submit">` und [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset) dienen dagegen zum Absenden beziehungsweise Zurücksetzen von Formularen). Damit Schaltflächen eine Aktion ausführen, müssen Sie entsprechenden JavaScript-Code schreiben.

### Eine einfache Schaltfläche

Beginnen wir mit einer einfachen Schaltfläche mit einem Event-Handler für [`click`](/de/docs/Web/API/Element/click_event), der unsere Maschine startet (genauer gesagt: Er schaltet zwischen verschiedenen Werten für `value` und den Textinhalt des folgenden Absatzes um):

```html
<form>
  <input type="button" value="Start machine" />
</form>
<p>The machine is stopped.</p>
```

```js
const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButton);

function updateButton() {
  if (button.value === "Start machine") {
    button.value = "Stop machine";
    paragraph.textContent = "The machine has started!";
  } else {
    button.value = "Start machine";
    paragraph.textContent = "The machine is stopped.";
  }
}
```

Das Skript ruft eine Referenz auf das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt ab, das das `<input>`-Element im DOM repräsentiert, und speichert sie in der Variablen `button`. Anschließend wird mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) eine Funktion registriert, die ausgeführt wird, wenn auf der Schaltfläche [`click`](/de/docs/Web/API/Element/click_event)-Events auftreten.

{{EmbedLiveSample("A_basic_button", 650, 100)}}

### Tastenkombinationen für Schaltflächen hinzufügen

Mit Tastenkombinationen, auch Zugriffstasten genannt, können Benutzer eine Schaltfläche über eine Taste oder Tastenkombination auslösen. Um einer Schaltfläche eine Tastenkombination zuzuweisen, verwenden Sie – wie bei jedem {{HTMLElement("input")}}-Element, für das dies sinnvoll ist – das globale Attribut [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey).

In diesem Beispiel wird <kbd>s</kbd> als Zugriffstaste festgelegt. Sie müssen <kbd>s</kbd> zusammen mit den für Ihre Browser-Betriebssystem-Kombination erforderlichen Zusatztasten drücken; eine hilfreiche Übersicht finden Sie unter [accesskey](/de/docs/Web/HTML/Reference/Global_attributes/accesskey).

```html
<form>
  <input type="button" value="Start machine" accesskey="s" />
</form>
<p>The machine is stopped.</p>
```

```js hidden
const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButton);

function updateButton() {
  if (button.value === "Start machine") {
    button.value = "Stop machine";
    paragraph.textContent = "The machine has started!";
  } else {
    button.value = "Start machine";
    paragraph.textContent = "The machine is stopped.";
  }
}
```

{{EmbedLiveSample("Adding_keyboard_shortcuts_to_buttons", 650, 100)}}

> [!NOTE]
> Das Problem beim obigen Beispiel ist natürlich, dass Benutzer nicht wissen, welche Zugriffstaste festgelegt wurde. Auf einer echten Website müssten Sie diese Information bereitstellen, ohne die Gestaltung der Website zu beeinträchtigen – beispielsweise über einen leicht auffindbaren Link zu einer Übersicht der Zugriffstasten der Website.

### Eine Schaltfläche deaktivieren und aktivieren

Um eine Schaltfläche zu deaktivieren, geben Sie für sie das globale Attribut [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) an:

```html
<input type="button" value="Disable me" disabled />
```

#### Das disabled-Attribut setzen

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen. In diesem Beispiel ist die Schaltfläche zunächst aktiviert. Wenn Sie sie drücken, wird sie mit `button.disabled = true` deaktiviert. Anschließend wird eine [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Funktion verwendet, um die Schaltfläche nach zwei Sekunden wieder zu aktivieren.

```html
<input type="button" value="Enabled" />
```

```js
const button = document.querySelector("input");

button.addEventListener("click", disableButton);

function disableButton() {
  button.disabled = true;
  button.value = "Disabled";
  setTimeout(() => {
    button.disabled = false;
    button.value = "Enabled";
  }, 2000);
}
```

{{EmbedLiveSample("Setting_the_disabled_attribute", 650, 60)}}

#### Den deaktivierten Zustand erben

Wenn das Attribut `disabled` nicht angegeben ist, erbt die Schaltfläche ihren `disabled`-Zustand vom übergeordneten Element. So lassen sich Gruppen von Elementen gleichzeitig aktivieren oder deaktivieren: Sie werden in einem Container wie einem {{HTMLElement("fieldset")}}-Element zusammengefasst, und `disabled` wird für den Container gesetzt.

Das folgende Beispiel zeigt, wie das funktioniert. Es ähnelt dem vorherigen Beispiel, mit dem Unterschied, dass beim Drücken der ersten Schaltfläche das Attribut `disabled` für das `<fieldset>` gesetzt wird. Dadurch werden alle drei Schaltflächen deaktiviert, bis die Wartezeit von zwei Sekunden abgelaufen ist.

```html
<fieldset>
  <legend>Button group</legend>
  <input type="button" value="Button 1" />
  <input type="button" value="Button 2" />
  <input type="button" value="Button 3" />
</fieldset>
```

```js
const button = document.querySelector("input");
const fieldset = document.querySelector("fieldset");

button.addEventListener("click", disableButton);

function disableButton() {
  fieldset.disabled = true;
  setTimeout(() => {
    fieldset.disabled = false;
  }, 2000);
}
```

{{EmbedLiveSample("Inheriting_the_disabled_state", 650, 100)}}

> [!NOTE]
> Anders als andere Browser behält Firefox den `disabled`-Zustand eines `<input>`-Elements auch nach dem Neuladen der Seite bei. Um dies zu umgehen, setzen Sie das Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete) des `<input>`-Elements auf `off`. (Weitere Informationen finden Sie unter [Firefox-Bug 654072](https://bugzil.la/654072).)

## Validierung

Schaltflächen nehmen nicht an der Constraint-Validierung teil; sie haben keinen eigentlichen Wert, der Einschränkungen unterliegen könnte.

## Beispiele

Das folgende Beispiel zeigt eine sehr einfache Zeichenanwendung, die mit einem {{htmlelement("canvas")}}-Element sowie etwas CSS und JavaScript erstellt wurde (das CSS wird der Kürze halber ausgeblendet). Mit den beiden oberen Steuerelementen können Sie Farbe und Größe des Zeichenstifts auswählen. Beim Klicken auf die Schaltfläche wird eine Funktion aufgerufen, die die Zeichenfläche leert.

```html
<div class="toolbar">
  <input type="color" aria-label="select pen color" />
  <input
    type="range"
    min="2"
    max="50"
    value="30"
    aria-label="select pen size" /><span class="output">30</span>
  <input type="button" value="Clear canvas" />
</div>

<canvas class="myCanvas">
  <p>Add suitable fallback here.</p>
</canvas>
```

```css hidden
body {
  background: #cccccc;
  margin: 0;
  overflow: hidden;
}

.toolbar {
  background: #cccccc;
  width: 150px;
  height: 75px;
  padding: 5px;
}

input[type="color"],
input[type="button"] {
  width: 90%;
  margin: 0 auto;
  display: block;
}

input[type="range"] {
  width: 70%;
}

span {
  position: relative;
  bottom: 5px;
}
```

```js
const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight - 85);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height);

const colorPicker = document.querySelector('input[type="color"]');
const sizePicker = document.querySelector('input[type="range"]');
const output = document.querySelector(".output");
const clearBtn = document.querySelector('input[type="button"]');

// convert degrees to radians
function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

// update size picker output value

sizePicker.oninput = () => {
  output.textContent = sizePicker.value;
};

// store mouse pointer coordinates, and whether the button is pressed
let curX;
let curY;
let pressed = false;

// update mouse pointer coordinates
document.onmousemove = (e) => {
  curX = e.pageX;
  curY = e.pageY;
};

canvas.onmousedown = () => {
  pressed = true;
};

canvas.onmouseup = () => {
  pressed = false;
};

clearBtn.onclick = () => {
  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
};

function draw() {
  if (pressed) {
    ctx.fillStyle = colorPicker.value;
    ctx.beginPath();
    ctx.arc(
      curX,
      curY - 85,
      sizePicker.value,
      degToRad(0),
      degToRad(360),
      false,
    );
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
```

{{EmbedLiveSample("Examples", '100%', 600)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Eine Zeichenfolge, die als Beschriftung der Schaltfläche verwendet wird</td>
    </tr>
    <tr>
      <td><strong>Events</strong></td>
      <td>[`click`](/de/docs/Web/API/Element/click_event)</td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements/input#type"><code>type</code></a> und
        <a href="/de/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} und die Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), die dieses Element implementiert.
- Das modernere {{HTMLElement("button")}}-Element.
