---
title: "<dialog>: Das Dialog-Element"
slug: Web/HTML/Reference/Elements/dialog
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{HTMLSidebar}}

Das **`<dialog>`**-Element [HTML](/de/docs/Web/HTML) stellt ein modales oder nicht-modales Dialogfeld oder eine andere interaktive Komponente dar, wie z. B. eine verwerfbare Warnung, einen Inspektor oder ein Unterfenster.

Das HTML-Element `<dialog>` wird verwendet, um sowohl modale als auch nicht-modale Dialogfelder zu erstellen. Modale Dialogfelder unterbrechen die Interaktion mit dem Rest der Seite, während nicht-modale Dialogfelder Interaktionen zulassen.

JavaScript sollte verwendet werden, um das `<dialog>`-Element anzuzeigen. Verwenden Sie die Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), um ein modales Dialogfeld anzuzeigen, und die Methode [`.show()`](/de/docs/Web/API/HTMLDialogElement/show), um ein nicht-modales Dialogfeld anzuzeigen. Das Dialogfeld kann mit der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) geschlossen werden oder mithilfe der [`dialog`](/de/docs/Web/HTML/Reference/Elements/form#method) Methode beim Absenden eines `<form>`, das innerhalb des `<dialog>`-Elements verschachtelt ist. Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf dem `<dialog>`-Element verwendet werden. Siehe [Verwendungsnotizen](#verwendungsnotizen).

- `closedby`

  - : Gibt die Arten von Benutzeraktionen an, die zum Schließen des `<dialog>`-Elements verwendet werden können. Dieses Attribut unterscheidet drei Methoden, mit denen ein Dialog geschlossen werden könnte:

    - Eine _leicht abweisende Benutzeraktion_, bei der das `<dialog>` geschlossen wird, wenn der Benutzer außerhalb davon klickt oder tippt. Dies entspricht dem ["Light-Dismiss"-Verhalten von "Auto"-Zustand-Popovers](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss).
    - Eine _plattform-spezifische Benutzeraktion_, wie das Drücken der <kbd>Esc</kbd>-Taste auf Desktop-Plattformen oder eine "Zurück"- oder "Abschließen"-Geste auf mobilen Plattformen.
    - Ein entwickler-spezifischer Mechanismus wie ein {{htmlelement("button")}} mit einem [`click`](/de/docs/Web/API/Element/click_event) Handler, der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) oder ein {{htmlelement("form")}}-Versand aufruft.

    Mögliche Werte sind:

    - `any`
      - : Das Dialog kann mit einer der drei Methoden geschlossen werden.
    - `closerequest`
      - : Das Dialog kann mit plattform-spezifischer Benutzeraktion oder entwickler-spezifischem Mechanismus geschlossen werden.
    - `none`
      - : Das Dialog kann nur mit einem entwickler-spezifischen Mechanismus geschlossen werden.

    Wenn das `<dialog>`-Element keinen gültigen `closedby`-Wert hat, dann

    - falls es mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet wurde, verhält es sich so, als wäre der Wert `"closerequest"`
    - andernfalls verhält es sich so, als wäre der Wert `"none"`.

- `open`

  - : Zeigt an, dass das Dialogfeld aktiv und für Interaktionen verfügbar ist. Wenn das `open`-Attribut nicht gesetzt ist, ist das Dialogfeld für den Benutzer nicht sichtbar.
    Es wird empfohlen, die Methoden `.show()` oder `.showModal()` zu verwenden, um Dialoge anzuzeigen, anstatt das `open`-Attribut zu verwenden. Wenn ein `<dialog>` mit dem `open`-Attribut geöffnet wird, ist es nicht modal.

    > [!NOTE]
    > Während Sie zwischen offenen und geschlossenen Zuständen von nicht-modalen Dialogfeldern wechseln können, indem Sie das Vorhandensein des `open`-Attributes umschalten, wird von dieser Methode abgeraten. Siehe [`open`](/de/docs/Web/API/HTMLDialogElement/open) für mehr Informationen.

## Verwendungsnotizen

