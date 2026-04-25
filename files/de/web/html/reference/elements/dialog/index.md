---
title: "`<dialog>` HTML-Dialogelement"
short-title: <dialog>
slug: Web/HTML/Reference/Elements/dialog
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<dialog>`**-Element von [HTML](/de/docs/Web/HTML) repräsentiert ein modales oder nicht-modales Dialogfeld oder eine andere interaktive Komponente, wie z.B. eine abweisbare Warnung, Inspektor oder ein Unterfenster.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf dem `<dialog>`-Element verwendet werden. Siehe [Zusätzliche Anmerkungen](#zusätzliche_anmerkungen).

- `closedby`
  - : Gibt die Arten von Benutzeraktionen an, die zum Schließen des `<dialog>`-Elements verwendet werden können. Dieses Attribut unterscheidet drei Methoden, mit denen ein Dialog geschlossen werden kann:
    - Eine _leicht abweisende Benutzeraktion_, bei der das `<dialog>` geschlossen wird, wenn der Benutzer außerhalb davon klickt oder tippt. Dies entspricht dem ["leicht abweisenden" Verhalten von "Auto"-Zustand-Popovers](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss).
    - Eine _plattformspezifische Benutzeraktion_, wie das Drücken der <kbd>Esc</kbd>-Taste auf Desktop-Plattformen, oder eine "Zurück"- oder "Abweisen"-Geste auf mobilen Plattformen.
    - Ein vom Entwickler spezifizierter Mechanismus wie ein {{htmlelement("button")}} mit einem [`click`](/de/docs/Web/API/Element/click_event)-Handler, der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) oder eine {{htmlelement("form")}}-Übertragung aufruft.

    Mögliche Werte sind:
    - `any`
      - : Der Dialog kann mit einer der drei Methoden geschlossen werden.
    - `closerequest`
      - : Der Dialog kann mit einer plattformspezifischen Benutzeraktion oder einem vom Entwickler spezifizierten Mechanismus geschlossen werden.
    - `none`
      - : Der Dialog kann nur mit einem vom Entwickler spezifizierten Mechanismus geschlossen werden.

    Hat das `<dialog>`-Element keinen gültigen `closedby`-Wert angegeben, so verhält es sich
    - wenn es mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet wurde, als wäre der Wert `"closerequest"`
    - andernfalls verhält es sich, als wäre der Wert `"none"`.

- `open`
  - : Zeigt an, dass das Dialogfeld aktiv ist und für Interaktionen verfügbar ist. Wenn das `open`-Attribut nicht gesetzt ist, wird das Dialogfeld für den Benutzer nicht sichtbar sein.
    Es wird empfohlen, die Methoden `.show()` oder `.showModal()` zu verwenden, um Dialoge anzuzeigen, anstatt des `open`-Attributs. Wird ein `<dialog>` mit dem `open`-Attribut geöffnet, ist es nicht modal.

    > [!NOTE]
    > Obwohl Sie den offenen und geschlossenen Zustand nicht-modaler Dialogfelder durch Umschalten des Vorhandenseins des `open`-Attributs umschalten können, wird dieses Vorgehen nicht empfohlen. Siehe [`open`](/de/docs/Web/API/HTMLDialogElement/open) für weitere Informationen.

## Beschreibung

Das HTML-Element `<dialog>` wird verwendet, um sowohl modale als auch nicht-modale Dialogfelder zu erstellen.
Modale Dialogfelder blockieren die Interaktion mit anderen UI-Elementen und machen den Rest der Seite [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert#:~:text=When,clicked), während nicht-modale Dialogfelder die Interaktion mit dem Rest der Seite erlauben.

### Steuerung von Dialogen mittels JavaScript

Mit JavaScript können Sie das `<dialog>`-Element anzeigen und schließen.
Sie können die Methode [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwenden, um einen modalen Dialog anzuzeigen, und die Methode [`show()`](/de/docs/Web/API/HTMLDialogElement/show), um einen nicht-modalen Dialog anzuzeigen. Das Dialogfeld kann mit der Methode [`close()`](/de/docs/Web/API/HTMLDialogElement/close) geschlossen werden oder mittels der [`dialog`](/de/docs/Web/HTML/Reference/Elements/form#method)-Methode, wenn ein innerhalb des `<dialog>`-Elements geschachteltes `<form>` übermittelt wird. Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

### Modale Dialoge mit Aufruferkommandos

Modale Dialoge können deklarativ unter Verwendung der [Invoker Commands API](/de/docs/Web/API/Invoker_Commands_API) HTML-Attribute [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) geöffnet und geschlossen werden, die auf {{htmlelement("button")}}-Elementen gesetzt werden können.

Das Attribut `command` legt das bestimmte Kommando fest, das gesendet werden soll, wenn das `<button>`-Element angeklickt wird, während `commandfor` die `id` des Ziel-Dialogs festlegt.
Die für Dialoge sendbaren Kommandos sind [`"show-modal"`](/de/docs/Web/HTML/Reference/Elements/button#show-modal), [`"close"`](/de/docs/Web/HTML/Reference/Elements/button#close) und [`"request-close"`](/de/docs/Web/HTML/Reference/Elements/button#request-close).

Das HTML unten zeigt, wie die Attribute auf ein `<button>`-Element angewendet werden können, sodass es gedrückt werden kann, um ein modales `<dialog>` mit einer `id` von "my-dialog" zu öffnen.

```html
<button command="show-modal" commandfor="my-dialog">Open dialog</button>

