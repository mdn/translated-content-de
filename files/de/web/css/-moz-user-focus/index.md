---
title: -moz-user-focus
slug: Web/CSS/-moz-user-focus
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}} {{deprecated_header}}{{non-standard_header}}

Die **`-moz-user-focus`**-Eigenschaft ([CSS](/de/docs/Web/CSS)) wird verwendet, um anzuzeigen, ob ein Element den Fokus erhalten kann.

Indem Sie den Wert auf `ignore` setzen, können Sie das Fokussieren des Elements deaktivieren. Das bedeutet, dass der Benutzer das Element nicht aktivieren kann und das Element in der Tabulatorreihenfolge übersprungen wird. Der Standardwert ist `none`, welcher das Fokussieren auf das Element deaktiviert und den Fokus von anderen Elementen entfernt, wenn versucht wird, das betreffende Element auszuwählen.

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
    Ein Versuch, das Element auszuwählen, entfernt den Fokus von jedem anderen Element.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

```plain
-moz-user-focus =
  ignore | normal | none
```

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

Gehört zu keinem Standard.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("-moz-user-input")}}
- {{cssxref("user-modify")}}
- {{cssxref("user-select", "-moz-user-select")}}
