---
title: <input type="button">
slug: Web/HTML/Element/input/button
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`button`** werden als einfache Schaltflächen dargestellt, die programmiert werden können, um benutzerdefinierte Funktionen überall auf einer Webseite zu steuern, wenn sie mit einer Ereignis-Handler-Funktion (typischerweise für das {{domxref("Element/click_event", "click")}}-Ereignis) zugewiesen werden.

{{EmbedInteractiveExample("pages/tabbed/input-button.html", "tabbed-shorter")}}

> [!NOTE]
> Während `<input>`-Elemente des Typs `button` nach wie vor gültiger HTML-Code sind, ist das neuere {{HTMLElement("button")}}-Element mittlerweile die bevorzugte Methode, um Schaltflächen zu erstellen. Da der Beschriftungstext eines {{HTMLElement("button")}} zwischen den öffnenden und schließenden Tags eingefügt wird, können Sie HTML in die Beschriftung integrieren, sogar Bilder.

## Wert

### Schaltfläche mit Wert

Das Attribut [`value`](/de/docs/Web/HTML/Element/input#value) eines `<input type="button">`-Elements enthält eine Zeichenkette, die als Beschriftung der Schaltfläche verwendet wird. Der `value` liefert die {{glossary("accessible description")}} für die Schaltfläche.

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

`<input type="button">`-Elemente haben kein Standardverhalten (ihre Verwandten, `<input type="submit">` und [`<input type="reset">`](/de/docs/Web/HTML/Element/input/reset) werden verwendet, um Formulare zu senden und zurückzusetzen, jeweils). Damit Schaltflächen eine Funktion ausführen, müssen Sie JavaScript-Code schreiben, der die Arbeit übernimmt.

### Eine einfache Schaltfläche

Wir beginnen mit der Erstellung einer einfachen Schaltfläche mit einem {{domxref("Element/click_event", "click")}}-Ereignis-Handler, der unsere Maschine startet (genauer gesagt, er schaltet den `value` der Schaltfläche und den Textinhalt des folgenden Absatzes um):

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

Das Skript holt sich eine Referenz zum {{domxref("HTMLInputElement")}}-Objekt, das das `<input>` im DOM darstellt, und speichert diese Referenz in der Variablen `button`. Mit {{domxref("EventTarget.addEventListener", "addEventListener()")}} wird dann eine Funktion festgelegt, die ausgeführt wird, wenn {{domxref("Element/click_event", "click")}}-Ereignisse auf der Schaltfläche auftreten.

{{EmbedLiveSample("A_simple_button", 650, 100)}}

### Hinzufügen von Tastenkombinationen zu Schaltflächen

Tastenkombinationen, auch als Zugangstasten und Tastaturäquivalente bekannt, ermöglichen es dem Benutzer, eine Schaltfläche mit einer Taste oder einer Tastenkombination auf der Tastatur auszulösen. Um einer Schaltfläche eine Tastenkombination hinzuzufügen – genau wie bei jedem {{HTMLElement("input")}}, für das dies sinnvoll ist – verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey).

In diesem Beispiel ist <kbd>s</kbd> als Zugangstaste angegeben (Sie müssen <kbd>s</kbd> zusammen mit den speziellen Modifikatortasten für Ihre Browser-/Betriebssystemkombination drücken; siehe [accesskey](/de/docs/Web/HTML/Global_attributes/accesskey) für eine nützliche Liste dieser).

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
> Das Problem mit dem obigen Beispiel ist natürlich, dass der Benutzer nicht weiß, was die Zugangstaste ist! In einer echten Website müssten Sie diese Information auf eine Weise bereitstellen, die das Design der Website nicht stört (z.B. indem Sie einen leicht zugänglichen Link bereitstellen, der auf Informationen hinweist, was die Zugangstasten der Website sind).

### Deaktivieren und Aktivieren einer Schaltfläche

Um eine Schaltfläche zu deaktivieren, geben Sie das globale Attribut [`disabled`](/de/docs/Web/HTML/Attributes/disabled) an, wie folgt:

```html
<input type="button" value="Disable me" disabled />
```

#### Setzen des disabled-Attributs

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen. In diesem Beispiel beginnt unsere Schaltfläche im aktivierten Zustand, aber wenn Sie sie drücken, wird sie mit `button.disabled = true` deaktiviert. Eine {{domxref("setTimeout()")}}-Funktion wird dann verwendet, um die Schaltfläche nach zwei Sekunden wieder in ihren aktivierten Zustand zu versetzen.

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

#### Vererbung des disabled-Zustands

Wenn das `disabled`-Attribut nicht angegeben ist, erbt die Schaltfläche ihren `disabled`-Zustand von ihrem Elternelement. So ist es möglich, Gruppen von Elementen auf einmal zu aktivieren und zu deaktivieren, indem man sie in einem Container wie einem {{HTMLElement("fieldset")}}-Element einschließt und dann `disabled` auf den Container anwendet.

Das folgende Beispiel zeigt dies in Aktion. Dies ist sehr ähnlich zum vorherigen Beispiel, außer dass das `disabled`-Attribut auf dem `<fieldset>` gesetzt wird, wenn die erste Schaltfläche gedrückt wird — dies führt dazu, dass alle drei Schaltflächen deaktiviert werden, bis der Zwei-Sekunden-Timeout verstrichen ist.

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
> Anders als bei anderen Browsern bleibt in Firefox der `disabled`-Zustand eines `<input>`-Elements auch nach dem Neuladen der Seite bestehen. Als Umgehungslösung setzen Sie das `autocomplete`-Attribut des `<input>`-Elements auf `off`. (Siehe [Firefox Bug 654072](https://bugzil.la/654072) für weitere Details.)

## Validierung

Schaltflächen beteiligen sich nicht an der Einschränkungsvalidierung; sie haben keinen wirklichen Wert, der eingeschränkt werden könnte.

## Beispiele

Das folgende Beispiel zeigt eine sehr einfache Zeichenanwendung, die mit einem {{htmlelement("canvas")}}-Element und etwas einfachem CSS und JavaScript erstellt wurde (wir blenden das CSS der Kürze halber aus). Die oberen beiden Steuerungen ermöglichen es Ihnen, die Farbe und Größe des Zeichenstifts auszuwählen. Die Schaltfläche, wenn angeklickt, ruft eine Funktion auf, die die Leinwand löscht.

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

// convert degrees to radians
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
      <td>Eine Zeichenkette, die als Beschriftung der Schaltfläche verwendet wird</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>{{domxref("Element/click_event", "click")}}</td>
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
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
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

- {{HTMLElement("input")}} und die {{domxref("HTMLInputElement")}}-Schnittstelle, die sie implementiert.
- Das modernere {{HTMLElement("button")}}-Element.
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
