---
title: "<dialog>: Das Dialogelement"
slug: Web/HTML/Element/dialog
l10n:
  sourceCommit: d2421d25d1676cc11b01cc4981061e4d0aa78e95
---

{{HTMLSidebar}}

Das **`<dialog>`**-[HTML](/de/docs/Web/HTML) Element repräsentiert ein modales oder nicht-modales Dialogfenster oder eine andere interaktive Komponente, wie zum Beispiel ein ausblendbares Warnfenster, einen Inspektor oder ein Unterfenster.

Das HTML-Element `<dialog>` wird verwendet, um sowohl modale als auch nicht-modale Dialogboxen zu erstellen. Modale Dialogboxen unterbrechen die Interaktion mit dem Rest der Seite, die als inaktiv angesehen wird, während nicht-modale Dialogboxen die Interaktion mit dem Rest der Seite erlauben.

JavaScript sollte verwendet werden, um das `<dialog>`-Element anzuzeigen. Verwenden Sie die Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), um ein modales Dialogfenster anzuzeigen, und die Methode [`.show()`](/de/docs/Web/API/HTMLDialogElement/show), um ein nicht-modales Dialogfenster anzuzeigen. Die Dialogbox kann mit der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) geschlossen werden oder mit der Methode [`dialog`](/de/docs/Web/HTML/Element/form#method) beim Absenden eines `<form>`s, das innerhalb des `<dialog>`-Elements verschachtelt ist. Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf dem `<dialog>`-Element verwendet werden. Siehe [Verwendungsnotizen](#verwendungsnotizen).

- `open`

  - : Gibt an, dass die Dialogbox aktiv ist und zur Interaktion verfügbar ist. Wenn das `open`-Attribut nicht gesetzt ist, wird die Dialogbox für den Benutzer nicht sichtbar sein. Es wird empfohlen, die Methoden `.show()` oder `.showModal()` zu verwenden, um Dialoge darzustellen, anstatt des `open`-Attributs. Wenn ein `<dialog>` durch das `open`-Attribut geöffnet wird, ist es nicht modal.

    > [!NOTE]
    > Obwohl Sie zwischen den offenen und geschlossenen Zuständen von nicht-modalen Dialogboxen wechseln können, indem Sie die Präsenz des `open`-Attributs umschalten, wird diese Vorgehensweise nicht empfohlen.

## Verwendungsnotizen

- HTML {{HTMLElement("form")}}-Elemente können zum Schließen einer Dialogbox verwendet werden, wenn sie das Attribut `method="dialog"` haben oder wenn der Knopf, um das Formular zu übermitteln, [`formmethod="dialog"`](/de/docs/Web/HTML/Element/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` über die `dialog`-Methode übermittelt wird, wird die Dialogbox geschlossen, die Zustände der Formularelemente werden gespeichert, aber nicht übermittelt, und die Eigenschaft [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) wird auf den Wert des aktivierten Knopfs gesetzt.
- Das CSS {{cssxref('::backdrop')}}-Pseudo-Element kann verwendet werden, um den Hintergrund eines modalen Dialogs zu gestalten, der hinter dem `<dialog>`-Element angezeigt wird, wenn der Dialog über die [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode angezeigt wird. Zum Beispiel könnte dieses Pseudo-Element verwendet werden, um den inaktiven Inhalt hinter dem modalen Dialog zu verwischen, zu verdunkeln oder anderweitig zu verschleiern.
- Das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attribut sollte zu dem Element hinzugefügt werden, mit dem der Benutzer unmittelbar nach dem Öffnen eines modalen Dialogs interagieren soll. Wenn kein anderes Element eine unmittelbarere Interaktion erfordert, ist es ratsam, `autofocus` dem Schließen-Knopf innerhalb des Dialogs oder dem Dialog selbst hinzuzufügen, wenn erwartet wird, dass der Benutzer es anklickt/aktiviert, um es zu schließen.
- Fügen Sie das `tabindex`-Eigentum nicht dem `<dialog>`-Element hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Die Inhalte des Dialogs, einschließlich des im Dialog enthaltenen Schließen-Knopfes, können jedoch den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Bei der Implementierung eines Dialogs ist es wichtig, den geeignetsten Ort zu berücksichtigen, um den Benutzerfokus zu setzen. Wenn Sie [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwenden, um ein `<dialog>` zu öffnen, wird der Fokus auf das erste verschachtelte fokussierbare Element gesetzt. Eine explizite Angabe der anfänglichen Fokusplatzierung durch Verwendung des [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attributs hilft sicherzustellen, dass der Anfangsfokus auf dem Element liegt, das als die beste anfängliche Fokusplatzierung für jeden speziellen Dialog angesehen wird. Wenn Unsicherheit besteht, da es möglicherweise nicht immer bekannt ist, wo der Anfangsfokus innerhalb eines Dialogs gesetzt werden könnte, insbesondere in Fällen, in denen der Inhalt eines Dialogs beim Aufruf dynamisch gerendert wird, bietet das `<dialog>`-Element selbst möglicherweise die beste anfängliche Fokusplatzierung.

Stellen Sie sicher, dass ein Mechanismus vorhanden ist, der es den Benutzern ermöglicht, den Dialog zu schließen. Die robusteste Möglichkeit, sicherzustellen, dass alle Benutzer den Dialog schließen können, besteht darin, einen expliziten Knopf dafür bereitzustellen, wie einen Bestätigungs-, Stornierungs- oder Schließen-Knopf.

Standardmäßig kann ein durch die Methode `showModal()` aufgerufener Dialog durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Ein nicht-modaler Dialog kann standardmäßig nicht mit der <kbd>Esc</kbd>-Taste geschlossen werden, und je nach dem, was der nicht-modale Dialog darstellt, könnte es nicht gewünscht sein, dass dieses Verhalten eintritt. Tastaturbenutzer erwarten, dass die <kbd>Esc</kbd>-Taste Modal-Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und beibehalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte das Drücken der <kbd>Esc</kbd>-Taste nur den zuletzt angezeigten Dialog schließen. Bei Verwendung von `<dialog>` wird dieses Verhalten vom Browser bereitgestellt.

Während Dialoge mit anderen Elementen erstellt werden können, bietet das native `<dialog>`-Element Usabilitäts- und Zugänglichkeitsfunktionen, die nachgeahmt werden müssen, wenn Sie andere Elemente für ähnliche Zwecke verwenden. Wenn Sie eine benutzerdefinierte Dialog-Implementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhaltensweisen unterstützt und die korrekten Kennzeichnungsrichtlinien befolgt werden.

Das `<dialog>`-Element wird von Browsern ähnlich wie benutzerdefinierte Dialoge behandelt, die das ARIA-[role="dialog"](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)-Attribut verwenden. `<dialog>`-Elemente, die durch die Methode `showModal()` aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal), während `<dialog>`-Elemente, die durch die Methode `show()` oder durch das `open`-Attribut oder durch Änderung des Standardanzeigen des `<dialog>` angezeigt werden, als `[aria-modal="false"]` angezeigt werden. Bei der Implementierung von modalen Dialogen sollte alles außer dem `<dialog>` und seinen Inhalten inaktiv gemacht werden, indem das [`inert`](/de/docs/Web/HTML/Global_attributes/inert)-Attribut verwendet wird. Bei Verwendung von `<dialog>` zusammen mit der `HTMLDialogElement.showModal()`-Methode wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### Nur-HTML-Dialog

Dieses Beispiel demonstriert die Erstellung eines nicht-modalen Dialogs nur mit HTML. Aufgrund des booleschen `open`-Attributs im `<dialog>`-Element erscheint das Dialogfenster beim Laden der Seite geöffnet. Das Dialogfenster kann durch Klicken auf die Schaltfläche "OK" geschlossen werden, da das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist. In diesem Fall wird kein JavaScript benötigt, um das Formular zu schließen.

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

Dieser Dialog ist aufgrund des Vorhandenseins des `open`-Attributs zunächst geöffnet. Dialoge, die mit dem `open`-Attribut angezeigt werden, sind nicht-modale. Nach dem Klicken auf "OK" wird der Dialog geschlossen, sodass der Ergebnisrahmen leer bleibt. Wenn der Dialog geschlossen wird, gibt es keine Methode, um ihn wieder zu öffnen. Aus diesem Grund ist die bevorzugte Methode zur Anzeige nicht-modaler Dialoge, die [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode zu verwenden. Es ist möglich, die Anzeige des Dialogs zu toggeln, indem das boolesche `open`-Attribut hinzugefügt oder entfernt wird, aber dies ist nicht die empfohlene Vorgehensweise.

### Erstellen eines modalen Dialogs

Dieses Beispiel zeigt einen modalen Dialog mit einem [Verlauf](/de/docs/Web/CSS/gradient) im Hintergrund. Die `.showModal()`-Methode öffnet den modalen Dialog, wenn die Schaltfläche "Show the dialog" aktiviert wird. Der Dialog kann durch Drücken der <kbd>Esc</kbd>-Taste oder über die `close()`-Methode geschlossen werden, wenn die Schaltfläche "Close" innerhalb des Dialogs aktiviert wird.

Wenn ein Dialog geöffnet wird, gibt der Browser standardmäßig dem ersten Element, das im Dialog fokussiert werden kann, den Fokus. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attribut auf die Schaltfläche "Close" angewendet und gibt ihr den Fokus, wenn der Dialog geöffnet wird, da dies das Element ist, mit dem der Benutzer voraussichtlich unmittelbar nach dem Öffnen des Dialogs interagieren wird.

#### HTML

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a groovy backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir können den Hintergrund des Dialogs mit Hilfe des {{cssxref('::backdrop')}}-Pseudo-Elements gestalten.

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

Wenn das modale Dialogfenster angezeigt wird, erscheint es über allen anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des modalen Dialogs ist inaktiv und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass, wenn der Dialog geöffnet ist, mit Ausnahme des Dialogs selbst, die Interaktion mit dem Dokument nicht möglich ist; die Schaltfläche "Show the dialog" ist größtenteils durch den fast undurchsichtigen Hintergrund des Dialogs verdeckt und ist inaktiv.

### Umgang mit dem Rückgabewert aus dem Dialog

Dieses Beispiel demonstriert den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie ein modales Dialogfenster mit einem Formular geschlossen werden kann. Standardmäßig ist der `returnValue` entweder der leere String oder der Wert des Knopfes, der das Formular innerhalb des `<dialog>`-Elements übermittelt, sofern ein solcher vorhanden ist.

In diesem Beispiel wird ein modales Dialogfenster geöffnet, wenn die Schaltfläche "Show the dialog" aktiviert wird. Der Dialog enthält ein Formular mit einem {{HTMLElement("select")}} und zwei {{HTMLElement("button")}}-Elementen, die standardmäßig den Typ `type="submit"` haben. Ein Ereignis-Listener aktualisiert den Wert der Schaltfläche "Confirm", wenn die ausgewählte Option geändert wird. Wenn die "Confirm"-Schaltfläche aktiviert wird, um den Dialog zu schließen, ist der aktuelle Wert der Taste der Rückgabewert. Wird der Dialog durch Drücken der Schaltfläche "Cancel" geschlossen, ist der `returnValue` `cancel`.

Beim Schließen des Dialogs wird der Rückgabewert unter der Schaltfläche "Show the dialog" angezeigt. Wenn der Dialog durch Drücken der <kbd>Esc</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert und das `close`-Ereignis tritt nicht auf, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

- Durch das Übermitteln des Formulars innerhalb des Dialogformulars mit der `dialog`-Methode (wie im [Nur-HTML-Beispiel](#nur-html-dialog) gezeigt).
- Durch Drücken der <kbd>Esc</kbd>-Taste.
- Durch Aufrufen der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode (wie im [modalen Beispiel](#erstellen_eines_modalen_dialogs) gezeigt).
  In diesem Beispiel schließt die Schaltfläche "Cancel" den Dialog über die `dialog`-Formularmethode, und die Schaltfläche "Confirm" schließt den Dialog über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode.

Die Schaltfläche "Cancel" enthält das Attribut [`formmethod="dialog"`](/de/docs/Web/HTML/Element/input/submit#formmethod), das die Standardmethode {{HTTPMethod("GET")}} des {{HTMLElement("form")}} überschreibt. Wenn die Methode eines Formulars [`dialog`](#verwendungsnotizen) ist, wird der Zustand des Formulars gespeichert, aber nicht übermittelt, und der Dialog wird geschlossen.

Ohne eine `action` führt das Übermitteln des Formulars über die Standardmethode {{HTTPMethod("GET")}} zu einem Neuladen der Seite. Wir verwenden JavaScript, um die Übermittlung zu verhindern und den Dialog mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) zu schließen.

Es ist wichtig, in jedem `dialog`-Element einen Schließmechanismus bereitzustellen. Die <kbd>Esc</kbd>-Taste schließt standardmäßig keine nicht-modalen Dialoge, und man kann nicht voraussetzen, dass ein Benutzer überhaupt Zugang zu einer physischen Tastatur hat (z. B. jemand, der ein Touchscreen-Gerät ohne Zugang zu einer Tastatur verwendet).

### Schließen eines Dialogs mit einer erforderlichen Formulareingabe

Wenn ein Formular innerhalb eines Dialogs eine erforderliche Eingabe besitzt, lässt der Benutzeragent das Schließen des Dialogs nur zu, wenn Sie einen Wert für die erforderliche Eingabe angeben. Um einen solchen Dialog zu schließen, verwenden Sie entweder das Attribut [`formnovalidate`](/de/docs/Web/HTML/Element/input#formnovalidate) auf dem Schließen-Knopf oder rufen die `close()`-Methode auf dem Dialog-Objekt auf, wenn der Schließen-Knopf angeklickt wird.

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

Aus der Ausgabe sehen wir, dass es unmöglich ist, den Dialog mit dem _Normal close_-Knopf zu schließen. Aber der Dialog kann geschlossen werden, wenn wir die Formularvalidierung mit dem `formnovalidate`-Attribut auf der _Cancel_-Taste umgehen. Programmatisch wird `dialog.close()` auch einen solchen Dialog schließen.

### Animieren von Dialogen

`<dialog>`s sind auf [`display: none;`](/de/docs/Web/CSS/display) gesetzt, wenn sie verborgen sind, und `display: block;` wenn sie angezeigt werden, sowie von / zum {{Glossary("top_layer", "oberste Ebene")}} und dem [Barrierefreiheit-Baum](/de/docs/Web/Performance/How_browsers_work#building_the_accessibility_tree) entfernt oder hinzugefügt. Daher muss für `<dialog>`-Elemente, um animiert zu werden, die {{cssxref("display")}}-Eigenschaft animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Insbesondere wird der Browser zwischen `none` und einem anderen Wert von `display` umschalten, sodass der animierte Inhalt während der gesamten Animationsdauer angezeigt wird.

Zum Beispiel:

- Wenn `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) animiert wird, wird der Wert bei `0%` der Animationsdauer auf `block` umgeschaltet, damit er während der gesamten Dauer sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` animiert wird, wird der Wert bei `100%` der Animationsdauer auf `none` umgeschaltet, damit er während der gesamten Dauer sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um das oben beschriebene Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig verfügbar, wenn mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) animiert wird; ein entsprechender Schritt ist nicht erforderlich.

#### Übergangs-Dialogelemente

Beim Animieren von `<dialog>`s mit CSS-Übergängen sind die folgenden Features erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style)-Regel
  - : Bietet eine Reihe von Startwerten für Eigenschaften, die auf dem `<dialog>` festgelegt sind und von denen Sie jedes Mal, wenn es geöffnet wird, wechseln möchten. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur dann auf, wenn sich eine Eigenschaft von einem Wert zu einem anderen auf einem sichtbaren Element ändert; sie werden nicht bei den ersten Stilaktualisierungen von Elementen ausgelöst oder wenn sich der `display`-Typ von `none` auf einen anderen Typ ändert.
- [`display`](/de/docs/Web/CSS/display)-Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das `<dialog>` für die Dauer des Übergangs als `display: block` (oder ein anderer sichtbarer `display`-Wert, der im offenen Zustand des Dialogs festgelegt ist) bleibt und sicherstellt, dass die anderen Übergänge sichtbar sind.
- [`overlay`](/de/docs/Web/CSS/overlay)-Eigenschaft
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass die Entfernung des `<dialog>` aus der obersten Ebene so lange verzögert wird, bis der Übergang abgeschlossen ist, erneut sicherzustellen, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf den `display`- und `overlay`-Übergängen (oder auf die {{cssxref("transition")}}-Kurzschrift), um diskrete Übergänge für diese beiden nicht standardmäßig animierbaren Eigenschaften zu ermöglichen.

Hier ist ein kurzes Beispiel, das zeigt, wie dies aussehen könnte.

##### HTML

Das HTML enthält ein `<dialog>`-Element sowie eine Schaltfläche, um den Dialog anzuzeigen. Darüber hinaus enthält das `<dialog>`-Element eine weitere Schaltfläche, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS fügen wir einen `@starting-style`-Block hinzu, der die Startstile der Eigenschaften `opacity` und `transform` definiert, Übergangsendstile im Zustand `dialog[open]` und Standardstile im Standardzustand `dialog`, um den Zustand zu übernehmen, sobald das `<dialog>` erschienen ist. Beachten Sie, wie die `transition`-Liste des `<dialog>` nicht nur diese Eigenschaften, sondern auch die Eigenschaften `display` und `overlay` umfasst, den jeweiligen Wert `allow-discrete` aufweist.

Wir setzen auch einen Startstile-Wert für die {{cssxref("background-color")}}-Eigenschaft auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop), das hinter dem `<dialog>` erscheint, wenn es geöffnet wird, um eine nette Verdunkelungsanimation hinzuzufügen. Der Selektor `dialog[open]::backdrop` wählt nur die Hintergründe von `<dialog>` Elementen aus, wenn der Dialog geöffnet ist.

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

Das JavaScript fügt Ereignishandler für die Anzeigebildschirme und Schließenfelder hinzu, die diese dazu zwingen, das `<dialog>` zu zeigen und zu schließen, wenn sie angeklickt werden:

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

Der Code wird wie folgt ausgeführt:

{{ EmbedLiveSample("Transitioning dialog elements", "100%", "200") }}

> [!NOTE]
> Da `<dialog>`s von `display: none` zu `display: block` wechseln, sobald sie angezeigt werden, gelangen sie bei jedem Eintrittsübergang von den `@starting-style`-Stilen zu den `dialog[open]`-Stilen. Wenn das `<dialog>` geschlossen wird, erfolgt der Übergang von seinem `dialog[open]`-Zustand zum Standardelement `dialog`.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und beim Verlassen in solchen Fällen unterschiedlich ist. Sehen Sie sich unser [Beispiel für den Nachweis, wann Startstile verwendet werden](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) an, um dies zu bestätigen.

#### Dialog-Keyframe-Animationen

Beim Animieren eines `<dialog>` mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu beachten im Vergleich zu Übergängen:

- Sie geben keinen `@starting-style` an.
- Sie schließen den `display`-Wert in einem Keyframe ein; dies wird der `display`-Wert für die gesamte Animation sein oder bis ein anderer nicht-`none`-Anzeige-Wert gefunden wird.
- Sie müssen keine diskreten Animationen explizit aktivieren; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Keyframes.
- Sie müssen `overlay` nicht innerhalb der Keyframes setzen; die `display`-Animation steuert die Animation des `<dialog>` von sichtbar zu versteckt.

Schauen wir uns ein Beispiel an, damit Sie sehen können, wie das aussieht.

##### HTML

Zunächst enthält das HTML ein `<dialog>`-Element sowie eine Schaltfläche, um den Dialog anzuzeigen. Darüber hinaus enthält das `<dialog>`-Element eine weitere Schaltfläche, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Keyframes, um zwischen den geschlossenen und angezeigten Zuständen des `<dialog>` sowie die Einblendanimation für den `<dialog>`-Hintergrund zu animieren. Die `<dialog>`-Animationen beinhalten das Animieren von `display`, um sicherzustellen, dass die tatsächlichen sichtbaren Animationseffekte während der gesamten Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, das Abblenden des Hintergrundes zu animieren - der Hintergrund wird sofort aus dem DOM entfernt, wenn das `<dialog>` geschlossen wird, daher gibt es nichts zu animieren.

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

Zum Schluss fügt das JavaScript Ereignishandler zu den Buttons hinzu, um das `<dialog>` anzuzeigen und zu schließen:

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

Der Code wird wie folgt ausgeführt:

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
        <a href="/de/docs/Web/HTML/Element/Heading_Elements#sectioning_roots">Gliederungswurzel</a>
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
      <td>Keine, sowohl das Start- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das erlaubt
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>
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
- [Web-Formulare](/de/docs/Learn/Forms) im Lernbereich
