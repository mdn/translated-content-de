---
title: "ARIA: button-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/button_role
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

Die `button`-Rolle ist für anklickbare Elemente vorgesehen, die eine Reaktion auslösen, wenn sie vom Benutzer aktiviert werden. Das Hinzufügen von `role="button"` teilt dem Screenreader mit, dass das Element ein Button ist, bietet jedoch keine Button-Funktionalität. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

## Beschreibung

Die button-Rolle identifiziert ein Element als Button für unterstützende Technologien wie Screenreader. Ein Button ist ein Widget, das verwendet wird, um Aktionen wie das Absenden eines Formulars, das Öffnen eines Dialogs, das Abbrechen einer Aktion oder das Ausführen eines Befehls wie das Einfügen eines neuen Datensatzes oder das Anzeigen von Informationen auszuführen. Das Hinzufügen von `role="button"` teilt unterstützender Technologie mit, dass das Element ein Button ist, bietet jedoch keine Button-Funktionalität. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

Diese `button`-Rolle kann in Kombination mit dem [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)-Attribut verwendet werden, um [Umschaltbuttons zu erstellen](#umschaltbuttons).

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Save</div>
```

Das obige Beispiel erstellt einen fokussierbaren Button, erfordert jedoch JavaScript und CSS, um das Aussehen und die Funktionalität des Buttons einzuschließen. Diese Eigenschaften werden standardmäßig bereitgestellt, wenn die {{HTMLElement("button")}} und {{HTMLElement("input")}} mit `type="button"`-Elementen verwendet werden:

```html
<button type="button" id="saveChanges">Save</button>
```

> [!NOTE]
> Wenn Sie `role="button"` anstelle der semantischen `<button>`- oder `<input type="button">`-Elemente verwenden, müssen Sie das Element fokussierbar machen und Ereignishandler für [`click`](/de/docs/Web/API/Element/click_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse definieren. Dies schließt das Handhaben der <kbd>Enter</kbd> und <kbd>Leertaste</kbd>-Tastendrücke ein, um alle Formen der Benutzereingabe zu verarbeiten. Sehen Sie sich [den offiziellen WAI-ARIA-Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/) an.

Zusätzlich zum gewöhnlichen Button-Widget sollte `role="button"` hinzugefügt werden, wenn bei der Verwendung eines Nicht-Button-Elements ein Umschaltbutton oder Menübutton erstellt wird.

Ein Umschaltbutton ist ein Zwei-Zustand-Button, der entweder aus (nicht gedrückt) oder ein (gedrückt) sein kann. Die Werte des [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)-Attributs von `true` oder `false` identifizieren einen Button als Umschaltbutton.

Ein Menübutton ist ein Button, der ein Menü steuert und über ein [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)-Eigenschafts-Attribut verfügt, das entweder auf `menu` oder `true` gesetzt ist.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die beim Darstellen in einer Plattform-Zugriffs-API nur Text enthalten können. Zugriffs-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `button` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `button`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `button`-Element, das eine Überschrift enthält.

```html
<div role="button"><h3>Title of my button</h3></div>
```

Da Nachkommen von `button` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="button"><h3 role="presentation">Title of my button</h3></div>
```

Aus der Perspektive eines Benutzers unterstützter Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets äquivalent zu Folgendem im {{Glossary("Accessibility_tree", "Zugriffsbaum")}} sind:

```html
<div role="button">Title of my button</div>
```

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
  - : Das `aria-pressed`-Attribut definiert den Button als Umschaltbutton. Der Wert beschreibt den Zustand des Buttons. Die Werte schließen `aria-pressed="false"` ein, wenn ein Button derzeit nicht gedrückt ist, `aria-pressed="true"`, um anzuzeigen, dass der Button derzeit gedrückt ist, und `aria-pressed="mixed"`, wenn der Button als teilweise gedrückt betrachtet wird. Wenn das Attribut weggelassen oder auf seinen Standardwert `aria-pressed="undefined"` gesetzt wird, unterstützt das Element nicht das Gedrücktsein.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Wenn der Button eine Gruppierung anderer Elemente steuert, zeigt der `aria-expanded`-Zustand an, ob die gesteuerte Gruppierung derzeit erweitert oder eingeklappt ist. Wenn der Button `aria-expanded="false"` gesetzt hat, ist die Gruppierung derzeit nicht erweitert; wenn der Button `aria-expanded="true"` gesetzt hat, ist sie derzeit erweitert; wenn der Button `aria-expanded="undefined"` gesetzt hat oder das Attribut weggelassen wird, ist sie nicht erweiterbar.

### Grundlegende Buttons

Buttons sollten immer einen zugänglichen Namen haben. Für die meisten Buttons wird dieser Name derselbe sein wie der Text innerhalb des Buttons, zwischen den öffnenden und schließenden Tags. In einigen Fällen, z. B. bei Buttons, die durch Symbole dargestellt werden, kann der zugängliche Name aus den Attributen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) bereitgestellt werden.

