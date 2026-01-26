---
title: "ARIA: button role"
short-title: button
slug: Web/Accessibility/ARIA/Reference/Roles/button_role
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

Die `button` Rolle ist für klickbare Elemente, die eine Reaktion auslösen, wenn sie vom Benutzer aktiviert werden. Das Hinzufügen von `role="button"` informiert den Bildschirmleser darüber, dass das Element ein Button ist, bietet jedoch keine Button-Funktionalität. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

## Beschreibung

Die button-Rolle identifiziert ein Element als Button für unterstützende Technologien wie Bildschirmleser. Ein Button ist ein Widget, das verwendet wird, um Aktionen auszuführen, z. B. das Absenden eines Formulars, das Öffnen eines Dialogs, das Abbrechen einer Aktion oder das Ausführen eines Befehls wie das Einfügen eines neuen Datensatzes oder das Anzeigen von Informationen. Das Hinzufügen von `role="button"` informiert unterstützende Technologien darüber, dass das Element ein Button ist, bietet jedoch keine Button-Funktionalität. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

Diese `button` Rolle kann in Kombination mit dem [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) Attribut verwendet werden, um [Umschalt-Buttons zu erstellen](#umschalt-buttons).

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Save</div>
```

Das obige Beispiel erstellt einen fokusierbaren Button, erfordert jedoch JavaScript und CSS, um das Aussehen und die Funktionalität eines Buttons zu implementieren. Diese Funktionen werden standardmäßig bereitgestellt, wenn Sie die {{HTMLElement("button")}}- und {{HTMLElement("input")}}-Elemente mit `type="button"` verwenden:

```html
<button type="button" id="saveChanges">Save</button>
```

> [!NOTE]
> Wenn Sie `role="button"` anstelle der semantischen `<button>`- oder `<input type="button">`-Elemente verwenden, müssen Sie das Element fokusierbar machen und Ereignishandler für [`click`](/de/docs/Web/API/Element/click_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event) definieren. Dazu gehört das Behandeln der <kbd>Enter</kbd> und <kbd>Space</kbd>-Tastenanschläge, um alle Formen der Benutzereingabe zu verarbeiten. Sehen Sie sich [den offiziellen WAI-ARIA-Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/) an.

Zusätzlich zum normalen Button-Widget sollte `role="button"` auch verwendet werden, wenn Sie einen Umschalt-Button oder Menü-Button mit einem Nicht-Button-Element erstellen.

Ein Umschalt-Button ist ein Zwei-Zustände-Button, der entweder ausgeschaltet (nicht gedrückt) oder eingeschaltet (gedrückt) sein kann. Die Werte `true` oder `false` des [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) Attributs identifizieren einen Button als Umschalt-Button.

Ein Menü-Button ist ein Button, der ein Menü steuert und ein [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) Eigenschafts-Attribut hat, das auf entweder `menu` oder `true` gesetzt ist.

### Alle Nachfahren sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-API für Zugänglichkeit dargestellt werden, nur Text enthalten können. APIs für Zugänglichkeit können semantische Elemente in einem `button` nicht darstellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahrenelemente eines `button` Elements an, da dies eine Rolle ist, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `button` Element, das eine Überschrift enthält.

```html
<div role="button"><h3>Title of my button</h3></div>
```

Da Nachfahren von `button` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="button"><h3 role="presentation">Title of my button</h3></div>
```

Aus der Perspektive des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Codeausschnitte im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} gleichwertig sind mit dem folgenden:

