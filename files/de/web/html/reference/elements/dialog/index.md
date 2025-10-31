---
title: "<dialog>: Das Dialog-Element"
slug: Web/HTML/Reference/Elements/dialog
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **`<dialog>`**-Element in [HTML](/de/docs/Web/HTML) repräsentiert ein modales oder nicht modales Dialogfeld oder eine andere interaktive Komponente wie eine wegklickbare Warnung, Inspektor oder ein Unterfenster.

Das HTML `<dialog>`-Element wird zur Erstellung sowohl von modalen als auch nicht modalen Dialogfeldern verwendet. Modale Dialogfelder unterbrechen die Interaktion mit dem Rest der Seite, während nicht modale Dialogfelder die Interaktion mit dem Rest der Seite erlauben.

JavaScript sollte verwendet werden, um das `<dialog>`-Element anzuzeigen. Verwenden Sie die Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), um ein modales Dialogfeld anzuzeigen, und die Methode [`.show()`](/de/docs/Web/API/HTMLDialogElement/show), um ein nicht modales Dialogfeld anzuzeigen. Das Dialogfeld kann mit der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) oder mit der [`dialog`](/de/docs/Web/HTML/Reference/Elements/form#method)-Methode geschlossen werden, wenn ein `<form>` innerhalb des `<dialog>`-Elements gesendet wird. Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf dem `<dialog>`-Element verwendet werden. Siehe [Verwendungsnotizen](#verwendungsnotizen).

- `closedby`
  - : Gibt die Arten von Benutzeraktionen an, die verwendet werden können, um das `<dialog>`-Element zu schließen. Dieses Attribut unterscheidet drei Methoden, mit denen ein Dialog geschlossen werden kann:
    - Eine _leicht wegklickbare Benutzeraktion_, bei der das `<dialog>` geschlossen wird, wenn der Benutzer außerhalb davon klickt oder tippt. Dies entspricht dem ["leicht wegklickbaren" Verhalten von "Auto"-Zustand-Popovers](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss).
    - Eine _plattform-spezifische Benutzeraktion_, wie das Drücken der <kbd>Esc</kbd>-Taste auf Desktop-Plattformen oder eine "Zurück"- oder "Schließen"-Geste auf mobilen Plattformen.
    - Ein vom Entwickler festgelegter Mechanismus wie ein {{htmlelement("button")}} mit einem [`click`](/de/docs/Web/API/Element/click_event)-Handler, der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) aufruft oder ein {{htmlelement("form")}}-Submit.

    Mögliche Werte sind:
    - `any`
      - : Der Dialog kann durch jede der drei Methoden geschlossen werden.
    - `closerequest`
      - : Der Dialog kann durch eine plattform-spezifische Benutzeraktion oder einen vom Entwickler festgelegten Mechanismus geschlossen werden.
    - `none`
      - : Der Dialog kann nur durch einen vom Entwickler festgelegten Mechanismus geschlossen werden.

    Wenn das `<dialog>`-Element keinen gültigen `closedby`-Wert angegeben hat, dann
    - verhält es sich, als wäre der Wert `"closerequest"`, wenn es mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet wurde
    - andernfalls verhält es sich, als wäre der Wert `"none"`.

- `open`
  - : Gibt an, dass das Dialogfeld aktiv ist und für Interaktionen zur Verfügung steht. Wenn das `open`-Attribut nicht gesetzt ist, wird das Dialogfeld für den Benutzer nicht sichtbar sein.
    Es wird empfohlen, die Methoden `.show()` oder `.showModal()` zu verwenden, um Dialoge anzuzeigen, anstatt das `open`-Attribut zu verwenden. Wenn ein `<dialog>` mit dem `open`-Attribut geöffnet wird, ist es nicht modal.

    > [!NOTE]
    > Während Sie zwischen den offenen und geschlossenen Zuständen von nicht modalen Dialogen durch das Umschalten der Anwesenheit des `open`-Attributs wechseln können, wird diese Vorgehensweise nicht empfohlen. Siehe [`open`](/de/docs/Web/API/HTMLDialogElement/open) für mehr Informationen.

## Verwendungsnotizen

