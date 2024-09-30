---
title: "-moz-user-focus"
slug: Web/CSS/-moz-user-focus
l10n:
  sourceCommit: 05a463a3bc1af6e1b1e0d6a273582d954ae00ed0
---

{{CSSRef}} {{deprecated_header}}{{non-standard_header}}

Die **`-moz-user-focus`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um anzugeben, ob ein Element den Fokus erhalten kann.

Indem Sie den Wert auf `ignore` setzen, können Sie den Fokus auf das Element deaktivieren. Das bedeutet, dass der Benutzer das Element nicht aktivieren kann und es in der Tab-Reihenfolge übersprungen wird. Der Standardwert ist `none`, was den Fokus auf das Element deaktiviert und den Fokus von anderen Elementen entfernt, wenn versucht wird, das Element auszuwählen.

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
    Ein Versuch, das Element auszuwählen, entfernt den Fokus von jedem anderen Element.

## Formale Definition

{{CSSInfo}}

## Formaler Syntax

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

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("-moz-user-input")}}
- {{cssxref("user-modify")}}
- {{cssxref("user-select", "-moz-user-select")}}
