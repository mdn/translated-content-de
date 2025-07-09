---
title: <input type="button">
slug: Web/HTML/Reference/Elements/input/button
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{HTMLElement("input")}}-Elemente vom Typ **`button`** werden als Schaltflächen dargestellt, die programmiert werden können, um benutzerdefinierte Funktionen überall auf der Webseite zu steuern, wenn ihnen eine Ereignis-Handler-Funktion zugewiesen wird (typischerweise für das [`click`](/de/docs/Web/API/Element/click_event) Ereignis).

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
> Obwohl `<input>`-Elemente vom Typ `button` immer noch vollkommen gültiges HTML sind, ist das neuere {{HTMLElement("button")}}-Element jetzt die bevorzugte Methode, um Schaltflächen zu erstellen. Da der Text des Labels eines {{HTMLElement("button")}} zwischen den öffnenden und schließenden Tags eingefügt wird, können Sie HTML im Label verwenden, sogar Bilder.

## Wert

### Schaltfläche mit einem Wert

Das `value`-Attribut eines `<input type="button">`-Elements enthält eine Zeichenkette, die als Label der Schaltfläche verwendet wird. Der `value` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die Schaltfläche.

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

## Verwendung von Schaltflächen

`<input type="button">`-Elemente haben kein Standardverhalten (ihre Verwandten, `<input type="submit">` und [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset), werden verwendet, um Formulare abzusenden und zurückzusetzen). Um die Schaltflächen etwas tun zu lassen, müssen Sie JavaScript-Code schreiben, der die Arbeit erledigt.

### Eine einfache Schaltfläche

Wir beginnen mit der Erstellung einer einfachen Schaltfläche mit einem [`click`](/de/docs/Web/API/Element/click_event)-Ereignis-Handler, der unsere Maschine startet (bzw. den `value` der Schaltfläche und den Textinhalt des folgenden Absatzes umschaltet):

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

Das Skript erhält eine Referenz auf das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das `<input>` im DOM darstellt, und speichert diese Referenz in der Variablen `button`. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) wird dann verwendet, um eine Funktion zu etablieren, die ausgeführt wird, wenn [`click`](/de/docs/Web/API/Element/click_event)-Ereignisse auf der Schaltfläche auftreten.

{{EmbedLiveSample("A_basic_button", 650, 100)}}

### Hinzufügen von Tastenkombinationen zu Schaltflächen

Tastenkombinationen, auch als Zugriffsschlüssel und Tastaturäquivalente bekannt, ermöglichen dem Benutzer das Auslösen einer Schaltfläche über eine Taste oder Kombination von Tasten auf der Tastatur. Um einer Schaltfläche eine Tastenkombination hinzuzufügen – genau so, wie Sie es bei jedem {{HTMLElement("input")}} tun würden, bei dem es sinnvoll ist – verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey).

In diesem Beispiel ist <kbd>s</kbd> als Zugriffsschlüssel angegeben (Sie müssen <kbd>s</kbd> plus die besonderen Modifier-Tasten für Ihre Browser-/Betriebssystem-Kombination drücken; siehe [accesskey](/de/docs/Web/HTML/Reference/Global_attributes/accesskey) für eine nützliche Liste dieser).

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
> Das Problem mit dem obigen Beispiel ist natürlich, dass der Benutzer nicht weiß, was der Zugriffsschlüssel ist! Auf einer realen Seite müssten Sie diese Information auf eine Weise bereitstellen, die das Seitendesign nicht beeinträchtigt (zum Beispiel durch einen leicht zugänglichen Link, der auf Informationen zu den Zugriffsschlüsseln der Seite verweist).

### Deaktivieren und Aktivieren einer Schaltfläche

Um eine Schaltfläche zu deaktivieren, geben Sie das globale Attribut [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) dafür an, wie folgt:

```html
<input type="button" value="Disable me" disabled />
```

#### Setzen des disabled-Attributs

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen. In diesem Beispiel beginnt unsere Schaltfläche im aktivierten Zustand, aber wenn Sie sie drücken, wird sie durch `button.disabled = true` deaktiviert. Eine [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Funktion wird dann verwendet, um die Schaltfläche nach zwei Sekunden wieder in ihren aktivierten Zustand zurückzusetzen.

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

#### Vererbung des deaktivierten Status

Wenn das `disabled`-Attribut nicht angegeben ist, erbt die Schaltfläche ihren `disabled`-Status von ihrem Elternelement. Damit ist es möglich, Gruppen von Elementen auf einmal zu aktivieren oder zu deaktivieren, indem Sie sie in einem Container wie einem {{HTMLElement("fieldset")}}-Element umschließen und dann `disabled` auf den Container setzen.

Das unten stehende Beispiel zeigt dies in Aktion. Dies ist dem vorherigen Beispiel sehr ähnlich, außer dass das `disabled`-Attribut auf dem `<fieldset>` gesetzt wird, wenn die erste Schaltfläche gedrückt wird — dies führt dazu, dass alle drei Schaltflächen deaktiviert werden, bis die zwei Sekunden Timeout vergangen sind.

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
> Anders als andere Browser behält Firefox den `disabled`-Zustand eines `<input>`-Elements auch nach dem Neuladen der Seite bei. Als Workaround setzen Sie das `autocomplete`-Attribut des `<input>`-Elements auf `off`. (Siehe [Firefox bug 654072](https://bugzil.la/654072) für weitere Details.)

## Validierung

Schaltflächen sind nicht an Einschränkungsvalidierung beteiligt; sie haben keinen echten Wert, der eingeschränkt werden könnte.

## Beispiele

Das unten stehende Beispiel zeigt eine sehr grundlegende Zeichenanwendung, die mit einem {{htmlelement("canvas")}}-Element und etwas CSS und JavaScript erstellt wurde (wir blenden das CSS der Kürze halber aus). Die beiden oberen Bedienelemente ermöglichen Ihnen, die Farbe und Größe des Zeichenstiftes auszuwählen. Die Schaltfläche, wenn sie angeklickt wird, ruft eine Funktion auf, die die Leinwand löscht.

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
      <td>Eine Zeichenkette, die als Label der Schaltfläche verwendet wird</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>[`click`](/de/docs/Web/API/Element/click_event)</td>
    </tr>
    <tr>
      <td><strong>Unterstützte gewöhnliche Attribute</strong></td>
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
      <td><strong>Methoden</strong></td>
      <td>Keine</td>
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

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, die es implementiert.
- Das modernere {{HTMLElement("button")}}-Element.
