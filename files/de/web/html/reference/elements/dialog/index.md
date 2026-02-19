---
title: "<dialog>: Das Dialog-Element"
slug: Web/HTML/Reference/Elements/dialog
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

Das **`<dialog>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert ein modales oder nicht-modales Dialogfeld oder eine andere interaktive Komponente, wie ein schließbares Warnfenster, ein Inspector oder ein Teilfenster.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf das `<dialog>`-Element angewendet werden. Siehe [Zusätzliche Anmerkungen](#zusätzliche_anmerkungen).

- `closedby`
  - : Gibt die Arten von Benutzeraktionen an, die verwendet werden können, um das `<dialog>`-Element zu schließen. Dieses Attribut unterscheidet drei Methoden, mit denen ein Dialog geschlossen werden kann:
    - Eine _light dismiss Benutzeraktion_, bei der das `<dialog>` geschlossen wird, wenn der Benutzer außerhalb des Dialogs klickt oder tippt. Dies entspricht dem ["light dismiss"-Verhalten von "auto" Zustand Popovers](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss).
    - Eine _plattform-spezifische Benutzeraktion_, wie das Drücken der <kbd>Esc</kbd>-Taste auf Desktop-Plattformen oder eine "Zurück"- oder "Schließen"-Geste auf mobilen Plattformen.
    - Ein entwicklerspezifischer Mechanismus wie ein {{htmlelement("button")}} mit einem [`click`](/de/docs/Web/API/Element/click_event)-Handler, der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) aufruft, oder ein {{htmlelement("form")}}-Übermittlung.

    Mögliche Werte sind:
    - `any`
      - : Der Dialog kann mit jeder der drei Methoden geschlossen werden.
    - `closerequest`
      - : Der Dialog kann mit einer plattform-spezifischen Benutzeraktion oder einem entwicklerspezifischen Mechanismus geschlossen werden.
    - `none`
      - : Der Dialog kann nur mit einem entwicklerspezifischen Mechanismus geschlossen werden.

    Wenn das `<dialog>`-Element keinen gültigen `closedby`-Wert angegeben hat, dann
    - wenn es mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet wurde, verhält es sich, als wäre der Wert `"closerequest"`
    - andernfalls verhält es sich, als wäre der Wert `"none"`.

- `open`
  - : Gibt an, dass das Dialogfeld aktiv ist und zur Interaktion bereitsteht. Wenn das `open`-Attribut nicht gesetzt ist, wird das Dialogfeld für den Benutzer nicht sichtbar sein.
    Es wird empfohlen, die Methoden `.show()` oder `.showModal()` zu verwenden, um Dialoge zu rendern, anstatt das `open`-Attribut. Wenn ein `<dialog>` mit dem `open`-Attribut geöffnet wird, ist es nicht modal.

    > [!NOTE]
    > Obwohl Sie die offenen und geschlossenen Zustände von nicht-modalen Dialogfeldern durch Umschalten des `open`-Attributs zwischen den Zuständen ändern können, wird dieser Ansatz nicht empfohlen. Siehe [`open`](/de/docs/Web/API/HTMLDialogElement/open) für weitere Informationen.

## Beschreibung

Das HTML-`<dialog>`-Element wird verwendet, um sowohl modale als auch nicht-modale Dialogfelder zu erstellen. Modale Dialogfelder blockieren die Interaktion mit anderen UI-Elementen und machen den Rest der Seite [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert#:~:text=When,clicked), während nicht-modale Dialogfelder die Interaktion mit dem Rest der Seite erlauben.

### Steuerung von Dialogen mit JavaScript

JavaScript kann verwendet werden, um das `<dialog>`-Element anzuzeigen und zu schließen. Sie können die Methode [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwenden, um ein modales Dialogfeld anzuzeigen, und die Methode [`show()`](/de/docs/Web/API/HTMLDialogElement/show), um ein nicht-modales Dialogfeld anzuzeigen. Das Dialogfeld kann mit der Methode [`close()`](/de/docs/Web/API/HTMLDialogElement/close) oder mit der Methode [`dialog`](/de/docs/Web/HTML/Reference/Elements/form#method) geschlossen werden, wenn ein innerhalb des `<dialog>`-Elements verschachteltes `<form>` gesendet wird. Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

### Modale Dialoge mit invoker commands

Modale Dialoge können deklarativ geöffnet und geschlossen werden, indem die [Invoker Commands API](/de/docs/Web/API/Invoker_Commands_API)-HTML-Attribute [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) auf {{htmlelement("button")}}-Elementen gesetzt werden.

Das `command`-Attribut legt den bestimmten Befehl fest, der gesendet werden soll, wenn das `<button>`-Element angeklickt wird, während `commandfor` die `id` des Zieldialogs festlegt. Die Befehle, die für Dialoge gesendet werden können, sind [`"show-modal"`](/de/docs/Web/HTML/Reference/Elements/button#show-modal), [`"close"`](/de/docs/Web/HTML/Reference/Elements/button#close) und [`"request-close"`](/de/docs/Web/HTML/Reference/Elements/button#request-close).

Das HTML unten zeigt, wie die Attribute auf ein `<button>`-Element angewendet werden, damit es gedrückt werden kann, um ein modales `<dialog>` mit einer `id` von "my-dialog" zu öffnen.

```html
<button command="show-modal" commandfor="my-dialog">Open dialog</button>

