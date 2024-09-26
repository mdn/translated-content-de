---
title: border-bottom
slug: Web/CSS/border-bottom
l10n:
  sourceCommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{CSSRef}}

Die **`border-bottom`** [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft setzt den unteren [Rahmen](/de/docs/Web/CSS/border) eines Elements. Sie legt die Werte von {{cssxref("border-bottom-width")}}, {{cssxref("border-bottom-style")}} und {{cssxref("border-bottom-color")}} fest.

{{EmbedInteractiveExample("pages/css/border-bottom.html")}}

Wie bei allen Kurzschreibweise-Eigenschaften legt `border-bottom` immer die Werte aller Eigenschaften fest, die es setzen kann, selbst wenn sie nicht spezifiziert sind. Die nicht spezifizierten werden auf ihre Standardwerte gesetzt. Betrachten Sie den folgenden Code:

```css
border-bottom-style: dotted;
border-bottom: thick green;
```

Es ist tatsächlich dasselbe wie dieses hier:

```css
border-bottom-style: dotted;
border-bottom: none thick green;
```

Der Wert von {{cssxref("border-bottom-style")}}, der vor `border-bottom` angegeben wurde, wird ignoriert. Da der Standardwert von {{cssxref("border-bottom-style")}} `none` ist, führt das Nicht-Angeben des `border-style`-Teils zu keinem Rahmen.

## Bestandteile Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("border-bottom-color")}}
- {{cssxref("border-bottom-style")}}
- {{cssxref("border-bottom-width")}}

## Syntax

```css
border-bottom: 1px;
border-bottom: 2px dotted;
border-bottom: medium dashed blue;

/* Globale Werte */
border-bottom: inherit;
border-bottom: initial;
border-bottom: revert;
border-bottom: revert-layer;
border-bottom: unset;
```

Die drei Werte der Kurzschreibweise können in beliebiger Reihenfolge angegeben werden, und ein oder zwei von ihnen können weggelassen werden.

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

### Anwendung eines unteren Rahmens

#### HTML

```html
<div>Dieses Feld hat einen Rahmen an der Unterseite.</div>
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