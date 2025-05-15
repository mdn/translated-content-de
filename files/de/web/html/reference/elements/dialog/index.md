---
title: "<dialog>: Das Dialog-Element"
slug: Web/HTML/Reference/Elements/dialog
l10n:
  sourceCommit: a61be259435257328a25c462cb0f42bc91981a6f
---

{{HTMLSidebar}}

Das **`<dialog>`**-Element von [HTML](/de/docs/Web/HTML) repräsentiert ein modales oder nicht-modales Dialogfeld oder ein anderes interaktives Element wie z.B. eine ablehnbare Warnung, einen Inspektor oder ein Unterfenster.

Das HTML-Element `<dialog>` wird verwendet, um sowohl modale als auch nicht-modale Dialogboxen zu erstellen. Modale Dialogboxen unterbrechen die Interaktion mit dem Rest der Seite, während nicht-modale Dialogboxen die Interaktion mit dem Rest der Seite zulassen.

JavaScript sollte verwendet werden, um das `<dialog>`-Element anzuzeigen. Verwenden Sie die Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), um ein modales Dialogfeld anzuzeigen und die Methode [`.show()`](/de/docs/Web/API/HTMLDialogElement/show), um ein nicht-modales Dialogfeld anzuzeigen. Das Dialogfeld kann mit der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) oder mit der Methode [`dialog`](/de/docs/Web/HTML/Reference/Elements/form#method) geschlossen werden, wenn ein `<form>` gesendet wird, das innerhalb des `<dialog>`-Elements verschachtelt ist. Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf dem `<dialog>`-Element verwendet werden. Siehe [Verwendungsnotizen](#verwendungsnotizen).

- `closedby` {{experimental_inline}}

  - : Gibt die Arten von Benutzeraktionen an, die zum Schließen des `<dialog>`-Elements verwendet werden können. Dieses Attribut unterscheidet zwischen drei Methoden, durch die ein Dialog geschlossen werden kann:

    - Eine _leichte Abweisung durch Benutzeraktion_, bei der das `<dialog>` geschlossen wird, wenn der Benutzer außerhalb davon klickt oder tippt. Dies entspricht dem ["light dismiss"-Verhalten von "auto"-Zustand Popovers](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss).
    - Eine _plattformabhängige Benutzeraktion_, wie das Drücken der <kbd>Esc</kbd>-Taste auf Desktop-Plattformen oder eine "Zurück"- oder "Abbrechen"-Geste auf mobilen Plattformen.
    - Ein vom Entwickler bestimmter Mechanismus wie ein {{htmlelement("button")}} mit einem [`click`](/de/docs/Web/API/Element/click_event)-Handler, der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) aufruft, oder eine {{htmlelement("form")}}-Übertragung.

    Mögliche Werte sind:

    - `any`
      - : Der Dialog kann mit einer der drei Methoden abgewiesen werden.
    - `closerequest`
      - : Der Dialog kann mit einer plattformabhängigen Benutzeraktion oder einem vom Entwickler bestimmten Mechanismus abgewiesen werden.
    - `none`
      - : Der Dialog kann nur mit einem vom Entwickler bestimmten Mechanismus abgewiesen werden.

    Wenn das `<dialog>`-Element keinen gültigen `closedby`-Wert hat, dann:

    - wenn es mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet wurde, verhält es sich, als ob der Wert `"closerequest"` wäre.
    - Andernfalls verhält es sich, als ob der Wert `"none"` wäre.

- `open`

  - : Gibt an, dass das Dialogfeld aktiv und für die Interaktion verfügbar ist. Wenn das `open`-Attribut nicht gesetzt ist, wird das Dialogfeld für den Benutzer nicht sichtbar sein.
    Es wird empfohlen, die Methode `.show()` oder `.showModal()` zu verwenden, um Dialoge darzustellen, anstatt das `open`-Attribut. Wenn ein `<dialog>` mit dem `open`-Attribut geöffnet wird, ist es nicht modal.

    > [!NOTE]
    > Auch wenn Sie zwischen dem offenen und dem geschlossenen Zustand nicht-modaler Dialogboxen wechseln können, indem Sie die Präsenz des `open`-Attributs umschalten, wird dieser Ansatz nicht empfohlen. Siehe [`open`](/de/docs/Web/API/HTMLDialogElement/open) für weitere Informationen.

