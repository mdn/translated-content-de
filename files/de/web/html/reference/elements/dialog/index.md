---
title: "`<dialog>` HTML-Dialogelement"
short-title: <dialog>
slug: Web/HTML/Reference/Elements/dialog
l10n:
  sourceCommit: c03648dd993f7afd0c17ce57061dc31d64f5e943
---

Das **`<dialog>`**-Element in [HTML](/de/docs/Web/HTML) repräsentiert ein modales oder nicht-modales Dialogfenster oder eine andere interaktive Komponente, wie zum Beispiel eine ausblendbare Warnung, ein Inspektor oder ein Unterfenster.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Das Attribut `tabindex` darf nicht auf dem `<dialog>`-Element verwendet werden. Siehe [Zusätzliche Hinweise](#zusätzliche_hinweise).

- `closedby`
  - : Gibt die Arten von Benutzeraktionen an, die verwendet werden können, um das `<dialog>`-Element zu schließen. Dieses Attribut unterscheidet drei Methoden, mit denen ein Dialog geschlossen werden kann:
    - Eine _leichte Dis-Aktion_, bei der das `<dialog>` geschlossen wird, wenn der Benutzer außerhalb davon klickt oder tippt. Dies entspricht dem ["leichte Dis-Aktion"-Verhalten des "auto"-Zustands von Popovers](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss).
    - Eine _plattform-spezifische Benutzeraktion_, wie das Drücken der <kbd>Esc</kbd>-Taste auf Desktop-Plattformen oder einer "Zurück"- oder "Schließen"-Geste auf mobilen Plattformen.
    - Ein entwickler-spezifischer Mechanismus wie ein {{htmlelement("button")}} mit einem [`click`](/de/docs/Web/API/Element/click_event)-Handler, der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) aufruft, oder ein {{htmlelement("form")}}-Absenden.

    Mögliche Werte sind:
    - `any`
      - : Der Dialog kann mit einer der drei Methoden geschlossen werden.
    - `closerequest`
      - : Der Dialog kann mit einer plattform-spezifischen Benutzeraktion oder einem entwickler-spezifischen Mechanismus geschlossen werden.
    - `none`
      - : Der Dialog kann nur mit einem entwickler-spezifischen Mechanismus geschlossen werden.

    Wenn das `<dialog>`-Element keinen gültigen `closedby`-Wert besitzt, dann
    - wenn es mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet wurde, verhält es sich so, als wäre der Wert `"closerequest"`.
    - andernfalls verhält es sich so, als wäre der Wert `"none"`.

- `open`
  - : Gibt an, dass das Dialogfenster aktiv ist und zur Interaktion verfügbar ist. Wenn das `open`-Attribut nicht gesetzt ist, wird das Dialogfenster für den Benutzer nicht sichtbar sein. Es wird empfohlen, die Methoden `.show()` oder `.showModal()` zu verwenden, um Dialoge darzustellen, anstatt das `open`-Attribut zu verwenden. Wenn ein `<dialog>` mit dem `open`-Attribut geöffnet wird, ist es nicht modales.

    > [!NOTE]
    > Obwohl Sie zwischen offenen und geschlossenen Zuständen von nicht-modalen Dialogen wechseln können, indem Sie die Präsenz des `open`-Attributs umschalten, wird dieser Ansatz nicht empfohlen. Siehe [`open`](/de/docs/Web/API/HTMLDialogElement/open) für weitere Informationen.

## Beschreibung

