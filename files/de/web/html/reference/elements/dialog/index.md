---
title: "<dialog>: Das Dialogelement"
slug: Web/HTML/Reference/Elements/dialog
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<dialog>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert ein modales oder nicht-modales Dialogfeld oder eine andere interaktive Komponente, wie beispielsweise eine ablehnbare Warnung, einen Inspektor oder ein Unterfenster.

Das HTML-`<dialog>`-Element wird verwendet, um sowohl modale als auch nicht-modale Dialogfelder zu erstellen. Modale Dialogfelder unterbrechen die Interaktion mit dem Rest der Seite, während nicht-modale Dialogfelder die Interaktion mit dem Rest der Seite zulassen.

JavaScript sollte verwendet werden, um das `<dialog>`-Element anzuzeigen. Verwenden Sie die Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), um ein modales Dialogfeld anzuzeigen, und die Methode [`.show()`](/de/docs/Web/API/HTMLDialogElement/show), um ein nicht-modales Dialogfeld anzuzeigen. Das Dialogfeld kann mit der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) oder mit der [`dialog`](/de/docs/Web/HTML/Reference/Elements/form#method)-Methode beim Absenden eines innerhalb des `<dialog>`-Elements verschachtelten `<form>` geschlossen werden. Modale Dialoge können auch durch Drücken der Taste <kbd>Esc</kbd> geschlossen werden.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf dem `<dialog>`-Element verwendet werden. Siehe [Hinweise zur Verwendung](#nutzungshinweise).

- `closedby` {{experimental_inline}}

  - : Gibt die Arten von Benutzeraktionen an, mit denen das `<dialog>`-Element geschlossen werden kann. Dieses Attribut unterscheidet drei Methoden, mit denen ein Dialog geschlossen werden kann:

    - Eine _Tipp- und Wischbewegung zum Schließen_, bei der das `<dialog>` geschlossen wird, wenn der Benutzer außerhalb des Dialogs klickt oder tippt. Dies entspricht dem ["light dismiss"-Verhalten im "auto"-Zustand von Popovers](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss).
    - Eine _plattform-spezifische Benutzeraktion_, wie das Drücken der <kbd>Esc</kbd>-Taste auf Desktop-Plattformen oder eine „Zurück“- oder „Abbrechen“-Geste auf mobilen Plattformen.
    - Ein von Entwicklern festgelegter Mechanismus wie ein {{htmlelement("button")}} mit einem [`click`](/de/docs/Web/API/Element/click_event)-Handler, der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) aufruft, oder eine {{htmlelement("form")}}-Einreichung.

    Mögliche Werte sind:

    - `any`
      - : Der Dialog kann mit einer der drei Methoden geschlossen werden.
    - `closerequest`
      - : Der Dialog kann durch eine plattformspezifische Benutzeraktion oder einen vom Entwickler festgelegten Mechanismus geschlossen werden.
    - `none`
      - : Der Dialog kann nur durch einen vom Entwickler festgelegten Mechanismus geschlossen werden.

    Wenn das `<dialog>`-Element keinen gültigen Wert für `closedby` festgelegt hat, dann

    - verhält es sich so, als ob der Wert `"closerequest"` wäre, wenn es mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet wurde
    - andernfalls verhält es sich so, als ob der Wert `"none"` wäre.

- `open`

  - : Gibt an, dass das Dialogfeld aktiv und für die Interaktion verfügbar ist. Ist das `open`-Attribut nicht gesetzt, ist das Dialogfeld für den Benutzer nicht sichtbar.
    Es wird empfohlen, die Methoden `.show()` oder `.showModal()` zu verwenden, um Dialoge zu rendern, anstatt des `open`-Attributs. Wenn ein `<dialog>` mithilfe des `open`-Attributs geöffnet wird, ist es nicht modal.

    > [!NOTE]
    > Obwohl Sie durch Hinzufügen oder Entfernen des `open`-Attributs zwischen dem offenen und dem geschlossenen Zustand nicht-modaler Dialogfelder umschalten können, wird dieses Vorgehen nicht empfohlen. Siehe [`open`](/de/docs/Web/API/HTMLDialogElement/open) für weitere Informationen.