### Umschaltbuttons

Ein Umschaltbutton hat typischerweise zwei Zustände: gedrückt und nicht gedrückt. Ein dritter gemischter Zustand ist für Umschaltbuttons verfügbar, die andere Elemente steuern, wie andere Umschaltbuttons oder Kontrollkästchen, die nicht alle denselben Wert teilen. Ob ein Element ein Umschaltbutton ist oder nicht, kann mit dem [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)-Attribut zusätzlich zur `button`-Rolle (wenn das Element nicht bereits ein nativer Button ist) angegeben werden:

- Wenn `aria-pressed` nicht verwendet oder auf den "undefined"-Zustand gesetzt wird, ist der Button kein Umschaltbutton.
- Wenn `aria-pressed="false"` verwendet wird, ist der Button ein Umschaltbutton, der derzeit nicht gedrückt ist.
- Wenn `aria-pressed="true"` verwendet wird, ist der Button ein Umschaltbutton, der derzeit gedrückt ist.
- Wenn `aria-pressed="mixed"` verwendet wird, wird der Button als teilweise gedrückt betrachtet.

Als Beispiel könnte der Stummschaltbutton bei einem Audio-Player, der mit "mute" beschriftet ist, durch Setzen des `aria-pressed`-Zustands auf true anzeigen, dass der Ton stummgeschaltet ist. Das Label eines Umschaltbuttons sollte sich nicht ändern, wenn sich sein Zustand ändert. In unserem Beispiel bleibt das Label "Mute" bestehen, wobei ein Screenreader "Mute switch button pressed" oder "Mute switch button not pressed" je nach Wert von `aria-pressed` liest. Wenn das Design vorsieht, dass sich das Button-Label von "Mute" zu "Unmute" ändern soll, wäre ein Umschaltbutton nicht angemessen, sodass das `aria-pressed`-Attribut weggelassen würde.

### Tastaturinteraktionen

| Taste                | Funktion              |
| -------------------- | --------------------- |
| <kbd>Enter</kbd>     | Aktiviert den Button. |
| <kbd>Leertaste</kbd> | Aktiviert den Button  |

Nach der Aktivierung des Buttons wird der Fokus je nach Art der Aktion, die der Button ausführt, neu gesetzt. Beispielweise, wenn durch Klicken auf den Button ein Dialog geöffnet wird, sollte der Fokus auf den Dialog verschoben werden. Wenn der Button einen Dialog schließt, sollte der Fokus zu dem Button zurückkehren, der den Dialog geöffnet hat, es sei denn, die im Dialogkontext ausgeführte Funktion führt logisch zu einem anderen Element. Wenn der Button den aktuellen Kontext verändert, wie beispielsweise beim Stummschalten und Aufheben der Stummschaltung einer Audiodatei, bleibt der Fokus typischerweise auf dem Button.

### Erforderliche JavaScript-Eigenschaften

#### Erforderliche Ereignishandler

Buttons können von Maus-, Touchscreen- und Tastaturbenutzern bedient werden. Bei nativen HTML-`<button>`-Elementen wird das `onclick`-Ereignis des Buttons sowohl für Mausklicks als auch für das Drücken der <kbd>Leertaste</kbd> oder der <kbd>Enter</kbd>-Taste ausgelöst, während der Button im Fokus ist. Wenn jedoch ein anderes Tag verwendet wird, um einen Button zu erstellen, wird das `onclick`-Ereignis nur ausgelöst, wenn es mit dem Mauszeiger geklickt wird, selbst wenn `role="button"` verwendet wird. Daher müssen separate Tastenereignishandler dem Element hinzugefügt werden, damit der Button ausgelöst wird, wenn die <kbd>Leertaste</kbd> oder die <kbd>Enter</kbd>-Taste gedrückt wird.

