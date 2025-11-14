---
title: "<dialog>: Das Dialogelement"
slug: Web/HTML/Reference/Elements/dialog
l10n:
  sourceCommit: c10cfb6daba8fe6fc5366f2e1ca1bd32de8a537f
---

Das **`<dialog>`** [HTML](/de/docs/Web/HTML) Element repräsentiert ein modales oder nicht modales Dialogfenster oder eine andere interaktive Komponente, wie z.B. eine entfernbare Benachrichtigung, einen Inspektor oder ein Unterfenster.

Das HTML-`<dialog>`-Element wird verwendet, um sowohl modale als auch nicht modale Dialogfenster zu erstellen. Modale Dialogfenster unterbrechen die Interaktion mit dem Rest der Seite, während nicht modale Dialogfenster die Interaktion mit dem Rest der Seite erlauben.

JavaScript sollte verwendet werden, um das `<dialog>`-Element anzuzeigen. Verwenden Sie die Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), um ein modales Dialogfenster anzuzeigen, und die Methode [`.show()`](/de/docs/Web/API/HTMLDialogElement/show), um ein nicht modales Dialogfenster anzuzeigen. Das Dialogfenster kann mit der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) oder mit der [`dialog`](/de/docs/Web/HTML/Reference/Elements/form#method) Methode beim Absenden eines innerhalb des `<dialog>`-Elements verschachtelten `<form>` geschlossen werden. Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf dem `<dialog>`-Element verwendet werden. Siehe [Verwendungsnotizen](#verwendungsnotizen).

- `closedby`
  - : Gibt die Arten von Benutzeraktionen an, die zum Schließen des `<dialog>`-Elements verwendet werden können. Dieses Attribut unterscheidet drei Methoden, wie ein Dialog geschlossen werden kann:
    - Eine _Benutzeraktion zum leichten Schließen_, bei der das `<dialog>` geschlossen wird, wenn der Benutzer außerhalb des Dialogs klickt oder tippt. Dies ist gleichbedeutend mit dem Verhalten ["light dismiss" im Auto-Zustand von Popovers](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss).
    - Eine _plattform-spezifische Benutzeraktion_, wie das Drücken der <kbd>Esc</kbd>-Taste auf Desktop-Plattformen, oder eine "Zurück"- oder "Schließen"-Geste auf mobilen Plattformen.
    - Ein entwicklerspezifischer Mechanismus, wie ein {{htmlelement("button")}} mit einem [`click`](/de/docs/Web/API/Element/click_event)-Handler, der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) aufruft, oder eine {{htmlelement("form")}}-Einreichung.

    Mögliche Werte sind:
    - `any`
      - : Der Dialog kann mit einer der drei Methoden geschlossen werden.
    - `closerequest`
      - : Der Dialog kann mit einer plattformspezifischen Benutzeraktion oder einem entwicklerspezifischen Mechanismus geschlossen werden.
    - `none`
      - : Der Dialog kann nur mit einem entwicklerspezifischen Mechanismus geschlossen werden.

    Wenn das `<dialog>`-Element keinen gültigen `closedby`-Wert angegeben hat, dann
    - verhält es sich, wenn es mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet wurde, so als hätte der Wert `"closerequest"`
    - andernfalls verhält es sich, als wäre der Wert `"none"`.

- `open`
  - : Zeigt an, dass das Dialogfenster aktiv ist und für die Interaktion zur Verfügung steht. Wenn das `open`-Attribut nicht gesetzt ist, ist das Dialogfenster für den Benutzer nicht sichtbar.
    Es wird empfohlen, die Methoden `.show()` oder `.showModal()` zu verwenden, um Dialoge darzustellen, anstatt das `open`-Attribut zu verwenden. Wenn ein `<dialog>` mit dem `open`-Attribut geöffnet wird, ist es nicht modal.

    > [!NOTE]
    > Während Sie zwischen den offenen und geschlossenen Zuständen von nicht modalen Dialogfenstern wechseln können, indem Sie die Anwesenheit des `open`-Attributs ändern, wird dieser Ansatz nicht empfohlen. Siehe [`open`](/de/docs/Web/API/HTMLDialogElement/open) für weitere Informationen.

