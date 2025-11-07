---
title: "<dialog>: Das Dialog-Element"
slug: Web/HTML/Reference/Elements/dialog
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`<dialog>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert ein modales oder nicht modales Dialogfeld oder andere interaktive Komponenten, wie zum Beispiel eine abweisbare Warnung, einen Inspektor oder ein Unterfenster.

Das HTML-Element `<dialog>` wird verwendet, um sowohl modale als auch nicht modale Dialogfelder zu erstellen. Modale Dialogfelder unterbrechen die Interaktion mit dem Rest der Seite, während nicht modale Dialogfelder die Interaktion mit dem Rest der Seite ermöglichen.

JavaScript sollte verwendet werden, um das `<dialog>`-Element anzuzeigen. Verwenden Sie die Methode [`.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal), um ein modales Dialogfeld anzuzeigen, und die Methode [`.show()`](/de/docs/Web/API/HTMLDialogElement/show), um ein nicht modales Dialogfeld anzuzeigen. Das Dialogfeld kann mit der Methode [`.close()`](/de/docs/Web/API/HTMLDialogElement/close) geschlossen werden oder mit der [`dialog`](/de/docs/Web/HTML/Reference/Elements/form#method)-Methode, wenn ein `<form>` innerhalb des `<dialog>`-Elements übermittelt wird. Modale Dialoge können auch geschlossen werden, indem die <kbd>Esc</kbd>-Taste gedrückt wird.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf dem `<dialog>`-Element verwendet werden. Siehe [Verwendungsnotizen](#verwendungsnotizen).

- `closedby`

  - : Gibt die Arten von Benutzeraktionen an, die verwendet werden können, um das `<dialog>`-Element zu schließen. Dieses Attribut unterscheidet drei Methoden, mit denen ein Dialog geschlossen werden kann:

    - Eine _Light-Dismiss-Benutzeraktion_, bei der das `<dialog>` geschlossen wird, wenn der Benutzer außerhalb klickt oder tippt. Dies entspricht dem ["Light-Dismiss"-Verhalten von "auto"-Zustand Popovers](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss).
    - Eine _Plattform-spezifische Benutzeraktion_, wie das Drücken der <kbd>Esc</kbd>-Taste auf Desktop-Plattformen oder eine "Zurück"- oder "Abschließen"-Geste auf mobilen Plattformen.
    - Ein vom Entwickler spezifizierter Mechanismus, wie ein {{htmlelement("button")}} mit einem [`click`](/de/docs/Web/API/Element/click_event)-Handler, der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) aufruft, oder eine {{htmlelement("form")}}-Übermittlung.

    Mögliche Werte sind:

    - `any`
      - : Der Dialog kann mit jeder der drei Methoden geschlossen werden.
    - `closerequest`
      - : Der Dialog kann mit einer plattform-spezifischen Benutzeraktion oder einem vom Entwickler spezifizierten Mechanismus geschlossen werden.
    - `none`
      - : Der Dialog kann nur mit einem vom Entwickler spezifizierten Mechanismus geschlossen werden.

    Wenn das `<dialog>`-Element keinen gültigen `closedby`-Wert hat, dann

    - wenn es mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) geöffnet wurde, verhält es sich, als ob der Wert `"closerequest"` wäre
    - andernfalls verhält es sich, als ob der Wert `"none"` wäre.

- `open`

  - : Zeigt an, dass das Dialogfeld aktiv und für die Interaktion verfügbar ist. Wenn das `open`-Attribut nicht gesetzt ist, wird das Dialogfeld dem Benutzer nicht sichtbar angezeigt.
    Es wird empfohlen, die Methode `.show()` oder `.showModal()` zu verwenden, um Dialoge darzustellen, anstatt des `open`-Attributs. Wenn ein `<dialog>` mit dem `open`-Attribut geöffnet wird, ist es nicht-modal.

    > [!NOTE]
    > Während Sie zwischen den offenen und geschlossenen Zuständen nicht modaler Dialogfelder wechseln können, indem Sie das Vorhandensein des `open`-Attributs umschalten, wird diese Vorgehensweise nicht empfohlen. Siehe [`open`](/de/docs/Web/API/HTMLDialogElement/open) für mehr Informationen.

## Verwendungsnotizen

