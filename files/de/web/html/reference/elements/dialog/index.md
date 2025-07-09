---
title: "<dialog>: Das Dialog-Element"
slug: Web/HTML/Reference/Elements/dialog
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<dialog>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert ein modales oder nicht-modales Dialogfenster oder eine andere interaktive Komponente, wie z.B. eine entlassbare Warnung, einen Inspektor oder ein Unterfenster.

Das HTML `<dialog>`-Element wird verwendet, um sowohl modale als auch nicht-modale Dialogfenster zu erstellen. Modale Dialogfenster unterbrechen die Interaktion mit dem Rest der Seite, während nicht-modale Dialogfenster eine Interaktion mit dem Rest der Seite erlauben.

JavaScript sollte verwendet werden, um das `<dialog>`-Element anzuzeigen. Verwenden Sie die [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode, um ein modales Dialogfeld anzuzeigen und die [`.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode, um ein nicht-modales Dialogfeld anzuzeigen. Das Dialogfeld kann mit der [`.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode oder mit der [`dialog`](/de/docs/Web/HTML/Reference/Elements/form#method)-Methode geschlossen werden, wenn Sie ein `<form>` einreichen, das im `<dialog>`-Element eingebettet ist. Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf dem `<dialog>`-Element verwendet werden. Siehe [Hinweise zur Verwendung](#verwendungshinweise).

- `closedby`
  - : Gibt die Arten von Benutzeraktionen an, mit denen das `<dialog>`-Element geschlossen werden kann. Dieses Attribut unterscheidet drei Methoden, mit denen ein Dialog geschlossen werden könnte:
    - Eine _leichte Entlassungs-Benutzeraktion_, bei der das `<dialog>` geschlossen wird, wenn der Benutzer außerhalb klickt oder tippt. Dies entspricht dem ["light dismiss"-Verhalten von "Auto"-Zustands-Popovers](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss).
    - Eine _plattformspezifische Benutzeraktion_, wie das Drücken der <kbd>Esc</kbd>-Taste auf Desktop-Plattformen oder eine "zurück" oder "ablehnen" Geste auf mobilen Plattformen.
    - Ein vom Entwickler vorgegebener Mechanismus, wie ein {{htmlelement("button")}} mit einem [`click`](/de/docs/Web/API/Element/click_event)-Handler, der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) oder eine {{htmlelement("form")}}-Einreichung aufruft.

    Mögliche Werte sind:
    - `any`
      - : Der Dialog kann mit einer der drei Methoden geschlossen werden.
    - `closerequest`
      - : Der Dialog kann mit einer plattformspezifischen Benutzeraktion oder einem vom Entwickler spezifizierten Mechanismus geschlossen werden.
    - `none`
      - : Der Dialog kann nur mit einem vom Entwickler spezifizierten Mechanismus geschlossen werden.

    Wenn das `<dialog>`-Element keinen gültigen `closedby`-Wert angibt, dann
    - verhält es sich, als ob der Wert `"closerequest"` wäre, wenn es mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet wurde.
    - andernfalls verhält es sich, als wäre der Wert `"none"`.

- `open`
  - : Gibt an, dass das Dialogfeld aktiv ist und zur Interaktion zur Verfügung steht. Wenn das `open`-Attribut nicht gesetzt ist, wird das Dialogfeld für den Benutzer nicht sichtbar sein.
    Es wird empfohlen, die `.show()` oder `.showModal()`-Methode zu verwenden, um Dialoge darzustellen, anstatt das `open`-Attribut zu verwenden. Wenn ein `<dialog>` mit dem `open`-Attribut geöffnet wird, ist es nicht modal.

    > [!NOTE]
    > Während Sie zwischen den offenen und geschlossenen Zuständen von nicht-modalen Dialogfeldern wechseln können, indem Sie das Vorhandensein des `open`-Attributs umschalten, wird dieser Ansatz nicht empfohlen. Siehe [`open`](/de/docs/Web/API/HTMLDialogElement/open) für weitere Informationen.

## Verwendungshinweise

- HTML {{HTMLElement("form")}}-Elemente können verwendet werden, um ein Dialogfeld zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der Button, der das Formular absendet, [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` über die `dialog`-Methode eingereicht wird, schließt sich das Dialogfeld, die Zustände der Formularelemente werden gespeichert, aber nicht gesendet und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) Eigenschaft wird auf den Wert des Buttons gesetzt, der aktiviert wurde.
- Das CSS {{cssxref('::backdrop')}}-Pseudo-Element kann verwendet werden, um den Hintergrund eines modalen Dialogs zu stylen, der hinter dem `<dialog>`-Element angezeigt wird, wenn das Dialogfeld mit der [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode angezeigt wird. Zum Beispiel könnte dieses Pseudo-Element verwendet werden, um den inerten Inhalt hinter dem modalen Dialog zu verwischen, abzudunkeln oder anderweitig zu verschleiern.
- Das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut sollte zu dem Element hinzugefügt werden, mit dem der Benutzer sofort nach dem Öffnen eines modalen Dialogs interagieren soll. Wenn kein anderes Element eine unmittelbarere Interaktion erfordert, ist es ratsam, `autofocus` auf den Schließen-Button im Dialog oder auf den Dialog selbst zu setzen, wenn erwartet wird, dass der Benutzer auf ihn klickt/aktiviert, um ihn zu schließen.
- Fügen Sie das `tabindex`-Attribut dem `<dialog>`-Element nicht hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Der Inhalt des Dialogs, einschließlich des im Dialog enthaltenen Schließen-Buttons, kann den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Beim Implementieren eines Dialogs ist es wichtig, den geeignetsten Ort für das Setzen des Benutzerfokus zu berücksichtigen. Wenn [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwendet wird, um ein `<dialog>` zu öffnen, wird der Fokus auf das erste verschachtelte fokussierbare Element gesetzt. Es wird empfohlen, den anfänglichen Fokus mit dem [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut ausdrücklich zu setzen, um sicherzustellen, dass der anfängliche Fokus auf dem Element gesetzt wird, das als bester anfänglicher Fokusplatz für einen bestimmten Dialog gilt. Wenn Unsicherheit besteht, da möglicherweise nicht immer bekannt ist, wo der anfängliche Fokus innerhalb eines Dialogs gesetzt werden könnte, insbesondere bei Instanzen, in denen der Inhalt eines Dialogs dynamisch beim Aufruf gerendert wird, könnte sich das `<dialog>`-Element selbst als der beste anfängliche Fokusplatz erweisen.

Stellen Sie sicher, dass eine Möglichkeit bereitgestellt wird, mit der Benutzer das Dialogfeld schließen können. Der robusteste Weg, sicherzustellen, dass alle Benutzer das Dialogfeld schließen können, besteht darin, eine explizite Schaltfläche dafür einzuschließen, wie eine Bestätigungs-, Abbruch- oder Schließen-Schaltfläche.

Standardmäßig kann ein Dialog, der durch die `showModal()`-Methode ausgelöst wird, durch Drücken der <kbd>Esc</kbd>-Taste abgebrochen werden. Ein nicht-modales Dialogfeld wird standardmäßig nicht über die <kbd>Esc</kbd>-Taste geschlossen, und je nachdem, was das nicht-modale Dialogfeld darstellt, ist dieses Verhalten möglicherweise nicht erwünscht. Tastaturnutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und beibehalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte das Drücken der <kbd>Esc</kbd>-Taste nur den zuletzt angezeigten Dialog schließen. Bei der Verwendung von `<dialog>` wird dieses Verhalten vom Browser bereitgestellt.

Während Dialoge auch mit anderen Elementen erstellt werden können, bietet das native `<dialog>`-Element Benutzerfreundlichkeit und Zugänglichkeitsfunktionen, die repliziert werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck verwenden. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhaltensweisen unterstützt und ordnungsgemäße Beschriftungsempfehlungen befolgt werden.

Das `<dialog>`-Element wird von Browsern ähnlich wie benutzerdefinierte Dialoge dargestellt, die das ARIA [role="dialog"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)-Attribut verwenden. `<dialog>`-Elemente, die durch die `showModal()`-Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), während `<dialog>`-Elemente, die durch die `show()`-Methode oder das `open`-Attribut oder durch Änderung der Standarddarstellung eines `<dialog>` angezeigt werden, als `[aria-modal="false"]` dargestellt werden. Beim Implementieren von modalen Dialogen sollte alles außer dem `<dialog>` und seinen Inhalten mithilfe des [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) Attributs als inaktiv dargestellt werden. Bei der Verwendung von `<dialog>` zusammen mit der `HTMLDialogElement.showModal()`-Methode wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### HTML-Dialog

Dieses Beispiel zeigt die Erstellung eines nicht-modalen Dialogs durch die ausschließliche Verwendung von HTML. Aufgrund des booleschen `open`-Attributs im `<dialog>`-Element wird das Dialogfeld geöffnet angezeigt, wenn die Seite geladen wird. Das Dialogfeld kann durch Klicken auf die "OK"-Schaltfläche geschlossen werden, da das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist. In diesem Fall wird kein JavaScript benötigt, um das Formular zu schließen.

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

Dieses Dialogfeld ist zunächst geöffnet, da das `open`-Attribut vorhanden ist. Dialogfelder, die mithilfe des `open`-Attributs angezeigt werden, sind nicht-modale Dialoge. Nach dem Klicken auf "OK" wird das Dialogfeld geschlossen, sodass der Ergebnisrahmen leer bleibt. Wenn das Dialogfeld geschlossen wird, gibt es keine Methode, um es wieder zu öffnen. Aus diesem Grund ist die bevorzugte Methode, um nicht-modale Dialoge anzuzeigen, die Verwendung der [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode. Es ist möglich, die Anzeige des Dialogs durch Hinzufügen oder Entfernen des booleschen `open`-Attributs umzuschalten, aber dies ist nicht die empfohlene Praxis.

### Erstellung eines modalen Dialogs

Dieses Beispiel zeigt einen modalen Dialog mit einem [Verlauf](/de/docs/Web/CSS/gradient)-Hintergrund. Die `.showModal()`-Methode öffnet den modalen Dialog, wenn die "Dialog anzeigen"-Schaltfläche aktiviert wird. Der Dialog kann durch Drücken der <kbd>Esc</kbd>-Taste oder über die `close()`-Methode geschlossen werden, wenn die "Schließen"-Schaltfläche innerhalb des Dialogs aktiviert wird.

Wenn ein Dialog geöffnet wird, setzt der Browser standardmäßig den Fokus auf das erste fokussierbare Element im Dialog. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut auf die "Schließen"-Schaltfläche angewendet und gibt dieser den Fokus, wenn der Dialog geöffnet wird, da dies das Element ist, von dem wir erwarten, dass der Benutzer damit unmittelbar nach dem Öffnen des Dialogs interagiert.

#### HTML

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a groovy backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir können den Hintergrund des Dialogs mithilfe des {{cssxref('::backdrop')}}-Pseudo-Elements stylen.

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

Wenn der modale Dialog angezeigt wird, erscheint er über allen anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des modalen Dialogs ist inaktiv und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass, wenn der Dialog geöffnet ist, mit Ausnahme des Dialogs selbst, eine Interaktion mit dem Dokument nicht möglich ist; die "Dialog anzeigen"-Schaltfläche ist größtenteils durch den nahezu undurchsichtigen Hintergrund des Dialogs verdeckt und ist inaktiv.

### Umgang mit dem Rückgabewert aus dem Dialog

Dieses Beispiel demonstriert den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie man einen modalen Dialog durch die Verwendung eines Formulars schließt. Standardmäßig ist der `returnValue` der leere String oder der Wert des Buttons, der das Formular innerhalb des `<dialog>`-Elements einreicht, falls vorhanden.

Dieses Beispiel öffnet einen modalen Dialog, wenn die "Dialog anzeigen"-Schaltfläche aktiviert wird. Der Dialog enthält ein Formular mit einem {{HTMLElement("select")}} und zwei {{HTMLElement("button")}}-Elementen, die standardmäßig auf `type="submit"` gesetzt sind. Ein Ereignis-Listener aktualisiert den Wert der "Bestätigen"-Schaltfläche, wenn sich die Auswahloption ändert. Wenn die "Bestätigen"-Schaltfläche aktiviert wird, um den Dialog zu schließen, ist der aktuelle Wert der Schaltfläche der Rückgabewert. Wenn der Dialog durch Drücken der "Abbrechen"-Schaltfläche geschlossen wird, ist der `returnValue` `cancel`.

Wenn der Dialog geschlossen wird, wird der Rückgabewert unter der "Dialog anzeigen"-Schaltfläche angezeigt. Wenn der Dialog durch Drücken der <kbd>Esc</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert und das `close`-Ereignis tritt nicht auf, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

- Durch Einreichung des Formulars innerhalb des Dialogformulars mit der `dialog`-Methode (wie im [HTML-only-Beispiel](#html-dialog) zu sehen).
- Durch Drücken der <kbd>Esc</kbd>-Taste.
- Durch Aufruf der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode (wie im [modalen Beispiel](#erstellung_eines_modalen_dialogs) zu sehen).
  In diesem Beispiel schließt die "Abbrechen"-Schaltfläche den Dialog über die `dialog`-Formularmethode und die "Bestätigen"-Schaltfläche schließt den Dialog über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode.

Die "Abbrechen"-Schaltfläche enthält das [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input/submit#formmethod)-Attribut, das die Standard-{{HTTPMethod("GET")}}-Methode des {{HTMLElement("form")}}-Elements überschreibt. Wenn die Methode eines Formulars [`dialog`](#verwendungshinweise) ist, wird der Zustand des Formulars gespeichert aber nicht übermittelt, und das Dialogfeld wird geschlossen.

Ohne eine `action` führt die Einreichung des Formulars über die Standard-{{HTTPMethod("GET")}}-Methode zu einem Seiteneinstellungs-Reload. Wir verwenden JavaScript, um die Übermittlung zu verhindern und den Dialog mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) jeweils zu schließen.

Es ist wichtig, in jedem `dialog`-Element einen Schließmechanismus bereitzustellen. Die <kbd>Esc</kbd>-Taste schließt nicht standardmäßig nicht-modale Dialoge, noch kann man davon ausgehen, dass ein Benutzer überhaupt Zugriff auf eine physische Tastatur hat (z.B. jemand, der ein Touchscreen-Gerät ohne Tastaturzugang verwendet).

### Schließen eines Dialogs mit einer erforderlichen Formulareingabe

Wenn ein Formular in einem Dialog eine erforderliche Eingabe hat, lässt der Benutzeragent Sie den Dialog nur schließen, wenn Sie einen Wert für die erforderliche Eingabe angeben. Um ein solches Dialogfeld zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate)-Attribut auf dem Schließ-Button oder rufen Sie die `close()`-Methode auf dem Dialogobjekt auf, wenn der Schließ-Button geklickt wird.

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

Aus der Ausgabe sehen wir, dass es unmöglich ist, den Dialog mit der _Normal schließen_-Schaltfläche zu schließen. Der Dialog kann jedoch geschlossen werden, wenn wir die Formularvalidierung mithilfe des `formnovalidate`-Attributs auf der _Abbrechen_-Schaltfläche umgehen. Programmatisch schließt `dialog.close()` auch ein solches Dialogfeld.

### Vergleich der verschiedenen closedby-Verhaltensweisen

Dieses Beispiel demonstriert den Unterschied im Verhalten zwischen verschiedenen Werten des [`closedby`](#closedby)-Attributs.

#### HTML

Wir geben drei {{htmlelement("button")}}-Elemente und drei `<dialog>`-Elemente an. Jede Schaltfläche wird programmiert, um einen anderen Dialog zu öffnen, der das Verhalten eines der drei Werte des `closedby`-Attributs — `none`, `closerequest` und `any` — demonstriert. Beachten Sie, dass jedes `<dialog>`-Element ein `<button>`-Element enthält, das zum Schließen verwendet wird.

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

Hier weisen wir verschiedene Variablen zu, um die Hauptsteuerungs-`<button>`-Elemente, die `<dialog>`-Elemente, und die "Schließen"-`<button>`-Elemente innerhalb der Dialoge zu referenzieren. Zuerst weisen wir jeder Steuerungsschaltfläche einen [`click`](/de/docs/Web/API/Element/click_event)-Ereignis-Listener unter Verwendung von [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) zu, dessen Event-Handler-Funktion das zugehörige `<dialog>`-Element über [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) öffnet. Dann schleifen wir durch die "Schließen"-`<button>`-Referenzen, wobei wir jeder eine `click`-Ereignis-Handler-Funktion zuweisen, die ihr `<dialog>`-Element über [`close()`](/de/docs/Web/API/HTMLDialogElement/close) schließt.

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

Versuchen Sie, auf jede Schaltfläche zu klicken, um einen Dialog zu öffnen. Der erste kann nur durch Klicken auf seinen "Schließen"-Button geschlossen werden. Der zweite kann auch über eine gerätespezifische Benutzeraktion wie das Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Der dritte hat ein volles ["light-dismiss" Verhalten](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss), sodass es auch durch Klicken oder Tippen außerhalb des Dialogs geschlossen werden kann.

### Animieren von Dialogen

`<dialog>`s sind auf [`display: none;`](/de/docs/Web/CSS/display) gesetzt, wenn sie versteckt sind, und `display: block;` wenn sie angezeigt werden sowie werden sie aus der {{Glossary("top_layer", "Top-Schicht")}} und dem [Zugänglichkeit-Baum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt/hinzugefügt. Daher muss die {{cssxref("display")}}-Eigenschaft animierbar sein, damit `<dialog>`-Elemente animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variante des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Insbesondere wird der Browser zwischen `none` und einem anderen `display`-Wert wechseln, sodass der animierte Inhalt für die gesamte Dauer der Animation sichtbar ist.

Ein Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert bei `0%` der Animationsdauer zu `block`, damit er während der gesamten Animation sichtbar bleibt.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert bei `100%` der Animationsdauer zu `none`, damit er während der gesamten Animation sichtbar bleibt.

> [!NOTE]
> Bei Animationen mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt sein, um das oben beschriebene Verhalten zu ermöglichen. Bei Animationen mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) ist dieses Verhalten standardmäßig verfügbar; ein entsprechender Schritt ist nicht erforderlich.

#### Übergang von Dialogelementen

Beim Animieren von `<dialog>`s mit CSS-Übergängen sind folgende Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) at-rule
  - : Stellt einen Satz von Startwerten für die im `<dialog>` gesetzten Eigenschaften bereit, von denen Sie bei jedem Öffnen ausgehend animieren möchten. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur dann auf, wenn sich ein Eigenschaftswert eines sichtbaren Elements ändert; sie werden nicht bei der ersten Stilaktualisierung eines Elements ausgelöst, oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert.
- [`display`](/de/docs/Web/CSS/display) Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das `<dialog>` für die gesamte Dauer des Übergangs als `display: block` (oder ein anderer sichtbarer `display`-Wert, der im geöffneten Zustand des Dialogs festgelegt ist) bestehen bleibt und somit die anderen Übergänge sichtbar sind.
- [`overlay`](/de/docs/Web/CSS/overlay) Eigenschaft
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass das Entfernen des `<dialog>` aus der Top-Schicht bis zum Abschluss des Übergangs verzögert wird, wodurch der Übergang wiederum sichtbar bleibt.
- {{cssxref("transition-behavior")}} Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` sowohl auf die `display`- als auch `overlay`-Übergänge (oder auf die {{cssxref("transition")}} Kurzform) um diskrete Übergänge auf diesen zwei Eigenschaften zu aktivieren, die standardmäßig nicht animierbar sind.

Hier ist ein Beispiel, wie das aussehen könnte.

##### HTML

Der HTML-Code enthält ein `<dialog>`-Element plus eine Schaltfläche, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element eine weitere Schaltfläche, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

In der CSS fügen wir einen `@starting-style` Block hinzu, der die Übergangsstilstartwerte für die `opacity`- und `transform`-Eigenschaften definiert, Übergangszielstile im `dialog:open`-Zustand sowie Standardstile im Standard-`dialog`-Zustand festlegt, zu dem das `<dialog>` einmal zurückkehrt, nachdem es angezeigt wurde. Beachten Sie, wie die `transition`-Liste des `<dialog>` nicht nur diese Eigenschaften umfasst, sondern auch die `display`- und `overlay`-Eigenschaften, jeweils mit `allow-discrete` gesetzt.

Wir setzen auch einen Startstilwert für die {{cssxref("background-color")}} Eigenschaft auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop), das hinter dem `<dialog>` erscheint, wenn es geöffnet wird, um eine angenehme Verdunklungsanimation zu bieten. Der `dialog:open::backdrop`-Selektor wählt nur die Hintergründe von `<dialog>`-Elementen, wenn der Dialog geöffnet ist.

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
> In Browsern, die das {{cssxref(":open")}}-Pseudo-Klasse nicht unterstützen, können Sie den Attributselektor `dialog[open]` verwenden, um das `<dialog>`-Element zu stylen, wenn es im offenen Zustand ist.

##### JavaScript

Das JavaScript fügt den Anzeige- und Schließschaltflächen Ereignishandler hinzu, die dazu führen, dass sie den `<dialog>` bei Klick zeigen und schließen:

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

Der Code wird folgendermaßen gerendert:

{{ EmbedLiveSample("Transitioning dialog elements", "100%", "200") }}

> [!NOTE]
> Da `<dialog>`s von `display: none` zu `display: block` wechseln, jedes Mal, wenn sie angezeigt werden, wechseln `<dialog>`-Übergänge von ihren `@starting-style`-Stilen zu ihren `dialog:open`-Stilen jedes Mal, wenn der Eintrittsübergang auftritt. Wenn das `<dialog>` geschlossen wird, wechselt es von seinem `dialog:open`-Zustand in den Standard-`dialog`-Zustand.
>
> Es ist möglich, dass der Stilübergang beim Ein- und Austreten unterschiedlich ist. Sehen Sie unser [Beispiel zur Demonstration der Verwendung von Startstilen](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) als Beweis für diese Möglichkeit.

#### Dialog-Keyframe-Animationen

Beim Animieren eines `<dialog>` mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu Übergängen zu beachten:

- Sie geben keinen `@starting-style` an.
- Sie fügen den `display`-Wert in einem Keyframe ein; dieser wird der `display`-Wert für die gesamte Animation sein, oder bis ein anderer `display`-Wert (kein `none`) auftritt.
- Sie brauchen die diskreten Animationen nicht explizit zu aktivieren; in Keyframes gibt es kein Äquivalent zu `allow-discrete`.
- Sie müssen `overlay` nicht in Keyframes setzen; die `display`-Animation übernimmt die Animation des `<dialog>` von sichtbar zu verborgen.

Schauen wir uns ein Beispiel an, damit Sie sehen können, wie das aussieht.

##### HTML

Zuerst enthält der HTML-Code ein `<dialog>`-Element plus eine Schaltfläche, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element eine weitere Schaltfläche, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Die CSS definiert Keyframes, um zwischen den geschlossenen und sichtbaren Zuständen des `<dialog>` zu animieren, sowie die Fade-In-Animation für das Hintergrundbild des `<dialog>`. Die `<dialog>`-Animationen umfassen die Animation von `display`, um sicherzustellen, dass die tatsächlichen sichtbaren Animationseffekte für die gesamte Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, den Hintergrundbild-Ausblend-Effekt zu animieren – der Hintergrund wird sofort aus dem DOM entfernt, wenn das `<dialog>` geschlossen wird, sodass es nichts zu animieren gibt.

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

Zuletzt fügt das JavaScript den Schaltflächen Ereignishandler hinzu, um das Anzeigen und Schließen des `<dialog>` zu ermöglichen:

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

Der Code wird folgendermaßen gerendert:

{{ EmbedLiveSample("dialog keyframe animations", "100%", "200") }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließende Inhalte</a>,
        sectioning root
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließende Inhalte</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">fließende Inhalte</a>
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
- {{CSSXref("::backdrop")}} CSS-Pseudo-Element
- [Web-Formulare](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
