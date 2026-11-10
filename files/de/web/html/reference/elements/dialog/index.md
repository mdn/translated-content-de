---
title: "`<dialog>`: HTML-Dialogelement"
short-title: <dialog>
slug: Web/HTML/Reference/Elements/dialog
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das [HTML](/de/docs/Web/HTML)-Element **`<dialog>`** stellt ein modales oder nicht modales Dialogfenster oder eine andere interaktive Komponente dar, etwa eine schließbare Meldung, einen Inspektor oder ein Unterfenster.

## Attribute

Dieses Element unterstützt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Das Attribut `tabindex` darf nicht für das Element `<dialog>` verwendet werden. Siehe [Zusätzliche Hinweise](#zusätzliche_hinweise).

- `closedby`
  - : Gibt an, durch welche Arten von Benutzeraktionen das Element `<dialog>` geschlossen werden kann. Das Attribut unterscheidet drei Möglichkeiten:
    - Eine _Light-Dismiss-Benutzeraktion_: Das `<dialog>` wird geschlossen, wenn außerhalb davon geklickt oder getippt wird. Dies entspricht dem [„Light-Dismiss“-Verhalten von Popovers im Zustand „auto“](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss).
    - Eine _plattformspezifische Benutzeraktion_, etwa das Drücken der <kbd>Esc</kbd>-Taste auf Desktop-Plattformen oder eine „Zurück“- bzw. „Schließen“-Geste auf mobilen Plattformen.
    - Ein von Entwicklern festgelegter Mechanismus, etwa ein {{htmlelement("button")}} mit einem [`click`](/de/docs/Web/API/Element/click_event)-Handler, der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) aufruft, oder das Absenden eines {{htmlelement("form")}}.

    Mögliche Werte sind:
    - `any`
      - : Der Dialog kann mit jeder der drei Methoden geschlossen werden.
    - `closerequest`
      - : Der Dialog kann durch eine plattformspezifische Benutzeraktion oder einen von Entwicklern festgelegten Mechanismus geschlossen werden.
    - `none`
      - : Der Dialog kann nur durch einen von Entwicklern festgelegten Mechanismus geschlossen werden.

    Wenn für das Element `<dialog>` kein gültiger `closedby`-Wert angegeben ist, gilt Folgendes:
    - Wurde es mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet, verhält es sich, als wäre der Wert `"closerequest"`.
    - Andernfalls verhält es sich, als wäre der Wert `"none"`.

- `open`
  - : Zeigt an, dass das Dialogfenster aktiv ist und mit ihm interagiert werden kann. Ist das Attribut `open` nicht gesetzt, ist das Dialogfenster für Benutzer nicht sichtbar.
    Es wird empfohlen, Dialoge mit der Methode `.show()` oder `.showModal()` statt mit dem Attribut `open` anzuzeigen. Wird ein `<dialog>` mit dem Attribut `open` geöffnet, ist es nicht modal.

    > [!NOTE]
    > Sie können nicht modale Dialogfenster zwar durch Hinzufügen und Entfernen des Attributs `open` öffnen und schließen, dieser Ansatz wird jedoch nicht empfohlen. Weitere Informationen finden Sie unter [`open`](/de/docs/Web/API/HTMLDialogElement/open).

## Beschreibung

