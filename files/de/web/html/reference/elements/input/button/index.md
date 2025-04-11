---
title: <input type="button">
slug: Web/HTML/Reference/Elements/input/button
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`button`** werden als Drucktasten gerendert, die programmiert werden können, um benutzerdefinierte Funktionalitäten überall auf einer Webseite zu steuern, wenn sie mit einer Ereignisbehandlungsfunktion (typischerweise für das [`click`](/de/docs/Web/API/Element/click_event) Ereignis) versehen werden.

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
> Während `<input>`-Elemente vom Typ `button` immer noch vollkommen gültiges HTML sind, ist das neuere {{HTMLElement("button")}}-Element nun die bevorzugte Methode, um Schaltflächen zu erstellen. Da der Beschriftungstext einer {{HTMLElement("button")}} zwischen den öffnenden und schließenden Tags eingefügt wird, können Sie HTML in die Beschriftung aufnehmen, sogar Bilder.

## Wert

### Schaltfläche mit einem Wert

Das `value`-Attribut eines `<input type="button">`-Elements enthält einen String, der als Beschriftung der Schaltfläche verwendet wird. Der `value` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die Schaltfläche.

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

`<input type="button">`-Elemente haben kein Standardverhalten (ihre Verwandten, `<input type="submit">` und [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset), werden verwendet, um Formulare jeweils abzusenden und zurückzusetzen). Um Schaltflächen etwas tun zu lassen, müssen Sie JavaScript-Code schreiben, um die Arbeit zu erledigen.

### Eine einfache Schaltfläche

Wir beginnen mit der Erstellung einer einfachen Schaltfläche mit einem [`click`](/de/docs/Web/API/Element/click_event)-Ereignisbehandler, der unsere Maschine startet (genauer gesagt, er wechselt den `value` der Schaltfläche und den Textinhalt des folgenden Absatzes):

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

Das Skript erhält eine Referenz auf das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das `<input>` im DOM repräsentiert, und speichert diese Referenz in der Variablen `button`. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) wird dann verwendet, um eine Funktion festzulegen, die ausgeführt wird, wenn [`click`](/de/docs/Web/API/Element/click_event)-Ereignisse auf der Schaltfläche auftreten.

{{EmbedLiveSample("A_basic_button", 650, 100)}}

### Hinzufügen von Tastaturkürzeln zu Schaltflächen

Tastaturkürzel, auch als Zugriffstasten und Tastaturequivalente bekannt, ermöglichen es dem Benutzer, eine Schaltfläche mit einer Taste oder einer Tastenkombination auf der Tastatur auszulösen. Um einer Schaltfläche ein Tastaturkürzel hinzuzufügen — genau wie bei jedem {{HTMLElement("input")}}, für das es sinnvoll ist — verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey).

In diesem Beispiel wird <kbd>s</kbd> als Zugriffstaste angegeben (Sie müssen <kbd>s</kbd> plus die spezifischen Modifikatortasten für Ihre Browser-/Betriebssystemkombination drücken; siehe [accesskey](/de/docs/Web/HTML/Reference/Global_attributes/accesskey) für eine nützliche Liste dieser).

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
> Das Problem mit dem obigen Beispiel ist natürlich, dass der Benutzer nicht weiß, was die Zugriffstaste ist! In einer realen Website müssten Sie diese Information auf eine Weise bereitstellen, die das Design der Website nicht stört (zum Beispiel, indem Sie einen leicht zugänglichen Link bieten, der auf Informationen über die Zugriffstasten der Website verweist).

### Deaktivieren und Aktivieren einer Schaltfläche

Um eine Schaltfläche zu deaktivieren, geben Sie das globale Attribut [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) auf ihr an, wie folgt:

```html
<input type="button" value="Disable me" disabled />
```

#### Festlegung des deaktivierten Attributs

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen. In diesem Beispiel beginnt unsere Schaltfläche im aktivierten Zustand, aber wenn Sie sie drücken, wird sie mit `button.disabled = true` deaktiviert. Eine [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Funktion wird dann verwendet, um die Schaltfläche nach zwei Sekunden wieder in den aktivierten Zustand zu versetzen.

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

Wenn das `disabled`-Attribut nicht angegeben ist, erbt die Schaltfläche ihren `disabled`-Zustand von ihrem übergeordneten Element. Dies macht es möglich, Gruppen von Elementen auf einmal zu aktivieren und zu deaktivieren, indem sie in einem Container wie einem {{HTMLElement("fieldset")}}-Element eingeschlossen werden und dann `disabled` auf dem Container gesetzt wird.

Das untenstehende Beispiel zeigt dies in Aktion. Dies ist sehr ähnlich zu dem vorherigen Beispiel, außer dass das `disabled`-Attribut auf dem `<fieldset>` gesetzt wird, wenn die erste Schaltfläche gedrückt wird - dies führt dazu, dass alle drei Schaltflächen deaktiviert werden, bis der Zwei-Sekunden-Timeout abgelaufen ist.

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
> Im Gegensatz zu anderen Browsern speichert Firefox den `disabled`-Zustand eines `<input>`-Elements auch nach dem Neuladen der Seite. Als Workaround setzen Sie das `autocomplete`-Attribut des `<input>`-Elements auf `off`. (Weitere Details finden Sie unter [Firefox-Bug 654072](https://bugzil.la/654072).)

## Validierung

Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen wirklichen Wert, der eingeschränkt werden könnte.

## Beispiele

Das untenstehende Beispiel zeigt eine sehr einfache Zeichen-App, die mit einem {{htmlelement("canvas")}}-Element und etwas CSS und JavaScript erstellt wurde (wir blenden das CSS der Kürze halber aus). Die oberen beiden Steuerelemente ermöglichen die Auswahl der Farbe und Größe des Zeichenstifts. Die Schaltfläche ruft beim Klicken eine Funktion auf, die die Leinwand löscht.

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
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>Keine</td>
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
