---
title: "ARIA: Rolle button"
short-title: button
slug: Web/Accessibility/ARIA/Reference/Roles/button_role
l10n:
  sourceCommit: 4bd173b85d62fcc9471fa878f64cd6c166f114ab
---

Die Rolle `button` ist für klickbare Elemente gedacht, die eine Reaktion auslösen, wenn sie vom Nutzer aktiviert werden. Das Hinzufügen von `role="button"` informiert den Screenreader, dass das Element ein Button ist, bietet jedoch keine andere typische Button-Funktionalität wie Klick-Ereignisse und Tastaturbedienung. Diese können Sie selbst hinzufügen, aber grundsätzlich sollten Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"` verwenden.

## Beschreibung

Die Rolle `button` identifiziert ein Element als Button für unterstützende Technologien wie Screenreader. Ein Button ist ein Widget, das verwendet wird, um Aktionen wie das Senden eines Formulars, das Öffnen eines Dialogs, das Abbrechen einer Aktion oder das Ausführen eines Befehls wie das Einfügen eines neuen Datensatzes oder das Anzeigen von Informationen auszuführen. Das Hinzufügen von `role="button"` teilt unterstützenden Technologien mit, dass das Element ein Button ist, bietet jedoch keine andere typische Button-Funktionalität wie Klick-Ereignisse und Tastaturbedienung. Diese können Sie selbst hinzufügen, aber grundsätzlich sollten Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"` verwenden.

Diese Rolle `button` kann in Kombination mit dem Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) verwendet werden, um [Umschalt-Buttons zu erstellen](#umschalt-buttons).

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Save</div>
```

Das obige Beispiel erstellt einen fokussierbaren Button, erfordert jedoch JavaScript und CSS, um das Aussehen und die Funktionalität eines Buttons zu gewährleisten. Diese Funktionen werden standardmäßig bereitgestellt, wenn die Elemente {{HTMLElement("button")}} und {{HTMLElement("input")}} mit `type="button"` verwendet werden:

```html
<button type="button" id="saveChanges">Save</button>
```

> [!NOTE]
> Wenn Sie `role="button"` anstelle der semantischen `<button>`- oder `<input type="button">`-Elemente verwenden, müssen Sie das Element fokussierbar machen und Ereignishandler für [`click`](/de/docs/Web/API/Element/click_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignisse definieren. Dies umfasst die Behandlung der Tasten <kbd>Enter</kbd> und <kbd>Space</kbd>, um alle Formen der Benutzereingabe zu verarbeiten. Siehe [den offiziellen WAI-ARIA-Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/).

Zusätzlich zum gewöhnlichen Button-Widget sollte `role="button"` eingeschlossen werden, wenn ein Umschalt-Button oder Menü-Button unter Verwendung eines Nicht-Button-Elements erstellt wird.

Ein Umschalt-Button ist ein Zwei-Zustands-Button, der entweder aus (nicht gedrückt) oder an (gedrückt) sein kann. Die Attributwerte [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) von `true` oder `false` identifizieren einen Button als Umschalt-Button.

Ein Menü-Button ist ein Button, der ein Menü steuert und eine [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)-Eigenschaft hat, die entweder auf `menu` oder `true` gesetzt ist.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibility-API dargestellt werden, nur Text enthalten können. Accessibility-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `button` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle untergeordneten Elemente eines `button`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie das folgende `button`-Element, das eine Überschrift enthält.

```html
<div role="button"><h3>Title of my button</h3></div>
```

Da Nachkommen von `button` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="button"><h3 role="presentation">Title of my button</h3></div>
```

Aus der Perspektive von Benutzern unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Codeschnipsel für den [Accessibilty-Baum](/de/docs/Glossar/Accessibility_tree) äquivalent zu folgendem sind:

```html
<div role="button">Title of my button</div>
```

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
  - : Das Attribut `aria-pressed` definiert den Button als Umschalt-Button. Der Wert beschreibt den Zustand des Buttons. Die Werte umfassen `aria-pressed="false"`, wenn ein Button derzeit nicht gedrückt ist, `aria-pressed="true`, um anzuzeigen, dass ein Button derzeit gedrückt ist, und `aria-pressed="mixed"`, wenn der Button als teilweise gedrückt gilt. Wenn das Attribut weggelassen wird oder auf seinen Standardwert `aria-pressed="undefined"` gesetzt ist, unterstützt das Element kein Drücken.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Wenn der Button eine Gruppe anderer Elemente steuert, gibt der Zustand `aria-expanded` an, ob die gesteuerte Gruppe derzeit erweitert oder eingeklappt ist. Wenn der Button `aria-expanded="false"` gesetzt hat, ist die Gruppe derzeit nicht erweitert. Wenn der Button `aria-expanded="true"` gesetzt hat, ist sie gerade erweitert; wenn der Button `aria-expanded="undefined"` gesetzt hat oder das Attribut weggelassen wird, ist sie nicht erweiterbar.

### Grundlegende Buttons

Buttons sollten immer einen zugänglichen Namen haben. Für die meisten Buttons wird dieser Name derselbe sein wie der Text innerhalb des Buttons, zwischen den öffnenden und schließenden Tags. In einigen Fällen, beispielsweise bei Buttons, die durch Symbole dargestellt werden, kann der zugängliche Name aus den Attributen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) bereitgestellt werden.

