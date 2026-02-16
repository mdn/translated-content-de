---
title: "<dialog>: Das Dialog-Element"
slug: Web/HTML/Reference/Elements/dialog
l10n:
  sourceCommit: 0d7c02c325fd656653adcf70185778808856d241
---

Das **`<dialog>`**-Element [HTML](/de/docs/Web/HTML) repräsentiert ein modales oder nicht modales Dialogfeld oder eine andere interaktive Komponente, wie z.B. eine verwerfbare Warnung, einen Inspektor oder ein Unterfenster.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf dem `<dialog>`-Element verwendet werden. Siehe [Weitere Hinweise](#zusätzliche_anmerkungen).

- `closedby`
  - : Gibt die Arten von Benutzeraktionen an, die zum Schließen des `<dialog>`-Elements verwendet werden können. Dieses Attribut unterscheidet drei Methoden, mit denen ein Dialog geschlossen werden kann:
    - Eine _Light-Dismiss-Benutzeraktion_, bei der das `<dialog>` geschlossen wird, wenn der Benutzer außerhalb davon klickt oder tippt. Dies entspricht dem ["Light-Dismiss"-Verhalten von "auto"-zustands-Popovers](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss).
    - Eine _plattform-spezifische Benutzeraktion_, wie das Drücken der <kbd>Esc</kbd>-Taste auf Desktop-Plattformen oder eine "Zurück"- oder "Schließen"-Geste auf mobilen Plattformen.
    - Ein von einem Entwickler spezifizierter Mechanismus wie ein {{htmlelement("button")}} mit einem [`click`](/de/docs/Web/API/Element/click_event)-Handler, der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) aufruft oder ein {{htmlelement("form")}}-Eingabe.

    Mögliche Werte sind:
    - `any`
      - : Das Dialogfeld kann mit einer der drei Methoden geschlossen werden.
    - `closerequest`
      - : Das Dialogfeld kann mit einer plattform-spezifischen Benutzeraktion oder einem vom Entwickler spezifizierten Mechanismus geschlossen werden.
    - `none`
      - : Das Dialogfeld kann nur mit einem vom Entwickler spezifizierten Mechanismus geschlossen werden.

    Wenn das `<dialog>`-Element keinen gültigen `closedby`-Wert hat, dann
    - falls es mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet wurde, verhält es sich so, als ob der Wert `"closerequest"` wäre
    - andernfalls verhält es sich, als ob der Wert `"none"` wäre.

- `open`
  - : Gibt an, dass das Dialogfeld aktiv ist und zur Interaktion zur Verfügung steht. Wenn das `open`-Attribut nicht gesetzt ist, ist das Dialogfeld für den Benutzer nicht sichtbar.
    Es wird empfohlen, die `.show()`- oder `.showModal()`-Methode zum Rendern von Dialogen zu verwenden, anstatt das `open`-Attribut. Wenn ein `<dialog>` mithilfe des `open`-Attributs geöffnet wird, ist es nicht modal.

    > [!NOTE]
    > Während Sie zwischen den offenen und geschlossenen Zuständen nicht modaler Dialogfelder wechseln können, indem Sie das Vorhandensein des `open`-Attributs umschalten, wird dieser Ansatz nicht empfohlen. Siehe [`open`](/de/docs/Web/API/HTMLDialogElement/open) für weitere Informationen.

## Beschreibung

