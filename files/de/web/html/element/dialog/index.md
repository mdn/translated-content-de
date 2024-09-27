---
title: "<dialog>: Das Dialog-Element"
slug: Web/HTML/Element/dialog
l10n:
  sourceCommit: be7cf520036291031985ab0b38c487539b1faa9d
---

{{HTMLSidebar}}

Das **`<dialog>`** [HTML](/de/docs/Web/HTML)-Element stellt einen modalen oder nicht-modalen Dialog oder eine andere interaktive Komponente dar, wie z.B. eine ablehnbare Warnung, Inspektor oder Unterfenster.

Das HTML `<dialog>` Element wird verwendet, um sowohl modale als auch nicht-modale Dialoge zu erstellen. Modale Dialoge unterbrechen die Interaktion mit dem Rest der Seite und machen diese träge, während nicht-modale Dialoge die Interaktion mit dem Rest der Seite ermöglichen.

JavaScript sollte verwendet werden, um das `<dialog>` Element anzuzeigen. Verwenden Sie die [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) Methode, um einen modalen Dialog anzuzeigen, und die [`.show()`](/de/docs/Web/API/HTMLDialogElement/show) Methode, um einen nicht-modalen Dialog anzuzeigen. Der Dialog kann mit der [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) Methode geschlossen werden oder mit der [`dialog`](/de/docs/Web/HTML/Element/form#method) Methode beim Abschicken eines innerhalb des `<dialog>` verschachtelten `<form>`. Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!WARNING]
> Das `tabindex` Attribut darf nicht auf dem `<dialog>` Element verwendet werden. Siehe [Hinweise zur Verwendung](#hinweise_zur_verwendung).

- `open`

  - : Zeigt an, dass die Dialogbox aktiv ist und zur Interaktion bereit steht. Wenn das `open` Attribut nicht gesetzt ist, ist die Dialogbox für den Benutzer unsichtbar.
    Es wird empfohlen, die `.show()` oder `.showModal()` Methode zu verwenden, um Dialoge darzustellen, anstatt das `open` Attribut. Wenn ein `<dialog>` mit dem `open` Attribut geöffnet wird, ist es nicht modal.

    > [!NOTE]
    > Während es möglich ist, zwischen offenen und geschlossenen Zuständen nicht-modaler Dialogboxen zu wechseln, indem man das `open` Attribut toggelt, wird diese Vorgehensweise nicht empfohlen.

## Hinweise zur Verwendung

- HTML {{HTMLElement("form")}} Elemente können verwendet werden, um eine Dialogbox zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der Button, der das Formular absendet, [`formmethod="dialog"`](/de/docs/Web/HTML/Element/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` über die `dialog` Methode abgeschickt wird, schließt sich die Dialogbox, die Zustände der Formularsteuerungen werden gespeichert, aber nicht abgeschickt, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) Eigenschaft wird auf den Wert des ausgelösten Buttons gesetzt.
- Das CSS {{cssxref('::backdrop')}} Pseudo-Element kann verwendet werden, um den Hintergrund eines modalen Dialogs zu stylen, der hinter dem `<dialog>` Element angezeigt wird, wenn der Dialog mit der [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) Methode angezeigt wird. Dieses Pseudo-Element könnte beispielsweise verwendet werden, um den trägen Inhalt hinter dem modalen Dialog zu verwischen, abzudunkeln oder anderweitig zu verschleiern.
- Das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus) Attribut sollte dem Element hinzugefügt werden, mit dem der Benutzer unmittelbar nach dem Öffnen eines modalen Dialogs interagieren soll. Sollte kein anderes Element eine wichtigere sofortige Interaktion erfordern, wird empfohlen, `autofocus` dem Schließen-Button im Dialog zuzuweisen oder dem Dialog selbst, wenn erwartet wird, dass der Benutzer es anklickt/aktiviert, um es zu schließen.
- Fügen Sie dem `<dialog>` Element nicht das `tabindex` Attribut hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Der Inhalt des Dialogs, einschließlich des im Dialog enthaltenen Schließen-Buttons, kann den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Bei der Implementierung eines Dialogs ist es wichtig, die geeignetste Stelle für den Benutzerfokus zu berücksichtigen. Bei der Verwendung von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) zum Öffnen eines `<dialog>` wird der Fokus auf das erste verschachtelte fokussierbare Element gesetzt. Ein explizites Anzeigen des anfänglichen Fokusplatzes durch Verwendung des [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus) Attributs wird dazu beitragen, sicherzustellen, dass der anfängliche Fokus auf das Element gesetzt wird, das als optimaler Fokusplatz für jeden speziellen Dialog betrachtet wird. Wenn Zweifel bestehen, da möglicherweise nicht immer bekannt ist, wo der anfängliche Fokus in einem Dialog gesetzt werden könnte, insbesondere in Fällen, in denen der Inhalt eines Dialogs bei Aufruf dynamisch gerendert wird, könnte das `<dialog>` Element selbst den besten anfänglichen Fokusplatz bieten.

Stellen Sie sicher, dass ein Mechanismus bereitgestellt wird, der es Benutzern ermöglicht, den Dialog zu schließen. Der robusteste Weg, um sicherzustellen, dass alle Benutzer den Dialog schließen können, ist die Einbindung eines expliziten Buttons dafür, wie z.B. eines Bestätigungs-, Abbruch- oder Schließen-Buttons.

Ein Dialog, der mit der `showModal()` Methode aufgerufen wird, kann standardmäßig durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Ein nicht-modales Dialogfenster wird nicht standardmäßig durch die <kbd>Esc</kbd>-Taste geschlossen, und je nachdem, was das nicht-modale Dialogfenster darstellt, mag dieses Verhalten nicht gewünscht sein. Tastaturbenutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialogfenster schließt; stellen Sie sicher, dass dieses Verhalten implementiert und beibehalten wird. Wenn mehrere modale Dialogfenster geöffnet sind, sollte das Drücken der <kbd>Esc</kbd>-Taste nur das zuletzt angezeigte Dialogfenster schließen. Bei der Verwendung von `<dialog>`, wird dieses Verhalten vom Browser bereitgestellt.

Während Dialoge mit anderen Elementen erstellt werden können, bietet das native `<dialog>` Element Benutzerfreundlichkeits- und Barrierefreiheitsfunktionen, die repliziert werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck verwenden. Wenn Sie eine benutzerdefinierte Dialogimplementierung vornehmen, stellen Sie sicher, dass alle erwarteten Standardverhalten unterstützt werden und korrekte Beschriftungsempfehlungen befolgt werden.

Das `<dialog>` Element wird von Browsern in einer Weise exponiert, die benutzerdefinierten Dialogen ähnelt, die das ARIA [role="dialog"](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) Attribut verwenden. `<dialog>` Elemente, die durch die `showModal()` Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal), während `<dialog>` Elemente, die durch die `show()` Methode aufgerufen oder durch das `open` Attribut angezeigt oder durch Ändern des Standardanzeigewertes eines `<dialog>` angezeigt werden, als `[aria-modal="false"]` exponiert werden. Beim Implementieren modaler Dialogfelder sollte alles außer dem `<dialog>` und dessen Inhalt durch das [`inert`](/de/docs/Web/HTML/Global_attributes/inert) Attribut träge gemacht werden. Bei der Verwendung von `<dialog>` zusammen mit der `HTMLDialogElement.showModal()` Methode wird dieses Verhalten durch den Browser bereitgestellt.

## Beispiele

### HTML-Dialog ausschließlich

Dieses Beispiel zeigt die Erstellung eines nicht-modalen Dialogs durch die alleinige Verwendung von HTML. Aufgrund des booleschen `open` Attributs im `<dialog>` Element erscheint der Dialog beim Laden der Seite geöffnet. Der Dialog kann durch Klicken auf den "OK" Button geschlossen werden, da das `method` Attribut im `<form>` Element auf `"dialog"` gesetzt ist. In diesem Fall ist kein JavaScript erforderlich, um das Formular zu schließen.

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

Dieser Dialog ist initial geöffnet wegen der Anwesenheit des `open` Attributs. Dialoge, die mit dem `open` Attribut angezeigt werden, sind nicht modal. Nach dem Klicken auf "OK" wird der Dialog geschlossen, wodurch der Ergebnisrahmen leer bleibt. Wenn der Dialog geschlossen wird, gibt es keine Methode, um ihn erneut zu öffnen. Aus diesem Grund wird bevorzugt, nicht-modale Dialoge mit der [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show) Methode anzuzeigen. Es ist möglich, die Anzeige des Dialogs zu toggeln, indem das boolesche `open` Attribut hinzugefügt oder entfernt wird, aber dies ist nicht die empfohlene Vorgehensweise.

### Erstellen eines modalen Dialogs

Dieses Beispiel zeigt einen modalen Dialog mit einem [Verlauf](/de/docs/Web/CSS/gradient) als Hintergrund. Die `.showModal()` Methode öffnet den modalen Dialog, wenn der "Show the dialog" Button aktiviert wird. Der Dialog kann geschlossen werden, indem die <kbd>Esc</kbd>-Taste gedrückt oder die `close()` Methode verwendet wird, wenn der "Close" Button innerhalb des Dialogs aktiviert wird.

Wenn ein Dialog geöffnet wird, fokussiert der Browser standardmäßig das erste Element, das im Dialog fokussiert werden kann. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus) Attribut auf den "Close" Button angewendet, was ihn sofort in den Fokus nimmt, wenn der Dialog öffnet, da dies das Element ist, mit dem der Benutzer unmittelbar nach dem Öffnen des Dialogs interagieren wird.

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

Der Dialog wird modal mit der `.showModal()` Methode geöffnet und mit der `.close()` Methode geschlossen.

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

Wenn der modale Dialog angezeigt wird, erscheint er über allen anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des modalen Dialogs ist träge und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass, wenn der Dialog geöffnet ist, außer dem Dialog selbst, die Interaktion mit dem Dokument nicht möglich ist; der "Show the dialog" Button ist weitgehend durch den fast undurchsichtigen Hintergrund des Dialogs verdeckt und ist träge.

### Umgang mit dem Rückgabewert des Dialogs

Dieses Beispiel zeigt den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>` Elements und wie ein modaler Dialog durch ein Formular geschlossen werden kann. Standardmäßig ist der `returnValue` der leere String oder der Wert des Buttons, der das Formular innerhalb des `<dialog>` Elements sendet, falls vorhanden.

Dieses Beispiel öffnet einen modalen Dialog, wenn der "Show the dialog" Button aktiviert wird. Der Dialog enthält ein Formular mit einem {{HTMLElement("select")}} und zwei {{HTMLElement("button")}} Elementen, die standardmäßig auf `type="submit"` stehen. Ein Event-Listener aktualisiert den Wert des "Confirm" Buttons, wenn die Auswahloption geändert wird. Wenn der "Confirm" Button aktiviert wird, um den Dialog zu schließen, ist der aktuelle Wert des Buttons der Rückgabewert. Wenn der Dialog durch Drücken des "Cancel" Buttons geschlossen wird, ist der `returnValue` `cancel`.

Wenn der Dialog geschlossen wird, wird der Rückgabewert unter dem "Show the dialog" Button angezeigt. Wenn der Dialog durch Drücken der <kbd>Esc</kbd> Taste geschlossen wird, wird der `returnValue` nicht aktualisiert, und das `close` Event tritt nicht ein, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

Die obigen Beispiele zeigen die folgenden drei Methoden zum Schließen modaler Dialoge:

- Indem das Formular innerhalb des Dialogs mit der `dialog` Methode abgeschickt wird (wie im [HTML-only Beispiel](#html-dialog_ausschließlich) zu sehen ist).
- Durch Drücken der <kbd>Esc</kbd> Taste.
- Durch Aufrufen der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) Methode (wie im [modalen Beispiel](#erstellen_eines_modalen_dialogs) zu sehen ist).
  In diesem Beispiel schließt der "Cancel" Button den Dialog über die `dialog` Formularmethode und der "Confirm" Button schließt den Dialog über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) Methode.

Der "Cancel" Button enthält das [`formmethod="dialog"`](/de/docs/Web/HTML/Element/input/submit#formmethod) Attribut, das die Standard {{HTMLElement("form")}} Methode {{HTTPMethod("GET")}} überschreibt. Wenn die Methode eines Formulars [`dialog`](#hinweise_zur_verwendung) ist, wird der Zustand des Formulars gespeichert, aber nicht abgeschickt, und der Dialog wird geschlossen.

Ohne eine `action` bewirkt das Abschicken des Formulars über die Standard {{HTTPMethod("GET")}} Methode ein erneutes Laden der Seite. Wir verwenden JavaScript, um das Abschicken zu verhindern und den Dialog mit den [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) Methoden zu schließen.

Es ist wichtig, in jedem `dialog` Element einen Mechanismus zum Schließen bereitzustellen. Die <kbd>Esc</kbd> Taste schließt nicht-modale Dialoge nicht standardmäßig, und man kann nicht davon ausgehen, dass ein Benutzer überhaupt Zugang zu einer physischen Tastatur hat (z.B. eine Person, die ein Touchscreen-Gerät ohne Tastatur verwendet).

### Schließen eines Dialogs mit einer erforderlichen Formulareingabe

Wenn ein Formular innerhalb eines Dialogs eine erforderliche Eingabe hat, lässt der Benutzeragent Sie den Dialog nur schließen, wenn Sie einen Wert für die erforderliche Eingabe bereitstellen. Um ein solches Dialogfenster zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Element/input#formnovalidate) Attribut an dem Schließen-Button oder rufen die `close()` Methode am Dialogobjekt auf, wenn der Schließen-Button geklickt wird.

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

Am Ergebnis sehen wir, dass es unmöglich ist, den Dialog mit dem _Normal close_ Button zu schließen. Aber der Dialog kann geschlossen werden, wenn wir die Formularvalidierung mit dem `formnovalidate` Attribut auf dem _Cancel_ Button umgehen. Programmgesteuert wird `dialog.close()` ebenfalls solch einen Dialog schließen.

### Animation von Dialogen

`<dialog>`s sind auf [`display: none;`](/de/docs/Web/CSS/display) gesetzt, wenn sie verborgen sind und `display: block;`, wenn sie gezeigt werden, und sie werden von / in die [obere Ebene](/de/docs/Glossary/top_layer) und den [Barrierefreiheitsbaum](/de/docs/Web/Performance/How_browsers_work#building_the_accessibility_tree) entfernt / hinzugefügt. Daher muss, damit `<dialog>` Elemente animiert werden können, die {{cssxref("display")}} Eigenschaft animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variante des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Speziell wird der Browser zwischen `none` und einem anderen Wert von `display` umschalten, sodass der animierte Inhalt für die gesamte Animationsdauer angezeigt wird.

Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display` Wert) wird der Wert bei `0%` der Animationsdauer zu `block`, sodass er während der gesamten Dauer sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display` Wert) zu `none` wird der Wert bei `100%` der Animationsdauer zu `none`, sodass es während der gesamten Dauer sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) eingestellt werden, um das obige Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig verfügbar, wenn es mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) animiert wird; ein entsprechender Schritt ist nicht erforderlich.

#### Übergang von Dialog-Elementen

Beim Animieren von `<dialog>`s mit CSS-Übergängen sind folgende Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) At-Regel
  - : Bietet eine Reihe von Ausgangswerten für die am `<dialog>` gesetzten Eigenschaften, von denen Sie bei jedem Öffnen den Übergang wünschen. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn eine Eigenschaft von einem Wert zu einem anderen auf einem sichtbaren Element wechselt; sie werden nicht durch die ersten Stilaktualisierungen eines Elements ausgelöst oder wenn der `display` Typ von `none` zu einem anderen Typ wechselt.
- [`display`](/de/docs/Web/CSS/display) Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das `<dialog>` während der Übergangsdauer als `display: block` (oder einem anderen sichtbaren `display` Wert im offenen Zustand des Dialogs) bleibt, um sicherzustellen, dass die anderen Übergänge sichtbar sind.
- [`overlay`](/de/docs/Web/CSS/overlay) Eigenschaft
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass die Entfernung des `<dialog>` von der oberen Ebene bis zum Abschluss des Übergangs aufgeschoben wird, und um sicherzustellen, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}} Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` für die `display` und `overlay` Übergänge (oder für die {{cssxref("transition")}} Kurzbeschreibung), um diskrete Übergänge für diese beiden nicht standardmäßig animierbaren Eigenschaften zu ermöglichen.

Hier ist ein schnelles Beispiel, das zeigt, wie das aussehen könnte.

##### HTML

Das HTML enthält ein `<dialog>` Element, sowie einen Button, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>` Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS fügen wir einen `@starting-style` Block ein, der die Übergangsausgangsstile für die `opacity` und `transform` Eigenschaften definiert, Übergangs-Endstile im `dialog[open]` Zustand und Standardstile im Standard `dialog` Zustand, zu dem nach dem Erscheinen des `<dialog>` zurückgekehrt wird. Beachten Sie, wie die `transition` Liste des `<dialog>` nicht nur diese Eigenschaften, sondern auch die `display` und `overlay` Eigenschaften enthält, jeweils mit `allow-discrete` gesetzt.

Wir setzen auch einen Ausgangsstilwert für die {{cssxref("background-color")}} Eigenschaft auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop), das hinter dem `<dialog>` erscheint, wenn es geöffnet wird, um eine nette Verdunklungsanimation zu bieten. Die `dialog[open]::backdrop` Selektor wählt nur die Hintergründe von `<dialog>` Elementen aus, wenn der Dialog geöffnet ist.

