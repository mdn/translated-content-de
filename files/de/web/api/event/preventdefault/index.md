---
title: "Event: preventDefault() Methode"
short-title: preventDefault()
slug: Web/API/Event/preventDefault
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`preventDefault()`** Methode des [`Event`](/de/docs/Web/API/Event)-Interfaces teilt dem {{Glossary("user_agent", "User-Agent")}} mit, dass, wenn das Ereignis nicht explizit behandelt wird, seine Standardaktion nicht wie üblich ausgeführt werden soll.

Das Ereignis wird wie gewohnt fortgesetzt,
es sei denn, einer seiner Ereignis-Listener ruft
[`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation)
oder [`stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation) auf,
wodurch die Ausbreitung sofort beendet wird.

Wie unten erwähnt, hat der Aufruf von **`preventDefault()`** für ein
nicht abbrechbares Ereignis, wie eines, das über
[`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) gesendet wird, ohne `cancelable: true` anzugeben, keine Wirkung.

Wenn ein passiver Listener `preventDefault()` aufruft, passiert nichts und es kann eine Konsolenwarnung erzeugt werden.

## Syntax

```js-nolint
event.preventDefault()
```

## Beispiele

### Blockierung der Standard-Klickverarbeitung

Das Umschalten eines Kontrollkästchens ist die Standardaktion beim Klicken auf ein Kontrollkästchen. Dieses Beispiel
zeigt, wie dies verhindert werden kann:

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

Das folgende Beispiel zeigt, wie ungültige Texteingaben mit `preventDefault()` daran gehindert werden, das Eingabefeld zu erreichen. Heutzutage sollten Sie in der Regel die [native HTML-Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) verwenden.

#### HTML

Das untenstehende HTML-Formular erfasst Benutzereingaben.
Da wir nur an Tastenanschlägen interessiert sind, deaktivieren wir `autocomplete`, um zu verhindern, dass der Browser das Eingabefeld mit zwischengespeicherten Werten füllt.

```html
<div class="container">
  <p>Please enter your name using lowercase letters only.</p>

  <form>
    <input type="text" id="my-textbox" autocomplete="off" />
  </form>
</div>
```

#### CSS

Wir verwenden ein wenig CSS für das Warnfeld, das wir zeichnen werden, wenn der Benutzer eine
ungültige Taste drückt:

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

Und hier ist der JavaScript-Code, der die Aufgabe erfüllt. Zuerst lauschen wir für
[`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse:

```js
const myTextbox = document.getElementById("my-textbox");
myTextbox.addEventListener("keydown", checkName, false);
```

Die `checkName()`-Funktion prüft die gedrückte Taste und entscheidet,
ob sie zulässig ist:

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

Die `displayWarning()`-Funktion zeigt eine Benachrichtigung über ein Problem. Sie ist
nicht elegant, erfüllt aber die Anforderungen für dieses Beispiel:

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

Der Aufruf von `preventDefault()` in jedem Stadium des Ereignisflusses storniert das Ereignis,
was bedeutet, dass jede Standardaktion, die normalerweise vom Implementierungsprozess als Folge des
Ereignisses ausgeführt wird, nicht erfolgen wird.

Sie können [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) verwenden, um zu prüfen, ob das Ereignis abbruchfähig ist.
Der Aufruf von `preventDefault()` bei einem nicht abbrechbaren Ereignis hat keine Wirkung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