Das HTML-Element `<dialog>` wird verwendet, um sowohl modale als auch nicht-modale Dialogfenster zu erstellen.
Modale Dialogfenster blockieren die Interaktion mit anderen UI-Elementen, wodurch der Rest der Seite [inert](/de/docs/Web/HTML/Reference/Global_attributes/inert#:~:text=When,clicked) wird, während nicht-modale Dialogfenster die Interaktion mit dem Rest der Seite ermöglichen.

### Steuerung von Dialogen mit JavaScript

JavaScript kann verwendet werden, um das `<dialog>`-Element anzuzeigen und zu schließen.
Sie können die [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode verwenden, um ein modales Dialogfenster anzuzeigen, und die [`show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode, um ein nicht-modales Dialogfenster anzuzeigen. Das Dialogfenster kann mit der [`close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode oder mit der [`dialog`](/de/docs/Web/HTML/Reference/Elements/form#method)-Methode beim Absenden eines im `<dialog>`-Element verschachtelten `<form>` geschlossen werden.
Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

### Modale Dialoge mit Invoker-Befehlen

Modale Dialoge können deklarativ geöffnet und geschlossen werden, indem HTML-Attribute der [Invoker Commands API](/de/docs/Web/API/Invoker_Commands_API) verwendet werden: [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command), die auf {{htmlelement("button")}}-Elementen gesetzt werden können.

Das `command`-Attribut legt den bestimmten Befehl fest, der gesendet werden soll, wenn das `<button>`-Element geklickt wird, während `commandfor` die `id` des Zieldialogs festlegt.
Die Befehle, die für Dialoge gesendet werden können, sind [`"show-modal"`](/de/docs/Web/HTML/Reference/Elements/button#show-modal), [`"close"`](/de/docs/Web/HTML/Reference/Elements/button#close) und [`"request-close"`](/de/docs/Web/HTML/Reference/Elements/button#request-close).

Der folgende HTML-Code demonstriert, wie die Attribute auf ein `<button>`-Element angewendet werden, sodass es gedrückt werden kann, um ein modales `<dialog>` mit einer `id` von "my-dialog" zu öffnen.

```html
<button command="show-modal" commandfor="my-dialog">Open dialog</button>

<dialog id="my-dialog">
  <p>This dialog was opened using an invoker command.</p>
  <button commandfor="my-dialog" command="close">Close</button>
</dialog>
```

### Nicht-modale Dialoge mit Popover-Befehlen

Nicht-modale Dialoge können deklarativ geöffnet, geschlossen und umgeschaltet werden, indem die HTML-Attribute [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) der [Popover API](/de/docs/Web/API/Popover_API) verwendet werden, die für {{htmlelement("button")}} und {{htmlelement("input")}}-Elemente definiert werden können.

Das `<dialog>` muss durch Hinzufügen des `popover`-Attributs in ein Popover umgewandelt werden.
Sie können dann `popovertarget` auf einem Button/Input verwenden, um das Ziel-Popover anzuzeigen, und `popovertargetaction`, um die Aktion anzugeben, die auf dem Popover erfolgen soll, wenn der Button geklickt wird.
Beachten Sie, dass das Dialog ist ein Popover, es wird also nicht-modales sein, sodass Sie es durch Klicken außerhalb des Dialogs schließen können.

Der folgende HTML-Code zeigt, wie die Attribute auf ein `<button>`-Element angewendet werden, sodass es gedrückt werden kann, um ein nicht-modales `<dialog>` mit einer `id` von "my-dialog" anzuzeigen und zu verbergen.

```html
<button popovertarget="my-dialog">Open dialog</button>

<dialog id="my-dialog" popover>
  <p>This dialog was opened using a popovertargetaction attribute.</p>
  <button popovertarget="my-dialog" popovertargetaction="hide">Close</button>
</dialog>
```

Die Popover API bietet außerdem Eigenschaften, die verwendet werden können, um den Zustand in JavaScript zu erhalten und festzulegen.

### Schließen von Dialogen

Es ist wichtig, einen Mechanismus zum Schließen jedes `<dialog>`-Elements bereitzustellen und sicherzustellen, dass dieser auf Geräten funktioniert, die möglicherweise keine physische Tastatur haben.

Es gibt zahlreiche Möglichkeiten, einen Dialog zu schließen:

- Absenden des Formulars innerhalb des `<dialog>`-Elements mit `method="dialog"` im `<form>`-Element (siehe das [Beispiel zur Nutzung des dialog open Attributs](#using_the_dialog_open_attribute)).
- Klicken außerhalb des Dialogbereichs, wenn "leichte Dis-Aktion" aktiviert ist (siehe das [Beispiel für Popover-API-HTML-Attribute](#popover_api_html-attribute)).
- Drücken der <kbd>Esc</kbd>-Taste in Dialogen, in denen es aktiviert ist (siehe das [Beispiel für Popover-API-HTML-Attribute](#popover_api_html-attribute)).
- Aufrufen der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode (siehe das [Beispiel für modale Dialoge](#erstellen_eines_modalen_dialogs)).

### CSS Styling

Ein `<dialog>` kann durch seinen Elementnamen ausgewählt werden (wie jedes andere Element), und Sie können seinen Zustand mit Pseudoklassen wie [`:modal`](/de/docs/Web/CSS/Reference/Selectors/:modal) und [`:open`](/de/docs/Web/CSS/Reference/Selectors/:open) abgleichen.

Das CSS {{cssxref('::backdrop')}} Pseudoelement kann verwendet werden, um den Hintergrund eines modalen Dialogs zu gestalten, der hinter dem `<dialog>`-Element angezeigt wird, wenn der Dialog mithilfe der [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode angezeigt wird.
Dieses Pseudoelement könnte beispielsweise verwendet werden, um den inerten Inhalt hinter dem modalen Dialog zu verschwimmen, abzudunkeln oder anderweitig zu verschleiern.

### Zusätzliche Hinweise

- HTML {{HTMLElement("form")}}-Elemente können verwendet werden, um ein Dialogfenster zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn die Schaltfläche, die das Formular sendet, [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>`-Elements über die `dialog`-Methode gesendet wird, wird das Dialogfenster geschlossen, die Zustände der Formularelemente werden gespeichert, aber nicht gesendet, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)-Eigenschaft wird auf den Wert der ausgelösten Schaltfläche gesetzt.
- Das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut sollte zu dem Element hinzugefügt werden, mit dem der Benutzer erwartet wird, unmittelbar nach dem Öffnen eines modalen Dialogs zu interagieren. Wenn kein anderes Element unmittelbarere Interaktion erfordert, wird empfohlen, `autofocus` zur Schaltfläche zum Schließen innerhalb des Dialogs hinzuzufügen, oder zum Dialog selbst, wenn erwartet wird, dass der Benutzer darauf klickt/aktiviert, um den Dialog zu schließen.
- Fügen Sie dem `<dialog>`-Element nicht die `tabindex`-Eigenschaft hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Der Inhalt des Dialogs, einschließlich der Schaltfläche zum Schließen im Dialog, kann den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Bei der Implementierung eines Dialogs ist es wichtig zu überlegen, wo der Benutzerfokus am besten gesetzt wird. Wenn [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) zum Öffnen eines `<dialog>` verwendet wird, wird der Fokus auf das erste verschachtelte fokussierbare Element gesetzt. Durch explizite Angabe des anfänglichen Fokusplatzes mit dem [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut wird dafür gesorgt, dass der anfängliche Fokus auf dem Element befindet, das für einen bestimmten Dialog als bester anfänglicher Fokusplatz betrachtet wird. Wenn Unsicherheit besteht, da möglicherweise nicht immer bekannt ist, wo der anfängliche Fokus innerhalb eines Dialogs gesetzt werden könnte, insbesondere in Fällen, in denen der Inhalt eines Dialogs dynamisch beim Aufrufen gerendert wird, kann das `<dialog>`-Element selbst die beste anfängliche Fokusplatzierung sein.

Stellen Sie sicher, dass ein Mechanismus bereitgestellt wird, der es den Benutzern ermöglicht, den Dialog zu schließen. Der zuverlässigste Weg, um sicherzustellen, dass alle Benutzer den Dialog schließen können, besteht darin, eine explizite Schaltfläche hierfür bereitzustellen, wie zum Beispiel eine Bestätigung, Stornierung oder Schließen-Schaltfläche.

Standardmäßig kann ein Dialog, der mit der `showModal()`-Methode aufgerufen wird, durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Ein nicht-modales Dialog wird standardmäßig nicht mit der <kbd>Esc</kbd>-Taste geschlossen, und je nachdem, was das nicht-modale Dialog repräsentiert, ist dieses Verhalten möglicherweise nicht erwünscht. Tastaturnutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und beibehalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte das Drücken der <kbd>Esc</kbd>-Taste nur den zuletzt angezeigten Dialog schließen. Bei Verwendung von `<dialog>` wird dieses Verhalten vom Browser bereitgestellt.

Während Dialoge auch mit anderen Elementen erstellt werden können, bietet das native `<dialog>`-Element Benutzerfreundlichkeit und Barrierefreiheitsmerkmale, die du nachbilden musst, wenn du andere Elemente für einen ähnlichen Zweck verwendest. Wenn du eine benutzerdefinierte Dialog-Implementierung erstellst, stelle sicher, dass alle erwarteten Standardverhalten unterstützt und geeignete Beschriftungsempfehlungen befolgt werden.

Das `<dialog>`-Element wird von Browsern auf ähnliche Weise bereitgestellt wie benutzerdefinierte Dialoge, die das ARIA [role="dialog"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)-Attribut verwenden. `<dialog>`-Elemente, die durch die `showModal()`-Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), während `<dialog>`-Elemente, die durch die `show()`-Methode oder die Anzeige mit dem `open`-Attribut oder die Änderung der standardmäßigen `display` eines `<dialog>` aufgerufen werden, als `[aria-modal="false"]` bereitgestellt werden. Beim Implementieren von modalen Dialogen sollte alles außer dem `<dialog>` und dessen Inhalt mithilfe des [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attributs als inaktiv gerendert werden. Bei Verwendung von `<dialog>` zusammen mit der `HTMLDialogElement.showModal()`-Methode wird dieses Verhalten von der Browser bereitgestellt.

## Beispiele

### Invoker Command API HTML-Attribute

Dieses Beispiel zeigt, wie Sie ein modales Dialogfenster mit den HTML-Attributen [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) der [Invoker Commands API](/de/docs/Web/API/Invoker_Commands_API) öffnen und schließen können.

Zuerst deklarieren wir ein {{htmlelement("button")}}-Element, setzen das `command`-Attribut auf [`"show-modal"`](/de/docs/Web/HTML/Reference/Elements/button#show-modal) und das `commandfor`-Attribut auf die `id` des zu öffnenden Dialogs (`my-dialog`).
Anschließend deklarieren wir ein `<dialog>`-Element, das ein "Close"-`<button>` enthält. Diese Schaltfläche sendet den [`"close"`](/de/docs/Web/HTML/Reference/Elements/button#close)-Befehl an die (gleiche) Dialog-ID.

```html
<button command="show-modal" commandfor="my-dialog">Open dialog</button>

<dialog id="my-dialog">
  <p>This dialog was opened using an invoker command.</p>
  <button commandfor="my-dialog" command="close">Close</button>
</dialog>
```

#### Ergebnis

Öffnen Sie den Dialog, indem Sie die Schaltfläche "Open dialog" drücken.
Sie können den Dialog schließen, indem Sie die Schaltfläche "Close" auswählen oder die <kbd>Esc</kbd>-Taste drücken.

{{EmbedLiveSample("Open and close a dialog using Invoker Command API HTML attributes", "100%", 200)}}

### Popover API HTML-Attribute

Dieses Beispiel zeigt, wie Sie ein nicht-modales Dialogfenster öffnen und schließen können, indem Sie die HTML-Attribute [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover), [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) und [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) der [Popover API](/de/docs/Web/API/Popover_API) verwenden.

Das `<dialog>` wird durch Hinzufügen des `popover`-Attributs in ein Popover umgewandelt.
Da wir keinen Wert für das Attribut angegeben haben, wird der Standardwert `"auto"` verwendet.
Dies aktiviert das Verhalten der "leichten Dis-Aktion", sodass der Dialog durch Klicken außerhalb des Dialogs oder Drücken der <kbd>Esc</kbd>-Taste geschlossen werden kann.
Wir hätten stattdessen `popover="manual"` setzen können, um das Verhalten der "leichten Dis-Aktion" zu deaktivieren, in diesem Fall müsste der Dialog mit der Schaltfläche "Close" geschlossen werden.

Beachten Sie, dass wir das `popovertargetaction`-Attribut für das `<button>`, das den Dialog öffnet, nicht angegeben haben.
Es ist in diesem Fall nicht erforderlich, da sein Standardwert `toggle` ist, was den Dialog beim Klicken der Schaltfläche zwischen geöffneten und geschlossenen Zuständen umschalten wird.

```html
<button popovertarget="my-dialog">Open dialog</button>

<dialog id="my-dialog" popover>
  <p>This dialog was opened using a popovertargetaction attribute.</p>
  <button popovertarget="my-dialog" popovertargetaction="hide">Close</button>
</dialog>
```

#### Ergebnis

Öffnen Sie den Dialog, indem Sie die Schaltfläche "Open dialog" drücken.
Sie können den Dialog schließen, indem Sie die Schaltfläche "Close" auswählen oder die <kbd>Esc</kbd>-Taste drücken.
Sie können den Dialog auch schließen, indem Sie außerhalb des Dialogs auswählen, da er nicht-modales ist.

{{EmbedLiveSample("Popover API HTML attributes", "100%", 200)}}

### Nutzung des dialog `open` Attributs

Dieses Beispiel zeigt, wie Sie das boolesche `open`-Attribut auf einem `<dialog>`-Element setzen können, um ein HTML-nur nicht-modales Dialogfenster zu erstellen, das bereits geöffnet ist, wenn die Seite lädt.

Der Dialog kann durch Klicken auf die Schaltfläche "OK" geschlossen werden, da das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist.
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

Dieser Dialog ist anfangs geöffnet und nicht-modales aufgrund der Anwesenheit des `open`-Attributs.
Nach dem Klicken auf "OK" wird der Dialog geschlossen, und der Result-Frame bleibt leer.

{{EmbedLiveSample("HTML-only non-modal dialog", "100%", 200)}}

> [!NOTE]
> Laden Sie die Seite neu, um die Ausgabe zurückzusetzen.

Wenn der Dialog geschlossen wird, gibt es keine bereitgestellte Methode, um ihn erneut zu öffnen. Die bevorzugte Methode, um nicht-modale Dialoge anzuzeigen, ist die Verwendung der [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode.
Es ist möglich, die Anzeige des Dialogs durch Hinzufügen oder Entfernen des booleschen `open`-Attributs umzuschalten, aber dies ist nicht die empfohlene Vorgehensweise.

### Erstellen eines modalen Dialogs

Dieses Beispiel zeigt einen modalen Dialog mit einem [Verlauf](/de/docs/Web/CSS/Reference/Values/gradient) in der Hintergrund. Die `.showModal()`-Methode öffnet den modalen Dialog, wenn die Schaltfläche "Show the dialog" aktiviert wird. Der Dialog kann durch Drücken der <kbd>Esc</kbd>-Taste oder über die `close()`-Methode geschlossen werden, wenn die "Close"-Taste innerhalb des Dialogs aktiviert wird.

Wenn ein Dialog geöffnet wird, fokussiert der Browser standardmäßig das erste fokussierbare Element im Dialog. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut auf die "Close"-Taste angewendet, wodurch es fokussiert wird, wenn der Dialog geöffnet wird, da dies das Element ist, das der Benutzer voraussichtlich unmittelbar nach dem Öffnen des Dialogs interagieren wird.

#### HTML

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a groovy backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir können den Hintergrund des Dialogs mit dem {{cssxref('::backdrop')}}-Pseudoelement stylen.

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

Der Dialog wird modales mit der `.showModal()`-Methode geöffnet und mit der `.close()` oder `.requestClose()`-Methoden geschlossen.

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

Wenn der modale Dialog angezeigt wird, erscheint er über allen anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des modalen Dialogs ist inaktiv und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass, wenn der Dialog offen ist, mit Ausnahme des Dialogs selbst, keine Interaktion mit dem Dokument möglich ist; die Schaltfläche "Show the dialog" ist weitgehend durch den fast undurchsichtigen Hintergrund des Dialogs verdeckt und ist inaktiv.

### Umgang mit dem Rückgabewert aus dem Dialog

Dieses Beispiel zeigt den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie ein modales Dialogfenster unter Verwendung eines Formulars geschlossen werden kann. Standardmäßig ist der `returnValue` der leere String oder der Wert der Schaltfläche, die das Formular innerhalb des `<dialog>`-Elements sendet, falls vorhanden.

Dieses Beispiel öffnet einen modalen Dialog, wenn die Schaltfläche "Show the dialog" aktiviert wird. Der Dialog enthält ein Formular mit einem {{HTMLElement("select")}} und zwei {{HTMLElement("button")}}-Elementen, die standardmäßig auf `type="submit"` stehen. Ein Event-Listener aktualisiert den Wert der "Confirm"-Schaltfläche, wenn die Optionen gewechselt werden. Wenn die "Confirm"-Schaltfläche aktiviert wird, um den Dialog zu schließen, ist der aktuelle Wert der Schaltfläche der Rückgabewert. Wenn der Dialog durch Drücken der "Cancel"-Schaltfläche geschlossen wird, ist der `returnValue` `cancel`.

Wenn der Dialog geschlossen wird, wird der Rückgabewert unterhalb der Schaltfläche "Show the dialog" angezeigt. Wenn der Dialog durch Drücken der <kbd>Esc</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert, und das `close`-Ereignis tritt nicht ein, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

Der Dialog wird geöffnet durch einen Event-Listener auf der "Show the dialog"-Taste, die [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) aufruft, wenn die Schaltfläche geklickt wird.

Der Dialog wird geschlossen, wenn die "Cancel"-Schaltfläche geklickt wird, weil das `<button>` das Attribut [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input/submit#formmethod) enthält.
Wenn die Methode eines Formulars [`dialog`](#zusätzliche_hinweise) ist, wird der Zustand des Formulars gespeichert, aber nicht gesendet, und der Dialog wird geschlossen (das Attribut überschreibt die Standard {{HTTPMethod("GET")}} des {{HTMLElement("form")}}).
Ohne `action` führt das Absenden des Formulars mit der Standard {{HTTPMethod("GET")}}-Methode zu einem Seiten-Reload.
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

### Schließen eines Dialogs mit einem erforderlichen Formulareingabefeld

Wenn ein Formular innerhalb eines Dialogs ein erforderliches Eingabefeld hat, lässt der Benutzeragent Sie den Dialog erst schließen, wenn Sie einen Wert für das erforderliche Eingabefeld bereitstellen. Um einen solchen Dialog zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate)-Attribut auf der Schließen-Schaltfläche oder rufen Sie die `close()`-Methode auf dem Dialog-Objekt auf, wenn die Schließen-Taste geklickt wird.

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

Aus der Ausgabe sehen wir, dass es unmöglich ist, den Dialog mit der _Normal close_-Taste zu schließen. Aber der Dialog kann geschlossen werden, wenn wir die Formularvalidierung mit dem `formnovalidate`-Attribut auf der _Cancel_-Taste umgehen. Programmgesteuert schließt `dialog.close()` auch einen solchen Dialog.

### Vergleich verschiedener `closedby`-Verhalten

Dieses Beispiel zeigt den Unterschied im Verhalten zwischen verschiedenen Werten des [`closedby`](#closedby)-Attributs.

#### HTML

Wir stellen drei {{htmlelement("button")}}-Elemente und drei `<dialog>`-Elemente bereit. Jede Schaltfläche wird programmiert, um einen anderen Dialog zu öffnen, der das Verhalten eines der drei Werte des `closedby`-Attributs demonstriert — `none`, `closerequest` und `any`. Beachten Sie, dass jedes `<dialog>`-Element ein `<button>`-Element enthält, das zum Schließen verwendet wird.

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

Hier weisen wir verschiedene Variablen zu, um die Hauptsteuerungs-`<button>`-Elemente, die `<dialog>`-Elemente und die "Close"-`<button>`-Elemente innerhalb der Dialoge zu referenzieren. Zuerst weisen wir jedem Steuerungs-Button mit [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) einen [`click`](/de/docs/Web/API/Element/click_event)-Event-Listener zu, dessen Event-Handler-Funktion das zugehörige `<dialog>`-Element über [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) öffnet. Dann durchlaufen wir die "Close"-`<button>`-Referenzen, um jeder einen `click`-Event-Handler zuzuweisen, der deren `<dialog>`-Element über [`close()`](/de/docs/Web/API/HTMLDialogElement/close) schließt.

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

Versuchen Sie, jede Schaltfläche zu klicken, um einen Dialog zu öffnen. Der erste Dialog kann nur durch Klicken auf die "Close"-Taste geschlossen werden. Der zweite kann auch über eine gerätespezifische Benutzeraktion wie das Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Der dritte hat das vollständige ["light-dismiss" Verhalten](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss), so dass er auch durch Klicken oder Tippen außerhalb des Dialogs geschlossen werden kann.

### Animationen von Dialogen

`<dialog>`s werden auf [`display: none;`](/de/docs/Web/CSS/Reference/Properties/display) gesetzt, wenn sie verborgen sind, und auf `display: block;`, wenn sie angezeigt werden, und werden aus/zur {{Glossary("top_layer", "obersten Schicht")}} und dem [Barrierefreiheitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt/zugefügt. Deshalb müssen für `<dialog>`-Elemente, die animiert werden sollen, die {{cssxref("display")}}-Eigenschaft animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/Reference/Properties/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Konkret wechselt der Browser zwischen `none` und einem anderen `display`-Wert, damit der animierte Inhalt die gesamte Animationsdauer angezeigt wird.

Zum Beispiel:

- Bei der Animation von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert bei `0%` der Animationsdauer zu `block`, sodass er die gesamte Zeit sichtbar ist.
- Bei der Animation von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass er die gesamte Zeit sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) gesetzt werden, um das obige Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) verfügbar; ein gleichwertiger Schritt ist nicht erforderlich.

#### Übergang von Dialogelementen

Beim Animieren von `<dialog>`s mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- {{cssxref("@starting-style")}}-Regel
  - : Bietet eine Reihe von Startwerten für Eigenschaften, die auf dem `<dialog>` gesetzt werden, von denen du jedes Mal beim Öffnen übergehen möchtest. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn sich ein Eigenschaftswert auf einem sichtbaren Element ändert; sie werden nicht bei ersten Stil-Updates von Elementen oder bei Änderungen des `display`-Typs von `none` zu einem anderen Typ ausgelöst.
- {{cssxref("display")}}-Eigenschaft
  - : Füge `display` zur Übergangsliste hinzu, damit das `<dialog>` während der Übergangsdauer als `display: block` (oder ein anderer sichtbarer `display`-Wert, der im offenen Zustand des Dialogs gesetzt ist) bleibt, um sicherzustellen, dass die anderen Übergänge sichtbar sind.
- {{cssxref("overlay")}}-Eigenschaft
  - : Schließe `overlay` in die Übergangsliste ein, um sicherzustellen, dass die Entfernung des `<dialog>` aus der obersten Schicht erst nach Abschluss des Übergangs erfolgt, um sicherzustellen, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setze `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf die {{cssxref("transition")}}-Kurzschrift), um diskrete Übergänge bei diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Hier ist ein kurzes Beispiel, um zu zeigen, wie dies aussehen könnte.

##### HTML

Das HTML enthält ein `<dialog>`-Element sowie eine Schaltfläche, um den Dialog anzuzeigen. Das `<dialog>`-Element enthält außerdem eine andere Schaltfläche, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS schließen wir einen `@starting-style`-Block ein, der die Übergangseinstellungsstile für die `opacity`- und `transform`-Eigenschaften definiert, Übergangsendstile im Zustand `dialog:open`, und Standardstile im Standard `dialog`-Zustand, zu denen der Dialog wieder zurückkehrt, nachdem er erschienen ist. Beachten Sie, wie die `transition`-Liste des `<dialog>` nicht nur diese Eigenschaften umfasst, sondern auch die `display`- und `overlay`-Eigenschaften, die jeweils mit `allow-discrete` versehen sind.

Wir setzen außerdem einen Startstilwert für die {{cssxref("background-color")}}-Eigenschaft auf dem {{cssxref("::backdrop")}}, das hinter dem `<dialog>` angezeigt wird, wenn es geöffnet wird, um eine schöne Abdunklungsanimation bereitzustellen. Der `dialog:open::backdrop`-Selektor wählt nur die Backdrops von `<dialog>`-Elementen aus, wenn der Dialog geöffnet ist.

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
> In Browsern, die die {{cssxref(":open")}}-Pseudoklasse nicht unterstützen, kannst du den Attribut-Selektor `dialog[open]` verwenden, um das `<dialog>`-Element im offenen Zustand zu stylen.

##### JavaScript

Das JavaScript fügt Event-Handler zu den Show- und Close-Buttons hinzu, die den `<dialog>` anzeigen und schließen, wenn sie geklickt werden:

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
> Da `<dialog>`s von `display: none` zu `display: block` wechseln, jedes Mal, wenn sie angezeigt werden, wechseln sie bei jedem Eintrittsübergang von ihren `@starting-style`-Stilen zu ihren `dialog:open`-Stilen. Beim Schließen des `<dialog>`s verläuft es von seinem `dialog:open`-Zustand zu dem Standard-`dialog`-Zustand.
>
> Es ist möglich, dass sich der Stilübergang beim Eintritt und Austritt unterscheidet. Siehe unser [Beispiel zur Demonstration, wann Startstile verwendet werden](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Beweis dafür.

#### keyframe-Animationen für Dialoge

Beim Animieren eines `<dialog>` mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu beachten:

- Du gibst keinen `@starting-style` an.
- Du schließt den `display`-Wert in ein Keyframe ein; dies wird der `display`-Wert für die gesamte Dauer der Animation sein, oder bis ein anderer nicht `none`-Displaywert angetroffen wird.
- Du musst keine diskreten Animationen explizit aktivieren; es gibt kein Pendant zu `allow-discrete` in Keyframes.
- Du musst `overlay` auch nicht in Keyframes setzen; die `display`-Animation behandelt die Animation des `<dialog>` von angezeigt zu verborgen.

Lass uns ein Beispiel betrachten, damit du sehen kannst, wie es aussieht.

##### HTML

Zuerst enthält das HTML ein `<dialog>`-Element sowie eine Schaltfläche, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element eine andere Schaltfläche, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Keyframes, um zwischen den geschlossenen und angezeigten Zuständen des `<dialog>` zu animieren, sowie die Fade-In-Animation für den Hintergrund des `<dialog>`. Die `<dialog>`-Animationen umfassen das Animieren von `display`, um sicherzustellen, dass die tatsächlichen sichtbaren Animationseffekte für die gesamte Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, das Fade-Out des Hintergrunds zu animieren — das Hintergrundbild wird sofort aus dem DOM entfernt, wenn das `<dialog>` geschlossen wird, sodass es nichts zum Animieren gibt.

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

Schließlich fügt das JavaScript Event-Handler zu den Schaltflächen hinzu, um das Anzeigen und Schließen des `<dialog>` zu ermöglichen:

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
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a> erlaubt
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role">Dialog</a>
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
- [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) globales Attribut für HTML-Elemente
- {{CSSXref("::backdrop")}} CSS-Pseudoelement
- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
