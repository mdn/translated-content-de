---
title: "<dialog>: Das Dialog-Element"
slug: Web/HTML/Reference/Elements/dialog
l10n:
  sourceCommit: 2dfac351d5f732bb9b61ec3b506d725e01fcc1bf
---

{{HTMLSidebar}}

Das **`<dialog>`** [HTML](/de/docs/Web/HTML)-Element stellt ein modales oder nicht modales Dialogfeld oder ein anderes interaktives Element dar, wie eine schließbare Warnung, einen Inspektor oder ein Unterfenster.

Das HTML `<dialog>` Element wird verwendet, um sowohl modale als auch nicht modale Dialogfelder zu erstellen. Modale Dialogfelder unterbrechen die Interaktion mit dem Rest der Seite, während nicht modale Dialogfelder eine Interaktion mit dem Rest der Seite zulassen.

JavaScript sollte verwendet werden, um das `<dialog>` Element anzuzeigen. Verwenden Sie die Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), um ein modales Dialogfeld anzuzeigen, und die Methode [`.show()`](/de/docs/Web/API/HTMLDialogElement/show), um ein nicht modales Dialogfeld anzuzeigen. Das Dialogfeld kann mit der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) oder mit der [`dialog`](/de/docs/Web/HTML/Reference/Elements/form#method) Methode beim Absenden eines innerhalb des `<dialog>` Elements verschachtelten `<form>` geschlossen werden. Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Das `tabindex` Attribut darf nicht auf dem `<dialog>` Element verwendet werden. Siehe [Nutzungshinweise](#nutzungshinweise).

- `closedby`

  - : Gibt die Arten von Benutzeraktionen an, mit denen das `<dialog>` Element geschlossen werden kann. Dieses Attribut unterscheidet drei Methoden, durch die ein Dialog geschlossen werden kann:

    - Eine _leichte Schließbenutzeraktion_, bei der das `<dialog>` geschlossen wird, wenn der Benutzer außerhalb davon klickt oder tippt. Dies entspricht dem ["leichten Schließen"-Verhalten des "auto"-Zustands von Popovers](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss).
    - Eine _plattform-spezifische Benutzeraktion_, wie das Drücken der <kbd>Esc</kbd>-Taste auf Desktop-Plattformen oder eine "zurück" oder "verwerfen" Geste auf mobilen Plattformen.
    - Ein entwickler-spezifizierter Mechanismus wie ein {{htmlelement("button")}} mit einem [`click`](/de/docs/Web/API/Element/click_event) Handler, der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) aufruft, oder das Absenden eines {{htmlelement("form")}}.

    Mögliche Werte sind:

    - `any`
      - : Der Dialog kann mit allen drei Methoden geschlossen werden.
    - `closerequest`
      - : Der Dialog kann mit einer plattform-spezifischen Benutzeraktion oder einem entwickler-spezifizierten Mechanismus geschlossen werden.
    - `none`
      - : Der Dialog kann nur mit einem entwickler-spezifizierten Mechanismus geschlossen werden.

    Wenn das `<dialog>` Element keinen gültigen `closedby` Wert spezifiziert hat, dann

    - verhält es sich, als wäre der Wert `"closerequest"`, wenn es mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet wurde
    - andernfalls verhält es sich, als wäre der Wert `"none"`.

- `open`

  - : Gibt an, dass das Dialogfeld aktiv und verfügbar für Interaktionen ist. Wenn das `open` Attribut nicht gesetzt ist, wird das Dialogfeld für den Benutzer nicht sichtbar sein.
    Es wird empfohlen, die Methode `.show()` oder `.showModal()` zum Anzeigen von Dialogen zu verwenden, anstatt das `open` Attribut. Wird ein `<dialog>` mit dem `open` Attribut geöffnet, ist es nicht modal.

    > [!NOTE]
    > Auch wenn Sie zwischen den offenen und geschlossenen Zuständen von nicht modalen Dialogfeldern durch Umschalten des `open` Attributs wechseln können, wird diese Vorgehensweise nicht empfohlen. Siehe [`open`](/de/docs/Web/API/HTMLDialogElement/open) für weitere Informationen.

