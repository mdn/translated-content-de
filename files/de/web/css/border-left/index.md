---
title: border-left
slug: Web/CSS/border-left
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`border-left`** [Shorthand](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft legt alle Eigenschaften des linken [Rands](/de/docs/Web/CSS/border) eines Elements fest.

{{EmbedInteractiveExample("pages/css/border-left.html")}}

Wie bei allen Shorthand-Eigenschaften setzt `border-left` immer die Werte aller Eigenschaften, die es setzen kann, selbst wenn sie nicht angegeben sind. Nicht angegebene Werte werden auf ihre Standardwerte gesetzt. Betrachten Sie folgenden Code:

```css
border-left-style: dotted;
border-left: thick green;
```

Dieser ist eigentlich derselbe wie dieser:

```css
border-left-style: dotted;
border-left: none thick green;
```

Der Wert von {{cssxref("border-left-style")}}, der vor `border-left` angegeben wurde, wird ignoriert. Da der Standardwert von {{cssxref("border-left-style")}} `none` ist, führt das Nicht-Angeben des `border-style`-Teils zu keinem Rand.

## Zugehörige Eigenschaften

Diese Eigenschaft ist ein Shorthand für folgende CSS-Eigenschaften:

- {{cssxref("border-left-color")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-left-width")}}

## Syntax

```css
border-left: 1px;
border-left: 2px dotted;
border-left: medium dashed blue;

/* Global values */
border-left: inherit;
border-left: initial;
border-left: revert;
border-left: revert-layer;
border-left: unset;
```

Die drei Werte der Shorthand-Eigenschaft können in beliebiger Reihenfolge angegeben werden, und ein oder zwei von ihnen können weggelassen werden.

### Werte

- `<br-width>`
  - : Siehe {{cssxref("border-left-width")}}.
- `<br-style>`
  - : Siehe {{cssxref("border-left-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Siehe {{cssxref("border-left-color")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anwendung eines linken Randes

#### HTML

```html
<div>This box has a border on the left side.</div>
```

#### CSS

```css
div {
  border-left: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### Ergebnisse

{{EmbedLiveSample('Applying_a_left_border')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("border")}}
- {{cssxref("border-block")}}
- {{cssxref("outline")}}
- [Hintergründe und Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders)
- [CSS lernen: Hintergründe und Ränder](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
