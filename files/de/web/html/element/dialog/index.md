---
title: "<dialog>: Das Dialog-Element"
slug: Web/HTML/Element/dialog
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<dialog>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert ein modales oder nicht-modales Dialogfeld oder eine andere interaktive Komponente, wie z.B. eine entfernbares Warnfenster, Inspektor oder Unterfenster.

Das HTML-`<dialog>`-Element wird verwendet, um sowohl modale als auch nicht-modale Dialogfelder zu erstellen. Modale Dialogfelder unterbrechen die Interaktion mit dem Rest der Seite, während nicht-modale Dialogfelder es erlauben, mit dem Rest der Seite zu interagieren.

JavaScript sollte verwendet werden, um das `<dialog>`-Element anzuzeigen. Verwenden Sie die [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode, um ein modales Dialogfeld anzuzeigen, und die [`.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode, um ein nicht-modales Dialogfeld anzuzeigen. Das Dialogfeld kann mit der [`.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode oder durch die Verwendung der [`dialog`](/de/docs/Web/HTML/Element/form#method)-Methode beim Absenden eines `<form>`, das im `<dialog>`-Element eingebettet ist, geschlossen werden. Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf das `<dialog>`-Element angewendet werden. Siehe [Anwendungshinweise](#anwendungshinweise).

- `open`

  - : Gibt an, dass das Dialogfeld aktiv ist und zur Interaktion zur Verfügung steht. Wenn das `open`-Attribut nicht gesetzt ist, wird das Dialogfeld für den Benutzer nicht sichtbar sein.
    Es wird empfohlen, die `.show()`- oder `.showModal()`-Methode zu verwenden, um Dialoge anzuzeigen, anstatt das `open`-Attribut. Wenn ein `<dialog>` mit dem `open`-Attribut geöffnet wird, ist es nicht modal.

    > [!NOTE]
    > Obwohl Sie zwischen den offenen und geschlossenen Zuständen von nicht-modalen Dialogfeldern durch Umschalten des Vorhandenseins des `open`-Attributs wechseln können, wird dieser Ansatz nicht empfohlen.

## Anwendungshinweise

- HTML {{HTMLElement("form")}}-Elemente können verwendet werden, um ein Dialogfeld zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der Button, der zum Absenden des Formulars verwendet wird, [`formmethod="dialog"`](/de/docs/Web/HTML/Element/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>`-Elements über die `dialog`-Methode gesendet wird, schließt sich das Dialogfeld, die Zustände der Formularsteuerelemente werden gespeichert, aber nicht übermittelt, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)-Eigenschaft wird auf den Wert des aktivierten Buttons gesetzt.
- Das CSS {{cssxref('::backdrop')}} Pseudoelement kann verwendet werden, um den Hintergrund eines modalen Dialogs zu stylen, das hinter dem `<dialog>`-Element angezeigt wird, wenn das Dialogfeld mit der [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode angezeigt wird. Zum Beispiel könnte dieses Pseudoelement verwendet werden, um den inaktiven Inhalt hinter dem modalen Dialog zu verwischen, abzudunkeln oder anderweitig zu verschleiern.
- Das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attribut sollte dem Element hinzugefügt werden, mit dem der Benutzer sofort nach dem Öffnen eines modalen Dialogfelds interagieren soll. Wenn kein anderes Element eine unmittelbarere Interaktion erfordert, wird empfohlen, `autofocus` dem Schließen-Button im Dialog oder dem Dialog selbst hinzuzufügen, wenn erwartet wird, dass der Benutzer darauf klickt/aktiviert, um das Dialogfeld zu schließen.
- Fügen Sie dem `<dialog>`-Element keine `tabindex`-Eigenschaft hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Der Inhalt des Dialogs, einschließlich des Schließen-Buttons im Dialog, kann den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Beim Implementieren eines Dialogs ist es wichtig, den geeignetsten Ort für die Fokussierung des Benutzers zu berücksichtigen. Wenn Sie [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwenden, um ein `<dialog>` zu öffnen, wird der Fokus auf das erste verschachtelte fokussierbare Element gesetzt. Das explizite Angeben der anfänglichen Fokusplatzierung durch das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attribut hilft, sicherzustellen, dass der Anfangsfokus auf das Element gesetzt wird, das als am besten geeignet für den Anfangsfokus in einem bestimmten Dialog angesehen wird. Wenn Unklarheit besteht, da es möglicherweise nicht immer bekannt ist, wo der Anfangsfokus innerhalb eines Dialogs gesetzt werden könnte, insbesondere in Fällen, in denen der Inhalt eines Dialogs beim Aufrufen dynamisch gerendert wird, könnte das `<dialog>`-Element selbst die beste Anfangsfokusplatzierung bieten.

Stellen Sie sicher, dass eine Mechanik vorhanden ist, die es den Benutzern erlaubt, das Dialogfeld zu schließen. Der robusteste Weg, um sicherzustellen, dass alle Benutzer das Dialogfeld schließen können, ist das Hinzufügen eines expliziten Buttons, etwa einem Bestätigungs-, Abbruchs- oder Schließen-Button.

Standardmäßig kann ein Dialog, das durch die `showModal()`-Methode aufgerufen wird, durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Ein nicht-modales Dialogfeld wird standardmäßig nicht durch die <kbd>Esc</kbd>-Taste geschlossen, und je nachdem, was das nicht-modale Dialogfeld darstellt, könnte dieses Verhalten unerwünscht sein. Tastaturbenutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und beibehalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte durch Drücken der <kbd>Esc</kbd>-Taste nur der zuletzt angezeigte Dialog geschlossen werden. Beim Verwenden von `<dialog>` wird dieses Verhalten vom Browser bereitgestellt.

Dialoge können zwar mit anderen Elementen erstellt werden, das native `<dialog>`-Element bietet jedoch Benutzerfreundlichkeits- und Barrierefreiheitsfunktionen, die nachgebildet werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck verwenden. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhalten unterstützt und ordnungsgemäße Beschriftungsempfehlungen befolgt werden.

Das `<dialog>`-Element wird von Browsern auf ähnliche Weise bereitgestellt wie benutzerdefinierte Dialoge, die das ARIA-[Rolle="dialog"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)-Attribut verwenden. `<dialog>`-Elemente, die durch die `showModal()`-Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), während `<dialog>`-Elemente, die durch die `show()`-Methode oder durch Anzeigen mit dem `open`-Attribut oder durch Ändern der standardmäßigen `display`-Eigenschaft eines `<dialog>`-Modals sind als `[aria-modal="false"]` markiert. Bei der Implementierung von modalen Dialogen sollte alles außer dem `<dialog>` und seinem Inhalt durch das [`inert`](/de/docs/Web/HTML/Global_attributes/inert)-Attribut als inaktiv gekennzeichnet werden. Bei der Verwendung von `<dialog>` in Kombination mit der `HTMLDialogElement.showModal()`-Methode wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### HTML-Only-Dialog

Dieses Beispiel zeigt die Erstellung eines nicht-modalen Dialogs nur mit HTML. Aufgrund des booleschen `open`-Attributs im `<dialog>`-Element wird das Dialogfeld beim Laden der Seite geöffnet angezeigt. Das Dialogfeld kann geschlossen werden, indem der "OK"-Button angeklickt wird, weil das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist. In diesem Fall ist kein JavaScript erforderlich, um das Formular zu schließen.

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

Dieses Dialogfeld ist zu Beginn wegen des Vorhandenseins des `open`-Attributs geöffnet. Dialoge, die mit dem `open`-Attribut angezeigt werden, sind nicht modale Dialoge. Nach dem Klicken auf "OK" wird das Dialogfeld geschlossen, und der Ergebnisrahmen bleibt leer. Wenn das Dialogfeld geschlossen wird, gibt es keine Methode, um es wieder zu öffnen. Aus diesem Grund ist es die empfohlene Methode, nicht-modale Dialoge mit der [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode anzuzeigen. Es ist möglich, die Anzeige des Dialogs zu toggeln, indem man das boolesche `open`-Attribut hinzufügt oder entfernt, aber dies ist nicht die empfohlene Praxis.

### Erstellung eines modalen Dialogs

Dieses Beispiel zeigt einen modalen Dialog mit einem [Gradienten](/de/docs/Web/CSS/gradient)-Hintergrund. Die `.showModal()`-Methode öffnet den modalen Dialog, wenn der Button "Show the dialog" aktiviert wird. Das Dialogfeld kann durch Drücken der <kbd>Esc</kbd>-Taste oder mit der `close()`-Methode geschlossen werden, wenn der "Close"-Button innerhalb des Dialogs aktiviert wird.

Wenn ein Dialog geöffnet wird, setzt der Browser standardmäßig den Fokus auf das erste Element, das innerhalb des Dialogfelds fokussiert werden kann. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attribut auf den "Close"-Button angewendet, um ihm den Fokus zu geben, wenn das Dialogfeld geöffnet wird, da dies das Element ist, mit dem der Benutzer voraussichtlich unmittelbar nach dem Öffnen des Dialogs interagieren wird.

#### HTML

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a groovy backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir können den Hintergrund des Dialogs mithilfe des {{cssxref('::backdrop')}}-Pseudoelements stylen.

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

Der Dialog wird mit der `.showModal()`-Methode modal geöffnet und mit den Methoden `.close()` oder `.requestClose()` geschlossen.

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

Wenn das modale Dialogfeld angezeigt wird, erscheint es über allen anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des modalen Dialogfelds ist inaktiv und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass, wenn das Dialogfeld geöffnet ist, mit Ausnahme des Dialogs selbst, keine Interaktion mit dem Dokument möglich ist; der "Show the dialog"-Button wird weitestgehend durch den fast undurchsichtigen Hintergrund des Dialogs verdeckt und ist inaktiv.

### Umgang mit dem Rückgabewert des Dialogs

Dieses Beispiel zeigt den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie ein modales Dialogfeld durch ein Formular geschlossen wird. Standardmäßig ist der `returnValue` der leere Zeichenstring oder der Wert des Buttons, der das Formular innerhalb des `<dialog>`-Elements übermittelt, falls vorhanden.

Dieses Beispiel öffnet ein modales Dialogfeld, wenn der Button "Show the dialog" aktiviert wird. Das Dialogfeld enthält ein Formular mit einem {{HTMLElement("select")}} und zwei {{HTMLElement("button")}}-Elementen, die standardmäßig auf `type="submit"` gesetzt sind. Ein Event-Listener aktualisiert den Wert des "Confirm"-Buttons, wenn die Auswahloption geändert wird. Wenn der "Confirm"-Button aktiviert wird, um das Dialogfeld zu schließen, ist der aktuelle Wert des Buttons der Rückgabewert. Wenn das Dialogfeld durch Drücken des "Cancel"-Buttons geschlossen wird, ist der `returnValue` `"cancel"`.

Wenn das Dialogfeld geschlossen wird, wird der Rückgabewert unter dem "Show the dialog"-Button angezeigt. Wenn das Dialogfeld durch Drücken der <kbd>Esc</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert und das `close`-Ereignis tritt nicht auf, so dass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

Die obigen Beispiele demonstrieren die folgenden drei Methoden, um modale Dialoge zu schließen:

- Durch Übermittlung des Formulars innerhalb des Dialogformulars mit der `dialog`-Methode (wie im [HTML-only-Beispiel](#html-only-dialog)).
- Durch Drücken der <kbd>Esc</kbd>-Taste.
- Durch Aufrufen der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode (wie im [modalen Beispiel](#erstellung_eines_modalen_dialogs)).
  In diesem Beispiel schließt der "Cancel"-Button das Dialogfeld über die `dialog`-Formularmethode und der "Confirm"-Button schließt das Dialogfeld über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode.

Der "Cancel"-Button enthält das [`formmethod="dialog"`](/de/docs/Web/HTML/Element/input/submit#formmethod)-Attribut, welches die Standard-{{HTTPMethod("GET")}}-Methode des {{HTMLElement("form")}} überschreibt. Wenn die Methode eines Formulars [`dialog`](#anwendungshinweise) ist, wird der Zustand des Formulars gespeichert, aber nicht übermittelt, und das Dialogfeld wird geschlossen.

Ohne eine `action` führt das Übermitteln des Formulars über die Standard-{{HTTPMethod("GET")}}-Methode zu einem Neuladen der Seite. Wir verwenden JavaScript, um die Übermittlung zu verhindern und das Dialogfeld mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) zu schließen.

Es ist wichtig, in jedem `dialog`-Element einen Schließmechanismus bereitzustellen. Die <kbd>Esc</kbd>-Taste schließt standardmäßig keine nicht-modalen Dialoge, und man kann nicht davon ausgehen, dass ein Benutzer überhaupt Zugang zu einer physischen Tastatur hat (z.B. jemand, der ein Touchscreen-Gerät ohne Zugang zu einer Tastatur verwendet).

### Schließen eines Dialogs mit einer erforderlichen Formulareingabe

Wenn ein Formular innerhalb eines Dialogs eine erforderliche Eingabe hat, lässt der Benutzeragent Sie das Dialogfeld nur schließen, wenn Sie einen Wert für die erforderliche Eingabe angeben. Um ein solches Dialogfeld zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Element/input#formnovalidate)-Attribut am Schließen-Button oder rufen Sie die `close()`-Methode des Dialogobjekts auf, wenn der Schließen-Button angeklickt wird.

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

Aus der Ausgabe sehen wir, dass es unmöglich ist, das Dialogfeld mit dem _Normal close_-Button zu schließen. Aber das Dialogfeld kann geschlossen werden, wenn wir die Formularvalidierung mit dem `formnovalidate`-Attribut am _Cancel_-Button umgehen. Programmatisch wird `dialog.close()` auch ein solches Dialogfeld schließen.

### Animieren von Dialogen

`<dialog>`-Elemente sind auf [`display: none;`](/de/docs/Web/CSS/display) gesetzt, wenn sie verborgen sind, und `display: block;`, wenn sie angezeigt werden, sowie sie aus der / in die {{Glossary("top_layer", "obenste Ebene")}} und den [Barrierefreiheitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt / hinzugefügt werden. Daher muss die {{cssxref("display")}}-Eigenschaft animierbar sein, damit `<dialog>`-Elemente animiert werden können. Unterstützende Browser animieren `display` mit einer Abwandlung des [diskreten Animationsstils](/de/docs/Web/CSS/CSS_animated_properties#discrete). Speziell schaltet der Browser zwischen `none` und einem anderen Wert von `display`, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird.

Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, schaltet der Wert bei `0%` der Animationsdauer zu `block`, damit es währenddessen sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, schaltet der Wert bei `100%` der Animationsdauer zu `none`, sodass es währenddessen sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig beim Animieren mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) verfügbar; ein entsprechender Schritt ist nicht erforderlich.

#### Übergang von Dialogelementen

Beim Animieren von `<dialog>`-Elementen mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style)-At-Regel
  - : Stellt einen Satz Anfangswerte für Eigenschaften bereit, die auf dem `<dialog>` festgelegt sind und von denen Sie jedes Mal, wenn es geöffnet wird, übergehen möchten. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur dann auf, wenn ein Wert von einem sichtbaren Element geändert wird; sie werden nicht ausgelöst, wenn das `display` von `none` zu einem anderen Typ wechselt.
- [`display`](/de/docs/Web/CSS/display)-Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das `<dialog>` über die Dauer des Übergangs als `display: block` (oder ein anderer sichtbarer `display`-Wert im offenen Zustand des Dialogs) bleibt, wodurch sichergestellt wird, dass die anderen Übergänge sichtbar sind.
- [`overlay`](/de/docs/Web/CSS/overlay)-Eigenschaft
  - : Nehmen Sie `overlay` in die Übergangsliste auf, um sicherzustellen, dass die Entfernung des `<dialog>` von der obersten Ebene aufgeschoben wird, bis der Übergang abgeschlossen ist, wieder um den Übergang sichtbar zu machen.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf den `display`- und `overlay`-Übergängen (oder auf die {{cssxref("transition")}}-Verkürzung), um diskrete Übergänge für diese beiden standardmäßig nicht animierbaren Eigenschaften zu ermöglichen.

Hier ist ein schnelles Beispiel, um zu zeigen, wie das aussehen könnte.

##### HTML

Das HTML enthält ein `<dialog>`-Element sowie einen Button, um das Dialogfeld anzuzeigen. Zusätzlich enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS fügen wir einen `@starting-style`-Block hinzu, der die Übergangsstile für die Eigenschaften `opacity` und `transform` beim Öffnen des Dialogfelds definiert, Übergangsendstile im `dialog:open`-Zustand und Standardstile im Standard-`dialog`-Zustand, zu denen das `<dialog>` zurückkehren soll, sobald es erschienen ist. Beachten Sie, wie die `transition`-Liste des `<dialog>` nicht nur diese Eigenschaften umfasst, sondern auch die `display`- und `overlay`-Eigenschaften, jede mit `allow-discrete` gesetzt.

Wir setzen auch einen Anfangsstilwert für die {{cssxref("background-color")}}-Eigenschaft auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop), das hinter dem `<dialog>` angezeigt wird, wenn es geöffnet wird, um eine angenehme Verdunkelungsanimation zu erzeugen. Der `dialog:open::backdrop`-Selektor wählt nur die Hintergründe von `<dialog>`-Elementen aus, wenn das Dialogfeld geöffnet ist.

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
> In Browsern, die das {{cssxref(":open")}}-Pseudoklasse nicht unterstützen, können Sie den Attributselektor `dialog[open]` verwenden, um das `<dialog>`-Element beim Öffnen zu stylen.

##### JavaScript

Das JavaScript fügt Ereignishandler zu den Buttons hinzu, sodass sie das `<dialog>` anzeigen und schließen, wenn sie angeklickt werden:

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

Der Code wird wie folgt wiedergegeben:

{{ EmbedLiveSample("Transitioning dialog elements", "100%", "200") }}

> [!NOTE]
> Da `<dialog>`-Elemente jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, wechselt das `<dialog>` jedes Mal vom `@starting-style` zu seinen `dialog:open`-Stilen, wenn der Eingangsübergang auftritt. Wenn das `<dialog>` geschlossen wird, wechselt es von seinem `dialog:open`-Zustand zurück in den Standardzustand `dialog`.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt unterschiedlich ist. Siehe unser [Beispiel zur Demonstration, wann Startstile verwendet werden](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Nachweis darüber.

#### Keyframe-Animationen für Dialoge

Beim Animieren eines `<dialog>` mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu beachten gegenüber Übergängen:

- Sie geben keinen `@starting-style` an.
- Sie schließen den `display`-Wert in ein Keyframe ein; dieser wird der `display`-Wert für die gesamte Animation oder bis ein anderer nicht-`none`-Displaywert auftritt sein.
- Sie müssen keine diskreten Animationen ausdrücklich zulassen; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Keyframes.
- Sie müssen `overlay` innerhalb von Keyframes nicht festlegen; die `display`-Animation übernimmt die Animation des `<dialog>` vom gezeigten zum verdeckten Zustand.

Schauen wir uns ein Beispiel an, damit Sie sehen können, wie das aussieht.

##### HTML

Zuerst enthält das HTML ein `<dialog>`-Element sowie einen Button, um das Dialogfeld anzuzeigen. Zusätzlich enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Keyframes, um zwischen den Zuständen geschlossen und angezeigt des `<dialog>` zu animieren, sowie die Fade-In-Animation für das Hintergrund des `<dialog>`. Die `<dialog>`-Animationen umfassen das Animieren von `display`, um sicherzustellen, dass die tatsächlichen sichtbaren Animationseffekte während der gesamten Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, das Ausblenden des Hintergrunds zu animieren — der Hintergrund wird sofort aus dem DOM entfernt, wenn das `<dialog>` geschlossen wird, also gibt es nichts zu animieren.

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

Schließlich fügt das JavaScript Ereignishandler zu den Buttons hinzu, um das Anzeigen und Schließen des `<dialog>` zu ermöglichen:

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

Der Code wird wie folgt wiedergegeben:

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
        <a href="/de/docs/Web/HTML/Element/Heading_Elements#sectioning_roots">Abschnittswurzel</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl Start- als auch Endtags sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>
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
- [`inert`](/de/docs/Web/HTML/Global_attributes/inert) globales Attribut für HTML-Elemente
- {{CSSXref("::backdrop")}} CSS-Pseudoelement
- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
