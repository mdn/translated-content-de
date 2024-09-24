---
title: inset
slug: Web/CSS/inset
l10n:
  sourceCommit: 09c431e017263c263558df1821f187f76660dde9
---

{{CSSRef}}

Die **`inset`** [CSS](/de/docs/Web/CSS)-Eigenschaft ist eine Kurzform, die den {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und/oder {{cssxref("left")}} Eigenschaften entspricht. Sie verwendet die gleiche Mehrwert-Syntax wie die Kurzform von {{cssxref("margin")}}.

Diese {{glossary("inset properties", "inset-Eigenschaft")}} hat keine Auswirkung auf nicht positionierte Elemente.

{{EmbedInteractiveExample("pages/css/inset.html")}}

Obwohl sie Teil des [Moduls für CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) ist, definiert sie keine _logischen_ Versätze. Sie definiert _physische_ Versätze, unabhängig vom Schreibmodus, der Richtung und Textorientierung des Elements.

## Zusammensetzende Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{Cssxref("top")}}
- {{Cssxref("right")}}
- {{Cssxref("bottom")}}
- {{Cssxref("left")}}

## Syntax

```css
/* <length> Werte */
inset: 10px; /* Wert für alle Kanten */
inset: 4px 8px; /* oben/unten links/rechts */
inset: 5px 15px 10px; /* oben links/rechts unten */
inset: 2.4em 3em 3em 3em; /* oben rechts unten links */
inset: calc(anchor(50%) + 10px) anchor(self-start) auto auto;
inset: auto auto anchor(center) anchor(self-end);

/* <percentage> in Bezug auf die Breite (links/rechts) oder Höhe (oben/unten) des umgebenden Blocks */
inset: 10% 5% 5% 5%;

/* Schlüsselwortwert */
inset: auto;

/* Globale Werte */
inset: inherit;
inset: initial;
inset: revert;
inset: revert-layer;
inset: unset;
```

### Werte

Die `inset`-Eigenschaft nimmt die gleichen Werte an wie die {{cssxref("left")}}-Eigenschaft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Versätze für ein Element festlegen

#### HTML

```html
<div>
  <span class="exampleText">Beispieltext</span>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 150px;
  height: 120px;
  position: relative;
}

.exampleText {
  writing-mode: sideways-rl;
  position: absolute;
  inset: 20px 40px 30px 10px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_offsets_for_an_element", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Langform-Box-Offset-Eigenschaften: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, und {{cssxref("left")}}.
- Die zugeordneten logischen Kurzformen: {{cssxref("inset-block")}} und {{cssxref("inset-inline")}}
- Die Mehrwert-Syntax der {{cssxref("margin")}}-Kurzform.