## Nutzungshinweise

- HTML-{{HTMLElement("form")}}-Elemente können verwendet werden, um ein Dialogfeld zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der Button zum Absenden des Formulars [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` über die `dialog`-Methode eingereicht wird, schließt sich das Dialogfeld, die Zustände der Formularelemente werden gespeichert, aber nicht eingereicht, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)-Eigenschaft wird auf den Wert des ausgelösten Buttons gesetzt.
- Das CSS-{{cssxref('::backdrop')}}-Pseudoelement kann verwendet werden, um den Hintergrund eines modalen Dialogs zu gestalten, der hinter dem `<dialog>`-Element angezeigt wird, wenn das Dialogfeld mit der Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) angezeigt wird. Dieses Pseudoelement könnte beispielsweise verwendet werden, um den inerten Inhalt hinter dem modalen Dialog zu verwischen, zu verdunkeln oder anderweitig zu verschleiern.
- Das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut sollte dem Element hinzugefügt werden, mit dem der Benutzer sofort nach dem Öffnen eines modalen Dialoges interagieren soll. Wenn kein anderes Element eine unmittelbarere Interaktion erfordert, wird empfohlen, `autofocus` dem Schließen-Button innerhalb des Dialogs hinzuzufügen oder das Dialog selbst, wenn erwartet wird, dass der Benutzer darauf klickt/um es zu schließen.
- Fügen Sie dem `<dialog>`-Element nicht das `tabindex`-Attribut hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Die Dialoginhalte, einschließlich der Schließen-Schaltfläche im Dialog, können den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Bei der Implementierung eines Dialogs ist es wichtig, den am besten geeigneten Ort für den Benutzerfokus zu setzen. Wenn [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwendet wird, um ein `<dialog>` zu öffnen, wird der Fokus auf das erste verschachtelte fokussierbare Element gesetzt. Durch die explizite Angabe der Anfangsfokusplatzierung mit dem [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut wird sichergestellt, dass der Anfangsfokus auf das Element gesetzt wird, das als der beste Anfangsfokusplatz für einen bestimmten Dialog angesehen wird. Wenn Zweifel bestehen, da es möglicherweise nicht immer bekannt ist, wo der anfängliche Fokus in einem Dialog gesetzt werden könnte, insbesondere bei Fällen, in denen der Inhalt eines Dialogs beim Aufruf dynamisch gerendert wird, könnte das `<dialog>`-Element selbst den besten Anfangsfokusplatz bieten.

Stellen Sie sicher, dass eine Mechanismus zum Schließen des Dialogs bereitgestellt wird. Der robusteste Weg, sicherzustellen, dass alle Benutzer den Dialog schließen können, ist das Hinzufügen eines expliziten Buttons dafür, wie eines Bestätigungs-, Abbruchs- oder Schließen-Buttons.

Ein Dialog, der mit der `showModal()`-Methode aufgerufen wird, kann standardmäßig durch Drücken der <kbd>Esc</kbd>-Taste beendet werden. Ein nicht-modales Dialog lässt sich standardmäßig nicht über die <kbd>Esc</kbd>-Taste schließen, und je nach Bedeutung des nicht-modalen Dialogs ist dieses Verhalten möglicherweise nicht gewünscht. Tastaturbenutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und beibehalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte das Drücken der <kbd>Esc</kbd>-Taste nur den zuletzt angezeigten Dialog schließen. Beim Verwenden von `<dialog>` wird dieses Verhalten vom Browser bereitgestellt.

Auch wenn Dialoge mit anderen Elementen erstellt werden können, bietet das native `<dialog>`-Element Nutzbarkeits- und Zugänglichkeitsfunktionen, die repliziert werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck verwenden möchten. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhalten unterstützt und die richtigen Kennzeichnungsempfehlungen befolgt werden.

Das `<dialog>`-Element wird von Browsern ähnlich wie benutzerdefinierte Dialoge exponiert, die das ARIA-Attribut [role="dialog"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) verwenden. `<dialog>`-Elemente, die durch die `showModal()`-Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), während `<dialog>`-Elemente, die durch die `show()`-Methode oder durch das `open`-Attribut oder durch Ändern des Standard-`display` eines `<dialog>` angezeigt werden, als `[aria-modal="false"]` ausgegeben werden. Bei der Implementierung modalaler Dialoge sollte alles außer dem `<dialog>` und dessen Inhalt mit dem [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attribut inaktiv gerendert werden. Beim Verwenden von `<dialog>` zusammen mit der Methode `HTMLDialogElement.showModal()` wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### Nur-HTML-Dialog

Dieses Beispiel demonstriert die Erstellung eines nicht-modalen Dialogs ausschließlich mit HTML. Aufgrund des booleschen `open`-Attributs im `<dialog>`-Element erscheint das Dialogfeld beim Laden der Seite geöffnet. Das Dialogfeld kann durch Klicken auf den „OK“-Button geschlossen werden, da das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist. In diesem Fall wird kein JavaScript benötigt, um das Formular zu schließen.

```html
<dialog open>
  <p>Greetings, one and all!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

#### Ergebnis

{{EmbedLiveSample("HTML-only_dialog", "100%", 200)}}

> [!NOTE]
> Laden Sie die Seite neu, um die Ausgabe zurückzusetzen.

Dieses Dialog ist anfänglich geöffnet, da das `open`-Attribut vorhanden ist. Dialoge, die mit dem `open`-Attribut angezeigt werden, sind nicht modale Dialoge. Nach dem Klicken auf „OK“ wird der Dialog verworfen und der Ergebnisrahmen bleibt leer. Wenn der Dialog verworfen wird, gibt es keine Methode, um ihn erneut zu öffnen. Aus diesem Grund ist die bevorzugte Methode zur Anzeige nicht-modalaler Dialoge die Verwendung der Methode [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show). Es ist möglich, das Erscheinungsbild des Dialogs zu wechseln, indem das boolesche `open`-Attribut hinzugefügt oder entfernt wird, aber dies ist nicht die empfohlene Praxis.

### Erstellen eines modalen Dialogs

Dieses Beispiel demonstriert einen modalen Dialog mit einem [Farbverlauf](/de/docs/Web/CSS/gradient) als Hintergrund. Die `.showModal()`-Methode öffnet den modalen Dialog, wenn der "Show the dialog"-Button aktiviert wird. Der Dialog kann durch Drücken der <kbd>Esc</kbd>-Taste oder über die Methode `close()` geschlossen werden, wenn der "Close"-Button innerhalb des Dialogs aktiviert wird.

Wenn ein Dialog geöffnet wird, setzt der Browser standardmäßig den Fokus auf das erste Element, das innerhalb des Dialogs fokussiert werden kann. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut dem "Close"-Button zugewiesen, sodass es beim Öffnen des Dialogs den Fokus erhält, da dieses Element dasjenige ist, mit dem der Benutzer unmittelbar nach dem Öffnen des Dialogs interagieren soll.

#### HTML

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a groovy backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir können den Hintergrund des Dialogs mit dem {{cssxref('::backdrop')}}-Pseudoelement gestalten.

```css
::backdrop {
  background-image: linear-gradient(
    45deg,
    magenta,
    rebeccapurple,
    dodgerblue,
    green
  );
  opacity: 0.75;
}
```

#### JavaScript

Der Dialog wird modal über die `.showModal()`-Methode geöffnet und mit den Methoden `.close()` oder `.requestClose()` geschlossen.

```js
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### Ergebnis

{{EmbedLiveSample("Creating_a_modal_dialog", "100%", 200)}}

Wenn der modale Dialog angezeigt wird, erscheint er über allen anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des modalen Dialogs ist inaktiv und Interaktionen außerhalb des Dialogs werden blockiert. Beachten Sie, dass bei geöffnetem Dialog - außer mit dem Dialog selbst - keine Interaktion mit dem Dokument möglich ist; der "Show the dialog"-Button wird fast vollständig vom fast undurchsichtigen Hintergrund des Dialogs verdeckt und ist inaktiv.

### Arbeiten mit dem Rückgabewert des Dialogs

Dieses Beispiel zeigt den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie man einen modalen Dialog mithilfe eines Formulars schließt. Standardmäßig ist der `returnValue` der leere String oder der Wert des Buttons, das das Formular innerhalb des `<dialog>`-Elements absendet, falls vorhanden.

Dieses Beispiel öffnet einen modalen Dialog, wenn der „Show the dialog“-Button aktiviert wird. Der Dialog enthält ein Formular mit einem {{HTMLElement("select")}}- und zwei {{HTMLElement("button")}}-Elementen, die standardmäßig `type="submit"` sind. Ein Ereignis-Listener aktualisiert den Wert des „Confirm“-Buttons, wenn die Auswahloption geändert wird. Falls der „Confirm“-Button aktiviert wird, um den Dialog zu schließen, ist der aktuelle Wert des Buttons der Rückgabewert. Wenn der Dialog durch Drücken des „Cancel“-Buttons geschlossen wird, ist der `returnValue` `cancel`.

Wenn der Dialog geschlossen wird, wird der Rückgabewert unter dem „Show the dialog“-Button angezeigt. Wenn der Dialog durch Drücken der <kbd>Esc</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert und das `close`-Ereignis tritt nicht ein, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

#### HTML

```html
<!-- A modal dialog containing a form -->
<dialog id="favDialog">
  <form>
    <p>
      <label>
        Favorite animal:
        <select>
          <option value="default">Choose…</option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </label>
    </p>
    <div>
      <button value="cancel" formmethod="dialog">Cancel</button>
      <button id="confirmBtn" value="default">Confirm</button>
    </div>
  </form>
</dialog>
<p>
  <button id="showDialog">Show the dialog</button>
</p>
<output></output>
```

#### JavaScript

```js
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close(selectEl.value); // Have to send the select box value here.
});
```

#### Ergebnis

{{EmbedLiveSample("Handling the return value from the dialog", "100%", 300)}}

Die obigen Beispiele zeigen die folgenden drei Methoden zum Schließen von modalen Dialogen:

- Durch Einreichen des Formulars innerhalb des Dialogformulars mit der `dialog`-Methode (wie im [Nur-HTML-Beispiels](#nur-html-dialog)).
- Durch Drücken der <kbd>Esc</kbd>-Taste.
- Durch Aufrufen der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode (wie im [modalen Beispiel](#erstellen_eines_modalen_dialogs)).
  In diesem Beispiel schließt der „Cancel“-Button den Dialog über die `dialog`-Formularmethode und der „Confirm“-Button schließt den Dialog über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode.

Der „Cancel“-Button enthält das [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input/submit#formmethod)-Attribut, das die Standard-{{HTMLElement("form")}}-Methode {{HTTPMethod("GET")}} überschreibt. Wenn die Formularmethode [`dialog`](#nutzungshinweise) ist, wird der Zustand des Formulars gespeichert, aber nicht eingereicht, und das Dialog wird geschlossen.

Ohne eine `action` führt das Absenden des Formulars mit der Standard-{{HTTPMethod("GET")}}-Methode dazu, dass eine Seite neu geladen wird. Wir verwenden JavaScript, um die Einreichung zu verhindern und das Dialog mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) zu schließen.

Es ist wichtig, in jedem `dialog`-Element einen Schließmechanismus bereitzustellen. Die <kbd>Esc</kbd>-Taste schließt standardmäßig keine nicht-modalalen Dialoge, noch kann man davon ausgehen, dass ein Benutzer überhaupt Zugang zu einer physischen Tastatur hat (z.B. bei der Verwendung eines Touchscreen-Gerätes ohne Zugriff auf eine Tastatur).

### Schließen eines Dialogs mit einer erforderlichen Formulareingabe

Wenn ein Formular innerhalb eines Dialogs eine erforderliche Eingabe hat, lässt der Benutzeragent das Schließen des Dialogs nur zu, wenn ein Wert für die erforderliche Eingabe angegeben wurde. Um einen solchen Dialog zu schließen, verwendet man entweder das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate)-Attribut auf dem Schließen-Button oder ruft die `close()`-Methode auf dem Dialogobjekt auf, wenn der Schließen-Button geklickt wird.

```html
<dialog id="dialog">
  <form method="dialog">
    <p>
      <label>
        Favorite animal:
        <input type="text" required />
      </label>
    </p>
    <div>
      <input type="submit" id="normal-close" value="Normal close" />
      <input
        type="submit"
        id="novalidate-close"
        value="Novalidate close"
        formnovalidate />
      <input type="submit" id="js-close" value="JS close" />
    </div>
  </form>
