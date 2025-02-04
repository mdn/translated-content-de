---
title: "<dialog>: Das Dialog-Element"
slug: Web/HTML/Element/dialog
l10n:
  sourceCommit: 41f2977624562dde84c0ef5956a80ee2575c80f0
---

{{HTMLSidebar}}

Das **`<dialog>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine modale oder nicht-modale Dialogbox oder eine andere interaktive Komponente, wie z.B. eine verwerfbare Warnung, einen Inspektor oder ein Unterfenster.

Das HTML-`<dialog>`-Element wird verwendet, um sowohl modale als auch nicht-modale Dialogboxen zu erstellen. Modale Dialogboxen unterbrechen die Interaktion mit dem Rest der Seite, da dieser inaktiv bleibt, während nicht-modale Dialogboxen die Interaktion mit dem Rest der Seite erlauben.

JavaScript sollte verwendet werden, um das `<dialog>`-Element anzuzeigen. Verwenden Sie die [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode, um einen modalen Dialog anzuzeigen, und die [`.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode, um einen nicht-modalen Dialog anzuzeigen. Die Dialogbox kann mit der [`.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode oder mit der [`dialog`](/de/docs/Web/HTML/Element/form#method)-Methode geschlossen werden, wenn ein `<form>` übermittelt wird, das im `<dialog>`-Element verschachtelt ist. Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf dem `<dialog>`-Element verwendet werden. Siehe [Nutzungshinweise](#nutzungshinweise).

- `open`

  - : Gibt an, dass die Dialogbox aktiv und für die Interaktion verfügbar ist. Wenn das `open`-Attribut nicht gesetzt ist, wird die Dialogbox für den Benutzer nicht sichtbar sein.
    Es wird empfohlen, die `.show()`- oder `.showModal()`-Methode zu verwenden, um Dialoge darzustellen, anstatt das `open`-Attribut. Wenn ein `<dialog>` mit dem `open`-Attribut geöffnet wird, ist es nicht-modal.

    > [!NOTE]
    > Obwohl Sie zwischen offenen und geschlossenen Zuständen von nicht-modalen Dialogboxen wechseln können, indem Sie die Präsenz des `open`-Attributs umschalten, wird dieser Ansatz nicht empfohlen.

## Nutzungshinweise

- HTML {{HTMLElement("form")}}-Elemente können verwendet werden, um eine Dialogbox zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der Button, der das Formular übermittelt, [`formmethod="dialog"`](/de/docs/Web/HTML/Element/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` über die `dialog`-Methode übermittelt wird, schließt sich die Dialogbox, die Zustände der Formularelemente werden gespeichert, aber nicht gesendet, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)-Eigenschaft wird auf den Wert des Buttons gesetzt, der aktiviert wurde.
- Das CSS-{{cssxref('::backdrop')}}-Pseudo-Element kann verwendet werden, um den Hintergrund eines modalen Dialogs zu stylen, der hinter dem `<dialog>`-Element angezeigt wird, wenn der Dialog mit der [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode angezeigt wird. Dieses Pseudo-Element könnte beispielsweise verwendet werden, um den inaktiven Inhalt hinter dem modalen Dialog zu verwischen, zu verdunkeln oder anderweitig zu verschleiern.
- Das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attribut sollte dem Element hinzugefügt werden, mit dem der Benutzer sofort nach dem Öffnen eines modalen Dialogs interagieren soll. Wenn kein anderes Element eine unmittelbarere Interaktion erfordert, wird empfohlen, `autofocus` auf den Schließen-Button im Dialog hinzuzufügen oder auf den Dialog selbst, wenn erwartet wird, dass der Benutzer es anklickt/aktiviert, um es zu schließen.
- Fügen Sie das `tabindex`-Eigenschaft nicht dem `<dialog>`-Element hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Der Inhalt des Dialogs, einschließlich des Schließen-Buttons im Dialog, kann den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Bei der Implementierung eines Dialogs ist es wichtig, den geeignetsten Ort für den Benutzerfokus in Betracht zu ziehen. Beim Öffnen eines `<dialog>` mit [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) wird der Fokus auf das erste verschachtelte fokussierbare Element gesetzt. Die anfängliche Fokussierung explizit durch das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attribut anzugeben, hilft, sicherzustellen, dass der erste Fokus auf das Element gesetzt wird, das als bestgeeigneter Anfangsfokus für einen bestimmten Dialog betrachtet wird. Im Zweifelsfall, wenn möglicherweise nicht immer bekannt ist, wo innerhalb eines Dialogs der erste Fokus gesetzt werden könnte, insbesondere bei Instanzen, in denen der Inhalt eines Dialogs beim Aufruf dynamisch gerendert wird, kann das `<dialog>`-Element selbst den besten Anfangsfokus bieten.

Stellen Sie sicher, dass ein Mechanismus bereitgestellt wird, der den Benutzern das Schließen des Dialogs ermöglicht. Der robusteste Weg, um sicherzustellen, dass alle Benutzer den Dialog schließen können, ist, einen expliziten Button dafür bereitzustellen, wie z. B. einen Bestätigungs-, Abbruch- oder Schließen-Button.

Standardmäßig kann ein Dialog, der durch die `showModal()`-Methode aufgerufen wird, durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Ein nicht-modaler Dialog wird standardmäßig nicht über die <kbd>Esc</kbd>-Taste geschlossen, und je nach Bedeutung des nicht-modalen Dialogs kann dieses Verhalten vielleicht nicht gewünscht sein. Tastaturnutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und aufrechterhalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte durch Drücken der <kbd>Esc</kbd>-Taste nur der zuletzt gezeigte Dialog geschlossen werden. Bei der Verwendung von `<dialog>` wird dieses Verhalten durch den Browser bereitgestellt.

Obwohl Dialoge mit anderen Elementen erstellt werden können, bietet das native `<dialog>`-Element Bedienungs- und Zugänglichkeitsmerkmale, die nachgebildet werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck verwenden. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhaltensweisen unterstützt und ordnungsgemäße Kennzeichnungsempfehlungen befolgt werden.

Das `<dialog>`-Element wird von Browsern in ähnlicher Weise wie benutzerdefinierte Dialoge mit dem ARIA [role="dialog"](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)-Attribut dargestellt. `<dialog>`-Elemente, die durch die `showModal()`-Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal), während `<dialog>`-Elemente, die durch die `show()`-Methode oder durch das `open`-Attribut angezeigt werden oder durch das Ändern der Standardanzeige eines `<dialog>`, als `[aria-modal="false"]` dargestellt werden. Bei der Implementierung von modalen Dialogen sollte alles außer dem `<dialog>` und dessen Inhalt inaktiv dargestellt werden, indem das [`inert`](/de/docs/Web/HTML/Global_attributes/inert)-Attribut verwendet wird. Bei der Verwendung von `<dialog>` zusammen mit der `HTMLDialogElement.showModal()`-Methode wird dieses Verhalten durch den Browser bereitgestellt.