- `onclick`
  - : Handhabt das Ereignis, das ausgelöst wird, wenn der Button durch einen Mausklick oder Touch-Ereignis aktiviert wird.
- `onKeyDown`
  - : Handhabt das Ereignis, das ausgelöst wird, wenn der Button durch Drücken der Enter- oder Leertaste auf der Tastatur aktiviert wird. (Hinweis: nicht das [veraltete onKeyPress](/de/docs/Web/API/Element/keypress_event))

## Beispiele

### Grundlegendes Button-Beispiel

In diesem Beispiel hat ein Span-Element die `button`-Rolle erhalten. Da ein `<span>`-Element verwendet wird, ist das `tabindex`-Attribut erforderlich, um den Button fokussierbar zu machen und Teil der Tab-Reihenfolge der Seite zu sein. Der enthaltene CSS-Stil wird bereitgestellt, um das `<span>`-Element wie einen Button aussehen zu lassen und visuelle Hinweise zu geben, wenn der Button im Fokus steht.

Die Ereignishandler `handleBtnClick` und `handleBtnKeyDown` führen die Aktion des Buttons aus, wenn dieser durch einen Mausklick oder die <kbd>Leertaste</kbd> oder <kbd>Enter</kbd>-Taste aktiviert wird. In diesem Fall besteht die Aktion darin, einen neuen Namen zur Liste der Namen hinzuzufügen.

Probieren Sie das Beispiel aus, indem Sie einen Namen in das Textfeld hinzufügen. Der Button wird dazu führen, dass der Name zu einer Liste hinzugefügt wird.

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

### Umschaltbutton-Beispiel

In diesem Ausschnitt wird ein {{HTMLElement("span")}}-Element mit der `button`-Rolle und dem `aria-pressed`-Attribut in einen Umschaltbutton umgewandelt. Wenn der Button aktiviert wird, wechselt der `aria-pressed`-Wert den Zustand; von `true` zu `false` und wieder zurück.

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

## Zugriffsüberlegungen

Buttons sind interaktive Steuerungen und daher fokussierbar. Wenn die `button`-Rolle einem Element hinzugefügt wird, das von sich aus nicht fokussierbar ist (wie `<span>`, `<div>` oder `<p>`), muss das `tabindex`-Attribut verwendet werden, um den Button fokussierbar zu machen.

> [!WARNING]
> Seien Sie vorsichtig, wenn Sie Links mit der button-Rolle markieren. Buttons werden erwartet, mit der <kbd>Leertaste</kbd> oder <kbd>Enter</kbd>-Taste ausgelöst zu werden, während Links erwartet werden, mit der <kbd>Enter</kbd>-Taste ausgelöst zu werden. Mit anderen Worten: Wenn Links verwendet werden, um wie Buttons zu funktionieren, ist es nicht ausreichend, nur `role="button"` hinzuzufügen. Es ist auch notwendig, einen Tastenereignishandler hinzuzufügen, der auf die <kbd>Leertaste</kbd> hört, um mit nativen Buttons konsistent zu sein.

Wenn die `button`-Rolle verwendet wird, kündigen Screenreader das Element als Button an, indem sie im Allgemeinen "klicken" gefolgt vom zugänglichen Namen des Buttons sagen. Der zugängliche Name ist entweder der Inhalt des Elements oder der Wert eines `aria-label` oder eines Elements, das durch ein `aria-labelledby`-Attribut referenziert wird, oder eine Beschreibung, falls enthalten.

## Beste Praktiken

Wenn ein Link die Aktion eines Buttons ausführt, hilft das Geben der `role="button"`-Elemente Benutzern von unterstützenden Technologien, die Funktion des Elements zu verstehen. Eine bessere Lösung ist jedoch es, das visuelle Design anzupassen, damit es mit der Funktion und der ARIA-Rolle übereinstimmt. Wo möglich, wird empfohlen, native HTML-Buttons (`<button>`, `<input type="button">`, `<input type="submit">`, `<input type="reset">` und `<input type="image">`) anstelle der `button`-Rolle zu verwenden, da native HTML-Buttons von allen Benutzeragenten und unterstützenden Technologien unterstützt werden und Tastatur- und Fokusanforderungen standardmäßig ohne zusätzliche Anpassungen bieten.

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