## Verwendungsnotizen

- HTML {{HTMLElement("form")}}-Elemente können verwendet werden, um ein Dialogfeld zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der Button, der verwendet wird, um das Formular einzureichen, [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` mit der `dialog`-Methode übermittelt wird, schließt sich das Dialogfeld, die Zustände der Formularelemente werden gespeichert, aber nicht übermittelt, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)-Eigenschaft wird auf den Wert des Buttons gesetzt, der aktiviert wurde.
- Das CSS {{cssxref('::backdrop')}} Pseudo-Element kann verwendet werden, um den Hintergrund eines modalen Dialogs zu gestalten, der hinter dem `<dialog>`-Element angezeigt wird, wenn das Dialog mit der Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) angezeigt wird. Zum Beispiel könnte dieses Pseudo-Element verwendet werden, um den inaktiven Inhalt hinter dem modalen Dialog zu verwischen, abzudunkeln oder anderweitig zu verdecken.
- Das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut sollte zu dem Element hinzugefügt werden, mit dem der Benutzer unmittelbar nach dem Öffnen eines modalen Dialogs interagieren soll. Wenn kein anderes Element eine dringendere Interaktion erfordert, wird empfohlen, `autofocus` dem Schließen-Button im Dialog oder dem Dialog selbst hinzuzufügen, wenn erwartet wird, dass der Benutzer darauf klicken/aktivieren soll, um es zu schließen.
- Fügen Sie dem `<dialog>`-Element nicht die `tabindex`-Eigenschaft hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Die Inhalte des Dialogs, einschließlich des Schließen-Buttons im Dialog, können den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Beim Implementieren eines Dialogs ist es wichtig zu überlegen, wo der Benutzerfokus am besten gesetzt werden sollte. Wenn die Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwendet wird, um ein `<dialog>` zu öffnen, wird der Fokus auf das erste fokussierbare verschachtelte Element gesetzt. Das explizite Angeben der ursprünglichen Fokusplatzierung durch das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut hilft sicherzustellen, dass der ursprüngliche Fokus auf das Element gesetzt wird, das als die beste anfängliche Fokusplatzierung für einen bestimmten Dialog angesehen wird. In Zweifelsfällen, da es möglicherweise nicht immer bekannt ist, wo der anfängliche Fokus innerhalb eines Dialogs gesetzt werden könnte, insbesondere bei Instanzen, in denen der Inhalt eines Dialogs beim Aufruf dynamisch gerendert wird, könnte das `<dialog>`-Element selbst die beste anfängliche Fokusplatzierung bieten.

Stellen Sie sicher, dass eine Möglichkeit bereitgestellt wird, mit der Benutzer den Dialog schließen können. Die robusteste Möglichkeit, sicherzustellen, dass alle Benutzer den Dialog schließen können, besteht darin, einen expliziten Button dafür bereitzustellen, wie z.B. einen Bestätigungs-, Abbruchs- oder Schließen-Button.

Standardmäßig kann ein Dialog, der mit der `showModal()`-Methode aufgerufen wurde, durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Ein nicht modales Dialog wird standardmäßig nicht durch die <kbd>Esc</kbd>-Taste geschlossen, und je nach Art des nicht modalen Dialogs könnte dieses Verhalten nicht gewünscht sein. Tastaturbenutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und beibehalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte das Drücken der <kbd>Esc</kbd>-Taste nur den zuletzt angezeigten Dialog schließen. Beim Verwenden von `<dialog>` wird dieses Verhalten vom Browser bereitgestellt.

Obwohl Dialoge mit anderen Elementen erstellt werden können, bietet das native `<dialog>`-Element Benutzerfreundlichkeits- und Barrierefreiheitsmerkmale, die repliziert werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck verwenden. Wenn Sie eine benutzerdefinierte Dialog-Implementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhalten unterstützt und die richtigen Beschriftungsempfehlungen befolgt werden.

Das `<dialog>`-Element wird von Browsern ähnlich behandelt wie benutzerdefinierte Dialoge, die das ARIA [role="dialog"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)-Attribut verwenden. `<dialog>`-Elemente, die von der Methode `showModal()` aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), während `<dialog>`-Elemente, die von der Methode `show()` aufgerufen werden oder die mit dem `open`-Attribut oder durch Ändern der Standardanzeige eines `<dialog>` geöffnet werden, als `[aria-modal="false"]` dargestellt werden. Beim Implementieren von modalen Dialogen sollte alles außer dem `<dialog>` und seinen Inhalten mit dem [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attribut inaktiv gemacht werden. Beim Verwenden von `<dialog>` zusammen mit der Methode `HTMLDialogElement.showModal()` wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### Nur-HTML-Dialog

Dieses Beispiel zeigt die Erstellung eines nicht modalen Dialogs nur mit HTML. Wegen des booleschen `open`-Attributs im `<dialog>`-Element erscheint das Dialog geöffnet, wenn die Seite geladen wird. Das Dialog kann durch Klicken auf den Button "OK" geschlossen werden, da das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist. In diesem Fall wird kein JavaScript benötigt, um das Formular zu schließen.

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

Dieses Dialog ist anfangs wegen des Vorhandenseins des `open`-Attributs geöffnet. Dialoge, die mit dem `open`-Attribut angezeigt werden, sind nicht modal. Nach dem Klicken auf "OK" wird das Dialog beendet, wodurch der Ergebnishintergrund leer bleibt. Wenn das Dialog beendet wird, gibt es keine Methode, um es erneut zu öffnen. Aus diesem Grund ist es bevorzugt, nicht modale Dialoge mit der Methode [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show) anzuzeigen. Es ist möglich, die Anzeige des Dialogs zu wechseln, indem man das boolesche `open`-Attribut hinzufügt oder entfernt, aber es wird nicht empfohlen.

### Erstellung eines modalen Dialogs

Dieses Beispiel zeigt ein modales Dialog mit einem [Gradienten](/de/docs/Web/CSS/Reference/Values/gradient)-Hintergrund. Die Methode `.showModal()` öffnet den modalen Dialog, wenn der "Show the dialog"-Button aktiviert wird. Der Dialog kann durch Drücken der <kbd>Esc</kbd>-Taste oder über die `close()`-Methode geschlossen werden, wenn der "Close"-Button im Dialog aktiviert wird.

Wenn ein Dialog geöffnet wird, gibt der Browser standardmäßig den Fokus auf das erste fokussierbare Element innerhalb des Dialogs. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut auf den "Close"-Button angewendet, um ihm den Fokus zu geben, wenn der Dialog geöffnet wird, da dies das Element ist, mit dem der Benutzer direkt nach dem Öffnen des Dialogs interagieren soll.

#### HTML

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a groovy backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir können den Hintergrund des Dialogs mittels des {{cssxref('::backdrop')}} Pseudo-Elements gestalten.

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

Der Dialog wird modal mit der `.showModal()`-Methode geöffnet und mit den Methoden `.close()` oder `.requestClose()` geschlossen.

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

Wenn der modale Dialog angezeigt wird, erscheint er über allen anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des modalen Dialogs ist inaktiv, und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass, wenn der Dialog geöffnet ist, mit Ausnahme des Dialogs selbst, keine Interaktion mit dem Dokument möglich ist; der "Show the dialog"-Button ist größtenteils durch den fast undurchsichtigen Hintergrund des Dialogs verdeckt und ist inaktiv.

### Umgang mit dem Rückgabewert des Dialogs

Dieses Beispiel demonstriert den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie man einen modalen Dialog schließt, indem man ein Formular verwendet. Standardmäßig ist der `returnValue` der leere String oder der Wert des Buttons, der das Formular innerhalb des `<dialog>`-Elements eingereicht hat, falls vorhanden.

In diesem Beispiel wird ein modales Dialog geöffnet, wenn der "Show the dialog"-Button aktiviert wird. Der Dialog enthält ein Formular mit einem {{HTMLElement("select")}} und zwei {{HTMLElement("button")}}-Elementen, die standardmäßig auf `type="submit"` gesetzt sind. Ein Ereignis-Handler aktualisiert den Wert des "Confirm"-Buttons, wenn die Auswahloption geändert wird. Wenn der "Confirm"-Button aktiviert wird, um den Dialog zu schließen, ist der aktuelle Wert des Buttons der Rückgabewert. Wenn der Dialog geschlossen wird, indem der "Cancel"-Button gedrückt wird, ist der `returnValue` `cancel`.

Wenn der Dialog geschlossen wird, wird der Rückgabewert unter dem "Show the dialog"-Button angezeigt. Wenn der Dialog durch Drücken der <kbd>Esc</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert, und das `close`-Ereignis tritt nicht ein, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

Die obigen Beispiele zeigen die folgenden drei Methoden, um modale Dialoge zu schließen:

- Durch Einreichen des Formulars innerhalb des Dialogformulars mithilfe der `dialog`-Methode (wie im [Nur-HTML-Beispiel](#nur-html-dialog) gezeigt).
- Durch Drücken der <kbd>Esc</kbd>-Taste.
- Durch Aufrufen der Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) (wie im [modale Beispiel](#erstellung_eines_modalen_dialogs) gezeigt).
  In diesem Beispiel schließt der "Cancel"-Button den Dialog über die `dialog`-Formularmethode, und der "Confirm"-Button schließt den Dialog über die Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close).

Der "Cancel"-Button enthält das [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input/submit#formmethod)-Attribut, das die Standardeinstellung {{HTTPMethod("GET")}} des {{HTMLElement("form")}}-Elements überschreibt. Wenn die Methode eines Formulars [`dialog`](#verwendungsnotizen) ist, wird der Zustand des Formulars gespeichert, aber nicht übermittelt, und der Dialog wird geschlossen.

Ohne `action` bewirkt das Einreichen des Formulars über die Standardmethode {{HTTPMethod("GET")}} ein Nachladen der Seite. Wir verwenden JavaScript, um die Übermittlung zu verhindern und das Dialog mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) zu schließen.

Es ist wichtig, innerhalb jedes `dialog`-Elements einen Schließmechanismus bereitzustellen. Die <kbd>Esc</kbd>-Taste schließt standardmäßig keine nicht modalen Dialoge, und man kann nicht davon ausgehen, dass ein Benutzer überhaupt Zugriff auf eine physische Tastatur hat (z.B. jemand, der ein Touchscreen-Gerät ohne Tastatur verwendet).

### Schließen eines Dialogs mit einer erforderlichen Formulareingabe

Wenn ein Formular innerhalb eines Dialogs eine erforderliche Eingabe hat, lässt der Benutzeragent Sie den Dialog nur schließen, wenn Sie einen Wert für die erforderliche Eingabe bereitstellen. Um einen solchen Dialog zu schließen, verwenden Sie entweder das Attribut [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate) am Schließen-Button oder rufen Sie die Methode `close()` des Dialog-Objekts auf, wenn der Schließen-Button angeklickt wird.

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

Aus der Ausgabe ersieht man, dass es unmöglich ist, den Dialog mit dem _Normal schließen_-Button zu schließen. Aber der Dialog kann geschlossen werden, wenn wir die Formularvalidierung mit dem `formnovalidate`-Attribut am _Cancel_-Button umgehen. Programmgesteuert wird `dialog.close()` auch solche Dialoge schließen.

### Vergleich verschiedener `closedby`-Verhaltensweisen

Dieses Beispiel zeigt den Unterschied im Verhalten zwischen verschiedenen Werten des [`closedby`](#closedby) Attributs.

#### HTML

Wir bieten drei {{htmlelement("button")}}-Elemente und drei `<dialog>`-Elemente an. Jeder Button wird so programmiert, dass er einen anderen Dialog öffnet, der das Verhalten eines der drei Werte des `closedby`-Attributs — `none`, `closerequest` und `any` — demonstriert. Beachten Sie, dass jedes `<dialog>`-Element ein `<button>`-Element enthält, das zum Schließen verwendet wird.

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

Hier weisen wir verschiedenen Variablen die Referenz auf die Hauptsteuerungs-`<button>`-Elemente, die `<dialog>`-Elemente und die "Close"-`<button>`-Elemente in den Dialogen zu. Zunächst weisen wir jedem Steuerungsbutton einen [`click`](/de/docs/Web/API/Element/click_event) Ereignis-Listener zu, dessen Ereignis-Handler-Funktion das zugehörige `<dialog>`-Element über [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) öffnet. Dann durchlaufen wir die "Close"-`<button>`-Referenzen und weisen jeder davon einen `click` Ereignishandler zu, der das zugehörige `<dialog>`-Element über [`close()`](/de/docs/Web/API/HTMLDialogElement/close) schließt.

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

Versuchen Sie, jeden Button zu klicken, um einen Dialog zu öffnen. Der erste kann nur durch Klicken auf seinen "Close"-Button geschlossen werden. Der zweite kann auch über eine gerätespezifische Benutzeraktion, wie das Drücken der <kbd>Esc</kbd>-Taste, geschlossen werden. Der dritte hat ein vollständiges ["light-dismiss"-Verhalten](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss), sodass er auch durch Klicken oder Tippen außerhalb des Dialogs geschlossen werden kann.

### Animierung von Dialogen

`<dialog>`-Elemente werden auf [`display: none;`](/de/docs/Web/CSS/Reference/Properties/display) gesetzt, wenn sie verborgen sind und `display: block;` wenn sie angezeigt werden, sowie aus dem {{Glossary("top_layer", "obersten Schicht")}} und dem [Barrierefreiheitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt bzw. hinzugefügt. Daher muss das {{cssxref("display")}}-Eigenschaft animierbar sein, damit `<dialog>`-Elemente animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/Reference/Properties/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Insbesondere schaltet der Browser zwischen `none` und einem anderen `display`-Wert um, sodass der animierte Inhalt für die gesamte Animationsdauer sichtbar bleibt.

Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wird der Wert zu `block` bei `0%` der Animationsdauer umgeschaltet, sodass er während der gesamten Zeit sichtbar bleibt.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wird der Wert zu `none` bei `100%` der Animationsdauer umgeschaltet, sodass er während der gesamten Zeit sichtbar bleibt.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) eingestellt werden, um das oben beschriebene Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig verfügbar, wenn mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) animiert wird; ein entsprechender Schritt ist nicht erforderlich.

#### Übergänge bei Dialogelementen

Beim Animieren von `<dialog>`-Elementen mit CSS-Übergängen sind folgende Merkmale erforderlich:

- {{cssxref("@starting-style")}}-Regel
  - : Bietet eine Reihe von Startwerten für Eigenschaften, die am `<dialog>` gesetzt sind und von denen Sie jedes Mal aus Übergänge vornehmen möchten, wenn es geöffnet wird. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn eine Eigenschaft von einem Wert zu einem anderen bei einem sichtbaren Element geändert wird; sie werden nicht durch die ersten Stilaktualisierungen von Elementen oder wenn der Anzeigetyp von `none` zu einem anderen Typ wechselt ausgelöst.
- {{cssxref("display")}}-Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das `<dialog>` für die Dauer des Übergangs bei `display: block` (oder einem anderen sichtbaren `display`-Wert dort, wo es im geöffneten Zustand des Dialogs gesetzt ist) bleibt, was sicherstellt, dass die anderen Übergänge sichtbar sind.
- {{cssxref("overlay")}}-Eigenschaft
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass das Entfernen des `<dialog>` aus der obersten Schicht bis zum Abschluss des Übergangs zurückgestellt wird, was wiederum sicherstellt, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf die {{cssxref("transition")}}-Kurzschreibung), um diskrete Übergänge bei diesen zwei Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Hier ist ein kleines Beispiel, um zu zeigen, wie dies aussehen könnte.

##### HTML

Das HTML enthält ein `<dialog>`-Element, sowie einen Button, um das Dialog zu zeigen. Zusätzlich enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS fügen wir einen `@starting-style`-Block ein, der die Übergangsstil-Startwerte für die `opacity`- und `transform`-Eigenschaften definiert, Übergang-Endwerte im `dialog:open`-Zustand, und die Standardwerte im Standard-`dialog`-Zustand, um nach dem ersten Auftreten des `<dialog>` zum Zurückübergehen zu umstellen. Beachten Sie, wie die Übergangsliste des `<dialog>` nicht nur diese Eigenschaften, sondern auch die `display`- und `overlay`-Eigenschaften enthält, jeweils mit `allow-discrete` darauf gesetzt.

Wir setzen auch einen Startwert für die {{cssxref("background-color")}}-Eigenschaft auf dem [`::backdrop`](/de/docs/Web/CSS/Reference/Selectors/::backdrop), das hinter dem `<dialog>` erscheint, wenn es geöffnet wird, um eine schöne Dunkelungsanimation zu bieten. Der `dialog:open::backdrop`-Selektor wählt nur Backdrops von `<dialog>`-Elementen aus, wenn der Dialog geöffnet ist.

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
> In Browsern, die die {{cssxref(":open")}} Pseudo-Klasse nicht unterstützen, können Sie den Attributselektor `dialog[open]` verwenden, um das `<dialog>`-Element zu stylen, wenn es im geöffneten Zustand ist.

##### JavaScript

Das JavaScript fügt den Schaltflächen Show und Close Ereignis-Handler hinzu, die sie dazu bringen, das `<dialog>` zu zeigen und zu schließen, wenn sie geklickt werden:

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

{{ EmbedLiveSample("Transitioning dialog elements", "100%", "200") }}

> [!NOTE]
> Da `<dialog>`-Elemente jedes Mal von `display: none` zu `display: block` wechseln, wenn sie gezeigt werden, wechselt das `<dialog>` jedes Mal von seinen `@starting-style`-Stilen zu seinen `dialog:open`-Stilen, wenn der Einstiegstransition auftritt. Wenn das `<dialog>` schließt, wechselt es von seinem `dialog:open`-Zustand zurück zum Standard-`dialog`-Zustand.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt in solchen Fällen unterschiedlich ist. Siehe unser Beispiel zur [Demonstration, wann Startstile verwendet werden](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Beweis dafür.

#### Keyframe-Animationen für Dialog

Beim Animieren eines `<dialog>` mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu beachten, im Vergleich zu Übergängen:

- Sie geben kein `@starting-style` an.
- Sie schließen den `display`-Wert in einem Keyframe ein; dies wird der `display`-Wert für die gesamte Animation sein oder bis ein anderer nicht-`none`-Display-Wert auftritt.
- Sie müssen diskrete Animationen nicht explizit aktivieren; es gibt kein `allow-discrete` innerhalb von Keyframes.
- Sie müssen `overlay` auch nicht innerhalb von Keyframes einstellen; die `display`-Animation behandelt die Animation des `<dialog>` vom gezeigten zum verborgenen Zustand.

Betrachten wir ein Beispiel, damit Sie sehen können, wie das aussieht.

##### HTML

Zuerst enthält das HTML ein `<dialog>`-Element, sowie einen Button, um das Dialog zu zeigen. Zusätzlich enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Keyframes, um zwischen den geschlossenen und gezeigten Zuständen des `<dialog>` zu animieren, plus die Einblendanimation für das `<dialog>`-Backdrop. Die `<dialog>`-Animationen beinhalten die Animation von `display`, um sicherzustellen, dass die tatsächlichen sichtbaren Animationseffekte für die gesamte Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, das Backdrop-Ausblenden zu animieren — das Backdrop wird sofort aus dem DOM entfernt, wenn das `<dialog>` geschlossen wird, daher gibt es nichts zu animieren.

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

Schließlich fügt das JavaScript den Schaltflächen Ereignis-Handler hinzu, um das `<dialog>` zu zeigen und zu schließen:

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
      <th scope="row">Auslassen des Tags</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind obligatorisch.</td>
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
- {{CSSXref("::backdrop")}} CSS-Pseudoelement
- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