## Beispiele

### Nur HTML-Dialog

Dieses Beispiel demonstriert die Erstellung eines nicht-modalen Dialogs nur durch HTML. Aufgrund des booleschen `open`-Attributs im `<dialog>`-Element erscheint der Dialog beim Laden der Seite geöffnet. Der Dialog kann geschlossen werden, indem auf die "OK"-Schaltfläche geklickt wird, da das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist. In diesem Fall wird kein JavaScript benötigt, um das Formular zu schließen.

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

Dieser Dialog ist initial geöffnet aufgrund der Präsenz des `open`-Attributs. Dialoge, die mit dem `open`-Attribut angezeigt werden, sind nicht-modal. Nach dem Klicken auf "OK" wird der Dialog verworfen, und der Ergebnisrahmen bleibt leer. Wenn der Dialog verworfen wird, gibt es keine Methode, ihn wieder zu öffnen. Aus diesem Grund wird empfohlen, nicht-modale Dialoge mit der [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode anzuzeigen. Es ist möglich, die Anzeige des Dialogs durch das Hinzufügen oder Entfernen des booleschen `open`-Attributs umzustellen, aber dies ist nicht die empfohlene Praxis.

### Erstellen eines modalen Dialogs

Dieses Beispiel zeigt einen modalen Dialog mit einem [Verlauf](/de/docs/Web/CSS/gradient) im Hintergrund. Die `.showModal()`-Methode öffnet den modalen Dialog, wenn die Schaltfläche "Dialog anzeigen" aktiviert wird. Der Dialog kann durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden oder durch die `close()`-Methode, wenn die "Schließen"-Schaltfläche innerhalb des Dialogs aktiviert wird.

Wenn ein Dialog geöffnet wird, gibt der Browser standardmäßig den Fokus auf das erste Element, das im Dialog fokussiert werden kann. In diesem Beispiel ist das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attribut auf die "Schließen"-Schaltfläche angewendet worden, wodurch es den Fokus erhält, wenn der Dialog geöffnet wird, da wir erwarten, dass der Benutzer unmittelbar nach dem Öffnen des Dialogs damit interagiert.

#### HTML

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a groovy backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir können den Hintergrund des Dialogs durch das {{cssxref('::backdrop')}}-Pseudo-Element stylen.

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

Der Dialog wird modal mit der `.showModal()`-Methode geöffnet und mit der `.close()`-Methode geschlossen.

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

Wenn der modale Dialog angezeigt wird, erscheint er oberhalb aller anderen möglicherweise vorhandenen Dialoge. Alles außerhalb des modalen Dialogs ist inaktiv und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass, wenn der Dialog geöffnet ist, mit Ausnahme des Dialogs selbst, die Interaktion mit dem Dokument nicht möglich ist; der Button "Dialog anzeigen" ist größtenteils durch den fast undurchsichtigen Hintergrund des Dialogs verdeckt und ist inaktiv.

### Bearbeiten des Rückgabewerts aus dem Dialog

Dieses Beispiel demonstriert den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie man einen modalen Dialog mit einem Formular schließt. Standardmäßig ist der `returnValue` der leere String oder der Wert des Buttons, der das Formular innerhalb des `<dialog>`-Elements übermittelt, falls vorhanden.

Dieses Beispiel öffnet einen modalen Dialog, wenn die Schaltfläche "Dialog anzeigen" aktiviert wird. Der Dialog enthält ein Formular mit einem {{HTMLElement("select")}} und zwei {{HTMLElement("button")}}-Elementen, die standardmäßig auf `type="submit"` eingestellt sind. Ein Ereignis-Listener aktualisiert den Wert des "Bestätigen"-Buttons, wenn sich die Auswahloption ändert. Wenn der "Bestätigen"-Button aktiviert wird, um den Dialog zu schließen, ist der aktuelle Wert des Buttons der Rückgabewert. Wenn der Dialog durch den Druck auf die "Abbrechen"-Schaltfläche geschlossen wird, ist der `returnValue` `cancel`.

Wenn der Dialog geschlossen wird, wird der Rückgabewert unter der "Dialog anzeigen" Schaltfläche angezeigt. Wenn der Dialog durch Drücken der <kbd>Esc</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert, und das `close`-Ereignis tritt nicht auf, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

Die oben genannten Beispiele demonstrieren die folgenden drei Methoden zum Schließen modaler Dialoge:

- Durch das Übermitteln des Formulars innerhalb des Dialogformulars mit der `dialog`-Methode (wie im [Nur-HTML Beispiel](#nur_html-dialog) zu sehen).
- Durch Drücken der <kbd>Esc</kbd>-Taste.
- Durch Aufrufen der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode (wie im [modalen Beispiel](#erstellen_eines_modalen_dialogs) zu sehen).
  In diesem Beispiel schließt die "Abbrechen"-Schaltfläche den Dialog über die `dialog`-Formularmethode und die "Bestätigen"-Schaltfläche schließt den Dialog über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode.

Die "Abbrechen"-Schaltfläche umfasst das [`formmethod="dialog"`](/de/docs/Web/HTML/Element/input/submit#formmethod)-Attribut, das die Standardeinstellung der {{HTMLElement("form")}} {{HTTPMethod("GET")}} überschreibt. Wenn die Methode eines Formulars [`dialog`](#nutzungshinweise) ist, wird der Zustand des Formulars gespeichert, aber nicht übermittelt, und der Dialog wird geschlossen.

Ohne eine `action` führt das Übermitteln des Formulars über die Standardschaltmethode {{HTTPMethod("GET")}} dazu, dass die Seite neu geladen wird. Wir verwenden JavaScript, um die Übermittlung zu verhindern und den Dialog mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) zu schließen.

Es ist wichtig, einen Schließmechanismus innerhalb jedes `dialog`-Elements bereitzustellen. Die <kbd>Esc</kbd>-Taste schließt nicht-modale Dialoge standardmäßig nicht, und man kann nicht davon ausgehen, dass ein Benutzer überhaupt Zugang zu einer physischen Tastatur hat (z.B. jemand, der ein Touchscreen-Gerät ohne Zugang zu einer Tastatur verwendet).

### Schließen eines Dialogs mit einer erforderlichen Formulareingabe

Wenn ein Formular innerhalb eines Dialogs eine erforderliche Eingabe hat, lässt der Benutzeragent Sie den Dialog nur schließen, wenn Sie einen Wert für die erforderliche Eingabe bereitstellen. Um einen solchen Dialog zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Element/input#formnovalidate)-Attribut auf der Schließen-Schaltfläche oder rufen die `close()`-Methode auf dem Dialogobjekt auf, wenn die Schließen-Schaltfläche angeklickt wird.

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

In der Ausgabe sehen wir, dass es unmöglich ist, den Dialog mit dem _Normalen-Schließen_-Button zu schließen. Aber der Dialog kann geschlossen werden, wenn wir der Formularvalidierung mit dem `formnovalidate`-Attribut auf der _Abbrechen_-Schaltfläche ausweichen. Programmgesteuert wird `dialog.close()` auch einen solchen Dialog schließen.

### Dialoge animieren

`<dialog>`s sind auf [`display: none;`](/de/docs/Web/CSS/display) gesetzt, wenn sie verborgen sind, und `display: block;` wenn sie angezeigt werden, und werden somit aus der/zu der {{Glossary("top_layer", "oberen Ebene")}} und dem [Barrierefreiheitsbaum](/de/docs/Web/Performance/How_browsers_work#building_the_accessibility_tree) entfernt/hinzugefügt. Daher muss für `<dialog>`-Elemente, die animiert werden sollen, die {{cssxref("display")}}-Eigenschaft animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation der [diskreten Animationstypen](/de/docs/Web/CSS/CSS_animated_properties#discrete). Genauer gesagt, der Browser wechselt zwischen `none` und einem anderen Wert von `display`, sodass der animierte Inhalt während der gesamten Animationsdauer sichtbar ist.

Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wird der Wert zu Beginn der Animationsdauer auf `block` gesetzt, sodass er die gesamte Dauer sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wird der Wert am Ende der Animationsdauer auf `none` gesetzt, sodass er die gesamte Dauer sichtbar bleibt.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig verfügbar, wenn mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) animiert wird; ein entsprechender Schritt ist nicht erforderlich.

#### Übergang von Dialogelementen

Beim Animieren von `<dialog>`-Elementen mit CSS-Übergängen sind die folgenden Merkmale erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) Regel
  - : Bietet eine Reihe von Startwerten für Eigenschaften, die auf das `<dialog>` gesetzt sind, von denen Sie jedes Mal, wenn es geöffnet wird, aus übergehen möchten. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn sich ein Eigenschaftswert auf einem sichtbaren Element ändert; sie werden nicht bei der ersten Stilaktualisierung von Elementen ausgelöst oder wenn sich der `display`-Typ von `none` zu einem anderen ändert.
- [`display`](/de/docs/Web/CSS/display) Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das `<dialog>` über die gesamte Dauer des Übergangs als `display: block` (oder ein anderer im offenen Zustand des Dialogs gesetzter sichtbarer `display`-Wert) bleibt, um sicherzustellen, dass andere Übergänge sichtbar sind.
- [`overlay`](/de/docs/Web/CSS/overlay) Eigenschaft
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass die Entfernung des `<dialog>` aus der oberen Ebene bis zum Abschluss des Übergangs verschoben wird, um erneut sicherzustellen, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}} Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf die {{cssxref("transition")}}-Kurzform), um diskrete Übergänge für diese beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Hier ist ein kurzes Beispiel, wie dies aussehen könnte.

##### HTML

Das HTML enthält ein `<dialog>`-Element und eine Schaltfläche zum Anzeigen des Dialogs. Zusätzlich enthält das `<dialog>`-Element eine andere Schaltfläche zum Schließen desselben.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS fügen wir einen `@starting-style`-Block ein, der die Übergangsanfangsstile für die Eigenschaften `opacity` und `transform` definiert, Übergangsende-Stile im `dialog:open`-Zustand und Standardstile im Standard-`dialog`-Zustand, die nach dem Erscheinen des `<dialog>` zurückübergangen werden sollen. Beachten Sie, wie die `transition`-Liste des `<dialog>` nicht nur diese Eigenschaften enthält, sondern auch die `display`- und `overlay`-Eigenschaften, jeweils mit `allow-discrete` darauf gesetzt.

Wir setzen auch einen Startstilwert für die {{cssxref("background-color")}}-Eigenschaft auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop), der hinter dem `<dialog>` angezeigt wird, wenn es geöffnet wird, um eine schöne Abdunklungsanimation bereitzustellen. Der `dialog:open::backdrop`-Selektor wählt nur die Hintergründe von `<dialog>`-Elementen aus, wenn der Dialog geöffnet ist.

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

