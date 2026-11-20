---
title: "ARIA: button-Rolle"
short-title: button
slug: Web/Accessibility/ARIA/Reference/Roles/button_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die Rolle `button` ist für anklickbare Elemente vorgesehen, die bei Aktivierung durch Benutzer eine Aktion auslösen. Durch `role="button"` wird das Element von Screenreadern als Schaltfläche erkannt. Andere typische Funktionen einer Schaltfläche, etwa Klickereignisse und Tastaturbedienung, werden dadurch jedoch nicht bereitgestellt. Sie können diese selbst ergänzen, sollten aber in der Regel stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"` verwenden.

## Beschreibung

Die button-Rolle kennzeichnet ein Element gegenüber assistiven Technologien wie Screenreadern als Schaltfläche. Eine Schaltfläche ist ein Steuerelement, mit dem Aktionen ausgeführt werden, etwa ein Formular absenden, ein Dialogfeld öffnen, eine Aktion abbrechen, einen neuen Datensatz einfügen oder Informationen anzeigen. Durch `role="button"` wird das Element von assistiven Technologien als Schaltfläche erkannt. Andere typische Funktionen einer Schaltfläche, etwa Klickereignisse und Tastaturbedienung, werden dadurch jedoch nicht bereitgestellt. Sie können diese selbst ergänzen, sollten aber in der Regel stattdessen {{HTMLElement("button")}} oder {{HTMLElement("input")}} mit `type="button"` verwenden.

Diese `button`-Rolle kann zusammen mit dem Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) verwendet werden, um [Umschaltflächen zu erstellen](#umschaltflächen).

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Save</div>
```

Das obige Beispiel erstellt eine fokussierbare Schaltfläche. Damit sie jedoch wie eine Schaltfläche aussieht und funktioniert, sind JavaScript und CSS erforderlich. Bei Verwendung der Elemente {{HTMLElement("button")}} und {{HTMLElement("input")}} mit `type="button"` stehen diese Eigenschaften standardmäßig zur Verfügung:

```html
<button type="button" id="saveChanges">Save</button>
```

> [!NOTE]
> Wenn Sie `role="button"` anstelle der semantischen Elemente `<button>` oder `<input type="button">` verwenden, müssen Sie das Element fokussierbar machen und Ereignisbehandler für [`click`](/de/docs/Web/API/Element/click_event)- und [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse definieren. Dazu gehört die Verarbeitung der Tasten <kbd>Enter</kbd> und <kbd>Leertaste</kbd>, damit alle Formen der Benutzereingabe berücksichtigt werden. Siehe den [offiziellen WAI-ARIA-Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/).

Neben gewöhnlichen Schaltflächen sollte `role="button"` auch verwendet werden, wenn mit einem Element, das keine Schaltfläche ist, eine Umschaltfläche oder Menüschaltfläche erstellt wird.

Eine Umschaltfläche hat zwei Zustände: aus (nicht gedrückt) und ein (gedrückt). Die Werte `true` und `false` des Attributs [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) kennzeichnen eine Schaltfläche als Umschaltfläche.

Eine Menüschaltfläche steuert ein Menü und hat ein Attribut [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup), dessen Wert auf `menu` oder `true` gesetzt ist.

### Alle Nachfahren sind rein präsentational

Einige Arten von Benutzeroberflächenkomponenten können in einer Barrierefreiheits-API der Plattform nur Text enthalten. Barrierefreiheits-APIs können semantische Elemente innerhalb eines `button` nicht darstellen. Um diese Einschränkung zu berücksichtigen, weisen Browser allen Nachfahren eines `button`-Elements automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) zu, da die `button`-Rolle keine semantischen Kindelemente unterstützt.

Betrachten Sie beispielsweise das folgende `button`-Element, das eine Überschrift enthält.

```html
<div role="button"><h3>Title of my button</h3></div>
```

Da Nachfahren von `button` rein präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="button"><h3 role="presentation">Title of my button</h3></div>
```

Aus Sicht von Personen, die assistive Technologien verwenden, existiert die Überschrift nicht, da die vorherigen Codebeispiele im {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}} dem Folgenden entsprechen:

```html
<div role="button">Title of my button</div>
```

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
  - : Das Attribut `aria-pressed` definiert die Schaltfläche als Umschaltfläche. Sein Wert beschreibt den Zustand der Schaltfläche. `aria-pressed="false"` bedeutet, dass die Schaltfläche derzeit nicht gedrückt ist, `aria-pressed="true"`, dass sie gedrückt ist, und `aria-pressed="mixed"`, dass sie als teilweise gedrückt gilt. Wird das Attribut weggelassen oder auf den Standardwert `aria-pressed="undefined"` gesetzt, kann das Element keinen gedrückten Zustand annehmen.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Wenn die Schaltfläche eine Gruppe anderer Elemente steuert, gibt der Zustand `aria-expanded` an, ob die gesteuerte Gruppe derzeit aufgeklappt oder eingeklappt ist. Bei `aria-expanded="false"` ist die Gruppe nicht aufgeklappt, bei `aria-expanded="true"` ist sie aufgeklappt. Bei `aria-expanded="undefined"` oder wenn das Attribut fehlt, kann sie nicht aufgeklappt werden.

