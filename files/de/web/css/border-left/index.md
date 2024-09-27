---
title: border-left
slug: Web/CSS/border-left
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die **`border-left`** [Kurzform](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft setzt alle Eigenschaften des linken [Rahmens](/de/docs/Web/CSS/border) eines Elements.

{{EmbedInteractiveExample("pages/css/border-left.html")}}

Wie bei allen Kurzformeigenschaften setzt `border-left` immer die Werte aller Eigenschaften, die sie setzen kann, auch wenn sie nicht angegeben sind. Die nicht angegebenen werden auf ihre Standardwerte gesetzt. Betrachten Sie den folgenden Code:

```css
border-left-style: dotted;
border-left: thick green;
```

Tatsächlich entspricht er diesem hier:

```css
border-left-style: dotted;
border-left: none thick green;
```

Der Wert von {{cssxref("border-left-style")}}, der vor `border-left` angegeben wurde, wird ignoriert. Da der Standardwert von {{cssxref("border-left-style")}} `none` ist, führt das Nicht-Angeben des `border-style`-Teils dazu, dass kein Rahmen vorhanden ist.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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

Die drei Werte der Kurzformeigenschaft können in beliebiger Reihenfolge angegeben werden und einer oder zwei von ihnen können weggelassen werden.

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

### Anwenden eines linken Rahmens

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
- [Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders)
- [CSS lernen: Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
