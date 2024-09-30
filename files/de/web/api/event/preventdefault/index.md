---
title: "Event: preventDefault()-Methode"
short-title: preventDefault()
slug: Web/API/Event/preventDefault
l10n:
  sourceCommit: a845f9d916369fc5652818416f07ed2829277a50
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`preventDefault()`**-Methode der [`Event`](/de/docs/Web/API/Event)-Schnittstelle teilt dem [Benutzeragenten](/de/docs/Glossary/user_agent) mit, dass die Standardaktion des Ereignisses nicht wie gewöhnlich ausgeführt werden soll, wenn das Ereignis nicht explizit behandelt wird.

Das Ereignis wird weiterhin wie gewohnt verbreitet, es sei denn, einer seiner Ereignis-Listener ruft [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) oder [`stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation) auf, von denen jede die Verbreitung sofort beendet.

Wie unten erwähnt, hat das Aufrufen von **`preventDefault()`** für ein nicht abbrechbares Ereignis, wie eines, das über [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ohne Angabe von `cancelable: true` ausgelöst wurde, keine Wirkung.

Wenn ein passiver Listener `preventDefault()` aufruft, wird nichts geschehen, und möglicherweise wird eine Konsolenwarnung generiert.

## Syntax

```js-nolint
event.preventDefault()
```

## Beispiele

### Blockieren der Standard-Click-Verarbeitung

Das Umschalten eines Kontrollkästchens ist die Standardaktion beim Klicken auf ein Kontrollkästchen. Dieses Beispiel demonstriert, wie dies verhindert werden kann:

#### JavaScript

```js
const checkbox = document.querySelector("#id-checkbox");

checkbox.addEventListener("click", checkboxClick, false);

function checkboxClick(event) {
  const warn = "preventDefault() won't let you check this!\n";
  document.getElementById("output-box").innerText += warn;
  event.preventDefault();
}
```

#### HTML

```html
<p>Please click on the checkbox control.</p>

<form>
  <label for="id-checkbox">Checkbox:</label>
  <input type="checkbox" id="id-checkbox" />
</form>

<div id="output-box"></div>
```

#### Ergebnis

{{EmbedLiveSample("Blocking_default_click_handling")}}

### Verhindern, dass Tastatureingaben ein Eingabefeld erreichen

Das folgende Beispiel zeigt, wie ungültige Texteingaben daran gehindert werden können, das Eingabefeld mit `preventDefault()` zu erreichen. Heutzutage sollten Sie normalerweise [native HTML-Formularvalidierung](/de/docs/Learn/Forms/Form_validation) verwenden.

#### HTML

Das HTML-Formular unten erfasst Benutzereingaben. Da wir nur an Tastatureingaben interessiert sind, deaktivieren wir `autocomplete`, um zu verhindern, dass der Browser das Eingabefeld mit gespeicherten Werten füllt.

```html
<div class="container">
  <p>Please enter your name using lowercase letters only.</p>

  <form>
    <input type="text" id="my-textbox" autocomplete="off" />
  </form>
</div>
```

#### CSS

Wir verwenden etwas CSS für die Warnbox, die wir anzeigen, wenn der Benutzer eine ungültige Taste drückt:

```css
.warning {
  border: 2px solid #f39389;
  border-radius: 2px;
  padding: 10px;
  position: absolute;
  background-color: #fbd8d4;
  color: #3b3c40;
}
```

#### JavaScript

Und hier ist der JavaScript-Code, der die Aufgabe erledigt. Zuerst wird auf [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse gehört:

```js
const myTextbox = document.getElementById("my-textbox");
myTextbox.addEventListener("keydown", checkName, false);
```

Die `checkName()`-Funktion, die sich die gedrückte Taste ansieht und entscheidet, ob sie erlaubt wird:

```js
function checkName(evt) {
  const key = evt.key;
  const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  if (!lowerCaseAlphabet.includes(key)) {
    evt.preventDefault();
    displayWarning(`Please use lowercase letters only.\nKey pressed: ${key}\n`);
  }
}
```

Die `displayWarning()`-Funktion zeigt eine Benachrichtigung über ein Problem an. Sie ist keine elegante Funktion, erledigt aber für die Zwecke dieses Beispiels ihren Job:

```js
let warningTimeout;
const warningBox = document.createElement("div");
warningBox.className = "warning";

function displayWarning(msg) {
  warningBox.innerText = msg;

  if (document.body.contains(warningBox)) {
    clearTimeout(warningTimeout);
  } else {
    // insert warningBox after myTextbox
    myTextbox.parentNode.insertBefore(warningBox, myTextbox.nextSibling);
  }

  warningTimeout = setTimeout(() => {
    warningBox.parentNode.removeChild(warningBox);
    warningTimeout = -1;
  }, 2000);
}
```

#### Ergebnis

{{ EmbedLiveSample('Stopping_keystrokes_from_reaching_an_edit_field', 600, 200) }}

## Hinweise

Das Aufrufen von `preventDefault()` während jeder Phase des Ereignisablaufs hebt das Ereignis auf, was bedeutet, dass jede Standardaktion, die normalerweise durch die Implementierung als Ergebnis des Ereignisses ausgeführt wird, nicht stattfindet.

Sie können [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) verwenden, um zu überprüfen, ob das Ereignis abgebrochen werden kann. Das Aufrufen von `preventDefault()` für ein nicht abbrechbares Ereignis hat keine Wirkung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
