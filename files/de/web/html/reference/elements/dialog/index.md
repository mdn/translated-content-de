---
title: "`<dialog>` HTML-Dialoglelement"
short-title: <dialog>
slug: Web/HTML/Reference/Elements/dialog
l10n:
  sourceCommit: 4280928da7b326df9e358204a23df21b4668a29b
---

Das **`<dialog>`**-Element [HTML](/de/docs/Web/HTML) repräsentiert ein modales oder nicht-modales Dialogfeld oder eine andere interaktive Komponente, wie z. B. ein löschbares Warnfeld, einen Inspektor oder ein Unterfenster.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf dem `<dialog>`-Element verwendet werden. Siehe [Zusätzliche Hinweise](#zusätzliche_hinweise).

- `closedby`
  - : Gibt die Arten von Benutzeraktionen an, mit denen das `<dialog>`-Element geschlossen werden kann. Dieses Attribut unterscheidet drei Methoden, mit denen ein Dialog geschlossen werden kann:
    - Eine _leichte Entlassungsbenutzeraktion_, bei der das `<dialog>` geschlossen wird, wenn der Benutzer außerhalb davon klickt oder tippt. Dies entspricht dem ["leichtes Entlassen"-Verhalten der "auto"-Zustand-Popovers](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss).
    - Eine _plattformabhängige Benutzeraktion_, wie das Drücken der <kbd>Esc</kbd>-Taste auf Desktop-Plattformen oder eine "Zurück"- oder "Schließen"-Geste auf mobilen Plattformen.
    - Ein vom Entwickler spezifizierter Mechanismus wie ein {{htmlelement("button")}} mit einem [`click`](/de/docs/Web/API/Element/click_event)-Handler, der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) aufruft, oder eine {{htmlelement("form")}}-Einreichung.

    Mögliche Werte sind:
    - `any`
      - : Der Dialog kann mit einer der drei Methoden geschlossen werden.
    - `closerequest`
      - : Der Dialog kann mit einer plattformabhängigen Benutzeraktion oder einem vom Entwickler spezifizierten Mechanismus geschlossen werden.
    - `none`
      - : Der Dialog kann nur mit einem vom Entwickler spezifizierten Mechanismus geschlossen werden.

    Wenn das `<dialog>`-Element keinen gültigen `closedby`-Wert angegeben hat, dann
    - wenn es mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet wurde, verhält es sich, als wäre der Wert `"closerequest"`
    - andernfalls verhält es sich, als wäre der Wert `"none"`.

- `open`
  - : Zeigt an, dass das Dialogfeld aktiv und für Interaktionen verfügbar ist. Wenn das `open`-Attribut nicht gesetzt ist, wird das Dialogfeld für den Benutzer nicht sichtbar sein.
    Es wird empfohlen, die `.show()`- oder `.showModal()`-Methode zu verwenden, um Dialoge darzustellen, anstatt das `open`-Attribut zu verwenden. Wenn ein `<dialog>` mit dem `open`-Attribut geöffnet wird, ist es nicht-modal.

    > [!NOTE]
    > Obwohl Sie zwischen den offenen und geschlossenen Zuständen nicht-modaler Dialogfelder wechseln können, indem Sie die Anwesenheit des `open`-Attributs umschalten, wird dieser Ansatz nicht empfohlen. Siehe [`open`](/de/docs/Web/API/HTMLDialogElement/open) für weitere Informationen.

## Beschreibung

