---
title: "<dialog>: Das Dialogelement"
slug: Web/HTML/Reference/Elements/dialog
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

Das **`<dialog>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert ein modales oder nicht-modales Dialogfeld oder eine andere interaktive Komponente, wie eine entlassbare Warnung, einen Inspektor oder ein Unterfenster.

Das HTML-Element `<dialog>` wird verwendet, um sowohl modale als auch nicht-modale Dialogfelder zu erstellen. Modale Dialogfelder unterbrechen die Interaktion mit dem Rest der Seite, während nicht-modale Dialogfelder die Interaktion mit dem Rest der Seite ermöglichen.

JavaScript sollte verwendet werden, um das `<dialog>`-Element anzuzeigen. Verwenden Sie die Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), um ein modales Dialogfeld anzuzeigen, und die Methode [`.show()`](/de/docs/Web/API/HTMLDialogElement/show), um ein nicht-modales Dialogfeld anzuzeigen. Das Dialogfeld kann mit der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) oder mit der [`dialog`](/de/docs/Web/HTML/Reference/Elements/form#method) Methode beim Absenden eines `<form>`, das im `<dialog>`-Element eingebettet ist, geschlossen werden. Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf dem `<dialog>`-Element verwendet werden. Siehe [Nutzungshinweise](#nutzungshinweise).

- `closedby`
  - : Gibt die Arten von Benutzeraktionen an, die verwendet werden können, um das `<dialog>`-Element zu schließen. Dieses Attribut unterscheidet drei Methoden, mit denen ein Dialog geschlossen werden kann:
    - Eine _leichte Abweisung des Benutzers_, bei der das `<dialog>` geschlossen wird, wenn der Benutzer außerhalb des Dialogs klickt oder tippt. Dies entspricht dem ["leicht abweisbaren" Verhalten von "Auto"-Zustand-Popovers](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss).
    - Eine _plattform-spezifische Benutzeraktion_, wie das Drücken der <kbd>Esc</kbd>-Taste auf Desktop-Plattformen oder eine "Zurück"- oder "Abweisen"-Geste auf mobilen Plattformen.
    - Ein vom Entwickler spezifizierter Mechanismus, wie ein {{htmlelement("button")}} mit einem [`click`](/de/docs/Web/API/Element/click_event)-Handler, der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) aufruft oder ein {{htmlelement("form")}}-Formular, das gesendet wird.

    Mögliche Werte sind:
    - `any`
      - : Das Dialogfeld kann mit einer der drei Methoden geschlossen werden.
    - `closerequest`
      - : Das Dialogfeld kann mit einer plattform-spezifischen Benutzeraktion oder einem vom Entwickler angegebenen Mechanismus geschlossen werden.
    - `none`
      - : Das Dialogfeld kann nur mit einem vom Entwickler spezifizierten Mechanismus geschlossen werden.

    Wenn das `<dialog>`-Element keinen gültigen `closedby`-Wert hat, dann:
    - verhält es sich, als wäre der Wert `"closerequest"`, wenn es mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet wurde.
    - verhält es sich ansonsten so, als ob der Wert `"none"` wäre.

- `open`
  - : Gibt an, dass das Dialogfeld aktiv ist und für die Interaktion verfügbar ist. Wenn das `open`-Attribut nicht gesetzt ist, ist das Dialogfeld für den Benutzer nicht sichtbar.
    Es wird empfohlen, die Methoden `.show()` oder `.showModal()` zu verwenden, um Dialoge darzustellen, anstatt das `open`-Attribut. Wenn ein `<dialog>` durch das `open`-Attribut geöffnet wird, ist es nicht modal.

    > [!NOTE]
    > Während Sie den offenen und geschlossenen Zustand nicht-modaler Dialogfelder durch Umschalten der Anwesenheit des `open`-Attributs wechseln können, ist dieser Ansatz nicht zu empfehlen. Siehe [`open`](/de/docs/Web/API/HTMLDialogElement/open) für weitere Informationen.

## Nutzungshinweise

- HTML {{HTMLElement("form")}}-Elemente können verwendet werden, um ein Dialogfeld zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der Knopf, der das Formular einreicht, [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` über die `dialog`-Methode eingereicht wird, wird das Dialogfeld geschlossen, die Zustände der Formularsteuerelemente werden gespeichert, aber nicht gesendet, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)-Eigenschaft wird auf den Wert des Knopfes gesetzt, der aktiviert wurde.
- Das CSS {{cssxref('::backdrop')}}-Pseudoelement kann verwendet werden, um den Hintergrund eines modalen Dialogs, der angezeigt wird, zu gestalten, indem die Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwendet wird. Zum Beispiel könnte dieses Pseudoelement verwendet werden, um den Inhalt hinter dem modalen Dialog zu verwischen, abzudunkeln oder anderweitig unkenntlich zu machen.
- Das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut sollte dem Element hinzugefügt werden, mit dem der Benutzer sofort nach dem Öffnen eines modalen Dialogs interagieren soll. Wenn kein anderes Element eine unmittelbarere Interaktion erfordert, wird empfohlen, `autofocus` zum Schaltknopf innerhalb des Dialogs hinzuzufügen oder zum Dialog selbst, wenn der Benutzer erwartet wird, darauf zu klicken/aktivieren, um ihn zu schließen.
- Fügen Sie das `tabindex`-Eigenschaft nicht dem `<dialog>`-Element hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Der Inhalt des Dialogs, einschließlich des Schließen-Knopfes im Dialog, kann den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Bei der Implementierung eines Dialogs ist es wichtig, den am besten geeigneten Ort für die Fokussierung des Benutzers zu berücksichtigen. Beim Verwenden von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), um ein `<dialog>` zu öffnen, wird der Fokus auf das erste verschachtelte fokussierbare Element gesetzt. Die explizite Angabe des anfänglichen Fokussierungsorts durch die Verwendung des [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attributs hilft sicherzustellen, dass der anfängliche Fokus auf das Element gesetzt wird, das als der beste anfängliche Fokussierungsplatz für einen bestimmten Dialog bestimmt wurde. Wenn Sie sich unsicher sind, da es nicht immer bekannt sein könnte, wo der anfängliche Fokus innerhalb eines Dialogs gesetzt werden könnte, besonders bei Fällen, wo der Inhalt des Dialogs dynamisch gerendert wird, wenn er aufgerufen wird, kann das `<dialog>`-Element selbst den besten anfänglichen Fokussierungsplatz bieten.

Stellen Sie sicher, dass ein Mechanismus bereitgestellt wird, der es Benutzern ermöglicht, den Dialog zu schließen. Der robusteste Weg, um sicherzustellen, dass alle Benutzer den Dialog schließen können, ist das Einfügen eines expliziten Knopfs dafür, wie ein Bestätigungs-, Abbruch- oder Schließen-Knopf.

Standardmäßig kann ein Dialog, der durch die `showModal()`-Methode aufgerufen wird, durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Ein nicht-modaler Dialog wird nicht standardmäßig durch die <kbd>Esc</kbd>-Taste geschlossen, und je nach dem, was der nicht-modale Dialog darstellt, ist es möglicherweise nicht gewünscht, dass er dieses Verhalten hat. Tastaturnutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und beibehalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte das Drücken der <kbd>Esc</kbd>-Taste nur den zuletzt angezeigten Dialog schließen. Bei der Verwendung von `<dialog>` wird dieses Verhalten vom Browser bereitgestellt.

Obwohl Dialoge mit anderen Elementen erstellt werden können, bietet das native `<dialog>`-Element Benutzbarkeit und Barrierefreiheit, die nachgeahmt werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck verwenden. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhaltensweisen unterstützt und die richtigen Beschriftungsempfehlungen befolgt werden.

Das `<dialog>`-Element wird von Browsern auf ähnliche Weise wie benutzerdefinierte Dialoge, die das ARIA [role="dialog"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)-Attribut verwenden, exponiert. `<dialog>`-Elemente, die durch die `showModal()`-Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), während `<dialog>`-Elemente, die durch die `show()`-Methode oder durch das `open`-Attribut angezeigt oder durch das Ändern der Standardanzeige eines `<dialog>` angezeigt werden, als `[aria-modal="false"]` exponiert werden. Bei der Implementierung modaler Dialoge sollte alles außer dem `<dialog>` und dessen Inhalt inaktiv gemacht werden, indem das [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attribut verwendet wird. Bei der Verwendung von `<dialog>` zusammen mit der `HTMLDialogElement.showModal()`-Methode wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### Nur HTML-Dialog

Dieses Beispiel demonstriert die Erstellung eines nicht-modalen Dialogs nur mit HTML. Aufgrund des booleschen `open`-Attributs im `<dialog>`-Element erscheint der Dialog geöffnet, wenn die Seite geladen wird. Der Dialog kann durch Klicken auf den "OK"-Knopf geschlossen werden, da das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist. In diesem Fall wird kein JavaScript benötigt, um das Formular zu schließen.

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

Dieser Dialog ist initial geöffnet, da das `open`-Attribut vorhanden ist. Dialoge, die mit dem `open`-Attribut angezeigt werden, sind nicht modal. Nachdem Sie auf "OK" geklickt haben, wird der Dialog geschlossen, und der Ergebnisrahmen bleibt leer. Wenn der Dialog geschlossen wird, gibt es keine bereitgestellte Methode, um ihn erneut zu öffnen. Aus diesem Grund wird die bevorzugte Methode, um nicht-modale Dialoge anzuzeigen, durch die Verwendung der [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show) Methode erreicht. Es ist möglich, die Anzeige des Dialogs zu kippen, indem das boolesche `open`-Attribut hinzugefügt oder entfernt wird, aber das ist nicht die empfohlene Praxis.

### Erstellung eines modalen Dialogs

Dieses Beispiel demonstriert einen modalen Dialog mit einem [Verlauf](/de/docs/Web/CSS/Reference/Values/gradient) im Hintergrund. Die `.showModal()`-Methode öffnet das modale Dialogfeld, wenn der "Zeige den Dialog"-Knopf aktiviert wird. Der Dialog kann durch Drücken der <kbd>Esc</kbd>-Taste oder durch die `close()`-Methode geschlossen werden, wenn der "Schließen"-Knopf innerhalb des Dialogs aktiviert wird.

Wenn ein Dialog geöffnet wird, gibt der Browser standardmäßig dem ersten Element, das im Dialog in den Fokus genommen werden kann, den Fokus. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut zum "Schließen"-Knopf hinzugefügt, damit dieser beim Öffnen des Dialogs den Fokus erhält, da dies das Element ist, mit dem Benutzer unmittelbar nach dem Öffnen des Dialogs voraussichtlich interagieren werden.

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

Der Dialog wird modal durch die `.showModal()`-Methode geöffnet und mit den `.close()` oder `.requestClose()`-Methoden geschlossen.

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

Wenn der modale Dialog angezeigt wird, erscheint er über allen anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des modalen Dialogs ist inaktiv, und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass bei offenem Dialog, mit Ausnahme des Dialogs selbst, keine Interaktion mit dem Dokument möglich ist; der "Zeigen Sie den Dialog"-Knopf wird größtenteils von dem fast undurchsichtigen Hintergrund des Dialogs verdeckt und ist inaktiv.

### Umgang mit dem Rückgabewert des Dialogs

Dieses Beispiel demonstriert den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie ein modales Dialogfeld über ein Formular geschlossen wird. Standardmäßig ist der `returnValue` entweder der leere String oder der Wert des Knopfes, der das Formular innerhalb des `<dialog>`-Elements sendet, falls vorhanden.

Dieses Beispiel öffnet ein modales Dialogfeld, wenn der "Zeigen Sie den Dialog"-Knopf aktiviert wird. Der Dialog enthält ein Formular mit einem {{HTMLElement("select")}} und zwei {{HTMLElement("button")}}-Elementen, die standardmäßig auf `type="submit"` gesetzt sind. Ein Ereignis-Listener aktualisiert den Wert des "Bestätigen"-Knopfes, wenn sich die Auswahl ändert. Wenn der "Bestätigen"-Knopf aktiviert wird, um den Dialog zu schließen, ist der aktuelle Wert des Knopfes der Rückgabewert. Wenn der Dialog durch Drücken des "Abbrechen"-Knopfes geschlossen wird, ist der `returnValue` `cancel`.

Wenn der Dialog geschlossen wird, wird der Rückgabewert unter dem "Zeigen Sie den Dialog"-Knopf angezeigt. Wenn der Dialog durch Drücken der <kbd>Esc</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert, und das `close`-Ereignis tritt nicht ein, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

- Indem das Formular innerhalb des Dialogformulars mit der `dialog`-Methode gesendet wird (wie im [Nur-HTML-Beispiel](#nur_html-dialog) gesehen).
- Durch Drücken der <kbd>Esc</kbd>-Taste.
- Durch Aufrufen der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode (wie im [modalen Beispiel](#erstellung_eines_modalen_dialogs) gesehen).
  In diesem Beispiel schließt der "Abbrechen"-Knopf den Dialog über die `dialog`-Formularmethode, und der "Bestätigen"-Knopf schließt den Dialog über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode.

Der "Abbrechen"-Knopf enthält das [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input/submit#formmethod) Attribut, das die Standardmethode {{HTTPMethod("GET")}} des {{HTMLElement("form")}} überschreibt. Wenn die Methode eines Formulars [`dialog`](#nutzungshinweise) ist, wird der Zustand des Formulars gespeichert, aber nicht gesendet, und der Dialog wird geschlossen.

Ohne ein `action`-Attribut wird das Formular bei der Übermittlung über die Standardmethode {{HTTPMethod("GET")}} neu geladen. Wir verwenden JavaScript, um die Übermittlung zu verhindern und den Dialog mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) zu schließen.

Es ist wichtig, einen Schließmechanismus in jedem `dialog`-Element bereitzustellen. Die <kbd>Esc</kbd>-Taste schließt standardmäßig keine nicht-modalen Dialoge, und man kann nicht davon ausgehen, dass ein Benutzer überhaupt Zugang zu einer physischen Tastatur hat (z. B. jemand mit einem Touchscreen-Gerät ohne Zugang zu einer Tastatur).

### Ein Dialog mit einer erforderlichen Formulareingabe schließen

Wenn ein Formular innerhalb eines Dialogs eine erforderliche Eingabe hat, lässt der User-Agent den Dialog erst schließen, wenn ein Wert für die erforderliche Eingabe bereitgestellt wird. Um einen solchen Dialog zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate) Attribut auf dem Schließknopf oder rufen das `close()`-Methode auf das Dialog-Objekt auf, wenn der Schließknopf geklickt wird.

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

Aus der Ausgabe sehen wir, dass es unmöglich ist, den Dialog mit dem _Normal schließen_-Knopf zu schließen. Aber der Dialog kann geschlossen werden, wenn wir die Formularvalidierung über das `formnovalidate` Attribut auf dem _Abbrechen_-Knopf umgehen. Programmatisch wird `dialog.close()` auch einen solchen Dialog schließen.

### Vergleich von verschiedenen closedby-Verhaltensweisen

Dieses Beispiel zeigt die Unterschiede im Verhalten zwischen verschiedenen Werten des [`closedby`](#closedby) Attributs.

#### HTML

Wir stellen drei {{htmlelement("button")}}-Elemente und drei `<dialog>`-Elemente bereit. Jeder Knopf wird programmiert, um einen anderen Dialog zu öffnen, der das Verhalten eines der drei Werte des `closedby` Attributs demonstriert — `none`, `closerequest` und `any`. Beachten Sie, dass jedes `<dialog>`-Element ein `<button>`-Element enthält, das verwendet wird, um es zu schließen.

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

Hier weisen wir verschiedene Variablen zu, um die Hauptsteuer-`<button>`-Elemente, die `<dialog>`-Elemente und die "Schließen"-`<button>`-Elemente innerhalb der Dialoge zu referenzieren. Zuerst weisen wir jedem Steuerknopf mit [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) einen [`click`](/de/docs/Web/API/Element/click_event) Ereignis-Listener zu, dessen Ereignishandlerfunktion das zugehörige `<dialog>`-Element über [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) öffnet. Dann durchlaufen wir die "Schließen"-`<button>`-Referenzen und weisen jedem eine `click` Ereignis-Handler-Funktion zu, die sein `<dialog>`-Element über [`close()`](/de/docs/Web/API/HTMLDialogElement/close) schließt.

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

Versuchen Sie, auf jeden Knopf zu klicken, um einen Dialog zu öffnen. Der erste kann nur durch Klicken auf seinen "Schließen"-Knopf geschlossen werden. Der zweite kann auch über eine gerätespezifische Benutzeraktion wie das Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Der dritte hat das volle ["leicht abweisbare" Verhalten](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss), sodass er auch durch Klicken oder Tippen außerhalb des Dialogs geschlossen werden kann.

### Dialoge animieren

`<dialog>`-Elemente sind mit [`display: none;`](/de/docs/Web/CSS/Reference/Properties/display) versteckt und mit `display: block;` angezeigt, wenn sie gezeigt werden, sowie vom / zum {{Glossary("top_layer", "Top-Layer")}} und dem [Barrierefreiheitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt / hinzugefügt. Daher muss für `<dialog>`-Elemente das {{cssxref("display")}}-Eigenschaft animierbar sein, damit sie animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/Reference/Properties/display#browser_compatibility) animieren `display` mit einer Variation des [diskrete Animationstyp](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Genauer gesagt wechselt der Browser zwischen `none` und einem anderen `display`-Wert, sodass der animierte Inhalt für die gesamte Dauer der Animation angezeigt wird.

Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert bei `0%` der Animationsdauer zu `block`, damit er die ganze Zeit sichtbar ist.
- Bei der Animation von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none`, wechselt der Wert bei `100%` der Animationsdauer zu `none`, damit er die ganze Zeit sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) eingestellt werden, um das oben genannte Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig verfügbar, wenn mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) animiert wird; ein entsprechender Schritt ist nicht erforderlich.

#### Übergang von Dialogelementen

Beim Animieren von `<dialog>`-Elementen mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- {{cssxref("@starting-style")}}-At-Regel
  - : Bietet einen Satz von Startwerten für Eigenschaften, die auf dem `<dialog>` gesetzt sind, von denen man jedes Mal ausgehen möchte, wenn es geöffnet wird. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn sich eine Eigenschaft von einem Wert zu einem anderen in einem sichtbaren Element ändert; sie werden nicht ausgelöst anfangs oder wenn die `display`-Art von `none` zu einer anderen Art wechselt.
- {{cssxref("display")}}-Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das `<dialog>` während der Dauer des Übergangs bei `display: block` bleibt (oder ein anderer sichtbarer `display`-Wert, der im offenen Zustand des Dialogs gesetzt ist), um sicherzustellen, dass die anderen Übergänge sichtbar sind.
- {{cssxref("overlay")}}-Eigenschaft
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass die Entfernung des `<dialog>` vom Top-Layer bis zum Abschluss des Übergangs verzögert wird, was wiederum sicherstellt, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Stellen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf die {{cssxref("transition")}}-Kurzform), um diskrete Übergänge auf diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Hier ist ein schnelles Beispiel, um zu zeigen, wie das aussehen könnte.

##### HTML

Das HTML enthält ein `<dialog>`-Element und zusätzlich einen Button, um den Dialog anzuzeigen. Darüber hinaus enthält das `<dialog>`-Element einen weiteren Knopf, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS enthalten wir einen `@starting-style`-Block, der die Anfangsstile für die `opacity`- und `transform`-Eigenschaften definiert, Übergangsendstile auf dem `dialog:open`-Zustand und Standardstile auf dem Standard-`dialog`-Zustand, zu dem der Übergang zurückkehrt, sobald das `<dialog>` angezeigt wurde. Beachten Sie, dass die `transition`-Liste des `<dialog>` nicht nur diese Eigenschaften, sondern auch die `display`- und `overlay`-Eigenschaften enthält, von denen jede mit `allow-discrete` versehen ist.

Wir setzen auch einen Anfangsstilwert für die {{cssxref("background-color")}}-Eigenschaft auf dem {{cssxref("::backdrop")}}, das erscheint, wenn das `<dialog>` öffnet, um eine schöne Abdunklungsanimation zu bieten. Der `dialog:open::backdrop`-Selektor wählt nur die Rückseiten von `<dialog>`-Elementen aus, wenn der Dialog geöffnet ist.

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
> In Browsern, die die {{cssxref(":open")}}-Pseudoklasse nicht unterstützen, können Sie den Attributselektor `dialog[open]` verwenden, um das `<dialog>`-Element zu stylen, wenn es sich im offenen Zustand befindet.

##### JavaScript

Das JavaScript fügt Ereignis-Handler zu den Anzeig- und Schließknöpfen hinzu, sodass sie das `<dialog>` anzeigen und schließen, wenn sie geklickt werden:

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
> Da `<dialog>`-Elemente jedes Mal, wenn sie angezeigt werden, von `display: none` zu `display: block` wechseln, wechselt das `<dialog>` bei jedem Eintrittsübergang von seinen `@starting-style`-Stilen zu seinen `dialog:open`-Stilen. Wenn das `<dialog>` geschlossen wird, wechselt es von seinem `dialog:open`-Zustand zu dem Standard-`dialog`-Zustand.
>
> Es ist möglich, dass der Stilübergang beim Ein- und Austritt unterschiedlich ist. Siehe unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel für einen Beweis davon.

#### dialog Schlüsselbild-Animationen

Beim Animieren eines `<dialog>` mit CSS-Schlüsselbild-Animationen gibt es einige Unterschiede im Vergleich zu Übergängen:

- Sie geben kein `@starting-style` an.
- Sie inkludieren den `display`-Wert in einem Schlüsselbild; dies wird der `display`-Wert während der gesamten Animation oder bis ein anderer nicht-`none`-Anzeigewert erreicht wird.
- Sie müssen keine diskreten Animationen explizit aktivieren; es gibt kein Äquivalent zu `allow-discrete` in Schlüsselbildern.
- Sie müssen `overlay` in Schlüsselbildern ebenfalls nicht setzen; die `display`-Animation behandelt die Animation des `<dialog>` von sichtbar zu verborgen.

Sehen wir uns ein Beispiel an, um zu sehen, wie das aussieht.

##### HTML

Zuerst enthält das HTML ein `<dialog>`-Element sowie einen Button, um den Dialog anzuzeigen. Außerdem enthält das `<dialog>`-Element einen weiteren Knopf, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Schlüsselbilder, um zwischen den geschlossenen und angezeigten Zuständen des `<dialog>` zu animieren, sowie die Einblendanimation für das `<dialog>`-Hintergrundbild. Die `<dialog>`-Animationen beinhalten die Animation von `display`, um sicherzustellen, dass die tatsächlichen sichtbaren Animationseffekte während der gesamten Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, das Hintergrundbild-Ausblenden zu animieren — das Hintergrundbild wird unmittelbar aus dem DOM entfernt, wenn das `<dialog>` geschlossen wird, weshalb nichts zum Animieren übrig bleibt.

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

Schließlich fügt das JavaScript Ereignis-Handler zu den Knöpfen hinzu, um das `<dialog>` zeigen und schließen zu ermöglichen:

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
        sectioning root
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>
        akzeptiert
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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

- [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Schnittstelle
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) Ereignis der `HTMLDialogElement` Schnittstelle
- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) Ereignis der `HTMLDialogElement` Schnittstelle
- [`open`](/de/docs/Web/API/HTMLDialogElement/open) Eigenschaft der `HTMLDialogElement` Schnittstelle
- [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) globales Attribut für HTML-Elemente
- {{CSSXref("::backdrop")}} CSS-Pseudoelement
- [Web-Formulare](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