Das JavaScript fügt Ereignishandler für die Anzeigen- und Schließen-Schaltflächen hinzu, wodurch sie das `<dialog>` beim Anklicken anzeigen und schließen:

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
> Da `<dialog>`-Elemente jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechseln die `<dialog>`-Elemente jedes Mal von ihren `@starting-style`-Stilen zu ihren `dialog:open`-Stilen, wenn der Eintrittsübergang eintritt. Wenn das `<dialog>` schließt, wechselt es von seinem `dialog:open`-Zustand zum Standard-`dialog`-Zustand.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt unterschiedlich ist. Siehe unser [Demonstration von wann Startstile verwendet werden](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel für einen Beweis dafür.

#### Dialog Keyframe-Animationen

Beim Animieren eines `<dialog>` mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu beachten im Vergleich zu Übergängen:

- Sie geben keinen `@starting-style` vor.
- Sie schließen den `display`-Wert in einem Keyframe ein; dies wird der `display`-Wert für die gesamte Animation sein oder bis ein anderer nicht-`none` display-Wert angetroffen wird.
- Sie müssen diskrete Animationen nicht explizit aktivieren; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Keyframes.
- Sie müssen `overlay` innerhalb von Keyframes nicht festlegen; die `display`-Animation behandelt die Animation des `<dialog>` von gezeigt zu verborgen.

Sehen wir uns ein Beispiel an, um zu sehen, wie das aussieht.

##### HTML

Zuerst enthält das HTML ein `<dialog>`-Element und eine Schaltfläche zum Anzeigen des Dialogs. Zusätzlich enthält das `<dialog>`-Element eine andere Schaltfläche zum Schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Keyframes, um zwischen den geschlossenen und gezeigten Zuständen des `<dialog>` zu animieren, sowie die Einblendungsanimation für den Hintergrund des `<dialog>`. Die `<dialog>`-Animationen umfassen das Animieren von `display`, um sicherzustellen, dass die tatsächlichen sichtbaren Animationseffekte während der gesamten Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, die Hintergrund-Ausblendung zu animieren — der Hintergrund wird beim Schließen des `<dialog>` sofort aus dem DOM entfernt, sodass es nichts zu animieren gibt.

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

Schließlich fügt das JavaScript Ereignishandler zu den Schaltflächen hinzu, um das Anzeigen und Schließen des `<dialog>` zu ermöglichen:

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

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Element/Heading_Elements#sectioning_roots">Abschnitts-Wurzel</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>
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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a> akzeptiert
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/dialog_role">dialog</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role"><code>alertdialog</code></a></td>
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
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) Ereignis der `HTMLDialogElement`-Schnittstelle
- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) Ereignis der `HTMLDialogElement`-Schnittstelle
- [`open`](/de/docs/Web/API/HTMLDialogElement/open) Eigenschaft der `HTMLDialogElement`-Schnittstelle
- [`inert`](/de/docs/Web/HTML/Global_attributes/inert) globales Attribut für HTML-Elemente
- {{CSSXref("::backdrop")}} CSS Pseudo-Element
- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
