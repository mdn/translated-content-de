---
title: "`border-top` CSS-Eigenschaft"
short-title: border-top
slug: Web/CSS/Reference/Properties/border-top
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`border-top`** [CSS](/de/docs/Web/CSS) [Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) Eigenschaft setzt alle Eigenschaften des oberen [Randes](/de/docs/Web/CSS/Reference/Properties/border) eines Elements.

{{InteractiveExample("CSS Demo: border-top")}}

```css interactive-example-choice
border-top: solid;
```

```css interactive-example-choice
border-top: dashed red;
```

```css interactive-example-choice
border-top: 1rem solid;
```

```css interactive-example-choice
border-top: thick double #32a1ce;
```

```css interactive-example-choice
border-top: 4mm ridge rgb(211 220 50 / 0.6);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eeeeee;
  color: darkmagenta;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## Bestandteile der Eigenschaft

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("border-top-color")}}
- {{cssxref("border-top-style")}}
- {{cssxref("border-top-width")}}

## Syntax

```css
border-top: 1px;
border-top: 2px dotted;
border-top: medium dashed green;

/* Global values */
border-top: inherit;
border-top: initial;
border-top: revert;
border-top: revert-layer;
border-top: unset;
```

Die drei Werte der Kurzform-Eigenschaft können in beliebiger Reihenfolge angegeben werden, und einer oder zwei von ihnen können weggelassen werden.

### Werte

- `<br-width>`
  - : Siehe {{cssxref("border-top-width")}}.
- `<br-style>`
  - : Siehe {{cssxref("border-top-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Siehe {{cssxref("border-top-color")}}.

## Beschreibung

Wie bei allen Kurzform-Eigenschaften setzt `border-top` immer die Werte aller Eigenschaften, die es setzen kann, selbst wenn sie nicht angegeben sind. Die nicht angegebenen werden auf ihre Standardwerte gesetzt. Betrachten Sie den folgenden Code:

```css
border-top-style: dotted;
border-top: thick green;
```

Er ist tatsächlich gleichbedeutend mit diesem:

```css
border-top-style: dotted;
border-top: none thick green;
```

Der Wert von {{cssxref("border-top-style")}}, der vor `border-top` angegeben wurde, wird ignoriert. Da der Standardwert von {{cssxref("border-top-style")}} `none` ist, führt das Nicht-Angeben des `border-style`-Teils zu keinem Rand.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anwenden eines oberen Randes

#### HTML

```html
<div>This box has a border on the top side.</div>
```

#### CSS

```css
div {
  border-top: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### Ergebnisse

{{EmbedLiveSample('Applying_a_top_border')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("border")}}
- {{cssxref("border-block")}}
- {{cssxref("outline")}}
