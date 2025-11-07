---
title: "<dialog>: Das Dialog-Element"
slug: Web/HTML/Reference/Elements/dialog
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **`<dialog>`**-Element in [HTML](/de/docs/Web/HTML) repräsentiert ein modales oder nicht-modales Dialogfeld oder eine andere interaktive Komponente, wie z.B. eine abweisbare Warnung, einen Inspektor oder ein Unterfenster.

Das HTML `<dialog>`-Element wird verwendet, um sowohl modale als auch nicht-modale Dialogfelder zu erstellen. Modale Dialogfelder unterbrechen die Interaktion mit dem Rest der Seite, da sie inaktiv ist, während nicht-modale Dialogfelder die Interaktion mit dem Rest der Seite ermöglichen.

JavaScript sollte verwendet werden, um das `<dialog>`-Element anzuzeigen. Verwenden Sie die Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), um ein modales Dialogfeld anzuzeigen, und die Methode [`.show()`](/de/docs/Web/API/HTMLDialogElement/show), um ein nicht-modales Dialogfeld anzuzeigen. Das Dialogfeld kann mit der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) geschlossen werden oder mit der [`dialog`](/de/docs/Web/HTML/Reference/Elements/form#method)-Methode, wenn ein innerhalb des `<dialog>`-Elements verschachteltes `<form>`-Element gesendet wird. Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf dem `<dialog>`-Element verwendet werden. Siehe [Verwendungsnotizen](#verwendungsnotizen).

- `closedby`
  - : Gibt die Arten von Benutzeraktionen an, die zum Schließen des `<dialog>`-Elements verwendet werden können. Dieses Attribut unterscheidet drei Methoden, mit denen ein Dialog geschlossen werden kann:
    - Eine _Light Dismiss-Benutzeraktion_, bei der das `<dialog>` geschlossen wird, wenn der Benutzer außerhalb davon klickt oder tippt. Dies entspricht dem ["light dismiss"-Verhalten von "auto"-Status-Popovers](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss).
    - Eine _plattform-spezifische Benutzeraktion_, wie das Drücken der <kbd>Esc</kbd>-Taste auf Desktop-Plattformen oder eine "Zurück"- oder "Abweisen"-Geste auf mobilen Plattformen.
    - Ein durch den Entwickler spezifizierter Mechanismus, wie ein {{htmlelement("button")}} mit einem [`click`](/de/docs/Web/API/Element/click_event)-Handler, der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) oder eine {{htmlelement("form")}}-Einreichung aufruft.

    Mögliche Werte sind:
    - `any`
      - : Der Dialog kann mit jeder der drei Methoden abgewiesen werden.
    - `closerequest`
      - : Der Dialog kann mit einer plattform-spezifischen Benutzeraktion oder einem durch den Entwickler spezifizierten Mechanismus abgewiesen werden.
    - `none`
      - : Der Dialog kann nur mit einem durch den Entwickler spezifizierten Mechanismus abgewiesen werden.

    Wenn das `<dialog>`-Element keinen gültigen `closedby`-Wert spezifiziert hat, dann
    - wenn es mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet wurde, verhält es sich, als wäre der Wert `"closerequest"`
    - andernfalls verhält es sich, als wäre der Wert `"none"`.

- `open`
  - : Gibt an, dass das Dialogfeld aktiv ist und zur Interaktion zur Verfügung steht. Wenn das `open`-Attribut nicht gesetzt ist, wird das Dialogfeld dem Benutzer nicht angezeigt. Es wird empfohlen, die Methoden `.show()` oder `.showModal()` zu verwenden, um Dialoge darzustellen, anstatt das `open`-Attribut zu verwenden. Wenn ein `<dialog>` mit dem `open`-Attribut geöffnet wird, ist es nicht-modal.

    > [!NOTE]
    > Auch wenn Sie zwischen den offenen und geschlossenen Zuständen von nicht-modalen Dialogfeldern wechseln können, indem Sie das Vorhandensein des `open`-Attributs umschalten, wird diese Vorgehensweise nicht empfohlen. Siehe [`open`](/de/docs/Web/API/HTMLDialogElement/open) für weitere Informationen.

