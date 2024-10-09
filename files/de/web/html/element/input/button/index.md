---
title: <input type="button">
slug: Web/HTML/Element/input/button
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`button`** werden als einfache Drucktasten gerendert, die programmiert werden können, um benutzerdefinierte Funktionen überall auf einer Webseite zu steuern, wenn eine Event-Handler-Funktion (typischerweise für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis) zugewiesen wird.

{{EmbedInteractiveExample("pages/tabbed/input-button.html", "tabbed-shorter")}}

> [!NOTE]
> Während `<input>`-Elemente des Typs `button` immer noch vollkommen gültiges HTML sind, wird mittlerweile das neuere {{HTMLElement("button")}}-Element bevorzugt, um Schaltflächen zu erstellen. Da der Text des Labels eines {{HTMLElement("button")}} zwischen dem öffnenden und schließenden Tag eingefügt wird, können Sie HTML im Label verwenden, sogar Bilder.

## Wert

### Taste mit einem Wert

Das Attribut [`value`](/de/docs/Web/HTML/Element/input#value) eines `<input type="button">`-Elements enthält eine Zeichenkette, die als Beschriftung der Schaltfläche verwendet wird. Der `value` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für die Schaltfläche.

```html
<input type="button" value="Click Me" />
```

{{EmbedLiveSample("Button_with_a_value", 650, 30)}}

### Taste ohne Wert

Wenn Sie keinen `value` angeben, erhalten Sie eine leere Schaltfläche:

```html
<input type="button" />
```

{{EmbedLiveSample("Button_without_a_value", 650, 30)}}

## Verwendung von Schaltflächen

`<input type="button">`-Elemente haben kein Standardverhalten (ihre Verwandten, `<input type="submit">` und [`<input type="reset">`](/de/docs/Web/HTML/Element/input/reset), werden verwendet, um Formulare abzuschicken bzw. zurückzusetzen). Damit Schaltflächen eine Funktion haben, müssen Sie JavaScript-Code schreiben, der die Arbeit erledigt.

### Eine einfache Taste

Wir beginnen mit der Erstellung einer einfachen Schaltfläche mit einem [`click`](/de/docs/Web/API/Element/click_event)-Event-Handler, der unsere Maschine startet (genauer gesagt, er schaltet den `value` der Schaltfläche und den Textinhalt des folgenden Absatzes um):

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

Das Skript erhält eine Referenz auf das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt, das das `<input>` im DOM darstellt, und speichert diese Referenz in der Variablen `button`. Mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) wird dann eine Funktion eingerichtet, die ausgeführt wird, wenn [`click`](/de/docs/Web/API/Element/click_event)-Ereignisse auf der Schaltfläche auftreten.

{{EmbedLiveSample("A_simple_button", 650, 100)}}

### Hinzufügen von Tastenkombinationen zu Schaltflächen

Tastenkombinationen, auch bekannt als Zugangsschlüssel und Tastaturäquivalente, ermöglichen es dem Benutzer, eine Taste mit einer oder mehreren Tasten auf der Tastatur auszulösen. Um einer Schaltfläche eine Tastenkombination hinzuzufügen – genau wie bei jedem {{HTMLElement("input")}}, bei dem es sinnvoll ist – verwenden Sie das globale Attribut [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey).

In diesem Beispiel wird <kbd>s</kbd> als Zugangsschlüssel festgelegt (Sie müssen <kbd>s</kbd> zusammen mit den speziellen Modifikator-Tasten für Ihre Browser/OS-Kombination drücken; siehe [accesskey](/de/docs/Web/HTML/Global_attributes/accesskey) für eine nützliche Liste dieser Kombinationen).

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
> Das Problem bei dem obigen Beispiel ist natürlich, dass der Benutzer nicht weiß, was der Zugangsschlüssel ist! Auf einer echten Seite müssten Sie diese Information auf eine Weise bereitstellen, die das Design der Seite nicht stört (zum Beispiel durch einen leicht zugänglichen Link, der auf Informationen über die Zugangsschlüssel der Seite hinweist).

### Aktivieren und Deaktivieren einer Schaltfläche

Um eine Schaltfläche zu deaktivieren, geben Sie das globale Attribut [`disabled`](/de/docs/Web/HTML/Attributes/disabled) an:

```html
<input type="button" value="Disable me" disabled />
```

#### Das disabled-Attribut setzen

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen. In diesem Beispiel ist unsere Taste zunächst aktiviert, aber wenn Sie sie drücken, wird sie mit `button.disabled = true` deaktiviert. Eine [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Funktion wird dann verwendet, um die Taste nach zwei Sekunden wieder in den aktivierten Zustand zurückzusetzen.

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

#### Vererben des disabled-Status

Wenn das `disabled`-Attribut nicht angegeben ist, erbt die Schaltfläche ihren `disabled`-Status vom Elternelement. Dadurch ist es möglich, Gruppen von Elementen gleichzeitig zu aktivieren und zu deaktivieren, indem sie in einem Container wie einem {{HTMLElement("fieldset")}}-Element eingeschlossen werden und `disabled` auf dem Container gesetzt wird.

Das untenstehende Beispiel zeigt dies in Aktion. Es ist dem vorherigen Beispiel sehr ähnlich, außer dass bei Drücken der ersten Schaltfläche das `disabled`-Attribut auf dem `<fieldset>` gesetzt wird – dies führt dazu, dass alle drei Schaltflächen deaktiviert werden, bis der Timeout von zwei Sekunden abgelaufen ist.

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
> Im Gegensatz zu anderen Browsern speichert Firefox den `disabled`-Status eines `<input>`-Elements auch nachdem die Seite neu geladen wurde. Um dies zu umgehen, setzen Sie das `autocomplete`-Attribut des `<input>`-Elements auf `off`. (Siehe [Firefox-Fehler 654072](https://bugzil.la/654072) für mehr Details.)

## Validierung

Schaltflächen nehmen nicht an der Constraint-Validierung teil; sie haben keinen wirklichen Wert, der eingeschränkt werden könnte.

## Beispiele

Das untenstehende Beispiel zeigt eine sehr einfache Zeichenanwendung, die mit einem {{htmlelement("canvas")}}-Element und etwas einfachem CSS und JavaScript erstellt wurde (wir verbergen das CSS aus Gründen der Übersichtlichkeit). Die zwei oberen Steuerungen ermöglichen die Auswahl der Farbe und der Größe des Zeichenstifts. Die Schaltfläche ruft bei Klick eine Funktion auf, die das Zeichenfeld löscht.

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
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
