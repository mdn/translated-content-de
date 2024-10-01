---
title: <input type="button">
slug: Web/HTML/Element/input/button
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente des Typs **`button`** werden als einfache Schaltflächen gerendert. Sie können programmiert werden, um benutzerdefinierte Funktionen überall auf einer Webseite zu steuern, wenn ihnen ein Event-Handler (typischerweise für das [`click`](/de/docs/Web/API/Element/click_event) Ereignis) zugewiesen wird.

{{EmbedInteractiveExample("pages/tabbed/input-button.html", "tabbed-shorter")}}

> [!NOTE]
> Während `<input>` Elemente des Typs `button` immer noch gültiges HTML sind, ist das neuere {{HTMLElement("button")}} Element jetzt die bevorzugte Methode, um Schaltflächen zu erstellen. Da der Text eines {{HTMLElement("button")}} zwischen den öffnenden und schließenden Tags eingefügt wird, können Sie HTML im Label verwenden, sogar Bilder.

## Wert

### Schaltfläche mit einem Wert

Das `value`-Attribut eines `<input type="button">` Elements enthält eine Zeichenkette, die als Beschriftung der Schaltfläche verwendet wird. Der `value` liefert die {{Glossary("accessible_description", "zugängliche Beschreibung")}} der Schaltfläche.

```html
<input type="button" value="Click Me" />
```

{{EmbedLiveSample("Button_with_a_value", 650, 30)}}

### Schaltfläche ohne einen Wert

Wenn Sie keinen `value` angeben, erhalten Sie eine leere Schaltfläche:

```html
<input type="button" />
```

{{EmbedLiveSample("Button_without_a_value", 650, 30)}}

## Verwendung von Schaltflächen

`<input type="button">` Elemente haben kein Standardverhalten (ihre Verwandten, `<input type="submit">` und [`<input type="reset">`](/de/docs/Web/HTML/Element/input/reset) dienen dem Absenden bzw. Zurücksetzen von Formularen). Um Schaltflächen nutzbar zu machen, müssen Sie JavaScript-Code schreiben, der die Arbeit übernimmt.

### Eine einfache Schaltfläche

Wir beginnen mit der Erstellung einer einfachen Schaltfläche mit einem [`click`](/de/docs/Web/API/Element/click_event) Event-Handler, der unsere Maschine startet (bzw. den `value` der Schaltfläche und den Text des folgenden Absatzes umschaltet):

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

Das Skript erhält eine Referenz auf das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekt, das das `<input>` im DOM repräsentiert, und speichert diese Referenz in der Variablen `button`. Dann wird [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwendet, um eine Funktion zu etablieren, die ausgeführt wird, wenn auf der Schaltfläche `click` Ereignisse auftreten.

{{EmbedLiveSample("A_simple_button", 650, 100)}}

### Hinzufügen von Tastaturkürzeln zu Schaltflächen

Tastaturkürzel, auch bekannt als Access Keys und Tastaturäquivalente, ermöglichen es dem Benutzer, eine Schaltfläche durch Drücken einer Taste oder Tastenkombination auf der Tastatur auszulösen. Um einer Schaltfläche ein Tastaturkürzel hinzuzufügen — genauso wie bei jedem {{HTMLElement("input")}}, für das es sinnvoll ist — verwenden Sie das [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey) Globalattribut.

In diesem Beispiel wird <kbd>s</kbd> als Zugangstaste angegeben (Sie müssen <kbd>s</kbd> und die besonderen Modifizierertasten für Ihre Browser-/Betriebssystemkombination drücken; siehe [accesskey](/de/docs/Web/HTML/Global_attributes/accesskey) für eine nützliche Liste dieser).

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
> Das Problem mit dem obigen Beispiel besteht natürlich darin, dass der Benutzer nicht weiß, worum es sich bei der Zugangstaste handelt! Auf einer echten Website müssten Sie diese Information auf eine Weise bereitstellen, die das Design der Seite nicht stört (beispielsweise durch einen leicht zugänglichen Link, der auf Informationen darüber verweist, was die Zugangstasten der Website sind).

### Deaktivieren und Aktivieren einer Schaltfläche

Um eine Schaltfläche zu deaktivieren, geben Sie das [`disabled`](/de/docs/Web/HTML/Attributes/disabled) Globalattribut an, wie folgt:

```html
<input type="button" value="Disable me" disabled />
```

#### Setzen des disabled-Attributs

Sie können Schaltflächen zur Laufzeit aktivieren und deaktivieren, indem Sie `disabled` auf `true` oder `false` setzen. In diesem Beispiel startet unsere Schaltfläche aktiviert, aber wenn sie gedrückt wird, wird sie durch `button.disabled = true` deaktiviert. Eine [`setTimeout()`](/de/docs/Web/API/SetTimeout) Funktion wird dann verwendet, um die Schaltfläche nach zwei Sekunden wieder in ihren aktivierten Zustand zu versetzen.

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

#### Vererbung des disabaled-Zustands

Wenn das `disabled` Attribut nicht angegeben ist, übernimmt die Schaltfläche ihren `disabled` Zustand von ihrem Elternelement. Dies ermöglicht es, Gruppen von Elementen auf einmal zu aktivieren und zu deaktivieren, indem man sie in einem Container, wie einem {{HTMLElement("fieldset")}} Element, platziert und dann `disabled` auf den Container setzt.

Das folgende Beispiel zeigt dies in Aktion. Es ist dem vorherigen Beispiel sehr ähnlich, jedoch wird das `disabled` Attribut bei Drücken der ersten Schaltfläche auf dem `<fieldset>` gesetzt — dies bewirkt, dass alle drei Schaltflächen deaktiviert werden, bis der Time-out von zwei Sekunden abgelaufen ist.

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
> Anders als andere Browser behält Firefox den `disabled` Zustand eines `<input>` Elements bei, auch nachdem die Seite neu geladen wurde. Als Workaround kann man das `autocomplete`-Attribut des `<input>` Elements auf `off` setzen. (Siehe [Firefox Bug 654072](https://bugzil.la/654072) für mehr Details.)

## Validierung

Schaltflächen nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen echten Wert, der eingeschränkt werden könnte.

## Beispiele

Das folgende Beispiel zeigt eine sehr einfache Zeichen-App, die mit einem {{htmlelement("canvas")}} Element und etwas einfachem CSS und JavaScript erstellt wurde (wir verstecken das CSS der Übersichtlichkeit halber). Die oberen beiden Bedienelemente ermöglichen es Ihnen, die Farbe und die Größe des Zeichenstiftes auszuwählen. Die Schaltfläche ruft beim Anklicken eine Funktion auf, die die Leinwand löscht.

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
      <td>Eine Zeichenkette, die als Beschriftung der Schaltfläche verwendet wird</td>
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
      <td><strong>IDL Attribute</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM Schnittstelle</strong></td>
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

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, die es implementiert.
- Das modernere {{HTMLElement("button")}} Element.
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
