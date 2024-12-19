---
title: "<dialog>: Das Dialogelement"
slug: Web/HTML/Element/dialog
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`<dialog>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert ein modales oder nicht-modales Dialogfeld oder eine andere interaktive Komponente, wie z.B. eine ausblendbare Warnung, einen Inspektor oder ein Unterfenster.

Das HTML `<dialog>`-Element wird verwendet, um sowohl modale als auch nicht-modale Dialogfelder zu erstellen. Modale Dialogfelder unterbrechen die Interaktion mit dem Rest der Seite, während nicht-modale Dialogfelder die Interaktion mit dem Rest der Seite erlauben.

JavaScript sollte verwendet werden, um das `<dialog>`-Element anzuzeigen. Verwenden Sie die [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode, um ein modales Dialogfeld anzuzeigen, und die [`.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode, um ein nicht-modales Dialogfeld anzuzeigen. Das Dialogfeld kann mit der [`.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode oder mit der [`dialog`](/de/docs/Web/HTML/Element/form#method)-Methode geschlossen werden, wenn ein `<form>`, das innerhalb des `<dialog>`-Elements verschachtelt ist, übermittelt wird. Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf das `<dialog>`-Element angewendet werden. Siehe [Hinweise zur Verwendung](#hinweise_zur_verwendung).

- `open`

  - : Zeigt an, dass das Dialogfeld aktiv ist und für Interaktion zur Verfügung steht. Wenn das `open`-Attribut nicht gesetzt ist, wird das Dialogfeld für den Benutzer nicht sichtbar sein.
    Es wird empfohlen, die `.show()` oder `.showModal()` Methode zu verwenden, um Dialoge zu rendern, anstatt das `open` Attribut. Wenn ein `<dialog>` mit dem `open`-Attribut geöffnet wird, ist es nicht-modal.

    > [!NOTE]
    > Während Sie zwischen den offenen und geschlossenen Zuständen nicht-modaler Dialogfelder wechseln können, indem Sie die Anwesenheit des `open`-Attributs umschalten, wird dieser Ansatz nicht empfohlen.

## Hinweise zur Verwendung

- HTML {{HTMLElement("form")}}-Elemente können verwendet werden, um ein Dialogfeld zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der Button, der das Formular absendet, [`formmethod="dialog"`](/de/docs/Web/HTML/Element/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` durch die `dialog`-Methode übermittelt wird, schließt das Dialogfeld, die Zustände der Formularelemente werden gespeichert, aber nicht übermittelt und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)-Eigenschaft wird auf den Wert des Buttons gesetzt, der aktiviert wurde.
- Das CSS {{cssxref('::backdrop')}}-Pseudo-Element kann verwendet werden, um den Hintergrund eines modalen Dialogs zu gestalten, der angezeigt wird, wenn das `<dialog>`-Element mit der [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode angezeigt wird. Zum Beispiel könnte dieses Pseudo-Element verwendet werden, um die inerten Inhalte hinter dem modalen Dialog zu verwischen, abdunkeln oder anderweitig zu verdecken.
- Das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attribut sollte dem Element hinzugefügt werden, mit dem der Benutzer sofort nach dem Öffnen eines modalen Dialogs interagieren soll. Wenn kein anderes Element eine unmittelbarere Interaktion beinhaltet, wird empfohlen, `autofocus` auf den Schließen-Button im Dialog oder den Dialog selbst zu setzen, wenn erwartet wird, dass der Benutzer darauf klickt/aktiviert, um ihn zu schließen.
- Fügen Sie das `tabindex`-Attribut nicht dem `<dialog>`-Element hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Der Inhalt des Dialogs, einschließlich des im Dialog enthaltenen Schließen-Buttons, kann den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Beim Implementieren eines Dialogs ist es wichtig, den geeignetsten Ort für die Einstellung des Benutzerfokus zu berücksichtigen. Wenn Sie [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwenden, um ein `<dialog>` zu öffnen, wird der Fokus auf das erste verschachtelte fokussierbare Element gesetzt. Das explizite Angeben des anfänglichen Fokusplatzes durch das Verwenden des [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attributs trägt dazu bei, dass der anfängliche Fokus auf das Element gesetzt wird, das als der beste anfängliche Fokusplatz für einen bestimmten Dialog angesehen wird. Wenn Zweifel bestehen, da es möglicherweise nicht immer bekannt ist, wo der anfängliche Fokus innerhalb eines Dialogs gesetzt werden könnte, insbesondere bei Instanzen, bei denen der Inhalt eines Dialogs dynamisch gerendert wird, wenn er aufgerufen wird, bietet das `<dialog>`-Element selbst möglicherweise den besten anfänglichen Fokusplatz.

Stellen Sie sicher, dass ein Mechanismus bereitgestellt wird, der es den Benutzern ermöglicht, das Dialogfeld zu schließen. Der robusteste Weg, um sicherzustellen, dass alle Benutzer das Dialogfeld schließen können, besteht darin, einen expliziten Button zum Schließen hinzuzufügen, z.B. einen Bestätigungs-, Abbruch- oder Schließ-Button.

Standardmäßig kann ein Dialog, der mit der `showModal()`-Methode aufgerufen wird, durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Ein nicht-modaler Dialog wird standardmäßig nicht durch die <kbd>Esc</kbd>-Taste geschlossen, und je nach dem, was der nicht-modale Dialog darstellt, ist dieses Verhalten möglicherweise nicht erwünscht. Tastaturnutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialogfelder schließt; stellen Sie sicher, dass dieses Verhalten implementiert und beibehalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte durch Drücken der <kbd>Esc</kbd>-Taste nur der zuletzt angezeigte Dialog geschlossen werden. Bei Verwendung von `<dialog>` wird dieses Verhalten vom Browser bereitgestellt.

Obwohl Dialoge mit anderen Elementen erstellt werden können, bietet das native `<dialog>`-Element Benutzerfreundlichkeits- und Zugänglichkeitsfunktionen, die repliziert werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck verwenden. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhaltensweisen unterstützt und die Empfehlungen zur korrekten Beschriftung befolgt werden.

Das `<dialog>`-Element wird von Browsern ähnlich wie benutzerdefinierte Dialoge behandelt, die das ARIA [role="dialog"](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)-Attribut verwenden. `<dialog>`-Elemente, die mit der `showModal()`-Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal), während `<dialog>`-Elemente, die mit der `show()`-Methode aufgerufen oder mit dem `open`-Attribut angezeigt werden oder indem die Standardanzeige eines `<dialog>` geändert wird, als `[aria-modal="false"]` behandelt werden. Beim Implementieren modaler Dialoge sollte alles außer dem `<dialog>` und seinem Inhalt mit dem [`inert`](/de/docs/Web/HTML/Global_attributes/inert)-Attribut inert gemacht werden. Bei der Verwendung von `<dialog>` zusammen mit der `HTMLDialogElement.showModal()`-Methode wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### Nur HTML-Dialog

Dieses Beispiel zeigt die Erstellung eines nicht-modalen Dialogs mithilfe von nur HTML. Aufgrund des booleschen `open`-Attributs im `<dialog>`-Element erscheint das Dialogfeld beim Laden der Seite geöffnet. Das Dialogfeld kann geschlossen werden, indem man auf den "OK"-Button klickt, da das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist. In diesem Fall ist kein JavaScript erforderlich, um das Formular zu schließen.

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
> Laden Sie die Seite neu, um den Ausgangszustand wiederherzustellen.

Dieses Dialogfeld ist aufgrund des Vorhandenseins des `open`-Attributs zunächst geöffnet. Dialoge, die mit dem `open`-Attribut angezeigt werden, sind nicht-modal. Nachdem Sie auf "OK" geklickt haben, wird das Dialogfeld geschlossen und der Ergebnisrahmen bleibt leer. Wenn das Dialogfeld geschlossen wird, gibt es keine Methode, um es wieder zu öffnen. Aus diesem Grund ist es die bevorzugte Methode, nicht-modale Dialoge mit der [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode anzuzeigen. Es ist möglich, die Anzeige des Dialogs zu toggeln, indem das boolesche `open`-Attribut hinzugefügt oder entfernt wird, aber dies ist nicht die empfohlene Vorgehensweise.

### Erstellen eines modalen Dialogs

Dieses Beispiel verdeutlicht einen modalen Dialog mit einem [Verlaufs-](/de/docs/Web/CSS/gradient) Hintergrund. Die `.showModal()`-Methode öffnet das modale Dialogfeld, wenn der "Dialog anzeigen"-Button aktiviert wird. Das Dialogfeld kann durch Drücken der <kbd>Esc</kbd>-Taste oder über die `close()`-Methode geschlossen werden, wenn der "Schließen"-Button innerhalb des Dialogs aktiviert wird.

Wenn ein Dialog geöffnet wird, gibt der Browser standardmäßig Fokus auf das erste Element, das innerhalb des Dialogs fokussiert werden kann. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attribut auf den "Schließen"-Button angewendet, der ihm den Fokus gibt, wenn der Dialog geöffnet wird, da dies das Element ist, mit dem der Benutzer wahrscheinlich unmittelbar nach dem Öffnen des Dialogs interagieren wird.

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

Das Dialog wird modal mit der `.showModal()`-Methode geöffnet und mit der `.close()`-Methode geschlossen.

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

Wenn das modale Dialogfeld angezeigt wird, erscheint es über allen anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des modalen Dialogs ist inert und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass, wenn der Dialog geöffnet ist, mit Ausnahme von dem Dialog selbst, keine Interaktion mit dem Dokument möglich ist; der "Dialog anzeigen"-Button ist größtenteils vom fast undurchsichtigen Hintergrund des Dialogs verdeckt und ist inert.

### Umgang mit dem Rückgabewert des Dialogs

Dieses Beispiel zeigt den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie ein modales Dialogfeld durch die Verwendung eines Formulars geschlossen wird. Standardmäßig ist der `returnValue` der leere String oder der Wert des Buttons, der das Formular innerhalb des `<dialog>`-Elements absendet, falls vorhanden.

Dieses Beispiel öffnet einen modalen Dialog, wenn der "Dialog anzeigen"-Button aktiviert wird. Der Dialog enthält ein Formular mit einem {{HTMLElement("select")}} und zwei {{HTMLElement("button")}}-Elementen, die standardmäßig auf `type="submit"` gesetzt sind. Ein Ereignislistener aktualisiert den Wert des "Bestätigen"-Buttons, wenn die Auswahloption geändert wird. Wenn der "Bestätigen"-Button aktiviert wird, um den Dialog zu schließen, ist der aktuelle Wert des Buttons der Rückgabewert. Wenn der Dialog durch Drücken des "Abbrechen"-Buttons geschlossen wird, ist der `returnValue` `cancel`.

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

- Durch die Übermittlung des Formulars innerhalb des Dialogformulars mit der `dialog`-Methode (wie im [nur HTML-Beispiel](#nur_html-dialog) zu sehen).
- Durch Drücken der <kbd>Esc</kbd>-Taste.
- Durch Aufrufen der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode (wie im [modalen Beispiel](#erstellen_eines_modalen_dialogs) zu sehen).
  In diesem Beispiel schließt der "Abbrechen"-Button den Dialog über die `dialog`-Formularmethode und der "Bestätigen"-Button schließt den Dialog über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode.

Der "Abbrechen"-Button enthält das [`formmethod="dialog"`](/de/docs/Web/HTML/Element/input/submit#formmethod)-Attribut, das die Standardmethode {{HTTPMethod("GET")}} des {{HTMLElement("form")}} übersteuert. Wenn die Methode eines Formulars [`dialog`](#hinweise_zur_verwendung) ist, wird der Zustand des Formulars gespeichert, aber nicht übermittelt, und der Dialog wird geschlossen.

Ohne eine `action` führt das Übermitteln des Formulars über die Standardmethode {{HTTPMethod("GET")}} zu einem Seiten-Reload. Wir verwenden JavaScript, um die Übermittlung zu verhindern und den Dialog mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) zu schließen.

Es ist wichtig, einen Schließmechanismus in jedem `dialog`-Element bereitzustellen. Die <kbd>Esc</kbd>-Taste schließt nicht standardmäßig nicht-modale Dialoge, und man kann nicht davon ausgehen, dass ein Benutzer überhaupt Zugriff auf eine physische Tastatur hat (z.B. jemand, der ein Touchscreen-Gerät ohne Zugang zu einer Tastatur verwendet).

### Schließen eines Dialogs mit einer erforderlichen Formulareingabe

Wenn ein Formular innerhalb eines Dialogs eine erforderliche Eingabe hat, lässt der Benutzeragent das Schließen des Dialogs nur zu, wenn Sie einen Wert für die erforderliche Eingabe bereitgestellt haben. Um ein solches Dialogfeld zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Element/input#formnovalidate)-Attribut auf dem Schließen-Button oder rufen Sie die `close()`-Methode auf dem Dialogobjekt auf, wenn der Schließen-Button angeklickt wird.

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

Aus der Ausgabe sehen wir, dass es unmöglich ist, das Dialogfeld mit dem _Normal schließen_-Button zu schließen. Aber das Dialog kann geschlossen werden, wenn wir die Formularprüfung mit dem `formnovalidate`-Attribut auf dem _Abbrechen_-Button umgehen. Programmatisch schließt `dialog.close()` auch ein solches Dialogfeld.

### Animieren von Dialogen

`<dialog>`s sind standardmäßig auf [`display: none;`](/de/docs/Web/CSS/display) gesetzt, wenn sie versteckt sind, und `display: block;`, wenn sie angezeigt werden, sowie werden sie aus der / zur {{Glossary("top_layer", "Ebenenspitze")}} und zum [Zugänglichkeitsbaum](/de/docs/Web/Performance/How_browsers_work#building_the_accessibility_tree) hinzugefügt/entfernt. Daher muss für `<dialog>`-Elemente, die animiert werden sollen, die {{cssxref("display")}}-Eigenschaft animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Genauer gesagt, wechselt der Browser zwischen `none` und einem anderen `display`-Wert, sodass die animierten Inhalte für die gesamte Animationsdauer sichtbar bleiben.

Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert zu `block` bei `0%` der Animationsdauer, damit er während der gesamten Ansicht sichtbar bleibt.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wechselt der Wert zu `none` bei `100%` der Animationsdauer, damit er während der ganzen Zeit sichtbar bleibt.

> [!NOTE]
> Beim Animieren mithilfe von [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um obiges Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig verfügbar, wenn mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) animiert wird; ein gleichwertiger Schritt ist nicht erforderlich.

#### Übergang von Dialogelementen

Beim Animieren von `<dialog>`s mit CSS-Übergängen sind folgende Features erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style)-Regel
  - : Bietet eine Reihe von Startwerten für Eigenschaften, die auf `<dialog>` eingestellt sind, von denen Sie erwarten, dass sie jedes Mal übergehen, wenn es geöffnet wird. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn sich eine Eigenschaft auf einem sichtbaren Element von einem Wert zu einem anderen ändert; sie werden nicht beim ersten Stilupdate von Elementen ausgelöst oder wenn der `display`-Typ von `none` zu einem anderen Typ wechselt.
- [`display`](/de/docs/Web/CSS/display)-Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, sodass `<dialog>` für die Dauer des Übergangs als `display: block` (oder ein anderer sichtbarer `display`-Wert) bleibt und so die anderen Übergänge sichtbar sind.
- [`overlay`](/de/docs/Web/CSS/overlay)-Eigenschaft
  - : Schließen Sie `overlay` in die Übergangsliste ein, damit das Entfernen des `<dialog>` von der Top-Schicht erst nach Abschluss des Übergangs erfolgt und somit der Übergang sichtbar bleibt.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Legen Sie `transition-behavior: allow-discrete` für die `display`- und `overlay`-Übergänge (oder auf die {{cssxref("transition")}}-Kurzcode) fest, um diskrete Übergänge über diese zwei Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Hier ist ein kurzes Beispiel, um zu zeigen, wie dies aussehen könnte.

##### HTML

Das HTML enthält ein `<dialog>`-Element sowie einen Button, um das Dialogfeld anzuzeigen. Außerdem enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS fügen wir einen `@starting-style`-Block ein, der die Übergangsanfangsstile für die `opacity`- und `transform`-Eigenschaften definiert, Übergangs-Endstile auf dem `dialog[open]`-Zustand sowie Standardstile im Standard-`dialog`-Zustand festlegt, in den zurückgezielt wird, sobald das `<dialog>` erschienen ist. Beachten Sie, wie die `transition`-Liste des `<dialog>` nicht nur diese Eigenschaften enthält, sondern auch die Eigenschaften `display` und `overlay`, jede mit `allow-discrete` auf ihnen.

Wir legen außerdem einen Startstilwert für die {{cssxref("background-color")}}-Eigenschaft auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop) fest, der hinter dem `<dialog>` erscheint, wenn es geöffnet wird, um eine schöne Verdunklungsanimation zu bieten. Der `dialog[open]::backdrop`-Selektor wählt nur die Hintergründe von `<dialog>`-Elementen, wenn der Dialog geöffnet ist.

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

Das JavaScript fügt den Schaltflächen Event-Handler hinzu, die sie dazu veranlassen, das `<dialog>` anzuzeigen und zu schließen, wenn sie angeklickt werden:

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
> Da sich `<dialog>`s von `display: none` zu `display: block` ändern, wenn sie jedes Mal angezeigt werden, gehen `<dialog>`-Übergänge von ihren `@starting-style`-Stilen zu ihren `dialog[open]`-Stilen jedes Mal über, wenn der Eintrittsübergang auftritt. Wenn das `<dialog>` schließt, wechselt es von seinem `dialog[open]`-Zustand zum Standard-`dialog`-Zustand.
>
> Es ist möglich, dass sich der Stilübergang bei Eintritt und Austritt in solchen Fällen unterscheidet. Siehe unser [Demonstration von wann Startstile verwendet werden](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used)-Beispiel für einen Beweis dessen.

#### Dialog-Keyframe-Animationen

Beim Animieren eines `<dialog>` mit CSS-Keyframe-Animationen sind einige Unterschiede zu Übergängen zu beachten:

- Sie geben kein `@starting-style` an.
- Sie schließen den `display`-Wert in einen Keyframe ein; dies wird der `display`-Wert für die gesamte Animation sein oder bis ein weiterer nicht-`none`-Anzeige-Wert auftritt.
- Sie müssen nicht explizit diskrete Animationen aktivieren; es gibt kein Äquivalent zu `allow-discrete` in Keyframes.
- Sie müssen `overlay` auch nicht in Keyframes setzen; die `display`-Animation behandelt die Animation des `<dialog>` von angezeigt zu verborgen.

Lassen Sie uns ein Beispiel betrachten, um zu sehen, wie dies aussieht.

##### HTML

Erstens enthält das HTML ein `<dialog>`-Element sowie einen Button, um das Dialogfeld anzuzeigen. Darüber hinaus enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Keyframes, um zwischen den geschlossenen und angezeigten Zuständen des `<dialog>` zu animieren, sowie die Einblendanimation für den Hintergrund des `<dialog>`. Die `<dialog>`-Animationen beinhalten das Animieren von `display`, um sicherzustellen, dass die tatsächlichen sichtbaren Animationseffekte für die gesamte Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich ist, das Ausblenden des Hintergrunds zu animieren — der Hintergrund wird sofort aus dem DOM entfernt, wenn das `<dialog>` geschlossen wird, sodass es nichts zu animieren gibt.

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

Schließlich fügt das JavaScript den Schaltflächen Ereignis-Handler hinzu, um das `<dialog>` anzuzeigen und zu schließen:

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
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a> akzeptiert
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/dialog_role">dialog</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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

- [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis der `HTMLDialogElement`-Schnittstelle
- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis der `HTMLDialogElement`-Schnittstelle
- [`open`](/de/docs/Web/API/HTMLDialogElement/open)-Eigenschaft der `HTMLDialogElement`-Schnittstelle
- [`inert`](/de/docs/Web/HTML/Global_attributes/inert)-globales Attribut für HTML-Elemente
- {{CSSXref("::backdrop")}} CSS-Pseudo-Element
- [Web-Formulare](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
