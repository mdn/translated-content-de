---
title: "`-moz-user-focus` CSS property"
short-title: -moz-user-focus
slug: Web/CSS/Reference/Properties/-moz-user-focus
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{deprecated_header}}{{non-standard_header}}

Die **`-moz-user-focus`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um anzugeben, ob ein Element den Fokus erhalten kann.

Wenn Sie den Wert auf `ignore` setzen, können Sie das Fokussieren des Elements deaktivieren, was bedeutet, dass der Benutzer das Element nicht aktivieren kann und das Element in der Tabulatorreihenfolge übersprungen wird. Der Standardwert ist `none`, was das Fokussieren auf das Element deaktiviert und den Fokus auf anderen Elementen entfernt, wenn versucht wird, das Element auszuwählen.

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
  - : Das Element akzeptiert keinen Tastaturfokus und wird in der Tab-Reihenfolge übersprungen.
- `normal`
  - : Das Element kann Tastaturfokus akzeptieren.
- `none`
  - : Das Element akzeptiert keinen Tastaturfokus.
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

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("-moz-user-input")}}
- {{cssxref("user-modify")}}
- {{cssxref("user-select", "-moz-user-select")}}
