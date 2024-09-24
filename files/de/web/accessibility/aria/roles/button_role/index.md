---
title: "ARIA: Rolle button"
slug: Web/Accessibility/ARIA/Roles/button_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die Rolle `button` ist für klickbare Elemente, die bei Aktivierung durch den Benutzer eine Reaktion auslösen. Das Hinzufügen von `role="button"` teilt dem Screenreader mit, dass das Element ein Button ist, bietet jedoch keine Button-Funktionalität. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

## Beschreibung

Die Button-Rolle identifiziert ein Element als Button für unterstützende Technologien wie Screenreader. Ein Button ist ein Widget, das Aktionen wie das Absenden eines Formulars, das Öffnen eines Dialogs, das Abbrechen einer Aktion oder das Ausführen eines Befehls wie das Einfügen eines neuen Datensatzes oder das Anzeigen von Informationen ausführt. Das Hinzufügen von `role="button"` teilt unterstützender Technologie mit, dass das Element ein Button ist, bietet jedoch keine Button-Funktionalität. Verwenden Sie stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"`.

Diese `button`-Rolle kann in Kombination mit dem Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) verwendet werden, um [Umschaltbuttons zu erstellen](#umschaltbuttons).

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Speichern</div>
```

Das obige Beispiel erstellt einen fokussierbaren Button, erfordert jedoch JavaScript und CSS, um das Erscheinungsbild und die Funktionalität des Buttons einzuschließen. Diese Funktionen werden standardmäßig bereitgestellt, wenn die Elemente {{HTMLElement("button")}} und {{HTMLElement("input")}} mit `type="button"` verwendet werden:

```html
<button type="button" id="saveChanges">Speichern</button>
```

> [!NOTE]
> Wenn Sie `role="button"` anstelle der semantischen `<button>`- oder `<input type="button">`-Elemente verwenden, müssen Sie das Element fokussierbar machen und Ereignishandler für Klick- und Tastendruckereignisse wie {{domxref("Element/click_event", "click")}} und {{domxref("Element/keydown_event", "keydown")}} definieren. Dies umfasst das Handling der <kbd>Enter</kbd> und <kbd>Space</kbd>-Tastendrücke, um alle Formen der Benutzereingabe zu verarbeiten. Siehe [den offiziellen WAI-ARIA Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/).

Neben dem gewöhnlichen Button-Widget sollte `role="button"` hinzugefügt werden, wenn ein Umschalt- oder Menübutton unter Verwendung eines Nicht-Button-Elements erstellt wird.

Ein Umschaltknopf ist ein zweistufiger Knopf, der entweder ausgeschaltet (nicht gedrückt) oder eingeschaltet (gedrückt) sein kann. Die Attributwerte [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) `true` oder `false` identifizieren einen Button als Umschaltknopf.

Ein Menüknopf ist ein Knopf, der ein Menü steuert und ein [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)-Attribut hat, das auf entweder `menu` oder `true` gesetzt ist.

### Alle Nachkommen sind präsentationsbezogen

Es gibt einige Arten von Benutzeroberflächenkomponenten, die bei ihrer Darstellung in einer Plattform-Zugänglichkeit-API nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente in einem `button` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle untergeordneten Elemente eines jeden `button`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie beispielsweise das folgende `button`-Element, das eine Überschrift enthält.

```html
<div role="button"><h3>Titel meines Buttons</h3></div>
```

Da die Nachkommen von `button` präsentationsbezogen sind, ist der folgende Code gleichwertig:

```html
<div role="button"><h3 role="presentation">Titel meines Buttons</h3></div>
```

Aus der Perspektive des Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorhergehenden Code-Schnipsel gleichwertig mit dem folgenden im [Zugänglichkeitsbaum](/de/docs/Glossary/Accessibility_tree) sind:

```html
<div role="button">Titel meines Buttons</div>
```

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
  - : Das `aria-pressed`-Attribut definiert den Button als Umschaltknopf. Der Wert beschreibt den Zustand des Buttons. Die Werte umfassen `aria-pressed="false"`, wenn ein Button derzeit nicht gedrückt ist, `aria-pressed="true"`, um anzuzeigen, dass ein Button derzeit gedrückt ist, und `aria-pressed="mixed"`, wenn der Button als teilweise gedrückt betrachtet wird. Wenn das Attribut weggelassen wird oder auf den Standardwert `aria-pressed="undefined"` gesetzt ist, unterstützt das Element nicht das Gedrücktsein.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Wenn der Button eine Gruppierung anderer Elemente steuert, gibt der `aria-expanded`-Zustand an, ob die kontrollierte Gruppierung momentan erweitert oder reduziert ist. Wenn der Button `aria-expanded="false"` hat, ist die Gruppierung derzeit nicht erweitert; wenn der Button `aria-expanded="true"` hat, ist sie derzeit erweitert; wenn `aria-expanded="undefined"` gesetzt oder das Attribut weggelassen wird, ist sie nicht erweiterbar.

### Grundlegende Buttons

Buttons sollten immer einen zugänglichen Namen haben. Für die meisten Buttons wird dieser Name derselbe wie der Text im Button zwischen den öffnenden und schließenden Tags sein. In einigen Fällen, z. B. Buttons, die durch Symbole dargestellt werden, kann der zugängliche Name durch die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) bereitgestellt werden.

### Umschaltbuttons

Ein Umschaltbutton hat normalerweise zwei Zustände: gedrückt und nicht gedrückt. Ein dritter gemischter Zustand ist verfügbar für Umschaltbuttons, die andere Elemente steuern, wie andere Umschaltbuttons oder Kontrollkästchen, die nicht alle denselben Wert teilen. Ob ein Element ein Umschaltbutton ist oder nicht, kann mit dem Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) zusätzlich zur `button`-Rolle (wenn das Element nicht bereits ein nativer Button ist) angezeigt werden:

- Wenn `aria-pressed` nicht benutzt wird oder auf den "undefined"-Zustand eingestellt ist, ist der Button kein Umschaltbutton.
- Wenn `aria-pressed="false"` verwendet wird, ist der Button ein Umschaltbutton, der derzeit nicht gedrückt ist.
- Wenn `aria-pressed="true"` verwendet wird, ist der Button ein Umschaltbutton, der derzeit gedrückt ist.
- wenn `aria-pressed="mixed"` verwendet wird, wird der Button als teilweise gedrückt betrachtet.

Ein Beispiel: Der Stummschalt-Button eines Audio-Players, der mit "stumm" beschriftet ist, könnte anzeigen, dass der Ton stummgeschaltet ist, indem der `aria-pressed`-Zustand auf true gesetzt wird. Das Label eines Umschaltbuttons sollte sich nicht ändern, wenn sich sein Zustand ändert. In unserem Beispiel bleibt das Label "Stumm", wobei ein Screenreader "Stumm Umschaltbutton gedrückt" oder "Stumm Umschaltbutton nicht gedrückt" je nach dem Wert von `aria-pressed` liest. Wenn das Design erfordert, dass sich das Button-Label von "Stumm" auf "Stumm aus" ändert, wäre ein Umschaltbutton nicht geeignet, daher würde das `aria-pressed`-Attribut weggelassen werden.

### Tastaturinteraktionen

| Taste           | Funktion               |
| --------------- | ---------------------- |
| <kbd>Enter</kbd> | Aktiviert den Button.  |
| <kbd>Space</kbd> | Aktiviert den Button   |

Nach der Button-Aktivierung wird der Fokus abhängig von der Art der Aktion gesetzt, die der Button ausführt. Zum Beispiel, wenn das Klicken auf den Button einen Dialog öffnet, sollte der Fokus auf den Dialog wechseln. Wenn der Button einen Dialog schließt, sollte sich der Fokus auf den Button zurücksetzen, der den Dialog geöffnet hat, es sei denn, die im Dialogkontext ausgeführte Funktion führt logisch zu einem anderen Element. Wenn der Button den aktuellen Kontext ändert, wie das Stummschalten und Aufheben der Stummschaltung einer Audiodatei, bleibt der Fokus typischerweise auf dem Button.

### Erforderliche JavaScript-Funktionen

#### Erforderliche Ereignishandler

Buttons können von Maus-, Touch- und Tastaturbenutzern bedient werden. Für native HTML `<button>`-Elemente wird das `onclick`-Ereignis des Buttons ausgelöst, wenn bei einem Mausklick oder wenn der Benutzer <kbd>Space</kbd> oder <kbd>Enter</kbd> drückt, während der Button den Fokus hat. Wenn jedoch ein anderes Tag verwendet wird, um einen Button zu erstellen, wird das `onclick`-Ereignis nur ausgelöst, wenn es mit dem Mauszeiger angeklickt wird, selbst wenn `role="button"` verwendet wird. Aufgrund dessen müssen separate Tastenevent-Handler zum Element hinzugefügt werden, damit der Button ausgelöst wird, wenn die <kbd>Space</kbd> oder <kbd>Enter</kbd>-Taste gedrückt wird.

- `onclick`
  - : Behandelt das Ereignis, wenn der Button mittels Mausklick oder Touch-Ereignis aktiviert wird.
- `onKeyDown`
  - : Behandelt das Ereignis, wenn der Button mittels Enter- oder Space-Taste auf der Tastatur aktiviert wird. (Beachten Sie, dass der [veraltete onKeyPress](/de/docs/Web/API/Element/keypress_event) nicht verwendet wird)

## Beispiele

### Basic Button Beispiel

In diesem Beispiel wurde einem span-Element die Rolle `button` hinzugefügt. Da ein `<span>`-Element verwendet wird, ist das `tabindex`-Attribut erforderlich, um den Button fokussierbar zu machen und in die Tabulator-Reihenfolge der Seite aufzunehmen. Der enthaltene CSS-Stil soll das `<span>`-Element wie einen Button aussehen lassen und visuelle Hinweise geben, wenn der Button im Fokus steht.

Die Event-Handler `handleBtnClick` und `handleBtnKeyDown` führen die Aktion des Buttons aus, wenn sie mit einem Mausklick oder der <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste aktiviert werden. In diesem Fall besteht die Aktion darin, einen neuen Namen zur Namensliste hinzuzufügen.

Probieren Sie das Beispiel aus, indem Sie einen Namen in das Textfeld eingeben. Der Button wird den Namen zur Liste hinzufügen.

#### HTML

```html
<h1>ARIA Button Beispiel</h1>
<ul id="nameList"></ul>
<label for="newName">Geben Sie Ihren Namen ein: </label>
<input type="text" id="newName" />
<span
  role="button"
  tabindex="0"
  onclick="handleCommand(event)"
  onKeyDown="handleCommand(event)"
  >Namen hinzufügen</span
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
  // Behandelt sowohl Mausklicks als auch Tastatur
  // Aktivieren mit Enter oder Space

  // Tastendrücke außer Enter und Space sollten keinen Befehl auslösen
  if (
    event instanceof KeyboardEvent &&
    event.key !== "Enter" &&
    event.key !== " "
  ) {
    return;
  }

  // Holen Sie sich den neuen Namenswert aus dem Eingabeelement
  const newNameInput = document.getElementById("newName");
  const name = newNameInput.value;
  newNameInput.value = ""; // Textfeld leeren
  newNameInput.focus(); // Textfeld fokussieren, um das Eingeben und Hinzufügen eines weiteren Namens zu ermöglichen.

  // Leere Einträge nicht zur Liste hinzufügen
  if (name.length > 0) {
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(name));

    // Fügen Sie den neuen Namen zur Liste hinzu
    const list = document.getElementById("nameList");
    list.appendChild(listItem);
  }
}
```

{{EmbedLiveSample("Basic_button_example")}}

### Beispiel für einen Umschaltbutton

In diesem Ausschnitt wird ein {{HTMLElement("span")}}-Element mit der Rolle `button` und dem Attribut `aria-pressed` in einen Umschaltbutton umgewandelt. Wenn der Button aktiviert wird, wechselt der `aria-pressed`-Wert seinen Zustand; von `true` zu `false` und zurück.

#### HTML

```html
<button
  type="button"
  onclick="handleBtnClick(event)"
  onKeyDown="handleBtnKeyDown(event)">
  Audio stummschalten
