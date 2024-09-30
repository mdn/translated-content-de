---
title: border-bottom
slug: Web/CSS/border-bottom
l10n:
  sourceCommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{CSSRef}}

Die **`border-bottom`** [Kurzform](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft setzt den unteren [Rand](/de/docs/Web/CSS/border) eines Elements. Sie legt die Werte von {{cssxref("border-bottom-width")}}, {{cssxref("border-bottom-style")}} und {{cssxref("border-bottom-color")}} fest.

{{EmbedInteractiveExample("pages/css/border-bottom.html")}}

Wie bei allen Kurzform-Eigenschaften setzt `border-bottom` stets die Werte aller ihr zugeordneten Eigenschaften, selbst wenn sie nicht spezifiziert sind. Nicht spezifizierte Werte werden auf ihre Standardwerte gesetzt. Betrachten Sie den folgenden Code:

```css
border-bottom-style: dotted;
border-bottom: thick green;
```

Er entspricht tatsächlich diesem hier:

```css
border-bottom-style: dotted;
border-bottom: none thick green;
```

Der vor `border-bottom` angegebene Wert von {{cssxref("border-bottom-style")}} wird ignoriert. Da der Standardwert von {{cssxref("border-bottom-style")}} `none` ist, resultiert das Nicht-Angeben des `border-style`-Teils in keinem Rand.

## Zusammengesetzte Eigenschaften

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

### Anwenden eines unteren Rands

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
