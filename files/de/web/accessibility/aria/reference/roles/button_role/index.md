---
title: "ARIA: button Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/button_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `button`-Rolle ist für klickbare Elemente gedacht, die eine Reaktion auslösen, wenn sie vom Benutzer aktiviert werden. Das Hinzufügen von `role="button"` teilt dem Screenreader mit, dass das Element ein Button ist, bietet jedoch keine Button-Funktionalität. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

## Beschreibung

Die `button`-Rolle identifiziert ein Element als Button für unterstützende Technologien wie Screenreader. Ein Button ist ein Widget, das verwendet wird, um Aktionen wie das Absenden eines Formulars, das Öffnen eines Dialogs, das Abbrechen einer Aktion oder das Ausführen eines Befehls wie das Einfügen eines neuen Eintrags oder das Anzeigen von Informationen auszuführen. Das Hinzufügen von `role="button"` teilt unterstützenden Technologien mit, dass das Element ein Button ist, bietet jedoch keine Button-Funktionalität. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

Diese `button`-Rolle kann in Kombination mit dem [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)-Attribut verwendet werden, um [Umschalt-Buttons zu erstellen](#umschalt-buttons).

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Save</div>
```

Das obige Beispiel erstellt einen fokussierbaren Button, erfordert jedoch JavaScript und CSS, um die Button-Erscheinung und -Funktionalität hinzuzufügen. Diese Eigenschaften werden standardmäßig bereitgestellt, wenn die {{HTMLElement("button")}} und {{HTMLElement("input")}} mit `type="button"`-Elementen verwendet werden:

```html
<button type="button" id="saveChanges">Save</button>
```

> [!NOTE]
> Wenn Sie `role="button"` anstelle der semantischen `<button>`- oder `<input type="button">`-Elemente verwenden, müssen Sie das Element fokussierbar machen und Ereignishandler für [`click`](/de/docs/Web/API/Element/click_event)- und [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse definieren. Dies umfasst die Handhabung des <kbd>Enter</kbd>- und <kbd>Space</kbd>-Tastendrucks, um alle Formen der Benutzereingabe zu verarbeiten. Siehe [den offiziellen WAI-ARIA-Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/).

Zusätzlich zum gewöhnlichen Button-Widget sollte `role="button"` eingeschlossen werden, wenn ein Umschalt-Button oder Menu-Button unter Verwendung eines Nicht-Button-Elements erstellt wird.

Ein Umschalt-Button ist ein zwei-stufiger Button, der entweder inaktiv (nicht gedrückt) oder aktiv (gedrückt) sein kann. Die [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) Attributwerte von `true` oder `false` kennzeichnen einen Button als Umschalt-Button.

Ein Menu-Button ist ein Button, der ein Menü steuert und eine [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) Eigenschaft hat, die entweder auf `menu` oder `true` gesetzt ist.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `button` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `button`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `button`-Element, das eine Überschrift enthält:

```html
<div role="button"><h3>Title of my button</h3></div>
```

Da die Nachkommen des `button` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="button"><h3 role="presentation">Title of my button</h3></div>
```

Aus der Perspektive des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets dem Folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} entsprechen:

```html
<div role="button">Title of my button</div>
```

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
  - : Das `aria-pressed`-Attribut definiert den Button als Umschalt-Button. Der Wert beschreibt den Zustand des Buttons. Die Werte umfassen `aria-pressed="false"`, wenn ein Button derzeit nicht gedrückt ist, `aria-pressed="true"`, um anzuzeigen, dass ein Button derzeit gedrückt ist, und `aria-pressed="mixed"`, wenn der Button als teilweise gedrückt gilt. Wenn das Attribut weggelassen wird oder auf den Standardwert `aria-pressed="undefined"` gesetzt ist, unterstützt das Element das Drücken nicht.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Wenn der Button eine Gruppe anderer Elemente steuert, zeigt der `aria-expanded`-Zustand an, ob die gesteuerte Gruppe derzeit erweitert oder reduziert ist. Wenn der Button auf `aria-expanded="false"` gesetzt ist, ist die Gruppe derzeit nicht erweitert; Wenn der Button auf `aria-expanded="true"` gesetzt ist, ist sie derzeit erweitert; Wenn der Button auf `aria-expanded="undefined"` gesetzt ist oder das Attribut weggelassen wird, ist er nicht erweiterbar.