```html
<div role="button">Title of my button</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
  - : Das `aria-pressed` Attribut definiert den Button als Umschalt-Button. Der Wert beschreibt den Zustand des Buttons. Die Werte umfassen `aria-pressed="false"`, wenn ein Button derzeit nicht gedrückt ist, `aria-pressed="true"`, um anzuzeigen, dass ein Button derzeit gedrückt ist, und `aria-pressed="mixed"`, wenn der Button als teilweise gedrückt betrachtet wird. Wenn das Attribut weggelassen wird oder auf seinen Standardwert `aria-pressed="undefined"` gesetzt ist, unterstützt das Element nicht das Gedrückte sein.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Wenn der Button eine Gruppierung anderer Elemente steuert, gibt der `aria-expanded` Zustand an, ob die gesteuerte Gruppierung derzeit erweitert oder reduziert ist. Wenn der Button auf `aria-expanded="false"` gesetzt ist, ist die Gruppierung derzeit nicht erweitert. Wenn der Button auf `aria-expanded="true"` gesetzt ist, ist er derzeit erweitert; Wenn der Button auf `aria-expanded="undefined"` gesetzt ist oder das Attribut weggelassen wird, ist er nicht erweiterbar.

### Grundlegende Buttons

Buttons sollten immer einen zugänglichen Namen haben. Für die meisten Buttons wird dieser Name derselbe wie der Text innerhalb des Buttons sein, zwischen den öffnenden und schließenden Tags. In einigen Fällen, zum Beispiel bei Buttons, die durch Symbole dargestellt werden, kann der zugängliche Name durch die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribute bereitgestellt werden.

### Umschalt-Buttons

Ein Umschalt-Button hat typischerweise zwei Zustände: gedrückt und nicht gedrückt. Ein dritter gemischter Zustand ist für Umschalt-Buttons verfügbar, die andere Elemente steuern, wie andere Umschalt-Buttons oder Kontrollkästchen, die nicht alle denselben Wert teilen. Ob ein Element ein Umschalt-Button ist oder nicht, kann mit dem [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) Attribut zusätzlich zur `button` Rolle angegeben werden (wenn das Element nicht bereits ein nativer Button ist):

- Wenn `aria-pressed` nicht verwendet wird oder auf den "undefined"-Zustand gesetzt ist, ist der Button kein Umschalt-Button.
- Wenn `aria-pressed="false"` verwendet wird, ist der Button ein Umschalt-Button, der derzeit nicht gedrückt ist.
- Wenn `aria-pressed="true"` verwendet wird, ist der Button ein Umschalt-Button, der derzeit gedrückt ist.
- Wenn `aria-pressed="mixed"` verwendet wird, gilt der Button als teilweise gedrückt.

Als Beispiel könnte der Stummschalt-Button eines Audioplayers, der mit "Stummschalten" beschriftet ist, angeben, dass der Ton stummgeschaltet ist, indem der `aria-pressed` Zustand auf wahr gesetzt wird. Die Beschriftung eines Umschalt-Buttons sollte sich nicht ändern, wenn sich sein Zustand ändert. In unserem Beispiel bleibt die Beschriftung "Stummschalten" und ein Bildschirmleser liest "Stummschalten-Umschalt-Button gedrückt" oder "Stummschalten-Umschalt-Button nicht gedrückt", abhängig vom Wert von `aria-pressed`. Wenn das Design verlangt, dass sich die Button-Beschriftung von "Stummschalten" zu "Nicht stummschalten" ändert, wäre ein Umschalt-Button nicht geeignet, und das `aria-pressed` Attribut sollte weggelassen werden.

### Tastaturinteraktionen

| Taste            | Funktion              |
| ---------------- | --------------------- |
| <kbd>Enter</kbd> | Aktiviert den Button. |
| <kbd>Space</kbd> | Aktiviert den Button  |

Nach der Button-Aktivierung wird der Fokus je nach Art der Aktion, die der Button ausführt, gesetzt. Wenn zum Beispiel durch das Klicken auf den Button ein Dialog geöffnet wird, sollte der Fokus auf den Dialog verschoben werden. Wenn der Button einen Dialog schließt, sollte der Fokus auf den Button zurückkehren, der den Dialog geöffnet hat, es sei denn, die im Dialogkontext durchgeführte Funktion führt logisch zu einem anderen Element. Wenn der Button den aktuellen Kontext ändert, wie das Stummschalten und Zurücknehmen der Stummschaltung einer Audiodatei, verbleibt der Fokus typischerweise auf dem Button.

### Erforderliche JavaScript-Funktionen

#### Erforderliche Ereignishandler

Buttons können von Maus-, Touch- und Tastaturnutzern bedient werden. Bei nativen HTML `<button>` Elementen wird das `onclick` Ereignis sowohl bei Mausklicks als auch beim Drücken der <kbd>Space</kbd> oder <kbd>Enter</kbd> Taste ausgelöst, während der Button den Fokus hat. Wenn jedoch ein anderes Tag verwendet wird, um einen Button zu erstellen, wird das `onclick` Ereignis nur ausgelöst, wenn es mit dem Mauszeiger angeklickt wird, selbst wenn `role="button"` verwendet wird. Aus diesem Grund müssen separate Tasten-Ereignishandler zum Element hinzugefügt werden, damit der Button auch ausgelöst wird, wenn die <kbd>Space</kbd> oder <kbd>Enter</kbd> Taste gedrückt wird.

- `onclick`
  - : Behandelt das Ereignis, das ausgelöst wird, wenn der Button durch einen Mausklick oder ein Touch-Ereignis aktiviert wird.
- `onKeyDown`
  - : Behandelt das Ereignis, das ausgelöst wird, wenn der Button durch die Enter- oder Space-Taste auf der Tastatur aktiviert wird. (Beachten Sie, nicht das [veraltete onKeyPress](/de/docs/Web/API/Element/keypress_event))

## Beispiele

### Grundlegendes Button-Beispiel

In diesem Beispiel wurde einem span-Element die `button` Rolle gegeben. Da ein `<span>` Element verwendet wird, ist das `tabindex` Attribut erforderlich, um den Button fokusierbar zu machen und Teil der Tab-Reihenfolge der Seite zu sein. Der enthaltene CSS-Stil wird bereitgestellt, um das `<span>` Element wie einen Button aussehen zu lassen und visuelle Hinweise zu geben, wenn der Button den Fokus hat.

Die Ereignishandler `handleBtnClick` und `handleBtnKeyDown` führen die Aktion des Buttons aus, wenn er mit einem Mausklick oder der <kbd>Space</kbd> oder <kbd>Enter</kbd> Taste aktiviert wird. In diesem Fall ist die Aktion das Hinzufügen eines neuen Namens zur Namensliste.

Versuchen Sie das Beispiel, indem Sie einen Namen in das Textfeld eingeben. Der Button wird dazu führen, dass der Name der Liste hinzugefügt wird.

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

In diesem Ausschnitt wird ein {{HTMLElement("span")}} Element mithilfe der `button` Rolle und dem `aria-pressed` Attribut in einen Umschalt-Button umgewandelt. Wenn der Button aktiviert wird, wechselt der `aria-pressed` Wert seinen Zustand; er ändert sich von `true` zu `false` und wieder zurück.

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

## Zugänglichkeitsüberlegungen

Buttons sind interaktive Steuerelemente und daher fokusierbar. Wenn die `button` Rolle einem Element hinzugefügt wird, das selbst nicht fokusierbar ist (wie `<span>`, `<div>` oder `<p>`), muss das `tabindex` Attribut verwendet werden, um den Button fokusierbar zu machen.

> [!WARNING]
> Seien Sie vorsichtig, wenn Sie Links mit der Button-Rolle markieren. Buttons werden erwartet, mit der <kbd>Space</kbd> oder <kbd>Enter</kbd> Taste ausgelöst zu werden, während Links erwartet werden, mit der <kbd>Enter</kbd> Taste ausgelöst zu werden. Mit anderen Worten, wenn Links so verwendet werden, dass sie wie Buttons agieren, reicht das bloße Hinzufügen von `role="button"` nicht aus. Es wird außerdem erforderlich sein, einen Tasten-Ereignishandler hinzuzufügen, der auf die <kbd>Space</kbd> Taste hört, um mit nativen Buttons konsistent zu sein.

Wenn die `button` Rolle verwendet wird, kündigen Bildschirmleser das Element als Button an, indem sie „klicken“ gefolgt vom zugänglichen Namen des Buttons sagen. Der zugängliche Name ist entweder der Inhalt des Elements oder der Wert eines `aria-label` oder eines durch ein `aria-labelledby` Attribut referenzierten Elements oder, wenn vorhanden, eine Beschreibung.

## Beste Praktiken

Wenn ein Link die Aktion eines Buttons ausführt, hilft das Hinzufügen von `role="button"` den Nutzern von unterstützender Technologie, die Funktion des Elements zu verstehen. Eine bessere Lösung ist jedoch, das visuelle Design so anzupassen, dass es der Funktion und der ARIA-Rolle entspricht. Wenn möglich, wird empfohlen, native HTML-Buttons (`<button>`, `<input type="button">`, `<input type="submit">`, `<input type="reset">` und `<input type="image">`) anstelle der `button` Rolle zu verwenden, da native HTML-Buttons von allen Benutzeragenten und unterstützenden Technologien unterstützt werden und die Anforderungen an Tastatur und Fokus standardmäßig bereitgestellt werden, ohne dass zusätzliche Anpassungen erforderlich sind.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('button')}} Element
- Das {{HTMLElement("input")}} Element
- [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button)
- [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)
- [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset)
- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
- [Starke native Semantik in HTML5](https://html.spec.whatwg.org/multipage/dom.html#aria-usage-note)
- [Hinweise zur Verwendung von ARIA in HTML](https://w3c.github.io/using-aria/)
- [Offizieller WAI-ARIA Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/)
