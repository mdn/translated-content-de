---
title: "HTMLOptionElement: Option()-Konstruktor"
short-title: Option()
slug: Web/API/HTMLOptionElement/Option
l10n:
  sourceCommit: ff4c8cf18c9247e93fdeee03c44499f85e5e617c
---

{{APIRef("HTML DOM")}}

Der **`Option()`**-Konstruktor erzeugt ein neues
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
    {{htmlelement("option")}}. Wenn dies nicht angegeben ist, wird der Wert von `text` als Wert verwendet, z. B. für den Wert des zugehörigen {{htmlelement("select")}}-Elements, wenn das Formular an den Server gesendet wird.
- `defaultSelected` {{optional_inline}}
  - : Ein Wert von entweder `true` oder `false`, der den Wert des [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attributs setzt, d.h. dass diese {{htmlelement("option")}} der Standardwert ist, der im {{htmlelement("select")}}-Element ausgewählt wird, wenn die Seite zum ersten Mal geladen wird. Wenn dies nicht angegeben ist, wird der Standardwert `false` verwendet. Beachten Sie, dass ein Wert von `true` die Option nicht auf ausgewählt setzt, wenn sie nicht bereits ausgewählt ist.
- `selected` {{optional_inline}}
  - : Ein Wert von entweder `true` oder `false`, der den ausgewählten Zustand der Option setzt; der Standard ist `false` (nicht ausgewählt). Wenn weggelassen, wird die Option selbst dann nicht ausgewählt, wenn das Argument `defaultSelected` wahr ist.

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

```html
<select id="s"></select>
```

```js
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
    s[key] = new Option(element, s.options.length, false, true); // Will actually be selected in the view
  }
});
```

Ergebnis:

```html
<select id="s">
  <option value="0">zero</option>
  <option value="1" selected>one</option>
  <option value="2">two</option>
  <!-- User will see two as 'selected' -->
</select>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
