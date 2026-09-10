---
title: CSS-Pseudoklasse `:focus-within`
short-title: :focus-within
slug: Web/CSS/Reference/Selectors/:focus-within
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) **`:focus-within`** stimmt mit einem Element überein, wenn das Element selbst oder einer seiner Nachkommen fokussiert ist. Mit anderen Worten stellt sie ein Element dar, das selbst von der Pseudoklasse {{CSSxRef(":focus")}} erfasst wird oder einen Nachkommen hat, der von `:focus` erfasst wird. (Dies schließt Nachkommen in [Shadow Trees](/de/docs/Web/API/Web_components/Using_shadow_DOM) ein.)

Dieser Selektor ist beispielsweise nützlich, um einen gesamten {{HTMLElement("form")}}-Container hervorzuheben, wenn die Benutzerin oder der Benutzer eines seiner {{HTMLElement("input")}}-Felder fokussiert.

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
<form>
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
</form>
```

## Syntax

```css
:focus-within {
  /* ... */
}
```

## Beispiele

In diesem Beispiel erhält das Formular spezielle Farbformatierungen, wenn eine der beiden Texteingaben den Fokus erhält.

### HTML

```html
<p>Try typing into this form.</p>

<form>
  <label for="given_name">Given Name:</label>
  <input id="given_name" type="text" />
  <br />
  <label for="family_name">Family Name:</label>
  <input id="family_name" type="text" />
</form>
```

### CSS

```css
form {
  border: 1px solid;
  color: gray;
  padding: 4px;
}

form:focus-within {
  background: #ffff88;
  color: black;
}

input {
  margin: 4px;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 500, 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}}
- [Erregen Sie die Aufmerksamkeit Ihrer Benutzerinnen und Benutzer mit dem focus-within-Selektor](https://dev.to/vtrpldn/grab-your-user-s-attention-with-the-focus-within-css-selector-4d4)
