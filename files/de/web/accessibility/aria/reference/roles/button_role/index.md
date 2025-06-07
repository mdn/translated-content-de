---
title: "ARIA: button-Rolle"
short-title: button
slug: Web/Accessibility/ARIA/Reference/Roles/button_role
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Die `button`-Rolle ist für klickbare Elemente gedacht, die eine Reaktion auslösen, wenn sie vom Benutzer aktiviert werden. Indem Sie `role="button"` hinzufügen, teilen Sie dem Screenreader mit, dass das Element ein Button ist, es bietet jedoch keine Button-Funktionalität. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

## Beschreibung

Die Button-Rolle identifiziert ein Element als Button für unterstützende Technologien wie Screenreader. Ein Button ist ein Widget, das verwendet wird, um Aktionen wie das Absenden eines Formulars, das Öffnen eines Dialogs, das Abbrechen einer Aktion oder das Ausführen eines Befehls wie das Einfügen eines neuen Datensatzes oder die Anzeige von Informationen auszuführen. Das Hinzufügen von `role="button"` teilt unterstützenden Technologien mit, dass das Element ein Button ist, bietet jedoch keine Button-Funktionalität. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

Diese `button`-Rolle kann in Kombination mit dem [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)-Attribut verwendet werden, um [Umschalt-Buttons zu erstellen](#umschalt-buttons).

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Save</div>
```

Das obige Beispiel erstellt einen fokussierbaren Button, erfordert jedoch JavaScript und CSS, um das Button-Aussehen und die Funktionalität einzuschließen. Diese sind Funktionen, die standardmäßig bereitgestellt werden, wenn Sie die {{HTMLElement("button")}}- und {{HTMLElement("input")}}-Elemente mit `type="button"` verwenden:

```html
<button type="button" id="saveChanges">Save</button>
```

> [!NOTE]
> Wenn Sie `role="button"` anstelle der semantischen `<button>`- oder `<input type="button">`-Elemente verwenden, müssen Sie das Element fokussierbar machen und Ereignishandlers für [`click`](/de/docs/Web/API/Element/click_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event) definieren. Dies beinhaltet das Handling der <kbd>Enter</kbd>- und <kbd>Space</kbd>-Tastenanschläge, um alle Formen der Benutzereingabe zu verarbeiten. Siehe [den offiziellen WAI-ARIA-Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/).

Zusätzlich zum gewöhnlichen Button-Widget sollte `role="button"` enthalten sein, wenn ein Umschalt-Button oder Menu-Button mit einem Nicht-Button-Element erstellt wird.

Ein Umschalt-Button ist ein Zwei-Zustands-Button, der entweder aus (nicht gedrückt) oder ein (gedrückt) sein kann. Die [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)-Attributwerte `true` oder `false` identifizieren einen Button als Umschalt-Button.

Ein Menu-Button ist ein Button, der ein Menü steuert und ein [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)-Eigenschafts-Attribut gesetzt auf entweder `menu` oder `true` hat.

### Alle Nachfahren sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `button` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahrenelemente eines `button`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `button`-Element, das eine Überschrift enthält.

```html
<div role="button"><h3>Title of my button</h3></div>
```

Da Nachfahren von `button` präsentationell sind, ist der folgende Code gleichwertig:

```html
<div role="button"><h3 role="presentation">Title of my button</h3></div>
```

Aus der Sicht des Benutzers unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets dem folgenden im {{Glossary("Accessibility_tree", "Accessibility Tree")}} entsprechen:

```html
<div role="button">Title of my button</div>
```

### Zugeordnete ARIA-Rollen, Zustände und Eigenschaften

- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
  - : Das `aria-pressed`-Attribut definiert den Button als Umschalt-Button. Der Wert beschreibt den Zustand des Buttons. Zu den Werten gehören `aria-pressed="false"`, wenn ein Button derzeit nicht gedrückt ist, `aria-pressed="true"`, um anzuzeigen, dass ein Button derzeit gedrückt ist, und `aria-pressed="mixed"`, wenn der Button als teilweise gedrückt angesehen wird. Wenn das Attribut weggelassen wird oder auf seinen Standardwert `aria-pressed="undefined"` gesetzt ist, unterstützt das Element nicht das Drücken.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Wenn der Button eine Gruppe von anderen Elementen steuert, gibt der `aria-expanded`-Zustand an, ob die gesteuerte Gruppe derzeit erweitert oder reduziert ist. Wenn der Button `aria-expanded="false"` gesetzt hat, ist die Gruppe derzeit nicht erweitert; ist der Zustand `aria-expanded="true"` gesetzt, ist sie derzeit erweitert; wenn `aria-expanded="undefined"` gesetzt ist oder das Attribut weggelassen wird, ist sie nicht erweiterbar.

### Grundlegende Buttons

Buttons sollten immer einen zugänglichen Namen haben. Für die meisten Buttons wird dieser Name derselbe sein wie der Text im Inneren des Buttons, zwischen den öffnenden und schließenden Tags. In einigen Fällen, wie zum Beispiel bei Buttons, die durch Symbole dargestellt werden, kann der zugängliche Name durch die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)- oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribute bereitgestellt werden.

### Umschalt-Buttons

Ein Umschalt-Button hat typischerweise zwei Zustände: gedrückt und nicht gedrückt. Ein dritter gemischter Zustand ist für Umschalt-Buttons verfügbar, die andere Elemente steuern, wie andere Umschalt-Buttons oder Kontrollkästchen, die nicht alle denselben Wert teilen. Ob ein Element ein Umschalt-Button ist oder nicht, kann zusätzlich zur `button`-Rolle durch das [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)-Attribut gekennzeichnet werden (falls das Element nicht bereits ein nativer Button ist):

- Wird `aria-pressed` nicht verwendet oder auf den "undefined"-Zustand gesetzt, ist der Button kein Umschalt-Button.
- Wird `aria-pressed="false"` verwendet, ist der Button ein Umschalt-Button, der derzeit nicht gedrückt ist.
- Wird `aria-pressed="true"` verwendet, ist der Button ein Umschalt-Button, der derzeit gedrückt ist.
- Wird `aria-pressed="mixed"` verwendet, wird der Button als teilweise gedrückt angesehen.

Als Beispiel könnte der Stummbutton eines Audioplayers, der mit "Mute" beschriftet ist, angeben, dass der Ton stummgeschaltet ist, indem der `aria-pressed`-Zustand auf wahr gesetzt wird. Das Label eines Umschalt-Buttons sollte sich nicht ändern, wenn sich sein Zustand ändert. In unserem Beispiel bleibt das Label "Mute", wobei ein Screenreader "Mute toggle button pressed" oder "Mute toggle button not pressed" liest, abhängig vom Wert von `aria-pressed`. Wenn das Design vorsieht, dass sich das Button-Label von "Mute" zu "Unmute" ändert, wäre ein Umschalt-Button nicht geeignet, sodass das `aria-pressed`-Attribut weggelassen würde.

### Tastaturinteraktionen

| Taste            | Funktion              |
| ---------------- | --------------------- |
| <kbd>Enter</kbd> | Aktiviert den Button. |
| <kbd>Space</kbd> | Aktiviert den Button  |

Nach der Button-Aktivierung wird der Fokus abhängig von der Art der Aktion gesetzt, die der Button ausführt. Wenn beispielsweise das Klicken auf den Button einen Dialog öffnet, sollte der Fokus auf den Dialog verschoben werden. Wenn der Button einen Dialog schließt, sollte der Fokus auf den Button zurückkehren, der den Dialog geöffnet hat, es sei denn, die Funktion, die im Kontext des Dialogs ausgeführt wird, führt logisch zu einem anderen Element. Wenn der Button den aktuellen Kontext ändert, wie das Stummschalten und Entstummen einer Audiodatei, bleibt der Fokus typischerweise auf dem Button.

### Erforderliche JavaScript-Funktionen

#### Erforderliche Event-Handler

Buttons können von Maus-, Touch- und Tastaturbenutzern bedient werden. Für native HTML-`<button>`-Elemente wird das `onclick`-Ereignis des Buttons für Mausklicks und wenn der Benutzer die <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste drückt, während der Button im Fokus ist, ausgelöst. Aber wenn ein anderes Tag verwendet wird, um einen Button zu erstellen, wird das `onclick`-Ereignis nur bei Klicks mit dem Mauszeiger ausgelöst, selbst wenn `role="button"` verwendet wird. Aus diesem Grund müssen separate Tastaturereignishandler dem Element hinzugefügt werden, damit der Button ausgelöst wird, wenn die <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste gedrückt wird.

- `onclick`
  - : Behandelt das Ereignis, das ausgelöst wird, wenn der Button mit einem Mausklick oder Touch-Ereignis aktiviert wird.
- `onKeyDown`
  - : Behandelt das Ereignis, das ausgelöst wird, wenn der Button mit der Enter- oder Space-Taste auf der Tastatur aktiviert wird. (Beachtem Sie nicht das [veraltete onKeyPress](/de/docs/Web/API/Element/keypress_event)).

## Beispiele

### Einfaches Button-Beispiel

In diesem Beispiel wurde einem `<span>`-Element die `button`-Rolle zugewiesen. Da ein `<span>`-Element verwendet wird, ist das `tabindex`-Attribut erforderlich, um den Button fokussierbar zu machen und Teil der Tabulatorreihenfolge der Seite zu sein. Der enthaltene CSS-Stil wird bereitgestellt, um das `<span>`-Element wie einen Button aussehen zu lassen und visuelle Hinweise bereitzustellen, wenn der Button im Fokus ist.

Die Event-Handler `handleBtnClick` und `handleBtnKeyDown` führen die Aktion des Buttons aus, wenn er durch einen Mausklick oder die <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste aktiviert wird. In diesem Fall ist die Aktion, einen neuen Namen zur Liste der Namen hinzuzufügen.

Probieren Sie das Beispiel aus, indem Sie einen Namen in das Textfeld eingeben. Der Button wird den Namen in die Liste hinzufügen lassen.

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

In diesem Snippet wird ein {{HTMLElement("span")}}-Element unter Verwendung der `button`-Rolle und des `aria-pressed`-Attributs in einen Umschalt-Button umgewandelt. Wenn der Button aktiviert wird, wechselt der `aria-pressed`-Wert seinen Zustand; ändert sich von `true` zu `false` und zurück.

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

## Barrierefreiheitsbedenken

Buttons sind interaktive Steuerelemente und daher fokussierbar. Wenn die `button`-Rolle einem Element hinzugefügt wird, das von sich aus nicht fokussierbar ist (wie `<span>`, `<div>` oder `<p>`), dann muss das `tabindex`-Attribut verwendet werden, um den Button fokussierbar zu machen.

> [!WARNING]
> Seien Sie vorsichtig, wenn Sie Links mit der Button-Rolle markieren. Von Buttons wird erwartet, dass sie durch die <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste ausgelöst werden, während Links erwartet werden, dass sie durch die <kbd>Enter</kbd>-Taste ausgelöst werden. Mit anderen Worten, wenn Links verwendet werden, um wie Buttons zu funktionieren, reicht das einfache Hinzufügen von `role="button"` nicht aus. Es wird auch erforderlich sein, einen Key-Event-Handler hinzuzufügen, der auf die <kbd>Space</kbd>-Taste hört, um mit nativen Buttons übereinzustimmen.

Wenn die `button`-Rolle verwendet wird, kündigen Screenreader das Element als Button an, indem sie allgemein "click" sagen, gefolgt vom zugänglichen Namen des Buttons. Der zugängliche Name ist entweder der Inhalt des Elements oder der Wert eines `aria-label` oder eines durch ein `aria-labelledby`-Attribut referenzierten Elements, oder Beschreibung, falls enthalten.

## Best Practices

Wenn ein Link die Aktion eines Buttons ausführt, hilft es Benutzern unterstützender Technologien, den Zweck des Elements zu verstehen, indem `role="button"` dem Element hinzugefügt wird. Eine bessere Lösung ist jedoch, das visuelle Design so anzupassen, dass es mit der Funktion und der ARIA-Rolle übereinstimmt. Wo immer möglich, wird empfohlen, native HTML-Buttons (`<button>`, `<input type="button">`, `<input type="submit">`, `<input type="reset">` und `<input type="image">`) anstelle der `button`-Rolle zu verwenden, da native HTML-Buttons von allen Benutzeragenten und unterstützenden Technologien unterstützt werden und Tastatur- und Fokusanforderungen standardmäßig bereitstellen, ohne zusätzliche Anpassungen erforderlich zu machen.

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
