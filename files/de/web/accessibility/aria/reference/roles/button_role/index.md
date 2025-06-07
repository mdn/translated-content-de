---
title: "ARIA: button-Rolle"
short-title: button
slug: Web/Accessibility/ARIA/Reference/Roles/button_role
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

Die `button`-Rolle ist für anklickbare Elemente gedacht, die eine Reaktion auslösen, wenn sie vom Benutzer aktiviert werden. Das Hinzufügen von `role="button"` teilt dem Screenreader mit, dass das Element ein Button ist, bietet jedoch keine Button-Funktionalität. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

## Beschreibung

Die button-Rolle identifiziert ein Element als Button für Assistenztechnologien wie Screenreader. Ein Button ist ein Widget, das verwendet wird, um Aktionen auszuführen, wie z.B. das Absenden eines Formulars, das Öffnen eines Dialogs, das Abbrechen einer Aktion oder das Ausführen eines Befehls wie das Einfügen eines neuen Datensatzes oder das Anzeigen von Informationen. Das Hinzufügen von `role="button"` teilt Assistenztechnologien mit, dass das Element ein Button ist, bietet jedoch keine Button-Funktionalität. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

Diese `button`-Rolle kann in Kombination mit dem [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)-Attribut verwendet werden, um [Umschalt-Buttons zu erstellen](#toggle-buttons).

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Save</div>
```

Das obige Beispiel erstellt einen fokussierbaren Button, erfordert jedoch JavaScript und CSS, um das Erscheinungsbild und die Funktionalität eines Buttons einzubeziehen. Diese Funktionen werden standardmäßig bereitgestellt, wenn die {{HTMLElement("button")}}- und {{HTMLElement("input")}}-Elemente mit `type="button"` verwendet werden:

```html
<button type="button" id="saveChanges">Save</button>
```

> [!NOTE]
> Wenn Sie `role="button"` anstelle der semantischen `<button>`- oder `<input type="button">`-Elemente verwenden, müssen Sie das Element fokussierbar machen und Ereignishandler für [`click`](/de/docs/Web/API/Element/click_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignisse definieren. Dies beinhaltet die Verarbeitung der <kbd>Enter</kbd> und <kbd>Space</kbd>-Tastenanschläge, um alle Formen der Benutzereingabe zu verarbeiten. Siehe [den offiziellen WAI-ARIA Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/).

Zusätzlich zum gewöhnlichen Button-Widget sollte `role="button"` enthalten sein, wenn ein Toggle-Button oder Menü-Button unter Verwendung eines Nicht-Button-Elements erstellt wird.

Ein Toggle-Button ist ein Zwei-Zustand-Button, der entweder aus (nicht gedrückt) oder an (gedrückt) sein kann. Die `aria-pressed`-Attributwerte `true` oder `false` kennzeichnen einen Button als Toggle-Button.

Ein Menü-Button ist ein Button, der ein Menü steuert und das `aria-haspopup`-Eigenschafts-Attribut entweder auf `menu` oder `true` gesetzt hat.

### Alle Nachkommen sind ohne Darstellung

Es gibt einige Arten von Benutzeroberflächen-Komponenten, die, wenn sie in einer Plattformzugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem Button enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle `presentation` auf alle nachfolgenden Elemente eines beliebigen `button`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel sei das folgende `button`-Element betrachtet, das eine Überschrift enthält.

```html
<div role="button"><h3>Title of my button</h3></div>
```

Da die Nachfolger von `button` ohne Darstellung sind, ist der folgende Code gleichwertig:

```html
<div role="button"><h3 role="presentation">Title of my button</h3></div>
```

Aus der Sicht des Benutzers von Assistenztechnologien existiert die Überschrift nicht, da die vorherigen Code-Snippets äquivalent zum Folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} sind:

```html
<div role="button">Title of my button</div>
```

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
  - : Das `aria-pressed`-Attribut definiert den Button als Toggle-Button. Der Wert beschreibt den Zustand des Buttons. Die Werte beinhalten `aria-pressed="false"`, wenn ein Button momentan nicht gedrückt ist, `aria-pressed="true`, um anzuzeigen, dass ein Button momentan gedrückt ist, und `aria-pressed="mixed"`, wenn der Button als teilweise gedrückt betrachtet wird. Wenn das Attribut weggelassen wird oder auf seinen Standardwert `aria-pressed="undefined"` gesetzt wird, unterstützt das Element das Drücken nicht.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Wenn der Button eine Gruppierung anderer Elemente steuert, zeigt der `aria-expanded`-Zustand an, ob die gesteuerte Gruppierung derzeit erweitert oder eingeklappt ist. Wenn der Button `aria-expanded="false"` gesetzt hat, ist die Gruppierung derzeit nicht erweitert; Wenn der Button `aria-expanded="true"` gesetzt hat, ist sie derzeit erweitert; Wenn der Button `aria-expanded="undefined"` gesetzt oder das Attribut weggelassen ist, ist sie nicht erweiterbar.

### Grundlegende Buttons

Buttons sollten immer einen zugänglichen Namen haben. Bei den meisten Buttons entspricht dieser Name dem Text innerhalb des Buttons zwischen den Öffnungs- und Schließ-Tags. In einigen Fällen, etwa bei durch Symbole dargestellten Buttons, kann der zugängliche Name über die `aria-label`- oder `aria-labelledby`-Attribute bereitgestellt werden.

### Toggle-Buttons

Ein Toggle-Button hat typischerweise zwei Zustände: gedrückt und nicht gedrückt. Ein dritter gemischter Zustand ist für Toggle-Buttons verfügbar, die andere Elemente steuern, wie andere Toggle-Buttons oder Kontrollkästchen, die nicht alle denselben Wert teilen. Ob ein Element ein Toggle-Button ist oder nicht, kann mit dem `aria-pressed`-Attribut in Verbindung mit der `button`-Rolle angezeigt werden (wenn das Element nicht bereits ein nativer Button ist):

- Wenn `aria-pressed` nicht verwendet wird oder auf den "undefined"-Zustand gesetzt ist, ist der Button kein Toggle-Button.
- Wenn `aria-pressed="false"` verwendet wird, ist der Button ein Toggle-Button, der momentan nicht gedrückt ist.
- Wenn `aria-pressed="true"` verwendet wird, ist der Button ein Toggle-Button, der momentan gedrückt ist.
- Wenn `aria-pressed="mixed"` verwendet wird, wird der Button als teilweise gedrückt betrachtet.

Zum Beispiel könnte der Stummschalts-Button auf einem Audioplayer, der mit "Stummschalten" beschriftet ist, anzeigen, dass der Ton stummgeschaltet ist, indem der `aria-pressed`-Zustand auf true gesetzt wird. Das Label eines Toggle-Buttons sollte sich nicht ändern, wenn sich sein Zustand ändert. In unserem Beispiel bleibt das Label "Stummschalten", wobei ein Screenreader "Stummschalten Umschalt-Button gedrückt" oder "Stummschalten Umschalt-Button nicht gedrückt" je nach Wert von `aria-pressed` liest. Wenn das Design erfordern würde, das Button-Label von "Stummschalten" zu "Stummschaltung aufheben" zu ändern, wäre ein Toggle-Button nicht geeignet, daher würde das `aria-pressed`-Attribut weggelassen.

### Tastaturinteraktionen

| Taste            | Funktion              |
| ---------------- | --------------------- |
| <kbd>Enter</kbd> | Aktiviert den Button. |
| <kbd>Space</kbd> | Aktiviert den Button. |

Nach der Aktivierung des Buttons wird der Fokus je nach Art der Aktion, die der Button ausführt, gesetzt. Zum Beispiel, wenn das Klicken des Buttons einen Dialog öffnet, sollte der Fokus auf den Dialog gesetzt werden. Wenn der Button einen Dialog schließt, sollte der Fokus auf den Button zurückgesetzt werden, der den Dialog geöffnet hat, es sei denn, die im Dialog-Kontext ausgeführte Funktion führt logisch zu einem anderen Element. Wenn der Button den aktuellen Kontext ändert, wie z.B. das Stummschalten und das Stummschaltung aufheben einer Audiodatei, bleibt der Fokus typischerweise auf dem Button.

### Erforderliche JavaScript-Funktionen

#### Erforderliche Ereignishandler

Buttons können von Maus-, Touch- und Tastaturbenutzern bedient werden. Für native HTML-`<button>`-Elemente wird das `onclick`-Ereignis des Buttons sowohl bei Mausklicks als auch beim Drücken der <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste ausgelöst, während der Button den Fokus hat. Aber wenn ein anderes Tag verwendet wird, um einen Button zu erstellen, wird das `onclick`-Ereignis nur ausgelöst, wenn es vom Mauszeiger geklickt wird, selbst wenn `role="button"` verwendet wird. Aus diesem Grund müssen separate Key-Ereignishandler dem Element hinzugefügt werden, damit der Button ausgelöst wird, wenn die <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste gedrückt wird.

- `onclick`
  - : Behandelt das Ereignis, das ausgelöst wird, wenn der Button durch einen Mausklick oder ein Touchereignis aktiviert wird.
- `onKeyDown`
  - : Behandelt das Ereignis, das ausgelöst wird, wenn der Button durch die Enter- oder Space-Taste auf der Tastatur aktiviert wird. (Hinweis: nicht das [veraltete onKeyPress](/de/docs/Web/API/Element/keypress_event))

## Beispiele

### Einfaches Button-Beispiel

In diesem Beispiel wurde einem `span`-Element die `button`-Rolle gegeben. Da ein `<span>`-Element verwendet wird, ist das `tabindex`-Attribut erforderlich, um den Button fokussierbar zu machen und Teil der Tabulatorreihenfolge der Seite zu sein. Der enthaltene CSS-Stil sorgt dafür, dass das `<span>`-Element wie ein Button aussieht und visuelle Hinweise bietet, wenn der Button den Fokus hat.

Die `handleBtnClick`- und `handleBtnKeyDown`-Ereignishandler führen die Aktion des Buttons aus, wenn dieser durch einen Mausklick oder die <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste aktiviert wird. In diesem Fall besteht die Aktion darin, einen neuen Namen zur Liste der Namen hinzuzufügen.

Probieren Sie das Beispiel aus, indem Sie einen Namen in das Textfeld eingeben. Der Button fügt den Namen der Liste hinzu.

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

### Toggle-Button-Beispiel

In diesem Snippet wird ein {{HTMLElement("span")}}-Element in einen Toggle-Button umgewandelt, indem die `button`-Rolle und das `aria-pressed`-Attribut verwendet werden. Wenn der Button aktiviert wird, wechselt der Wert von `aria-pressed` den Zustand; er wechselt von `true` zu `false` und wieder zurück.

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

## Zugänglichkeitsbedenken

Buttons sind interaktive Steuerelemente und somit fokussierbar. Wird die `button`-Rolle einem Element hinzugefügt, das von sich aus nicht fokussierbar ist (wie `<span>`, `<div>` oder `<p>`), muss das `tabindex`-Attribut verwendet werden, um den Button fokussierbar zu machen.

> [!WARNING]
> Seien Sie vorsichtig, wenn Sie Links mit der `button`-Rolle auszeichnen. Buttons sollen mit der <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste ausgelöst werden, während Links mit der <kbd>Enter</kbd>-Taste ausgelöst werden sollen. Mit anderen Worten, wenn Links verwendet werden, um sich wie Buttons zu verhalten, reicht das Hinzufügen von `role="button"` allein nicht aus. Es wird auch erforderlich sein, einen Schlüsselereignis-Handler hinzuzufügen, der auf die <kbd>Space</kbd>-Taste hört, um mit nativen Buttons konsistent zu sein.

Wenn die `button`-Rolle verwendet wird, kündigen Screenreader das Element als Button an, indem sie in der Regel "click" gefolgt vom zugänglichen Namen des Buttons sagen. Der zugängliche Name ist entweder der Inhalt des Elements oder der Wert eines `aria-label` oder eines durch ein `aria-labelledby`-Attribut referenzierten Elements oder die Beschreibung, falls vorhanden.

## Beste Praktiken

Wenn ein Link die Aktion eines Buttons ausführt, hilft das Hinzufügen der Rolle `role="button"` Benutzern von Assistenztechnologien, die Funktion des Elements zu verstehen. Eine besser Lösung ist jedoch, das visuelle Design so anzupassen, dass es der Funktion und der ARIA-Rolle entspricht. Wo möglich, wird empfohlen, native HTML-Buttons (`<button>`, `<input type="button">`, `<input type="submit">`, `<input type="reset">` und `<input type="image">`) anstelle der `button`-Rolle zu verwenden, da native HTML-Buttons von allen Benutzer-Agenten und Assistenztechnologien unterstützt werden und Tastatur- und Fokusanforderungen standardmäßig bieten, ohne dass eine zusätzliche Anpassung erforderlich ist.

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
- [Hinweise zur Verwendung von ARIA in HTML](https://w3c.github.io/using-aria/)
- [Offizieller WAI-ARIA-Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/)
