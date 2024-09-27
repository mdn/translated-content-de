---
title: margin
slug: Web/CSS/margin
l10n:
  sourceCommit: 7016e373522264e7e7c19d854df595c981120616
---

{{CSSRef}}

Die **`margin`** [CSS](/de/docs/Web/CSS) Kurzschreibweise legt den [Randbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) an allen vier Seiten eines Elements fest.

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

Die `margin`-Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden. Jeder Wert ist ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}}, oder das Schlüsselwort `auto`. Negative Werte ziehen das Element näher an seine Nachbarn heran, als es standardmäßig der Fall wäre.

- Wenn **ein** Wert angegeben ist, gilt derselbe Rand für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben sind, gilt der erste Rand für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben sind, gilt der erste Rand für **oben**, der zweite für **rechts und links**, der dritte für **unten**.
- Wenn **vier** Werte angegeben sind, gelten die Ränder in dieser Reihenfolge (im Uhrzeigersinn) für **oben**, **rechts**, **unten** und **links**.

### Werte

- {{cssxref("length")}}
  - : Die Größe des Randes als fester Wert.
- {{cssxref("percentage")}}
  - : Die Größe des Randes als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umgebenden Blocks](/de/docs/Web/CSS/Containing_block).
- `auto`
  - : Der Browser wählt einen geeigneten Rand aus. In bestimmten Fällen kann dieser Wert beispielsweise verwendet werden, um ein Element zu zentrieren.

## Beschreibung

Diese Eigenschaft kann verwendet werden, um einen Rand an allen vier Seiten eines Elements zu setzen. Ränder erzeugen zusätzlichen Raum _um_ ein Element herum, im Gegensatz zu {{cssxref("padding")}}, das zusätzlichen Raum _innerhalb_ eines Elements erzeugt.

Die oberen und unteren Ränder haben keinen Effekt auf _nicht-[ersetzte](/de/docs/Web/CSS/Replaced_element)_ Inline-Elemente, wie {{HTMLElement("span")}} oder {{HTMLElement("code")}}.

### Horizontales Zentrieren

Sie können ein Element horizontal innerhalb seines Elternteils zentrieren, indem Sie `margin: 0 auto;` festlegen.

Eine häufigere Methode, ein Element horizontal zu zentrieren, ist durch Festlegen von `display: flex;` und [`justify-content: center;`](/de/docs/Web/CSS/justify-content) auf einem Container, der seine flexiblen Kind-Elemente [zentriert](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container).

### Rand-Zusammenfall

Die oberen und unteren Ränder von Elementen werden manchmal zu einem einzigen Rand zusammengefasst, der dem größeren der beiden Ränder entspricht. Weitere Informationen finden Sie unter [Rand-Zusammenfall beherrschen](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing).

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

- [Einführung in das grundlegende CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Rand-Zusammenfall](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, und {{cssxref("margin-left")}}
- Die zugeordneten logischen Eigenschaften: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, und {{cssxref("margin-inline-end")}} sowie die Kurzschreibweisen {{cssxref("margin-block")}} und {{cssxref("margin-inline")}}
