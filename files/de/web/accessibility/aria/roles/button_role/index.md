---
title: "ARIA: Rolle button"
slug: Web/Accessibility/ARIA/Roles/button_role
l10n:
  sourceCommit: 916104c5348505f0921811af34d3f7499e9ac9f6
---

{{AccessibilitySidebar}}

Die Rolle `button` ist für anklickbare Elemente, die eine Aktion auslösen, wenn sie vom Benutzer aktiviert werden. Durch das Hinzufügen von `role="button"` wird dem Screenreader mitgeteilt, dass das Element ein Button ist, jedoch wird keine Button-Funktionalität bereitgestellt. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

## Beschreibung

Die Rolle `button` identifiziert ein Element als Button für unterstützende Technologien wie Screenreader. Ein Button ist ein Widget, das verwendet wird, um Aktionen wie das Absenden eines Formulars, das Öffnen eines Dialogs, das Abbrechen einer Aktion oder das Ausführen eines Befehls wie das Einfügen eines neuen Datensatzes oder das Anzeigen von Informationen auszuführen. Durch das Hinzufügen von `role="button"` wird der unterstützenden Technologie mitgeteilt, dass das Element ein Button ist, jedoch wird keine Button-Funktionalität bereitgestellt. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

Diese `button`-Rolle kann in Kombination mit dem Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) verwendet werden, um [Umschalt-Buttons zu erstellen](#umschalt-buttons).

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Save</div>
```

Das obige Beispiel erstellt einen fokussierbaren Button, erfordert jedoch JavaScript und CSS, um das Erscheinungsbild und die Funktionalität des Buttons einzuschließen. Diese Funktionen werden standardmäßig bereitgestellt, wenn Sie die Elemente {{HTMLElement("button")}} und {{HTMLElement("input")}} mit `type="button"` verwenden:

```html
<button type="button" id="saveChanges">Save</button>
```

> [!NOTE]
> Wenn Sie `role="button"` anstelle der semantischen Elemente `<button>` oder `<input type="button">` verwenden, müssen Sie das Element fokussierbar machen und Ereignis-Handler für [`click`](/de/docs/Web/API/Element/click_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event) definieren. Dazu gehört auch die Behandlung der Tastendrücke <kbd>Enter</kbd> und <kbd>Leertaste</kbd>, um alle Arten von Benutzereingaben zu verarbeiten. Siehe [den offiziellen WAI-ARIA-Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/).

Zusätzlich zu dem gewöhnlichen Button-Widget sollte `role="button"` hinzugefügt werden, wenn ein Umschalt-Button oder Menü-Button mit einem Nicht-Button-Element erstellt wird.

Ein Umschalt-Button ist ein zweizuständiger Button, der entweder nicht gedrückt (aus) oder gedrückt (ein) sein kann. Die Attributwerte `true` oder `false` von [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) identifizieren einen Button als Umschalt-Button.

Ein Menü-Button ist ein Button, der ein Menü steuert und ein Attribut der Eigenschaft [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) auf `menu` oder `true` gesetzt hat.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibility-API dargestellt werden, nur Text enthalten dürfen. Accessibility-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `button` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle nachfolgenden Elemente eines beliebigen `button`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel das folgende `button`-Element, das eine Überschrift enthält.

```html
<div role="button"><h3>Title of my button</h3></div>
```

Da die Nachkommen von `button` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="button"><h3 role="presentation">Title of my button</h3></div>
```

Aus der Sicht des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets äquivalent zu dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitstree")}} sind:

```html
<div role="button">Title of my button</div>
```

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
  - : Das Attribut `aria-pressed` definiert den Button als Umschalt-Button. Der Wert beschreibt den Zustand des Buttons. Zu den Werten gehören `aria-pressed="false"`, wenn ein Button momentan nicht gedrückt ist, `aria-pressed="true"`, um anzuzeigen, dass ein Button momentan gedrückt ist, und `aria-pressed="mixed"`, wenn der Button als teilweise gedrückt betrachtet wird. Wenn das Attribut weggelassen oder auf den Standardwert `aria-pressed="undefined"` gesetzt ist, unterstützt das Element nicht, gedrückt zu werden.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Wenn der Button eine Gruppierung anderer Elemente steuert, gibt der Zustand `aria-expanded` an, ob die gesteuerte Gruppierung momentan erweitert oder eingeklappt ist. Wenn der Button auf `aria-expanded="false"` gesetzt ist, ist die Gruppierung momentan nicht erweitert; Wenn der Button auf `aria-expanded="true"` gesetzt ist, ist er momentan erweitert; wenn das Attribut `aria-expanded="undefined"` gesetzt ist oder weggelassen wird, ist es nicht erweiterbar.

### Grundlegende Buttons

Buttons sollten immer einen zugänglichen Namen haben. Für die meisten Buttons wird dieser Name mit dem Text innerhalb des Buttons identisch sein, der sich zwischen den öffnenden und schließenden Tags befindet. In einigen Fällen, zum Beispiel bei Buttons, die durch Symbole dargestellt werden, könnte der zugängliche Name durch die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) bereitgestellt werden.

