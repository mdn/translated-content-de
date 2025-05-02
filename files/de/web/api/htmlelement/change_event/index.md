---
title: "HTMLElement: change event"
short-title: change
slug: Web/API/HTMLElement/change_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das `change`-Ereignis wird für {{HTMLElement("input")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}} Elemente ausgelöst, wenn der Benutzer den Wert des Elements ändert. Im Gegensatz zum [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird das `change`-Ereignis nicht unbedingt bei jeder Änderung eines Elements `value` ausgelöst.

Je nach Art des geänderten Elements und der Art und Weise, wie der Benutzer mit dem Element interagiert, wird das `change`-Ereignis zu einem unterschiedlichen Zeitpunkt ausgelöst:

- Wenn ein `{{HTMLElement('input/checkbox', '&lt;input type="checkbox"&gt;')}}`-Element aktiviert oder deaktiviert wird (durch Klicken oder Verwenden der Tastatur);
- Wenn ein `{{HTMLElement('input/radio', '&lt;input type="radio"&gt;')}}`-Element ausgewählt wird (aber nicht, wenn es abgewählt wird);
- Wenn der Benutzer die Änderung explizit übernimmt (z.B. durch Auswahl eines Wertes aus der Dropdown-Liste eines {{HTMLElement("select")}} mit einem Mausklick, durch Auswahl eines Datums in einem Datumsauswahlfeld für `{{HTMLElement('input/date', '&lt;input type="date"&gt;')}}`, durch Auswahl einer Datei im Dateiauswahlfenster für `{{HTMLElement('input/file', '&lt;input type="file"&gt;')}}`, etc.);
- Wenn das Element den Fokus verliert, nachdem sein Wert geändert wurde: für Elemente, bei denen die Interaktion des Benutzers Eingabe durch Tippen anstatt Auswahl ist, wie z.B. ein {{HTMLElement("textarea")}} oder die `{{HTMLElement('input/text', 'text')}}`, `{{HTMLElement('input/search', 'search')}}`, `{{HTMLElement('input/url', 'url')}}`, `{{HTMLElement('input/tel', 'tel')}}`, `{{HTMLElement('input/email', 'email')}}` oder `{{HTMLElement('input/password', 'password')}}` Typen des {{HTMLElement('input')}} Elements.

Die HTML-Spezifikation listet [die `<input>`-Typen, die das `change`-Ereignis auslösen sollten](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## Eventtyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### `<select>`-Element

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

### Texteingabeelement

Für einige Elemente, einschließlich `<input type="text">`, wird das `change`-Ereignis erst ausgelöst, wenn das Steuerelement den Fokus verliert. Versuchen Sie, etwas in das folgende Feld einzugeben und klicken Sie dann irgendwo anders hin, um das Ereignis auszulösen.

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

Verschiedene Browser sind sich nicht immer einig, ob ein `change`-Ereignis für bestimmte Arten der Interaktion ausgelöst werden soll. Zum Beispiel hat die Tastaturnavigation in {{HTMLElement("select")}}-Elementen in Gecko nie ein `change`-Ereignis ausgelöst, bis der Benutzer Enter gedrückt oder den Fokus vom `<select>` wegbewegt hat (siehe [Firefox-Bug 126379](https://bugzil.la/126379)). Seit Firefox 63 (Quantum) ist dieses Verhalten jedoch zwischen allen großen Browsern konsistent.