</dialog>
<p>
  <button id="show-dialog">Show the dialog</button>
</p>
<output></output>
```

```css hidden
[type="submit"] {
  margin-right: 1rem;
}
```

#### JavaScript

```js
const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const jsCloseBtn = dialog.querySelector("#js-close");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

jsCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});
```

#### Ergebnis

{{EmbedLiveSample("Closing a dialog with a required form input", "100%", 300)}}

Aus der Ausgabe sehen wir, dass es unmöglich ist, den Dialog mit dem _Normal close_-Button zu schließen. Aber der Dialog kann geschlossen werden, wenn wir die Formularvalidierung mit dem `formnovalidate`-Attribut auf dem _Cancel_-Button umgehen. Programmatisch wird `dialog.close()` auch einen solchen Dialog schließen.

### Vergleich der verschiedenen `closedby`-Verhalten

Dieses Beispiel demonstriert den Unterschied im Verhalten zwischen verschiedenen Werten des [`closedby`](#closedby)-Attributes.

#### HTML

Wir stellen drei {{htmlelement("button")}}-Elemente und drei `<dialog>`-Elemente bereit. Jeder Button wird programmiert, um einen anderen Dialog zu öffnen, der das Verhalten eines der drei Werte des `closedby`-Attributes demonstriert — `none`, `closerequest` und `any`. Beachten Sie, dass jedes `<dialog>`-Element ein `<button>`-Element enthält, das zum Schließen verwendet wird.

```html live-sample___closedbyvalues
<p>Choose a <code>&lt;dialog&gt;</code> type to show:</p>
<div id="controls">
  <button id="none-btn"><code>closedby="none"</code></button>
  <button id="closerequest-btn">
    <code>closedby="closerequest"</code>
  </button>
  <button id="any-btn"><code>closedby="any"</code></button>
