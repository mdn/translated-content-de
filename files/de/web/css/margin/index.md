---
title: margin
slug: Web/CSS/margin
l10n:
  sourceCommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

{{CSSRef}}

Die **`margin`** [CSS](/de/docs/Web/CSS) Kurzschreibweise setzt den [Randbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) auf allen vier Seiten eines Elements.

{{EmbedInteractiveExample("pages/css/margin.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

## Syntax

```css
/* Apply to all four sides */
margin: 1em;
margin: -3px;

/* top and bottom | left and right */
margin: 5% auto;

/* top | left and right | bottom */
margin: 1em auto 2em;

/* top | right | bottom | left */
margin: 2px 1em 0 auto;

/* Global values */
margin: inherit;
margin: initial;
margin: revert;
margin: revert-layer;
margin: unset;
```

Die `margin`-Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden. Jeder Wert ist eine {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}} oder das Schlüsselwort `auto`. Negative Werte ziehen das Element näher an seine Nachbarn heran, als es standardmäßig der Fall wäre.

- Wenn **ein** Wert angegeben wird, gilt derselbe Rand für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste Rand für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt der erste Rand **oben**, der zweite **rechts und links**, der dritte **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Ränder in der Reihenfolge **oben**, **rechts**, **unten** und **links** im Uhrzeigersinn.

### Werte

- {{cssxref("length")}}
  - : Die Größe des Rands als fester Wert.
- {{cssxref("percentage")}}
  - : Die Größe des Rands als prozentualer Wert, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [beinhaltenden Blocks](/de/docs/Web/CSS/Containing_block).
- `auto`
  - : Der Browser wählt einen geeigneten Rand. Zum Beispiel kann in bestimmten Fällen dieser Wert verwendet werden, um ein Element zu zentrieren.

## Beschreibung

Diese Eigenschaft kann verwendet werden, um einen Rand an allen vier Seiten eines Elements festzulegen. Ränder schaffen zusätzlichen Raum _um_ ein Element, im Gegensatz zu {{cssxref("padding")}}, das zusätzlichen Raum _innerhalb_ eines Elements schafft.

Die oberen und unteren Ränder haben keinen Einfluss auf _nicht-[ersetzte](/de/docs/Web/CSS/Replaced_element)_ Inline-Elemente, wie {{HTMLElement("span")}} oder {{HTMLElement("code")}}.

### Horizontales Zentrieren

Sie können ein Element innerhalb seines übergeordneten Elements horizontal zentrieren, indem Sie `margin: 0 auto;` festlegen.

Eine gebräuchlichere Methode, ein Element horizontal zu zentrieren, besteht darin, `display: flex;` und [`justify-content: center;`](/de/docs/Web/CSS/justify-content) auf einem Container festzulegen, der [seine Flex-Element-Kinder zentriert](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container).

### Rand-Kollaps

Die oberen und unteren Ränder von Elementen werden manchmal zu einem einzigen Rand zusammengefasst, der dem größeren der beiden Ränder entspricht. Siehe [Rand-Kollaps meistern](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) für weitere Informationen.

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
- {{cssxref("margin-block")}} und {{cssxref("margin-inline")}} Kurzschreibweisen
- [Rand-Kollaps meistern](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Einführung in das grundlegende CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul
