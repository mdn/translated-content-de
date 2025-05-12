---
title: "ARIA: button role"
short-title: button
slug: Web/Accessibility/ARIA/Reference/Roles/button_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `button` Rolle ist für anklickbare Elemente vorgesehen, die eine Reaktion auslösen, wenn sie vom Benutzer aktiviert werden. Das Hinzufügen von `role="button"` teilt dem Screenreader mit, dass das Element ein Button ist, bietet jedoch keine Button-Funktionalität. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

## Beschreibung

Die `button` Rolle kennzeichnet ein Element als Button für unterstützende Technologien wie Screenreader. Ein Button ist ein Widget, das verwendet wird, um Aktionen wie das Absenden eines Formulars, das Öffnen eines Dialogs, das Abbrechen einer Aktion oder das Ausführen eines Befehls wie das Einfügen eines neuen Datensatzes oder das Anzeigen von Informationen auszuführen. Das Hinzufügen von `role="button"` teilt unterstützenden Technologien mit, dass das Element ein Button ist, bietet jedoch keine Button-Funktionalität. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

Diese `button` Rolle kann in Kombination mit dem [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) Attribut verwendet werden, um [Umschalter-Buttons zu erstellen](#umschalter-buttons).

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Save</div>
```

Das obige Beispiel erstellt einen fokussierbaren Button, benötigt jedoch JavaScript und CSS, um das Aussehen und die Funktionalität des Buttons einzuschließen. Diese Funktionen werden standardmäßig bereitgestellt, wenn die {{HTMLElement("button")}} und {{HTMLElement("input")}} mit `type="button"` Elemente verwendet werden:

```html
<button type="button" id="saveChanges">Save</button>
```

> [!NOTE]
> Wenn `role="button"` anstelle der semantischen `<button>` oder `<input type="button">` Elemente verwendet wird, müssen Sie das Element fokussierbar machen und Ereignishandler für [`click`](/de/docs/Web/API/Element/click_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignisse definieren. Dazu gehört das Verarbeiten der <kbd>Enter</kbd> und <kbd>Leertaste</kbd> Tastendrücke, um alle Formen der Benutzereingabe zu verarbeiten. Siehe [das offizielle WAI-ARIA Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/).

Zusätzlich zu dem gewöhnlichen Button-Widget sollte `role="button"` enthalten sein, wenn ein Umschalter-Button oder ein Menü-Button mit einem Nicht-Button-Element erstellt wird.

Ein Umschalter-Button ist ein Zweistellungsschalter, der entweder aus (nicht gedrückt) oder an (gedrückt) sein kann. Die [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) Attributswerte von `true` oder `false` kennzeichnen einen Button als Umschalter-Button.

Ein Menü-Button ist ein Button, der ein Menü steuert und eine [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) Eigenschaft hat, die auf entweder `menu` oder `true` gesetzt ist.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibility-API dargestellt werden, nur Text enthalten können. Accessibility-APIs haben keine Möglichkeit, semantische Elemente, die in einem `button` enthalten sind, darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines beliebigen `button` Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie beispielsweise das folgende `button` Element, das eine Überschrift enthält.

```html
<div role="button"><h3>Title of my button</h3></div>
```

Da Nachkommen von `button` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="button"><h3 role="presentation">Title of my button</h3></div>
```

Aus Sicht des Benutzers von unterstützenden Technologien existiert die Überschrift nicht, da die vorherigen Code-Beispiele dem folgenden im {{Glossary("Accessibility_tree", "Accessibility-Tree")}} entsprechen:

```html
<div role="button">Title of my button</div>
```

### Zugehörige ARIA Rollen, Zustände und Eigenschaften

- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
  - : Das `aria-pressed` Attribut definiert den Button als Umschalter-Button. Der Wert beschreibt den Zustand des Buttons. Zu den Werten gehören `aria-pressed="false"` wenn ein Button momentan nicht gedrückt ist, `aria-pressed="true"` um anzuzeigen, dass ein Button aktuell gedrückt ist, und `aria-pressed="mixed"` wenn der Button als teilweise gedrückt angesehen wird. Wenn das Attribut weggelassen oder auf den Standardwert `aria-pressed="undefined"` gesetzt ist, unterstützt das Element kein Drücken.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Wenn der Button eine Gruppierung von anderen Elementen steuert, zeigt der `aria-expanded` Zustand an, ob die gesteuerte Gruppierung aktuell erweitert oder eingeklappt ist. Wenn der Button `aria-expanded="false"` gesetzt hat, ist die Gruppierung aktuell nicht erweitert; Wenn der Button `aria-expanded="true"` gesetzt hat, ist sie aktuell erweitert; Wenn der Button `aria-expanded="undefined"` gesetzt hat oder das Attribut fehlt, ist sie nicht erweiterbar.

### Grundlegende Buttons

Buttons sollten immer einen zugänglichen Namen haben. Für die meisten Buttons wird dieser Name der gleiche wie der Text innerhalb des Buttons sein, zwischen den öffnenden und schließenden Tags. In einigen Fällen, z. B. bei Buttons, die durch Symbole dargestellt werden, kann der zugängliche Name über die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribute bereitgestellt werden.

### Umschalter-Buttons

Ein Umschalter-Button hat typischerweise zwei Zustände: gedrückt und nicht gedrückt. Ein dritter gemischter Zustand ist für Umschalter-Buttons verfügbar, die andere Elemente steuern, wie z.B. andere Umschalter-Buttons oder Checkboxen, die nicht alle denselben Wert teilen. Ob ein Element ein Umschalter-Button ist oder nicht, kann mit dem [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) Attribut neben der `button` Rolle angegeben werden (falls das Element nicht bereits ein nativer Button ist):

- Wenn `aria-pressed` nicht verwendet wird oder auf den "undefined" Zustand gesetzt ist, ist der Button kein Umschalter-Button.
- Wenn `aria-pressed="false"` verwendet wird, ist der Button ein Umschalter-Button, der aktuell nicht gedrückt ist.
- Wenn `aria-pressed="true"` verwendet wird, ist der Button ein Umschalter-Button, der aktuell gedrückt ist.
- Wenn `aria-pressed="mixed"` verwendet wird, wird der Button als teilweise gedrückt betrachtet.

Zum Beispiel könnte der Stummschalter-Button auf einem Audioplayer, der "mute" beschriftet ist, anzeigen, dass der Ton stummgeschaltet ist, indem der `aria-pressed` Zustand auf true gesetzt wird. Das Label eines Umschalter-Buttons sollte sich nicht ändern, wenn sich sein Zustand ändert. In unserem Beispiel bleibt das Label "Mute", wobei ein Screenreader "Stummschalter-Button gedrückt" oder "Stummschalter-Button nicht gedrückt" je nach Wert von `aria-pressed` vorliest. Wenn das Design verlangen würde, dass das Button-Label sich von "Mute" zu "Unmute" ändert, wäre ein Umschalter-Button nicht geeignet, sodass das `aria-pressed` Attribut weggelassen würde.

### Tastatur-Interaktionen

| Taste                | Funktion              |
| -------------------- | --------------------- |
| <kbd>Enter</kbd>     | Aktiviert den Button. |
| <kbd>Leertaste</kbd> | Aktiviert den Button  |

Nach der Aktivierung des Buttons wird der Fokus je nach Art der Aktion, die der Button ausführt, gesetzt. Zum Beispiel, wenn das Klicken des Buttons einen Dialog öffnet, sollte der Fokus auf den Dialog verschoben werden. Wenn der Button einen Dialog schließt, sollte der Fokus auf den Button zurückkehren, der den Dialog geöffnet hat, es sei denn, die im Dialogkontext ausgeführte Funktion führt logisch zu einem anderen Element. Wenn der Button den aktuellen Kontext ändert, wie das Stummschalten und Aufheben der Stummschaltung einer Audiodatei, bleibt der Fokus typischerweise auf dem Button.

### Erforderliche JavaScript-Funktionen

#### Erforderliche Ereignishandler

Buttons können von Maus-, Touch- und Tastaturbenutzern bedient werden. Für native HTML `<button>` Elemente wird das `onclick` Ereignis des Buttons ausgelöst, wenn Mausklicks ausgeführt werden und wenn der Benutzer die <kbd>Leertaste</kbd> oder <kbd>Enter</kbd> drückt, während der Button den Fokus hat. Wenn jedoch ein anderes Tag verwendet wird, um einen Button zu erstellen, wird das `onclick` Ereignis nur ausgelöst, wenn es vom Mauszeiger angeklickt wird, selbst wenn `role="button"` verwendet wird. Aufgrund dessen müssen separate Tastaturereignishandler dem Element hinzugefügt werden, so dass der Button bei Drücken der <kbd>Leertaste</kbd> oder <kbd>Enter</kbd> Taste ausgelöst wird.

- `onclick`
  - : Behandelt das Ereignis, das ausgelöst wird, wenn der Button durch einen Mausklick oder Touch-Ereignis aktiviert wird.
- `onKeyDown`
  - : Behandelt das Ereignis, das ausgelöst wird, wenn der Button unter Verwendung der Enter- oder Leertaste auf der Tastatur aktiviert wird. (Hinweis: nicht das [veraltete onKeyPress](/de/docs/Web/API/Element/keypress_event))

## Beispiele

### Grundlegendes Button-Beispiel

In diesem Beispiel wurde einem span-Element die `button` Rolle zugewiesen. Da ein `<span>` Element verwendet wird, wird das `tabindex` Attribut benötigt, um den Button fokussierbar zu machen und Teil der Tab-Reihenfolge der Seite zu sein. Der enthaltene CSS-Stil ist vorgesehen, um das `<span>` Element wie einen Button aussehen zu lassen und visuelle Hinweise zu geben, wenn der Button den Fokus hat.

Die `handleBtnClick` und `handleBtnKeyDown` Ereignishandler führen die Aktion des Buttons aus, wenn er durch einen Mausklick oder die <kbd>Leertaste</kbd> oder <kbd>Enter</kbd> Taste aktiviert wird. In diesem Fall besteht die Aktion darin, einen neuen Namen zur Liste der Namen hinzuzufügen.

Probieren Sie das Beispiel aus, indem Sie einen Namen in das Textfeld eingeben. Der Button wird den Namen zur Liste hinzufügen.

#### HTML

```html
<h1>ARIA Button Example</h1>
<ul id="nameList"></ul>
<label for="newName">Enter your Name: </label>
<input type="text" id="newName" />
<span
  role="button"
  tabindex="0"
  onclick="handleCommand(event)"
  onKeyDown="handleCommand(event)"
  >Add Name</span
>
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
```

{{EmbedLiveSample("Basic_button_example")}}

### Umschalter-Button-Beispiel

In diesem Ausschnitt wird ein {{HTMLElement("span")}} Element mit der `button` Rolle und dem `aria-pressed` Attribut in einen Umschalter-Button umgewandelt. Wenn der Button aktiviert wird, wechselt der `aria-pressed` Wert die Zustände; von `true` zu `false` und zurück.

#### HTML

```html
<button
  type="button"
  onclick="handleBtnClick(event)"
  onKeyDown="handleBtnKeyDown(event)">
  Mute Audio
</button>

<span
  role="button"
  tabindex="0"
  aria-pressed="false"
  onclick="handleBtnClick(event)"
  onKeyDown="handleBtnKeyDown(event)">
  Mute Audio
</span>

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
```

#### Ergebnis

{{EmbedLiveSample('Toggle_button_example')}}

## Barrierefreiheitsthemen

Buttons sind interaktive Steuerelemente und daher fokussierbar. Wenn die `button` Rolle zu einem Element hinzugefügt wird, das von sich aus nicht fokussierbar ist (wie `<span>`, `<div>` oder `<p>`), dann muss das `tabindex` Attribut verwendet werden, um den Button fokussierbar zu machen.

> [!WARNING]
> Seien Sie vorsichtig, wenn Sie Links mit der Button-Rolle auszeichnen. Von Buttons wird erwartet, dass sie über die <kbd>Leertaste</kbd> oder <kbd>Enter</kbd> Taste ausgelöst werden, während Links über die <kbd>Enter</kbd> Taste erwartet werden. Mit anderen Worten, wenn Links dazu verwendet werden, wie Buttons zu agieren, reicht das Hinzufügen von `role="button"` alleine nicht aus. Es wird auch notwendig sein, einen Tastenereignishandler hinzuzufügen, der auf die <kbd>Leertaste</kbd> Taste hört, um mit nativen Buttons konsistent zu sein.

Wenn die `button` Rolle verwendet wird, kündigen Screenreader das Element als Button an und sagen im Allgemeinen "klicken" gefolgt vom zugänglichen Namen des Buttons. Der zugängliche Name ist entweder der Inhalt des Elements oder der Wert eines `aria-label` oder des durch ein `aria-labelledby` Attribut referenzierten Elements oder einer Beschreibung, falls enthalten.

## Best Practices

Wenn ein Link die Aktion eines Buttons ausführt, hilft `role="button"` den Benutzern von unterstützenden Technologien, die Funktion des Elements zu verstehen. Eine bessere Lösung besteht jedoch darin, das visuelle Design so anzupassen, dass es mit der Funktion und der ARIA-Rolle übereinstimmt. Wo immer möglich, wird empfohlen, native HTML-Buttons (`<button>`, `<input type="button">`, `<input type="submit">`, `<input type="reset">` und `<input type="image">`) anstelle der `button` Rolle zu verwenden, da native HTML-Buttons von allen Benutzeragenten und unterstützenden Technologien unterstützt werden und Tastatur- und Fokusanforderungen standardmäßig bereitstellen, ohne dass zusätzliche Anpassungen erforderlich sind.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('button')}} Element
- Das {{HTMLElement("input")}} Element
- [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button)
- [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)
- [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset)
- [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed)
- [`aria-expanded`](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded)
- [`aria-haspopup`](https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup)
- [Starke native Semantik in HTML5](https://html.spec.whatwg.org/multipage/dom.html#aria-usage-note)
- [Hinweise zur Verwendung von ARIA in HTML](https://www.w3.org/TR/aria-in-html/)
- [Offizieller WAI-ARIA Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/)