</div>

<dialog closedby="none">
  <h2><code>closedby="none"</code></h2>
  <p>
    Only closable using a specific provided mechanism, which in this case is
    pressing the "Close" button below.
  </p>
  <button class="close">Close</button>
</dialog>

<dialog closedby="closerequest">
  <h2><code>closedby="closerequest"</code></h2>
  <p>Closable using the "Close" button or the Esc key.</p>
  <button class="close">Close</button>
</dialog>

<dialog closedby="any">
  <h2><code>closedby="any"</code></h2>
  <p>
    Closable using the "Close" button, the Esc key, or by clicking outside the
    dialog. "Light dismiss" behavior.
  </p>
  <button class="close">Close</button>
</dialog>
```

```css hidden live-sample___closedbyvalues
body {
  font-family: sans-serif;
}

#controls {
  display: flex;
  justify-content: space-around;
}

dialog {
  width: 480px;
  border-radius: 5px;
  border-color: rgb(0 0 0 / 0.3);
}

dialog h2 {
  margin: 0;
}

dialog p {
  line-height: 1.4;
}
```

#### JavaScript

Hier ordnen wir verschiedene Variablen zu, um die Hauptsteuerungs-`<button>`-Elemente, die `<dialog>`-Elemente und die „Close“-`<button>`-Elemente innerhalb der Dialoge zu referenzieren. Zuerst weisen wir jedem Steuerungs-Button mit [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) einen [`click`](/de/docs/Web/API/Element/click_event)-Ereignis-Listener zu, dessen Event-Handler-Funktion das zugehörige `<dialog>`-Element über [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) öffnet. Dann durchlaufen wir die „Close“-`<button>`-Referenzen und weisen jedem eine `click`-Ereignis-Handler-Funktion zu, die das `<dialog>`-Element über [`close()`](/de/docs/Web/API/HTMLDialogElement/close) schließt.

```js live-sample___closedbyvalues
const noneBtn = document.getElementById("none-btn");
const closerequestBtn = document.getElementById("closerequest-btn");
const anyBtn = document.getElementById("any-btn");

