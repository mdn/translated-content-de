---
title: Attributwert von `<input type="button">` in HTML
short-title: <input type="button">
slug: Web/HTML/Reference/Elements/input/button
l10n:
  sourceCommit: 3a839eeed13a60d34db1d39a5ce1594050d56ab0
---

{{HTMLElement("input")}}-Elemente vom Typ **`button`** werden als Drucktasten dargestellt, die so programmiert werden können, dass sie bei Zuweisung einer Ereignis-Handler-Funktion (typischerweise für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis) nach Bedarf benutzerdefinierte Funktionen an beliebiger Stelle auf einer Webseite steuern.

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

> [!NOTE]
> Obwohl `<input>`-Elemente vom Typ `button` weiterhin vollkommen gültiges HTML sind, ist das neuere {{HTMLElement("button")}}-Element heute die bevorzugte Methode zum Erstellen von Schaltflächen. Da der Beschriftungstext eines {{HTMLElement("button")}} zwischen den öffnenden und schließenden Tags eingefügt wird, können Sie HTML in die Beschriftung einschließen, sogar Bilder.

## Wert

### Schaltfläche mit einem Wert

Das Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) eines `<input type="button">`-Elements enthält eine Zeichenkette, die als Beschriftung der Schaltfläche verwendet wird. Der `value` stellt die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die Schaltfläche bereit.

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

## Verwenden von Schaltflächen

`<input type="button">`-Elemente haben kein Standardverhalten (ihre verwandten Elemente `<input type="submit">` und [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset) werden verwendet, um Formulare zu übermitteln beziehungsweise zurückzusetzen). Damit Schaltflächen etwas tun, müssen Sie JavaScript-Code schreiben, der die Aufgabe erledigt.

### Eine einfache Schaltfläche

Wir beginnen mit der Erstellung einer einfachen Schaltfläche mit einem Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis, der unsere Maschine startet (nun ja, er schaltet den `value` der Schaltfläche und den Textinhalt des folgenden Absatzes um):

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

Das Skript erhält eine Referenz auf das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das `<input>` im DOM repräsentiert, und speichert diese Referenz in der Variablen `button`. Anschließend wird [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwendet, um eine Funktion festzulegen, die ausgeführt wird, wenn auf der Schaltfläche [`click`](/de/docs/Web/API/Element/click_event)-Ereignisse auftreten.

{{EmbedLiveSample("A_basic_button", 650, 100)}}

### Tastenkombinationen zu Schaltflächen hinzufügen

Tastenkombinationen, auch als Zugriffstasten und Tastaturäquivalente bekannt, ermöglichen es dem Benutzer, eine Schaltfläche mit einer Taste oder Tastenkombination auf der Tastatur auszulösen. Um einer Schaltfläche eine Tastenkombination hinzuzufügen – genau wie bei jedem {{HTMLElement("input")}}, bei dem dies sinnvoll ist –, verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey).

In diesem Beispiel wird <kbd>s</kbd> als Zugriffstaste angegeben (Sie müssen <kbd>s</kbd> zusammen mit den für Ihre Browser-/Betriebssystemkombination erforderlichen Modifikatortasten drücken; eine hilfreiche Liste hierzu finden Sie unter [accesskey](/de/docs/Web/HTML/Reference/Global_attributes/accesskey)).

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
> Das Problem beim obigen Beispiel besteht natürlich darin, dass der Benutzer nicht weiß, welche Zugriffstaste verwendet wird! Auf einer echten Website müssten Sie diese Information so bereitstellen, dass sie das Design der Website nicht beeinträchtigt (beispielsweise durch einen leicht zugänglichen Link zu Informationen über die Zugriffstasten der Website).

### Eine Schaltfläche deaktivieren und aktivieren

Um eine Schaltfläche zu deaktivieren, geben Sie das globale Attribut [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) dafür an:

```html
<input type="button" value="Disable me" disabled />
```

#### Das Attribut disabled setzen

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen. In diesem Beispiel ist unsere Schaltfläche zunächst aktiviert; wenn Sie sie jedoch drücken, wird sie mit `button.disabled = true` deaktiviert. Anschließend wird eine Funktion [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) verwendet, um die Schaltfläche nach zwei Sekunden wieder in den aktivierten Zustand zurückzusetzen.

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

Wenn das Attribut `disabled` nicht angegeben ist, erbt die Schaltfläche ihren `disabled`-Zustand von ihrem übergeordneten Element. Dadurch ist es möglich, Gruppen von Elementen gleichzeitig zu aktivieren und zu deaktivieren, indem Sie sie in einen Container wie ein {{HTMLElement("fieldset")}}-Element einschließen und dann `disabled` für den Container setzen.

Das folgende Beispiel zeigt dies in Aktion. Es ähnelt stark dem vorherigen Beispiel, mit der Ausnahme, dass das Attribut `disabled` auf dem `<fieldset>` gesetzt wird, wenn die erste Schaltfläche gedrückt wird. Dadurch werden alle drei Schaltflächen deaktiviert, bis die Zeitüberschreitung von zwei Sekunden abgelaufen ist.

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
> Anders als andere Browser behält Firefox den `disabled`-Zustand eines `<input>`-Elements auch nach dem Neuladen der Seite bei. Als Workaround setzen Sie das Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete) des `<input>`-Elements auf `off`. Weitere Details finden Sie unter [Firefox-Bug 654072](https://bugzil.la/654072).

## Validierung

Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen tatsächlichen Wert, der eingeschränkt werden könnte.

## Beispiele

Das folgende Beispiel zeigt eine sehr einfache Zeichen-App, die mit einem {{htmlelement("canvas")}}-Element sowie etwas CSS und JavaScript erstellt wurde (der Kürze halber blenden wir das CSS aus). Mit den oberen beiden Steuerelementen können Sie Farbe und Größe des Zeichenstifts auswählen. Die Schaltfläche ruft beim Klicken eine Funktion auf, die das Canvas löscht.

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
      <td>Eine Zeichenkette, die als Beschriftung der Schaltfläche verwendet wird</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
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

- {{HTMLElement("input")}} und die Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), die es implementiert.
- Das modernere {{HTMLElement("button")}}-Element.