- HTML {{HTMLElement("form")}}-Elemente können verwendet werden, um ein Dialogfeld zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der Schaltfläche zum Absenden des Formulars [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input#formmethod) gesetzt ist. Wenn ein `<form>` innerhalb eines `<dialog>` mit der `dialog`-Methode übermittelt wird, wird das Dialogfeld geschlossen, die Zustände der Formularelemente werden gespeichert, aber nicht gesendet, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)-Eigenschaft wird auf den Wert des aktivierten Buttons gesetzt.
- Die CSS {{cssxref('::backdrop')}} Pseudo-Element kann verwendet werden, um den Hintergrund eines modalen Dialogs zu gestalten, der hinter dem `<dialog>`-Element angezeigt wird, wenn das Dialog über die [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode angezeigt wird. Dieses Pseudo-Element könnte beispielsweise verwendet werden, um den inerten Inhalt hinter dem modalen Dialog zu verwischen, zu verdunkeln oder anderweitig zu verbergen.
- Das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut sollte zu dem Element hinzugefügt werden, mit dem der Benutzer unmittelbar nach dem Öffnen eines modalen Dialogs interagieren soll. Wenn keine anderen Elemente eine unmittelbarere Interaktion involvieren, wird empfohlen, `autofocus` dem Schließen-Button innerhalb des Dialogs oder dem Dialog selbst hinzuzufügen, falls erwartet wird, dass der Benutzer es aktiviert, um es zu schließen.
- Fügen Sie dem `<dialog>`-Element nicht die `tabindex`-Eigenschaft hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Die Inhalte des Dialogs, einschließlich des im Dialog enthaltenen Schließen-Buttons, können Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Bei der Implementierung eines Dialogs ist es wichtig, den am besten geeigneten Ort für den Benutzerfokus zu berücksichtigen. Beim Verwenden von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), um ein `<dialog>` zu öffnen, wird der Fokus auf das erste verschachtelte fokussierbare Element gesetzt. Die explizite Angabe der ursprünglichen Fokusplatzierung durch das Attribut [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus) trägt dazu bei, sicherzustellen, dass der anfängliche Fokus auf das Element gesetzt wird, das als bester Startpunkt für jeden Dialog angesehen wird. Wenn Sie Zweifel haben, da es möglicherweise nicht immer bekannt ist, wo der anfängliche Fokus innerhalb eines Dialogs gesetzt werden könnte, besonders in Fällen, in denen der Inhalt eines Dialogs beim Aufruf dynamisch gerendert wird, kann das `<dialog>`-Element selbst den besten anfänglichen Fokus darstellen.

Stellen Sie sicher, dass es einen Mechanismus gibt, der Benutzern das Schließen des Dialogs ermöglicht. Der robusteste Weg, um sicherzustellen, dass alle Benutzer den Dialog schließen können, besteht darin, einen expliziten Schaltfläche dafür einzuschließen, wie eine Bestätigungs-, Storno- oder Schließen-Schaltfläche.

Standardmäßig kann ein durch die `showModal()`-Methode aufgerufenes Dialog durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Ein nicht-modales Dialog wird standardmäßig nicht über die <kbd>Esc</kbd>-Taste geschlossen, und je nachdem, was das nicht-modale Dialog repräsentiert, ist dieses Verhalten möglicherweise nicht erwünscht. Tastaturnutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; Stellen Sie sicher, dass dieses Verhalten implementiert und beibehalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte das Drücken der <kbd>Esc</kbd>-Taste nur den zuletzt angezeigten Dialog schließen. Beim Verwenden von `<dialog>` wird dieses Verhalten vom Browser bereitgestellt.

Während Dialoge durch andere Elemente erstellt werden können, liefert das native `<dialog>`-Element Benutzerfreundlichkeits- und Zugänglichkeitsmerkmale, die repliziert werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck verwenden. Wenn Sie eine benutzerdefinierte Dialog-Implementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhaltensweisen unterstützt und ordnungsgemäße Kennzeichnungsempfehlungen befolgt werden.

Das `<dialog>`-Element wird von Browsern ähnlich wie benutzerdefinierte Dialoge, die das ARIA [role="dialog"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)-Attribut verwenden, offengelegt. `<dialog>`-Elemente, die durch die `showModal()`-Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), während `<dialog>`-Elemente, die durch die `show()`-Methode oder durch das Setzen des `open`-Attributes oder durch Ändern des Standard-`display` eines `<dialog>` angezeigt werden, als `[aria-modal="false"]` offengelegt werden. Beim Implementieren von modalen Dialogen sollte alles außer dem `<dialog>` und dessen Inhalt durch das [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attribut inaktiv gemacht werden. Beim Verwenden `<dialog>` zusammen mit der `HTMLDialogElement.showModal()`-Methode, wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### HTML-only Dialog

Dieses Beispiel zeigt die Erstellung eines nicht-modalen Dialogs ausschließlich durch HTML. Aufgrund des booleschen `open`-Attributes im `<dialog>`-Element erscheint das Dialog geöffnet, wenn die Seite geladen wird. Das Dialog kann durch Klicken auf den "OK"-Button geschlossen werden, da das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist. In diesem Fall wird kein JavaScript benötigt, um das Formular zu schließen.

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

Dieses Dialog ist anfangs geöffnet wegen der Anwesenheit des `open`-Attributes. Dialoge, die über das `open`-Attribut angezeigt werden, sind nicht-modal. Nach dem Klicken auf "OK" wird das Dialog verworfen und der Ergebnisbereich bleibt leer. Wenn das Dialog geschlossen wird, gibt es keine Methode, es erneut zu öffnen. Aus diesem Grund wird empfohlen, nicht-modale Dialoge mithilfe der [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode anzuzeigen. Es ist möglich, die Anzeige des Dialogs durch Hinzufügen oder Entfernen des booleschen `open`-Attributes umzuschalten, aber das wird nicht empfohlen.

### Erstellen eines modalen Dialogs

Dieses Beispiel zeigt ein modales Dialog mit einem [Gradienten](/de/docs/Web/CSS/gradient) Hintergrund. Die Methode `.showModal()` öffnet das modale Dialog, wenn der Button "Show the dialog" aktiviert wird. Das Dialog kann durch Drücken der <kbd>Esc</kbd>-Taste oder über die `close()`-Methode geschlossen werden, wenn der Button "Close" innerhalb des Dialogs aktiviert wird.

Wenn ein Dialog geöffnet wird, gibt der Browser standardmäßig den Fokus auf das erste fokussierbare Element innerhalb des Dialogs. In diesem Beispiel wird das Attribut [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus) auf den "Close"-Button angewendet, wodurch es den Fokus erhält, wenn das Dialog geöffnet wird, da dies das Element ist, mit dem der Benutzer sofort nach dem Öffnen des Dialogs interagieren wird.

#### HTML

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a groovy backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir können den Hintergrund des Dialogs mit dem {{cssxref('::backdrop')}}-Pseudo-Element gestalten.

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

Das Dialog wird modal mit der Methode `.showModal()` geöffnet und mit den Methoden `.close()` oder `.requestClose()` geschlossen.

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

Wenn das modale Dialog angezeigt wird, erscheint es über allen anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des modalen Dialogs ist inaktiv und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass, wenn das Dialog geöffnet ist, mit Ausnahme des Dialogs selbst, eine Interaktion mit dem Dokument nicht möglich ist; der "Show the dialog"-Button wird durch den fast undurchsichtigen Hintergrund des Dialogs weitgehend verdeckt und ist inaktiv.

### Umgang mit dem Rückgabewert des Dialogs

Dieses Beispiel demonstriert den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie man ein modales Dialog durch ein Formular schließt. Standardmäßig ist der `returnValue` der leere String oder der Wert des Buttons, der das Formular innerhalb des `<dialog>`-Elements einsendet, falls vorhanden.

Dieses Beispiel öffnet ein modales Dialog, wenn der "Show the dialog"-Button aktiviert wird. Der Dialog enthält ein Formular mit einem {{HTMLElement("select")}}- und zwei {{HTMLElement("button")}}-Elementen, die standardmäßig `type="submit"` sind. Ein Event Listener aktualisiert den Wert des "Confirm"-Buttons, wenn die Auswahloption geändert wird. Wenn der "Confirm"-Button aktiviert wird, um den Dialog zu schließen, ist der aktuelle Wert des Buttons der Rückgabewert. Wenn der Dialog durch Drücken des "Cancel"-Buttons geschlossen wird, ist der `returnValue` `cancel`.

Wenn der Dialog geschlossen wird, wird der Rückgabewert unter dem Button "Show the dialog" angezeigt. Wenn der Dialog durch Drücken der <kbd>Esc</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert, und das `close`-Ereignis tritt nicht auf, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

- Indem das Formular innerhalb des Dialogformulars mit der `dialog`-Methode übermittelt wird (wie im Beispiel [HTML-only](#html-only_dialog)).
- Durch Drücken der <kbd>Esc</kbd>-Taste.
- Durch Aufrufen der Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) (wie im Beispiel [modal](#erstellen_eines_modalen_dialogs)).
  In diesem Beispiel schließt der "Cancel"-Button den Dialog über die `dialog`-Formularmethode und der "Confirm"-Button schließt den Dialog über die Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close).

Der "Cancel"-Button beinhaltet das [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input/submit#formmethod)-Attribut, das die Standard-{{HTTPMethod("GET")}}-Methode des {{HTMLElement("form")}} überschreibt. Wenn die Methode eines Formulars [`dialog`](#verwendungsnotizen) ist, wird der Zustand des Formulars gespeichert, aber nicht übermittelt, und der Dialog wird geschlossen.

Ohne eine `action` verursacht das Übermitteln des Formulars über die Standard-{{HTTPMethod("GET")}}-Methode ein Neuladen der Seite. Wir verwenden JavaScript, um die Übermittlung zu verhindern und das Dialog mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) zu schließen.

Es ist wichtig, innerhalb jedes `dialog`-Elements einen Schließungsmechanismus bereitzustellen. Die <kbd>Esc</kbd>-Taste schließt standardmäßig keine nicht-modalen Dialoge, noch kann man davon ausgehen, dass Benutzer überhaupt Zugriff auf eine physische Tastatur haben (z. B. jemand mit einem Touchscreen-Gerät ohne Tastaturzugriff).

### Schließen eines Dialogs mit einem erforderlichen Formulareingabefeld

Wenn ein Formular innerhalb eines Dialogs ein erforderliches Eingabefeld hat, lässt der Benutzeragent Sie den Dialog nur dann schließen, wenn Sie einen Wert für das erforderliche Eingabefeld angeben. Um ein solches Dialog zu schließen, verwenden Sie entweder das Attribut [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate) auf dem Schließen-Button oder rufen Sie die `close()`-Methode auf das Dialog-Objekt auf, wenn der Schließen-Button angeklickt wird.

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

Aus der Ausgabe wird ersichtlich, dass es unmöglich ist, das Dialog über den _Normal close_ Button zu schließen. Aber das Dialog kann geschlossen werden, wenn wir die Formularvalidierung über das `formnovalidate`-Attribut auf dem _Cancel_ Button umgehen. Programmgesteuert schließt `dialog.close()` auch ein solches Dialog.

### Vergleich verschiedener `closedby`-Verhaltensweisen

Dieses Beispiel zeigt den Unterschied im Verhalten zwischen verschiedenen Werten des [`closedby`](#closedby)-Attributes.

#### HTML

Wir bieten drei {{htmlelement("button")}}-Elemente und drei `<dialog>`-Elemente an. Jedes Button wird so programmiert, dass es ein anderes Dialog öffnet, das das Verhalten eines der drei Werte des `closedby`-Attributes demonstriert — `none`, `closerequest`, und `any`. Beachten Sie, dass jedes `<dialog>`-Element ein `<button>`-Element enthält, mit dem es geschlossen wird.

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

Hier ordnen wir verschiedene Variablen zu, um die Hauptsteuerungs-`<button>`-Elemente, die `<dialog>`-Elemente und die "Close" `<button>`-Elemente innerhalb der Dialoge zu referenzieren. Zuerst weisen wir jedem Steuerungsbutton mithilfe von [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) einen [`click`](/de/docs/Web/API/Element/click_event)-Event Listener zu, dessen Handler-Funktion das zugehörige `<dialog>`-Element über [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) öffnet. Dann durchlaufen wir die "Close" `<button>`-Referenzen und weisen jedem einen `click`-Event Handler zu, der sein `<dialog>`-Element über [`close()`](/de/docs/Web/API/HTMLDialogElement/close) schließt.

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

Versuchen Sie, auf jeden Button zu klicken, um ein Dialog zu öffnen. Das erste kann nur durch Klicken auf die Schließen-Schaltfläche geschlossen werden. Das zweite kann auch über eine gerätespezifische Benutzeraktion wie das Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Das dritte verfügt über ein vollständiges ["Light-Dismiss"-Verhalten](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss), sodass es auch durch Klicken oder Tippen außerhalb des Dialogs geschlossen werden kann.

### Dialoge animieren

`<dialog>`s sind auf [`display: none;`](/de/docs/Web/CSS/display) gesetzt, wenn sie versteckt sind, und `display: block;`, wenn sie gezeigt werden, und werden aus der / zur {{Glossary("top_layer", "obersten Ebene")}} und dem [Zugänglichkeitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt / hinzugefügt. Daher muss das {{cssxref("display")}}-Attribut für `<dialog>`-Elemente animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Konkret wechselt der Browser zwischen `none` und einem anderen `display`-Wert, sodass der animierte Inhalt für die gesamte Animationsdauer angezeigt wird.

Ein Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der `display`-Wert bei `0%` der Animationsdauer zu `block`, sodass er während der gesamten Animation sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wechselt der `display`-Wert bei `100%` der Animationsdauer zu `none`, sodass er während der gesamten Animation sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Transitions](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) verfügbar; ein äquivalenter Schritt ist nicht erforderlich.

#### Transitioning-Dialogelemente

Beim Animieren von `<dialog>`-Elementen mit CSS-Transitions sind die folgenden Merkmale erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) At-Regel
  - : Bietet einen Satz von Startwerten für Eigenschaften, die auf das `<dialog>` gesetzt sind, von denen Sie jedes Mal, wenn es geöffnet wird, übergehen möchten. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Transitions nur auf, wenn sich eine Eigenschaft von einem Wert zu einem anderen auf einem sichtbaren Element ändert; sie werden nicht für die ersten Stilaktualisierungen von Elementen oder wenn der `display`-Typ von `none` auf einen anderen Typ ändert, ausgelöst.
- [`display`](/de/docs/Web/CSS/display) Eigenschaft
  - : Fügen Sie `display` zur Liste der Transitions hinzu, damit das `<dialog>` für die Dauer der Transition als `display: block` (oder ein anderer sichtbarer `display`-Wert, der auf den geöffneten Zustand des Dialogs gesetzt ist) angezeigt wird, wodurch die anderen Transitions sichtbar werden.
- [`overlay`](/de/docs/Web/CSS/overlay) Eigenschaft
  - : Fügen Sie `overlay` in die Liste der Transitions ein, um sicherzustellen, dass die Entfernung des `<dialog>` aus der obersten Ebene bis zur Vollbenendung der Transition aufgeschoben wird, wodurch die Transition sichtbar wird.
- {{cssxref("transition-behavior")}} Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Transitions (oder auf das {{cssxref("transition")}}-Kurzschriftformat), um diskrete Transitions auf diesen zwei Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Hier ist ein kurzes Beispiel, das zeigt, wie das aussehen könnte.

##### HTML

Das HTML enthält ein `<dialog>`-Element und eine Schaltfläche, um das Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element eine weitere Schaltfläche, um es zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS fügen wir einen `@starting-style`-Block hinzu, der die Transitions-Startstile für die Eigenschaften `opacity` und `transform` definiert, endzustände für die Transitions werden im `dialog:open`-Zustand gesetzt, und Standardstile auf dem Standardzustand `dialog`, zu dem zurückgekehrt wird, sobald das `<dialog>` erschienen ist. Beachten Sie, wie die `transition`-Liste des `<dialog>` nicht nur diese Eigenschaften enthält, sondern auch die `display`- und `overlay`-Eigenschaften, die jeweils `allow-discrete` auf ihnen gesetzt haben.

Wir setzen auch einen Startstilwert für die {{cssxref("background-color")}}-Eigenschaft des [`::backdrop`](/de/docs/Web/CSS/::backdrop), der hinter dem `<dialog>` erscheint, wenn es geöffnet wird, um eine schöne Verdunkelungsanimation zu erzeugen. Der `dialog:open::backdrop`-Selektor wählt nur die Hintergründe von `<dialog>`-Elementen aus, wenn das Dialog geöffnet ist.

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
> In Browsern, die die {{cssxref(":open")}}-Pseudoklasse nicht unterstützen, können Sie den Attributselektor `dialog[open]` verwenden, um das `<dialog>`-Element zu gestalten, wenn es im geöffneten Zustand ist.

##### JavaScript

Das JavaScript fügt den Schaltflächen Ereignishandler hinzu, die sie dazu bringen, das `<dialog>` anzuzeigen und zu schließen, wenn sie geklickt werden:

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

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Transitioning dialog elements", "100%", "200") }}

> [!NOTE]
> Da `<dialog>`-Elemente jedes Mal von `display: none` auf `display: block` wechseln, wenn sie angezeigt werden, wechselt das `<dialog>` jedes Mal von seinen `@starting-style`-Stilen zu seinen `dialog:open`-Stilen, wenn der Einstiegstransition erfolgt. Wenn das `<dialog>` geschlossen wird, wechselt es von seinem `dialog:open`-Zustand zum Standardzustand des `dialog`.
>
> Es ist möglich, dass die Stiltransitions beim Ein- und Austritt in solchen Fällen unterschiedlich sind. Sehen Sie sich unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used)-Beispiel an, um einen Beweis dafür zu erhalten.

#### keyframe-Animationen für Dialoge

Beim Animieren eines `<dialog>`-Elements mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu beachten im Vergleich zu Transitions:

- Sie geben kein `@starting-style` an.
- Sie schließen den `display`-Wert in einem Keyframe ein; dies wird der `display`-Wert für die gesamte Animation, oder bis ein anderer nicht-`none` display-Wert vorliegt.
- Sie müssen keine diskreten Animationen explizit aktivieren; es gibt kein Äquivalent zu `allow-discrete` in Keyframes.
- Sie müssen das `overlay` auch nicht in Keyframes setzen; die `display`-Animation behandelt die Animation des `<dialog>` von sichtbar zu versteckt.

Schauen wir uns ein Beispiel an, damit Sie sehen können, wie das aussieht.

##### HTML

Zuerst enthält das HTML ein `<dialog>`-Element sowie eine Schaltfläche, um das Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element eine weitere Schaltfläche, um es zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Keyframes, um zwischen den geschlossenen und angezeigten Zuständen des `<dialog>` zu animieren, zusätzlich zur Einblendanimation für den Hintergrund des `<dialog>`. Die `<dialog>`-Animationen umfassen die Animation `display`, um sicherzustellen, dass die sichtbaren Animationseffekte für die gesamte Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, die Ausblendanimation des Hintergrunds zu animieren — der Hintergrund wird sofort aus dem DOM entfernt, wenn das `<dialog>` geschlossen wird, sodass es nichts gibt, das animiert werden könnte.

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

Abschließend fügt das JavaScript den Schaltflächen Ereignishandler hinzu, um das `<dialog>` anzuzeigen und zu schließen:

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

Der Code wird wie folgt angezeigt:

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
        Abschnitts-Wurzel
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
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">fließenden Inhalt</a>
        akzeptiert
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
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) Ereignis der `HTMLDialogElement`-Schnittstelle
- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) Ereignis der `HTMLDialogElement`-Schnittstelle
- [`open`](/de/docs/Web/API/HTMLDialogElement/open) Eigenschaft der `HTMLDialogElement`-Schnittstelle
- [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) globales Attribut für HTML-Elemente
- {{CSSXref("::backdrop")}} CSS-Pseudo-Element
- [Web-Formulare](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
