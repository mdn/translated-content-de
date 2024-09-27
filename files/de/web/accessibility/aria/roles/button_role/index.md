---
title: "ARIA: button Rolle"
slug: Web/Accessibility/ARIA/Roles/button_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `button`-Rolle ist für anklickbare Elemente gedacht, die bei Aktivierung durch den Benutzer eine Aktion auslösen. Durch das Hinzufügen von `role="button"` wird dem Bildschirmleser mitgeteilt, dass das Element ein Knopf ist, aber es wird keine Knopffunktionalität bereitgestellt. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

## Beschreibung

Die `button`-Rolle identifiziert ein Element als Knopf für unterstützende Technologien wie Bildschirmleser. Ein Knopf ist ein Widget, das verwendet wird, um Aktionen wie das Übermitteln eines Formulars, das Öffnen eines Dialogs, das Abbrechen einer Aktion oder das Ausführen eines Befehls wie das Einfügen eines neuen Datensatzes oder das Anzeigen von Informationen auszuführen. Das Hinzufügen von `role="button"` teilt unterstützenden Technologien mit, dass das Element ein Knopf ist, bietet jedoch keine Knopffunktionalität. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

Diese `button`-Rolle kann in Kombination mit dem [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)-Attribut verwendet werden, um [Umschaltknöpfe zu erstellen](#umschaltknöpfe).

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Save</div>
```

Das obige Beispiel erstellt einen fokussierbaren Knopf, erfordert jedoch JavaScript und CSS, um das Erscheinungsbild und die Funktionalität eines Knopfes zu integrieren. Diese werden standardmäßig bereitgestellt, wenn die Elemente {{HTMLElement("button")}} und {{HTMLElement("input")}} mit `type="button"` verwendet werden:

```html
<button type="button" id="saveChanges">Save</button>
```

> [!NOTE]
> Wenn `role="button"` anstelle der semantischen `<button>`- oder `<input type="button">`-Elemente verwendet wird, müssen Sie das Element fokussierbar machen und Ereignishandler für [`click`](/de/docs/Web/API/Element/click_event)- und [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse definieren. Dies beinhaltet die Verarbeitung der <kbd>Enter</kbd>- und <kbd>Leertaste</kbd>-Tastendrücke, um alle Formen der Benutzereingabe zu verarbeiten. Siehe [den offiziellen WAI-ARIA-Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/).

Zusätzlich zum gewöhnlichen Knopf-Widget sollte `role="button"` enthalten sein, wenn ein Umschaltknopf oder Menükopf mit einem Nicht-Knopf-Element erstellt wird.

Ein Umschaltknopf ist ein zweistufiger Knopf, der entweder aus (nicht gedrückt) oder ein (gedrückt) sein kann. Die Werte des [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)-Attributs `true` oder `false` identifizieren einen Knopf als Umschaltknopf.

Ein Menükopf ist ein Knopf, der ein Menü steuert und eine [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)-Eigenschaft mit dem Wert `menu` oder `true` gesetzt hat.

### Alle Nachkommen sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibility-API dargestellt werden, nur Text enthalten können. Accessibility-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `button`-Elements darzustellen. Um dieses Limit zu umgehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines `button`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie beispielsweise das folgende `button`-Element, das eine Überschrift enthält.

```html
<div role="button"><h3>Title of my button</h3></div>
```

Da Nachkommen von `button` präsentationell sind, ist der folgende Code äquivalent:

```html
<div role="button"><h3 role="presentation">Title of my button</h3></div>
```

Aus der Perspektive eines Benutzers mit unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Codeausschnitte dem folgenden im [Barrierefreiheitsbaum](/de/docs/Glossary/Accessibility_tree) entsprechen:

```html
<div role="button">Title of my button</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
  - : Das `aria-pressed`-Attribut definiert den Knopf als Umschaltknopf. Der Wert beschreibt den Zustand des Knopfes. Die Werte umfassen `aria-pressed="false"` wenn ein Knopf derzeit nicht gedrückt ist, `aria-pressed="true"` um anzuzeigen, dass ein Knopf derzeit gedrückt ist, und `aria-pressed="mixed"` wenn der Knopf als teilweise gedrückt gilt. Wenn das Attribut ausgelassen oder auf den Standardwert `aria-pressed="undefined"` gesetzt ist, unterstützt das Element das Drücken nicht.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Wenn der Knopf eine Gruppierung anderer Elemente steuert, gibt der `aria-expanded`-Zustand an, ob die gesteuerte Gruppierung derzeit erweitert oder reduziert ist. Wenn der Knopf `aria-expanded="false"` gesetzt hat, ist die Gruppierung derzeit nicht erweitert; wenn der Knopf `aria-expanded="true"` gesetzt hat, ist sie derzeit erweitert; wenn der Knopf `aria-expanded="undefined"` gesetzt hat oder das Attribut ausgelassen wird, ist sie nicht erweiterbar.

### Grundlegende Knöpfe

Knöpfe sollten immer einen zugänglichen Namen haben. Bei den meisten Knöpfen entspricht dieser Name dem Text innerhalb des Knopfes, zwischen dem öffnenden und schließenden Tag. In einigen Fällen, z. B. bei Knöpfen, die durch Symbole dargestellt werden, kann der zugängliche Name über die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) bereitgestellt werden.

