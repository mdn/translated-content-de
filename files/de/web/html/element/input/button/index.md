---
title: <input type="button">
slug: Web/HTML/Element/input/button
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`button`** werden als einfache Tasten gerendert, die programmiert werden können, um benutzerdefinierte Funktionen an beliebiger Stelle auf einer Webseite zu steuern, wenn sie einer Event-Handler-Funktion zugewiesen sind (typischerweise für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis).

{{EmbedInteractiveExample("pages/tabbed/input-button.html", "tabbed-shorter")}}

> [!NOTE]
> Obwohl `<input>`-Elemente des Typs `button` weiterhin gültiges HTML sind, ist das neuere {{HTMLElement("button")}}-Element nun die bevorzugte Methode zur Erstellung von Tasten. Da der Label-Text eines {{HTMLElement("button")}} zwischen den öffnenden und schließenden Tags eingefügt wird, können Sie HTML im Label verwenden, sogar Bilder.

## Wert

### Taste mit einem Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut eines `<input type="button">`-Elements enthält einen String, der als Label der Taste verwendet wird. Der `value` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die Taste.

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

`<input type="button">`-Elemente haben kein Standardverhalten (ihre Verwandten `<input type="submit">` und [`<input type="reset">`](/de/docs/Web/HTML/Element/input/reset) werden verwendet, um Formulare abzusenden bzw. zurückzusetzen). Um Tasten eine Funktion zu geben, müssen Sie JavaScript-Code schreiben, der die Arbeit erledigt.

### Eine grundlegende Taste

Wir beginnen mit der Erstellung einer grundlegenden Taste mit einem [`click`](/de/docs/Web/API/Element/click_event)-Event-Handler, der unsere Maschine startet (genauer gesagt, er schaltet den `value` der Taste und den Textinhalt des folgenden Absatzes um):

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

Das Skript erhält eine Referenz auf das im DOM dargestellte [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das `<input>` darstellt, und speichert diese Referenz in der Variablen `button`. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) wird dann verwendet, um eine Funktion zu etablieren, die ausgeführt wird, wenn [`click`](/de/docs/Web/API/Element/click_event)-Ereignisse auf der Taste auftreten.

{{EmbedLiveSample("A_basic_button", 650, 100)}}

### Tastenkombinationen zu Tasten hinzufügen

Tastenkombinationen, auch bekannt als Zugangstasten und Tastaturäquivalente, ermöglichen es dem Benutzer, eine Taste mit einer oder mehreren Tasten auf der Tastatur auszulösen. Um einer Taste eine Tastenkombination hinzuzufügen – genauso wie es für jedes {{HTMLElement("input")}}, für das es sinnvoll ist, der Fall wäre – verwenden Sie das [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey)-Globale-Attribut.

In diesem Beispiel ist <kbd>s</kbd> als Zugangstaste angegeben (Sie müssen <kbd>s</kbd> plus die speziellen Modifikatortasten für Ihre Browser/OS-Kombination drücken; siehe [accesskey](/de/docs/Web/HTML/Global_attributes/accesskey) für eine nützliche Liste davon).

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
> Das Problem mit dem obigen Beispiel ist natürlich, dass der Benutzer nicht weiß, was die Zugangstaste ist! Auf einer echten Website müssten Sie diese Information auf eine Weise bereitstellen, die nicht das Design der Website beeinträchtigt (zum Beispiel, indem Sie einen leicht zugänglichen Link bereitstellen, der auf Informationen über die Zugangstasten der Website verweist).

### Eine Taste deaktivieren und aktivieren

Um eine Taste zu deaktivieren, spezifizieren Sie das [`disabled`](/de/docs/Web/HTML/Attributes/disabled) Globale-Attribut, wie folgt:

```html
<input type="button" value="Disable me" disabled />
```

#### Das Attribut "disabled" festlegen

Sie können Tasten zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen. In diesem Beispiel ist unsere Taste anfänglich aktiviert, aber wenn Sie sie drücken, wird sie mit `button.disabled = true` deaktiviert. Eine [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Funktion wird dann verwendet, um die Taste nach zwei Sekunden wieder in den aktivierten Zustand zu versetzen.

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

Wenn das `disabled`-Attribut nicht angegeben ist, erbt die Taste ihren `disabled`-Zustand von ihrem Elternelement. Dies ermöglicht es, Gruppen von Elementen auf einmal zu aktivieren oder zu deaktivieren, indem man sie in einen Container, wie z.B. ein {{HTMLElement("fieldset")}}-Element, einfügt und dann `disabled` auf den Container setzt.

Das folgende Beispiel zeigt dies in Aktion. Dies ist sehr ähnlich zum vorherigen Beispiel, außer dass das `disabled`-Attribut beim Drücken der ersten Taste auf dem `<fieldset>` gesetzt wird — dies führt dazu, dass alle drei Tasten deaktiviert werden, bis die Zwei-Sekunden-Timeout abgelaufen ist.

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
> Anders als in anderen Browsern bleibt in Firefox der `disabled`-Zustand eines `<input>`-Elements auch nach dem Neuladen der Seite erhalten. Als Workaround setzen Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut des `<input>`-Elements auf `off`. (Siehe [Firefox bug 654072](https://bugzil.la/654072) für mehr Details.)

## Validierung

Tasten beteiligen sich nicht an der Zwangsvalidierung; sie haben keinen realen Wert, der beschränkt werden kann.

## Beispiele

Das untenstehende Beispiel zeigt eine sehr einfache Zeichenanwendung unter Verwendung eines {{htmlelement("canvas")}}-Elements sowie CSS und JavaScript (wir blenden das CSS aus Gründen der Kürze aus). Die beiden oberen Steuerelemente ermöglichen Ihnen die Auswahl der Farbe und Größe des Zeichenstifts. Der Button ruft, wenn er angeklickt wird, eine Funktion auf, die das Canvas löscht.

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
      <td>Ein String wird als Label der Taste verwendet</td>
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
      <td><strong>Implizierte ARIA Rolle</strong></td>
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
