---
title: "Event: preventDefault() Methode"
short-title: preventDefault()
slug: Web/API/Event/preventDefault
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`preventDefault()`** Methode der [`Event`](/de/docs/Web/API/Event) Schnittstelle weist den {{Glossary("user_agent", "User Agent")}} an, dass wenn das Ereignis nicht explizit behandelt wird, seine Standardaktion nicht wie üblich durchgeführt werden soll.

Das Ereignis propagiert weiter wie gewohnt, es sei denn, einer seiner Ereignislistener ruft [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) oder [`stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation) auf, von denen jede die Propagation sofort beendet.

Wie unten angegeben, hat das Aufrufen von **`preventDefault()`** für ein nicht abbrechbares Ereignis, wie eines, das über [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird, ohne `cancelable: true` anzugeben, keine Wirkung.

Wenn ein passiver Listener `preventDefault()` aufruft, passiert nichts und es kann eine Konsolenwarnung generiert werden.

## Syntax

```js-nolint
preventDefault()
```

## Beispiele

### Blockierung der Standardeingabe bei Klick

Das Umschalten eines Kontrollkästchens ist die Standardaktion beim Klick auf ein Kontrollkästchen. Dieses Beispiel zeigt, wie man dies verhindern kann:

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

### Stoppen von Tastenanschlägen, bevor sie ein Eingabefeld erreichen

Das folgende Beispiel zeigt, wie ungültige Texteingaben mithilfe von `preventDefault()` daran gehindert werden können, das Eingabefeld zu erreichen. Heutzutage sollten Sie in der Regel [native HTML-Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) verwenden.

#### HTML

Das untenstehende HTML-Formular erfasst Benutzereingaben. Da wir uns nur für Tastenanschläge interessieren, deaktivieren wir `autocomplete`, um zu verhindern, dass der Browser das Eingabefeld mit zwischengespeicherten Werten ausfüllt.

```html
<div class="container">
  <p>Please enter your name using lowercase letters only.</p>

  <form>
    <input type="text" id="my-textbox" autocomplete="off" />
  </form>
</div>
```

#### CSS

Wir verwenden ein wenig CSS für das Warnfeld, das wir anzeigen werden, wenn der Benutzer eine ungültige Taste drückt:

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

Und hier ist der JavaScript-Code, der die Arbeit macht. Zuerst hören wir auf [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignisse:

```js
const myTextbox = document.getElementById("my-textbox");
myTextbox.addEventListener("keydown", checkName, false);
```

Die Funktion `checkName()`, die die gedrückte Taste prüft und entscheidet, ob sie erlaubt wird:

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

Die Funktion `displayWarning()` zeigt eine Benachrichtigung über ein Problem an. Sie ist keine elegante Funktion, erfüllt aber für die Zwecke dieses Beispiels ihren Zweck:

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

Das Aufrufen von `preventDefault()` während jeder Phase des Ereignisflusses bricht das Ereignis ab, was bedeutet, dass jede Standardaktion, die normalerweise durch die Implementierung als Ergebnis des Ereignisses durchgeführt würde, nicht erfolgt.

Sie können [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) verwenden, um zu überprüfen, ob das Ereignis abbrechbar ist. Das Aufrufen von `preventDefault()` für ein nicht abbrechbares Ereignis hat keine Wirkung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
