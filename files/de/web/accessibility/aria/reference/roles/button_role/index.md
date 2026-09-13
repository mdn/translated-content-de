---
title: "ARIA: button-Rolle"
short-title: button
slug: Web/Accessibility/ARIA/Reference/Roles/button_role
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Die `button`-Rolle ist für klickbare Elemente, die eine Reaktion auslösen, wenn sie vom Benutzer aktiviert werden. Das Hinzufügen von `role="button"` teilt dem Screenreader mit, dass das Element ein Button ist, bietet jedoch nicht die sonst übliche Button-Funktionalität wie Klickereignisse und Tastatursteuerung. Sie können diese selbst hinzufügen, sollten jedoch im Allgemeinen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"` verwenden.

## Beschreibung

Die button-Rolle identifiziert ein Element als Button für unterstützende Technologien wie Screenreader. Ein Button ist ein Widget, das zum Ausführen von Aktionen wie dem Absenden eines Formulars, dem Öffnen eines Dialogs, dem Abbrechen einer Aktion oder dem Ausführen eines Befehls wie dem Einfügen eines neuen Datensatzes oder dem Anzeigen von Informationen verwendet wird. Das Hinzufügen von `role="button"` teilt unterstützenden Technologien mit, dass das Element ein Button ist, bietet jedoch nicht die sonst übliche Button-Funktionalität wie Klickereignisse und Tastatursteuerung. Sie können diese selbst hinzufügen, sollten jedoch im Allgemeinen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"` verwenden.

Diese `button`-Rolle kann in Kombination mit dem Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) verwendet werden, um [Umschalt-Buttons zu erstellen](#toggle-buttons).

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Save</div>
```

Das obige Beispiel erstellt einen fokussierbaren Button, erfordert jedoch JavaScript und CSS, um das Erscheinungsbild und die Funktionalität des Buttons zu gewährleisten. Diese Funktionen werden standardmäßig bereitgestellt, wenn die Elemente {{HTMLElement("button")}} und {{HTMLElement("input")}} mit `type="button"` verwendet werden:

```html
<button type="button" id="saveChanges">Save</button>
```

> [!NOTE]
> Wenn Sie `role="button"` anstelle der semantischen `<button>`- oder `<input type="button">`-Elemente verwenden, müssen Sie das Element fokussierbar machen und Ereignishandler für [`click`](/de/docs/Web/API/Element/click_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignisse definieren. Dies beinhaltet die Handhabung der <kbd>Enter</kbd>- und <kbd>Space</kbd>-Tastendrücke, um alle Formen der Benutzereingabe zu verarbeiten. Siehe [das offizielle WAI-ARIA-Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/).

Zusätzlich zum gewöhnlichen Button-Widget sollte `role="button"` enthalten sein, wenn ein Toggle-Button oder Menü-Button mit einem Nicht-Button-Element erstellt wird.

Ein Toggle-Button ist ein Zwei-Zustand-Button, der entweder ausgeschaltet (nicht gedrückt) oder eingeschaltet (gedrückt) sein kann. Die [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)-Attributwerte `true` oder `false` identifizieren einen Button als Toggle-Button.

Ein Menü-Button ist ein Button, der ein Menü steuert und ein [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)-Attribut hat, das auf entweder `menu` oder `true` gesetzt ist.

### Alle Nachkommen sind darstellend

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibility-API dargestellt werden, nur Text enthalten können. Accessibility-APIs haben keine Möglichkeit, semantische Elemente in einem `button` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `button`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Beispielsweise betrachten Sie das folgende `button`-Element, das eine Überschrift enthält.

```html
<div role="button"><h3>Title of my button</h3></div>
```

Da Nachkommen von `button` darstellend sind, ist der folgende Code äquivalent:

```html
<div role="button"><h3 role="presentation">Title of my button</h3></div>
```

Aus der Perspektive des Benutzers unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Code-Schnipsel dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} entsprechen:

```html
<div role="button">Title of my button</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
  - : Das `aria-pressed`-Attribut definiert den Button als Toggle-Button. Der Wert beschreibt den Zustand des Buttons. Die Werte umfassen `aria-pressed="false"`, wenn ein Button derzeit nicht gedrückt ist, `aria-pressed="true`, um anzuzeigen, dass ein Button derzeit gedrückt ist, und `aria-pressed="mixed"`, wenn der Button als teilweise gedrückt angesehen wird. Wenn das Attribut weggelassen wird oder auf seinen Standardwert `aria-pressed="undefined"` gesetzt wird, unterstützt das Element das Drücken nicht.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Wenn der Button eine Gruppierung anderer Elemente steuert, zeigt der `aria-expanded`-Zustand an, ob die kontrollierte Gruppierung momentan erweitert oder eingeklappt ist. Wenn der Button `aria-expanded="false"` gesetzt hat, ist die Gruppierung momentan nicht erweitert. Wenn der Button `aria-expanded="true"` gesetzt hat, ist sie momentan erweitert; wenn der Button `aria-expanded="undefined"` gesetzt hat oder das Attribut weggelassen wurde, ist sie nicht erweiterbar.

### Grundlegende Buttons

Buttons sollten immer einen zugänglichen Namen haben. Für die meisten Buttons entspricht dieser Name dem Text im Inneren des Buttons, zwischen den öffnenden und schließenden Tags. In einigen Fällen, beispielsweise bei Buttons, die durch Symbole dargestellt werden, kann der zugängliche Name über die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) bereitgestellt werden.

