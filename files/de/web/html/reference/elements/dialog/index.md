---
title: "<dialog>: Das Dialog-Element"
slug: Web/HTML/Reference/Elements/dialog
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

Das **`<dialog>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert eine modale oder nicht-modale Dialogbox oder andere interaktive Komponenten, wie beispielsweise eine ausblendbare Warnung, einen Inspektor oder ein Unterfenster.

Das HTML `<dialog>`-Element wird zur Erstellung sowohl von modalen als auch von nicht-modalen Dialogboxen verwendet. Modale Dialogboxen unterbrechen die Interaktion mit dem Rest der Seite, während nicht-modale Dialogboxen die Interaktion mit dem Rest der Seite zulassen.

JavaScript sollte verwendet werden, um das `<dialog>`-Element anzuzeigen. Verwenden Sie die [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode, um einen modalen Dialog anzuzeigen, und die [`.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode, um einen nicht-modalen Dialog anzuzeigen. Die Dialogbox kann mit der [`.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode oder der [`dialog`](/de/docs/Web/HTML/Reference/Elements/form#method)-Methode geschlossen werden, wenn ein `<form>`, das innerhalb des `<dialog>`-Elements eingebettet ist, gesendet wird. Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf dem `<dialog>`-Element verwendet werden. Siehe [Nutzungshinweise](#nutzungshinweise).

- `closedby`
  - : Gibt die Arten von Benutzeraktionen an, die zum Schließen des `<dialog>`-Elements verwendet werden können. Dieses Attribut unterscheidet drei Methoden, mit denen ein Dialog geschlossen werden kann:
    - Eine _leichte Ausblend-Benutzeraktion_, bei der das `<dialog>` geschlossen wird, wenn der Benutzer außerhalb davon klickt oder tippt. Dies entspricht dem ["leichten Ausblend"-Verhalten von "Auto"-Status-Popovers](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss).
    - Eine _plattformspezifische Benutzeraktion_, wie das Drücken der <kbd>Esc</kbd>-Taste auf Desktop-Plattformen oder eine "Zurück"- oder "Ausblende"-Geste auf Mobilplattformen.
    - Ein vom Entwickler spezifizierter Mechanismus wie ein {{htmlelement("button")}} mit einem [`click`](/de/docs/Web/API/Element/click_event)-Handler, der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) aufruft, oder eine {{htmlelement("form")}}-Einreichung.

    Mögliche Werte sind:
    - `any`
      - : Der Dialog kann mit einer der drei Methoden ausgeblendet werden.
    - `closerequest`
      - : Der Dialog kann mit einer plattformspezifischen Benutzeraktion oder einem vom Entwickler spezifizierten Mechanismus geschlossen werden.
    - `none`
      - : Der Dialog kann nur mit einem vom Entwickler spezifizierten Mechanismus geschlossen werden.

    Wenn das `<dialog>`-Element keinen gültigen `closedby`-Wert angegeben hat, dann:
    - Wenn es mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet wurde, verhält es sich, als wäre der Wert `"closerequest"`
    - Andernfalls verhält es sich, als wäre der Wert `"none"`.

- `open`
  - : Zeigt an, dass die Dialogbox aktiv ist und zur Interaktion zur Verfügung steht. Wenn das `open`-Attribut nicht gesetzt ist, wird die Dialogbox nicht für den Nutzer sichtbar sein.
    Es wird empfohlen, die `.show()`- oder `.showModal()`-Methode zu verwenden, um Dialoge anzuzeigen, anstatt das `open`-Attribut. Wenn ein `<dialog>` mit dem `open`-Attribut geöffnet wird, ist es nicht modal.

    > [!NOTE]
    > Obwohl Sie zwischen den offenen und geschlossenen Zuständen von nicht-modalen Dialogboxen wechseln können, indem Sie das Vorhandensein des `open`-Attributs umschalten, wird diese Methode nicht empfohlen. Siehe [`open`](/de/docs/Web/API/HTMLDialogElement/open) für weitere Informationen.

## Nutzungshinweise

- HTML {{HTMLElement("form")}}-Elemente können verwendet werden, um eine Dialogbox zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der Button, der zum Absenden des Formulars verwendet wird, [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` über die `dialog`-Methode gesendet wird, schließt die Dialogbox, die Zustände der Formularelemente werden gespeichert, aber nicht gesendet, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)-Eigenschaft wird auf den Wert des Buttons gesetzt, der aktiviert wurde.
- Das CSS {{cssxref('::backdrop')}}-Pseudo-Element kann verwendet werden, um den Hintergrund eines modalen Dialogs zu stylen, der hinter dem `<dialog>`-Element angezeigt wird, wenn der Dialog mit der [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode angezeigt wird. Zum Beispiel könnte dieses Pseudo-Element verwendet werden, um den inerten Inhalt hinter dem modalen Dialog zu verwischen, zu verdunkeln oder anderweitig zu obskurieren.
- Das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut sollte zu dem Element hinzugefügt werden, mit dem der Benutzer unmittelbar nach dem Öffnen eines modalen Dialogs interagieren soll. Wenn kein anderes Element eine unmittelbarere Interaktion erfordert, wird empfohlen, `autofocus` dem Schließen-Knopf im Dialog hinzuzufügen, oder dem Dialog selbst, wenn der Benutzer erwartet wird, darauf zu klicken/aktivieren, um es auszublenden.
- Fügen Sie dem `<dialog>`-Element nicht die Eigenschaft `tabindex` hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Der Inhalt des Dialogs, einschließlich des Schließen-Knopfes, der im Dialog enthalten ist, kann den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Beim Implementieren eines Dialogs ist es wichtig, den am besten geeigneten Ort für den Benutzerfokus festzulegen. Wenn Sie [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwenden, um ein `<dialog>` zu öffnen, wird der Fokus auf das erste fokussierbare verschachtelte Element gesetzt. Die explizite Angabe der Anfangsfokusplatzierung durch das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut hilft sicherzustellen, dass der Anfangsfokus auf das Element gesetzt wird, das als die beste Anfangsplatzierung für einen bestimmten Dialog angesehen wird. Wenn Sie unsicher sind, da es möglicherweise nicht immer bekannt ist, wo der Anfangsfokus innerhalb eines Dialogs gesetzt werden könnte, insbesondere in Fällen, in denen der Inhalt des Dialogs dynamisch beim Aufruf gerendert wird, könnte das `<dialog>`-Element selbst die beste Anfangsfokusplatzierung bieten.

Stellen Sie sicher, dass ein Mechanismus bereitgestellt wird, um den Benutzern das Schließen des Dialogs zu ermöglichen. Die robusteste Methode, um sicherzustellen, dass alle Benutzer den Dialog schließen können, besteht darin, einen expliziten Button dafür hinzuzufügen, wie beispielsweise einen Bestätigungs-, Abbruchs- oder Schließen-Button.

Standardmäßig kann ein durch die `showModal()`-Methode aufgerufener Dialog durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Ein nicht-modaler Dialog wird standardmäßig nicht über die <kbd>Esc</kbd>-Taste geschlossen, und je nachdem, was der nicht-modale Dialog darstellt, ist dieses Verhalten möglicherweise nicht erwünscht. Tastaturanwender erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und aufrechterhalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte das Drücken der <kbd>Esc</kbd>-Taste nur den zuletzt gezeigten Dialog schließen. Beim Verwenden von `<dialog>` wird dieses Verhalten vom Browser bereitgestellt.

Obwohl Dialoge mit anderen Elementen erstellt werden können, bietet das native `<dialog>`-Element Benutzerfreundlichkeits- und Barrierefreiheitsfunktionen, die repliziert werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck verwenden. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhaltensweisen unterstützt und die richtigen Beschriftungsempfehlungen befolgt werden.

Das `<dialog>`-Element wird von Browsern in ähnlicher Weise behandelt wie benutzerdefinierte Dialoge, die das ARIA-[role="dialog"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)-Attribut verwenden. `<dialog>`-Elemente, die durch die `showModal()`-Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), während `<dialog>`-Elemente, die durch die `show()`-Methode oder das `open`-Attribut angezeigt werden oder durch Ändern des Standard-`display`-Wertes eines `<dialog>`, als `[aria-modal="false"]` behandelt werden. Beim Implementieren modaler Dialoge sollte alles außer dem `<dialog>` und seinem Inhalt als inert gerendert werden, indem das [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attribut verwendet wird. Bei der Verwendung von `<dialog>` zusammen mit der `HTMLDialogElement.showModal()`-Methode wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### HTML-nur Dialog

Dieses Beispiel demonstriert die Erstellung eines nicht-modalen Dialogs nur mithilfe von HTML. Aufgrund des booleschen `open`-Attributs im `<dialog>`-Element erscheint der Dialog geöffnet, wenn die Seite geladen wird. Der Dialog kann durch Klicken auf den "OK"-Button geschlossen werden, da das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist. In diesem Fall ist kein JavaScript erforderlich, um das Formular zu schließen.

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

Dieser Dialog ist anfänglich geöffnet, da das `open`-Attribut vorhanden ist. Dialoge, die mit dem `open`-Attribut angezeigt werden, sind nicht modal. Nach dem Klicken auf "OK" wird der Dialog geschlossen, wodurch das Ergebnisfeld leer bleibt. Wenn der Dialog geschlossen wird, gibt es keine Methode, ihn wieder zu öffnen. Aus diesem Grund wird die Verwendung der [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode empfohlen, um nicht-modale Dialoge anzuzeigen. Es ist möglich, die Anzeige des Dialogs umschalten, indem das boolesche `open`-Attribut hinzugefügt oder entfernt wird, aber dies ist nicht die empfohlene Praxis.

### Erstellen eines modalen Dialogs

Dieses Beispiel zeigt einen modalen Dialog mit einem [Verlauf](/de/docs/Web/CSS/gradient)-Hintergrund. Mit der `.showModal()`-Methode wird der modale Dialog geöffnet, wenn der Button "Show the dialog" aktiviert wird. Der Dialog kann durch Drücken der <kbd>Esc</kbd>-Taste oder über die `close()`-Methode geschlossen werden, wenn der "Close"-Button innerhalb des Dialogs aktiviert wird.

Wenn ein Dialog geöffnet wird, gibt der Browser standardmäßig Fokus auf das erste Element, das innerhalb des Dialogs fokussiert werden kann. In diesem Beispiel ist das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut auf den "Close"-Button angewendet, wodurch es beim Öffnen des Dialogs fokussiert wird, da dies das Element ist, mit dem der Benutzer unmittelbar nach dem Öffnen des Dialogs interagieren soll.

#### HTML

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a groovy backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir können den Hintergrund des Dialogs mit dem {{cssxref('::backdrop')}}-Pseudo-Element stylen.

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

Der Dialog wird modal mit der `.showModal()`-Methode geöffnet und geschlossen, indem die `.close()`- oder `.requestClose()`-Methoden verwendet werden.

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

Wenn der modale Dialog angezeigt wird, erscheint er oberhalb aller anderen Dialoge, die möglicherweise vorhanden sind. Alles außerhalb des modalen Dialogs ist inaktiv, und Interaktionen außerhalb des Dialogs werden blockiert. Beachten Sie, dass beim Öffnen des Dialogs, außer dem Dialog selbst, keine Interaktion mit dem Dokument möglich ist; der "Show the dialog"-Button ist größtenteils durch den fast undurchsichtigen Hintergrund des Dialogs verdeckt und ist inaktiv.

### Umgang mit dem Rückgabewert des Dialogs

Dieses Beispiel demonstriert den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie man einen modalen Dialog über ein Formular schließen kann. Standardmäßig ist der `returnValue` der leere String oder der Wert des Buttons, der das Formular innerhalb des `<dialog>`-Elements einreicht, falls vorhanden.

Dieses Beispiel öffnet einen modalen Dialog, wenn der Button "Show the dialog" aktiviert wird. Der Dialog enthält ein Formular mit einem {{HTMLElement("select")}} und zwei {{HTMLElement("button")}}-Elementen, die standardmäßig `type="submit"` haben. Ein Event-Listener aktualisiert den Wert des "Confirm"-Buttons, wenn die Auswahloption geändert wird. Wenn der "Confirm"-Button aktiviert wird, um den Dialog zu schließen, ist der aktuelle Wert des Buttons der Rückgabewert. Wenn der Dialog durch Drücken des "Cancel"-Buttons geschlossen wird, ist der `returnValue` `cancel`.

Wenn der Dialog geschlossen wird, wird der Rückgabewert unter dem "Show the dialog"-Button angezeigt. Wenn der Dialog durch Drücken der <kbd>Esc</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert, und das `close`-Ereignis tritt nicht auf, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

- Durch Absenden des Formulars innerhalb des Dialogformulars mithilfe der `dialog`-Methode (wie im [HTML-only-Beispiel](#html-nur_dialog) zu sehen).
- Durch Drücken der <kbd>Esc</kbd>-Taste.
- Durch Aufrufen der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode (wie im [modalen Beispiel](#erstellen_eines_modalen_dialogs) zu sehen).
  In diesem Beispiel schließt der "Cancel"-Button den Dialog über die `dialog`-Formularmethode, und der "Confirm"-Button schließt den Dialog über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode.

Der "Cancel"-Button enthält das [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input/submit#formmethod)-Attribut, das die Standard-{{HTTPMethod("GET")}}-Methode des {{HTMLElement("form")}} überschreibt. Wenn die Methode eines Formulars [`dialog`](#nutzungshinweise) ist, wird der Zustand des Formulars gespeichert, aber nicht gesendet, und der Dialog wird geschlossen.

Ohne eine `action`-Angabe führt das Absenden des Formulars über die Standard-{{HTTPMethod("GET")}}-Methode zu einem Neuladen der Seite. Wir verwenden JavaScript, um die Übermittlung zu verhindern und den Dialog mit den [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)- und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methoden zu schließen.

Es ist wichtig, in jedem `dialog`-Element einen Schließmechanismus bereitzustellen. Die <kbd>Esc</kbd>-Taste schließt standardmäßig keine nicht-modalen Dialoge, noch kann man davon ausgehen, dass ein Benutzer überhaupt Zugriff auf eine physische Tastatur hat (z. B. jemand, der ein Touch-Gerät ohne Tastaturzugriff verwendet).

### Schließen eines Dialogs mit einer erforderlichen Formulareingabe

Wenn ein Formular innerhalb eines Dialogs eine erforderliche Eingabe hat, lässt der Benutzeragent den Benutzer den Dialog erst schließen, wenn ein Wert für die erforderliche Eingabe bereitgestellt wurde. Um einen solchen Dialog zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate)-Attribut auf dem Schließen-Button oder rufen Sie die `close()`-Methode auf dem Dialogobjekt auf, wenn der Schließen-Button geklickt wurde.

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

In der Ausgabe sehen wir, dass es unmöglich ist, den Dialog mit dem _Normal close_-Button zu schließen. Aber der Dialog kann geschlossen werden, wenn wir die Formularvalidierung mit dem `formnovalidate`-Attribut auf dem _Cancel_-Button umgehen. Programmatisch wird `dialog.close()` auch einen solchen Dialog schließen.

### Vergleich der verschiedenen `closedby` Verhaltensweisen

Dieses Beispiel zeigt den Unterschied im Verhalten zwischen verschiedenen Werten des [`closedby`](#closedby)-Attributs.

#### HTML

Wir stellen drei {{htmlelement("button")}}-Elemente und drei `<dialog>`-Elemente bereit. Jeder Button wird programmiert, einen anderen Dialog zu öffnen, der das Verhalten eines der drei Werte des `closedby`-Attributs — `none`, `closerequest` und `any` — demonstriert. Beachten Sie, dass jedes `<dialog>`-Element ein `<button>`-Element enthält, das zum Schließen verwendet wird.

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

Hier weisen wir verschiedenen Variablen zu, um auf die Hauptkontroll-`<button>`-Elemente, die `<dialog>`-Elemente und die "Close"-`<button>`-Elemente innerhalb der Dialoge zu verweisen. Zuerst weisen wir jedem Kontrollbutton mit [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) einen [`click`](/de/docs/Web/API/Element/click_event)-Ereignislistener zu, dessen Ereignishandlerfunktion das zugehörige `<dialog>`-Element über [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) öffnet. Dann durchlaufen wir die "Close"-`<button>`-Referenzen und weisen jedem eine `click`-Ereignishandlerfunktion zu, die das `<dialog>`-Element über [`close()`](/de/docs/Web/API/HTMLDialogElement/close) schließt.

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

Versuchen Sie, auf jeden Button zu klicken, um einen Dialog zu öffnen. Der erste kann nur durch Klicken auf seinen "Close"-Button geschlossen werden. Der zweite kann auch durch eine gerätespezifische Benutzeraktion wie das Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Der dritte hat ein vollständiges ["light-dismiss"-Verhalten](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss), sodass er auch durch Klicken oder Tippen außerhalb des Dialogs geschlossen werden kann.

### Animieren von Dialogen

`<dialog>`-Elemente sind auf [`display: none;`](/de/docs/Web/CSS/display) gesetzt, wenn sie ausgeblendet sind, und `display: block;`, wenn sie angezeigt werden, und werden aus dem / in den {{Glossary("top_layer", "Top Layer")}} und den [Zugänglichkeitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt / hinzugefügt. Daher muss für `<dialog>`-Elemente die {{cssxref("display")}}-Eigenschaft animierbar sein, damit sie animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Insbesondere wechselt der Browser zwischen `none` und einem anderen `display`-Wert, sodass der animierte Inhalt für die gesamte Animationsdauer sichtbar ist.

Ein Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wird der Wert bei `0%` der Animationsdauer auf `block` umgeschaltet, sodass er die gesamte Zeit über sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass er die ganze Zeit über sichtbar ist.

> [!NOTE]
> Wenn Sie mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) animieren, muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt sein, um das oben genannte Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) verfügbar; ein entsprechender Schritt ist nicht erforderlich.

#### Übergang von Dialogelementen

Bei der Animation von `<dialog>`-Elementen mit CSS-Übergängen sind folgende Merkmale erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style)-At-Regel
  - : Bietet eine Reihe von Startwerten für Eigenschaften, die Sie auf dem `<dialog>` gesetzt haben und von denen Sie jedes Mal, wenn es geöffnet wird, wechseln möchten. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn sich ein Eigenschaftswert bei einem sichtbaren Element ändert; sie werden nicht ausgelöst bei den ersten Stilaktualisierungen von Elementen oder wenn sich der `display`-Typ von `none` in einen anderen Typ ändert.
- [`display`](/de/docs/Web/CSS/display)-Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, sodass das `<dialog>` die gesamte Dauer des Übergangs als `display: block` (oder ein anderer sichtbarer `display`-Wert, der im offenen Zustand des Dialogs gesetzt ist) verbleibt, um die anderen Übergänge sichtbar zu machen.
- [`overlay`](/de/docs/Web/CSS/overlay)-Eigenschaft
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass die Entfernung des `<dialog>` aus dem Top Layer so lange verzögert wird, bis der Übergang abgeschlossen ist, was wiederum sicherstellt, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf den `display`- und `overlay`-Übergang (oder auf die {{cssxref("transition")}}-Shorthand), um diskrete Übergänge auf diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Hier ist ein kurzes Beispiel, um zu zeigen, wie das aussehen könnte.

##### HTML

Das HTML enthält ein `<dialog>`-Element sowie einen Button, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS nehmen wir eine `@starting-style`-Block auf, der die Übergangsstile für die `opacity`- und `transform`-Eigenschaften angibt, Übergangsendstile im `dialog:open`-Zustand, und Standardstile im standardmäßigen `dialog`-Zustand, zu dem der Übergang zurückkehrt, nachdem das `<dialog>` erschienen ist. Beachten Sie, wie die `transition`-Liste des `<dialog>` nicht nur diese Eigenschaften enthält, sondern auch die `display`- und `overlay`-Eigenschaften, jede mit `allow-discrete` auf ihnen gesetzt.

Wir setzen auch einen Ausgangsstilwert für die {{cssxref("background-color")}}-Eigenschaft auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop), der hinter dem `<dialog>` erscheint, wenn es geöffnet wird, um eine schöne Abdunkelungseffektanimierung zu liefern. Der `dialog:open::backdrop`-Selektor wählt nur die Hintergründe von `<dialog>`-Elementen aus, wenn sich der Dialog im offenen Zustand befindet.

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
  background-color: transparent;
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
    background-color: transparent;
  }
}
```

> [!NOTE]
> In Browsern, die die {{cssxref(":open")}}-Pseudo-Klasse nicht unterstützen, können Sie den Attributselektor `dialog[open]` verwenden, um das `<dialog>`-Element zu stylen, wenn es sich im offenen Zustand befindet.

##### JavaScript

Das JavaScript fügt den Show- und Close-Buttons Event-Handler hinzu, die dafür sorgen, dass sie das `<dialog>` anzeigen beziehungsweise schließen, wenn sie angeklickt werden:

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
> Da `<dialog>`-Elemente bei jeder Anzeige von `display: none` zu `display: block` wechseln, wechseln sie jedes Mal, wenn der Eintragsübergang auftritt, von ihren `@starting-style`-Stilen zu ihren `dialog:open`-Stilen. Wenn das `<dialog>` geschlossen wird, wechselt es von seinem `dialog:open`-Zustand zum Standard-`dialog`-Zustand.
>
> Es ist möglich, dass die Stiländerung beim Eintritt und Austritt in solchen Fällen unterschiedlich ist. Sehen Sie unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used)-Beispiel für einen Beweis hierfür.

#### Dialog-Schlüsselbild-Animationen

Beim Animieren eines `<dialog>` mit CSS-Schlüsselbild-Animationen gibt es einige Unterschiede zu beachten im Vergleich zu Übergängen:

- Sie geben kein `@starting-style` an.
- Sie fügen den `display`-Wert in ein Schlüsselbild ein; dies wird der `display`-Wert für die gesamte Animation (oder bis ein anderer nicht-`none`-`display`-Wert auftritt).
- Sie müssen diskrete Animationen nicht explizit aktivieren; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Schlüsselbildern.
- Sie müssen `overlay` auch nicht in Schlüsselbildern setzen; die `display`-Animation behandelt die Animation des `<dialog>` von sichtbar zu versteckt.

Schauen wir uns ein Beispiel an, damit Sie sehen können, wie dies aussieht.

##### HTML

Zuerst enthält das HTML ein `<dialog>`-Element, sowie einen Button, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Schlüsselbilder, um zwischen den geschlossenen und angezeigten Zuständen des `<dialog>` zu animieren, sowie die Verblassen-Animation für den Hintergrund des `<dialog>`. Die `<dialog>`-Animationen umfassen das Animieren von `display`, um sicherzustellen, dass die tatsächlichen sichtbaren Animationseffekte die gesamte Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, das Ausblenden des Hintergrundes zu animieren – der Hintergrund wird sofort aus dem DOM entfernt, wenn das `<dialog>` geschlossen wird, sodass nichts animiert werden kann.

```css
dialog {
  animation: fade-out 0.7s ease-out;
}

dialog:open {
  animation: fade-in 0.7s ease-out;
}

dialog:open::backdrop {
  background-color: black;
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
    opacity: 0;
  }

  100% {
    opacity: 0.25;
  }
}

body,
button {
  font-family: system-ui;
}
```

##### JavaScript

Schließlich fügt das JavaScript den Buttons Event-Handler hinzu, um das Anzeigen und Schließen des `<dialog>` zu ermöglichen:

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

{{ EmbedLiveSample("dialog keyframe animations", "100%", "200") }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließender Inhalt</a>,
        Untergliederungs-Wurzel
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließender Inhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">fließenden Inhalt</a> akzeptiert
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role">dialog</a>
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
- [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) globales Attribut für HTML-Elemente
- {{CSSXref("::backdrop")}} CSS-Pseudo-Element
- [Web-Formulare](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
