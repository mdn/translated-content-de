---
title: "`<dialog>`: HTML-Dialogelement"
short-title: <dialog>
slug: Web/HTML/Reference/Elements/dialog
l10n:
  sourceCommit: 31e1fcaa50ff25bb27d7093758fa7a7088fff1e0
---

Das [HTML](/de/docs/Web/HTML)-Element **`<dialog>`** stellt ein modales oder nicht modales Dialogfeld oder eine andere interaktive Komponente dar, etwa eine schließbare Benachrichtigung, einen Inspektor oder ein Unterfenster.

## Attribute

Dieses Element unterstützt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Das Attribut `tabindex` darf für das Element `<dialog>` nicht verwendet werden. Siehe [Zusätzliche Hinweise](#zusätzliche_hinweise).

- `closedby`
  - : Gibt an, mit welchen Arten von Benutzeraktionen das Element `<dialog>` geschlossen werden kann. Das Attribut unterscheidet drei Möglichkeiten:
    - Eine _Light-Dismiss-Benutzeraktion_, bei der `<dialog>` geschlossen wird, wenn außerhalb des Elements geklickt oder getippt wird. Dies entspricht dem [„Light-Dismiss“-Verhalten von Popovers im Zustand „auto“](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss).
    - Eine _plattformspezifische Benutzeraktion_, beispielsweise das Drücken der Taste <kbd>Esc</kbd> auf Desktop-Plattformen oder eine Zurück- beziehungsweise Schließen-Geste auf Mobilgeräten.
    - Ein von Entwicklern festgelegter Mechanismus, beispielsweise ein {{htmlelement("button")}} mit einem [`click`](/de/docs/Web/API/Element/click_event)-Handler, der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) aufruft, oder das Absenden eines {{htmlelement("form")}}.

    Mögliche Werte sind:
    - `any`
      - : Das Dialogfeld kann mit jeder der drei Möglichkeiten geschlossen werden.
    - `closerequest`
      - : Das Dialogfeld kann durch eine plattformspezifische Benutzeraktion oder einen von Entwicklern festgelegten Mechanismus geschlossen werden.
    - `none`
      - : Das Dialogfeld kann nur durch einen von Entwicklern festgelegten Mechanismus geschlossen werden.

    Wenn für das Element `<dialog>` kein gültiger `closedby`-Wert angegeben ist, gilt Folgendes:
    - Wurde es mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet, verhält es sich so, als wäre der Wert `"closerequest"`.
    - Andernfalls verhält es sich so, als wäre der Wert `"none"`.

- `open`
  - : Zeigt an, dass das Dialogfeld aktiv ist und mit ihm interagiert werden kann. Ist das Attribut `open` nicht gesetzt, ist das Dialogfeld für Benutzer nicht sichtbar.
    Es wird empfohlen, Dialogfelder mit der Methode `.show()` oder `.showModal()` statt mit dem Attribut `open` anzuzeigen. Wird ein `<dialog>` über das Attribut `open` geöffnet, ist es nicht modal.

    > [!NOTE]
    > Sie können zwar zwischen dem geöffneten und dem geschlossenen Zustand eines nicht modalen Dialogfelds wechseln, indem Sie das Attribut `open` hinzufügen oder entfernen. Diese Vorgehensweise wird jedoch nicht empfohlen. Weitere Informationen finden Sie unter [`open`](/de/docs/Web/API/HTMLDialogElement/open).

## Beschreibung