```css
/*   Open state of the dialog  */
dialog[open] {
  opacity: 1;
  transform: scaleY(1);
}

/*   Closed state of the dialog   */
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

/*   Before-open state  */
/* Needs to be after the previous dialog[open] rule to take effect,
    as the specificity is the same */
@starting-style {
  dialog[open] {
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

dialog[open]::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* This starting-style rule cannot be nested inside the above selector
because the nesting selector cannot represent pseudo-elements. */

@starting-style {
  dialog[open]::backdrop {
    background-color: rgb(0 0 0 / 0%);
  }
}
```

##### JavaScript

Das JavaScript fügt Ereignishandler zu den Anzeigen- und Schließen-Buttons hinzu, wodurch sie das `<dialog>` anzeigen und schließen, wenn sie geklickt werden:

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
> Da `<dialog>`s jedes Mal, wenn sie geöffnet werden, von `display: none` zu `display: block` wechseln, geht der `<dialog>` immer von seinen `@starting-style` Stilen zu seinen `dialog[open]` Stilen über, wenn der Eintrittsübergang erfolgt. Wenn der `<dialog>` schließt, geht er von seinem `dialog[open]` Zustand zu den Standard `dialog` Zustand über.
>
> In solchen Fällen ist es möglich, dass der Stilübergang beim Eintritt und Austritt unterschiedlich ist. Sehen Sie sich unser [Beispiel zur Demonstration der Verwendung von Ausgangsstilen](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) an, um einen Nachweis hierfür zu erhalten.

