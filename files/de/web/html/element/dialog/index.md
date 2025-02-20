---
title: "<dialog>: Das Dialog-Element"
slug: Web/HTML/Element/dialog
l10n:
  sourceCommit: 4da185c20a05e7ed4ea0f18c03714ea5fc038818
---

{{HTMLSidebar}}

Das **`<dialog>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert ein modales oder nicht-modales Dialogfeld oder eine andere interaktive Komponente, wie z.B. eine schließbare Warnung, einen Inspektor oder ein Unterfenster.

Das HTML-`<dialog>`-Element wird verwendet, um sowohl modale als auch nicht-modale Dialogfelder zu erstellen. Modale Dialogfelder unterbrechen die Interaktion mit dem Rest der Seite, während nicht-modale Dialogfelder die Interaktion mit dem Rest der Seite zulassen.

JavaScript sollte verwendet werden, um das `<dialog>`-Element anzuzeigen. Verwenden Sie die [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode, um ein modales Dialogfeld anzuzeigen, und die [`.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode, um ein nicht-modales Dialogfeld anzuzeigen. Das Dialogfeld kann mit der [`.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode oder mit der [`dialog`](/de/docs/Web/HTML/Element/form#method)-Methode geschlossen werden, wenn ein `<form>` innerhalb des `<dialog>`-Elements übermittelt wird. Modale Dialoge können auch mit der <kbd>Esc</kbd>-Taste geschlossen werden.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf dem `<dialog>`-Element verwendet werden. Siehe [Hinweise zur Verwendung](#hinweise_zur_verwendung).

- `open`

  - : Gibt an, dass das Dialogfeld aktiv ist und zur Interaktion zur Verfügung steht. Wenn das `open`-Attribut nicht gesetzt ist, wird das Dialogfeld für den Benutzer nicht sichtbar sein.
    Es wird empfohlen, die `.show()`- oder `.showModal()`-Methode zu verwenden, um Dialoge darzustellen, anstatt das `open`-Attribut zu verwenden. Wenn ein `<dialog>` mit dem `open`-Attribut geöffnet wird, ist es nicht-modal.

    > [!NOTE]
    > Während Sie zwischen den offenen und geschlossenen Zuständen von nicht-modalen Dialogfeldern wechseln können, indem Sie das Vorhandensein des `open`-Attributs ändern, wird dieser Ansatz nicht empfohlen.

## Hinweise zur Verwendung

- HTML {{HTMLElement("form")}}-Elemente können verwendet werden, um ein Dialogfeld zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der zur Übermittlung des Formulars verwendete Button [`formmethod="dialog"`](/de/docs/Web/HTML/Element/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` über die `dialog`-Methode übermittelt wird, schließt sich das Dialogfeld, die Zustände der Formularsteuerelemente werden gespeichert, aber nicht übermittelt, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)-Eigenschaft wird auf den Wert des Buttons gesetzt, der aktiviert wurde.
- Das CSS-{{cssxref('::backdrop')}}-Pseudo-Element kann verwendet werden, um den Hintergrund eines modalen Dialogs zu gestalten, der hinter dem `<dialog>`-Element angezeigt wird, wenn das Dialogfeld mit der [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode angezeigt wird. Dieses Pseudo-Element könnte beispielsweise verwendet werden, um den inaktiven Inhalt hinter dem modalen Dialog zu verwischen, abzudunkeln oder anderweitig zu verschleiern.
- Das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attribut sollte zu dem Element hinzugefügt werden, mit dem der Benutzer unmittelbar nach dem Öffnen eines modalen Dialogs interagieren soll. Wenn kein anderes Element eine unmittelbarere Interaktion erfordert, wird empfohlen, `autofocus` zum Schließen-Button im Dialog oder zum Dialog selbst hinzuzufügen, wenn der Benutzer erwartet wird, es zu klicken/zu aktivieren, um es zu schließen.
- Fügen Sie dem `<dialog>`-Element nicht die `tabindex`-Eigenschaft hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Der Inhalt des Dialogs, einschließlich des darin enthaltenen Schließen-Buttons, kann den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Bei der Implementierung eines Dialogs ist es wichtig, zu beachten, wo der Benutzerfokus am besten gesetzt wird. Wenn [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) verwendet wird, um ein `<dialog>` zu öffnen, wird der Fokus auf das erste verschachtelte fokussierbare Element gesetzt. Das explizite Angeben der anfänglichen Fokussierung durch das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attribut hilft sicherzustellen, dass der anfängliche Fokus auf das Element gesetzt wird, das als beste anfängliche Fokussierung für einen bestimmten Dialog angesehen wird. Wenn Unsicherheit besteht, da nicht immer bekannt sein kann, wo der anfängliche Fokus innerhalb eines Dialogs gesetzt werden könnte, insbesondere in Fällen, in denen der Inhalt eines Dialogs dynamisch beim Aufruf gerendert wird, bietet das `<dialog>`-Element selbst möglicherweise die beste anfängliche Fokussierung.

Stellen Sie sicher, dass es eine Möglichkeit gibt, das Dialogfeld zu schließen. Die robusteste Möglichkeit sicherzustellen, dass alle Benutzer das Dialog schließen können, besteht darin, einen expliziten Button einzufügen, um dies zu tun, z.B. einen Bestätigungs-, Abbruch- oder Schließen-Button.

Standardmäßig kann ein Dialog, der durch die `showModal()`-Methode aufgerufen wird, durch Drücken der <kbd>Esc</kbd>-Taste abgewiesen werden. Ein nicht-modales Dialog wird standardmäßig nicht durch die <kbd>Esc</kbd>-Taste abgewiesen, und je nachdem, was das nicht-modale Dialogfeld darstellt, ist dieses Verhalten möglicherweise nicht erwünscht. Tastaturbenutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und aufrechterhalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte durch Drücken der <kbd>Esc</kbd>-Taste nur das zuletzt angezeigte Dialog geschlossen werden. Bei der Verwendung von `<dialog>` wird dieses Verhalten vom Browser gewährleistet.

Während Dialoge mit anderen Elementen erstellt werden können, bietet das native `<dialog>`-Element Benutzerfreundlichkeits- und Barrierefreiheitsfunktionen, die repliziert werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck verwenden. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhaltensweisen unterstützt werden und die richtigen Beschriftungsempfehlungen befolgt werden.

Das `<dialog>`-Element wird von Browsern auf eine Weise exponiert, die benutzerdefinierten Dialogen ähnelt, die das ARIA-[role="dialog"](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)-Attribut verwenden. `<dialog>`-Elemente, die durch die `showModal()`-Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal), während `<dialog>`-Elemente, die durch die `show()`-Methode aufgerufen oder mit dem `open`-Attribut angezeigt werden oder durch Ändern der Standard-`display`-Eigenschaft eines `<dialog>` dargestellt werden, als `[aria-modal="false"]` exponiert werden. Bei der Implementierung von modalen Dialogen sollte alles andere als das `<dialog>` und dessen Inhalte inaktiv gemacht werden, indem das [`inert`](/de/docs/Web/HTML/Global_attributes/inert)-Attribut verwendet wird. Bei der Verwendung von `<dialog>` zusammen mit der `HTMLDialogElement.showModal()`-Methode wird dieses Verhalten vom Browser gewährleistet.