Mit dem HTML-Element `<dialog>` lassen sich sowohl modale als auch nicht modale Dialogfelder erstellen.
Modale Dialogfelder verhindern die Interaktion mit anderen Elementen der Benutzeroberfläche und machen den Rest der Seite [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert#:~:text=When,clicked). Nicht modale Dialogfelder erlauben dagegen weiterhin die Interaktion mit dem Rest der Seite.

### Dialogfelder mit JavaScript steuern

Mit JavaScript können Sie das Element `<dialog>` anzeigen und schließen.
Verwenden Sie die Methode [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), um ein modales Dialogfeld anzuzeigen, und die Methode [`show()`](/de/docs/Web/API/HTMLDialogElement/show), um ein nicht modales Dialogfeld anzuzeigen. Das Dialogfeld lässt sich mit der Methode [`close()`](/de/docs/Web/API/HTMLDialogElement/close) oder beim Absenden eines im Element `<dialog>` verschachtelten `<form>` mit der Methode [`dialog`](/de/docs/Web/HTML/Reference/Elements/form#method) schließen.
Modale Dialogfelder können auch durch Drücken der Taste <kbd>Esc</kbd> geschlossen werden.

### Modale Dialogfelder mit Invoker-Befehlen

Modale Dialogfelder können deklarativ mithilfe der HTML-Attribute [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) der [Invoker Commands API](/de/docs/Web/API/Invoker_Commands_API) geöffnet und geschlossen werden. Diese Attribute können für {{htmlelement("button")}}-Elemente gesetzt werden.

Das Attribut `command` legt fest, welcher Befehl beim Klicken auf das Element `<button>` gesendet wird. `commandfor` gibt die `id` des Zieldialogfelds an.
An Dialogfelder können die Befehle [`"show-modal"`](/de/docs/Web/HTML/Reference/Elements/button#show-modal), [`"close"`](/de/docs/Web/HTML/Reference/Elements/button#close) und [`"request-close"`](/de/docs/Web/HTML/Reference/Elements/button#request-close) gesendet werden.

Das folgende HTML zeigt, wie Sie die Attribute auf ein `<button>`-Element anwenden, damit es beim Betätigen ein modales `<dialog>` mit der `id` „my-dialog“ öffnet.

```html
<button command="show-modal" commandfor="my-dialog">Open dialog</button>

<dialog id="my-dialog">
  <p>This dialog was opened using an invoker command.</p>
  <button commandfor="my-dialog" command="close">Close</button>
</dialog>
```

### Nicht modale Dialogfelder mit Popover-Befehlen

Nicht modale Dialogfelder können deklarativ mithilfe der HTML-Attribute [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) der [Popover API](/de/docs/Web/API/Popover_API) geöffnet, geschlossen und zwischen diesen Zuständen umgeschaltet werden. Die Attribute können für {{htmlelement("button")}}- und {{htmlelement("input")}}-Elemente definiert werden.

Damit `<dialog>` als Popover fungiert, muss das Attribut `popover` hinzugefügt werden.
Anschließend können Sie mit `popovertarget` auf einem Button oder Input das Ziel-Popover angeben und mit `popovertargetaction` festlegen, welche Aktion beim Klicken auf den Button für das Popover ausgeführt wird.
Da das Dialogfeld ein Popover ist, ist es nicht modal. Sie können es daher schließen, indem Sie außerhalb des Dialogfelds klicken.

Das folgende HTML zeigt, wie Sie die Attribute auf ein `<button>`-Element anwenden, damit es beim Betätigen ein nicht modales `<dialog>` mit der `id` „my-dialog“ ein- und ausblendet.

```html
<button popovertarget="my-dialog">Open dialog</button>

<dialog id="my-dialog" popover>
  <p>This dialog was opened using a popovertargetaction attribute.</p>
  <button popovertarget="my-dialog" popovertargetaction="hide">Close</button>
</dialog>
```

Die Popover API stellt außerdem Eigenschaften bereit, mit denen sich der Zustand in JavaScript abrufen und festlegen lässt.

### Dialogfelder schließen

Für jedes `<dialog>`-Element sollte ein Mechanismus zum Schließen bereitgestellt werden. Achten Sie darauf, dass dieser auch auf Geräten ohne physische Tastatur funktioniert.

Ein Dialogfeld lässt sich auf verschiedene Arten schließen:

- Durch Absenden des Formulars innerhalb des Elements `<dialog>`, wenn für das Element `<form>` `method="dialog"` gesetzt ist (siehe das Beispiel [Das Attribut `open` für Dialogfelder verwenden](#using_the_dialog_open_attribute)).
- Durch Klicken außerhalb des Dialogfelds, wenn „Light Dismiss“ aktiviert ist (siehe das Beispiel [HTML-Attribute der Popover API](#html-attribute_der_popover_api)).
- Durch Drücken der Taste <kbd>Esc</kbd>, sofern dies für das Dialogfeld aktiviert ist (siehe das Beispiel [HTML-Attribute der Popover API](#html-attribute_der_popover_api)).
- Durch Aufrufen der Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) (siehe das [Beispiel für ein modales Dialogfeld](#ein_modales_dialogfeld_erstellen)).

### CSS-Styling

Ein `<dialog>` lässt sich wie jedes andere Element über seinen Elementnamen auswählen. Sein Zustand kann außerdem mit Pseudoklassen wie [`:modal`](/de/docs/Web/CSS/Reference/Selectors/:modal) und [`:open`](/de/docs/Web/CSS/Reference/Selectors/:open) abgeglichen werden.

Mit dem CSS-Pseudoelement {{cssxref('::backdrop')}} lässt sich der Hintergrund eines modalen Dialogfelds gestalten. Dieser wird hinter dem Element `<dialog>` angezeigt, wenn das Dialogfeld mit der Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) eingeblendet wird.
Mit diesem Pseudoelement lässt sich beispielsweise der inerte Inhalt hinter dem modalen Dialogfeld weichzeichnen, abdunkeln oder auf andere Weise verdecken.

### Zusätzliche Hinweise

- HTML-Elemente vom Typ {{HTMLElement("form")}} können zum Schließen eines Dialogfelds verwendet werden, wenn sie das Attribut `method="dialog"` haben oder wenn für den Button zum Absenden des Formulars [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input#formmethod) gesetzt ist. Wird ein `<form>` innerhalb eines `<dialog>` über die Methode `dialog` abgesendet, wird das Dialogfeld geschlossen. Der Zustand der Formularsteuerelemente wird gespeichert, aber nicht übermittelt, und die Eigenschaft [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) wird auf den Wert des betätigten Buttons gesetzt.
- Das Attribut [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus) sollte dem Element hinzugefügt werden, mit dem Benutzer unmittelbar nach dem Öffnen eines modalen Dialogfelds interagieren sollen. Wenn kein anderes Element eine unmittelbarere Interaktion erfordert, empfiehlt es sich, `autofocus` dem Schließen-Button im Dialogfeld zuzuweisen. Alternativ kann es dem Dialogfeld selbst zugewiesen werden, wenn Benutzer dieses zum Schließen anklicken oder aktivieren sollen.
- Fügen Sie dem Element `<dialog>` die Eigenschaft `tabindex` nicht hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Der Inhalt des Dialogfelds, einschließlich des darin enthaltenen Schließen-Buttons, kann den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Bei der Implementierung eines Dialogfelds ist es wichtig zu überlegen, wo der Benutzerfokus am sinnvollsten gesetzt wird. Wenn ein `<dialog>` mit [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet wird, wird der Fokus auf das erste darin verschachtelte fokussierbare Element gesetzt. Wenn Sie die anfängliche Fokusposition ausdrücklich mit dem Attribut [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus) festlegen, können Sie sicherstellen, dass der Fokus zunächst auf dem für das jeweilige Dialogfeld am besten geeigneten Element liegt. Im Zweifelsfall kann das Element `<dialog>` selbst die beste anfängliche Fokusposition sein. Das gilt besonders, wenn der Inhalt eines Dialogfelds erst beim Aufruf dynamisch gerendert wird und die geeignete Fokusposition daher nicht im Voraus bekannt ist.

Stellen Sie sicher, dass Benutzer das Dialogfeld schließen können. Am zuverlässigsten gelingt dies mit einem ausdrücklich dafür vorgesehenen Button, beispielsweise einem Bestätigungs-, Abbrechen- oder Schließen-Button.

Ein mit der Methode `showModal()` geöffnetes Dialogfeld kann standardmäßig durch Drücken der Taste <kbd>Esc</kbd> geschlossen werden. Ein nicht modales Dialogfeld wird dagegen standardmäßig nicht mit <kbd>Esc</kbd> geschlossen; je nach Zweck des Dialogfelds ist dieses Verhalten möglicherweise auch nicht erwünscht. Benutzer, die eine Tastatur verwenden, erwarten, dass <kbd>Esc</kbd> modale Dialogfelder schließt. Stellen Sie sicher, dass dieses Verhalten implementiert ist und erhalten bleibt. Sind mehrere modale Dialogfelder geöffnet, sollte <kbd>Esc</kbd> nur das zuletzt angezeigte Dialogfeld schließen. Bei Verwendung von `<dialog>` stellt der Browser dieses Verhalten bereit.

Dialogfelder lassen sich zwar auch mit anderen Elementen erstellen, das native Element `<dialog>` bietet jedoch Funktionen für Benutzerfreundlichkeit und Barrierefreiheit, die bei einer Umsetzung mit anderen Elementen nachgebildet werden müssen. Wenn Sie ein eigenes Dialogfeld implementieren, stellen Sie sicher, dass alle erwarteten Standardverhaltensweisen unterstützt und die Empfehlungen zur korrekten Beschriftung befolgt werden.

Browser stellen das Element `<dialog>` ähnlich wie benutzerdefinierte Dialogfelder mit dem ARIA-Attribut [role="dialog"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) bereit. `<dialog>`-Elemente, die mit der Methode `showModal()` geöffnet werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal). `<dialog>`-Elemente, die mit der Methode `show()` geöffnet, über das Attribut `open` angezeigt oder durch Ändern des standardmäßigen `display`-Werts eines `<dialog>` eingeblendet werden, werden dagegen als `[aria-modal="false"]` bereitgestellt. Bei der Implementierung modaler Dialogfelder sollte alles außer `<dialog>` und dessen Inhalt mithilfe des Attributs [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) inert gemacht werden. Bei Verwendung von `<dialog>` zusammen mit der Methode `HTMLDialogElement.showModal()` übernimmt der Browser dieses Verhalten.

## Beispiele

### HTML-Attribute der Invoker Commands API

Dieses Beispiel zeigt, wie Sie ein modales Dialogfeld mit den HTML-Attributen [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) der [Invoker Commands API](/de/docs/Web/API/Invoker_Commands_API) öffnen und schließen können.

Zunächst deklarieren wir ein {{htmlelement("button")}}-Element. Wir setzen sein Attribut `command` auf [`"show-modal"`](/de/docs/Web/HTML/Reference/Elements/button#show-modal) und sein Attribut `commandfor` auf die `id` des zu öffnenden Dialogfelds (`my-dialog`).
Danach deklarieren wir ein `<dialog>`-Element mit einem `<button>` zum Schließen. Dieser Button sendet den Befehl [`"close"`](/de/docs/Web/HTML/Reference/Elements/button#close) an dieselbe Dialogfeld-ID.

```html
<button command="show-modal" commandfor="my-dialog">Open dialog</button>

<dialog id="my-dialog">
  <p>This dialog was opened using an invoker command.</p>
  <button commandfor="my-dialog" command="close">Close</button>
</dialog>
```

#### Ergebnis

Öffnen Sie das Dialogfeld mit dem Button „Open dialog“.
Sie können es mit dem Button „Close“ oder durch Drücken der Taste <kbd>Esc</kbd> schließen.

{{EmbedLiveSample("Open and close a dialog using Invoker Command API HTML attributes", "100%", 200)}}

### HTML-Attribute der Popover API

Dieses Beispiel zeigt, wie Sie ein nicht modales Dialogfeld mit den HTML-Attributen [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover), [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) der [Popover API](/de/docs/Web/API/Popover_API) öffnen und schließen können.

Durch Hinzufügen des Attributs `popover` wird `<dialog>` zu einem Popover.
Da wir keinen Wert für das Attribut angegeben haben, wird der Standardwert `"auto"` verwendet.
Dadurch wird das „Light-Dismiss“-Verhalten aktiviert: Das Dialogfeld kann durch Klicken außerhalb des Dialogfelds oder durch Drücken von <kbd>Esc</kbd> geschlossen werden.
Stattdessen könnten wir `popover="manual"` setzen, um das „Light-Dismiss“-Verhalten zu deaktivieren. Dann müsste das Dialogfeld über den Button „Close“ geschlossen werden.

Beachten Sie, dass wir für das `<button>`-Element, das das Dialogfeld öffnet, kein Attribut `popovertargetaction` angegeben haben.
Es ist in diesem Fall nicht erforderlich, da sein Standardwert `toggle` ist. Dadurch wechselt das Dialogfeld beim Klicken auf den Button zwischen geöffnetem und geschlossenem Zustand.

```html
<button popovertarget="my-dialog">Open dialog</button>

<dialog id="my-dialog" popover>
  <p>This dialog was opened using a popovertargetaction attribute.</p>
  <button popovertarget="my-dialog" popovertargetaction="hide">Close</button>
</dialog>
```

#### Ergebnis

Öffnen Sie das Dialogfeld mit dem Button „Open dialog“.
Sie können es mit dem Button „Close“ oder durch Drücken der Taste <kbd>Esc</kbd> schließen.
Da es nicht modal ist, können Sie es auch schließen, indem Sie außerhalb des Dialogfelds klicken.

{{EmbedLiveSample("Popover API HTML attributes", "100%", 200)}}

### Das Attribut `open` für Dialogfelder verwenden

Dieses Beispiel zeigt, wie Sie das boolesche Attribut `open` für ein `<dialog>`-Element setzen, um ein ausschließlich mit HTML erstelltes, nicht modales Dialogfeld zu erzeugen, das bereits beim Laden der Seite geöffnet ist.

Das Dialogfeld lässt sich durch Klicken auf den Button „OK“ schließen, da das Attribut `method` im Element `<form>` auf `"dialog"` gesetzt ist.
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

Dieses Dialogfeld ist aufgrund des Attributs `open` von Anfang an geöffnet und nicht modal.
Nach einem Klick auf „OK“ wird es geschlossen und der Ergebnisbereich bleibt leer.

{{EmbedLiveSample("HTML-only non-modal dialog", "100%", 200)}}

> [!NOTE]
> Laden Sie die Seite neu, um die Ausgabe zurückzusetzen.

Nach dem Schließen des Dialogfelds steht keine Methode zum erneuten Öffnen bereit. Zum Anzeigen nicht modaler Dialogfelder sollte vorzugsweise die Methode [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show) verwendet werden.
Das Dialogfeld lässt sich zwar durch Hinzufügen oder Entfernen des booleschen Attributs `open` ein- und ausblenden, diese Vorgehensweise wird jedoch nicht empfohlen.

### Ein modales Dialogfeld erstellen

Dieses Beispiel zeigt ein modales Dialogfeld mit einem [Verlauf](/de/docs/Web/CSS/Reference/Values/gradient) als Hintergrund. Die Methode `.showModal()` öffnet das modale Dialogfeld, wenn der Button „Show the dialog“ betätigt wird. Das Dialogfeld kann durch Drücken der Taste <kbd>Esc</kbd> oder über die Methode `close()` geschlossen werden, wenn der darin enthaltene Button „Close“ betätigt wird.

Wenn sich ein Dialogfeld öffnet, fokussiert der Browser standardmäßig das erste fokussierbare Element darin. In diesem Beispiel ist das Attribut [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus) dem Button „Close“ zugewiesen. Dadurch erhält dieser beim Öffnen des Dialogfelds den Fokus, da Benutzer voraussichtlich unmittelbar nach dem Öffnen mit diesem Element interagieren.

#### HTML

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a groovy backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Den Hintergrund des Dialogfelds können wir mit dem Pseudoelement {{cssxref('::backdrop')}} gestalten.

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

Das Dialogfeld wird mit der Methode `.showModal()` modal geöffnet und mit den Methoden `.close()` oder `.requestClose()` geschlossen.

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

Wenn das modale Dialogfeld angezeigt wird, erscheint es über allen anderen möglicherweise vorhandenen Dialogfeldern. Alles außerhalb des modalen Dialogfelds ist inert; Interaktionen außerhalb werden blockiert. Beachten Sie, dass bei geöffnetem Dialogfeld keine Interaktion mit dem Dokument möglich ist, abgesehen vom Dialogfeld selbst. Der Button „Show the dialog“ wird vom nahezu undurchsichtigen Hintergrund des Dialogfelds weitgehend verdeckt und ist inert.

### Den Rückgabewert des Dialogfelds verarbeiten

Dieses Beispiel veranschaulicht die Eigenschaft [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des Elements `<dialog>` und zeigt, wie sich ein modales Dialogfeld mithilfe eines Formulars schließen lässt. Standardmäßig ist `returnValue` eine leere Zeichenfolge oder, falls vorhanden, der Wert des Buttons, mit dem das Formular innerhalb des Elements `<dialog>` abgesendet wird.

In diesem Beispiel wird ein modales Dialogfeld geöffnet, wenn der Button „Show the dialog“ betätigt wird. Das Dialogfeld enthält ein Formular mit einem {{HTMLElement("select")}}-Element und drei {{HTMLElement("button")}}-Elementen, für die standardmäßig `type="submit"` gilt. Nur der Button „Cancel“ hat ein ausdrücklich festgelegtes Attribut `value`, das automatisch zum Setzen des `returnValue` des Dialogfelds verwendet wird.

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

Das Dialogfeld wird über einen Event-Listener am Button „Show the dialog“ geöffnet, der beim Klicken auf den Button [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) aufruft.

Beim Klicken auf den Button „Cancel“ wird das Dialogfeld geschlossen, weil das `<button>`-Element das Attribut [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input/submit#formmethod) enthält.
Ist die Methode eines Formulars [`dialog`](#zusätzliche_hinweise), wird der Zustand des Formulars gespeichert, aber nicht übermittelt, und das Dialogfeld wird geschlossen. Das Attribut überschreibt dabei die standardmäßige {{HTTPMethod("GET")}}-Methode des {{HTMLElement("form")}}-Elements.
Ohne `action` führt das Absenden des Formulars über die standardmäßige {{HTTPMethod("GET")}}-Methode dazu, dass die Seite neu geladen wird.
Bei den beiden anderen Buttons verhindern wir das Absenden mit JavaScript über [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und schließen das Dialogfeld mit [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) beziehungsweise [`HTMLDialogElement.requestClose()`](/de/docs/Web/API/HTMLDialogElement/requestClose).

Wird das Dialogfeld durch Drücken der Taste <kbd>Esc</kbd> oder über den `requestClose()`-Button geschlossen, wird zuerst ein `cancel`-Ereignis ausgelöst. Dadurch kann Code das Schließen in bestimmten Fällen verhindern. In diesem Beispiel bricht der `cancel`-Event-Listener das Ereignis nicht ab, sondern setzt lediglich `returnValue` auf `"cancelEvent"`. Dieser Wert ist nur beim Drücken der Taste <kbd>Esc</kbd> zu beobachten, da das an `requestClose()` übergebene Argument `"requestClose"` den Wert von `returnValue` unmittelbar vor dem Aufruf des `close`-Event-Listeners überschreibt.

Unabhängig davon, wie das Dialogfeld geschlossen wird, aktualisiert der `close`-Event-Listener den Text im {{HTMLElement("output")}}-Element mit dem endgültigen `returnValue`.

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

### Ein Dialogfeld mit einem erforderlichen Formulareingabefeld schließen

Wenn ein Formular in einem Dialogfeld ein erforderliches Eingabefeld enthält, lässt der User Agent das Schließen des Dialogfelds erst zu, nachdem ein Wert für dieses Feld eingegeben wurde. Um ein solches Dialogfeld dennoch zu schließen, verwenden Sie entweder das Attribut [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate) für den Schließen-Button oder rufen Sie beim Klicken auf den Schließen-Button die Methode `close()` des Dialogobjekts auf.

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

An der Ausgabe sehen wir, dass sich das Dialogfeld nicht mit dem Button _Normal close_ schließen lässt. Es kann jedoch geschlossen werden, wenn wir die Formularvalidierung mit dem Attribut `formnovalidate` am Button _Cancel_ umgehen. Auch ein programmatischer Aufruf von `dialog.close()` schließt ein solches Dialogfeld.

### Verschiedene `closedby`-Verhaltensweisen vergleichen

Dieses Beispiel veranschaulicht die Verhaltensunterschiede zwischen den verschiedenen Werten des Attributs [`closedby`](#closedby).

#### HTML

Wir stellen drei {{htmlelement("button")}}-Elemente und drei `<dialog>`-Elemente bereit. Jeder Button wird so programmiert, dass er ein anderes Dialogfeld öffnet, das einen der drei Werte des Attributs `closedby` veranschaulicht: `none`, `closerequest` und `any`. Beachten Sie, dass jedes `<dialog>`-Element ein `<button>`-Element zum Schließen enthält.

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

Hier weisen wir verschiedenen Variablen Referenzen auf die steuernden `<button>`-Elemente, die `<dialog>`-Elemente und die darin enthaltenen `<button>`-Elemente mit der Beschriftung „Close“ zu. Zunächst weisen wir jedem Steuerungs-Button mit [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) einen [`click`](/de/docs/Web/API/Element/click_event)-Event-Listener zu. Dessen Event-Handler-Funktion öffnet das zugehörige `<dialog>`-Element über [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal). Anschließend durchlaufen wir die Referenzen auf die „Close“-Buttons und weisen jedem einen `click`-Event-Handler zu, der das jeweilige `<dialog>`-Element über [`close()`](/de/docs/Web/API/HTMLDialogElement/close) schließt.

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

Klicken Sie auf die einzelnen Buttons, um jeweils ein Dialogfeld zu öffnen. Das erste lässt sich nur über seinen Button „Close“ schließen. Das zweite kann zusätzlich durch eine gerätespezifische Benutzeraktion wie das Drücken der Taste <kbd>Esc</kbd> geschlossen werden. Das dritte bietet das vollständige [„Light-Dismiss“-Verhalten](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) und lässt sich daher auch durch Klicken oder Tippen außerhalb des Dialogfelds schließen.

### Dialogfelder animieren

Für ausgeblendete `<dialog>`-Elemente gilt [`display: none;`](/de/docs/Web/CSS/Reference/Properties/display), für angezeigte `display: block;`. Außerdem werden sie aus der {{Glossary("top_layer", "obersten Ebene")}} und dem [Barrierefreiheitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt beziehungsweise diesen hinzugefügt. Damit `<dialog>`-Elemente animiert werden können, muss die Eigenschaft {{cssxref("display")}} daher animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/Reference/Properties/display#browser_compatibility) animieren `display` mit einer Variante des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Konkret wechselt der Browser zwischen `none` und einem anderen `display`-Wert so, dass der animierte Inhalt während der gesamten Animationsdauer sichtbar bleibt.

Zum Beispiel:

- Bei einer Animation von `display` von `none` zu `block` oder einem anderen sichtbaren `display`-Wert wechselt der Wert bei `0%` der Animationsdauer zu `block`, sodass der Inhalt durchgehend sichtbar ist.
- Bei einer Animation von `display` von `block` oder einem anderen sichtbaren `display`-Wert zu `none` wechselt der Wert erst bei `100%` der Animationsdauer zu `none`, sodass der Inhalt bis dahin sichtbar bleibt.

> [!NOTE]
> Bei Animationen mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu ermöglichen. Bei [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) ist dieses Verhalten standardmäßig verfügbar; ein entsprechender zusätzlicher Schritt ist nicht erforderlich.

#### Übergänge für Dialogelemente

Für die Animation von `<dialog>`-Elementen mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- {{cssxref("@starting-style")}}-At-Regel
  - : Stellt Startwerte für Eigenschaften des `<dialog>` bereit, von denen bei jedem Öffnen ausgehend ein Übergang stattfinden soll. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. CSS-Übergänge finden standardmäßig nur statt, wenn sich der Wert einer Eigenschaft an einem sichtbaren Element ändert. Sie werden weder bei der ersten Aktualisierung des Styles eines Elements noch beim Wechsel des `display`-Typs von `none` zu einem anderen Typ ausgelöst.
- Eigenschaft {{cssxref("display")}}
  - : Nehmen Sie `display` in die Liste der Übergänge auf. So bleibt für `<dialog>` während des Übergangs `display: block` oder ein anderer sichtbarer `display`-Wert des geöffneten Zustands erhalten und die übrigen Übergänge bleiben sichtbar.
- Eigenschaft {{cssxref("overlay")}}
  - : Nehmen Sie `overlay` in die Liste der Übergänge auf, damit das `<dialog>` erst nach Abschluss des Übergangs aus der obersten Ebene entfernt wird. Auch dadurch bleibt der Übergang sichtbar.
- Eigenschaft {{cssxref("transition-behavior")}}
  - : Setzen Sie `transition-behavior: allow-discrete` für die Übergänge von `display` und `overlay` oder für die Kurzschreibweise {{cssxref("transition")}}. Dadurch werden diskrete Übergänge für diese beiden Eigenschaften ermöglicht, die standardmäßig nicht animierbar sind.

Das folgende kurze Beispiel zeigt, wie das aussehen kann.

##### HTML

Das HTML enthält ein `<dialog>`-Element und einen Button zum Anzeigen des Dialogfelds. Außerdem enthält das `<dialog>`-Element einen weiteren Button, mit dem es geschlossen werden kann.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS verwenden wir einen `@starting-style`-Block, der die Start-Styles für die Übergänge der Eigenschaften `opacity` und `transform` definiert. Außerdem legen wir die End-Styles für Übergänge im Zustand `dialog:open` und Standard-Styles für den Zustand `dialog` fest, zu denen nach dem Anzeigen des `<dialog>` zurückgewechselt wird. Beachten Sie, dass die `transition`-Liste des `<dialog>` neben diesen Eigenschaften auch `display` und `overlay` enthält, jeweils mit `allow-discrete`.

Wir legen außerdem einen Start-Style-Wert für die Eigenschaft {{cssxref("background-color")}} des {{cssxref("::backdrop")}} fest, der beim Öffnen hinter dem `<dialog>` erscheint. So entsteht eine ansprechende Abdunklungsanimation. Der Selektor `dialog:open::backdrop` wählt nur die Hintergründe geöffneter `<dialog>`-Elemente aus.

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

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Transitioning dialog elements", "100%", "200") }}

> [!NOTE]
> Da `<dialog>`-Elemente bei jedem Anzeigen von `display: none` zu `display: block` wechseln, durchläuft das `<dialog>` bei jedem Eintrittsübergang den Übergang von seinen `@starting-style`-Styles zu seinen `dialog:open`-Styles. Beim Schließen wechselt es vom Zustand `dialog:open` zum Standardzustand `dialog`.
>
> In solchen Fällen können sich die Style-Übergänge beim Öffnen und Schließen unterscheiden. Ein Beispiel dafür finden Sie in unserer [Demonstration zur Verwendung von Start-Styles](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used).

#### Keyframe-Animationen für Dialogfelder

Bei der Animation eines `<dialog>` mit CSS-Keyframe-Animationen gibt es gegenüber Übergängen einige Unterschiede:

- Sie geben kein `@starting-style` an.
- Sie nehmen den `display`-Wert in einen Keyframe auf. Dieser Wert gilt während der gesamten Animation oder bis ein anderer `display`-Wert als `none` erreicht wird.
- Diskrete Animationen müssen nicht ausdrücklich aktiviert werden; innerhalb von Keyframes gibt es keine Entsprechung für `allow-discrete`.
- Auch `overlay` muss nicht in Keyframes festgelegt werden. Die Animation von `display` übernimmt die Animation des `<dialog>` vom sichtbaren zum ausgeblendeten Zustand.

Sehen wir uns ein Beispiel an.

##### HTML

Das HTML enthält zunächst ein `<dialog>`-Element und einen Button zum Anzeigen des Dialogfelds. Außerdem enthält das `<dialog>`-Element einen weiteren Button, mit dem es geschlossen werden kann.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Keyframes für die Animation zwischen dem geschlossenen und dem angezeigten Zustand des `<dialog>` sowie eine Einblendanimation für dessen Hintergrund. Die Animationen des `<dialog>` umfassen auch `display`, damit die sichtbaren Animationseffekte während der gesamten Dauer zu sehen bleiben. Beachten Sie, dass sich das Ausblenden des Hintergrunds nicht animieren ließ: Beim Schließen des `<dialog>` wird der Hintergrund sofort aus dem DOM entfernt, sodass nichts mehr animiert werden kann.

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

Abschließend fügt das JavaScript den Buttons Event-Handler hinzu, damit das `<dialog>` angezeigt und geschlossen werden kann:

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
        Wurzelelement für Abschnitte
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keines; sowohl Start- als auch End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>
        akzeptiert.
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

- Schnittstelle [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)
- Ereignis [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) der Schnittstelle `HTMLDialogElement`
- Ereignis [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) der Schnittstelle `HTMLDialogElement`
- Eigenschaft [`open`](/de/docs/Web/API/HTMLDialogElement/open) der Schnittstelle `HTMLDialogElement`
- Globales Attribut [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) für HTML-Elemente
- CSS-Pseudoelement {{CSSXref("::backdrop")}}
- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
