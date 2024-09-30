---
title: ":focus-within"
slug: Web/CSS/:focus-within
l10n:
  sourceCommit: ac2874857a3de0be38430e58068597edf0afa2b2
---

{{CSSRef}}

Die **`:focus-within`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) trifft auf ein Element zu, wenn das Element oder eines seiner Nachfahren fokussiert ist. Mit anderen Worten repräsentiert sie ein Element, das selbst durch die {{CSSxRef(":focus")}}-Pseudoklasse getroffen wird oder einen Nachfahren hat, der durch `:focus` getroffen wird. (Dies schließt Nachfahren in [Shadow-Trees](/de/docs/Web/API/Web_components/Using_shadow_DOM) ein.)

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-focus-within.html", "tabbed-shorter")}}

Dieser Selektor ist nützlich, um ein gängiges Beispiel zu nennen, wenn Sie den gesamten {{HTMLElement("form")}}-Container hervorheben möchten, wenn der Benutzer auf eines seiner {{HTMLElement("input")}}-Felder fokussiert.

## Syntax

```css
:focus-within {
  /* ... */
}
```

## Beispiele

In diesem Beispiel erhält das Formular spezielle Farbgebungsstile, wenn entweder ein Texteingabefeld fokussiert wird.

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
- [Erregen Sie die Aufmerksamkeit Ihrer Benutzer mit dem focus-within Selektor](https://dev.to/vtrpldn/grab-your-user-s-attention-with-the-focus-within-css-selector-4d4)