## Verwendungsnotizen

- HTML {{HTMLElement("form")}}-Elemente können verwendet werden, um ein Dialogfeld zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der zur Übermittlung des Formulars verwendete Button [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` mit der `dialog`-Methode übermittelt wird, wird das Dialogfeld geschlossen, die Zustände der Formularelemente werden gespeichert, aber nicht übermittelt, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)-Eigenschaft wird auf den Wert des aktivierten Buttons gesetzt.
- Das CSS-{{cssxref('::backdrop')}}-Pseudoelement kann verwendet werden, um den Hintergrund eines modalen Dialogs zu gestalten, der hinter dem `<dialog>`-Element angezeigt wird, wenn das Dialogfeld mit der Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) dargestellt wird. Beispielsweise könnte dieses Pseudoelement verwendet werden, um den inaktiven Inhalt hinter dem modalen Dialog zu verschwimmen, abdunkeln oder anderweitig zu verdecken.
- Das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut sollte zu dem Element hinzugefügt werden, mit dem der Benutzer sofort bei Öffnen eines modalen Dialogs interagieren soll. Wenn kein anderes Element eine unmittelbarere Interaktion erfordert, wird empfohlen, `autofocus` dem Schließen-Button innerhalb des Dialogs oder dem Dialog selbst hinzuzufügen, wenn erwartet wird, dass der Benutzer darauf klickt/aktiviert, um das Schließen auszulösen.
- Fügen Sie dem `<dialog>`-Element nicht die `tabindex`-Eigenschaft hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Der Inhalt des Dialogs, einschließlich des im Dialog enthaltenen Schließen-Buttons, kann den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Bei der Implementierung eines Dialogs ist es wichtig, den am besten geeigneten Ort für den Benutzerfokus zu berücksichtigen. Bei der Verwendung von [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), um ein `<dialog>` zu öffnen, wird der Fokus auf das erste verschachtelte fokussierbare Element gesetzt. Wenn Sie durch die Verwendung des [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attributs explizit auf die Platzierung des anfänglichen Fokus hinweisen, wird sichergestellt, dass der anfängliche Fokus auf dem als beste anfängliche Fokusplatzierung für einen bestimmten Dialog bestimmte Element gesetzt wird. Im Zweifelsfall, da es möglicherweise nicht immer bekannt ist, wo der anfängliche Fokus innerhalb eines Dialogs gesetzt werden könnte, insbesondere in Fällen, in denen der Inhalt eines Dialogs beim Aufruf dynamisch gerendert wird, kann das `<dialog>`-Element selbst die beste anfängliche Fokusplatzierung bieten.

Stellen Sie sicher, dass ein Mechanismus bereitgestellt wird, der es den Benutzern ermöglicht, das Dialogfeld zu schließen. Der robusteste Weg, um sicherzustellen, dass alle Benutzer das Dialogfeld schließen können, ist die Aufnahme eines expliziten Buttons dafür, wie z.B. ein Bestätigungs-, Abbrechen- oder Schließen-Button.

Standardmäßig kann ein Dialog, der durch die `showModal()`-Methode aufgerufen wird, durch Drücken der <kbd>Esc</kbd>-Taste abgewiesen werden. Ein nicht-modales Dialogfeld kann standardmäßig nicht mit der <kbd>Esc</kbd>-Taste abgewiesen werden, und je nachdem, was das nicht-modale Dialogfeld darstellt, ist dieses Verhalten möglicherweise nicht erwünscht. Tastaturbenutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und beibehalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte das Drücken der <kbd>Esc</kbd>-Taste nur den zuletzt gezeigten Dialog schließen. Bei der Verwendung von `<dialog>` wird dieses Verhalten vom Browser bereitgestellt.

Während Dialoge mit anderen Elementen erstellt werden können, bieten das native `<dialog>`-Element Benutzerfreundlichkeits- und Barrierefreiheitsfunktionen, die repliziert werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck verwenden. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhalten unterstützt werden und die ordnungsgemäßen Kennzeichnungsempfehlungen befolgt werden.

Das `<dialog>`-Element wird von Browsern auf ähnliche Weise wie benutzerdefinierte Dialoge exponiert, die das ARIA-Attribut [role="dialog"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) verwenden. `<dialog>`-Elemente, die durch die `showModal()`-Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), während `<dialog>`-Elemente, die durch die `show()`-Methode oder durch Verwendung des `open`-Attributs oder durch Ändern des Standard-`display` eines `<dialog>` angezeigt werden, als `[aria-modal="false"]` exponiert werden. Bei der Implementierung von modalen Dialogen sollte alles andere als das `<dialog>` und dessen Inhalt mit dem [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attribut inaktiv gemacht werden. Bei der Verwendung von `<dialog>` zusammen mit der `HTMLDialogElement.showModal()`-Methode wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### HTML-only Dialog

Dieses Beispiel demonstriert die Erstellung eines nicht-modalen Dialogs nur mit HTML. Aufgrund des booleschen `open`-Attributs im `<dialog>`-Element erscheint der Dialog offen, wenn die Seite geladen wird. Der Dialog kann durch Klicken auf die "OK"-Taste geschlossen werden, da das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist. In diesem Fall ist kein JavaScript erforderlich, um das Formular zu schließen.

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

Dieser Dialog ist aufgrund des Vorhandenseins des `open`-Attributs initial geöffnet. Dialoge, die mit dem `open`-Attribut angezeigt werden, sind nicht-modal. Nach dem Klick auf "OK" wird der Dialog abgewiesen und der Ergebnisrahmen bleibt leer. Wenn der Dialog abgewiesen wird, gibt es keine Methode, ihn erneut zu öffnen. Aus diesem Grund ist die bevorzugte Methode zur Anzeige nicht-modaler Dialoge, die [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show)-Methode zu verwenden. Es ist möglich, die Anzeige des Dialogs zu toggeln, indem man das boolesche `open`-Attribut hinzufügt oder entfernt, aber dies ist keine empfohlene Praxis.

### Erstellung eines modalen Dialogs

Dieses Beispiel zeigt einen modalen Dialog mit einem [Gradienten](/de/docs/Web/CSS/Reference/Values/gradient)-Hintergrund. Die `.showModal()`-Methode öffnet das modale Dialogfeld, wenn der Button "Show the dialog" aktiviert wird. Der Dialog kann durch Drücken der <kbd>Esc</kbd>-Taste oder mittels der `close()`-Methode geschlossen werden, wenn der "Close"-Button im Dialog aktiviert wird.

Bei der Öffnung eines Dialogs setzt der Browser standardmäßig den Fokus auf das erste Element, das im Dialog fokussiert werden kann. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut auf den "Close"-Button angewendet, damit dieser beim Öffnen des Dialogs den Fokus erhält, da dies das Element ist, mit dem der Benutzer erwartet, sofort nach dem Öffnen des Dialogs zu interagieren.

#### HTML

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a groovy backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir können den Hintergrund des Dialogs mit dem {{cssxref('::backdrop')}}-Pseudoelement gestalten.

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

Der Dialog wird modal mit der `.showModal()`-Methode geöffnet und mit den Methoden `.close()` oder `.requestClose()` geschlossen.

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

Wenn das modale Dialogfeld angezeigt wird, erscheint es oberhalb aller anderen möglicherweise vorhandenen Dialoge. Alles außerhalb des modalen Dialogs ist inaktiv und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass bei geöffnetem Dialog, mit Ausnahme des Dialogs selbst, keine Interaktion mit dem Dokument möglich ist; der Button "Show the dialog" ist größtenteils durch den fast opaken Hintergrund des Dialogs verdeckt und ist inaktiv.

### Umgang mit dem Rückgabewert des Dialogs

Dieses Beispiel demonstriert das [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie man ein modales Dialogfeld mit einem Formular schließt. Standardmäßig ist der `returnValue` der leere String oder der Wert des Buttons, der das Formular innerhalb des `<dialog>` -Elements sendet, falls es eines gibt.

Dieses Beispiel öffnet ein modales Dialogfeld, wenn der "Show the dialog"-Button aktiviert wird. Der Dialog enthält ein Formular mit einem {{HTMLElement("select")}} und zwei {{HTMLElement("button")}}-Elementen, die standardmäßig `type="submit"` haben. Ein Event-Listener aktualisiert den Wert des "Confirm"-Buttons, wenn sich die Auswahloption ändert. Wenn der "Confirm"-Button aktiviert wird, um den Dialog zu schließen, ist der aktuelle Wert des Buttons der Rückgabewert. Wenn der Dialog durch Drücken der "Cancel"-Taste geschlossen wird, ist der `returnValue` `cancel`.

Wenn der Dialog geschlossen wird, wird der Rückgabewert unter dem "Show the dialog"-Button angezeigt. Wenn der Dialog durch Drücken der <kbd>Esc</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert, und das `close`-Ereignis tritt nicht auf, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

Die obigen Beispiele veranschaulichen die folgenden drei Methoden zum Schließen modaler Dialoge:

- Durch Übermittlung des Formulars innerhalb des Dialogformulars mit der `dialog`-Methode (wie im [HTML-only Beispiel](#html-only_dialog) gezeigt).
- Durch Drücken der <kbd>Esc</kbd>-Taste.
- Durch Aufrufen der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode (wie im [Beispiel für modale Dialoge](#erstellung_eines_modalen_dialogs) gezeigt).
  In diesem Beispiel schließt der "Cancel"-Button den Dialog über die `dialog`-Formularmethode und der "Confirm"-Button schließt den Dialog über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode.

Der "Cancel"-Button enthält das [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input/submit#formmethod)-Attribut, das die Standardmethode {{HTTPMethod("GET")}} des {{HTMLElement("form")}} überschreibt. Wenn die Methode eines Formulars [`dialog`](#verwendungsnotizen) ist, wird der Zustand des Formulars gespeichert, aber nicht übermittelt, und der Dialog wird geschlossen.

Ohne eine `action` führt die Übermittlung des Formulars über die Standardmethode {{HTTPMethod("GET")}} dazu, dass die Seite neu geladen wird. Wir verwenden JavaScript, um die Übermittlung zu verhindern und den Dialog mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) jeweils zu schließen.

Es ist wichtig, innerhalb jedes `dialog`-Elements einen Schließmechanismus bereitzustellen. Die <kbd>Esc</kbd>-Taste schließt standardmäßig keine nicht-modalen Dialoge, noch kann man davon ausgehen, dass ein Benutzer überhaupt Zugriff auf eine physische Tastatur hat (z.B. jemand, der ein Gerät mit Touchscreen ohne Zugriff auf eine Tastatur verwendet).

### Schließen eines Dialogs mit einem erforderlichen Formulareingabefeld

Wenn ein Formular innerhalb eines Dialogs ein erforderliches Eingabefeld hat, lässt der Benutzeragent das Schließen des Dialogs erst zu, wenn Sie einen Wert für das erforderliche Eingabefeld bereitstellen. Um einen solchen Dialog zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate)-Attribut auf dem Schließen-Button oder rufen die `close()`-Methode des Dialog-Objekts auf, wenn der Schließen-Button geklickt wird.

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

Aus der Ausgabe sehen wir, dass es unmöglich ist, den Dialog mit dem Normal-Schließen-Button zu schließen. Aber der Dialog kann geschlossen werden, wenn wir die Formularvalidierung mit dem `formnovalidate`-Attribut auf dem Cancel-Button umgehen. Programmatisch wird `dialog.close()` auch einen solchen Dialog schließen.

### Vergleich verschiedener `closedby`-Verhalten

Dieses Beispiel zeigt den Unterschied im Verhalten zwischen verschiedenen Werten des [`closedby`](#closedby)-Attributes.

#### HTML

Wir stellen drei {{htmlelement("button")}}-Elemente und drei `<dialog>`-Elemente bereit. Jedes Button wird so programmiert, dass es einen anderen Dialog öffnet, der das Verhalten eines der drei Werte des `closedby`-Attributes demonstriert — `none`, `closerequest` und `any`. Beachten Sie, dass jedes `<dialog>`-Element ein `<button>`-Element enthält, das zum Schließen verwendet wird.

```html live-sample___closedbyvalues
<p>Choose a <code>&lt;dialog&gt;</code> type to show:</p>
<div id="controls">
  <button id="none-btn"><code>closedby="none"</code></button>
  <button id="closerequest-btn">
    <code>closedby="closerequest"</code>
  </button>
  <button id="any-btn"><code>closedby="any"</code></button>
</div>

<dialog closedby="none">
  <h2><code>closedby="none"</code></h2>
  <p>
    Only closable using a specific provided mechanism, which in this case is
    pressing the "Close" button below.
  </p>
  <button class="close">Close</button>
</dialog>

<dialog closedby="closerequest">
  <h2><code>closedby="closerequest"</code></h2>
  <p>Closable using the "Close" button or the Esc key.</p>
  <button class="close">Close</button>
</dialog>

<dialog closedby="any">
  <h2><code>closedby="any"</code></h2>
  <p>
    Closable using the "Close" button, the Esc key, or by clicking outside the
    dialog. "Light dismiss" behavior.
  </p>
  <button class="close">Close</button>
</dialog>
```

```css hidden live-sample___closedbyvalues
body {
  font-family: sans-serif;
}

#controls {
  display: flex;
  justify-content: space-around;
}