- HTML {{HTMLElement("form")}}-Elemente können verwendet werden, um ein Dialogfeld zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der zum Senden des Formulars verwendete Button [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` über die `dialog`-Methode abgesendet wird, wird das Dialogfeld geschlossen, die Zustände der Formularsteuerungen werden gespeichert, aber nicht übermittelt, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)-Eigenschaft wird auf den Wert des aktivierten Buttons gesetzt.
- Das CSS {{cssxref('::backdrop')}}-Pseudo-Element kann verwendet werden, um den Hintergrund eines modalen Dialogs zu gestalten, der hinter dem `<dialog>`-Element angezeigt wird, wenn der Dialog mit der [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal)-Methode angezeigt wird. Zum Beispiel könnte dieses Pseudo-Element verwendet werden, um den trägen Inhalt hinter dem modalen Dialog zu verwischen, abzudunkeln oder anderweitig zu verschleiern.
- Das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut sollte dem Element hinzugefügt werden, mit dem der Benutzer sofort interagieren soll, wenn ein modaler Dialog geöffnet wird. Wenn kein anderes Element sofortige Interaktion erfordert, wird empfohlen, `autofocus` dem Schließen-Button innerhalb des Dialogs hinzuzufügen oder dem Dialog selbst, wenn erwartet wird, dass der Benutzer darauf klicken/aktivieren muss, um es zu schließen.
- Fügen Sie das `tabindex`-Attribut nicht dem `<dialog>`-Element hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Die Inhalte des Dialogs, einschließlich des im Dialog enthaltenen Schließen-Buttons, können jedoch den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Bei der Implementierung eines Dialogs ist es wichtig, den geeignetsten Ort für den Benutzerfokus zu bestimmen. Beim Öffnen eines `<dialog>` mit [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) wird der Fokus auf das erste verschachtelte fokussierbare Element gesetzt. Die explizite Angabe der anfänglichen Fokusplatzierung durch Verwendung des [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attributs hilft sicherzustellen, dass der erste Fokus auf dem Element gesetzt wird, das als bester Anfangspunkt für einen bestimmten Dialog angesehen wird. Wenn Zweifel bestehen, da es möglicherweise nicht immer bekannt ist, wo der erste Fokus innerhalb eines Dialogs gesetzt werden könnte, insbesondere in Fällen, in denen der Inhalt eines Dialogs beim Aufruf dynamisch gerendert wird, könnte das `<dialog>`-Element selbst die beste Anfangsfokusplatzierung bieten.

Stellen Sie sicher, dass eine Möglichkeit bereitgestellt wird, um es den Benutzern zu ermöglichen, den Dialog zu schließen. Der robusteste Weg, um sicherzustellen, dass alle Benutzer den Dialog schließen können, besteht darin, einen expliziten Button zum Schließen einzufügen, wie z. B. einen Bestätigungs-, Abbruchs- oder Schließen-Button.

Standardmäßig kann ein Dialog, der durch die `showModal()`-Methode aufgerufen wird, durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Ein nicht modaler Dialog wird standardmäßig nicht über die <kbd>Esc</kbd>-Taste geschlossen und je nachdem, was der nicht modale Dialog darstellt, könnte dieses Verhalten nicht gewünscht sein. Tastaturbenutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und beibehalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte das Drücken der <kbd>Esc</kbd>-Taste nur den zuletzt angezeigten Dialog schließen. Beim Verwenden von `<dialog>` wird dieses Verhalten vom Browser bereitgestellt.

Während Dialoge mit anderen Elementen erstellt werden können, bietet das native `<dialog>`-Element Nutzbarkeits- und Barrierefreiheitsfunktionen, die repliziert werden müssen, wenn andere Elemente für einen ähnlichen Zweck verwendet werden. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhaltensweisen unterstützt und die richtigen Beschriftungsempfehlungen befolgt werden.

Das `<dialog>`-Element wird von Browsern ähnlich wie benutzerdefinierte Dialoge gehandhabt, die das ARIA-Attribut [role="dialog"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) verwenden. `<dialog>`-Elemente, die durch die `showModal()`-Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), während `<dialog>`-Elemente, die durch die `show()`-Methode aufgerufen werden oder mit dem `open`-Attribut angezeigt werden, als `[aria-modal="false"]` gehandhabt werden. Beim Implementieren von modalen Dialogen sollte alles außer dem `<dialog>` und dessen Inhalt mittels des [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attributs träge gemacht werden. Wenn `<dialog>` zusammen mit der `HTMLDialogElement.showModal()`-Methode verwendet wird, wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### Nur-HTML-Dialog

Dieses Beispiel zeigt die Erstellung eines nicht modalen Dialogs nur mit HTML. Aufgrund des booleschen `open`-Attributs im `<dialog>`-Element erscheint der Dialog beim Laden der Seite geöffnet. Der Dialog kann durch Klicken auf die "OK"-Schaltfläche geschlossen werden, weil das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist. In diesem Fall ist kein JavaScript erforderlich, um das Formular zu schließen.

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

Dieser Dialog ist anfänglich geöffnet aufgrund des Vorhandenseins des `open`-Attributs. Dialoge, die mit dem `open`-Attribut angezeigt werden, sind nicht modal. Nach dem Klicken auf "OK" wird der Dialog geschlossen, und der Ergebnisrahmen ist leer. Wenn der Dialog geschlossen wird, gibt es keine Methode, um ihn erneut zu öffnen. Aus diesem Grund ist die bevorzugte Methode zum Anzeigen nicht modaler Dialoge die Verwendung der Methode [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show). Es ist möglich, die Anzeige des Dialogs zu toggeln, indem das boolesche `open`-Attribut hinzugefügt oder entfernt wird, aber es wird nicht als empfohlene Praxis angesehen.

### Erstellen eines modalen Dialogs

Dieses Beispiel zeigt einen modalen Dialog mit einem [Gradienten](/de/docs/Web/CSS/gradient) als Hintergrund. Die `.showModal()`-Methode öffnet den modalen Dialog, wenn die "Show the dialog"-Taste aktiviert wird. Der Dialog kann durch Drücken der <kbd>Esc</kbd>-Taste oder mit der `close()`-Methode geschlossen werden, wenn die "Close"-Taste innerhalb des Dialogs aktiviert wird.

Wenn ein Dialog geöffnet wird, fokussiert der Browser standardmäßig das erste Element, das innerhalb des Dialogs fokussiert werden kann. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut auf die "Close"-Taste angewendet, wodurch es fokussiert wird, wenn der Dialog geöffnet wird, da dies das Element ist, mit dem der Benutzer unmittelbar nach dem Öffnen des Dialogs interagieren soll.

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

Der Dialog wird modal mit der Methode `.showModal()` geöffnet und mit den Methoden `.close()` oder `.requestClose()` geschlossen.

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

Wenn der modale Dialog angezeigt wird, erscheint er über allen anderen eventuell vorhandenen Dialogen. Alles außerhalb des modalen Dialogs ist träge, und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass, wenn der Dialog geöffnet ist, mit Ausnahme des Dialogs selbst, eine Interaktion mit dem Dokument nicht möglich ist; die "Show the dialog"-Taste ist größtenteils durch den fast opaken Hintergrund des Dialogs verdeckt und ist träge.

### Umgang mit dem Rückgabewert des Dialogs

Dieses Beispiel zeigt den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie man einen modalen Dialog durch ein Formular schließt. Standardmäßig ist der `returnValue` der leere String oder der Wert der Schaltfläche, die das Formular innerhalb des `<dialog>`-Elements übermittelt, sofern vorhanden.

In diesem Beispiel öffnet sich ein modaler Dialog, wenn die "Show the dialog"-Taste aktiviert wird. Der Dialog enthält ein Formular mit einem {{HTMLElement("select")}} und zwei {{HTMLElement("button")}}-Elementen, die standardmäßig `type="submit"` sind. Ein Event-Listener aktualisiert den Wert der "Confirm"-Taste, wenn sich die Auswahloption ändert. Wenn die "Confirm"-Taste aktiviert wird, um den Dialog zu schließen, ist der aktuelle Wert der Taste der Rückgabewert. Wenn der Dialog durch Drücken der "Cancel"-Taste geschlossen wird, ist der `returnValue` `cancel`.

Wenn der Dialog geschlossen wird, wird der Rückgabewert unterhalb der "Show the dialog"-Taste angezeigt. Wenn der Dialog durch das Drücken der <kbd>Esc</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert, und das `close`-Event tritt nicht ein, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

- Durch das Übermitteln des Formulars innerhalb des Dialogformulars mithilfe der `dialog`-Methode (wie im [Nur-HTML-Beispiel](#nur-html-dialog)).
- Durch Drücken der <kbd>Esc</kbd>-Taste.
- Durch Aufruf der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode (wie im [Modalen Beispiel](#erstellen_eines_modalen_dialogs)).
  In diesem Beispiel schließt die "Cancel"-Taste den Dialog über die `dialog`-Formularmethode, und die "Confirm"-Taste schließt den Dialog über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode.

Die "Cancel"-Taste enthält das [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input/submit#formmethod)-Attribut, das die Standard-{{HTTPMethod("GET")}}-Methode des {{HTMLElement("form")}} überschreibt. Wenn die Methode eines Formulars [`dialog`](#verwendungsnotizen) ist, wird der Zustand des Formulars gespeichert, aber nicht übermittelt, und der Dialog wird geschlossen.

Ohne eine `action`-Anweisung führt das Übermitteln des Formulars über die Standard-{{HTTPMethod("GET")}}-Methode zum Neuladen der Seite. Wir verwenden JavaScript, um die Übermittlung zu verhindern, und schließen den Dialog mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close).

Es ist wichtig, einen Schließmechanismus innerhalb jedes `dialog`-Elements bereitzustellen. Die <kbd>Esc</kbd>-Taste schließt nicht standardmäßig nicht modale Dialoge, noch kann man davon ausgehen, dass ein Benutzer Zugriff auf eine physische Tastatur hat (zum Beispiel jemand, der ein Touchscreen-Gerät ohne Tastaturzugang verwendet).

### Schließen eines Dialogs mit einer erforderlichen Formulareingabe

Wenn ein Formular innerhalb eines Dialogs eine erforderliche Eingabe hat, lässt der Benutzeragent das Schließen des Dialogs nur zu, wenn Sie einen Wert für die erforderliche Eingabe angeben. Um einen solchen Dialog zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate)-Attribut auf der Schließen-Taste oder rufen Sie die `close()`-Methode auf dem Dialog-Objekt auf, wenn die Schließen-Taste geklickt wird.

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

Aus der Ausgabe sehen wir, dass es unmöglich ist, den Dialog mit der _Normal close_-Taste zu schließen. Der Dialog kann jedoch geschlossen werden, wenn wir die Formularvalidierung über das `formnovalidate`-Attribut auf der _Cancel_-Taste umgehen. Programmatisch wird `dialog.close()` auch einen solchen Dialog schließen.

### Vergleich verschiedener `closedby`-Verhalten

Dieses Beispiel zeigt den Unterschied im Verhalten zwischen verschiedenen Werten des [`closedby`](#closedby)-Attributs.

#### HTML

Wir stellen drei {{htmlelement("button")}}-Elemente und drei `<dialog>`-Elemente zur Verfügung. Jeder Button wird programmiert, um einen anderen Dialog zu öffnen, der das Verhalten eines der drei Werte des `closedby`-Attributs demonstriert — `none`, `closerequest` und `any`. Beachten Sie, dass jedes `<dialog>`-Element ein `<button>`-Element enthält, das verwendet wird, um es zu schließen.

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

Hierzu weisen wir verschiedenen Variablen zu, um die Haupt-Steuerungs-`<button>`-Elemente, die `<dialog>`-Elemente und die "Close"-`<button>`-Elemente innerhalb der Dialoge zu referenzieren. Zuerst weisen wir jedem Steuerungsknopf einen [`click`](/de/docs/Web/API/Element/click_event)-Event-Listener mit [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) zu, dessen Event-Handler-Funktion das assoziierte `<dialog>`-Element über [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) öffnet. Dann durchlaufen wir die "Close"-`<button>`-Referenzen und weisen jede einen `click`-Event-Handler-Funktion zu, die ihr `<dialog>`-Element über [`close()`](/de/docs/Web/API/HTMLDialogElement/close) schließt.

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

Das gerenderte Ergebnis ist wie folgt:

{{EmbedLiveSample("closedby-values", "100%", 300)}}

Versuchen Sie, auf jeden Button zu klicken, um einen Dialog zu öffnen. Der erste kann nur durch Klicken auf seine "Close"-Taste geschlossen werden. Der zweite kann auch durch eine gerätespezifische Benutzeraktion wie das Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Der dritte hat ein vollständiges ["leicht-wegklickbares Verhalten"](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss), sodass es auch durch Klicken oder Tippen außerhalb des Dialogs geschlossen werden kann.

### Animieren von Dialogen

`<dialog>`-Elemente sind auf [`display: none;`](/de/docs/Web/CSS/Reference/Properties/display) gesetzt, wenn sie versteckt sind, und `display: block;` wenn sie gezeigt werden, und werden ebenso aus der / in die {{Glossary("top_layer", "Top-Layer")}} und den [Barrierefreiheitsbaum](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt / hinzugefügt. Daher muss für `<dialog>`-Elemente, die animiert werden sollen, die {{cssxref("display")}}-Eigenschaft animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/Reference/Properties/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Speziell wird der Browser zwischen `none` und einem anderen Wert von `display` umschalten, sodass der animierte Inhalt die gesamte Animationsdauer angezeigt wird.

Einige Beispiele:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wird der Wert zu `block` bei `0%` der Animationsdauer umgeschaltet, damit er die ganze Zeit sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none` wird der Wert zu `none` bei `100%` der Animationsdauer umgeschaltet, sodass er die ganze Zeit sichtbar ist.

> [!NOTE]
> Beim Animieren mit [CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) gesetzt sein, um das oben beschriebene Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig verfügbar, wenn mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) animiert wird; ein gleichwertiger Schritt ist nicht erforderlich.

