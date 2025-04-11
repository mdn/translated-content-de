---
title: "ARIA: button role"
slug: Web/Accessibility/ARIA/Reference/Roles/button_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die `button`-Rolle ist für anklickbare Elemente vorgesehen, die eine Reaktion auslösen, wenn sie vom Benutzer aktiviert werden. Das Hinzufügen von `role="button"` teilt dem Screenreader mit, dass das Element eine Schaltfläche ist, aber es bietet keine Schaltflächenfunktionalität. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

## Beschreibung

Die button-Rolle identifiziert ein Element für unterstützende Technologien wie Screenreader als Schaltfläche. Eine Schaltfläche ist ein Widget, das verwendet wird, um Aktionen auszuführen, wie z.B. ein Formular zu senden, einen Dialog zu öffnen, eine Aktion abzubrechen oder einen Befehl auszuführen, wie z.B. einen neuen Datensatz einzufügen oder Informationen anzuzeigen. Das Hinzufügen von `role="button"` teilt unterstützenden Technologien mit, dass das Element eine Schaltfläche ist, bietet jedoch keine Schaltflächenfunktionalität. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

Diese `button`-Rolle kann in Kombination mit dem Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) verwendet werden, um [Umschalt-Schaltflächen zu erstellen](#umschalt-schaltflächen).

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Save</div>
```

Das obige Beispiel erstellt eine fokussierbare Schaltfläche, erfordert jedoch JavaScript und CSS, um das Erscheinungsbild und die Funktion der Schaltfläche einzuschließen. Diese Funktionen werden standardmäßig bereitgestellt, wenn die Elemente {{HTMLElement("button")}} und {{HTMLElement("input")}} mit `type="button"` verwendet werden:

```html
<button type="button" id="saveChanges">Save</button>
```

> [!NOTE]
> Wenn `role="button"` anstelle der semantischen `<button>`- oder `<input type="button">`-Elemente verwendet wird, müssen Sie das Element fokussierbar machen und Ereignishandler für [`click`](/de/docs/Web/API/Element/click_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event) definieren. Dies umfasst das Umgang mit den Tastendrücken <kbd>Enter</kbd> und <kbd>Space</kbd>, um alle Formen der Benutzereingabe zu verarbeiten. Siehe [den offiziellen WAI-ARIA-Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/).

Zusätzlich zum gewöhnlichen Schaltflächen-Widget sollte `role="button"` hinzugefügt werden, wenn eine Umschalt-Schaltfläche oder Menü-Schaltfläche mit einem nicht-Schaltflächen-Element erstellt wird.

Eine Umschalt-Schaltfläche ist eine Zwei-Zustand-Schaltfläche, die entweder nicht gedrückt (off) oder gedrückt (on) ist. Die Attributwerte von [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) `true` oder `false` kennzeichnen eine Schaltfläche als Umschalt-Schaltfläche.

Eine Menü-Schaltfläche ist eine Schaltfläche, die ein Menü steuert und ein Attribut `aria-haspopup` hat, das auf `menu` oder `true` gesetzt ist.

### Alle Nachkommene sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugriffs-API dargestellt werden, nur Text enthalten können. Zugriffs-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einer `button` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `button`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `button`-Element, welches eine Überschrift enthält.

```html
<div role="button"><h3>Title of my button</h3></div>
```

Da Nachkommen von `button` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="button"><h3 role="presentation">Title of my button</h3></div>
```

Aus Sicht der Benutzenden unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets gleichwertig mit dem folgenden im {{Glossary("Accessibility_tree", "Zugriffsbaum")}} sind:

```html
<div role="button">Title of my button</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
  - : Das `aria-pressed`-Attribut definiert die Schaltfläche als Umschalt-Schaltfläche. Der Wert beschreibt den Zustand der Schaltfläche. Die Werte beinhalten `aria-pressed="false"`, wenn eine Schaltfläche derzeit nicht gedrückt ist, `aria-pressed="true"`, um anzuzeigen, dass eine Schaltfläche derzeit gedrückt ist, und `aria-pressed="mixed"`, wenn die Schaltfläche als teilweise gedrückt angesehen wird. Wenn das Attribut ausgelassen wird oder auf seinen Standardwert `aria-pressed="undefined"` gesetzt ist, unterstützt das Element nicht das Gedrücktwird.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Wenn die Schaltfläche eine Gruppierung anderer Elemente steuert, zeigt der `aria-expanded`-Zustand an, ob die gesteuerte Gruppierung derzeit erweitert (expanded) oder eingeklappt (collapsed) ist. Wenn die Schaltfläche auf `aria-expanded="false"` gesetzt ist, ist die Gruppierung nicht erweitert; Wenn die Schaltfläche auf `aria-expanded="true"` gesetzt ist, ist sie derzeit erweitert; Wenn die Schaltfläche auf `aria-expanded="undefined"` gesetzt ist oder das Attribut weggelassen wird, ist es nicht erweiterbar.

### Grundlegende Schaltflächen

Schaltflächen sollten immer einen zugänglichen Namen haben. Für die meisten Schaltflächen wird dieser Name derselbe wie der Text innerhalb der Schaltfläche zwischen den öffnenden und schließenden Tags sein. In einigen Fällen, z.B. bei durch Symbolen dargestellten Schaltflächen, kann der zugängliche Name von den Attributen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) bereitgestellt werden.

### Umschalt-Schaltflächen

Eine Umschalt-Schaltfläche hat typischerweise zwei Zustände: gedrückt und nicht gedrückt. Ein dritter gemischter Zustand ist verfügbar für Umschalt-Schaltflächen, die andere Elemente steuern, wie andere Umschalt-Schaltflächen oder Kontrollkästchen, die nicht alle denselben Wert teilen. Ob ein Element eine Umschalt-Schaltfläche ist oder nicht, kann mit dem Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) zusätzlich zur `button`-Rolle (wenn das Element nicht bereits ein nativer Schaltflächen-Element ist) angegeben werden:

- Wenn `aria-pressed` nicht verwendet wird oder auf den "undefined"-Zustand gesetzt ist, ist die Schaltfläche keine Umschalt-Schaltfläche.
- Wenn `aria-pressed="false"` verwendet wird, ist die Schaltfläche eine Umschalt-Schaltfläche, die momentan nicht gedrückt ist.
- Wenn `aria-pressed="true"` verwendet wird, ist die Schaltfläche eine Umschalt-Schaltfläche, die momentan gedrückt ist.
- Wenn `aria-pressed="mixed"` verwendet wird, wird die Schaltfläche als teilweise gedrückt betrachtet.

Zum Beispiel könnte die Stummschalt-Schaltfläche auf einem Audioplayer, die mit "stummschalten" beschriftet ist, anzeigen, dass der Ton stummgeschaltet ist, indem der `aria-pressed`-Zustand auf wahr gesetzt wird. Das Label einer Umschalt-Schaltfläche sollte sich nicht ändern, wenn sich ihr Zustand ändert. In unserem Beispiel bleibt die Beschriftung "Stummschalten" und der Screenreader liest "Stummschalten Umschalt-Schaltfläche gedrückt" oder "Stummschalten Umschalt-Schaltfläche nicht gedrückt" je nach dem Wert von `aria-pressed`. Wenn das Design vorsieht, dass sich das Schaltflächen-Label von "Stummschalten" zu "Stummschaltung aufheben" ändert, wäre eine Umschalt-Schaltfläche nicht geeignet, so dass das `aria-pressed`-Attribut ausgelassen würde.

### Tastatur-Interaktionen

| Taste            | Funktion                    |
| ---------------- | --------------------------- |
| <kbd>Enter</kbd> | Aktiviert die Schaltfläche. |
| <kbd>Space</kbd> | Aktiviert die Schaltfläche  |

Nach der Aktivierung der Schaltfläche wird das Fokusthema abhängig davon gesetzt, welche Art von Aktion die Schaltfläche ausführt. Wenn beispielsweise beim Klicken auf die Schaltfläche ein Dialog geöffnet wird, sollte der Fokus auf den Dialog wechseln. Wenn die Schaltfläche einen Dialog schließt, sollte der Fokus auf die Schaltfläche zurückkehren, die den Dialog geöffnet hat, es sei denn, die im Dialogkontext durchführen Funktion führt logischerweise zu einem anderen Element. Wenn die Schaltfläche den aktuellen Kontext ändert, z.B. durch das Stummschalten und Aufheben der Stummschaltung einer Audiodatei, bleibt der Fokus typischerweise auf der Schaltfläche.

### Erforderliche JavaScript-Features

#### Erforderliche Ereignishandler

Schaltflächen können von Maus-, Touch- und Tastaturnutzern bedient werden. Für native HTML-`<button>`-Elemente wird das `onclick`-Ereignis der Schaltfläche für Mausklicks ausgelöst und wenn der Benutzer die <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste drückt, während die Schaltfläche fokussiert ist. Aber wenn ein anderes Tag verwendet wird, um eine Schaltfläche zu erstellen, wird das `onclick`-Ereignis nur dann ausgelöst, wenn es durch den Mauskursor angeklickt wird, auch wenn `role="button"` verwendet wird. Aufgrund dessen müssen separate Tastatur-Ereignishandler dem Element hinzugefügt werden, sodass die Schaltfläche ausgelöst wird, wenn die <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste gedrückt wird.

- `onclick`
  - : Behandelt das Ereignis, das ausgelöst wird, wenn die Schaltfläche durch einen Mausklick oder eine Berührung aktiviert wird.
- `onKeyDown`
  - : Behandelt das Ereignis, das ausgelöst wird, wenn die Schaltfläche durch die Eingabe- oder Leertaste auf der Tastatur aktiviert wird. (Hinweis nicht das [veraltete `onKeyPress`](/de/docs/Web/API/Element/keypress_event))

## Beispiele

### Grundlegendes Schaltflächenbeispiel

In diesem Beispiel wurde ein `span`-Element mit der `button`-Rolle versehen. Da ein `<span>`-Element verwendet wird, ist das `tabindex`-Attribut erforderlich, um die Schaltfläche fokussierbar zu machen und Teil der Tabulatorreihenfolge der Seite zu sein. Der eingeschlossene CSS-Stil dient dazu, das `<span>`-Element wie eine Schaltfläche aussehen zu lassen und visuelle Hinweise zu geben, wenn die Schaltfläche den Fokus hat.

Die `handleBtnClick`- und `handleBtnKeyDown`-Ereignishandler führen die Aktion der Schaltfläche aus, wenn sie durch einen Mausklick oder die Leertaste bzw. Eingabetaste aktiviert wird. In diesem Fall besteht die Aktion darin, einen neuen Namen zur Namensliste hinzuzufügen.

Versuchen Sie das Beispiel, indem Sie einen Namen in das Textfeld eingeben. Die Schaltfläche fügt den Namen einer Liste hinzu.

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

### Umschalt-Schaltflächenbeispiel

In diesem Ausschnitt wird ein {{HTMLElement("span")}}-Element mit der `button`-Rolle und dem `aria-pressed`-Attribut in eine Umschalt-Schaltfläche umgewandelt. Wenn die Schaltfläche aktiviert wird, ändert sich der `aria-pressed`-Wert zwischen den Zuständen `true` und `false`.

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

## Barrierefreiheitsanliegen

Schaltflächen sind interaktive Bedienelemente und daher fokussierbar. Wenn die `button`-Rolle einem Element hinzugefügt wird, das von sich aus nicht fokussierbar ist (wie `<span>`, `<div>` oder `<p>`), muss das `tabindex`-Attribut verwendet werden, um die Schaltfläche fokussierbar zu machen.

> [!WARNING]
> Seien Sie vorsichtig beim Auszeichnen von Links mit der `button`-Rolle. Es wird erwartet, dass Schaltflächen mit der <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste ausgelöst werden, während erwartet wird, dass Links mit der <kbd>Enter</kbd>-Taste ausgelöst werden. Mit anderen Worten, wenn Links verwendet werden, um sich wie Schaltflächen zu verhalten, ist das alleinige Hinzufügen von `role="button"` nicht ausreichend. Es wird ebenfalls notwendig sein, einen Tastatur-Ereignishandler hinzuzufügen, der auf die <kbd>Space</kbd>-Taste hört, um mit den nativen Schaltflächen konsistent zu sein.

Wenn die `button`-Rolle verwendet wird, verkünden Screenreader das Element als eine Schaltfläche, indem sie im Allgemeinen "anklicken" gefolgt vom zugänglichen Namen der Schaltfläche sagen. Der zugängliche Name ist entweder der Inhalt des Elements oder der Wert eines `aria-label` oder des Elements, auf das durch ein `aria-labelledby`-Attribut verwiesen wird, oder eine Beschreibung, falls hinzugefügt.

## Beste Praktiken

Wenn ein Link die Aktion einer Schaltfläche ausführt, hilft das Element mit `role="button"` assistive Technologieanwendern, die Funktion des Elements zu verstehen. Eine bessere Lösung ist jedoch, das visuelle Design so anzupassen, dass es der Funktion und der ARIA-Rolle entspricht. Wo möglich, wird empfohlen, native HTML-Schaltflächen (`<button>`, `<input type="button">`, `<input type="submit">`, `<input type="reset">` und `<input type="image">`) anstelle der `button`-Rolle zu verwenden, da native HTML-Schaltflächen von allen Benutzeragenten und unterstützenden Technologien unterstützt werden und die Tastatur- und Fokusanforderungen standardmäßig bereitstellen, ohne dass zusätzliche Anpassungen erforderlich sind.

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
