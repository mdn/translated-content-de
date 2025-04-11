---
title: "<dialog>: Das Dialog-Element"
slug: Web/HTML/Reference/Elements/dialog
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<dialog>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine modale oder nicht-modale Dialogbox oder eine andere interaktive Komponente, wie z.B. ein abweisbares Warnfenster, einen Inspektor oder ein Unterfenster.

Das HTML-`<dialog>`-Element wird verwendet, um sowohl modale als auch nicht-modale Dialogboxen zu erstellen. Modale Dialogboxen unterbrechen die Interaktion mit dem Rest der Seite, während nicht-modale Dialogboxen die Interaktion mit dem Rest der Seite ermöglichen.

JavaScript sollte verwendet werden, um das `<dialog>`-Element anzuzeigen. Verwenden Sie die [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode, um einen modalen Dialog zu zeigen, und die [`.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode, um einen nicht-modalen Dialog anzuzeigen. Die Dialogbox kann mit der [`.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode oder mit der [`dialog`](/de/docs/Web/HTML/Reference/Elements/form#method)-Methode geschlossen werden, wenn ein `<form>`, das innerhalb des `<dialog>`-Elements eingebettet ist, abgesendet wird. Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Das Attribut `tabindex` darf nicht auf dem `<dialog>`-Element verwendet werden. Siehe [Verwendungsnotizen](#verwendungsnotizen).

- `open`

  - : Gibt an, dass die Dialogbox aktiv ist und für die Interaktion verfügbar ist. Wenn das `open`-Attribut nicht gesetzt ist, wird die Dialogbox für den Benutzer nicht sichtbar sein.
    Es wird empfohlen, die Methoden `.show()` oder `.showModal()` zu verwenden, um Dialoge darzustellen, anstatt das `open`-Attribut. Wenn ein `<dialog>` mit dem `open`-Attribut geöffnet wird, ist es nicht modal.

    > [!NOTE]
    > Während man zwischen den offenen und geschlossenen Zuständen nicht-modaler Dialogboxen wechseln kann, indem man das Vorhandensein des `open`-Attributs umschaltet, wird diese Vorgehensweise nicht empfohlen. Siehe [`open`](/de/docs/Web/API/HTMLDialogElement/open) für weitere Informationen.

## Verwendungsnotizen

- HTML {{HTMLElement("form")}}-Elemente können verwendet werden, um eine Dialogbox zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der zum Absenden des Formulars verwendete Button [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` über die Methode `dialog` gesendet wird, schließt sich die Dialogbox, die Zustände der Formularelemente werden gespeichert, aber nicht gesendet, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)-Eigenschaft wird auf den Wert des aktivierten Buttons gesetzt.
- Das CSS-{{cssxref('::backdrop')}} Pseudo-Element kann verwendet werden, um den Hintergrund eines modalen Dialogs zu gestalten, der hinter dem `<dialog>`-Element angezeigt wird, wenn der Dialog mit der [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode angezeigt wird. Dieses Pseudo-Element kann z.B. verwendet werden, um den inaktiven Inhalt hinter dem modalen Dialog zu verwischen, abzudunkeln oder anderweitig zu verbergen.
- Das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut sollte dem Element hinzugefügt werden, mit dem der Benutzer unmittelbar nach dem Öffnen eines modalen Dialogs interagieren soll. Falls kein anderes Element eine unmittelbarere Interaktion erfordert, wird empfohlen, `autofocus` dem Schließen-Button innerhalb des Dialogs hinzuzufügen oder dem Dialog selbst, wenn erwartet wird, dass der Benutzer es klickt/aktiviert, um es zu schließen.
- Fügen Sie dem `<dialog>`-Element nicht die Eigenschaft `tabindex` hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Der Inhalt des Dialogs, einschließlich des im Dialog enthaltenen Schließen-Buttons, kann den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Bei der Implementierung eines Dialogs ist es wichtig, den geeignetsten Ort für die Festlegung des Benutzerfokus zu berücksichtigen. Wenn [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwendet wird, um ein `<dialog>` zu öffnen, wird der Fokus auf das erste verschachtelte fokussierbare Element gesetzt. Die explizite Angabe der anfänglichen Fokussierung durch die Verwendung des [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attributs wird dazu beitragen, sicherzustellen, dass der anfängliche Fokus auf das Element gesetzt wird, das als bester anfänglicher Fokussierungspunkt für einen bestimmten Dialog angesehen wird. Bei Unsicherheit, da es möglicherweise nicht immer klar ist, wo der anfängliche Fokus innerhalb eines Dialogs gesetzt werden könnte, insbesondere wenn der Inhalt eines Dialogs dynamisch gerendert wird, wenn er aufgerufen wird, könnte das `<dialog>`-Element selbst den besten anfänglichen Fokussierungspunkt bieten.

Stellen Sie sicher, dass eine Möglichkeit bereitgestellt wird, die es den Benutzern ermöglicht, den Dialog zu schließen. Der robusteste Weg, um sicherzustellen, dass alle Benutzer den Dialog schließen können, besteht darin, einen expliziten Button zum Schließen bereitzustellen, wie z.B. einen Bestätigungs-, Abbruch- oder Schließen-Button.

Standardmäßig kann ein Dialog, der über die `showModal()`-Methode aufgerufen wird, durch Drücken der <kbd>Esc</kbd>-Taste abgebrochen werden. Ein nicht-modaler Dialog wird standardmäßig nicht über die <kbd>Esc</kbd>-Taste abgebrochen, und je nachdem, was der nicht-modale Dialog darstellt, ist dieser Automatismus möglicherweise nicht gewollt. Tastaturnutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und beibehalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte durch Drücken der <kbd>Esc</kbd>-Taste nur der zuletzt angezeigte Dialog geschlossen werden. Bei der Verwendung von `<dialog>` wird dieses Verhalten vom Browser bereitgestellt.

Während Dialoge mit anderen Elementen erstellt werden können, bietet das native `<dialog>`-Element Benutzerfreundlichkeits- und Barrierefreiheitsfunktionen, die repliziert werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck verwenden. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhalten unterstützt werden und die ordnungsgemäßen Beschriftungsempfehlungen befolgt werden.

Das `<dialog>`-Element wird von Browsern in einer Weise bereitgestellt, die den benutzerdefinierten Dialogen ähnelt, die das ARIA [role="dialog"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)-Attribut verwenden. `<dialog>`-Elemente, die durch die `showModal()`-Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), während `<dialog>`-Elemente, die durch die `show()`-Methode aufgerufen oder durch das `open`-Attribut oder durch Ändern der Standard-"display"-Anzeige eines `<dialog>` angezeigt werden, als `[aria-modal="false"]` behandelt werden. Beim Implementieren modaler Dialoge sollte alles, was nicht zum `<dialog>` und dessen Inhalt gehört, mit dem [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attribut inaktiv gerendert werden. Bei der Verwendung von `<dialog>` zusammen mit der `HTMLDialogElement.showModal()`-Methode wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### HTML-only Dialog

Dieses Beispiel demonstriert die Erstellung eines nicht-modalen Dialogs nur mit HTML. Aufgrund des booleschen `open`-Attributs im `<dialog>`-Element erscheint der Dialog offen, wenn die Seite geladen wird. Der Dialog kann durch Klicken auf die "OK"-Taste geschlossen werden, da das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist. In diesem Fall ist kein JavaScript zum Schließen des Formulars erforderlich.

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

Dieser Dialog ist anfänglich geöffnet aufgrund der Anwesenheit des `open`-Attributs. Dialoge, die über das `open`-Attribut angezeigt werden, sind nicht modal. Nach dem Klicken auf "OK" wird der Dialog geschlossen und der Ergebnisrahmen bleibt leer. Wenn der Dialog geschlossen wird, gibt es keine Methode, ihn erneut zu öffnen. Aus diesem Grund wird empfohlen, nicht-modale Dialoge mithilfe der [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode anzuzeigen. Es ist möglich, die Anzeige des Dialogs durch Hinzufügen oder Entfernen des booleschen `open`-Attributes umzustellen, doch dies ist nicht die empfohlene Vorgehensweise.

### Erstellung eines modalen Dialogs

Dieses Beispiel demonstriert einen modalen Dialog mit einem [Gradienten](/de/docs/Web/CSS/gradient) als Hintergrund. Die `.showModal()`-Methode öffnet den modalen Dialog, wenn die Schaltfläche "Dialog anzeigen" aktiviert wird. Der Dialog kann durch Drücken der <kbd>Esc</kbd>-Taste oder über die `close()`-Methode geschlossen werden, wenn die Schaltfläche "Schließen" innerhalb des Dialogs aktiviert wird.

Wenn ein Dialog geöffnet wird, legt der Browser standardmäßig den Fokus auf das erste Element, das innerhalb des Dialogs fokussiert werden kann. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut auf die "Schließen"-Schaltfläche angewendet, wodurch diese den Fokus erhält, wenn der Dialog geöffnet wird, da dies das Element ist, mit dem der Benutzer nach dem Öffnen des Dialogs sofort interagieren soll.

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

Der Dialog wird modal mit der `.showModal()`-Methode geöffnet und mit den `.close()`- oder `.requestClose()`-Methoden geschlossen.

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

Wenn der modale Dialog angezeigt wird, erscheint er über allen anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des modalen Dialogs ist inaktiv und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass wenn der Dialog geöffnet ist, mit Ausnahme des Dialogs selbst, keine Interaktion mit dem Dokument möglich ist; die Schaltfläche "Dialog anzeigen" wird größtenteils vom nahezu undurchsichtigen Hintergrund des Dialogs verdeckt und ist inaktiv.

### Umgang mit dem Rückgabewert des Dialogs

Dieses Beispiel demonstriert den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie ein modaler Dialog mithilfe eines Formulars geschlossen wird. Standardmäßig ist der `returnValue` der leere String oder der Wert des Buttons, der das Formular innerhalb des `<dialog>`-Elements absendet, falls es einen gibt.

Dieses Beispiel öffnet einen modalen Dialog, wenn die Schaltfläche "Dialog anzeigen" aktiviert wird. Der Dialog enthält ein Formular mit einem {{HTMLElement("select")}} und zwei {{HTMLElement("button")}}-Elementen, die standardmäßig auf `type="submit"` gesetzt sind. Ein Event-Listener aktualisiert den Wert des "Bestätigen"-Buttons, wenn sich die Auswahloption ändert. Wenn der "Bestätigen"-Button aktiviert wird, um den Dialog zu schließen, ist der aktuelle Wert des Buttons der Rückgabewert. Wenn der Dialog durch Drücken der "Abbrechen"-Taste geschlossen wird, ist der `returnValue` `cancel`.

Wenn der Dialog geschlossen wird, wird der Rückgabewert unter der Schaltfläche "Dialog anzeigen" angezeigt. Wenn der Dialog durch Drücken der <kbd>Esc</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert und das `close`-Ereignis wird nicht ausgelöst, sodass der Text in der {{HTMLElement("output")}} nicht aktualisiert wird.

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

- Durch das Senden des Formulars innerhalb des Dialogformulars mit der `dialog`-Methode (wie im [HTML-only Beispiel](#html-only_dialog) zu sehen).
- Durch Drücken der <kbd>Esc</kbd>-Taste.
- Durch Aufrufen der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode (wie im [modalen Beispiel](#erstellung_eines_modalen_dialogs) zu sehen).
  In diesem Beispiel schließt der "Abbrechen"-Button den Dialog über die `dialog`-Formularmethode und der "Bestätigen"-Button schließt den Dialog über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode.

Der "Abbrechen"-Button enthält das [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input/submit#formmethod)-Attribut, das die Standard-{{HTTPMethod("GET")}}-Methode des {{HTMLElement("form")}} überschreibt. Wenn die Methode eines Formulars [`dialog`](#verwendungsnotizen) ist, wird der Zustand des Formulars gespeichert, aber nicht gesendet, und der Dialog geschlossen.

Ohne ein `action` würde das Absenden des Formulars über die Standard-{{HTTPMethod("GET")}}-Methode zu einem Seitenneuladen führen. Wir verwenden JavaScript, um die Übermittlung zu verhindern und den Dialog mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) zu schließen.

Es ist wichtig, innerhalb jedes `dialog`-Elements einen Schließmechanismus bereitzustellen. Die <kbd>Esc</kbd>-Taste schließt standardmäßig keine nicht-modalen Dialoge, noch kann man davon ausgehen, dass ein Benutzer überhaupt Zugriff auf eine physische Tastatur hat (z. B. jemand, der ein Touchscreen-Gerät ohne Tastaturzugriff verwendet).

### Schließen eines Dialogs mit einer erforderlichen Formulareingabe

Wenn ein Formular innerhalb eines Dialogs eine erforderliche Eingabe hat, lässt der User-Agent den Dialog erst schließen, wenn Sie einen Wert für die erforderliche Eingabe bereitgestellt haben. Um einen solchen Dialog zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate)-Attribut auf dem Close-Button oder rufen Sie die `close()`-Methode des Dialogobjekts auf, wenn der Close-Button geklickt wird.

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

Aus dem Ergebnis sehen wir, dass es unmöglich ist, den Dialog mit dem _Normal schließen_-Button zu schließen. Aber der Dialog kann geschlossen werden, wenn wir die Formularvalidierung mit dem `formnovalidate`-Attribut auf dem _Abbrechen_-Button umgehen. Programmatisch wird `dialog.close()` auch einen solchen Dialog schließen.

### Animation von Dialogen

`<dialog>`s werden standardmäßig auf [`display: none;`](/de/docs/Web/CSS/display) gesetzt, wenn sie ausgeblendet sind, und auf `display: block;` gesetzt, wenn sie angezeigt werden, sowie aus der / in die {{Glossary("top_layer", "obere Ebene")}} und den [Zugänglichkeit-Baum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt/aufgenommen. Daher muss die {{cssxref("display")}}-Eigenschaft animierbar sein, damit `<dialog>`-Elemente animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren das `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Insbesondere wird der Browser zwischen `none` und einem anderen `display`-Wert umschalten, damit der animierte Inhalt für die gesamte Dauer der Animation sichtbar ist.

Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wird der Wert zu `block` bei `0%` der Animationsdauer umgeschaltet, sodass er die gesamte Zeit über sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none`, wird der Wert bei `100%` der Animationsdauer zu `none` umgeschaltet, sodass er die gesamte Zeit über sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt sein, um das oben beschriebene Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig aktiviert, wenn mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) animiert wird; ein entsprechender Schritt ist nicht erforderlich.

#### Übergangs-Dialogelemente

Beim Animieren von `<dialog>` mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) Regel
  - : Stellt eine Reihe von Ausgangswerten für Eigenschaften bereit, die auf dem `<dialog>` gesetzt wurden, von denen Sie jedes Mal übergehen möchten, wenn es geöffnet wird. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig erfolgen CSS-Übergänge nur, wenn sich eine Eigenschaft von einem Wert zu einem anderen auf einem sichtbaren Element ändert; sie werden nicht bei den ersten Stilaktualisierungen von Elementen oder beim Wechseln des `display`-Typs von `none` zu einem anderen Typ ausgelöst.
- [`display`](/de/docs/Web/CSS/display) Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, damit das `<dialog>` für die Dauer des Übergangs als `display: block` (oder ein anderer sichtbarer `display`-Wert im geöffneten Zustand des Dialogs) verbleibt, um sicherzustellen, dass die anderen Übergänge sichtbar sind.
- [`overlay`](/de/docs/Web/CSS/overlay) Eigenschaft
  - : Fügen Sie `overlay` in die Übergangsliste ein, um sicherzustellen, dass die Entfernung des `<dialog>` aus der obersten Ebene bis zum Abschluss des Übergangs verschoben wird, wiederum um sicherzustellen, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}} Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf den `display`- und `overlay`-Übergängen (oder auf die {{cssxref("transition")}}-Kurzform), um diskrete Übergänge bei diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Hier ist ein kurzes Beispiel, um zu zeigen, wie das aussehen könnte.

##### HTML

Das HTML enthält ein `<dialog>`-Element sowie einen Button, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS wird ein `@starting-style`-Block eingeschlossen, der die Übergangsausgangsstile für die `opacity`- und `transform`-Eigenschaften definiert, Übergangsabschlussstile im `dialog:open`-Zustand und Standardstile im Standard-`dialog`-Zustand, zu dem das `<dialog>` zurückkehrt, nachdem es erschienen ist. Beachten Sie, wie die `transition`-Liste des `<dialog>` nicht nur diese Eigenschaften, sondern auch die `display`- und `overlay`-Eigenschaften enthält, jeweils mit `allow-discrete` auf ihnen gesetzt.

Wir setzen auch einen Ausgangsstilwert für die {{cssxref("background-color")}} auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop), das hinter dem `<dialog>` erscheint, wenn es geöffnet wird, um eine schöne Verdunkelungsanimation bereitzustellen. Der `dialog:open::backdrop`-Selektor wählt nur die Hintergründe von `<dialog>`-Elementen aus, wenn der Dialog geöffnet ist.

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
> In Browsern, die das {{cssxref(":open")}} Pseudoklasse nicht unterstützen, können Sie den Attributselektor `dialog[open]` verwenden, um das `<dialog>`-Element zu stylen, wenn es geöffnet ist.

##### JavaScript

Das JavaScript fügt Event-Handler zu den Show- und Schließen-Buttons hinzu, damit sie das `<dialog>` anzeigen und schließen, wenn sie angeklickt werden:

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
> Da `<dialog>`s jedes Mal, wenn sie angezeigt werden, von `display: none` zu `display: block` wechseln, übergehen `<dialog>`s von ihren `@starting-style`-Stilen zu ihren `dialog:open`-Stilen jedes Mal, wenn der Eintrittsübergang erfolgt. Wenn das `<dialog>` geschlossen wird, erfolgt der Übergang vom `dialog:open`-Zustand zum Standard-`dialog`-Zustand.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt unterschiedlich ist. Siehe unser [Demonstration, wann Ausgangsstile verwendet werden](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used)-Beispiel für einen Beweis hierfür.

#### Dialog-Schlüsselbild-Animationen

Beim Animieren eines `<dialog>` mit CSS-Schlüsselbild-Animationen gibt es Unterschiede zu beachten im Vergleich zu Übergängen:

- Sie geben keinen `@starting-style` an.
- Sie enthalten den `display`-Wert in einem Schlüsselbild; dies wird der `display`-Wert für die gesamte Animation sein oder bis ein anderer nicht-`none`-Displaywert auftritt.
- Sie müssen keine diskreten Animationen explizit aktivieren; es gibt keine Entsprechung zu `allow-discrete` innerhalb von Schlüsselbildern.
- Sie müssen `overlay` ebenfalls nicht in Schlüsselbildern setzen; die `display`-Animation behandelt die Animation des `<dialog>` von angezeigt zu verborgen.

Schauen wir uns ein Beispiel an, damit Sie sehen können, wie das aussieht.

##### HTML

Zuerst enthält das HTML ein `<dialog>`-Element sowie einen Button, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Schlüsselbilder, um zwischen den geschlossenen und angezeigten Zuständen des `<dialog>` zu animieren, sowie die Einblendanimation für den Hintergrund des `<dialog>`. Die `<dialog>`-Animationen umfassen das Animieren von `display`, um sicherzustellen, dass die eigentlichen sichtbaren Animationseffekte für die gesamte Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, das Ausblenden des Hintergrunds zu animieren — der Hintergrund wird beim Schließen des `<dialog>` sofort aus dem DOM entfernt, sodass nichts zu animieren bleibt.

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

Schließlich fügt das JavaScript Event-Handler zu den Buttons hinzu, um das `<dialog>` anzuzeigen und zu schließen:

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        Abschnitts-Wurzel
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
      <td>Keine, sowohl das Start-Tag als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a> akzeptiert
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
- [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) globales Attribut für HTML-Elemente
- {{CSSXref("::backdrop")}} CSS-Pseudo-Element
- [Web-Formulare](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