#### dialog Keyframe-Animationen

Beim Animieren eines `<dialog>` mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu beachten im Vergleich zu Übergängen:

- Sie geben kein `@starting-style` an.
- Sie fügen dem Keyframe einen `display` Wert hinzu; dies wird der `display` Wert für die gesamte Dauer der Animation sein oder bis ein anderer nicht-`none` display Wert auftritt.
- Sie müssen keine diskreten Animationen explizit aktivieren; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Keyframes.
- Sie müssen `overlay` auch nicht innerhalb der Keyframes setzen; die `display` Animation behandelt die Animation des `<dialog>` von sichtbar zu versteckt.

Schauen wir uns ein Beispiel an, damit Sie sehen können, wie das aussieht.

##### HTML

Zuerst enthält das HTML ein `<dialog>` Element, sowie einen Button, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>` Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Keyframes, um zwischen den geschlossenen und sichtbaren Zuständen des `<dialog>` zu animieren, sowie die Einblendanimation für das `<dialog>`'s Hintergrund. Die `<dialog>` Animationen beinhalten das Animieren von `display`, um sicherzustellen, dass die tatsächlichen sichtbaren Animationseffekte für die gesamte Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, das Ausblenden des Hintergrundes zu animieren — der Hintergrund wird sofort aus dem DOM entfernt, wenn `<dialog>` geschlossen wird, sodass nichts zum Animieren übrig bleibt.

```css
dialog {
  animation: fade-out 0.7s ease-out;
}

dialog[open] {
  animation: fade-in 0.7s ease-out;
}

dialog[open]::backdrop {
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

Abschließend fügt das JavaScript Ereignishandler zu den Buttons hinzu, um das `<dialog>` anzuzeigen und zu schließen:

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a>,
        <a href="/de/docs/Web/HTML/Element/Heading_Elements#sectioning_roots">Strukturierungswurzel</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a>
        akzeptiert
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
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event) Ereignis
- [`cancel`](/de/docs/Web/API/HTMLElement/cancel_event) Ereignis
- [`open`](/de/docs/Web/API/HTMLDialogElement/open) Eigenschaft der `HTMLDialogElement` Schnittstelle
- [`inert`](/de/docs/Web/HTML/Global_attributes/inert) globales Attribut für HTML-Elemente
- {{CSSXref("::backdrop")}} CSS-Pseudo-Element
- [Web-Formulare](/de/docs/Learn/Forms) im Lernbereich
