---
title: "HTMLElement: change Ereignis"
short-title: change
slug: Web/API/HTMLElement/change_event
l10n:
  sourceCommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{APIRef}}

Das `change` Ereignis wird für {{HTMLElement("input")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}} Elemente ausgelöst, wenn der Benutzer den Wert des Elements ändert. Im Gegensatz zum [`input`](/de/docs/Web/API/Element/input_event) Ereignis wird das `change` Ereignis nicht unbedingt bei jeder Änderung des `value` eines Elements ausgelöst.

Je nach Art des geänderten Elements und der Art und Weise, wie der Benutzer mit dem Element interagiert, wird das `change` Ereignis zum unterschiedlichen Zeitpunkt ausgelöst:

- Wenn ein `{{HTMLElement('input/checkbox', '&lt;input type="checkbox"&gt;')}}` Element aktiviert oder deaktiviert wird (durch Klicken oder mit der Tastatur);
- Wenn ein `{{HTMLElement('input/radio', '&lt;input type="radio"&gt;')}}` Element aktiviert wird (aber nicht, wenn es deaktiviert wird);
- Wenn der Benutzer die Änderung explizit bestätigt (z. B. durch Auswählen eines Wertes aus einem Dropdown-Menü eines {{HTMLElement("select")}} mit einem Mausklick, durch Auswählen eines Datums in einem Datumswähler für `{{HTMLElement('input/date', '&lt;input type="date"&gt;')}}`, durch Auswählen einer Datei im Dateiwähler für `{{HTMLElement('input/file', '&lt;input type="file"&gt;')}}`, etc.);
- Wenn das Element den Fokus verliert, nachdem sein Wert geändert wurde: für Elemente, bei denen die Interaktion des Benutzers durch Tippen und nicht durch Auswahl erfolgt, wie ein {{HTMLElement("textarea")}} oder die Typen `{{HTMLElement('input/text', 'text')}}`, `{{HTMLElement('input/search', 'search')}}`, `{{HTMLElement('input/url', 'url')}}`, `{{HTMLElement('input/tel', 'tel')}}`, `{{HTMLElement('input/email', 'email')}}` oder `{{HTMLElement('input/password', 'password')}}` des {{HTMLElement('input')}} Elements.

Die HTML-Spezifikation listet [die `<input>` Typen auf, die das `change` Ereignis auslösen sollten](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### \<select> Element

#### HTML

```html
<label>
  Choose an ice cream flavor:
  <select class="ice-cream" name="ice-cream">
    <option value="">Select One …</option>
    <option value="chocolate">Chocolate</option>
    <option value="sardine">Sardine</option>
    <option value="vanilla">Vanilla</option>
  </select>
</label>

<div class="result"></div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "select result";
}

select {
  grid-area: select;
}

.result {
  grid-area: result;
}
```

#### JavaScript

```js
const selectElement = document.querySelector(".ice-cream");
const result = document.querySelector(".result");

selectElement.addEventListener("change", (event) => {
  result.textContent = `You like ${event.target.value}`;
});
```

#### Ergebnis

{{ EmbedLiveSample('select_element', '100%', '75px') }}

### Text-Eingabefeld

Für einige Elemente, einschließlich `<input type="text">`, wird das `change` Ereignis erst ausgelöst, wenn das Steuerelement den Fokus verliert. Versuchen Sie, etwas in das untenstehende Feld einzugeben, und klicken Sie dann woanders hin, um das Ereignis auszulösen.

#### HTML

```html
<input placeholder="Enter some text" name="name" />
<p id="log"></p>
```

#### JavaScript

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("change", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

#### Ergebnis

{{ EmbedLiveSample('Text_input_element', '100%', '90px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Unterschiedliche Browser sind sich nicht immer einig, ob ein `change` Ereignis für bestimmte Arten von Interaktionen ausgelöst werden sollte. Zum Beispiel wurde in {{HTMLElement("select")}} Elementen bei Tastaturnavigation in Gecko früher nie ein `change` Ereignis ausgelöst, bis der Benutzer Enter drückte oder den Fokus vom `<select>` änderte (siehe [Firefox-Bug 126379](https://bugzil.la/126379)). Seit Firefox 63 (Quantum) ist dieses Verhalten jedoch konsistent zwischen allen großen Browsern.
