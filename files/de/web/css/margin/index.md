---
title: Rand
slug: Web/CSS/margin
l10n:
  sourceCommit: 7016e373522264e7e7c19d854df595c981120616
---

{{CSSRef}}

Die **`margin`** [CSS](/de/docs/Web/CSS) Kurzschreibweise setzt den [Randbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) auf allen vier Seiten eines Elements.

{{EmbedInteractiveExample("pages/css/margin.html")}}

## Zughörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("margin-top")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}

## Syntax

```css
/* Auf alle vier Seiten anwenden */
margin: 1em;
margin: -3px;

/* oben und unten | links und rechts */
margin: 5% auto;

/* oben | links und rechts | unten */
margin: 1em auto 2em;

/* oben | rechts | unten | links */
margin: 2px 1em 0 auto;

/* Globale Werte */
margin: inherit;
margin: initial;
margin: revert;
margin: revert-layer;
margin: unset;
```

Die `margin` Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden. Jeder Wert ist entweder ein {{cssxref("&lt;length&gt;")}}, ein {{cssxref("&lt;percentage&gt;")}} oder das Schlüsselwort `auto`. Negative Werte ziehen das Element näher an seine Nachbarn heran, als es standardmäßig der Fall wäre.

- Wird **ein** Wert angegeben, gilt der gleiche Rand für **alle vier Seiten**.
- Werden **zwei** Werte angegeben, gilt der erste Rand für **oben und unten**, der zweite für **links und rechts**.
- Werden **drei** Werte angegeben, gilt der erste Rand für **oben**, der zweite für **rechts und links**, der dritte für **unten**.
- Werden **vier** Werte angegeben, gelten die Ränder für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- {{cssxref("length")}}
  - : Die Größe des Randes als fester Wert.
- {{cssxref("percentage")}}
  - : Die Größe des Randes als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umschließenden Blocks](/de/docs/Web/CSS/Containing_block).
- `auto`
  - : Der Browser wählt einen geeigneten Rand aus. Zum Beispiel kann dieser Wert in bestimmten Fällen verwendet werden, um ein Element zu zentrieren.

## Beschreibung

Diese Eigenschaft kann verwendet werden, um einen Rand auf allen vier Seiten eines Elements zu setzen. Ränder schaffen zusätzlichen Raum _um_ ein Element herum, im Gegensatz zu {{cssxref("padding")}}, das zusätzlichen Raum _innerhalb_ eines Elements schafft.

Die oberen und unteren Ränder haben keinen Effekt auf _nicht-[ersetzte](/de/docs/Web/CSS/Replaced_element)_ Inline-Elemente, wie {{HTMLElement("span")}} oder {{HTMLElement("code")}}.

### Horizontale Zentrierung

Sie können ein Element innerhalb seines übergeordneten Elements horizontal zentrieren, indem Sie `margin: 0 auto;` setzen.

Eine häufigere Methode, ein Element horizontal zu zentrieren, besteht darin, `display: flex;` und [`justify-content: center;`](/de/docs/Web/CSS/justify-content) auf einem Container zu setzen, der [seine Flex-Item-Kinder zentriert](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container).

### Margin-Kollaps

Die oberen und unteren Ränder von Elementen werden manchmal zu einem einzigen Rand zusammengefasst, der dem größeren der beiden Ränder entspricht. Siehe [Meistern von Margin-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) für weitere Informationen.

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
margin: 5%; /* Alle Seiten: 5% Rand */

margin: 10px; /* Alle Seiten: 10px Rand */

margin: 1.6em 20px; /* oben und unten: 1.6em Rand */
/* links und rechts: 20px Rand */

margin: 10px 3% -1em; /* oben:          10px Rand */
/* links und rechts: 3% Rand */
/* unten:          -1em Rand */

margin: 10px 3px 30px 5px; /* oben:   10px Rand */
/* rechts:  3px Rand */
/* unten:  30px Rand */
/* links:  5px Rand */

margin: 2em auto; /* oben und unten: 2em Rand */
/* Box ist horizontal zentriert */

margin: auto; /* oben und unten: 0 Rand */
/* Box ist horizontal zentriert */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in das CSS-Grundlegende Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Margin-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, und {{cssxref("margin-left")}}
- Die zugehörigen logischen Eigenschaften: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, und {{cssxref("margin-inline-end")}} sowie die Kurzschreibweisen {{cssxref("margin-block")}} und {{cssxref("margin-inline")}}