dialog {
  width: 480px;
  border-radius: 5px;
  border-color: rgb(0 0 0 / 0.3);
}

dialog h2 {
  margin: 0;
}

dialog p {
  line-height: 1.4;
}
```

#### JavaScript

Hier weisen wir verschiedene Variablen zu, um auf die Hauptsteuerungs-`<button>`-Elemente, die `<dialog>`-Elemente und die "Close"-`<button>`-Elemente innerhalb der Dialoge zu referenzieren. Zuerst weisen wir jedem Steuerungsbutton mit [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) einen [`click`](/de/docs/Web/API/Element/click_event)-Ereignislistener zu, dessen Ereignishandlerfunktion das damit verbundene `<dialog>`-Element über [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) öffnet. Dann durchlaufen wir die "Close"-`<button>`-Referenzen und weisen jeder einen `click`-Ereignishandler zu, der das `<dialog>`-Element über [`close()`](/de/docs/Web/API/HTMLDialogElement/close) schließt.

```js live-sample___closedbyvalues
const noneBtn = document.getElementById("none-btn");
const closerequestBtn = document.getElementById("closerequest-btn");
const anyBtn = document.getElementById("any-btn");

const noneDialog = document.querySelector("[closedby='none']");
const closerequestDialog = document.querySelector("[closedby='closerequest']");
const anyDialog = document.querySelector("[closedby='any']");