## Verwendungsnotizen

- HTML-{{HTMLElement("form")}}-Elemente können verwendet werden, um ein Dialogfeld zu schließen, wenn sie das Attribut `method="dialog"` haben oder der Button, der verwendet wird, um das Formular zu senden, [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` über die `dialog`-Methode gesendet wird, schließt sich das Dialogfeld, die Zustände der Formularelemente werden gespeichert, aber nicht gesendet, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)-Eigenschaft wird auf den Wert des aktivierten Buttons gesetzt.
- Das CSS-{{cssxref('::backdrop')}}-Pseudoelement kann verwendet werden, um den Hintergrund eines modalen Dialogs zu gestalten, der hinter dem `<dialog>`-Element angezeigt wird, wenn das Dialogfeld mit der Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) dargestellt wird. Zum Beispiel könnte dieses Pseudoelement verwendet werden, um den träge Hintergrund hinter dem modalen Dialog zu verwischen, abzudunkeln oder anderweitig zu verbergen.
- Das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut sollte zu dem Element hinzugefügt werden, mit dem der Benutzer unmittelbar nach dem Öffnen eines modalen Dialogs interagieren soll. Wenn kein anderes Element eine sofortigere Interaktion erfordert, wird empfohlen, `autofocus` dem Schließen-Button im Dialog hinzuzufügen, oder dem Dialog selbst, wenn der Benutzer ihn anklicken/aktivieren soll, um ihn zu schließen.
- Sie sollten das `tabindex`-Attribut nicht zum `<dialog>`-Element hinzufügen, da es nicht interaktiv ist und keinen Fokus erhält. Der Inhalt des Dialogs, einschließlich des Schließen-Buttons im Dialog, kann jedoch fokussiert und interaktiv sein.

## Barrierefreiheit

Bei der Implementierung eines Dialogs ist es wichtig, den am besten geeigneten Ort festzulegen, an dem der Benutzerfokus gesetzt werden soll. Wenn Sie [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwenden, um ein `<dialog>` zu öffnen, wird der Fokus auf das erste geschachtelte fokussierbare Element gesetzt. Durch explizites Setzen des initialen Fokusplatzes mit dem [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut wird sichergestellt, dass der initiale Fokus auf das Element gesetzt wird, das als der beste initiale Fokusplatz für einen bestimmten Dialog angesehen wird. Wenn Sie unsicher sind, da es oft unbekannt ist, wo der initiale Fokus innerhalb eines Dialogs gesetzt werden könnte, insbesondere in Fällen, in denen der Inhalt eines Dialogs beim Aufruf dynamisch gerendert wird, bietet das `<dialog>`-Element selbst möglicherweise den besten initialen Fokusplatz.

Stellen Sie sicher, dass ein Mechanismus bereitgestellt wird, der es Benutzern ermöglicht, den Dialog zu schließen. Der robusteste Weg, um sicherzustellen, dass alle Benutzer den Dialog schließen können, ist die Aufnahme eines expliziten Buttons zur Bestätigung, Abbruch oder Schließung.

Standardmäßig kann ein durch die `showModal()`-Methode aufgerufener Dialog durch Drücken der <kbd>Esc</kbd>-Taste abgebrochen werden. Ein nicht-modaler Dialog wird standardmäßig nicht durch die <kbd>Esc</kbd>-Taste abgebrochen, und je nach Repräsentation des nicht-modalen Dialogs könnte dieses Verhalten nicht erwünscht sein. Tastaturnutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und beibehalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte das Drücken der <kbd>Esc</kbd>-Taste nur den zuletzt angezeigten Dialog schließen. Bei der Verwendung von `<dialog>` wird dieses Verhalten durch den Browser bereitgestellt.

Während Dialoge mit anderen Elementen erstellt werden können, bietet das native `<dialog>`-Element sowohl Benutzerfreundlichkeits- als auch Barrierefreiheitsfunktionen, die repliziert werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck verwenden möchten. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardfunktionen unterstützt werden und die richtigen Beschriftungsempfehlungen eingehalten werden.

Das `<dialog>`-Element wird von Browsern in ähnlicher Weise wie benutzerdefinierte Dialoge, die das ARIA-Attribut [role="dialog"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) verwenden, bereitgestellt. `<dialog>`-Elemente, die durch die `showModal()`-Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), während `<dialog>`-Elemente, die durch die `show()`-Methode oder durch das `open`-Attribut oder durch das Ändern der Standardeinstellung `display` eines `<dialog>` gezeigt werden, als `[aria-modal="false"]` bereitgestellt werden. Bei der Implementierung von modalen Dialogen sollte alles andere als das `<dialog>` und sein Inhalt durch das [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attribut träge dargestellt werden. Bei der Verwendung von `<dialog>` zusammen mit der `HTMLDialogElement.showModal()`-Methode wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### HTML-Dialog ohne JavaScript

Dieses Beispiel zeigt die Erstellung eines nicht-modalen Dialogs nur mit HTML. Aufgrund des boolean `open`-Attributs im `<dialog>`-Element erscheint der Dialog offen, wenn die Seite geladen wird. Der Dialog kann geschlossen werden, indem man auf den "OK"-Button klickt, da das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist. In diesem Fall wird kein JavaScript benötigt, um das Formular zu schließen.

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

Dieser Dialog ist initial geöffnet aufgrund der Präsenz des `open`-Attributs. Dialoge, die mit dem `open`-Attribut angezeigt werden, sind nicht modal. Nach dem Klicken auf "OK" wird der Dialog verworfen, und der Ergebnisrahmen bleibt leer. Wenn der Dialog verworfen wird, gibt es keine Methode, um ihn erneut zu öffnen. Aus diesem Grund ist die bevorzugte Methode, um nicht-modale Dialoge anzuzeigen, die Verwendung der Methode [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show). Es ist möglich, die Anzeige des Dialogs durch Hinzufügen oder Entfernen des boolean `open`-Attributs umzuschalten, aber das wird nicht empfohlen.

### Erstellung eines modalen Dialogs

Dieses Beispiel zeigt einen modalen Dialog mit einem [Gradienten](/de/docs/Web/CSS/gradient) im Hintergrund. Die `.showModal()`-Methode öffnet den modalen Dialog, wenn der "Show the dialog"-Button aktiviert wird. Der Dialog kann durch Drücken der <kbd>Esc</kbd>-Taste oder über die `close()`-Methode geschlossen werden, wenn der "Close"-Button im Dialog aktiviert wird.

Wenn ein Dialog geöffnet wird, legt der Browser standardmäßig den Fokus auf das erste fokussierbare Element im Dialog. In diesem Beispiel ist das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut auf den "Close"-Button angewendet, sodass dieser den Fokus erhält, wenn der Dialog geöffnet wird, da dies das Element ist, mit dem der Benutzer unmittelbar nach dem Öffnen des Dialogs interagieren soll.

#### HTML

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a groovy backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir können den Hintergrund des Dialogs durch das {{cssxref('::backdrop')}}-Pseudoelement gestalten.

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

Der Dialog wird modal durch die `.showModal()`-Methode geöffnet und durch die `.close()`- oder `.requestClose()`-Methoden geschlossen.

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

Wenn der modale Dialog angezeigt wird, erscheint er über allen anderen Dialogen, die vorhanden sein könnten. Alles außerhalb des modalen Dialogs ist träge, und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass bei einem geöffneten Dialog, mit Ausnahme des Dialogs selbst, keine Interaktion mit dem Dokument möglich ist; der "Show the dialog"-Button ist größtenteils durch den fast undurchsichtigen Hintergrund des Dialogs verdeckt und ist träge.

### Behandlung des Rückgabewerts vom Dialog

Dieses Beispiel demonstriert den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie ein modaler Dialog mit einem Formular geschlossen werden kann. Standardmäßig ist der `returnValue` der leere String oder der Wert des Buttons, der das Formular innerhalb des `<dialog>`-Elements übermittelt, falls vorhanden.

Dieses Beispiel öffnet einen modalen Dialog, wenn der "Show the dialog"-Button aktiviert wird. Der Dialog enthält ein Formular mit einem {{HTMLElement("select")}}- und zwei {{HTMLElement("button")}}-Elementen, die standardmäßig `type="submit"` sind. Ein Ereignis-Listener aktualisiert den Wert des "Confirm"-Buttons, wenn die Auswahloption geändert wird. Wenn der "Confirm"-Button aktiviert wird, um den Dialog zu schließen, ist der aktuelle Wert des Buttons der Rückgabewert. Wenn der Dialog durch Drücken des "Cancel"-Buttons geschlossen wird, ist der `returnValue` `cancel`.

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

Die obigen Beispiele zeigen die folgenden drei Methoden zum Schließen modaler Dialoge:

- Durch das Übermitteln des Formulars innerhalb des Dialogs mit der `dialog`-Methode (wie im [HTML-only-Beispiel](#html-dialog_ohne_javascript) gezeigt).
- Durch Drücken der <kbd>Esc</kbd>-Taste.
- Durch Aufrufen der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) Methode (wie im [modalen Beispiel](#erstellung_eines_modalen_dialogs) gezeigt).
  In diesem Beispiel schließt der "Cancel"-Button den Dialog über die `dialog`-Formularmethode und der "Confirm"-Button schließt den Dialog über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) Methode.

Der "Cancel"-Button enthält das [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input/submit#formmethod)-Attribut, das die Standard-{{HTTPMethod("GET")}}-Methode des {{HTMLElement("form")}}-Elements überschreibt. Wenn die Methode eines Formulars [`dialog`](#verwendungsnotizen) ist, werden der Zustand des Formulars gespeichert, aber nicht gesendet, und der Dialog wird geschlossen.

Ohne eine `action` bewirkt das Übermitteln des Formulars über die Standard-{{HTTPMethod("GET")}}-Methode ein Neuladen der Seite. Wir verwenden JavaScript, um die Übermittlung zu verhindern und den Dialog mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) jeweils zu schließen.

Es ist wichtig, innerhalb jedes `dialog`-Elements einen Schließmechanismus zu bieten. Die <kbd>Esc</kbd>-Taste schließt nicht standardmäßig nicht-modale Dialoge und man kann nicht davon ausgehen, dass ein Benutzer sogar Zugang zu einer physischen Tastatur hat (z.B. jemand, der ein Touchscreen-Gerät ohne Zugang zu einer Tastatur verwendet).

### Schließen eines Dialogs mit einer erforderlichen Formular-Eingabe

Wenn ein Formular in einem Dialog eine erforderliche Eingabe enthält, lässt der Benutzeragent den Dialog nur schließen, wenn Sie einen Wert für die erforderliche Eingabe angeben. Um einen solchen Dialog zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate)-Attribut am Schließen-Button oder rufen Sie die `close()`-Methode am Dialog-Objekt auf, wenn der Schließen-Button geklickt wird.

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

Aus dem Ergebnis sehen wir, dass es unmöglich ist, den Dialog mit dem _Normaler Schließen_-Button zu schließen. Aber der Dialog kann geschlossen werden, wenn wir die Formularvalidierung mithilfe des `formnovalidate`-Attributs am _Cancel_-Button umgehen. Programmgesteuert wird auch `dialog.close()` diesen Dialog schließen.

### Vergleich verschiedener closedby-Verhaltensweisen

Dieses Beispiel demonstriert den Unterschied im Verhalten zwischen verschiedenen Werten des [`closedby`](#closedby)-Attributs.

#### HTML

Wir stellen drei {{htmlelement("button")}}-Elemente und drei `<dialog>`-Elemente zur Verfügung. Jeder Button wird programmiert, um einen anderen Dialog zu öffnen, der das Verhalten eines der drei Werte des `closedby`-Attributs demonstriert — `none`, `closerequest` und `any`. Beachten Sie, dass jedes `<dialog>`-Element ein `<button>`-Element enthält, das zum Schließen verwendet wird.

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

Hier weisen wir verschiedene Variablen zu, um die Hauptsteuerungs-`<button>`-Elemente, die `<dialog>`-Elemente und die "Close"-`<button>`-Elemente innerhalb der Dialoge zu referenzieren. Zuerst weisen wir jedem Steuerungsbutton einen [`click`](/de/docs/Web/API/Element/click_event)-Event-Listener mithilfe von [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) zu, dessen Event-Handler-Funktion das zugeordnete `<dialog>`-Element über [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) öffnet. Wir durchlaufen dann die "Close"-`<button>`-Referenzen und weisen jedem eine `click`-Event-Handler-Funktion zu, die dessen `<dialog>`-Element über [`close()`](/de/docs/Web/API/HTMLDialogElement/close) schließt.

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

Versuchen Sie, jeden Button zu klicken, um einen Dialog zu öffnen. Der erste kann nur durch Klicken auf seinen "Close"-Button geschlossen werden. Der zweite kann auch durch eine gerätespezifische Benutzeraktion wie das Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Der dritte hat volles ["light-dismiss"-Verhalten](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss), sodass er auch durch Klicken oder Tippen außerhalb des Dialogs geschlossen werden kann.

### Animation von Dialogen

`<dialog>`s werden auf [`display: none;`](/de/docs/Web/CSS/display) gesetzt, wenn sie verborgen sind, und `display: block;` wenn sie gezeigt werden, und sie werden auch aus dem {{Glossary("top_layer", "top layer")}} und dem [accessibility tree](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt und hinzugefügt. Daher muss für `<dialog>`-Elemente das {{cssxref("display")}}-Attribut animierbar sein, damit sie animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Genauer gesagt, schaltet der Browser zwischen `none` und einem anderen Wert von `display`, sodass der animierte Inhalt während der gesamten Animationsdauer sichtbar ist.

Zum Beispiel:

- Wenn `display` von `none` auf `block` (oder einen anderen sichtbaren `display`-Wert) animiert wird, springt der Wert bei `0%` der Animationsdauer auf `block`, damit er die ganze Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) auf `none` animiert wird, springt der Wert bei `100%` der Animationsdauer auf `none`, damit er die ganze Zeit sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt sein, um das oben beschriebene Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig aktiviert beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations); ein entsprechender Schritt ist nicht erforderlich.

#### Übergangseffekte für Dialogelemente

Beim Animieren von `<dialog>`s mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style)-Regel
  - : Bietet eine Gruppe von Startwerten für Eigenschaften, die am `<dialog>` gesetzt sind, von denen Sie bei jedem Öffnen einen Übergang erwarten. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn sich der Wert einer Eigenschaft auf einem sichtbaren Element ändert; sie werden nicht durch die ersten Stilupdates von Elementen ausgelöst oder wenn der `display`-Typ von `none` auf einen anderen Typ Änderungen.
- [`display`](/de/docs/Web/CSS/display) Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, sodass das `<dialog>` für die Dauer des Übergangs mit `display: block` oder einem anderen sichtbaren `display`-Wert im geöffneten Zustand bleibt, was sicherstellt, dass die anderen Übergänge sichtbar sind.
- [`overlay`](/de/docs/Web/CSS/overlay) Eigenschaft
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass das Entfernen des `<dialog>` vom obersten Layer bis zum Abschluss des Übergangs verzögert wird, was wiederum gewährleistet, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}} Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf die {{cssxref("transition")}}-Kurzschreibweise), um diskrete Übergänge auf diesen beiden Eigenschaften, die standardmäßig nicht animierbar sind, zu ermöglichen.

Hier ist ein einfaches Beispiel, um zu zeigen, wie das aussehen könnte.

##### HTML

Der HTML-Code enthält ein `<dialog>`-Element sowie einen Button, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS fügen wir einen `@starting-style`-Block hinzu, der die Übergangsstartstile für die Eigenschaften `opacity` und `transform` definiert, Übergangsendenstile im `dialog:open`-Zustand und Standardstile im Standard-`dialog`-Zustand, zu denen zurückgekehrt wird, wenn das `<dialog>` angezeigt wurde. Beachten Sie, wie die Übergangsliste des `<dialog>` nicht nur diese Eigenschaften, sondern auch die `display`- und `overlay`-Eigenschaften enthält, die beide mit `allow-discrete` versehen sind.

Wir setzen auch einen Startstilwert für die {{cssxref("background-color")}}-Eigenschaft am [`::backdrop`](/de/docs/Web/CSS/::backdrop), das hinter dem `<dialog>` erscheint, wenn es geöffnet wird, um eine schöne Dunklungsanimation zu bieten. Der `dialog:open::backdrop`-Selektor wählt nur die Hintergründe von `<dialog>`-Elementen, wenn der Dialog geöffnet ist.

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
> In Browsern, die die {{cssxref(":open")}}-Pseudoklasse nicht unterstützen, können Sie den Attributselektor `dialog[open]` verwenden, um das `<dialog>`-Element im offenen Zustand zu stylen.

##### JavaScript

Das JavaScript fügt den Show- und Close-Buttons Event-Handler hinzu, die bewirken, dass das `<dialog>` angezeigt bzw. geschlossen wird, wenn sie geklickt werden:

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
> Da `<dialog>`s jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechseln sie bei jeder Eintrittsübergangs von ihren `@starting-style`-Stilen zu ihren `dialog:open`-Stilen. Wenn das `<dialog>` geschlossen wird, wechselt es von seinem `dialog:open`-Zustand zurück in den Standard-`dialog`-Zustand.
>
> Es ist möglich, dass der Stilübergang bei Eintritt und Austritt in solchen Fällen unterschiedlich ist. Sehen Sie sich unser [Beispiel zur Demonstration der Verwendung von Startstilen](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Beweis hierfür an.

#### Dialog-Schlüsselbildanimations

Wenn ein `<dialog>` mit CSS-Schlüsselbildanimationen animiert wird, gibt es einige Unterschiede zu beachten im Vergleich zu Übergängen:

- Sie bieten keinen `@starting-style`.
- Sie schließen den `display`-Wert in ein Schlüsselbild ein; dies wird der `display`-Wert für die gesamte Animationsdauer sein oder bis ein anderer nicht-`none`-Display-Wert erreicht wird.
- Sie müssen keine diskreten Animationen explizit aktivieren; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Schlüsselbildern.
- Sie müssen `overlay` nicht innerhalb von Schlüsselbildern setzen; die `display`-Animation handhabt die Animation des `<dialog>` von sichtbar zu nicht sichtbar.

Schauen wir uns ein Beispiel an, damit Sie sehen können, wie das aussieht.

##### HTML

Zuerst enthält der HTML-Code ein `<dialog>`-Element sowie einen Button, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Schlüsselbilder, um zwischen den geschlossenen und angezeigten Zuständen des `<dialog>` zu animieren, sowie die Fade-in-Animation für den Hintergrund des `<dialog>`. Die `<dialog>`-Animationen schließen die Animation von `display` ein, um sicherzustellen, dass die tatsächlichen sichtbaren Animationseffekte während der gesamten Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, das Ausblenden des Hintergrunds zu animieren — der Hintergrund wird sofort aus dem DOM entfernt, wenn das `<dialog>` geschlossen wird, sodass es nichts zu animieren gibt.

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

Schließlich fügt das JavaScript den Buttons Ereignishandler hinzu, um das Anzeigen und Schließen des `<dialog>` zu ermöglichen:

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

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalt</a>,
        Abschnitts-Wurzel
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalt</a>
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
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) Ereignis der `HTMLDialogElement` Schnittstelle
- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) Ereignis der `HTMLDialogElement` Schnittstelle
- [`open`](/de/docs/Web/API/HTMLDialogElement/open) Eigenschaft der `HTMLDialogElement` Schnittstelle
- [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) globales Attribut für HTML-Elemente
- {{CSSXref("::backdrop")}} CSS-Pseudoelement
- [Web Forms](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