### Umschalt-Buttons

Ein Umschalt-Button hat typischerweise zwei Zustände: gedrückt und nicht gedrückt. Ein dritter gemischter Zustand ist für Umschalt-Buttons verfügbar, die andere Elemente steuern, wie andere Umschalt-Buttons oder Kontrollkästchen, die nicht alle denselben Wert haben. Ob ein Element ein Umschalt-Button ist oder nicht, kann durch das Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) zusätzlich zur `button`-Rolle angezeigt werden (wenn das Element nicht bereits ein nativer Button ist):

- Wenn `aria-pressed` nicht verwendet wird oder auf den Zustand "undefined" gesetzt ist, ist der Button kein Umschalt-Button.
- Wenn `aria-pressed="false"` verwendet wird, ist der Button ein Umschalt-Button, der momentan nicht gedrückt ist.
- Wenn `aria-pressed="true"` verwendet wird, ist der Button ein Umschalt-Button, der momentan gedrückt ist.
- Wenn `aria-pressed="mixed"` verwendet wird, wird der Button als teilweise gedrückt betrachtet.

Zum Beispiel könnte der Stummtaste eines Audioplayers, die mit "stumm" beschriftet ist, anzeigen, dass der Ton stummgeschaltet ist, indem der `aria-pressed`-Zustand auf true gesetzt wird. Das Label eines Umschalt-Buttons sollte sich nicht ändern, wenn sich sein Zustand ändert. In unserem Beispiel bleibt das Label "Stumm", wobei ein Screenreader "Stumm-Umschalt-Button gedrückt" oder "Stumm-Umschalt-Button nicht gedrückt" liest, abhängig vom Wert von `aria-pressed`. Wenn das Design erfordert, dass sich das Button-Label von "Stumm" zu "Ton aktivieren" ändert, wäre ein Umschalt-Button nicht geeignet, daher würde das `aria-pressed`-Attribut weggelassen werden.

### Tastaturinteraktionen

| Taste                | Funktion              |
| -------------------- | --------------------- |
| <kbd>Enter</kbd>     | Aktiviert den Button. |
| <kbd>Leertaste</kbd> | Aktiviert den Button  |

Nach der Aktivierung des Buttons wird der Fokus je nach Art der vom Button ausgeführten Aktion festgelegt. Wenn der Klick auf den Button beispielsweise einen Dialog öffnet, sollte der Fokus auf den Dialog verschoben werden. Wenn der Button einen Dialog schließt, sollte der Fokus auf den Button zurückkehren, der den Dialog geöffnet hat, es sei denn, die im Dialogkontext ausgeführte Funktion führt logisch zu einem anderen Element. Wenn der Button den aktuellen Kontext verändert, wie das Stummschalten und Aktivieren eines Audiofiles, bleibt der Fokus normalerweise auf dem Button.

### Erforderliche JavaScript-Funktionen

#### Erforderliche Ereignis-Handler

Buttons können von Maus-, Touch- und Tastaturbenutzern bedient werden. Bei nativen HTML-`<button>`-Elementen löst das `onclick`-Ereignis des Buttons aus, wenn auf ihn geklickt wird oder wenn der Benutzer die <kbd>Leertaste</kbd> oder <kbd>Enter</kbd>-Taste drückt, während der Button den Fokus hat. Aber wenn ein anderes Tag zur Erstellung eines Buttons verwendet wird, wird das `onclick`-Ereignis nur ausgelöst, wenn es mit dem Mauszeiger angeklickt wird, selbst wenn `role="button"` verwendet wird. Aus diesem Grund müssen separate Tastatur-Ereignis-Handler hinzugefügt werden, damit der Button aktiviert wird, wenn die <kbd>Leertaste</kbd> oder <kbd>Enter</kbd>-Taste gedrückt wird.

- `onclick`
  - : Behandelt das Ereignis, das ausgelöst wird, wenn der Button durch einen Mausklick oder Touch-Ereignis aktiviert wird.
- `onKeyDown`
  - : Behandelt das Ereignis, das ausgelöst wird, wenn der Button durch Drücken der Enter- oder Leertaste auf der Tastatur aktiviert wird. (Hinweis: nicht das [veraltete onKeyPress](/de/docs/Web/API/Element/keypress_event))