const closeBtns = document.querySelectorAll(".close");

noneBtn.addEventListener("click", () => {
  noneDialog.showModal();
});

closerequestBtn.addEventListener("click", () => {
  closerequestDialog.showModal();
});

anyBtn.addEventListener("click", () => {
  anyDialog.showModal();
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.close();
  });
});
```

#### Ergebnis

Die gerenderte Ausgabe ist wie folgt:

{{EmbedLiveSample("closedby-values", "100%", 300)}}

Versuchen Sie, auf jeden Button zu klicken, um einen Dialog zu öffnen. Der erste kann nur durch Klicken auf seinen "Close"-Button geschlossen werden. Der zweite kann auch mittels einer gerätespezifischen Benutzeraktion wie dem Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Der dritte hat ein vollständiges ["light-dismiss"-Verhalten](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss), so dass er auch durch Klicken oder Tippen außerhalb des Dialogs geschlossen werden kann.

### Animieren von Dialogen

`<dialog>`s sind mit [`display: none;`](/de/docs/Web/CSS/Reference/Properties/display) versteckt und mit `display: block;` gezeigt, sowie aus dem {{Glossary("top_layer", "Top-Layer")}} und dem [Zugänglichkeit-Tree](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt/hinzugefügt. Daher muss die {{cssxref("display")}}-Eigenschaft animierbar sein, damit `<dialog>`-Elemente animiert werden. [Unterstützende Browser](/de/docs/Web/CSS/Reference/Properties/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Der Browser wechselt speziell zwischen `none` und einem anderen `display`-Wert, so dass der animierte Inhalt die gesamte Animationsdauer über sichtbar ist.

Zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert zu `block` bei `0%` der Animationsdauer, so dass er während der gesamten Dauer sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wechselt der Wert zu `none` bei `100%` der Animationsdauer, so dass er während der gesamten Dauer sichtbar ist.

> [!NOTE]
> Bei der Animation mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) gesetzt sein, um das obige Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig verfügbar, wenn mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) animiert wird; ein entsprechender Schritt ist nicht erforderlich.

#### Übergang von Dialogelementen

Beim Animieren von `<dialog>`-Elementen mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style)-At-Regel
  - : Bietet einen Satz von Anfangswerten für Eigenschaften, die auf dem `<dialog>` gesetzt sind, von denen Sie jedes Mal, wenn es geöffnet wird, übergangsweise abgeändert werden möchten. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn sich eine Eigenschaft von einem Wert zu einem anderen auf einem sichtbaren Element ändert; sie werden nicht bei den ersten Stilaktualisierungen von Elementen oder beim Ändern des `display`-Typs von `none` zu einem anderen Typ ausgelöst.
- [`display`](/de/docs/Web/CSS/Reference/Properties/display)-Eigenschaft
  - : Fügen Sie `display` der Übergangsliste hinzu, so dass das `<dialog>` während der Dauer des Übergangs als `display: block` (oder ein anderer sichtbarer `display`-Wert, der im offenen Zustand des Dialogs gesetzt ist) bleibt, um sicherzustellen, dass die anderen Übergänge sichtbar sind.
- [`overlay`](/de/docs/Web/CSS/Reference/Properties/overlay)-Eigenschaft
  - : Fügen Sie `overlay` der Übergangsliste hinzu, um sicherzustellen, dass das `<dialog>` erst aus dem Top-Layer entfernt wird, wenn der Übergang abgeschlossen ist, um sicherzustellen, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` für die Display- und Overlay-Übergänge (oder für die {{cssxref("transition")}}-Abkürzung), um diskrete Übergänge für diese beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Hier ein kurzes Beispiel, wie das aussehen könnte.