const noneDialog = document.querySelector("[closedby='none']");
const closerequestDialog = document.querySelector("[closedby='closerequest']");
const anyDialog = document.querySelector("[closedby='any']");

const closeBtns = document.querySelectorAll(".close");

noneBtn.addEventListener("click", () => {
  noneDialog.showModal();
});

closerequestBtn.addEventListener("click", () => {
  closerequestDialog.showModal();
});

anyBtn.addEventListener("click", () => {
  anyDialog.showModal();
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.close();
  });
});
```

#### Ergebnis

Das gerenderte Ergebnis ist wie folgt:

{{EmbedLiveSample("closedby-values", "100%", 300)}}

Versuchen Sie, jeden Button zu klicken, um einen Dialog zu öffnen. Der erste kann nur durch Klicken auf den „Close“-Button geschlossen werden. Der zweite kann auch durch eine gerätespezifische Benutzeraktion wie das Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Der dritte hat das volle ["light-dismiss"-Verhalten](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss), sodass er auch durch Klicken oder Tippen außerhalb des Dialogs geschlossen werden kann.

### Animieren von Dialogen

`<dialog>`-Elemente werden auf [`display: none;`](/de/docs/Web/CSS/display) gesetzt, wenn sie verborgen sind, und auf `display: block;`, wenn sie angezeigt werden, sowie aus / in die {{Glossary("top_layer", "oberste Ebene")}} und den [Barrierefreiheitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt / hinzugefügt. Damit `<dialog>`-Elemente animiert werden können, muss die {{cssxref("display")}}-Eigenschaft animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animations-Typs](/de/docs/Web/CSS/CSS_animated_properties#discrete). Konkret wechselt der Browser zwischen `none` und einem anderen `display`-Wert, sodass der animierte Inhalt für die gesamte Dauer der Animation sichtbar ist.

Beispielsweise:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) schaltet der Wert zu `block` bei `0%` der Animationsdauer, damit er die gesamte Zeit sichtbar bleibt.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` schaltet der Wert zu `none` bei `100%` der Animationsdauer, sodass er die gesamte Zeit sichtbar bleibt.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um das obige Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig aktiviert, wenn mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) animiert wird; ein entsprechender Schritt ist nicht erforderlich.