## Beispiele

### Grundlegendes Button-Beispiel

In diesem Beispiel wurde einem `span`-Element die Rolle `button` zugewiesen. Da ein `<span>`-Element verwendet wird, ist das Attribut `tabindex` erforderlich, um den Button fokussierbar zu machen und Teil der Tab-Reihenfolge der Seite zu sein. Der enthaltene CSS-Stil sorgt dafür, dass das `<span>`-Element wie ein Button aussieht und visuelle Hinweise bietet, wenn der Button den Fokus hat.

Die Ereignis-Handler `handleBtnClick` und `handleBtnKeyDown` führen die Aktion des Buttons aus, wenn er durch einen Mausklick oder durch Drücken der <kbd>Leertaste</kbd> oder <kbd>Enter</kbd>-Taste aktiviert wird. In diesem Fall besteht die Aktion darin, einen neuen Namen zur Namensliste hinzuzufügen.

Versuchen Sie das Beispiel, indem Sie einen Namen in das Textfeld eingeben. Der Button wird den Namen zur Liste hinzufügen.

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

  // Keypresses other than Enter and Space should not trigger a command
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

In diesem Snippet wird ein {{HTMLElement("span")}}-Element durch die Rolle `button` und das Attribut `aria-pressed` in einen Umschalt-Button umgewandelt. Wenn der Button aktiviert wird, wechselt der Wert von `aria-pressed` die Zustände; er ändert sich von `true` zu `false` und umgekehrt.

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

## Zugänglichkeitsbedenken

Buttons sind interaktive Steuerelemente und somit fokussierbar. Wenn die Rolle `button` zu einem Element hinzugefügt wird, das von sich aus nicht fokussierbar ist (wie `<span>`, `<div>` oder `<p>`), dann muss das `tabindex`-Attribut verwendet werden, um den Button fokussierbar zu machen.

> [!WARNING]
> Seien Sie vorsichtig beim Auszeichnen von Links mit der Rolle `button`. Von Buttons wird erwartet, dass sie durch die Tasten <kbd>Leertaste</kbd> oder <kbd>Enter</kbd> ausgelöst werden, während von Links erwartet wird, dass sie durch die <kbd>Enter</kbd>-Taste ausgelöst werden. Mit anderen Worten, wenn Links verwendet werden, um sich wie Buttons zu verhalten, ist es nicht ausreichend, nur `role="button"` hinzuzufügen. Es wird auch notwendig sein, einen Tasten-Ereignis-Handler hinzuzufügen, der auf die <kbd>Leertaste</kbd>-Taste hört, um konsistent mit nativen Buttons zu sein.

Wenn die Rolle `button` verwendet wird, kündigen Screenreader das Element als Button an, in der Regel mit "klicken" gefolgt vom zugänglichen Namen des Buttons. Der zugängliche Name ist entweder der Inhalt des Elements oder der Wert eines `aria-label` oder eines durch ein `aria-labelledby`-Attribut referenzierten Elements oder einer Beschreibung, falls enthalten.

## Beste Praktiken

Wenn ein Link die Aktion eines Buttons ausführt, hilft das Hinzufügen des Elements mit `role="button"` den Benutzern von unterstützender Technologie, die Funktion des Elements zu verstehen. Eine bessere Lösung ist jedoch, das visuelle Design anzupassen, sodass es der Funktion und der ARIA-Rolle entspricht. Wo immer möglich, wird empfohlen, native HTML-Buttons (`<button>`, `<input type="button">`, `<input type="submit">`, `<input type="reset">` und `<input type="image">`) zu verwenden, anstatt die Rolle `button`, da native HTML-Buttons von allen Benutzeragenten und unterstützenden Technologien unterstützt werden und Tastatur- und Fokusanforderungen standardmäßig bereitstellen, ohne die Notwendigkeit zusätzlicher Anpassungen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('button')}}-Element
- Das {{HTMLElement("input")}}-Element
- [`<input type="button">`](/de/docs/Web/HTML/Element/input/button)
- [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit)
- [`<input type="reset">`](/de/docs/Web/HTML/Element/input/reset)
- [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed)
- [`aria-expanded`](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded)
- [`aria-haspopup`](https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup)
- [Starke native Semantik in HTML5](https://html.spec.whatwg.org/multipage/dom.html#aria-usage-note)
- [Hinweise zur Verwendung von ARIA in HTML](https://www.w3.org/TR/aria-in-html/)
- [Offizieller WAI-ARIA-Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/)