<dialog id="my-dialog">
  <p>This dialog was opened using an invoker command.</p>
  <button commandfor="my-dialog" command="close">Close</button>
</dialog>
```

### Nicht-modale Dialoge mit Popover-Befehlen

Nicht-modale Dialoge können deklarativ mit Hilfe der [Popover API](/de/docs/Web/API/Popover_API)-HTML-Attribute [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction), die auf {{htmlelement("button")}} und {{htmlelement("input")}}-Elementen definiert werden können, geöffnet, geschlossen und umgeschaltet werden.

Das `<dialog>` muss in ein Popover verwandelt werden, indem das `popover`-Attribut hinzugefügt wird. Sie können dann `popovertarget` auf einem Button/Input verwenden, um das Ziel-Popover anzugeben, und `popovertargetaction`, um die Aktion zu spezifizieren, die auf dem Popover stattfinden soll, wenn der Button geklickt wird. Beachten Sie, dass, weil das Dialog ein Popover ist, es nicht modal sein wird, sodass Sie es durch Klicken außerhalb des Dialogs schließen können.

Das HTML unten zeigt, wie die Attribute auf ein `<button>`-Element angewendet werden, damit es gedrückt werden kann, um ein modales `<dialog>` mit einer `id` von "my-dialog" zu zeigen und zu verbergen.

```html
<button popovertarget="my-dialog">Open dialog</button>

<dialog id="my-dialog" popover>
  <p>This dialog was opened using a popovertargetaction attribute.</p>
  <button popovertarget="my-dialog" popovertargetaction="hide">Close</button>
