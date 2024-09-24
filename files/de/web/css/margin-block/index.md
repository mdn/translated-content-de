---
title: margin-block
slug: Web/CSS/margin-block
l10n:
  sourceCommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{CSSRef}}

Die **`margin-block`** [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) definiert die logischen Anfangs- und Endränder eines Elements, die je nach Schreibmodus, Richtung und Textausrichtung des Elements auf physische Ränder abgebildet werden.

{{EmbedInteractiveExample("pages/css/margin-block.html")}}

## Bestandteile der Eigenschaft

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("margin-block-start")}}
- {{cssxref("margin-block-end")}}

## Syntax

```css
/* <length> Werte */
margin-block: 10px 20px; /* Eine absolute Länge */
margin-block: 1em 2em; /* relativ zur Textgröße */
margin-block: 5% 2%; /* relativ zur Breite des nächsten Blockcontainers */
margin-block: 10px; /* setzt sowohl Start- als auch Endwerte */

/* Schlüsselwortwerte */
margin-block: auto;

/* Globale Werte */
margin-block: inherit;
margin-block: initial;
margin-block: revert;
margin-block: revert-layer;
margin-block: unset;
```

Diese Eigenschaft entspricht den {{CSSxRef("margin-top")}} und {{CSSxRef("margin-bottom")}}, oder den {{CSSxRef("margin-right")}} und {{CSSxRef("margin-left")}} Eigenschaften, abhängig von den definierten Werten für {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, und {{CSSxRef("text-orientation")}}.

Die `margin-block`-Eigenschaft kann mit einem oder zwei Werten angegeben werden.

- Wenn **ein** Wert angegeben wird, gilt derselbe Rand für **sowohl Anfang als auch Ende**.
- Wenn **zwei** Werte angegeben werden, gilt der erste Rand für den **Anfang**, der zweite für das **Ende**.

### Werte

Die `margin-block`-Eigenschaft nimmt die gleichen Werte wie die {{CSSxRef("margin", "", "#values")}}-Eigenschaft an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung von Anfangs- und Endrändern im Block

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: auto;
  border: 1px solid green;
}

p {
  margin: 0;
  margin-block: 20px 40px;
  background-color: tan;
}

.verticalExample {
  writing-mode: vertical-rl;
}
```

#### HTML

```html
<div>
  <p>Beispieltext</p>
</div>
<div class="verticalExample">
  <p>Beispieltext</p>
</div>
```

#### Ergebnis

{{EmbedLiveSample("Setting_block_start_and_end_margins", 140, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die zugeordneten physischen Eigenschaften: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}}, und {{CSSxRef("margin-left")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
