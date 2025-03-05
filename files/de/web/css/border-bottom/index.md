---
title: border-bottom
slug: Web/CSS/border-bottom
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`border-bottom`** [Kurzform](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt den unteren [Rand](/de/docs/Web/CSS/border) eines Elements fest. Sie setzt die Werte von {{cssxref("border-bottom-width")}}, {{cssxref("border-bottom-style")}} und {{cssxref("border-bottom-color")}}.

{{EmbedInteractiveExample("pages/css/border-bottom.html")}}

Wie bei allen Kurzform-Eigenschaften, setzt `border-bottom` immer die Werte aller Eigenschaften, die es setzen kann, auch wenn sie nicht angegeben sind. Es setzt die nicht angegebenen auf ihre Standardwerte. Betrachten Sie den folgenden Code:

```css
border-bottom-style: dotted;
border-bottom: thick green;
```

Er ist tatsächlich gleich wie dieser:

```css
border-bottom-style: dotted;
border-bottom: none thick green;
```

Der Wert von {{cssxref("border-bottom-style")}}, der vor `border-bottom` angegeben wurde, wird ignoriert. Da der Standardwert von {{cssxref("border-bottom-style")}} `none` ist, führt das Nicht-Angeben des `border-style`-Teils zu keinem Rand.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("border-bottom-color")}}
- {{cssxref("border-bottom-style")}}
- {{cssxref("border-bottom-width")}}

## Syntax

```css
border-bottom: 1px;
border-bottom: 2px dotted;
border-bottom: medium dashed blue;

/* Global values */
border-bottom: inherit;
border-bottom: initial;
border-bottom: revert;
border-bottom: revert-layer;
border-bottom: unset;
```

Die drei Werte der Kurzform-Eigenschaft können in beliebiger Reihenfolge angegeben werden, und ein oder zwei von ihnen können weggelassen werden.

### Werte

- `<br-width>`
  - : Siehe {{cssxref("border-bottom-width")}}.
- `<br-style>`
  - : Siehe {{cssxref("border-bottom-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Siehe {{cssxref("border-bottom-color")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anwendung eines unteren Randes

#### HTML

```html
<div>This box has a border on the bottom side.</div>
```

#### CSS

```css
div {
  border-bottom: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### Ergebnisse

{{EmbedLiveSample('Applying_a_bottom_border')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("border")}}
- {{cssxref("border-block")}}
- {{cssxref("outline")}}