### Umschaltknöpfe

Ein Umschaltknopf hat typischerweise zwei Zustände: gedrückt und nicht gedrückt. Ein dritter gemischter Zustand ist verfügbar für Umschaltknöpfe, die andere Elemente steuern, wie z. B. andere Umschaltknöpfe oder Kontrollkästchen, die nicht alle denselben Wert haben. Ob ein Element ein Umschaltknopf ist, kann mit dem [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)-Attribut zusätzlich zur `button`-Rolle angezeigt werden (wenn das Element nicht bereits ein nativer Knopf ist):

- Wenn `aria-pressed` nicht verwendet wird oder auf den "undefined"-Zustand gesetzt ist, ist der Knopf kein Umschaltknopf.
- Wenn `aria-pressed="false"` verwendet wird, ist der Knopf ein Umschaltknopf, der derzeit nicht gedrückt ist.
- Wenn `aria-pressed="true"` verwendet wird, ist der Knopf ein Umschaltknopf, der derzeit gedrückt ist.
- Wenn `aria-pressed="mixed"` verwendet wird, gilt der Knopf als teilweise gedrückt.

Zum Beispiel könnte der Stummschaltknopf in einem Audioplayer, der mit "Stummschalten" beschriftet ist, anzeigen, dass der Ton stummgeschaltet ist, indem der `aria-pressed` Zustand auf wahr gesetzt wird. Die Beschriftung eines Umschaltknopfes sollte sich nicht ändern, wenn sich sein Zustand ändert. In unserem Beispiel bleibt die Beschriftung "Stummschalten", wobei ein Bildschirmleser "Stummschalten-Umschaltknopf gedrückt" oder "Stummschalten-Umschaltknopf nicht gedrückt" liest, abhängig vom Wert von `aria-pressed`. Wenn das Design eine Änderung der Knopf-Beschriftung von "Stummschalten" zu "Ton einschalten" erfordert, wäre ein Umschaltknopf nicht geeignet, daher würde das `aria-pressed`-Attribut weggelassen werden.

### Tastaturinteraktionen

| Taste                | Funktion             |
| -------------------- | -------------------- |
| <kbd>Enter</kbd>     | Aktiviert den Knopf. |
| <kbd>Leertaste</kbd> | Aktiviert den Knopf  |

Nach der Aktivierung des Knopfes wird der Fokus abhängig von der Art der Aktion gesetzt, die der Knopf ausführt. Wenn beispielsweise das Klicken auf den Knopf einen Dialog öffnet, sollte der Fokus zum Dialog verschoben werden. Wenn der Knopf einen Dialog schließt, sollte der Fokus zum Knopf zurückkehren, der den Dialog geöffnet hat, es sei denn, die Funktion, die im Dialogkontext ausgeführt wird, führt logisch zu einem anderen Element. Wenn der Knopf den aktuellen Kontext ändert, z. B. ein Audiofile stummschaltet und wieder aktiviert, bleibt der Fokus normalerweise auf dem Knopf.

### Erforderliche JavaScript-Funktionen

#### Erforderliche Ereignishandler

Knöpfe können von Maus-, Touch- und Tastaturnutzern bedient werden. Bei nativen HTML-`<button>`-Elementen wird das `onclick`-Ereignis des Knopfes sowohl bei Mausklicks als auch beim Drücken der <kbd>Leertaste</kbd> oder <kbd>Enter</kbd> ausgelöst, während der Knopf im Fokus steht. Wenn jedoch ein anderes Tag zum Erstellen eines Knopfes verwendet wird, wird das `onclick`-Ereignis nur bei einem Mausklick ausgelöst, auch wenn `role="button"` verwendet wird. Aus diesem Grund müssen separate Tastenereignishandler hinzugefügt werden, damit der Knopf auch bei Drücken der <kbd>Leertaste</kbd> oder <kbd>Enter</kbd>-Taste ausgelöst wird.