#### Übergangs-Dialog-Elemente

Beim Animieren von `<dialog>`-Elementen mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) at-rule
  - : Stellt ein Set von Anfangswerten für Eigenschaften bereit, die beim `<dialog>` gesetzt sind und von denen Sie möchten, dass sie sich jedes Mal ändern, wenn es geöffnet wird. Dies ist erforderlich, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn eine Eigenschaft ihren Wert bei einem sichtbaren Element ändert; sie werden nicht bei den ersten Stilaktualisierungen der Elemente oder beim Wechsel des `display`-Typs von `none` zu einem anderen Typ ausgelöst.
- [`display`](/de/docs/Web/CSS/Reference/Properties/display) property
  - : Fügen Sie `display` zur Übergangsliste hinzu, sodass das `<dialog>` für die Dauer des Übergangs als `display: block` (oder ein anderer sichtbarer `display`-Wert, der im offenen Zustand des Dialogs gesetzt ist) verbleibt und die anderen Übergänge sichtbar sind.
- [`overlay`](/de/docs/Web/CSS/Reference/Properties/overlay) property
  - : Schließen Sie `overlay` zur Übergangsliste ein, um sicherzustellen, dass die Entfernung des `<dialog>` aus der obersten Ebene bis zum Abschluss des Übergangs zurückgestellt wird, wodurch erneut sichergestellt wird, dass der Übergang sichtbar ist.
