---
title: :focus-within
slug: Web/CSS/Reference/Selectors/:focus-within
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die **`:focus-within`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt ein Element aus, wenn dieses Element oder eines seiner Nachkommen fokussiert ist. Mit anderen Worten, es repräsentiert ein Element, das selbst durch die {{CSSxRef(":focus")}} Pseudoklasse ausgewählt wird oder einen Nachkommen hat, der durch `:focus` ausgewählt wird. (Dies schließt Nachkommen in [Shadow-Bäumen](/de/docs/Web/API/Web_components/Using_shadow_DOM) ein.)

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

Dieser Selektor ist nützlich, um ein gängiges Beispiel zu nennen, um einen gesamten {{HTMLElement("form")}}-Container hervorzuheben, wenn der Benutzer eines seiner {{HTMLElement("input")}}-Felder fokussiert.

## Syntax

```css
:focus-within {
  /* ... */
}
```

## Beispiele

In diesem Beispiel wird das Formular spezielle Farbgebungsstile erhalten, wenn eines der Texteingabefelder fokussiert wird.

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
- [Erregen Sie die Aufmerksamkeit Ihrer Benutzer mit dem focus-within-Selektor](https://dev.to/vtrpldn/grab-your-user-s-attention-with-the-focus-within-css-selector-4d4)
