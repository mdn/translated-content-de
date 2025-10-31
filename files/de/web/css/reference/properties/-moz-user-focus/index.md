---
title: -moz-user-focus
slug: Web/CSS/Reference/Properties/-moz-user-focus
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{deprecated_header}}{{non-standard_header}}

Die **`-moz-user-focus`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um anzugeben, ob ein Element den Fokus haben kann.

Durch das Setzen des Werts auf `ignore` kann das Fokussieren des Elements deaktiviert werden, was bedeutet, dass der Benutzer das Element nicht aktivieren kann und das Element in der Tab-Reihenfolge übersprungen wird. Der Standardwert ist `none`, was das Fokussieren auf das Element deaktiviert und den Fokus auf anderen Elementen entfernt, wenn versucht wird, das Element auszuwählen.

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

- `ignore`
  - : Das Element akzeptiert keine Tastaturfokussierung und wird in der Tab-Reihenfolge übersprungen.
- `normal`
  - : Das Element kann Tastaturfokus akzeptieren.
- `none`
  - : Das Element akzeptiert keine Tastaturfokussierung.
    Der Versuch, das Element auszuwählen, entfernt den Fokus von jedem anderen Element.

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

Teil keines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("-moz-user-input")}}
- {{cssxref("user-modify")}}
- {{cssxref("user-select", "-moz-user-select")}}