- {{cssxref("transition-behavior")}} property
  - : Setzen Sie `transition-behavior: allow-discrete` auf den `display`- und `overlay`-Übergängen (oder auf die {{cssxref("transition")}}-Kurznotation), um diskrete Übergänge bei diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Hier ist ein kurzes Beispiel, um zu zeigen, wie das aussehen könnte.

##### HTML

Das HTML enthält ein `<dialog>`-Element sowie eine Taste, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element eine weitere Taste, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS fügen wir einen `@starting-style`-Block hinzu, der die Übergangsanfangsstile für die `opacity`- und `transform`-Eigenschaften definiert, Übergangsendstile im `dialog:open`-Zustand und die Standardstile im Standard `dialog`-Zustand, zu denen zurückgekehrt werden soll, sobald das `<dialog>` erschienen ist. Beachten Sie, wie die `transition`-Liste des `<dialog>` nicht nur diese Eigenschaften enthält, sondern auch die `display`- und `overlay`-Eigenschaften, wobei jeweils `allow-discrete` auf ihnen gesetzt ist.

Wir setzen auch einen Anfangsstilwert für die {{cssxref("background-color")}}-Eigenschaft auf dem [`::backdrop`](/de/docs/Web/CSS/::backdrop), der hinter dem `<dialog>` erscheint, wenn es öffnet, um eine schöne Abdunklungsanimation bereitzustellen. Der `dialog:open::backdrop`-Selektor wählt nur die Hintergründe von `<dialog>`-Elementen aus, wenn der Dialog geöffnet ist.

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
> In Browsern, die die {{cssxref(":open")}}-Pseudoklasse nicht unterstützen, können Sie den Attributselektor `dialog[open]` verwenden, um das `<dialog>`-Element im offenen Zustand zu stylen.

