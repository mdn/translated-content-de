---
title: "HTMLElement: change-Ereignis"
short-title: change
slug: Web/API/HTMLElement/change_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("HTML DOM")}}

Das `change`-Ereignis wird für {{HTMLElement("input")}}-, {{HTMLElement("select")}}- und {{HTMLElement("textarea")}}-Elemente ausgelöst, wenn ein Benutzer den Wert des Elements ändert. Anders als das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird das `change`-Ereignis nicht unbedingt bei jeder Änderung des `value` eines Elements ausgelöst.

Wann das `change`-Ereignis ausgelöst wird, hängt von der Art des Elements und davon ab, wie der Benutzer mit ihm interagiert:

- Wenn ein `{{HTMLElement('input/checkbox', '&lt;input type="checkbox"&gt;')}}`-Element aktiviert oder deaktiviert wird (durch Klicken oder über die Tastatur);
- wenn ein `{{HTMLElement('input/radio', '&lt;input type="radio"&gt;')}}`-Element aktiviert wird (nicht jedoch, wenn es deaktiviert wird);
- wenn der Benutzer die Änderung ausdrücklich bestätigt (z. B. indem er per Mausklick einen Wert aus der Dropdown-Liste eines {{HTMLElement("select")}}-Elements auswählt, im Datumsauswahlfeld ein Datum für `{{HTMLElement('input/date', '&lt;input type="date"&gt;')}}` auswählt oder im Dateiauswahldialog eine Datei für `{{HTMLElement('input/file', '&lt;input type="file"&gt;')}}` auswählt);
- wenn das Element den Fokus verliert, nachdem sein Wert geändert wurde: Dies gilt für Elemente, bei denen der Benutzer einen Wert eintippt, statt ihn auszuwählen, etwa für {{HTMLElement("textarea")}} oder die Typen `{{HTMLElement('input/text', 'text')}}`, `{{HTMLElement('input/search', 'search')}}`, `{{HTMLElement('input/url', 'url')}}`, `{{HTMLElement('input/tel', 'tel')}}`, `{{HTMLElement('input/email', 'email')}}` und `{{HTMLElement('input/password', 'password')}}` des {{HTMLElement('input')}}-Elements.

Die HTML-Spezifikation führt [die `<input>`-Typen auf, die das `change`-Ereignis auslösen sollten](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("change", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle belegen:

```js-nolint
onchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### \<select>-Element

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

### Texteingabefeld

Bei einigen Elementen, darunter `<input type="text">`, wird das `change`-Ereignis erst ausgelöst, wenn das Steuerelement den Fokus verliert. Geben Sie etwas in das folgende Feld ein und klicken Sie anschließend an eine andere Stelle, um das Ereignis auszulösen.

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

Verschiedene Browser sind sich nicht immer einig, ob bei bestimmten Arten der Interaktion ein `change`-Ereignis ausgelöst werden sollte. Beispielsweise löste die Tastaturnavigation in {{HTMLElement("select")}}-Elementen in Gecko früher kein `change`-Ereignis aus, bis der Benutzer die Eingabetaste drückte oder den Fokus vom `<select>`-Element wegbewegte (siehe [Firefox-Bug 126379](https://bugzil.la/126379)). Seit Firefox 63 (Quantum) ist dieses Verhalten jedoch in allen gängigen Browsern einheitlich.