### Toggle-Buttons

Ein Toggle-Button hat typischerweise zwei Zustände: gedrückt und nicht gedrückt. Ein dritter gemischter Zustand ist verfügbar für Toggle-Buttons, die andere Elemente steuern, wie andere Toggle-Buttons oder Kontrollkästchen, die nicht alle denselben Wert teilen. Ob ein Element ein Toggle-Button ist oder nicht, kann mit dem [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)-Attribut zusätzlich zur `button`-Rolle (wenn das Element nicht bereits ein nativer Button ist) angezeigt werden:

- Wenn `aria-pressed` nicht verwendet wird oder auf den Zustand "undefined" gesetzt ist, ist der Button kein Toggle-Button.
- Wenn `aria-pressed="false"` verwendet wird, ist der Button ein Toggle-Button, der derzeit nicht gedrückt ist.
- Wenn `aria-pressed="true"` verwendet wird, ist der Button ein Toggle-Button, der derzeit gedrückt ist.
- Wenn `aria-pressed="mixed"` verwendet wird, wird der Button als teilweise gedrückt betrachtet.

Zum Beispiel könnte der Stummschaltknopf eines Audioplayers, der mit "mute" beschriftet ist, anzeigen, dass der Ton stumm ist, indem der `aria-pressed`-Zustand wahr ist. Die Beschriftung eines Toggle-Buttons sollte sich nicht ändern, wenn sich sein Zustand ändert. In unserem Beispiel bleibt die Beschriftung "Mute", wobei ein Screenreader "Mute toggle button pressed" oder "Mute toggle button not pressed" liest, abhängig vom Wert von `aria-pressed`. Wenn das Design vorsieht, dass sich die Button-Beschriftung von "Mute" zu "Unmute" ändert, wäre ein Umschaltbutton nicht angemessen, so dass das `aria-pressed`-Attribut weggelassen wird.

### Tastaturinteraktionen

| Taste            | Funktion              |
| ---------------- | --------------------- |
| <kbd>Enter</kbd> | Aktiviert den Button. |
| <kbd>Space</kbd> | Aktiviert den Button  |

Nach der Aktivierung des Buttons wird der Fokus je nach Art der Aktion, die der Button ausführt, festgelegt. Zum Beispiel, wenn das Klicken auf den Button einen Dialog öffnet, sollte der Fokus auf den Dialog übergehen. Wenn der Button einen Dialog schließt, sollte der Fokus zu dem Button zurückkehren, der den Dialog geöffnet hat, es sei denn, die im Dialogkontext ausgeführte Funktion führt logisch zu einem anderen Element. Wenn der Button den aktuellen Kontext verändert, wie das Stummschalten und Wiedereinschalten einer Audiodatei, bleibt der Fokus typischerweise auf dem Button.

### Erforderliche JavaScript-Funktionen

#### Erforderliche Ereignishandler

Buttons können durch Maus, Touch und Tastaturbenutzer bedient werden. Für native HTML-`<button>`-Elemente wird das `onclick`-Ereignis des Buttons für Mausklicks und wenn der Benutzer <kbd>Space</kbd> oder <kbd>Enter</kbd> drückt, während der Button den Fokus hat, ausgelöst. Wenn jedoch ein anderes Tag verwendet wird, um einen Button zu erstellen, wird das `onclick`-Ereignis nur ausgelöst, wenn es durch den Mauskursor geklickt wird, selbst wenn `role="button"` verwendet wird. Aus diesem Grund müssen dem Element separate Taste-Ereignishandler hinzugefügt werden, damit der Button ausgelöst wird, wenn die <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste gedrückt wird.

