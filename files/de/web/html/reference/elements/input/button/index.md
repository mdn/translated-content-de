---
title: '`<input type="button">` HTML-Attributwert'
short-title: <input type="button">
slug: Web/HTML/Reference/Elements/input/button
l10n:
  sourceCommit: 3944506d4afeeed774687cf3fd950878c6229bbc
---

{{HTMLElement("input")}}-Elemente des Typs **`button`** werden als Druckknöpfe dargestellt, die programmiert werden können, um benutzerdefinierte Funktionen überall auf einer Webseite zu steuern. Dies geschieht, indem ihnen eine Ereignis-Handler-Funktion zugewiesen wird (typischerweise für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis).

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
> Obwohl `<input>`-Elemente des Typs `button` weiterhin absolut gültiges HTML sind, ist das neuere {{HTMLElement("button")}}-Element nun die bevorzugte Methode, um Schaltflächen zu erstellen. Da der Text des Labels einer {{HTMLElement("button")}} zwischen den öffnenden und schließenden Tags eingefügt wird, können Sie HTML im Label enthalten, sogar Bilder.

## Wert

### Taste mit einem Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut eines `<input type="button">`-Elements enthält einen String, der als Beschriftung der Taste dient. Der `value` liefert die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die Taste.

```html
<input type="button" value="Click Me" />
```

{{EmbedLiveSample("Button_with_a_value", 650, 30)}}

### Taste ohne Wert

Wenn Sie keinen `value` angeben, erhalten Sie eine leere Taste:

```html
<input type="button" />
```

{{EmbedLiveSample("Button_without_a_value", 650, 30)}}

## Verwendung von Tasten

`<input type="button">`-Elemente haben kein Standardverhalten (ihre Verwandten, `<input type="submit">` und [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset) werden verwendet, um Formulare abzuschicken und zurückzusetzen). Um Tasten eine Funktion zuzuweisen, müssen Sie JavaScript-Code schreiben, der die Arbeit erledigt.

### Eine grundlegende Taste

Wir beginnen mit der Erstellung einer grundlegenden Taste mit einem [`click`](/de/docs/Web/API/Element/click_event)-Ereignis-Handler, der unsere Maschine startet (genauer gesagt, er schaltet den `value` der Taste und den Textinhalt des folgenden Absatzes um).

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

Das Skript ruft eine Referenz auf das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt ab, das das `<input>` im DOM repräsentiert, und speichert diese Referenz in der Variablen `button`. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) wird dann verwendet, um eine Funktion festzulegen, die ausgeführt wird, wenn [`click`](/de/docs/Web/API/Element/click_event)-Ereignisse auf der Taste auftreten.

{{EmbedLiveSample("A_basic_button", 650, 100)}}

### Tastenkombinationen zu Tasten hinzufügen

Tastenkombinationen, auch als Zugangsschlüssel und Tastaturäquivalente bekannt, ermöglichen es dem Benutzer, eine Taste mit einer Taste oder einer Tastenkombination auf der Tastatur auszulösen. Um eine Tastenkombination zu einer Taste hinzuzufügen — genau wie bei jedem {{HTMLElement("input")}}, bei dem es Sinn macht — verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey).

In diesem Beispiel wird <kbd>s</kbd> als Zugangsschlüssel festgelegt (Sie müssen <kbd>s</kbd> plus die jeweiligen Modifikatortasten für Ihre Browser/OS-Kombination drücken; siehe [accesskey](/de/docs/Web/HTML/Reference/Global_attributes/accesskey) für eine nützliche Liste dieser Kombinationen).

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
> Das Problem mit dem obigen Beispiel ist natürlich, dass der Benutzer nicht weiß, was der Zugangsschlüssel ist! Auf einer echten Seite müssten Sie diese Information auf eine Weise bereitstellen, die das Seitendesign nicht stört (zum Beispiel, indem Sie einen leicht zugänglichen Link zur Verfügung stellen, der auf Informationen verweist, welche Zugangsschlüssel die Seite verwendet).

### Aktivieren und Deaktivieren einer Taste

Um eine Taste zu deaktivieren, geben Sie das globale Attribut [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) an, wie folgt:

```html
<input type="button" value="Disable me" disabled />
```

#### Das disabled-Attribut festlegen

Sie können Tasten zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen. In diesem Beispiel ist unsere Taste anfangs aktiviert, aber wenn Sie darauf drücken, wird sie mit `button.disabled = true` deaktiviert. Eine [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Funktion wird dann verwendet, um die Taste nach zwei Sekunden wieder in ihren aktivierten Zustand zu versetzen.

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

Wenn das `disabled`-Attribut nicht angegeben wird, erbt die Taste ihren `disabled`-Zustand von ihrem Elternelement. Dies macht es möglich, Gruppen von Elementen auf einmal zu aktivieren und zu deaktivieren, indem sie in einen Container wie ein {{HTMLElement("fieldset")}}-Element eingeschlossen werden und `disabled` am Container gesetzt wird.

Das folgende Beispiel zeigt dies in Aktion. Dies ist dem vorherigen Beispiel sehr ähnlich, außer dass das `disabled`-Attribut auf dem `<fieldset>` festgelegt wird, wenn die erste Taste gedrückt wird — dies führt dazu, dass alle drei Tasten deaktiviert werden, bis der Zwei-Sekunden-Timeout abgelaufen ist.

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
> Anders als andere Browser behält Firefox den `disabled`-Zustand eines `<input>`-Elements sogar nach dem Neuladen der Seite bei. Als Workaround setzen Sie das `autocomplete`-Attribut des `<input>`-Elements auf `off`. (Siehe [Firefox bug 654072](https://bugzil.la/654072) für weitere Details.)

## Validierung

Tasten nehmen nicht an der eingeschränkten Validierung teil; sie haben keinen wirklichen Wert, der eingeschränkt werden könnte.

## Beispiele

Das folgende Beispiel zeigt eine sehr einfache Zeichen-App, die mit einem {{htmlelement("canvas")}}-Element und etwas CSS und JavaScript erstellt wurde (wir blenden das CSS aus Gründen der Kürze aus). Die beiden oberen Steuerelemente ermöglichen es Ihnen, die Farbe und Größe des Zeichenstifts auszuwählen. Die Taste ruft beim Klicken eine Funktion auf, die die Leinwand löscht.

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
      <td>Ein String, der als Beschriftungstext der Taste verwendet wird</td>
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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
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