### Einfache Schaltflächen

Schaltflächen sollten immer einen zugänglichen Namen haben. Bei den meisten Schaltflächen entspricht dieser Name dem Text zwischen dem öffnenden und dem schließenden Tag. In manchen Fällen, beispielsweise bei Schaltflächen, die durch Symbole dargestellt werden, kann der zugängliche Name über die Attribute [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) bereitgestellt werden.

### Umschaltflächen

Eine Umschaltfläche hat normalerweise zwei Zustände: gedrückt und nicht gedrückt. Für Umschaltflächen, die andere Elemente steuern – beispielsweise weitere Umschaltflächen oder Kontrollkästchen, die nicht alle denselben Wert haben –, steht ein dritter, gemischter Zustand zur Verfügung. Ob ein Element eine Umschaltfläche ist, kann zusätzlich zur `button`-Rolle mit dem Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) angegeben werden, sofern das Element nicht bereits eine native Schaltfläche ist:

- Wenn `aria-pressed` nicht verwendet wird oder auf den Zustand „undefined“ gesetzt ist, ist die Schaltfläche keine Umschaltfläche.
- Bei `aria-pressed="false"` ist die Schaltfläche eine Umschaltfläche, die derzeit nicht gedrückt ist.
- Bei `aria-pressed="true"` ist die Schaltfläche eine Umschaltfläche, die derzeit gedrückt ist.
- Bei `aria-pressed="mixed"` gilt die Schaltfläche als teilweise gedrückt.

Eine mit „Mute“ beschriftete Stummschalttaste in einem Audioplayer könnte beispielsweise durch den Wert `true` für `aria-pressed` anzeigen, dass der Ton stummgeschaltet ist. Die Beschriftung einer Umschaltfläche sollte sich nicht ändern, wenn sich ihr Zustand ändert. In diesem Beispiel bleibt die Beschriftung „Mute“. Je nach Wert von `aria-pressed` gibt ein Screenreader etwa „Mute, Umschaltfläche gedrückt“ oder „Mute, Umschaltfläche nicht gedrückt“ aus. Wenn die Gestaltung vorsieht, die Beschriftung von „Mute“ in „Unmute“ zu ändern, ist eine Umschaltfläche nicht geeignet; das Attribut `aria-pressed` würde daher weggelassen.

### Tastaturinteraktionen

| Taste                | Funktion                    |
| -------------------- | --------------------------- |
| <kbd>Enter</kbd>     | Aktiviert die Schaltfläche. |
| <kbd>Leertaste</kbd> | Aktiviert die Schaltfläche. |

Nach der Aktivierung einer Schaltfläche hängt es von ihrer Aktion ab, wohin der Fokus gesetzt wird. Öffnet ein Klick auf die Schaltfläche beispielsweise ein Dialogfeld, sollte der Fokus in das Dialogfeld wechseln. Schließt die Schaltfläche ein Dialogfeld, sollte der Fokus zu der Schaltfläche zurückkehren, die es geöffnet hat – es sei denn, die im Dialogfeld ausgeführte Aktion führt logisch zu einem anderen Element. Ändert die Schaltfläche den aktuellen Kontext, etwa indem sie eine Audiodatei stummschaltet oder die Stummschaltung aufhebt, bleibt der Fokus normalerweise auf der Schaltfläche.

### Erforderliche JavaScript-Funktionen

#### Erforderliche Ereignisbehandler

Schaltflächen können mit Maus, Touchscreen und Tastatur bedient werden. Bei nativen HTML-Elementen `<button>` wird das `onclick`-Ereignis sowohl bei Mausklicks als auch dann ausgelöst, wenn die Schaltfläche den Fokus hat und die Taste <kbd>Leertaste</kbd> oder <kbd>Enter</kbd> gedrückt wird. Wird dagegen ein anderes Tag zum Erstellen einer Schaltfläche verwendet, wird das `onclick`-Ereignis nur bei einem Mausklick ausgelöst – selbst dann, wenn `role="button"` verwendet wird. Daher müssen dem Element separate Tastaturereignisbehandler hinzugefügt werden, damit die Schaltfläche auch beim Drücken von <kbd>Leertaste</kbd> oder <kbd>Enter</kbd> aktiviert wird.

