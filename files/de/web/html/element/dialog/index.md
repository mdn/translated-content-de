---
title: "<dialog>: Das Dialog-Element"
slug: Web/HTML/Element/dialog
l10n:
  sourceCommit: be7cf520036291031985ab0b38c487539b1faa9d
---

{{HTMLSidebar}}

Das **`<dialog>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert ein modales oder nicht-modales Dialogfenster oder eine andere interaktive Komponente wie eine löschbare Benachrichtigung, einen Inspektor oder ein Unterfenster.

Das HTML `<dialog>`-Element wird verwendet, um sowohl modale als auch nicht-modale Dialogfenster zu erstellen. Modale Dialogfenster unterbrechen die Interaktion mit dem Rest der Seite, während nicht-modale Dialogfenster die Interaktion mit dem Rest der Seite ermöglichen.

JavaScript sollte verwendet werden, um das `<dialog>`-Element anzuzeigen. Verwenden Sie die [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode, um ein modales Dialogfenster anzuzeigen, und die [`.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode, um ein nicht-modales Dialogfenster anzuzeigen. Das Dialogfenster kann mit der [`.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode oder mit der [`dialog`](/de/docs/Web/HTML/Element/form#method)-Methode geschlossen werden, wenn ein `<form>`, das innerhalb des `<dialog>`-Elements eingebettet ist, abgeschickt wird. Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf dem `<dialog>`-Element verwendet werden. Siehe [Verwendungsnotizen](#verwendungsnotizen).

- `open`

  - : Zeigt an, dass das Dialogfenster aktiv und für die Interaktion verfügbar ist. Wenn das `open`-Attribut nicht gesetzt ist, wird das Dialogfenster für den Benutzer nicht sichtbar sein.
    Es wird empfohlen, die `.show()`- oder `.showModal()`-Methode zu verwenden, um Dialoge darzustellen, anstatt das `open`-Attribut. Wenn ein `<dialog>` mithilfe des `open`-Attributs geöffnet wird, ist es nicht-modal.

    > [!NOTE]
    > Während Sie den geöffneten und geschlossenen Zustand nicht-modaler Dialogfenster durch Umschalten des Vorhandenseins des `open`-Attributs ändern können, wird dieser Ansatz nicht empfohlen.

## Verwendungsnotizen

- HTML {{HTMLElement("form")}}-Elemente können verwendet werden, um ein Dialogfenster zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der Button, der das Formular abschickt, [`formmethod="dialog"`](/de/docs/Web/HTML/Element/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` über die `dialog`-Methode abgeschickt wird, schließt sich das Dialogfenster, die Zustände der Formularelemente werden gespeichert, aber nicht abgeschickt, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)-Eigenschaft wird auf den Wert des Buttons gesetzt, der aktiviert wurde.
- Das CSS {{cssxref('::backdrop')}} Pseudo-Element kann verwendet werden, um den Hintergrund eines modalen Dialogs zu gestalten, der hinter dem `<dialog>`-Element angezeigt wird, wenn das Dialogfenster mit der [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode angezeigt wird. Dieses Pseudo-Element könnte zum Beispiel verwendet werden, um den inaktiven Inhalt hinter dem modalen Dialog unscharf zu machen, abzudunkeln oder anderweitig zu verschleiern.
- Das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attribut sollte dem Element hinzugefügt werden, mit dem der Benutzer voraussichtlich unmittelbar nach Öffnen eines modalen Dialogs interagieren wird. Wenn kein anderes Element eine unmittelbarere Interaktion erfordert, wird empfohlen, `autofocus` dem Schließen-Button innerhalb des Dialogs oder dem Dialog selbst zuzufügen, wenn der Benutzer diesen klicken/aktivieren soll, um das Dialogfenster zu schließen.
- Fügen Sie dem `<dialog>`-Element nicht das `tabindex`-Eigenschaft hinzu, da es nicht interaktiv ist und keinen Fokus empfängt. Der Inhalt des Dialogs, einschließlich des Schließen-Buttons im Dialog, kann den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Bei der Implementierung eines Dialogs ist es wichtig, den geeignetsten Ort für den Benutzerfokus zu überlegen. Wenn Sie [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwenden, um ein `<dialog>` zu öffnen, wird der Fokus auf das erste verschachtelte, fokussierbare Element gesetzt. Die explizite Angabe des anfänglichen Fokusplatzes durch Verwendung des [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attributs hilft sicherzustellen, dass der anfängliche Fokus auf das Element gesetzt wird, das für einen bestimmten Dialog als bester anfänglicher Fokusplatz angesehen wird. Wenn Zweifel bestehen, da es möglicherweise nicht immer bekannt ist, wo der anfängliche Fokus in einem Dialog gesetzt werden könnte, insbesondere in Fällen, in denen der Inhalt eines Dialogs beim Aufruf dynamisch gerendert wird, kann das `<dialog>`-Element selbst den besten anfänglichen Fokusplatz bieten.

Stellen Sie sicher, dass eine Mechanik vorhanden ist, mit der Benutzer den Dialog schließen können. Der robusteste Weg, um sicherzustellen, dass alle Benutzer den Dialog schließen können, besteht darin, einen expliziten Button zum Schließen des Dialogs bereitzustellen, wie einen Bestätigungs-, Abbruch- oder Schließen-Button.

Standardmäßig kann ein Dialog, der mit der `showModal()`-Methode aufgerufen wird, durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Ein nicht-modales Dialog sieht standardmäßig kein Schließen über die <kbd>Esc</kbd>-Taste vor, und je nachdem, was das nicht-modale Dialog darstellt, könnte dieses Verhalten unerwünscht sein. Tastaturbenutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und aufrechterhalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte das Drücken der <kbd>Esc</kbd>-Taste nur den zuletzt angezeigten Dialog schließen. Bei der Verwendung von `<dialog>` wird dieses Verhalten vom Browser bereitgestellt.

Während Dialoge mit anderen Elementen erstellt werden können, bietet das native `<dialog>`-Element Usabilitäts- und Barrierefreiheitsfeatures, die repliziert werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck verwenden. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhalten unterstützt werden und die richtigen Etikettierungsempfehlungen befolgt werden.

Das `<dialog>`-Element wird von Browsern in ähnlicher Weise exponiert wie benutzerdefinierte Dialoge, die das ARIA [role="dialog"](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)-Attribut verwenden. `<dialog>`-Elemente, die mit der `showModal()`-Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal), während `<dialog>`-Elemente, die durch die `show()`-Methode oder das `open`-Attribut angezeigt oder durch Ändern der Standardanzeige eines `<dialog>` geöffnet werden, als `[aria-modal="false"]` dargestellt werden. Bei der Implementierung modaler Dialoge sollte alles außer dem `<dialog>` und dessen Inhalt mit dem [`inert`](/de/docs/Web/HTML/Global_attributes/inert)-Attribut inaktiv gemacht werden. Bei der Verwendung von `<dialog>` zusammen mit der `HTMLDialogElement.showModal()`-Methode wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### Nur HTML-Dialog

Dieses Beispiel demonstriert die Erstellung eines nicht-modalen Dialogs nur mit HTML. Aufgrund des booleschen `open`-Attributs im `<dialog>`-Element erscheint das Dialogfenster beim Laden der Seite geöffnet. Das Dialogfenster kann durch Klicken auf den „OK“-Button geschlossen werden, da das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist. In diesem Fall ist kein JavaScript erforderlich, um das Formular zu schließen.

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

Dieses Dialog ist anfänglich aufgrund des Vorhandenseins des `open`-Attributs geöffnet. Dialoge, die mit dem `open`-Attribut angezeigt werden, sind nicht-modal. Nach dem Klicken auf „OK“ wird das Dialogfeld geschlossen, der Ergebnisrahmen bleibt leer. Wenn das Dialogfeld geschlossen wird, gibt es keine Methode, es erneut zu öffnen. Aus diesem Grund wird die bevorzugte Methode, um nicht-modale Dialoge anzuzeigen, die Verwendung der [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode. Es ist möglich, die Anzeige des Dialogs ein- oder auszuschalten, indem das boolesche `open`-Attribut hinzugefügt oder entfernt wird, dies wird jedoch nicht als empfohlene Vorgehensweise angesehen.

### Erstellen eines modalen Dialogs

Dieses Beispiel demonstriert ein modales Dialogfenster mit einem [Verlauf](/de/docs/Web/CSS/gradient)-Hintergrund. Die Methode `.showModal()` öffnet das modale Dialogfenster, wenn der „Zeige das Dialogfenster“-Button aktiviert wird. Das Dialogfenster kann durch Drücken der <kbd>Esc</kbd>-Taste oder über die `close()`-Methode geschlossen werden, wenn der „Schließen“-Button innerhalb des Dialogs aktiviert wird.

Wenn ein Dialogfenster geöffnet wird, setzt der Browser standardmäßig den Fokus auf das erste Element, das im Dialogfenster fokussiert werden kann. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attribut auf den „Schließen“-Button angewendet, wodurch er fokussiert wird, wenn das Dialogfenster geöffnet wird, da dies das Element ist, mit dem unserer Erwartung nach der Benutzer unmittelbar nach Öffnung des Dialogfensters interagieren wird.

#### HTML

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a groovy backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir können den Hintergrund des Dialogs durch das {{cssxref('::backdrop')}}-Pseudo-Element gestalten.

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

Das Dialogfenster wird modale über die `.showModal()`-Methode geöffnet und über die `.close()`-Methode geschlossen.

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

Wenn das modale Dialogfenster angezeigt wird, erscheint es über anderen vorhandenen Dialogfenstern. Alles außerhalb des modalen Dialogs ist inaktiv und die Interaktion außerhalb des Dialogs wird blockiert. Beachten Sie, dass bei geöffnetem Dialog, mit Ausnahme des Dialogs selbst, keine Interaktion mit dem Dokument möglich ist; der „Zeige das Dialogfenster“-Button wird größtenteils durch den nahezu undurchsichtigen Hintergrund des Dialogs verdeckt und ist inaktiv.

### Umgang mit dem Rückgabewert des Dialogs

Dieses Beispiel zeigt den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie ein modales Dialogfenster mithilfe eines Formulars geschlossen werden kann. Standardmäßig ist der `returnValue` die leere Zeichenkette oder der Wert des Buttons, der das Formular innerhalb des `<dialog>`-Elements absendet, falls vorhanden.

Dieses Beispiel öffnet ein modales Dialogfenster, wenn der „Zeige das Dialogfenster“-Button aktiviert wird. Das Dialogfenster enthält ein Formular mit einem {{HTMLElement("select")}}-Element und zwei {{HTMLElement("button")}}-Elementen, die standardmäßig auf `type="submit"` eingestellt sind. Ein Ereignislistener aktualisiert den Wert des „Bestätigen“-Buttons, wenn sich die Auswahloption ändert. Wenn der „Bestätigen“-Button aktiviert wird, um das Dialogfenster zu schließen, ist der aktuelle Wert des Buttons der Rückgabewert. Wenn das Dialogfenster durch Drücken des „Abbrechen“-Buttons geschlossen wird, ist der `returnValue` `cancel`.

Beim Schließen des Dialogs wird der Rückgabewert unter dem „Zeige das Dialogfenster“-Button angezeigt. Wenn das Dialogfenster durch Drücken der <kbd>Esc</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert und das `close`-Ereignis tritt nicht ein, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

- Durch Abgabe des Formulars innerhalb des Dialogformulars mit der Methode `dialog` (wie im [nur HTML-Beispiel](#nur_html-dialog) gezeigt).
- Durch Drücken der <kbd>Esc</kbd>-Taste.
- Durch Aufruf der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode (wie im [modales Beispiel](#erstellen_eines_modalen_dialogs) gezeigt).
  In diesem Beispiel schließt der „Abbrechen“-Button den Dialog über die `dialog`-Methoden und der „Bestätigen“-Button schließt den Dialog über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode.

Der "Abbrechen"-Button enthält das [`formmethod="dialog"`](/de/docs/Web/HTML/Element/input/submit#formmethod)-Attribut, das die Standard-{{HTTPMethod("GET")}}-Methode des {{HTMLElement("form")}} außer Kraft setzt. Wenn die Methode eines Formulars [`dialog`](#verwendungsnotizen) ist, wird der Status des Formulars gespeichert, aber nicht gesendet, und das Dialogfeld wird geschlossen.

Ohne eine `action` führt das Absenden des Formulars über die Standard-{{HTTPMethod("GET")}}-Methode zu einem Neuladen der Seite. Wir verwenden JavaScript, um das Absenden zu verhindern und schließen den Dialog mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close).

Es ist wichtig, innerhalb jedes `dialog`-Elements einen Schließmechanismus bereitzustellen. Die <kbd>Esc</kbd>-Taste schließt nicht-modale Dialoge nicht standardmäßig, noch kann man davon ausgehen, dass ein Benutzer überhaupt Zugriff auf eine physische Tastatur hat (z. B. jemand, der ein Touchscreen-Gerät ohne Zugang zu einer Tastatur verwendet).

### Schließen eines Dialogs mit einer erforderlichen Formulareingabe

Wenn ein Formular innerhalb eines Dialogs eine erforderliche Eingabe besitzt, lässt der Benutzeragent Sie das Dialogfeld nur schließen, wenn Sie einen Wert für die erforderliche Eingabe bereitstellen. Um ein solches Dialogfeld zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Element/input#formnovalidate)-Attribut auf dem Schließen-Button oder rufen Sie die Methode `close()` am Dialogobjekt auf, wenn der Schließen-Button geklickt wird.

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

Aus der Ausgabe sehen wir, dass es unmöglich ist, das Dialogfeld mit dem _Normal close_-Button zu schließen. Aber das Dialogfeld kann geschlossen werden, wenn wir die Formularvalidierung mit dem `formnovalidate`-Attribut auf dem _Cancel_-Button umgehen. Programmatisch wird `dialog.close()` ebenfalls ein solches Dialogfeld schließen.

### Animation von Dialogen

`<dialog>`-Elemente werden ausgeblendet, indem sie auf [`display: none;`](/de/docs/Web/CSS/display) gesetzt werden, wenn sie verborgen sind, und auf `display: block;` gesetzt, wenn sie angezeigt werden, sowie aus dem [top layer](/de/docs/Glossary/top_layer) und dem [Barrierefreiheitsbaum](/de/docs/Web/Performance/How_browsers_work#building_the_accessibility_tree) entfernt bzw. hinzugefügt. Damit `<dialog>`-Elemente animiert werden können, muss die {{cssxref("display")}}-Eigenschaft animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Insbesondere schaltet der Browser zwischen `none` und einem anderen `display`-Wert um, sodass der animierte Inhalt für die gesamte Animationsdauer sichtbar bleibt.

Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wechselt der Wert bei `0%` der Animationsdauer zu `block`, sodass es die gesamte Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass es die gesamte Zeit sichtbar ist.

> [!NOTE]
> Bei Animationen mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) eingestellt sein, um das oben beschriebene Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig aktiviert, wenn Sie mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) animieren; ein entsprechender Schritt ist nicht erforderlich.

#### Übergang von Dialog-Elementen

Beim Animieren von `<dialog>`-Elementen mit CSS-Übergängen sind folgende Features erforderlich:

- `@starting-style` At-Regel
  - : Bietet einen Satz Anfangswerte für Eigenschaften, die auf dem `<dialog>` festgelegt sind, von denen Sie möchten, dass sie sich jedes Mal ändern, wenn es geöffnet wird. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur dann auf, wenn eine Eigenschaft von einem Wert zu einem anderen auf einem sichtbaren Element wechselt; sie werden nicht durch anfängliche Stilaktualisierungen eines Elements oder wenn sich der `display`-Typ von `none` zu einem anderen Typ ändert, ausgelöst.
- [`display`](/de/docs/Web/CSS/display)-Eigenschaft
  - : Fügen Sie `display` der Übergangsliste hinzu, sodass das `<dialog>` während der gesamten Übergangsdauer `display: block` (oder ein anderer sichtbarer `display`-Wert, der im offenen Zustand des Dialogs eingestellt ist) bleibt, um sicherzustellen, dass die anderen Übergänge sichtbar sind.
- [`overlay`](/de/docs/Web/CSS/overlay)-Eigenschaft
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass die Entfernung des `<dialog>` aus dem Top-Layer erst nach Abschluss des Übergangs erfolgt, um ebenfalls sicherzustellen, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display`- und `overlay`-Übergänge (oder auf die {{cssxref("transition")}}-Kurzform), um diskrete Übergänge auf diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Hier ist ein kurzes Beispiel, um zu zeigen, wie dies aussehen könnte.

##### HTML

Der HTML-Code enthält ein `<dialog>` Element sowie einen Button, um das Dialogfenster anzuzeigen. Zusätzlich enthält das `<dialog>` Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS fügen wir einen `@starting-style`-Block hinzu, der die Anfangsstilwerte für die `opacity`- und `transform`-Eigenschaften definiert, Übergang-Endstilwerte im `dialog[open]`-Zustand, und Standardstile im Standard-`dialog`-Zustand, auf den zurückgekehrt werden soll nachdem das `<dialog>` erschienen ist. Beachten Sie, wie die Übergangsliste des `<dialog>` nicht nur diese Eigenschaften umfasst, sondern auch die `display`- und die `overlay`-Eigenschaften, wobei auf sie jeweils `allow-discrete` eingestellt ist.

Wir setzen ebenfalls einen Startstilwert für die {{cssxref("background-color")}}-Eigenschaft auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop), der hinter dem `<dialog>` erscheint, wenn es geöffnet ist, um eine schöne Abdunkelungsanimation zu ermöglichen. Der `dialog[open]::backdrop`-Selektor wählt nur die Hintergründe von `<dialog>`-Elementen aus, wenn das Dialog geöffnet ist.

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

Das JavaScript fügt Eventhandler zu den Anzeige- und Schließbuttons hinzu, die sie veranlassen, das `<dialog>` anzuzeigen und zu schließen, wenn sie geklickt werden:

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

Der Code wird wie folgt dargestellt:

{{ EmbedLiveSample("Transitioning dialog elements", "100%", "200") }}

> [!NOTE]
> Da `<dialog>`s jedes Mal, wenn sie angezeigt werden, von `display: none` zu `display: block` wechseln, wechseln die `<dialog>`-Übergänge bei jedem Eintragübergang von ihren `@starting-style`-Stilen zu ihren `dialog[open]`-Stilen. Wenn das `<dialog>` geschlossen wird, wechselt es von seinem `dialog[open]`-Zustand zum Standard-`dialog`-Zustand zurück.
>
> Es ist möglich, dass bei solchen Fällen der Stilübergang beim Eintritt und Austritt unterschiedlich ist. Siehe unser [Demonstration des Einsatzes von Startstilen](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) Beispiel für den Beweis dafür.

#### Dialog Keyframe-Animationen

Beim Animieren eines `<dialog>` mit CSS Keyframe-Animationen sind einige Unterschiede zu beachten:

- Sie geben keinen `@starting-style` an.
- Sie fügen den `display`-Wert in ein Keyframe ein; dieser wird der `display`-Wert für die gesamte Animation sein, oder bis ein anderer nicht-`none` display-Wert begegnet wird.
- Es ist nicht erforderlich, diskrete Animationen explizit zu aktivieren; innerhalb von Keyframes gibt es nichts Ähnliches wie `allow-discrete`.
- Es ist ebenfalls nicht erforderlich, `overlay` innerhalb von Keyframes zu setzen; die `display`-Animationen handhaben die Animationen des `<dialog>` von „angezeigt“ zu „verborgen“.

Schauen wir uns ein Beispiel an, um zu sehen, wie das aussieht.

##### HTML

Zuerst enthält das HTML eine `<dialog>`-Element sowie einen Button, um das Dialogfenster anzuzeigen. Zusätzlich enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS deklariert Keyframes zur Animation zwischen den geschlossenen und gezeigten Zuständen des `<dialog>`, plus die Einblendeanimation für den Hintergrund des `<dialog>`. Die `<dialog>`-Animationen umfassen eine Animation von `display`, um sicherzustellen, dass die tatsächlichen sichtbaren Animationseffekte die gesamte Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, das Ausblenden des Hintergrunds zu animieren — der Hintergrund wird beim Schließen des `<dialog>` sofort aus dem DOM entfernt, sodass es nichts zu animieren gibt.

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

Schließlich fügt das JavaScript Eventhandler zu den Buttons hinzu, um das `<dialog>` anzuzzeigen und zu schließen:

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

Der Code wird wie folgt dargestellt:

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
        <a href="/de/docs/Web/HTML/Element/Heading_Elements#sectioning_roots">Unterteilungswurzel</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
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
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/dialog_role">Dialog</a>
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
