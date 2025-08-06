---
title: <input type="button">
slug: Web/HTML/Reference/Elements/input/button
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

{{HTMLElement("input")}} Elemente des Typs **`button`** werden als Druckknöpfe dargestellt, die programmiert werden können, um benutzerdefinierte Funktionalitäten an beliebiger Stelle auf einer Webseite zu steuern, wenn eine Ereignisbehandlungsfunktion (typischerweise für das [`click`](/de/docs/Web/API/Element/click_event) Ereignis) zugewiesen wird.

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
> Während `<input>` Elemente des Typs `button` immer noch vollständig gültiges HTML sind, ist das neuere {{HTMLElement("button")}} Element jetzt die bevorzugte Methode, um Schaltflächen zu erstellen. Da der Beschriftungstext eines {{HTMLElement("button")}} zwischen den öffnenden und schließenden Tags eingefügt wird, können Sie HTML in die Beschriftung aufnehmen, sogar Bilder.

## Wert

### Button mit einem Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attribut eines `<input type="button">` Elements enthält einen String, der als Beschriftung der Schaltfläche verwendet wird. Der `value` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die Schaltfläche.

```html
<input type="button" value="Click Me" />
```

{{EmbedLiveSample("Button_with_a_value", 650, 30)}}

### Button ohne Wert

Wenn Sie keinen `value` angeben, erhalten Sie eine leere Schaltfläche:

```html
<input type="button" />
```

{{EmbedLiveSample("Button_without_a_value", 650, 30)}}

## Verwendung von Schaltflächen

`<input type="button">` Elemente haben kein Standardverhalten (ihre Verwandten, `<input type="submit">` und [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset) werden jeweils verwendet, um Formulare zu senden und zurückzusetzen). Um Schaltflächen nützlich zu machen, müssen Sie JavaScript-Code schreiben, um die Arbeit zu erledigen.

### Eine grundlegende Schaltfläche

Wir beginnen mit der Erstellung einer grundlegenden Schaltfläche mit einem [`click`](/de/docs/Web/API/Element/click_event) Ereignis-Handler, der unsere Maschine startet (nun, er wechselt den `value` der Schaltfläche und den Textinhalt des folgenden Absatzes):

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

Das Skript erhält eine Referenz auf das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekt, das das `<input>` im DOM repräsentiert, und speichert diese Referenz in der Variablen `button`. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) wird dann verwendet, um eine Funktion festzulegen, die ausgeführt wird, wenn [`click`](/de/docs/Web/API/Element/click_event) Ereignisse auf der Schaltfläche auftreten.

{{EmbedLiveSample("A_basic_button", 650, 100)}}

### Hinzufügen von Tastenkombinationen zu Schaltflächen

Tastenkombinationen, auch als Zugriffstasten und Tastaturäquivalente bekannt, ermöglichen es dem Benutzer, eine Schaltfläche durch Drücken einer Taste oder einer Tastenkombination auszulösen. Um einer Schaltfläche eine Tastenkombination hinzuzufügen - so wie bei jedem {{HTMLElement("input")}}, für das es sinnvoll ist - verwenden Sie das [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey) globale Attribut.

In diesem Beispiel wird <kbd>s</kbd> als Zugriffstaste angegeben (Sie müssen <kbd>s</kbd> zusammen mit den speziellen Modifikatortasten für Ihre Browser-/OS-Kombination drücken; siehe [accesskey](/de/docs/Web/HTML/Reference/Global_attributes/accesskey) für eine nützliche Liste davon).

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
> Das Problem beim obigen Beispiel ist natürlich, dass der Benutzer nicht weiß, was die Zugriffstaste ist! Auf einer realen Seite müssten Sie diese Information auf eine Weise bereitstellen, die das Seitendesign nicht stört (zum Beispiel durch einen leicht zugänglichen Link, der auf Informationen verweist, welche Zugriffstasten die Seite hat).

### Deaktivieren und Aktivieren einer Schaltfläche

Um eine Schaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) globale Attribut an:

```html
<input type="button" value="Disable me" disabled />
```

#### Festlegen des disabled-Attributs

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen. In diesem Beispiel beginnt unsere Schaltfläche aktiviert, aber wenn Sie darauf drücken, wird sie mit `button.disabled = true` deaktiviert. Eine [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) Funktion wird dann verwendet, um die Schaltfläche nach zwei Sekunden wieder in den aktivierten Zustand zu versetzen.

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

Wenn das `disabled` Attribut nicht angegeben ist, erbt die Schaltfläche ihren `disabled` Zustand von ihrem Elternelement. Dies ermöglicht es, Gruppen von Elementen gleichzeitig zu aktivieren und zu deaktivieren, indem sie in einem Container wie einem {{HTMLElement("fieldset")}} Element eingeschlossen werden, und dann `disabled` auf dem Container gesetzt wird.

Das folgende Beispiel zeigt dies in Aktion. Dies ist dem vorherigen Beispiel sehr ähnlich, außer dass das `disabled` Attribut auf dem `<fieldset>` gesetzt wird, wenn die erste Schaltfläche gedrückt wird - dies bewirkt, dass alle drei Schaltflächen deaktiviert sind, bis die Zwei-Sekunden-Zeitüberschreitung abgelaufen ist.

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
> Im Gegensatz zu anderen Browsern behält Firefox den `disabled` Zustand eines `<input>` Elements auch nach dem Neuladen der Seite bei. Als Workaround setzen Sie das `autocomplete` Attribut des `<input>` Elements auf `off`. (Siehe [Firefox bug 654072](https://bugzil.la/654072) für mehr Details.)

## Validierung

Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen realen Wert, der eingeschränkt werden könnte.

## Beispiele

Das untenstehende Beispiel zeigt eine sehr einfache Zeichen-App, die mit einem {{htmlelement("canvas")}} Element und etwas CSS und JavaScript erstellt wurde (wir verbergen das CSS der Kürze halber). Die oberen beiden Steuerelemente ermöglichen es Ihnen, die Farbe und Größe des Zeichenstifts auszuwählen. Die Schaltfläche, wenn geklickt, ruft eine Funktion auf, die die Leinwand löscht.

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
      <td>Ein String, der als Beschriftung der Schaltfläche verwendet wird</td>
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
      <td><strong>DOM-Interface</strong></td>
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

- {{HTMLElement("input")}} und das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Interface, das es implementiert.
- Das modernere {{HTMLElement("button")}} Element.
