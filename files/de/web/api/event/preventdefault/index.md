---
title: "Ereignis: preventDefault()-Methode"
short-title: preventDefault()
slug: Web/API/Event/preventDefault
l10n:
  sourceCommit: b21df53ffbb066cfb9347d7f0e5aebb792ed73e5
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`preventDefault()`**-Methode der {{domxref("Event")}}-Schnittstelle teilt dem {{Glossary("user agent")}} mit, dass die Standardaktion des Ereignisses nicht wie gewohnt ausgeführt werden soll, wenn das Ereignis nicht explizit behandelt wird.

Das Ereignis wird wie gewohnt weitergeleitet, es sei denn, einer seiner Ereignis-Listener ruft {{domxref("Event.stopPropagation", "stopPropagation()")}} oder {{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}} auf, wodurch die Ausbreitung sofort beendet wird.

Wie unten angegeben, hat das Aufrufen von **`preventDefault()`** für ein nicht abbrechbares Ereignis, das beispielsweise über {{domxref("EventTarget.dispatchEvent()")}} gesendet wird, ohne `cancelable: true` festzulegen, keine Wirkung.

## Syntax

```js-nolint
event.preventDefault()
```

## Beispiele

### Standardmäßige Klickverarbeitung blockieren

Das Umschalten eines Kontrollkästchens ist die Standardaktion beim Klicken auf ein Kontrollkästchen. Dieses Beispiel demonstriert, wie verhindert werden kann, dass dies geschieht:

#### JavaScript

```js
const checkbox = document.querySelector("#id-checkbox");

checkbox.addEventListener("click", checkboxClick, false);

function checkboxClick(event) {
  const warn = "preventDefault() lässt Sie dies nicht aktivieren!\n";
  document.getElementById("output-box").innerText += warn;
  event.preventDefault();
}
```

#### HTML

```html
<p>Bitte klicken Sie auf das Kontrollkästchen.</p>

<form>
  <label for="id-checkbox">Kontrollkästchen:</label>
  <input type="checkbox" id="id-checkbox" />
</form>

<div id="output-box"></div>
```

#### Ergebnis

{{EmbedLiveSample("Blocking_default_click_handling")}}

### Tastenanschläge daran hindern, ein Eingabefeld zu erreichen

Das folgende Beispiel zeigt, wie ungültige Texteingaben daran gehindert werden können, das Eingabefeld mit `preventDefault()` zu erreichen. Heutzutage sollten Sie normalerweise [native HTML-Formularvalidierung](/de/docs/Learn/Forms/Form_validation) verwenden.

#### HTML

Das untenstehende HTML-Formular erfasst Benutzereingaben. Da wir nur an Tastenanschlägen interessiert sind, deaktivieren wir `autocomplete`, um zu verhindern, dass der Browser das Eingabefeld mit zwischengespeicherten Werten füllt.

```html
<div class="container">
  <p>Bitte geben Sie Ihren Namen nur mit Kleinbuchstaben ein.</p>

  <form>
    <input type="text" id="my-textbox" autocomplete="off" />
  </form>
</div>
```

#### CSS

Wir verwenden ein wenig CSS für das Warnfeld, das wir anzeigen, wenn der Benutzer eine ungültige Taste drückt:

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

Hier ist der JavaScript-Code, der die Aufgabe erledigt. Zuerst hören Sie auf {{domxref("Element/keydown_event", "keydown")}}-Ereignisse:

```js
const myTextbox = document.getElementById("my-textbox");
myTextbox.addEventListener("keydown", checkName, false);
```

Die `checkName()`-Funktion, die die gedrückte Taste überprüft und entscheidet, ob sie zulässig ist:

```js
function checkName(evt) {
  const key = evt.key;
  const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  if (!lowerCaseAlphabet.includes(key)) {
    evt.preventDefault();
    displayWarning(`Bitte verwenden Sie nur Kleinbuchstaben.\nGedrückte Taste: ${key}\n`);
  }
}
```

Die `displayWarning()`-Funktion zeigt eine Problembenachrichtigung an. Es ist keine elegante Funktion, erfüllt aber für die Zwecke dieses Beispiels ihren Zweck:

```js
let warningTimeout;
const warningBox = document.createElement("div");
warningBox.className = "warning";

function displayWarning(msg) {
  warningBox.innerText = msg;

  if (document.body.contains(warningBox)) {
    clearTimeout(warningTimeout);
  } else {
    // warningBox nach myTextbox einfügen
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

Das Aufrufen von `preventDefault()` während einer beliebigen Phase des Ereignisflusses storniert das Ereignis, was bedeutet, dass keine Standardaktion, die normalerweise von der Implementierung als Ergebnis des Ereignisses ausgeführt würde, stattfinden wird.

Sie können {{domxref("Event.cancelable")}} verwenden, um zu überprüfen, ob das Ereignis abbrechbar ist. Das Aufrufen von `preventDefault()` für ein nicht abbrechbares Ereignis hat keine Auswirkung.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
