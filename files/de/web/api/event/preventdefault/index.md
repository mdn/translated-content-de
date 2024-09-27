---
title: "Event: preventDefault() Methode"
short-title: preventDefault()
slug: Web/API/Event/preventDefault
l10n:
  sourceCommit: b21df53ffbb066cfb9347d7f0e5aebb792ed73e5
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`preventDefault()`**-Methode der [`Event`](/de/docs/Web/API/Event)-Schnittstelle teilt dem [User Agent](/de/docs/Glossary/user_agent) mit, dass, wenn das Ereignis nicht explizit behandelt wird, seine Standardaktion nicht wie gewöhnlich durchgeführt werden sollte.

Das Ereignis wird wie gewohnt weitergegeben, es sei denn, einer seiner Ereignis-Listener ruft
[`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation)
oder [`stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation) auf, von denen jede die Weiterleitung sofort beendet.

Wie unten angemerkt, hat der Aufruf von **`preventDefault()`** für ein nicht abbrechbares Ereignis, wie eines, das über [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ohne Angabe von `cancelable: true` ausgelöst wird, keine Wirkung.

## Syntax

```js-nolint
event.preventDefault()
```

## Beispiele

### Blockieren der standardmäßigen Klickbehandlung

Das Umschalten eines Kontrollkästchens ist die Standardaktion des Klickens auf ein Kontrollkästchen. Dieses Beispiel zeigt, wie man verhindert, dass dies passiert:

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

### Verhindern, dass Tastenanschläge ein Bearbeitungsfeld erreichen

Das folgende Beispiel zeigt, wie ungültige Texteingaben am Erreichen des Eingabefelds durch `preventDefault()` gehindert werden können. Heutzutage sollten Sie stattdessen in der Regel [native HTML-Formularvalidierung](/de/docs/Learn/Forms/Form_validation) verwenden.

#### HTML

Das HTML-Formular unten erfasst Benutzereingaben. Da wir nur an Tastenanschlägen interessiert sind, deaktivieren wir `autocomplete`, um zu verhindern, dass der Browser das Eingabefeld mit zwischengespeicherten Werten ausfüllt.

```html
<div class="container">
  <p>Please enter your name using lowercase letters only.</p>

  <form>
    <input type="text" id="my-textbox" autocomplete="off" />
  </form>
</div>
```

#### CSS

Wir verwenden ein wenig CSS für die Warnbox, die wir zeichnen, wenn der Benutzer eine ungültige Taste drückt:

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

Und hier ist der JavaScript-Code, der die Aufgabe erledigt. Zuerst hören wir auf [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse:

```js
const myTextbox = document.getElementById("my-textbox");
myTextbox.addEventListener("keydown", checkName, false);
```

Die `checkName()`-Funktion, die die gedrückte Taste betrachtet und entscheidet, ob sie erlaubt werden soll:

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

Die `displayWarning()`-Funktion präsentiert eine Benachrichtigung über ein Problem. Es ist keine elegante Funktion, erfüllt jedoch den Zweck für dieses Beispiel:

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

## Anmerkungen

Das Aufrufen von `preventDefault()` während jeder Phase des Ereignisflusses bricht das Ereignis ab, was bedeutet, dass jede normalerweise als Ergebnis des Ereignisses durchgeführte Standardaktion nicht ausgeführt wird.

Sie können [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) verwenden, um zu überprüfen, ob das Ereignis abbrechbar ist. Der Aufruf von `preventDefault()` für ein nicht abbrechbares Ereignis hat keine Wirkung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