### Umschalt-Buttons

Ein Umschalt-Button hat typischerweise zwei Zustände: gedrückt und nicht gedrückt. Ein dritter gemischter Zustand ist für Umschalt-Buttons verfügbar, die andere Elemente steuern, wie andere Umschalt-Buttons oder Kontrollkästchen, die nicht alle denselben Wert teilen. Ob ein Element ein Umschalt-Button ist oder nicht, kann neben der Rolle `button` (wenn das Element nicht bereits ein nativer Button ist) durch das Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) angezeigt werden:

- Wenn `aria-pressed` nicht verwendet wird, oder auf den "undefined" Zustand gesetzt ist, ist der Button kein Umschalt-Button.
- Wenn `aria-pressed="false"` verwendet wird, ist der Button ein Umschalt-Button, der derzeit nicht gedrückt ist.
- Wenn `aria-pressed="true"` verwendet wird, ist der Button ein Umschalt-Button, der derzeit gedrückt ist.
- Wenn `aria-pressed="mixed"` verwendet wird, wird der Button als teilweise gedrückt betrachtet.

Zum Beispiel könnte ein Stummschalt-Button in einem Audioplayer mit der Beschriftung "Stumm" anzeigen, dass der Ton stummgeschaltet ist, indem der `aria-pressed`-Zustand auf true gesetzt wird. Die Beschriftung eines Umschalt-Buttons sollte sich nicht ändern, wenn sich der Zustand ändert. In unserem Beispiel bleibt die Beschriftung "Stumm" mit einem Screenreader erhalten, der "Stumm-Umschalt-Button gedrückt" oder "Stumm-Umschalt-Button nicht gedrückt" vorliest, abhängig vom Wert von `aria-pressed`. Wenn das Design fordern würde, dass sich die Button-Beschriftung von "Stumm" zu "Unstumm" ändert, wäre ein Umschalt-Button nicht geeignet, sodass das Attribut `aria-pressed` weggelassen würde.

### Tastatur-Interaktionen

| Taste            | Funktion              |
| ---------------- | --------------------- |
| <kbd>Enter</kbd> | Aktiviert den Button. |
| <kbd>Space</kbd> | Aktiviert den Button  |

Nach der Button-Aktivierung wird der Fokus je nach Art der vom Button ausgeführten Aktion gesetzt. Beispielsweise sollte sich der Fokus auf den Dialog verschieben, wenn durch das Klicken auf den Button ein Dialog geöffnet wird. Wenn der Button einen Dialog schließt, sollte der Fokus wieder auf den Button verschoben werden, der den Dialog geöffnet hat, es sei denn, die im Dialogkontext ausgeführte Funktion führt logisch zu einem anderen Element. Wenn der Button den aktuellen Kontext ändert, wie z.B. das Stummschalten und Einschalten einer Audiodatei, bleibt der Fokus normalerweise auf dem Button.

### Erforderliche JavaScript-Funktionen

