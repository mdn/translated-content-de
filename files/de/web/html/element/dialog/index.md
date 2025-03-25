---
title: "<dialog>: Das Dialog-Element"
slug: Web/HTML/Element/dialog
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{HTMLSidebar}}

Das **`<dialog>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert ein modales oder nicht-modales Dialogfenster oder eine andere interaktive Komponente, wie z.B. ein schließbares Alert, Inspektor oder Unterfenster.

Das HTML `<dialog>`-Element wird verwendet, um sowohl modale als auch nicht-modale Dialogfenster zu erstellen. Modale Dialogfenster unterbrechen die Interaktion mit dem Rest der Seite, während nicht-modale Dialogfenster die Interaktion mit dem Rest der Seite erlauben.

JavaScript sollte verwendet werden, um das `<dialog>`-Element anzuzeigen. Verwenden Sie die [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode, um ein modales Dialogfenster anzuzeigen, und die [`.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode, um ein nicht-modales Dialogfenster anzuzeigen. Das Dialogfenster kann mit der [`.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode geschlossen werden oder mittels der [`dialog`](/de/docs/Web/HTML/Element/form#method)-Methode beim Absenden eines `<form>`, das innerhalb des `<dialog>`-Elements verschachtelt ist. Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf dem `<dialog>`-Element verwendet werden. Siehe [Verwendungsnotizen](#verwendungsnotizen).

- `open`

  - : Zeigt an, dass das Dialogfenster aktiv und zur Interaktion verfügbar ist. Wenn das `open`-Attribut nicht gesetzt ist, wird das Dialogfenster für den Benutzer nicht sichtbar sein.
    Es wird empfohlen, die `.show()`- oder `.showModal()`-Methode zu verwenden, um Dialoge darzustellen, anstatt das `open`-Attribut zu verwenden. Wenn ein `<dialog>` mithilfe des `open`-Attributs geöffnet wird, ist es nicht-modal.

    > [!NOTE]
    > Auch wenn Sie den offenen und geschlossenen Zustand nicht-modaler Dialogfenster durch Umschalten der Anwesenheit des `open`-Attributes umschalten können, wird dieser Ansatz nicht empfohlen. Siehe [`open`](/de/docs/Web/API/HTMLDialogElement/open) für weitere Informationen.

## Verwendungsnotizen

- HTML {{HTMLElement("form")}}-Elemente können verwendet werden, um ein Dialogfenster zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der Button, der das Formular absendet, [`formmethod="dialog"`](/de/docs/Web/HTML/Element/input#formmethod) gesetzt hat. Wird ein `<form>` innerhalb eines `<dialog>` über die `dialog`-Methode abgesendet, schließt sich das Dialogfenster, die Zustände der Formularsteuerungen werden gespeichert, aber nicht abgesendet, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)-Eigenschaft wird auf den Wert des Buttons gesetzt, der aktiviert wurde.
- Das CSS-{{cssxref('::backdrop')}}-Pseudo-Element kann verwendet werden, um den Hintergrund eines modalen Dialogs zu gestalten, der hinter dem `<dialog>`-Element angezeigt wird, wenn das Dialogfenster mit der [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode angezeigt wird. Zum Beispiel könnte dieses Pseudo-Element verwendet werden, um den inerten Inhalt hinter dem modalen Dialog zu verwischen, abzudunkeln oder anderweitig zu verdecken.
- Das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attribut sollte dem Element hinzugefügt werden, mit dem der Benutzer unmittelbar nach dem Öffnen eines modalen Dialogs interagieren soll. Wenn kein anderes Element eine unmittelbarere Interaktion mit sich bringt, wird empfohlen, `autofocus` dem Schließ-Button innerhalb des Dialogs oder dem Dialog selbst hinzuzufügen, wenn der Benutzer erwartet wird, darauf zu klicken/zu aktivieren, um es zu schließen.
- Fügen Sie dem `<dialog>`-Element nicht das `tabindex`-Attribut hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Die Inhalte des Dialogs, einschließlich des Schließ-Buttons, der im Dialog enthalten ist, können jedoch den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Bei der Implementierung eines Dialogs ist es wichtig, den geeignetsten Ort für den Benutzerfokus zu berücksichtigen. Beim Öffnen eines `<dialog>` mit [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), wird der Fokus auf das erste verschachtelte fokussierbare Element gesetzt. Die explizite Angabe der anfänglichen Fokusplatzierung durch das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attribut hilft sicherzustellen, dass der anfängliche Fokus auf das als besten Platz für den anfänglichen Fokus betrachtete Element gesetzt wird. Bei Unsicherheiten, insbesondere wenn der Inhalt eines Dialogs dynamisch gerendert wird, wenn er aufgerufen wird, könnte das `<dialog>`-Element selbst die beste anfängliche Fokusplatzierung bieten.

Stellen Sie sicher, dass eine Möglichkeit bereitgestellt wird, Benutzern das Schließen des Dialogs zu ermöglichen. Der robusteste Weg, um sicherzustellen, dass alle Benutzer den Dialog schließen können, besteht darin, einen expliziten Button dafür einzuschließen, z.B. einen Bestätigungs-, Abbruch- oder Schließ-Button.

Standardmäßig kann ein Dialog, der mit der `showModal()`-Methode aufgerufen wird, durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Ein nicht-modales Dialog schließt sich standardmäßig nicht über die <kbd>Esc</kbd>-Taste, und je nach dem, was das nicht-modale Dialog darstellt, kann es nicht gewünscht sein, dass dieses Verhalten auftritt. Tastaturbenutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und beibehalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte das Drücken der <kbd>Esc</kbd>-Taste nur den zuletzt angezeigten Dialog schließen. Beim Verwenden von `<dialog>` wird dieses Verhalten vom Browser bereitgestellt.

Obwohl Dialoge mit anderen Elementen erstellt werden können, bietet das native `<dialog>`-Element Benutzerfreundlichkeit und Barrierefreiheitsfunktionen, die repliziert werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck verwenden. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhalten unterstützt werden und die entsprechenden Beschriftungsempfehlungen befolgt werden.

Das `<dialog>`-Element wird von Browsern in ähnlicher Weise behandelt wie benutzerdefinierte Dialoge, die das ARIA-Attribut [role="dialog"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) verwenden. `<dialog>`-Elemente, die mit der `showModal()`-Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), während `<dialog>`-Elemente, die per `show()`-Methode oder über das `open`-Attribut angezeigt werden oder indem die Standardanzeige eines `<dialog>` geändert wird, als `[aria-modal="false"]` dargestellt werden. Beim Implementieren von Modal-Dialogen sollte alles andere als das `<dialog>` und dessen Inhalt als inert gerendert werden, indem das [`inert`](/de/docs/Web/HTML/Global_attributes/inert)-Attribut verwendet wird. Beim Verwenden von `<dialog>` zusammen mit der `HTMLDialogElement.showModal()`-Methode wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### HTML-only Dialog

Dieses Beispiel zeigt die Erstellung eines nicht-modalen Dialogs nur mit HTML. Aufgrund des booleschen `open`-Attributs im `<dialog>`-Element erscheint das Dialogfenster geöffnet, wenn die Seite geladen wird. Das Dialogfenster kann geschlossen werden, indem auf den "OK"-Button geklickt wird, weil das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist. In diesem Fall ist kein JavaScript nötig, um das Formular zu schließen.

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

Dieses Dialogfenster ist anfänglich geöffnet, weil das `open`-Attribut vorhanden ist. Dialoge, die mit dem `open`-Attribut angezeigt werden, sind nicht-modal. Nach dem Klick auf "OK" wird das Dialogfenster geschlossen, und der Ergebnisrahmen bleibt leer. Wenn das Dialogfenster geschlossen wird, gibt es keine bereitgestellte Methode, um es erneut zu öffnen. Aus diesem Grund ist die bevorzugte Methode zur Anzeige nicht-modaler Dialoge die Verwendung der [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode. Es ist möglich, die Anzeige des Dialogs durch Hinzufügen oder Entfernen des booleschen `open`-Attributs zu steuern, aber es ist nicht die empfohlene Praxis.

### Erstellung eines modalen Dialogs

Dieses Beispiel zeigt einen modalen Dialog mit einem [Gradienten](/de/docs/Web/CSS/gradient) im Hintergrund. Die `.showModal()`-Methode öffnet das modale Dialogfenster, wenn der Button "Show the dialog" aktiviert wird. Das Dialogfenster kann durch Drücken der <kbd>Esc</kbd>-Taste oder über die `close()`-Methode geschlossen werden, wenn der Button "Close" innerhalb des Dialogs aktiviert wird.

Wenn ein Dialog geöffnet wird, setzt der Browser standardmäßig den Fokus auf das erste Element, das im Dialog fokussiert werden kann. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attribut auf den Button "Close" angewendet, wodurch dieser den Fokus erhält, wenn der Dialog geöffnet wird, da dies das Element ist, mit dem der Benutzer sofort nach dem Öffnen des Dialogs interagieren soll.

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

Der Dialog wird modal mit der `.showModal()`-Methode geöffnet und mit der `.close()`- oder `.requestClose()`-Methode geschlossen.

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

Wenn das modale Dialogfenster angezeigt wird, erscheint es über allen anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des modalen Dialogs ist inert, und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass bei geöffnetem Dialog, außer dem Dialog selbst, keine Interaktion mit dem Dokument möglich ist; der Button "Show the dialog" ist weitgehend vom nahezu undurchsichtigen Hintergrund des Dialogs verdeckt und ist inert.

### Umgang mit dem Rückgabewert vom Dialog

Dieses Beispiel zeigt den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie man ein modales Dialogfenster mit einem Formular schließt. Standardmäßig ist der `returnValue` die leere Zeichenkette oder der Wert des Buttons, der das Formular im `<dialog>`-Element absendet, wenn es einen gibt.

Dieses Beispiel öffnet ein modales Dialogfenster, wenn der Button "Show the dialog" aktiviert wird. Das Dialogfenster enthält ein Formular mit einem {{HTMLElement("select")}} und zwei {{HTMLElement("button")}}-Elementen, die standardmäßig `type="submit"` haben. Ein Event-Listener aktualisiert den Wert des "Confirm"-Buttons, wenn sich die Auswahloption ändert. Wenn der "Confirm"-Button aktiviert wird, um das Dialogfenster zu schließen, ist der aktuelle Wert des Buttons der Rückgabewert. Wenn der Dialog durch Drücken des "Cancel"-Buttons geschlossen wird, ist der `returnValue` `cancel`.

Wenn das Dialogfenster geschlossen wird, wird der Rückgabewert unter dem Button "Show the dialog" angezeigt. Wenn der Dialog durch Drücken der <kbd>Esc</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert, und das `close`-Ereignis tritt nicht auf, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

- Durch Absendung des Formulars innerhalb des Dialogformulars mit der `dialog`-Methode (wie im [HTML-only Beispiel](#html-only_dialog) gezeigt).
- Durch Drücken der <kbd>Esc</kbd>-Taste.
- Durch Aufruf der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode (wie im [modalen Beispiel](#erstellung_eines_modalen_dialogs) gezeigt).
  In diesem Beispiel schließt der "Cancel"-Button den Dialog über die `dialog`-Formularmethode und der "Confirm"-Button schließt den Dialog über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode.

Der "Cancel"-Button enthält das [`formmethod="dialog"`](/de/docs/Web/HTML/Element/input/submit#formmethod)-Attribut, das die Standard-{{HTTPMethod("GET")}}-Methode des {{HTMLElement("form")}} außer Kraft setzt. Wenn die Methode eines Formulars [`dialog`](#verwendungsnotizen) ist, wird der Zustand des Formulars gespeichert, aber nicht abgesendet, und das Dialogfenster wird geschlossen.

Ohne eine `action` würde das Absenden des Formulars über die Standard-{{HTTPMethod("GET")}}-Methode zu einem Seiten-Reload führen. Wir verwenden JavaScript, um das Absenden zu verhindern und den Dialog mit den jeweiligen [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) Methoden zu schließen.

Es ist wichtig, innerhalb jedes `dialog`-Elements einen Mechanismus zum Schließen zu bieten. Die <kbd>Esc</kbd>-Taste schließt standardmäßig keine nicht-modalen Dialoge, noch kann man davon ausgehen, dass ein Benutzer Zugang zu einer physischen Tastatur hat (z.B. jemand, der ein Touchscreen-Gerät ohne Tastaturzugriff verwendet).

### Schließen eines Dialogs mit einer erforderlichen Formulareingabe

Wenn ein Formular innerhalb eines Dialogs eine erforderliche Eingabe hat, lässt der Benutzeragent Sie den Dialog nur schließen, wenn Sie einen Wert für die erforderliche Eingabe bereitstellen. Um ein solches Dialog zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Element/input#formnovalidate)-Attribut am Schließ-Button oder rufen Sie die `close()`-Methode am Dialog-Objekt auf, wenn der Schließ-Button angeklickt wird.

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

Aus der Ausgabe sehen wir, dass es unmöglich ist, den Dialog mit dem _Normal close_-Button zu schließen. Aber der Dialog kann geschlossen werden, wenn wir die Formularvalidierung mit dem `formnovalidate` Attribut am _Cancel_-Button umgehen. Programmgesteuert wird `dialog.close()` auch einen solchen Dialog schließen.

### Dialoge animieren

`<dialog>`s sind auf [`display: none;`](/de/docs/Web/CSS/display) eingestellt, wenn sie verborgen sind, und `display: block;`, wenn sie angezeigt werden, sowie aus der / in die {{Glossary("top_layer", "obere Schicht")}} und den [Barrierefreiheitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt / hinzugefügt. Daher muss für `<dialog>`-Elemente das {{cssxref("display")}}-Eigenschaft animierbar sein, um animiert zu werden. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Genauer gesagt, wechselt der Browser zwischen `none` und einem anderen `display`-Wert, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird.

Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert zu `block` bei `0%` der Animationsdauer, sodass er die ganze Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wechselt der Wert zu `none` bei `100%` der Animationsdauer, sodass er die ganze Zeit sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt sein, um das oben genannte Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig verfügbar, wenn mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) animiert wird; ein entsprechender Schritt ist nicht erforderlich.

#### Übergangselemente des Dialogs

Beim Animieren von `<dialog>`-Elementen mit CSS-Übergängen sind folgende Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style)-Atregel
  - : Bietet einen Satz Anfangswerte für Eigenschaften, die am `<dialog>` gesetzt sind und von denen Sie bei jedem Öffnen wechseln möchten. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig erfolgen CSS-Übergänge nur, wenn eine Eigenschaft von einem Wert zu einem anderen auf einem sichtbaren Element ändert; sie werden nicht bei den ersten Stilaktualisierungen von Elementen oder bei Änderungen des `display`-Typs von `none` zu einem anderen Typ ausgelöst.
- [`display`](/de/docs/Web/CSS/display)-Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das `<dialog>` während der Dauer des Übergangs als `display: block` (oder ein anderer sichtbarer `display`-Wert im geöffneten Zustand des Dialogs) bleibt, um sicherzustellen, dass die anderen Übergänge sichtbar sind.
- [`overlay`](/de/docs/Web/CSS/overlay)-Eigenschaft
  - : Schließen Sie `overlay` in der Übergangsliste ein, um sicherzustellen, dass die Entfernung des `<dialog>` aus der oberen Schicht bis zum Abschluss des Übergangs zurückgehalten wird, was wiederum sicherstellt, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf den `display` und `overlay`-Übergängen (oder auf die {{cssxref("transition")}}-Abkürzung), um diskrete Übergänge auf diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Hier ist ein kurzes Beispiel, um zu zeigen, wie das aussehen könnte.

##### HTML

Der HTML-Code enthält ein `<dialog>`-Element sowie einen Button, um das Dialogfenster anzuzeigen. Zusätzlich enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS fügen wir einen `@starting-style`-Block ein, der die Übergangsausgangsstile für die Eigenschaften `opacity` und `transform` definiert, Übergangsendsstyles auf den `dialog:open`-Zustand und Standardstyles auf den Standardzustand `dialog`, zu dem zurückgewechselt wird, sobald das `<dialog>` erschienen ist. Beachten Sie, wie die `transition`-Liste des `<dialog>` nicht nur diese Eigenschaften enthält, sondern auch die Eigenschaften `display` und `overlay`, jeweils mit `allow-discrete` darauf gesetzt.

Wir setzen auch einen Startstilwert für die {{cssxref("background-color")}}-Eigenschaft auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop), das hinter dem `<dialog>` erscheint, wenn es geöffnet wird, um eine schöne Verdunklungsanimation zu bieten. Der `dialog:open::backdrop`-Selektor wählt nur die Hintergründe von `<dialog>`-Elementen aus, wenn das Dialog offen ist.

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
> In Browsern, die die {{cssxref(":open")}}-Pseudoklasse nicht unterstützen, können Sie den Attributselektor `dialog[open]` verwenden, um das `<dialog>`-Element zu stylen, wenn es im offenen Zustand ist.

##### JavaScript

Das JavaScript fügt Event-Handler zu den Schaltflächen hinzu, die bewirken, dass sie das `<dialog>` anzeigen und schließen, wenn sie angeklickt werden:

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
> Da `<dialog>`s bei jedem Anzeigen von `display: none` zu `display: block` wechseln, wechseln die Stile des `<dialog>` bei jedem Einblenden von seinen `@starting-style`-Stilen zu seinen `dialog:open`-Stilen. Wenn der `<dialog>` geschlossen wird, wechselt er von seinem `dialog:open`-Zustand zurück zum Standardzustand `dialog`.
>
> Es ist möglich, dass der Stilübergang beim Ein- und Ausblenden unterschiedlich ist. Siehe unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel als Beweis dafür.

#### Dialog-Keyframe-Animationen

Beim Animieren eines `<dialog>` mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu Übergängen:

- Es wird kein `@starting-style` bereitgestellt.
- Der `display`-Wert wird in einem Keyframe angegeben; dies wird der `display`-Wert für die gesamte Animation sein, oder bis ein anderer `display`-Wert, der nicht `none` ist, auftritt.
- Es ist nicht erforderlich, diskrete Animationen explizit zu aktivieren; es gibt kein Äquivalent zu `allow-discrete` innerhalb der Keyframes.
- Es ist nicht erforderlich, `overlay` innerhalb von Keyframes zu setzen; die Animation des `display`-Werts behandelt die Animation des `<dialog>` von angezeigt zu verborgen.

Sehen wir uns ein Beispiel an, um zu sehen, wie das aussieht.

##### HTML

Zuerst enthält der HTML-Code ein `<dialog>`-Element sowie einen Button, um das Dialogfenster anzuzeigen. Zusätzlich enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Keyframes, um zwischen den geschlossenen und angezeigten Zuständen des `<dialog>` zu animieren, sowie die Einblendanimation für den Hintergrund des `<dialog>`. Die `<dialog>`-Animationen umfassen das Animieren von `display`, um sicherzustellen, dass die tatsächlichen sichtbaren Animationseffekte während der gesamten Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, das Ausblenden des Hintergrunds zu animieren - der Hintergrund wird sofort aus dem DOM entfernt, wenn das `<dialog>` geschlossen wird, sodass nichts animiert werden kann.

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

Abschließend fügt das JavaScript Event-Handler zu den Schaltflächen hinzu, um das Anzeigen und Schließen des `<dialog>` zu ermöglichen:

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>,
        Abschnittswurzel
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">fließenden Inhalt</a> akzeptiert
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

- [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis der `HTMLDialogElement`-Schnittstelle
- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis der `HTMLDialogElement`-Schnittstelle
- [`open`](/de/docs/Web/API/HTMLDialogElement/open)-Eigenschaft der `HTMLDialogElement`-Schnittstelle
- [`inert`](/de/docs/Web/HTML/Global_attributes/inert) globales Attribut für HTML-Elemente
- {{CSSXref("::backdrop")}} CSS-Pseudo-Element
- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
