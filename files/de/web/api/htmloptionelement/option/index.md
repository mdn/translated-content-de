---
title: "HTMLOptionElement: Option()-Konstruktor"
short-title: Option()
slug: Web/API/HTMLOptionElement/Option
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Der **`Option()`**-Konstruktor erstellt ein neues
[`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement).

## Syntax

```js-nolint
new Option()
new Option(text)
new Option(text, value)
new Option(text, value, defaultSelected)
new Option(text, value, defaultSelected, selected)
```

### Parameter

- `text` {{optional_inline}}
  - : Ein String, der den Inhalt des Elements darstellt, d.h. den angezeigten Text. Wenn dies nicht angegeben ist, wird ein Standardwert von "" (leerer String) verwendet.
- `value` {{optional_inline}}
  - : Ein String, der den Wert des
    [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement) darstellt, d.h. das Wertattribut des entsprechenden
    {{htmlelement("option")}}. Wenn dies nicht angegeben ist, wird der Wert von text als Wert verwendet, z. B. für den zugehörigen Wert des {{htmlelement("select")}}-Elements, wenn das Formular an den Server gesendet wird.
- `defaultSelected` {{optional_inline}}
  - : Ein Wert von entweder `true` oder `false`, der den [`selected`](/de/docs/Web/HTML/Element/option#selected)
    Attributwert festlegt, d.h. damit diese {{htmlelement("option")}} der Standardwert im {{htmlelement("select")}}-Element ist, wenn die Seite zuerst geladen wird. Wenn dies nicht angegeben ist, wird ein Standardwert von false verwendet. Beachten Sie, dass ein Wert von true die Option nicht auf ausgewählt setzt, wenn sie nicht bereits ausgewählt ist.
- `selected` {{optional_inline}}
  - : Ein Wert von entweder `true` oder `false`, der den ausgewählten Zustand der Option setzt; der Standardwert ist false (nicht ausgewählt). Wenn weggelassen, wird die Option nicht ausgewählt, auch wenn das Argument defaultSelected true ist.

## Beispiele

### Einfach neue Optionen hinzufügen

```js
/* assuming we have the following HTML
<select id='s'>

</select>
*/

const s = document.getElementById("s");
const options = [Four, Five, Six];

options.forEach((element, key) => {
  s[key] = new Option(element, key);
});
```

### Optionen mit unterschiedlichen Parametern anhängen

```js
/* assuming we have the following HTML
<select id="s">
    <option>First</option>
    <option>Second</option>
    <option>Third</option>
</select>
*/

const s = document.getElementById("s");
const options = ["zero", "one", "two"];

options.forEach((element, key) => {
  if (element === "zero") {
    s[key] = new Option(element, s.options.length, false, false);
  }
  if (element === "one") {
    s[key] = new Option(element, s.options.length, true, false); // Will add the "selected" attribute
  }
  if (element === "two") {
    s[key] = new Option(element, s.options.length, false, true); // Just will be selected in "view"
  }
});

/* Result
<select id="s">
  <option value="0">zero</option>
  <option value="1" selected="">one</option>
  <option value="2">two</option> // User will see this as 'selected'
</select>
*/
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