#### Erforderliche Ereignishandler

Buttons können von Maus-, Touch- und Tastaturbenutzern bedient werden. Bei nativen HTML-`<button>`-Elementen wird das `onclick`-Ereignis des Buttons ausgelöst bei Mausklicks und wenn der Benutzer die <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste drückt, während der Button den Fokus hat. Wenn jedoch ein anderes Tag verwendet wird, um einen Button zu erstellen, wird das `onclick`-Ereignis nur ausgelöst, wenn es durch den Mauszeiger angeklickt wird, auch wenn `role="button"` verwendet wird. Aus diesem Grund müssen separate Tasten-Ereignishandler zum Element hinzugefügt werden, damit der Button ausgelöst wird, wenn die <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste gedrückt wird.

- `onclick`
  - : Behandelt das Ereignis, das ausgelöst wird, wenn der Button durch einen Mausklick oder Berührungsereignis aktiviert wird.
- `onKeyDown`
  - : Behandelt das Ereignis, das ausgelöst wird, wenn der Button durch die Eingabe von Enter oder Space auf der Tastatur aktiviert wird. (Nicht zu verwechseln mit dem [veralteten onKeyPress](/de/docs/Web/API/Element/keypress_event))

## Beispiele

### Grundlegendes Button-Beispiel

In diesem Beispiel wurde einem `span`-Element die Rolle `button` gegeben. Da ein `<span>`-Element verwendet wird, ist das `tabindex`-Attribut erforderlich, um den Button fokussierbar und Teil der Tab-Reihenfolge der Seite zu machen. Der enthaltene CSS-Stil wird bereitgestellt, um das `<span>`-Element wie einen Button aussehen zu lassen und visuelle Hinweise zu bieten, wenn der Button den Fokus hat.

Die Ereignishandler `handleBtnClick` und `handleBtnKeyDown` führen die Aktion des Buttons aus, wenn sie durch Mausklick oder die <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste aktiviert wird. In diesem Fall ist die Aktion, einen neuen Namen zur Liste der Namen hinzuzufügen.

Probieren Sie das Beispiel aus, indem Sie einen Namen in das Textfeld eingeben. Der Button wird dafür sorgen, dass der Name in eine Liste hinzugefügt wird.

#### HTML

```html
<h1>ARIA Button Example</h1>
<ul id="nameList"></ul>
<label for="newName">Enter your Name: </label>
<input type="text" id="newName" />
<span role="button" tabindex="0">Add Name</span>
```

#### CSS

```css
[role="button"] {
  padding: 2px;
  background-color: navy;
  color: white;
  cursor: default;
}
[role="button"]:hover,
[role="button"]:focus,
[role="button"]:active {
  background-color: white;
  color: navy;
}
ul {
  list-style: none;
}
```

#### JavaScript

```js
function handleCommand(event) {
  // Handles both mouse clicks and keyboard
  // activate with Enter or Space

  // Key presses other than Enter and Space should not trigger a command
  if (
    event instanceof KeyboardEvent &&
    event.key !== "Enter" &&
    event.key !== " "
  ) {
    return;
  }

  // Get the new name value from the input element
  const newNameInput = document.getElementById("newName");
  const name = newNameInput.value;
  newNameInput.value = ""; // clear the text field
  newNameInput.focus(); // give the text field focus to enable entering and additional name.

  // Don't add blank entries to the list.
  if (name.length > 0) {
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(name));

    // Add the new name to the list.
    const list = document.getElementById("nameList");
    list.appendChild(listItem);
  }
}

const btn = document.querySelector("span[role='button']");
btn.addEventListener("click", handleCommand);
btn.addEventListener("keydown", handleCommand);
```

{{EmbedLiveSample("Basic_button_example")}}

### Umschalt-Button-Beispiel

In diesem Schnipsel wird ein {{HTMLElement("span")}}-Element mithilfe der Rolle `button` und dem Attribut `aria-pressed` in einen Umschalt-Button konvertiert. Wenn der Button aktiviert wird, wechselt der `aria-pressed`-Wert den Zustand; wechselt von `true` zu `false` und zurück.

#### HTML