</button>

<span
  role="button"
  tabindex="0"
  aria-pressed="false"
  onclick="handleBtnClick(event)"
  onKeyDown="handleBtnKeyDown(event)">
  Audio stummschalten
</span>

<audio
  id="audio"
  src="https://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3">
  Ihr Browser unterstützt das `audio` Element nicht.
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
  // Überprüfen, ob Space oder Enter gedrückt wurden
  // "Spacebar" für IE11-Unterstützung
  if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
    // Das Standardverhalten verhindern, um Scrollen zu verhindern, wenn Space gedrückt wird
    event.preventDefault();
    toggleButton(event.target);
  }
}

function toggleButton(element) {
  const audio = document.getElementById("audio");

  // Überprüfen, ob der Button gedrückt ist
  const pressed = element.getAttribute("aria-pressed") === "true";

  // Ändern Sie aria-pressed in den entgegengesetzten Zustand
  element.setAttribute("aria-pressed", !pressed);

  // Wechseln Sie den Spielzustand der Audiodatei
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

Buttons sind interaktive Steuerelemente und daher fokussierbar. Wenn die `button`-Rolle einem Element hinzugefügt wird, das von sich aus nicht fokussierbar ist (wie `<span>`, `<div>` oder `<p>`), muss das `tabindex`-Attribut verwendet werden, um den Button fokussierbar zu machen.

> [!WARNING]
> Seien Sie vorsichtig, wenn Sie Links mit der Button-Rolle markieren. Buttons werden erwartet, dass sie mit der <kbd>Space</kbd> oder <kbd>Enter</kbd>-Taste ausgelöst werden, während Links erwartet werden, dass sie mit der <kbd>Enter</kbd>-Taste ausgelöst werden. Mit anderen Worten, wenn Links verwendet werden, um wie Buttons zu agieren, allein das Hinzufügen von `role="button"` ist nicht ausreichend. Es wird auch notwendig sein, einen Tastenereignis-Handler hinzuzufügen, der die <kbd>Space</kbd>-Taste überwacht, um mit nativen Buttons konsistent zu bleiben.

Wenn die `button`-Rolle verwendet wird, kündigen Screenreader das Element als Button an und sagen im Allgemeinen "klicken" gefolgt vom zugänglichen Namen des Buttons. Der zugängliche Name ist entweder der Inhalt des Elements oder der Wert eines `aria-label` oder ein Element, das durch ein `aria-labelledby`-Attribut referenziert wird, oder die Beschreibung, falls eingeschlossen.

## Beste Praktiken

Wenn ein Link die Aktion eines Buttons ausführt, hilft das Geben des Elements `role="button"` den Nutzern von unterstützender Technologie, die Funktion des Elements zu verstehen. Eine bessere Lösung ist jedoch, das visuelle Design so anzupassen, dass es der Funktion und der ARIA-Rolle entspricht. Wo möglich, wird empfohlen, native HTML-Buttons (`<button>`, `<input type="button">`, `<input type="submit">`, `<input type="reset">` und `<input type="image">`) anstelle der `button`-Rolle zu verwenden, da native HTML-Buttons von allen Benutzeragenten und unterstützender Technologie unterstützt werden und standardmäßig Tastatur- und Fokusanforderungen bieten, ohne zusätzlichen Anpassungsbedarf.

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
- [Offizieller WAI-ARIA-Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/)
