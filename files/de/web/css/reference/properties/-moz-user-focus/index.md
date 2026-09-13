---
title: "`-moz-user-focus` CSS property"
short-title: -moz-user-focus
slug: Web/CSS/Reference/Properties/-moz-user-focus
l10n:
  sourceCommit: 22c0b3059ff71d769af670478cc41605581108d1
---

{{non-standard_header}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`-moz-user-focus`** wird verwendet, um anzugeben, ob ein Element den Fokus erhalten kann.

Indem Sie ihren Wert auf `ignore` setzen, können Sie das Fokussieren des Elements deaktivieren. Das bedeutet, dass Benutzende das Element nicht aktivieren können und das Element in der Tab-Reihenfolge übersprungen wird.
Der Standardwert ist `none`, wodurch das Fokussieren des Elements deaktiviert und der Fokus von anderen Elementen entfernt wird, wenn versucht wird, das Element auszuwählen.

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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `ignore`
  - : Das Element akzeptiert keinen Tastaturfokus und wird in der Tab-Reihenfolge übersprungen.
- `normal`
  - : Das Element kann Tastaturfokus akzeptieren.
- `none`
  - : Das Element akzeptiert keinen Tastaturfokus.
    Beim Versuch, das Element auszuwählen, wird der Fokus von jedem anderen Element entfernt.

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

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("-moz-user-input")}}
- {{cssxref("user-modify")}}
- {{cssxref("user-select", "-moz-user-select")}}