## Beispiele

### Nur-HTML-Dialog

Dieses Beispiel zeigt die Erstellung eines nicht-modalen Dialogs nur mit HTML. Aufgrund des booleschen `open`-Attributs im `<dialog>`-Element erscheint das Dialogfeld beim Laden der Seite geöffnet. Das Dialogfeld kann durch Klicken auf den "OK"-Button geschlossen werden, da das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist. In diesem Fall wird kein JavaScript benötigt, um das Formular zu schließen.

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

Dieses Dialogfeld ist anfangs aufgrund des Vorhandenseins des `open`-Attributs geöffnet. Dialoge, die mit dem `open`-Attribut angezeigt werden, sind nicht-modal. Nach dem Klicken auf "OK" wird das Dialogfeld geschlossen und der Ergebnisrahmen bleibt leer. Wenn das Dialogfeld abgewiesen wird, wird keine Methode bereitgestellt, um es erneut zu öffnen. Aus diesem Grund wird die bevorzugte Methode zur Anzeige nicht-modaler Dialoge durch die Verwendung der [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode empfohlen. Es ist möglich, die Anzeige des Dialogs durch Hinzufügen oder Entfernen des booleschen `open`-Attributs hin und her zu schalten, aber dies ist keine empfohlene Praxis.

### Erstellung eines modalen Dialogs

Dieses Beispiel zeigt einen modalen Dialog mit einem [Verlauf](/de/docs/Web/CSS/gradient)-Hintergrund. Die `.showModal()`-Methode öffnet das modale Dialog, wenn der Button "Dialog anzeigen" aktiviert wird. Das Dialog kann durch Drücken der <kbd>Esc</kbd>-Taste oder über die `close()`-Methode geschlossen werden, wenn der "Schließen"-Button innerhalb des Dialogs aktiviert wird.

Wenn ein Dialogfeld geöffnet wird, gibt der Browser standardmäßig den Fokus auf das erste fokussierbare Element im Dialog. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attribut auf den "Schließen"-Button angewendet, um ihm den Fokus zu geben, wenn das Dialog geöffnet wird, da dies das Element ist, mit dem erwartet wird, dass der Benutzer unmittelbar nach dem Öffnen des Dialogs interagiert.

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

Das Dialogfeld wird modal mit der `.showModal()`-Methode geöffnet und mit den `.close()`- oder `.requestClose()`-Methoden geschlossen.

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

Wenn das modale Dialogfeld angezeigt wird, erscheint es über allen anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des modalen Dialogfelds ist inaktiv, und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass, wenn das Dialogfeld geöffnet ist, mit Ausnahme des Dialogs selbst, die Interaktion mit dem Dokument nicht möglich ist; der Button "Dialog anzeigen" ist größtenteils durch den fast undurchsichtigen Hintergrund des Dialogs verdeckt und ist inaktiv.

### Umgang mit dem Rückgabewert aus dem Dialog

Dieses Beispiel zeigt den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie ein modales Dialogfeld durch die Verwendung eines Formulars geschlossen wird. Standardmäßig ist der `returnValue` der leere String oder der Wert des Buttons, der das Formular innerhalb des `<dialog>`-Elements übermittelt, falls vorhanden.

Dieses Beispiel öffnet ein modales Dialogfeld, wenn der Button "Dialog anzeigen" aktiviert wird. Das Dialogfeld enthält ein Formular mit einem {{HTMLElement("select")}} und zwei {{HTMLElement("button")}}-Elementen, die standardmäßig `type="submit"` sind. Ein Event-Listener aktualisiert den Wert des "Bestätigen"-Buttons, wenn die Auswahloption geändert wird. Wenn der "Bestätigen"-Button aktiviert wird, um das Dialogfeld zu schließen, ist der aktuelle Wert des Buttons der Rückgabewert. Wenn das Dialogfeld durch Drücken des "Abbrechen"-Buttons geschlossen wird, ist der `returnValue` `cancel`.

Wenn das Dialogfeld geschlossen wird, wird der Rückgabewert unter dem "Dialog anzeigen"-Button angezeigt. Wenn das Dialogfeld durch Drücken der <kbd>Esc</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert und das `close`-Event tritt nicht auf, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

- Durch Übermitteln des Formulars innerhalb des Dialogformulars mit der `dialog`-Methode (wie im [Nur-HTML-Beispiel](#nur-html-dialog) zu sehen).
- Durch Drücken der <kbd>Esc</kbd>-Taste.
- Durch Aufrufen der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode (wie im [modalen Beispiel](#erstellung_eines_modalen_dialogs) zu sehen).
  In diesem Beispiel schließt der "Abbrechen"-Button das Dialogfeld über die `dialog`-Formularmethode und der "Bestätigen"-Button schließt das Dialogfeld über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode.

Der "Abbrechen"-Button enthält das [`formmethod="dialog"`](/de/docs/Web/HTML/Element/input/submit#formmethod)-Attribut, das die Standardmethode {{HTTPMethod("GET")}} des {{HTMLElement("form")}}-Elements überschreibt. Wenn die Methode eines Formulars [`dialog`](#hinweise_zur_verwendung) ist, wird der Zustand des Formulars gespeichert, aber nicht übermittelt, und das Dialog wird geschlossen.

Ohne eine `action` führt das Übermitteln des Formulars über die Standardmethode {{HTTPMethod("GET")}} dazu, dass die Seite neu geladen wird. Wir verwenden JavaScript, um die Übermittlung zu verhindern und das Dialogfeld mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) zu schließen.

Es ist wichtig, eine Schließmechanismus innerhalb jedes `dialog`-Elements bereitzustellen. Die <kbd>Esc</kbd>-Taste schließt nicht-modale Dialoge standardmäßig nicht, und man kann nicht davon ausgehen, dass ein Benutzer überhaupt Zugriff auf eine physische Tastatur hat (z.B. jemand, der ein Touch-Gerät ohne Tastatur verwendet).

### Schließen eines Dialogs mit einer erforderlichen Formulareingabe

Wenn ein Formular innerhalb eines Dialogs eine erforderliche Eingabe hat, lässt der Benutzeragent Sie das Dialogfeld erst schließen, wenn Sie einen Wert für die erforderliche Eingabe bereitstellen. Um ein solches Dialogfeld zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Element/input#formnovalidate)-Attribut auf dem Schließen-Button oder rufen Sie die `close()`-Methode auf dem Dialogobjekt auf, wenn der Schließen-Button geklickt wird.

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

Aus der Ausgabe sehen wir, dass es unmöglich ist, das Dialogfeld mit dem _Normal schließen_-Button zu schließen. Aber das Dialogfeld kann geschlossen werden, wenn wir die Formularvalidierung mit dem `formnovalidate`-Attribut auf dem _Abbrechen_-Button umgehen. Programmatisch wird `dialog.close()` ein solches Dialog ebenfalls schließen.

### Animation von Dialogen

`<dialog>`-Elemente sind auf [`display: none;`](/de/docs/Web/CSS/display) gesetzt, wenn sie verborgen sind, und `display: block;`, wenn sie angezeigt werden, sowie sie werden aus/hinzugefügt zur {{Glossary("top_layer", "oberen Ebene")}} und dem [Barrierefreiheitsbaum](/de/docs/Web/Performance/How_browsers_work#building_the_accessibility_tree). Daher muss, damit `<dialog>`-Elemente animiert werden können, die {{cssxref("display")}}-Eigenschaft animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Genauer gesagt wechselt der Browser zwischen `none` und einem anderen Wert von `display`, sodass der animierte Inhalt für die gesamte Dauer der Animation sichtbar ist.

Zum Beispiel:

- Wenn `display` von `none` auf `block` (oder einen anderen sichtbaren `display`-Wert) animiert wird, ändert sich der Wert bei `0%` der Animationsdauer zu `block`, sodass er während der gesamten Zeit sichtbar ist.
- Wenn `display` von `block` (oder einem anderen sichtbaren `display`-Wert) auf `none` animiert wird, ändert sich der Wert bei `100%` der Animationsdauer zu `none`, sodass er während der gesamten Zeit sichtbar ist.

> [!NOTE]
> Bei der Animation mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) eingestellt werden, um das oben genannte Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig verfügbar, wenn mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) animiert wird; ein entsprechender Schritt ist nicht erforderlich.

#### Übergang von Dialogelementen

Beim Animieren von `<dialog>`-Elementen mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) At-Regel
  - : Bietet eine Reihe von Startwerten für Eigenschaften, die auf das `<dialog>` gesetzt werden, von denen der Übergang jedes Mal ausgeht, wenn es geöffnet wird. Dies ist notwendig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn sich eine Eigenschaft von einem Wert zu einem anderen auf einem sichtbaren Element ändert; sie werden nicht bei den ersten Stilaktualisierungen von Elementen oder beim Ändern des `display`-Typs von `none` zu einem anderen Typ ausgelöst.
- [`display`](/de/docs/Web/CSS/display) Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, sodass das `<dialog>` für die Dauer des Übergangs als `display: block` (oder ein anderer sichtbarer `display`-Wert, der auf den offenen Zustand des Dialogs gesetzt ist) verbleibt, um sicherzustellen, dass die anderen Übergänge sichtbar sind.
- [`overlay`](/de/docs/Web/CSS/overlay) Eigenschaft
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass die Entfernung des `<dialog>` aus der oberen Ebene bis zum Abschluss des Übergangs zurückgestellt wird, um sicherzustellen, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}} Eigenschaft
  - : Stellen Sie `transition-behavior: allow-discrete` auf den `display`- und `overlay`-Übergängen (oder auf der {{cssxref("transition")}}-Kurzform) ein, um diskrete Übergänge für diese beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Hier ist ein kurzes Beispiel, um zu zeigen, wie dies aussehen könnte.

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

Im CSS beziehen wir einen `@starting-style`-Block ein, der die Startstile für den Übergang der `opacity` und `transform`-Eigenschaften definiert, Übergangs-Endstile auf dem `dialog:open`-Zustand und Standardstile auf dem Standard-`dialog`-Zustand, um nach dem Erscheinen des `<dialog>` wieder zurückwechseln zu können. Beachten Sie, wie die `transition`-Liste des `<dialog>` nicht nur diese Eigenschaften, sondern auch die `display`- und `overlay`-Eigenschaften umfasst, von denen auf ihnen jeweils `allow-discrete` gesetzt ist.

Wir setzen auch einen Startstilwert für die {{cssxref("background-color")}}-Eigenschaft auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop), das hinter dem `<dialog>` erscheint, wenn es geöffnet wird, um eine schöne Abdunkelungsanimation zu bieten. Der `dialog:open::backdrop`-Selektor wählt nur die Hintergründe von `<dialog>`-Elementen aus, wenn das Dialog geöffnet ist.

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
> In Browsern, die das {{cssxref(":open")}}-Pseudo-Klasse nicht unterstützen, können Sie den Attributselektor `dialog[open]` verwenden, um das `<dialog>`-Element im offenen Zustand zu stylen.