#### Übergang von Dialog-Elementen

Beim Animieren von `<dialog>`-Elementen mit CSS-Übergängen sind folgende Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style)-Regel
  - : Bietet einen Satz von Anfangswerten für Eigenschaften, die auf das `<dialog>` gesetzt werden sollen, von denen Sie erwarten, dass sie bei jedem Öffnen vom Dialog aus übergehen. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn sich eine Eigenschaft von einem Wert zu einem anderen auf einem sichtbaren Element ändert; sie werden nicht auf die ersten Stilaktualisierungen eines Elements oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert, ausgelöst.
- [`display`](/de/docs/Web/CSS/display)-Eigenschaft
  - : Fügen Sie `display` zur Liste der Übergänge hinzu, damit das `<dialog>` für die Dauer des Übergangs als `display: block` (oder einem anderen sichtbaren `display`-Wert im geöffneten Zustand des Dialogs gesetzt) bleibt, um sicherzustellen, dass die anderen Übergänge sichtbar sind.
- [`overlay`](/de/docs/Web/CSS/overlay)-Eigenschaft
  - : Schließen Sie `overlay` in die Übergangsliste ein, um sicherzustellen, dass die Entfernung des `<dialog>` aus der obersten Ebene bis zum Abschluss des Übergangs verschoben wird, was erneut den Übergang sichtbar macht.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf die {{cssxref("transition")}}-Abkürzung), um diskrete Übergänge auf diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Hier ist ein kurzes Beispiel, wie dies aussehen könnte.