</dialog>
```

Die Popover API bietet auch Eigenschaften, die verwendet werden können, um den Zustand in JavaScript zu erhalten und zu setzen.

### Schließen von Dialogen

Es ist wichtig, für jedes `<dialog>`-Element einen Schließmechanismus bereitzustellen und sicherzustellen, dass dieser auf Geräten funktioniert, die möglicherweise keine physische Tastatur haben.

Es gibt viele Möglichkeiten, einen Dialog zu schließen:

- Durch Übermittlung des Formulars innerhalb des `<dialog>`-Elements mit `method="dialog"` auf dem `<form>`-Element (siehe [Verwendung des dialog open Attributs](#using_the_dialog_open_attribute)-Beispiel).
- Durch Klicken außerhalb des Dialogbereichs, wenn "light dismiss" aktiviert ist (siehe [Popover API HTML-Attribute](#popover_api_html-attribute)-Beispiel).
- Durch Drücken der <kbd>Esc</kbd>-Taste, in Dialogen, wo es aktiviert ist (siehe [Popover API HTML-Attribute](#popover_api_html-attribute)-Beispiel).
- Durch Aufrufen der Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) (siehe [modales Beispiel](#erstellung_eines_modalen_dialogs)).

### CSS Styling

Ein `<dialog>` kann, wie jedes andere Element auch, mit seinem Elementnamen ausgewählt werden, und Sie können seinen Zustand auch mit Pseudo-Klassen wie [`:modal`](/de/docs/Web/CSS/Reference/Selectors/:modal) und [`:open`](/de/docs/Web/CSS/Reference/Selectors/:open) abgleichen.

Das CSS {{cssxref('::backdrop')}} Pseudo-Element kann verwendet werden, um den Hintergrund eines modalen Dialogs zu stylen, der hinter dem `<dialog>` Element angezeigt wird, wenn der Dialog mit der Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) angezeigt wird. Dieses Pseudo-Element könnte zum Beispiel verwendet werden, um den inerten Inhalt hinter dem modalen Dialog zu verwischen, zu verdunkeln oder auf andere Weise zu verschleiern.

### Zusätzliche Anmerkungen

- HTML {{HTMLElement("form")}}-Elemente können verwendet werden, um ein Dialogfeld zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der Button zur Übermittlung des Formulars [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` per `dialog`-Methode übermittelt wird, schließt das Dialogfeld, die Zustände der Formularelemente werden gespeichert, aber nicht gesendet, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)-Eigenschaft wird auf den Wert des aktivierten Buttons gesetzt.
- Das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut sollte dem Element hinzugefügt werden, mit dem der Benutzer direkt nach dem Öffnen eines modalen Dialogs interagieren soll. Wenn kein anderes Element eine sofortigere Interaktion erfordert, wird empfohlen, `autofocus` auf den Schließknopf innerhalb des Dialogs oder das Dialog selbst zu setzen, falls der Benutzer erwartet wird, es durch einen Klick/Aktivierung zu schließen.
- Fügen Sie dem `<dialog>`-Element keine `tabindex`-Eigenschaft hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Der Inhalt des Dialogs, einschließlich des Schließknopfes innerhalb des Dialogs, kann den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Beim Implementieren eines Dialogs ist es wichtig zu überlegen, welches der am besten geeignete Ort ist, um den Fokus des Benutzers zu setzen. Wenn Sie [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwenden, um ein `<dialog>` zu öffnen, wird der erste verschachtelte fokussierbare Ansprechpartner in den Fokus gesetzt. Indem Sie mit dem [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut explizit die Anfangsfokuseinstellung angeben, wird sichergestellt, dass der anfängliche Fokus auf das Element gesetzt wird, das für einen bestimmten Dialog als beste Anfangsfopklussplatzierung gehalten wird. Wenn Zweifel bestehen, da es möglicherweise nicht immer bekannt ist, wo der Anfangsfokus innerhalb eines Dialogs gesetzt werden könnte, insbesondere bei Fällen, in denen der Inhalt des Dialogs dynamisch gerendert wird, wenn er aufgerufen wird, kann das `<dialog>`-Element selbst der beste Ausgangspunkt für den Fokus sein.

Stellen Sie sicher, dass eine Möglichkeit besteht, um den Dialog zu schließen. Der robusteste Weg, um sicherzustellen, dass alle Benutzer den Dialog schließen können, besteht darin, einen expliziten Knopf hierfür einzufügen, wie z.B. einen Bestätigungs-, Abbruch- oder Schließknopf.

Standardmäßig kann ein Dialog, der mit der `showModal()`-Methode aufgerufen wird, durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Ein nicht-modaler Dialog wird standardmäßig nicht durch die <kbd>Esc</kbd>-Taste geschlossen, und je nachdem, was der nicht-modale Dialog darstellt, ist es möglicherweise nicht gewünscht, dass dieses Verhalten auftritt. Tastaturnutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und beibehalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte durch Drücken der <kbd>Esc</kbd>-Taste nur der zuletzt angezeigte Dialog geschlossen werden. Beim Verwenden von `<dialog>` wird dieses Verhalten vom Browser bereitgestellt.

Obwohl Dialoge mit anderen Elementen erstellt werden können, weist das native `<dialog>`-Element Benutzerfreundlichkeits- und Barrierefreiheitseigenschaften auf, die repliziert werden müssen, wenn andere Elemente für einen ähnlichen Zweck verwendet werden. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhaltensweisen unterstützt werden und dass die ordnungsgemäßen Beschriftungsempfehlungen eingehalten werden.

Das `<dialog>`-Element wird von Browsern ähnlich wie benutzerdefinierte Dialoge bereitgestellt, die das ARIA [role="dialog"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)-Attribut verwenden. `<dialog>`-Elemente, die durch die `showModal()`-Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), während `<dialog>`-Elemente, die durch die `show()`-Methode aufgerufen oder mit dem `open`-Attribut angezeigt oder durch Ändern des Standard-`display` eines `<dialog>` angezeigt werden, als `[aria-modal="false"]` vorgestellt werden. Beim Implementieren von Modal-Dialogen sollten alles andere als das `<dialog>` und seine Inhalte mit dem Attribut [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) inaktiviert werden. Beim Verwenden von `<dialog>` zusammen mit der `HTMLDialogElement.showModal()`-Methode, wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### Invoker Command API HTML-Attribute

Dieses Beispiel demonstriert, wie Sie ein modales Dialogfenster mit den HTML-Attributen [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) der [Invoker Commands API](/de/docs/Web/API/Invoker_Commands_API) öffnen und schließen können.

Zuerst deklarieren wir ein {{htmlelement("button")}}-Element, das `command`-Attribut wird auf [`"show-modal"`](/de/docs/Web/HTML/Reference/Elements/button#show-modal) gesetzt, und das `commandfor`-Attribut auf die `id` des zu öffnenden Dialogs (`my-dialog`). Dann deklarieren wir ein `<dialog>`-Element, das einen "Schließen"-`<button>` enthält. Dieser Knopf sendet den Befehl [`"close"`](/de/docs/Web/HTML/Reference/Elements/button#close) an die (gleiche) Dialog-ID.

```html
<button command="show-modal" commandfor="my-dialog">Open dialog</button>

<dialog id="my-dialog">
  <p>This dialog was opened using an invoker command.</p>
  <button commandfor="my-dialog" command="close">Close</button>
</dialog>
```

#### Ergebnis

Öffnen Sie den Dialog, indem Sie den "Dialog öffnen"-Button drücken. Sie können den Dialog durch Auswahl des "Schließen"-Buttons oder durch Drücken der <kbd>Esc</kbd>-Taste schließen.

{{EmbedLiveSample("Open and close a dialog using Invoker Command API HTML attributes", "100%", 200)}}

### Popover API HTML-Attribute

Dieses Beispiel zeigt, wie Sie ein nicht-modales Dialogfenster mit den HTML-Attributen [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover), [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget), und [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) der [Popover API](/de/docs/Web/API/Popover_API) öffnen und schließen können.

Das `<dialog>` wird durch Hinzufügen des `popover`-Attributs in ein Popover umgewandelt. Da wir keinen Wert für das Attribut angegeben haben, wird der Standardwert `"auto"` verwendet. Dies aktiviert das "light dismiss"-Verhalten, das es ermöglicht, das Dialogfeld durch Klicken außerhalb des Dialogs oder durch Drücken der <kbd>Esc</kbd>-Taste zu schließen. Wir hätten auch `popover="manual"` einstellen können, um das "light dismiss"-Verhalten zu deaktivieren. In diesem Fall müsste das Dialogfeld mit dem "Schließen"-Button geschlossen werden.

Beachten Sie, dass wir das `popovertargetaction`-Attribut für den `<button>`, der das Dialogfeld öffnet, nicht angegeben haben. Dies ist in diesem Fall nicht erforderlich, da der Standardwert `toggle` ist, der das Dialogfeld zwischen geöffneten und geschlossenen Zuständen umschaltet, wenn der Button angeklickt wird.

```html
<button popovertarget="my-dialog">Open dialog</button>

<dialog id="my-dialog" popover>
  <p>This dialog was opened using a popovertargetaction attribute.</p>
  <button popovertarget="my-dialog" popovertargetaction="hide">Close</button>
</dialog>
```

#### Ergebnis

Öffnen Sie den Dialog, indem Sie den "Dialog öffnen"-Knopf drücken. Sie können den Dialog durch Auswahl des "Schließen"-Knopfes oder durch Drücken der <kbd>Esc</kbd>-Taste schließen. Sie können es auch schließen, indem Sie außerhalb des Dialogs klicken, da es nicht modal ist.

{{EmbedLiveSample("Popover API HTML attributes", "100%", 200)}}

### Verwendung des dialog `open`-Attributs

Dieses Beispiel zeigt, wie Sie das boolesche `open`-Attribut auf einem `<dialog>`-Element einstellen können, um ein ausschließlich HTML-basiertes, nicht-modales Dialog zu erstellen, das bereits geöffnet ist, wenn die Seite geladen wird.

Der Dialog kann durch Klicken auf den "OK"-Knopf geschlossen werden, weil das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist. In diesem Fall ist kein JavaScript erforderlich, um das Formular zu schließen.

```html
<dialog open>
  <p>Greetings, one and all!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

#### Ergebnis

Dieser Dialog ist initial offen und nicht-modal aufgrund des Vorhandenseins des `open`-Attributs. Nach dem Klicken auf "OK" wird der Dialog ausgeblendet, und der Ergebnisrahmen bleibt leer.

{{EmbedLiveSample("HTML-only non-modal dialog", "100%", 200)}}

> [!NOTE]
> Laden Sie die Seite neu, um die Ausgabe zurückzusetzen.

Wenn der Dialog geschlossen wird, gibt es keine Methode, um ihn wieder zu öffnen. Die bevorzugte Methode zur Anzeige von nicht-modalen Dialogen besteht darin, die [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode zu verwenden. Es ist möglich, die Anzeige des Dialogs durch Hinzufügen oder Entfernen des booleschen `open`-Attributs umzuschalten, aber dies ist nicht die empfohlene Praxis.

### Erstellung eines modalen Dialogs

Dieses Beispiel zeigt einen modalen Dialog mit einem [Gradienten](/de/docs/Web/CSS/Reference/Values/gradient) als Hintergrund. Die `.showModal()`-Methode öffnet den modalen Dialog, wenn der "Dialog anzeigen"-Button aktiviert wird. Der Dialog kann durch Drücken der <kbd>Esc</kbd>-Taste oder über die `close()`-Methode geschlossen werden, wenn der "Schließen"-Knopf innerhalb des Dialogs aktiviert wird.

Wenn ein Dialog geöffnet wird, gibt der Browser standardmäßig den Fokus auf das erste Element, das innerhalb des Dialogs fokussiert werden kann. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut auf den "Schließen"-Knopf angewendet, sodass dieser beim Öffnen des Dialogs den Fokus erhält, da dies das Element ist, mit dem der Benutzer voraussichtlich sofort nach dem Öffnen des Dialogs interagieren wird.

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

Wenn der modale Dialog angezeigt wird, erscheint er über allen anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des modalen Dialogs ist inaktiv, und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass, wenn der Dialog geöffnet ist, mit Ausnahme des Dialogs selbst keine Interaktion mit dem Dokument möglich ist; der "Dialog anzeigen"-Button ist größtenteils durch den fast opaken Hintergrund des Dialogs verdeckt und inaktiv.

### Umgang mit dem Rückgabewert des Dialogs

Dieses Beispiel demonstriert den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie man einen modalen Dialog mithilfe eines Formulars schließt. Standardmäßig ist der `returnValue` die leere Zeichenkette oder der Wert des Buttons, der das Formular innerhalb des `<dialog>`-Elements sendet, falls eines vorhanden ist.

Dieses Beispiel öffnet einen modalen Dialog, wenn der "Dialog anzeigen"-Button aktiviert wird. Der Dialog enthält ein Formular mit einem {{HTMLElement("select")}} und zwei {{HTMLElement("button")}}-Elementen, die standardmäßig `type="submit"` haben. Ein Event-Listener aktualisiert den Wert des "Bestätigen"-Buttons, wenn sich die Auswahloption ändert. Wenn der "Bestätigen"-Button aktiviert wird, um den Dialog zu schließen, ist der aktuelle Wert des Buttons der Rückgabewert. Wenn der Dialog durch Drücken des "Abbrechen"-Buttons geschlossen wird, ist der `returnValue` `cancel`.

Wenn der Dialog geschlossen wird, wird der Rückgabewert unter dem "Dialog anzeigen"-Button angezeigt. Wenn der Dialog durch Drücken der <kbd>Esc</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert, und das `close`-Event tritt nicht auf, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

Der Dialog wird mithilfe eines Event-Listeners auf dem "Dialog anzeigen"-Button geöffnet, der [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) aufruft, wenn der Button geklickt wird.

Der Dialog wird geschlossen, wenn der "Abbrechen"-Button geklickt wird, da der `<button>` das Attribut [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input/submit#formmethod) enthält. Wenn die Methode eines Formulars [`dialog`](#zusätzliche_anmerkungen) ist, wird der Zustand des Formulars gespeichert, aber nicht gesendet, und der Dialog wird geschlossen (das Attribut überschreibt die Standard-{{HTTPMethod("GET")}}-Methode des {{HTMLElement("form")}}). Ohne eine `action` wird durch das Senden des Formulars über die Standard-{{HTTPMethod("GET")}}-Methode eine Seite neu geladen. Wir verwenden JavaScript, um das Senden zu verhindern und den Dialog mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) zu schließen.

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

### Schließen eines Dialogs mit erforderlichen Formulareingaben

Wenn ein Formular innerhalb eines Dialogs eine erforderliche Eingabe hat, lässt der User Agent den Dialog nur schließen, wenn Sie einen Wert für die erforderliche Eingabe angeben. Um einen solchen Dialog zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate)-Attribut auf dem Schließen-Knopf oder rufen Sie die `close()`-Methode auf dem Dialogobjekt auf, wenn der Schließen-Knopf geklickt wird.

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

Aus der Ausgabe sehen wir, dass es unmöglich ist, den Dialog mit dem _Normal close_-Button zu schließen. Aber der Dialog kann geschlossen werden, wenn wir die Formularvalidierung mit dem `formnovalidate`-Attribut auf dem _Cancel_-Button umgehen. Programmgesteuert wird `dialog.close()` auch einen solchen Dialog schließen.

### Vergleich verschiedener closedby-Verhaltensweisen

Dieses Beispiel zeigt den Unterschied im Verhalten zwischen verschiedenen Werten des [`closedby`](#closedby)-Attributs.

#### HTML

Wir stellen drei {{htmlelement("button")}}-Elemente und drei `<dialog>`-Elemente bereit. Jeder Button wird so programmiert sein, dass er einen anderen Dialog öffnet, der das Verhalten eines der drei Werte des `closedby`-Attributs zeigt — `none`, `closerequest` und `any`. Beachten Sie, dass jedes `<dialog>`-Element ein `<button>`-Element enthält, das zum Schließen verwendet wird.

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

Hier weisen wir verschiedene Variablen zu, um die Hauptsteuerungs-`<button>`-Elemente, die `<dialog>`-Elemente und die "Schließen"-`<button>`-Elemente innerhalb der Dialoge zu referenzieren. Zuerst weisen wir jedem Steuerknopf mithilfe von [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) einen [`click`](/de/docs/Web/API/Element/click_event)-Event-Listener zu, dessen Event-Handler-Funktion das zugehörige `<dialog>`-Element über [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) öffnet. Dann durchlaufen wir die "Schließen"-`<button>`-Referenzen, indem wir jedem einen `click`-Event-Handler zuweisen, der das `<dialog>`-Element über [`close()`](/de/docs/Web/API/HTMLDialogElement/close) schließt.

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

Das gerenderte Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("closedby-values", "100%", 300)}}

Versuchen Sie, auf jeden Button zu klicken, um einen Dialog zu öffnen. Der erste kann nur durch Klicken auf seinen "Schließen"-Button geschlossen werden. Der zweite kann auch durch eine gerätespezifische Benutzeraktion wie das Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Der dritte hat vollständiges ["light-dismiss"-Verhalten](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss), daher kann er auch durch Klicken oder Antippen außerhalb des Dialogs geschlossen werden.

### Animieren von Dialogen

`<dialog>`-Elemente sind auf [`display: none;`](/de/docs/Web/CSS/Reference/Properties/display) gesetzt, wenn sie verborgen sind und `display: block;`, wenn sie gezeigt werden, sowie aus / der {{Glossary("top_layer", "obersten Ebene")}} und dem [Barrierefreiheitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt / hinzugefügt werden. Um `<dialog>`-Elemente zu animieren, muss die {{cssxref("display")}}-Eigenschaft animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/Reference/Properties/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Konkret wird der Browser zwischen `none` und einem anderen Wert von `display` umschalten, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird.

Also zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wird der Wert bei `0%` der Animationsdauer auf `block` umgeschaltet, damit er die ganze Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wird der Wert bei `100%` der Animationsdauer auf `none` umgeschaltet, sodass er die gesamte Zeit sichtbar ist.

> [!NOTE]
> Bei der Animation mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) gesetzt werden, um das oben genannte Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig aktiv, wenn mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) animiert wird; ein entsprechender Schritt ist nicht erforderlich.

#### Übergang von Dialogelementen

Beim Animieren von `<dialog>`-Elementen mit CSS-Übergängen sind die folgenden Merkmale erforderlich:

- {{cssxref("@starting-style")}}-Regel
  - : Stellt einen Satz von Startwerten für Eigenschaften bereit, die auf dem `<dialog>` gesetzt sind, von denen Sie jedes Mal ausgehen möchten, wenn es geöffnet wird. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur dann auf, wenn eine Eigenschaft von einem Wert zu einem anderen auf einem sichtbaren Element ändert; sie werden nicht bei den ersten Stilaktualisierungen von Elementen ausgelöst oder wenn der `display`-Typ von `none` zu einem anderen Typ ändert.
- {{cssxref("display")}}-Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das `<dialog>` für die Dauer des Übergangs `display: block` bleibt (oder einen anderen sichtbaren `display`-Wert, der im offenen Zustand des Dialogs gesetzt ist), um sicherzustellen, dass die anderen Übergänge sichtbar sind.
- {{cssxref("overlay")}}-Eigenschaft
  - : Fügen Sie `overlay` in die Übergangsliste ein, um sicherzustellen, dass die Entfernung des `<dialog>` aus der obersten Ebene bis zum Abschluss des Übergangs verschoben wird, um sicherzustellen, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf den `display`- und `overlay`-Übergang (oder auf die {{cssxref("transition")}}-Kurzform), um diskrete Übergänge bei diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

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

Im CSS fügen wir einen `@starting-style`-Block ein, der die Übergangs-Startstile für die `opacity`- und `transform`-Eigenschaften, Übergangs-Endstile auf den `dialog:open`-Zustand und die Standardstile auf den `dialog`-Standardzustand enthält, zu dem der `<dialog>` zurückkehren soll, sobald er erschienen ist. Beachten Sie, wie die `transition`-Liste des `<dialog>` nicht nur diese Eigenschaften enthält, sondern auch die `display`- und `overlay`-Eigenschaften, jede mit `allow-discrete`.

Wir setzen auch einen Startstilwert für die {{cssxref("background-color")}}-Eigenschaft auf das {{cssxref("::backdrop")}}, das hinter dem `<dialog>` erscheint, wenn es geöffnet wird, um eine schöne Abdunkelungsanimation bereitzustellen. Der `dialog:open::backdrop`-Selektor wählt nur die Hintergründe von `<dialog>`-Elementen aus, wenn der Dialog geöffnet ist.

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
> In Browsern, die die {{cssxref(":open")}}-Pseudo-Klasse nicht unterstützen, können Sie den Attributselektor `dialog[open]` verwenden, um das `<dialog>`-Element zu stylen, wenn es sich im geöffneten Zustand befindet.

##### JavaScript

Das JavaScript fügt Event-Handler zu den Show- und Schließen-Buttons hinzu, die das `<dialog>` anzeigen und schließen, wenn sie geklickt werden:

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

Der Code rendert sich wie folgt:

{{ EmbedLiveSample("Transitioning dialog elements", "100%", "200") }}

> [!NOTE]
> Da `<dialog>`-Elemente jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, ändern sie sich bei jedem Eintrittsübergang von ihren `@starting-style`-Stilen zu ihren `dialog:open`-Stilen. Wenn das `<dialog>` geschlossen wird, wechselt es vom `dialog:open`-Zustand zum `dialog`-Standardzustand.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt unterschiedlich ist. Siehe unser [Beispiel für wann Startstile verwendet werden](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used).

#### dialog Schlüsselframe-Animationen

Beim Animieren eines `<dialog>` mit CSS-Schlüsselframe-Animationen sind einige Unterschiede zu beachten im Vergleich zu Übergängen:

- Sie geben kein `@starting-style` an.
- Sie schließen den `display`-Wert in einen Schlüsselframe ein; dies wird der `display`-Wert für die gesamte Animation sein, oder bis ein anderer `display`-Wert außer `none` gefunden wird.
- Sie müssen diskrete Animationen nicht explizit aktivieren; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Schlüsselframes.
- Sie müssen `overlay` innerhalb von Schlüsselframes ebenfalls nicht setzen; die `display`-Animation behandelt die Animation des `<dialog>` von sichtbar zu verborgen.

Lassen Sie uns ein Beispiel ansehen, damit Sie sehen können, wie das aussieht.

##### HTML

Zuerst enthält das HTML ein `<dialog>`-Element sowie einen Button, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Schlüsselframes, um zwischen den geschlossenen und sichtbaren Zuständen des `<dialog>` zu animieren, plus die Fade-In-Animation für den `::backdrop` des `<dialog>`. Die `<dialog>`-Animationen beinhalten die Animation von `display`, um sicherzustellen, dass die tatsächlichen sichtbaren Animationseffekte während der gesamten Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, das Verblassen des `::backdrop` heraus zu animieren — das `::backdrop` wird sofort aus dem DOM entfernt, wenn das `<dialog>` geschlossen wird, sodass es nichts zu animieren gibt.

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

Zum Schluss fügt das JavaScript Event-Handler zu den Buttons hinzu, um das `<dialog>` zu zeigen oder zu schließen:

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

Der Code rendert sich wie folgt:

{{ EmbedLiveSample("dialog keyframe animations", "100%", "200") }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalt</a>,
        Abschnittswurzel
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
      <td>Keine, sowohl der Start- als auch der End-Tag sind zwingend erforderlich.</td>
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
      <th scope="row">Implizite ARIA Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role">dialog</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA Rollen</th>
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
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) Event der `HTMLDialogElement` Schnittstelle
- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) Event der `HTMLDialogElement` Schnittstelle
- [`open`](/de/docs/Web/API/HTMLDialogElement/open) Eigenschaft der `HTMLDialogElement` Schnittstelle
- [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) globales Attribut für HTML-Elemente
- {{CSSXref("::backdrop")}} CSS Pseudo-Element
- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