- `onclick`
  - : Verarbeitet das Ereignis, das ausgelöst wird, wenn der Knopf durch einen Mausklick oder Touch-Ereignis aktiviert wird.
- `onKeyDown`
  - : Verarbeitet das Ereignis, das ausgelöst wird, wenn der Knopf durch die Eingabe der Enter- oder Leertaste auf der Tastatur aktiviert wird. (Beachten Sie nicht das [veraltete onKeyPress](/de/docs/Web/API/Element/keypress_event))

## Beispiele

### Grundlegendes Knopfbeispiel

In diesem Beispiel wurde einem `span`-Element die `button`-Rolle zugeordnet. Da ein `<span>`-Element verwendet wird, ist das `tabindex`-Attribut erforderlich, um den Knopf fokussierbar und Teil der Tab-Reihenfolge der Seite zu machen. Der enthaltene CSS-Stil dient dazu, das `<span>`-Element wie einen Knopf aussehen zu lassen und visuelle Hinweise zu bieten, wenn der Knopf im Fokus steht.

Die Ereignishandler `handleBtnClick` und `handleBtnKeyDown` führen die Aktion des Knopfes aus, wenn sie durch einen Mausklick oder die <kbd>Leertaste</kbd> oder <kbd>Enter</kbd>-Taste aktiviert wird. In diesem Fall besteht die Aktion darin, einen neuen Namen zur Liste der Namen hinzuzufügen.

Probieren Sie das Beispiel aus, indem Sie einen Namen in das Textfeld hinzufügen. Der Knopf wird bewirken, dass der Name zu einer Liste hinzugefügt wird.

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

### Umschaltknopf-Beispiel

In diesem Beispiel wird ein {{HTMLElement("span")}}-Element mit der `button`-Rolle und dem `aria-pressed`-Attribut in einen Umschaltknopf umgewandelt. Wenn der Knopf aktiviert wird, wechselt der `aria-pressed`-Wert die Zustände; von `true` zu `false` und zurück.

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

Knöpfe sind interaktive Steuerelemente und daher fokussierbar. Wenn die `button`-Rolle zu einem Element hinzugefügt wird, das von sich aus nicht fokussierbar ist (wie `<span>`, `<div>` oder `<p>`), muss das `tabindex`-Attribut verwendet werden, um den Knopf fokussierbar zu machen.

> [!WARNING]
> Seien Sie vorsichtig beim Markieren von Links mit der `button`-Rolle. Von Knöpfen wird erwartet, dass sie mit der <kbd>Leertaste</kbd> oder der <kbd>Enter</kbd>-Taste ausgelöst werden, während von Links erwartet wird, dass sie mit der <kbd>Enter</kbd>-Taste ausgelöst werden. Mit anderen Worten, wenn Links verwendet werden, um sich wie Knöpfe zu verhalten, reicht das Hinzufügen von `role="button"` allein nicht aus. Es ist auch notwendig, einen Tastenereignishandler hinzuzufügen, der auf die <kbd>Leertaste</kbd>-Taste hört, um konsistent mit nativen Knöpfen zu sein.

Wenn die `button`-Rolle verwendet wird, kündigen Bildschirmleser das Element als Knopf an, indem sie in der Regel "Klicken" zusammen mit dem zugänglichen Namen des Knopfes sagen. Der zugängliche Name ist entweder der Inhalt des Elements oder der Wert eines `aria-label` oder das durch ein `aria-labelledby`-Attribut referenzierte Element oder die Beschreibung, falls vorhanden.

## Beste Praktiken

Wenn ein Link die Aktion eines Knopfes ausführt, hilft das Geben des Elements `role="button"` Benutzern unterstützender Technologien, die Funktion des Elements zu verstehen. Eine bessere Lösung besteht jedoch darin, das visuelle Design so anzupassen, dass es der Funktion und der ARIA-Rolle entspricht. Wo möglich, wird empfohlen, native HTML-Knöpfe (`<button>`, `<input type="button">`, `<input type="submit">`, `<input type="reset">` und `<input type="image">`) anstelle der `button`-Rolle zu verwenden, da native HTML-Knöpfe von allen Benutzeragenten und unterstützenden Technologien unterstützt werden und Tastatur- und Fokusanforderungen standardmäßig bereitstellen, ohne dass zusätzliche Anpassungen erforderlich sind.

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