- HTML-{{HTMLElement("form")}}-Elemente können verwendet werden, um ein Dialogfeld zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der Knopf, der das Formular übermittelt, [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` via der Methode `dialog` übermittelt wird, schließt das Dialogfeld, die Zustände der Formularsteuerungen werden gespeichert, aber nicht übermittelt, und die [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue)-Eigenschaft wird auf den Wert des aktivierten Knopfes gesetzt.
- Das CSS-{{cssxref('::backdrop')}}-Pseudo-Element kann verwendet werden, um den Hintergrund eines modalen Dialogs zu stylen, der hinter dem `<dialog>`-Element angezeigt wird, wenn das Dialogfeld mit der Methode [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) angezeigt wird. Beispielsweise könnte dieses Pseudo-Element verwendet werden, um den trägen Inhalt hinter dem modalen Dialog zu verwischen, abzudunkeln oder anderweitig zu verschleiern.
- Das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut sollte zu dem Element hinzugefügt werden, mit dem der Benutzer unmittelbar interagieren soll, sobald ein modales Dialogfeld geöffnet wird. Wenn kein anderes Element eine unmittelbarere Interaktion erfordert, wird empfohlen, `autofocus` dem Schließen-Knopf innerhalb des Dialogs hinzuzufügen, oder dem Dialog selbst, wenn erwartet wird, dass der Benutzer darauf klickt/aktiviert, um es zu schließen.
- Fügen Sie dem `<dialog>`-Element nicht die Eigenschaft `tabindex` hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Der Inhalt des Dialogs, einschließlich des im Dialog enthaltenen Schließen-Knopfes, kann den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Beim Implementieren eines Dialogs ist es wichtig, den am besten geeigneten Ort für das Setzen des Benutzerfokus zu berücksichtigen. Beim Öffnen eines `<dialog>` mittels [`HTMLDialogElement.showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) wird der Fokus auf das erste verschachtelte fokussierbare Element gesetzt. Durch das explizite Angeben der anfänglichen Fokus-Platzierung mit dem [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut wird sichergestellt, dass der anfängliche Fokus auf dem Element gesetzt wird, das als die beste anfängliche Fokus-Platzierung für jeden bestimmten Dialog erachtet wird. Wenn Zweifel bestehen, da es möglicherweise nicht immer bekannt ist, wo der anfängliche Fokus innerhalb eines Dialogs gesetzt werden könnte, insbesondere in Fällen, in denen der Inhalt eines Dialogs dynamisch gerendert wird, wenn er aufgerufen wird, könnte das `<dialog>`-Element selbst die beste anfängliche Fokus-Platzierung bieten.

Stellen Sie sicher, dass eine Mechanismus bereitgestellt wird, um Benutzern das Schließen des Dialogs zu ermöglichen. Der robusteste Weg, um sicherzustellen, dass alle Benutzer das Dialogfeld schließen können, ist das Einfügen eines expliziten Schalters, um dies zu tun, wie zum Beispiel eines Bestätigungs-, Abbruchs- oder Schließen-Knopfs.

Standardmäßig kann ein Dialog, der durch die Methode `showModal()` aufgerufen wird, durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Ein nicht-modales Dialogfeld wird standardmäßig nicht über die <kbd>Esc</kbd>-Taste geschlossen, und abhängig davon, was das nicht-modale Dialogfeld repräsentiert, könnte es nicht erwünscht sein, dieses Verhalten zu haben. Tastaturbenutzer erwarten, dass die <kbd>Esc</kbd>-Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und beibehalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte das Drücken der <kbd>Esc</kbd>-Taste nur den zuletzt angezeigten Dialog schließen. Bei Verwendung von `<dialog>` wird dieses Verhalten vom Browser bereitgestellt.

Obwohl Dialoge mit anderen Elementen erstellt werden können, bietet das native `<dialog>`-Element Benutzerfreundlichkeits- und Barrierefreiheitsfunktionen, die repliziert werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck verwenden. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, stellen Sie sicher, dass alle erwarteten Standardverhalten unterstützt werden und dass die richtigen Beschriftungsempfehlungen beachtet werden.

Das `<dialog>`-Element wird von Browsern in einer Weise bereitgestellt, die ähnlich zu benutzerdefinierten Dialogen ist, die das ARIA [role="dialog"](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)-Attribut verwenden. `<dialog>`-Elemente, die durch die Methode `showModal()` aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), während `<dialog>`-Elemente, die durch die Methode `show()` oder durch das `open`-Attribut oder indem das Standardverhalten `display` eines `<dialog>` geändert wird, als `[aria-modal="false"]` bereitgestellt werden. Bei der Implementierung von modalen Dialogen sollte alles außer dem `<dialog>` und dessen Inhalten träge gemacht werden, indem das [`inert`](/de/docs/Web/HTML/Reference/Global_attributes/inert)-Attribut verwendet wird. Wenn `<dialog>` zusammen mit der Methode `HTMLDialogElement.showModal()` verwendet wird, wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### Dialog nur mit HTML