##### JavaScript

Das JavaScript fügt den Anzeige- und Schließen-Tasten Ereignis-Handler hinzu, die sie dazu bringen, das `<dialog>` zu zeigen und zu schließen, wenn sie geklickt werden:

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

Der Code wird wie folgt angezeigt:

{{ EmbedLiveSample("Transitioning dialog elements", "100%", "200") }}

> [!NOTE]
> Da `<dialog>`-Elemente jedes Mal von `display: none` zu `display: block` wechseln, wenn sie angezeigt werden, erfolgen Übergänge beim `<dialog>` jedes Mal beim Eintrittsübergang von seinem `@starting-style`-Stil zu seinen `dialog:open`-Stilen. Wenn das `<dialog>` schließt, wechselt es von seinem `dialog:open`-Zustand zurück in den Standard-`dialog`-Zustand.
>
> In solchen Fällen ist es möglich, dass Stilübergänge beim Eintritt und beim Austritt unterschiedlich sind. Siehe unser [Beispiel zur Demonstration, wann Startstile verwendet werden](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Beweis dafür.

#### Dialog-Keyframe-Animationen

Beim Animieren eines `<dialog>`-Elements mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu beachten:

- Sie bieten keinen `@starting-style`.
- Sie fügen den `display`-Wert in einem Keyframe hinzu; dies wird der `display`-Wert für die gesamte Dauer der Animation sein oder bis ein anderer `display`-Wert als `none` auftritt.
- Sie müssen diskrete Animationen nicht explizit aktivieren; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Keyframes.
- Sie müssen `overlay` nicht innerhalb von Keyframes festlegen; die `display`-Animation steuert die Animation des `<dialog>` von angezeigt zu verborgen.

Lassen Sie uns ein Beispiel ansehen, damit Sie sehen können, wie das aussieht.

##### HTML

Zunächst enthält das HTML ein `<dialog>`-Element sowie eine Taste, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element eine weitere Taste, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Keyframes, um zwischen den geschlossenen und angezeigten Zuständen des `<dialog>` zu animieren, sowie die Einblendungsanimation für den Hintergrund des `<dialog>`. Die `<dialog>`-Animationen umfassen das Animieren von `display`, um sicherzustellen, dass die tatsächlich sichtbaren Animationseffekte die gesamte Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, die Ausblendung des Hintergrunds zu animieren — der Hintergrund wird sofort aus dem DOM entfernt, wenn das `<dialog>` geschlossen wird, sodass nichts zu animieren ist.

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

Schließlich fügt das JavaScript den Tasten Ereignis-Handler hinzu, um das `<dialog>` anzuzeigen und zu schließen:

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

Der Code wird wie folgt angezeigt:

{{ EmbedLiveSample("dialog keyframe animations", "100%", "200") }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließende Inhalte</a>,
        Wurzel der Abschnittsstruktur
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließende Inhalte</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">fließende Inhalte</a> akzeptiert
      </td>
    </tr>
    <tr>
      <th scope="row">Impliziertes ARIA-Rolle</th>
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
- [`open`](/de/docs/Web/API/HTMLDialogElement/open) Eigenschaft der `HTMLDialogElement`-Schnittstelle
- [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert) globales Attribut für HTML-Elemente
- {{CSSXref("::backdrop")}} CSS-Pseudo-Element
- [Web-Formulare](/de/docs/Learn_web_development/Extensions/Forms) im Lernbereich
