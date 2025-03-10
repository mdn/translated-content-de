---
title: "<dialog>: Das Dialog-Element"
slug: Web/HTML/Element/dialog
l10n:
  sourceCommit: fbcc0f0bfc9e1ffddc679ad4f87196d2aa33725a
---

{{HTMLSidebar}}

Das **`<dialog>`** [HTML](/de/docs/Web/HTML) Element repräsentiert ein modales oder nicht-modales Dialogfeld oder eine andere interaktive Komponente wie ein entfernbares Alert, einen Inspektor oder ein Unterfenster.

Das HTML-Element `<dialog>` wird verwendet, um sowohl modale als auch nicht-modale Dialogfenster zu erstellen. Modale Dialogfenster unterbrechen die Interaktion mit dem Rest der Seite, da diese inaktiv ist, während nicht-modale Dialogfenster die Interaktion mit dem Rest der Seite zulassen.

JavaScript sollte verwendet werden, um das `<dialog>` Element anzuzeigen. Verwenden Sie die Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), um ein modales Dialogfeld anzuzeigen, und die Methode [`.show()`](/de/docs/Web/API/HTMLDialogElement/show), um ein nicht-modales Dialogfeld anzuzeigen. Das Dialogfeld kann mit der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) oder mithilfe der [`dialog`](/de/docs/Web/HTML/Element/form#method) Methode beim Absenden eines innerhalb des `<dialog>` Elements verschachtelten `<form>` geschlossen werden. Modale Dialoge können auch durch Drücken der <kbd>Escape</kbd>-Taste geschlossen werden.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!WARNING]
> Das `tabindex` Attribut darf nicht auf dem `<dialog>` Element verwendet werden. Siehe [Verwendungsnotizen](#verwendungsnotizen).

- `open`

  - : Gibt an, dass das Dialogfeld aktiv ist und zur Interaktion zur Verfügung steht. Wenn das `open` Attribut nicht gesetzt ist, wird das Dialogfeld für den Benutzer nicht sichtbar sein.
    Es wird empfohlen, die Methoden `.show()` oder `.showModal()` zu verwenden, um Dialoge anzuzeigen, anstatt des `open` Attributs. Wenn ein `<dialog>` mit dem `open` Attribut geöffnet wird, ist es nicht modal.

    > [!NOTE]
    > Während Sie zwischen den offenen und geschlossenen Zuständen von nicht-modalen Dialogfeldern durch Umschalten der Anwesenheit des `open` Attributs wechseln können, wird dieser Ansatz nicht empfohlen. Siehe [`open`](/de/docs/Web/API/HTMLDialogElement/open) für weitere Informationen.

## Verwendungsnotizen

- HTML {{HTMLElement("form")}} Elemente können verwendet werden, um ein Dialogfeld zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn die Schaltfläche zum Absenden des Formulars [`formmethod="dialog"`](/de/docs/Web/HTML/Element/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` über die `dialog` Methode abgesendet wird, schließt sich das Dialogfeld, die Zustände der Formularelemente werden gespeichert, aber nicht abgesendet, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) Eigenschaft wird auf den Wert der aktivierten Schaltfläche gesetzt.
- Das CSS {{cssxref('::backdrop')}} Pseudo-Element kann verwendet werden, um den Hintergrund eines modalen Dialogs zu stylen, der hinter dem `<dialog>` Element angezeigt wird, wenn das Dialogfeld mithilfe der [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) Methode angezeigt wird. Beispielsweise könnte dieses Pseudo-Element verwendet werden, um den Inhalt hinter dem modalen Dialog zu verwischen, zu verdunkeln oder anderweitig zu verschleiern.
- Das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus) Attribut sollte zu dem Element hinzugefügt werden, mit dem der Benutzer sofort nach dem Öffnen eines modalen Dialogs interagieren soll. Wenn kein anderes Element eine unmittelbarere Interaktion erfordert, wird empfohlen, `autofocus` zur Schaltfläche zum Schließen des Dialogs oder zum Dialog selbst hinzuzufügen, falls erwartet wird, dass der Benutzer darauf klickt/aktiviert, um es zu schließen.
- Fügen Sie das `tabindex` Attribut nicht dem `<dialog>` Element hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Der Inhalt des Dialogs, einschließlich der Schaltfläche zum Schließen im Dialog, kann fokussiert und interaktiv sein.

## Barrierefreiheit

Beim Implementieren eines Dialogs ist es wichtig, den am besten geeigneten Ort für die Fokussierung des Benutzers zu berücksichtigen. Beim Öffnen eines `<dialog>` mit [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) wird der Fokus auf das erste verschachtelte fokussierbare Element gesetzt. Die explizite Angabe der anfänglichen Fokussierung durch Verwendung des [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus) Attributs wird dazu beitragen, den Fokus auf das Element zu setzen, das für jeden bestimmten Dialog als beste anfängliche Fokussierung gilt. Wenn Zweifel bestehen, da es möglicherweise nicht immer bekannt ist, wo der anfängliche Fokus innerhalb eines Dialogs gesetzt werden könnte, insbesondere in Fällen, in denen der Inhalt eines Dialogs dynamisch bei Abruf gerendert wird, kann das `<dialog>` Element selbst den besten anfänglichen Fokussierungsort bieten.

Stellen Sie sicher, dass ein Mechanismus bereitgestellt wird, damit Benutzer das Dialogfeld schließen können. Der robusteste Weg, um sicherzustellen, dass alle Benutzer das Dialogfeld schließen können, besteht darin, eine explizite Schaltfläche dafür einzufügen, wie zum Beispiel eine Bestätigungs-, Abbruch- oder Schließen-Schaltfläche.

Standardmäßig kann ein durch die `showModal()` Methode aufgerufenes Dialogfeld durch Drücken der <kbd>Escape</kbd>-Taste geschlossen werden. Ein nicht-modales Dialogfeld wird standardmäßig nicht durch Drücken der <kbd>Escape</kbd>-Taste geschlossen, und je nachdem, was das nicht-modale Dialogfeld darstellt, ist dieses Verhalten möglicherweise nicht gewünscht. Tastaturnutzer erwarten, dass die <kbd>Escape</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und beibehalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte das Drücken der <kbd>Escape</kbd>-Taste nur das zuletzt gezeigte Dialogfeld schließen. Beim Verwenden von `<dialog>` wird dieses Verhalten vom Browser bereitgestellt.

Obwohl Dialoge auch mit anderen Elementen erstellt werden können, bietet das native `<dialog>` Element Usability- und Barrierefreiheitsfunktionen, die nachgebildet werden müssen, wenn Sie andere Elemente zu ähnlichen Zwecken verwenden. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhalten unterstützt werden und angemessene Kennzeichnungsempfehlungen befolgt werden.

Das `<dialog>` Element wird von Browsern ähnlich wie benutzerdefinierte Dialoge behandelt, die das ARIA [role="dialog"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) Attribut verwenden. `<dialog>` Elemente, die durch die `showModal()` Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), während `<dialog>` Elemente, die durch die `show()` Methode aufgerufen oder durch das `open` Attribut oder durch Ändern der Standardanzeige eines `<dialog>` angezeigt werden, als `[aria-modal="false"]` behandelt werden. Bei der Implementierung von modal Dialogen sollte alles außer dem `<dialog>` und dessen Inhalt mit dem [`inert`](/de/docs/Web/HTML/Global_attributes/inert) Attribut inaktiv gemacht werden. Bei der Verwendung von `<dialog>` zusammen mit der `HTMLDialogElement.showModal()` Methode wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### Nur HTML-Dialog

Dieses Beispiel zeigt die Erstellung eines nicht-modalen Dialogs nur mit HTML. Aufgrund des booleschen `open` Attributs im `<dialog>` Element wird das Dialogfenster sichtbar, wenn die Seite geladen wird. Das Dialogfenster kann geschlossen werden, indem die "OK"-Schaltfläche angeklickt wird, da das `method` Attribut im `<form>` Element auf `"dialog"` gesetzt ist. In diesem Fall wird kein JavaScript benötigt, um das Formular zu schließen.

```html
<dialog open>
  <p>Greetings, one and all!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

#### Resultat

{{EmbedLiveSample("HTML-only_dialog", "100%", 200)}}

> [!NOTE]
> Laden Sie die Seite neu, um die Ausgabe zurückzusetzen.

Dieses Dialogfeld ist aufgrund des Vorhandenseins des `open` Attributs initial geöffnet. Dialoge, die mit dem `open` Attribut angezeigt werden, sind nicht modal. Nach dem Klicken auf "OK" wird das Dialogfeld geschlossen, und das Ergebnisfenster ist leer. Wenn das Dialogfeld geschlossen wird, gibt es keine Option, es erneut zu öffnen. Aus diesem Grund ist die bevorzugte Methode zum Anzeigen nicht-modaler Dialoge die Verwendung der [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show) Methode. Es ist möglich, die Anzeige des Dialogs durch Hinzufügen oder Entfernen des booleschen `open` Attributs umzuschalten, aber es ist nicht die empfohlene Praxis.

### Erstellen eines modalen Dialogs

Dieses Beispiel zeigt einen modalen Dialog mit einem [Gradienten](/de/docs/Web/CSS/gradient) als Hintergrund. Die `.showModal()` Methode öffnet den modalen Dialog, wenn die "Zeige den Dialog"-Schaltfläche aktiviert wird. Der Dialog kann durch Drücken der <kbd>Escape</kbd>-Taste oder über die `close()` Methode geschlossen werden, wenn die "Schließen"-Schaltfläche im Dialog aktiviert wird.

Wenn ein Dialog geöffnet wird, fokussiert der Browser standardmäßig das erste fokussierbare Element innerhalb des Dialogs. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus) Attribut auf die "Schließen"-Schaltfläche angewendet und gibt ihr den Fokus, wenn der Dialog geöffnet wird, da dies das Element ist, von dem wir erwarten, dass es der Benutzer unmittelbar nach dem Öffnen des Dialogs anspricht.

#### HTML

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a groovy backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir können den Hintergrund des Dialogs mit dem {{cssxref('::backdrop')}} Pseudo-Element gestalten.

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

Der Dialog wird modal mit der `.showModal()` Methode geöffnet und mit den Methoden `.close()` oder `.requestClose()` geschlossen.

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

#### Resultat

{{EmbedLiveSample("Creating_a_modal_dialog", "100%", 200)}}

Wenn der modale Dialog angezeigt wird, erscheint er über allen anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des modalen Dialogs ist inaktiv und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass, wenn das Dialogfeld geöffnet ist, mit Ausnahme des Dialogs selbst, die Interaktion mit dem Dokument nicht möglich ist; die Schaltfläche "Zeige den Dialog" ist hauptsächlich vom fast undurchsichtigen Hintergrund des Dialogs verdeckt und ist inaktiv.

### Umgang mit dem Rückgabewert aus dem Dialog

Dieses Beispiel zeigt den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>` Elements und wie man einen modalen Dialog durch ein Formular schließt. Standardmäßig ist der `returnValue` der leere String oder der Wert der Schaltfläche, die das Formular innerhalb des `<dialog>` Elements absendet, falls vorhanden.

Dieses Beispiel öffnet einen modalen Dialog, wenn die "Zeige den Dialog"-Schaltfläche aktiviert wird. Das Dialogfeld enthält ein Formular mit einem {{HTMLElement("select")}} und zwei {{HTMLElement("button")}} Elementen, die standardmäßig `type="submit"` haben. Ein Event-Listener aktualisiert den Wert der "Bestätigen"-Schaltfläche, wenn die Auswahloption geändert wird. Wenn die "Bestätigen"-Schaltfläche aktiviert wird, um das Dialogfeld zu schließen, ist der aktuelle Wert der Schaltfläche der Rückgabewert. Wenn das Dialogfeld durch Drücken der "Abbrechen"-Schaltfläche geschlossen wird, ist der `returnValue` `cancel`.

Wenn das Dialogfeld geschlossen wird, wird der Rückgabewert unter der "Zeige den Dialog"-Schaltfläche angezeigt. Wenn das Dialogfeld durch Drücken der <kbd>Escape</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert, und das `close` Ereignis tritt nicht auf, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

#### Resultat

{{EmbedLiveSample("Handling the return value from the dialog", "100%", 300)}}

Die obigen Beispiele demonstrieren die folgenden drei Methoden zum Schließen von modalen Dialogen:

- Durch Absenden des Formulars im Dialog-Formular über die `dialog` Methode (wie im [HTML-only Beispiel](#nur_html-dialog) zu sehen).
- Durch Drücken der <kbd>Escape</kbd>-Taste.
- Durch Aufrufen der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) Methode (wie im [modalen Beispiel](#erstellen_eines_modalen_dialogs) zu sehen).
  In diesem Beispiel schließt die "Abbrechen"-Schaltfläche den Dialog über die `dialog` Formularmethode und die "Bestätigen"-Schaltfläche schließt den Dialog über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) Methode.

Die "Abbrechen"-Schaltfläche enthält das [`formmethod="dialog"`](/de/docs/Web/HTML/Element/input/submit#formmethod) Attribut, das die Standard-{{HTTPMethod("GET")}} Methode des {{HTMLElement("form")}} überschreibt. Wenn die Methode eines Formulars [`dialog`](#verwendungsnotizen) ist, wird der Zustand des Formulars gespeichert, aber nicht gesendet, und das Dialogfeld wird geschlossen.

Ohne eine `action` führt das Absenden des Formulars über die standardmäßige {{HTTPMethod("GET")}} Methode zu einem Neuladen der Seite. Wir verwenden JavaScript, um die Übermittlung zu verhindern und schließen den Dialog mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close).

Es ist wichtig, in jedem `dialog` Element einen Schließmechanismus bereitzustellen. Die <kbd>Escape</kbd>-Taste schließt nicht standardmäßig nicht-modale Dialoge, noch kann man davon ausgehen, dass ein Benutzer überhaupt Zugang zu einer physischen Tastatur hat (z. B. jemand, der ein Touchscreen-Gerät ohne Zugriff auf eine Tastatur verwendet).

### Schließen eines Dialogs mit einer erforderlichen Formulareingabe

Wenn ein Formular innerhalb eines Dialogs eine erforderliche Eingabe hat, lässt der User-Agent Sie das Dialogfeld erst schließen, wenn Sie einen Wert für die erforderliche Eingabe bereitstellen. Um einen solchen Dialog zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Element/input#formnovalidate) Attribut auf der Schließen-Schaltfläche oder rufen die `close()` Methode am Dialogobjekt auf, wenn die Schließen-Schaltfläche geklickt wird.

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

#### Resultat

{{EmbedLiveSample("Closing a dialog with a required form input", "100%", 300)}}

Aus der Ausgabe sehen wir, dass es unmöglich ist, den Dialog mithilfe der _Normal schließen_ Schaltfläche zu schließen. Aber der Dialog kann geschlossen werden, wenn wir die Formularüberprüfung mit dem `formnovalidate` Attribut auf der _Abbrechen_ Schaltfläche umgehen. Programmgesteuert schließt `dialog.close()` auch einen solchen Dialog.

### Dialoge animieren

`<dialog>` werden auf [`display: none;`](/de/docs/Web/CSS/display) gesetzt, wenn sie nicht sichtbar sind, und auf `display: block;`, wenn sie angezeigt werden, sowie aus der / in die {{Glossary("top_layer", "Top-Schicht")}} und den [Barrierefreiheitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt bzw. eingefügt. Daher, um `<dialog>` Elemente zu animieren, muss die {{cssxref("display")}} Eigenschaft animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Insbesondere wechselt der Browser zwischen `none` und einem anderen `display` Wert, so dass der animierte Inhalt für die gesamte Dauer der Animation sichtbar ist.

Beispielsweise:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display` Wert) wird der Wert zu `block` bei `0%` der Animationsdauer umgeschaltet, so dass er während der gesamten Dauer sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display` Wert) zu `none` wird der Wert zu `none` bei `100%` der Animationsdauer umgeschaltet, so dass er während der gesamten Dauer sichtbar ist.

> [!NOTE]
> Beim Animieren mithilfe von [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um das obige Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig verfügbar, wenn Sie mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) animieren; ein gleichwertiger Schritt ist nicht erforderlich.

#### Übergang von Dialogelementen

Beim Animieren von `<dialog>` mit CSS-Übergängen sind die folgenden Merkmale erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) At-Regel
  - : Bietet eine Reihe von Anfangswerten für Eigenschaften, die auf dem `<dialog>` eingestellt sind, von denen Sie jedes Mal, wenn es geöffnet wird, ausgehen möchten. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn sich ein Eigenschaftswert auf einem sichtbaren Element ändert; sie werden nicht bei ersten Stilaktualisierungen von Elementen ausgelöst oder wenn sich der `display` Typ von `none` zu einem anderen ändert.
- [`display`](/de/docs/Web/CSS/display) Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, sodass das `<dialog>` als `display: block` (oder ein anderer sichtbarer `display` Wert im offenen Zustand des Dialogs) für die Dauer des Übergangs bleibt und somit andere Übergänge sichtbar sind.
- [`overlay`](/de/docs/Web/CSS/overlay) Eigenschaft
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass die Entfernung des `<dialog>` aus der Top-Schicht bis zum Abschluss des Übergangs verzögert wird, wodurch der Übergang sichtbar bleibt.
- {{cssxref("transition-behavior")}} Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf den `display` und `overlay` Übergängen (oder im {{cssxref("transition")}} Shorthand), um diskrete Übergänge bei diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Hier ist ein schnelles Beispiel, um zu zeigen, wie das aussehen könnte.

##### HTML

Das HTML enthält ein `<dialog>` Element sowie einen Button, um den Dialog zu zeigen. Zusätzlich enthält das `<dialog>` Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS fügen wir einen `@starting-style` Block ein, der die Startstile für die Übergänge von `opacity` und `transform` Eigenschaften definiert, Endstile an den `dialog:open` Zustand übergibt und Standardstile im Standardzustand `dialog` zurückzuübergangieren, sobald das `<dialog>` erschienen ist. Beachten Sie, wie die `transition` Liste des `<dialog>` nicht nur diese Eigenschaften enthält, sondern auch die `display` und `overlay` Eigenschaften, die jeweils mit `allow-discrete` auf ihnen gesetzt werden.

Wir setzen auch einen Startstilwert für die {{cssxref("background-color")}} Eigenschaft auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop), der hinter dem `<dialog>` erscheint, wenn es geöffnet wird, um eine schöne Abdunkelungsanimation bereitzustellen. Der `dialog:open::backdrop` Selektor wählt nur die Kulissen von `<dialog>` Elementen, wenn es geöffnet ist.

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
> In Browsern, die die {{cssxref(":open")}} Pseudo-Klasse nicht unterstützen, können Sie den Attributselektor `dialog[open]` verwenden, um das `<dialog>` Element zu stylen, wenn es geöffnet ist.

##### JavaScript

Das JavaScript fügt Ereignishandler zu den Anzeig- und Schließen-Schaltflächen hinzu, sodass sie den `<dialog>` anzeigen und schließen, wenn sie angeklickt werden:

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

##### Resultat

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Transitioning dialog elements", "100%", "200") }}

> [!NOTE]
> Da `<dialog>` von `display: none` zu `display: block` jedes Mal wechseln, wenn sie angezeigt werden, wechseln die `<dialog>` Übergänge von ihrem `@starting-style` Stil zu ihren `dialog:open` Stilen jedes Mal, wenn der Eingangsübergang auftritt. Wenn sich das `<dialog>` schließt, wechselt es von seinem `dialog:open` Zustand zum Standard `dialog` Zustand.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt unterschiedlich ist. Siehe unser [Beispiel zur speziellen Verwendung von Startstilen](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Nachweis hierfür.

#### Dialog-Animations-Frame

Beim Animieren eines `<dialog>` mit CSS-Animations-Frames gibt es einige Unterschiede zu beachten:

- Sie stellen keinen `@starting-style` bereit.
- Sie geben den `display` Wert in einem Schlüsselbild an; dies wird der `display` Wert für die gesamte Animation oder bis ein anderer Nicht-`none` Anzeigewert auftritt.
- Sie müssen keine diskreten Animationen explizit aktivieren; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Animationen.
- Sie müssen `overlay` nicht innerhalb von Schlüsselbildern festlegen; die `display` Animation übernimmt die Animation des `<dialog>` von angezeigt zu verborgen.

Schauen wir uns ein Beispiel an, damit Sie sehen können, wie das aussieht.

##### HTML

Zunächst enthält das HTML ein `<dialog>` Element sowie eine Schaltfläche, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>` Element eine weitere Schaltfläche, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Schlüsselbilder, um zwischen den geschlossenen und angezeigten Zuständen des `<dialog>` zu animieren, sowie die Fade-in-Animation für den Hintergrund des `<dialog>`. Die `<dialog>` Animationen beinhalten das Animieren von `display`, um sicherzustellen, dass die tatsächlichen sichtbaren Animationseffekte für die gesamte Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, das Ausblenden des Hintergrunds zu animieren – der Hintergrund wird sofort aus dem DOM entfernt, wenn das `<dialog>` geschlossen wird, sodass nichts animiert werden kann.

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

##### Resultat

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("dialog keyframe animations", "100%", "200") }}

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>,
        <a href="/de/docs/Web/HTML/Element/Heading_Elements#sectioning_roots">Gliederungswurzeln</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">fließender Inhalt</a> akzeptiert
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

- [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Schnittstelle
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) Ereignis der `HTMLDialogElement` Schnittstelle
- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event) Ereignis der `HTMLDialogElement` Schnittstelle
- [`open`](/de/docs/Web/API/HTMLDialogElement/open) Eigenschaft der `HTMLDialogElement` Schnittstelle
- [`inert`](/de/docs/Web/HTML/Global_attributes/inert) globale Attribut für HTML Elemente
- {{CSSXref("::backdrop")}} CSS Pseudo-Element
- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
