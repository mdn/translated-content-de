---
title: "ARIA: button-Rolle"
short-title: button
slug: Web/Accessibility/ARIA/Reference/Roles/button_role
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

Die `button`-Rolle ist für anklickbare Elemente, die bei Aktivierung durch den Benutzer eine Reaktion auslösen. Das Hinzufügen von `role="button"` teilt dem Screenreader mit, dass das Element ein Button ist, stellt jedoch keinerlei Button-Funktionalität bereit. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

## Beschreibung

Die `button`-Rolle identifiziert ein Element als Button für unterstützende Technologien wie Screenreader. Ein Button ist ein Widget, das Aktionen ausführt, wie das Absenden eines Formulars, das Öffnen eines Dialogs, das Abbrechen einer Aktion oder das Ausführen eines Befehls wie das Einfügen eines neuen Datensatzes oder das Anzeigen von Informationen. Das Hinzufügen von `role="button"` teilt unterstützenden Technologien mit, dass das Element ein Button ist, stellt jedoch keinerlei Button-Funktionalität bereit. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

Diese `button`-Rolle kann in Kombination mit dem [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)-Attribut verwendet werden, um [Umschalt-Buttons zu erstellen](#umschalt-buttons).

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Save</div>
```

Das obige Beispiel erstellt einen fokussierbaren Button, erfordert jedoch JavaScript und CSS, um das Erscheinungsbild und die Funktionalität des Buttons einzubeziehen. Diese Funktionen werden standardmäßig bereitgestellt, wenn Sie die Elemente {{HTMLElement("button")}} und {{HTMLElement("input")}} mit `type="button"` verwenden:

```html
<button type="button" id="saveChanges">Save</button>
```

> [!NOTE]
> Wenn Sie `role="button"` anstelle der semantischen `<button>`- oder `<input type="button">`-Elemente verwenden, müssen Sie das Element fokussierbar machen und Ereignishandler für [`click`](/de/docs/Web/API/Element/click_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignisse definieren. Dazu gehört das Handling der <kbd>Enter</kbd> und der <kbd>Space</kbd>-Tastendrücke, um alle Formen der Benutzereingabe zu verarbeiten. Siehe [den offiziellen WAI-ARIA-Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/).

Zusätzlich zu dem gewöhnlichen Button-Widget sollte `role="button"` hinzugefügt werden, wenn ein Umschalt-Button oder Menü-Button mit einem Nicht-Button-Element erstellt wird.

Ein Umschalt-Button ist ein Zwei-Zustands-Button, der entweder ausgeschaltet (nicht gedrückt) oder eingeschaltet (gedrückt) sein kann. Die [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)-Attributwerte `true` oder `false` identifizieren einen Button als Umschalt-Button.

Ein Menü-Button ist ein Button, der ein Menü steuert und ein [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)-Attribut entweder auf `menu` oder `true` gesetzt hat.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `button` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle untergeordneten Elemente eines `button`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie folgendes `button`-Element, das eine Überschrift enthält.

```html
<div role="button"><h3>Title of my button</h3></div>
```

Da Nachkommen von `button` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="button"><h3 role="presentation">Title of my button</h3></div>
```

Aus der Perspektive des Benutzers von unterstützenden Technologien existiert die Überschrift nicht, da die vorherigen Codeausschnitte im {{Glossary("Accessibility_tree", "Zugänglichkeit-Baum")}} dem folgenden gleichwertig sind:

```html
<div role="button">Title of my button</div>
```

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
  - : Das `aria-pressed`-Attribut definiert den Button als Umschalt-Button. Der Wert beschreibt den Zustand des Buttons. Die Werte umfassen `aria-pressed="false"`, wenn ein Button derzeit nicht gedrückt ist, `aria-pressed="true"`, um anzuzeigen, dass ein Button derzeit gedrückt ist, und `aria-pressed="mixed"`, wenn der Button als teilweise gedrückt betrachtet wird. Wenn das Attribut weggelassen oder auf seinen Standardwert `aria-pressed="undefined"` gesetzt wird, unterstützt das Element das Drücken nicht.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Wenn der Button eine Gruppierung anderer Elemente steuert, gibt der `aria-expanded`-Zustand an, ob die gesteuerte Gruppierung derzeit erweitert oder reduziert ist. Wenn der Button `aria-expanded="false"` gesetzt hat, ist die Gruppierung derzeit nicht erweitert; Wenn der Button `aria-expanded="true"` gesetzt hat, ist sie derzeit erweitert; wenn der Button `aria-expanded="undefined"` gesetzt hat oder das Attribut weggelassen wird, ist sie nicht erweiterbar.

### Grundlegende Buttons

Buttons sollten immer einen zugänglichen Namen haben. Für die meisten Buttons entspricht dieser Name dem Text innerhalb des Buttons, zwischen den öffnenden und schließenden Tags. In einigen Fällen, wie z. B. bei Buttons, die durch Symbole dargestellt werden, kann der zugängliche Name mithilfe der [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)- oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribute bereitgestellt werden.

### Umschalt-Buttons

Ein Umschalt-Button hat typischerweise zwei Zustände: gedrückt und nicht gedrückt. Ein dritter gemischter Zustand ist für Umschalt-Buttons verfügbar, die andere Elemente steuern, wie z. B. andere Umschalt-Buttons oder Kontrollkästchen, die nicht alle denselben Wert haben. Ob ein Element ein Umschalt-Button ist oder nicht, kann durch das [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)-Attribut zusätzlich zur `button`-Rolle angegeben werden (wenn das Element nicht bereits ein nativer Button ist):

- Wird `aria-pressed` nicht verwendet oder auf den "undefined"-Zustand gesetzt, ist der Button kein Umschalt-Button.
- Wird `aria-pressed="false"` verwendet, ist der Button ein Umschalt-Button, der derzeit nicht gedrückt ist.
- Wird `aria-pressed="true"` verwendet, ist der Button ein Umschalt-Button, der derzeit gedrückt ist.
- Wird `aria-pressed="mixed"` verwendet, gilt der Button als teilweise gedrückt.

Zum Beispiel könnte der Stumm-Button auf einem Audioplayer, der mit "Stumm" beschriftet ist, anzeigen, dass der Ton stummgeschaltet ist, indem der `aria-pressed`-Zustand auf wahr gesetzt wird. Das Label eines Umschalt-Buttons sollte sich nicht ändern, wenn sich sein Zustand ändert. In unserem Beispiel bleibt das Label "Stumm", wobei ein Screenreader "Stumm-Umschalt-Button gedrückt" oder "Stumm-Umschalt-Button nicht gedrückt" vorliest, abhängig vom Wert von `aria-pressed`. Wenn das Design vorsieht, dass sich das Button-Label von "Stumm" auf "Unmute" ändert, wäre ein Umschalt-Button nicht geeignet, sodass das `aria-pressed`-Attribut weggelassen würde.

### Tastaturinteraktionen

| Taste            | Funktion              |
| ---------------- | --------------------- |
| <kbd>Enter</kbd> | Aktiviert den Button. |
| <kbd>Space</kbd> | Aktiviert den Button  |

Nach der Aktivierung des Buttons wird der Fokus abhängig von der Art der Aktion, die der Button ausführt, gesetzt. Wenn z. B. das Klicken auf den Button einen Dialog öffnet, sollte der Fokus zum Dialog verschoben werden. Wenn der Button einen Dialog schließt, sollte der Fokus zu dem Button zurückkehren, der den Dialog geöffnet hat, es sei denn, die in dem Dialog durchgeführte Aktion führt logisch zu einem anderen Element. Wenn der Button den aktuellen Kontext ändert, z. B. durch Stummschalten und Aufheben der Stummschaltung einer Audiodatei, bleibt der Fokus in der Regel auf dem Button.

### Erforderliche JavaScript-Funktionen

#### Erforderliche Ereignishandler

Buttons können von Maus-, Touch- und Tastaturbenutzern bedient werden. Für native HTML `<button>`-Elemente wird das `onclick`-Ereignis des Buttons bei Mausklicks und wenn der Benutzer die <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste drückt, während der Button den Fokus hat, ausgelöst. Wird jedoch ein anderes Tag verwendet, um einen Button zu erstellen, wird das `onclick`-Ereignis nur ausgelöst, wenn mit dem Mauszeiger geklickt wird, selbst wenn `role="button"` verwendet wird. Aufgrund dessen müssen separate Tastenereignishandler hinzugefügt werden, damit der Button ausgelöst wird, wenn die <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste gedrückt wird.

- `onclick`
  - : Behandelt das Ereignis, das ausgelöst wird, wenn der Button durch einen Mausklick oder einen Touch-Ereignis aktiviert wird.
- `onKeyDown`
  - : Behandelt das Ereignis, das ausgelöst wird, wenn der Button durch Drücken der Enter- oder Space-Taste auf der Tastatur aktiviert wird. (Hinweis: nicht das [veraltete onKeyPress](/de/docs/Web/API/Element/keypress_event))

## Beispiele

### Beispiel für einen grundlegenden Button

In diesem Beispiel wurde einem `span`-Element die `button`-Rolle gegeben. Da ein `<span>`-Element verwendet wird, ist das `tabindex`-Attribut erforderlich, um den Button fokussierbar zu machen und in die Tabulatorreihenfolge der Seite aufzunehmen. Das enthaltene CSS-Stylesheet dient dazu, das `<span>`-Element wie einen Button aussehen zu lassen und visuelle Hinweise zu bieten, wenn der Button Fokus hat.

Die Ereignishandler `handleBtnClick` und `handleBtnKeyDown` führen die Aktion des Buttons aus, wenn dieser durch einen Mausklick oder die <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste aktiviert wird. In diesem Fall besteht die Aktion darin, einen neuen Namen zur Namensliste hinzuzufügen.

Versuchen Sie das Beispiel, indem Sie einen Namen in das Textfeld eingeben. Der Button bewirkt, dass der Name zur Liste hinzugefügt wird.

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

### Beispiel für einen Umschalt-Button

In diesem Ausschnitt wird ein {{HTMLElement("span")}}-Element mit der `button`-Rolle und dem `aria-pressed`-Attribut in einen Umschalt-Button umgewandelt. Wenn der Button aktiviert wird, wechselt der `aria-pressed`-Wert die Zustände; von `true` zu `false` und wieder zurück.

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
  border: 2px solid #000;
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

## Barrierefreiheitserwägungen

Buttons sind interaktive Steuerelemente und daher fokussierbar. Wenn die `button`-Rolle einem Element hinzugefügt wird, das von sich aus nicht fokussierbar ist (wie `<span>`, `<div>` oder `<p>`), muss das `tabindex`-Attribut verwendet werden, um den Button fokussierbar zu machen.

> [!WARNING]
> Seien Sie vorsichtig beim Markieren von Links mit der Buttonrolle. Buttons sollen durch die <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste ausgelöst werden, während Links durch die <kbd>Enter</kbd>-Taste ausgelöst werden sollen. Mit anderen Worten, wenn Links verwendet werden, um wie Buttons zu fungieren, reicht das Hinzufügen von `role="button"` allein nicht aus. Es wird auch notwendig sein, einen Tastenereignishandler hinzuzufügen, der auf die <kbd>Space</kbd>-Taste hört, um mit nativen Buttons konsistent zu sein.

Wenn die `button`-Rolle verwendet wird, kündigen Screenreader das Element als Button an, normalerweise mit "klicken" gefolgt vom zugänglichen Namen des Buttons. Der zugängliche Name ist entweder der Inhalt des Elements oder der Wert eines `aria-label`- oder eines Elements, das durch ein `aria-labelledby`-Attribut referenziert oder beschrieben wird, falls vorhanden.

## Best Practices

Wenn ein Link die Aktion eines Buttons ausführt, hilft das Geben des Elements `role="button"` Benutzern von unterstützenden Technologien, die Funktion des Elements zu verstehen. Eine bessere Lösung ist jedoch, das visuelle Design so anzupassen, dass es der Funktion und der ARIA-Rolle entspricht. Wo möglich, wird empfohlen, native HTML-Buttons zu verwenden (`<button>`, `<input type="button">`, `<input type="submit">`, `<input type="reset">` und `<input type="image">`) anstelle der `button`-Rolle, da native HTML-Buttons von allen User Agents und unterstützenden Technologien unterstützt werden und Tastatur- und Fokusanforderungen standardmäßig bereitstellen, ohne dass zusätzliche Anpassungen erforderlich sind.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('button')}}-Element
- Das {{HTMLElement("input")}}-Element
- [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button)
- [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)
- [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset)
- [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed)
- [`aria-expanded`](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded)
- [`aria-haspopup`](https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup)
- [Starke native Semantik in HTML5](https://html.spec.whatwg.org/multipage/dom.html#aria-usage-note)
- [Hinweise zur Verwendung von ARIA in HTML](https://www.w3.org/TR/aria-in-html/)
- [Offizieller WAI-ARIA-Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/)