- `onclick`
  - : Behandelt das Ereignis, das ausgelöst wird, wenn der Button durch einen Mausklick oder Touch-Event aktiviert wird.
- `onKeyDown`
  - : Behandelt das Ereignis, das ausgelöst wird, wenn der Button mit der Enter- oder Space-Taste auf der Tastatur aktiviert wird. (Hinweis: nicht das [veraltete onKeyPress](/de/docs/Web/API/Element/keypress_event))

## Beispiele

### Einfaches Button-Beispiel

In diesem Beispiel wurde einem `span`-Element die `button`-Rolle zugewiesen. Da ein `<span>`-Element verwendet wird, ist das `tabindex`-Attribut erforderlich, um den Button fokussierbar zu machen und Teil der Tabulatorreihenfolge der Seite. Der enthaltene CSS-Stil sorgt dafür, dass das `<span>`-Element wie ein Button aussieht und visuelle Hinweise bietet, wenn der Button den Fokus hat.

Die Ereignishandler `handleBtnClick` und `handleBtnKeyDown` führen die Aktion des Buttons aus, wenn er durch einen Mausklick oder die <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste aktiviert wird. In diesem Fall besteht die Aktion darin, einen neuen Namen zur Namensliste hinzuzufügen.

Probieren Sie das Beispiel aus, indem Sie einen Namen in das Textfeld eingeben. Der Button wird den Namen der Liste hinzufügen.

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

In diesem Schnipsel wird ein {{HTMLElement("span")}}-Element mit der `button`-Rolle und dem `aria-pressed`-Attribut in einen Toggle-Button umgewandelt. Wenn der Button aktiviert wird, wechselt der `aria-pressed`-Wert die Zustände; von `true` zu `false` und wieder zurück.

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

## Zugänglichkeitshinweise

Buttons sind interaktive Steuerelemente und daher fokussierbar. Wenn die `button`-Rolle zu einem Element hinzugefügt wird, das von sich aus nicht fokussierbar ist (wie `<span>`, `<div>` oder `<p>`), muss das `tabindex`-Attribut verwendet werden, um den Button fokussierbar zu machen.

> [!WARNING]
> Seien Sie vorsichtig beim Markieren von Links mit der Button-Rolle. Es wird erwartet, dass Buttons mit der <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste ausgelöst werden, während bei Links erwartet wird, dass sie mit der <kbd>Enter</kbd>-Taste ausgelöst werden. Mit anderen Worten, wenn Links wie Buttons verwendet werden sollen, reicht es nicht aus, nur `role="button"` hinzuzufügen. Es ist auch notwendig, einen Taste-Ereignishandler hinzuzufügen, der auf die <kbd>Space</kbd>-Taste hört, um mit nativen Buttons konsistent zu sein.

Wenn die `button`-Rolle verwendet wird, verkünden Screenreader das Element als Button, indem sie im Allgemeinen "Klick" gefolgt vom zugänglichen Namen des Buttons sagen. Der zugängliche Name ist entweder der Inhalt des Elements oder der Wert eines `aria-label` oder eines Elements, das durch ein `aria-labelledby`-Attribut referenziert wird, oder eine Beschreibung, falls enthalten.

## Best Practices

Wenn ein Link die Aktion eines Buttons ausführt, kann das Vergeben der `role="button"` Rolle den Benutzern unterstützender Technologien helfen, die Funktion des Elements zu verstehen. Eine bessere Lösung ist jedoch, das visuelle Design so anzupassen, dass es der Funktion und der ARIA-Rolle entspricht. Wo möglich, wird empfohlen, native HTML-Buttons (`<button>`, `<input type="button">`, `<input type="submit">`, `<input type="reset">` und `<input type="image">`) anstelle der `button`-Rolle zu verwenden, da native HTML-Buttons von allen Benutzeragenten und unterstützenden Technologien unterstützt werden und die Tastatur- und Fokusanforderungen standardmäßig bieten, ohne dass zusätzliche Anpassungen erforderlich sind.

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