Dieses Beispiel zeigt die Erstellung eines nicht-modalen Dialogs ausschließlich mit HTML. Aufgrund des booleschen `open`-Attributs im `<dialog>`-Element erscheint das Dialogfeld offen, wenn die Seite geladen wird. Das Dialogfeld kann durch Klicken auf den "OK"-Knopf geschlossen werden, da das `method`-Attribut im `<form>`-Element auf `"dialog"` gesetzt ist. In diesem Fall ist kein JavaScript erforderlich, um das Formular zu schließen.

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

Dieses Dialogfeld ist zunächst wegen des Vorhandenseins des `open`-Attributs geöffnet. Dialoge, die mit dem `open`-Attribut angezeigt werden, sind nicht modal. Nach dem Klicken auf "OK" wird das Dialogfeld geschlossen, wodurch der Ergebnisbereich leer bleibt. Wenn das Dialogfeld geschlossen wird, gibt es keine Methode, um es erneut zu öffnen. Aus diesem Grund wird die bevorzugte Methode zur Anzeige nicht-modaler Dialoge durch die Verwendung der Methode [`HTMLDialogElement.show()`](/de/docs/Web/API/HTMLDialogElement/show) dargestellt. Es ist möglich, die Anzeige des Dialogfelds zu wechseln, indem das boolesche `open`-Attribut hinzugefügt oder entfernt wird, aber das ist nicht die empfohlene Praxis.

### Ein modales Dialogfeld erstellen

Dieses Beispiel zeigt ein modales Dialogfeld mit einem [Verlauf](/de/docs/Web/CSS/Reference/Values/gradient) als Hintergrund. Die Methode `.showModal()` öffnet das modale Dialogfeld, wenn der "Show the dialog" Button aktiviert wird. Das Dialogfeld kann mit der <kbd>Esc</kbd>-Taste oder mit der `close()`-Methode geschlossen werden, wenn der "Close"-Knopf innerhalb des Dialogfelds aktiviert wird.

Wenn ein Dialog geöffnet wird, setzt der Browser standardmäßig den Fokus auf das erste Element, das innerhalb des Dialogs fokussiert werden kann. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut auf den "Close" Button angewendet, sodass dieser den Fokus erhält, wenn das Dialogfeld geöffnet wird, da dies das Element ist, mit dem der Benutzer erwartet wird, unmittelbar nach dem Öffnen des Dialogfelds interagieren zu wollen.

#### HTML

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a groovy backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

Wir können den Hintergrund des Dialogfelds mit dem {{cssxref('::backdrop')}} Pseudo-Element stylen.

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

Wenn das modale Dialogfeld angezeigt wird, erscheint es über allen anderen Dialogen, die möglicherweise vorhanden sind. Alles außerhalb des modalen Dialogfelds ist träge, und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass bei geöffnetem Dialog, mit Ausnahme des Dialogs selbst, keine Interaktion mit dem Dokument möglich ist; der "Show the dialog" Button wird meist durch den fast undurchsichtigen Hintergrund des Dialogs verdeckt und ist träge.

### Umgang mit dem Rückgabewert des Dialogs