Mit dem HTML-Element `<dialog>` lassen sich sowohl modale als auch nicht modale Dialogfenster erstellen. Modale Dialogfenster verhindern die Interaktion mit anderen Elementen der Benutzeroberfläche und machen den Rest der Seite [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert#:~:text=When,clicked). Nicht modale Dialogfenster erlauben dagegen weiterhin die Interaktion mit dem Rest der Seite.

### Dialoge mit JavaScript steuern

Mit JavaScript können Sie das Element `<dialog>` anzeigen und schließen.
Verwenden Sie die Methode [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), um einen modalen Dialog anzuzeigen, und die Methode [`show()`](/de/docs/Web/API/HTMLDialogElement/show), um einen nicht modalen Dialog anzuzeigen. Das Dialogfenster kann mit der Methode [`close()`](/de/docs/Web/API/HTMLDialogElement/close) oder beim Absenden eines im Element `<dialog>` verschachtelten `<form>` mit der Methode [`dialog`](/de/docs/Web/HTML/Reference/Elements/form#method) geschlossen werden.
Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

### Modale Dialoge mit Invoker Commands

Modale Dialoge können deklarativ über die HTML-Attribute [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) der [Invoker Commands API](/de/docs/Web/API/Invoker_Commands_API) geöffnet und geschlossen werden. Diese Attribute können für {{htmlelement("button")}}-Elemente gesetzt werden.

Das Attribut `command` legt fest, welcher Befehl beim Klicken auf das Element `<button>` gesendet wird. `commandfor` legt die `id` des Zieldialogs fest.
Für Dialoge können die Befehle [`"show-modal"`](/de/docs/Web/HTML/Reference/Elements/button#show-modal), [`"close"`](/de/docs/Web/HTML/Reference/Elements/button#close) und [`"request-close"`](/de/docs/Web/HTML/Reference/Elements/button#request-close) gesendet werden.

Das folgende HTML zeigt, wie Sie die Attribute auf ein `<button>`-Element anwenden, damit es beim Drücken ein modales `<dialog>` mit der `id` „my-dialog“ öffnet.

```html
<button command="show-modal" commandfor="my-dialog">Open dialog</button>

<dialog id="my-dialog">
  <p>This dialog was opened using an invoker command.</p>
  <button commandfor="my-dialog" command="close">Close</button>
</dialog>
```

### Nicht modale Dialoge mit Popover-Befehlen

Nicht modale Dialoge können deklarativ über die HTML-Attribute [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) der [Popover API](/de/docs/Web/API/Popover_API) geöffnet, geschlossen und zwischen diesen Zuständen umgeschaltet werden. Die Attribute können für {{htmlelement("button")}}- und {{htmlelement("input")}}-Elemente definiert werden.

Das `<dialog>` muss durch Hinzufügen des Attributs `popover` in ein Popover umgewandelt werden.
Anschließend können Sie mit `popovertarget` auf einem Button oder Input das Ziel-Popover angeben und mit `popovertargetaction` festlegen, welche Aktion beim Klicken auf den Button am Popover ausgeführt wird.
Da der Dialog ein Popover ist, ist er nicht modal. Sie können ihn daher durch Klicken außerhalb des Dialogs schließen.

Das folgende HTML zeigt, wie Sie die Attribute auf ein `<button>`-Element anwenden, damit es beim Drücken ein nicht modales `<dialog>` mit der `id` „my-dialog“ ein- und ausblendet.

```html
<button popovertarget="my-dialog">Open dialog</button>

<dialog id="my-dialog" popover>
  <p>This dialog was opened using a popovertargetaction attribute.</p>
  <button popovertarget="my-dialog" popovertargetaction="hide">Close</button>
</dialog>
```

Die Popover API stellt außerdem Eigenschaften bereit, mit denen sich der Zustand in JavaScript auslesen und festlegen lässt.

### Dialoge schließen

Für jedes `<dialog>`-Element muss eine Möglichkeit zum Schließen bereitgestellt werden. Stellen Sie sicher, dass sie auch auf Geräten ohne physische Tastatur funktioniert.

Es gibt zahlreiche Möglichkeiten, einen Dialog zu schließen:

- Senden Sie das Formular innerhalb des Elements `<dialog>` ab, wobei für das Element `<form>` `method="dialog"` gesetzt ist (siehe das Beispiel [Das Dialogattribut `open` verwenden](#using_the_dialog_open_attribute)).
- Klicken Sie außerhalb des Dialogbereichs, wenn „Light Dismiss“ aktiviert ist (siehe das Beispiel [HTML-Attribute der Popover API](#html-attribute_der_popover_api)).
- Drücken Sie die <kbd>Esc</kbd>-Taste, sofern dies für den Dialog aktiviert ist (siehe das Beispiel [HTML-Attribute der Popover API](#html-attribute_der_popover_api)).
- Rufen Sie die Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) auf (siehe das [Beispiel für einen modalen Dialog](#einen_modalen_dialog_erstellen)).

### CSS-Styling

Ein `<dialog>` kann wie jedes andere Element über seinen Elementnamen ausgewählt werden. Sein Zustand lässt sich außerdem mit Pseudoklassen wie [`:modal`](/de/docs/Web/CSS/Reference/Selectors/:modal) und [`:open`](/de/docs/Web/CSS/Reference/Selectors/:open) abgleichen.

Mit dem CSS-Pseudoelement {{cssxref('::backdrop')}} können Sie den Hintergrund eines modalen Dialogs gestalten. Dieser wird hinter dem Element `<dialog>` angezeigt, wenn der Dialog mit der Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) angezeigt wird.
Mit dem Pseudoelement lässt sich beispielsweise der inerte Inhalt hinter dem modalen Dialog weichzeichnen, abdunkeln oder auf andere Weise verdecken.

### Zusätzliche Hinweise

- HTML-{{HTMLElement("form")}}-Elemente können ein Dialogfenster schließen, wenn sie das Attribut `method="dialog"` besitzen oder wenn für den Button zum Absenden des Formulars [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input#formmethod) gesetzt ist. Wird ein `<form>` innerhalb eines `<dialog>` mit der Methode `dialog` abgesendet, schließt sich das Dialogfenster. Die Zustände der Formularelemente werden gespeichert, aber nicht übermittelt, und die Eigenschaft [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) wird auf den Wert des betätigten Buttons gesetzt.
- Das Attribut [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus) sollte dem Element hinzugefügt werden, mit dem Benutzer unmittelbar nach dem Öffnen eines modalen Dialogs interagieren sollen. Wenn kein anderes Element eine unmittelbarere Interaktion erfordert, empfiehlt es sich, `autofocus` dem Schließen-Button im Dialog zuzuweisen. Alternativ kann es dem Dialog selbst zugewiesen werden, wenn Benutzer ihn zum Schließen anklicken oder aktivieren sollen.
- Fügen Sie dem Element `<dialog>` nicht die Eigenschaft `tabindex` hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Der Inhalt des Dialogs, einschließlich des darin enthaltenen Schließen-Buttons, kann den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Bei der Implementierung eines Dialogs ist es wichtig, die geeignete Position für den Fokus festzulegen. Wird ein `<dialog>` mit [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet, erhält das erste darin verschachtelte fokussierbare Element den Fokus. Indem Sie mit dem Attribut [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus) ausdrücklich festlegen, wo der Fokus anfänglich platziert werden soll, können Sie sicherstellen, dass er auf dem für den jeweiligen Dialog am besten geeigneten Element liegt. Im Zweifelsfall kann das Element `<dialog>` selbst die beste anfängliche Fokusposition sein. Das gilt insbesondere, wenn der Inhalt eines Dialogs beim Aufrufen dynamisch gerendert wird und daher nicht immer bekannt ist, welches Element zunächst den Fokus erhalten kann.

Stellen Sie sicher, dass Benutzer den Dialog schließen können. Am zuverlässigsten gelingt dies mit einem ausdrücklich dafür vorgesehenen Button, etwa zum Bestätigen, Abbrechen oder Schließen.

Ein mit der Methode `showModal()` aufgerufener Dialog kann standardmäßig durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Ein nicht modaler Dialog wird standardmäßig nicht mit der <kbd>Esc</kbd>-Taste geschlossen. Je nachdem, wofür er verwendet wird, ist dieses Verhalten möglicherweise auch nicht erwünscht. Benutzer, die eine Tastatur verwenden, erwarten, dass sich modale Dialoge mit der <kbd>Esc</kbd>-Taste schließen lassen. Stellen Sie sicher, dass dieses Verhalten implementiert ist und erhalten bleibt. Sind mehrere modale Dialoge geöffnet, sollte das Drücken der <kbd>Esc</kbd>-Taste nur den zuletzt angezeigten Dialog schließen. Bei Verwendung von `<dialog>` stellt der Browser dieses Verhalten bereit.

Dialoge können zwar auch mit anderen Elementen erstellt werden, das native Element `<dialog>` bietet jedoch Funktionen für Benutzerfreundlichkeit und Barrierefreiheit, die Sie bei Verwendung anderer Elemente für denselben Zweck nachbilden müssen. Wenn Sie einen eigenen Dialog implementieren, stellen Sie sicher, dass alle erwarteten Standardverhaltensweisen unterstützt werden und die Empfehlungen zur korrekten Beschriftung eingehalten werden.

Browser stellen das Element `<dialog>` ähnlich wie benutzerdefinierte Dialoge dar, die das ARIA-Attribut [role="dialog"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) verwenden. `<dialog>`-Elemente, die mit der Methode `showModal()` aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal). Dagegen werden `<dialog>`-Elemente, die mit der Methode `show()` aufgerufen, über das Attribut `open` angezeigt oder durch Ändern des standardmäßigen `display`-Werts eines `<dialog>` sichtbar gemacht werden, als `[aria-modal="false"]` dargestellt. Bei der Implementierung modaler Dialoge sollte alles außer dem `<dialog>` und seinem Inhalt mithilfe des Attributs [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) inert gemacht werden. Wenn Sie `<dialog>` zusammen mit der Methode `HTMLDialogElement.showModal()` verwenden, übernimmt der Browser dieses Verhalten.

## Beispiele

### HTML-Attribute der Invoker Commands API

Dieses Beispiel zeigt, wie Sie mit den HTML-Attributen [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) der [Invoker Commands API](/de/docs/Web/API/Invoker_Commands_API) einen modalen Dialog öffnen und schließen können.

Zuerst deklarieren wir ein {{htmlelement("button")}}-Element, setzen das Attribut `command` auf [`"show-modal"`](/de/docs/Web/HTML/Reference/Elements/button#show-modal) und das Attribut `commandfor` auf die `id` des zu öffnenden Dialogs (`my-dialog`).
Anschließend deklarieren wir ein `<dialog>`-Element, das einen `<button>` zum Schließen enthält. Dieser Button sendet den Befehl [`"close"`](/de/docs/Web/HTML/Reference/Elements/button#close) an dieselbe Dialog-`id`.

```html
<button command="show-modal" commandfor="my-dialog">Open dialog</button>

<dialog id="my-dialog">
  <p>This dialog was opened using an invoker command.</p>
  <button commandfor="my-dialog" command="close">Close</button>
</dialog>
```

#### Ergebnis

Öffnen Sie den Dialog, indem Sie auf den Button „Dialog öffnen“ drücken.
Sie können ihn schließen, indem Sie den Button „Schließen“ auswählen oder die <kbd>Esc</kbd>-Taste drücken.

{{EmbedLiveSample("invoker_command_api_html_attributes", "100%", 200)}}

### HTML-Attribute der Popover API

Dieses Beispiel zeigt, wie Sie mit den HTML-Attributen [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover), [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) der [Popover API](/de/docs/Web/API/Popover_API) einen nicht modalen Dialog öffnen und schließen können.

Durch Hinzufügen des Attributs `popover` wird das `<dialog>` in ein Popover umgewandelt.
Da wir für das Attribut keinen Wert angegeben haben, wird der Standardwert `"auto"` verwendet.
Dadurch wird das „Light-Dismiss“-Verhalten aktiviert: Der Dialog kann durch Klicken außerhalb des Dialogs oder durch Drücken von <kbd>Esc</kbd> geschlossen werden.
Stattdessen könnten wir `popover="manual"` setzen, um das „Light-Dismiss“-Verhalten zu deaktivieren. In diesem Fall müsste der Dialog mit dem Button „Schließen“ geschlossen werden.

Beachten Sie, dass wir für den `<button>`, der den Dialog öffnet, kein Attribut `popovertargetaction` angegeben haben.
Das ist hier nicht erforderlich, da sein Standardwert `toggle` ist. Beim Klicken auf den Button wird dadurch zwischen geöffnetem und geschlossenem Dialog umgeschaltet.

```html
<button popovertarget="my-dialog">Open dialog</button>

<dialog id="my-dialog" popover>
  <p>This dialog was opened using a popovertargetaction attribute.</p>
  <button popovertarget="my-dialog" popovertargetaction="hide">Close</button>
</dialog>
```

#### Ergebnis

Öffnen Sie den Dialog, indem Sie auf den Button „Dialog öffnen“ drücken.
Sie können ihn schließen, indem Sie den Button „Schließen“ auswählen oder die <kbd>Esc</kbd>-Taste drücken.
Da er nicht modal ist, können Sie ihn auch durch Klicken außerhalb des Dialogs schließen.

{{EmbedLiveSample("Popover API HTML attributes", "100%", 200)}}

### Das Dialogattribut `open` verwenden

Dieses Beispiel zeigt, wie Sie das boolesche Attribut `open` für ein `<dialog>`-Element setzen, um einen rein mit HTML erstellten, nicht modalen Dialog zu erzeugen, der bereits beim Laden der Seite geöffnet ist.

Der Dialog lässt sich durch Klicken auf den Button „OK“ schließen, weil das Attribut `method` im Element `<form>` auf `"dialog"` gesetzt ist.
In diesem Fall ist zum Schließen des Formulars kein JavaScript erforderlich.

```html
<dialog open>
  <p>Greetings, one and all!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

#### Ergebnis

Dieser Dialog ist aufgrund des Attributs `open` anfänglich geöffnet und nicht modal.
Nach dem Klicken auf „OK“ wird der Dialog geschlossen und der Ergebnisbereich bleibt leer.

{{EmbedLiveSample("using_the_dialog_open_attribute", "100%", 200)}}

> [!NOTE]
> Laden Sie die Seite neu, um die Ausgabe zurückzusetzen.

Nach dem Schließen des Dialogs steht keine Methode bereit, um ihn erneut zu öffnen. Zum Anzeigen nicht modaler Dialoge wird die Methode [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show) bevorzugt.
Zwar lässt sich die Anzeige des Dialogs durch Hinzufügen oder Entfernen des booleschen Attributs `open` umschalten, dies wird jedoch nicht empfohlen.

### Einen modalen Dialog erstellen

Dieses Beispiel zeigt einen modalen Dialog mit einem [Farbverlauf](/de/docs/Web/CSS/Reference/Values/gradient) als Hintergrund. Die Methode `.showModal()` öffnet den modalen Dialog, wenn der Button „Dialog anzeigen“ betätigt wird. Der Dialog kann durch Drücken der <kbd>Esc</kbd>-Taste oder über die Methode `close()` geschlossen werden, wenn der Button „Schließen“ innerhalb des Dialogs betätigt wird.

Wenn sich ein Dialog öffnet, legt der Browser den Fokus standardmäßig auf das erste fokussierbare Element innerhalb des Dialogs. In diesem Beispiel wird das Attribut [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus) auf den Button „Schließen“ angewendet. Dadurch erhält er beim Öffnen des Dialogs den Fokus, da wir erwarten, dass Benutzer unmittelbar nach dem Öffnen mit diesem Element interagieren.

#### HTML

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a groovy backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Mit dem Pseudoelement {{cssxref('::backdrop')}} können wir den Hintergrund des Dialogs gestalten.

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

Der Dialog wird mit der Methode `.showModal()` modal geöffnet und mit den Methoden `.close()` oder `.requestClose()` geschlossen.

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

Wenn der modale Dialog angezeigt wird, erscheint er über allen anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des modalen Dialogs ist inert, und Interaktionen außerhalb des Dialogs werden blockiert. Beachten Sie, dass bei geöffnetem Dialog keine Interaktion mit dem Dokument möglich ist – abgesehen vom Dialog selbst. Der Button „Dialog anzeigen“ wird durch den nahezu undurchsichtigen Hintergrund des Dialogs weitgehend verdeckt und ist inert.

### Den Rückgabewert des Dialogs verarbeiten

Dieses Beispiel zeigt die Eigenschaft [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des Elements `<dialog>` und wie Sie einen modalen Dialog mithilfe eines Formulars schließen. Standardmäßig ist `returnValue` eine leere Zeichenfolge oder, falls vorhanden, der Wert des Buttons, mit dem das Formular innerhalb des Elements `<dialog>` abgesendet wird.

In diesem Beispiel wird ein modaler Dialog geöffnet, wenn der Button „Dialog anzeigen“ betätigt wird. Der Dialog enthält ein Formular mit einem {{HTMLElement("select")}}-Element und drei {{HTMLElement("button")}}-Elementen, für die standardmäßig `type="submit"` gilt. Nur der Button „Abbrechen“ besitzt ein ausdrücklich gesetztes Attribut `value`, dessen Wert automatisch verwendet wird, um `returnValue` des Dialogs festzulegen.

#### HTML

```html
<!-- A modal dialog containing a form -->
<dialog id="favDialog">
  <form>
    <p>
      <label>
        Favorite animal:
        <select>
          <option value="nothing">Choose…</option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </label>
    </p>
    <div>
      <button value="cancel" formmethod="dialog">Cancel</button>
      <button id="requestCloseBtn">Cancel with requestClose</button>
      <button id="confirmBtn">Confirm</button>
    </div>
  </form>
</dialog>
<p>
  <button id="showDialog">Show the dialog</button>
</p>
<output></output>
```

#### JavaScript

Der Dialog wird über einen Event-Listener auf dem Button „Dialog anzeigen“ geöffnet, der beim Klicken [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) aufruft.

Der Dialog wird geschlossen, wenn auf den Button „Abbrechen“ geklickt wird, weil der `<button>` das Attribut [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input/submit#formmethod) enthält.
Wenn die Methode eines Formulars [`dialog`](#zusätzliche_hinweise) ist, wird der Zustand des Formulars gespeichert, aber nicht übermittelt, und der Dialog wird geschlossen. Das Attribut überschreibt die standardmäßige Methode {{HTTPMethod("GET")}} des {{HTMLElement("form")}}.
Ohne `action` bewirkt das Absenden des Formulars mit der standardmäßigen Methode {{HTTPMethod("GET")}}, dass die Seite neu geladen wird.
Bei den beiden anderen Buttons verwenden wir JavaScript, um das Absenden mit [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) zu verhindern und den Dialog mit [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) oder [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose) zu schließen.

Wird der Dialog durch Drücken der <kbd>Esc</kbd>-Taste oder über den `requestClose()`-Button geschlossen, wird zunächst ein `cancel`-Event ausgelöst. Dadurch kann Code das Schließen in bestimmten Fällen verhindern. In diesem Beispiel bricht der `cancel`-Event-Listener das Event nicht ab, sondern setzt lediglich `returnValue` auf `"cancelEvent"`. Dieser Wert ist nur beim Drücken der <kbd>Esc</kbd>-Taste zu beobachten, weil das an `requestClose()` übergebene Argument `"requestClose"` den Wert von `returnValue` unmittelbar vor dem Aufruf des `close`-Event-Listeners überschreibt.

Unabhängig davon, wie der Dialog geschlossen wird, aktualisiert der `close`-Event-Listener den Text im {{HTMLElement("output")}}-Element mit dem endgültigen `returnValue`.

```js
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const requestCloseBtn = favDialog.querySelector("#requestCloseBtn");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

requestCloseBtn.addEventListener("click", (event) => {
  event.preventDefault();
  favDialog.requestClose("requestClose");
});

// Close the dialog with the selected animal
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  favDialog.close(selectEl.value);
});

// From Escape key or requestClose()
favDialog.addEventListener("cancel", () => {
  favDialog.returnValue = "cancelEvent";
});

// Display the return value whenever the dialog closes
favDialog.addEventListener("close", () => {
  outputBox.value = `ReturnValue: ${favDialog.returnValue}.`;
});
```

#### Ergebnis

{{EmbedLiveSample("Handling the return value from the dialog", "100%", 300)}}

### Einen Dialog mit einem erforderlichen Formulareingabefeld schließen

Wenn ein Formular innerhalb eines Dialogs ein erforderliches Eingabefeld enthält, lässt der User Agent das Schließen des Dialogs erst zu, nachdem Sie einen Wert dafür eingegeben haben. Um einen solchen Dialog zu schließen, verwenden Sie entweder das Attribut [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate) für den Schließen-Button oder rufen beim Klicken auf diesen Button die Methode `close()` des Dialogobjekts auf.

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

An der Ausgabe sehen wir, dass sich der Dialog mit dem Button _Normal schließen_ nicht schließen lässt. Er kann jedoch geschlossen werden, wenn wir die Formularvalidierung mit dem Attribut `formnovalidate` auf dem Button _Abbrechen_ umgehen. Auch `dialog.close()` schließt einen solchen Dialog programmgesteuert.

### Unterschiedliche `closedby`-Verhaltensweisen vergleichen

Dieses Beispiel zeigt die Unterschiede zwischen den verschiedenen Werten des Attributs [`closedby`](#closedby).

#### HTML

Wir stellen drei {{htmlelement("button")}}-Elemente und drei `<dialog>`-Elemente bereit. Jeder Button wird so programmiert, dass er einen anderen Dialog öffnet. Die Dialoge demonstrieren jeweils das Verhalten eines der drei Werte des Attributs `closedby`: `none`, `closerequest` und `any`. Beachten Sie, dass jedes `<dialog>`-Element einen `<button>` zum Schließen enthält.

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

Hier weisen wir verschiedenen Variablen Referenzen auf die steuernden `<button>`-Elemente, die `<dialog>`-Elemente und die `<button>`-Elemente zum Schließen innerhalb der Dialoge zu. Zuerst weisen wir jedem steuernden Button mit [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) einen [`click`](/de/docs/Web/API/Element/click_event)-Event-Listener zu. Dessen Event-Handler-Funktion öffnet das zugehörige `<dialog>`-Element über [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal). Danach durchlaufen wir die Referenzen auf die `<button>`-Elemente zum Schließen und weisen jedem einen `click`-Event-Handler zu, der das jeweilige `<dialog>`-Element über [`close()`](/de/docs/Web/API/HTMLDialogElement/close) schließt.

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

{{EmbedLiveSample("closedbyvalues", "100%", 300)}}

Klicken Sie auf die einzelnen Buttons, um jeweils einen Dialog zu öffnen. Der erste lässt sich nur durch Klicken auf seinen Button „Schließen“ schließen. Der zweite lässt sich zusätzlich durch eine gerätespezifische Benutzeraktion schließen, etwa durch Drücken der <kbd>Esc</kbd>-Taste. Der dritte bietet vollständiges [„Light-Dismiss“-Verhalten](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) und kann daher auch durch Klicken oder Tippen außerhalb des Dialogs geschlossen werden.

### Dialoge animieren

Ausgeblendete `<dialog>`-Elemente haben den Wert [`display: none;`](/de/docs/Web/CSS/Reference/Properties/display), angezeigte den Wert `display: block;`. Außerdem werden sie aus der {{Glossary("top_layer", "obersten Ebene")}} und dem [Barrierefreiheitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt beziehungsweise diesen hinzugefügt. Damit `<dialog>`-Elemente animiert werden können, muss die Eigenschaft {{cssxref("display")}} daher animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/Reference/Properties/display#browser_compatibility) animieren `display` mit einer Variante des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Konkret wechselt der Browser zwischen `none` und einem anderen Wert von `display` so, dass der animierte Inhalt während der gesamten Animationsdauer sichtbar ist.

Zum Beispiel:

- Bei einer Animation von `display` von `none` nach `block` (oder zu einem anderen sichtbaren `display`-Wert) wechselt der Wert bei `0%` der Animationsdauer zu `block`, damit der Inhalt durchgehend sichtbar ist.
- Bei einer Animation von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) nach `none` wechselt der Wert erst bei `100%` der Animationsdauer zu `none`, damit der Inhalt bis dahin sichtbar bleibt.

> [!NOTE]
> Bei Animationen mit [CSS-Transitions](/de/docs/Web/CSS/Guides/Transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) gesetzt sein, damit das oben beschriebene Verhalten möglich ist. Bei [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) ist dieses Verhalten standardmäßig verfügbar; ein entsprechender Schritt ist nicht erforderlich.

#### `<dialog>`-Elemente mit Transitions animieren

Wenn Sie `<dialog>`-Elemente mit CSS-Transitions animieren, sind die folgenden Funktionen erforderlich:

- {{cssxref("@starting-style")}}-At-Regel
  - : Stellt Anfangswerte für die Eigenschaften des `<dialog>` bereit, von denen aus bei jedem Öffnen eine Transition stattfinden soll. Dies ist nötig, um unerwartetes Verhalten zu vermeiden. CSS-Transitions treten standardmäßig nur auf, wenn sich der Wert einer Eigenschaft bei einem sichtbaren Element ändert. Bei der ersten Aktualisierung der Styles eines Elements oder beim Wechsel des `display`-Typs von `none` zu einem anderen Typ werden sie nicht ausgelöst.
- Eigenschaft {{cssxref("display")}}
  - : Fügen Sie `display` zur Liste der Transitions hinzu, damit das `<dialog>` während der gesamten Transition `display: block` behält (oder einen anderen sichtbaren `display`-Wert, der für den geöffneten Zustand festgelegt wurde). So bleiben die anderen Transitions sichtbar.
- Eigenschaft {{cssxref("overlay")}}
  - : Nehmen Sie `overlay` in die Liste der Transitions auf, damit das `<dialog>` erst nach Abschluss der Transition aus der obersten Ebene entfernt wird. Auch dadurch bleibt die Transition sichtbar.
- Eigenschaft {{cssxref("transition-behavior")}}
  - : Setzen Sie `transition-behavior: allow-discrete` für die Transitions von `display` und `overlay` (oder für die Kurzschreibweise {{cssxref("transition")}}), um diskrete Transitions für diese beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Das folgende kurze Beispiel zeigt, wie dies aussehen kann.

##### HTML

Das HTML enthält ein `<dialog>`-Element und einen Button, mit dem der Dialog angezeigt wird. Zusätzlich enthält das `<dialog>`-Element einen weiteren Button, mit dem es sich schließen lässt.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS verwenden wir einen `@starting-style`-Block, der die Anfangswerte der Transition für die Eigenschaften `opacity` und `transform` definiert. Außerdem definieren wir Endwerte für den Zustand `dialog:open` und Standardwerte für den Zustand `dialog`, zu denen nach dem Anzeigen des `<dialog>` zurückgewechselt wird. Beachten Sie, dass die `transition`-Liste des `<dialog>` nicht nur diese Eigenschaften enthält, sondern auch `display` und `overlay`, jeweils mit `allow-discrete`.

Wir legen außerdem einen Anfangswert für die Eigenschaft {{cssxref("background-color")}} des Pseudoelements {{cssxref("::backdrop")}} fest. Es erscheint beim Öffnen hinter dem `<dialog>` und ermöglicht eine sanfte Abdunklungsanimation. Der Selektor `dialog:open::backdrop` wählt nur die Hintergründe von `<dialog>`-Elementen aus, deren Dialog geöffnet ist.

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
> In Browsern, die die Pseudoklasse {{cssxref(":open")}} nicht unterstützen, können Sie den Attributselektor `dialog[open]` verwenden, um das Element `<dialog>` im geöffneten Zustand zu gestalten.

##### JavaScript

Das JavaScript fügt den Buttons zum Anzeigen und Schließen Event-Handler hinzu, die das `<dialog>` beim Klicken öffnen beziehungsweise schließen:

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
> Da `<dialog>`-Elemente bei jedem Anzeigen von `display: none` zu `display: block` wechseln, durchläuft das `<dialog>` bei jeder Öffnungs-Transition den Übergang von seinen `@starting-style`-Styles zu seinen `dialog:open`-Styles. Beim Schließen wechselt es vom Zustand `dialog:open` zum standardmäßigen Zustand `dialog`.
>
> In solchen Fällen können sich die Style-Transitions beim Öffnen und Schließen unterscheiden. Ein Beispiel dafür finden Sie unter [Demonstration, wann Anfangs-Styles verwendet werden](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used).

#### Keyframe-Animationen für Dialoge

Bei der Animation eines `<dialog>` mit CSS-Keyframe-Animationen gibt es einige Unterschiede gegenüber Transitions:

- Sie geben keinen `@starting-style` an.
- Sie nehmen den Wert von `display` in einen Keyframe auf. Dieser `display`-Wert gilt für die gesamte Animation oder bis ein anderer `display`-Wert als `none` erreicht wird.
- Sie müssen diskrete Animationen nicht ausdrücklich aktivieren; innerhalb von Keyframes gibt es keine Entsprechung zu `allow-discrete`.
- Sie müssen auch `overlay` nicht innerhalb von Keyframes festlegen. Die Animation von `display` übernimmt den Übergang des `<dialog>` vom sichtbaren zum ausgeblendeten Zustand.

Sehen wir uns ein Beispiel an.

##### HTML

Zunächst enthält das HTML ein `<dialog>`-Element und einen Button, mit dem der Dialog angezeigt wird. Zusätzlich enthält das `<dialog>`-Element einen weiteren Button, mit dem es sich schließen lässt.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Keyframes für die Animation zwischen dem geschlossenen und dem angezeigten Zustand des `<dialog>` sowie eine Einblendanimation für dessen Hintergrund. Die `<dialog>`-Animationen beziehen `display` ein, damit die sichtbaren Animationseffekte während der gesamten Dauer sichtbar bleiben. Beachten Sie, dass sich das Ausblenden des Hintergrunds nicht animieren ließ: Beim Schließen des `<dialog>` wird der Hintergrund sofort aus dem DOM entfernt, sodass nichts mehr animiert werden kann.

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

Abschließend fügt das JavaScript den Buttons Event-Handler hinzu, damit sich das `<dialog>` anzeigen und schließen lässt:

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

## Technische Übersicht

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
      <th scope="row">Weglassen von Tags</th>
      <td>Keines; sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternelemente</th>
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

- Schnittstelle [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)
- Event [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) der Schnittstelle `HTMLDialogElement`
- Event [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) der Schnittstelle `HTMLDialogElement`
- Eigenschaft [`open`](/de/docs/Web/API/HTMLDialogElement/open) der Schnittstelle `HTMLDialogElement`
- Globales Attribut [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) für HTML-Elemente
- CSS-Pseudoelement {{CSSXref("::backdrop")}}
- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
