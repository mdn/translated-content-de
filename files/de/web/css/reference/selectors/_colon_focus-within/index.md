---
title: CSS-Pseudoklasse `:focus-within`
short-title: :focus-within
slug: Web/CSS/Reference/Selectors/:focus-within
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

Die **CSS-Pseudoklasse `:focus-within`** wählt ein Element aus, wenn dieses Element oder eines seiner Nachfahren den Fokus hat. Anders ausgedrückt: Sie steht für ein Element, auf das entweder selbst die Pseudoklasse {{CSSxRef(":focus")}} zutrifft oder das einen Nachfahren hat, auf den `:focus` zutrifft. Dazu gehören auch Nachfahren in [Shadow Trees](/de/docs/Web/API/Web_components/Using_shadow_DOM).

Mit diesem Selektor lässt sich beispielsweise ein gesamter {{HTMLElement("form")}}-Container hervorheben, wenn ein {{HTMLElement("input")}}-Feld darin den Fokus erhält.

{{InteractiveExample("CSS Demo: :focus-within", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

label:focus-within {
  font-weight: bold;
}
```

```html interactive-example
<p>Which flavor would you like to order?</p>
<label>Full Name: <input name="firstName" type="text" /></label>
<label
  >Flavor:
  <select name="flavor">
    <option>Cherry</option>
    <option>Green Tea</option>
    <option>Moose Tracks</option>
    <option>Mint Chip</option>
  </select>
</label>
```

## Syntax

```css
:focus-within {
  /* ... */
}
```

## Beispiele

In diesem Beispiel erhält der Container eine besondere Farbgestaltung, sobald eines der Texteingabefelder den Fokus erhält.

### HTML

```html
<ul class="group">
  <li>
    <label for="given-name">Given Name:</label>
    <input id="given-name" type="text" />
  </li>
  <li>
    <label for="family-name">Family Name:</label>
    <input id="family-name" type="text" />
  </li>
</ul>
```

### CSS

```css
.group {
  list-style: none;
  border: 1px solid;
  color: gray;
  padding: 4px;
}

.group:focus-within {
  background: #ffff88;
  color: black;
}

input {
  margin: 4px;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 500, 150)}}

Versuchen Sie, Text in die Eingabefelder einzugeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}}
- [Mit dem Selektor focus-within die Aufmerksamkeit Ihrer Nutzer gewinnen](https://dev.to/vtrpldn/grab-your-user-s-attention-with-the-focus-within-css-selector-4d4)