Dieses Beispiel zeigt den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>`-Elements und wie man ein modales Dialogfeld mit einem Formular schließen kann. Standardmäßig ist der `returnValue` der leere String oder der Wert des Knopfes, der das Formular innerhalb des `<dialog>`-Elements übermittelt, falls vorhanden.

Dieses Beispiel öffnet ein modales Dialogfeld, wenn der "Show the dialog" Button aktiviert wird. Das Dialog enthält ein Formular mit einer {{HTMLElement("select")}} und zwei {{HTMLElement("button")}} Elementen, die standardmäßig auf `type="submit"` gesetzt sind. Ein Ereignis-Listener aktualisiert den Wert des "Confirm"-Knopfs, wenn die Auswahloption geändert wird. Wenn der "Confirm"-Knopf aktiviert wird, um das Dialogfeld zu schließen, ist der aktuelle Wert des Knopfes der Rückgabewert. Wenn das Dialogfeld durch Drücken des "Cancel"-Knopfs geschlossen wird, ist der `returnValue` `cancel`.

Wenn das Dialogfeld geschlossen wird, wird der Rückgabewert unter dem "Show the dialog" Button angezeigt. Wenn das Dialogfeld durch Drücken der <kbd>Esc</kbd>-Taste geschlossen wird, wird der `returnValue` nicht aktualisiert und das `close`-Ereignis tritt nicht auf, sodass der Text im {{HTMLElement("output")}} nicht aktualisiert wird.

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

Die obigen Beispiele zeigen die folgenden drei Methoden zum Schließen von modalen Dialogen:

- Durch Übermitteln des Formulars innerhalb des Dialogformulars mit der Methode `dialog` (wie im [HTML-only-Beispiel](#dialog_nur_mit_html) gezeigt).
- Durch Drücken der <kbd>Esc</kbd>-Taste.
- Durch Aufrufen der [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode (wie im [modalen Beispiel](#ein_modales_dialogfeld_erstellen) gezeigt).
  In diesem Beispiel schließt der "Cancel"-Knopf das Dialogfeld über die `dialog`-Formularmethode und der "Confirm"-Knopf schließt das Dialogfeld über die [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close)-Methode.

Der "Cancel"-Knopf enthält das [`formmethod="dialog"`](/de/docs/Web/HTML/Reference/Elements/input/submit#formmethod)-Attribut, welches die Standard-{{HTTPMethod("GET")}}-Methode des {{HTMLElement("form")}}-Elements überschriebt. Wenn die Methode eines Formulars [`dialog`](#verwendungsnotizen) ist, wird der Zustand des Formulars gespeichert, aber nicht übermittelt, und das Dialogfeld wird geschlossen.

Ohne eine `action` verursacht das Übermitteln des Formulars mit der Standard-{{HTTPMethod("GET")}}-Methode einen Seiten-Reload. Wir verwenden JavaScript, um die Übermittlung zu verhindern und das Dialogfeld mit den Methoden [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`HTMLDialogElement.close()`](/de/docs/Web/API/HTMLDialogElement/close) zu schließen.

Es ist wichtig, in jedem `dialog`-Element einen Schließmechanismus bereitzustellen. Die <kbd>Esc</kbd>-Taste schließt nicht standardmäßig nicht-modale Dialoge, noch kann man davon ausgehen, dass ein Benutzer überhaupt Zugriff auf eine physische Tastatur hat (z.B. jemand, der ein Touchscreen-Gerät ohne Zugriff auf eine Tastatur verwendet).

### Schließen eines Dialogs mit einer erforderlichen Formulareingabe

Wenn ein Formular innerhalb eines Dialogs eine erforderliche Eingabe hat, lässt der Benutzeragent das Schließen des Dialogs erst zu, wenn Sie einen Wert für die erforderliche Eingabe bereitstellen. Um ein solches Dialogfeld zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate)-Attribut auf dem Schließen-Knopf oder rufen die `close()`-Methode auf dem Dialogobjekt auf, wenn der Schließen-Knopf geklickt wird.

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

Aus der Ausgabe sehen wir, dass es mit dem _Normal close_-Knopf nicht möglich ist, das Dialogfeld zu schließen. Aber das Dialogfeld kann geschlossen werden, wenn wir die Formularüberprüfung mit dem `formnovalidate`-Attribut des _Cancel_-Knopfs umgehen. Programmgesteuert wird `dialog.close()` ebenfalls solch ein Dialogfeld schließen.

### Vergleich unterschiedlicher `closedby`-Verhaltensweisen

Dieses Beispiel zeigt den Unterschied im Verhalten zwischen verschiedenen Werten des [`closedby`](#closedby)-Attributs.

#### HTML

Wir stellen drei {{htmlelement("button")}}-Elemente und drei `<dialog>`-Elemente bereit. Jeder Knopf wird programmiert, um ein anderes Dialog zu öffnen, das das Verhalten eines der drei Werte des `closedby`-Attributs demonstriert — `none`, `closerequest` und `any`. Beachten Sie, dass jedes `<dialog>`-Element ein `<button>`-Element enthält, das verwendet wird, um es zu schließen.

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

Hier weisen wir verschiedene Variablen zu, um die Hauptsteuerungs-`<button>`-Elemente, die `<dialog>`-Elemente und die "Close"-`<button>`-Elemente innerhalb der Dialoge zu verweisen. Zuerst weisen wir jedem Steuerungs-Button mit [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) einen [`click`](/de/docs/Web/API/Element/click_event)-Ereignis-Listener zu, dessen Ereignis-Handler-Funktion das zugehörige `<dialog>`-Element über [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) öffnet. Dann durchlaufen wir die "Close"-`<button>`-Referenzen und weisen jedem einen `click`-Ereignis-Handler zu, der sein `<dialog>`-Element über [`close()`](/de/docs/Web/API/HTMLDialogElement/close) schließt.

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

Das gerenderte Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("closedby-values", "100%", 300)}}

Versuchen Sie, auf jeden Button zu klicken, um ein Dialog zu öffnen. Das erste kann nur durch Klicken auf den "Close"-Button geschlossen werden. Das zweite kann auch über eine gerätespezifische Benutzeraktion wie das Drücken der <kbd>Esc</kbd>-Taste geschlossen werden. Das dritte hat das volle ["Light-Dismiss"-Verhalten](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) und kann daher auch durch Klicken oder Tippen außerhalb des Dialogs geschlossen werden.

### Animation von Dialogen

`<dialog>`-Elemente sind auf [`display: none;`](/de/docs/Web/CSS/Reference/Properties/display) gesetzt, wenn sie verborgen sind, und `display: block;`, wenn sie angezeigt werden, sowie aus der bzw. in die {{Glossary("top_layer", "top layer")}} und den [accessibility tree](/de/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree) entfernt sowie hinzugefügt. Daher muss das {{cssxref("display")}}-Eigenschaft animierbar sein, damit `<dialog>`-Elemente animiert werden können. [Unterstützende Browser](/de/docs/Web/CSS/Reference/Properties/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete). Insbesondere wechselt der Browser zwischen `none` und einem anderen Wert von `display`, sodass die animierten Inhalte während der gesamten Animationsdauer sichtbar sind.

So zum Beispiel:

- Beim Animieren von `display` von `none` zu `block` (oder einem anderen sichtbaren `display`-Wert) wechselt der Wert bei `0%` der Animationsdauer zu `block`, damit er vollständig sichtbar ist.
- Beim Animieren von `display` von `block` (oder einem anderen sichtbaren `display`-Wert) zu `none`, wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass er vollständig sichtbar ist.

> [!NOTE]
> Wenn Sie mit [CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions) animieren, muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior) gesetzt werden, um das obige Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig verfügbar, wenn Sie mit [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) animieren; ein äquivalenter Schritt ist nicht erforderlich.

#### Transition von Dialogelementen

Beim Animieren von `<dialog>`-Elementen mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/Reference/At-rules/@starting-style)-Regel
  - : Bietet eine Reihe von Startwerten für Eigenschaften, die auf das `<dialog>` festgelegt werden und die jedes Mal, wenn es geöffnet ist, übergangsweise geändert werden sollen. Dies ist nötig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur dann auf, wenn ein Eigenschaftswert von einem zu einem anderen Wert auf einem sichtbaren Element geändert wird; sie werden nicht ausgelöst bei den ersten Stilaktualisierungen von Elementen oder beim Ändern des `display`-Typs von `none` zu einem anderen Typ.
- [`display`](/de/docs/Web/CSS/Reference/Properties/display)-Eigenschaft
  - : Fügen Sie `display` zur Liste der Übergänge hinzu, damit das `<dialog>` während der Übergangszeit `display: block` (oder einen anderen auf den offenen Zustand des Dialogs gesetzten sichtbaren `display`-Wert) bleibt, um die anderen Übergänge sichtbar zu machen.
- [`overlay`](/de/docs/Web/CSS/Reference/Properties/overlay)-Eigenschaft
  - : Fügen Sie `overlay` zur Liste der Übergänge hinzu, um sicherzustellen, dass die Entfernung des `<dialog>` aus der obersten Ebene bis zum Abschluss des Übergangs verschoben wird, was wiederum den Übergang sichtbar macht.
- {{cssxref("transition-behavior")}}-Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf den `display`- und `overlay`-Übergängen (oder auf die {{cssxref("transition")}}-Kurzform), um diskrete Übergänge bei diesen beiden Eigenschaften zu ermöglichen, die standardmäßig nicht animierbar sind.

Hier ist ein kurzes Beispiel, das zeigt, wie das aussehen kann.

##### HTML

Das HTML enthält ein `<dialog>`-Element sowie eine Schaltfläche, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element eine weitere Schaltfläche, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Im CSS beziehen wir einen `@starting-style`-Block ein, der die Übergangsstartstile für die `opacity`- und `transform`-Eigenschaften definiert, Übergangsendstile im `dialog:open`-Zustand und Standardstile im Standard-`dialog`-Zustand, zu denen der `<dialog>` zurückwechselt, sobald er erschienen ist. Beachten Sie, wie die `transition`-Liste des `<dialog>` nicht nur diese Eigenschaften, sondern auch die `display`- und `overlay`-Eigenschaften mit jeweils `allow-discrete` auf ihnen umfasst.

Wir legen auch einen Startstilwert für die {{cssxref("background-color")}}-Eigenschaft auf dem [`::backdrop`](/de/docs/Web/CSS/Reference/Selectors/::backdrop) fest, die beim Öffnen des `<dialog>` hinter dem Dialog erscheint, um eine schöne Abdunkelungsanimation zu bieten. Der `dialog:open::backdrop`-Selektor wählt nur die Hintergründe von `<dialog>`-Elementen aus, wenn der Dialog geöffnet ist.

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
> In Browsern, die die {{cssxref(":open")}}-Pseudo-Klasse nicht unterstützen, können Sie den Attributselektor `dialog[open]` verwenden, um das `<dialog>`-Element im geöffneten Zustand zu stylen.

##### JavaScript

Das JavaScript fügt den Anzeigen- und Schließen-Schaltflächen Ereignishandler hinzu, wodurch sie beim Anklicken das `<dialog>` anzeigen und schließen:

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
> Da `<dialog>`-Elemente jedes Mal, wenn sie angezeigt werden, von `display: none` zu `display: block` wechseln, geht `<dialog>` bei jedem Auftreten des Eintrittsübergangs von seinen `@starting-style`-Stilen zu seinen `dialog:open`-Stilen über. Wenn das `<dialog>` geschlossen wird, wechselt es von seinem `dialog:open`-Zustand zum Standard-`dialog`-Zustand.
>
> Es ist möglich, dass der Stil-Übergang beim Eintritt und beim Ausgang unterschiedlich ist. Sehen Sie unser [Demonstration of when starting styles are used](/de/docs/Web/CSS/Reference/At-rules/@starting-style#demonstration_of_when_starting_styles_are_used)-Beispiel für einen Nachweis davon.

#### dialog-Keyframe-Animationen

Beim Animieren eines `<dialog>` mit CSS-Keyframe-Animationen gibt es einige Unterschiede zu den Übergängen zu beachten:

- Sie geben keinen `@starting-style` an.
- Sie schließen den `display`-Wert in einem Keyframe ein; dies wird der `display`-Wert für die gesamte Dauer der Animation sein oder bis ein weiterer nicht `none`-Wert von `display` auftritt.
- Sie müssen diskrete Animationen nicht ausdrücklich aktivieren; es gibt kein Äquivalent zu `allow-discrete` innerhalb von Keyframes.
- Sie müssen auch nicht `overlay` innerhalb von Keyframes setzen; die `display`-Animation behandelt die Animation des `<dialog>` von angezeigt zu verborgen.

Lassen Sie uns ein Beispiel ansehen, damit Sie sehen können, wie das aussieht.

##### HTML

Zunächst enthält das HTML ein `<dialog>`-Element sowie eine Schaltfläche, um den Dialog anzuzeigen. Zusätzlich enthält das `<dialog>`-Element eine weitere Schaltfläche, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

Das CSS definiert Keyframes, um zwischen dem geschlossenen und angezeigten Zustand des `<dialog>` zu animieren, sowie die Einblend-Animation für den Hintergrund des `<dialog>`. Die `<dialog>`-Animationen umfassen das Animieren von `display`, um sicherzustellen, dass die tatsächlich sichtbaren Animationseffekte über die gesamte Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, das Verblassen des Hintergrunds zu animieren – der Hintergrund wird sofort aus dem DOM entfernt, wenn das `<dialog>` geschlossen wird, sodass es nichts zum Animieren gibt.

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

Abschließend fügt das JavaScript den Schaltflächen Ereignishandler hinzu, um das `<dialog>` anzuzeigen und zu schließen:

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

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        Gliederungswurzel
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
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
