---
title: "ARIA: button Rolle"
slug: Web/Accessibility/ARIA/Roles/button_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `button` Rolle ist für klickbare Elemente, die eine Reaktion auslösen, wenn sie vom Benutzer aktiviert werden. Durch das Hinzufügen von `role="button"` teilt man dem Screenreader mit, dass das Element ein Button ist, bietet jedoch keine Button-Funktionalität. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

## Beschreibung

Die button Rolle kennzeichnet ein Element als Button für unterstützende Technologien wie Screenreader. Ein Button ist ein Widget, das Aktionen wie das Einreichen eines Formulars, das Öffnen eines Dialogs, das Abbrechen einer Aktion oder das Ausführen eines Befehls wie das Einfügen eines neuen Eintrags oder das Anzeigen von Informationen ausführt. Durch das Hinzufügen von `role="button"` teilt man unterstützenden Technologien mit, dass das Element ein Button ist, bietet jedoch keine Button-Funktionalität. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

Diese `button` Rolle kann in Kombination mit dem [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) Attribut verwendet werden, um [Umschalt-Buttons zu erstellen](#umschalt-buttons).

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Save</div>
```

Das obige Beispiel erstellt einen fokussierbaren Button, erfordert jedoch JavaScript und CSS, um das Erscheinungsbild und die Funktionalität des Buttons einzubinden. Diese Funktionen werden standardmäßig bereitgestellt, wenn die {{HTMLElement("button")}} und {{HTMLElement("input")}} mit den `type="button"` Elementen verwendet werden:

```html
<button type="button" id="saveChanges">Save</button>
```

> [!NOTE]
> Wenn `role="button"` anstelle der semantischen `<button>`- oder `<input type="button">`-Elemente verwendet wird, müssen Sie das Element fokussierbar machen und Ereignis-Handler für die [`click`](/de/docs/Web/API/Element/click_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignisse definieren. Dies beinhaltet das Handhaben der <kbd>Enter</kbd> und <kbd>Leertaste</kbd>-Tastendrücke, um alle Formen der Benutzereingabe zu verarbeiten. Siehe [den offiziellen WAI-ARIA Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/).

Neben dem normalen Button-Widget sollte `role="button"` enthalten sein, wenn ein Umschalt-Button oder Menü-Button unter Verwendung eines Nicht-Button-Elements erstellt wird.

Ein Umschalt-Button ist ein Zweizustands-Button, der entweder ausgeschaltet (nicht gedrückt) oder eingeschaltet (gedrückt) sein kann. Die Werte des [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) Attributs `true` oder `false` kennzeichnen einen Button als Umschalt-Button.

Ein Menü-Button ist ein Button, der ein Menü steuert und das [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) Eigenschafts-Attribut entweder auf `menu` oder `true` gesetzt hat.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `button` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines `button` Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel, betrachten Sie das folgende `button` Element, das eine Überschrift enthält.

```html
<div role="button"><h3>Title of my button</h3></div>
```

Da Nachkommen eines `button` präsentational sind, ist folgender Code äquivalent:

```html
<div role="button"><h3 role="presentation">Title of my button</h3></div>
```

Aus der Perspektive des Benutzers unterstützender Technologie existiert die Überschrift nicht, da die vorhergehenden Code-Snippets gleichwertig sind mit dem folgenden im [Zugänglichkeitsbaum](/de/docs/Glossary/Accessibility_tree):

```html
<div role="button">Title of my button</div>
```

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
  - : Das `aria-pressed` Attribut definiert den Button als Umschalt-Button. Der Wert beschreibt den Zustand des Buttons. Die Werte beinhalten `aria-pressed="false"` wenn ein Button derzeit nicht gedrückt ist, `aria-pressed="true"` um anzuzeigen, dass ein Button derzeit gedrückt ist, und `aria-pressed="mixed"` falls der Button als teilweise gedrückt betrachtet wird. Wenn das Attribut weggelassen oder auf seinen Standardwert `aria-pressed="undefined"` gesetzt wird, unterstützt das Element nicht das Gedrücktzustand-Sein.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Wenn der Button eine Gruppierung anderer Elemente steuert, gibt der `aria-expanded` Zustand an, ob die gesteuerte Gruppierung derzeit erweitert oder reduziert ist. Wenn der Button `aria-expanded="false"` gesetzt hat, ist die Gruppierung derzeit nicht erweitert; Wenn der Button `aria-expanded="true"` gesetzt hat, ist er derzeit erweitert; wenn der Button `aria-expanded="undefined"` gesetzt hat oder das Attribut weggelassen wird, ist er nicht erweiterbar.

### Grundlegende Buttons

Buttons sollten immer einen zugänglichen Namen haben. Bei den meisten Buttons ist dieser Name derselbe wie der Text innerhalb des Buttons, zwischen den öffnenden und schließenden Tags. In einigen Fällen, beispielsweise bei Buttons, die durch Symbole dargestellt werden, kann der zugängliche Name über die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) Attribute bereitgestellt werden.

### Umschalt-Buttons

Ein Umschalt-Button hat normalerweise zwei Zustände: gedrückt und nicht gedrückt. Ein dritter gemischter Zustand ist verfügbar für Umschalt-Buttons, die andere Elemente steuern, wie andere Umschalt-Buttons oder Kontrollkästchen, die nicht alle denselben Wert teilen. Ob ein Element ein Umschalt-Button ist oder nicht, kann zusätzlich zur `button` Rolle (wenn das Element nicht bereits ein nativer Button ist) mit dem [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) Attribut angezeigt werden:

- Wenn `aria-pressed` nicht verwendet wird oder auf den Zustand "undefined" gesetzt ist, ist der Button kein Umschalt-Button.
- Wenn `aria-pressed="false"` verwendet wird, ist der Button ein Umschalt-Button, der derzeit nicht gedrückt ist.
- Wenn `aria-pressed="true"` verwendet wird, ist der Button ein Umschalt-Button, der derzeit gedrückt ist.
- wenn `aria-pressed="mixed"` verwendet wird, wird der Button als teilweise gedrückt betrachtet.

Als Beispiel könnte der Stummschalt-Button eines Audio-Players, beschriftet mit "stumm", durch das Setzen des `aria-pressed` Zustands auf true anzeigen, dass der Ton stummgeschaltet ist. Die Beschriftung eines Umschalt-Buttons sollte sich nicht ändern, wenn sich sein Zustand ändert. In unserem Beispiel bleibt die Beschriftung "Stumm", wobei ein Screenreader "Stumm Umschalt-Button gedrückt" oder "Stumm Umschalt-Button nicht gedrückt" abhängig vom Wert von `aria-pressed` liest. Wenn das Design vorsieht, dass sich die Beschriftung des Buttons von "Stumm" auf "Stumm aufheben" ändert, wäre ein Umschalt-Button nicht geeignet, daher würde das `aria-pressed` Attribut weggelassen.

### Tastaturinteraktionen

| Taste             | Funktion                    |
| ----------------- | --------------------------- |
| <kbd>Enter</kbd>  | Aktiviert den Button.       |
| <kbd>Leertaste</kbd> | Aktiviert den Button        |

Nach der Aktivierung des Buttons wird der Fokus je nach Art der Aktion, die der Button ausführt, gesetzt. Wenn der Klick auf den Button beispielsweise einen Dialog öffnet, sollte der Fokus auf den Dialog verschoben werden. Wenn der Button einen Dialog schließt, sollte der Fokus zu dem Button zurückkehren, der den Dialog geöffnet hat, es sei denn, die Funktion, die im Kontext des Dialogs ausgeführt wurde, führt logisch zu einem anderen Element. Wenn der Button den aktuellen Kontext verändert, wie das Stummschalten oder Aufheben der Stummschaltung einer Audiodatei, bleibt der Fokus typischerweise auf dem Button.

### Erforderliche JavaScript-Funktionen

#### Erforderliche Ereignis-Handler

Buttons können von Maus-, Touch- und Tastaturnutzern genutzt werden. Für native HTML `<button>` Elemente wird das `onclick` Ereignis des Buttons ausgelöst, wenn ein Mausklick erfolgt oder wenn der Benutzer die <kbd>Leertaste</kbd> oder <kbd>Enter</kbd> drückt, während der Button den Fokus hat. Wenn jedoch ein anderes Tag verwendet wird, um einen Button zu erstellen, feuert das `onclick` Ereignis nur dann, wenn es mit dem Mauszeiger angeklickt wird, selbst wenn `role="button"` verwendet wird. Daher müssen separate Tasten-Ereignis-Handler dem Element hinzugefügt werden, damit der Button ausgelöst wird, wenn die <kbd>Leertaste</kbd> oder die <kbd>Enter</kbd> Taste gedrückt wird.

- `onclick`
  - : Behandelt das Ereignis, das ausgelöst wird, wenn der Button durch einen Mausklick oder ein Touch-Ereignis aktiviert wird.
- `onKeyDown`
  - : Behandelt das Ereignis, das ausgelöst wird, wenn der Button mittels der Enter- oder Leertaste auf der Tastatur aktiviert wird. (Hinweis: nicht das [veraltete onKeyPress](/de/docs/Web/API/Element/keypress_event))

## Beispiele

### Einfaches Button-Beispiel

In diesem Beispiel wurde einem `span` Element die `button` Rolle zugewiesen. Da ein `<span>` Element verwendet wird, ist das `tabindex` Attribut erforderlich, um den Button fokussierbar zu machen und Teil der Tab-Reihenfolge der Seite zu sein. Der enthaltene CSS-Stil sorgt dafür, dass das `<span>` Element wie ein Button aussieht und visuelle Hinweise bietet, wenn der Button den Fokus hat.

Die `handleBtnClick` und `handleBtnKeyDown` Ereignis-Handler führen die Aktion des Buttons aus, wenn er durch Klick der Maus oder die <kbd>Leertaste</kbd> oder <kbd>Enter</kbd> Taste aktiviert wird. In diesem Fall besteht die Aktion darin, einen neuen Namen zur Namensliste hinzuzufügen.

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

  // Keypresses other then Enter and Space should not trigger a command
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

### Umschalt-Button-Beispiel

In diesem Snippet wird ein {{HTMLElement("span")}} Element in einen Umschalt-Button umgewandelt, indem die `button` Rolle und das `aria-pressed` Attribut verwendet werden. Wenn der Button aktiviert wird, wechselt der `aria-pressed` Wert die Zustände; er wechselt von `true` zu `false` und umgekehrt.

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

## Barrierefreiheitsbedenken

Buttons sind interaktive Steuerelemente und daher fokussierbar. Wenn die `button` Rolle einem Element hinzugefügt wird, das selbst nicht fokussierbar ist (wie `<span>`, `<div>` oder `<p>`), dann muss das `tabindex` Attribut verwendet werden, um den Button fokussierbar zu machen.

> [!WARNING]
> Seien Sie vorsichtig, wenn Sie Links mit der Button-Rolle auszeichnen. Von Buttons wird erwartet, dass sie mit der <kbd>Leertaste</kbd> oder der <kbd>Enter</kbd> Taste ausgelöst werden, während Links erwartungsgemäß mit der <kbd>Enter</kbd> Taste ausgelöst werden. Mit anderen Worten, wenn Links so verwendet werden, dass sie sich wie Buttons verhalten, reicht das Hinzufügen von `role="button"` allein nicht aus. Es ist auch notwendig, einen Tasten-Ereignis-Handler hinzuzufügen, der auf die <kbd>Leertaste</kbd> hört, um mit nativen Buttons konsistent zu sein.

Wenn die `button` Rolle verwendet wird, kündigen Screenreader das Element als Button an und sagen in der Regel "klicken" gefolgt von dem zugänglichen Namen des Buttons. Der zugängliche Name ist entweder der Inhalt des Elements oder der Wert eines `aria-label` oder des durch ein `aria-labelledby` Attribut referenzierten Elements, oder Beschreibung, falls enthalten.

## Beste Praktiken

Wenn ein Link die Aktion eines Buttons ausführt, hilft das Hinzufügen des `role="button"` Attributs Benutzern von unterstützenden Technologien, die Funktion des Elements zu verstehen. Eine bessere Lösung ist jedoch, das visuelle Design so anzupassen, dass es der Funktion und der ARIA-Rolle entspricht. Wenn möglich, wird empfohlen, native HTML-Buttons (`<button>`, `<input type="button">`, `<input type="submit">`, `<input type="reset">` und `<input type="image">`) anstelle der `button` Rolle zu verwenden, da native HTML-Buttons von allen Benutzeragenten und unterstützenden Technologien unterstützt werden und standardmäßig Tastatur- und Fokusanforderungen bereitstellen, ohne dass zusätzliche Anpassungen erforderlich sind.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('button')}} Element
- Das {{HTMLElement("input")}} Element
- [`<input type="button">`](/de/docs/Web/HTML/Element/input/button)
- [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit)
- [`<input type="reset">`](/de/docs/Web/HTML/Element/input/reset)
- [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed)
- [`aria-expanded`](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded)
- [`aria-haspopup`](https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup)
- [Starke native Semantik in HTML5](https://html.spec.whatwg.org/multipage/dom.html#aria-usage-note)
- [Hinweise zur Verwendung von ARIA in HTML](https://www.w3.org/TR/aria-in-html/)
- [Offizieller WAI-ARIA Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/)