## Nutzungshinweise

- HTML {{HTMLElement("form")}} Elemente können verwendet werden, um ein Dialogfeld zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der Button, der das Formular abschickt, [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` via der `dialog` Methode abgeschickt wird, schließt sich das Dialogfeld, die Zustände der Formularelemente werden gespeichert, aber nicht abgeschickt, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) Eigenschaft wird auf den Wert des Buttons gesetzt, der aktiviert wurde.
- Das CSS {{cssxref('::backdrop')}} Pseudo-Element kann verwendet werden, um den Hintergrund eines modalen Dialogs zu stylen, der hinter dem `<dialog>` Element angezeigt wird, wenn der Dialog mit der Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) angezeigt wird. Zum Beispiel könnte dieses Pseudo-Element verwendet werden, um das träge Inhalte hinter dem modalen Dialog zu verwischen, abzudunkeln oder anderweitig zu verschleiern.
- Das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus) Attribut sollte dem Element hinzugefügt werden, mit dem der Benutzer unmittelbar nach dem Öffnen eines modalen Dialogs interagieren soll. Wenn kein anderes Element eine unmittelbarere Interaktion involviert, wird empfohlen, `autofocus` dem Schließen-Button im Dialog hinzuzufügen oder dem Dialog selbst, wenn erwartet wird, dass der Benutzer darauf klickt/aktiviert, um den Dialog zu schließen.
- Fügen Sie dem `<dialog>` Element nicht die `tabindex` Eigenschaft hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Der Inhalt des Dialogs, einschließlich des Schließen-Buttons, kann Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Bei der Implementierung eines Dialogs ist es wichtig, den geeigneten Ort für den Benutzerfokus zu bestimmen. Wenn Sie [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwenden, um ein `<dialog>` zu öffnen, wird der Fokus auf das erste verschachtelte fokussierbare Element gesetzt. Die explizite Angabe des anfänglichen Fokusplatzes durch das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus) Attribut hilft sicherzustellen, dass der Anfangsfokus dort gesetzt wird, wo er für das jeweilige Dialogfeld am besten geeignet ist. Wenn Zweifel bestehen, da es nicht immer bekannt sein kann, wo der Anfangsfokus innerhalb eines Dialogs gesetzt werden könnte, insbesondere in Fällen, in denen der Dialoginhalt dynamisch gerendert wird, wenn er aufgerufen wird, kann das `<dialog>` Element selbst die beste anfängliche Fokusplatzierung bereitstellen.

Stellen Sie sicher, dass eine Mechanik bereitgestellt wird, damit Benutzer das Dialogfeld schließen können. Der robusteste Weg, sicherzustellen, dass alle Benutzer das Dialogfeld schließen können, ist es, einen expliziten Button dafür einzufügen, wie einen Bestätigungs-, Abbruch- oder Schließungsbutton.

Standardmäßig kann ein Dialog, der durch die `showModal()` Methode aufgerufen wird, durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Ein nicht modaler Dialog wird standardmäßig nicht über die <kbd>Esc</kbd>-Taste geschlossen, und je nachdem, was der nicht modale Dialog darstellt, ist dieses Verhalten möglicherweise nicht erwünscht. Tastaturbenutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und aufrechterhalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte das Drücken der <kbd>Esc</kbd>-Taste nur den zuletzt angezeigten Dialog schließen. Wenn Sie `<dialog>` verwenden, wird dieses Verhalten vom Browser bereitgestellt.

Obwohl Dialoge mit anderen Elementen erstellt werden können, bietet das native `<dialog>` Element Benutzbarkeits- und Barrierefreiheitseigenschaften, die repliziert werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck verwenden. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhalten unterstützt werden und ordnungsgemäße Beschriftungsempfehlungen befolgt werden.

Das `<dialog>` Element wird von Browsern ähnlich wie benutzerdefinierte Dialoge exponiert, die das ARIA [role="dialog"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) Attribut verwenden. `<dialog>` Elemente, die durch die `showModal()` Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), während `<dialog>` Elemente, die durch die `show()` Methode aufgerufen werden oder mit dem `open` Attribut oder durch Änderung des Standard-`display` eines `<dialog>` angezeigt werden, als `[aria-modal="false"]` exponiert werden. Bei der Implementierung von modalen Dialogen sollte alles außer dem `<dialog>` und dessen Inhalt mithilfe des [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) Attributs als träge dargestellt werden. Wenn `<dialog>` zusammen mit der `HTMLDialogElement.showModal()` Methode verwendet wird, wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### Nur-HTML-Dialog

Dieses Beispiel demonstriert die Erstellung eines nicht-modalen Dialogs nur mit HTML. Aufgrund des booleschen `open` Attributs im `<dialog>` Element erscheint das Dialogfeld geöffnet, wenn die Seite geladen wird. Das Dialogfeld kann durch Klicken des "OK"-Buttons geschlossen werden, da das `method` Attribut im `<form>` Element auf `"dialog"` gesetzt ist. In diesem Fall wird kein JavaScript benötigt, um das Formular zu schließen.

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

Dieses Dialog ist zunächst wegen des `open` Attributs sichtbar. Dialoge, die mit dem `open` Attribut angezeigt werden, sind nicht modal. Nach dem Klicken auf "OK" wird das Dialog geschlossen und der Ergebnisrahmen bleibt leer. Wenn das Dialog geschlossen ist, gibt es keine Methode, es wieder zu öffnen. Aus diesem Grund wird empfohlen, nicht modale Dialoge durch die Methode [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show) anzuzeigen. Es ist möglich, das Anzeigen des Dialogs durch Hinzufügen oder Entfernen des booleschen `open` Attributs umschalten, aber es wird nicht als bewährte Vorgehensweise angesehen.

### Erstellung eines modalen Dialogs

Dieses Beispiel zeigt einen modalen Dialog mit einem [Verlauf](/de/docs/Web/CSS/gradient) Hintergrund. Die Methode `.showModal()` öffnet das modale Dialogfeld, wenn der Button "Dialog anzeigen" aktiviert wird. Der Dialog kann durch Drücken der <kbd>Esc</kbd>-Taste oder durch die `close()` Methode geschlossen werden, wenn der "Schließen"-Button innerhalb des Dialogs aktiviert wird.

Wenn ein Dialog geöffnet wird, fokussiert der Browser standardmäßig das erste Element, das im Dialog fokussiert werden kann. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus) Attribut auf den "Schließen"-Button angewendet, der beim Öffnen des Dialogs fokussiert wird, da dies das Element ist, mit dem der Benutzer sofort nach dem Öffnen des Dialogs interagieren soll.

#### HTML

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a groovy backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir können den Hintergrund des Dialogs mit dem {{cssxref('::backdrop')}} Pseudo-Element stylen.

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

Das Dialog wird modal mit der `.showModal()` Methode geöffnet und mit der `.close()` oder `.requestClose()` Methode geschlossen.

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

Wenn das modale Dialogfeld angezeigt wird, erscheint es über allen anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des modalen Dialogs ist träge, und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass, wenn das Dialog geöffnet ist, mit Ausnahme des Dialogs selbst, keine Interaktion mit dem Dokument möglich ist; der Button "Dialog anzeigen" ist größtenteils von dem fast undurchsichtigen Hintergrund des Dialogs verdeckt und ist träge.

### Umgang mit dem Rückgabewert des Dialogs

Dieses Beispiel demonstriert den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>` Elements und wie man einen modalen Dialog mit einem Formular schließt. Standardmäßig ist der `returnValue` der leere String oder der Wert des Buttons, der das Formular innerhalb des `<dialog>` Elements abschickt, sofern vorhanden.

Dieses Beispiel öffnet einen modalen Dialog, wenn der Button "Dialog anzeigen" aktiviert wird. Der Dialog enthält ein Formular mit einer {{HTMLElement("select")}} und zwei {{HTMLElement("button")}} Elementen, die standardmäßig auf `type="submit"` gesetzt sind. Ein Event-Listener aktualisiert den Wert des "Bestätigen"-Buttons, wenn sich die Auswahloption ändert. Wenn der "Bestätigen"-Button aktiviert wird, um den Dialog zu schließen, ist der aktuelle Wert des Buttons der Rückgabewert. Wenn der Dialog durch Drücken des "Abbrechen"-Buttons geschlossen wird, ist der `returnValue` `cancel`.

Wenn der Dialog geschlossen wird, wird der Rückgabewert unter dem Button "Dialog anzeigen" angezeigt. Wenn der Dialog durch Drücken der <kbd>Esc</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert und das `close` Ereignis tritt nicht auf, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

Die obigen Beispiele demonstrieren die folgenden drei Methoden zum Schließen modaler Dialoge:

- Durch Absenden des Formulars innerhalb des Dialogformulars mit der `dialog` Methode (wie im [Nur-HTML Beispiel](#nur-html-dialog) zu sehen).
- Durch Drücken der <kbd>Esc</kbd>-Taste.
- Durch Aufrufen der Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) (wie im [modalen Beispiel](#erstellung_eines_modalen_dialogs) zu sehen).
  In diesem Beispiel schließt der "Abbrechen" Button den Dialog über die `dialog` Formulierungsmethode und die "Bestätigen" Taste schließt den Dialog über die Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close).

Der Button "Abbrechen" beinhaltet das Attribut [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input/submit#formmethod), das die Standard-{{HTTPMethod("GET")}} Methode des {{HTMLElement("form")}} überschreibt. Wenn die Methode eines Formulars [`dialog`](#nutzungshinweise) ist, wird der Zustand des Formulars gespeichert, aber nicht abgeschickt, und das Dialog wird geschlossen.

Ohne ein `action` bewirkt das Absenden des Formulars über die standardmäßige {{HTTPMethod("GET")}} Methode, dass eine Seite neu geladen wird. Wir verwenden JavaScript, um die Übermittlung zu verhindern, und schließen das Dialog mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close).

Es ist wichtig, in jedem `dialog` Element einen Schließmechanismus bereitzustellen. Die <kbd>Esc</kbd>-Taste schließt standardmäßig keine nicht modalen Dialoge, und man kann nicht davon ausgehen, dass ein Benutzer überhaupt Zugang zu einer physischen Tastatur hat (z. B. jemand mit einem Touchscreen-Gerät ohne Zugriff auf eine Tastatur).

### Schließen eines Dialogs mit einer obligatorischen Formulareingabe

Wenn ein Formular innerhalb eines Dialogs eine obligatorische Eingabe hat, lässt der Benutzeragent Sie den Dialog nur schließen, wenn Sie einen Wert für die erforderliche Eingabe bereitstellen. Um ein solches Dialog zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate) Attribut auf dem Schließen-Button oder rufen Sie die `close()` Methode auf dem Dialogobjekt auf, wenn der Schließen-Button geklickt wird.

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

Aus der Ausgabe sehen wir, dass es unmöglich ist, das Dialog mit dem _Normal schließen_-Button zu schließen. Aber das Dialog kann geschlossen werden, wenn wir die Formularvalidierung mit dem `formnovalidate` Attribut auf dem _Abbrechen_-Button umgehen. Programmatisch wird `dialog.close()` auch ein solches Dialog schließen.

### Vergleich verschiedener closedby-Verhalten

Dieses Beispiel illustriert den Unterschied im Verhalten zwischen verschiedenen Werten des [`closedby`](#closedby) Attributs.

#### HTML

Wir stellen drei {{htmlelement("button")}} Elemente und drei `<dialog>` Elemente bereit. Jeder Button wird programmiert, um einen anderen Dialog zu öffnen, der das Verhalten eines der drei Werte des `closedby` Attributs — `none`, `closerequest` und `any` — demonstriert. Beachten Sie, dass jedes `<dialog>` Element ein `<button>` Element enthält, mit dem es geschlossen wird.

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

Hier weisen wir verschiedenen Variablen zu, um die Hauptsteuerungs-`<button>` Elemente, die `<dialog>` Elemente und die „Schließen“-`<button>` Elemente innerhalb der Dialoge zu referenzieren. Zuerst weisen wir jedem Steuer-Button einen [`click`](/de/docs/Web/API/Element/click_event) Ereignis-Listener mit der [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) Methode zu, dessen Event-Handler-Funktion das zugehörige `<dialog>` Element über [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) öffnet. Dann durchlaufen wir die „Schließen“-`<button>` Referenzen und weisen jeder eine `click` Event-Handler-Funktion zu, die das `<dialog>` Element über [`close()`](/de/docs/Web/API/HTMLDialogElement/close) schließt.

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

Versuchen Sie, jeden Button zu klicken, um einen Dialog zu öffnen. Der erste kann nur durch Klicken auf seinen „Schließen“-Button geschlossen werden. Der zweite kann auch über eine gerätespezifische Benutzeraktion wie das Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Der dritte hat ein vollständiges ["leichtes Schließen"-Verhalten](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss), sodass er auch durch Klicken oder Tippen außerhalb des Dialogs geschlossen werden kann.

### Animation von Dialogen

`<dialog>`s sind auf [`display: none;`](/de/docs/Web/CSS/display) gesetzt, wenn sie verborgen sind, und `display: block;`, wenn sie angezeigt werden, sowie, dass sie vom {{Glossary("top_layer", "obersten Layer")}} und vom [Barrierefreibaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt oder hinzugefügt werden. Daher müssen für `<dialog>` Elemente, die animierbar sind, die {{cssxref("display")}} Eigenschaft animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Insbesondere wechselt der Browser zwischen `none` und einem anderen Wert von `display`, sodass der animierte Inhalt für die gesamte Animationsdauer sichtbar ist.

Zum Beispiel:

- Wenn `display` animiert wird von `none` zu `block` (oder einem anderen sichtbaren `display` Wert), wird der Wert bei `0%` der Animationsdauer auf `block` wechseln, sodass er während der gesamten Zeit sichtbar ist.
- Wenn `display` animiert von `block` (oder einem anderen sichtbaren `display` Wert) zu `none`, wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass er während der gesamten Zeit sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig aktiviert, wenn mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) animiert wird; ein äquivalenter Schritt ist nicht erforderlich.

#### Übergang von Dialogelementen

Beim Animieren von `<dialog>`s mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) At-Regel
  - : Bietet eine Reihe von Startwerten für Eigenschaften, die auf dem `<dialog>` festgelegt sind, die Sie bei jedem Öffnen der Übergänge ändern möchten. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn sich ein Wert von einem Wert zu einem anderen auf einem sichtbaren Element ändert; sie werden nicht beim ersten Stil-Update von Elementen ausgelöst oder wenn sich der `display` Typ von `none` zu einem anderen Typ ändert.
- [`display`](/de/docs/Web/CSS/display) Eigenschaft
  - : Fügen Sie `display` der Übergangsliste hinzu, damit das `<dialog>` für die Dauer des Übergangs `display: block` bleibt (oder ein anderer sichtbarer `display` Wert, der im geöffneten Zustand des Dialogs gesetzt ist), um sicherzustellen, dass die anderen Übergänge sichtbar sind.
- [`overlay`](/de/docs/Web/CSS/overlay) Eigenschaft
  - : Schließen Sie `overlay` in die Übergangsliste ein, um sicherzustellen, dass die Entfernung des `<dialog>` aus dem obersten Layer verschoben wird, bis der Übergang abgeschlossen ist, und erneut sichergestellt wird, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}} Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display` und `overlay` Übergänge (oder auf den {{cssxref("transition")}} Kurzschreibform) um diskrete Übergänge bei diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Hier ist ein schnelles Beispiel, um zu zeigen, wie das aussehen könnte.

##### HTML

Das HTML enthält ein `<dialog>` Element und einen Button, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>` Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS fügen wir einen `@starting-style` Block ein, der die Startstile der Übergänge für die `opacity` und `transform` Eigenschaften definiert, Übergang-Endstile auf dem `dialog:open` Zustand und Standardstile auf dem standardmäßigen `dialog` Zustand, auf den zurückgegangen werden soll, sobald das `<dialog>` erschienen ist. Beachten Sie, wie die `transition` Liste des `<dialog>`s nicht nur diese Eigenschaften enthält, sondern auch die `display` und `overlay` Eigenschaften, jeweils mit `allow-discrete` auf sie gesetzt.

