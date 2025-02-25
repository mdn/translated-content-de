---
title: "<dialog>: Das Dialog-Element"
slug: Web/HTML/Element/dialog
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{HTMLSidebar}}

Das **`<dialog>`**- [HTML](/de/docs/Web/HTML) Element repräsentiert ein modales oder nicht-modales Dialogfeld oder eine andere interaktive Komponente, wie zum Beispiel eine abweisbare Warnung, ein Inspektor oder ein Unterfenster.

Das HTML-Element `<dialog>` wird verwendet, um sowohl modale als auch nicht-modale Dialogfelder zu erstellen. Modale Dialogfelder unterbrechen die Interaktion mit dem Rest der Seite, die inert ist, während nicht-modale Dialogfelder die Interaktion mit dem Rest der Seite erlauben.

JavaScript sollte verwendet werden, um das `<dialog>`-Element anzuzeigen. Verwenden Sie die Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), um ein modales Dialogfeld anzuzeigen, und die Methode [`.show()`](/de/docs/Web/API/HTMLDialogElement/show), um ein nicht-modales Dialogfeld anzuzeigen. Das Dialogfeld kann mit der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) oder mit der [`dialog`](/de/docs/Web/HTML/Element/form#method) Methode geschlossen werden, wenn ein `<form>` gesendet wird, das innerhalb des `<dialog>`-Elements verschachtelt ist. Modale Dialogfelder können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf dem `<dialog>`-Element verwendet werden. Siehe [Verwendungsnotizen](#verwendungsnotizen).

- `open`

  - : Zeigt an, dass das Dialogfeld aktiv und für die Interaktion verfügbar ist. Wenn das `open`-Attribut nicht gesetzt ist, ist das Dialogfeld für den Benutzer nicht sichtbar. Es wird empfohlen, die Methoden `.show()` oder `.showModal()` zu verwenden, um Dialoge darzustellen, anstatt das `open`-Attribut. Wenn ein `<dialog>` mit dem `open`-Attribut geöffnet wird, ist es nicht-modal.

    > [!NOTE]
    > Während Sie zwischen den offenen und geschlossenen Zuständen nicht-modal Dialogfelder durch Umschalten des Vorhandenseins des `open`-Attributs umschalten können, wird dieser Ansatz nicht empfohlen.

## Verwendungsnotizen

- HTML {{HTMLElement("form")}}-Elemente können verwendet werden, um ein Dialogfeld zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der für das Absenden des Formulars verwendete Knopf [`formmethod="dialog"`](/de/docs/Web/HTML/Element/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` über die `dialog`-Methode gesendet wird, schließt sich das Dialogfeld, die Zustände der Formularelemente werden gespeichert, aber nicht gesendet, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) Eigenschaft wird auf den Wert des aktivierten Knopfs gesetzt.
- Das CSS {{cssxref('::backdrop')}} Pseudo-Element kann verwendet werden, um den Hintergrund eines modalen Dialogs zu gestalten, der hinter dem `<dialog>`-Element angezeigt wird, wenn das Dialogfeld mit der Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) angezeigt wird. Beispielsweise könnte dieses Pseudo-Element verwendet werden, um den inerten Inhalt hinter dem modalen Dialog zu verwischen, abzudunkeln oder anderweitig zu verschleiern.
- Das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus) Attribut sollte dem Element hinzugefügt werden, mit dem der Benutzer unmittelbar nach dem Öffnen eines modalen Dialogs interagieren soll. Wenn kein anderes Element eine unmittelbarere Interaktion erfordert, wird empfohlen, `autofocus` dem Schließknopf innerhalb des Dialogs oder dem Dialog selbst hinzuzufügen, wenn der Benutzer erwartet wird, diesen zu klicken/aktivieren, um ihn zu schließen.
- Fügen Sie das `tabindex`-Eigenschaft nicht dem `<dialog>`-Element hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Der Inhalt des Dialogs, einschließlich des Schließknopfs im Dialog, kann den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Bei der Implementierung eines Dialogs ist es wichtig, den am besten geeigneten Ort für den Benutzerfokus zu berücksichtigen. Wenn Sie [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwenden, um ein `<dialog>` zu öffnen, wird der Fokus auf das erste verschachtelte fokussierbare Element gesetzt. Die explizite Angabe der Initialfokusplatzierung durch Verwendung des [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus) Attributs hilft, sicherzustellen, dass der Initialfokus auf das Element gesetzt wird, das als der beste Initialfokusplatzhalter für einen bestimmten Dialog angesehen wird. Wenn Sie unsicher sind, da es möglicherweise nicht immer bekannt ist, wo der Initialfokus innerhalb eines Dialogs gesetzt werden könnte, insbesondere in Fällen, in denen der Inhalt eines Dialogs dynamisch gerendert wird, wenn es aufgerufen wird, bietet das `<dialog>`-Element selbst möglicherweise den besten Initialfokusplatzhalter.

Stellen Sie sicher, dass ein Mechanismus bereitgestellt wird, der es den Benutzern ermöglicht, den Dialog zu schließen. Der robusteste Weg, um sicherzustellen, dass alle Benutzer den Dialog schließen können, ist die Einfügung eines expliziten Knopfs, um dies zu tun, wie ein Bestätigungs-, Abbruch- oder Schließknopf.

Standardmäßig kann ein durch die `showModal()` Methode aufgerufenes Dialogfeld durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Ein nicht-modales Dialogfeld wird standardmäßig nicht durch die <kbd>Esc</kbd>-Taste geschlossen, und je nach dem, was das nicht-modale Dialogfeld darstellt, kann dies nicht gewünscht sein. Tastaturbenutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und beibehalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte das Drücken der <kbd>Esc</kbd>-Taste nur das zuletzt angezeigte Dialog schließen. Bei der Verwendung von `<dialog>` wird dieses Verhalten durch den Browser bereitgestellt.

Während Dialoge mit anderen Elementen erstellt werden können, bietet das native `<dialog>` Element Benutzbarkeits- und Zugänglichkeitsmerkmale, die repliziert werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck verwenden. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhaltensweisen unterstützt werden und die richtigen Kennzeichnungs-Empfehlungen befolgt werden.

Das `<dialog>`-Element wird von Browsern in ähnlicher Weise wie benutzerdefinierte Dialoge, die das ARIA [role="dialog"](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) Attribut verwenden, veröffentlicht. `<dialog>`-Elemente, die durch die `showModal()` Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal), während `<dialog>`-Elemente, die durch die `show()` Methode aufgerufen werden oder durch das `open`-Attribut oder durch Änderung des Standard-`display` eines `<dialog>` angezeigt werden, als `[aria-modal="false"]` ausgestellt werden. Bei der Implementierung modaler Dialoge sollte alles außer dem `<dialog>` und dessen Inhalt mit dem [`inert`](/de/docs/Web/HTML/Global_attributes/inert) Attribut inert gemacht werden. Bei Verwendung von `<dialog>` zusammen mit der `HTMLDialogElement.showModal()`-Methode wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### Nur-HTML-Dialog

Dieses Beispiel demonstriert die Erstellung eines nicht-modalen Dialogs unter Verwendung nur von HTML. Aufgrund des booleschen `open` Attributs im `<dialog>` Element erscheint das Dialogfeld beim Laden der Seite geöffnet. Das Dialog kann durch Klicken auf den "OK"-Knopf geschlossen werden, weil das `method` Attribut im `<form>` Element auf `"dialog"` gesetzt ist. In diesem Fall wird kein JavaScript benötigt, um das Formular zu schließen.

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

Dieses Dialog ist initial geöffnet wegen des Vorhandenseins des `open` Attributs. Dialoge, die mit dem `open` Attribut angezeigt werden, sind nicht modal. Nach dem Klicken auf "OK" wird das Dialogfeld verworfen und hinterlässt den Ergebnishalter leer. Wenn das Dialog verworfen wird, wird keine Methode bereitgestellt, um es erneut zu öffnen. Aus diesem Grund ist die bevorzugte Methode, nicht-modale Dialoge anzuzeigen, die Verwendung der [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show) Methode. Es ist möglich, die Anzeige des Dialogs ein- und auszuschalten, indem das boolesche `open` Attribut hinzugefügt oder entfernt wird, aber das ist keine empfohlene Praxis.

### Erstellen eines modalen Dialogs

Dieses Beispiel zeigt ein modales Dialog mit einem [Verlauf](/de/docs/Web/CSS/gradient) Hintergrund. Die `.showModal()` Methode öffnet das modale Dialog, wenn der "Show the dialog"-Knopf aktiviert wird. Das Dialog kann durch Drücken der <kbd>Esc</kbd>-Taste oder über die `close()` Methode geschlossen werden, wenn der "Close"-Knopf innerhalb des Dialogs aktiviert wird.

Wenn ein Dialog geöffnet wird, gibt der Browser standardmäßig den Fokus auf das erste Element, das innerhalb des Dialogs fokussiert werden kann. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus) Attribut auf den "Close"-Knopf angewendet, gibt ihm den Fokus, wenn das Dialog öffnet, da dies das Element ist, von dem wir erwarten, dass der Benutzer es unmittelbar nach dem Öffnen des Dialogs interaktivieren wird.

#### HTML

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a groovy backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir können das Erscheinungsbild des Hintergrunds des Dialogs durch die Verwendung des {{cssxref('::backdrop')}} Pseudo-Elements gestalten.

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

Das Dialog wird modally geöffnet, indem die `.showModal()` Methode verwendet wird und mit den `.close()` oder `.requestClose()` Methoden geschlossen.

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

Wenn das modale Dialog angezeigt wird, erscheint es über allen anderen Dialogen, die möglicherweise vorhanden sind. Alles außerhalb des modalen Dialogs ist inert, und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass bei geöffnetem Dialog, mit Ausnahme des Dialogs selbst, die Interaktion mit dem Dokument nicht möglich ist; der "Show the dialog"-Knopf ist größtenteils durch den fast opaken Hintergrund des Dialogs obskuriert und ist inaktiv.

### Umgang mit dem Rückgabewert des Dialogs

Dieses Beispiel demonstriert den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>` Elements und wie man ein modales Dialog mit einem Formular schließt. Standardmäßig ist der `returnValue` der leere String oder der Wert des Knopfs, der das Formular innerhalb des `<dialog>` Elements einreicht, falls vorhanden.

Dieses Beispiel öffnet ein modales Dialog, wenn der "Show the dialog"-Knopf aktiviert wird. Das Dialog enthält ein Formular mit einem {{HTMLElement("select")}} und zwei {{HTMLElement("button")}} Elementen, die standardmäßig `type="submit"` haben. Ein Event-Listener aktualisiert den Wert des "Confirm"-Knopfs, wenn die Select-Option geändert wird. Wenn der "Confirm"-Knopf aktiviert wird, um das Dialog zu schließen, ist der aktuelle Wert des Knopfs der Rückgabewert. Wenn das Dialog durch das Drücken der "Cancel"-Taste geschlossen wird, ist der `returnValue` `cancel`.

Wenn das Dialog geschlossen wird, wird der Rückgabewert unter dem "Show the dialog"-Knopf angezeigt. Wenn das Dialog durch Drücken der <kbd>Esc</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert, und das `close` Ereignis tritt nicht auf, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

Die obigen Beispiele demonstrieren die folgenden drei Methoden zum Schließen modaler Dialoge:

- Durch das Einreichen des Formulars innerhalb des Dialog-Formulars mit der `dialog` Methode (wie im [Nur-HTML-Beispiel](#nur-html-dialog) gezeigt).
- Durch Drücken der <kbd>Esc</kbd>-Taste.
- Durch Aufrufen der Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) (wie im [modale Beispiel](#erstellen_eines_modalen_dialogs) gezeigt).
  In diesem Beispiel schließt der "Cancel"-Knopf das Dialog über die `dialog` Formularmethode und der "Confirm"-Knopf schließt das Dialog über die Methode [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close).

Der "Cancel"-Knopf beinhaltet das Attribut [`formmethod="dialog"`](/de/docs/Web/HTML/Element/input/submit#formmethod), das die Standardmethode {{HTTPMethod("GET")}} des {{HTMLElement("form")}} überschreibt. Wenn eine Formularmethode [`dialog`](#verwendungsnotizen) ist, wird der Zustand des Formulars gespeichert, aber nicht übermittelt, und das Dialog wird geschlossen.

Ohne eine `action`, führt das Einreichen des Formulars über die Standardmethode {{HTTPMethod("GET")}} zu einem Neuladen der Seite. Wir verwenden JavaScript, um die Übermittlung zu verhindern und das Dialog mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) jeweils zu schließen.

Es ist wichtig, einen Schließmechanismus in jedem `dialog` Element bereitzustellen. Die <kbd>Esc</kbd>-Taste schließt standardmäßig kein nicht-modales Dialog, noch kann man davon ausgehen, dass ein Benutzer überhaupt Zugriff auf eine physische Tastatur hat (z. B. jemand, der ein Touchscreen-Gerät ohne Zugriff auf eine Tastatur verwendet).

### Schließen eines Dialogs mit einer erforderlichen Formulareingabe

Wenn ein Formular in einem Dialog eine erforderliche Eingabe hat, lässt der Benutzeragent Sie das Dialog nur schließen, wenn Sie einen Wert für die erforderliche Eingabe angeben. Um ein solches Dialog zu schließen, verwenden Sie entweder das Attribut [`formnovalidate`](/de/docs/Web/HTML/Element/input#formnovalidate) auf dem Schließknopf oder rufen Sie die Methode `close()` am Dialogobjekt auf, wenn der Schließknopf geklickt wird.

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

Aus der Ausgabe sehen wir, dass es unmöglich ist, das Dialog mit dem _Normal close_-Knopf zu schließen. Aber das Dialog kann geschlossen werden, wenn wir die Formularprüfung umgehen, indem wir das `formnovalidate` Attribut auf dem _Cancel_-Knopf verwenden. Programmgesteuert wird `dialog.close()` auch ein solches Dialog schließen.

### Animierte Dialoge

`<dialog>`s sind auf [`display: none;`](/de/docs/Web/CSS/display) gesetzt, wenn sie verborgen sind und `display: block;` wenn sie gezeigt werden, und werden auch aus dem / in den {{Glossary("top_layer", "Top Layer")}} und den [Accessibility Tree](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt/hinzugefügt. Daher muss für `<dialog>`-Elemente, die animiert werden sollen, die {{cssxref("display")}} Eigenschaft animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Konkret schaltet der Browser zwischen `none` und einem anderen Wert von `display` um, sodass der animierte Inhalt für die gesamte Animationsdauer angezeigt wird.

Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert), wird der Wert bei `0%` der Animationsdauer auf `block` umgeschaltet, sodass er die gesamte Zeit sichtbar bleibt.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none`, wird der Wert bei `100%` der Animationsdauer auf `none` umgeschaltet, sodass er die gesamte Zeit sichtbar bleibt.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um das obige Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig verfügbar, wenn mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) animiert wird; ein entsprechender Schritt ist dabei nicht erforderlich.

#### Übergang von Dialog-Elementen

Beim Animieren von `<dialog>`s mit CSS-Übergängen sind folgende Eigenschaften erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) Regel
  - : Stellt einen Satz von Startwerten für Eigenschaften bereit, die auf dem `<dialog>` gesetzt werden, von denen Sie möchten, dass sie jedes Mal übergehen, wenn es geöffnet wird. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn sich eine Eigenschaft von einem Wert auf einen anderen bei einem sichtbaren Element ändert; sie werden nicht auf ausgelöst bei den ersten Stilaktualisierungen eines Elements oder wenn der `display`-Typ von `none` zu einem anderen Typ ändert.
- [`display`](/de/docs/Web/CSS/display) Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, sodass das `<dialog>` für die Dauer des Übergangs auf `display: block` (oder einem anderen sichtbaren `display`-Wert, der im geöffneten Zustand des Dialogs eingestellt ist) bleibt, was gewährleistet, dass die anderen Übergänge sichtbar sind.
- [`overlay`](/de/docs/Web/CSS/overlay) Eigenschaft
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass das Entfernen des `<dialog>` aus der obersten Ebene bis zum Abschluss des Übergangs verschoben wird, was wiederum sicherstellt, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}} Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf die {{cssxref("transition")}}-Kurzform), um diskrete Übergänge bei diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Hier ist ein schnelles Beispiel, um zu zeigen, wie dies aussehen könnte.

##### HTML

Das HTML enthält ein `<dialog>`-Element sowie einen Knopf, um das Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element einen weiteren Knopf, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS schließen wir einen `@starting-style` Block ein, der die Übergangseinstiegsstile für die `opacity` und `transform` Eigenschaften definiert, Übergangs-Endstile im `dialog:open` Zustand und Standardstile im Standard-`dialog` Zustand, in den zurückgekehrt wird, sobald das `<dialog>` aufgetaucht ist. Beachten Sie, wie die `transition`-Liste des `<dialog>` nicht nur diese Eigenschaften umfasst, sondern auch die `display`- und `overlay`-Eigenschaften, auf denen `allow-discrete` eingestellt ist.

Wir setzen auch einen Anfangsstilwert für die {{cssxref("background-color")}} Eigenschaft auf der [`::backdrop`](/de/docs/Web/CSS/::backdrop), die hinter dem `<dialog>` erscheint, wenn es geöffnet wird, um eine schöne Abdunkelungsanimation zu bieten. Der `dialog:open::backdrop` Selektor wählt nur die Hintergründe von `<dialog>`-Elementen, wenn das Dialog geöffnet ist.

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
> In Browsern, die die {{cssxref(":open")}} Pseudoklasse nicht unterstützen, können Sie den Attributselektor `dialog[open]` verwenden, um das `<dialog>`-Element zu stylen, wenn es im geöffneten Zustand ist.

##### JavaScript

Das JavaScript fügt Ereignishandler zu den Anzeige- und Schließenknöpfen hinzu, die sie anzeigen und das `<dialog>` schließen, wenn sie angeklickt werden:

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
> Da `<dialog>`s jedes Mal, wenn sie angezeigt werden, von `display: none` auf `display: block` wechseln, übergehen die `<dialog>`s von ihren `@starting-style` Stilen zu ihren `dialog:open` Stilen jedes Mal, wenn der Einstiegsübergang auftritt. Wenn sich das `<dialog>` schließt, wechselt es von seinem `dialog:open` Zustand zu dem Standard-`dialog` Zustand.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt in solchen Fällen unterschiedlich ist. Siehe unser [Demonstration einer Verwendung von Startstilen](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel für einen Beweis dafür.

#### Dialog Keyframe-Animationen

Beim Animieren eines `<dialog>` mit CSS Keyframe Animationen gibt es einige Unterschiede zu beachten im Vergleich zu Übergängen:

- Sie geben kein `@starting-style` an.
- Sie schließen den `display`-Wert in einem Keyframe ein; dies wird der `display`-Wert für die gesamte Animation oder bis ein anderer nicht-`none` display-Wert gefunden wird.
- Sie müssen diskrete Animationen nicht explizit aktivieren; es gibt kein Äquivalent zu `allow-discrete` in Keyframes.
- Sie müssen `overlay` auch innerhalb von Keyframes nicht setzen; die `display`-Animation behandelt die Animation des `<dialog>` von sichtbar zu versteckt.

Lassen Sie uns ein Beispiel ansehen, damit Sie sehen können, wie dies aussieht.

##### HTML

Zuerst enthält das HTML ein `<dialog>`-Element sowie einen Knopf, um das Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element einen weiteren Knopf, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Keyframes, um zwischen den geschlossenen und angezeigten Zuständen des `<dialog>` zu animieren, sowie die Einblendungsanimation für den Hintergrund des `<dialog>`. Die `<dialog>`-Animationen umfassen das Animieren von `display` um sicherzustellen, dass die tatsächlichen sichtbaren Animationseffekte für die gesamte Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, die Einblendung des Hintergrunds zu animieren – der Hintergrund wird sofort aus dem DOM entfernt, wenn das `<dialog>` geschlossen wird, sodass es nichts zum Animieren gibt.

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

Schließlich fügt das JavaScript Ereignishandler zu den Knöpfen hinzu, um das Anzeigen und Schließen des `<dialog>` zu ermöglichen:

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
        <a href="/de/docs/Web/HTML/Element/Heading_Elements#sectioning_roots">Abschnittswurzel</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a>
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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a>
        akzeptiert
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/dialog_role">dialog</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA Rollen</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role"><code>alertdialog</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM Schnittstelle</th>
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
- {{CSSXref("::backdrop")}} CSS Pseudo-Element
- [Web-Formulare](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