##### JavaScript

Das JavaScript fügt Event-Handler zu den Anzeigen- und Schließen-Buttons hinzu, sodass diese das `<dialog>` anzeigen und schließen, wenn sie geklickt werden:

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
> Da `<dialog>`s bei jedem Anzeigen von `display: none` zu `display: block` wechseln, wechseln die `<dialog>`-Übergänge von ihren `@starting-style`-Stilen zu ihren `dialog:open`-Stilen jedes Mal, wenn der Einstiegstransition erfolgt. Wenn das `<dialog>` schließt, wechselt es von seinem `dialog:open`-Zustand zum Standard-`dialog`-Zustand.
>
> Es ist möglich, dass sich der Stilübergang beim Eintritt und Austritt in solchen Fällen unterscheidet. Sehen Sie unser [Beispiel für den Nachweis, wann Startstile verwendet werden](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Beweis dafür an.

#### Dialog-Schlüsselbild-Animationen

Beim Animieren eines `<dialog>` mit CSS-Schlüsselbild-Animationen gibt es einige Unterschiede zu beachten:

- Sie geben keinen `@starting-style` an.
- Sie fügen den `display`-Wert in ein Schlüsselbild ein; dies wird der `display`-Wert für die gesamte Dauer der Animation sein, oder bis ein anderer nicht-`none` display-Wert erreicht wird.
- Sie müssen diskrete Animationen nicht explizit ermöglichen; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Schlüsselbildern.
- Sie müssen `overlay` auch nicht innerhalb von Schlüsselbildern einstellen; die `display`-Animation behandelt die Animation des `<dialog>` von sichtbar zu verborgen.

Lassen Sie uns ein Beispiel betrachten, damit Sie sehen können, wie dies aussieht.

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

Das CSS definiert Schlüsselbildanimationen, um zwischen den geschlossenen und sichtbaren Zuständen des `<dialog>` zu animieren, sowie die Einblendungsanimation für den Hintergrund des `<dialog>`. Die `<dialog>`-Animationen umfassen das Animieren von `display`, um sicherzustellen, dass die tatsächlichen sichtbaren Animationseffekte während der gesamten Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, das Ausblenden des Hintergrunds zu animieren - der Hintergrund wird sofort aus dem DOM entfernt, wenn das `<dialog>` geschlossen wird, sodass es nichts zu animieren gibt.

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

Schließlich fügt das JavaScript Event-Handler zu den Buttons hinzu, um das Anzeigen und Schließen des `<dialog>` zu ermöglichen:

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Element/Heading_Elements#sectioning_roots">Abschnittswurzel</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl die Anfangs- als auch die Endebene sind obligatorisch.</td>
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
- [Web-Formulare](/de/docs/Learn_web_development/Extensions/Forms) im Bereich Lernen