```html
<button type="button">Mute Audio</button>

<span role="button" tabindex="0" aria-pressed="false"> Mute Audio </span>

<audio
  id="audio"
  src="https://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3">
  Your browser does not support the `audio` element.
</audio>
```

#### CSS

```css
button,
[role="button"] {
  padding: 3px;
  border: 2px solid transparent;
}

button:active,
button:focus,
[role="button"][aria-pressed="true"] {
  border: 2px solid black;
}
```

#### JavaScript

```js
function handleBtnClick(event) {
  toggleButton(event.target);
}

function handleBtnKeyDown(event) {
  // Check to see if space or enter were pressed
  // "Spacebar" for IE11 support
  if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
    // Prevent the default action to stop scrolling when space is pressed
    event.preventDefault();
    toggleButton(event.target);
  }
}

function toggleButton(element) {
  const audio = document.getElementById("audio");

  // Check to see if the button is pressed
  const pressed = element.getAttribute("aria-pressed") === "true";

  // Change aria-pressed to the opposite state
  element.setAttribute("aria-pressed", !pressed);

  // Toggle the play state of the audio file
  if (pressed) {
    audio.pause();
  } else {
    audio.play();
  }
}

const button = document.querySelector("button");
const spanButton = document.querySelector("span[role='button']");
button.addEventListener("click", handleBtnClick);
button.addEventListener("keydown", handleBtnKeyDown);
spanButton.addEventListener("click", handleBtnClick);
spanButton.addEventListener("keydown", handleBtnKeyDown);
```

#### Ergebnis

{{EmbedLiveSample('Toggle_button_example')}}

## Barrierefreiheitsbedenken

Buttons sind interaktive Steuerelemente und somit fokussierbar. Wenn die Rolle `button` zu einem Element hinzugefügt wird, das nicht von alleine fokussierbar ist (wie `<span>`, `<div>` oder `<p>`), dann muss das `tabindex`-Attribut verwendet werden, um den Button fokussierbar zu machen.

> [!WARNING]
> Seien Sie vorsichtig, wenn Sie Links mit der Rolle `button` markieren. Buttons sollen durch die <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste ausgelöst werden, während Links durch die <kbd>Enter</kbd>-Taste ausgelöst werden sollen. Mit anderen Worten, wenn Links verwendet werden, um wie Buttons zu funktionieren, reicht es nicht aus, nur `role="button"` hinzuzufügen. Es wird auch nötig sein, einen Tasten-Ereignishandler hinzuzufügen, der auf die <kbd>Space</kbd>-Taste hört, um mit nativen Buttons konsistent zu sein.

Wenn die Rolle `button` verwendet wird, kündigen Screenreader das Element als Button an und sagen im Allgemeinen "klicken" gefolgt vom zugänglichen Namen des Buttons. Der zugängliche Name ist entweder der Inhalt des Elements oder der Wert eines `aria-label` oder eines durch ein `aria-labelledby`-Attribut referenzierten Elements oder einer Beschreibung, falls enthalten.

## Beste Praktiken

Wenn ein Link die Aktion eines Buttons ausführt, hilft das Element mit `role="button"` Benutzern unterstützender Technologien dabei, die Funktion des Elements zu verstehen. Allerdings ist es eine bessere Lösung, das visuelle Design so anzupassen, dass es der Funktion und der ARIA-Rolle entspricht. Wo möglich, wird empfohlen, native HTML-Buttons (`<button>`, `<input type="button">`, `<input type="submit">`, `<input type="reset">` und `<input type="image">`) anstelle der Rolle `button` zu verwenden, da native HTML-Buttons von allen User Agents und unterstützender Technologie unterstützt werden und ohne zusätzliche Anpassungen Anforderungen an Tastatur und Fokus bieten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('button')}}-Element
- Das {{HTMLElement("input")}}-Element
- [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button)
- [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)
- [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset)
- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
- [Starke native Semantik in HTML5](https://html.spec.whatwg.org/multipage/dom.html#aria-usage-note)
- [Hinweise zur Verwendung von ARIA in HTML](https://w3c.github.io/using-aria/)
- [Offizieller WAI-ARIA-Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/)
