---
title: "`-moz-user-focus` CSS property"
short-title: -moz-user-focus
slug: Web/CSS/Reference/Properties/-moz-user-focus
l10n:
  sourceCommit: 47def3151aadab22b9438c2eedba276d51f65f25
---

{{non-standard_header}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`-moz-user-focus`** gibt an, ob ein Element den Fokus erhalten kann.

Wenn Sie den Wert auf `ignore` setzen, verhindern Sie, dass das Element den Fokus erhält. Dadurch können Benutzer das Element nicht aktivieren, und es wird bei der Tabulatornavigation übersprungen.
Der Standardwert ist `none`. Damit kann das Element den Fokus nicht erhalten; wird versucht, das Element auszuwählen, verlieren andere Elemente ihren Fokus.

## Syntax

```css
/* Keyword values */
-moz-user-focus: none;
-moz-user-focus: normal;
-moz-user-focus: ignore;

/* Global values */
-moz-user-focus: inherit;
-moz-user-focus: initial;
-moz-user-focus: unset;
```

### Werte

Diese Eigenschaft wird mit einem der folgenden Schlüsselwortwerte angegeben:

- `ignore`
  - : Das Element kann den Tastaturfokus nicht erhalten und wird bei der Tabulatornavigation übersprungen.
- `normal`
  - : Das Element kann den Tastaturfokus erhalten.
- `none`
  - : Das Element kann den Tastaturfokus nicht erhalten.
    Beim Versuch, das Element auszuwählen, verliert jedes andere fokussierte Element den Fokus.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-moz-user-focus = ignore | normal | none`)}}

## Beispiele

### HTML

```html
<input class="ignored" value="The user cannot focus on this element." />
```

### CSS

```css
.ignored {
  -moz-user-focus: ignore;
}
```

## Spezifikationen

Nicht Bestandteil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("-moz-user-input")}}
- {{cssxref("user-modify")}}
- {{cssxref("user-select", "-moz-user-select")}}