### Grundlegende Buttons

Buttons sollten immer einen zugänglichen Namen haben. Für die meisten Buttons wird dieser Name der gleiche sein wie der Text innerhalb des Buttons, zwischen den öffnenden und schließenden Tags. In einigen Fällen, zum Beispiel bei Buttons, die durch Symbole dargestellt werden, kann der zugängliche Name aus den [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attributen bereitgestellt werden.

### Umschalt-Buttons

Ein Umschalt-Button hat normalerweise zwei Zustände: gedrückt und nicht gedrückt. Ein dritter gemischter Zustand ist verfügbar für Umschalt-Buttons, die andere Elemente steuern, wie andere Umschalt-Buttons oder Kontrollkästchen, die nicht alle denselben Wert teilen. Ob ein Element ein Umschalt-Button ist oder nicht, kann mit dem [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)-Attribut zusätzlich zur `button`-Rolle angezeigt werden (wenn das Element nicht bereits ein nativer Button ist):

- Wenn `aria-pressed` nicht verwendet wird oder auf den "undefined"-Zustand gesetzt ist, ist der Button kein Umschalt-Button.
- Wenn `aria-pressed="false"` verwendet wird, ist der Button ein Umschalt-Button, der derzeit nicht gedrückt ist.
- Wenn `aria-pressed="true"` verwendet wird, ist der Button ein Umschalt-Button, der derzeit gedrückt ist.
- Wenn `aria-pressed="mixed"` verwendet wird, wird der Button als teilweise gedrückt angesehen.

Als Beispiel könnte der Stummschalten-Button in einem Audioplayer, der mit "stumm" beschriftet ist, anzeigen, dass der Ton stummgeschaltet ist, indem der `aria-pressed`-Zustand auf wahr gesetzt wird. Das Label eines Umschalt-Buttons sollte sich nicht ändern, wenn sich sein Zustand ändert. In unserem Beispiel bleibt das Label "Stumm", wobei ein Screenreader "Stumm Umschalt-Button gedrückt" oder "Stumm Umschalt-Button nicht gedrückt" vorliest, abhängig vom Wert von `aria-pressed`. Wenn das Design vorsieht, dass das Button-Label von "Stumm" zu "Laut" wechselt, wäre ein Umschalt-Button nicht geeignet, sodass das `aria-pressed`-Attribut weggelassen würde.

### Tastaturinteraktionen

| Taste            | Funktion              |
| ---------------- | --------------------- |
| <kbd>Enter</kbd> | Aktiviert den Button. |
| <kbd>Space</kbd> | Aktiviert den Button  |

Nach der Button-Aktivierung wird der Fokus abhängig von der Art der Aktion gesetzt, die der Button ausführt. Zum Beispiel, wenn das Klicken auf den Button einen Dialog öffnet, sollte der Fokus auf den Dialog verschoben werden. Wenn der Button einen Dialog schließt, sollte der Fokus auf den Button zurückgesetzt werden, der den Dialog geöffnet hat, es sei denn, die Funktion, die im Dialog-Kontext ausgeführt wird, führt logisch zu einem anderen Element. Wenn der Button den aktuellen Kontext ändert, wie das Stummschalten und Lautschalten einer Audiodatei, bleibt der Fokus typischerweise auf dem Button.

### Erforderliche JavaScript-Funktionen

#### Erforderliche Ereignishandler

Buttons können von Maus-, Touch- und Tastaturbenutzern bedient werden. Bei nativen HTML `<button>`-Elementen wird das `onclick`-Ereignis des Buttons bei Mausklicks und wenn der Benutzer die <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste drückt, während der Button fokussiert ist, ausgelöst. Wenn jedoch ein anderes Tag verwendet wird, um einen Button zu erstellen, wird das `onclick`-Ereignis nur ausgelöst, wenn mit der Maus geklickt wird, selbst wenn `role="button"` verwendet wird. Aufgrund dessen müssen separate Tastenereignishandler zum Element hinzugefügt werden, damit der Button beim Drücken der <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste ausgelöst wird.

- `onclick`
  - : Behandelt das Ereignis, das ausgelöst wird, wenn der Button durch einen Mausklick oder ein Touch-Ereignis aktiviert wird.
- `onKeyDown`
  - : Behandelt das Ereignis, das ausgelöst wird, wenn der Button durch die Enter- oder Space-Taste auf der Tastatur aktiviert wird. (Hinweis: nicht das [veraltete onKeyPress](/de/docs/Web/API/Element/keypress_event))

## Beispiele

### Einfaches Button-Beispiel

In diesem Beispiel wurde einem `span`-Element die `button`-Rolle zugewiesen. Da ein `<span>`-Element verwendet wird, ist das `tabindex`-Attribut erforderlich, um den Button fokussierbar zu machen und Teil der Tab-Reihenfolge der Seite zu sein. Der enthaltene CSS-Stil wird bereitgestellt, um das `<span>`-Element wie einen Button aussehen zu lassen und visuelle Hinweise zu geben, wenn der Button im Fokus steht.

Die Ereignishandler `handleBtnClick` und `handleBtnKeyDown` führen die Aktion des Buttons aus, wenn er mit einem Mausklick oder der <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste aktiviert wird. In diesem Fall besteht die Aktion darin, einen neuen Namen zur Liste der Namen hinzuzufügen.

Probieren Sie das Beispiel aus, indem Sie einen Namen in das Textfeld eingeben. Der Button wird den Namen zu einer Liste hinzufügen.

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

In diesem Ausschnitt wird ein {{HTMLElement("span")}}-Element mit der Rolle `button` und dem Attribut `aria-pressed` zu einem Umschalt-Button konvertiert. Wenn der Button aktiviert wird, wechselt der `aria-pressed`-Wert die Zustände; von `true` zu `false` und zurück.

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

Buttons sind interaktive Steuerungen und somit fokussierbar. Wenn die `button`-Rolle zu einem Element hinzugefügt wird, das von sich aus nicht fokussierbar ist (wie `<span>`, `<div>` oder `<p>`), muss das `tabindex`-Attribut verwendet werden, um den Button fokussierbar zu machen.

> [!WARNING]
> Seien Sie vorsichtig beim Auszeichnen von Links mit der `button`-Rolle. Es wird erwartet, dass Buttons durch die <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste ausgelöst werden, während Links durch die <kbd>Enter</kbd>-Taste ausgelöst werden. Mit anderen Worten, wenn Links so verwendet werden, dass sie wie Buttons agieren, reicht das alleinige Hinzufügen von `role="button"` nicht aus. Es wird auch ein Tastenereignishandler erforderlich sein, der auf die <kbd>Space</kbd>-Taste hört, um konsistent mit nativen Buttons zu bleiben.

Wenn die `button`-Rolle verwendet wird, kündigen Screenreader das Element als Button an, indem sie in der Regel "klicken" sagen, gefolgt vom zugänglichen Namen des Buttons. Der zugängliche Name ist entweder der Inhalt des Elements oder der Wert eines `aria-label` oder eines über ein `aria-labelledby` referenzierten Elements, oder eine Beschreibung, falls vorhanden.

## Best Practices

Wenn ein Link die Aktion eines Buttons ausführt, hilft das Vergeben der `role="button"`-Eigenschaft den Benutzern von unterstützenden Technologien die Funktion des Elements zu verstehen. Eine bessere Lösung ist jedoch, das visuelle Design so anzupassen, dass es zur Funktion und ARIA-Rolle passt. Wo möglich, wird empfohlen, native HTML-Buttons (`<button>`, `<input type="button">`, `<input type="submit">`, `<input type="reset">` und `<input type="image">`) anstelle der `button`-Rolle zu verwenden, da native HTML-Buttons von allen Benutzeragenten und unterstützenden Technologien unterstützt werden und die Tastatur- und Fokus-Anforderungen standardmäßig ohne zusätzliche Anpassungen bereitstellen.

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