Das HTML `<dialog>`-Element wird verwendet, um sowohl modale als auch nicht modale Dialogfelder zu erstellen.
Modale Dialogfelder blockieren die Interaktion mit anderen UI-Elementen, wodurch der Rest der Seite [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert#:~:text=When,clicked) wird, während nicht modale Dialogfelder eine Interaktion mit dem Rest der Seite ermöglichen.

### Steuerung von Dialogen mit JavaScript

JavaScript kann verwendet werden, um das `<dialog>`-Element anzuzeigen und zu schließen.
Sie können die [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode verwenden, um ein modales Dialogfeld anzuzeigen, und die [`show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode, um ein nicht modales Dialogfeld anzuzeigen. Das Dialogfeld kann mit der [`close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode oder der [`dialog`](/de/docs/Web/HTML/Reference/Elements/form#method)-Methode geschlossen werden, wenn ein `<form>` übermittelt wird, das im `<dialog>`-Element eingebettet ist.
Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

### Modale Dialoge mit Invoker-Kommandos

Modale Dialoge können deklarativ geöffnet und geschlossen werden, indem die HTML-Attribute [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) der [Invoker Commands API](/de/docs/Web/API/Invoker_Commands_API) auf {{htmlelement("button")}}-Elementen gesetzt werden.

Das `command`-Attribut setzt den spezifischen Befehl, der gesendet werden soll, wenn das `<button>`-Element geklickt wird, während `commandfor` die `id` des Zieldialogs setzt.
Die möglichen Befehle für Dialoge sind [`"show-modal"`](/de/docs/Web/HTML/Reference/Elements/button#show-modal), [`"close"`](/de/docs/Web/HTML/Reference/Elements/button#close) und [`"request-close"`](/de/docs/Web/HTML/Reference/Elements/button#request-close).

Das untenstehende HTML zeigt, wie man die Attribute auf ein `<button>`-Element anwendet, sodass es gedrückt werden kann, um ein modales `<dialog>` mit einer `id` von "my-dialog" zu öffnen.

```html
<button command="show-modal" commandfor="my-dialog">Open dialog</button>

<dialog id="my-dialog">
  <p>This dialog was opened using an invoker command.</p>
  <button commandfor="my-dialog" command="close">Close</button>
</dialog>
```

### Nicht-modale Dialoge mit Popover-Befehlen

Nicht-modale Dialoge können deklarativ geöffnet, geschlossen und umgeschaltet werden, indem die HTML-Attribute [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) der [Popover API](/de/docs/Web/API/Popover_API) auf {{htmlelement("button")}} und {{htmlelement("input")}}-Elementen definiert werden.

Das `<dialog>` muss durch das Hinzufügen des `popover`-Attributs in ein Popover umgewandelt werden.
Sie können dann `popovertarget` auf einem Button/Input verwenden, um das Ziel-Popover anzugeben, und `popovertargetaction`, um die Aktion anzugeben, die auf dem Popover geschehen soll, wenn der Button geklickt wird.
Beachten Sie, dass, da der Dialog ein Popover ist, er nicht modal ist, sodass Sie ihn durch Klicken außerhalb des Dialogs schließen können.

Das untenstehende HTML zeigt, wie man die Attribute auf ein `<button>`-Element anwendet, sodass es gedrückt werden kann, um ein modales `<dialog>` mit einer `id` von "my-dialog" zu zeigen und zu verbergen.

```html
<button popovertarget="my-dialog">Open dialog</button>

<dialog id="my-dialog" popover>
  <p>This dialog was opened using a popovertargetaction attribute.</p>
  <button popovertarget="my-dialog" popovertargetaction="hide">Close</button>
</dialog>
```

Die Popover API bietet auch Eigenschaften, die zum Abrufen und Setzen des Status in JavaScript verwendet werden können.

### Schließen von Dialogen

Es ist wichtig, einen Schließmechanismus für jedes `<dialog>`-Element bereitzustellen und sicherzustellen, dass dieser auf Geräten funktioniert, die möglicherweise keine physische Tastatur haben.

Es gibt zahlreiche Möglichkeiten, einen Dialog zu schließen:

- Das Formular innerhalb des `<dialog>`-Elements wird eingereicht, wenn `method="dialog"` auf dem `<form>`-Element gesetzt ist (siehe das Beispiel [Verwendung des offenen Attributs eines Dialogs](#using_the_dialog_open_attribute)).
- Klicken außerhalb des Dialogbereichs, wenn "Light Dismiss" aktiviert ist (siehe das Beispiel [Popover-API-HTML-Attribute](/de/docs/Web/HTML/Reference/Elements/dialog#popover_api_html_attributes)).
- Drücken der <kbd>Esc</kbd>-Taste in Dialogen, in denen es aktiviert ist (siehe das Beispiel [Popover-API-HTML-Attribute](/de/docs/Web/HTML/Reference/Elements/dialog#popover_api_html_attributes)).
- Aufrufen der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode (siehe das [modale Beispiel](#erstellen_eines_modalen_dialogs)).

### CSS-Styling

Ein `<dialog>` kann wie jedes andere Element ausgewählt werden, und Sie können auch seinen Status mithilfe von Pseudoklassen wie [`:modal`](/de/docs/Web/CSS/Reference/Selectors/:modal) und [`:open`](/de/docs/Web/CSS/Reference/Selectors/:open) anpassen.

Das CSS-{{cssxref('::backdrop')}}-Pseudoelement kann verwendet werden, um den Hintergrund eines modalen Dialogs zu gestalten, der hinter dem `<dialog>`-Element angezeigt wird, wenn der Dialog angezeigt wird, indem die [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode verwendet wird.
Dieses Pseudoelement könnte beispielsweise verwendet werden, um den nicht interaktiven Inhalt hinter dem modalen Dialog zu verwischen, zu verdunkeln oder anderweitig zu verschleiern.

### Zusätzliche Anmerkungen

- HTML {{HTMLElement("form")}}-Elemente können verwendet werden, um ein Dialogfeld zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der zum Absenden des Formulars verwendete Button [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` mit der Dialogmethode eingereicht wird, schließt sich das Dialogfeld, die Zustände der Formularkontrollen werden gespeichert, aber nicht übermittelt, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)-Eigenschaft wird auf den Wert des aktivierten Buttons gesetzt.
- Das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut sollte zu dem Element hinzugefügt werden, mit dem der Benutzer unmittelbar nach dem Öffnen eines modalen Dialogs interagieren soll. Wenn kein anderes Element eine unmittelbarere Interaktion erfordert, wird empfohlen, den `autofocus` zum Schließen-Button im Dialog oder zum Dialog selbst hinzuzufügen, wenn der Benutzer erwartet wird, ihn zu klicken/aktivieren, um ihn zu schließen.
- Fügen Sie dem `<dialog>`-Element nicht die `tabindex`-Eigenschaft hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Der Inhalt des Dialogs, einschließlich des darin enthaltenen Schließen-Buttons, kann den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Bei der Implementierung eines Dialogs ist es wichtig, den am besten geeigneten Ort für die Fokussierung des Benutzers festzulegen. Bei Verwendung von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), um ein `<dialog>` zu öffnen, wird der Fokus auf das erste geschachtelte fokussierbare Element gesetzt. Durch explizites Angeben des anfänglichen Fokusplatzes mithilfe des [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attributs wird sichergestellt, dass der anfängliche Fokus auf das Element gesetzt wird, das als beste anfängliche Fokusplatzierung für einen bestimmten Dialog angesehen wird. Wenn Zweifel bestehen, da möglicherweise nicht immer bekannt ist, wo der anfängliche Fokus innerhalb eines Dialogs gesetzt werden könnte, insbesondere in Fällen, in denen der Inhalt eines Dialogs beim Aufruf dynamisch gerendert wird, kann das `<dialog>`-Element selbst die beste anfängliche Fokusplatzierung bieten.

Stellen Sie sicher, dass eine Möglichkeit bereitgestellt wird, mit der Benutzer den Dialog schließen können. Die robusteste Möglichkeit, um sicherzustellen, dass alle Benutzer den Dialog schließen können, besteht darin, einen expliziten Button dafür einzubeziehen, z.B. eine Bestätigungs-, Abbruch- oder Schließen-Schaltfläche.

Standardmäßig kann ein Dialog, der mit der `showModal()`-Methode aufgerufen wird, durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Ein nicht modaler Dialog wird standardmäßig nicht über die <kbd>Esc</kbd>-Taste geschlossen, und je nachdem, was der nicht modale Dialog darstellt, wird dieses Verhalten möglicherweise nicht gewünscht. Tastaturnutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und beibehalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte das Drücken der <kbd>Esc</kbd>-Taste nur den zuletzt angezeigten Dialog schließen. Bei Verwendung von `<dialog>` wird dieses Verhalten vom Browser bereitgestellt.

Während Dialoge mit anderen Elementen erstellt werden können, bietet das native `<dialog>`-Element Usability- und Barrierefreiheitsfunktionen, die repliziert werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck nutzen. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhaltensweisen unterstützt werden und die richtigen Beschriftungsempfehlungen befolgt werden.

Das `<dialog>`-Element wird von Browsern ähnlich wie benutzerdefinierte Dialoge behandelt, die das ARIA [role="dialog"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)-Attribut verwenden. `<dialog>`-Elemente, die von der `showModal()`-Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), während `<dialog>`-Elemente, die durch die `show()`-Methode aufgerufen oder mit dem `open`-Attribut angezeigt oder durch Ändern der Standardanzeige eines `<dialog>` angezeigt werden, als `[aria-modal="false"]` angezeigt werden. Beim Implementieren von modalen Dialogen sollte alles außer dem `<dialog>` und seinem Inhalt mithilfe des [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attributs inaktiv gemacht werden. Bei Verwendung von `<dialog>` zusammen mit der `HTMLDialogElement.showModal()`-Methode wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### Invoker-Kommando-API-HTML-Attribute

Dieses Beispiel zeigt, wie Sie ein modales Dialogfeld öffnen und schließen können, indem Sie die [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) HTML-Attribute der [Invoker Commands API](/de/docs/Web/API/Invoker_Commands_API) verwenden.

Zuerst deklarieren wir ein {{htmlelement("button")}}-Element, das `command`-Attribut auf [`"show-modal"`](/de/docs/Web/HTML/Reference/Elements/button#show-modal) setzen und das `commandfor`-Attribut auf die `id` des zu öffnenden Dialogs (`my-dialog`).
Dann deklarieren wir ein {{htmlelement("dialog")}}-Element, das einen "Schließen" `<button>` enthält. Dieser Button sendet den [`"close"`](/de/docs/Web/HTML/Reference/Elements/button#close) Befehl an die (gleiche) Dialog-ID.

```html
<button command="show-modal" commandfor="my-dialog">Open dialog</button>

<dialog id="my-dialog">
  <p>This dialog was opened using an invoker command.</p>
  <button commandfor="my-dialog" command="close">Close</button>
</dialog>
```

#### Ergebnis

Öffnen Sie den Dialog, indem Sie die Schaltfläche "Dialog öffnen" drücken.
Sie können den Dialog schließen, indem Sie den "Schließen"-Button auswählen oder die <kbd>Esc</kbd>-Taste drücken.

{{EmbedLiveSample("Open and close a dialog using Invoker Command API HTML attributes", "100%", 200)}}

### Popover-API-HTML-Attribute

Dieses Beispiel zeigt, wie Sie ein nicht-modales Dialogfeld öffnen und schließen können, indem Sie die [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover), [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) HTML-Attribute der [Popover API](/de/docs/Web/API/Popover_API) verwenden.

Das `<dialog>` wird durch das Hinzufügen des `popover`-Attributs in ein Popover umgewandelt.
Da wir keinen Wert für das Attribut angegeben haben, wird der Standardwert `"auto"` verwendet.
Dies ermöglicht das "Light-Dismiss"-Verhalten und erlaubt dem Dialog, durch Klicken außerhalb des Dialogs oder durch Drücken von <kbd>Esc</kbd> geschlossen zu werden.
Wir könnten stattdessen `popover="manual"` setzen, um das "Light-Dismiss"-Verhalten zu deaktivieren, in welchem Fall der Dialog mit dem "Schließen"-Button geschlossen werden müsste.

Beachten Sie, dass wir für den `<button>`, der den Dialog öffnet, kein Attribut `popovertargetaction` angegeben haben.
Dies ist in diesem Fall nicht erforderlich, da der Standardwert `toggle` ist, was den Dialog zwischen seinem offenen und geschlossenen Zustand umschaltet, wenn der Button geklickt wird.

```html
<button popovertarget="my-dialog">Open dialog</button>

<dialog id="my-dialog" popover>
  <p>This dialog was opened using a popovertargetaction attribute.</p>
  <button popovertarget="my-dialog" popovertargetaction="hide">Close</button>
</dialog>
```

#### Ergebnis

Öffnen Sie den Dialog, indem Sie die Schaltfläche "Dialog öffnen" drücken.
Sie können den Dialog schließen, indem Sie den "Schließen"-Button auswählen oder die <kbd>Esc</kbd>-Taste drücken.
Sie können ihn auch schließen, indem Sie außerhalb des Dialogs auswählen, da er nicht modal ist.

{{EmbedLiveSample("Popover API HTML attributes", "100%", 200)}}

### Verwendung des `open`-Attributs des Dialogs

Dieses Beispiel zeigt, wie Sie das boolesche `open`-Attribut auf einem `<dialog>`-Element setzen können, um einen HTML-only nicht-modalen Dialog zu erstellen, der bereits geöffnet ist, wenn die Seite geladen wird.

Der Dialog kann durch Klicken auf den "OK"-Button geschlossen werden, da das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist.
In diesem Fall ist kein JavaScript erforderlich, um das Formular zu schließen.

```html
<dialog open>
  <p>Greetings, one and all!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

#### Ergebnis

Dieser Dialog ist initial offen und nicht modal aufgrund des Vorhandenseins des `open`-Attributs.
Nach dem Klicken auf "OK" wird der Dialog geschlossen, sodass der Ergebnisrahmen leer bleibt.

{{EmbedLiveSample("HTML-only non-modal dialog", "100%", 200)}}

> [!NOTE]
> Laden Sie die Seite neu, um die Ausgabe zurückzusetzen.

Beim Schließen des Dialogs gibt es keine bereitgestellte Methode, um ihn wieder zu öffnen. Die bevorzugte Methode zur Anzeige nicht-modaler Dialoge ist die Verwendung der [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode.
Es ist möglich, die Anzeige des Dialogs zu wechseln, indem das boolesche `open`-Attribut hinzugefügt oder entfernt wird, aber dies ist nicht die empfohlene Praxis.

### Erstellen eines modalen Dialogs

Dieses Beispiel zeigt einen modalen Dialog mit einem [Verlauf](/de/docs/Web/CSS/Reference/Values/gradient)-Hintergrund. Die `.showModal()`-Methode öffnet den modalen Dialog, wenn der "Dialog anzeigen"-Button aktiviert wird. Der Dialog kann durch Drücken der <kbd>Esc</kbd>-Taste oder über die `close()`-Methode geschlossen werden, wenn der "Schließen"-Button im Dialog aktiviert wird.

Wenn ein Dialog geöffnet wird, setzt der Browser standardmäßig den Fokus auf das erste Element, das im Dialog fokussierbar ist. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut auf den "Schließen"-Button angewendet und gibt ihm den Fokus, wenn der Dialog geöffnet wird, da dies das Element ist, mit dem der Benutzer unmittelbar nach dem Öffnen des Dialogs interagieren soll.

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

Der Dialog wird modal mit der `.showModal()`-Methode geöffnet und mit der `.close()` oder `.requestClose()`-Methoden geschlossen.

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

Wenn der modale Dialog angezeigt wird, erscheint er über allen anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des modalen Dialogs ist inaktiv und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass, wenn der Dialog offen ist, mit Ausnahme des Dialogs selbst, keine Interaktion mit dem Dokument möglich ist; Der "Dialog anzeigen"-Button ist größtenteils vom fast undurchsichtigen Hintergrund des Dialogs verdeckt und inaktiv.

### Handhabung des Rückgabewerts aus dem Dialog

Dieses Beispiel zeigt den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie man einen modalen Dialog durch die Verwendung eines Formulars schließen kann. Standardmäßig ist der `returnValue` der leere String oder der Wert des Buttons, der das Formular innerhalb des `<dialog>`-Elements übermittelt, falls vorhanden.

Dieses Beispiel öffnet einen modalen Dialog, wenn der "Dialog anzeigen"-Button aktiviert wird. Der Dialog enthält ein Formular mit einem {{HTMLElement("select")}} und zwei {{HTMLElement("button")}}-Elementen, die standardmäßig auf `type="submit"` gesetzt sind. Ein Ereignis-Listener aktualisiert den Wert des "Bestätigen"-Buttons, wenn sich die Auswahloption ändert. Wenn der "Bestätigen"-Button aktiviert wird, um den Dialog zu schließen, ist der aktuelle Wert des Buttons der Rückgabewert. Wenn der Dialog durch Drücken des "Abbrechen"-Buttons geschlossen wird, ist der `returnValue` `cancel`.

Wenn der Dialog geschlossen wird, wird der Rückgabewert unter dem "Dialog anzeigen"-Button angezeigt. Wenn der Dialog durch Drücken der <kbd>Esc</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert und das `close`-Ereignis tritt nicht auf, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

Der Dialog wird mithilfe eines Ereignis-Listeners auf dem "Dialog anzeigen"-Button geöffnet, der [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) aufruft, wenn der Button geklickt wird.

Der Dialog wird geschlossen, wenn der "Abbrechen"-Button geklickt wird, da das `<button>` das [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input/submit#formmethod)-Attribut enthält.
Wenn die Methode eines Formulars [`dialog`](#zusätzliche_anmerkungen) ist, wird der Zustand des Formulars gespeichert, aber nicht übermittelt, und der Dialog wird geschlossen (das Attribut überschreibt die Standard-{{HTTPMethod("GET")}}-Methode des {{HTMLElement("form")}}).
Ohne eine `action` würde das Übermitteln des Formulars über die Standard-{{HTTPMethod("GET")}}-Methode zum Neuladen der Seite führen.
Wir verwenden JavaScript, um die Übermittlung zu verhindern und den Dialog mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) zu schließen.

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

### Schließen eines Dialogs mit einem erforderlichen Formulareingang

Wenn ein Formular innerhalb eines Dialogs eine erforderliche Eingabe hat, lässt der Benutzeragent Sie den Dialog erst schließen, wenn Sie einen Wert für die erforderliche Eingabe angeben. Um einen solchen Dialog zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate)-Attribut auf dem Schließen-Button oder rufen Sie die `close()`-Methode auf dem Dialogobjekt auf, wenn der Schließen-Button geklickt wird.

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

Aus der Ausgabe sehe wir, dass es unmöglich ist, den Dialog mit dem _Normal close_-Button zu schließen. Aber der Dialog kann geschlossen werden, wenn wir die Formularvalidierung mithilfe des `formnovalidate`-Attributs auf dem _Cancel_-Button umgehen. Programmgesteuert wird `dialog.close()` auch einen solchen Dialog schließen.

### Vergleich verschiedener closedby-Verhaltensweisen

Dieses Beispiel zeigt den Unterschied im Verhalten zwischen verschiedenen Werten des [`closedby`](#closedby)-Attributs.

#### HTML

Wir stellen drei {{htmlelement("button")}}-Elemente und drei `<dialog>`-Elemente bereit. Jeder Button wird programmiert, um einen anderen Dialog zu öffnen, der das Verhalten eines der drei Werte des `closedby`-Attributs demonstriert — `none`, `closerequest` und `any`. Beachten Sie, dass jedes `<dialog>`-Element ein `<button>`-Element enthält, das verwendet wird, um es zu schließen.

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

Hier weisen wir verschiedene Variablen zu, um auf die Hauptsteuerungs-`<button>`-Elemente, die `<dialog>`-Elemente und die "Schließen"-`<button>`-Elemente innerhalb der Dialoge zu verweisen. Zuerst weisen wir jedem Steuerungsbutton einen [`click`](/de/docs/Web/API/Element/click_event) Ereignis-Listener mit [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) zu, dessen Ereignis-Handler-Funktion das zugehörige `<dialog>`-Element über [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) öffnet. Wir durchlaufen dann die "Schließen"-`<button>`-Referenzen und weisen jedem einen `click`-Ereignis-Handler zu, der das `<dialog>`-Element über [`close()`](/de/docs/Web/API/HTMLDialogElement/close) schließt.

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

Versuchen Sie, jeden Button zu klicken, um einen Dialog zu öffnen. Der erste kann nur durch Klicken auf seinen "Schließen"-Button geschlossen werden. Der zweite kann auch über eine gerätespezifische Benutzeraktion wie das Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Der dritte hat das vollständige ["Light-Dismiss"-Verhalten](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss), sodass er auch durch Klicken oder Tippen außerhalb des Dialogs geschlossen werden kann.

### Animieren von Dialogen

`<dialog>`-Elemente sind standardmäßig auf [`display: none;`](/de/docs/Web/CSS/Reference/Properties/display) gesetzt, wenn sie verborgen sind, und `display: block;`, wenn sie angezeigt werden, sowie das Entfernen aus und das Hinzufügen zur {{Glossary("top_layer", "obersten Ebene")}} und dem [Barrierefreiheitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree). Daher muss für `<dialog>`-Elemente das {{cssxref("display")}}-Attribut animierbar sein, damit sie animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/Reference/Properties/display#browser_compatibility) animieren `display` mit einer Variante des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Konkret wird der Browser zwischen `none` und einem anderen Wert von `display` hin und her wechseln, sodass der animierte Inhalt für die gesamte Animationsdauer sichtbar ist.

Beispielsweise:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert zu `block` bei `0%` der Animationsdauer, sodass es während der gesamten Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert zu `none` bei `100%` der Animationsdauer, sodass es während der gesamten Zeit sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) verfügbar; ein gleichwertiger Schritt ist nicht erforderlich.

#### Übergang von Dialogelementen

Beim Animieren von `<dialog>`-Elementen mit CSS-Übergängen sind die folgenden Merkmale erforderlich:

- {{cssxref("@starting-style")}} At-Rule
  - : Bietet einen Satz von Anfangswerten für Eigenschaften, die auf `<dialog>` gesetzt werden, von denen Sie möchten, dass sie jedes Mal, wenn es geöffnet wird, wechseln. Dies ist nötig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur dann auf, wenn sich eine Eigenschaft von einem Wert auf einen anderen bei einem sichtbaren Element ändert; sie werden bei den ersten Style-Updates der Elemente nicht ausgelöst oder wenn sich der Display-Typ von `none` zu einem anderen Typ ändert.
- {{cssxref("display")}}-Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, sodass das `<dialog>` für die Dauer des Übergangs `display: block` (oder ein anderer sichtbarer `display`-Wert auf dem offenen Zustand des Dialogs als `block` gesetzt) bleibt, wodurch die anderen Übergänge sichtbar sind.
- {{cssxref("overlay")}}-Eigenschaft
  - : Schließen Sie `overlay` in der Transitionsliste ein, um sicherzustellen, dass die Entfernung des `<dialog>` von der obersten Ebene erst nach Abschluss der Transition erfolgt, wodurch der Übergang wiederum sichtbar ist.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Transitions (oder auf die {{cssxref("transition")}}-Kurzform), um diskrete Transitions auf diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Hier ist ein kurzes Beispiel, das zeigt, wie dies aussehen könnte.

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

Im CSS fügen wir einen `@starting-style`-Block ein, der die Startstile für die Transition der `opacity`- und `transform`-Eigenschaften definiert, Endstile der Transition auf dem `dialog:open`-Zustand und Standardstile auf dem Standarddialogzustand, zu dem nach einmaligem Erscheinen des `<dialog>` zurückzukehren ist. Beachten Sie, dass die `<dialog>`-`transition`-Liste nicht nur diese Eigenschaften enthält, sondern auch die `display`- und `overlay`-Eigenschaften, beide mit `allow-discrete` auf ihnen gesetzt.

Wir setzen auch einen Startstilwert für die {{cssxref("background-color")}}-Eigenschaft auf dem {{cssxref("::backdrop")}}, das hinter dem `<dialog>` erscheint, wenn es geöffnet wird, um eine besonders schöne Verdunklungsanimation zu erzielen. Der `dialog:open::backdrop`-Selektor wählt nur die Hintergründe von `<dialog>`-Elementen, wenn der Dialog geöffnet ist.

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
> In Browsern, die die {{cssxref(":open")}}-Pseudoklasse nicht unterstützen, können Sie den Attributselektor `dialog[open]` verwenden, um das `<dialog>`-Element anzupassen, wenn es sich im offenen Zustand befindet.

##### JavaScript

Das JavaScript fügt den Anzeigeschaltflächen und den Schließen-Buttons Event-Handler hinzu, um das `<dialog>` zu zeigen bzw. zu schließen, wenn sie geklickt werden:

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
> Da `<dialog>`-Elemente bei jedem Aufrufen von `display: none` zu `display: block` wechseln, wechseln sie bei jedem Eingangsübergang von ihrem `@starting-style`-Stil zu ihrem `dialog:open`-Stil. Wenn das `<dialog>` geschlossen wird, wechselt es von seinem `dialog:open`-Zustand zurück zum Standardelementzustand.
>
> Bei solchen Fällen ist es möglich, dass der Stilübergang beim Eintritt und Austritt unterschiedlich ist. Siehe unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used)-Beispiel für einen Beweis dafür.

#### Dialog-Keyframe-Animationen

Beim Animieren eines `<dialog>`-Elements mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu beachten, im Vergleich zu Transitionen:

- Sie geben kein `@starting-style` an.
- Sie schließen den `display`-Wert in einem Keyframe ein; dies wird der `display`-Wert für die Gesamtheit der Animation sein oder bis ein anderer nicht-`none` Anzeige-Wert angetroffen wird.
- Sie müssen keine diskreten Animationen explizit aktivieren; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Keyframes.
- Es ist nicht erforderlich, `overlay` innerhalb von Keyframes zu setzen; die `display`-Animation kümmert sich um die Animation des `<dialog>` von sichtbar zu versteckt.

Schauen wir uns ein Beispiel an, um zu sehen, wie das aussieht.

##### HTML

Zuerst enthält das HTML ein `<dialog>`-Element und einen Button, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Keyframes, um zwischen den geschlossenen und gezeigten Zuständen des `<dialog>` zu animieren, plus die Einblendanimation für den Hintergrund des `<dialog>`. Die Animationen der `<dialog>`s beinhalten das Animieren von `display`, um sicherzustellen, dass die tatsächlichen sichtbaren Animationseffekte während der gesamten Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich ist, die Hintergrund-Einblendung zu animieren — der Hintergrund wird sofort aus dem DOM entfernt, wenn das `<dialog>` geschlossen wird, sodass nichts zu animieren ist.

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

Schließlich fügt das JavaScript den Buttons Event-Handler hinzu, um das `<dialog>` anzuzeigen und zu schließen:

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        Abschnittwurzel
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
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

- [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis der `HTMLDialogElement`-Schnittstelle
- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis der `HTMLDialogElement`-Schnittstelle
- [`open`](/de/docs/Web/API/HTMLDialogElement/open)-Eigenschaft der `HTMLDialogElement`-Schnittstelle
- Globales Attribut [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) für HTML-Elemente
- {{CSSXref("::backdrop")}} CSS-Pseudoelement
- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
