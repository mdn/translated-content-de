---
title: <input type="button">
slug: Web/HTML/Element/input/button
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`button`** werden als einfache Drucktasten dargestellt, die programmiert werden können, um benutzerdefinierte Funktionalitäten auf einer Webseite zu steuern, wenn sie einer Ereignisbehandlungsfunktion zugeordnet sind (typischerweise für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis).

{{EmbedInteractiveExample("pages/tabbed/input-button.html", "tabbed-shorter")}}

> [!NOTE]
> Während `<input>`-Elemente des Typs `button` weiterhin gültiges HTML sind, ist das neuere {{HTMLElement("button")}}-Element nun die bevorzugte Methode, um Buttons zu erstellen. Da der Text eines {{HTMLElement("button")}} zwischen den öffnenden und schließenden Tags eingefügt wird, können Sie HTML im Label einschließen, sogar Bilder.

## Wert

### Button mit einem Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut eines `<input type="button">`-Elements enthält eine Zeichenkette, die als Beschriftung des Buttons verwendet wird. Der `value` liefert die [zugängliche Beschreibung](/de/docs/Glossary/accessible_description) für den Button.

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

## Verwendung von Buttons

`<input type="button">`-Elemente haben kein Standardverhalten (ihre Verwandten, `<input type="submit">` und [`<input type="reset">`](/de/docs/Web/HTML/Element/input/reset) werden verwendet, um Formulare abzusenden und zurückzusetzen). Um Buttons irgendeine Funktion zu geben, müssen Sie JavaScript-Code schreiben, der die Arbeit erledigt.

### Ein einfacher Button

Wir beginnen mit der Erstellung eines einfachen Buttons mit einem [`click`](/de/docs/Web/API/Element/click_event)-Ereignisbehandler, der unsere Maschine startet (genauer gesagt, der den `value` des Buttons und den Textinhalt des folgenden Absatzes umschaltet):

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

Das Skript erhält eine Referenz auf das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das `<input>` im DOM darstellt, und speichert diese Referenz in der Variablen `button`. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) wird dann verwendet, um eine Funktion festzulegen, die ausgeführt wird, wenn [`click`](/de/docs/Web/API/Element/click_event)-Ereignisse auf dem Button auftreten.

{{EmbedLiveSample("A_simple_button", 650, 100)}}

### Hinzufügen von Tastaturkürzeln zu Buttons

Tastaturkürzel, auch bekannt als Zugriffstasten und Tastaturequivalente, ermöglichen es dem Benutzer, einen Button mit einer Taste oder einer Tastenkombination auf der Tastatur auszulösen. Um einem Button ein Tastaturkürzel hinzuzufügen — genau wie bei jedem {{HTMLElement("input")}}, für das es sinnvoll ist — verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey).

In diesem Beispiel ist <kbd>s</kbd> als Zugriffstaste angegeben (Sie müssen <kbd>s</kbd> plus die speziellen Modifikatortasten für Ihre Browser-/BS-Kombination drücken; siehe [accesskey](/de/docs/Web/HTML/Global_attributes/accesskey) für eine hilfreiche Liste dieser).

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
> Das Problem mit dem obigen Beispiel ist natürlich, dass der Benutzer nicht wissen wird, was die Zugriffstaste ist! Auf einer realen Seite müssten Sie diese Information auf eine Weise bereitstellen, die das Design der Seite nicht stört (zum Beispiel durch Bereitstellung eines leicht zugänglichen Links, der auf Informationen zu den Zugriffstasten der Seite verweist).

### Deaktivieren und Aktivieren eines Buttons

Um einen Button zu deaktivieren, geben Sie das globale Attribut [`disabled`](/de/docs/Web/HTML/Attributes/disabled) an:

```html
<input type="button" value="Disable me" disabled />
```

#### Setzen des disabled-Attributs

Sie können Buttons zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen. In diesem Beispiel ist unser Button zu Beginn aktiviert, aber wenn Sie ihn drücken, wird er mit `button.disabled = true` deaktiviert. Eine [`setTimeout()`](/de/docs/Web/API/SetTimeout)-Funktion wird dann verwendet, um den Button nach zwei Sekunden wieder in den aktivierten Zustand zurückzusetzen.

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

Wenn das `disabled`-Attribut nicht angegeben ist, erbt der Button seinen `disabled`-Zustand von seinem Elternelement. Dies ermöglicht es, Gruppen von Elementen auf einmal zu aktivieren und zu deaktivieren, indem man sie in einem Container wie einem {{HTMLElement("fieldset")}}-Element einfasst und dann `disabled` auf dem Container setzt.

Das folgende Beispiel zeigt dies in Aktion. Es ist dem vorherigen Beispiel sehr ähnlich, außer dass das `disabled`-Attribut auf dem `<fieldset>` gesetzt wird, wenn der erste Button gedrückt wird — dies führt dazu, dass alle drei Buttons deaktiviert werden, bis der Timeout von zwei Sekunden abgelaufen ist.

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
> Im Gegensatz zu anderen Browsern behält Firefox den `disabled`-Zustand eines `<input>`-Elements auch nach dem Neuladen der Seite bei. Als Workaround setzen Sie das `autocomplete`-Attribut des `<input>`-Elements auf `off`. (Siehe [Firefox-Fehler 654072](https://bugzil.la/654072) für weitere Details.)

## Validierung

Buttons nehmen nicht an der Beschränkungsvalidierung teil; sie haben keinen tatsächlichen Wert, der beschränkt werden könnte.

## Beispiele

Das folgende Beispiel zeigt eine sehr einfache Zeichnungs-App, die mit einem {{htmlelement("canvas")}}-Element und etwas einfachem CSS und JavaScript erstellt wurde (wir werden das CSS der Kürze halber ausblenden). Die beiden oberen Steuerelemente ermöglichen es Ihnen, die Farbe und Größe des Zeichenstifts zu wählen. Der Button ruft beim Klicken eine Funktion auf, die die Zeichenfläche löscht.

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

// update sizepicker output value

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
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Element/input#type"><code>type</code></a> und
        <a href="/de/docs/Web/HTML/Element/input#value"><code>value</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL Attribute</strong></td>
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

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, die es implementiert.
- Das modernere {{HTMLElement("button")}}-Element.
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
