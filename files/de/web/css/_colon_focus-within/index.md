---
title: ":focus-within"
slug: Web/CSS/:focus-within
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:focus-within`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt ein Element aus, wenn entweder dieses Element selbst oder eines seiner Nachkommen fokussiert ist. Anders ausgedrückt repräsentiert sie ein Element, das entweder von der Pseudoklasse {{CSSxRef(":focus")}} selbst ausgewählt wird oder einen Nachkommen hat, der von `:focus` ausgewählt wird. (Dies schließt Nachkommen in [Shadow-Bäumen](/de/docs/Web/API/Web_components/Using_shadow_DOM) mit ein.)

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-focus-within.html", "tabbed-shorter")}}

Dieser Selektor ist nützlich, um ein häufiges Beispiel zu nennen, um einen gesamten {{HTMLElement("form")}}-Container hervorzuheben, wenn der Benutzer eines seiner {{HTMLElement("input")}}-Felder fokussiert.

## Syntax

```css
:focus-within {
  /* ... */
}
```

## Beispiele

In diesem Beispiel erhält das Formular spezielle Farb-Stile, wenn eines der Textfelder den Fokus erhält.

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
  background: #ff8;
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
- [Erregen Sie die Aufmerksamkeit Ihres Nutzers mit dem focus-within-Selektor](https://dev.to/vtrpldn/grab-your-user-s-attention-with-the-focus-within-css-selector-4d4)