Wir setzen auch einen Startstilwert für die {{cssxref("background-color")}} Eigenschaft auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop), der hinter dem `<dialog>` erscheint, wenn es sich öffnet, um eine schöne Verdunkelungsanimation bereitzustellen. Der `dialog:open::backdrop` Selektor wählt nur die Hintergründe von `<dialog>` Elementen aus, wenn der Dialog geöffnet ist.

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
> In Browsern, die das {{cssxref(":open")}} Pseudo-Klasse nicht unterstützen, können Sie den Attributselektor `dialog[open]` verwenden, um das `<dialog>` Element zu stylen, wenn es im offenen Zustand ist.

##### JavaScript

Das JavaScript fügt den Anzeige- und Schließen-Buttons Ereignis-Handler hinzu, die bewirken, dass sie das `<dialog>` anzeigen und schließen, wenn sie geklickt werden:

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

Der Code rendert wie folgt:

{{ EmbedLiveSample("Transitioning dialog elements", "100%", "200") }}

> [!NOTE]
> Da `<dialog>` von `display: none` zu `display: block` wechselt, jedes Mal wenn es angezeigt wird, wechselt das `<dialog>` von seinen `@starting-style` Stilen zu seinen `dialog:open` Stilen jedes Mal, wenn der Eintrittsübergang auftritt. Wenn das `<dialog>` schließt, wechselt es von seinem `dialog:open` Zustand in den standardmäßigen `dialog` Zustand.
>
> Es ist möglich, dass sich der Stilübergang beim Eintritt und beim Austritt in solchen Fällen unterscheidet. Siehe unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel für einen Beweis dafür.