<dialog id="my-dialog">
  <p>This dialog was opened using an invoker command.</p>
  <button commandfor="my-dialog" command="close">Close</button>
</dialog>
```

### Nicht-modale Dialoge mit Popover-Kommandos

Nicht-modale Dialoge können deklarativ mit den HTML-Attributen [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) der [Popover API](/de/docs/Web/API/Popover_API) geöffnet, geschlossen und umgeschaltet werden, die auf {{htmlelement("button")}}- und {{htmlelement("input")}}-Elementen definiert werden können.

Das `<dialog>` muss in ein Popover umgewandelt werden, indem das `popover`-Attribut hinzugefügt wird.
Sie können dann `popovertarget` auf einem Button/Eingabefeld verwenden, um das Zielpopover anzugeben, und `popovertargetaction`, um die Aktion zu spezifizieren, die auf dem Popover ausgeführt werden soll, wenn der Button angeklickt wird.
Beachten Sie, dass das Dialogfeld, da es sich um ein Popover handelt, nicht modal ist, sodass Sie es durch Klicken außerhalb des Dialogs schließen können.

Das HTML unten zeigt, wie die Attribute auf ein `<button>`-Element angewendet werden können, sodass es gedrückt werden kann, um ein modales `<dialog>` mit einer `id` von "my-dialog" anzuzeigen und zu verbergen.

```html
<button popovertarget="my-dialog">Open dialog</button>

<dialog id="my-dialog" popover>
  <p>This dialog was opened using a popovertargetaction attribute.</p>
  <button popovertarget="my-dialog" popovertargetaction="hide">Close</button>
