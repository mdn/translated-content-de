---
title: <input type="button">
slug: Web/HTML/Element/input/button
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`button`** werden als einfache Druckknöpfe dargestellt, die programmiert werden können, um benutzerdefinierte Funktionen auf einer Webseite zu steuern, wenn diesen eine Ereignisbehandlungsfunktion zugewiesen wird (typischerweise für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis).

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
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: rgb(220 0 0 / 100%);
  background-image: linear-gradient(
    to top left,
    rgb(0 0 0 / 20%),
    rgb(0 0 0 / 20%) 30%,
    rgb(0 0 0 / 0%)
  );
  box-shadow:
    inset 2px 2px 3px rgb(255 255 255 / 60%),
    inset -2px -2px 3px rgb(0 0 0 / 60%);
}

.styled:hover {
  background-color: rgb(255 0 0 / 100%);
}

.styled:active {
  box-shadow:
    inset -2px -2px 3px rgb(255 255 255 / 60%),
    inset 2px 2px 3px rgb(0 0 0 / 60%);
}
```

> [!NOTE]
> Während `<input>`-Elemente vom Typ `button` immer noch gültiges HTML sind, ist das neuere {{HTMLElement("button")}}-Element jetzt der bevorzugte Weg, um Knöpfe zu erstellen. Da der Labeltext eines {{HTMLElement("button")}} zwischen den öffnenden und schließenden Tags eingefügt wird, können Sie HTML im Label einfügen, sogar Bilder.

## Wert

### Button mit einem Wert

Das `value`-Attribut eines `<input type="button">`-Elements enthält eine Zeichenkette, die als Beschriftung des Buttons verwendet wird. Der `value` liefert die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für den Button.

```html
<input type="button" value="Click Me" />
```

{{EmbedLiveSample("Button_with_a_value", 650, 30)}}

### Button ohne einen Wert

Wenn Sie keinen `value` angeben, erhalten Sie einen leeren Button:

```html
<input type="button" />
```

{{EmbedLiveSample("Button_without_a_value", 650, 30)}}

## Verwenden von Buttons

`<input type="button">`-Elemente haben kein Standardverhalten (ihre Verwandten, `<input type="submit">` und [`<input type="reset">`](/de/docs/Web/HTML/Element/input/reset) werden verwendet, um Formulare zu senden und zurückzusetzen). Um Buttons eine Funktion zuzuweisen, müssen Sie JavaScript-Code schreiben, um die Arbeit zu erledigen.

### Ein einfacher Button

Wir beginnen mit der Erstellung eines einfachen Buttons mit einem [`click`](/de/docs/Web/API/Element/click_event)-Ereignishandler, der unsere Maschine (nun ja, er schaltet den `value` des Buttons und den Textinhalt des folgenden Absatzes um) startet:

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

Das Skript erhält eine Referenz zum [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das `<input>` im DOM darstellt, und speichert diese Referenz in der Variablen `button`. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) wird dann verwendet, um eine Funktion festzulegen, die beim Auftreten von [`click`](/de/docs/Web/API/Element/click_event)-Ereignissen auf dem Button ausgeführt wird.

{{EmbedLiveSample("A_basic_button", 650, 100)}}

### Hinzufügen von Tastenkombinationen zu Buttons

Tastenkombinationen, auch als Zugangstasten und Tastaturequivalente bekannt, ermöglichen es dem Benutzer, einen Button durch die Verwendung einer Taste oder einer Tastenkombination auf der Tastatur auszulösen. Um einem Button eine Tastenkombination hinzuzufügen — genauso wie bei jedem {{HTMLElement("input")}}, für das dies sinnvoll ist — verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey).

In diesem Beispiel ist <kbd>s</kbd> als Zugangstaste angegeben (Sie müssen <kbd>s</kbd> zusammen mit den spezifischen Modifikatortasten für Ihre Browser-/Betriebssystemkombination drücken; siehe [accesskey](/de/docs/Web/HTML/Global_attributes/accesskey) für eine nützliche Liste dieser Kombinationen).

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
> Das Problem mit dem obigen Beispiel ist natürlich, dass der Benutzer nicht weiß, was die Zugangstaste ist! Auf einer echten Website müssten Sie diese Informationen auf eine Weise bereitstellen, die das Design der Website nicht stört (z. B. durch das Bereitstellen eines leicht zugänglichen Links, der auf Informationen zu den Zugangstasten der Website verweist).

### Deaktivieren und Aktivieren eines Buttons

Um einen Button zu deaktivieren, geben Sie das globale Attribut [`disabled`](/de/docs/Web/HTML/Attributes/disabled) an, wie folgt:

```html
<input type="button" value="Disable me" disabled />
```

#### Setzen des Attributs `disabled`

Sie können Buttons zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen. In diesem Beispiel ist unser Button zunächst aktiviert, aber wenn Sie ihn drücken, wird er mit `button.disabled = true` deaktiviert. Eine [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Funktion wird dann verwendet, um den Button nach zwei Sekunden wieder in den aktivierten Zustand zurückzusetzen.

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

#### Vererbung des deaktivierten Zustands

Wenn das Attribut `disabled` nicht angegeben ist, erbt der Button seinen `disabled`-Zustand von seinem Elternelement. Dies macht es möglich, Gruppen von Elementen auf einmal zu aktivieren und zu deaktivieren, indem man sie in einem Container wie einem {{HTMLElement("fieldset")}}-Element umschließt und dann `disabled` auf den Container setzt.

Das folgende Beispiel zeigt dies in Aktion. Es ist dem vorherigen Beispiel sehr ähnlich, außer dass das `disabled`-Attribut auf das `<fieldset>` gesetzt wird, wenn der erste Button gedrückt wird - dies führt dazu, dass alle drei Buttons deaktiviert sind, bis der Zwei-Sekunden-Zeitgeber abgelaufen ist.

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
> Anders als bei anderen Browsern bleibt der `disabled`-Zustand eines `<input>`-Elements in Firefox auch nach dem Neuladen der Seite bestehen. Als Workaround setzen Sie das `autocomplete`-Attribut des `<input>`-Elements auf `off`. (Siehe [Firefox-Bug 654072](https://bugzil.la/654072) für weitere Details.)

## Validierung

Buttons nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen tatsächlichen Wert, der eingeschränkt werden könnte.

## Beispiele

Das folgende Beispiel zeigt eine sehr einfache Zeichenanwendung, die mit einem {{htmlelement("canvas")}}-Element und etwas CSS und JavaScript erstellt wurde (wir werden das CSS der Kürze halber ausblenden). Die beiden oberen Bedienelemente ermöglichen die Auswahl der Farbe und Größe des Zeichenstifts. Der Button ruft bei einem Klick eine Funktion auf, die die Zeichenfläche löscht.

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
  background: #ccc;
  margin: 0;
  overflow: hidden;
}

.toolbar {
  background: #ccc;
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

// covert degrees to radians
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
      <td>Eine Zeichenkette, die als Beschriftung des Buttons verwendet wird</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>[`click`](/de/docs/Web/API/Element/click_event)</td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Element/input#type"><code>type</code></a> und
        <a href="/de/docs/Web/HTML/Element/input#value"><code>value</code></a>
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
      <td><strong>Methoden</strong></td>
      <td>Keine</td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, die es implementiert.
- Das modernere {{HTMLElement("button")}}-Element.