Das HTML-`<dialog>`-Element wird verwendet, um sowohl modale als auch nicht-modale Dialogfelder zu erstellen. Modale Dialogfelder blockieren die Interaktion mit anderen UI-Elementen, wodurch der Rest der Seite [inaktiv](/de/docs/Web/HTML/Reference/Global_attributes/inert#:~:text=When,clicked) wird, während nicht-modale Dialogfelder die Interaktion mit dem Rest der Seite ermöglichen.

### Steuerung von Dialogen mit JavaScript

JavaScript kann verwendet werden, um das `<dialog>`-Element anzuzeigen und zu schließen. Sie können die [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode verwenden, um ein modales Dialogfeld anzuzeigen, und die [`show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode, um ein nicht-modales Dialogfeld anzuzeigen. Das Dialogfeld kann mit der [`close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode geschlossen werden oder mit der [`dialog`](/de/docs/Web/HTML/Reference/Elements/form#method)-Methode, wenn ein `<form>`, das im `<dialog>`-Element eingebettet ist, eingereicht wird. Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

### Modale Dialoge mit Aufrufbefehlen

Modale Dialoge können deklarativ mit den HTML-Attributen [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) der [Invoker Commands API](/de/docs/Web/API/Invoker_Commands_API) geöffnet und geschlossen werden, die auf {{htmlelement("button")}}-Elementen gesetzt werden können.

Das `command`-Attribut legt den Befehl fest, der gesendet werden soll, wenn das `<button>`-Element geklickt wird, während `commandfor` die `id` des Zieldialogs festlegt. Die Befehle, die für Dialoge gesendet werden können, sind [`"show-modal"`](/de/docs/Web/HTML/Reference/Elements/button#show-modal), [`"close"`](/de/docs/Web/HTML/Reference/Elements/button#close) und [`"request-close"`](/de/docs/Web/HTML/Reference/Elements/button#request-close).

Das folgende HTML zeigt, wie die Attribute auf ein `<button>`-Element angewendet werden, sodass es gedrückt werden kann, um ein modales `<dialog>` mit einer `id` von "my-dialog" zu öffnen.

```html
<button command="show-modal" commandfor="my-dialog">Open dialog</button>

<dialog id="my-dialog">
  <p>This dialog was opened using an invoker command.</p>
  <button commandfor="my-dialog" command="close">Close</button>
</dialog>
```

### Nicht-modale Dialoge mit Popover-Befehlen

Nicht-modale Dialoge können deklarativ geöffnet, geschlossen und umgeschaltet werden, indem die HTML-Attribute [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) der [Popover-API](/de/docs/Web/API/Popover_API) definiert werden, die auf {{htmlelement("button")}}- und {{htmlelement("input")}}-Elementen definiert werden können.

Das `<dialog>` muss in ein Popover umgewandelt werden, indem das `popover`-Attribut hinzugefügt wird. Sie können dann `popovertarget` auf einem Knopf/Eingabefeld verwenden, um das Ziel-Popover anzugeben, und `popovertargetaction`, um die Aktion anzugeben, die auf dem Popover ausgeführt werden soll, wenn der Knopf geklickt wird. Da das Dialogfeld aufgrund des Popovers nicht modal ist, kann es durch Klicken außerhalb des Dialogfelds geschlossen werden.

Das folgende HTML zeigt, wie die Attribute auf ein `<button>`-Element angewendet werden, sodass es gedrückt werden kann, um ein modales `<dialog>` mit einer `id` von "my-dialog" anzuzeigen und auszublenden.

```html
<button popovertarget="my-dialog">Open dialog</button>

<dialog id="my-dialog" popover>
  <p>This dialog was opened using a popovertargetaction attribute.</p>
  <button popovertarget="my-dialog" popovertargetaction="hide">Close</button>
</dialog>
```

Die Popover-API bietet auch Eigenschaften, die verwendet werden können, um den Zustand in JavaScript zu erhalten und zu ändern.

### Schließen von Dialogen

Es ist wichtig, einen Mechanismus zum Schließen für jedes `<dialog>`-Element bereitzustellen und sicherzustellen, dass dies auf Geräten funktioniert, die möglicherweise keine physische Tastatur haben.

Es gibt zahlreiche Möglichkeiten, einen Dialog zu schließen:

- Einreichen des Formulars innerhalb des `<dialog>`-Elements mit `method="dialog"` auf dem `<form>`-Element (siehe das [Beispiel zur Verwendung des open-Attributs des Dialogs](#using_the_dialog_open_attribute)).
- Klicken außerhalb des Dialogbereichs, wenn "leichtes Entlassen" aktiviert ist (siehe das [Beispiel der HTML-Attribute der Popover-API](#popover_api_html-attribute)).
- Drücken der <kbd>Esc</kbd>-Taste in Dialogen, bei denen dies aktiviert ist (siehe das [Beispiel der HTML-Attribute der Popover-API](#popover_api_html-attribute)).
- Aufrufen der Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) (siehe das [modale Beispiel](#erstellen_eines_modalen_dialogs)).

### CSS-Styling

Ein `<dialog>` kann mit seinem Elementnamen ausgewählt werden (wie jedes andere Element), und Sie können auch seinen Zustand mit Pseudoklassen wie [`:modal`](/de/docs/Web/CSS/Reference/Selectors/:modal) und [`:open`](/de/docs/Web/CSS/Reference/Selectors/:open) abgleichen.

Das CSS-{{cssxref('::backdrop')}}-Pseudo-Element kann verwendet werden, um den Hintergrund eines modalen Dialogfelds zu gestalten, der hinter dem `<dialog>`-Element angezeigt wird, wenn das Dialogfeld mit der Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) angezeigt wird. Dieses Pseudo-Element könnte zum Beispiel verwendet werden, um das inaktive Inhalts hinter dem modalen Dialog zu verwischen, zu verdunkeln oder anderweitig zu verschleiern.

### Zusätzliche Hinweise

- HTML-{{HTMLElement("form")}}-Elemente können verwendet werden, um einen Dialog zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der Knopf, mit dem das Formular gesendet wird, [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` über die `dialog`-Methode übermittelt wird, schließt sich das Dialogfeld, die Zustände der Formularelemente werden gespeichert, aber nicht übermittelt, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)-Eigenschaft wird auf den Wert des aktivierten Knopfes gesetzt.
- Das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut sollte zu dem Element hinzugefügt werden, mit dem der Benutzer unmittelbar nach dem Öffnen eines modalen Dialogs interagieren soll. Wenn kein anderes Element eine unmittelbarere Interaktion erfordert, wird empfohlen, `autofocus` zum Schließen-Knopf innerhalb des Dialogs oder zum Dialog selbst hinzuzufügen, wenn der Benutzer erwartet wird, es zu klicken/zu aktivieren, um es zu schließen.
- Fügen Sie das `tabindex`-Attribut dem `<dialog>`-Element nicht hinzu, da es nicht interaktiv ist und nicht den Fokus erhält. Der Inhalt des Dialogs, einschließlich des Schließen-Knopfes im Dialog, kann den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Beim Implementieren eines Dialogs ist es wichtig, den am besten geeigneten Ort festzulegen, um den Benutzerfokus zu setzen. Beim Öffnen eines `<dialog>` mit [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) wird der Fokus auf das erste eingebettete fokussierbare Element gesetzt. Die explizite Angabe der anfänglichen Fokusplatzierung durch das Verwenden des [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attributs wird dazu beitragen, sicherzustellen, dass der anfängliche Fokus auf das Element gesetzt wird, das als beste anfängliche Fokusplatzierung für einen bestimmten Dialog angesehen wird. Wenn dies unklar ist, dass möglicherweise nicht immer bekannt ist, wo der anfängliche Fokus innerhalb eines Dialogs gesetzt werden könnte, insbesondere für Instanzen, in denen der Inhalt eines Dialogs dynamisch gerendert wird, wenn er aufgerufen wird, könnte das `<dialog>`-Element selbst die beste anfängliche Fokusplatzierung bieten.

Stellen Sie sicher, dass ein Mechanismus bereitgestellt wird, der es den Benutzern ermöglicht, den Dialog zu schließen. Der robusteste Weg, sicherzustellen, dass alle Benutzer den Dialog schließen können, besteht darin, einen expliziten Knopf dafür einzuschließen, wie z. B. ein Bestätigungs-, Stornierungs- oder Schließen-Knopf.

Standardmäßig kann ein durch die `showModal()`-Methode aufgerufener Dialog durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Ein nicht-modaler Dialog wird standardmäßig nicht über die <kbd>Esc</kbd>-Taste geschlossen, und je nachdem, was der nicht-modale Dialog darstellt, ist dieses Verhalten möglicherweise nicht gewünscht. Tastaturbenutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und beibehalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte das Drücken der <kbd>Esc</kbd>-Taste nur den zuletzt angezeigten Dialog schließen. Beim Verwenden von `<dialog>` wird dieses Verhalten vom Browser bereitgestellt.

Während Dialoge mit anderen Elementen erstellt werden können, bietet das native `<dialog>`-Element Benutzerfreundlichkeits- und Barrierefreiheits-Funktionen, die repliziert werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck verwenden. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhalten unterstützt werden und die ordnungsgemäßen Kennzeichnungsempfehlungen befolgt werden.

Das `<dialog>`-Element wird von Browsern ähnlich wie benutzerdefinierte Dialoge, die das ARIA [role="dialog"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)-Attribut verwenden, bereitgestellt. `<dialog>`-Elemente, die durch die `showModal()`-Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), während `<dialog>`-Elemente, die durch die `show()`-Methode oder unter Verwendung des `open`-Attributs oder durch Ändern der Standarddarstellung eines `<dialog>` angezeigt werden, als `[aria-modal="false"]` ausgesetzt werden. Bei der Implementierung von modalen Dialogen sollte alles andere als das `<dialog>` und dessen Inhalt inaktiv gemacht werden, indem das [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attribut verwendet wird. Bei der Verwendung von `<dialog>` zusammen mit der `HTMLDialogElement.showModal()`-Methode wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### Invoker Command API HTML-Attribute

Dieses Beispiel demonstriert, wie Sie einen modalen Dialog mit den HTML-Attributen [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) der [Invoker Commands API](/de/docs/Web/API/Invoker_Commands_API) öffnen und schließen können.

Zuerst deklarieren wir ein {{htmlelement("button")}}-Element und setzen das `command`-Attribut auf [`"show-modal"`](/de/docs/Web/HTML/Reference/Elements/button#show-modal) und das `commandfor`-Attribut auf die `id` des zu öffnenden Dialogs (`my-dialog`). Dann deklarieren wir ein `<dialog>`-Element, das einen "Schließen"-\<button> enthält. Dieser Knopf sendet den [`"close"`](/de/docs/Web/HTML/Reference/Elements/button#close)-Befehl an die (gleiche) Dialog-ID.

```html
<button command="show-modal" commandfor="my-dialog">Open dialog</button>

<dialog id="my-dialog">
  <p>This dialog was opened using an invoker command.</p>
  <button commandfor="my-dialog" command="close">Close</button>
</dialog>
```

#### Ergebnis

Öffnen Sie den Dialog, indem Sie den "Dialog öffnen"-Knopf drücken. Sie können den Dialog schließen, indem Sie den "Schließen"-Knopf auswählen oder die <kbd>Esc</kbd>-Taste drücken.

{{EmbedLiveSample("Open and close a dialog using Invoker Command API HTML attributes", "100%", 200)}}

### Popover API HTML-Attribute

Dieses Beispiel demonstriert, wie Sie einen nicht-modalen Dialog mithilfe der HTML-Attribute [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover), [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) der [Popover-API](/de/docs/Web/API/Popover_API) öffnen und schließen können.

Das `<dialog>` wird in ein Popover umgewandelt, indem das `popover`-Attribut hinzugefügt wird. Da wir keinen Wert für das Attribut angegeben haben, wird der Standardwert `"auto"` verwendet. Dies ermöglicht das Verhalten des "leichten Entlassens", wodurch der Dialog durch Klicken außerhalb des Dialogs oder durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden kann. Stattdessen hätten wir `popover="manual"` setzen können, um das Verhalten des "leichten Entlassens" zu deaktivieren, in diesem Fall müsste der Dialog mit dem "Schließen"-Knopf geschlossen werden.

Beachten Sie, dass wir das `popovertargetaction`-Attribut für den `<button>`, der den Dialog öffnet, nicht angegeben haben. Es ist in diesem Fall nicht erforderlich, da der Standardwert `toggle` ist, der den Dialog beim Klicken des Knopfes zwischen seinen offenen und geschlossenen Zuständen umschaltet.

```html
<button popovertarget="my-dialog">Open dialog</button>

<dialog id="my-dialog" popover>
  <p>This dialog was opened using a popovertargetaction attribute.</p>
  <button popovertarget="my-dialog" popovertargetaction="hide">Close</button>
</dialog>
```

#### Ergebnis

Öffnen Sie den Dialog, indem Sie den "Dialog öffnen"-Knopf drücken. Sie können den Dialog schließen, indem Sie den "Schließen"-Knopf auswählen oder die <kbd>Esc</kbd>-Taste drücken. Sie können ihn auch schließen, indem Sie außerhalb des Dialogs auswählen, da er nicht-modal ist.

{{EmbedLiveSample("Popover API HTML attributes", "100%", 200)}}

### Verwenden des Dialog-`open`-Attributs

Dieses Beispiel demonstriert, wie Sie das boolesche `open`-Attribut auf einem `<dialog>`-Element setzen können, um einen reinen HTML-nicht-modalen Dialog zu erstellen, der bereits geöffnet ist, wenn die Seite geladen wird.

Der Dialog kann durch Klicken auf den "OK"-Knopf geschlossen werden, da das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist. In diesem Fall ist kein JavaScript erforderlich, um das Formular zu schließen.

```html
<dialog open>
  <p>Greetings, one and all!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

#### Ergebnis

Dieser Dialog ist anfänglich geöffnet und nicht-modal aufgrund der Anwesenheit des `open`-Attributs. Nach dem Klicken auf "OK" wird der Dialog geschlossen, wodurch der Ergebnisrahmen leer bleibt.

{{EmbedLiveSample("HTML-only non-modal dialog", "100%", 200)}}

> [!NOTE]
> Laden Sie die Seite neu, um die Ausgabe zurückzusetzen.

Wenn der Dialog geschlossen wird, gibt es keine Methode, um ihn wieder zu öffnen. Die bevorzugte Methode, um nicht-modale Dialoge darzustellen, ist die Verwendung der Methode [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show). Es ist möglich, die Anzeige des Dialogs umzuschalten, indem das boolesche `open`-Attribut hinzugefügt oder entfernt wird, aber dies ist nicht die empfohlene Praxis.

### Erstellen eines modalen Dialogs

Dieses Beispiel zeigt einen modalen Dialog mit einem [Farbverlauf](/de/docs/Web/CSS/Reference/Values/gradient)-Hintergrund. Die `.showModal()`-Methode öffnet den modalen Dialog, wenn der Knopf "Den Dialog anzeigen" aktiviert wird. Der Dialog kann durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden oder über die `close()`-Methode, wenn der Schließen-Knopf innerhalb des Dialogs aktiviert wird.

Wenn ein Dialog geöffnet wird, gibt der Browser standardmäßig den Fokus auf das erste Element, das innerhalb des Dialogs fokussiert werden kann. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut auf den "Schließen"-Knopf angewendet, sodass dieser den Fokus erhält, wenn der Dialog geöffnet wird, da dies das Element ist, mit dem der Benutzer wahrscheinlich sofort nach dem Öffnen des Dialogs interagieren wird.

#### HTML

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a groovy backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir können den Hintergrund des Dialogs durch das {{cssxref('::backdrop')}}-Pseudo-Element gestalten.

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

Der Dialog wird modal mit der `.showModal()`-Methode geöffnet und mit den `.close()`- oder `.requestClose()`-Methoden geschlossen.

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

Wenn der modale Dialog angezeigt wird, erscheint er über jedem anderen Dialog, der vorhanden sein könnte. Alles außerhalb des modalen Dialogs ist inaktiv und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass beim Öffnen des Dialogs, mit Ausnahme des Dialogs selbst, keine Interaktion mit dem Dokument möglich ist; der Knopf "Den Dialog anzeigen" ist größtenteils durch den fast undurchsichtigen Hintergrund des Dialogs verdeckt und ist inaktiv.

### Umgang mit dem Rückgabewert aus dem Dialog

Dieses Beispiel demonstriert den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie man einen modalen Dialog schließt, indem man ein Formular verwendet. Standardmäßig ist der `returnValue` der leere Zeichenfolgenwert oder der Wert des Knopfes, der das Formular innerhalb des `<dialog>`-Elements sendet, falls vorhanden.

Dieses Beispiel öffnet einen modalen Dialog, wenn der Knopf "Den Dialog anzeigen" aktiviert wird. Der Dialog enthält ein Formular mit einem {{HTMLElement("select")}} und zwei {{HTMLElement("button")}}-Elementen, die standardmäßig auf `type="submit"` gesetzt sind. Ein Ereignislistener aktualisiert den Wert des "Bestätigen"-Knopfes, wenn sich die Auswahloption ändert. Wenn der "Bestätigen"-Knopf aktiviert wird, um den Dialog zu schließen, ist der aktuelle Wert des Knopfes der Rückgabewert. Wenn der Dialog durch Drücken des "Abbrechen"-Knopfes geschlossen wird, ist der `returnValue` `cancel`.

Wenn der Dialog geschlossen wird, wird der Rückgabewert unter dem Knopf "Den Dialog anzeigen" angezeigt. Wird der Dialog durch Drücken der <kbd>Esc</kbd>-Taste geschlossen, wird der `returnValue` nicht aktualisiert und das `close`-Ereignis tritt nicht auf, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

Der Dialog wird über einen Ereignislistener auf dem Knopf "Den Dialog anzeigen" geöffnet, der [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) aufruft, wenn der Knopf geklickt wird.

Der Dialog wird geschlossen, wenn der "Abbrechen"-Knopf geklickt wird, weil das `<button>` den [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input/submit#formmethod)-Attribut enthält. Wenn die Methode eines Formulars [`dialog`](#zusätzliche_hinweise) ist, wird der Zustand des Formulars gespeichert, aber nicht übermittelt, und der Dialog wird geschlossen (das Attribut überschreibt die Standard-{{HTTPMethod("GET")}}-Methode des {{HTMLElement("form")}}). Ohne eine `action` bewirkt das Einreichen des Formulars mit der Standard-{{HTTPMethod("GET")}}-Methode ein Neuladen der Seite. Wir verwenden JavaScript, um die Übermittlung zu verhindern und den Dialog mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) jeweils zu schließen.

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

### Schließen eines Dialogs mit einer erforderlichen Formulareingabe

Wenn ein Formular in einem Dialog eine erforderliche Eingabe hat, lässt der Benutzeragent das Schließen des Dialogs erst zu, wenn ein Wert für die erforderliche Eingabe angegeben wurde. Um einen solchen Dialog zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate)-Attribut auf dem Schließen-Knopf oder rufen Sie die `close()`-Methode auf dem Dialogobjekt auf, wenn der Schließen-Knopf geklickt wird.

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

Aus der Ausgabe sehen wir, dass es unmöglich ist, den Dialog mit dem _Normal schließen_-Knopf zu schließen. Aber der Dialog kann geschlossen werden, wenn wir die Formularvalidierung über das `formnovalidate`-Attribut auf dem _Abbrechen_-Knopf umgehen. Programmatisch wird `dialog.close()` auch einen solchen Dialog schließen.

### Vergleich der verschiedenen `closedby`-Verhaltensweisen

Dieses Beispiel zeigt den Unterschied im Verhalten zwischen verschiedenen Werten des [`closedby`](#closedby)-Attributs.

#### HTML

Wir stellen drei {{htmlelement("button")}}-Elemente und drei `<dialog>`-Elemente bereit. Jeder Knopf wird programmiert, um einen anderen Dialog zu öffnen, der das Verhalten eines der drei Werte des `closedby`-Attributs — `none`, `closerequest` und `any` — demonstriert. Beachten Sie, dass jedes `<dialog>`-Element ein `<button>`-Element enthält, das zum Schließen verwendet wird.

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

Hier weisen wir verschiedenen Variablen Referenzen auf die Hauptsteuerungs-`<button>`-Elemente, die `<dialog>`-Elemente und die "Schließen"-`<button>`-Elemente innerhalb der Dialoge zu. Zuerst weisen wir jedem Steuerknopf einen [`click`](/de/docs/Web/API/Element/click_event)-Ereignislistener zu, der über [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) die Ereignishandlerfunktion auslöst, die das zugehörige `<dialog>`-Element über [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) öffnet. Dann durchlaufen wir die "Schließen"-`<button>`-Referenzen und weisen jedem eine `click`-Ereignishandlerfunktion zu, die sein `<dialog>`-Element über [`close()`](/de/docs/Web/API/HTMLDialogElement/close) schließt.

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

Versuchen Sie, jeden Knopf zu klicken, um einen Dialog zu öffnen. Der erste kann nur durch Klicken seines "Schließen"-Knopfes geschlossen werden. Der zweite kann auch über eine gerätespezifische Benutzeraktion wie das Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Der dritte hat vollständiges ["leichtes Entlassungs"-Verhalten](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss), sodass er auch durch Klicken oder Tippen außerhalb des Dialogs geschlossen werden kann.

### Animieren von Dialogen

`<dialog>`s sind auf [`display: none;`](/de/docs/Web/CSS/Reference/Properties/display) gesetzt, wenn sie ausgeblendet und auf `display: block;` gesetzt, wenn sie angezeigt werden, und werden aus / zum {{Glossary("top_layer", "oberen Layer")}} und dem [Zugänglichkeitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt / hinzugefügt. Daher muss die {{cssxref("display")}}-Eigenschaft animiert werden können, damit `<dialog>`-Elemente animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/Reference/Properties/display#browser_compatibility) animieren `display` mit einer Variante des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Insbesondere wechselt der Browser zwischen `none` und einem anderen Wert von `display`, damit der animierte Inhalt für die gesamte Dauer der Animation sichtbar ist.

Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert bei `0%` der Animationsdauer zu `block`, sodass er während der gesamten Dauer sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass es während der gesamten Dauer sichtbar ist.

> [!NOTE]
> Bei Animationen mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) festgelegt werden, um das oben beschriebene Verhalten zu aktivieren. Dieses Verhalten ist standardmäßig verfügbar, wenn mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) animiert wird; ein äquivalenter Schritt ist nicht erforderlich.

#### Übergang von Dialogelementen

Beim Animieren von `<dialog>`-Elementen mit CSS-Übergängen sind folgende Funktionen erforderlich:

- {{cssxref("@starting-style")}}-At-Regel
  - : Stellt einen Satz von Startwerten für Eigenschaften bereit, die auf das `<dialog>` gesetzt werden, von denen Sie erwarten, dass sie jedes Mal übergehen, wenn es geöffnet wird. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur dann auf, wenn sich ein Eigenschaftswert auf einem sichtbaren Element ändert; Sie werden nicht bei den ersten Stilaktualisierungen von Elementen oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert ausgelöst.
- {{cssxref("display")}}-Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, sodass das `<dialog>` für die Dauer des Übergangs `display: block` (oder einen anderen sichtbaren `display`-Wert, der auf den geöffneten Zustand des Dialogs festgelegt ist) bleibt und die anderen Übergänge sichtbar sind.
- {{cssxref("overlay")}}-Eigenschaft
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass die Entfernung des `<dialog>` aus dem oberen Layer bis zum Abschluss des Übergangs verschoben wird, um erneut sicherzustellen, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf den {{cssxref("transition")}}-Shorthand), um diskrete Übergänge bei diesen beiden Eigenschaften zu aktivieren, die standardmäßig nicht animierbar sind.

Hier ist ein kurzes Beispiel, um zu zeigen, wie dies aussehen könnte.

##### HTML

Das HTML enthält ein `<dialog>`-Element sowie einen Knopf, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element einen weiteren Knopf, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS fügen wir einen `@starting-style`-Block ein, der die Übergang-Startstile für die Eigenschaften `opacity` und `transform`, Übergangs-Endstile im `dialog:open`-Zustand und Standardstile im Standard-`dialog`-Zustand enthält, zu dem das `<dialog>` zurückkehren soll, sobald es angezeigt wurde. Beachten Sie, wie die `transition`-Liste für das `<dialog>` nicht nur diese Eigenschaften umfasst, sondern auch die Eigenschaften `display` und `overlay`, jeweils mit `allow-discrete` darauf festgelegt.

Wir setzen auch einen Startstil-Wert für die {{cssxref("background-color")}}-Eigenschaft auf das {{cssxref("::backdrop")}}, das hinter dem `<dialog>` angezeigt wird, wenn es geöffnet wird, um eine schöne Abdunklungsanimation zu bieten. Der `dialog:open::backdrop`-Selector wählt nur die Hintergründe der `<dialog>`-Elemente aus, wenn der Dialog geöffnet ist.

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
> In Browsern, die das {{cssxref(":open")}}-Pseudo-Klasse nicht unterstützen, können Sie den Attributselektor `dialog[open]` verwenden, um das `<dialog>`-Element zu stilisieren, wenn es im offenen Zustand ist.

##### JavaScript

Das JavaScript fügt den Klicken-Ereignis-Handlern der Knöpfe hinzu, der beim Klicken den `<dialog>` anzeigt und schließt:

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

{{ EmbedLiveSample("Transitioning dialog elements", "100%", "200") }}

> [!NOTE]
> Da `<dialog>`s bei jedem Anzeigen von `display: none` zu `display: block` wechseln, erfolgt der Übergang des `<dialog>` immer von seinen `@starting-style`-Stilen zu seinen `dialog:open`-Stilen, wenn der Eintrittsübergang erfolgt. Wenn das `<dialog>` geschlossen wird, erfolgt der Übergang von seinem `dialog:open`-Zustand zum Standard-`dialog`-Zustand.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt in solchen Fällen unterschiedlich ist. Siehe unser [Demonstration des Einsatzes von Startstilen](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used)-Beispiel für einen Nachweis dafür.

#### Dialog-Keyframe-Animationen

Beim Animieren eines `<dialog>`-Elements mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu beachten:

- Sie stellen keinen `@starting-style` bereit.
- Sie fügen den `display`-Wert in einem Keyframe ein; dies ist der `display`-Wert für die gesamte Animation oder bis ein anderer nicht-`none`-Displaywert erfasst wird.
- Sie müssen keine diskreten Animationen explizit aktivieren; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Keyframes.
- Sie müssen das `overlay` innerhalb von Keyframes nicht setzen; die `display`-Animation behandelt die Animation des `<dialog>` von gezeigt zu versteckt.

Schauen wir uns ein Beispiel an, damit Sie sehen können, wie das aussieht.

##### HTML

Zuerst enthält das HTML ein `<dialog>`-Element sowie einen Knopf, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element einen weiteren Knopf, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Keyframes, um zwischen den geschlossenen und angezeigten Zuständen des `<dialog>` zu animieren, zusätzlich zur Einblend-Animation für den Hintergrund des `<dialog>`. Die `<dialog>`-Animationen umfassen auch die Animation von `display`, um sicherzustellen, dass die tatsächlich sichtbaren Animationseffekte über die gesamte Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, die Hintergrund-Einblendung auszublenden — der Hintergrund wird sofort aus dem DOM entfernt, wenn das `<dialog>` geschlossen wird, sodass nichts zu animieren ist.

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

Schließlich fügt das JavaScript Ereignis-Handler zu den Knöpfen hinzu, um das Anzeigen und Schließen des `<dialog>` zu ermöglichen:

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
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>
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
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis der `HTMLDialogElement`-Schnittstelle
- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis der `HTMLDialogElement`-Schnittstelle
- [`open`](/de/docs/Web/API/HTMLDialogElement/open)-Eigenschaft der `HTMLDialogElement`-Schnittstelle
- [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) globales Attribut für HTML-Elemente
- {{CSSXref("::backdrop")}} CSS-Pseudo-Element
- [Web-Formulare](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
