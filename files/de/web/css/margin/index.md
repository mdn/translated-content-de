---
title: margin
slug: Web/CSS/margin
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Die **`margin`**-[CSS](/de/docs/Web/CSS)-Kurzschreibweise legt den [Randbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) auf allen vier Seiten eines Elements fest.

{{EmbedInteractiveExample("pages/css/margin.html")}}

## Bestandteil-Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

## Syntax

```css
/* apply to all four sides */
margin: 1em;
margin: -3px;

/* top and bottom | left and right */
margin: 5% auto;

/* top | left and right | bottom */
margin: 1em auto 2em;

/* top | right | bottom | left */
margin: 2px 1em 0 auto;

/* anchor-size() values */
margin: 5% anchor-size(width);
margin: calc(anchor-size(width) / 4) 1em 0
  anchor-size(--myAnchor self-inline, 50px);

/* Keyword values */
margin: auto;

/* Global values */
margin: inherit;
margin: initial;
margin: revert;
margin: revert-layer;
margin: unset;
```

Die `margin`-Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden. Jeder Wert ist ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}} oder das Schlüsselwort `auto`. Negative Werte rücken das Element näher an seine Nachbarn heran, als es standardmäßig der Fall wäre.

- Wird **ein** Wert angegeben, gilt derselbe Rand für **alle vier Seiten**.
- Werden **zwei** Werte angegeben, gilt der erste Rand für **oben und unten**, der zweite für **links und rechts**.
- Werden **drei** Werte angegeben, gilt der erste Rand für **oben**, der zweite für **rechts und links**, der dritte für **unten**.
- Werden **vier** Werte angegeben, gelten die Ränder in der Reihenfolge **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

### Werte

- {{cssxref("length")}}

  - : Die Größe des Randes als fester Wert.

    - Für _ankerpositionierte Elemente_ wird die {{cssxref("anchor-size()")}}-Funktion relativ zur Breite oder Höhe des zugehörigen _Ankerelements_ auf einen {{cssxref("&lt;length&gt;")}}-Wert aufgelöst (siehe [Festlegen des Randes basierend auf der Ankergröße](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_margin_based_on_anchor_size)).

- {{cssxref("percentage")}}
  - : Die Größe des Randes als Prozentsatz, relativ zur Breite (_width_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block).
- `auto`
  - : Der Browser wählt einen geeigneten Rand. Beispielsweise kann dieser Wert in bestimmten Fällen verwendet werden, um ein Element zu zentrieren.

## Beschreibung

Diese Eigenschaft kann verwendet werden, um auf allen vier Seiten eines Elements einen Rand festzulegen. Ränder schaffen zusätzlichen Platz _außerhalb_ eines Elements, im Gegensatz zu {{cssxref("padding")}}, welches zusätzlichen Platz _innerhalb_ eines Elements schafft.

Die oberen und unteren Ränder haben keine Wirkung auf _nicht-[ersetzte](/de/docs/Web/CSS/Replaced_element)_ Inline-Elemente, wie {{HTMLElement("span")}} oder {{HTMLElement("code")}}.

### Horizontale Zentrierung

Ein Element kann horizontal innerhalb seines Elternelements zentriert werden, indem `margin: 0 auto;` gesetzt wird.

Eine häufigere Methode, ein Element horizontal zu zentrieren, ist das Setzen von `display: flex;` und [`justify-content: center;`](/de/docs/Web/CSS/justify-content) auf ein Container-Element, welches [seine Flex-Element-Kindelemente zentriert](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container).

### Margin-Kollaps

Die oberen und unteren Ränder von Elementen werden manchmal zu einem einzigen Rand zusammengefasst, der dem größeren der beiden Ränder entspricht. Siehe [Beherrschung des Margin-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) für weitere Informationen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<div class="center">This element is centered.</div>

<div class="outside">This element is positioned outside of its container.</div>
```

#### CSS

```css
.center {
  margin: auto;
  background: lime;
  width: 66%;
}

.outside {
  margin: 3rem 0 0 -3rem;
  background: cyan;
  width: 66%;
}
```

{{ EmbedLiveSample('Simple_example','100%',120) }}

### Weitere Beispiele

```css
margin: 5%; /* All sides: 5% margin */

margin: 10px; /* All sides: 10px margin */

margin: 1.6em 20px; /* top and bottom: 1.6em margin */
/* left and right: 20px margin */

margin: 10px 3% -1em; /* top:            10px margin */
/* left and right: 3% margin   */
/* bottom:         -1em margin */

margin: 10px 3px 30px 5px; /* top:    10px margin */
/* right:  3px margin  */
/* bottom: 30px margin */
/* left:   5px margin  */

margin: 2em auto; /* top and bottom: 2em margin   */
/* Box is horizontally centered */

margin: auto; /* top and bottom: 0 margin     */
/* Box is horizontally centered */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, und {{cssxref("margin-left")}}
- {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, und {{cssxref("margin-inline-end")}}
- {{cssxref("margin-block")}}- und {{cssxref("margin-inline")}}-Kurzschreibweisen
- [Beherrschung des Margin-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Einführung in das grundlegende CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model)-Modul