</dialog>
```

Die Popover API bietet auch Eigenschaften, mit denen der Zustand in JavaScript abgerufen und gesetzt werden kann.

### Schließen von Dialogen

Es ist wichtig, für jedes `<dialog>`-Element einen Schließmechanismus bereitzustellen und sicherzustellen, dass dieser auf Geräten funktioniert, die möglicherweise keine physische Tastatur haben.

Es gibt mehrere Möglichkeiten, einen Dialog zu schließen:

- Das Formular innerhalb des `<dialog>`-Elements übermitteln, wenn `method="dialog"` auf dem `<form>`-Element gesetzt ist (siehe das Beispiel [Verwendung des Dialog-Open-Attributs](#using_the_dialog_open_attribute)).
- Klicken außerhalb des Dialogbereichs, wenn "Light-Dismiss" aktiviert ist (siehe das Beispiel [Popover API HTML-Attribute](#popover_api_html-attribute)).
- Drücken der <kbd>Esc</kbd>-Taste, in Dialogen, wo es aktiviert ist (siehe das Beispiel [Popover API HTML-Attribute](#popover_api_html-attribute)).
- Aufruf der Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) (siehe das [modale Beispiel](#erstellung_eines_modalen_dialogs)).

### CSS-Styling

Ein `<dialog>` kann mit seinem Element-Namen (wie jedes andere Element) ausgewählt werden, und Sie können auch seinen Zustand mit Pseudo-Klassen wie [`:modal`](/de/docs/Web/CSS/Reference/Selectors/:modal) und [`:open`](/de/docs/Web/CSS/Reference/Selectors/:open) abgleichen.

Das CSS-{{cssxref('::backdrop')}}-Pseudo-Element kann verwendet werden, um den Hintergrund eines modalen Dialogs zu stylen, der hinter dem `<dialog>`-Element angezeigt wird, wenn der Dialog mit der Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) angezeigt wird. Dieses Pseudo-Element könnte zum Beispiel verwendet werden, um den inerten Inhalt hinter dem modalen Dialog zu verwischen, abzudunkeln oder anderweitig zu verschleiern.

### Zusätzliche Anmerkungen

- HTML-{{HTMLElement("form")}}-Elemente können verwendet werden, um ein Dialogfeld zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der Button, der das Formular übermittelt, [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` über die `dialog`-Methode übermittelt wird, schließt sich das Dialogfeld, die Zustände der Formularelemente werden gespeichert, aber nicht übermittelt und die Eigenschaft [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) wird auf den Wert des aktivierten Buttons gesetzt.
- Das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut sollte dem Element hinzugefügt werden, mit dem der Benutzer sofort interagieren soll, sobald ein modales Dialogfeld geöffnet wird. Wenn kein anderes Element mehr unmittelbare Interaktion einbezieht, wird empfohlen, `autofocus` dem Schließen-Button innerhalb des Dialogs hinzuzufügen oder dem Dialog selbst, wenn erwartet wird, dass der Benutzer es durch Klicken/Aktivieren schließen soll.
- Fügen Sie das `tabindex`-Attribut nicht dem `<dialog>`-Element hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Der Inhalt des Dialogs, einschließlich des Schließen-Buttons im Dialog, kann den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Beim Implementieren eines Dialogs ist es wichtig, den geeignetsten Ort zu bestimmen, um den Benutzerfokus zu setzen. Wenn [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwendet wird, um ein `<dialog>` zu öffnen, wird der Fokus auf das erste eingebettete fokussierbare Element gesetzt. Durch explizite Angabe der ersten Fokusplatzierung mittels des [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attributs wird sichergestellt, dass der Fokus zuerst auf dasjenigen Element gesetzt wird, das als der beste erste Fokusplatz für einen bestimmten Dialog betrachtet wird. Wenn man sich unsicher ist, da es möglicherweise nicht immer offensichtlich ist, wo der erste Fokus innerhalb eines Dialogs gesetzt werden könnte, insbesondere in Fällen, in denen der Inhalt eines Dialogs dynamisch beim Aufruf gerendert wird, kann das `<dialog>`-Element selbst der beste erste Fokusplatz sein.

Stellen Sie sicher, dass eine Möglichkeit bereitgestellt wird, um Benutzern zu ermöglichen, den Dialog zu schließen. Die robusteste Weise, alle Benutzer den Dialog schließen zu lassen, ist die Aufnahme eines expliziten Buttons zu diesem Zweck, wie z.B. ein Bestätigungs-, Abbruchs- oder Schließen-Button.

Standardmäßig kann ein Dialog, der durch die Methode `showModal()` aufgerufen wird, durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Ein nicht-modaler Dialog wird nicht von der <kbd>Esc</kbd>-Taste standardmäßig geschlossen, und je nachdem, was der nicht-modale Dialog darstellt, könnte es nicht erwünscht sein, dass dieses Verhalten auftritt. Tastaturbenutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und aufrechterhalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte das Drücken der <kbd>Esc</kbd>-Taste nur den zuletzt angezeigten Dialog schließen. Beim Verwenden von `<dialog>` wird dieses Verhalten vom Browser bereitgestellt.

Während Dialoge auch mit anderen Elementen erstellt werden können, bietet das native `<dialog>`-Element Usability- und Barrierefreiheitsfunktionen, die repliziert werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck verwenden. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhalten unterstützt und ordnungsgemäße Kennzeichnungsanforderungen eingehalten werden.

Das `<dialog>`-Element wird von Browsern ähnlich wie benutzerdefinierte Dialoge, die das ARIA-[role="dialog"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)-Attribut verwenden, exponiert. `<dialog>`-Elemente, die mit der `showModal()`-Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), während `<dialog>`-Elemente, die mit der `show()`-Methode aufgerufen werden oder mittels des `open`-Attributs oder durch Änderung des Standard-`display` eines `<dialog>` angezeigt werden, als [aria-modal="false"] angezeigt werden. Beim Implementieren von modalen Dialogen sollte alles andere als das `<dialog>` und seine Inhalte mit dem [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attribut inert gerendert werden. Beim Verwenden von `<dialog>` zusammen mit der `HTMLDialogElement.showModal()`-Methode wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### Invoker Command API HTML-Attribute

Dieses Beispiel zeigt, wie Sie ein modales Dialog verwenden können, um es über die HTML-Attribute [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) der [Invoker Commands API](/de/docs/Web/API/Invoker_Commands_API) zu öffnen und zu schließen.

Zuerst deklarieren wir ein {{htmlelement("button")}}-Element und setzen das `command`-Attribut auf [`"show-modal"`](/de/docs/Web/HTML/Reference/Elements/button#show-modal) und das `commandfor`-Attribut auf die `id` des zu öffnenden Dialogs (`my-dialog`).
Dann deklarieren wir ein `<dialog>`-Element, das einen "Schließen"-\<button> enthält. Dieser Button sendet den [`"close"`](/de/docs/Web/HTML/Reference/Elements/button#close) Befehl zur (gleichen) Dialog-ID.

```html
<button command="show-modal" commandfor="my-dialog">Open dialog</button>

<dialog id="my-dialog">
  <p>This dialog was opened using an invoker command.</p>
  <button commandfor="my-dialog" command="close">Close</button>
</dialog>
```

#### Ergebnis

Öffnen Sie den Dialog, indem Sie den "Open dialog"-Button drücken.
Sie können den Dialog schließen, indem Sie den "Close"-Button auswählen oder die <kbd>Esc</kbd>-Taste drücken.

{{EmbedLiveSample("Open and close a dialog using Invoker Command API HTML attributes", "100%", 200)}}

### Popover API HTML-Attribute

Dieses Beispiel zeigt, wie Sie einen nicht-modalen Dialog mithilfe der HTML-Attribute [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover), [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) der [Popover API](/de/docs/Web/API/Popover_API) öffnen und schließen können.

Das `<dialog>` wird durch Hinzufügen des `popover`-Attributs in ein Popover umgewandelt.
Da wir keinen Wert für das Attribut angegeben haben, wird der Standardwert `"auto"` verwendet.
Dies ermöglicht das "light dismiss"-Verhalten, sodass der Dialog geschlossen werden kann, indem Sie außerhalb des Dialogs klicken oder die <kbd>Esc</kbd>-Taste drücken.
Wir könnten stattdessen `popover="manual"` gesetzt haben, um das "light dismiss"-Verhalten zu deaktivieren, in diesem Fall müsste der Dialog mit dem "Close"-Button geschlossen werden.

Beachten Sie, dass wir das `popovertargetaction`-Attribut für das `<button>`, das den Dialog öffnet, nicht spezifiziert haben.
Dies ist in diesem Fall nicht erforderlich, da der Standardwert `toggle` ist, wodurch der Dialog beim Klicken des Buttons zwischen seinen offenen und geschlossenen Zuständen umgeschaltet wird.

```html
<button popovertarget="my-dialog">Open dialog</button>

<dialog id="my-dialog" popover>
  <p>This dialog was opened using a popovertargetaction attribute.</p>
  <button popovertarget="my-dialog" popovertargetaction="hide">Close</button>
</dialog>
```

#### Ergebnis

Öffnen Sie den Dialog, indem Sie den "Open dialog"-Button drücken.
Sie können den Dialog schließen, indem Sie den "Close"-Button auswählen oder die <kbd>Esc</kbd>-Taste drücken.
Sie können ihn auch schließen, indem Sie außerhalb des Dialogs auswählen, da er nicht modal ist.

{{EmbedLiveSample("Popover API HTML attributes", "100%", 200)}}

### Verwendung des `open`-Dialogs-Attributs

In diesem Beispiel wird gezeigt, wie Sie das boolesche `open`-Attribut auf einem `<dialog>`-Element setzen können, um einen HTML-basierten nicht-modalen Dialog zu erstellen, der bereits beim Laden der Seite offen ist.

Der Dialog kann durch Anklicken des "OK"-Buttons geschlossen werden, da das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist.
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

Dieser Dialog ist anfänglich offen und nicht modal aufgrund der Anwesenheit des `open`-Attributs.
Nachdem Sie "OK" geklickt haben, wird der Dialog geschlossen, und das Ergebnisfenster bleibt leer.

{{EmbedLiveSample("HTML-only non-modal dialog", "100%", 200)}}

> [!NOTE]
> Laden Sie die Seite neu, um die Ausgabe zurückzusetzen.

Wenn der Dialog geschlossen wird, gibt es keine Methode, ihn erneut zu öffnen. Die bevorzugte Methode, nicht-modale Dialoge anzuzeigen, ist die Nutzung der Methode [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show).
Es ist möglich, die Anzeige des Dialogs durch das Hinzufügen oder Entfernen des booleschen `open`-Attributs umzuschalten, jedoch wird diese Praxis nicht empfohlen.

### Erstellung eines modalen Dialogs

Dieses Beispiel zeigt einen modalen Dialog mit einem [Gradienten](/de/docs/Web/CSS/Reference/Values/gradient) als Hintergrund an. Die Methode `.showModal()` öffnet den modalen Dialog, wenn der "Show the dialog"-Button aktiviert wird. Der Dialog kann durch Drücken der <kbd>Esc</kbd>-Taste oder mit der `close()`-Methode geschlossen werden, wenn der "Close"-Button innerhalb des Dialogs aktiviert wird.

Wenn ein Dialog geöffnet wird, gibt der Browser standardmäßig dem ersten fokussierbaren Element innerhalb des Dialogs den Fokus. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut auf den "Close"-Button angewendet, wodurch dieser den Fokus erhält, wenn der Dialog geöffnet wird, da dies das Element ist, mit dem der Benutzer voraussichtlich sofort nach dem Öffnen des Dialogs interagiert.

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

Das Dialog wird modal mittels der `.showModal()`-Methode geöffnet und mit den Methoden `.close()` oder `.requestClose()` geschlossen.

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

Wenn der modale Dialog angezeigt wird, erscheint er über allen anderen möglicherweise vorhandenen Dialogfeldern. Alles außerhalb des modalen Dialogs ist inert, und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass beim Öffnen des Dialogs außer dem Dialog selbst keine Interaktion mit dem Dokument möglich ist; der „Show the dialog“-Button wird größtenteils von dem fast opaken Hintergrund des Dialogs verdeckt und ist inert.

### Umgang mit dem Rückgabewert des Dialogs

Dieses Beispiel zeigt den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie ein modaler Dialog mit einem Formular geschlossen wird. Standardmäßig ist der `returnValue` ein leerer String oder der Wert des Buttons, der das Formular innerhalb des `<dialog>`-Elements übermittelt, falls einer vorhanden ist.

In diesem Beispiel wird ein modaler Dialog angezeigt, wenn der „Show the dialog“-Button aktiviert wird. Der Dialog enthält ein Formular mit einem {{HTMLElement("select")}}-Element und zwei {{HTMLElement("button")}}-Elementen, die standardmäßig `type="submit"` haben. Ein Event-Listener aktualisiert den Wert des „Confirm“-Buttons, wenn die Auswahlauswahl geändert wird. Wenn der „Confirm“-Button aktiviert wird, um den Dialog zu schließen, ist der aktuelle Wert des Buttons der Rückgabewert. Wenn der Dialog durch Drücken des „Cancel“-Buttons geschlossen wird, ist der `returnValue` `cancel`.

Wenn der Dialog geschlossen wird, wird der Rückgabewert unter dem „Show the dialog“-Button angezeigt. Wenn der Dialog durch Drücken der <kbd>Esc</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert, und das `close`-Ereignis tritt nicht auf, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

Das Dialog wird über eine Ereignislistener auf dem „Show the dialog“-Button geöffnet, der [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) aufruft, wenn der Button gedrückt wird.

Der Dialog wird geschlossen, wenn der „Cancel“-Button angeklickt wird, da das `<button>`-Tag das [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input/submit#formmethod)-Attribut enthält.
Wenn die Methode eines Formulars [`dialog`](#zusätzliche_anmerkungen) ist, wird der Zustand des Formulars gespeichert, aber nicht übermittelt und das Dialogfeld schließt sich (das Attribut überschreibt die Standardmethode {{HTTPMethod("GET")}} der {{HTMLElement("form")}}).
Ohne eine `action` würde die Übertragung des Formulars über die Standardmethode {{HTTPMethod("GET")}} zum Neuladen der Seite führen.
Wir verwenden JavaScript, um die Übermittlung zu verhindern und mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) das Dialogfeld zu schließen.

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

### Schließen eines Dialogs mit einer erforderlichen Formular-Eingabe

Wenn ein Formular in einem Dialog eine erforderliche Eingabe hat, lässt der Benutzeragent das Schließen des Dialogs erst zu, wenn Sie einen Wert für die erforderliche Eingabe bereitgestellt haben. Um einen solchen Dialog zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate)-Attribut auf dem Schließen-Button oder rufen Sie die `close()`-Methode am Dialogobjekt auf, wenn der Schließen-Button angeklickt wird.

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

Aus dem Ergebnis sehen wir, dass es unmöglich ist, den Dialog mit dem Normal-Close-Button zu schließen. Aber der Dialog kann geschlossen werden, wenn wir die Formularvalidierung mit dem `formnovalidate`-Attribut auf dem Cancel-Button umgehen. Programmatisch wird `dialog.close()` auch einen solchen Dialog schließen.

### Vergleich unterschiedlicher `closedby`-Verhaltensweisen

Dieses Beispiel zeigt den Unterschied im Verhalten zwischen verschiedenen Werten des [`closedby`](#closedby)-Attributs.

#### HTML

Wir bieten drei {{htmlelement("button")}}-Elemente und drei `<dialog>`-Elemente an. Jeder Button wird programmiert, um einen anderen Dialog zu öffnen, der das Verhalten eines der drei Werte des `closedby`-Attributs — `none`, `closerequest` und `any` — demonstriert. Beachten Sie, dass jedes `<dialog>`-Element ein `<button>`-Element enthält, das zum Schließen verwendet wird.

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

Hier weisen wir verschiedenen Variablen die Referenzen der Hauptsteuer-`<button>`-Elemente, der `<dialog>`-Elemente und der „Close“-`<button>`-Elemente innerhalb der Dialoge zu. Zuerst weisen wir jedem Steuer-Button einen [`click`](/de/docs/Web/API/Element/click_event)-Ereignislistener mit [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) zu, dessen Ereignisbehandlungsfunktion das zugeordnete `<dialog>`-Element via [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) öffnet. Anschließend durchlaufen wir die „Close“-`<button>`-Referenzen und weisen jeder eine `click`-Ereignisbearbeitungsfunktion zu, die sein `<dialog>`-Element via [`close()`](/de/docs/Web/API/HTMLDialogElement/close) schließt.

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

Versuchen Sie, jeden Button anzuklicken, um einen Dialog zu öffnen. Der erste kann nur durch Klicken seines „Close“-Buttons geschlossen werden. Der zweite kann auch durch eine plattformspezifische Benutzeraktion wie das Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Der dritte hat ein vollständiges ["leichtes Abweisen"-Verhalten](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss), sodass er auch durch Klicken oder Tippen außerhalb des Dialogs geschlossen werden kann.

### Animation von Dialogen

`<dialog>` wird auf [`display: none;`](/de/docs/Web/CSS/Reference/Properties/display) gesetzt, wenn es versteckt ist, und `display: block;`, wenn es angezeigt wird, und ebenso wird es aus der/der {{Glossary("top_layer", "Top-Ebene")}} und dem [Barrierefreiheitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt bzw. hinzugefügt. Daher muss das {{cssxref("display")}}-Attribut animierbar sein, damit `<dialog>`-Elemente animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/Reference/Properties/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Speziell wird der Browser zwischen `none` und einem anderen `display`-Wert wechseln, sodass der animierte Inhalt die gesamte Animationsdauer sichtbar ist.

Einige Beispiele:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wird der Wert bei `0%` der Animationsdauer auf `block` wechseln, sodass er die ganze Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wird der Wert bei `100%` der Animationsdauer zu `none` wechseln, sodass er die ganze Zeit sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig verfügbar, wenn mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) animiert wird; ein entsprechender Schritt ist nicht erforderlich.

#### Transition von Dialog-Elementen

Beim Animieren von `<dialog>` mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- {{cssxref("@starting-style")}} At-Regel
  - : Liefert eine Reihe von Ausgangswerten für Eigenschaften, die auf das `<dialog>` gesetzt werden sollen, von denen Sie jedes Mal, wenn es geöffnet wird, übergangsweise ausgehen möchten. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Transitionen nur dann auf, wenn sich ein Eigenschaftswert auf einem sichtbaren Element ändert; sie werden nicht ausgelöst bei den ersten Stilaktualisierungen von Elementen oder wenn der `display`-Typ von `none` in einen anderen Typ geändert wird.
- {{cssxref("display")}} Eigenschaft
  - : Fügen Sie `display` zur Transitionsliste hinzu, sodass das `<dialog>` während der gesamten Transition auf `display: block` (oder einem anderen sichtbaren `display`-Wert im offenen Zustand des Dialogs) bleibt, wodurch sichergestellt wird, dass andere Transitionen sichtbar sind.
- {{cssxref("overlay")}} Eigenschaft
  - : Schließen Sie `overlay` in die Transitionsliste ein, um das Entfernen des `<dialog>` von der Top-Schicht zu verzögern, bis die Transition abgeschlossen ist, was wiederum sicherstellt, dass die Transition sichtbar ist.
- {{cssxref("transition-behavior")}} Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display` und `overlay` Transitionen (oder auf die {{cssxref("transition")}} Kurzschreibung), um diskrete Transitionen für diese beiden nicht standardmäßig animierbaren Eigenschaften zu aktivieren.

Hier ist ein kurzes Beispiel, um zu zeigen, wie das aussehen könnte.

##### HTML

Das HTML enthält ein `<dialog>`-Element und einen Button, um das Dialog zu zeigen. Außerdem enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS verwenden wir einen `@starting-style`-Block, der die Übergangsausgangsstile für die `opacity`- und `transform`-Eigenschaften definiert, Übergangs-Endstile auf dem `dialog:open`-Zustand und Standardstile im Standard-`dialog`-Zustand, zu dem zurückgegangen wird, sobald das `<dialog>` aufgetaucht ist. Beachten Sie, wie die `transition`-Liste des `<dialog>` nicht nur diese Eigenschaften, sondern auch die `display`- und `overlay`-Eigenschaften enthält, jede mit `allow-discrete`.

Wir setzen auch einen Ausgangswert für die {{cssxref("background-color")}}-Eigenschaft auf das {{cssxref("::backdrop")}}, das hinter dem `<dialog>` erscheint, wenn es geöffnet wird, um eine schöne Verdunkelungs-Animation bereitzustellen. Der `dialog:open::backdrop`-Selektor wählt nur die Hintergründe von `<dialog>`-Elementen aus, wenn der Dialog offen ist.

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
> In Browsern, die die {{cssxref(":open")}}-Pseudo-Klasse nicht unterstützen, können Sie als Ausweichmöglichkeit den Attributselektor `dialog[open]` verwenden, um das `<dialog>`-Element im geöffneten Zustand zu stylen.

##### JavaScript

Das JavaScript fügt den Show- und Close-Buttons Ereignis-Handler hinzu, die das `<dialog>` öffnen und schließen, wenn sie angeklickt werden:

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

Der Code rendert folgendermaßen:

{{ EmbedLiveSample("Transitioning dialog elements", "100%", "200") }}

> [!NOTE]
> Da `<dialog>` jedes Mal von `display: none` zu `display: block` wechselt, wenn es gezeigt wird, wechselt es bei jeder Eingangs-Transition von seinen `@starting-style`-Stilen zu seinen `dialog:open`-Stilen. Wenn `<dialog>` schließt, wechselt es von seinem `dialog:open`-Zustand zum Standard-`dialog`-Zustand.
>
> Es ist möglich, dass sich die Stil-Transition beim Eintritts- und Austrittsvorgang unterscheidet. Sehen Sie sich unser [Beispiel zur Demonstration, wann Ausgangsstile verwendet werden](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used) an, für einen entsprechenden Beweis.

#### Keyframe-Animationen von Dialogen

Beim Animieren eines `<dialog>` mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu beachten:

- Sie geben kein `@starting-style` an.
- Sie schließen den `display`-Wert in einem Keyframe ein; dies wird für die Gesamtdauer der Animation der `display`-Wert sein oder bis ein anderer nicht-`none` `display`-Wert gefunden wird.
- Sie müssen keine diskreten Animationen explizit aktivieren; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Keyframes.
- Sie müssen kein `overlay` innerhalb von Keyframes setzen; die `display`-Animation behandelt die Animation des `<dialog>` vom Gezeigten zum Verborgenen.

Lassen Sie uns ein Beispiel anschauen, damit Sie sehen können, wie das aussieht.

##### HTML

Zuerst enthält das HTML ein `<dialog>`-Element und einen Button, um das Dialog anzuzeigen. Außerdem enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Keyframes, um zwischen den geschlossenen und gezeigten Zuständen des `<dialogs>` zu animieren, sowie die Einblend-Animation für das `<dialog>`-Hintergrund. Die `<dialog>`-Animationen enthalten die Animation von `display`, um sicherzustellen, dass die tatsächlichen sichtbaren Animationseffekte während der gesamten Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, das Hintergrund-Ausblenden zu animieren – das Hintergrund wird beim Schließen des `<dialog>` sofort aus dem DOM entfernt, sodass nichts animiert werden kann.

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

Schließlich fügt das JavaScript den Buttons Ereignis-Handler hinzu, um das `<dialog>` anzuzeigen und zu schließen:

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

Der Code rendert folgendermaßen:

{{ EmbedLiveSample("dialog keyframe animations", "100%", "200") }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow-Inhalt</a>,
        Abschnittswurzel
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow-Inhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Auslassung der Tags</th>
      <td>Keine, sowohl der Anfangs- als auch der Endtag sind verpflichtend.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow-Inhalt</a>
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

- [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis der `HTMLDialogElement`-Schnittstelle
- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis der `HTMLDialogElement`-Schnittstelle
- [`open`](/de/docs/Web/API/HTMLDialogElement/open)-Eigenschaft der `HTMLDialogElement`-Schnittstelle
- [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-globales Attribut für HTML-Elemente
- {{CSSXref("::backdrop")}} CSS-Pseudo-Element
- [Web-Formulare](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