- `onclick`
  - : Verarbeitet das Ereignis, das ausgelöst wird, wenn die Schaltfläche durch einen Mausklick oder eine Berührung aktiviert wird.
- `onKeyDown`
  - : Verarbeitet das Ereignis, das ausgelöst wird, wenn die Schaltfläche über die Tastatur mit <kbd>Enter</kbd> oder <kbd>Leertaste</kbd> aktiviert wird. (Nicht das [veraltete onKeyPress](/de/docs/Web/API/Element/keypress_event) verwenden.)

## Aspekte der Barrierefreiheit

Schaltflächen sind interaktive Steuerelemente und daher fokussierbar. Wenn die Rolle `button` einem Element hinzugefügt wird, das nicht von sich aus fokussierbar ist (etwa `<span>`, `<div>` oder `<p>`), muss das Attribut `tabindex` verwendet werden, um die Schaltfläche fokussierbar zu machen.

> [!WARNING]
> Seien Sie vorsichtig, wenn Sie Links mit der button-Rolle kennzeichnen. Schaltflächen sollten mit <kbd>Leertaste</kbd> oder <kbd>Enter</kbd> aktiviert werden können, Links dagegen mit <kbd>Enter</kbd>. Wenn sich ein Link wie eine Schaltfläche verhalten soll, reicht `role="button"` allein daher nicht aus. Zusätzlich ist ein Tastaturereignisbehandler für <kbd>Leertaste</kbd> erforderlich, damit das Verhalten dem nativer Schaltflächen entspricht.

Wenn die Rolle `button` verwendet wird, kündigen Screenreader das Element als Schaltfläche an. In der Regel geben sie „Klicken“ gefolgt vom zugänglichen Namen der Schaltfläche aus. Der zugängliche Name stammt entweder aus dem Inhalt des Elements, dem Wert von `aria-label` oder einem Element, auf das `aria-labelledby` verweist. Falls vorhanden, kann auch eine Beschreibung ausgegeben werden.

## Bewährte Vorgehensweisen

Wenn ein Link die Funktion einer Schaltfläche erfüllt, hilft `role="button"` Nutzern assistiver Technologien, die Funktion des Elements zu verstehen. Besser ist es jedoch, die visuelle Gestaltung so anzupassen, dass sie zur Funktion und zur ARIA-Rolle passt. Verwenden Sie nach Möglichkeit native HTML-Schaltflächen (`<button>`, `<input type="button">`, `<input type="submit">`, `<input type="reset">` und `<input type="image">`) statt der Rolle `button`. Native HTML-Schaltflächen werden von allen User Agents und assistiven Technologien unterstützt und erfüllen die Anforderungen an Tastaturbedienung und Fokussierung standardmäßig, ohne zusätzliche Anpassungen.

## Beispiele

### Beispiel für eine einfache Schaltfläche

In diesem Beispiel erhält ein span-Element die Rolle `button`. Da ein `<span>`-Element verwendet wird, ist das Attribut `tabindex` erforderlich, um die Schaltfläche fokussierbar und zu einem Teil der Tab-Reihenfolge der Seite zu machen. Das enthaltene CSS lässt das `<span>`-Element wie eine Schaltfläche aussehen und macht den Fokus visuell erkennbar.

Die Ereignisbehandler `handleBtnClick` und `handleBtnKeyDown` führen die Aktion der Schaltfläche aus, wenn sie durch einen Mausklick oder mit <kbd>Leertaste</kbd> oder <kbd>Enter</kbd> aktiviert wird. In diesem Fall wird der Namensliste ein neuer Name hinzugefügt.

Probieren Sie das Beispiel aus, indem Sie einen Namen in das Textfeld eingeben. Mit der Schaltfläche wird der Name einer Liste hinzugefügt.

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

### Beispiel für eine Umschaltfläche

In diesem Codeausschnitt wird ein {{HTMLElement("span")}}-Element mithilfe der Rolle `button` und des Attributs `aria-pressed` in eine Umschaltfläche umgewandelt. Beim Aktivieren der Schaltfläche wechselt der Wert von `aria-pressed` von `true` zu `false` und wieder zurück.

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

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das Element {{HTMLElement('button')}}
- Das Element {{HTMLElement("input")}}
- [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button)
- [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)
- [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset)
- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
- [Starke native Semantik in HTML5](https://html.spec.whatwg.org/multipage/dom.html#aria-usage-note)
- [Hinweise zur Verwendung von ARIA in HTML](https://w3c.github.io/using-aria/)
- [Offizieller WAI-ARIA-Beispielcode](https://www.w3.org/WAI/ARIA/apg/patterns/button/examples/button/)
