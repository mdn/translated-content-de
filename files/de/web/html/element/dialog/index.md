---
title: "<dialog>: Das Dialog-Element"
slug: Web/HTML/Element/dialog
l10n:
  sourceCommit: be7cf520036291031985ab0b38c487539b1faa9d
---

{{HTMLSidebar}}

Das **`<dialog>`** [HTML](/de/docs/Web/HTML) Element repräsentiert ein modales oder nicht-modales Dialogfenster oder andere interaktive Komponenten wie eine schließbare Warnung, einen Inspektor oder ein Unterfenster.

Das HTML `<dialog>` Element wird verwendet, um sowohl modale als auch nicht-modale Dialogfenster zu erstellen. Modale Dialogfenster unterbrechen die Interaktion mit dem Rest der Seite, während nicht-modale Dialogfenster die Interaktion mit dem Rest der Seite erlauben.

JavaScript sollte verwendet werden, um das `<dialog>` Element anzuzeigen. Verwenden Sie die Methode {{domxref("HTMLDialogElement.showModal()", ".showModal()")}}, um ein modales Dialogfenster anzuzeigen und die Methode {{domxref("HTMLDialogElement.show()", ".show()")}}, um ein nicht-modales Dialogfenster anzuzeigen. Das Dialogfenster kann mit der Methode {{domxref("HTMLDialogElement.close()", ".close()")}} oder über die [`dialog`](/de/docs/Web/HTML/Element/form#method) Methode geschlossen werden, wenn ein `<form>`, das innerhalb des `<dialog>` Elements eingebettet ist, abgesendet wird. Modale Dialoge können auch durch Drücken der <kbd>Esc</kbd> Taste geschlossen werden.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> [!WARNING]
> Das `tabindex` Attribut darf nicht auf dem `<dialog>` Element verwendet werden. Siehe [Verwendungsnotizen](#verwendungsnotizen).

- `open`

  - : Gibt an, dass das Dialogfenster aktiv und für die Interaktion verfügbar ist. Wenn das `open` Attribut nicht gesetzt ist, wird das Dialogfenster für den Benutzer nicht sichtbar sein.
    Es wird empfohlen, die Methode `.show()` oder `.showModal()` zu verwenden, um Dialoge darzustellen, anstatt das `open` Attribut zu verwenden. Wenn ein `<dialog>` mithilfe des `open` Attributs geöffnet wird, ist es nicht-modal.

    > [!NOTE]
    > Während Sie den offenen und geschlossenen Zustand von nicht-modalen Dialogfenstern durch Umschalten des Vorhandenseins des `open` Attributs ändern können, wird diese Vorgehensweise nicht empfohlen.

## Verwendungsnotizen

- HTML {{HTMLElement("form")}} Elemente können verwendet werden, um ein Dialogfenster zu schließen, wenn sie das Attribut `method="dialog"` haben oder wenn der Button, der das Formular absendet, [`formmethod="dialog"`](/de/docs/Web/HTML/Element/input#formmethod) gesetzt hat. Wenn ein `<form>` innerhalb eines `<dialog>` durch die `dialog` Methode abgesendet wird, schließt sich das Dialogfeld, die Zustände der Formularelemente werden gespeichert, aber nicht abgesendet, und die {{domxref("HTMLDialogElement.returnValue", "returnValue")}} Eigenschaft wird auf den Wert des Buttons gesetzt, der aktiviert wurde.
- Das CSS {{cssxref('::backdrop')}} Pseudo-Element kann verwendet werden, um den Hintergrund eines modalen Dialogs zu stylen, der hinter dem `<dialog>` Element angezeigt wird, wenn das Dialogfeld mit der Methode {{domxref("HTMLDialogElement.showModal()")}} angezeigt wird. Dieses Pseudo-Element könnte beispielsweise verwendet werden, um den inerten Inhalt hinter dem modalen Dialog zu verschwimmen, abdunkeln oder anderweitig zu verschleiern.
- Das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus) Attribut sollte dem Element hinzugefügt werden, mit dem der Benutzer unmittelbar nach dem Öffnen eines modalen Dialogs interagieren soll. Wenn kein anderes Element eine direktere Interaktion erfordert, wird empfohlen, `autofocus` dem Schließen-Button innerhalb des Dialogs hinzuzufügen, oder dem Dialog selbst, wenn der Benutzer darauf klicken/aktivieren soll, um es zu schließen.
- Fügen Sie dem `<dialog>` Element nicht die `tabindex` Eigenschaft hinzu, da es nicht interaktiv ist und keinen Fokus erhält. Der Inhalt des Dialogs, einschließlich des Schließbuttons im Dialog selbst, kann den Fokus erhalten und interaktiv sein.

## Barrierefreiheit

Beim Implementieren eines Dialogs ist es wichtig, den am besten geeigneten Ort für den Benutzerfokus zu berücksichtigen. Wenn Sie {{domxref("HTMLDialogElement.showModal()")}} verwenden, um ein `<dialog>` zu öffnen, wird der Fokus auf das erste verschachtelte fokussierbare Element gesetzt. Die explizite Angabe der anfänglichen Fokusposition durch das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus) Attribut hilft sicherzustellen, dass der anfängliche Fokus auf dem Element gesetzt wird, das als die beste anfängliche Fokusposition für einen bestimmten Dialog angesehen wird. Wenn Zweifel bestehen, da es nicht immer bekannt sein kann, wo der anfängliche Fokus in einem Dialog gesetzt werden könnte, insbesondere bei Instanzen, bei denen der Inhalt eines Dialogs dynamisch beim Aufruf gerendert wird, kann das `<dialog>` Element selbst die beste anfängliche Fokusposition bieten.

Stellen Sie sicher, dass eine Mechanismus bereitgestellt wird, der es den Benutzern erlaubt, den Dialog zu schließen. Der robusteste Weg, um sicherzustellen, dass alle Benutzer den Dialog schließen können, ist die Aufnahme eines speziellen Buttons, um dies zu tun, wie beispielsweise ein Bestätigungs-, Abbruch- oder Schließbutton.

Standardmäßig kann ein Dialog, der durch die `showModal()` Methode aufgerufen wird, durch Drücken der <kbd>Esc</kbd> Taste geschlossen werden. Ein nicht-modales Dialog wird standardmäßig nicht durch die <kbd>Esc</kbd> Taste geschlossen, und je nachdem, was das nicht-modale Dialog darstellt, ist es möglicherweise nicht gewünscht, dass dieses Verhalten erfolgt. Tastaturbenutzer erwarten, dass die <kbd>Esc</kbd> Taste modale Dialoge schließt; stellen Sie sicher, dass dieses Verhalten implementiert und beibehalten wird. Wenn mehrere modale Dialoge geöffnet sind, sollte das Drücken der <kbd>Esc</kbd> Taste nur das zuletzt gezeigte Dialog schließen. Wenn Sie `<dialog>` verwenden, wird dieses Verhalten vom Browser bereitgestellt.

Während Dialoge mit anderen Elementen erstellt werden können, bietet das native `<dialog>` Element Benutzerfreundlichkeits- und Barrierefreiheitsfunktionen, die nachgebildet werden müssen, wenn Sie andere Elemente für einen ähnlichen Zweck verwenden. Wenn Sie eine benutzerdefinierte Dialogimplementierung erstellen, achten Sie darauf, dass alle erwarteten Standardverhaltensweisen unterstützt und die richtigen Bezeichnungsempfehlungen befolgt werden.

Das `<dialog>` Element wird von Browsern ähnlich wie benutzerdefinierte Dialoge, die das ARIA [role="dialog"](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) Attribut verwenden, bereitgestellt. `<dialog>` Elemente, die mit der `showModal()` Methode aufgerufen werden, haben implizit [aria-modal="true"](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal), während `<dialog>` Elemente, die mit der `show()` Methode oder über das `open` Attribut angezeigt werden oder indem das Standard-`display` eines `<dialog>` geändert wird, als `[aria-modal="false"]` bereitgestellt werden. Beim Implementieren modaler Dialoge sollte alles außer dem `<dialog>` und seinem Inhalt mithilfe des [`inert`](/de/docs/Web/HTML/Global_attributes/inert) Attributs inaktiv gemacht werden. Wenn Sie `<dialog>` zusammen mit der `HTMLDialogElement.showModal()` Methode verwenden, wird dieses Verhalten vom Browser bereitgestellt.

## Beispiele

### Nur HTML-Dialog

Dieses Beispiel zeigt die Erstellung eines nicht-modalen Dialogs nur mit HTML. Aufgrund des booleschen `open` Attributs im `<dialog>` Element erscheint das Dialogfeld geöffnet, wenn die Seite geladen wird. Das Dialog kann durch Klicken auf den "OK" Button geschlossen werden, da das `method` Attribut im `<form>` Element auf `"dialog"` gesetzt ist. In diesem Fall wird kein JavaScript benötigt, um das Formular zu schließen.

```html
<dialog open>
  <p>Grüße, an alle!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

#### Ergebnis

{{EmbedLiveSample("HTML-only_dialog", "100%", 200)}}

> [!NOTE]
> Laden Sie die Seite neu, um die Ausgabe zurückzusetzen.

Dieses Dialog ist ursprünglich wegen des Vorhandenseins des `open` Attributs geöffnet. Dialoge, die mit dem `open` Attribut angezeigt werden, sind nicht-modal. Nach dem Klicken auf "OK" wird das Dialog geschlossen und der Ergebnisframe bleibt leer. Wenn das Dialog geschlossen wird, gibt es keine Methode, um es erneut zu öffnen. Aus diesem Grund wird die bevorzugte Methode zur Anzeige nicht-modaler Dialoge durch die Verwendung der {{domxref("HTMLDialogElement.show()")}} Methode empfohlen. Es ist möglich, die Anzeige des Dialogs durch Hinzufügen oder Entfernen des booleschen `open` Attributs umzuschalten, aber es wird nicht empfohlen.

### Erstellen eines modalen Dialogs

Dieses Beispiel zeigt ein modales Dialog mit einem [Verlauf](/de/docs/Web/CSS/gradient) im Hintergrund. Die Methode `.showModal()` öffnet das modale Dialog, wenn der "Dialog anzeigen" Button aktiviert wird. Der Dialog kann durch Drücken der <kbd>Esc</kbd> Taste oder über die `close()` Methode geschlossen werden, wenn der "Schließen" Button innerhalb des Dialogs aktiviert wird.

Wenn ein Dialog geöffnet wird, gibt der Browser standardmäßig dem ersten Element, das im Dialog fokussiert werden kann, den Fokus. In diesem Beispiel wird das [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus) Attribut auf den "Schließen" Button angewendet, sodass dieser beim Öffnen des Dialogs den Fokus erhält, da dies das Element ist, mit dem der Benutzer unmittelbar nach dem Öffnen des Dialogs interagieren soll.

#### HTML

```html
<dialog>
  <button autofocus>Schließen</button>
  <p>Dieses modale Dialog hat einen coolen Hintergrund!</p>
</dialog>
<button>Dialog anzeigen</button>
```

#### CSS

Wir können den Hintergrund des Dialogs durch die Verwendung des {{cssxref('::backdrop')}} Pseudo-Elements stylen.

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

Das Dialog wird modalerweise mit der `.showModal()` Methode geöffnet und mit der `.close()` Methode geschlossen.

```js
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Dialog anzeigen" Button öffnet das dialog modalerweise
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Schließen" Button schließt das dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### Ergebnis

{{EmbedLiveSample("Creating_a_modal_dialog", "100%", 200)}}

Wenn das modale Dialog angezeigt wird, erscheint es über allen anderen möglicherweise vorhandenen Dialogen. Alles außerhalb des modalen Dialogs ist inaktiv, und Interaktionen außerhalb des Dialogs sind blockiert. Beachten Sie, dass, wenn das Dialog geöffnet ist, mit Ausnahme des Dialogs selbst, keine Interaktion mit dem Dokument möglich ist; der "Dialog anzeigen" Button ist größtenteils durch den fast undurchsichtigen Hintergrund des Dialogs verdeckt und ist inaktiv.

### Handhaben des Rückgabewerts aus dem Dialog

Dieses Beispiel zeigt den [`returnValue`](/de/docs/Web/API/HTMLDialogElement/returnValue) des `<dialog>` Elements und wie man ein modales Dialog mithilfe eines Formulars schließt. Standardmäßig ist der `returnValue` der leere String oder der Wert des Buttons, der das Formular innerhalb des `<dialog>` Elements absendet, falls vorhanden.

Dieses Beispiel öffnet ein modales Dialog, wenn der "Dialog anzeigen" Button aktiviert wird. Der Dialog enthält ein Formular mit einem {{HTMLElement("select")}} und zwei {{HTMLElement("button")}} Elementen, die standardmäßig auf `type="submit"` eingestellt sind. Ein Ereignislistener aktualisiert den Wert des "Bestätigen" Buttons, wenn die Auswahloption geändert wird. Wenn der "Bestätigen" Button aktiviert wird, um den Dialog zu schließen, ist der aktuelle Wert des Buttons der Rückgabewert. Wenn der Dialog durch Drücken des "Abbrechen" Buttons geschlossen wird, ist der `returnValue` `cancel`.

Wenn der Dialog geschlossen wird, wird der Rückgabewert unter dem "Dialog anzeigen" Button angezeigt. Wenn das Dialog durch Drücken der <kbd>Esc</kbd> Taste geschlossen wird, wird der `returnValue` nicht aktualisiert und das `close` Ereignis tritt nicht auf, sodass der Text in der {{HTMLElement("output")}} nicht aktualisiert wird.

#### HTML

```html
<!-- Ein modales Dialog mit einem Formular -->
<dialog id="favDialog">
  <form>
    <p>
      <label>
        Lieblingstier:
        <select>
          <option value="default">Wählen...</option>
          <option>Sole-Garnele</option>
          <option>Roter Panda</option>
          <option>Totenkopfaffe</option>
        </select>
      </label>
    </p>
    <div>
      <button value="cancel" formmethod="dialog">Abbrechen</button>
      <button id="confirmBtn" value="default">Bestätigen</button>
    </div>
  </form>
</dialog>
<p>
  <button id="showDialog">Dialog anzeigen</button>
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

// "Dialog anzeigen" Button öffnet das <dialog> modalerweise
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// "Abbrechen" Button schließt das Dialog ohne Absenden aufgrund von [formmethod="dialog"], und löst ein Schließereignis aus.
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "Kein Rückgabewert."
      : `Rückgabewert: ${favDialog.returnValue}.`; // Muss für "default" statt leerer String überprüft werden
});

// Verhindert, dass der "Bestätigen" Button das Formular standardmäßig absendet, und schließt den Dialog mit der `close()` Methode, die das "close" Ereignis auslöst.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Wir möchten dieses falsche Formular nicht absenden
  favDialog.close(selectEl.value); // Der Wert des Auswahlfeldes muss hier gesendet werden.
});
```

#### Ergebnis

{{EmbedLiveSample("Handling the return value from the dialog", "100%", 300)}}

Die obigen Beispiele demonstrieren die folgenden drei Methoden zum Schließen modaler Dialoge:

- Durch das Absenden des Formulars innerhalb des Dialogs mit der `dialog` Methode (wie im [Nur HTML Beispiel](#nur_html-dialog) zu sehen).
- Durch Drücken der <kbd>Esc</kbd> Taste.
- Durch Aufrufen der {{domxref("HTMLDialogElement.close()")}} Methode (wie im [modalen Beispiel](#erstellen_eines_modalen_dialogs) zu sehen).
  In diesem Beispiel schließt der "Abbrechen" Button das Dialog über die `dialog` Formmethode und der "Bestätigen" Button schließt das Dialog über die {{domxref("HTMLDialogElement.close()")}} Methode.

Der "Abbrechen" Button enthält das [`formmethod="dialog"`](/de/docs/Web/HTML/Element/input/submit#formmethod) Attribut, das die Standardmethode {{HTTPMethod("GET")}} des {{HTMLElement("form")}} überschreibt. Wenn die Methode eines Formulars [`dialog`](#verwendungsnotizen) ist, wird der Zustand des Formulars gespeichert, aber nicht abgesendet, und das Dialog wird geschlossen.

Ohne eine `action` würde das Absenden des Formulars über die Standardmethode {{HTTPMethod("GET")}} dazu führen, dass die Seite neu geladen wird. Wir verwenden JavaScript, um das Absenden zu verhindern und das Dialog mit den {{domxref("event.preventDefault()")}} und {{domxref("HTMLDialogElement.close()")}} Methoden, jeweils zu schließen.

Es ist wichtig, einen Schließmechanismus innerhalb jedes `dialog` Elements bereitzustellen. Die <kbd>Esc</kbd> Taste schließt standardmäßig nicht modale Dialoge nicht, noch kann man davon ausgehen, dass ein Benutzer überhaupt Zugriff auf eine physische Tastatur hat (z. B. jemand, der ein Touchscreen-Gerät ohne Tastaturzugang verwendet).

### Schließen eines Dialogs mit einer erforderlichen Formulareingabe

Wenn ein Formular innerhalb eines Dialogs ein erforderliches Eingabefeld enthält, lässt der Benutzeragent das Schließen des Dialogs nur zu, wenn ein Wert für die erforderliche Eingabe bereitgestellt wird. Um ein solches Dialog zu schließen, verwenden Sie entweder das [`formnovalidate`](/de/docs/Web/HTML/Element/input#formnovalidate) Attribut auf dem Schließbutton oder rufen Sie die `close()` Methode am Dialogobjekt auf, wenn der Schließbutton geklickt wird.

```html
<dialog id="dialog">
  <form method="dialog">
    <p>
      <label>
        Lieblingstier:
        <input type="text" required />
      </label>
    </p>
    <div>
      <input type="submit" id="normal-close" value="Normal schließen" />
      <input
        type="submit"
        id="novalidate-close"
        value="Novalidate schließen"
        formnovalidate />
      <input type="submit" id="js-close" value="JS schließen" />
    </div>
  </form>
</dialog>
<p>
  <button id="show-dialog">Dialog anzeigen</button>
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

Aus der Ausgabe sehen wir, dass es unmöglich ist, das Dialog mit dem _Normal schließen_ Button zu schließen. Aber das Dialog kann geschlossen werden, wenn wir die Formularvalidierung mit dem `formnovalidate` Attribut auf dem _Abbrechen_ Button umgehen. Programmgesteuert schließt `dialog.close()` auch ein solches Dialog.

### Dialoge animieren

`<dialog>`s sind auf [`display: none;`](/de/docs/Web/CSS/display) eingestellt, wenn sie versteckt sind, und `display: block;` wenn sie angezeigt werden, sowie aus dem / in den {{glossary("top layer")}} und den [Akzessibilität-Baum](/de/docs/Web/Performance/How_browsers_work#building_the_accessibility_tree) entfernt / hinzugefügt. Daher muss für `<dialog>` Elemente das {{cssxref("display")}} Attribut animierbar sein. [Unterstützende Browser](/de/docs/Web/CSS/display#browser_compatibility) animieren `display` mit einer Variation des [diskreten Animationstyps](/de/docs/Web/CSS/CSS_animated_properties#discrete). Speziell wird der Browser zwischen `none` und einem anderen Wert von `display` wechseln, sodass der animierte Inhalt während der gesamten Animationsdauer sichtbar ist.

Zum Beispiel:

- Bei der Animation von `display` von `none` zu `block` (oder einem anderen sichtbaren `display` Wert), wechselt der Wert bei `0%` der Animationsdauer zu `block`, sodass er während der gesamten Animation sichtbar ist.
- Bei der Animation von `display` von `block` (oder einem anderen sichtbaren `display` Wert) zu `none`, wechselt der Wert bei `100%` der Animationsdauer zu `none`, sodass er während der gesamten Animation sichtbar ist.

> [!NOTE]
> Bei der Animation mit [CSS Übergängen](/de/docs/Web/CSS/CSS_transitions) muss [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/transition-behavior) gesetzt werden, um oben genanntes Verhalten zu ermöglichen. Dieses Verhalten ist standardmäßig verfügbar, wenn mit [CSS Animationen](/de/docs/Web/CSS/CSS_animations) animiert wird; ein entsprechender Schritt ist nicht erforderlich.

#### Übergangs-Dialog-Elemente

Beim Animieren von `<dialog>`s mit CSS-Übergängen sind die folgenden Funktionen erforderlich:

- [`@starting-style`](/de/docs/Web/CSS/@starting-style) At-Regel
  - : Bietet eine Menge von Startwerten für Eigenschaften, die auf dem `<dialog>` gesetzt sind und jedes Mal beim Öffnen davon übergegangen werden sollen. Dies ist nötig, um unerwartetes Verhalten zu vermeiden. Standardmäßig treten CSS-Übergänge nur auf, wenn sich ein Attribut bei einem sichtbaren Element von einem Wert zu einem anderen ändert; sie werden nicht bei ersten Stilaktualisierungen von Elementen oder bei einer Änderung des `display` Typs von `none` zu einer anderen Art ausgelöst.
- [`display`](/de/docs/Web/CSS/display) Eigenschaft
  - : Fügen Sie `display` zur Übergangsliste hinzu, sodass das `<dialog>` für die Dauer des Übergangs `display: block` (oder ein anderer sichtbarer `display` Wert, der auf den geöffneten Zustand des Dialogs gesetzt ist) verbleibt, und die anderen Übergänge sichtbar bleiben.
- [`overlay`](/de/docs/Web/CSS/overlay) Eigenschaft
  - : Fügen Sie `overlay` zur Übergangsliste hinzu, um sicherzustellen, dass das Entfernen des `<dialog>` aus der obersten Ebene verzögert wird, bis der Übergang abgeschlossen ist, sodass der Übergang sichtbar bleibt.
- {{cssxref("transition-behavior")}} Eigenschaft
  - : Setzen Sie `transition-behavior: allow-discrete` auf die `display` und `overlay` Übergänge (oder auf das {{cssxref("transition")}} Shorthand), um diskrete Übergänge auf diese zwei Attribute zu ermöglichen, die standardmäßig nicht animierbar sind.

Hier ein kurzes Beispiel, um zu zeigen, wie das aussehen könnte.

##### HTML

Das HTML enthält ein `<dialog>` Element sowie einen Button, um das Dialog anzuzeigen. Zusätzlich enthält das `<dialog>` Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Inhalt hier
  <button class="close">Schließen</button>
</dialog>

<button class="show">Modal anzeigen</button>
```

##### CSS

Im CSS fügen wir einen `@starting-style` Block hinzu, der die Übergangsansatzstile für die `opacity` und `transform` Eigenschaften definiert, Übergangsendstile im `dialog[open]` Zustand, und Standardstile im Standard `dialog` Zustand, um zurückzukehren, sobald das `<dialog>` erschienen ist. Beachten Sie, dass die `transition` Liste des `<dialog>` nicht nur diese Eigenschaften umfasst, sondern auch die `display` und `overlay` Eigenschaften, von der jede `allow-discrete` daraufgesetzt hat.

Wir setzen ebenfalls einen Startstilwert für die {{cssxref("background-color")}} Eigenschaft des [`::backdrop`](/de/docs/Web/CSS/::backdrop), das hinter dem `<dialog>` erscheint, wenn es geöffnet wird, um eine schöne Verdunklungsanimation bereitzustellen. Der `dialog[open]::backdrop` Selektor wählt nur die Backdrops von `<dialog>` Elementen aus, wenn das Dialog geöffnet ist.

```css
/*   Offener Zustand des Dialogs  */
dialog[open] {
  opacity: 1;
  transform: scaleY(1);
}

/*   Geschlossener Zustand des Dialogs   */
dialog {
  opacity: 0;
  transform: scaleY(0);
  transition:
    opacity 0.7s ease-out,
    transform 0.7s ease-out,
    overlay 0.7s ease-out allow-discrete,
    display 0.7s ease-out allow-discrete;
  /* Entspricht
  transition: all 0.7s allow-discrete; */
}

/*   Vor-öffnen Zustand  */
/* Muss nach der vorhergehenden dialog[open] Regel gesetzt werden,
    da die Spezifität gleich ist */
@starting-style {
  dialog[open] {
    opacity: 0;
    transform: scaleY(0);
  }
}

/* Übergang der :backdrop wenn das Dialog-Modul in die obere Ebene verschoben wird */
dialog::backdrop {
  background-color: rgb(0 0 0 / 0%);
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* Entspricht
  transition: all 0.7s allow-discrete; */
}

dialog[open]::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* Diese Startstilregel kann nicht innerhalb des obigen Selektors verschachtelt werden
weil der Verschachtelungsselektor keine Pseudo-Elemente darstellen kann. */

@starting-style {
  dialog[open]::backdrop {
    background-color: rgb(0 0 0 / 0%);
  }
}
```

##### JavaScript

Das JavaScript fügt Ereignishandler zu den Zeige- und Schließbuttons hinzu, sodass diese das `<dialog>` anzeigen und schließen, wenn sie geklickt werden:

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
> Da `<dialog>`s bei jedem Schließen zu `display: none` und zu `display: block` ändern, treten die `dialog[open]` Stile von `@starting-style` jedes Mal auf, wenn der Eintrittsübergang erfolgt. Wenn das `<dialog>` schließt, geht es von seinem `dialog[open]` Zustand zum Standard `dialog` Zustand über.
>
> Es ist möglich, dass der Stilübergang beim Eintritt und Austritt unterschiedlich ist. Siehe unser [Beispiel für die Verwendung von Startstilen](/de/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) für einen Beweis dafür.

#### Dialog Keyframe-Animationen

Beim Animieren eines `<dialog>`s mit CSS Keyframe-Animationen gibt es einige Unterschiede zu Übergängen:

- Sie geben kein `@starting-style` an.
- Sie fügen den `display` Wert in ein Keyframe ein; dies wird der `display` Wert für die gesamte Dauer der Animation sein, oder bis ein anderer nicht-`none` display Wert erreicht wird.
- Sie müssen diskrete Animationen nicht explizit aktivieren; es gibt kein Äquivalent zu `allow-discrete` in Keyframes.
- Sie müssen `overlay` ebenfalls nicht in Keyframes setzen; die `display` Animation übernimmt die Animation des `<dialog>` vom Gezeigten bis zum Verborgenen.

Lassen Sie uns ein Beispiel betrachten, damit Sie sehen können, wie das aussieht.

##### HTML

Zuerst enthält das HTML ein `<dialog>` Element, sowie einen Button, um das Dialog anzuzeigen. Darüber hinaus enthält das `<dialog>` Element einen weiteren Button, um sich selbst zu schließen.

```html
<dialog id="dialog">
  Inhalt hier
  <button class="close">Schließen</button>
</dialog>

<button class="show">Modal anzeigen</button>
```

##### CSS

Das CSS definiert Keyframes, um zwischen den geschlossenen und gezeigten Zuständen des `<dialog>` zu animieren, sowie die Einblendanimation für den Hintergrund des `<dialog>`. Die `<dialog>` Animationen umfassen das Animieren von `display`, um sicherzustellen, dass die eigentlichen sichtbaren Animationseffekte während der gesamten Dauer sichtbar bleiben. Beachten Sie, dass es nicht möglich war, das Ausblenden des Hintergrunds zu animieren — der Hintergrund wird sofort aus dem DOM entfernt, wenn das `<dialog>` geschlossen wird, sodass es nichts mehr zu animieren gibt.

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

/* Animations-Keyframes */

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

Schließlich fügt das JavaScript Ereignishandler zu den Buttons hinzu, um das `<dialog>` anzuzeigen und zu schließen:

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>,
        <a href="/de/docs/Web/HTML/Element/Heading_Elements#sectioning_roots">Abschnittswurzel</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Kein, sowohl das Anfangs- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">fließenden Inhalt</a>
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role"><code>alertdialog</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLDialogElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLDialogElement")}} Schnittstelle
- {{domxref("HTMLDialogElement/close_event", "close")}} Ereignis
- {{domxref("HTMLElement/cancel_event", "cancel")}} Ereignis
- {{domxref("HTMLDialogElement/open", "open")}} Eigenschaft der `HTMLDialogElement` Schnittstelle
- [`inert`](/de/docs/Web/HTML/Global_attributes/inert) Globales Attribut für HTML-Elemente
- {{CSSXref("::backdrop")}} CSS-Pseudo-Element
- [Webformulare](/de/docs/Learn/Forms) im Lernbereich