#### dialog Keyframe-Animationen

Beim Animieren eines `<dialog>` mit CSS Keyframe-Animationen gibt es einige Unterschiede zu beachten im Vergleich zu Übergängen:

- Sie geben keinen `@starting-style` an.
- Sie fügen dem Keyframe den `display` Wert hinzu; dies wird der `display` Wert während der gesamten Animation sein oder bis ein anderer nicht-`none` display Wert auftritt.
- Sie müssen keine diskreten Animationen explizit aktivieren; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Keyframes.
- Sie müssen `overlay` auch nicht innerhalb von Keyframes setzen; die `display` Animation behandelt die Animation des `<dialog>` von sichtbar zu versteckt.

Schauen wir uns ein Beispiel an, damit Sie sehen können, wie das aussieht.

##### HTML

Erstens enthält das HTML ein `<dialog>` Element sowie einen Button, um das Dialog anzuzeigen. Zusätzlich enthält das `<dialog>` Element einen weiteren Button zum Schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Keyframes, um zwischen den geschlossenen und gezeigten Zuständen des `<dialog>` zu animieren, sowie die Einblendanimation für das `<dialog>`'s Hintergrund. Die `<dialog>` Animationen beinhalten das Animieren von `display`, um sicherzustellen, dass die tatsächlichen sichtbaren Animationseffekte während der gesamten Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, die Hintergrundausblendung zu animieren – der Hintergrund wird sofort aus dem DOM entfernt, wenn das `<dialog>` geschlossen wird, sodass es nichts zu animieren gibt.

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

Abschließend fügt das JavaScript Event-Handler zu den Buttons hinzu, um das Anzeigen und Schließen des `<dialog>` zu ermöglichen:

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

Der Code wird wie folgt gerendert:

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
        Abschnittswurzel
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a> akzeptiert
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role">dialog</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
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

- [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Schnittstelle
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) Ereignis der `HTMLDialogElement` Schnittstelle
- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) Ereignis der `HTMLDialogElement` Schnittstelle
- [`open`](/de/docs/Web/API/HTMLDialogElement/open) Eigenschaft der `HTMLDialogElement` Schnittstelle
- [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) globales Attribut für HTML-Elemente
- {{CSSXref("::backdrop")}} CSS Pseudo-Element
- [Web-Formulare](/de/docs/Learn_web_development/Extensions/Forms) im Bereich Lernen
