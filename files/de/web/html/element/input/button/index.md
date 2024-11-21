---
title: <input type="button">
slug: Web/HTML/Element/input/button
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`button`** werden als einfache Schaltflächen dargestellt, die programmiert werden können, um benutzerdefinierte Funktionalitäten auf einer Webseite zu steuern, wenn eine Event-Handler-Funktion zugewiesen wird (typischerweise für das [`click`](/de/docs/Web/API/Element/click_event)-Event).

{{EmbedInteractiveExample("pages/tabbed/input-button.html", "tabbed-shorter")}}

> [!NOTE]
> Während `<input>`-Elemente des Typs `button` immer noch gültiges HTML sind, ist das neuere {{HTMLElement("button")}}-Element nun die bevorzugte Methode, um Schaltflächen zu erstellen. Da der Text einer {{HTMLElement("button")}}-Schaltfläche zwischen den öffnenden und schließenden Tags eingefügt wird, können Sie HTML im Label verwenden, einschließlich Bilder.

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

`<input type="button">`-Elemente haben kein Standardverhalten (im Gegensatz zu ihren Verwandten `<input type="submit">` und [`<input type="reset">`](/de/docs/Web/HTML/Element/input/reset), die zum Absenden und Zurücksetzen von Formularen verwendet werden). Um Schaltflächen eine Funktion zu verleihen, müssen Sie JavaScript-Code schreiben, um die Arbeit auszuführen.

### Eine einfache Schaltfläche

Wir beginnen mit einer einfachen Schaltfläche mit einem [`click`](/de/docs/Web/API/Element/click_event)-Event-Handler, der unsere Maschine startet (naja, er wechselt den `value` der Schaltfläche und den Textinhalt des folgenden Absatzes):

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

Das Skript erhält eine Referenz zum [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das `<input>` im DOM repräsentiert, und speichert diese Referenz in der Variablen `button`. [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) wird dann verwendet, um eine Funktion zu etablieren, die ausgeführt wird, wenn [`click`](/de/docs/Web/API/Element/click_event)-Events auf der Schaltfläche auftreten.

{{EmbedLiveSample("A_basic_button", 650, 100)}}

### Hinzufügen von Tastaturkürzeln zu Schaltflächen

Tastaturkürzel, auch bekannt als Zugriffstasten oder Tastaturäquivalente, ermöglichen es dem Benutzer, eine Schaltfläche durch Drücken einer Taste oder Tastenkombination zu aktivieren. Um einer Schaltfläche ein Tastaturkürzel hinzuzufügen – wie bei jedem geeigneten {{HTMLElement("input")}} – verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey).

In diesem Beispiel ist <kbd>s</kbd> als Zugriffstaste angegeben (Sie müssen <kbd>s</kbd> plus die spezifischen Modifikatortasten für Ihre Browser/OS-Kombination drücken; siehe [accesskey](/de/docs/Web/HTML/Global_attributes/accesskey) für eine nützliche Liste dieser Kombinationen).

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
> Das Problem mit dem obigen Beispiel ist natürlich, dass der Benutzer nicht wissen wird, welche Zugriffstaste es ist! In einer realen Webseite müssten Sie diese Information auf eine Weise bereitstellen, die das Design der Seite nicht beeinträchtigt (zum Beispiel, indem Sie einen leicht zugänglichen Link bereitstellen, der auf Informationen zu den Zugriffstasten der Seite hinweist).

### Deaktivieren und Aktivieren einer Schaltfläche

Um eine Schaltfläche zu deaktivieren, geben Sie das globale Attribut [`disabled`](/de/docs/Web/HTML/Attributes/disabled) an, wie folgt:

```html
<input type="button" value="Disable me" disabled />
```

#### Setzen des disabled-Attributs

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen. In diesem Beispiel ist unsere Schaltfläche zunächst aktiviert, aber wenn Sie sie drücken, wird sie mit `button.disabled = true` deaktiviert. Eine [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Funktion wird dann verwendet, um die Schaltfläche nach zwei Sekunden wieder in den aktivierten Zustand zurückzusetzen.

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

Wenn das `disabled`-Attribut nicht angegeben ist, erbt die Schaltfläche ihren `disabled`-Zustand vom Elternelement. Dies macht es möglich, Gruppen von Elementen auf einmal zu aktivieren oder zu deaktivieren, indem man sie in einem Container wie einem {{HTMLElement("fieldset")}}-Element umfasst und dann `disabled` auf den Container setzt.

Das folgende Beispiel zeigt dies in Aktion. Dies ist sehr ähnlich zum vorherigen Beispiel, abgesehen davon, dass das `disabled`-Attribut auf dem `<fieldset>` gesetzt wird, wenn die erste Schaltfläche gedrückt wird — dies bewirkt, dass alle drei Schaltflächen deaktiviert werden, bis der Zweitsekunden-Timeout abgelaufen ist.

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
> Im Gegensatz zu anderen Browsern behält Firefox den `disabled`-Zustand eines `<input>`-Elements auch nach dem Neuladen der Seite. Als Workaround setzen Sie das `autocomplete`-Attribut des `<input>`-Elements auf `off`. (Siehe [Firefox Bug 654072](https://bugzil.la/654072) für weitere Details.)

## Validierung

Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen realen Wert, der beschränkt werden könnte.

## Beispiele

Das unten stehende Beispiel zeigt eine sehr einfache Zeichnungs-App, erstellt mit einem {{htmlelement("canvas")}}-Element und etwas CSS und JavaScript (wir verstecken das CSS zur Übersichtlichkeit). Die beiden oberen Steuerungen ermöglichen es Ihnen, die Farbe und Größe des Zeichenwerkzeugs auszuwählen. Die Schaltfläche ruft beim Klicken eine Funktion auf, die die Leinwand leert.

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
      <td><strong>Events</strong></td>
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
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