##### HTML

Das HTML enthält ein `<dialog>`-Element sowie einen Button, um den Dialog anzuzeigen. Darüber hinaus enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS fügen wir einen `@starting-style`-Block hinzu, der die Übergangsanfangsstile für die `opacity`- und `transform`-Eigenschaften definiert, Übergangsends-Stile für den `dialog:open`-Zustand und Standardstile für den Standard-`dialog`-Zustand, zu dem das `<dialog>` zurückkehrt, nachdem es angezeigt wurde. Beachten Sie, wie die Übergangsliste des `<dialog>` nicht nur diese Eigenschaften, sondern auch die Eigenschaften `display` und `overlay` enthält, wobei für jede `allow-discrete` gesetzt ist.

Wir setzen auch einen Startstilwert für die {{cssxref("background-color")}}-Eigenschaft auf dem [`::backdrop`](/de/docs/Web/CSS/Reference/Selectors/::backdrop), der hinter dem `<dialog>` erscheint, wenn es öffnet, um eine schöne Abdunklungsanimation bereitzustellen. Der `dialog:open::backdrop`-Selektor wählt nur die Hintergründe von `<dialog>`-Elementen aus, wenn der Dialog geöffnet ist.

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
  background-color: transparent;
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
    background-color: transparent;
  }
}
```

> [!NOTE]
> In Browsern, die das {{cssxref(":open")}}-Pseudoklasse nicht unterstützen, können Sie den Attribut-Selektor `dialog[open]` verwenden, um das `<dialog>`-Element zu stylen, wenn es im geöffneten Zustand ist.

##### JavaScript

Das JavaScript fügt Ereignisbehandler für die Anzeige- und Schließen-Tasten hinzu, die sie beim Klicken anzeigen und das `<dialog>` schließen lassen:

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

Der Code rendert sich wie folgt:

{{ EmbedLiveSample("Transitioning dialog elements", "100%", "200") }}

> [!NOTE]
> Da `<dialog>`-Elemente jedes Mal, wenn sie angezeigt werden, von `display: none` zu `display: block` wechseln, erfolgt der Übergang des `<dialog>` von seinen `@starting-style`-Stilen zu seinen `dialog:open`-Stilen jedes Mal, wenn der Einstiegstransition auftritt. Wenn das `<dialog>` schließt, wechselt es vom `dialog:open`-Zustand zum Standard-`dialog`-Zustand.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt in solchen Fällen unterschiedlich ist. Siehe unser [Beispiel zur Demonstration, wann Startstile verwendet werden](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Nachweis dafür.

#### Dialog Keyframe-Animationen

Beim Animieren eines `<dialog>`-Elements mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu beachten im Vergleich zu Übergängen:

- Sie bieten keinen `@starting-style` an.
- Sie fügen den `display`-Wert einem Keyframe hinzu; dies wird der `display`-Wert für die gesamte Animation oder bis ein anderer nicht `none`-Displaywert auftritt.
- Sie müssen keine diskreten Animationen explizit aktivieren; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Keyframes.
- Sie müssen `overlay` nicht innerhalb von Keyframes einstellen; die `display`-Animation behandelt die Animation des `<dialog>` vom angezeigten zum versteckten Zustand.

Schauen wir uns ein Beispiel an, damit Sie sehen können, wie das aussieht.

##### HTML

Zuerst enthält das HTML ein `<dialog>`-Element, sowie einen Button, um den Dialog anzuzeigen. Darüber hinaus enthält das `<dialog>`-Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Keyframes, um zwischen den geschlossenen und angezeigten Zuständen des `<dialog>`-Elements zu animieren, plus die Einblenden-Animation für das `<dialog>`-Backdrop. Die `<dialog>`-Animationen umfassen das Animieren von `display`, um sicherzustellen, dass die tatsächlichen sichtbaren Animationseffekte während der gesamten Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, die Ausblenden des Hintergrundes zu animieren - der Vordergrund wird sofort aus dem DOM entfernt, wenn das `<dialog>` geschlossen wird, so dass es nichts gibt, das animiert werden könnte.

```css
dialog {
  animation: fade-out 0.7s ease-out;
}

dialog:open {
  animation: fade-in 0.7s ease-out;
}

dialog:open::backdrop {
  background-color: black;
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
    opacity: 0;
  }

  100% {
    opacity: 0.25;
  }
}

body,
button {
  font-family: system-ui;
}
```

##### JavaScript

Schließlich fügt das JavaScript Ereignisbehandler für die Buttons hinzu, um das Zeigen und Schließen des `<dialog>` zu ermöglichen:

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

Der Code rendert sich wie folgt:

{{ EmbedLiveSample("dialog keyframe animations", "100%", "200") }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalt</a>,
        Abschnittswurzel
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalt</a>
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalt</a>
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

- [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)-Ereignis der `HTMLDialogElement`-Schnittstelle
- [`cancel`](/de/docs/Web/API/HTMLDialogElement/cancel_event)-Ereignis der `HTMLDialogElement`-Schnittstelle
- [`open`](/de/docs/Web/API/HTMLDialogElement/open)-Eigenschaft der `HTMLDialogElement`-Schnittstelle
- [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-globales Attribut für HTML-Elemente
- {{CSSXref("::backdrop")}} CSS-Pseudoelement
- [Web-Formulare](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