##### HTML

Der HTML-Teil enthält ein `<dialog>`-Element sowie einen Button, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS-Teil fügen wir einen `@starting-style`-Block ein, der die Übergangsausgangsstile für die Eigenschaften `opacity` und `transform` definiert, Übergangszielstile im Zustand `dialog:open` und Standardstile im Standardzustand `dialog`, zu dem zurückgekehrt werden muss, sobald das `<dialog>` angezeigt wurde. Beachten Sie, wie die `transition`-Liste des `<dialog>` nicht nur diese Eigenschaften enthält, sondern auch die `display`- und `overlay`-Eigenschaften, jeweils mit `allow-discrete` darauf gesetzt.

Wir setzen auch einen Ausgangswert für die Eigenschaft {{cssxref("background-color")}} auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop), der hinter dem `<dialog>` erscheint, wenn es geöffnet wird, um eine schöne Verdunkelungsanimation zu bieten. Der Selektor `dialog:open::backdrop` wählt nur die Hintergründe von `<dialog>`-Elementen aus, wenn der Dialog geöffnet ist.

```css
/* Open state of the dialog  */
dialog:open {
  opacity: 1;
  transform: scaleY(1);
}

/* Closed state of the dialog   */
dialog {
  opacity: 0;
  transform: scaleY(0);
  transition:
    opacity 0.7s ease-out,
    transform 0.7s ease-out,
    overlay 0.7s ease-out allow-discrete,
    display 0.7s ease-out allow-discrete;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

/* Before open state  */
/* Needs to be after the previous dialog:open rule to take effect,
    as the specificity is the same */
@starting-style {
  dialog:open {
    opacity: 0;
    transform: scaleY(0);
  }
}

/* Transition the :backdrop when the dialog modal is promoted to the top layer */
dialog::backdrop {
  background-color: rgb(0 0 0 / 0%);
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

dialog:open::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* This starting-style rule cannot be nested inside the above selector
because the nesting selector cannot represent pseudo-elements. */

@starting-style {
  dialog:open::backdrop {
    background-color: rgb(0 0 0 / 0%);
  }
}
```

> [!NOTE]
> In Browsern, die die Pseudoklasse {{cssxref(":open")}} nicht unterstützen, können Sie den Attributselektor `dialog[open]` verwenden, um das `<dialog>`-Element zu stylen, wenn es sich im geöffneten Zustand befindet.

##### JavaScript

Das JavaScript fügt den Show- und Close-Buttons Event-Handler hinzu, die beim Klicken den `<dialog>` anzeigen oder schließen:

```js
const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");

showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});
```

##### Ergebnis

