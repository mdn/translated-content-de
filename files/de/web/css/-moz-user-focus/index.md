---
title: -moz-user-focus
slug: Web/CSS/-moz-user-focus
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{deprecated_header}}{{non-standard_header}}

Die **`-moz-user-focus`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um anzugeben, ob ein Element den Fokus haben kann.

Durch das Setzen seines Wertes auf `ignore` können Sie den Fokus auf das Element deaktivieren, was bedeutet, dass der Benutzer das Element nicht aktivieren kann und das Element in der Tabulatorabfolge übersprungen wird.
Der Standardwert ist `none`, was den Fokus auf das Element deaktiviert und den Fokus auf andere Elemente entfernt, wenn versucht wird, das Element auszuwählen.

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
  - : Das Element akzeptiert keinen Tastaturfokus und wird in der Tabulatorreihenfolge übersprungen.
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

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("-moz-user-input")}}
- {{cssxref("user-modify")}}
- {{cssxref("user-select", "-moz-user-select")}}