Der Code hat folgende Auswirkung:

{{ EmbedLiveSample("Transitioning dialog elements", "100%", "200") }}

> [!NOTE]
> Da `<dialog>`s jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, werden die `<dialog>`-Übergänge bei jedem Eintrittsübergang von ihren `@starting-style`-Stilen zu ihren `dialog:open`-Stilen übergehen. Wenn das `<dialog>` geschlossen wird, wechselt es von seinem `dialog:open`-Zustand zurück zum Standard-`dialog`-Zustand.
>
> Es ist möglich, dass sich der Stilübergang beim Eintritt und Austritt in solchen Fällen unterscheidet. Siehe unser [Demonstrationsbeispiel, wann Anfangsstile verwendet werden](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Beweis dafür.

#### dialog Keyframe-Animationen

Beim Animieren eines `<dialog>` mit CSS-Keyframe-Animationen gibt es einige wichtige Unterschiede im Vergleich zu Übergängen, die zu beachten sind:

- Sie stellen keinen `@starting-style` bereit.
- Sie schließen den `display`-Wert in einen Keyframe ein; dies wird der `display`-Wert für die gesamte Animation, oder bis ein anderer nicht-`none`-Anzeigewert aufgetreten ist.
- Sie müssen keine diskreten Animationen explizit aktivieren; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Keyframes.
- Sie müssen `overlay` auch nicht innerhalb von Keyframes setzen; die `display`-Animation steuert die Animation des `<dialog>` von angezeigt zu verborgen.

Sehen wir uns ein Beispiel an, um zu sehen, wie das aussieht.

##### HTML

Erstens enthält der HTML-Teil ein `<dialog>`-Element sowie einen Button, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS werden Keyframes definiert, die zwischen dem geschlossenen und dem gezeigten Zustand des `<dialog>` animieren, sowie die Einblendanimation für den Hintergrund des `<dialog>`. Die `<dialog>`-Animationen umfassen das Animieren von `display`, um sicherzustellen, dass die tatsächlichen sichtbaren Animationseffekte für die gesamte Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, das Ausblenden des Hintergrads zu animieren – das Hintergrundbild wird bei Schließen des `<dialog>` sofort aus dem DOM entfernt, sodass nichts animiert werden kann.

```css
dialog {
  animation: fade-out 0.7s ease-out;
}

dialog:open {
  animation: fade-in 0.7s ease-out;
}

dialog:open::backdrop {
  animation: backdrop-fade-in 0.7s ease-out forwards;
}

/* Animation keyframes */

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scaleY(0);
    display: none;
  }

  100% {
    opacity: 1;
    transform: scaleY(1);
    display: block;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    transform: scaleY(1);
    display: block;
  }

  100% {
    opacity: 0;
    transform: scaleY(0);
    display: none;
  }
}

@keyframes backdrop-fade-in {
  0% {
    background-color: rgb(0 0 0 / 0%);
  }

  100% {
    background-color: rgb(0 0 0 / 25%);
  }
}

body,
button {
  font-family: system-ui;
}
```

##### JavaScript

Abschließend fügt das JavaScript den Buttons Event-Handler hinzu, um das Anzeigen und Schließen des `<dialog>` zu ermöglichen:

```js
const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");

showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});
```

##### Ergebnis

Der Code hat folgende Auswirkung:

{{ EmbedLiveSample("dialog keyframe animations", "100%", "200") }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        Abschnitts-Wurzel
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a> akzeptiert
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role">Dialog</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role"><code>alertdialog</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis der `HTMLDialogElement`-Schnittstelle
- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis der `HTMLDialogElement`-Schnittstelle
- [`open`](/de/docs/Web/API/HTMLDialogElement/open)-Eigenschaft der `HTMLDialogElement`-Schnittstelle
- Globale Attribut für HTML-Elemente [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)
- {{CSSXref("::backdrop")}} CSS-Pseudoelement
- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
